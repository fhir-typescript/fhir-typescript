import * as fhir from '../fhirJson.js';
/**
 * Specifies clinical/business/etc metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export interface UsageContext extends fhir.FhirElement {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code: fhir.Coding | null;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueRange?: fhir.Range | undefined;
}
//# sourceMappingURL=UsageContext.d.ts.map