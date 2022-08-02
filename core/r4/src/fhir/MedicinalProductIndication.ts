// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductIndication

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the MedicinalProductIndicationOtherTherapy type.
 */
export interface MedicinalProductIndicationOtherTherapyArgs extends fhir.BackboneElementArgs {
  /**
   * The type of relationship between the medicinal product indication or contraindication and another therapy.
   */
  therapyRelationshipType: fhir.CodeableConceptArgs|null;
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  medication?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  medicationCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  medicationReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export class MedicinalProductIndicationOtherTherapy extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductIndicationOtherTherapy';
  /**
   * The type of relationship between the medicinal product indication or contraindication and another therapy.
   */
  public therapyRelationshipType: fhir.CodeableConcept|null;
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  public medication: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element MedicinalProductIndication.otherTherapy.medication[x]
   */
  protected static readonly _fts_medicationIsChoice:true = true;
  /**
   * Default constructor for MedicinalProductIndicationOtherTherapy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductIndicationOtherTherapyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['therapyRelationshipType']) { this.therapyRelationshipType = new fhir.CodeableConcept(source.therapyRelationshipType); }
    else { this.therapyRelationshipType = null; }
    if (source['medication']) { this.medication = source.medication; }
    else if (source['medicationCodeableConcept']) { this.medication = new fhir.CodeableConcept(source.medicationCodeableConcept); }
    else if (source['medicationReference']) { this.medication = new fhir.Reference(source.medicationReference); }
    else { this.medication = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductIndication.otherTherapy' }
    iss.push(...this.vRS('therapyRelationshipType',exp));
    iss.push(...this.vRS('medication',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MedicinalProductIndication type.
 */
export interface MedicinalProductIndicationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductIndication"|undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: fhir.ReferenceArgs[]|undefined;
  /**
   * The disease, symptom or procedure that is the indication for treatment.
   */
  diseaseSymptomProcedure?: fhir.CodeableConceptArgs|undefined;
  /**
   * The status of the disease or symptom for which the indication applies.
   */
  diseaseStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * Comorbidity (concurrent condition) or co-infection as part of the indication.
   */
  comorbidity?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The intended effect, aim or strategy to be achieved by the indication.
   */
  intendedEffect?: fhir.CodeableConceptArgs|undefined;
  /**
   * Timing or duration information as part of the indication.
   */
  duration?: fhir.QuantityArgs|undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  otherTherapy?: fhir.MedicinalProductIndicationOtherTherapyArgs[]|undefined;
  /**
   * Describe the undesirable effects of the medicinal product.
   */
  undesirableEffect?: fhir.ReferenceArgs[]|undefined;
  /**
   * The population group to which this applies.
   */
  population?: fhir.PopulationArgs[]|undefined;
}

/**
 * Indication for the Medicinal Product.
 */
export class MedicinalProductIndication extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductIndication';
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicinalProductIndication";
  /**
   * The medication for which this is an indication.
   */
  public subject: fhir.Reference[];
  /**
   * The disease, symptom or procedure that is the indication for treatment.
   */
  public diseaseSymptomProcedure?: fhir.CodeableConcept|undefined;
  /**
   * The status of the disease or symptom for which the indication applies.
   */
  public diseaseStatus?: fhir.CodeableConcept|undefined;
  /**
   * Comorbidity (concurrent condition) or co-infection as part of the indication.
   */
  public comorbidity: fhir.CodeableConcept[];
  /**
   * The intended effect, aim or strategy to be achieved by the indication.
   */
  public intendedEffect?: fhir.CodeableConcept|undefined;
  /**
   * Timing or duration information as part of the indication.
   */
  public duration?: fhir.Quantity|undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  public otherTherapy: fhir.MedicinalProductIndicationOtherTherapy[];
  /**
   * Describe the undesirable effects of the medicinal product.
   */
  public undesirableEffect: fhir.Reference[];
  /**
   * The population group to which this applies.
   */
  public population: fhir.Population[];
  /**
   * Default constructor for MedicinalProductIndication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductIndicationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProductIndication';
    if (source['subject']) { this.subject = source.subject.map((x) => new fhir.Reference(x)); }
    else { this.subject = []; }
    if (source['diseaseSymptomProcedure']) { this.diseaseSymptomProcedure = new fhir.CodeableConcept(source.diseaseSymptomProcedure); }
    if (source['diseaseStatus']) { this.diseaseStatus = new fhir.CodeableConcept(source.diseaseStatus); }
    if (source['comorbidity']) { this.comorbidity = source.comorbidity.map((x) => new fhir.CodeableConcept(x)); }
    else { this.comorbidity = []; }
    if (source['intendedEffect']) { this.intendedEffect = new fhir.CodeableConcept(source.intendedEffect); }
    if (source['duration']) { this.duration = new fhir.Quantity(source.duration); }
    if (source['otherTherapy']) { this.otherTherapy = source.otherTherapy.map((x) => new fhir.MedicinalProductIndicationOtherTherapy(x)); }
    else { this.otherTherapy = []; }
    if (source['undesirableEffect']) { this.undesirableEffect = source.undesirableEffect.map((x) => new fhir.Reference(x)); }
    else { this.undesirableEffect = []; }
    if (source['population']) { this.population = source.population.map((x) => new fhir.Population(x)); }
    else { this.population = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductIndication' }
    iss.push(...this.vOA('subject',exp));
    iss.push(...this.vOS('diseaseSymptomProcedure',exp));
    iss.push(...this.vOS('diseaseStatus',exp));
    iss.push(...this.vOA('comorbidity',exp));
    iss.push(...this.vOS('intendedEffect',exp));
    iss.push(...this.vOS('duration',exp));
    iss.push(...this.vOA('otherTherapy',exp));
    iss.push(...this.vOA('undesirableEffect',exp));
    iss.push(...this.vOA('population',exp));
    return iss;
  }
}
