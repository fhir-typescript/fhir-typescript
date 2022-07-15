import * as fhir from '../fhirJson.js';
/**
 * Other claims which are related to this claim such as prior claim versions or for related services.
 */
export interface ClaimRelated extends fhir.BackboneElement {
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
}
/**
 * The party to be reimbursed for the services.
 */
export interface ClaimPayee extends fhir.BackboneElement {
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
}
/**
 * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
 */
export interface ClaimCareTeam extends fhir.BackboneElement {
    /**
     * Sequence of the careTeam which serves to order and provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.careTeam.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * Member of the team who provided the overall service.
     */
    provider: fhir.Reference | null;
    /**
     * The party who is billing and responsible for the claimed good or service rendered to the patient.
     */
    responsible?: boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.careTeam.responsible
     */
    _responsible?: fhir.FhirElement;
    /**
     * The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The qualification which is applicable for this service.
     */
    qualification?: fhir.CodeableConcept | undefined;
}
/**
 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
 */
export interface ClaimInformation extends fhir.BackboneElement {
    /**
     * Sequence of the information element which serves to provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.information.sequence
     */
    _sequence?: fhir.FhirElement;
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
    timingDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.information.timing[x]
     */
    _timingDate?: fhir.FhirElement;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.information.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.
     */
    reason?: fhir.CodeableConcept | undefined;
}
/**
 * List of patient diagnosis for which care is sought.
 */
export interface ClaimDiagnosis extends fhir.BackboneElement {
    /**
     * Sequence of diagnosis which serves to provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.diagnosis.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * The diagnosis.
     */
    diagnosisCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The diagnosis.
     */
    diagnosisReference?: fhir.Reference | undefined;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The package billing code, for example DRG, based on the assigned grouping code system.
     */
    packageCode?: fhir.CodeableConcept | undefined;
}
/**
 * Ordered list of patient procedures performed to support the adjudication.
 */
export interface ClaimProcedure extends fhir.BackboneElement {
    /**
     * Sequence of procedures which serves to order and provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.procedure.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * SB DateTime??
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.procedure.date
     */
    _date?: fhir.FhirElement;
    /**
     * The procedure code.
     */
    procedureCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The procedure code.
     */
    procedureReference?: fhir.Reference | undefined;
}
/**
 * Financial instrument by which payment information for health care.
 */
export interface ClaimInsurance extends fhir.BackboneElement {
    /**
     * Sequence of coverage which serves to provide a link and convey coordination of benefit order.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.insurance.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: Claim.insurance.focal
     */
    _focal?: fhir.FhirElement;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage: fhir.Reference | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
    /**
     * The Coverages adjudication details.
     */
    claimResponse?: fhir.Reference | undefined;
}
/**
 * An accident which resulted in the need for healthcare services.
 */
export interface ClaimAccident extends fhir.BackboneElement {
    /**
     * Date of an accident which these services are addressing.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: Claim.accident.date
     */
    _date?: fhir.FhirElement;
    /**
     * Type of accident: work, auto, etc.
     */
    type?: 'MVA' | 'SCHOOL' | 'SPT' | 'WPA' | undefined;
    /**
     * Accident Place.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * Accident Place.
     */
    locationReference?: fhir.Reference | undefined;
}
/**
 * Third tier of goods and services.
 */
export interface ClaimItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.sequence
     */
    _sequence?: fhir.FhirElement;
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
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode?: (fhir.CodeableConcept | null)[] | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi?: (fhir.Reference | null)[] | undefined;
}
/**
 * Second tier of goods and services.
 */
export interface ClaimItemDetail extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.sequence
     */
    _sequence?: fhir.FhirElement;
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
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.
     */
    programCode?: (fhir.CodeableConcept | null)[] | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi?: (fhir.Reference | null)[] | undefined;
    /**
     * Third tier of goods and services.
     */
    subDetail?: (fhir.ClaimItemDetailSubDetail | null)[] | undefined;
}
/**
 * First tier of goods and services.
 */
export interface ClaimItem extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * CareTeam applicable for this service or product line.
     */
    careTeamLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.careTeamLinkId
     */
    _careTeamLinkId?: (fhir.FhirElement | null)[];
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.diagnosisLinkId
     */
    _diagnosisLinkId?: (fhir.FhirElement | null)[];
    /**
     * Procedures applicable for this service or product line.
     */
    procedureLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.procedureLinkId
     */
    _procedureLinkId?: (fhir.FhirElement | null)[];
    /**
     * Exceptions, special conditions and supporting information pplicable for this service or product line.
     */
    informationLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.informationLinkId
     */
    _informationLinkId?: (fhir.FhirElement | null)[];
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
    modifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.
     */
    programCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.item.serviced[x]
     */
    _servicedDate?: fhir.FhirElement;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * Where the service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Where the service was provided.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * Where the service was provided.
     */
    locationReference?: fhir.Reference | undefined;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * List of Unique Device Identifiers associated with this line item.
     */
    udi?: (fhir.Reference | null)[] | undefined;
    /**
     * Physical service site on the patient (limb, tooth, etc).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the site, eg. limb region or tooth surface(s).
     */
    subSite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: (fhir.Reference | null)[] | undefined;
    /**
     * Second tier of goods and services.
     */
    detail?: (fhir.ClaimItemDetail | null)[] | undefined;
}
/**
 * A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
 */
export interface Claim extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Claim" | null;
    /**
     * The business identifier for the instance: claim number, pre-determination or pre-authorization number.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the claim as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: Claim.status
     */
    _status?: fhir.FhirElement;
    /**
     * Affects which fields and value sets are used.
     */
    type?: 'institutional' | 'oral' | 'pharmacy' | 'professional' | 'vision' | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
     */
    use?: 'complete' | 'exploratory' | 'other' | 'proposed' | undefined;
    /**
     * Extended properties for primitive element: Claim.use
     */
    _use?: fhir.FhirElement;
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
    created?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.created
     */
    _created?: fhir.FhirElement;
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
    related?: (fhir.ClaimRelated | null)[] | undefined;
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
    careTeam?: (fhir.ClaimCareTeam | null)[] | undefined;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
     */
    information?: (fhir.ClaimInformation | null)[] | undefined;
    /**
     * List of patient diagnosis for which care is sought.
     */
    diagnosis?: (fhir.ClaimDiagnosis | null)[] | undefined;
    /**
     * Ordered list of patient procedures performed to support the adjudication.
     */
    procedure?: (fhir.ClaimProcedure | null)[] | undefined;
    /**
     * Financial instrument by which payment information for health care.
     */
    insurance?: (fhir.ClaimInsurance | null)[] | undefined;
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
    item?: (fhir.ClaimItem | null)[] | undefined;
    /**
     * The total value of the claim.
     */
    total?: fhir.Money | undefined;
}
//# sourceMappingURL=Claim.d.ts.map