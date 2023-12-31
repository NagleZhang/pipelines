# Copyright 2019 The Kubeflow Authors
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

# Pin to a specific version of invert proxy agent
FROM gcr.io/inverting-proxy/agent@sha256:694d6c1bf299585b530c923c3728cd2c45083f3b396ec83ff799cef1c9dc7474

# We need --allow-releaseinfo-change, because of https://github.com/kubeflow/pipelines/issues/6311#issuecomment-899224137.
RUN apt update --allow-releaseinfo-change && apt-get install -y curl jq python3-pip
COPY requirements.txt .
RUN python3 -m pip install -r \
    requirements.txt --quiet --no-cache-dir \
    && rm -f requirements.txt

# Install gcloud SDK
RUN curl https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz > /tmp/google-cloud-sdk.tar.gz
RUN mkdir -p /usr/local/gcloud
RUN tar -C /usr/local/gcloud -xf /tmp/google-cloud-sdk.tar.gz
RUN /usr/local/gcloud/google-cloud-sdk/install.sh
ENV PATH $PATH:/usr/local/gcloud/google-cloud-sdk/bin

# Install kubectl
RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
RUN chmod +x ./kubectl
RUN mv kubectl /usr/local/bin/

ADD ./ /opt/proxy

CMD ["/bin/sh", "-c", "/opt/proxy/attempt-register-vm-on-proxy.sh"]
