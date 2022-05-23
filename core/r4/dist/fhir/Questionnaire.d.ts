import * as fhir from '../fhir.js';
import { QuestionnaireEnableOperatorCodeType } from '../fhirValueSets/QuestionnaireEnableOperatorCodes.js';
import { ItemTypeCodeType } from '../fhirValueSets/ItemTypeCodes.js';
import { QuestionnaireEnableBehaviorCodeType } from '../fhirValueSets/QuestionnaireEnableBehaviorCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the QuestionnaireItemEnableWhen type.
 */
export interface QuestionnaireItemEnableWhenArgs extends fhir.BackboneElementArgs {
    /**
     * If multiple question occurrences are present for the same question (same linkId), then this refers to the nearest question occurrence reachable by tracing first the "ancestor" axis and then the "preceding" axis and then the "following" axis.
     */
    question: fhir.FhirString | string | undefined;
    /**
     * Specifies the criteria by which the question is enabled.
     */
    operator: fhir.FhirCode<QuestionnaireEnableOperatorCodeType> | string | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answer?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerInteger?: fhir.FhirInteger | number | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDate?: fhir.FhirDate | string | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerTime?: fhir.FhirTime | string | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerString?: fhir.FhirString | string | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerCoding?: fhir.CodingArgs | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerReference?: fhir.ReferenceArgs | undefined;
}
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
 */
