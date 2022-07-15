import * as fhir from '../fhirJson.js';
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export interface CodeableConcept extends fhir.FhirElement {
    /**
     * Allows for translations and alternate encodings within a code system.  Also supports communication of the same instance to systems requiring different encodings.
     */
    coding?: (fhir.Coding | null)[] | undefined;
    /**
     * The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: CodeableConcept.text
     */
    _text?: fhir.FhirElement;
}
//# sourceMappingURL=CodeableConcept.d.ts.map