// Code generated by go-swagger; DO NOT EDIT.

package recurring_run_service

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	recurring_run_model "github.com/kubeflow/pipelines/backend/api/v2beta1/go_http_client/recurring_run_model"
)

// CreateRecurringRunReader is a Reader for the CreateRecurringRun structure.
type CreateRecurringRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateRecurringRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {

	case 200:
		result := NewCreateRecurringRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewCreateRecurringRunOK creates a CreateRecurringRunOK with default headers values
func NewCreateRecurringRunOK() *CreateRecurringRunOK {
	return &CreateRecurringRunOK{}
}

/*CreateRecurringRunOK handles this case with default header values.

A successful response.
*/
type CreateRecurringRunOK struct {
	Payload *recurring_run_model.V2beta1RecurringRun
}

func (o *CreateRecurringRunOK) Error() string {
	return fmt.Sprintf("[POST /apis/v2beta1/recurringruns][%d] createRecurringRunOK  %+v", 200, o.Payload)
}

func (o *CreateRecurringRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(recurring_run_model.V2beta1RecurringRun)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
