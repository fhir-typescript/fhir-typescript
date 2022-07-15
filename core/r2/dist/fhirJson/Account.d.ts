import * as fhir from '../fhirJson.js';
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centres, etc.
 */
export interface Account extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Account" | null;
    /**
     * Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Account.name
     */
    _name?: fhir.FhirElement;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Indicates whether the account is presently used/useable or not.
     */
    status?: string | undefined;
    /**
     * Extended properties for primitive element: Account.status
     */
    _status?: fhir.FhirElement;
    /**
     * Indicates the period of time over which the account is allowed.
     */
    activePeriod?: fhir.Period | undefined;
    /**
     * Identifies the currency to which transactions must be converted when crediting or debiting the account.
     */
    currency?: fhir.Coding | undefined;
    /**
     * Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
     */
    balance?: fhir.Quantity | undefined;
    /**
     * Identifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc.
     */
    coveragePeriod?: fhir.Period | undefined;
    /**
     * Identifies the patient, device, practitioner, location or other object the account is associated with.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Indicates the organization, department, etc. with responsibility for the account.
     */
    owner?: fhir.Reference | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Account.description
     */
    _description?: fhir.FhirElement;
}
//# sourceMappingURL=Account.d.ts.map