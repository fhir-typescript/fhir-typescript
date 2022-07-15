import * as fhir from '../fhirJson.js';
/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export interface ContractContentDefinition extends fhir.BackboneElement {
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhir.Reference | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.contentDefinition.publicationDate
     */
    _publicationDate?: fhir.FhirElement;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: 'amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' | 'executed' | 'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'resolved' | 'revoked' | 'terminated' | null;
    /**
     * Extended properties for primitive element: Contract.contentDefinition.publicationStatus
     */
    _publicationStatus?: fhir.FhirElement;
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.contentDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
}
/**
 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
 */
export interface ContractTermSecurityLabel extends fhir.BackboneElement {
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.securityLabel.number
     */
    _number?: (fhir.FhirElement | null)[];
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhir.Coding | null;
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: (fhir.Coding | null)[] | undefined;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: (fhir.Coding | null)[] | undefined;
}
/**
 * Offer Recipient.
 */
export interface ContractTermOfferParty extends fhir.BackboneElement {
    /**
     * Participant in the offer.
     */
    reference: (fhir.Reference | null)[] | null;
    /**
     * How the party participates in the offer.
     */
    role: fhir.CodeableConcept | null;
}
/**
 * Response to offer text.
 */
export interface ContractTermOfferAnswer extends fhir.BackboneElement {
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.answer.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: fhir.Reference | undefined;
}
/**
 * The matter of concern in the context of this provision of the agrement.
 */
export interface ContractTermOffer extends fhir.BackboneElement {
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: (fhir.ContractTermOfferParty | null)[] | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhir.Reference | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhir.CodeableConcept | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Response to offer text.
     */
    answer?: (fhir.ContractTermOfferAnswer | null)[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.text
     */
    _text?: fhir.FhirElement;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.linkId
     */
    _linkId?: (fhir.FhirElement | null)[];
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.offer.securityLabelNumber
     */
    _securityLabelNumber?: (fhir.FhirElement | null)[];
}
/**
 * Circumstance of the asset.
 */
export interface ContractTermAssetContext extends fhir.BackboneElement {
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhir.Reference | undefined;
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Context description.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.context.text
     */
    _text?: fhir.FhirElement;
}
/**
 * Contract Valued Item List.
 */
export interface ContractTermAssetValuedItem extends fhir.BackboneElement {
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
     * Extended properties for primitive element: Contract.term.asset.valuedItem.effectiveTime
     */
    _effectiveTime?: fhir.FhirElement;
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
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.valuedItem.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: number | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.valuedItem.points
     */
    _points?: fhir.FhirElement;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Terms of valuation.
     */
    payment?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.valuedItem.payment
     */
    _payment?: fhir.FhirElement;
    /**
     * When payment is due.
     */
    paymentDate?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.valuedItem.paymentDate
     */
    _paymentDate?: fhir.FhirElement;
    /**
     * Who will make payment.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhir.Reference | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.valuedItem.linkId
     */
    _linkId?: (fhir.FhirElement | null)[];
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.valuedItem.securityLabelNumber
     */
    _securityLabelNumber?: (fhir.FhirElement | null)[];
}
/**
 * Contract Term Asset List.
 */
export interface ContractTermAsset extends fhir.BackboneElement {
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhir.CodeableConcept | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: (fhir.Reference | null)[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhir.Coding | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: (fhir.ContractTermAssetContext | null)[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.condition
     */
    _condition?: fhir.FhirElement;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: (fhir.Period | null)[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: (fhir.Period | null)[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.text
     */
    _text?: fhir.FhirElement;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.linkId
     */
    _linkId?: (fhir.FhirElement | null)[];
    /**
     * Response to assets.
     */
    answer?: (fhir.ContractTermOfferAnswer | null)[] | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.asset.securityLabelNumber
     */
    _securityLabelNumber?: (fhir.FhirElement | null)[];
    /**
     * Contract Valued Item List.
     */
    valuedItem?: (fhir.ContractTermAssetValuedItem | null)[] | undefined;
}
/**
 * Entity of the action.
 */
export interface ContractTermActionSubject extends fhir.BackboneElement {
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference: (fhir.Reference | null)[] | null;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhir.CodeableConcept | undefined;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export interface ContractTermAction extends fhir.BackboneElement {
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.doNotPerform
     */
    _doNotPerform?: fhir.FhirElement;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Entity of the action.
     */
    subject?: (fhir.ContractTermActionSubject | null)[] | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhir.CodeableConcept | null;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.linkId
     */
    _linkId?: (fhir.FhirElement | null)[];
    /**
     * Current state of the term action.
     */
    status: fhir.CodeableConcept | null;
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhir.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.contextLinkId
     */
    _contextLinkId?: (fhir.FhirElement | null)[];
    /**
     * When action happens.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * When action happens.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * When action happens.
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: (fhir.Reference | null)[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.requesterLinkId
     */
    _requesterLinkId?: (fhir.FhirElement | null)[];
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhir.CodeableConcept | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.performerLinkId
     */
    _performerLinkId?: (fhir.FhirElement | null)[];
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.reason
     */
    _reason?: (fhir.FhirElement | null)[];
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.reasonLinkId
     */
    _reasonLinkId?: (fhir.FhirElement | null)[];
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: (number | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.term.action.securityLabelNumber
     */
    _securityLabelNumber?: (fhir.FhirElement | null)[];
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
     * The entity that the term applies to.
     */
    topicCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The entity that the term applies to.
     */
    topicReference?: fhir.Reference | undefined;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.term.text
     */
    _text?: fhir.FhirElement;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: (fhir.ContractTermSecurityLabel | null)[] | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhir.ContractTermOffer | null;
    /**
     * Contract Term Asset List.
     */
    asset?: (fhir.ContractTermAsset | null)[] | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: (fhir.ContractTermAction | null)[] | undefined;
    /**
     * Nested group of Contract Provisions.
     */
    group?: (fhir.ContractTerm | null)[] | undefined;
}
/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
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
    signature: (fhir.Signature | null)[] | null;
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
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface Contract extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Contract" | null;
    /**
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.url
     */
    _url?: fhir.FhirElement;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.version
     */
    _version?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: 'amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' | 'executed' | 'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'resolved' | 'revoked' | 'terminated' | undefined;
    /**
     * Extended properties for primitive element: Contract.status
     */
    _status?: fhir.FhirElement;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhir.CodeableConcept | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhir.Reference | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.instantiatesUri
     */
    _instantiatesUri?: fhir.FhirElement;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConcept | undefined;
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
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhir.CodeableConcept | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
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
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: (fhir.Reference | null)[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.name
     */
    _name?: fhir.FhirElement;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.title
     */
    _title?: fhir.FhirElement;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: Contract.subtitle
     */
    _subtitle?: fhir.FhirElement;
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Contract.alias
     */
    _alias?: (fhir.FhirElement | null)[];
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhir.Reference | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhir.CodeableConcept | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicReference?: fhir.Reference | undefined;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhir.ContractContentDefinition | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: (fhir.ContractTerm | null)[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: (fhir.Reference | null)[] | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: (fhir.Reference | null)[] | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: (fhir.ContractSigner | null)[] | undefined;
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
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: fhir.Attachment | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: fhir.Reference | undefined;
}
//# sourceMappingURL=Contract.d.ts.map