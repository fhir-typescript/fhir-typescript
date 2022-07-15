import * as fhir from '../fhir.js';
import { ExplanationofbenefitStatusCodeType } from '../fhirValueSets/ExplanationofbenefitStatusCodes.js';
/**
 * Valid arguments for the ExplanationOfBenefitRelated type.
 */
export interface ExplanationOfBenefitRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * Do we need a relationship code?
     */
    claim?: fhir.ReferenceArgs | undefined;
    /**
     * For example prior or umbrella.
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.IdentifierArgs | undefined;
}
/**
 * Other claims which are related to this claim such as prior claim versions or for related services.
 */
export declare class ExplanationOfBenefitRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Do we need a relationship code?
     */
    claim?: fhir.Reference | undefined;
    /**
     * For example prior or umbrella.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.Identifier | undefined;
    /**
     * Default constructor for ExplanationOfBenefitRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitPayee type.
 */
export interface ExplanationOfBenefitPayeeArgs extends fhir.BackboneElementArgs {
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * organization | patient | practitioner | relatedperson.
     */
    resourceType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    party?: fhir.ReferenceArgs | undefined;
}
/**
 * The party to be reimbursed for the services.
 */
export declare class ExplanationOfBenefitPayee extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * organization | patient | practitioner | relatedperson.
     */
    resourceType?: fhir.CodeableConcept | undefined;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitPayeeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitInformation type.
 */
export interface ExplanationOfBenefitInformationArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of the information element which serves to provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.information.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timing?: fhir.FhirDate | fhir.Period | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: fhir.FhirDate | string | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    value?: fhir.FhirString | fhir.Quantity | fhir.Attachment | fhir.Reference | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.
     */
    reason?: fhir.CodingArgs | undefined;
}
/**
 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
 */
export declare class ExplanationOfBenefitInformation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Sequence of the information element which serves to provide a link.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    category: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timing?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.information.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    value?: (fhir.FhirString | fhir.Quantity | fhir.Attachment | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.information.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.
     */
    reason?: fhir.Coding | undefined;
    /**
     * Default constructor for ExplanationOfBenefitInformation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitInformationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitCareTeam type.
 */
export interface ExplanationOfBenefitCareTeamArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of careteam which serves to order and provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The members of the team who provided the overall service.
     */
    provider: fhir.ReferenceArgs | null;
    /**
     * The practitioner who is billing and responsible for the claimed services rendered to the patient.
     */
    responsible?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.responsible
     */
    _responsible?: fhir.FhirElementArgs;
    /**
     * The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * The qualification which is applicable for this service.
     */
    qualification?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
 */
export declare class ExplanationOfBenefitCareTeam extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Sequence of careteam which serves to order and provide a link.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The members of the team who provided the overall service.
     */
    provider: fhir.Reference | null;
    /**
     * The practitioner who is billing and responsible for the claimed services rendered to the patient.
     */
    responsible?: fhir.FhirBoolean | undefined;
    /**
     * The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The qualification which is applicable for this service.
     */
    qualification?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitCareTeamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitDiagnosis type.
 */
export interface ExplanationOfBenefitDiagnosisArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of diagnosis which serves to provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.diagnosis.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The diagnosis.
     */
    diagnosis?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The diagnosis.
     */
    diagnosisCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The diagnosis.
     */
    diagnosisReference?: fhir.ReferenceArgs | undefined;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The package billing code, for example DRG, based on the assigned grouping code system.
     */
    packageCode?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Ordered list of patient diagnosis for which care is sought.
 */
export declare class ExplanationOfBenefitDiagnosis extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Sequence of diagnosis which serves to provide a link.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The diagnosis.
     */
    diagnosis: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.diagnosis.diagnosis[x]
     */
    protected static readonly _fts_diagnosisIsChoice: true;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    type: fhir.CodeableConcept[];
    /**
     * The package billing code, for example DRG, based on the assigned grouping code system.
     */
    packageCode?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitProcedure type.
 */
export interface ExplanationOfBenefitProcedureArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of procedures which serves to order and provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * SB DateTime??
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * The procedure code.
     */
    procedure?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The procedure code.
     */
    procedureCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The procedure code.
     */
    procedureReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Ordered list of patient procedures performed to support the adjudication.
 */
export declare class ExplanationOfBenefitProcedure extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Sequence of procedures which serves to order and provide a link.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * SB DateTime??
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * The procedure code.
     */
    procedure: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.procedure.procedure[x]
     */
    protected static readonly _fts_procedureIsChoice: true;
    /**
     * Default constructor for ExplanationOfBenefitProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitProcedureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitInsurance type.
 */
export interface ExplanationOfBenefitInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.ReferenceArgs | undefined;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElementArgs | null)[];
}
/**
 * Financial instrument by which payment information for health care.
 */
