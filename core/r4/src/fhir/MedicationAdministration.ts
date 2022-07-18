// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicationAdministration

import * as fhir from '../fhir.js';

// @ts-ignore
import { MedAdminPerformFunctionCodes,  MedAdminPerformFunctionCodeType } from '../fhirValueSets/MedAdminPerformFunctionCodes.js';
// @ts-ignore
import { MedAdminPerformFunctionVsValidation } from '../fhirValueSets/MedAdminPerformFunctionVsValidation.js';
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
// @ts-ignore
import { MedicationAdminStatusCodes,  MedicationAdminStatusCodeType } from '../fhirValueSets/MedicationAdminStatusCodes.js';
// @ts-ignore
import { MedicationAdminStatusVsValidation } from '../fhirValueSets/MedicationAdminStatusVsValidation.js';
// @ts-ignore
import { ReasonMedicationNotGivenCodes,  ReasonMedicationNotGivenCodeType } from '../fhirValueSets/ReasonMedicationNotGivenCodes.js';
// @ts-ignore
import { ReasonMedicationNotGivenVsValidation } from '../fhirValueSets/ReasonMedicationNotGivenVsValidation.js';
// @ts-ignore
import { MedicationAdminCategoryCodes,  MedicationAdminCategoryCodeType } from '../fhirValueSets/MedicationAdminCategoryCodes.js';
// @ts-ignore
import { MedicationAdminCategoryVsValidation } from '../fhirValueSets/MedicationAdminCategoryVsValidation.js';
// @ts-ignore
import { ReasonMedicationGivenCodes,  ReasonMedicationGivenCodeType } from '../fhirValueSets/ReasonMedicationGivenCodes.js';
// @ts-ignore
import { ReasonMedicationGivenVsValidation } from '../fhirValueSets/ReasonMedicationGivenVsValidation.js';
/**
 * Valid arguments for the MedicationAdministrationPerformer type.
 */
export interface MedicationAdministrationPerformerArgs extends fhir.BackboneElementArgs {
  /**
   * Distinguishes the type of involvement of the performer in the medication administration.
   */
  function?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates who or what performed the medication administration.
   */
  actor: fhir.ReferenceArgs|null;
}

/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export class MedicationAdministrationPerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicationAdministrationPerformer';
  /**
   * Distinguishes the type of involvement of the performer in the medication administration.
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * Indicates who or what performed the medication administration.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for MedicationAdministrationPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicationAdministrationPerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['function']) { this.function = new fhir.CodeableConcept(source.function); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicationAdministration.performer' }
    iss.push(...this.vOS('function',exp));
    iss.push(...this.vRS('actor',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MedicationAdministrationDosage type.
 */
export interface MedicationAdministrationDosageArgs extends fhir.BackboneElementArgs {
  /**
   * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
   * The dosage instructions should reflect the dosage of the medication that was administered.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MedicationAdministration.dosage.text
   */
  _text?:fhir.FhirElementArgs;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  site?: fhir.CodeableConceptArgs|undefined;
  /**
   * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   */
  route?: fhir.CodeableConceptArgs|undefined;
  /**
   * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
   */
  dose?: fhir.QuantityArgs|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rate?: fhir.Ratio|fhir.Quantity|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateRatio?: fhir.RatioArgs|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateQuantity?: fhir.QuantityArgs|undefined;
}

/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export class MedicationAdministrationDosage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicationAdministrationDosage';
  /**
   * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
   * The dosage instructions should reflect the dosage of the medication that was administered.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public site?: fhir.CodeableConcept|undefined;
  /**
   * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   */
  public route?: fhir.CodeableConcept|undefined;
  /**
   * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
   */
  public dose?: fhir.Quantity|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  public rate?: (fhir.Ratio|fhir.Quantity)|undefined;
  /**
   * Internal flag to properly serialize choice-type element MedicationAdministration.dosage.rate[x]
   */
  protected static readonly _fts_rateIsChoice:true = true;
  /**
   * Default constructor for MedicationAdministrationDosage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicationAdministrationDosageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['_text']) {
      if (this.text) { this.text.addExtendedProperties(source._text!); }
      else { this.text = new fhir.FhirString(source._text as Partial<fhir.FhirStringArgs>); }
    }
    if (source['site']) { this.site = new fhir.CodeableConcept(source.site); }
    if (source['route']) { this.route = new fhir.CodeableConcept(source.route); }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['dose']) { this.dose = new fhir.Quantity(source.dose); }
    if (source['rate']) { this.rate = source.rate; }
    else if (source['rateRatio']) { this.rate = new fhir.Ratio(source.rateRatio); }
    else if (source['rateQuantity']) { this.rate = new fhir.Quantity(source.rateQuantity); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicationAdministration.dosage' }
    iss.push(...this.vOS('text',exp));
    iss.push(...this.vOS('site',exp));
    iss.push(...this.vOS('route',exp));
    iss.push(...this.vOS('method',exp));
    iss.push(...this.vOS('dose',exp));
    iss.push(...this.vOS('rate',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MedicationAdministration type.
 */
