// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductPharmaceutical

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the MedicinalProductPharmaceuticalCharacteristics type.
 */
export interface MedicinalProductPharmaceuticalCharacteristicsArgs extends fhir.BackboneElementArgs {
  /**
   * A coded characteristic.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  status?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Characteristics e.g. a products onset of action.
 */
export class MedicinalProductPharmaceuticalCharacteristics extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductPharmaceuticalCharacteristics';
  /**
   * A coded characteristic.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalCharacteristics - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductPharmaceuticalCharacteristicsArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductPharmaceutical.characteristics' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('status',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod type.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs extends fhir.BackboneElementArgs {
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  tissue: fhir.CodeableConceptArgs|null;
  /**
   * A value for the time.
   */
  value: fhir.QuantityArgs|null;
  /**
   * Extra information about the withdrawal period.
   */
  supportingInformation?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
   */
  _supportingInformation?:fhir.FhirElementArgs;
}

/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod';
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  public tissue: fhir.CodeableConcept|null;
  /**
   * A value for the time.
   */
  public value: fhir.Quantity|null;
  /**
   * Extra information about the withdrawal period.
   */
  public supportingInformation?: fhir.FhirString|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['tissue']) { this.tissue = new fhir.CodeableConcept(source.tissue); }
    else { this.tissue = null; }
    if (source['value']) { this.value = new fhir.Quantity(source.value); }
    else { this.value = null; }
    if (source['supportingInformation']) { this.supportingInformation = new fhir.FhirString({value: source.supportingInformation}); }
    if (source['_supportingInformation']) {
      if (this.supportingInformation) { this.supportingInformation.addExtendedProperties(source._supportingInformation!); }
      else { this.supportingInformation = new fhir.FhirString(source._supportingInformation as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod' }
    iss.push(...this.vRS('tissue',exp));
    iss.push(...this.vRS('value',exp));
    iss.push(...this.vOS('supportingInformation',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies type.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesArgs extends fhir.BackboneElementArgs {
  /**
   * Coded expression for the species.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  withdrawalPeriod?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs[]|undefined;
}

/**
 * A species for which this route applies.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies';
  /**
   * Coded expression for the species.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  public withdrawalPeriod: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['withdrawalPeriod']) { this.withdrawalPeriod = source.withdrawalPeriod.map((x) => new fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(x)); }
    else { this.withdrawalPeriod = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOA('withdrawalPeriod',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MedicinalProductPharmaceuticalRouteOfAdministration type.
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationArgs extends fhir.BackboneElementArgs {
  /**
   * Coded expression for the route.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  firstDose?: fhir.QuantityArgs|undefined;
  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  maxSingleDose?: fhir.QuantityArgs|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerDay?: fhir.QuantityArgs|undefined;
  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerTreatmentPeriod?: fhir.RatioArgs|undefined;
  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxTreatmentPeriod?: fhir.DurationArgs|undefined;
  /**
   * A species for which this route applies.
   */
  targetSpecies?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesArgs[]|undefined;
}

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministration extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductPharmaceuticalRouteOfAdministration';
  /**
   * Coded expression for the route.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  public firstDose?: fhir.Quantity|undefined;
  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  public maxSingleDose?: fhir.Quantity|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  public maxDosePerDay?: fhir.Quantity|undefined;
  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  public maxDosePerTreatmentPeriod?: fhir.Ratio|undefined;
  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  public maxTreatmentPeriod?: fhir.Duration|undefined;
  /**
   * A species for which this route applies.
   */
  public targetSpecies: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductPharmaceuticalRouteOfAdministrationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['firstDose']) { this.firstDose = new fhir.Quantity(source.firstDose); }
    if (source['maxSingleDose']) { this.maxSingleDose = new fhir.Quantity(source.maxSingleDose); }
    if (source['maxDosePerDay']) { this.maxDosePerDay = new fhir.Quantity(source.maxDosePerDay); }
    if (source['maxDosePerTreatmentPeriod']) { this.maxDosePerTreatmentPeriod = new fhir.Ratio(source.maxDosePerTreatmentPeriod); }
    if (source['maxTreatmentPeriod']) { this.maxTreatmentPeriod = new fhir.Duration(source.maxTreatmentPeriod); }
    if (source['targetSpecies']) { this.targetSpecies = source.targetSpecies.map((x) => new fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(x)); }
    else { this.targetSpecies = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductPharmaceutical.routeOfAdministration' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('firstDose',exp));
    iss.push(...this.vOS('maxSingleDose',exp));
    iss.push(...this.vOS('maxDosePerDay',exp));
    iss.push(...this.vOS('maxDosePerTreatmentPeriod',exp));
    iss.push(...this.vOS('maxTreatmentPeriod',exp));
    iss.push(...this.vOA('targetSpecies',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MedicinalProductPharmaceutical type.
 */
export interface MedicinalProductPharmaceuticalArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductPharmaceutical"|undefined;
  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The administrable dose form, after necessary reconstitution.
   */
  administrableDoseForm: fhir.CodeableConceptArgs|null;
  /**
   * Todo.
   */
  unitOfPresentation?: fhir.CodeableConceptArgs|undefined;
  /**
   * Ingredient.
   */
  ingredient?: fhir.ReferenceArgs[]|undefined;
  /**
   * Accompanying device.
   */
  device?: fhir.ReferenceArgs[]|undefined;
  /**
   * Characteristics e.g. a products onset of action.
   */
  characteristics?: fhir.MedicinalProductPharmaceuticalCharacteristicsArgs[]|undefined;
  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  routeOfAdministration: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationArgs[]|null;
}

/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export class MedicinalProductPharmaceutical extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductPharmaceutical';
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicinalProductPharmaceutical";
  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  public identifier: fhir.Identifier[];
  /**
   * The administrable dose form, after necessary reconstitution.
   */
  public administrableDoseForm: fhir.CodeableConcept|null;
  /**
   * Todo.
   */
  public unitOfPresentation?: fhir.CodeableConcept|undefined;
  /**
   * Ingredient.
   */
  public ingredient: fhir.Reference[];
  /**
   * Accompanying device.
   */
  public device: fhir.Reference[];
  /**
   * Characteristics e.g. a products onset of action.
   */
  public characteristics: fhir.MedicinalProductPharmaceuticalCharacteristics[];
  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  public routeOfAdministration: fhir.MedicinalProductPharmaceuticalRouteOfAdministration[];
  /**
   * Default constructor for MedicinalProductPharmaceutical - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductPharmaceuticalArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProductPharmaceutical';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['administrableDoseForm']) { this.administrableDoseForm = new fhir.CodeableConcept(source.administrableDoseForm); }
    else { this.administrableDoseForm = null; }
    if (source['unitOfPresentation']) { this.unitOfPresentation = new fhir.CodeableConcept(source.unitOfPresentation); }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.Reference(x)); }
    else { this.ingredient = []; }
    if (source['device']) { this.device = source.device.map((x) => new fhir.Reference(x)); }
    else { this.device = []; }
    if (source['characteristics']) { this.characteristics = source.characteristics.map((x) => new fhir.MedicinalProductPharmaceuticalCharacteristics(x)); }
    else { this.characteristics = []; }
    if (source['routeOfAdministration']) { this.routeOfAdministration = source.routeOfAdministration.map((x) => new fhir.MedicinalProductPharmaceuticalRouteOfAdministration(x)); }
    else { this.routeOfAdministration = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicinalProductPharmaceutical' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('administrableDoseForm',exp));
    iss.push(...this.vOS('unitOfPresentation',exp));
    iss.push(...this.vOA('ingredient',exp));
    iss.push(...this.vOA('device',exp));
    iss.push(...this.vOA('characteristics',exp));
    iss.push(...this.vRA('routeOfAdministration',exp));
    return iss;
  }
}
