// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: PractitionerRole

import * as fhir from '../fhir.js';

// @ts-ignore
import { DaysOfWeekCodes,  DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
// @ts-ignore
import { DaysOfWeekVsValidation } from '../fhirValueSets/DaysOfWeekVsValidation.js';
// @ts-ignore
import { PractitionerRoleCodes,  PractitionerRoleCodeType } from '../fhirValueSets/PractitionerRoleCodes.js';
// @ts-ignore
import { PractitionerRoleVsValidation } from '../fhirValueSets/PractitionerRoleVsValidation.js';
// @ts-ignore
import { C80PracticeCodes,  C80PracticeCodeType } from '../fhirValueSets/C80PracticeCodes.js';
// @ts-ignore
import { C80PracticeVsValidation } from '../fhirValueSets/C80PracticeVsValidation.js';
/**
 * Valid arguments for the PractitionerRoleAvailableTime type.
 */
export interface PractitionerRoleAvailableTimeArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  daysOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: PractitionerRole.availableTime.daysOfWeek
   */
  _daysOfWeek?:(fhir.FhirElementArgs|null)[];
  /**
   * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  allDay?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: PractitionerRole.availableTime.allDay
   */
  _allDay?:fhir.FhirElementArgs;
  /**
   * The timezone is expected to be for where this HealthcareService is provided at.
   */
  availableStartTime?: fhir.FhirTime|string|undefined;
  /**
   * Extended properties for primitive element: PractitionerRole.availableTime.availableStartTime
   */
  _availableStartTime?:fhir.FhirElementArgs;
  /**
   * The timezone is expected to be for where this HealthcareService is provided at.
   */
  availableEndTime?: fhir.FhirTime|string|undefined;
  /**
   * Extended properties for primitive element: PractitionerRole.availableTime.availableEndTime
   */
  _availableEndTime?:fhir.FhirElementArgs;
}

/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export class PractitionerRoleAvailableTime extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PractitionerRoleAvailableTime';
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  public daysOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
  /**
   * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  public allDay?: fhir.FhirBoolean|undefined;
  /**
   * The timezone is expected to be for where this HealthcareService is provided at.
   */
  public availableStartTime?: fhir.FhirTime|undefined;
  /**
   * The timezone is expected to be for where this HealthcareService is provided at.
   */
  public availableEndTime?: fhir.FhirTime|undefined;
  /**
   * Default constructor for PractitionerRoleAvailableTime - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PractitionerRoleAvailableTimeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['daysOfWeek'] !== undefined) { this.daysOfWeek = source.daysOfWeek.map((x) => new fhir.FhirCode<DaysOfWeekCodeType>({value: x}, options)); }
    else { this.daysOfWeek = []; }
    if (source['_daysOfWeek']) {
      source._daysOfWeek.forEach((x,i) => {
        if (this.daysOfWeek.length >= i) { if (x) { this.daysOfWeek[i].addExtendedProperties(x); } }
        else { if (x) { this.daysOfWeek.push(new fhir.FhirCode<DaysOfWeekCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['allDay'] !== undefined) { this.allDay = new fhir.FhirBoolean({value: source.allDay}, options); }
    if (source['_allDay']) {
      if (this.allDay) { this.allDay.addExtendedProperties(source._allDay!); }
      else { this.allDay = new fhir.FhirBoolean(source._allDay as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['availableStartTime'] !== undefined) { this.availableStartTime = new fhir.FhirTime({value: source.availableStartTime}, options); }
    if (source['_availableStartTime']) {
      if (this.availableStartTime) { this.availableStartTime.addExtendedProperties(source._availableStartTime!); }
      else { this.availableStartTime = new fhir.FhirTime(source._availableStartTime as Partial<fhir.FhirTimeArgs>, options); }
    }
    if (source['availableEndTime'] !== undefined) { this.availableEndTime = new fhir.FhirTime({value: source.availableEndTime}, options); }
    if (source['_availableEndTime']) {
      if (this.availableEndTime) { this.availableEndTime.addExtendedProperties(source._availableEndTime!); }
      else { this.availableEndTime = new fhir.FhirTime(source._availableEndTime as Partial<fhir.FhirTimeArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'PractitionerRole.availableTime' }
    iss.push(...this.vOAV('daysOfWeek',exp,'DaysOfWeek',DaysOfWeekVsValidation,'r'));
    iss.push(...this.vOS('allDay',exp));
    iss.push(...this.vOS('availableStartTime',exp));
    iss.push(...this.vOS('availableEndTime',exp));
    return iss;
  }
}
/**
 * Valid arguments for the PractitionerRoleNotAvailable type.
 */
export interface PractitionerRoleNotAvailableArgs extends fhir.BackboneElementArgs {
  /**
   * The reason that can be presented to the user as to why this time is not available.
   */
  description: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: PractitionerRole.notAvailable.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Service is not available (seasonally or for a public holiday) from this date.
   */
  during?: fhir.PeriodArgs|undefined;
}

