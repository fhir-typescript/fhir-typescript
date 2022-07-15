import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
import { ClaimUseCodeType } from '../fhirValueSets/ClaimUseCodes.js';
/**
 * Valid arguments for the ClaimRelated type.
 */
export interface ClaimRelatedArgs extends fhir.BackboneElementArgs {
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
export declare class ClaimRelated extends fhir.BackboneElement {
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
     * Default constructor for ClaimRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimPayee type.
 */
export interface ClaimPayeeArgs extends fhir.BackboneElementArgs {
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * organization | patient | practitioner | relatedperson.
     */
    resourceType?: fhir.CodingArgs | undefined;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    party?: fhir.ReferenceArgs | undefined;
}
/**
 * The party to be reimbursed for the services.
 */
export declare class ClaimPayee extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type: fhir.CodeableConcept | null;
    /**
     * organization | patient | practitioner | relatedperson.
     */
    resourceType?: fhir.Coding | undefined;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimPayeeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimCareTeam type.
 */
export interface ClaimCareTeamArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of the careTeam which serves to order and provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.careTeam.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * Member of the team who provided the overall service.
     */
    provider: fhir.ReferenceArgs | null;
    /**
     * The party who is billing and responsible for the claimed good or service rendered to the patient.
     */
    responsible?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.careTeam.responsible
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
export declare class ClaimCareTeam extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Sequence of the careTeam which serves to order and provide a link.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * Member of the team who provided the overall service.
     */
    provider: fhir.Reference | null;
    /**
     * The party who is billing and responsible for the claimed good or service rendered to the patient.
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
     * Default constructor for ClaimCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimCareTeamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimInformation type.
 */
export interface ClaimInformationArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of the information element which serves to provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.information.sequence
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
    reason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
 */
export declare class ClaimInformation extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element Claim.information.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    value?: (fhir.FhirString | fhir.Quantity | fhir.Attachment | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Claim.information.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimInformation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimInformationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimDiagnosis type.
 */
export interface ClaimDiagnosisArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of diagnosis which serves to provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.diagnosis.sequence
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
 * List of patient diagnosis for which care is sought.
 */
export declare class ClaimDiagnosis extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element Claim.diagnosis.diagnosis[x]
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
     * Default constructor for ClaimDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimProcedure type.
 */
export interface ClaimProcedureArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of procedures which serves to order and provide a link.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.procedure.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * SB DateTime??
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Claim.procedure.date
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
export declare class ClaimProcedure extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element Claim.procedure.procedure[x]
     */
    protected static readonly _fts_procedureIsChoice: true;
    /**
     * Default constructor for ClaimProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimProcedureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimInsurance type.
 */
export interface ClaimInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence of coverage which serves to provide a link and convey coordination of benefit order.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */
    focal: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.focal
     */
    _focal?: fhir.FhirElementArgs;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElementArgs;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElementArgs | null)[];
    /**
     * The Coverages adjudication details.
     */
    claimResponse?: fhir.ReferenceArgs | undefined;
}
/**
 * Financial instrument by which payment information for health care.
 */
export declare class ClaimInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Sequence of coverage which serves to provide a link and convey coordination of benefit order.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */
    focal: fhir.FhirBoolean | null;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage: fhir.Reference | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: fhir.FhirString | undefined;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef: fhir.FhirString[];
    /**
     * The Coverages adjudication details.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimAccident type.
 */
export interface ClaimAccidentArgs extends fhir.BackboneElementArgs {
    /**
     * Date of an accident which these services are addressing.
     */
    date: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Claim.accident.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Type of accident: work, auto, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Accident Place.
     */
    location?: fhir.Address | fhir.Reference | undefined;
    /**
     * Accident Place.
     */
    locationAddress?: fhir.AddressArgs | undefined;
    /**
     * Accident Place.
     */
    locationReference?: fhir.ReferenceArgs | undefined;
}
/**
 * An accident which resulted in the need for healthcare services.
 */
export declare class ClaimAccident extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Date of an accident which these services are addressing.
     */
    date: fhir.FhirDate | null;
    /**
     * Type of accident: work, auto, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Accident Place.
     */
    location?: (fhir.Address | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Claim.accident.location[x]
     */
    protected static readonly _fts_locationIsChoice: true;
    /**
     * Default constructor for ClaimAccident - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimAccidentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimItemDetailSubDetail type.
 */
export interface ClaimItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.sequence
     */
    _sequence?: fhir.FhirElementArgs;
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
     * Extended properties for primitive element: Claim.item.detail.subDetail.factor
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
}
/**
 * Third tier of goods and services.
 */
export declare class ClaimItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
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
     * Default constructor for ClaimItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimItemDetail type.
 */
export interface ClaimItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.sequence
     */
    _sequence?: fhir.FhirElementArgs;
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
     * Extended properties for primitive element: Claim.item.detail.factor
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
     * Third tier of goods and services.
     */
    subDetail?: fhir.ClaimItemDetailSubDetailArgs[] | undefined;
}
/**
 * Second tier of goods and services.
 */
export declare class ClaimItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
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
     * Third tier of goods and services.
     */
    subDetail: fhir.ClaimItemDetailSubDetail[];
    /**
     * Default constructor for ClaimItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ClaimItem type.
 */
