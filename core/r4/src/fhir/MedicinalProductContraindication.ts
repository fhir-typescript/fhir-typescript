// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductContraindication

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the MedicinalProductContraindicationOtherTherapy type.
 */
export interface MedicinalProductContraindicationOtherTherapyArgs extends fhir.BackboneElementArgs {
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
export class MedicinalProductContraindicationOtherTherapy extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductContraindicationOtherTherapy';
  /**
   * The type of relationship between the medicinal product indication or contraindication and another therapy.
   */
  public therapyRelationshipType: fhir.CodeableConcept|null;
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  public medication: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element MedicinalProductContraindication.otherTherapy.medication[x]
   */
  protected static readonly _fts_medicationIsChoice:true = true;
  /**
   * Default constructor for MedicinalProductContraindicationOtherTherapy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductContraindicationOtherTherapyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
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
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductContraindication.otherTherapy' }
    this.vRS('therapyRelationshipType',exp)
    this.vRS('medication',exp)
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProductContraindication type.
 */
export interface MedicinalProductContraindicationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductContraindication"|undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: fhir.ReferenceArgs[]|undefined;
  /**
   * The disease, symptom or procedure for the contraindication.
   */
  disease?: fhir.CodeableConceptArgs|undefined;
  /**
   * The status of the disease or symptom for the contraindication.
   */
  diseaseStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * A comorbidity (concurrent condition) or coinfection.
   */
  comorbidity?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies as part of the indication.
   */
  therapeuticIndication?: fhir.ReferenceArgs[]|undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  otherTherapy?: fhir.MedicinalProductContraindicationOtherTherapyArgs[]|undefined;
  /**
   * The population group to which this applies.
   */
  population?: fhir.PopulationArgs[]|undefined;
}

/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export class MedicinalProductContraindication extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductContraindication';
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicinalProductContraindication";
  /**
   * The medication for which this is an indication.
   */
  public subject: fhir.Reference[];
  /**
   * The disease, symptom or procedure for the contraindication.
   */
  public disease?: fhir.CodeableConcept|undefined;
  /**
   * The status of the disease or symptom for the contraindication.
   */
  public diseaseStatus?: fhir.CodeableConcept|undefined;
  /**
   * A comorbidity (concurrent condition) or coinfection.
   */
  public comorbidity: fhir.CodeableConcept[];
  /**
   * Information about the use of the medicinal product in relation to other therapies as part of the indication.
   */
  public therapeuticIndication: fhir.Reference[];
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  public otherTherapy: fhir.MedicinalProductContraindicationOtherTherapy[];
  /**
   * The population group to which this applies.
   */
  public population: fhir.Population[];
  /**
   * Default constructor for MedicinalProductContraindication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductContraindicationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProductContraindication';
    if (source['subject']) { this.subject = source.subject.map((x) => new fhir.Reference(x)); }
    else { this.subject = []; }
    if (source['disease']) { this.disease = new fhir.CodeableConcept(source.disease); }
    if (source['diseaseStatus']) { this.diseaseStatus = new fhir.CodeableConcept(source.diseaseStatus); }
    if (source['comorbidity']) { this.comorbidity = source.comorbidity.map((x) => new fhir.CodeableConcept(x)); }
    else { this.comorbidity = []; }
    if (source['therapeuticIndication']) { this.therapeuticIndication = source.therapeuticIndication.map((x) => new fhir.Reference(x)); }
    else { this.therapeuticIndication = []; }
    if (source['otherTherapy']) { this.otherTherapy = source.otherTherapy.map((x) => new fhir.MedicinalProductContraindicationOtherTherapy(x)); }
    else { this.otherTherapy = []; }
    if (source['population']) { this.population = source.population.map((x) => new fhir.Population(x)); }
    else { this.population = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductContraindication' }
    this.vRS('resourceType',exp)
    this.vOA('subject',exp)
    this.vOS('disease',exp)
    this.vOS('diseaseStatus',exp)
    this.vOA('comorbidity',exp)
    this.vOA('therapeuticIndication',exp)
    this.vOA('otherTherapy',exp)
    this.vOA('population',exp)
    return issues;
  }
}
