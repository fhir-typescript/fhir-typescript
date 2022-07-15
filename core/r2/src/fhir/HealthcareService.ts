// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: HealthcareService

import * as fhir from '../fhir.js';

// @ts-ignore
import { DaysOfWeekCodes,  DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
// @ts-ignore
import { DaysOfWeekVsValidation } from '../fhirValueSets/DaysOfWeekVsValidation.js';
/**
 * Valid arguments for the HealthcareServiceServiceType type.
 */
export interface HealthcareServiceServiceTypeArgs extends fhir.BackboneElementArgs {
  /**
   * The specific type of service being delivered or performed.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Collection of specialties handled by the service site. This is more of a medical term.
   */
  specialty?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * A specific type of service that may be delivered or performed.
 */
export class HealthcareServiceServiceType extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'HealthcareServiceServiceType';
  /**
   * The specific type of service being delivered or performed.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Collection of specialties handled by the service site. This is more of a medical term.
   */
  public specialty: fhir.CodeableConcept[];
  /**
   * Default constructor for HealthcareServiceServiceType - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<HealthcareServiceServiceTypeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['specialty']) { this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x)); }
    else { this.specialty = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'HealthcareService.serviceType' }
    this.vRS('type',exp)
    this.vOA('specialty',exp)
    return issues;
  }
}
/**
 * Valid arguments for the HealthcareServiceAvailableTime type.
 */
export interface HealthcareServiceAvailableTimeArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  daysOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.availableTime.daysOfWeek
   */
  _daysOfWeek?:(fhir.FhirElementArgs|null)[];
  /**
   * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  allDay?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.availableTime.allDay
   */
  _allDay?:fhir.FhirElementArgs;
  /**
   * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  availableStartTime?: fhir.FhirTime|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.availableTime.availableStartTime
   */
  _availableStartTime?:fhir.FhirElementArgs;
  /**
   * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  availableEndTime?: fhir.FhirTime|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.availableTime.availableEndTime
   */
  _availableEndTime?:fhir.FhirElementArgs;
}

/**
 * A collection of times that the Service Site is available.
 */
export class HealthcareServiceAvailableTime extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'HealthcareServiceAvailableTime';
  /**
   * Indicates which days of the week are available between the start and end Times.
   */
  public daysOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
  /**
   * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
   */
  public allDay?: fhir.FhirBoolean|undefined;
  /**
   * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  public availableStartTime?: fhir.FhirTime|undefined;
  /**
   * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
   */
  public availableEndTime?: fhir.FhirTime|undefined;
  /**
   * Default constructor for HealthcareServiceAvailableTime - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<HealthcareServiceAvailableTimeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['daysOfWeek']) { this.daysOfWeek = source.daysOfWeek.map((x) => new fhir.FhirCode<DaysOfWeekCodeType>({value: x})); }
    else { this.daysOfWeek = []; }
    if (source['_daysOfWeek']) {
      source._daysOfWeek.forEach((x,i) => {
        if (this.daysOfWeek.length >= i) { if (x) { this.daysOfWeek[i].addExtendedProperties(x); } }
        else { if (x) { this.daysOfWeek.push(new fhir.FhirCode<DaysOfWeekCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['allDay']) { this.allDay = new fhir.FhirBoolean({value: source.allDay}); }
    if (source['_allDay']) {
      if (this.allDay) { this.allDay.addExtendedProperties(source._allDay!); }
      else { this.allDay = new fhir.FhirBoolean(source._allDay as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['availableStartTime']) { this.availableStartTime = new fhir.FhirTime({value: source.availableStartTime}); }
    if (source['_availableStartTime']) {
      if (this.availableStartTime) { this.availableStartTime.addExtendedProperties(source._availableStartTime!); }
      else { this.availableStartTime = new fhir.FhirTime(source._availableStartTime as Partial<fhir.FhirTimeArgs>); }
    }
    if (source['availableEndTime']) { this.availableEndTime = new fhir.FhirTime({value: source.availableEndTime}); }
    if (source['_availableEndTime']) {
      if (this.availableEndTime) { this.availableEndTime.addExtendedProperties(source._availableEndTime!); }
      else { this.availableEndTime = new fhir.FhirTime(source._availableEndTime as Partial<fhir.FhirTimeArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'HealthcareService.availableTime' }
    this.vOAV('daysOfWeek',exp,'DaysOfWeek',DaysOfWeekVsValidation,'r')
    this.vOS('allDay',exp)
    this.vOS('availableStartTime',exp)
    this.vOS('availableEndTime',exp)
    return issues;
  }
}
/**
 * Valid arguments for the HealthcareServiceNotAvailable type.
 */
export interface HealthcareServiceNotAvailableArgs extends fhir.BackboneElementArgs {
  /**
   * The reason that can be presented to the user as to why this time is not available.
   */
  description: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.notAvailable.description
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
export class HealthcareServiceNotAvailable extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'HealthcareServiceNotAvailable';
  /**
   * The reason that can be presented to the user as to why this time is not available.
   */
  public description: fhir.FhirString|null;
  /**
   * Service is not available (seasonally or for a public holiday) from this date.
   */
  public during?: fhir.Period|undefined;
  /**
   * Default constructor for HealthcareServiceNotAvailable - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<HealthcareServiceNotAvailableArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    else { this.description = null; }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['during']) { this.during = new fhir.Period(source.during); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'HealthcareService.notAvailable' }
    this.vRS('description',exp)
    this.vOS('during',exp)
    return issues;
  }
}
/**
 * Valid arguments for the HealthcareService type.
 */
export interface HealthcareServiceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "HealthcareService"|undefined;
  /**
   * External identifiers for this item.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The organization that provides this healthcare service.
   */
  providedBy?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the broad category of service being performed or delivered.
   */
  serviceCategory?: fhir.CodeableConceptArgs|undefined;
  /**
   * A specific type of service that may be delivered or performed.
   */
  serviceType?: fhir.HealthcareServiceServiceTypeArgs[]|undefined;
  /**
   * The location where this healthcare service may be provided.
   */
  location: fhir.ReferenceArgs|null;
  /**
   * Further description of the service as it would be presented to a consumer while searching.
   */
  serviceName?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.serviceName
   */
  _serviceName?:fhir.FhirElementArgs;
  /**
   * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.comment
   */
  _comment?:fhir.FhirElementArgs;
  /**
   * Extra details about the service that can't be placed in the other fields.
   */
  extraDetails?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.extraDetails
   */
  _extraDetails?:fhir.FhirElementArgs;
  /**
   * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   */
  photo?: fhir.AttachmentArgs|undefined;
  /**
   * List of contacts related to this specific healthcare service.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * The location(s) that this service is available to (not where the service is provided).
   */
  coverageArea?: fhir.ReferenceArgs[]|undefined;
  /**
   * The code(s) that detail the conditions under which the healthcare service is available/offered.
   */
  serviceProvisionCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Does this service have specific eligibility requirements that need to be met in order to use the service?
   */
  eligibility?: fhir.CodeableConceptArgs|undefined;
  /**
   * Describes the eligibility conditions for the service.
   */
  eligibilityNote?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.eligibilityNote
   */
  _eligibilityNote?:fhir.FhirElementArgs;
  /**
   * Program Names that can be used to categorize the service.
   */
  programName?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.programName
   */
  _programName?:(fhir.FhirElementArgs|null)[];
  /**
   * Collection of characteristics (attributes).
   */
  characteristic?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   */
  referralMethod?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.
   */
  publicKey?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.publicKey
   */
  _publicKey?:fhir.FhirElementArgs;
  /**
   * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
   */
  appointmentRequired?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.appointmentRequired
   */
  _appointmentRequired?:fhir.FhirElementArgs;
  /**
   * A collection of times that the Service Site is available.
   */
  availableTime?: fhir.HealthcareServiceAvailableTimeArgs[]|undefined;
  /**
   * The HealthcareService is not available during this period of time due to the provided reason.
   */
  notAvailable?: fhir.HealthcareServiceNotAvailableArgs[]|undefined;
  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: HealthcareService.availabilityExceptions
   */
  _availabilityExceptions?:fhir.FhirElementArgs;
}

/**
 * The details of a healthcare service available at a location.
 */
export class HealthcareService extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'HealthcareService';
  /**
   * Resource Type Name
   */
  public override resourceType: "HealthcareService";
  /**
   * External identifiers for this item.
   */
  public identifier: fhir.Identifier[];
  /**
   * The organization that provides this healthcare service.
   */
  public providedBy?: fhir.Reference|undefined;
  /**
   * Identifies the broad category of service being performed or delivered.
   */
  public serviceCategory?: fhir.CodeableConcept|undefined;
  /**
   * A specific type of service that may be delivered or performed.
   */
  public serviceType: fhir.HealthcareServiceServiceType[];
  /**
   * The location where this healthcare service may be provided.
   */
  public location: fhir.Reference|null;
  /**
   * Further description of the service as it would be presented to a consumer while searching.
   */
  public serviceName?: fhir.FhirString|undefined;
  /**
   * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Extra details about the service that can't be placed in the other fields.
   */
  public extraDetails?: fhir.FhirString|undefined;
  /**
   * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   */
  public photo?: fhir.Attachment|undefined;
  /**
   * List of contacts related to this specific healthcare service.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * The location(s) that this service is available to (not where the service is provided).
   */
  public coverageArea: fhir.Reference[];
  /**
   * The code(s) that detail the conditions under which the healthcare service is available/offered.
   */
  public serviceProvisionCode: fhir.CodeableConcept[];
  /**
   * Does this service have specific eligibility requirements that need to be met in order to use the service?
   */
  public eligibility?: fhir.CodeableConcept|undefined;
  /**
   * Describes the eligibility conditions for the service.
   */
  public eligibilityNote?: fhir.FhirString|undefined;
  /**
   * Program Names that can be used to categorize the service.
   */
  public programName: fhir.FhirString[];
  /**
   * Collection of characteristics (attributes).
   */
  public characteristic: fhir.CodeableConcept[];
  /**
   * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   */
  public referralMethod: fhir.CodeableConcept[];
  /**
   * The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.
   */
  public publicKey?: fhir.FhirString|undefined;
  /**
   * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
   */
  public appointmentRequired?: fhir.FhirBoolean|undefined;
  /**
   * A collection of times that the Service Site is available.
   */
  public availableTime: fhir.HealthcareServiceAvailableTime[];
  /**
   * The HealthcareService is not available during this period of time due to the provided reason.
   */
  public notAvailable: fhir.HealthcareServiceNotAvailable[];
  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  public availabilityExceptions?: fhir.FhirString|undefined;
  /**
   * Default constructor for HealthcareService - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<HealthcareServiceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'HealthcareService';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['providedBy']) { this.providedBy = new fhir.Reference(source.providedBy); }
    if (source['serviceCategory']) { this.serviceCategory = new fhir.CodeableConcept(source.serviceCategory); }
    if (source['serviceType']) { this.serviceType = source.serviceType.map((x) => new fhir.HealthcareServiceServiceType(x)); }
    else { this.serviceType = []; }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    else { this.location = null; }
    if (source['serviceName']) { this.serviceName = new fhir.FhirString({value: source.serviceName}); }
    if (source['_serviceName']) {
      if (this.serviceName) { this.serviceName.addExtendedProperties(source._serviceName!); }
      else { this.serviceName = new fhir.FhirString(source._serviceName as Partial<fhir.FhirStringArgs>); }
    }
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>); }
    }
    if (source['extraDetails']) { this.extraDetails = new fhir.FhirString({value: source.extraDetails}); }
    if (source['_extraDetails']) {
      if (this.extraDetails) { this.extraDetails.addExtendedProperties(source._extraDetails!); }
      else { this.extraDetails = new fhir.FhirString(source._extraDetails as Partial<fhir.FhirStringArgs>); }
    }
    if (source['photo']) { this.photo = new fhir.Attachment(source.photo); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
    if (source['coverageArea']) { this.coverageArea = source.coverageArea.map((x) => new fhir.Reference(x)); }
    else { this.coverageArea = []; }
    if (source['serviceProvisionCode']) { this.serviceProvisionCode = source.serviceProvisionCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.serviceProvisionCode = []; }
    if (source['eligibility']) { this.eligibility = new fhir.CodeableConcept(source.eligibility); }
    if (source['eligibilityNote']) { this.eligibilityNote = new fhir.FhirString({value: source.eligibilityNote}); }
    if (source['_eligibilityNote']) {
      if (this.eligibilityNote) { this.eligibilityNote.addExtendedProperties(source._eligibilityNote!); }
      else { this.eligibilityNote = new fhir.FhirString(source._eligibilityNote as Partial<fhir.FhirStringArgs>); }
    }
    if (source['programName']) { this.programName = source.programName.map((x) => new fhir.FhirString({value: x})); }
    else { this.programName = []; }
    if (source['_programName']) {
      source._programName.forEach((x,i) => {
        if (this.programName.length >= i) { if (x) { this.programName[i].addExtendedProperties(x); } }
        else { if (x) { this.programName.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['characteristic']) { this.characteristic = source.characteristic.map((x) => new fhir.CodeableConcept(x)); }
    else { this.characteristic = []; }
    if (source['referralMethod']) { this.referralMethod = source.referralMethod.map((x) => new fhir.CodeableConcept(x)); }
    else { this.referralMethod = []; }
    if (source['publicKey']) { this.publicKey = new fhir.FhirString({value: source.publicKey}); }
    if (source['_publicKey']) {
      if (this.publicKey) { this.publicKey.addExtendedProperties(source._publicKey!); }
      else { this.publicKey = new fhir.FhirString(source._publicKey as Partial<fhir.FhirStringArgs>); }
    }
    if (source['appointmentRequired']) { this.appointmentRequired = new fhir.FhirBoolean({value: source.appointmentRequired}); }
    if (source['_appointmentRequired']) {
      if (this.appointmentRequired) { this.appointmentRequired.addExtendedProperties(source._appointmentRequired!); }
      else { this.appointmentRequired = new fhir.FhirBoolean(source._appointmentRequired as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['availableTime']) { this.availableTime = source.availableTime.map((x) => new fhir.HealthcareServiceAvailableTime(x)); }
    else { this.availableTime = []; }
    if (source['notAvailable']) { this.notAvailable = source.notAvailable.map((x) => new fhir.HealthcareServiceNotAvailable(x)); }
    else { this.notAvailable = []; }
    if (source['availabilityExceptions']) { this.availabilityExceptions = new fhir.FhirString({value: source.availabilityExceptions}); }
    if (source['_availabilityExceptions']) {
      if (this.availabilityExceptions) { this.availabilityExceptions.addExtendedProperties(source._availabilityExceptions!); }
      else { this.availabilityExceptions = new fhir.FhirString(source._availabilityExceptions as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'HealthcareService' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOS('providedBy',exp)
    this.vOS('serviceCategory',exp)
    this.vOA('serviceType',exp)
    this.vRS('location',exp)
    this.vOS('serviceName',exp)
    this.vOS('comment',exp)
    this.vOS('extraDetails',exp)
    this.vOS('photo',exp)
    this.vOA('telecom',exp)
    this.vOA('coverageArea',exp)
    this.vOA('serviceProvisionCode',exp)
    this.vOS('eligibility',exp)
    this.vOS('eligibilityNote',exp)
    this.vOA('programName',exp)
    this.vOA('characteristic',exp)
    this.vOA('referralMethod',exp)
    this.vOS('publicKey',exp)
    this.vOS('appointmentRequired',exp)
    this.vOA('availableTime',exp)
    this.vOA('notAvailable',exp)
    this.vOS('availabilityExceptions',exp)
    return issues;
  }
}
