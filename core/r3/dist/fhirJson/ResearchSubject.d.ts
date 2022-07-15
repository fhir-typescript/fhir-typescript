import * as fhir from '../fhirJson.js';
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export interface ResearchSubject extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject" | null;
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'candidate' | 'completed' | 'enrolled' | 'suspended' | 'withdrawn' | null;
    /**
     * Extended properties for primitive element: ResearchSubject.status
     */
    _status?: fhir.FhirElement;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.Period | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.Reference | null;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.Reference | null;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.assignedArm
     */
    _assignedArm?: fhir.FhirElement;
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchSubject.actualArm
     */
    _actualArm?: fhir.FhirElement;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.Reference | undefined;
}
//# sourceMappingURL=ResearchSubject.d.ts.map