export declare class QuestionnaireItemEnableWhen extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If multiple question occurrences are present for the same question (same linkId), then this refers to the nearest question occurrence reachable by tracing first the "ancestor" axis and then the "preceding" axis and then the "following" axis.
     */
    question: fhir.FhirString | null;
    /**
     * Specifies the criteria by which the question is enabled.
     */
    operator: fhir.FhirCode<QuestionnaireEnableOperatorCodeType> | null;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answer: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.Coding | fhir.Quantity | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Questionnaire.item.enableWhen.answer[x]
     */
    protected static readonly _fts_answerIsChoice: true;
    /**
     * Default constructor for QuestionnaireItemEnableWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireItemEnableWhenArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for operator (Questionnaire.item.enableWhen.operator)
     */
    static get operatorRequiredCodes(): {
        readonly NotEquals: "!=";
        readonly LessThan: "<";
        readonly LessOrEquals: "<=";
        readonly Equals: "=";
        readonly GreaterThan: ">";
        readonly GreaterOrEquals: ">=";
        readonly Exists: "exists";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireItemAnswerOption type.
 */
export interface QuestionnaireItemAnswerOptionArgs extends fhir.BackboneElementArgs {
    /**
     * The data type of the value must agree with the item.type.
     */
    value?: fhir.FhirInteger | fhir.FhirDate | fhir.FhirTime | fhir.FhirString | fhir.Coding | fhir.Reference | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * Use this instead of initial[v] if answerValueSet is present.
     */
    initialSelected?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
 */
export declare class QuestionnaireItemAnswerOption extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The data type of the value must agree with the item.type.
     */
    value: (fhir.FhirInteger | fhir.FhirDate | fhir.FhirTime | fhir.FhirString | fhir.Coding | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Questionnaire.item.answerOption.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Use this instead of initial[v] if answerValueSet is present.
     */
    initialSelected?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for QuestionnaireItemAnswerOption - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireItemAnswerOptionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireItemInitial type.
 */
export interface QuestionnaireItemInitialArgs extends fhir.BackboneElementArgs {
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    value?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
}
/**
 * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
 */
export declare class QuestionnaireItemInitial extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    value: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Questionnaire.item.initial.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for QuestionnaireItemInitial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireItemInitialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireItem type.
 */
export interface QuestionnaireItemArgs extends fhir.BackboneElementArgs {
    /**
     * This ''can'' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequential numbers are appropriate here.
     */
    linkId: fhir.FhirString | string | undefined;
    /**
     * The uri refers to an ElementDefinition in a [StructureDefinition](structuredefinition.html#) and always starts with the [canonical URL](references.html#canonical) for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition.
     */
    definition?: fhir.FhirUri | string | undefined;
    /**
     * The value may come from the ElementDefinition referred to by .definition.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.  Typically, these won't be used for "display" items, though such use is not prohibited.  Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
     */
    prefix?: fhir.FhirString | string | undefined;
    /**
     * When using this element to represent the name of a section, use group type item and also make sure to limit the text element to a short string suitable for display as a section heading.  Group item instructions should be included as a display type item within the group.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
     */
    type: fhir.FhirCode<ItemTypeCodeType> | string | undefined;
    /**
     * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
     */
    enableWhen?: fhir.QuestionnaireItemEnableWhenArgs[] | undefined;
    /**
     * This element must be specified if more than one enableWhen value is provided.
     */
    enableBehavior?: fhir.FhirCode<QuestionnaireEnableBehaviorCodeType> | string | undefined;
    /**
     * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
     */
    required?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition (i.e. "repeat the question") or to simply allow entry/selection of multiple answers for the question (repeat the answers).  Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.
     * The resulting QuestionnaireResponse will be populated the same way regardless of rendering - one 'question' item with multiple answer values.
     *  The value may come from the ElementDefinition referred to by .definition.
     */
    repeats?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-population and/or extensions that support calculation based on other answers.
     */
    readOnly?: fhir.FhirBoolean | boolean | undefined;
    /**
     * For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary data. The value may come from the ElementDefinition referred to by .definition.
     */
    maxLength?: fhir.FhirInteger | number | undefined;
    /**
     * LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](loinc.html#alist). The value may come from the ElementDefinition referred to by .definition.
     */
    answerValueSet?: fhir.FhirCanonical | string | undefined;
    /**
     * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
     */
    answerOption?: fhir.QuestionnaireItemAnswerOptionArgs[] | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
     */
    initial?: fhir.QuestionnaireItemInitialArgs[] | undefined;
    /**
     * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
     */
    item?: fhir.QuestionnaireItemArgs[] | undefined;
}
/**
 * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
 */
export declare class QuestionnaireItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This ''can'' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequential numbers are appropriate here.
     */
    linkId: fhir.FhirString | null;
    /**
     * The uri refers to an ElementDefinition in a [StructureDefinition](structuredefinition.html#) and always starts with the [canonical URL](references.html#canonical) for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition.
     */
    definition?: fhir.FhirUri | undefined;
    /**
     * The value may come from the ElementDefinition referred to by .definition.
     */
    code: fhir.Coding[];
    /**
     * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.  Typically, these won't be used for "display" items, though such use is not prohibited.  Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
     */
    prefix?: fhir.FhirString | undefined;
    /**
     * When using this element to represent the name of a section, use group type item and also make sure to limit the text element to a short string suitable for display as a section heading.  Group item instructions should be included as a display type item within the group.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
     */
    type: fhir.FhirCode<ItemTypeCodeType> | null;
    /**
     * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
     */
    enableWhen: fhir.QuestionnaireItemEnableWhen[];
    /**
     * This element must be specified if more than one enableWhen value is provided.
     */
    enableBehavior?: fhir.FhirCode<QuestionnaireEnableBehaviorCodeType> | undefined;
    /**
     * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
     */
    required?: fhir.FhirBoolean | undefined;
    /**
     * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition (i.e. "repeat the question") or to simply allow entry/selection of multiple answers for the question (repeat the answers).  Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.
     * The resulting QuestionnaireResponse will be populated the same way regardless of rendering - one 'question' item with multiple answer values.
     *  The value may come from the ElementDefinition referred to by .definition.
     */
    repeats?: fhir.FhirBoolean | undefined;
    /**
     * The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-population and/or extensions that support calculation based on other answers.
     */
    readOnly?: fhir.FhirBoolean | undefined;
    /**
     * For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary data. The value may come from the ElementDefinition referred to by .definition.
     */
    maxLength?: fhir.FhirInteger | undefined;
    /**
     * LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](loinc.html#alist). The value may come from the ElementDefinition referred to by .definition.
     */
    answerValueSet?: fhir.FhirCanonical | undefined;
    /**
     * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
     */
    answerOption: fhir.QuestionnaireItemAnswerOption[];
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
     */
    initial: fhir.QuestionnaireItemInitial[];
    /**
     * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
     */
    item: fhir.QuestionnaireItem[];
    /**
     * Default constructor for QuestionnaireItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (Questionnaire.item.type)
     */
    static get typeRequiredCodes(): {
        readonly Attachment: "attachment";
        readonly Boolean: "boolean";
        readonly Choice: "choice";
        readonly Date: "date";
        readonly DateTime: "dateTime";
        readonly Decimal: "decimal";
        readonly Display: "display";
        readonly Group: "group";
        readonly Integer: "integer";
        readonly OpenChoice: "open-choice";
        readonly Quantity: "quantity";
        readonly Question: "question";
        readonly Reference: "reference";
        readonly String: "string";
        readonly Text: "text";
        readonly Time: "time";
        readonly Url: "url";
    };
    /**
     * Required-bound Value Set for enableBehavior (Questionnaire.item.enableBehavior)
     */
    static get enableBehaviorRequiredCodes(): {
        readonly All: "all";
        readonly Any: "any";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Questionnaire type.
 */
export interface QuestionnaireArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Questionnaire" | undefined;
    /**
     * The name of the referenced questionnaire can be conveyed using the http://hl7.org/fhir/StructureDefinition/display extension.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the questionnaire with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The URL of a Questionnaire that this Questionnaire is based on.
     */
    derivedFrom?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If none are specified, then the subject is unlimited.
     */
    subjectType?: fhir.FhirCode[] | string[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the questionnaire is presumed to be the predominant language in the place the questionnaire was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the questionnaire. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * An identifier for this question or group of questions in a particular terminology such as LOINC.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
     */
    item?: fhir.QuestionnaireItemArgs[] | undefined;
}
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export declare class Questionnaire extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Questionnaire";
    /**
     * The name of the referenced questionnaire can be conveyed using the http://hl7.org/fhir/StructureDefinition/display extension.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the questionnaire with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The URL of a Questionnaire that this Questionnaire is based on.
     */
    derivedFrom: fhir.FhirCanonical[];
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * If none are specified, then the subject is unlimited.
     */
    subjectType: fhir.FhirCode[];
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the questionnaire is presumed to be the predominant language in the place the questionnaire was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the questionnaire. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * An identifier for this question or group of questions in a particular terminology such as LOINC.
     */
    code: fhir.Coding[];
    /**
     * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
     */
    item: fhir.QuestionnaireItem[];
    /**
     * Default constructor for Questionnaire - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Questionnaire.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for subjectType (Questionnaire.subjectType)
     */
    static get subjectTypeRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly AdverseEvent: "AdverseEvent";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
        readonly AuditEvent: "AuditEvent";
        readonly Basic: "Basic";
        readonly Binary: "Binary";
        readonly BiologicallyDerivedProduct: "BiologicallyDerivedProduct";
        readonly BodyStructure: "BodyStructure";
        readonly Bundle: "Bundle";
        readonly CapabilityStatement: "CapabilityStatement";
        readonly CarePlan: "CarePlan";
        readonly CareTeam: "CareTeam";
        readonly CatalogEntry: "CatalogEntry";
        readonly ChargeItem: "ChargeItem";
        readonly ChargeItemDefinition: "ChargeItemDefinition";
        readonly Claim: "Claim";
        readonly ClaimResponse: "ClaimResponse";
        readonly ClinicalImpression: "ClinicalImpression";
        readonly CodeSystem: "CodeSystem";
        readonly Communication: "Communication";
        readonly CommunicationRequest: "CommunicationRequest";
        readonly CompartmentDefinition: "CompartmentDefinition";
        readonly Composition: "Composition";
        readonly ConceptMap: "ConceptMap";
        readonly Condition: "Condition";
        readonly Consent: "Consent";
        readonly Contract: "Contract";
        readonly Coverage: "Coverage";
        readonly CoverageEligibilityRequest: "CoverageEligibilityRequest";
        readonly CoverageEligibilityResponse: "CoverageEligibilityResponse";
        readonly DetectedIssue: "DetectedIssue";
        readonly Device: "Device";
        readonly DeviceDefinition: "DeviceDefinition";
        readonly DeviceMetric: "DeviceMetric";
        readonly DeviceRequest: "DeviceRequest";
        readonly DeviceUseStatement: "DeviceUseStatement";
        readonly DiagnosticReport: "DiagnosticReport";
        readonly DocumentManifest: "DocumentManifest";
        readonly DocumentReference: "DocumentReference";
        readonly DomainResource: "DomainResource";
        readonly EffectEvidenceSynthesis: "EffectEvidenceSynthesis";
        readonly Encounter: "Encounter";
        readonly Endpoint: "Endpoint";
        readonly EnrollmentRequest: "EnrollmentRequest";
        readonly EnrollmentResponse: "EnrollmentResponse";
        readonly EpisodeOfCare: "EpisodeOfCare";
        readonly EventDefinition: "EventDefinition";
        readonly Evidence: "Evidence";
        readonly EvidenceVariable: "EvidenceVariable";
        readonly ExampleScenario: "ExampleScenario";
        readonly ExplanationOfBenefit: "ExplanationOfBenefit";
        readonly FamilyMemberHistory: "FamilyMemberHistory";
        readonly Flag: "Flag";
        readonly Goal: "Goal";
        readonly GraphDefinition: "GraphDefinition";
        readonly Group: "Group";
        readonly GuidanceResponse: "GuidanceResponse";
        readonly HealthcareService: "HealthcareService";
        readonly ImagingStudy: "ImagingStudy";
        readonly Immunization: "Immunization";
        readonly ImmunizationEvaluation: "ImmunizationEvaluation";
        readonly ImmunizationRecommendation: "ImmunizationRecommendation";
        readonly ImplementationGuide: "ImplementationGuide";
        readonly InsurancePlan: "InsurancePlan";
        readonly Invoice: "Invoice";
        readonly Library: "Library";
        readonly Linkage: "Linkage";
        readonly List: "List";
        readonly Location: "Location";
        readonly Measure: "Measure";
        readonly MeasureReport: "MeasureReport";
        readonly Media: "Media";
        readonly Medication: "Medication";
        readonly MedicationAdministration: "MedicationAdministration";
        readonly MedicationDispense: "MedicationDispense";
        readonly MedicationKnowledge: "MedicationKnowledge";
        readonly MedicationRequest: "MedicationRequest";
        readonly MedicationStatement: "MedicationStatement";
        readonly MedicinalProduct: "MedicinalProduct";
        readonly MedicinalProductAuthorization: "MedicinalProductAuthorization";
        readonly MedicinalProductContraindication: "MedicinalProductContraindication";
        readonly MedicinalProductIndication: "MedicinalProductIndication";
        readonly MedicinalProductIngredient: "MedicinalProductIngredient";
        readonly MedicinalProductInteraction: "MedicinalProductInteraction";
        readonly MedicinalProductManufactured: "MedicinalProductManufactured";
        readonly MedicinalProductPackaged: "MedicinalProductPackaged";
        readonly MedicinalProductPharmaceutical: "MedicinalProductPharmaceutical";
        readonly MedicinalProductUndesirableEffect: "MedicinalProductUndesirableEffect";
        readonly MessageDefinition: "MessageDefinition";
        readonly MessageHeader: "MessageHeader";
        readonly MolecularSequence: "MolecularSequence";
        readonly NamingSystem: "NamingSystem"; /**
         * This ''can'' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequential numbers are appropriate here.
         */
        readonly NutritionOrder: "NutritionOrder";
        readonly Observation: "Observation";
        readonly ObservationDefinition: "ObservationDefinition";
        readonly OperationDefinition: "OperationDefinition";
        readonly OperationOutcome: "OperationOutcome";
        readonly Organization: "Organization";
        readonly OrganizationAffiliation: "OrganizationAffiliation";
        readonly Parameters: "Parameters";
        readonly Patient: "Patient";
        readonly PaymentNotice: "PaymentNotice";
        readonly PaymentReconciliation: "PaymentReconciliation";
        readonly Person: "Person";
        readonly PlanDefinition: "PlanDefinition";
        readonly Practitioner: "Practitioner";
        readonly PractitionerRole: "PractitionerRole";
        readonly Procedure: "Procedure";
        readonly Provenance: "Provenance";
        readonly Questionnaire: "Questionnaire";
        readonly QuestionnaireResponse: "QuestionnaireResponse";
        readonly RelatedPerson: "RelatedPerson"; /**
         * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
         */
        readonly RequestGroup: "RequestGroup";
        readonly ResearchDefinition: "ResearchDefinition";
        readonly ResearchElementDefinition: "ResearchElementDefinition";
        readonly ResearchStudy: "ResearchStudy";
        readonly ResearchSubject: "ResearchSubject";
        readonly Resource: "Resource";
        readonly RiskAssessment: "RiskAssessment";
        readonly RiskEvidenceSynthesis: "RiskEvidenceSynthesis";
        readonly Schedule: "Schedule";
        readonly SearchParameter: "SearchParameter";
        readonly ServiceRequest: "ServiceRequest";
        readonly Slot: "Slot";
        readonly Specimen: "Specimen";
        readonly SpecimenDefinition: "SpecimenDefinition";
        readonly StructureDefinition: "StructureDefinition";
        readonly StructureMap: "StructureMap";
        readonly Subscription: "Subscription";
        readonly Substance: "Substance";
        readonly SubstanceNucleicAcid: "SubstanceNucleicAcid";
        readonly SubstancePolymer: "SubstancePolymer";
        readonly SubstanceProtein: "SubstanceProtein";
        readonly SubstanceReferenceInformation: "SubstanceReferenceInformation";
        readonly SubstanceSourceMaterial: "SubstanceSourceMaterial";
        readonly SubstanceSpecification: "SubstanceSpecification";
        readonly SupplyDelivery: "SupplyDelivery";
        readonly SupplyRequest: "SupplyRequest";
        readonly Task: "Task";
        readonly TerminologyCapabilities: "TerminologyCapabilities";
        readonly TestReport: "TestReport";
        readonly TestScript: "TestScript";
        readonly ValueSet: "ValueSet";
        readonly VerificationResult: "VerificationResult";
        readonly VisionPrescription: "VisionPrescription";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Questionnaire.d.ts.map