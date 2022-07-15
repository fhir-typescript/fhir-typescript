// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Dosage

import * as fhir from '../fhir.js';

// @ts-ignore
import { ApproachSiteCodes,  ApproachSiteCodeType } from '../fhirValueSets/ApproachSiteCodes.js';
// @ts-ignore
import { ApproachSiteVsValidation } from '../fhirValueSets/ApproachSiteVsValidation.js';
// @ts-ignore
import { RouteCodes,  RouteCodeType } from '../fhirValueSets/RouteCodes.js';
// @ts-ignore
import { RouteVsValidation } from '../fhirValueSets/RouteVsValidation.js';
// @ts-ignore
import { AdministrationMethodCodes,  AdministrationMethodCodeType } from '../fhirValueSets/AdministrationMethodCodes.js';
// @ts-ignore
import { AdministrationMethodVsValidation } from '../fhirValueSets/AdministrationMethodVsValidation.js';
/**
 * Valid arguments for the Dosage type.
 */
export interface DosageArgs extends fhir.FhirElementArgs {
  /**
   * Indicates the order in which the dosage instructions should be applied or interpreted.
   */
  sequence?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: Dosage.sequence
   */
  _sequence?:fhir.FhirElementArgs;
  /**
   * Free text dosage instructions e.g. SIG.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Dosage.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * Supplemental instruction - e.g. "with meals".
   */
  additionalInstruction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Instructions in terms that are understood by the patient or consumer.
   */
  patientInstruction?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Dosage.patientInstruction
   */
  _patientInstruction?:fhir.FhirElementArgs;
  /**
   * This attribute may not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.
   */
  timing?: fhir.TimingArgs|undefined;
  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
   */
  asNeeded?: fhir.FhirBoolean|fhir.CodeableConcept|undefined;
  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
   */
  asNeededBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
   */
  asNeededCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  site?: fhir.CodeableConceptArgs|undefined;
  /**
   * How drug should enter body.
   */
  route?: fhir.CodeableConceptArgs|undefined;
  /**
   * Terminologies used often pre-coordinate this term with the route and or form of administration.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
   */
  dose?: fhir.Range|fhir.Quantity|undefined;
  /**
   * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
   */
  doseRange?: fhir.RangeArgs|undefined;
  /**
   * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
   */
  doseQuantity?: fhir.QuantityArgs|undefined;
  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".
   */
  maxDosePerPeriod?: fhir.RatioArgs|undefined;
  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.
   */
  maxDosePerAdministration?: fhir.QuantityArgs|undefined;
  /**
   * Upper limit on medication per lifetime of the patient.
   */
  maxDosePerLifetime?: fhir.QuantityArgs|undefined;
  /**
   * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
   */
  rate?: fhir.Ratio|fhir.Range|fhir.Quantity|undefined;
  /**
   * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
   */
  rateRatio?: fhir.RatioArgs|undefined;
  /**
   * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
   */
  rateRange?: fhir.RangeArgs|undefined;
  /**
   * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
   */
  rateQuantity?: fhir.QuantityArgs|undefined;
}

