// Code generated by go-swagger; DO NOT EDIT.

package experiment_service

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"

	strfmt "github.com/go-openapi/strfmt"
)

// NewGetExperimentParams creates a new GetExperimentParams object
// with the default values initialized.
func NewGetExperimentParams() *GetExperimentParams {
	var ()
	return &GetExperimentParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewGetExperimentParamsWithTimeout creates a new GetExperimentParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewGetExperimentParamsWithTimeout(timeout time.Duration) *GetExperimentParams {
	var ()
	return &GetExperimentParams{

		timeout: timeout,
	}
}

// NewGetExperimentParamsWithContext creates a new GetExperimentParams object
// with the default values initialized, and the ability to set a context for a request
func NewGetExperimentParamsWithContext(ctx context.Context) *GetExperimentParams {
	var ()
	return &GetExperimentParams{

		Context: ctx,
	}
}

// NewGetExperimentParamsWithHTTPClient creates a new GetExperimentParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewGetExperimentParamsWithHTTPClient(client *http.Client) *GetExperimentParams {
	var ()
	return &GetExperimentParams{
		HTTPClient: client,
	}
}

/*GetExperimentParams contains all the parameters to send to the API endpoint
for the get experiment operation typically these are written to a http.Request
*/
type GetExperimentParams struct {

	/*ExperimentID
	  The ID of the experiment to be retrieved.

	*/
	ExperimentID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the get experiment params
func (o *GetExperimentParams) WithTimeout(timeout time.Duration) *GetExperimentParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get experiment params
func (o *GetExperimentParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get experiment params
func (o *GetExperimentParams) WithContext(ctx context.Context) *GetExperimentParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get experiment params
func (o *GetExperimentParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get experiment params
func (o *GetExperimentParams) WithHTTPClient(client *http.Client) *GetExperimentParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get experiment params
func (o *GetExperimentParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithExperimentID adds the experimentID to the get experiment params
func (o *GetExperimentParams) WithExperimentID(experimentID string) *GetExperimentParams {
	o.SetExperimentID(experimentID)
	return o
}

// SetExperimentID adds the experimentId to the get experiment params
func (o *GetExperimentParams) SetExperimentID(experimentID string) {
	o.ExperimentID = experimentID
}

// WriteToRequest writes these params to a swagger request
func (o *GetExperimentParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param experiment_id
	if err := r.SetPathParam("experiment_id", o.ExperimentID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
