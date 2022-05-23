// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: AdverseEvent

import * as fhir from '../fhir.js';

// @ts-ignore
import { AdverseEventCausalityAssessCodings, AdverseEventCausalityAssessCodingType,} from '../fhirValueSets/AdverseEventCausalityAssessCodings.js';
// @ts-ignore
import { AdverseEventCausalityAssessCodes,  AdverseEventCausalityAssessCodeType } from '../fhirValueSets/AdverseEventCausalityAssessCodes.js';
// @ts-ignore
import { AdverseEventCausalityMethodCodings, AdverseEventCausalityMethodCodingType,} from '../fhirValueSets/AdverseEventCausalityMethodCodings.js';
// @ts-ignore
import { AdverseEventCausalityMethodCodes,  AdverseEventCausalityMethodCodeType } from '../fhirValueSets/AdverseEventCausalityMethodCodes.js';
// @ts-ignore
import { AdverseEventActualityCodings, AdverseEventActualityCodingType,} from '../fhirValueSets/AdverseEventActualityCodings.js';
// @ts-ignore
import { AdverseEventActualityCodes,  AdverseEventActualityCodeType } from '../fhirValueSets/AdverseEventActualityCodes.js';
// @ts-ignore
import { AdverseEventCategoryCodings, AdverseEventCategoryCodingType,} from '../fhirValueSets/AdverseEventCategoryCodings.js';
// @ts-ignore
import { AdverseEventCategoryCodes,  AdverseEventCategoryCodeType } from '../fhirValueSets/AdverseEventCategoryCodes.js';
// @ts-ignore
import { AdverseEventTypeCodings, AdverseEventTypeCodingType,} from '../fhirValueSets/AdverseEventTypeCodings.js';
// @ts-ignore
import { AdverseEventTypeCodes,  AdverseEventTypeCodeType } from '../fhirValueSets/AdverseEventTypeCodes.js';
// @ts-ignore
import { AdverseEventSeriousnessCodings, AdverseEventSeriousnessCodingType,} from '../fhirValueSets/AdverseEventSeriousnessCodings.js';
// @ts-ignore
import { AdverseEventSeriousnessCodes,  AdverseEventSeriousnessCodeType } from '../fhirValueSets/AdverseEventSeriousnessCodes.js';
// @ts-ignore
import { AdverseEventSeverityCodings, AdverseEventSeverityCodingType,} from '../fhirValueSets/AdverseEventSeverityCodings.js';
// @ts-ignore
import { AdverseEventSeverityCodes,  AdverseEventSeverityCodeType } from '../fhirValueSets/AdverseEventSeverityCodes.js';
// @ts-ignore
import { AdverseEventOutcomeCodings, AdverseEventOutcomeCodingType,} from '../fhirValueSets/AdverseEventOutcomeCodings.js';
// @ts-ignore
import { AdverseEventOutcomeCodes,  AdverseEventOutcomeCodeType } from '../fhirValueSets/AdverseEventOutcomeCodes.js';
/**
 * Valid arguments for the AdverseEventSuspectEntityCausality type.
 */