export declare class ExplanationOfBenefitInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.Reference | undefined;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef: fhir.FhirString[];
    /**
     * Default constructor for ExplanationOfBenefitInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitAccident type.
 */
export interface ExplanationOfBenefitAccidentArgs extends fhir.BackboneElementArgs {
    /**
     * Date of an accident which these services are addressing.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.accident.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Type of accident: work, auto, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Where the accident occurred.
     */
    location?: fhir.Address | fhir.Reference | undefined;
    /**
     * Where the accident occurred.
     */
    locationAddress?: fhir.AddressArgs | undefined;
    /**
     * Where the accident occurred.
     */
    locationReference?: fhir.ReferenceArgs | undefined;
}
/**
 * An accident which resulted in the need for healthcare services.
 */
export declare class ExplanationOfBenefitAccident extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Date of an accident which these services are addressing.
     */
    date?: fhir.FhirDate | undefined;
    /**
     * Type of accident: work, auto, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Where the accident occurred.
     */
    location?: (fhir.Address | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.accident.location[x]
     */
    protected static readonly _fts_locationIsChoice: true;
    /**
     * Default constructor for ExplanationOfBenefitAccident - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitAccidentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitItemAdjudication type.
 */
export interface ExplanationOfBenefitItemAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * Adjudication reason such as limit reached.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Monitory amount associated with the code.
     */
    amount?: fhir.MoneyArgs | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.adjudication.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * The adjudications results.
 */
export declare class ExplanationOfBenefitItemAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Adjudication reason such as limit reached.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Monitory amount associated with the code.
     */
    amount?: fhir.Money | undefined;
    /**
     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitItemDetailSubDetail type.
 */
export interface ExplanationOfBenefitItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * The type of product or service.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * The fee for an addittional service or product or charge.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.ReferenceArgs[] | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
}
/**
 * Third tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The type of product or service.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode: fhir.CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The fee for an addittional service or product or charge.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi: fhir.Reference[];
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Default constructor for ExplanationOfBenefitItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitItemDetail type.
 */
export interface ExplanationOfBenefitItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * ItemType.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.ReferenceArgs[] | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * Third tier of goods and services.
     */
    subDetail?: fhir.ExplanationOfBenefitItemDetailSubDetailArgs[] | undefined;
}
/**
 * Second tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * ItemType.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode: fhir.CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi: fhir.Reference[];
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Third tier of goods and services.
     */
    subDetail: fhir.ExplanationOfBenefitItemDetailSubDetail[];
    /**
     * Default constructor for ExplanationOfBenefitItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitItem type.
 */
export interface ExplanationOfBenefitItemArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * Careteam applicable for this service or product line.
     */
    careTeamLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.careTeamLinkId
     */
    _careTeamLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.diagnosisLinkId
     */
    _diagnosisLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * Procedures applicable for this service or product line.
     */
    procedureLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.procedureLinkId
     */
    _procedureLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * Exceptions, special conditions and supporting information pplicable for this service or product line.
     */
    informationLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.informationLinkId
     */
    _informationLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    serviced?: fhir.FhirDate | fhir.Period | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Where the service was provided.
     */
    location?: fhir.CodeableConcept | fhir.Address | fhir.Reference | undefined;
    /**
     * Where the service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Where the service was provided.
     */
    locationAddress?: fhir.AddressArgs | undefined;
    /**
     * Where the service was provided.
     */
    locationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.ReferenceArgs[] | undefined;
    /**
     * Physical service site on the patient (limb, tooth, etc).
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * A region or surface of the site, eg. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.ReferenceArgs[] | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * Second tier of goods and services.
     */
    detail?: fhir.ExplanationOfBenefitItemDetailArgs[] | undefined;
}
/**
 * First tier of goods and services.
 */
