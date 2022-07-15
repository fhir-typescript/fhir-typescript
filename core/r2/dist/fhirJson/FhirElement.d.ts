import * as fhir from '../fhirJson.js';
/**
 * Base definition for all elements in a resource.
 */
export interface FhirElement {
    /**
     * unique id for the element within a resource (for internal references).
     */
    id?: string | undefined;
    /**
     * Extended properties for primitive element: Element.id
     */
    _id?: fhir.FhirElement;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: (fhir.Extension | null)[] | undefined;
    /**
     * JSON Serialization Comments - not an actual element
     */
    fhir_comments?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Element.fhir_comments
     */
    _fhir_comments?: (fhir.FhirElement | null)[];
}
//# sourceMappingURL=FhirElement.d.ts.map