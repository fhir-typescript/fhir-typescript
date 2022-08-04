// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: AllergyIntolerance

import * as fhir from '../fhir.js';

// @ts-ignore
import { SubstanceCodes,  SubstanceCodeType } from '../fhirValueSets/SubstanceCodes.js';
// @ts-ignore
import { SubstanceVsValidation } from '../fhirValueSets/SubstanceVsValidation.js';
// @ts-ignore
import { ClinicalFindingsCodes,  ClinicalFindingsCodeType } from '../fhirValueSets/ClinicalFindingsCodes.js';
// @ts-ignore
import { ClinicalFindingsVsValidation } from '../fhirValueSets/ClinicalFindingsVsValidation.js';
// @ts-ignore
import { ReactionEventSeverityCodes,  ReactionEventSeverityCodeType } from '../fhirValueSets/ReactionEventSeverityCodes.js';
// @ts-ignore
import { ReactionEventSeverityVsValidation } from '../fhirValueSets/ReactionEventSeverityVsValidation.js';
// @ts-ignore
import { RouteCodes,  RouteCodeType } from '../fhirValueSets/RouteCodes.js';
// @ts-ignore
import { RouteVsValidation } from '../fhirValueSets/RouteVsValidation.js';
// @ts-ignore
import { AllergyintoleranceClinicalCodes,  AllergyintoleranceClinicalCodeType } from '../fhirValueSets/AllergyintoleranceClinicalCodes.js';
// @ts-ignore
import { AllergyintoleranceClinicalVsValidation } from '../fhirValueSets/AllergyintoleranceClinicalVsValidation.js';
// @ts-ignore
import { AllergyintoleranceVerificationCodes,  AllergyintoleranceVerificationCodeType } from '../fhirValueSets/AllergyintoleranceVerificationCodes.js';
// @ts-ignore
import { AllergyintoleranceVerificationVsValidation } from '../fhirValueSets/AllergyintoleranceVerificationVsValidation.js';
// @ts-ignore
import { AllergyIntoleranceTypeCodes,  AllergyIntoleranceTypeCodeType } from '../fhirValueSets/AllergyIntoleranceTypeCodes.js';
// @ts-ignore
import { AllergyIntoleranceTypeVsValidation } from '../fhirValueSets/AllergyIntoleranceTypeVsValidation.js';
// @ts-ignore
import { AllergyIntoleranceCategoryCodes,  AllergyIntoleranceCategoryCodeType } from '../fhirValueSets/AllergyIntoleranceCategoryCodes.js';
// @ts-ignore
import { AllergyIntoleranceCategoryVsValidation } from '../fhirValueSets/AllergyIntoleranceCategoryVsValidation.js';
// @ts-ignore
import { AllergyIntoleranceCriticalityCodes,  AllergyIntoleranceCriticalityCodeType } from '../fhirValueSets/AllergyIntoleranceCriticalityCodes.js';
// @ts-ignore
import { AllergyIntoleranceCriticalityVsValidation } from '../fhirValueSets/AllergyIntoleranceCriticalityVsValidation.js';
// @ts-ignore
import { AllergyintoleranceCodes,  AllergyintoleranceCodeType } from '../fhirValueSets/AllergyintoleranceCodes.js';
// @ts-ignore
import { AllergyintoleranceVsValidation } from '../fhirValueSets/AllergyintoleranceVsValidation.js';
/**
 * Valid arguments for the AllergyIntoleranceReaction type.
 */
