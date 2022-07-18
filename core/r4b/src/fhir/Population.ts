// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Population

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Population type.
 */
export interface PopulationArgs extends fhir.BackboneElementArgs {
  /**
   * The age of the specific population.
   */
  age?: fhir.Range|fhir.CodeableConcept|undefined;
  /**
   * The age of the specific population.
   */
  ageRange?: fhir.RangeArgs|undefined;
  /**
   * The age of the specific population.
   */
  ageCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The gender of the specific population.
   */
  gender?: fhir.CodeableConceptArgs|undefined;
  /**
   * Race of the specific population.
   */
  race?: fhir.CodeableConceptArgs|undefined;
  /**
   * The existing physiological conditions of the specific population to which this applies.
   */
  physiologicalCondition?: fhir.CodeableConceptArgs|undefined;
}

/**
 * A populatioof people with some set of grouping criteria.
 */
export class Population extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Population';
  /**
   * The age of the specific population.
   */
  public age?: (fhir.Range|fhir.CodeableConcept)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Population.age[x]
   */
  protected static readonly _fts_ageIsChoice:true = true;
  /**
   * The gender of the specific population.
   */
  public gender?: fhir.CodeableConcept|undefined;
  /**
   * Race of the specific population.
   */
  public race?: fhir.CodeableConcept|undefined;
  /**
   * The existing physiological conditions of the specific population to which this applies.
   */
  public physiologicalCondition?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for Population - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PopulationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['age']) { this.age = source.age; }
    else if (source['ageRange']) { this.age = new fhir.Range(source.ageRange); }
    else if (source['ageCodeableConcept']) { this.age = new fhir.CodeableConcept(source.ageCodeableConcept); }
    if (source['gender']) { this.gender = new fhir.CodeableConcept(source.gender); }
    if (source['race']) { this.race = new fhir.CodeableConcept(source.race); }
    if (source['physiologicalCondition']) { this.physiologicalCondition = new fhir.CodeableConcept(source.physiologicalCondition); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Population' }
    iss.push(...this.vOS('age',exp));
    iss.push(...this.vOS('gender',exp));
    iss.push(...this.vOS('race',exp));
    iss.push(...this.vOS('physiologicalCondition',exp));
    return iss;
  }
}