export interface ClaimItemArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.sequence
     */
    _sequence?: fhir.FhirElementArgs;
    /**
     * CareTeam applicable for this service or product line.
     */
    careTeamLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.careTeamLinkId
     */
    _careTeamLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.diagnosisLinkId
     */
    _diagnosisLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * Procedures applicable for this service or product line.
     */
    procedureLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.procedureLinkId
     */
    _procedureLinkId?: (fhir.FhirElementArgs | null)[];
    /**
     * Exceptions, special conditions and supporting information pplicable for this service or product line.
     */
    informationLinkId?: fhir.FhirPositiveInt[] | (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.informationLinkId
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
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RXNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConceptArgs | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.
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
     * Extended properties for primitive element: Claim.item.factor
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
     * Second tier of goods and services.
     */
    detail?: fhir.ClaimItemDetailArgs[] | undefined;
}
/**
 * First tier of goods and services.
 */
export declare class ClaimItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * CareTeam applicable for this service or product line.
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
     * If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RXNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.
     */
    service?: fhir.CodeableConcept | undefined;
    /**
     * Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier: fhir.CodeableConcept[];
    /**
     * For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.
     */
    programCode: fhir.CodeableConcept[];
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Claim.item.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * Where the service was provided.
     */
    location?: (fhir.CodeableConcept | fhir.Address | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Claim.item.location[x]
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
     * Second tier of goods and services.
     */
    detail: fhir.ClaimItemDetail[];
    /**
     * Default constructor for ClaimItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Claim type.
 */
export interface ClaimArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Claim" | undefined;
    /**
     * The business identifier for the instance: claim number, pre-determination or pre-authorization number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the claim as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Claim.status
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
     * Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
     */
    use?: fhir.FhirCode<ClaimUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Claim.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Patient Resource.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The billable period for which charges are being submitted.
     */
    billablePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Claim.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Person who created the invoice/claim/pre-determination or pre-authorization.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: fhir.ReferenceArgs | undefined;
    /**
     * The provider which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
     */
    fundsReserve?: fhir.CodeableConceptArgs | undefined;
    /**
     * Other claims which are related to this claim such as prior claim versions or for related services.
     */
    related?: fhir.ClaimRelatedArgs[] | undefined;
    /**
     * Should we create a group to hold multiple prescriptions and add a sequence number and on the line items a link to the sequence.
     */
    prescription?: fhir.ReferenceArgs | undefined;
    /**
     * as above.
     */
    originalPrescription?: fhir.ReferenceArgs | undefined;
    /**
     * The party to be reimbursed for the services.
     */
    payee?: fhir.ClaimPayeeArgs | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.ReferenceArgs | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.ReferenceArgs | undefined;
    /**
     * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
     */
    careTeam?: fhir.ClaimCareTeamArgs[] | undefined;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
     */
    information?: fhir.ClaimInformationArgs[] | undefined;
    /**
     * List of patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.ClaimDiagnosisArgs[] | undefined;
    /**
     * Ordered list of patient procedures performed to support the adjudication.
     */
    procedure?: fhir.ClaimProcedureArgs[] | undefined;
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance?: fhir.ClaimInsuranceArgs[] | undefined;
    /**
     * An accident which resulted in the need for healthcare services.
     */
    accident?: fhir.ClaimAccidentArgs | undefined;
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
    item?: fhir.ClaimItemArgs[] | undefined;
    /**
     * The total value of the claim.
     */
    total?: fhir.MoneyArgs | undefined;
}
/**
 * A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
 */
export declare class Claim extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Claim";
    /**
     * The business identifier for the instance: claim number, pre-determination or pre-authorization number.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the claim as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * Affects which fields and value sets are used.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType: fhir.CodeableConcept[];
    /**
     * Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
     */
    use?: fhir.FhirCode<ClaimUseCodeType> | undefined;
    /**
     * Patient Resource.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The billable period for which charges are being submitted.
     */
    billablePeriod?: fhir.Period | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * Person who created the invoice/claim/pre-determination or pre-authorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * The provider which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * Other claims which are related to this claim such as prior claim versions or for related services.
     */
    related: fhir.ClaimRelated[];
    /**
     * Should we create a group to hold multiple prescriptions and add a sequence number and on the line items a link to the sequence.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * as above.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * The party to be reimbursed for the services.
     */
    payee?: fhir.ClaimPayee | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
     */
    careTeam: fhir.ClaimCareTeam[];
    /**
     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
     */
    information: fhir.ClaimInformation[];
    /**
     * List of patient diagnosis for which care is sought.
     */
    diagnosis: fhir.ClaimDiagnosis[];
    /**
     * Ordered list of patient procedures performed to support the adjudication.
     */
    procedure: fhir.ClaimProcedure[];
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance: fhir.ClaimInsurance[];
    /**
     * An accident which resulted in the need for healthcare services.
     */
    accident?: fhir.ClaimAccident | undefined;
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
    item: fhir.ClaimItem[];
    /**
     * The total value of the claim.
     */
    total?: fhir.Money | undefined;
    /**
     * Default constructor for Claim - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Claim.d.ts.map