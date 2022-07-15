import * as fhir from '../fhirJson.js';
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.
 * This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met.
 */
export interface QuestionnaireItemEnableWhen extends fhir.BackboneElement {
    /**
     * If multiple question occurrences are present for the same question (same linkId), then this refers to the nearest question occurrence reachable by tracing first the "ancestor" axis and then the "preceding" axis and then the "following" axis.
     */
    question: string | null;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.question
     */
    _question?: fhir.FhirElement;
    /**
     * If answered=false and answer values are also provided, then they are treated as "or".  I.e. "Enable if the question is unanswered or the answer is one of the specified values".  If answered=true and answers are present, one of the specified answers must be met. (So there's little reason to specify answered=true if answers are present.).
     */
    hasAnswer?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.hasAnswer
     */
    _hasAnswer?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerBoolean?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerDecimal?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerInteger?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerDate?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerDateTime?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerTime?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerString?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerString?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerUri?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerUri?: fhir.FhirElement;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerAttachment?: fhir.Attachment | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerCoding?: fhir.Coding | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerQuantity?: fhir.Quantity | undefined;
    /**
     * Multiple answers are treated as "or".  E.g. Enable if question 1 = A, C or E.
     * Components not specified in the answer do not need to match.  For example, if enableWhen specifies code + system for a Coding, it is ok if the answer has a "display" element.  I.e. treat the answer as a 'pattern'.
     * The dataType of this element must be the same as the data type of the question being referenced.
     */
    answerReference?: fhir.Reference | undefined;
}
/**
 * This element can be used when the value set machinery of options is deemed too cumbersome or when there's a need to capture options that are not codes.
 */
export interface QuestionnaireItemOption extends fhir.BackboneElement {
    /**
     * The data type of the value must agree with the item.type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.option.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.option.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.option.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.option.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueCoding?: fhir.Coding | undefined;
}
/**
 * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
 */
export interface QuestionnaireItem extends fhir.BackboneElement {
    /**
     * This ''can'' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequential numbers are appropriate here.
     */
    linkId: string | null;
    /**
     * Extended properties for primitive element: Questionnaire.item.linkId
     */
    _linkId?: fhir.FhirElement;
    /**
     * the URI refers to an ElementDefinition in either a [StructureDefinition](structuredefinition.html#) or a [DataElement](dataelement.html#), and always starts with the canonical URL for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition. Note that [LOINC codes](loinc.html#dataelements) implicitly define DataElement resources.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * The value may come from the ElementDefinition referred to by .definition.
     */
    code?: (fhir.Coding | null)[] | undefined;
    /**
     * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.
     * Typically these won't be used for "display" items, though such use is not prohibited.
     * Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
     */
    prefix?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.prefix
     */
    _prefix?: fhir.FhirElement;
    /**
     * The name of a section, the text of a question or text content for a display item.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.text
     */
    _text?: fhir.FhirElement;
    /**
     * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
     */
    type: 'attachment' | 'boolean' | 'choice' | 'date' | 'dateTime' | 'decimal' | 'display' | 'group' | 'integer' | 'open-choice' | 'quantity' | 'question' | 'reference' | 'string' | 'text' | 'time' | 'url' | null;
    /**
     * Extended properties for primitive element: Questionnaire.item.type
     */
    _type?: fhir.FhirElement;
    /**
     * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.
     * This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met.
     */
    enableWhen?: (fhir.QuestionnaireItemEnableWhen | null)[] | undefined;
    /**
     * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
     */
    required?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.required
     */
    _required?: fhir.FhirElement;
    /**
     * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition or to simply list each of the answers beneath the question.  (Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.). The value may come from the ElementDefinition referred to by .definition.
     */
    repeats?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.repeats
     */
    _repeats?: fhir.FhirElement;
    /**
     * The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-population and/or extensions that support calculation based on other answers.
     */
    readOnly?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.readOnly
     */
    _readOnly?: fhir.FhirElement;
    /**
     * For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary data. The value may come from the ElementDefinition referred to by .definition.
     */
    maxLength?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.maxLength
     */
    _maxLength?: fhir.FhirElement;
    /**
     * LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](loinc.html#alist). The value may come from the ElementDefinition referred to by .definition.
     */
    options?: fhir.Reference | undefined;
    /**
     * This element can be used when the value set machinery of options is deemed too cumbersome or when there's a need to capture options that are not codes.
     */
    option?: (fhir.QuestionnaireItemOption | null)[] | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialBoolean?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialDecimal?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialInteger?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialDate?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialDateTime?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialTime?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialString?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialString?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialUri?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial[x]
     */
    _initialUri?: fhir.FhirElement;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialAttachment?: fhir.Attachment | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialCoding?: fhir.Coding | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialQuantity?: fhir.Quantity | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that default values can influence results.
     * The data type of initial[x] must agree with the item.type.
     */
    initialReference?: fhir.Reference | undefined;
    /**
     * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
     */
    item?: (fhir.QuestionnaireItem | null)[] | undefined;
}
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export interface Questionnaire extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Questionnaire" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the questionnaire with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of questionnaires that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired questionnaire without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Questionnaire.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of questionnaire that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental questionnaire in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.description
     */
    _description?: fhir.FhirElement;
    /**
     * This element does not describe the usage of the questionnaire Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * An identifier for this question or group of questions in a particular terminology such as LOINC.
     */
    code?: (fhir.Coding | null)[] | undefined;
    /**
     * If none are specified, then the subject is unlimited.
     */
    subjectType?: (('Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.subjectType
     */
    _subjectType?: (fhir.FhirElement | null)[];
    /**
     * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
     */
    item?: (fhir.QuestionnaireItem | null)[] | undefined;
}
//# sourceMappingURL=Questionnaire.d.ts.map