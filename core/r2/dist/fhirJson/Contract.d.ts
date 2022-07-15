import * as fhir from '../fhirJson.js';
/**
 * List of Contract actors.
 */
export interface ContractActor extends fhir.BackboneElement {
    /**
     * Who or what actors are assigned roles in this Contract.
     */
    entity: fhir.Reference | null;
    /**
     * Role type of actors assigned roles in this Contract.
     */
    role?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * Contract Valued Item List.
 */
export interface ContractValuedItem extends fhir.BackboneElement {
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: fhir.Reference | undefined;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.valuedItem.effectiveTime
     */
    _effectiveTime?: fhir.FhirElement;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.valuedItem.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.valuedItem.points
     */
    _points?: fhir.FhirElement;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Quantity | undefined;
}
/**
 * Party signing this Contract.
 */
export interface ContractSigner extends fhir.BackboneElement {
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: fhir.Coding | null;
    /**
     * Party which is a signator to this Contract.
     */
    party: fhir.Reference | null;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: string | null;
    /**
     * Extended properties for primitive element: Contract.signer.signature
     */
    _signature?: fhir.FhirElement;
}
/**
 * List of actors participating in this Contract Provision.
 */
export interface ContractTermActor extends fhir.BackboneElement {
    /**
     * The actor assigned a role in this Contract Provision.
     */
    entity: fhir.Reference | null;
    /**
     * Role played by the actor assigned this role in this Contract Provision.
     */
    role?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * Contract Provision Valued Item List.
 */
export interface ContractTermValuedItem extends fhir.BackboneElement {
    /**
     * Specific type of Contract Provision Valued Item that may be priced.
     */
    entityCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific type of Contract Provision Valued Item that may be priced.
     */
    entityReference?: fhir.Reference | undefined;
    /**
     * Identifies a Contract Provision Valued Item instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Indicates the time during which this Contract Term ValuedItem information is effective.
     */
    effectiveTime?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.valuedItem.effectiveTime
     */
    _effectiveTime?: fhir.FhirElement;
    /**
     * Specifies the units by which the Contract Provision Valued Item is measured or counted, and quantifies the countable or measurable Contract Term Valued Item instances.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A Contract Provision Valued Item unit valuation measure.
     */
    unitPrice?: fhir.Quantity | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.valuedItem.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.
     */
    points?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.valuedItem.points
     */
    _points?: fhir.FhirElement;
    /**
     * Expresses the product of the Contract Provision Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Quantity | undefined;
}
/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export interface ContractTerm extends fhir.BackboneElement {
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.issued
     */
    _issued?: fhir.FhirElement;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Who or what this Contract Provision is about.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Action stipulated by this Contract Provision.
     */
    action?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    actionReason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * List of actors participating in this Contract Provision.
     */
    actor?: (fhir.ContractTermActor | null)[] | undefined;
    /**
     * Human readable form of this Contract Provision.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.text
     */
    _text?: fhir.FhirElement;
    /**
     * Contract Provision Valued Item List.
     */
    valuedItem?: (fhir.ContractTermValuedItem | null)[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: (fhir.ContractTerm | null)[] | undefined;
}
/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export interface ContractFriendly extends fhir.BackboneElement {
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentReference?: fhir.Reference | undefined;
}
/**
 * List of Legal expressions or representations of this Contract.
 */
export interface ContractLegal extends fhir.BackboneElement {
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: fhir.Reference | undefined;
}
/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export interface ContractRule extends fhir.BackboneElement {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: fhir.Reference | undefined;
}
/**
 * A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
 */
export interface Contract extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Contract" | null;
    /**
     * Unique identifier for this Contract.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.issued
     */
    _issued?: fhir.FhirElement;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * Who and/or what this Contract is about: typically a Patient, Organization, or valued items such as goods and services.
     */
    subject?: (fhir.Reference | null)[] | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: (fhir.Reference | null)[] | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: (fhir.Reference | null)[] | undefined;
    /**
     * Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.
     */
    subType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Action stipulated by this Contract.
     */
    action?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Reason for action stipulated by this Contract.
     */
    actionReason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * List of Contract actors.
     */
    actor?: (fhir.ContractActor | null)[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: (fhir.ContractValuedItem | null)[] | undefined;
    /**
     * Party signing this Contract.
     */
    signer?: (fhir.ContractSigner | null)[] | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: (fhir.ContractTerm | null)[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    bindingAttachment?: fhir.Attachment | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    bindingReference?: fhir.Reference | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: (fhir.ContractFriendly | null)[] | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: (fhir.ContractLegal | null)[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: (fhir.ContractRule | null)[] | undefined;
}
//# sourceMappingURL=Contract.d.ts.map