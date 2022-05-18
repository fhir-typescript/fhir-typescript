import * as fhir from '../fhir.js';
import { V3ActIncidentCodeCodingType } from '../fhirValueSets/V3ActIncidentCodeCodings.js';
import { NoteTypeCodingType } from '../fhirValueSets/NoteTypeCodings.js';
import { NoteTypeCodeType } from '../fhirValueSets/NoteTypeCodes.js';
import { LanguagesCodingType } from '../fhirValueSets/LanguagesCodings.js';
import { ExplanationofbenefitStatusCodingType } from '../fhirValueSets/ExplanationofbenefitStatusCodings.js';
import { ExplanationofbenefitStatusCodeType } from '../fhirValueSets/ExplanationofbenefitStatusCodes.js';
import { ClaimTypeCodingType } from '../fhirValueSets/ClaimTypeCodings.js';
import { ClaimUseCodingType } from '../fhirValueSets/ClaimUseCodings.js';
import { ClaimUseCodeType } from '../fhirValueSets/ClaimUseCodes.js';
import { RemittanceOutcomeCodingType } from '../fhirValueSets/RemittanceOutcomeCodings.js';
import { RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
/**
 * Valid arguments for the ExplanationOfBenefitRelated type.
 */
export interface ExplanationOfBenefitRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.ReferenceArgs | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhir.IdentifierArgs | undefined;
}
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ExplanationOfBenefitRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Reference to a related claim.
     */
    claim?: fhir.Reference | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhir.Identifier | undefined;
    /**
     * Default constructor for ExplanationOfBenefitRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.ReferenceArgs | undefined;
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
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
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitPayeeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitCareTeam type.
 */
export interface ExplanationOfBenefitCareTeamArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Member of the team who provided the product or service.
     */
    provider: fhir.ReferenceArgs | null;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The members of the team who provided the products and services.
 */
export declare class ExplanationOfBenefitCareTeam extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * Member of the team who provided the product or service.
     */
    provider: fhir.Reference | null;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: fhir.FhirBoolean | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitCareTeamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitSupportingInfo type.
 */
