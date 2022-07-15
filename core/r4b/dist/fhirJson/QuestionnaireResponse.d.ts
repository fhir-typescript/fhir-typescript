import * as fhir from '../fhirJson.js';
/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export interface QuestionnaireResponseItemAnswer extends fhir.BackboneElement {
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Nested groups and/or questions found within this particular answer.
     */
    item?: (fhir.QuestionnaireResponseItem | null)[] | undefined;
}
/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export interface QuestionnaireResponseItem extends fhir.BackboneElement {
    /**
     * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
     */
    linkId: string | null;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.linkId
     */
    _linkId?: fhir.FhirElement;
    /**
     * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
     * There is no need for this element if the item pointed to by the linkId has a definition listed.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * Text that is displayed above the contents of the group or as the text of the question being answered.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.item.text
     */
    _text?: fhir.FhirElement;
    /**
     * The value is nested because we cannot have a repeating structure that has variable type.
     */
    answer?: (fhir.QuestionnaireResponseItemAnswer | null)[] | undefined;
    /**
     * Questions or sub-groups nested beneath a question or group.
     */
    item?: (fhir.QuestionnaireResponseItem | null)[] | undefined;
}
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export interface QuestionnaireResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse" | null;
    /**
     * A business identifier assigned to a particular completed (or partially completed) questionnaire.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
     */
    partOf?: (fhir.Reference | null)[] | undefined;
    /**
     * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
     */
    questionnaire?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.questionnaire
     */
    _questionnaire?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'amended' | 'completed' | 'entered-in-error' | 'in-progress' | 'stopped' | null;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.status
     */
    _status?: fhir.FhirElement;
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
    authored?: string | undefined;
    /**
     * Extended properties for primitive element: QuestionnaireResponse.authored
     */
    _authored?: fhir.FhirElement;
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
    item?: (fhir.QuestionnaireResponseItem | null)[] | undefined;
}
//# sourceMappingURL=QuestionnaireResponse.d.ts.map