/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { DaysOfWeekCodings } from '../fhirValueSets/DaysOfWeekCodings.js';
import { C80PracticeCodesCodings } from '../fhirValueSets/C80PracticeCodesCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirTime } from './FhirTime.js';
import { FhirString } from './FhirString.js';
import { Period } from './Period.js';
import { Identifier } from './Identifier.js';
import { Reference } from './Reference.js';
import { CodeableConcept } from './CodeableConcept.js';
import { ContactPoint } from './ContactPoint.js';

// <auto-generated/>
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
var PractitionerRoleAvailableTime = /** @class */ (function (_super) {
    __extends(PractitionerRoleAvailableTime, _super);
    /**
     * Default constructor for PractitionerRoleAvailableTime - initializes any required elements to null if a value is not provided.
     */
    function PractitionerRoleAvailableTime(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['daysOfWeek']) {
            _this.daysOfWeek = source.daysOfWeek.map(function (x) { return x; });
        }
        else {
            _this.daysOfWeek = [];
        }
        if (source['allDay']) {
            _this.allDay = new FhirBoolean({ value: source.allDay });
        }
        if (source['availableStartTime']) {
            _this.availableStartTime = new FhirTime({ value: source.availableStartTime });
        }
        if (source['availableEndTime']) {
            _this.availableEndTime = new FhirTime({ value: source.availableEndTime });
        }
        return _this;
    }
    /**
     * Required-bound Value Set for daysOfWeek (PractitionerRole.availableTime.daysOfWeek)
     */
    PractitionerRoleAvailableTime.daysOfWeekRequiredCoding = function () {
        return DaysOfWeekCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    PractitionerRoleAvailableTime.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["allDay"]) {
            (_a = outcome.issue).push.apply(_a, this.allDay.doModelValidation().issue);
        }
        if (this["availableStartTime"]) {
            (_b = outcome.issue).push.apply(_b, this.availableStartTime.doModelValidation().issue);
        }
        if (this["availableEndTime"]) {
            (_c = outcome.issue).push.apply(_c, this.availableEndTime.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    PractitionerRoleAvailableTime._fts_dataType = 'PractitionerRoleAvailableTime';
    return PractitionerRoleAvailableTime;
}(BackboneElement));
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
var PractitionerRoleNotAvailable = /** @class */ (function (_super) {
    __extends(PractitionerRoleNotAvailable, _super);
    /**
     * Default constructor for PractitionerRoleNotAvailable - initializes any required elements to null if a value is not provided.
     */
    function PractitionerRoleNotAvailable(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['description']) {
            _this.description = new FhirString({ value: source.description });
        }
        else {
            _this.description = null;
        }
        if (source['during']) {
            _this.during = new Period(source.during);
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    PractitionerRoleNotAvailable.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['description']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property description:fhir.FhirString fhir: PractitionerRole.notAvailable.description:string', }));
        }
        if (this["description"]) {
            (_a = outcome.issue).push.apply(_a, this.description.doModelValidation().issue);
        }
        if (this["during"]) {
            (_b = outcome.issue).push.apply(_b, this.during.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    PractitionerRoleNotAvailable._fts_dataType = 'PractitionerRoleNotAvailable';
    return PractitionerRoleNotAvailable;
}(BackboneElement));
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
var PractitionerRole = /** @class */ (function (_super) {
    __extends(PractitionerRole, _super);
    /**
     * Default constructor for PractitionerRole - initializes any required elements to null if a value is not provided.
     */
    function PractitionerRole(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'PractitionerRole';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['active']) {
            _this.active = new FhirBoolean({ value: source.active });
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        if (source['practitioner']) {
            _this.practitioner = new Reference(source.practitioner);
        }
        if (source['organization']) {
            _this.organization = new Reference(source.organization);
        }
        if (source['code']) {
            _this.code = source.code.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.code = [];
        }
        if (source['specialty']) {
            _this.specialty = source.specialty.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.specialty = [];
        }
        if (source['location']) {
            _this.location = source.location.map(function (x) { return new Reference(x); });
        }
        else {
            _this.location = [];
        }
        if (source['healthcareService']) {
            _this.healthcareService = source.healthcareService.map(function (x) { return new Reference(x); });
        }
        else {
            _this.healthcareService = [];
        }
        if (source['telecom']) {
            _this.telecom = source.telecom.map(function (x) { return new ContactPoint(x); });
        }
        else {
            _this.telecom = [];
        }
        if (source['availableTime']) {
            _this.availableTime = source.availableTime.map(function (x) { return new PractitionerRoleAvailableTime(x); });
        }
        else {
            _this.availableTime = [];
        }
        if (source['notAvailable']) {
            _this.notAvailable = source.notAvailable.map(function (x) { return new PractitionerRoleNotAvailable(x); });
        }
        else {
            _this.notAvailable = [];
        }
        if (source['availabilityExceptions']) {
            _this.availabilityExceptions = new FhirString({ value: source.availabilityExceptions });
        }
        if (source['endpoint']) {
            _this.endpoint = source.endpoint.map(function (x) { return new Reference(x); });
        }
        else {
            _this.endpoint = [];
        }
        return _this;
    }
    /**
     * Preferred-bound Value Set for specialty (PractitionerRole.specialty)
     */
    PractitionerRole.specialtyPreferredCoding = function () {
        return C80PracticeCodesCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    PractitionerRole.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"PractitionerRole" fhir: PractitionerRole.resourceType:"PractitionerRole"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["active"]) {
            (_a = outcome.issue).push.apply(_a, this.active.doModelValidation().issue);
        }
        if (this["period"]) {
            (_b = outcome.issue).push.apply(_b, this.period.doModelValidation().issue);
        }
        if (this["practitioner"]) {
            (_c = outcome.issue).push.apply(_c, this.practitioner.doModelValidation().issue);
        }
        if (this["organization"]) {
            (_d = outcome.issue).push.apply(_d, this.organization.doModelValidation().issue);
        }
        if (this["code"]) {
            this.code.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["specialty"]) {
            this.specialty.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["location"]) {
            this.location.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["healthcareService"]) {
            this.healthcareService.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["telecom"]) {
            this.telecom.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["availableTime"]) {
            this.availableTime.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["notAvailable"]) {
            this.notAvailable.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["availabilityExceptions"]) {
            (_e = outcome.issue).push.apply(_e, this.availabilityExceptions.doModelValidation().issue);
        }
        if (this["endpoint"]) {
            this.endpoint.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    PractitionerRole._fts_dataType = 'PractitionerRole';
    return PractitionerRole;
}(DomainResource));

export { PractitionerRole, PractitionerRoleAvailableTime, PractitionerRoleNotAvailable };
//# sourceMappingURL=PractitionerRole.js.map
