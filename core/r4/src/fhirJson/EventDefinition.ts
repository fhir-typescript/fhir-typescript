// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: EventDefinition

import * as fhir from '../fhirJson.js';


/**
 * The EventDefinition resource provides a reusable description of when a particular event can occur.
 */
export interface EventDefinition extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "EventDefinition"|null;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.url
   */
  _url?:fhir.FhirElement;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this event definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * There may be different event definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the event definition with the format [url]|[version].
   */
  version?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.version
   */
  _version?:fhir.FhirElement;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.name
   */
  _name?:fhir.FhirElement;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.title
   */
  _title?:fhir.FhirElement;
  /**
   * An explanatory or alternate title for the event definition giving additional information about its content.
   */
  subtitle?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.subtitle
   */
  _subtitle?:fhir.FhirElement;
  /**
   * Allows filtering of event definitions that are appropriate for use versus not.
   */
  status: 'active'|'draft'|'retired'|'unknown'|null;
  /**
   * Extended properties for primitive element: EventDefinition.status
   */
  _status?:fhir.FhirElement;
  /**
   * Allows filtering of event definitions that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.experimental
   */
  _experimental?:fhir.FhirElement;
  /**
   * A code or group definition that describes the intended subject of the event definition.
   */
  subjectCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * A code or group definition that describes the intended subject of the event definition.
   */
  subjectReference?: fhir.Reference|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the event definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.date
   */
  _date?:fhir.FhirElement;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the event definition is the organization or individual primarily responsible for the maintenance and upkeep of the event definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the event definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.publisher
   */
  _publisher?:fhir.FhirElement;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * This description can be used to capture details such as why the event definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the event definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the event definition is presumed to be the predominant language in the place the event definition was created).
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.description
   */
  _description?:fhir.FhirElement;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: (fhir.UsageContext|null)[]|undefined;
  /**
   * It may be possible for the event definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * This element does not describe the usage of the event definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this event definition.
   */
  purpose?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.purpose
   */
  _purpose?:fhir.FhirElement;
  /**
   * A detailed description of how the event definition is used from a clinical perspective.
   */
  usage?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.usage
   */
  _usage?:fhir.FhirElement;
  /**
   * A copyright statement relating to the event definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the event definition.
   */
  copyright?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.copyright
   */
  _copyright?:fhir.FhirElement;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.approvalDate
   */
  _approvalDate?:fhir.FhirElement;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.lastReviewDate
   */
  _lastReviewDate?:fhir.FhirElement;
  /**
   * The effective period for a event definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching.
   */
  topic?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * Each related resource is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: (fhir.RelatedArtifact|null)[]|undefined;
  /**
   * The trigger element defines when the event occurs. If more than one trigger condition is specified, the event fires whenever any one of the trigger conditions is met.
   */
  trigger: (fhir.TriggerDefinition|null)[]|null;
}
