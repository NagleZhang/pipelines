#!/usr/bin/env python3
# Copyright 2019-2023 The Kubeflow Authors
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


from kfp import compiler
from kfp import dsl


@dsl.component
def echo1_op(text1: str):
  print(text1)


@dsl.component
def echo2_op(text2: str):
  print(text2)


@dsl.pipeline(
  name='execution-order-pipeline',
  description='A pipeline to demonstrate execution order management.'
)
def execution_order_pipeline(text1: str='message 1', text2: str='message 2'):
  """A two step pipeline with an explicitly defined execution order."""
  step1_task = echo1_op(text1=text1)
  step2_task = echo2_op(text2=text2)
  step2_task.after(step1_task)

if __name__ == '__main__':
  compiler.Compiler().compile(execution_order_pipeline, __file__ + '.yaml')
