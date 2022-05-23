import * as fhir from '../fhir.js';
import { ContractPublicationstatusCodeType } from '../fhirValueSets/ContractPublicationstatusCodes.js';
import { ContractStatusCodeType } from '../fhirValueSets/ContractStatusCodes.js';
/**
 * Valid arguments for the ContractContentDefinition type.
 */
export interface ContractContentDefinitionArgs extends fhir.BackboneElementArgs {
    /**
     * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance policy or benefits under a program, e.g., workers compensation.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Detailed Precusory content type.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The  individual or organization that published the Contract precursor content.
     */
    publisher?: fhir.ReferenceArgs | undefined;
    /**
     * The date (and optionally time) when the contract was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the contract changes.
     */
    publicationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: fhir.FhirCode<ContractPublicationstatusCodeType> | string | undefined;
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
}
/**
 * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
 */
export declare class ContractContentDefinition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    publicationDate?: fhir.FhirDateTime | undefined;
    /**
     * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated.
     */
    publicationStatus: fhir.FhirCode<ContractPublicationstatusCodeType> | null;
    /**
     * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on the use and publishing of the Contract precursor content.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for ContractContentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractContentDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for publicationStatus (Contract.contentDefinition.publicationStatus)
     */
    static get publicationStatusRequiredCodes(): {
        readonly Amended: "amended";
        readonly Appended: "appended";
        readonly Cancelled: "cancelled";
        readonly Disputed: "disputed";
        readonly EnteredInError: "entered-in-error";
        readonly Executable: "executable";
        readonly Executed: "executed";
        readonly Negotiable: "negotiable";
        readonly Offered: "offered";
        readonly Policy: "policy";
        readonly Rejected: "rejected";
        readonly Renewed: "renewed";
        readonly Resolved: "resolved";
        readonly Revoked: "revoked";
        readonly Terminated: "terminated";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermSecurityLabel type.
 */
export interface ContractTermSecurityLabelArgs extends fhir.BackboneElementArgs {
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number?: fhir.FhirUnsignedInt[] | number[] | undefined;
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhir.CodingArgs | null;
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category?: fhir.CodingArgs[] | undefined;
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control?: fhir.CodingArgs[] | undefined;
}
/**
 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
 */
export declare class ContractTermSecurityLabel extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Number used to link this term or term element to the applicable Security Label.
     */
    number: fhir.FhirUnsignedInt[];
    /**
     * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
     */
    classification: fhir.Coding | null;
    /**
     * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
     */
    category: fhir.Coding[];
    /**
     * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
     */
    control: fhir.Coding[];
    /**
     * Default constructor for ContractTermSecurityLabel - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermSecurityLabelArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermOfferParty type.
 */
export interface ContractTermOfferPartyArgs extends fhir.BackboneElementArgs {
    /**
     * Participant in the offer.
     */
    reference: fhir.ReferenceArgs[] | null;
    /**
     * How the party participates in the offer.
     */
    role: fhir.CodeableConceptArgs | null;
}
/**
 * Offer Recipient.
 */
export declare class ContractTermOfferParty extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Participant in the offer.
     */
    reference: fhir.Reference[];
    /**
     * How the party participates in the offer.
     */
    role: fhir.CodeableConcept | null;
    /**
     * Default constructor for ContractTermOfferParty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermOfferPartyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermOfferAnswer type.
 */
export interface ContractTermOfferAnswerArgs extends fhir.BackboneElementArgs {
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    value?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Response to offer text.
 */
export declare class ContractTermOfferAnswer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warrently duration, or whether biospecimen may be used for further research.
     */
    value: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Contract.term.offer.answer.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for ContractTermOfferAnswer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermOfferAnswerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermOffer type.
 */
export interface ContractTermOfferArgs extends fhir.BackboneElementArgs {
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Offer Recipient.
     */
    party?: fhir.ContractTermOfferPartyArgs[] | undefined;
    /**
     * The Contract.topic may be an application for or offer of a policy or service (e.g., uri to a consent directive form or a health insurance policy), which becomes the Contract once accepted by both the grantor and grantee.
     * The Contract Resource may function simply as the computable representation of the executed contract, which may be the attached to the Contract Resource as the “binding” or as the “friendly” electronic form.  For example, a Contract Resource may be automatically populated with the values expressed in a related QuestionnaireResponse.
     * However, the Contract Resource may be considered the legally binding contract if it is the only “executed” form of this contract, and includes the signatures as *The Contract Resource may function as the computable representation of an application or offer in a pre-executed Contract if the grantor has not entered any values.  In this case, it is populated with values in a “legal” form of the application or offer or by the values in an associated Questionnaire.  If the grantor has filled in the legal form or the associated Questionnaire Response, then these values are used to populate a pre-executed Contract Resource.
     * If the Contract.topic is considered an application or offer, then the policy is often required to be attached as the “legal” basis for the application to ensure “informed consent” to the contract, and that any discrepancy between the application and the policy are interpreted against the policy.  Implementers should check organizational and jurisdictional policies to determine the relationship among multiple representations of a contract pre- and post-execution.
     */
    topic?: fhir.ReferenceArgs | undefined;
    /**
     * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
     */
    decision?: fhir.CodeableConceptArgs | undefined;
    /**
     * How the decision about a Contract was conveyed.
     */
    decisionMode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Response to offer text.
     */
    answer?: fhir.ContractTermOfferAnswerArgs[] | undefined;
    /**
     * Human readable form of this Contract Offer.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
}
/**
 * The matter of concern in the context of this provision of the agrement.
 */
export declare class ContractTermOffer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Unique identifier for this particular Contract Provision.
     */
    identifier: fhir.Identifier[];
    /**
     * Offer Recipient.
     */
    party: fhir.ContractTermOfferParty[];
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
    decisionMode: fhir.CodeableConcept[];
    /**
     * Response to offer text.
     */
    answer: fhir.ContractTermOfferAnswer[];
    /**
     * Human readable form of this Contract Offer.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The id of the clause or question text of the offer in the referenced questionnaire/response.
     */
    linkId: fhir.FhirString[];
    /**
     * Security labels that protects the offer.
     */
    securityLabelNumber: fhir.FhirUnsignedInt[];
    /**
     * Default constructor for ContractTermOffer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermOfferArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for decision (Contract.term.offer.decision)
     */
    static get decisionExtensibleCodings(): {
        readonly ActConsentDirective: fhir.Coding;
        readonly EmergencyOnly: fhir.Coding;
        readonly GrantorChoice: fhir.Coding;
        readonly ImpliedConsent: fhir.Coding;
        readonly ImpliedConsentWithOpportunityToDissent: fhir.Coding;
        readonly NoConsent: fhir.Coding;
        readonly NoticeOfPrivacyPractices: fhir.Coding;
        readonly OptIn: fhir.Coding;
        readonly OptInWithRestrictions: fhir.Coding;
        readonly OpOut: fhir.Coding;
        readonly OptOutWithExceptions: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermAssetContext type.
 */
export interface ContractTermAssetContextArgs extends fhir.BackboneElementArgs {
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhir.ReferenceArgs | undefined;
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Context description.
     */
    text?: fhir.FhirString | string | undefined;
}
/**
 * Circumstance of the asset.
 */
export declare class ContractTermAssetContext extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
     */
    reference?: fhir.Reference | undefined;
    /**
     * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
     */
    code: fhir.CodeableConcept[];
    /**
     * Context description.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ContractTermAssetContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermAssetContextArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermAssetValuedItem type.
 */
export interface ContractTermAssetValuedItemArgs extends fhir.BackboneElementArgs {
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
     * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */
    points?: fhir.FhirDecimal | number | undefined;
    /**
     * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */
    net?: fhir.MoneyArgs | undefined;
    /**
     * Terms of valuation.
     */
    payment?: fhir.FhirString | string | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Who will make payment.
     */
    responsible?: fhir.ReferenceArgs | undefined;
    /**
     * Who will receive payment.
     */
    recipient?: fhir.ReferenceArgs | undefined;
    /**
     * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
}
/**
 * Contract Valued Item List.
 */
export declare class ContractTermAssetValuedItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specific type of Contract Valued Item that may be priced.
     */
    entity?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.term.asset.valuedItem.entity[x]
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
     * Terms of valuation.
     */
    payment?: fhir.FhirString | undefined;
    /**
     * When payment is due.
     */
    paymentDate?: fhir.FhirDateTime | undefined;
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
    linkId: fhir.FhirString[];
    /**
     * A set of security labels that define which terms are controlled by this condition.
     */
    securityLabelNumber: fhir.FhirUnsignedInt[];
    /**
     * Default constructor for ContractTermAssetValuedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermAssetValuedItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermAsset type.
 */
export interface ContractTermAssetArgs extends fhir.BackboneElementArgs {
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhir.CodeableConceptArgs | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Associated entities.
     */
    typeReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhir.CodingArgs | undefined;
    /**
     * Circumstance of the asset.
     */
    context?: fhir.ContractTermAssetContextArgs[] | undefined;
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: fhir.FhirString | string | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Asset relevant contractual time period.
     */
    period?: fhir.PeriodArgs[] | undefined;
    /**
     * Time period of asset use.
     */
    usePeriod?: fhir.PeriodArgs[] | undefined;
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Response to assets.
     */
    answer?: fhir.ContractTermOfferAnswerArgs[] | undefined;
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
    /**
     * Contract Valued Item List.
     */
    valuedItem?: fhir.ContractTermAssetValuedItemArgs[] | undefined;
}
/**
 * Contract Term Asset List.
 */
export declare class ContractTermAsset extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Differentiates the kind of the asset .
     */
    scope?: fhir.CodeableConcept | undefined;
    /**
     * Target entity type about which the term may be concerned.
     */
    type: fhir.CodeableConcept[];
    /**
     * Associated entities.
     */
    typeReference: fhir.Reference[];
    /**
     * May be a subtype or part of an offered asset.
     */
    subtype: fhir.CodeableConcept[];
    /**
     * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
     */
    relationship?: fhir.Coding | undefined;
    /**
     * Circumstance of the asset.
     */
    context: fhir.ContractTermAssetContext[];
    /**
     * Description of the quality and completeness of the asset that imay be a factor in its valuation.
     */
    condition?: fhir.FhirString | undefined;
    /**
     * Type of Asset availability for use or ownership.
     */
    periodType: fhir.CodeableConcept[];
    /**
     * Asset relevant contractual time period.
     */
    period: fhir.Period[];
    /**
     * Time period of asset use.
     */
    usePeriod: fhir.Period[];
    /**
     * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
     */
    linkId: fhir.FhirString[];
    /**
     * Response to assets.
     */
    answer: fhir.ContractTermOfferAnswer[];
    /**
     * Security labels that protects the asset.
     */
    securityLabelNumber: fhir.FhirUnsignedInt[];
    /**
     * Contract Valued Item List.
     */
    valuedItem: fhir.ContractTermAssetValuedItem[];
    /**
     * Default constructor for ContractTermAsset - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermAssetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for relationship (Contract.term.asset.relationship)
     */
    static get relationshipExtensibleCodings(): {
        readonly Account: fhir.Coding;
        readonly ActivityDefinition: fhir.Coding;
        readonly AdverseEvent: fhir.Coding;
        readonly AllergyIntolerance: fhir.Coding;
        readonly CDADocuments: fhir.Coding;
        readonly Appointment: fhir.Coding;
        readonly AppointmentResponse: fhir.Coding;
        readonly AuditEvent: fhir.Coding;
        readonly Basic: fhir.Coding;
        readonly Binary: fhir.Coding;
        readonly BiologicallyDerivedProduct: fhir.Coding;
        readonly BodyStructure: fhir.Coding;
        readonly Bundle: fhir.Coding;
        readonly CapabilityStatement: fhir.Coding;
        readonly CarePlan: fhir.Coding;
        readonly CareTeam: fhir.Coding;
        readonly CatalogEntry: fhir.Coding;
        readonly ChargeItem: fhir.Coding;
        readonly ChargeItemDefinition: fhir.Coding;
        readonly Claim: fhir.Coding;
        readonly ClaimResponse: fhir.Coding;
        readonly ClinicalImpression: fhir.Coding;
        readonly CodeSystem: fhir.Coding;
        readonly Communication: fhir.Coding;
        readonly CommunicationRequest: fhir.Coding;
        readonly CompartmentDefinition: fhir.Coding;
        readonly Composition: fhir.Coding;
        readonly ConceptMap: fhir.Coding;
        readonly Condition: fhir.Coding;
        readonly Consent: fhir.Coding;
        readonly Contract: fhir.Coding;
        readonly Coverage: fhir.Coding;
        readonly CoverageEligibilityRequest: fhir.Coding;
        readonly CoverageEligibilityResponse: fhir.Coding;
        readonly DetectedIssue: fhir.Coding;
        readonly Device: fhir.Coding;
        readonly DeviceDefinition: fhir.Coding;
        readonly DeviceMetric: fhir.Coding;
        readonly DeviceRequest: fhir.Coding;
        readonly DeviceUseStatement: fhir.Coding;
        readonly DiagnosticReport: fhir.Coding;
        readonly DocumentManifest: fhir.Coding;
        readonly DocumentReference: fhir.Coding;
        readonly DomainResource: fhir.Coding;
        readonly EffectEvidenceSynthesis: fhir.Coding;
        readonly Encounter: fhir.Coding;
        readonly Endpoint: fhir.Coding;
        readonly EnrollmentRequest: fhir.Coding;
        readonly EnrollmentResponse: fhir.Coding;
        readonly EpisodeOfCare: fhir.Coding;
        readonly EventDefinition: fhir.Coding;
        readonly Evidence: fhir.Coding;
        readonly EvidenceVariable: fhir.Coding;
        readonly ExampleScenario: fhir.Coding;
        readonly ExplanationOfBenefit: fhir.Coding;
        readonly FamilyMemberHistory: fhir.Coding;
        readonly Flag: fhir.Coding;
        readonly Goal: fhir.Coding;
        readonly GraphDefinition: fhir.Coding;
        readonly Group: fhir.Coding;
        readonly GuidanceResponse: fhir.Coding;
        readonly HealthcareService: fhir.Coding;
        readonly LipidLabReport: fhir.Coding;
        readonly ImagingStudy: fhir.Coding;
        readonly Immunization: fhir.Coding;
        readonly ImmunizationEvaluation: fhir.Coding;
        readonly ImmunizationRecommendation: fhir.Coding;
        readonly ImplementationGuide: fhir.Coding;
        readonly InsurancePlan: fhir.Coding;
        readonly Invoice: fhir.Coding;
        readonly Library: fhir.Coding;
        readonly Linkage: fhir.Coding;
        readonly List: fhir.Coding;
        readonly Location: fhir.Coding;
        readonly Measure: fhir.Coding;
        readonly MeasureReport: fhir.Coding;
        readonly Media: fhir.Coding;
        readonly Medication: fhir.Coding;
        readonly MedicationAdministration: fhir.Coding;
        readonly MedicationDispense: fhir.Coding;
        readonly MedicationKnowledge: fhir.Coding;
        readonly MedicationRequest: fhir.Coding;
        readonly MedicationStatement: fhir.Coding;
        readonly MedicinalProduct: fhir.Coding;
        readonly MedicinalProductAuthorization: fhir.Coding;
        readonly MedicinalProductContraindication: fhir.Coding;
        readonly MedicinalProductIndication: fhir.Coding;
        readonly MedicinalProductIngredient: fhir.Coding;
        readonly MedicinalProductInteraction: fhir.Coding;
        readonly MedicinalProductManufactured: fhir.Coding;
        readonly MedicinalProductPackaged: fhir.Coding;
        readonly MedicinalProductPharmaceutical: fhir.Coding;
        readonly MedicinalProductUndesirableEffect: fhir.Coding;
        readonly MessageDefinition: fhir.Coding;
        readonly MessageHeader: fhir.Coding;
        readonly MolecularSequence: fhir.Coding;
        readonly NamingSystem: fhir.Coding;
        readonly NutritionOrder: fhir.Coding;
        readonly Observation: fhir.Coding;
        readonly ObservationDefinition: fhir.Coding;
        readonly OperationDefinition: fhir.Coding;
        readonly OperationOutcome: fhir.Coding;
        readonly Organization: fhir.Coding;
        readonly OrganizationAffiliation: fhir.Coding;
        readonly Parameters: fhir.Coding;
        readonly Patient: fhir.Coding;
        readonly PaymentNotice: fhir.Coding;
        readonly PaymentReconciliation: fhir.Coding;
        readonly Person: fhir.Coding;
        readonly PlanDefinition: fhir.Coding;
        readonly Practitioner: fhir.Coding;
        readonly PractitionerRole: fhir.Coding;
        readonly Procedure: fhir.Coding;
        readonly Provenance: fhir.Coding;
        readonly Questionnaire: fhir.Coding;
        readonly QuestionnaireResponse: fhir.Coding;
        readonly RelatedPerson: fhir.Coding;
        readonly RequestGroup: fhir.Coding;
        readonly ResearchDefinition: fhir.Coding;
        readonly ResearchElementDefinition: fhir.Coding;
        readonly ResearchStudy: fhir.Coding;
        readonly ResearchSubject: fhir.Coding;
        readonly Resource: fhir.Coding;
        readonly RiskAssessment: fhir.Coding;
        readonly RiskEvidenceSynthesis: fhir.Coding;
        readonly Schedule: fhir.Coding;
        readonly SearchParameter: fhir.Coding;
        readonly ServiceRequest: fhir.Coding;
        readonly Slot: fhir.Coding;
        readonly Specimen: fhir.Coding;
        readonly SpecimenDefinition: fhir.Coding;
        readonly StructureDefinition: fhir.Coding;
        readonly StructureMap: fhir.Coding;
        readonly Subscription: fhir.Coding;
        readonly Substance: fhir.Coding;
        readonly SubstanceNucleicAcid: fhir.Coding;
        readonly SubstancePolymer: fhir.Coding;
        readonly SubstanceProtein: fhir.Coding;
        readonly SubstanceReferenceInformation: fhir.Coding;
        readonly SubstanceSourceMaterial: fhir.Coding;
        readonly SubstanceSpecification: fhir.Coding;
        readonly SupplyDelivery: fhir.Coding;
        readonly SupplyRequest: fhir.Coding;
        readonly Task: fhir.Coding;
        readonly TerminologyCapabilities: fhir.Coding;
        readonly TestReport: fhir.Coding;
        readonly TestScript: fhir.Coding;
        readonly ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: fhir.Coding;
        readonly ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: fhir.Coding;
        readonly ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: fhir.Coding;
        readonly ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: fhir.Coding;
        readonly CardiologyCRC: fhir.Coding;
        readonly CardiologyEPRCIE: fhir.Coding;
        readonly CardiacImagingReport: fhir.Coding;
        readonly DentalCDA: fhir.Coding;
        readonly DentalPDF: fhir.Coding;
        readonly DentalText: fhir.Coding;
        readonly AdvancedPatientPrivacyConsents: fhir.Coding;
        readonly BasicPatientPrivacyConsentsWithScannedDocument: fhir.Coding;
        readonly BasicPatientPrivacyConsents: fhir.Coding;
        readonly DSGDetachedDocument: fhir.Coding;
        readonly DSGEnvelopingDocument: fhir.Coding;
        readonly PDFEmbeddedInCDAPerXDSSDProfile: fhir.Coding;
        readonly TextEmbeddedInCDAPerXDSSDProfile: fhir.Coding;
        readonly MimeTypeSufficient: fhir.Coding;
        readonly XDWWorkflowDocument: fhir.Coding;
        readonly CDALaboratoryReport: fhir.Coding;
        readonly AnatomicPathologyStructuredReportAll: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerAll: fhir.Coding; /**
         * Reason or purpose for the action stipulated by this Contract Provision.
         */
        readonly AnatomicPathologyStructuredReportCancerBreast: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerCervix: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerColon: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerEndometrium: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerEsophagus: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerKidney: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLarynx: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLipOralCavity: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLiver: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLung: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerOvary: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerPancreas: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerPharynx: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerProstate: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerSalivaryGland: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerSkin: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerStomach: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerTestis: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerThyroid: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerUrinaryBladder: fhir.Coding;
        readonly AntepartumRecordAPREducation: fhir.Coding;
        readonly AntepartumRecordAPRHistoryAndPhysical: fhir.Coding;
        readonly AntepartumRecordAPRLaboratory: fhir.Coding;
        readonly IHEAntepartumSummary: fhir.Coding;
        readonly CareManagementCM: fhir.Coding;
        readonly CancerRegistryContentCRC: fhir.Coding;
        readonly PCCCTN: fhir.Coding;
        readonly EmergencyDepartmentEncounterSummaryEDES: fhir.Coding;
        readonly PCCEDPN: fhir.Coding;
        readonly EmergencyDepartmentReferralEDR: fhir.Coding;
        readonly PCCETS: fhir.Coding;
        readonly PCCHP: fhir.Coding;
        readonly ImmunizationContentIC: fhir.Coding;
        readonly PCCITS: fhir.Coding;
        readonly PCCLDHP: fhir.Coding;
        readonly PCCLDS: fhir.Coding;
        readonly PCCMDS: fhir.Coding;
        readonly PCCNDS: fhir.Coding;
        readonly PCCNN: fhir.Coding;
        readonly PCCPPVS: fhir.Coding;
        readonly RoutineInterfacilityPatientTransportRIPT: fhir.Coding;
        readonly PCCTN: fhir.Coding;
        readonly PCCTRS: fhir.Coding;
        readonly XDSMedicalSummaries: fhir.Coding;
        readonly PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: fhir.Coding;
        readonly PharmacyDIS: fhir.Coding;
        readonly PharmacyPADV: fhir.Coding;
        readonly PharmacyPML: fhir.Coding;
        readonly PharmacyPre: fhir.Coding;
        readonly RadiologyXDSIStructuredCDA: fhir.Coding; /**
         * Valid arguments for the ContractTerm type.
         */
        readonly RadiologyXDSIPDF: fhir.Coding;
        readonly RadiologyXDSIText: fhir.Coding;
        readonly ValueSet: fhir.Coding;
        readonly VerificationResult: fhir.Coding;
        readonly VisionPrescription: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermActionSubject type.
 */
export interface ContractTermActionSubjectArgs extends fhir.BackboneElementArgs {
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference: fhir.ReferenceArgs[] | null;
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Entity of the action.
 */
export declare class ContractTermActionSubject extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The entity the action is performed or not performed on or for.
     */
    reference: fhir.Reference[];
    /**
     * Role type of agent assigned roles in this Contract.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ContractTermActionSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermActionSubjectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ContractTermAction type.
 */
export interface ContractTermActionArgs extends fhir.BackboneElementArgs {
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Entity of the action.
     */
    subject?: fhir.ContractTermActionSubjectArgs[] | undefined;
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhir.CodeableConceptArgs | null;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Current state of the term action.
     */
    status: fhir.CodeableConceptArgs | null;
    /**
     * Encounter or Episode with primary association to specified term activity.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    contextLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * When action happens.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * When action happens.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * When action happens.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * When action happens.
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester?: fhir.ReferenceArgs[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The type of role or competency of an individual desired or required to perform or not perform the action.
     */
    performerRole?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates who or what is being asked to perform (or not perform) the ction.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    performerLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason?: fhir.FhirString[] | string[] | undefined;
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId?: fhir.FhirString[] | string[] | undefined;
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber?: fhir.FhirUnsignedInt[] | number[] | undefined;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
 */
export declare class ContractTermAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * True if the term prohibits the  action.
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Entity of the action.
     */
    subject: fhir.ContractTermActionSubject[];
    /**
     * Reason or purpose for the action stipulated by this Contract Provision.
     */
    intent: fhir.CodeableConcept | null;
    /**
     * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
     */
    linkId: fhir.FhirString[];
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
    contextLinkId: fhir.FhirString[];
    /**
     * When action happens.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.term.action.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * Who or what initiated the action and has responsibility for its activation.
     */
    requester: fhir.Reference[];
    /**
     * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
     */
    requesterLinkId: fhir.FhirString[];
    /**
     * The type of individual that is desired or required to perform or not perform the action.
     */
    performerType: fhir.CodeableConcept[];
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
    performerLinkId: fhir.FhirString[];
    /**
     * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies permitting or not permitting this action.
     */
    reasonReference: fhir.Reference[];
    /**
     * Describes why the action is to be performed or not performed in textual form.
     */
    reason: fhir.FhirString[];
    /**
     * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
     */
    reasonLinkId: fhir.FhirString[];
    /**
     * Comments made about the term action made by the requester, performer, subject or other participants.
     */
    note: fhir.Annotation[];
    /**
     * Security labels that protects the action.
     */
    securityLabelNumber: fhir.FhirUnsignedInt[];
    /**
     * Default constructor for ContractTermAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractTermActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * Relevant time or time-period when this Contract Provision is applicable.
     */
    applies?: fhir.PeriodArgs | undefined;
    /**
     * The entity that the term applies to.
     */
    topic?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The entity that the term applies to.
     */
    topicCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The entity that the term applies to.
     */
    topicReference?: fhir.ReferenceArgs | undefined;
    /**
     * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * A specialized legal clause or condition based on overarching contract type.
     */
    subType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Statement of a provision in a policy or a contract.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel?: fhir.ContractTermSecurityLabelArgs[] | undefined;
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhir.ContractTermOfferArgs | null;
    /**
     * Contract Term Asset List.
     */
    asset?: fhir.ContractTermAssetArgs[] | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action?: fhir.ContractTermActionArgs[] | undefined;
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
     * The entity that the term applies to.
     */
    topic?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.term.topic[x]
     */
    protected static readonly _fts_topicIsChoice: true;
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
    text?: fhir.FhirString | undefined;
    /**
     * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
     */
    securityLabel: fhir.ContractTermSecurityLabel[];
    /**
     * The matter of concern in the context of this provision of the agrement.
     */
    offer: fhir.ContractTermOffer | null;
    /**
     * Contract Term Asset List.
     */
    asset: fhir.ContractTermAsset[];
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
     */
    action: fhir.ContractTermAction[];
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
    doModelValidation(): fhir.FtsIssue[];
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
     * Preferred-bound Value Set for type (Contract.signer.type)
     */
    static get typePreferredCodings(): {
        readonly Affiliate: fhir.Coding;
        readonly Agent: fhir.Coding;
        readonly Amender: fhir.Coding;
        readonly AssignedEntity: fhir.Coding;
        readonly Author: fhir.Coding;
        readonly Authenticator: fhir.Coding;
        readonly Citizen: fhir.Coding;
        readonly Claimant: fhir.Coding;
        readonly CoAuthor: fhir.Coding;
        readonly Consenter: fhir.Coding;
        readonly ConsentWitness: fhir.Coding;
        readonly Contact: fhir.Coding;
        readonly CoParticipant: fhir.Coding;
        readonly CoveredParty: fhir.Coding;
        readonly Delegatee: fhir.Coding;
        readonly Delegator: fhir.Coding;
        readonly Dependent: fhir.Coding;
        readonly DurablePowerOfAttorney: fhir.Coding;
        readonly EmergencyContact: fhir.Coding;
        readonly EventWitness: fhir.Coding;
        readonly ExecutorOfEstate: fhir.Coding;
        readonly Grantee: fhir.Coding;
        readonly Grantor: fhir.Coding;
        readonly GuardianAdLidem: fhir.Coding;
        readonly Guarantor: fhir.Coding;
        readonly Guardian: fhir.Coding;
        readonly HealthcarePowerOfAttorney: fhir.Coding;
        readonly HealthcareProvider: fhir.Coding;
        readonly Informant: fhir.Coding;
        readonly InvestigationSubject: fhir.Coding;
        readonly Interpreter: fhir.Coding;
        readonly LegalAuthenticator: fhir.Coding;
        readonly NamedInsured: fhir.Coding;
        readonly NextOfKin: fhir.Coding;
        readonly Notary: fhir.Coding;
        readonly Patient: fhir.Coding;
        readonly PowerOfAttorney: fhir.Coding;
        readonly PrimaryAuthor: fhir.Coding;
        readonly PrimaryResponsibleParty: fhir.Coding;
        readonly Recipient: fhir.Coding;
        readonly ResponsibleParty: fhir.Coding;
        readonly Reviewer: fhir.Coding;
        readonly Source: fhir.Coding;
        readonly SpecialPowerOfAttorney: fhir.Coding;
        readonly Transcriber: fhir.Coding;
        readonly Validator: fhir.Coding;
        readonly Verifier: fhir.Coding;
        readonly Witness: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
    doModelValidation(): fhir.FtsIssue[];
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
    doModelValidation(): fhir.FtsIssue[];
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
    doModelValidation(): fhir.FtsIssue[];
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
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: fhir.FhirCode<ContractStatusCodeType> | string | undefined;
    /**
     * Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement.
     */
    legalState?: fhir.CodeableConceptArgs | undefined;
    /**
     * The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract.
     */
    instantiatesCanonical?: fhir.ReferenceArgs | undefined;
    /**
     * The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract.
     */
    instantiatesUri?: fhir.FhirUri | string | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConceptArgs | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: fhir.FhirDateTime | string | undefined;
    /**
     * Relevant time or time-period when this Contract is applicable.
     */
    applies?: fhir.PeriodArgs | undefined;
    /**
     * Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract.
     */
    expirationType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Contract.subject is an entity that has some role with respect to the Contract.topic and Contract.topic.term, which is of focal interest to the parties to the contract and likely impacted in a significant way by the Contract.action/Contract.action.reason and the Contract.term.action/Contract.action.reason.
     * In many cases, the Contract.subject is a Contract.signer if the subject is an adult; has a legal interest in the contract; and incompetent to participate in the contract agreement.
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
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site?: fhir.ReferenceArgs[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias?: fhir.FhirString[] | string[] | undefined;
    /**
     * The individual or organization that authored the Contract definition, derivative, or instance in any legal state.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * A selector of legal concerns for this Contract definition, derivative, or instance in any legal state.
     */
    scope?: fhir.CodeableConceptArgs | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topic?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Narrows the range of legal concerns to focus on the achievement of specific contractual objectives.
     */
    topicReference?: fhir.ReferenceArgs | undefined;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhir.ContractContentDefinitionArgs | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term?: fhir.ContractTermArgs[] | undefined;
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory?: fhir.ReferenceArgs[] | undefined;
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer?: fhir.ContractSignerArgs[] | undefined;
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
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBinding?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBindingReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
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
     * Unique identifier for this Contract or a derivative that references a Source Contract.
     */
    identifier: fhir.Identifier[];
    /**
     * Used in a domain that uses a supplied contract repository.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Note -  This is a business versionId, not a resource version id (see discussion http://build.fhir.org/resource.html#versions)
     * Comments - There may be different contract instances that have the same identifier but different versions. The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the contract as not currently valid or active.
     */
    status?: fhir.FhirCode<ContractStatusCodeType> | undefined;
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
    instantiatesUri?: fhir.FhirUri | undefined;
    /**
     * The minimal content derived from the basal information source at a specific stage in its lifecycle.
     */
    contentDerivative?: fhir.CodeableConcept | undefined;
    /**
     * When this  Contract was issued.
     */
    issued?: fhir.FhirDateTime | undefined;
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
     * Sites in which the contract is complied with,  exercised, or in force.
     */
    site: fhir.Reference[];
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    title?: fhir.FhirString | undefined;
    /**
     * An explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state.t giving additional information about its content.
     */
    subtitle?: fhir.FhirString | undefined;
    /**
     * Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation.
     */
    alias: fhir.FhirString[];
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
    topic?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.topic[x]
     */
    protected static readonly _fts_topicIsChoice: true;
    /**
     * A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope.
     */
    subType: fhir.CodeableConcept[];
    /**
     * Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract.
     */
    contentDefinition?: fhir.ContractContentDefinition | undefined;
    /**
     * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */
    term: fhir.ContractTerm[];
    /**
     * Information that may be needed by/relevant to the performer in their execution of this term action.
     */
    supportingInfo: fhir.Reference[];
    /**
     * Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provence.entity indicates the target that was changed in the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
     */
    relevantHistory: fhir.Reference[];
    /**
     * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
     * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
     */
    signer: fhir.ContractSigner[];
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
     * Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
    legallyBinding?: (fhir.Attachment | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Contract.legallyBinding[x]
     */
    protected static readonly _fts_legallyBindingIsChoice: true;
    /**
     * Default constructor for Contract - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContractArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Contract.status)
     */
    static get statusRequiredCodes(): {
        readonly Amended: "amended";
        readonly Appended: "appended";
        readonly Cancelled: "cancelled";
        readonly Disputed: "disputed";
        readonly EnteredInError: "entered-in-error";
        readonly Executable: "executable";
        readonly Executed: "executed";
        readonly Negotiable: "negotiable";
        readonly Offered: "offered";
        readonly Policy: "policy";
        readonly Rejected: "rejected";
        readonly Renewed: "renewed";
        readonly Resolved: "resolved";
        readonly Revoked: "revoked";
        readonly Terminated: "terminated";
    };
    /**
     * Extensible-bound Value Set for legalState (Contract.legalState)
     */
    static get legalStateExtensibleCodings(): {
        readonly Amended: fhir.Coding;
        readonly Appended: fhir.Coding;
        readonly Cancelled: fhir.Coding;
        readonly Disputed: fhir.Coding;
        readonly EnteredInError: fhir.Coding;
        readonly Executable: fhir.Coding;
        readonly Executed: fhir.Coding;
        readonly Negotiable: fhir.Coding;
        readonly Offered: fhir.Coding;
        readonly Policy: fhir.Coding;
        readonly Rejected: fhir.Coding;
        readonly Renewed: fhir.Coding;
        readonly Resolved: fhir.Coding;
        readonly Revoked: fhir.Coding;
        readonly Terminated: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Contract.d.ts.map