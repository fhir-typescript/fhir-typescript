import * as fhir from '../fhir.js';
import { QuestionnaireAnswersStatusCodeType } from '../fhirValueSets/QuestionnaireAnswersStatusCodes.js';
/**
 * Valid arguments for the QuestionnaireResponseItemAnswer type.
 */
export interface QuestionnaireResponseItemAnswerArgs extends fhir.BackboneElementArgs {
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    value?: fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * Nested groups and/or questions found within this particular answer.
     */
    item?: fhir.QuestionnaireResponseItemArgs[] | undefined;
}
/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export declare class QuestionnaireResponseItemAnswer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    value?: (fhir.FhirBoolean | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirString | fhir.FhirUri | fhir.Attachment | fhir.Coding | fhir.Quantity | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element QuestionnaireResponse.item.answer.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Nested groups and/or questions found within this particular answer.
     */
    item: fhir.QuestionnaireResponseItem[];
    /**
     * Default constructor for QuestionnaireResponseItemAnswer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireResponseItemAnswerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireResponseItem type.
 */
export interface QuestionnaireResponseItemArgs extends fhir.BackboneElementArgs {
    /**
     * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
     */
    linkId: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.linkId
     */
    _linkId?: fhir.FhirElementArgs;
    /**
     * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
     * There is no need for this element if the item pointed to by the linkId has a definition listed.
     */
    definition?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * Text that is displayed above the contents of the group or as the text of the question being answered.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * The value is nested because we cannot have a repeating structure that has variable type.
     */
    answer?: fhir.QuestionnaireResponseItemAnswerArgs[] | undefined;
    /**
     * Questions or sub-groups nested beneath a question or group.
     */
    item?: fhir.QuestionnaireResponseItemArgs[] | undefined;
}
/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export declare class QuestionnaireResponseItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
     */
    linkId: fhir.FhirString | null;
    /**
     * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
     * There is no need for this element if the item pointed to by the linkId has a definition listed.
     */
    definition?: fhir.FhirUri | undefined;
    /**
     * Text that is displayed above the contents of the group or as the text of the question being answered.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The value is nested because we cannot have a repeating structure that has variable type.
     */
    answer: fhir.QuestionnaireResponseItemAnswer[];
    /**
     * Questions or sub-groups nested beneath a question or group.
     */
    item: fhir.QuestionnaireResponseItem[];
    /**
     * Default constructor for QuestionnaireResponseItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireResponseItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the QuestionnaireResponse type.
 */
export interface QuestionnaireResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse" | undefined;
    /**
     * A business identifier assigned to a particular completed (or partially completed) questionnaire.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
     */
    questionnaire?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.questionnaire
     */
    _questionnaire?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
     * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
     */
    authored?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.authored
     */
    _authored?: fhir.FhirElementArgs;
    /**
     * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * If not specified, no inference can be made about who provided the data.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
     */
    item?: fhir.QuestionnaireResponseItemArgs[] | undefined;
}
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export declare class QuestionnaireResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse";
    /**
     * A business identifier assigned to a particular completed (or partially completed) questionnaire.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
     */
    basedOn: fhir.Reference[];
    /**
     * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
     */
    partOf: fhir.Reference[];
    /**
     * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
     */
    questionnaire?: fhir.FhirCanonical | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<QuestionnaireAnswersStatusCodeType> | null;
    /**
     * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
     * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
     */
    authored?: fhir.FhirDateTime | undefined;
    /**
     * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
     */
    author?: fhir.Reference | undefined;
    /**
     * If not specified, no inference can be made about who provided the data.
     */
    source?: fhir.Reference | undefined;
    /**
     * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
     */
    item: fhir.QuestionnaireResponseItem[];
    /**
     * Default constructor for QuestionnaireResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuestionnaireResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=QuestionnaireResponse.d.ts.map