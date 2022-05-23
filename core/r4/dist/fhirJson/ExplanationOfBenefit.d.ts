import * as fhir from '../fhirJson.js';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export interface ExplanationOfBenefitRelated extends fhir.BackboneElement {
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
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export interface ExplanationOfBenefitPayee extends fhir.BackboneElement {
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
}
/**
 * The members of the team who provided the products and services.
 */
export interface ExplanationOfBenefitCareTeam extends fhir.BackboneElement {
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * Member of the team who provided the product or service.
     */
    provider: fhir.Reference | null;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.responsible
     */
    _responsible?: fhir.FhirElement;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhir.CodeableConcept | undefined;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export interface ExplanationOfBenefitSupportingInfo extends fhir.BackboneElement {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.sequence
     */
    _sequence?: fhir.FhirElement;
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
    timingDate?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.timing[x]
     */
    _timingDate?: fhir.FhirElement;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.Coding | undefined;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export interface ExplanationOfBenefitDiagnosis extends fhir.BackboneElement {
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.diagnosis.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.Reference | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.CodeableConcept | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConcept | undefined;
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export interface ExplanationOfBenefitProcedure extends fhir.BackboneElement {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.date
     */
    _date?: fhir.FhirElement;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureReference?: fhir.Reference | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface ExplanationOfBenefitInsurance extends fhir.BackboneElement {
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.focal
     */
    _focal?: fhir.FhirElement;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
}
/**
 * Details of a accident which resulted in injuries which required the products and services listed in the claim.
 */
export interface ExplanationOfBenefitAccident extends fhir.BackboneElement {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.accident.date
     */
    _date?: fhir.FhirElement;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhir.Reference | undefined;
}
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export interface ExplanationOfBenefitItemAdjudication extends fhir.BackboneElement {
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
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * Third-tier of goods and services.
 */
export interface ExplanationOfBenefitItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.sequence
     */
    _sequence?: fhir.FhirElement;
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
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
}
/**
 * Second-tier of goods and services.
 */
export interface ExplanationOfBenefitItemDetail extends fhir.BackboneElement {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.sequence
     */
    _sequence?: fhir.FhirElement;
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
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhir.ExplanationOfBenefitItemDetailSubDetail[] | undefined;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export interface ExplanationOfBenefitItem extends fhir.BackboneElement {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.careTeamSequence
     */
    _careTeamSequence?: (fhir.FhirElement | null)[];
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.diagnosisSequence
     */
    _diagnosisSequence?: (fhir.FhirElement | null)[];
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.procedureSequence
     */
    _procedureSequence?: (fhir.FhirElement | null)[];
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.informationSequence
     */
    _informationSequence?: (fhir.FhirElement | null)[];
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
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.serviced[x]
     */
    _servicedDate?: fhir.FhirElement;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.Reference | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.Reference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhir.ExplanationOfBenefitItemDetail[] | undefined;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export interface ExplanationOfBenefitAddItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
}
/**
 * The second-tier service adjudications for payor added services.
 */
export interface ExplanationOfBenefitAddItemDetail extends fhir.BackboneElement {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export interface ExplanationOfBenefitAddItem extends fhir.BackboneElement {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.itemSequence
     */
    _itemSequence?: (fhir.FhirElement | null)[];
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detailSequence
     */
    _detailSequence?: (fhir.FhirElement | null)[];
    /**
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.subDetailSequence
     */
    _subDetailSequence?: (fhir.FhirElement | null)[];
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.Reference[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.serviced[x]
     */
    _servicedDate?: fhir.FhirElement;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.Reference | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.factor
     */
    _factor?: fhir.FhirElement;
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
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ExplanationOfBenefitAddItemDetail[] | undefined;
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export interface ExplanationOfBenefitTotal extends fhir.BackboneElement {
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
}
/**
 * Payment details for the adjudication of the claim.
 */
export interface ExplanationOfBenefitPayment extends fhir.BackboneElement {
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
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.payment.date
     */
    _date?: fhir.FhirElement;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.Identifier | undefined;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export interface ExplanationOfBenefitProcessNote extends fhir.BackboneElement {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.number
     */
    _number?: fhir.FhirElement;
    /**
     * The business purpose of the note text.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.type
     */
    _type?: fhir.FhirElement;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.text
     */
    _text?: fhir.FhirElement;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConcept | undefined;
}
/**
 * Benefits Used to date.
 */
export interface ExplanationOfBenefitBenefitBalanceFinancial extends fhir.BackboneElement {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedUnsignedInt?: fhir.FhirElement;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedString?: fhir.FhirElement;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.used[x]
     */
    _usedUnsignedInt?: fhir.FhirElement;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.Money | undefined;
}
/**
 * Balance by Benefit Category.
 */
export interface ExplanationOfBenefitBenefitBalance extends fhir.BackboneElement {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category: fhir.CodeableConcept | null;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.excluded
     */
    _excluded?: fhir.FhirElement;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.name
     */
    _name?: fhir.FhirElement;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.description
     */
    _description?: fhir.FhirElement;
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
    financial?: fhir.ExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export interface ExplanationOfBenefit extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ExplanationOfBenefit";
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.status
     */
    _status?: fhir.FhirElement;
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
    use: 'claim' | 'preauthorization' | 'predetermination' | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.use
     */
    _use?: fhir.FhirElement;
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
    created: string | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.created
     */
    _created?: fhir.FhirElement;
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
    related?: fhir.ExplanationOfBenefitRelated[] | undefined;
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
    outcome: 'complete' | 'error' | 'partial' | 'queued' | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhir.Period[] | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ExplanationOfBenefitCareTeam[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ExplanationOfBenefitSupportingInfo[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ExplanationOfBenefitDiagnosis[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ExplanationOfBenefitProcedure[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.precedence
     */
    _precedence?: fhir.FhirElement;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ExplanationOfBenefitInsurance[] | null;
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ExplanationOfBenefitAccident | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ExplanationOfBenefitItem[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ExplanationOfBenefitAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ExplanationOfBenefitTotal[] | undefined;
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
    processNote?: fhir.ExplanationOfBenefitProcessNote[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhir.ExplanationOfBenefitBenefitBalance[] | undefined;
}
//# sourceMappingURL=ExplanationOfBenefit.d.ts.map