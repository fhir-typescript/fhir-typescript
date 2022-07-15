// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Meta

import * as fhir from '../fhir.js';

// @ts-ignore
import { SecurityLabelsCodes,  SecurityLabelsCodeType } from '../fhirValueSets/SecurityLabelsCodes.js';
// @ts-ignore
import { SecurityLabelsVsValidation } from '../fhirValueSets/SecurityLabelsVsValidation.js';
// @ts-ignore
import { CommonTagsCodes,  CommonTagsCodeType } from '../fhirValueSets/CommonTagsCodes.js';
// @ts-ignore
import { CommonTagsVsValidation } from '../fhirValueSets/CommonTagsVsValidation.js';
/**
 * Valid arguments for the Meta type.
 */
export interface MetaArgs extends fhir.FhirElementArgs {
  /**
   * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
   */
  versionId?: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: Meta.versionId
   */
  _versionId?:fhir.FhirElementArgs;
  /**
   * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.
   */
  lastUpdated?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Meta.lastUpdated
   */
  _lastUpdated?:fhir.FhirElementArgs;
  /**
   * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used. 
   * This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.
   */
  source?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Meta.source
   */
  _source?:fhir.FhirElementArgs;
  /**
   * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
   */
  profile?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Meta.profile
   */
  _profile?:(fhir.FhirElementArgs|null)[];
  /**
   * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  security?: fhir.CodingArgs[]|undefined;
  /**
   * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  tag?: fhir.CodingArgs[]|undefined;
}

/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export class Meta extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Meta';
  /**
   * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
   */
  public versionId?: fhir.FhirId|undefined;
  /**
   * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.
   */
  public lastUpdated?: fhir.FhirInstant|undefined;
  /**
   * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used. 
   * This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.
   */
  public source?: fhir.FhirUri|undefined;
  /**
   * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
   */
  public profile: fhir.FhirCanonical[];
  /**
   * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  public security: fhir.Coding[];
  /**
   * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  public tag: fhir.Coding[];
  /**
   * Default constructor for Meta - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MetaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['versionId']) { this.versionId = new fhir.FhirId({value: source.versionId}); }
    if (source['_versionId']) {
      if (this.versionId) { this.versionId.addExtendedProperties(source._versionId!); }
      else { this.versionId = new fhir.FhirId(source._versionId as Partial<fhir.FhirIdArgs>); }
    }
    if (source['lastUpdated']) { this.lastUpdated = new fhir.FhirInstant({value: source.lastUpdated}); }
    if (source['_lastUpdated']) {
      if (this.lastUpdated) { this.lastUpdated.addExtendedProperties(source._lastUpdated!); }
      else { this.lastUpdated = new fhir.FhirInstant(source._lastUpdated as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['source']) { this.source = new fhir.FhirUri({value: source.source}); }
    if (source['_source']) {
      if (this.source) { this.source.addExtendedProperties(source._source!); }
      else { this.source = new fhir.FhirUri(source._source as Partial<fhir.FhirUriArgs>); }
    }
    if (source['profile']) { this.profile = source.profile.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.profile = []; }
    if (source['_profile']) {
      source._profile.forEach((x,i) => {
        if (this.profile.length >= i) { if (x) { this.profile[i].addExtendedProperties(x); } }
        else { if (x) { this.profile.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['security']) { this.security = source.security.map((x) => new fhir.Coding(x)); }
    else { this.security = []; }
    if (source['tag']) { this.tag = source.tag.map((x) => new fhir.Coding(x)); }
    else { this.tag = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Meta' }
    this.vOS('versionId',exp)
    this.vOS('lastUpdated',exp)
    this.vOS('source',exp)
    this.vOA('profile',exp)
    this.vOA('security',exp)
    this.vOA('tag',exp)
    return issues;
  }
}
