import * as fhir from '../fhirJson.js';
/**
 * Typically this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdicational business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdicational extension may be defined to specify the order for the type of charge.
 */
export interface AccountCoverage extends fhir.BackboneElement {
    /**
     * The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).
     * A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
     */
    coverage: fhir.Reference | null;
    /**
     * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
     */
    priority?: number | undefined;
    /**
     * Extended properties for primitive element: Account.coverage.priority
     */
    _priority?: fhir.FhirElement;
}
/**
 * Parties financially responsible for the account.
 */
export interface AccountGuarantor extends fhir.BackboneElement {
    /**
     * The entity who is responsible.
     */
    party: fhir.Reference | null;
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
     */
    onHold?: boolean | undefined;
    /**
     * Extended properties for primitive element: Account.guarantor.onHold
     */
    _onHold?: fhir.FhirElement;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: fhir.Period | undefined;
}
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
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
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
     */
    status?: 'active' | 'entered-in-error' | 'inactive' | undefined;
    /**
     * Extended properties for primitive element: Account.status
     */
    _status?: fhir.FhirElement;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Account.name
     */
    _name?: fhir.FhirElement;
    /**
     * Accounts can be applied to non patients for tracking other non patient related activities, such as group services (patients not tracked, and costs charged to another body), or may not be allocated.
     */
    subject?: fhir.Reference | undefined;
    /**
     * It is possible for transactions relevant to a coverage period to be posted to the account before or after the coverage period, however the services that are being charged for must be within this period.
     */
    period?: fhir.Period | undefined;
    /**
     * Indicates the period of time over which the account is allowed to have transactions posted to it.
     * This period may be different to the coveragePeriod which is the duration of time that services may occur.
     */
    active?: fhir.Period | undefined;
    /**
     * Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
     */
    balance?: fhir.Money | undefined;
    /**
     * Typically this may be some form of insurance, internal charges, or self-pay.
     * Local or jurisdicational business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
     * Where the order is important, a local/jurisdicational extension may be defined to specify the order for the type of charge.
     */
    coverage?: (fhir.AccountCoverage | null)[] | undefined;
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
    /**
     * Parties financially responsible for the account.
     */
    guarantor?: (fhir.AccountGuarantor | null)[] | undefined;
}
//# sourceMappingURL=Account.d.ts.map