/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export class PractitionerRoleNotAvailable extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PractitionerRoleNotAvailable';
  /**
   * The reason that can be presented to the user as to why this time is not available.
   */
  public description: fhir.FhirString|null;
  /**
   * Service is not available (seasonally or for a public holiday) from this date.
   */
  public during?: fhir.Period|undefined;
  /**
   * Default constructor for PractitionerRoleNotAvailable - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PractitionerRoleNotAvailableArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    else { this.description = null; }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['during']) { this.during = new fhir.Period(source.during, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'PractitionerRole.notAvailable' }
    iss.push(...this.vRS('description',exp));
    iss.push(...this.vOS('during',exp));
    return iss;
  }
}
/**
 * Valid arguments for the PractitionerRole type.
 */
export interface PractitionerRoleArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "PractitionerRole"|undefined;
  /**
   * Business Identifiers that are specific to a role/location.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Default is true. 
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: PractitionerRole.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Practitioner that is able to provide the defined services for the organation.
   */
  practitioner?: fhir.ReferenceArgs|undefined;
  /**
   * The organization where the Practitioner performs the roles associated.
   */
  organization?: fhir.ReferenceArgs|undefined;
  /**
   * A person may have more than one role. At least one role is required.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Specific specialty of the practitioner.
   */
  specialty?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The location(s) at which this practitioner provides care.
   */
  location?: fhir.ReferenceArgs[]|undefined;
  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  healthcareService?: fhir.ReferenceArgs[]|undefined;
  /**
   * Contact details that are specific to the role/location/service.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * More detailed availability information may be provided in associated Schedule/Slot resources.
   */
  availableTime?: fhir.PractitionerRoleAvailableTimeArgs[]|undefined;
  /**
   * The HealthcareService is not available during this period of time due to the provided reason.
   */
  notAvailable?: fhir.PractitionerRoleNotAvailableArgs[]|undefined;
  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: PractitionerRole.availabilityExceptions
   */
  _availabilityExceptions?:fhir.FhirElementArgs;
  /**
   * Technical endpoints providing access to services operated for the practitioner with this role.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
}

/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export class PractitionerRole extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'PractitionerRole';
  /**
   * Resource Type Name
   */
  public override resourceType: "PractitionerRole";
  /**
   * Business Identifiers that are specific to a role/location.
   */
  public identifier: fhir.Identifier[];
  /**
   * Default is true. 
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
   */
  public period?: fhir.Period|undefined;
  /**
   * Practitioner that is able to provide the defined services for the organation.
   */
  public practitioner?: fhir.Reference|undefined;
  /**
   * The organization where the Practitioner performs the roles associated.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * A person may have more than one role. At least one role is required.
   */
  public code: fhir.CodeableConcept[];
  /**
   * Specific specialty of the practitioner.
   */
  public specialty: fhir.CodeableConcept[];
  /**
   * The location(s) at which this practitioner provides care.
   */
  public location: fhir.Reference[];
  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  public healthcareService: fhir.Reference[];
  /**
   * Contact details that are specific to the role/location/service.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * More detailed availability information may be provided in associated Schedule/Slot resources.
   */
  public availableTime: fhir.PractitionerRoleAvailableTime[];
  /**
   * The HealthcareService is not available during this period of time due to the provided reason.
   */
  public notAvailable: fhir.PractitionerRoleNotAvailable[];
  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  public availabilityExceptions?: fhir.FhirString|undefined;
  /**
   * Technical endpoints providing access to services operated for the practitioner with this role.
   */
  public endpoint: fhir.Reference[];
  /**
   * Default constructor for PractitionerRole - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<PractitionerRoleArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'PractitionerRole';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['active'] !== undefined) { this.active = new fhir.FhirBoolean({value: source.active}, options); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['practitioner']) { this.practitioner = new fhir.Reference(source.practitioner, options); }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization, options); }
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.code = []; }
    if (source['specialty']) { this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.specialty = []; }
    if (source['location']) { this.location = source.location.map((x) => new fhir.Reference(x, options)); }
    else { this.location = []; }
    if (source['healthcareService']) { this.healthcareService = source.healthcareService.map((x) => new fhir.Reference(x, options)); }
    else { this.healthcareService = []; }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
    if (source['availableTime']) { this.availableTime = source.availableTime.map((x) => new fhir.PractitionerRoleAvailableTime(x, options)); }
    else { this.availableTime = []; }
    if (source['notAvailable']) { this.notAvailable = source.notAvailable.map((x) => new fhir.PractitionerRoleNotAvailable(x, options)); }
    else { this.notAvailable = []; }
    if (source['availabilityExceptions'] !== undefined) { this.availabilityExceptions = new fhir.FhirString({value: source.availabilityExceptions}, options); }
    if (source['_availabilityExceptions']) {
      if (this.availabilityExceptions) { this.availabilityExceptions.addExtendedProperties(source._availabilityExceptions!); }
      else { this.availabilityExceptions = new fhir.FhirString(source._availabilityExceptions as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x, options)); }
    else { this.endpoint = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'PractitionerRole' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('practitioner',exp));
    iss.push(...this.vOS('organization',exp));
    iss.push(...this.vOA('code',exp));
    iss.push(...this.vOA('specialty',exp));
    iss.push(...this.vOA('location',exp));
    iss.push(...this.vOA('healthcareService',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOA('availableTime',exp));
    iss.push(...this.vOA('notAvailable',exp));
    iss.push(...this.vOS('availabilityExceptions',exp));
    iss.push(...this.vOA('endpoint',exp));
    return iss;
  }
}
