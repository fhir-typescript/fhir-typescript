// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: RelatedArtifact

import * as fhir from '../fhir.js';

// @ts-ignore
import { RelatedArtifactTypeCodings, RelatedArtifactTypeCodingType,} from '../fhirValueSets/RelatedArtifactTypeCodings.js';
// @ts-ignore
import { RelatedArtifactTypeCodes,  RelatedArtifactTypeCodeType } from '../fhirValueSets/RelatedArtifactTypeCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the RelatedArtifact type.
 */
export interface RelatedArtifactArgs extends fhir.FhirElementArgs {
  /**
   * The type of relationship to the related artifact.
   */
  type: RelatedArtifactTypeCodeType|null;
  /**
   * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
   */
  label?: fhir.FhirString|string|undefined;
  /**
   * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
   */
  display?: fhir.FhirString|string|undefined;
  /**
   * Additional structured information about citations should be captured as extensions.
   */
  citation?: fhir.FhirMarkdown|string|undefined;
  /**
   * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
   */
  url?: fhir.FhirUrl|string|undefined;
  /**
   * The document being referenced, represented as an attachment. This is exclusive with the resource element.
   */
  document?: fhir.AttachmentArgs|undefined;
  /**
   * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
   */
  resource?: fhir.FhirCanonical|string|undefined;
}

/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export class RelatedArtifact extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'RelatedArtifact';
  /**
   * The type of relationship to the related artifact.
   */
  public type: RelatedArtifactTypeCodeType|null;
  /**
   * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
   */
  public label?: fhir.FhirString|undefined;
  /**
   * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
   */
  public display?: fhir.FhirString|undefined;
  /**
   * Additional structured information about citations should be captured as extensions.
   */
  public citation?: fhir.FhirMarkdown|undefined;
  /**
   * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
   */
  public url?: fhir.FhirUrl|undefined;
  /**
   * The document being referenced, represented as an attachment. This is exclusive with the resource element.
   */
  public document?: fhir.Attachment|undefined;
  /**
   * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
   */
  public resource?: fhir.FhirCanonical|undefined;
  /**
   * Default constructor for RelatedArtifact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RelatedArtifactArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['label']) { this.label = new fhir.FhirString({value: source.label}); }
    if (source['display']) { this.display = new fhir.FhirString({value: source.display}); }
    if (source['citation']) { this.citation = new fhir.FhirMarkdown({value: source.citation}); }
    if (source['url']) { this.url = new fhir.FhirUrl({value: source.url}); }
    if (source['document']) { this.document = new fhir.Attachment(source.document); }
    if (source['resource']) { this.resource = new fhir.FhirCanonical({value: source.resource}); }
  }
  /**
   * Required-bound Value Set for type (RelatedArtifact.type)
   */
  public static typeRequiredCoding():RelatedArtifactTypeCodingType {
    return RelatedArtifactTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property type:RelatedArtifactTypeCodeType fhir: RelatedArtifact.type:code', }));
    }
    if (this["label"]) { outcome.issue!.push(...this.label.doModelValidation().issue!); }
    if (this["display"]) { outcome.issue!.push(...this.display.doModelValidation().issue!); }
    if (this["citation"]) { outcome.issue!.push(...this.citation.doModelValidation().issue!); }
    if (this["url"]) { outcome.issue!.push(...this.url.doModelValidation().issue!); }
    if (this["document"]) { outcome.issue!.push(...this.document.doModelValidation().issue!); }
    if (this["resource"]) { outcome.issue!.push(...this.resource.doModelValidation().issue!); }
    return outcome;
  }
}