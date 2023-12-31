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
"""Pipeline using ExitHandler."""

import os

from kfp import compiler
from kfp import dsl
from kfp.dsl import component


@component
def print_op(message: str):
    """Prints a message."""
    print(message)


@component
def fail_op(message: str):
    """Fails."""
    import sys
    print(message)
    sys.exit(1)


@dsl.pipeline(name='pipeline-with-exit-handler')
def pipeline_exit_handler(message: str = 'Hello World!'):

    exit_task = print_op(message='Exit handler has worked!')

    with dsl.ExitHandler(exit_task):
        print_op(message=message)
        fail_op(message='Task failed.')


if __name__ == '__main__':
    compiler.Compiler().compile(
        pipeline_func=pipeline_exit_handler, package_path=__file__ + '.yaml')