export interface MedicationAdministrationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicationAdministration"|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  instantiates?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: MedicationAdministration.instantiates
   */
  _instantiates?:(fhir.FhirElementArgs|null)[];
  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<MedicationAdminStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: MedicationAdministration.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A code indicating why the administration was not performed.
   */
  statusReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medication?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: fhir.ReferenceArgs|undefined;
  /**
   * The person or animal or group receiving the medication.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  supportingInformation?: fhir.ReferenceArgs[]|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effective?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectiveDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Indicates who or what performed the medication administration and how they were involved.
   */
  performer?: fhir.MedicationAdministrationPerformerArgs[]|undefined;
  /**
   * A code indicating why the medication was given.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
   */
  request?: fhir.ReferenceArgs|undefined;
  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  device?: fhir.ReferenceArgs[]|undefined;
  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  dosage?: fhir.MedicationAdministrationDosageArgs|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
   */
  eventHistory?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export class MedicationAdministration extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicationAdministration';
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicationAdministration";
  /**
   * This is a business identifier, not a resource identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  public instantiates: fhir.FhirUri[];
  /**
   * A larger event of which this particular event is a component or step.
   */
  public partOf: fhir.Reference[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<MedicationAdminStatusCodeType>|null;
  /**
   * A code indicating why the administration was not performed.
   */
  public statusReason: fhir.CodeableConcept[];
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  public medication: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element MedicationAdministration.medication[x]
   */
  protected static readonly _fts_medicationIsChoice:true = true;
  /**
   * The person or animal or group receiving the medication.
   */
  public subject: fhir.Reference|null;
  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  public context?: fhir.Reference|undefined;
  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  public supportingInformation: fhir.Reference[];
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  public effective: (fhir.FhirDateTime|fhir.Period)|null;
  /**
   * Internal flag to properly serialize choice-type element MedicationAdministration.effective[x]
   */
  protected static readonly _fts_effectiveIsChoice:true = true;
  /**
   * Indicates who or what performed the medication administration and how they were involved.
   */
  public performer: fhir.MedicationAdministrationPerformer[];
  /**
   * A code indicating why the medication was given.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
   */
  public reasonReference: fhir.Reference[];
  /**
   * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
   */
  public request?: fhir.Reference|undefined;
  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  public device: fhir.Reference[];
  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   */
  public note: fhir.Annotation[];
  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  public dosage?: fhir.MedicationAdministrationDosage|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
   */
  public eventHistory: fhir.Reference[];
  /**
   * Default constructor for MedicationAdministration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicationAdministrationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicationAdministration';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['instantiates']) { this.instantiates = source.instantiates.map((x) => new fhir.FhirUri({value: x})); }
    else { this.instantiates = []; }
    if (source['_instantiates']) {
      source._instantiates.forEach((x,i) => {
        if (this.instantiates.length >= i) { if (x) { this.instantiates[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiates.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['status']) { this.status = new fhir.FhirCode<MedicationAdminStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<MedicationAdminStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusReason']) { this.statusReason = source.statusReason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.statusReason = []; }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['medication']) { this.medication = source.medication; }
    else if (source['medicationCodeableConcept']) { this.medication = new fhir.CodeableConcept(source.medicationCodeableConcept); }
    else if (source['medicationReference']) { this.medication = new fhir.Reference(source.medicationReference); }
    else { this.medication = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['supportingInformation']) { this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x)); }
    else { this.supportingInformation = []; }
    if (source['effective']) { this.effective = source.effective; }
    else if (source['effectiveDateTime']) { this.effective = new fhir.FhirDateTime({value: source.effectiveDateTime}); }
    else if (source['effectivePeriod']) { this.effective = new fhir.Period(source.effectivePeriod); }
    else { this.effective = null; }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.MedicationAdministrationPerformer(x)); }
    else { this.performer = []; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    if (source['device']) { this.device = source.device.map((x) => new fhir.Reference(x)); }
    else { this.device = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['dosage']) { this.dosage = new fhir.MedicationAdministrationDosage(source.dosage); }
    if (source['eventHistory']) { this.eventHistory = source.eventHistory.map((x) => new fhir.Reference(x)); }
    else { this.eventHistory = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MedicationAdministration' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('instantiates',exp));
    iss.push(...this.vOA('partOf',exp));
    iss.push(...this.vRSV('status',exp,'MedicationAdminStatus',MedicationAdminStatusVsValidation,'r'));
    iss.push(...this.vOA('statusReason',exp));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vRS('medication',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOA('supportingInformation',exp));
    iss.push(...this.vRS('effective',exp));
    iss.push(...this.vOA('performer',exp));
    iss.push(...this.vOA('reasonCode',exp));
    iss.push(...this.vOA('reasonReference',exp));
    iss.push(...this.vOS('request',exp));
    iss.push(...this.vOA('device',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOS('dosage',exp));
    iss.push(...this.vOA('eventHistory',exp));
    return iss;
  }
}
