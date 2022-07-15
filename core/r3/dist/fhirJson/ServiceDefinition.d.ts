import * as fhir from '../fhirJson.js';
/**
 * The ServiceDefinition describes a unit of decision support functionality that is made available as a service, such as immunization modules or drug-drug interaction checking.
 */
export interface ServiceDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ServiceDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this service definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different service definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the service definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of service definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired service definition without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ServiceDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of service definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental service definition in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the service definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the service definition is the organization or individual primarily responsible for the maintenance and upkeep of the service definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the service definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * This description can be used to capture details such as why the service definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the service definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * This element does not describe the usage of the service definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this service definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A detailed description of how the module is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a service definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the service definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching.
     */
    topic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A contributor to the content of the module, including authors, editors, reviewers, and endorsers.
     */
    contributor?: (fhir.Contributor | null)[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * A copyright statement relating to the service definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the service definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ServiceDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * Each related resource is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * The trigger element defines when the rule should be invoked. This information is used by consumers of the rule to determine how to integrate the rule into a specific workflow.
     */
    trigger?: (fhir.TriggerDefinition | null)[] | undefined;
    /**
     * Data requirements are a machine processable description of the data required by the module in order to perform a successful evaluation.
     */
    dataRequirement?: (fhir.DataRequirement | null)[] | undefined;
    /**
     * A reference to the operation that is used to invoke this service.
     */
    operationDefinition?: fhir.Reference | undefined;
}
//# sourceMappingURL=ServiceDefinition.d.ts.map