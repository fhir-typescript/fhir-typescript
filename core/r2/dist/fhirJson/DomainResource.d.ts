import * as fhir from '../fhirJson.js';
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export interface DomainResource extends fhir.Resource {
    /**
     * A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: fhir.Narrative | undefined;
    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: (fhir.FhirResource | null)[] | undefined;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: (fhir.Extension | null)[] | undefined;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
     */
    modifierExtension?: (fhir.Extension | null)[] | undefined;
}
//# sourceMappingURL=DomainResource.d.ts.map