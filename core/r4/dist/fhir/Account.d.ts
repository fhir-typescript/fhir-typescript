import * as fhir from '../fhir.js';
import { AccountStatusCodeType } from '../fhirValueSets/AccountStatusCodes.js';
/**
 * Valid arguments for the AccountCoverage type.
 */
export interface AccountCoverageArgs extends fhir.BackboneElementArgs {
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
     * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
     */
    priority?: fhir.FhirPositiveInt | number | undefined;
}
/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export declare class AccountCoverage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
     * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
     */
    coverage: fhir.Reference | null;
    /**
     * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
     */
    priority?: fhir.FhirPositiveInt | undefined;
    /**
     * Default constructor for AccountCoverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AccountCoverageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AccountGuarantor type.
 */
export interface AccountGuarantorArgs extends fhir.BackboneElementArgs {
    /**
     * The entity who is responsible.
     */
    party: fhir.ReferenceArgs | null;
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
     */
    onHold?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export declare class AccountGuarantor extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The entity who is responsible.
     */
    party: fhir.Reference | null;
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
     */
    onHold?: fhir.FhirBoolean | undefined;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for AccountGuarantor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AccountGuarantorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Account type.
 */
export interface AccountArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Account" | undefined;
    /**
     * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
     */
    status: fhir.FhirCode<AccountStatusCodeType> | string | undefined;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
     */
    servicePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Typically. this may be some form of insurance, internal charges, or self-pay.
     * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
     * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
     */
    coverage?: fhir.AccountCoverageArgs[] | undefined;
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor?: fhir.AccountGuarantorArgs[] | undefined;
    /**
     * Reference to a parent Account.
     */
    partOf?: fhir.ReferenceArgs | undefined;
}
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
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
     * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
     */
    status: fhir.FhirCode<AccountStatusCodeType> | null;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
     */
    subject: fhir.Reference[];
    /**
     * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
     */
    servicePeriod?: fhir.Period | undefined;
    /**
     * Typically. this may be some form of insurance, internal charges, or self-pay.
     * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
     * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
     */
    coverage: fhir.AccountCoverage[];
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
     */
    owner?: fhir.Reference | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor: fhir.AccountGuarantor[];
    /**
     * Reference to a parent Account.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Default constructor for Account - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AccountArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Account.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly EnteredInError: "entered-in-error";
        readonly Inactive: "inactive";
        readonly OnHold: "on-hold";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Account.d.ts.map