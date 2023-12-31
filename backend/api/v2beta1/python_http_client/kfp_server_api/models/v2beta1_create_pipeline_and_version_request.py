# coding: utf-8

"""
    Kubeflow Pipelines API

    This file contains REST API specification for Kubeflow Pipelines. The file is autogenerated from the swagger definition.

    Contact: kubeflow-pipelines@google.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from kfp_server_api.configuration import Configuration


class V2beta1CreatePipelineAndVersionRequest(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'pipeline': 'V2beta1Pipeline',
        'pipeline_version': 'V2beta1PipelineVersion'
    }

    attribute_map = {
        'pipeline': 'pipeline',
        'pipeline_version': 'pipeline_version'
    }

    def __init__(self, pipeline=None, pipeline_version=None, local_vars_configuration=None):  # noqa: E501
        """V2beta1CreatePipelineAndVersionRequest - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._pipeline = None
        self._pipeline_version = None
        self.discriminator = None

        if pipeline is not None:
            self.pipeline = pipeline
        if pipeline_version is not None:
            self.pipeline_version = pipeline_version

    @property
    def pipeline(self):
        """Gets the pipeline of this V2beta1CreatePipelineAndVersionRequest.  # noqa: E501


        :return: The pipeline of this V2beta1CreatePipelineAndVersionRequest.  # noqa: E501
        :rtype: V2beta1Pipeline
        """
        return self._pipeline

    @pipeline.setter
    def pipeline(self, pipeline):
        """Sets the pipeline of this V2beta1CreatePipelineAndVersionRequest.


        :param pipeline: The pipeline of this V2beta1CreatePipelineAndVersionRequest.  # noqa: E501
        :type pipeline: V2beta1Pipeline
        """

        self._pipeline = pipeline

    @property
    def pipeline_version(self):
        """Gets the pipeline_version of this V2beta1CreatePipelineAndVersionRequest.  # noqa: E501


        :return: The pipeline_version of this V2beta1CreatePipelineAndVersionRequest.  # noqa: E501
        :rtype: V2beta1PipelineVersion
        """
        return self._pipeline_version

    @pipeline_version.setter
    def pipeline_version(self, pipeline_version):
        """Sets the pipeline_version of this V2beta1CreatePipelineAndVersionRequest.


        :param pipeline_version: The pipeline_version of this V2beta1CreatePipelineAndVersionRequest.  # noqa: E501
        :type pipeline_version: V2beta1PipelineVersion
        """

        self._pipeline_version = pipeline_version

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V2beta1CreatePipelineAndVersionRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V2beta1CreatePipelineAndVersionRequest):
            return True

        return self.to_dict() != other.to_dict()
