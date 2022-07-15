import * as fhir from '../fhirJson.js';
/**
 * The party to be reimbursed for the services.
 */
export interface ClaimPayee extends fhir.BackboneElement {
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.Coding | undefined;
    /**
     * The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    organization?: fhir.Reference | undefined;
    /**
     * The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */
    person?: fhir.Reference | undefined;
}
/**
 * Ordered list of patient diagnosis for which care is sought.
 */
export interface ClaimDiagnosis extends fhir.BackboneElement {
    /**
     * Required to maintain order of the diagnoses.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.diagnosis.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * Required to adjudicate services rendered to condition presented.
     */
    diagnosis: fhir.Coding | null;
}
/**
 * Health care programs and insurers are significant payors of health service costs.
 */
export interface ClaimCoverage extends fhir.BackboneElement {
    /**
     * To maintain order of the coverages.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.coverage.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * To identify which coverage is being adjudicated.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: Claim.coverage.focal
     */
    _focal?: fhir.FhirElement;
    /**
     * Need to identify the issuer to target for processing and for coordination of benefit processing.
     */
    coverage: fhir.Reference | null;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.coverage.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement;
    /**
     * To determine the relationship between the patient and the subscriber.
     */
    relationship: fhir.Coding | null;
    /**
     * To provide any pre=determination or prior authorization reference.
     */
    preAuthRef?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.coverage.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
    /**
     * Used by downstream payers to determine what balance remains and the net payable.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
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
     * The type of product or service.
     */
    type: fhir.Coding | null;
    /**
     * The fee for an additional  service or product or charge.
     */
    service: fhir.Coding | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.points
     */
    _points?: fhir.FhirElement;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.Quantity | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.Coding | undefined;
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
     * The type of product or service.
     */
    type: fhir.Coding | null;
    /**
     * If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */
    service: fhir.Coding | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.detail.points
     */
    _points?: fhir.FhirElement;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.Quantity | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.Coding | undefined;
    /**
     * Third tier of goods and services.
     */
    subDetail?: (fhir.ClaimItemDetailSubDetail | null)[] | undefined;
}
/**
 * The materials and placement date of prior fixed prosthesis.
 */
export interface ClaimItemProsthesis extends fhir.BackboneElement {
    /**
     * May impact on adjudication.
     */
    initial?: boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.item.prosthesis.initial
     */
    _initial?: fhir.FhirElement;
    /**
     * May impact on adjudication.
     */
    priorDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.item.prosthesis.priorDate
     */
    _priorDate?: fhir.FhirElement;
    /**
     * May impact on adjudication.
     */
    priorMaterial?: fhir.Coding | undefined;
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
     * The type of product or service.
     */
    type: fhir.Coding | null;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.diagnosisLinkId
     */
    _diagnosisLinkId?: (fhir.FhirElement | null)[];
    /**
     * If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */
    service: fhir.Coding | null;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    serviceDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.item.serviceDate
     */
    _serviceDate?: fhir.FhirElement;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    points?: number | undefined;
    /**
     * Extended properties for primitive element: Claim.item.points
     */
    _points?: fhir.FhirElement;
    /**
     * If a fee is present the associated product/service code must be present.
     */
    net?: fhir.Quantity | undefined;
    /**
     * The UDI code and issuer if applicable for the supplied product.
     */
    udi?: fhir.Coding | undefined;
    /**
     * Physical service site on the patient (limb, tooth, etc.).
     */
    bodySite?: fhir.Coding | undefined;
    /**
     * A region or surface of the site, e.g. limb region or tooth surface(s).
     */
    subSite?: (fhir.Coding | null)[] | undefined;
    /**
     * May impact on adjudication.
     */
    modifier?: (fhir.Coding | null)[] | undefined;
    /**
     * Second tier of goods and services.
     */
    detail?: (fhir.ClaimItemDetail | null)[] | undefined;
    /**
     * The materials and placement date of prior fixed prosthesis.
     */
    prosthesis?: fhir.ClaimItemProsthesis | undefined;
}
/**
 * The list of missing teeth may influence the adjudication of services for example with Bridges.
 */
export interface ClaimMissingTeeth extends fhir.BackboneElement {
    /**
     * Provides the tooth number of the missing tooth.
     */
    tooth: fhir.Coding | null;
    /**
     * Provides the reason for the missing tooth.
     */
    reason?: fhir.Coding | undefined;
    /**
     * Some services and adjudications require this information.
     */
    extractionDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.missingTeeth.extractionDate
     */
    _extractionDate?: fhir.FhirElement;
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
     * The category of claim this is.
     */
    type: 'institutional' | 'oral' | 'pharmacy' | 'professional' | 'vision' | null;
    /**
     * Extended properties for primitive element: Claim.type
     */
    _type?: fhir.FhirElement;
    /**
     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The version of the specification on which this instance relies.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * The version of the specification from which the original instance was created.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.created
     */
    _created?: fhir.FhirElement;
    /**
     * Insurer Identifier, typical BIN number (6 digit).
     */
    target?: fhir.Reference | undefined;
    /**
     * The provider which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the bill, claim pre-determination, pre-authorization.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
     */
    use?: 'complete' | 'exploratory' | 'other' | 'proposed' | undefined;
    /**
     * Extended properties for primitive element: Claim.use
     */
    _use?: fhir.FhirElement;
    /**
     * Immediate (stat), best effort (normal), deferred (deferred).
     */
    priority?: fhir.Coding | undefined;
    /**
     * In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
     */
    fundsReserve?: fhir.Coding | undefined;
    /**
     * Person who created the invoice/claim/pre-determination or pre-authorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * For type=Pharmacy and Vision only.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * Original prescription to support the dispensing of pharmacy services, medications or products.
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
     * Ordered list of patient diagnosis for which care is sought.
     */
    diagnosis?: (fhir.ClaimDiagnosis | null)[] | undefined;
    /**
     * List of patient conditions for which care is sought.
     */
    condition?: (fhir.Coding | null)[] | undefined;
    /**
     * Patient Resource.
     */
    patient: fhir.Reference | null;
    /**
     * Health care programs and insurers are significant payors of health service costs.
     */
    coverage?: (fhir.ClaimCoverage | null)[] | undefined;
    /**
     * To determine extenuating circumstances for coverage.
     */
    exception?: (fhir.Coding | null)[] | undefined;
    /**
     * Often required for over-age dependents.
     */
    school?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.school
     */
    _school?: fhir.FhirElement;
    /**
     * Coverage may be dependent on accidents.
     */
    accident?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.accident
     */
    _accident?: fhir.FhirElement;
    /**
     * Coverage may be dependent on the type of accident.
     */
    accidentType?: fhir.Coding | undefined;
    /**
     * Coverage may be modified based on exception information provided.
     */
    interventionException?: (fhir.Coding | null)[] | undefined;
    /**
     * First tier of goods and services.
     */
    item?: (fhir.ClaimItem | null)[] | undefined;
    /**
     * Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.
     */
    additionalMaterials?: (fhir.Coding | null)[] | undefined;
    /**
     * The list of missing teeth may influence the adjudication of services for example with Bridges.
     */
    missingTeeth?: (fhir.ClaimMissingTeeth | null)[] | undefined;
}
//# sourceMappingURL=Claim.d.ts.map