/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export class Dosage extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Dosage';
  /**
   * Indicates the order in which the dosage instructions should be applied or interpreted.
   */
  public sequence?: fhir.FhirInteger|undefined;
  /**
   * Free text dosage instructions e.g. SIG.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * Supplemental instruction - e.g. "with meals".
   */
  public additionalInstruction: fhir.CodeableConcept[];
  /**
   * Instructions in terms that are understood by the patient or consumer.
   */
  public patientInstruction?: fhir.FhirString|undefined;
  /**
   * This attribute may not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.
   */
  public timing?: fhir.Timing|undefined;
  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
   */
  public asNeeded?: (fhir.FhirBoolean|fhir.CodeableConcept)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Dosage.asNeeded[x]
   */
  protected static readonly _fts_asNeededIsChoice:true = true;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public site?: fhir.CodeableConcept|undefined;
  /**
   * How drug should enter body.
   */
  public route?: fhir.CodeableConcept|undefined;
  /**
   * Terminologies used often pre-coordinate this term with the route and or form of administration.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
   */
  public dose?: (fhir.Range|fhir.Quantity)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Dosage.dose[x]
   */
  protected static readonly _fts_doseIsChoice:true = true;
  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".
   */
  public maxDosePerPeriod?: fhir.Ratio|undefined;
  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.
   */
  public maxDosePerAdministration?: fhir.Quantity|undefined;
  /**
   * Upper limit on medication per lifetime of the patient.
   */
  public maxDosePerLifetime?: fhir.Quantity|undefined;
  /**
   * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
   */
  public rate?: (fhir.Ratio|fhir.Range|fhir.Quantity)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Dosage.rate[x]
   */
  protected static readonly _fts_rateIsChoice:true = true;
  /**
   * Default constructor for Dosage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DosageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['sequence']) { this.sequence = new fhir.FhirInteger({value: source.sequence}); }
    if (source['_sequence']) {
      if (this.sequence) { this.sequence.addExtendedProperties(source._sequence!); }
      else { this.sequence = new fhir.FhirInteger(source._sequence as Partial<fhir.FhirIntegerArgs>); }
    }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
    if (source['additionalInstruction']) { this.additionalInstruction = source.additionalInstruction.map((x) => new fhir.CodeableConcept(x)); }
    else { this.additionalInstruction = []; }
    if (source['patientInstruction']) { this.patientInstruction = new fhir.FhirString({value: source.patientInstruction}); }
    if (source['_patientInstruction']) {
      if (this.patientInstruction) { this.patientInstruction.addExtendedProperties(source._patientInstruction!); }
      else { this.patientInstruction = new fhir.FhirString(source._patientInstruction as Partial<fhir.FhirStringArgs>); }
    }
    if (source['timing']) { this.timing = new fhir.Timing(source.timing); }
    if (source['asNeeded']) { this.asNeeded = source.asNeeded; }
    else if (source['asNeededBoolean']) { this.asNeeded = new fhir.FhirBoolean({value: source.asNeededBoolean}); }
    else if (source['asNeededCodeableConcept']) { this.asNeeded = new fhir.CodeableConcept(source.asNeededCodeableConcept); }
    if (source['site']) { this.site = new fhir.CodeableConcept(source.site); }
    if (source['route']) { this.route = new fhir.CodeableConcept(source.route); }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['dose']) { this.dose = source.dose; }
    else if (source['doseRange']) { this.dose = new fhir.Range(source.doseRange); }
    else if (source['doseQuantity']) { this.dose = new fhir.Quantity(source.doseQuantity); }
    if (source['maxDosePerPeriod']) { this.maxDosePerPeriod = new fhir.Ratio(source.maxDosePerPeriod); }
    if (source['maxDosePerAdministration']) { this.maxDosePerAdministration = new fhir.Quantity(source.maxDosePerAdministration); }
    if (source['maxDosePerLifetime']) { this.maxDosePerLifetime = new fhir.Quantity(source.maxDosePerLifetime); }
    if (source['rate']) { this.rate = source.rate; }
    else if (source['rateRatio']) { this.rate = new fhir.Ratio(source.rateRatio); }
    else if (source['rateRange']) { this.rate = new fhir.Range(source.rateRange); }
    else if (source['rateQuantity']) { this.rate = new fhir.Quantity(source.rateQuantity); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Dosage' }
    this.vOS('sequence',exp)
    this.vOS('text',exp)
    this.vOA('additionalInstruction',exp)
    this.vOS('patientInstruction',exp)
    this.vOS('timing',exp)
    this.vOS('asNeeded',exp)
    this.vOS('site',exp)
    this.vOS('route',exp)
    this.vOS('method',exp)
    this.vOS('dose',exp)
    this.vOS('maxDosePerPeriod',exp)
    this.vOS('maxDosePerAdministration',exp)
    this.vOS('maxDosePerLifetime',exp)
    this.vOS('rate',exp)
    return issues;
  }
}
