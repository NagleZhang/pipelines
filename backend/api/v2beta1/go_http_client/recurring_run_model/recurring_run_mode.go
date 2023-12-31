// Code generated by go-swagger; DO NOT EDIT.

package recurring_run_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"encoding/json"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/validate"
)

// RecurringRunMode Required input.
// User setting to enable or disable the recurring run.
// Only used for creation of recurring runs. Later updates use enable/disable API.
//
//  - DISABLE: The recurring run won't schedule any run if disabled.
// swagger:model RecurringRunMode
type RecurringRunMode string

const (

	// RecurringRunModeMODEUNSPECIFIED captures enum value "MODE_UNSPECIFIED"
	RecurringRunModeMODEUNSPECIFIED RecurringRunMode = "MODE_UNSPECIFIED"

	// RecurringRunModeENABLE captures enum value "ENABLE"
	RecurringRunModeENABLE RecurringRunMode = "ENABLE"

	// RecurringRunModeDISABLE captures enum value "DISABLE"
	RecurringRunModeDISABLE RecurringRunMode = "DISABLE"
)

// for schema
var recurringRunModeEnum []interface{}

func init() {
	var res []RecurringRunMode
	if err := json.Unmarshal([]byte(`["MODE_UNSPECIFIED","ENABLE","DISABLE"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		recurringRunModeEnum = append(recurringRunModeEnum, v)
	}
}

func (m RecurringRunMode) validateRecurringRunModeEnum(path, location string, value RecurringRunMode) error {
	if err := validate.Enum(path, location, value, recurringRunModeEnum); err != nil {
		return err
	}
	return nil
}

// Validate validates this recurring run mode
func (m RecurringRunMode) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateRecurringRunModeEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
