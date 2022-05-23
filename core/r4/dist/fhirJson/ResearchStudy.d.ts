import * as fhir from '../fhirJson.js';
/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export interface ResearchStudyArm extends fhir.BackboneElement {
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ResearchStudy.arm.name
     */
    _name?: fhir.FhirElement;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.arm.description
     */
    _description?: fhir.FhirElement;
}
/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export interface ResearchStudyObjective extends fhir.BackboneElement {
    /**
     * Unique, human-readable label for this objective of the study.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.objective.name
     */
    _name?: fhir.FhirElement;
    /**
     * The kind of study objective.
     */
    type?: fhir.CodeableConcept | undefined;
}
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export interface ResearchStudy extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchStudy";
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.title
     */
    _title?: fhir.FhirElement;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhir.Reference[] | undefined;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * The current state of the study.
     */
    status: 'active' | 'administratively-completed' | 'approved' | 'closed-to-accrual' | 'closed-to-accrual-and-intervention' | 'completed' | 'disapproved' | 'in-review' | 'temporarily-closed-to-accrual' | 'temporarily-closed-to-accrual-and-intervention' | 'withdrawn' | null;
    /**
     * Extended properties for primitive element: ResearchStudy.status
     */
    _status?: fhir.FhirElement;
    /**
     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
     */
    primaryPurposeType?: fhir.CodeableConcept | undefined;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
     */
    phase?: fhir.CodeableConcept | undefined;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhir.CodeableConcept[] | undefined;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: fhir.CodeableConcept[] | undefined;
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: fhir.CodeableConcept[] | undefined;
    /**
     * A full description of how the study is being conducted.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchStudy.description
     */
    _description?: fhir.FhirElement;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhir.Reference[] | undefined;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhir.Period | undefined;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: fhir.Reference | undefined;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: fhir.Reference | undefined;
    /**
     * A facility in which study activities are conducted.
     */
    site?: fhir.Reference[] | undefined;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhir.CodeableConcept | undefined;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhir.ResearchStudyArm[] | undefined;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: fhir.ResearchStudyObjective[] | undefined;
}
//# sourceMappingURL=ResearchStudy.d.ts.map