export interface AllergyIntoleranceReactionArgs extends fhir.BackboneElementArgs {
  /**
   * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
   */
  substance?: fhir.CodeableConceptArgs|undefined;
  /**
   * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
   */
  manifestation: fhir.CodeableConceptArgs[]|null;
  /**
   * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.reaction.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  onset?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.reaction.onset
   */
  _onset?:fhir.FhirElementArgs;
  /**
   * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
   */
  severity?: fhir.FhirCode<ReactionEventSeverityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.reaction.severity
   */
  _severity?:fhir.FhirElementArgs;
  /**
   * Coding of the route of exposure with a terminology should be used wherever possible.
   */
  exposureRoute?: fhir.CodeableConceptArgs|undefined;
  /**
   * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export class AllergyIntoleranceReaction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AllergyIntoleranceReaction';
  /**
   * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
   */
  public substance?: fhir.CodeableConcept|undefined;
  /**
   * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
   */
  public manifestation: fhir.CodeableConcept[];
  /**
   * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  public onset?: fhir.FhirDateTime|undefined;
  /**
   * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
   */
  public severity?: fhir.FhirCode<ReactionEventSeverityCodeType>|undefined;
  /**
   * Coding of the route of exposure with a terminology should be used wherever possible.
   */
  public exposureRoute?: fhir.CodeableConcept|undefined;
  /**
   * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for AllergyIntoleranceReaction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AllergyIntoleranceReactionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['substance']) { this.substance = new fhir.CodeableConcept(source.substance, options); }
    if (source['manifestation']) { this.manifestation = source.manifestation.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.manifestation = []; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['onset'] !== undefined) { this.onset = new fhir.FhirDateTime({value: source.onset}, options); }
    if (source['_onset']) {
      if (this.onset) { this.onset.addExtendedProperties(source._onset!); }
      else { this.onset = new fhir.FhirDateTime(source._onset as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['severity'] !== undefined) { this.severity = new fhir.FhirCode<ReactionEventSeverityCodeType>({value: source.severity}, options); }
    if (source['_severity']) {
      if (this.severity) { this.severity.addExtendedProperties(source._severity!); }
      else { this.severity = new fhir.FhirCode<ReactionEventSeverityCodeType>(source._severity as Partial<fhir.FhirCode>, options); }
    }
    if (source['exposureRoute']) { this.exposureRoute = new fhir.CodeableConcept(source.exposureRoute, options); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AllergyIntolerance.reaction' }
    iss.push(...this.vOS('substance',exp));
    iss.push(...this.vRA('manifestation',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('onset',exp));
    iss.push(...this.vOSV('severity',exp,'ReactionEventSeverity',ReactionEventSeverityVsValidation,'r'));
    iss.push(...this.vOS('exposureRoute',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
/**
 * Valid arguments for the AllergyIntolerance type.
 */
export interface AllergyIntoleranceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "AllergyIntolerance"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data.
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  clinicalStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  verificationStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
   */
  type?: fhir.FhirCode<AllergyIntoleranceTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
   */
  category?: fhir.FhirCode<AllergyIntoleranceCategoryCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.category
   */
  _category?:(fhir.FhirElementArgs|null)[];
  /**
   * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
   */
  criticality?: fhir.FhirCode<AllergyIntoleranceCriticalityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.criticality
   */
  _criticality?:fhir.FhirElementArgs;
  /**
   * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNII, and ATC. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
   * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
   * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The patient who has the allergy or intolerance.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The encounter when the allergy or intolerance was asserted.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onset?: fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetAge?: fhir.AgeArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetRange?: fhir.RangeArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetString?: fhir.FhirString|string|undefined;
  /**
   * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   */
  recordedDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.recordedDate
   */
  _recordedDate?:fhir.FhirElementArgs;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: fhir.ReferenceArgs|undefined;
  /**
   * The recorder takes responsibility for the content, but can reference the source from where they got it.
   */
  asserter?: fhir.ReferenceArgs|undefined;
  /**
   * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
   */
  lastOccurrence?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: AllergyIntolerance.lastOccurrence
   */
  _lastOccurrence?:fhir.FhirElementArgs;
  /**
   * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Details about each adverse reaction event linked to exposure to the identified substance.
   */
  reaction?: fhir.AllergyIntoleranceReactionArgs[]|undefined;
}

