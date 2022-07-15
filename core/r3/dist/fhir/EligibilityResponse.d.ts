import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
/**
 * Valid arguments for the EligibilityResponseInsuranceBenefitBalanceFinancial type.
 */
export interface EligibilityResponseInsuranceBenefitBalanceFinancialArgs extends fhir.BackboneElementArgs {
    /**
     * Deductable, visits, benefit amount.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Benefits allowed.
     */
    allowed?: fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money | undefined;
    /**
     * Benefits allowed.
     */
    allowedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Benefits allowed.
     */
    allowedString?: fhir.FhirString | string | undefined;
    /**
     * Benefits allowed.
     */
    allowedMoney?: fhir.MoneyArgs | undefined;
    /**
     * Benefits used.
     */
    used?: fhir.FhirUnsignedInt | fhir.Money | undefined;
    /**
     * Benefits used.
     */
    usedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Benefits used.
     */
    usedMoney?: fhir.MoneyArgs | undefined;
}
/**
 * Benefits Used to date.
 */
export declare class EligibilityResponseInsuranceBenefitBalanceFinancial extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Deductable, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Benefits allowed.
     */
    allowed?: (fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money) | undefined;
    /**
     * Internal flag to properly serialize choice-type element EligibilityResponse.insurance.benefitBalance.financial.allowed[x]
     */
    protected static readonly _fts_allowedIsChoice: true;
    /**
     * Benefits used.
     */
    used?: (fhir.FhirUnsignedInt | fhir.Money) | undefined;
    /**
     * Internal flag to properly serialize choice-type element EligibilityResponse.insurance.benefitBalance.financial.used[x]
     */
    protected static readonly _fts_usedIsChoice: true;
    /**
     * Default constructor for EligibilityResponseInsuranceBenefitBalanceFinancial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EligibilityResponseInsuranceBenefitBalanceFinancialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EligibilityResponseInsuranceBenefitBalance type.
 */
export interface EligibilityResponseInsuranceBenefitBalanceArgs extends fhir.BackboneElementArgs {
    /**
     * Dental, Vision, Medical, Pharmacy, Rehab etc.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
     */
    subCategory?: fhir.CodeableConceptArgs | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.
     */
    excluded?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.excluded
     */
    _excluded?: fhir.FhirElementArgs;
    /**
     * A short name or tag for the benefit, for example MED01, or DENT2.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.insurance.benefitBalance.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Network designation.
     */
    network?: fhir.CodeableConceptArgs | undefined;
    /**
     * Unit designation: individual or family.
     */
    unit?: fhir.CodeableConceptArgs | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual vistis'.
     */
    term?: fhir.CodeableConceptArgs | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhir.EligibilityResponseInsuranceBenefitBalanceFinancialArgs[] | undefined;
}
/**
 * Benefits and optionally current balances by Category.
 */
export declare class EligibilityResponseInsuranceBenefitBalance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Dental, Vision, Medical, Pharmacy, Rehab etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
     */
    subCategory?: fhir.CodeableConcept | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.
     */
    excluded?: fhir.FhirBoolean | undefined;
    /**
     * A short name or tag for the benefit, for example MED01, or DENT2.
     */
    name?: fhir.FhirString | undefined;
    /**
     * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Network designation.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * Unit designation: individual or family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual vistis'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Benefits Used to date.
     */
    financial: fhir.EligibilityResponseInsuranceBenefitBalanceFinancial[];
    /**
     * Default constructor for EligibilityResponseInsuranceBenefitBalance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EligibilityResponseInsuranceBenefitBalanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EligibilityResponseInsurance type.
 */
export interface EligibilityResponseInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * A suite of updated or additional Coverages from the Insurer.
     */
    coverage?: fhir.ReferenceArgs | undefined;
    /**
     * The contract resource which may provide more detailed information.
     */
    contract?: fhir.ReferenceArgs | undefined;
    /**
     * Benefits and optionally current balances by Category.
     */
    benefitBalance?: fhir.EligibilityResponseInsuranceBenefitBalanceArgs[] | undefined;
}
/**
 * The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.
 */
export declare class EligibilityResponseInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A suite of updated or additional Coverages from the Insurer.
     */
    coverage?: fhir.Reference | undefined;
    /**
     * The contract resource which may provide more detailed information.
     */
    contract?: fhir.Reference | undefined;
    /**
     * Benefits and optionally current balances by Category.
     */
    benefitBalance: fhir.EligibilityResponseInsuranceBenefitBalance[];
    /**
     * Default constructor for EligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EligibilityResponseInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EligibilityResponseError type.
 */
export interface EligibilityResponseErrorArgs extends fhir.BackboneElementArgs {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConceptArgs | null;
}
/**
 * Mutually exclusive with Services Provided (Item).
 */
export declare class EligibilityResponseError extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Default constructor for EligibilityResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EligibilityResponseErrorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the EligibilityResponse type.
 */
export interface EligibilityResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityResponse" | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * The Insurer who produced this adjudicated response.
     */
    insurer?: fhir.ReferenceArgs | undefined;
    /**
     * Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.inforce
     */
    _inforce?: fhir.FhirElementArgs;
    /**
     * The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.
     */
    insurance?: fhir.EligibilityResponseInsuranceArgs[] | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * Mutually exclusive with Services Provided (Item).
     */
    error?: fhir.EligibilityResponseErrorArgs[] | undefined;
}
/**
 * This resource provides eligibility and plan details from the processing of an Eligibility resource.
 */
export declare class EligibilityResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityResponse";
    /**
     * The Response business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.Reference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: fhir.FhirBoolean | undefined;
    /**
     * The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.
     */
    insurance: fhir.EligibilityResponseInsurance[];
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Mutually exclusive with Services Provided (Item).
     */
    error: fhir.EligibilityResponseError[];
    /**
     * Default constructor for EligibilityResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EligibilityResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=EligibilityResponse.d.ts.map