export interface ExplanationOfBenefitSupportingInfoArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * This may contain a category for the local bill type codes.
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
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    value?: fhir.FhirBoolean | fhir.FhirString | fhir.Quantity | fhir.Attachment | fhir.Reference | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.CodingArgs | undefined;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ExplanationOfBenefitSupportingInfo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * This may contain a category for the local bill type codes.
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
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.supportingInfo.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    value?: (fhir.FhirBoolean | fhir.FhirString | fhir.Quantity | fhir.Attachment | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.supportingInfo.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.Coding | undefined;
    /**
     * Default constructor for ExplanationOfBenefitSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitSupportingInfoArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitDiagnosis type.
 */
export interface ExplanationOfBenefitDiagnosisArgs extends fhir.BackboneElementArgs {
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosis?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.ReferenceArgs | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ExplanationOfBenefitDiagnosis extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosis: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.diagnosis.diagnosis[x]
     */
    protected static readonly _fts_diagnosisIsChoice: true;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhir.CodeableConcept[];
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.CodeableConcept | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitProcedure type.
 */
export interface ExplanationOfBenefitProcedureArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedure?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureReference?: fhir.ReferenceArgs | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare class ExplanationOfBenefitProcedure extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhir.CodeableConcept[];
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedure: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.procedure.procedure[x]
     */
    protected static readonly _fts_procedureIsChoice: true;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[];
    /**
     * Default constructor for ExplanationOfBenefitProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitProcedureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitInsurance type.
 */
export interface ExplanationOfBenefitInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: fhir.FhirBoolean | boolean | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: fhir.FhirString[] | string[] | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ExplanationOfBenefitInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: fhir.FhirBoolean | null;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: fhir.FhirString[];
    /**
     * Default constructor for ExplanationOfBenefitInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitAccident type.
 */
export interface ExplanationOfBenefitAccidentArgs extends fhir.BackboneElementArgs {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The physical location of the accident event.
     */
    location?: fhir.Address | fhir.Reference | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhir.AddressArgs | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Details of a accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ExplanationOfBenefitAccident extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: fhir.FhirDate | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The physical location of the accident event.
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
     * Extensible-bound Value Set for type (ExplanationOfBenefit.accident.type)
     */
    static typeExtensibleCoding(): V3ActIncidentCodeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitItemAdjudication type.
 */
export interface ExplanationOfBenefitItemAdjudicationArgs extends fhir.BackboneElementArgs {
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.MoneyArgs | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: fhir.FhirDecimal | number | undefined;
}
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ExplanationOfBenefitItemAdjudication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemAdjudicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitItemDetailSubDetail type.
 */
export interface ExplanationOfBenefitItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.ReferenceArgs[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
}
/**
 * Third-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[];
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[];
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Default constructor for ExplanationOfBenefitItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitItemDetail type.
 */
export interface ExplanationOfBenefitItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.ReferenceArgs[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhir.ExplanationOfBenefitItemDetailSubDetailArgs[] | undefined;
}
/**
 * Second-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[];
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[];
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhir.ExplanationOfBenefitItemDetailSubDetail[];
    /**
     * Default constructor for ExplanationOfBenefitItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitItem type.
 */
export interface ExplanationOfBenefitItemArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConceptArgs | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    serviced?: fhir.FhirDate | fhir.Period | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    location?: fhir.CodeableConcept | fhir.Address | fhir.Reference | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.AddressArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.ReferenceArgs[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.ReferenceArgs[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhir.ExplanationOfBenefitItemDetailArgs[] | undefined;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ExplanationOfBenefitItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify item entries.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: fhir.FhirPositiveInt[];
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: fhir.FhirPositiveInt[];
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: fhir.FhirPositiveInt[];
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: fhir.FhirPositiveInt[];
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[];
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[];
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.item.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * Where the product or service was provided.
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
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[];
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[];
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.Reference[];
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[];
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Second-tier of goods and services.
     */
    detail?: fhir.ExplanationOfBenefitItemDetail[];
    /**
     * Default constructor for ExplanationOfBenefitItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitAddItemDetailSubDetail type.
 */
export interface ExplanationOfBenefitAddItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitAddItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitAddItemDetail type.
 */
export interface ExplanationOfBenefitAddItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ExplanationOfBenefitAddItemDetailSubDetailArgs[] | undefined;
}
/**
 * The second-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[];
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ExplanationOfBenefitAddItemDetailSubDetail[];
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitAddItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitAddItem type.
 */
export interface ExplanationOfBenefitAddItemArgs extends fhir.BackboneElementArgs {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConceptArgs | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    serviced?: fhir.FhirDate | fhir.Period | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    location?: fhir.CodeableConcept | fhir.Address | fhir.Reference | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.AddressArgs | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.ReferenceArgs | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ExplanationOfBenefitAddItemDetailArgs[] | undefined;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ExplanationOfBenefitAddItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: fhir.FhirPositiveInt[];
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: fhir.FhirPositiveInt[];
    /**
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: fhir.FhirPositiveInt[];
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.Reference[];
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[];
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[];
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.addItem.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * Where the product or service was provided.
     */
    location?: (fhir.CodeableConcept | fhir.Address | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.addItem.location[x]
     */
    protected static readonly _fts_locationIsChoice: true;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[];
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: fhir.FhirPositiveInt[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ExplanationOfBenefitAddItemDetail[];
    /**
     * Default constructor for ExplanationOfBenefitAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitAddItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitTotal type.
 */
export interface ExplanationOfBenefitTotalArgs extends fhir.BackboneElementArgs {
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.MoneyArgs | null;
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ExplanationOfBenefitTotal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
    /**
     * Default constructor for ExplanationOfBenefitTotal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitTotalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitPayment type.
 */
export interface ExplanationOfBenefitPaymentArgs extends fhir.BackboneElementArgs {
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.MoneyArgs | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: fhir.MoneyArgs | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.IdentifierArgs | undefined;
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ExplanationOfBenefitPayment extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.Money | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConcept | undefined;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: fhir.FhirDate | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitPaymentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitProcessNote type.
 */
export interface ExplanationOfBenefitProcessNoteArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeCodeType | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ExplanationOfBenefitProcessNote extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify a note entry.
     */
    number?: fhir.FhirPositiveInt | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeCodeType | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitProcessNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (ExplanationOfBenefit.processNote.type)
     */
    static typeRequiredCoding(): NoteTypeCodingType;
    /**
     * Preferred-bound Value Set for language (ExplanationOfBenefit.processNote.language)
     */
    static languagePreferredCoding(): LanguagesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitBenefitBalanceFinancial type.
 */
export interface ExplanationOfBenefitBenefitBalanceFinancialArgs extends fhir.BackboneElementArgs {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowed?: fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: fhir.FhirString | string | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.MoneyArgs | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    used?: fhir.FhirUnsignedInt | fhir.Money | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
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
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowed?: (fhir.FhirUnsignedInt | fhir.FhirString | fhir.Money) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    protected static readonly _fts_allowedIsChoice: true;
    /**
     * The quantity of the benefit which have been consumed to date.
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
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ExplanationOfBenefitBenefitBalance type.
 */
export interface ExplanationOfBenefitBenefitBalanceArgs extends fhir.BackboneElementArgs {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: fhir.FhirBoolean | boolean | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConceptArgs | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
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
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category: fhir.CodeableConcept | null;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: fhir.FhirBoolean | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: fhir.FhirString | undefined;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhir.ExplanationOfBenefitBenefitBalanceFinancial[];
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitBenefitBalanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ExplanationofbenefitStatusCodeType | null;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseCodeType | null;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.PeriodArgs | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.ReferenceArgs | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.ReferenceArgs | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhir.CodeableConceptArgs | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.ExplanationOfBenefitRelatedArgs[] | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.ReferenceArgs | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.ReferenceArgs | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhir.ExplanationOfBenefitPayeeArgs | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.ReferenceArgs | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.ReferenceArgs | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhir.ReferenceArgs | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhir.ReferenceArgs | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeCodeType | null;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: fhir.FhirString[] | string[] | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhir.PeriodArgs[] | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ExplanationOfBenefitCareTeamArgs[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ExplanationOfBenefitSupportingInfoArgs[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ExplanationOfBenefitDiagnosisArgs[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ExplanationOfBenefitProcedureArgs[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ExplanationOfBenefitInsuranceArgs[] | null;
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ExplanationOfBenefitAccidentArgs | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ExplanationOfBenefitItemArgs[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ExplanationOfBenefitAddItemArgs[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudicationArgs[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ExplanationOfBenefitTotalArgs[] | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ExplanationOfBenefitPaymentArgs | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConceptArgs | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.AttachmentArgs | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.ExplanationOfBenefitProcessNoteArgs[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhir.PeriodArgs | undefined;
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
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ExplanationofbenefitStatusCodeType | null;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseCodeType | null;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.Period | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: fhir.FhirDateTime | null;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.Reference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.Reference | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhir.CodeableConcept | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.ExplanationOfBenefitRelated[];
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhir.ExplanationOfBenefitPayee | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhir.Reference | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeCodeType | null;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: fhir.FhirString[];
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhir.Period[];
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ExplanationOfBenefitCareTeam[];
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ExplanationOfBenefitSupportingInfo[];
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ExplanationOfBenefitDiagnosis[];
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ExplanationOfBenefitProcedure[];
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: fhir.FhirPositiveInt | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ExplanationOfBenefitInsurance[];
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ExplanationOfBenefitAccident | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ExplanationOfBenefitItem[];
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ExplanationOfBenefitAddItem[];
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[];
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ExplanationOfBenefitTotal[];
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ExplanationOfBenefitPayment | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConcept | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.Attachment | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.ExplanationOfBenefitProcessNote[];
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhir.ExplanationOfBenefitBenefitBalance[];
    /**
     * Default constructor for ExplanationOfBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExplanationOfBenefitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ExplanationOfBenefit.status)
     */
    static statusRequiredCoding(): ExplanationofbenefitStatusCodingType;
    /**
     * Extensible-bound Value Set for type (ExplanationOfBenefit.type)
     */
    static typeExtensibleCoding(): ClaimTypeCodingType;
    /**
     * Required-bound Value Set for use (ExplanationOfBenefit.use)
     */
    static useRequiredCoding(): ClaimUseCodingType;
    /**
     * Required-bound Value Set for outcome (ExplanationOfBenefit.outcome)
     */
    static outcomeRequiredCoding(): RemittanceOutcomeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=ExplanationOfBenefit.d.ts.map