// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Resource

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResourceTypesValueSetCodes,  ResourceTypesValueSetCodeType } from '../fhirValueSets/ResourceTypesValueSetCodes.js';
// @ts-ignore
import { ResourceTypesValueSetVsValidation } from '../fhirValueSets/ResourceTypesValueSetVsValidation.js';
// @ts-ignore
import { LanguagesCodes,  LanguagesCodeType } from '../fhirValueSets/LanguagesCodes.js';
// @ts-ignore
import { LanguagesVsValidation } from '../fhirValueSets/LanguagesVsValidation.js';
/**
 * Valid arguments for the Resource type.
 */
export interface ResourceArgs extends fhir.FhirBaseArgs {
  /**
   * Resource Type Name
   */
  resourceType: string|string|undefined;
  /**
   * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
   */
  id?: fhir.FhirIdSimple|string|undefined;
  /**
   * Extended properties for primitive element: Resource.id
   */
  _id?:fhir.FhirElementArgs;
  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: fhir.MetaArgs|undefined;
  /**
   * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.
   */
  implicitRules?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Resource.implicitRules
   */
  _implicitRules?:fhir.FhirElementArgs;
  /**
   * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
   */
  language?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Resource.language
   */
  _language?:fhir.FhirElementArgs;
}

/**
 * This is the base resource type for everything.
 */
export class Resource extends fhir.FhirBase {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Resource';
  /**
   * Resource Type Name
   */
  public resourceType: string|null;
  /**
   * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
   */
  public id?: fhir.FhirIdSimple|undefined;
  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  public meta?: fhir.Meta|undefined;
  /**
   * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.
   */
  public implicitRules?: fhir.FhirUri|undefined;
  /**
   * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
   */
  public language?: fhir.FhirCode|undefined;
  /**
   * Default constructor for Resource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResourceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Resource';
    if (source['id'] !== undefined) { this.id = new fhir.FhirIdSimple({value: source.id}, options); }
    if (source['meta']) { this.meta = new fhir.Meta(source.meta, options); }
    if (source['implicitRules'] !== undefined) { this.implicitRules = new fhir.FhirUri({value: source.implicitRules}, options); }
    if (source['_implicitRules']) {
      if (this.implicitRules) { this.implicitRules.addExtendedProperties(source._implicitRules!); }
      else { this.implicitRules = new fhir.FhirUri(source._implicitRules as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['language'] !== undefined) { this.language = new fhir.FhirCode({value: source.language}, options); }
    if (source['_language']) {
      if (this.language) { this.language.addExtendedProperties(source._language!); }
      else { this.language = new fhir.FhirCode(source._language as Partial<fhir.FhirCodeArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Resource' }
    iss.push(...this.vOS('id',exp));
    iss.push(...this.vOS('meta',exp));
    iss.push(...this.vOS('implicitRules',exp));
    iss.push(...this.vOS('language',exp));
    return iss;
  }
}
