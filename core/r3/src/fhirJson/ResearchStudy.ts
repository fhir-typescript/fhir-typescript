// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchStudy

import * as fhir from '../fhirJson.js';


/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export interface ResearchStudyArm extends fhir.BackboneElement { 
  /**
   * Unique, human-readable label for this arm of the study.
   */
  name: string|null;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.name
   */
  _name?:fhir.FhirElement;
  /**
   * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
   */
  code?: fhir.CodeableConcept|undefined;
  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.description
   */
  _description?:fhir.FhirElement;
}

/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export interface ResearchStudy extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "ResearchStudy"|null;
  /**
   * Identifiers assigned to this research study by the sponsor or other systems.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * A short, descriptive user-friendly label for the study.
   */
  title?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.title
   */
  _title?:fhir.FhirElement;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  protocol?: (fhir.Reference|null)[]|undefined;
  /**
   * A larger research study of which this particular study is a component or step.
   */
  partOf?: (fhir.Reference|null)[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: 'completed'|'draft'|'entered-in-error'|'in-progress'|'stopped'|'suspended'|null;
  /**
   * Extended properties for primitive element: ResearchStudy.status
   */
  _status?:fhir.FhirElement;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  category?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  focus?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  contact?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * Citations, references and other related documents.
   */
  relatedArtifact?: (fhir.RelatedArtifact|null)[]|undefined;
  /**
   * Key terms to aid in searching for or filtering the study.
   */
  keyword?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  jurisdiction?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * A full description of how the study is being conducted.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.description
   */
  _description?:fhir.FhirElement;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  enrollment?: (fhir.Reference|null)[]|undefined;
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  period?: fhir.Period|undefined;
  /**
   * The organization responsible for the execution of the study.
   */
  sponsor?: fhir.Reference|undefined;
  /**
   * Indicates the individual who has primary oversite of the execution of the study.
   */
  principalInvestigator?: fhir.Reference|undefined;
  /**
   * Clinic, hospital or other healthcare location that is participating in the study.
   */
  site?: (fhir.Reference|null)[]|undefined;
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  reasonStopped?: fhir.CodeableConcept|undefined;
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  note?: (fhir.Annotation|null)[]|undefined;
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  arm?: (fhir.ResearchStudyArm|null)[]|undefined;
}