export declare class ExplanationOfBenefitItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * Careteam applicable for this service or product line.
     */
    careTeamLinkId: fhir.FhirPositiveInt[];
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId: fhir.FhirPositiveInt[];
    /**
     * Procedures applicable for this service or product line.
     */
    procedureLinkId: fhir.FhirPositiveInt[];
    /**
     * Exceptions, special conditions and supporting information pplicable for this service or product line.
     */
    informationLinkId: fhir.FhirPositiveInt[];
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode: fhir.CodeableConcept[];
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.item.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * Where the service was provided.
     */
    location?: (fhir.CodeableConcept | fhir.Address | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.item.location[x]
     */
    protected static readonly _fts_locationIsChoice: true;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi: fhir.Reference[];
    /**
     * Physical service site on the patient (limb, tooth, etc).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the site, eg. limb region or tooth surface(s).
     */
    subSite: fhir.CodeableConcept[];
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter: fhir.Reference[];
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Second tier of goods and services.
     */
    detail: fhir.ExplanationOfBenefitItemDetail[];
    /**
     * Default constructor for ExplanationOfBenefitItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitAddItemDetail type.
 */
export interface ExplanationOfBenefitAddItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The fee charged for the professional service or product.
     */
    fee?: fhir.MoneyArgs | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
}
/**
 * The second tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI).
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * The fee charged for the professional service or product.
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitAddItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitAddItem type.
 */
