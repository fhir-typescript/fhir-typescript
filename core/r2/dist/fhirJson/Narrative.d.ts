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
     * The actual narrative content, a stripped down version of XHTML.
     */
    div: string | null;
    /**
     * Extended properties for primitive element: Narrative.div
     */
    _div?: fhir.FhirElement;
}
//# sourceMappingURL=Narrative.d.ts.map