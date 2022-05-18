// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductUndesirableEffect

import * as fhir from '../fhir.js';

// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the MedicinalProductUndesirableEffect type.
 */
export interface MedicinalProductUndesirableEffectArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductUndesirableEffect"|undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: fhir.ReferenceArgs[]|undefined;
  /**
   * The symptom, condition or undesirable effect.
   */
  symptomConditionEffect?: fhir.CodeableConceptArgs|undefined;
  /**
   * Classification of the effect.
   */
  classification?: fhir.CodeableConceptArgs|undefined;
  /**
   * The frequency of occurrence of the effect.
   */
  frequencyOfOccurrence?: fhir.CodeableConceptArgs|undefined;
  /**
   * The population group to which this applies.
   */
  population?: fhir.PopulationArgs[]|undefined;
}

/**
 * Describe the undesirable effects of the medicinal product.
 */
export class MedicinalProductUndesirableEffect extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'MedicinalProductUndesirableEffect';
  /**
   * Resource Type Name
   */
  public resourceType: "MedicinalProductUndesirableEffect";
  /**
   * The medication for which this is an indication.
   */
  public subject?: fhir.Reference[];
  /**
   * The symptom, condition or undesirable effect.
   */
  public symptomConditionEffect?: fhir.CodeableConcept|undefined;
  /**
   * Classification of the effect.
   */
  public classification?: fhir.CodeableConcept|undefined;
  /**
   * The frequency of occurrence of the effect.
   */
  public frequencyOfOccurrence?: fhir.CodeableConcept|undefined;
  /**
   * The population group to which this applies.
   */
  public population?: fhir.Population[];
  /**
   * Default constructor for MedicinalProductUndesirableEffect - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductUndesirableEffectArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProductUndesirableEffect';
    if (source['subject']) { this.subject = source.subject.map((x) => new fhir.Reference(x)); }
    else { this.subject = []; }
    if (source['symptomConditionEffect']) { this.symptomConditionEffect = new fhir.CodeableConcept(source.symptomConditionEffect); }
    if (source['classification']) { this.classification = new fhir.CodeableConcept(source.classification); }
    if (source['frequencyOfOccurrence']) { this.frequencyOfOccurrence = new fhir.CodeableConcept(source.frequencyOfOccurrence); }
    if (source['population']) { this.population = source.population.map((x) => new fhir.Population(x)); }
    else { this.population = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"MedicinalProductUndesirableEffect" fhir: MedicinalProductUndesirableEffect.resourceType:"MedicinalProductUndesirableEffect"', }));
    }
    if (this["subject"]) { this.subject.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["symptomConditionEffect"]) { outcome.issue!.push(...this.symptomConditionEffect.doModelValidation().issue!); }
    if (this["classification"]) { outcome.issue!.push(...this.classification.doModelValidation().issue!); }
    if (this["frequencyOfOccurrence"]) { outcome.issue!.push(...this.frequencyOfOccurrence.doModelValidation().issue!); }
    if (this["population"]) { this.population.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