export interface ExplanationOfBenefitAddItemArgs extends fhir.BackboneElementArgs {
    /**
     * List of input service items which this service line is intended to replace.
     */
    sequenceLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.sequenceLinkId
     */
    _sequenceLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The fee charged for the professional service or product.
     */
    fee?: fhir.MoneyArgs | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.noteNumber
     */
    _noteNumber?: (fhir.FhirElementArgs | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * The second tier service adjudications for payor added services.
     */
    detail?: fhir.ExplanationOfBenefitAddItemDetailArgs[] | undefined;
}
/**
 * The first tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * List of input service items which this service line is intended to replace.
     */
    sequenceLinkId: fhir.FhirPositiveInt[];
    /**
     * The type of reveneu or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Health Care Service Type Codes  to identify the classification of service or benefits.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * The fee charged for the professional service or product.
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber: fhir.FhirPositiveInt[];
    /**
     * The adjudications results.
     */
    adjudication: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * The second tier service adjudications for payor added services.
     */
    detail: fhir.ExplanationOfBenefitAddItemDetail[];
    /**
     * Default constructor for ExplanationOfBenefitAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitAddItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitPayment type.
 */
export interface ExplanationOfBenefitPaymentArgs extends fhir.BackboneElementArgs {
    /**
     * Whether this represents partial or complete payment of the claim.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
     */
    adjustment?: fhir.MoneyArgs | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Estimated payment date.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.payment.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Payable less any payment adjustment.
     */
    amount?: fhir.MoneyArgs | undefined;
    /**
     * Payment identifer.
     */
    identifier?: fhir.IdentifierArgs | undefined;
}
/**
 * Payment details for the claim if the claim has been paid.
 */
export declare class ExplanationOfBenefitPayment extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Whether this represents partial or complete payment of the claim.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
     */
    adjustment?: fhir.Money | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConcept | undefined;
    /**
     * Estimated payment date.
     */
    date?: fhir.FhirDate | undefined;
    /**
     * Payable less any payment adjustment.
     */
    amount?: fhir.Money | undefined;
    /**
     * Payment identifer.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitPaymentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitProcessNote type.
 */
export interface ExplanationOfBenefitProcessNoteArgs extends fhir.BackboneElementArgs {
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.number
     */
    _number?: fhir.FhirElementArgs;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
     */
    language?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Note text.
 */
export declare class ExplanationOfBenefitProcessNote extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: fhir.FhirPositiveInt | undefined;
    /**
     * The note purpose: Print/Display.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The note text.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitProcessNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitBenefitBalanceFinancial type.
 */
export interface ExplanationOfBenefitBenefitBalanceFinancialArgs extends fhir.BackboneElementArgs {
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
export declare class ExplanationOfBenefitBenefitBalanceFinancial extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    protected static readonly _fts_allowedIsChoice: true;
    /**
     * Benefits used.
     */
    used?: (fhir.FhirUnsignedInt | fhir.Money) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.benefitBalance.financial.used[x]
     */
    protected static readonly _fts_usedIsChoice: true;
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalanceFinancial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitBenefitBalanceFinancialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefitBenefitBalance type.
 */
export interface ExplanationOfBenefitBenefitBalanceArgs extends fhir.BackboneElementArgs {
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
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.excluded
     */
    _excluded?: fhir.FhirElementArgs;
    /**
     * A short name or tag for the benefit, for example MED01, or DENT2.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.description
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
    financial?: fhir.ExplanationOfBenefitBenefitBalanceFinancialArgs[] | undefined;
}
/**
 * Balance by Benefit Category.
 */
export declare class ExplanationOfBenefitBenefitBalance extends fhir.BackboneElement {
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
    financial: fhir.ExplanationOfBenefitBenefitBalanceFinancial[];
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitBenefitBalanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExplanationOfBenefit type.
 */
export interface ExplanationOfBenefitArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ExplanationOfBenefit" | undefined;
    /**
     * The EOB Business Identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<ExplanationofbenefitStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Affects which fields and value sets are used.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Patient Resource.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The billable period for which charges are being submitted.
     */
    billablePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date when the EOB was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The person who created the explanation of benefit.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * The insurer which is responsible for the explanation of benefit.
     */
    insurer?: fhir.ReferenceArgs | undefined;
    /**
     * The provider which is responsible for the claim.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The provider which is responsible for the claim.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.ReferenceArgs | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.ReferenceArgs | undefined;
    /**
     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */
    claim?: fhir.ReferenceArgs | undefined;
    /**
     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */
    claimResponse?: fhir.ReferenceArgs | undefined;
    /**
     * Processing outcome errror, partial or complete processing.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * Do we need a disposition code?
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * Other claims which are related to this claim such as prior claim versions or for related services.
     */
    related?: fhir.ExplanationOfBenefitRelatedArgs[] | undefined;
    /**
     * Prescription to support the dispensing of Pharmacy or Vision products.
     */
    prescription?: fhir.ReferenceArgs | undefined;
    /**
     * Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.ReferenceArgs | undefined;
    /**
     * The party to be reimbursed for the services.
     */
    payee?: fhir.ExplanationOfBenefitPayeeArgs | undefined;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
     */
    information?: fhir.ExplanationOfBenefitInformationArgs[] | undefined;
    /**
     * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
     */
    careTeam?: fhir.ExplanationOfBenefitCareTeamArgs[] | undefined;
    /**
     * Ordered list of patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.ExplanationOfBenefitDiagnosisArgs[] | undefined;
    /**
     * Ordered list of patient procedures performed to support the adjudication.
     */
    procedure?: fhir.ExplanationOfBenefitProcedureArgs[] | undefined;
    /**
     * Precedence (primary, secondary, etc.).
     */
    precedence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.precedence
     */
    _precedence?: fhir.FhirElementArgs;
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance?: fhir.ExplanationOfBenefitInsuranceArgs | undefined;
    /**
     * An accident which resulted in the need for healthcare services.
     */
    accident?: fhir.ExplanationOfBenefitAccidentArgs | undefined;
    /**
     * The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).
     */
    employmentImpacted?: fhir.PeriodArgs | undefined;
    /**
     * The start and optional end dates of when the patient was confined to a treatment center.
     */
    hospitalization?: fhir.PeriodArgs | undefined;
    /**
     * First tier of goods and services.
     */
    item?: fhir.ExplanationOfBenefitItemArgs[] | undefined;
    /**
     * The first tier service adjudications for payor added services.
     */
    addItem?: fhir.ExplanationOfBenefitAddItemArgs[] | undefined;
    /**
     * The total cost of the services reported.
     */
    totalCost?: fhir.MoneyArgs | undefined;
    /**
     * The amount of deductable applied which was not allocated to any particular service line.
     */
    unallocDeductable?: fhir.MoneyArgs | undefined;
    /**
     * Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable).
     */
    totalBenefit?: fhir.MoneyArgs | undefined;
    /**
     * Payment details for the claim if the claim has been paid.
     */
    payment?: fhir.ExplanationOfBenefitPaymentArgs | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * Note text.
     */
    processNote?: fhir.ExplanationOfBenefitProcessNoteArgs[] | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhir.ExplanationOfBenefitBenefitBalanceArgs[] | undefined;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export declare class ExplanationOfBenefit extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ExplanationOfBenefit";
    /**
     * The EOB Business Identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<ExplanationofbenefitStatusCodeType> | undefined;
    /**
     * Affects which fields and value sets are used.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType: fhir.CodeableConcept[];
    /**
     * Patient Resource.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The billable period for which charges are being submitted.
     */
    billablePeriod?: fhir.Period | undefined;
    /**
     * The date when the EOB was created.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The person who created the explanation of benefit.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The insurer which is responsible for the explanation of benefit.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * The provider which is responsible for the claim.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The provider which is responsible for the claim.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */
    claim?: fhir.Reference | undefined;
    /**
     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Processing outcome errror, partial or complete processing.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * Do we need a disposition code?
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * Other claims which are related to this claim such as prior claim versions or for related services.
     */
    related: fhir.ExplanationOfBenefitRelated[];
    /**
     * Prescription to support the dispensing of Pharmacy or Vision products.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * The party to be reimbursed for the services.
     */
    payee?: fhir.ExplanationOfBenefitPayee | undefined;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
     */
    information: fhir.ExplanationOfBenefitInformation[];
    /**
     * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
     */
    careTeam: fhir.ExplanationOfBenefitCareTeam[];
    /**
     * Ordered list of patient diagnosis for which care is sought.
     */
    diagnosis: fhir.ExplanationOfBenefitDiagnosis[];
    /**
     * Ordered list of patient procedures performed to support the adjudication.
     */
    procedure: fhir.ExplanationOfBenefitProcedure[];
    /**
     * Precedence (primary, secondary, etc.).
     */
    precedence?: fhir.FhirPositiveInt | undefined;
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance?: fhir.ExplanationOfBenefitInsurance | undefined;
    /**
     * An accident which resulted in the need for healthcare services.
     */
    accident?: fhir.ExplanationOfBenefitAccident | undefined;
    /**
     * The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).
     */
    employmentImpacted?: fhir.Period | undefined;
    /**
     * The start and optional end dates of when the patient was confined to a treatment center.
     */
    hospitalization?: fhir.Period | undefined;
    /**
     * First tier of goods and services.
     */
    item: fhir.ExplanationOfBenefitItem[];
    /**
     * The first tier service adjudications for payor added services.
     */
    addItem: fhir.ExplanationOfBenefitAddItem[];
    /**
     * The total cost of the services reported.
     */
    totalCost?: fhir.Money | undefined;
    /**
     * The amount of deductable applied which was not allocated to any particular service line.
     */
    unallocDeductable?: fhir.Money | undefined;
    /**
     * Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable).
     */
    totalBenefit?: fhir.Money | undefined;
    /**
     * Payment details for the claim if the claim has been paid.
     */
    payment?: fhir.ExplanationOfBenefitPayment | undefined;
    /**
     * The form to be used for printing the content.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Note text.
     */
    processNote: fhir.ExplanationOfBenefitProcessNote[];
    /**
     * Balance by Benefit Category.
     */
    benefitBalance: fhir.ExplanationOfBenefitBenefitBalance[];
    /**
     * Default constructor for ExplanationOfBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ExplanationOfBenefit.d.ts.map