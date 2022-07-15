import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Account type.
 */
export interface AccountArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Account" | undefined;
    /**
     * Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Account.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates whether the account is presently used/useable or not.
     */
    status?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Account.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Indicates the period of time over which the account is allowed.
     */
    activePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Identifies the currency to which transactions must be converted when crediting or debiting the account.
     */
    currency?: fhir.CodingArgs | undefined;
    /**
     * Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
     */
    balance?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc.
     */
    coveragePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Identifies the patient, device, practitioner, location or other object the account is associated with.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates the organization, department, etc. with responsibility for the account.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Account.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centres, etc.
 */
export declare class Account extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Account";
    /**
     * Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).
     */
    identifier: fhir.Identifier[];
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Indicates whether the account is presently used/useable or not.
     */
    status?: fhir.FhirCode | undefined;
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
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for Account - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AccountArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Account.d.ts.map