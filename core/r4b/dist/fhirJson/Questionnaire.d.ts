import * as fhir from '../fhirJson.js';
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
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
     * Specifies the criteria by which the question is enabled.
     */
    operator: '!=' | '<' | '<=' | '=' | '>' | '>=' | 'exists' | null;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.operator
     */
    _operator?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerBoolean?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerDecimal?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerInteger?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerDate?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerDateTime?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerTime?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerString?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableWhen.answer[x]
     */
    _answerString?: fhir.FhirElement;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerCoding?: fhir.Coding | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerQuantity?: fhir.Quantity | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerReference?: fhir.Reference | undefined;
}
/**
 * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
 */
export interface QuestionnaireItemAnswerOption extends fhir.BackboneElement {
    /**
     * The data type of the value must agree with the item.type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.answerOption.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.answerOption.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.answerOption.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.answerOption.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Use this instead of initial[v] if answerValueSet is present.
     */
    initialSelected?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.answerOption.initialSelected
     */
    _initialSelected?: fhir.FhirElement;
}
/**
 * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
 */
export interface QuestionnaireItemInitial extends fhir.BackboneElement {
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.initial.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueReference?: fhir.Reference | undefined;
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
     * The uri refers to an ElementDefinition in a [StructureDefinition](structuredefinition.html#) and always starts with the [canonical URL](references.html#canonical) for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition.
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
     * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.  Typically, these won't be used for "display" items, though such use is not prohibited.  Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
     */
    prefix?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.prefix
     */
    _prefix?: fhir.FhirElement;
    /**
     * When using this element to represent the name of a section, use group type item and also make sure to limit the text element to a short string suitable for display as a section heading.  Group item instructions should be included as a display type item within the group.
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
     * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
     */
    enableWhen?: (fhir.QuestionnaireItemEnableWhen | null)[] | undefined;
    /**
     * This element must be specified if more than one enableWhen value is provided.
     */
    enableBehavior?: 'all' | 'any' | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.enableBehavior
     */
    _enableBehavior?: fhir.FhirElement;
    /**
     * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
     */
    required?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.required
     */
    _required?: fhir.FhirElement;
    /**
     * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition (i.e. "repeat the question") or to simply allow entry/selection of multiple answers for the question (repeat the answers).  Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.
     * The resulting QuestionnaireResponse will be populated the same way regardless of rendering - one 'question' item with multiple answer values.
     *  The value may come from the ElementDefinition referred to by .definition.
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
    answerValueSet?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.item.answerValueSet
     */
    _answerValueSet?: fhir.FhirElement;
    /**
     * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
     */
    answerOption?: (fhir.QuestionnaireItemAnswerOption | null)[] | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
     */
    initial?: (fhir.QuestionnaireItemInitial | null)[] | undefined;
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
     * The name of the referenced questionnaire can be conveyed using the http://hl7.org/fhir/StructureDefinition/display extension.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the questionnaire with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
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
     * The URL of a Questionnaire that this Questionnaire is based on.
     */
    derivedFrom?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.derivedFrom
     */
    _derivedFrom?: (fhir.FhirElement | null)[];
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Questionnaire.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * If none are specified, then the subject is unlimited.
     */
    subjectType?: (('Account' | 'ActivityDefinition' | 'AdministrableProductDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Citation' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'ClinicalUseDefinition' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceReport' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Ingredient' | 'InsurancePlan' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'ManufacturedItemDefinition' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProductDefinition' | 'MessageDefinition' | 'MessageHeader' | 'MolecularSequence' | 'NamingSystem' | 'NutritionOrder' | 'NutritionProduct' | 'Observation' | 'ObservationDefinition' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'PackagedProductDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'RegulatedAuthorization' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'SubscriptionStatus' | 'SubscriptionTopic' | 'Substance' | 'SubstanceDefinition' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.subjectType
     */
    _subjectType?: (fhir.FhirElement | null)[];
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the questionnaire is presumed to be the predominant language in the place the questionnaire was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the questionnaire. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: Questionnaire.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
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
     * An identifier for this question or group of questions in a particular terminology such as LOINC.
     */
    code?: (fhir.Coding | null)[] | undefined;
    /**
     * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
     */
    item?: (fhir.QuestionnaireItem | null)[] | undefined;
}
//# sourceMappingURL=Questionnaire.d.ts.map