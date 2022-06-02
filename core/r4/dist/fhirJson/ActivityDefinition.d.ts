import * as fhir from '../fhirJson.js';
/**
 * Indicates who should participate in performing the action described.
 */
export interface ActivityDefinitionParticipant extends fhir.BackboneElement {
    /**
     * The type of participant in the action.
     */
    type: 'device' | 'patient' | 'practitioner' | 'related-person' | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.participant.type
     */
    _type?: fhir.FhirElement;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.CodeableConcept | undefined;
}
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export interface ActivityDefinitionDynamicValue extends fhir.BackboneElement {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.path
     */
    _path?: fhir.FhirElement;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression: fhir.Expression | null;
}
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export interface ActivityDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ActivityDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * An explanatory or alternate title for the activity definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.subtitle
     */
    _subtitle?: fhir.FhirElement;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ActivityDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
     */
    topic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the activity definition.
     */
    library?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.library
     */
    _library?: (fhir.FhirElement | null)[];
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: 'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'Contract' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'SupplyRequest' | 'Task' | 'VisionPrescription' | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.profile
     */
    _profile?: fhir.FhirElement;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
     */
    intent?: 'directive' | 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.intent
     */
    _intent?: fhir.FhirElement;
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.doNotPerform
     */
    _doNotPerform?: fhir.FhirElement;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.timing[x]
     */
    _timingDateTime?: fhir.FhirElement;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingAge?: fhir.Age | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingRange?: fhir.Range | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDuration?: fhir.Duration | undefined;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.Reference | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: (fhir.ActivityDefinitionParticipant | null)[] | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: fhir.Reference | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage?: (fhir.Dosage | null)[] | undefined;
    /**
     * Only used if not implicit in the code found in ServiceRequest.type.
     */
    bodySite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
     */
    specimenRequirement?: (fhir.Reference | null)[] | undefined;
    /**
     * Defines observation requirements for the action to be performed, such as body weight or surface area.
     */
    observationRequirement?: (fhir.Reference | null)[] | undefined;
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement?: (fhir.Reference | null)[] | undefined;
    /**
     * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    transform?: string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.transform
     */
    _transform?: fhir.FhirElement;
    /**
     * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    dynamicValue?: (fhir.ActivityDefinitionDynamicValue | null)[] | undefined;
}
//# sourceMappingURL=ActivityDefinition.d.ts.map