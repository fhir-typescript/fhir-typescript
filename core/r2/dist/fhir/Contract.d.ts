import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ContractActor type.
 */
export interface ContractActorArgs extends fhir.BackboneElementArgs {
    /**
     * Who or what actors are assigned roles in this Contract.
     */
    entity: fhir.ReferenceArgs | null;
    /**
     * Role type of actors assigned roles in this Contract.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * List of Contract actors.
 */
export declare class ContractActor extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Who or what actors are assigned roles in this Contract.
     */
    entity: fhir.Reference | null;
    /**
     * Role type of actors assigned roles in this Contract.
     */
    role: fhir.CodeableConcept[];
    /**
     * Default constructor for ContractActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractActorArgs>, options?: fhir.FhirConstructorOptions);
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
    unitPrice?: fhir.QuantityArgs | undefined;
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
    net?: fhir.QuantityArgs | undefined;
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
    unitPrice?: fhir.Quantity | undefined;
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
    net?: fhir.Quantity | undefined;
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
    signature: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Contract.signer.signature
     */
    _signature?: fhir.FhirElementArgs;
}
/**
 * Party signing this Contract.
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
    signature: fhir.FhirString | null;
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
 * Valid arguments for the ContractTermActor type.
 */
export interface ContractTermActorArgs extends fhir.BackboneElementArgs {
    /**
     * The actor assigned a role in this Contract Provision.
     */
    entity: fhir.ReferenceArgs | null;
    /**
     * Role played by the actor assigned this role in this Contract Provision.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * List of actors participating in this Contract Provision.
 */
export declare class ContractTermActor extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actor assigned a role in this Contract Provision.
     */
    entity: fhir.Reference | null;
    /**
     * Role played by the actor assigned this role in this Contract Provision.
     */
    role: fhir.CodeableConcept[];
    /**
     * Default constructor for ContractTermActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermActorArgs>, options?: fhir.FhirConstructorOptions);
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
    unitPrice?: fhir.QuantityArgs | undefined;
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
    net?: fhir.QuantityArgs | undefined;
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
    unitPrice?: fhir.Quantity | undefined;
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
    net?: fhir.Quantity | undefined;
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
     * Who or what this Contract Provision is about.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Action stipulated by this Contract Provision.
     */
    action?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    actionReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * List of actors participating in this Contract Provision.
     */
    actor?: fhir.ContractTermActorArgs[] | undefined;
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
     * Who or what this Contract Provision is about.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Action stipulated by this Contract Provision.
     */
    action: fhir.CodeableConcept[];
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    actionReason: fhir.CodeableConcept[];
    /**
     * List of actors participating in this Contract Provision.
     */
    actor: fhir.ContractTermActor[];
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
     * Who and/or what this Contract is about: typically a Patient, Organization, or valued items such as goods and services.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
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
     * List of Contract actors.
     */
    actor?: fhir.ContractActorArgs[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhir.ContractValuedItemArgs[] | undefined;
    /**
     * Party signing this Contract.
     */
    signer?: fhir.ContractSignerArgs[] | undefined;
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
     * When this  Contract was issued.
     */
    issued?: fhir.FhirDateTime | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.Period | undefined;
    /**
     * Who and/or what this Contract is about: typically a Patient, Organization, or valued items such as goods and services.
     */
    subject: fhir.Reference[];
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
     * List of Contract actors.
     */
    actor: fhir.ContractActor[];
    /**
     * Contract Valued Item List.
     */
    valuedItem: fhir.ContractValuedItem[];
    /**
     * Party signing this Contract.
     */
    signer: fhir.ContractSigner[];
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