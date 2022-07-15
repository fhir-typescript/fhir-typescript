// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Narrative

import * as fhir from '../fhir.js';

// @ts-ignore
import { NarrativeStatusCodes,  NarrativeStatusCodeType } from '../fhirValueSets/NarrativeStatusCodes.js';
// @ts-ignore
import { NarrativeStatusVsValidation } from '../fhirValueSets/NarrativeStatusVsValidation.js';
/**
 * Valid arguments for the Narrative type.
 */
export interface NarrativeArgs extends fhir.FhirElementArgs {
  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  status: fhir.FhirCode<NarrativeStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Narrative.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
   */
  div: fhir.FhirXhtml|string|undefined;
  /**
   * Extended properties for primitive element: Narrative.div
   */
  _div?:fhir.FhirElementArgs;
}

/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Narrative';
  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  public status: fhir.FhirCode<NarrativeStatusCodeType>|null;
  /**
   * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
   */
  public div: fhir.FhirXhtml|null;
  /**
   * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<NarrativeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['status']) { this.status = new fhir.FhirCode<NarrativeStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<NarrativeStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['div']) { this.div = new fhir.FhirXhtml({value: source.div}); }
    else { this.div = null; }
    if (source['_div']) {
      if (this.div) { this.div.addExtendedProperties(source._div!); }
      else { this.div = new fhir.FhirXhtml(source._div as Partial<fhir.FhirXhtmlArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Narrative' }
    this.vRSV('status',exp,'NarrativeStatus',NarrativeStatusVsValidation,'r')
    this.vRS('div',exp)
    return issues;
  }
}
