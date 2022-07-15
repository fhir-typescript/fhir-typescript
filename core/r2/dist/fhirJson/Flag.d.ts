import * as fhir from '../fhirJson.js';
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export interface Flag extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Flag" | null;
    /**
     * Identifier assigned to the flag for external use (outside the FHIR environment).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Supports basic workflow.
     */
    status: 'active' | 'entered-in-error' | 'inactive' | null;
    /**
     * Extended properties for primitive element: Flag.status
     */
    _status?: fhir.FhirElement;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.Period | undefined;
    /**
     * The patient, location, group , organization , or practitioner this is about record this flag is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * This alert is only relevant during the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.Reference | undefined;
    /**
     * The coded value or textual component of the flag to display to the user.
     */
    code: fhir.CodeableConcept | null;
}
//# sourceMappingURL=Flag.d.ts.map