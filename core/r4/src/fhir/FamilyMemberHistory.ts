// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: FamilyMemberHistory

import * as fhir from '../fhir.js';

// @ts-ignore
import { ConditionCodings, ConditionCodingType,} from '../fhirValueSets/ConditionCodings.js';
// @ts-ignore
import { ConditionCodes,  ConditionCodeType } from '../fhirValueSets/ConditionCodes.js';
// @ts-ignore
import { ConditionOutcomeCodings, ConditionOutcomeCodingType,} from '../fhirValueSets/ConditionOutcomeCodings.js';
// @ts-ignore
import { ConditionOutcomeCodes,  ConditionOutcomeCodeType } from '../fhirValueSets/ConditionOutcomeCodes.js';
// @ts-ignore
import { HistoryStatusCodings, HistoryStatusCodingType,} from '../fhirValueSets/HistoryStatusCodings.js';
// @ts-ignore
import { HistoryStatusCodes,  HistoryStatusCodeType } from '../fhirValueSets/HistoryStatusCodes.js';
// @ts-ignore
import { HistoryAbsentReasonCodings, HistoryAbsentReasonCodingType,} from '../fhirValueSets/HistoryAbsentReasonCodings.js';
// @ts-ignore
import { HistoryAbsentReasonCodes,  HistoryAbsentReasonCodeType } from '../fhirValueSets/HistoryAbsentReasonCodes.js';
// @ts-ignore
import { V3FamilyMemberCodings, V3FamilyMemberCodingType,} from '../fhirValueSets/V3FamilyMemberCodings.js';
// @ts-ignore
import { V3FamilyMemberCodes,  V3FamilyMemberCodeType } from '../fhirValueSets/V3FamilyMemberCodes.js';
// @ts-ignore
import { AdministrativeGenderCodings, AdministrativeGenderCodingType,} from '../fhirValueSets/AdministrativeGenderCodings.js';
// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { ClinicalFindingsCodings, ClinicalFindingsCodingType,} from '../fhirValueSets/ClinicalFindingsCodings.js';
// @ts-ignore
import { ClinicalFindingsCodes,  ClinicalFindingsCodeType } from '../fhirValueSets/ClinicalFindingsCodes.js';
/**
 * Valid arguments for the FamilyMemberHistoryCondition type.
 */
