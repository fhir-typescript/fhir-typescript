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
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'entered-in-error' | 'inactive' | null;
    /**
     * Extended properties for primitive element: Flag.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If non coded, use CodeableConcept.text.  This element should always be included in the narrative.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The patient, location, group , organization , or practitioner, etc. this is about record this flag is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */
    period?: fhir.Period | undefined;
    /**
     * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The person, organization or device that created the flag.
     */
    author?: fhir.Reference | undefined;
}
//# sourceMappingURL=Flag.d.ts.map