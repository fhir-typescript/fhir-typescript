import * as fhir from '../fhirJson.js';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export interface ClaimRelated extends fhir.BackboneElement {
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
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export interface ClaimPayee extends fhir.BackboneElement {
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
}
/**
 * The members of the team who provided the products and services.
 */
export interface ClaimCareTeam extends fhir.BackboneElement {
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.careTeam.sequence
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
     * Extended properties for primitive element: Claim.careTeam.responsible
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
export interface ClaimSupportingInfo extends fhir.BackboneElement {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.sequence
     */
    _sequence?: fhir.FhirElement;
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
    timingDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.timing[x]
     */
    _timingDate?: fhir.FhirElement;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.CodeableConcept | undefined;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export interface ClaimDiagnosis extends fhir.BackboneElement {
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.diagnosis.sequence
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
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.CodeableConcept | undefined;
    /**
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConcept | undefined;
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export interface ClaimProcedure extends fhir.BackboneElement {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.procedure.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * For example: primary, secondary.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.procedure.date
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
    udi?: (fhir.Reference | null)[] | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface ClaimInsurance extends fhir.BackboneElement {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.insurance.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: Claim.insurance.focal
     */
    _focal?: fhir.FhirElement;
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
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.Reference | undefined;
}
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export interface ClaimAccident extends fhir.BackboneElement {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: Claim.accident.date
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
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export interface ClaimItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.sequence
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: (fhir.CodeableConcept | null)[] | undefined;
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
     * Extended properties for primitive element: Claim.item.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: (fhir.Reference | null)[] | undefined;
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export interface ClaimItemDetail extends fhir.BackboneElement {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.sequence
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: (fhir.CodeableConcept | null)[] | undefined;
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
     * Extended properties for primitive element: Claim.item.detail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: (fhir.Reference | null)[] | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: (fhir.ClaimItemDetailSubDetail | null)[] | undefined;
}
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export interface ClaimItem extends fhir.BackboneElement {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.careTeamSequence
     */
    _careTeamSequence?: (fhir.FhirElement | null)[];
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.diagnosisSequence
     */
    _diagnosisSequence?: (fhir.FhirElement | null)[];
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.procedureSequence
     */
    _procedureSequence?: (fhir.FhirElement | null)[];
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.informationSequence
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.item.serviced[x]
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
     * Extended properties for primitive element: Claim.item.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: (fhir.Reference | null)[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: (fhir.Reference | null)[] | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: (fhir.ClaimItemDetail | null)[] | undefined;
}
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface Claim extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Claim" | null;
    /**
     * A unique identifier assigned to this claim.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: Claim.status
     */
    _status?: fhir.FhirElement;
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
    use: 'claim' | 'preauthorization' | 'predetermination' | null;
    /**
     * Extended properties for primitive element: Claim.use
     */
    _use?: fhir.FhirElement;
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
    created: string | null;
    /**
     * Extended properties for primitive element: Claim.created
     */
    _created?: fhir.FhirElement;
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
    related?: (fhir.ClaimRelated | null)[] | undefined;
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
    careTeam?: (fhir.ClaimCareTeam | null)[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: (fhir.ClaimSupportingInfo | null)[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: (fhir.ClaimDiagnosis | null)[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: (fhir.ClaimProcedure | null)[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: (fhir.ClaimInsurance | null)[] | null;
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ClaimAccident | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: (fhir.ClaimItem | null)[] | undefined;
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhir.Money | undefined;
}
//# sourceMappingURL=Claim.d.ts.map