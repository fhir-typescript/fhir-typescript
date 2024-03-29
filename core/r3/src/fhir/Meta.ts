// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
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
   * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant.
   */
  lastUpdated?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Meta.lastUpdated
   */
  _lastUpdated?:fhir.FhirElementArgs;
  /**
   * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
   */
  profile?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Meta.profile
   */
  _profile?:(fhir.FhirElementArgs|null)[];
  /**
   * The security labels can be updated without changing the stated version of the resource  The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  security?: fhir.CodingArgs[]|undefined;
  /**
   * The tags can be updated without changing the stated version of the resource.  The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  tag?: fhir.CodingArgs[]|undefined;
}

/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
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
   * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant.
   */
  public lastUpdated?: fhir.FhirInstant|undefined;
  /**
   * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
   */
  public profile: fhir.FhirUri[];
  /**
   * The security labels can be updated without changing the stated version of the resource  The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  public security: fhir.Coding[];
  /**
   * The tags can be updated without changing the stated version of the resource.  The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  public tag: fhir.Coding[];
  /**
   * Default constructor for Meta - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MetaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['versionId'] !== undefined) { this.versionId = new fhir.FhirId({value: source.versionId}, options); }
    if (source['_versionId']) {
      if (this.versionId) { this.versionId.addExtendedProperties(source._versionId!); }
      else { this.versionId = new fhir.FhirId(source._versionId as Partial<fhir.FhirIdArgs>, options); }
    }
    if (source['lastUpdated'] !== undefined) { this.lastUpdated = new fhir.FhirInstant({value: source.lastUpdated}, options); }
    if (source['_lastUpdated']) {
      if (this.lastUpdated) { this.lastUpdated.addExtendedProperties(source._lastUpdated!); }
      else { this.lastUpdated = new fhir.FhirInstant(source._lastUpdated as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['profile'] !== undefined) { this.profile = source.profile.map((x) => new fhir.FhirUri({value: x}, options)); }
    else { this.profile = []; }
    if (source['_profile']) {
      source._profile.forEach((x,i) => {
        if (this.profile.length >= i) { if (x) { this.profile[i].addExtendedProperties(x); } }
        else { if (x) { this.profile.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['security']) { this.security = source.security.map((x) => new fhir.Coding(x, options)); }
    else { this.security = []; }
    if (source['tag']) { this.tag = source.tag.map((x) => new fhir.Coding(x, options)); }
    else { this.tag = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Meta' }
    iss.push(...this.vOS('versionId',exp));
    iss.push(...this.vOS('lastUpdated',exp));
    iss.push(...this.vOA('profile',exp));
    iss.push(...this.vOA('security',exp));
    iss.push(...this.vOA('tag',exp));
    return iss;
  }
}