export interface FamilyMemberHistoryConditionArgs extends fhir.BackboneElementArgs {
  /**
   * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
   */
  outcome?: fhir.CodeableConceptArgs|undefined;
  /**
   * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
   */
  contributedToDeath?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: FamilyMemberHistory.condition.contributedToDeath
   */
  _contributedToDeath?:fhir.FhirElementArgs;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onset?: fhir.Age|fhir.Range|fhir.Period|fhir.FhirString|undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetAge?: fhir.AgeArgs|undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetRange?: fhir.RangeArgs|undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetString?: fhir.FhirString|string|undefined;
  /**
   * An area where general notes can be placed about this specific condition.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export class FamilyMemberHistoryCondition extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'FamilyMemberHistoryCondition';
  /**
   * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
   */
  public outcome?: fhir.CodeableConcept|undefined;
  /**
   * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
   */
  public contributedToDeath?: fhir.FhirBoolean|undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  public onset?: (fhir.Age|fhir.Range|fhir.Period|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element FamilyMemberHistory.condition.onset[x]
   */
  protected static readonly _fts_onsetIsChoice:true = true;
  /**
   * An area where general notes can be placed about this specific condition.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for FamilyMemberHistoryCondition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FamilyMemberHistoryConditionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['outcome']) { this.outcome = new fhir.CodeableConcept(source.outcome); }
    if (source['contributedToDeath']) { this.contributedToDeath = new fhir.FhirBoolean({value: source.contributedToDeath}); }
    if (source['_contributedToDeath']) {
      if (this.contributedToDeath) { this.contributedToDeath.addExtendedProperties(source._contributedToDeath!); }
      else { this.contributedToDeath = new fhir.FhirBoolean(source._contributedToDeath as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['onset']) { this.onset = source.onset; }
    else if (source['onsetAge']) { this.onset = new fhir.Age(source.onsetAge); }
    else if (source['onsetRange']) { this.onset = new fhir.Range(source.onsetRange); }
    else if (source['onsetPeriod']) { this.onset = new fhir.Period(source.onsetPeriod); }
    else if (source['onsetString']) { this.onset = new fhir.FhirString({value: source.onsetString}); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'FamilyMemberHistory.condition' }
    if (!this['code']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code fhir: FamilyMemberHistory.condition.code:CodeableConcept', expression: [expression] });
    }
    if (this["code"]) { issues.push(...this.code.doModelValidation(expression+'.code')); }
    if (this["outcome"]) { issues.push(...this.outcome.doModelValidation(expression+'.outcome')); }
    if (this["contributedToDeath"]) { issues.push(...this.contributedToDeath.doModelValidation(expression+'.contributedToDeath')); }
    if (this["note"]) { this.note.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.note[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the FamilyMemberHistory type.
 */
export interface FamilyMemberHistoryArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "FamilyMemberHistory"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   */
  instantiatesCanonical?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: FamilyMemberHistory.instantiatesCanonical
   */
  _instantiatesCanonical?:(fhir.FhirElementArgs|null)[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: FamilyMemberHistory.instantiatesUri
   */
  _instantiatesUri?:(fhir.FhirElementArgs|null)[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<HistoryStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: FamilyMemberHistory.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Describes why the family member's history is not available.
   */
  dataAbsentReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * The person who this history concerns.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * This should be captured even if the same as the date on the List aggregating the full family history.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: FamilyMemberHistory.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: FamilyMemberHistory.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * The type of relationship this person has to the patient (father, mother, brother etc.).
   */
  relationship: fhir.CodeableConceptArgs|null;
  /**
   * This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. 'Aunt Sue' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
   */
  sex?: fhir.CodeableConceptArgs|undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  born?: fhir.Period|fhir.FhirDate|fhir.FhirString|undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  bornPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  bornDate?: fhir.FhirDate|string|undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  bornString?: fhir.FhirString|string|undefined;
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  age?: fhir.Age|fhir.Range|fhir.FhirString|undefined;
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  ageAge?: fhir.AgeArgs|undefined;
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  ageRange?: fhir.RangeArgs|undefined;
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  ageString?: fhir.FhirString|string|undefined;
  /**
   * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
   */
  estimatedAge?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: FamilyMemberHistory.estimatedAge
   */
  _estimatedAge?:fhir.FhirElementArgs;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceased?: fhir.FhirBoolean|fhir.Age|fhir.Range|fhir.FhirDate|fhir.FhirString|undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedAge?: fhir.AgeArgs|undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedRange?: fhir.RangeArgs|undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedDate?: fhir.FhirDate|string|undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  deceasedString?: fhir.FhirString|string|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
   */
  condition?: fhir.FamilyMemberHistoryConditionArgs[]|undefined;
}

/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export class FamilyMemberHistory extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'FamilyMemberHistory';
  /**
   * Resource Type Name
   */
  public override resourceType: "FamilyMemberHistory";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier: fhir.Identifier[];
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.
   */
  public instantiatesCanonical: fhir.FhirCanonical[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri: fhir.FhirUri[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<HistoryStatusCodeType>|null;
  /**
   * Describes why the family member's history is not available.
   */
  public dataAbsentReason?: fhir.CodeableConcept|undefined;
  /**
   * The person who this history concerns.
   */
  public patient: fhir.Reference|null;
  /**
   * This should be captured even if the same as the date on the List aggregating the full family history.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
   */
  public name?: fhir.FhirString|undefined;
  /**
   * The type of relationship this person has to the patient (father, mother, brother etc.).
   */
  public relationship: fhir.CodeableConcept|null;
  /**
   * This element should ideally reflect whether the individual is genetically male or female.  However, as reported information based on the knowledge of the patient or reporting friend/relative, there may be situations where the reported sex might not be totally accurate.  E.g. 'Aunt Sue' might be XY rather than XX.  Questions soliciting this information should be phrased to encourage capture of genetic sex where known.  However, systems performing analysis should also allow for the possibility of imprecision with this element.
   */
  public sex?: fhir.CodeableConcept|undefined;
  /**
   * The actual or approximate date of birth of the relative.
   */
  public born?: (fhir.Period|fhir.FhirDate|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element FamilyMemberHistory.born[x]
   */
  protected static readonly _fts_bornIsChoice:true = true;
  /**
   * use estimatedAge to indicate whether the age is actual or not.
   */
  public age?: (fhir.Age|fhir.Range|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element FamilyMemberHistory.age[x]
   */
  protected static readonly _fts_ageIsChoice:true = true;
  /**
   * This element is labeled as a modifier because the fact that age is estimated can/should change the results of any algorithm that calculates based on the specified age.
   */
  public estimatedAge?: fhir.FhirBoolean|undefined;
  /**
   * Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
   */
  public deceased?: (fhir.FhirBoolean|fhir.Age|fhir.Range|fhir.FhirDate|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element FamilyMemberHistory.deceased[x]
   */
  protected static readonly _fts_deceasedIsChoice:true = true;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
   */
  public reasonReference: fhir.Reference[];
  /**
   * This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
   */
  public note: fhir.Annotation[];
  /**
   * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
   */
  public condition: fhir.FamilyMemberHistoryCondition[];
  /**
   * Default constructor for FamilyMemberHistory - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FamilyMemberHistoryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'FamilyMemberHistory';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['instantiatesCanonical']) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.instantiatesCanonical = []; }
    if (source['_instantiatesCanonical']) {
      source._instantiatesCanonical.forEach((x,i) => {
        if (this.instantiatesCanonical.length >= i) { if (x) { this.instantiatesCanonical[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesCanonical.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['instantiatesUri']) { this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({value: x})); }
    else { this.instantiatesUri = []; }
    if (source['_instantiatesUri']) {
      source._instantiatesUri.forEach((x,i) => {
        if (this.instantiatesUri.length >= i) { if (x) { this.instantiatesUri[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesUri.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['status']) { this.status = new fhir.FhirCode<HistoryStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<HistoryStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['dataAbsentReason']) { this.dataAbsentReason = new fhir.CodeableConcept(source.dataAbsentReason); }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['relationship']) { this.relationship = new fhir.CodeableConcept(source.relationship); }
    else { this.relationship = null; }
    if (source['sex']) { this.sex = new fhir.CodeableConcept(source.sex); }
    if (source['born']) { this.born = source.born; }
    else if (source['bornPeriod']) { this.born = new fhir.Period(source.bornPeriod); }
    else if (source['bornDate']) { this.born = new fhir.FhirDate({value: source.bornDate}); }
    else if (source['bornString']) { this.born = new fhir.FhirString({value: source.bornString}); }
    if (source['age']) { this.age = source.age; }
    else if (source['ageAge']) { this.age = new fhir.Age(source.ageAge); }
    else if (source['ageRange']) { this.age = new fhir.Range(source.ageRange); }
    else if (source['ageString']) { this.age = new fhir.FhirString({value: source.ageString}); }
    if (source['estimatedAge']) { this.estimatedAge = new fhir.FhirBoolean({value: source.estimatedAge}); }
    if (source['_estimatedAge']) {
      if (this.estimatedAge) { this.estimatedAge.addExtendedProperties(source._estimatedAge!); }
      else { this.estimatedAge = new fhir.FhirBoolean(source._estimatedAge as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['deceased']) { this.deceased = source.deceased; }
    else if (source['deceasedBoolean']) { this.deceased = new fhir.FhirBoolean({value: source.deceasedBoolean}); }
    else if (source['deceasedAge']) { this.deceased = new fhir.Age(source.deceasedAge); }
    else if (source['deceasedRange']) { this.deceased = new fhir.Range(source.deceasedRange); }
    else if (source['deceasedDate']) { this.deceased = new fhir.FhirDate({value: source.deceasedDate}); }
    else if (source['deceasedString']) { this.deceased = new fhir.FhirString({value: source.deceasedString}); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['condition']) { this.condition = source.condition.map((x) => new fhir.FamilyMemberHistoryCondition(x)); }
    else { this.condition = []; }
  }
  /**
   * Required-bound Value Set for status (FamilyMemberHistory.status)
   */
  public static get statusRequiredCodes() {
    return HistoryStatusCodes;
  }
  /**
   * Extensible-bound Value Set for sex (FamilyMemberHistory.sex)
   */
  public static get sexExtensibleCodings():AdministrativeGenderCodingType {
    return AdministrativeGenderCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'FamilyMemberHistory' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: FamilyMemberHistory.resourceType:"FamilyMemberHistory"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["instantiatesCanonical"]) { this.instantiatesCanonical.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.instantiatesCanonical[${i}]`)); }) }
    if (this["instantiatesUri"]) { this.instantiatesUri.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.instantiatesUri[${i}]`)); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: FamilyMemberHistory.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(HistoryStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (FamilyMemberHistory.status) of type code is missing code for Required binding to: HistoryStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["dataAbsentReason"]) { issues.push(...this.dataAbsentReason.doModelValidation(expression+'.dataAbsentReason')); }
    if (!this['patient']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property patient fhir: FamilyMemberHistory.patient:Reference', expression: [expression] });
    }
    if (this["patient"]) { issues.push(...this.patient.doModelValidation(expression+'.patient')); }
    if (this["date"]) { issues.push(...this.date.doModelValidation(expression+'.date')); }
    if (this["name"]) { issues.push(...this.name.doModelValidation(expression+'.name')); }
    if (!this['relationship']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property relationship fhir: FamilyMemberHistory.relationship:CodeableConcept', expression: [expression] });
    }
    if (this["relationship"]) { issues.push(...this.relationship.doModelValidation(expression+'.relationship')); }
    if (this["sex"]) { issues.push(...this.sex.doModelValidation(expression+'.sex')); }
    if (this["estimatedAge"]) { issues.push(...this.estimatedAge.doModelValidation(expression+'.estimatedAge')); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reasonCode[${i}]`)); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reasonReference[${i}]`)); }) }
    if (this["note"]) { this.note.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.note[${i}]`)); }) }
    if (this["condition"]) { this.condition.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.condition[${i}]`)); }) }
    return issues;
  }
}
