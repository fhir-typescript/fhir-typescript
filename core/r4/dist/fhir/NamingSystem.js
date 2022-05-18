/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { NamingsystemIdentifierTypeCodings } from '../fhirValueSets/NamingsystemIdentifierTypeCodings.js';
import { PublicationStatusCodings } from '../fhirValueSets/PublicationStatusCodings.js';
import { NamingsystemTypeCodings } from '../fhirValueSets/NamingsystemTypeCodings.js';
import { IdentifierTypeCodings } from '../fhirValueSets/IdentifierTypeCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { FhirString } from './FhirString.js';
import { FhirBoolean } from './FhirBoolean.js';
import { Period } from './Period.js';
import { FhirDateTime } from './FhirDateTime.js';
import { ContactDetail } from './ContactDetail.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirMarkdown } from './FhirMarkdown.js';
import { UsageContext } from './UsageContext.js';

// <auto-generated/>
/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
var NamingSystemUniqueId = /** @class */ (function (_super) {
    __extends(NamingSystemUniqueId, _super);
    /**
     * Default constructor for NamingSystemUniqueId - initializes any required elements to null if a value is not provided.
     */
    function NamingSystemUniqueId(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = source.type;
        }
        else {
            _this.type = null;
        }
        if (source['value']) {
            _this.value = new FhirString({ value: source.value });
        }
        else {
            _this.value = null;
        }
        if (source['preferred']) {
            _this.preferred = new FhirBoolean({ value: source.preferred });
        }
        if (source['comment']) {
            _this.comment = new FhirString({ value: source.comment });
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for type (NamingSystem.uniqueId.type)
     */
    NamingSystemUniqueId.typeRequiredCoding = function () {
        return NamingsystemIdentifierTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NamingSystemUniqueId.prototype.doModelValidation = function () {
        var _a, _b, _c, _d;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['type']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property type:NamingsystemIdentifierTypeCodeType fhir: NamingSystem.uniqueId.type:code', }));
        }
        if (!this['value']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property value:fhir.FhirString fhir: NamingSystem.uniqueId.value:string', }));
        }
        if (this["value"]) {
            (_a = outcome.issue).push.apply(_a, this.value.doModelValidation().issue);
        }
        if (this["preferred"]) {
            (_b = outcome.issue).push.apply(_b, this.preferred.doModelValidation().issue);
        }
        if (this["comment"]) {
            (_c = outcome.issue).push.apply(_c, this.comment.doModelValidation().issue);
        }
        if (this["period"]) {
            (_d = outcome.issue).push.apply(_d, this.period.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NamingSystemUniqueId._fts_dataType = 'NamingSystemUniqueId';
    return NamingSystemUniqueId;
}(BackboneElement));
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
var NamingSystem = /** @class */ (function (_super) {
    __extends(NamingSystem, _super);
    /**
     * Default constructor for NamingSystem - initializes any required elements to null if a value is not provided.
     */
    function NamingSystem(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'NamingSystem';
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        else {
            _this.name = null;
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['kind']) {
            _this.kind = source.kind;
        }
        else {
            _this.kind = null;
        }
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
        }
        else {
            _this.date = null;
        }
        if (source['publisher']) {
            _this.publisher = new FhirString({ value: source.publisher });
        }
        if (source['contact']) {
            _this.contact = source.contact.map(function (x) { return new ContactDetail(x); });
        }
        else {
            _this.contact = [];
        }
        if (source['responsible']) {
            _this.responsible = new FhirString({ value: source.responsible });
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['description']) {
            _this.description = new FhirMarkdown({ value: source.description });
        }
        if (source['useContext']) {
            _this.useContext = source.useContext.map(function (x) { return new UsageContext(x); });
        }
        else {
            _this.useContext = [];
        }
        if (source['jurisdiction']) {
            _this.jurisdiction = source.jurisdiction.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.jurisdiction = [];
        }
        if (source['usage']) {
            _this.usage = new FhirString({ value: source.usage });
        }
        if (source['uniqueId']) {
            _this.uniqueId = source.uniqueId.map(function (x) { return new NamingSystemUniqueId(x); });
        }
        else {
            _this.uniqueId = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (NamingSystem.status)
     */
    NamingSystem.statusRequiredCoding = function () {
        return PublicationStatusCodings;
    };
    /**
     * Required-bound Value Set for kind (NamingSystem.kind)
     */
    NamingSystem.kindRequiredCoding = function () {
        return NamingsystemTypeCodings;
    };
    /**
     * Extensible-bound Value Set for type (NamingSystem.type)
     */
    NamingSystem.typeExtensibleCoding = function () {
        return IdentifierTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    NamingSystem.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"NamingSystem" fhir: NamingSystem.resourceType:"NamingSystem"', }));
        }
        if (!this['name']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property name:fhir.FhirString fhir: NamingSystem.name:string', }));
        }
        if (this["name"]) {
            (_a = outcome.issue).push.apply(_a, this.name.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:PublicationStatusCodeType fhir: NamingSystem.status:code', }));
        }
        if (!this['kind']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property kind:NamingsystemTypeCodeType fhir: NamingSystem.kind:code', }));
        }
        if (!this['date']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property date:fhir.FhirDateTime fhir: NamingSystem.date:dateTime', }));
        }
        if (this["date"]) {
            (_b = outcome.issue).push.apply(_b, this.date.doModelValidation().issue);
        }
        if (this["publisher"]) {
            (_c = outcome.issue).push.apply(_c, this.publisher.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["responsible"]) {
            (_d = outcome.issue).push.apply(_d, this.responsible.doModelValidation().issue);
        }
        if (this["type"]) {
            (_e = outcome.issue).push.apply(_e, this.type.doModelValidation().issue);
        }
        if (this["description"]) {
            (_f = outcome.issue).push.apply(_f, this.description.doModelValidation().issue);
        }
        if (this["useContext"]) {
            this.useContext.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["jurisdiction"]) {
            this.jurisdiction.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["usage"]) {
            (_g = outcome.issue).push.apply(_g, this.usage.doModelValidation().issue);
        }
        if (!this['uniqueId']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property uniqueId:fhir.NamingSystemUniqueId[] fhir: NamingSystem.uniqueId:uniqueId', }));
        }
        else if (!Array.isArray(this.uniqueId)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property uniqueId:fhir.NamingSystemUniqueId[] fhir: NamingSystem.uniqueId:uniqueId', }));
        }
        else if (this.uniqueId.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property uniqueId:fhir.NamingSystemUniqueId[] fhir: NamingSystem.uniqueId:uniqueId', }));
        }
        if (this["uniqueId"]) {
            this.uniqueId.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    NamingSystem._fts_dataType = 'NamingSystem';
    return NamingSystem;
}(DomainResource));

export { NamingSystem, NamingSystemUniqueId };
//# sourceMappingURL=NamingSystem.js.map