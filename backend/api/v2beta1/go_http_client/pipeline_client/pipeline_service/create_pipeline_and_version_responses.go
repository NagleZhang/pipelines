// Code generated by go-swagger; DO NOT EDIT.

package pipeline_service

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	pipeline_model "github.com/kubeflow/pipelines/backend/api/v2beta1/go_http_client/pipeline_model"
)

// CreatePipelineAndVersionReader is a Reader for the CreatePipelineAndVersion structure.
type CreatePipelineAndVersionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreatePipelineAndVersionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {

	case 200:
		result := NewCreatePipelineAndVersionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil

	default:
		result := NewCreatePipelineAndVersionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreatePipelineAndVersionOK creates a CreatePipelineAndVersionOK with default headers values
func NewCreatePipelineAndVersionOK() *CreatePipelineAndVersionOK {
	return &CreatePipelineAndVersionOK{}
}

/*CreatePipelineAndVersionOK handles this case with default header values.

A successful response.
*/
type CreatePipelineAndVersionOK struct {
	Payload *pipeline_model.V2beta1Pipeline
}

func (o *CreatePipelineAndVersionOK) Error() string {
	return fmt.Sprintf("[POST /apis/v2beta1/pipelines/create][%d] createPipelineAndVersionOK  %+v", 200, o.Payload)
}

func (o *CreatePipelineAndVersionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(pipeline_model.V2beta1Pipeline)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreatePipelineAndVersionDefault creates a CreatePipelineAndVersionDefault with default headers values
func NewCreatePipelineAndVersionDefault(code int) *CreatePipelineAndVersionDefault {
	return &CreatePipelineAndVersionDefault{
		_statusCode: code,
	}
}

/*CreatePipelineAndVersionDefault handles this case with default header values.

CreatePipelineAndVersionDefault create pipeline and version default
*/
type CreatePipelineAndVersionDefault struct {
	_statusCode int

	Payload *pipeline_model.GooglerpcStatus
}

// Code gets the status code for the create pipeline and version default response
func (o *CreatePipelineAndVersionDefault) Code() int {
	return o._statusCode
}

func (o *CreatePipelineAndVersionDefault) Error() string {
	return fmt.Sprintf("[POST /apis/v2beta1/pipelines/create][%d] CreatePipelineAndVersion default  %+v", o._statusCode, o.Payload)
}

func (o *CreatePipelineAndVersionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(pipeline_model.GooglerpcStatus)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
