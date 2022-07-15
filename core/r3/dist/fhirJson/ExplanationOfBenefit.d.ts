import * as fhir from '../fhirJson.js';
/**
 * Other claims which are related to this claim such as prior claim versions or for related services.
 */
export interface ExplanationOfBenefitRelated extends fhir.BackboneElement {
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
export interface ExplanationOfBenefitPayee extends fhir.BackboneElement {
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * organization | patient | practitioner | relatedperson.
     */
    resourceType?: 'organization' | 'patient' | 'practitioner' | 'relatedperson' | undefined;
    /**
     * Party to be reimbursed: Subscriber, provider, other.
     */
    party?: fhir.Reference | undefined;
}
/**
 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
 */
export interface ExplanationOfBenefitInformation extends fhir.BackboneElement {
    /**
     * Sequence of the information element which serves to provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.information.sequence
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
     * Extended properties for primitive element: ExplanationOfBenefit.information.timing[x]
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
     * Extended properties for primitive element: ExplanationOfBenefit.information.value[x]
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
    reason?: fhir.Coding | undefined;
}
/**
 * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
 */
export interface ExplanationOfBenefitCareTeam extends fhir.BackboneElement {
    /**
     * Sequence of careteam which serves to order and provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * The members of the team who provided the overall service.
     */
    provider: fhir.Reference | null;
    /**
     * The practitioner who is billing and responsible for the claimed services rendered to the patient.
     */
    responsible?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.responsible
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
 * Ordered list of patient diagnosis for which care is sought.
 */
export interface ExplanationOfBenefitDiagnosis extends fhir.BackboneElement {
    /**
     * Sequence of diagnosis which serves to provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.diagnosis.sequence
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
export interface ExplanationOfBenefitProcedure extends fhir.BackboneElement {
    /**
     * Sequence of procedures which serves to order and provide a link.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * SB DateTime??
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.date
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
export interface ExplanationOfBenefitInsurance extends fhir.BackboneElement {
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.Reference | undefined;
    /**
     * A list of references from the Insurer to which these services pertain.
     */
    preAuthRef?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.preAuthRef
     */
    _preAuthRef?: (fhir.FhirElement | null)[];
}
/**
 * An accident which resulted in the need for healthcare services.
 */
export interface ExplanationOfBenefitAccident extends fhir.BackboneElement {
    /**
     * Date of an accident which these services are addressing.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.accident.date
     */
    _date?: fhir.FhirElement;
    /**
     * Type of accident: work, auto, etc.
     */
    type?: 'MVA' | 'SCHOOL' | 'SPT' | 'WPA' | undefined;
    /**
     * Where the accident occurred.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * Where the accident occurred.
     */
    locationReference?: fhir.Reference | undefined;
}
/**
 * The adjudications results.
 */
export interface ExplanationOfBenefitItemAdjudication extends fhir.BackboneElement {
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
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.adjudication.value
     */
    _value?: fhir.FhirElement;
}
/**
 * Third tier of goods and services.
 */
export interface ExplanationOfBenefitItemDetailSubDetail extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * The type of product or service.
     */
    type: '_ActInvoiceInterGroupCode' | '_ActInvoiceRootGroupCode' | 'CPINV' | 'CPNDDRGING' | 'CPNDINDING' | 'CPNDSUPING' | 'CSINV' | 'CSPINV' | 'DRUGING' | 'FININV' | 'FRAMEING' | 'LENSING' | 'OHSINV' | 'PAINV' | 'PRDING' | 'RXCINV' | 'RXDINV' | 'SBFINV' | 'VRXINV' | null;
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.factor
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
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ExplanationOfBenefitItemAdjudication | null)[] | undefined;
}
/**
 * Second tier of goods and services.
 */
export interface ExplanationOfBenefitItemDetail extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * ItemType.
     */
    type: '_ActInvoiceInterGroupCode' | '_ActInvoiceRootGroupCode' | 'CPINV' | 'CPNDDRGING' | 'CPNDINDING' | 'CPNDSUPING' | 'CSINV' | 'CSPINV' | 'DRUGING' | 'FININV' | 'FRAMEING' | 'LENSING' | 'OHSINV' | 'PAINV' | 'PRDING' | 'RXCINV' | 'RXDINV' | 'SBFINV' | 'VRXINV' | null;
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.factor
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
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ExplanationOfBenefitItemAdjudication | null)[] | undefined;
    /**
     * Third tier of goods and services.
     */
    subDetail?: (fhir.ExplanationOfBenefitItemDetailSubDetail | null)[] | undefined;
}
/**
 * First tier of goods and services.
 */
export interface ExplanationOfBenefitItem extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.sequence
     */
    _sequence?: fhir.FhirElement;
    /**
     * Careteam applicable for this service or product line.
     */
    careTeamLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.careTeamLinkId
     */
    _careTeamLinkId?: (fhir.FhirElement | null)[];
    /**
     * Diagnosis applicable for this service or product line.
     */
    diagnosisLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.diagnosisLinkId
     */
    _diagnosisLinkId?: (fhir.FhirElement | null)[];
    /**
     * Procedures applicable for this service or product line.
     */
    procedureLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.procedureLinkId
     */
    _procedureLinkId?: (fhir.FhirElement | null)[];
    /**
     * Exceptions, special conditions and supporting information pplicable for this service or product line.
     */
    informationLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.informationLinkId
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
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.serviced[x]
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.factor
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
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ExplanationOfBenefitItemAdjudication | null)[] | undefined;
    /**
     * Second tier of goods and services.
     */
    detail?: (fhir.ExplanationOfBenefitItemDetail | null)[] | undefined;
}
/**
 * The second tier service adjudications for payor added services.
 */
