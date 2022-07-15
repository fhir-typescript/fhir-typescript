import * as fhir from '../fhirJson.js';
/**
 * A human-readable formatted text, including images.
 */
export interface Narrative extends fhir.FhirElement {
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: 'additional' | 'empty' | 'extensions' | 'generated' | null;
    /**
     * Extended properties for primitive element: Narrative.status
     */
    _status?: fhir.FhirElement;
    /**
     * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content may not contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
     */
    div: string | null;
    /**
     * Extended properties for primitive element: Narrative.div
     */
    _div?: fhir.FhirElement;
}
//# sourceMappingURL=Narrative.d.ts.map