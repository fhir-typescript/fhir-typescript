import * as fhir from '../fhir.js';
import { ContractStatusCodeType } from '../fhirValueSets/ContractStatusCodes.js';
/**
 * Valid arguments for the ContractAgent type.
 */
export interface ContractAgentArgs extends fhir.BackboneElementArgs {
    /**
     * Who or what parties are assigned roles in this Contract.
     */
    actor: fhir.ReferenceArgs | null;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export declare class ContractAgent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Who or what parties are assigned roles in this Contract.
     */
    actor: fhir.Reference | null;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role: fhir.CodeableConcept[];
    /**
     * Default constructor for ContractAgent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractAgentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractSigner type.
 */
export interface ContractSignerArgs extends fhir.BackboneElementArgs {
    /**
     * Role of this Contract signer, e.g. notary, grantee.
     */
    type: fhir.CodingArgs | null;
    /**
     * Party which is a signator to this Contract.
     */
    party: fhir.ReferenceArgs | null;
    /**
     * Legally binding Contract DSIG signature contents in Base64.
     */
    signature: fhir.SignatureArgs[] | null;
}
/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 */
export declare class ContractSigner extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    signature: fhir.Signature[];
    /**
     * Default constructor for ContractSigner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractSignerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractValuedItem type.
 */
export interface ContractValuedItemArgs extends fhir.BackboneElementArgs {
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entity?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entityReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Contract.valuedItem.effectiveTime
     */
    _effectiveTime?: fhir.FhirElementArgs;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Contract.valuedItem.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Contract.valuedItem.points
     */
    _points?: fhir.FhirElementArgs;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
}
/**
 * Contract Valued Item List.
 */
export declare class ContractValuedItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entity?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.valuedItem.entity[x]
     */
    protected static readonly _fts_entityIsChoice: true;
    /**
     * Identifies a Contract Valued Item instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Indicates the time during which this Contract ValuedItem information is effective.
     */
    effectiveTime?: fhir.FhirDateTime | undefined;
    /**
     * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A Contract Valued Item unit valuation measure.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: fhir.FhirDecimal | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Default constructor for ContractValuedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractValuedItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermAgent type.
 */
export interface ContractTermAgentArgs extends fhir.BackboneElementArgs {
    /**
     * The agent assigned a role in this Contract Provision.
     */
    actor: fhir.ReferenceArgs | null;
    /**
     * Role played by the agent assigned this role in the execution of this Contract Provision.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export declare class ContractTermAgent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The agent assigned a role in this Contract Provision.
     */
    actor: fhir.Reference | null;
    /**
     * Role played by the agent assigned this role in the execution of this Contract Provision.
     */
    role: fhir.CodeableConcept[];
    /**
     * Default constructor for ContractTermAgent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermAgentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermValuedItem type.
 */
export interface ContractTermValuedItemArgs extends fhir.BackboneElementArgs {
    /**
     * Specific type of Contract Provision Valued Item that may be priced.
     */
    entity?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Specific type of Contract Provision Valued Item that may be priced.
     */
    entityCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specific type of Contract Provision Valued Item that may be priced.
     */
    entityReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies a Contract Provision Valued Item instance.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Indicates the time during which this Contract Term ValuedItem information is effective.
     */
    effectiveTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.valuedItem.effectiveTime
     */
    _effectiveTime?: fhir.FhirElementArgs;
    /**
     * Specifies the units by which the Contract Provision Valued Item is measured or counted, and quantifies the countable or measurable Contract Term Valued Item instances.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * A Contract Provision Valued Item unit valuation measure.
     */
    unitPrice?: fhir.MoneyArgs | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.valuedItem.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.
     */
    points?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.valuedItem.points
     */
    _points?: fhir.FhirElementArgs;
    /**
     * Expresses the product of the Contract Provision Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
}
/**
 * Contract Provision Valued Item List.
 */
export declare class ContractTermValuedItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specific type of Contract Provision Valued Item that may be priced.
     */
    entity?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.term.valuedItem.entity[x]
     */
    protected static readonly _fts_entityIsChoice: true;
    /**
     * Identifies a Contract Provision Valued Item instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Indicates the time during which this Contract Term ValuedItem information is effective.
     */
    effectiveTime?: fhir.FhirDateTime | undefined;
    /**
     * Specifies the units by which the Contract Provision Valued Item is measured or counted, and quantifies the countable or measurable Contract Term Valued Item instances.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A Contract Provision Valued Item unit valuation measure.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.
     */
    points?: fhir.FhirDecimal | undefined;
    /**
     * Expresses the product of the Contract Provision Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Default constructor for ContractTermValuedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermValuedItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTerm type.
 */
export interface ContractTermArgs extends fhir.BackboneElementArgs {
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.issued
     */
    _issued?: fhir.FhirElementArgs;
    /**
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhir.PeriodArgs | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Contract.term.topic, as a Contract Resource subpart, is handled in the same manner as the Contract Resource as discussed above.
     */
    topic?: fhir.ReferenceArgs[] | undefined;
    /**
     * Action stipulated by this Contract Provision.
     */
    action?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    actionReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    agent?: fhir.ContractTermAgentArgs[] | undefined;
    /**
     * Human readable form of this Contract Provision.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Contract Provision Valued Item List.
     */
    valuedItem?: fhir.ContractTermValuedItemArgs[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: fhir.ContractTermArgs[] | undefined;
}
/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export declare class ContractTerm extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When this Contract Provision was issued.
     */
    issued?: fhir.FhirDateTime | undefined;
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
     * The Contract.term.topic, as a Contract Resource subpart, is handled in the same manner as the Contract Resource as discussed above.
     */
    topic: fhir.Reference[];
    /**
     * Action stipulated by this Contract Provision.
     */
    action: fhir.CodeableConcept[];
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    actionReason: fhir.CodeableConcept[];
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabel: fhir.Coding[];
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    agent: fhir.ContractTermAgent[];
    /**
     * Human readable form of this Contract Provision.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Contract Provision Valued Item List.
     */
    valuedItem: fhir.ContractTermValuedItem[];
    /**
     * Nested group of Contract Provisions.
     */
    group: fhir.ContractTerm[];
    /**
     * Default constructor for ContractTerm - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractFriendly type.
 */
export interface ContractFriendlyArgs extends fhir.BackboneElementArgs {
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    content?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export declare class ContractFriendly extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
    content: (fhir.Attachment | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Contract.friendly.content[x]
     */
    protected static readonly _fts_contentIsChoice: true;
    /**
     * Default constructor for ContractFriendly - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractFriendlyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractLegal type.
 */
export interface ContractLegalArgs extends fhir.BackboneElementArgs {
    /**
     * Contract legal text in human renderable form.
     */
    content?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Contract legal text in human renderable form.
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * List of Legal expressions or representations of this Contract.
 */
export declare class ContractLegal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Contract legal text in human renderable form.
     */
    content: (fhir.Attachment | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Contract.legal.content[x]
     */
    protected static readonly _fts_contentIsChoice: true;
    /**
     * Default constructor for ContractLegal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractLegalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractRule type.
 */
export interface ContractRuleArgs extends fhir.BackboneElementArgs {
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    content?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export declare class ContractRule extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
    content: (fhir.Attachment | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Contract.rule.content[x]
     */
    protected static readonly _fts_contentIsChoice: true;
    /**
     * Default constructor for ContractRule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractRuleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Contract type.
 */
export interface ContractArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Contract" | undefined;
    /**
     * Unique identifier for this Contract.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: fhir.FhirCode<ContractStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Contract.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * When this  Contract was issued.
     */
    issued?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Contract.issued
     */
    _issued?: fhir.FhirElementArgs;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.PeriodArgs | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhir.ReferenceArgs[] | undefined;
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority?: fhir.ReferenceArgs[] | undefined;
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain?: fhir.ReferenceArgs[] | undefined;
    /**
     * Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.
     */
    subType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Action stipulated by this Contract.
     */
    action?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Reason for action stipulated by this Contract.
     */
    actionReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The type of decision made by a grantor with respect to an offer made by a grantee.
     */
    decisionType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConceptArgs | undefined;
    /**
     * A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    agent?: fhir.ContractAgentArgs[] | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhir.ContractSignerArgs[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhir.ContractValuedItemArgs[] | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhir.ContractTermArgs[] | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    binding?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    bindingAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    bindingReference?: fhir.ReferenceArgs | undefined;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly?: fhir.ContractFriendlyArgs[] | undefined;
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal?: fhir.ContractLegalArgs[] | undefined;
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule?: fhir.ContractRuleArgs[] | undefined;
}
/**
 * A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
 */
export declare class Contract extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Contract";
    /**
     * Unique identifier for this Contract.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: fhir.FhirCode<ContractStatusCodeType> | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: fhir.FhirDateTime | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
     */
    subject: fhir.Reference[];
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic: fhir.Reference[];
    /**
     * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */
    authority: fhir.Reference[];
    /**
     * Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */
    domain: fhir.Reference[];
    /**
     * Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.
     */
    subType: fhir.CodeableConcept[];
    /**
     * Action stipulated by this Contract.
     */
    action: fhir.CodeableConcept[];
    /**
     * Reason for action stipulated by this Contract.
     */
    actionReason: fhir.CodeableConcept[];
    /**
     * The type of decision made by a grantor with respect to an offer made by a grantee.
     */
    decisionType?: fhir.CodeableConcept | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConcept | undefined;
    /**
     * A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.
     */
    securityLabel: fhir.Coding[];
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    agent: fhir.ContractAgent[];
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer: fhir.ContractSigner[];
    /**
     * Contract Valued Item List.
     */
    valuedItem: fhir.ContractValuedItem[];
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term: fhir.ContractTerm[];
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    binding?: (fhir.Attachment | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.binding[x]
     */
    protected static readonly _fts_bindingIsChoice: true;
    /**
     * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */
    friendly: fhir.ContractFriendly[];
    /**
     * List of Legal expressions or representations of this Contract.
     */
    legal: fhir.ContractLegal[];
    /**
     * List of Computable Policy Rule Language Representations of this Contract.
     */
    rule: fhir.ContractRule[];
    /**
     * Default constructor for Contract - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Contract.d.ts.map