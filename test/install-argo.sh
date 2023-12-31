#!/bin/bash
#
# Copyright 2018 The Kubeflow Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -ex

ENABLE_WORKLOAD_IDENTITY=${ENABLE_WORKLOAD_IDENTITY:-false}

# Tests work without these lines. TODO: Verify and remove these lines
kubectl config set-context $(kubectl config current-context) --namespace=default
echo "Add necessary cluster role bindings"
ACCOUNT=$(gcloud info --format='value(config.account)')
kubectl create clusterrolebinding PROW_BINDING --clusterrole=cluster-admin --user=$ACCOUNT --dry-run=client -o yaml | kubectl apply -f -
kubectl create clusterrolebinding DEFAULT_BINDING --clusterrole=cluster-admin --serviceaccount=default:default --dry-run=client -o yaml | kubectl apply -f -

"${DIR}/install-argo-cli.sh"

ARGO_KSA="test-runner"

# Some workflows are deployed to the non-default namespace where the GCP credential secret is stored
# In this case, the default service account in that namespace doesn't have enough permission
echo "add service account for running the test workflow"
kubectl create serviceaccount ${ARGO_KSA} -n ${NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -
kubectl create clusterrolebinding test-admin-binding --clusterrole=cluster-admin --serviceaccount=${NAMESPACE}:${ARGO_KSA} --dry-run=client -o yaml | kubectl apply -f -

if [ "$ENABLE_WORKLOAD_IDENTITY" = true ]; then
  ARGO_GSA="test-argo"
  # Util library including create_gsa_if_not_present and bind_gsa_and_ksa functions.
  source "$DIR/../manifests/kustomize/wi-utils.sh"
  create_gsa_if_not_present $ARGO_GSA

  source "${DIR}/scripts/retry.sh"
  retry gcloud projects add-iam-policy-binding $PROJECT \
    --member="serviceAccount:$ARGO_GSA@$PROJECT.iam.gserviceaccount.com" \
    --role="roles/editor" \
    > /dev/null # hide verbose output
  retry bind_gsa_and_ksa $ARGO_GSA $ARGO_KSA $PROJECT $NAMESPACE

  # TODO(Bobgy): re-enable this after temporary flakiness is resolved.
  # verify_workload_identity_binding $ARGO_KSA $NAMESPACE
fi