export interface AdverseEventSuspectEntityCausalityArgs extends fhir.BackboneElementArgs {
  /**
   * Assessment of if the entity caused the event.
   */
  assessment?: fhir.CodeableConceptArgs|undefined;
  /**
   * AdverseEvent.suspectEntity.causalityProductRelatedness.
   */
  productRelatedness?: fhir.FhirString|string|undefined;
  /**
   * AdverseEvent.suspectEntity.causalityAuthor.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * ProbabilityScale | Bayesian | Checklist.
   */
  method?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Information on the possible cause of the event.
 */
export class AdverseEventSuspectEntityCausality extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdverseEventSuspectEntityCausality';
  /**
   * Assessment of if the entity caused the event.
   */
  public assessment?: fhir.CodeableConcept|undefined;
  /**
   * AdverseEvent.suspectEntity.causalityProductRelatedness.
   */
  public productRelatedness?: fhir.FhirString|undefined;
  /**
   * AdverseEvent.suspectEntity.causalityAuthor.
   */
  public author?: fhir.Reference|undefined;
  /**
   * ProbabilityScale | Bayesian | Checklist.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for AdverseEventSuspectEntityCausality - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdverseEventSuspectEntityCausalityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['assessment']) { this.assessment = new fhir.CodeableConcept(source.assessment); }
    if (source['productRelatedness']) { this.productRelatedness = new fhir.FhirString({value: source.productRelatedness}); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["assessment"]) { issues.push(...this.assessment.doModelValidation()); }
    if (this["productRelatedness"]) { issues.push(...this.productRelatedness.doModelValidation()); }
    if (this["author"]) { issues.push(...this.author.doModelValidation()); }
    if (this["method"]) { issues.push(...this.method.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the AdverseEventSuspectEntity type.
 */
export interface AdverseEventSuspectEntityArgs extends fhir.BackboneElementArgs {
  /**
   * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
   */
  instance: fhir.ReferenceArgs|null;
  /**
   * Information on the possible cause of the event.
   */
  causality?: fhir.AdverseEventSuspectEntityCausalityArgs[]|undefined;
}

/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export class AdverseEventSuspectEntity extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdverseEventSuspectEntity';
  /**
   * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
   */
  public instance: fhir.Reference|null;
  /**
   * Information on the possible cause of the event.
   */
  public causality: fhir.AdverseEventSuspectEntityCausality[];
  /**
   * Default constructor for AdverseEventSuspectEntity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdverseEventSuspectEntityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['instance']) { this.instance = new fhir.Reference(source.instance); }
    else { this.instance = null; }
    if (source['causality']) { this.causality = source.causality.map((x) => new fhir.AdverseEventSuspectEntityCausality(x)); }
    else { this.causality = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['instance']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property instance:fhir.Reference fhir: AdverseEvent.suspectEntity.instance:Reference' });
    }
    if (this["instance"]) { issues.push(...this.instance.doModelValidation()); }
    if (this["causality"]) { this.causality.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the AdverseEvent type.
 */
export interface AdverseEventArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "AdverseEvent"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
   */
  actuality: fhir.FhirCode<AdverseEventActualityCodeType>|string|undefined;
  /**
   * The overall type of event, intended for search and filtering purposes.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element defines the specific type of event that occurred or that was prevented from occurring.
   */
  event?: fhir.CodeableConceptArgs|undefined;
  /**
   * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The date (and perhaps time) when the adverse event occurred.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
   */
  detected?: fhir.FhirDateTime|string|undefined;
  /**
   * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
   */
  recordedDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
   */
  resultingCondition?: fhir.ReferenceArgs[]|undefined;
  /**
   * The information about where the adverse event occurred.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * Assessment whether this event was of real importance.
   */
  seriousness?: fhir.CodeableConceptArgs|undefined;
  /**
   * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
   */
  severity?: fhir.CodeableConceptArgs|undefined;
  /**
   * Describes the type of outcome from the adverse event.
   */
  outcome?: fhir.CodeableConceptArgs|undefined;
  /**
   * Information on who recorded the adverse event.  May be the patient or a practitioner.
   */
  recorder?: fhir.ReferenceArgs|undefined;
  /**
   * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
   */
  contributor?: fhir.ReferenceArgs[]|undefined;
  /**
   * Describes the entity that is suspected to have caused the adverse event.
   */
  suspectEntity?: fhir.AdverseEventSuspectEntityArgs[]|undefined;
  /**
   * AdverseEvent.subjectMedicalHistory.
   */
  subjectMedicalHistory?: fhir.ReferenceArgs[]|undefined;
  /**
   * AdverseEvent.referenceDocument.
   */
  referenceDocument?: fhir.ReferenceArgs[]|undefined;
  /**
   * AdverseEvent.study.
   */
  study?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export class AdverseEvent extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdverseEvent';
  /**
   * Resource Type Name
   */
  public override resourceType: "AdverseEvent";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
   */
  public actuality: fhir.FhirCode<AdverseEventActualityCodeType>|null;
  /**
   * The overall type of event, intended for search and filtering purposes.
   */
  public category: fhir.CodeableConcept[];
  /**
   * This element defines the specific type of event that occurred or that was prevented from occurring.
   */
  public event?: fhir.CodeableConcept|undefined;
  /**
   * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
   */
  public subject: fhir.Reference|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The date (and perhaps time) when the adverse event occurred.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
   */
  public detected?: fhir.FhirDateTime|undefined;
  /**
   * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
   */
  public recordedDate?: fhir.FhirDateTime|undefined;
  /**
   * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
   */
  public resultingCondition: fhir.Reference[];
  /**
   * The information about where the adverse event occurred.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Assessment whether this event was of real importance.
   */
  public seriousness?: fhir.CodeableConcept|undefined;
  /**
   * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
   */
  public severity?: fhir.CodeableConcept|undefined;
  /**
   * Describes the type of outcome from the adverse event.
   */
  public outcome?: fhir.CodeableConcept|undefined;
  /**
   * Information on who recorded the adverse event.  May be the patient or a practitioner.
   */
  public recorder?: fhir.Reference|undefined;
  /**
   * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
   */
  public contributor: fhir.Reference[];
  /**
   * Describes the entity that is suspected to have caused the adverse event.
   */
  public suspectEntity: fhir.AdverseEventSuspectEntity[];
  /**
   * AdverseEvent.subjectMedicalHistory.
   */
  public subjectMedicalHistory: fhir.Reference[];
  /**
   * AdverseEvent.referenceDocument.
   */
  public referenceDocument: fhir.Reference[];
  /**
   * AdverseEvent.study.
   */
  public study: fhir.Reference[];
  /**
   * Default constructor for AdverseEvent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdverseEventArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'AdverseEvent';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['actuality']) { this.actuality = new fhir.FhirCode<AdverseEventActualityCodeType>({value: source.actuality}); }
    else { this.actuality = null; }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['event']) { this.event = new fhir.CodeableConcept(source.event); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['detected']) { this.detected = new fhir.FhirDateTime({value: source.detected}); }
    if (source['recordedDate']) { this.recordedDate = new fhir.FhirDateTime({value: source.recordedDate}); }
    if (source['resultingCondition']) { this.resultingCondition = source.resultingCondition.map((x) => new fhir.Reference(x)); }
    else { this.resultingCondition = []; }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['seriousness']) { this.seriousness = new fhir.CodeableConcept(source.seriousness); }
    if (source['severity']) { this.severity = new fhir.CodeableConcept(source.severity); }
    if (source['outcome']) { this.outcome = new fhir.CodeableConcept(source.outcome); }
    if (source['recorder']) { this.recorder = new fhir.Reference(source.recorder); }
    if (source['contributor']) { this.contributor = source.contributor.map((x) => new fhir.Reference(x)); }
    else { this.contributor = []; }
    if (source['suspectEntity']) { this.suspectEntity = source.suspectEntity.map((x) => new fhir.AdverseEventSuspectEntity(x)); }
    else { this.suspectEntity = []; }
    if (source['subjectMedicalHistory']) { this.subjectMedicalHistory = source.subjectMedicalHistory.map((x) => new fhir.Reference(x)); }
    else { this.subjectMedicalHistory = []; }
    if (source['referenceDocument']) { this.referenceDocument = source.referenceDocument.map((x) => new fhir.Reference(x)); }
    else { this.referenceDocument = []; }
    if (source['study']) { this.study = source.study.map((x) => new fhir.Reference(x)); }
    else { this.study = []; }
  }
  /**
   * Required-bound Value Set for actuality (AdverseEvent.actuality)
   */
  public static get actualityRequiredCodes() {
    return AdverseEventActualityCodes;
  }
  /**
   * Extensible-bound Value Set for category (AdverseEvent.category)
   */
  public static get categoryExtensibleCodings() {
    return AdverseEventCategoryCodings;
  }
  /**
   * Required-bound Value Set for severity (AdverseEvent.severity)
   */
  public static get severityRequiredCodes() {
    return AdverseEventSeverityCodes;
  }
  /**
   * Required-bound Value Set for outcome (AdverseEvent.outcome)
   */
  public static get outcomeRequiredCodes() {
    return AdverseEventOutcomeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"AdverseEvent" fhir: AdverseEvent.resourceType:"AdverseEvent"' });
    }
    if (this["identifier"]) { issues.push(...this.identifier.doModelValidation()); }
    if (!this['actuality']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property actuality:fhir.FhirCode<AdverseEventActualityCodeType> fhir: AdverseEvent.actuality:code' });
    }
    if (this['actuality'] && (!Object.values(AdverseEventActualityCodes).includes(this.actuality as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property actuality:fhir.FhirCode<AdverseEventActualityCodeType> fhir: AdverseEvent.actuality:code Required binding to: AdverseEventActuality' });
    }
    if (this["actuality"]) { issues.push(...this.actuality.doModelValidation()); }
    if (this["category"]) { this.category.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["event"]) { issues.push(...this.event.doModelValidation()); }
    if (!this['subject']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject:fhir.Reference fhir: AdverseEvent.subject:Reference' });
    }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation()); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation()); }
    if (this["date"]) { issues.push(...this.date.doModelValidation()); }
    if (this["detected"]) { issues.push(...this.detected.doModelValidation()); }
    if (this["recordedDate"]) { issues.push(...this.recordedDate.doModelValidation()); }
    if (this["resultingCondition"]) { this.resultingCondition.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["location"]) { issues.push(...this.location.doModelValidation()); }
    if (this["seriousness"]) { issues.push(...this.seriousness.doModelValidation()); }
    if (this['severity'] && (!Object.values(AdverseEventSeverityCodes).includes(this.severity as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property severity?:fhir.CodeableConcept fhir: AdverseEvent.severity:CodeableConcept Required binding to: AdverseEventSeverity' });
    }
    if (this["severity"]) { issues.push(...this.severity.doModelValidation()); }
    if (this['outcome'] && (!Object.values(AdverseEventOutcomeCodes).includes(this.outcome as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property outcome?:fhir.CodeableConcept fhir: AdverseEvent.outcome:CodeableConcept Required binding to: AdverseEventOutcome' });
    }
    if (this["outcome"]) { issues.push(...this.outcome.doModelValidation()); }
    if (this["recorder"]) { issues.push(...this.recorder.doModelValidation()); }
    if (this["contributor"]) { this.contributor.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["suspectEntity"]) { this.suspectEntity.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["subjectMedicalHistory"]) { this.subjectMedicalHistory.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["referenceDocument"]) { this.referenceDocument.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["study"]) { this.study.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