export interface ExplanationOfBenefitAddItemDetail extends fhir.BackboneElement {
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
     * The fee charged for the professional service or product.
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ExplanationOfBenefitItemAdjudication | null)[] | undefined;
}
/**
 * The first tier service adjudications for payor added services.
 */
export interface ExplanationOfBenefitAddItem extends fhir.BackboneElement {
    /**
     * List of input service items which this service line is intended to replace.
     */
    sequenceLinkId?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.sequenceLinkId
     */
    _sequenceLinkId?: (fhir.FhirElement | null)[];
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
     * The fee charged for the professional service or product.
     */
    fee?: fhir.Money | undefined;
    /**
     * A list of note references to the notes provided below.
     */
    noteNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.noteNumber
     */
    _noteNumber?: (fhir.FhirElement | null)[];
    /**
     * The adjudications results.
     */
    adjudication?: (fhir.ExplanationOfBenefitItemAdjudication | null)[] | undefined;
    /**
     * The second tier service adjudications for payor added services.
     */
    detail?: (fhir.ExplanationOfBenefitAddItemDetail | null)[] | undefined;
}
/**
 * Payment details for the claim if the claim has been paid.
 */
export interface ExplanationOfBenefitPayment extends fhir.BackboneElement {
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
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.payment.date
     */
    _date?: fhir.FhirElement;
    /**
     * Payable less any payment adjustment.
     */
    amount?: fhir.Money | undefined;
    /**
     * Payment identifer.
     */
    identifier?: fhir.Identifier | undefined;
}
/**
 * Note text.
 */
export interface ExplanationOfBenefitProcessNote extends fhir.BackboneElement {
    /**
     * An integer associated with each note which may be referred to from each service line item.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.number
     */
    _number?: fhir.FhirElement;
    /**
     * The note purpose: Print/Display.
     */
    type?: 'display' | 'print' | 'printoper' | undefined;
    /**
     * The note text.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.text
     */
    _text?: fhir.FhirElement;
    /**
     * The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
     */
    language?: fhir.CodeableConcept | undefined;
}
/**
 * Benefits Used to date.
 */
export interface ExplanationOfBenefitBenefitBalanceFinancial extends fhir.BackboneElement {
    /**
     * Deductable, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Benefits allowed.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedUnsignedInt?: fhir.FhirElement;
    /**
     * Benefits allowed.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedString?: fhir.FhirElement;
    /**
     * Benefits allowed.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * Benefits used.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.used[x]
     */
    _usedUnsignedInt?: fhir.FhirElement;
    /**
     * Benefits used.
     */
    usedMoney?: fhir.Money | undefined;
}
/**
 * Balance by Benefit Category.
 */
export interface ExplanationOfBenefitBenefitBalance extends fhir.BackboneElement {
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
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.excluded
     */
    _excluded?: fhir.FhirElement;
    /**
     * A short name or tag for the benefit, for example MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.name
     */
    _name?: fhir.FhirElement;
    /**
     * A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.description
     */
    _description?: fhir.FhirElement;
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
    financial?: (fhir.ExplanationOfBenefitBenefitBalanceFinancial | null)[] | undefined;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export interface ExplanationOfBenefit extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ExplanationOfBenefit" | null;
    /**
     * The EOB Business Identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.status
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
    created?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.created
     */
    _created?: fhir.FhirElement;
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
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * Other claims which are related to this claim such as prior claim versions or for related services.
     */
    related?: (fhir.ExplanationOfBenefitRelated | null)[] | undefined;
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
    information?: (fhir.ExplanationOfBenefitInformation | null)[] | undefined;
    /**
     * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
     */
    careTeam?: (fhir.ExplanationOfBenefitCareTeam | null)[] | undefined;
    /**
     * Ordered list of patient diagnosis for which care is sought.
     */
    diagnosis?: (fhir.ExplanationOfBenefitDiagnosis | null)[] | undefined;
    /**
     * Ordered list of patient procedures performed to support the adjudication.
     */
    procedure?: (fhir.ExplanationOfBenefitProcedure | null)[] | undefined;
    /**
     * Precedence (primary, secondary, etc.).
     */
    precedence?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.precedence
     */
    _precedence?: fhir.FhirElement;
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
    item?: (fhir.ExplanationOfBenefitItem | null)[] | undefined;
    /**
     * The first tier service adjudications for payor added services.
     */
    addItem?: (fhir.ExplanationOfBenefitAddItem | null)[] | undefined;
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
    processNote?: (fhir.ExplanationOfBenefitProcessNote | null)[] | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: (fhir.ExplanationOfBenefitBenefitBalance | null)[] | undefined;
}
//# sourceMappingURL=ExplanationOfBenefit.d.ts.map