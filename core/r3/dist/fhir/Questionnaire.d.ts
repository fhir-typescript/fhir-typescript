import * as fhir from '../fhir.js';
import { ItemTypeCodeType } from '../fhirValueSets/ItemTypeCodes.js';
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
     * Extended properties for primitive element: Questionnaire.item.enableWhen.question
     */
    _question?: fhir.FhirElementArgs;
    /**
     * If answered=false and answer values are also provided, then they are treated as "or".  I.e. "Enable if the question is unanswered or the answer is one of the specified values".  If answered=true and answers are present, one of the specified answers must be met. (So there's little reason to specify answered=true if answers are present.).
     */
    hasAnswer?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.hasAnswer
     */
    _hasAnswer?: fhir.FhirElementArgs;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answer?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerDate?: fhir.FhirDate | string | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerTime?: fhir.FhirTime | string | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerString?: fhir.FhirString | string | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerUri?: fhir.FhirUri | string | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerCoding?: fhir.CodingArgs | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerReference?: fhir.ReferenceArgs | undefined;
}
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.
 * This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met.
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
     * If answered=false and answer values are also provided, then they are treated as "or".  I.e. "Enable if the question is unanswered or the answer is one of the specified values".  If answered=true and answers are present, one of the specified answers must be met. (So there's little reason to specify answered=true if answers are present.).
     */
    hasAnswer?: fhir.FhirBoolean | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answer?: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Questionnaire.item.enableWhen.answer[x]
     */
    protected static readonly _fts_answerIsChoice: true;
    /**
     * Default constructor for QuestionnaireItemEnableWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireItemEnableWhenArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireItemOption type.
 */
export interface QuestionnaireItemOptionArgs extends fhir.BackboneElementArgs {
    /**
     * The data type of the value must agree with the item.type.
     */
    value?: fhir.FhirInteger | fhir.FhirDate | fhir.FhirTime | fhir.FhirString | fhir.Coding | undefined;
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
}
/**
 * This element can be used when the value set machinery of options is deemed too cumbersome or when there's a need to capture options that are not codes.
 */
export declare class QuestionnaireItemOption extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The data type of the value must agree with the item.type.
     */
    value: (fhir.FhirInteger | fhir.FhirDate | fhir.FhirTime | fhir.FhirString | fhir.Coding) | null;
    /**
     * Internal flag to properly serialize choice-type element Questionnaire.item.option.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for QuestionnaireItemOption - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireItemOptionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Extended properties for primitive element: Questionnaire.item.linkId
     */
    _linkId?: fhir.FhirElementArgs;
    /**
     * the URI refers to an ElementDefinition in either a [StructureDefinition](structuredefinition.html#) or a [DataElement](dataelement.html#), and always starts with the canonical URL for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition. Note that [LOINC codes](loinc.html#dataelements) implicitly define DataElement resources.
     */
    definition?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * The value may come from the ElementDefinition referred to by .definition.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.
     * Typically these won't be used for "display" items, though such use is not prohibited.
     * Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
     */
    prefix?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.prefix
     */
    _prefix?: fhir.FhirElementArgs;
    /**
     * The name of a section, the text of a question or text content for a display item.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
     */
    type: fhir.FhirCode<ItemTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.
     * This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met.
     */
    enableWhen?: fhir.QuestionnaireItemEnableWhenArgs[] | undefined;
    /**
     * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
     */
    required?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.required
     */
    _required?: fhir.FhirElementArgs;
    /**
     * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition or to simply list each of the answers beneath the question.  (Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.). The value may come from the ElementDefinition referred to by .definition.
     */
    repeats?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.repeats
     */
    _repeats?: fhir.FhirElementArgs;
    /**
     * The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-population and/or extensions that support calculation based on other answers.
     */
    readOnly?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.readOnly
     */
    _readOnly?: fhir.FhirElementArgs;
    /**
     * For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary data. The value may come from the ElementDefinition referred to by .definition.
     */
    maxLength?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.maxLength
     */
    _maxLength?: fhir.FhirElementArgs;
    /**
     * LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](loinc.html#alist). The value may come from the ElementDefinition referred to by .definition.
     */
    options?: fhir.ReferenceArgs | undefined;
    /**
     * This element can be used when the value set machinery of options is deemed too cumbersome or when there's a need to capture options that are not codes.
     */
    option?: fhir.QuestionnaireItemOptionArgs[] | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initial?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialDate?: fhir.FhirDate | string | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialTime?: fhir.FhirTime | string | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialString?: fhir.FhirString | string | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialUri?: fhir.FhirUri | string | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialCoding?: fhir.CodingArgs | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialReference?: fhir.ReferenceArgs | undefined;
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
     * the URI refers to an ElementDefinition in either a [StructureDefinition](structuredefinition.html#) or a [DataElement](dataelement.html#), and always starts with the canonical URL for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition. Note that [LOINC codes](loinc.html#dataelements) implicitly define DataElement resources.
     */
    definition?: fhir.FhirUri | undefined;
    /**
     * The value may come from the ElementDefinition referred to by .definition.
     */
    code: fhir.Coding[];
    /**
     * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.
     * Typically these won't be used for "display" items, though such use is not prohibited.
     * Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
     */
    prefix?: fhir.FhirString | undefined;
    /**
     * The name of a section, the text of a question or text content for a display item.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
     */
    type: fhir.FhirCode<ItemTypeCodeType> | null;
    /**
     * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.
     * This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met.
     */
    enableWhen: fhir.QuestionnaireItemEnableWhen[];
    /**
     * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
     */
    required?: fhir.FhirBoolean | undefined;
    /**
     * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition or to simply list each of the answers beneath the question.  (Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.). The value may come from the ElementDefinition referred to by .definition.
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
    options?: fhir.Reference | undefined;
    /**
     * This element can be used when the value set machinery of options is deemed too cumbersome or when there's a need to capture options that are not codes.
     */
    option: fhir.QuestionnaireItemOption[];
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initial?: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Questionnaire.item.initial[x]
     */
    protected static readonly _fts_initialIsChoice: true;
    /**
     * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
     */
    item: fhir.QuestionnaireItem[];
    /**
     * Default constructor for QuestionnaireItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the questionnaire with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of questionnaires that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired questionnaire without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of questionnaire that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental questionnaire in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the questionnaire Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * An identifier for this question or group of questions in a particular terminology such as LOINC.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * If none are specified, then the subject is unlimited.
     */
    subjectType?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.subjectType
     */
    _subjectType?: (fhir.FhirElementArgs | null)[];
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
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the questionnaire with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of questionnaires that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired questionnaire without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of questionnaire that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental questionnaire in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * This element does not describe the usage of the questionnaire Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * An identifier for this question or group of questions in a particular terminology such as LOINC.
     */
    code: fhir.Coding[];
    /**
     * If none are specified, then the subject is unlimited.
     */
    subjectType: fhir.FhirCode[];
    /**
     * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
     */
    item: fhir.QuestionnaireItem[];
    /**
     * Default constructor for Questionnaire - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Questionnaire.d.ts.map