/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
export class AllergyIntolerance extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AllergyIntolerance';
  /**
   * Resource Type Name
   */
  public override resourceType: "AllergyIntolerance";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier: fhir.Identifier[];
  /**
   * Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data.
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public clinicalStatus?: fhir.CodeableConcept|undefined;
  /**
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public verificationStatus?: fhir.CodeableConcept|undefined;
  /**
   * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
   */
  public type?: fhir.FhirCode<AllergyIntoleranceTypeCodeType>|undefined;
  /**
   * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
   */
  public category: fhir.FhirCode<AllergyIntoleranceCategoryCodeType>[];
  /**
   * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
   */
  public criticality?: fhir.FhirCode<AllergyIntoleranceCriticalityCodeType>|undefined;
  /**
   * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNII, and ATC. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
   * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
   * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The patient who has the allergy or intolerance.
   */
  public patient: fhir.Reference|null;
  /**
   * The encounter when the allergy or intolerance was asserted.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  public onset?: (fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element AllergyIntolerance.onset[x]
   */
  protected static readonly _fts_onsetIsChoice:true = true;
  /**
   * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   */
  public recordedDate?: fhir.FhirDateTime|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  public recorder?: fhir.Reference|undefined;
  /**
   * The recorder takes responsibility for the content, but can reference the source from where they got it.
   */
  public asserter?: fhir.Reference|undefined;
  /**
   * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
   */
  public lastOccurrence?: fhir.FhirDateTime|undefined;
  /**
   * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
   */
  public note: fhir.Annotation[];
  /**
   * Details about each adverse reaction event linked to exposure to the identified substance.
   */
  public reaction: fhir.AllergyIntoleranceReaction[];
  /**
   * Default constructor for AllergyIntolerance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AllergyIntoleranceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'AllergyIntolerance';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['clinicalStatus']) { this.clinicalStatus = new fhir.CodeableConcept(source.clinicalStatus, options); }
    if (source['verificationStatus']) { this.verificationStatus = new fhir.CodeableConcept(source.verificationStatus, options); }
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<AllergyIntoleranceTypeCodeType>({value: source.type}, options); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<AllergyIntoleranceTypeCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
    if (source['category'] !== undefined) { this.category = source.category.map((x) => new fhir.FhirCode<AllergyIntoleranceCategoryCodeType>({value: x}, options)); }
    else { this.category = []; }
    if (source['_category']) {
      source._category.forEach((x,i) => {
        if (this.category.length >= i) { if (x) { this.category[i].addExtendedProperties(x); } }
        else { if (x) { this.category.push(new fhir.FhirCode<AllergyIntoleranceCategoryCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['criticality'] !== undefined) { this.criticality = new fhir.FhirCode<AllergyIntoleranceCriticalityCodeType>({value: source.criticality}, options); }
    if (source['_criticality']) {
      if (this.criticality) { this.criticality.addExtendedProperties(source._criticality!); }
      else { this.criticality = new fhir.FhirCode<AllergyIntoleranceCriticalityCodeType>(source._criticality as Partial<fhir.FhirCode>, options); }
    }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    else { this.patient = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['onset']) { this.onset = source.onset; }
    else if (source['onsetDateTime'] !== undefined) { this.onset = new fhir.FhirDateTime({value: source.onsetDateTime}, options); }
    else if (source['onsetAge']) { this.onset = new fhir.Age(source.onsetAge, options); }
    else if (source['onsetPeriod']) { this.onset = new fhir.Period(source.onsetPeriod, options); }
    else if (source['onsetRange']) { this.onset = new fhir.Range(source.onsetRange, options); }
    else if (source['onsetString'] !== undefined) { this.onset = new fhir.FhirString({value: source.onsetString}, options); }
    if (source['recordedDate'] !== undefined) { this.recordedDate = new fhir.FhirDateTime({value: source.recordedDate}, options); }
    if (source['_recordedDate']) {
      if (this.recordedDate) { this.recordedDate.addExtendedProperties(source._recordedDate!); }
      else { this.recordedDate = new fhir.FhirDateTime(source._recordedDate as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['recorder']) { this.recorder = new fhir.Reference(source.recorder, options); }
    if (source['asserter']) { this.asserter = new fhir.Reference(source.asserter, options); }
    if (source['lastOccurrence'] !== undefined) { this.lastOccurrence = new fhir.FhirDateTime({value: source.lastOccurrence}, options); }
    if (source['_lastOccurrence']) {
      if (this.lastOccurrence) { this.lastOccurrence.addExtendedProperties(source._lastOccurrence!); }
      else { this.lastOccurrence = new fhir.FhirDateTime(source._lastOccurrence as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
    if (source['reaction']) { this.reaction = source.reaction.map((x) => new fhir.AllergyIntoleranceReaction(x, options)); }
    else { this.reaction = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AllergyIntolerance' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('clinicalStatus',exp,'AllergyintoleranceClinical',AllergyintoleranceClinicalVsValidation,'r'));
    iss.push(...this.vOSV('verificationStatus',exp,'AllergyintoleranceVerification',AllergyintoleranceVerificationVsValidation,'r'));
    iss.push(...this.vOSV('type',exp,'AllergyIntoleranceType',AllergyIntoleranceTypeVsValidation,'r'));
    iss.push(...this.vOAV('category',exp,'AllergyIntoleranceCategory',AllergyIntoleranceCategoryVsValidation,'r'));
    iss.push(...this.vOSV('criticality',exp,'AllergyIntoleranceCriticality',AllergyIntoleranceCriticalityVsValidation,'r'));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('onset',exp));
    iss.push(...this.vOS('recordedDate',exp));
    iss.push(...this.vOS('recorder',exp));
    iss.push(...this.vOS('asserter',exp));
    iss.push(...this.vOS('lastOccurrence',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('reaction',exp));
    return iss;
  }
}
