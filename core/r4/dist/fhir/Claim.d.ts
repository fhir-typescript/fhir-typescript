import * as fhir from '../fhir.js';
import { V3ActIncidentCodeCodingType } from '../fhirValueSets/V3ActIncidentCodeCodings.js';
import { FmStatusCodingType } from '../fhirValueSets/FmStatusCodings.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
import { ClaimTypeCodingType } from '../fhirValueSets/ClaimTypeCodings.js';
import { ClaimUseCodingType } from '../fhirValueSets/ClaimUseCodings.js';
import { ClaimUseCodeType } from '../fhirValueSets/ClaimUseCodes.js';
/**
 * Valid arguments for the ClaimRelated type.
 */
export interface ClaimRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.ReferenceArgs | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example, Property/Casualty insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.IdentifierArgs | undefined;
}
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ClaimRelated extends fhir.BackboneElement {
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
     * For example, Property/Casualty insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.Identifier | undefined;
    /**
     * Default constructor for ClaimRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimPayee type.
 */
export interface ClaimPayeeArgs extends fhir.BackboneElementArgs {
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.ReferenceArgs | undefined;
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export declare class ClaimPayee extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimPayeeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimCareTeam type.
 */
export interface ClaimCareTeamArgs extends fhir.BackboneElementArgs {
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
export declare class ClaimCareTeam extends fhir.BackboneElement {
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
     * Default constructor for ClaimCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimCareTeamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimSupportingInfo type.
 */
export interface ClaimSupportingInfoArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
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
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    value?: fhir.FhirBoolean | fhir.FhirString | fhir.Quantity | fhir.Attachment | fhir.Reference | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ClaimSupportingInfo extends fhir.BackboneElement {
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
     * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timing?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Claim.supportingInfo.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    value?: (fhir.FhirBoolean | fhir.FhirString | fhir.Quantity | fhir.Attachment | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Claim.supportingInfo.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimSupportingInfoArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimDiagnosis type.
 */
export interface ClaimDiagnosisArgs extends fhir.BackboneElementArgs {
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
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ClaimDiagnosis extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element Claim.diagnosis.diagnosis[x]
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
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimProcedure type.
 */
export interface ClaimProcedureArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * For example: primary, secondary.
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
export declare class ClaimProcedure extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * For example: primary, secondary.
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
     * Internal flag to properly serialize choice-type element Claim.procedure.procedure[x]
     */
    protected static readonly _fts_procedureIsChoice: true;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[];
    /**
     * Default constructor for ClaimProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimProcedureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimInsurance type.
 */
export interface ClaimInsuranceArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: fhir.FhirBoolean | boolean | undefined;
    /**
     * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.ReferenceArgs | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: fhir.FhirString | string | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: fhir.FhirString[] | string[] | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.ReferenceArgs | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ClaimInsurance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: fhir.FhirBoolean | null;
    /**
     * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: fhir.FhirString | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: fhir.FhirString[];
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimInsuranceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimAccident type.
 */
export interface ClaimAccidentArgs extends fhir.BackboneElementArgs {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date: fhir.FhirDate | string | undefined;
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
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ClaimAccident extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date: fhir.FhirDate | null;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The physical location of the accident event.
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
     * Extensible-bound Value Set for type (Claim.accident.type)
     */
    static typeExtensibleCoding(): V3ActIncidentCodeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimItemDetailSubDetail type.
 */
export interface ClaimItemDetailSubDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify item entries.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify item entries.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Default constructor for ClaimItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemDetailSubDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimItemDetail type.
 */
export interface ClaimItemDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify item entries.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: fhir.ClaimItemDetailSubDetailArgs[] | undefined;
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify item entries.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: fhir.ClaimItemDetailSubDetail[];
    /**
     * Default constructor for ClaimItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ClaimItem type.
 */
export interface ClaimItemArgs extends fhir.BackboneElementArgs {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: fhir.FhirPositiveInt | number | undefined;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: fhir.FhirPositiveInt[] | number[] | undefined;
    /**
     * Diagnosis applicable for this service or product.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
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
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.ReferenceArgs[] | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimItemDetailArgs[] | undefined;
}
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export declare class ClaimItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A number to uniquely identify item entries.
     */
    sequence: fhir.FhirPositiveInt | null;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: fhir.FhirPositiveInt[];
    /**
     * Diagnosis applicable for this service or product.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
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
     * Internal flag to properly serialize choice-type element Claim.item.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * Where the product or service was provided.
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
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference[];
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimItemDetail[];
    /**
     * Default constructor for ClaimItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * A unique identifier assigned to this claim.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusCodeType | null;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseCodeType | null;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
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
     * The Insurer who is target of the request.
     */
    insurer?: fhir.ReferenceArgs | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.ReferenceArgs | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority: fhir.CodeableConceptArgs | null;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserve?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.ClaimRelatedArgs[] | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.ReferenceArgs | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.ReferenceArgs | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
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
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ClaimCareTeamArgs[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ClaimSupportingInfoArgs[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ClaimDiagnosisArgs[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ClaimProcedureArgs[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ClaimInsuranceArgs[] | null;
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ClaimAccidentArgs | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimItemArgs[] | undefined;
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhir.MoneyArgs | undefined;
}
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
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
     * A unique identifier assigned to this claim.
     */
    identifier?: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusCodeType | null;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseCodeType | null;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
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
     * The Insurer who is target of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.Reference | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority: fhir.CodeableConcept | null;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.ClaimRelated[];
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
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
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ClaimCareTeam[];
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ClaimSupportingInfo[];
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ClaimDiagnosis[];
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ClaimProcedure[];
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ClaimInsurance[];
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ClaimAccident | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimItem[];
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhir.Money | undefined;
    /**
     * Default constructor for Claim - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ClaimArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Claim.status)
     */
    static statusRequiredCoding(): FmStatusCodingType;
    /**
     * Extensible-bound Value Set for type (Claim.type)
     */
    static typeExtensibleCoding(): ClaimTypeCodingType;
    /**
     * Required-bound Value Set for use (Claim.use)
     */
    static useRequiredCoding(): ClaimUseCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Claim.d.ts.map