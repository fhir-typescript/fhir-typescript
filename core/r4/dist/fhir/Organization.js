/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ContactentityTypeCodings } from '../fhirValueSets/ContactentityTypeCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { HumanName } from './HumanName.js';
import { ContactPoint } from './ContactPoint.js';
import { Address } from './Address.js';
import { Identifier } from './Identifier.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirString } from './FhirString.js';
import { Reference } from './Reference.js';

// <auto-generated/>
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
var OrganizationContact = /** @class */ (function (_super) {
    __extends(OrganizationContact, _super);
    /**
     * Default constructor for OrganizationContact - initializes any required elements to null if a value is not provided.
     */
    function OrganizationContact(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['purpose']) {
            _this.purpose = new CodeableConcept(source.purpose);
        }
        if (source['name']) {
            _this.name = new HumanName(source.name);
        }
        if (source['telecom']) {
            _this.telecom = source.telecom.map(function (x) { return new ContactPoint(x); });
        }
        else {
            _this.telecom = [];
        }
        if (source['address']) {
            _this.address = new Address(source.address);
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for purpose (Organization.contact.purpose)
     */
    OrganizationContact.purposeExtensibleCoding = function () {
        return ContactentityTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    OrganizationContact.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["purpose"]) {
            (_a = outcome.issue).push.apply(_a, this.purpose.doModelValidation().issue);
        }
        if (this["name"]) {
            (_b = outcome.issue).push.apply(_b, this.name.doModelValidation().issue);
        }
        if (this["telecom"]) {
            this.telecom.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["address"]) {
            (_c = outcome.issue).push.apply(_c, this.address.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    OrganizationContact._fts_dataType = 'OrganizationContact';
    return OrganizationContact;
}(BackboneElement));
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    /**
     * Default constructor for Organization - initializes any required elements to null if a value is not provided.
     */
    function Organization(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Organization';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['active']) {
            _this.active = new FhirBoolean({ value: source.active });
        }
        if (source['type']) {
            _this.type = source.type.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.type = [];
        }
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        if (source['alias']) {
            _this.alias = source.alias.map(function (x) { return new FhirString({ value: x }); });
        }
        else {
            _this.alias = [];
        }
        if (source['telecom']) {
            _this.telecom = source.telecom.map(function (x) { return new ContactPoint(x); });
        }
        else {
            _this.telecom = [];
        }
        if (source['address']) {
            _this.address = source.address.map(function (x) { return new Address(x); });
        }
        else {
            _this.address = [];
        }
        if (source['partOf']) {
            _this.partOf = new Reference(source.partOf);
        }
        if (source['contact']) {
            _this.contact = source.contact.map(function (x) { return new OrganizationContact(x); });
        }
        else {
            _this.contact = [];
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Organization.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Organization" fhir: Organization.resourceType:"Organization"', }));
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
        if (this["type"]) {
            this.type.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["name"]) {
            (_b = outcome.issue).push.apply(_b, this.name.doModelValidation().issue);
        }
        if (this["alias"]) {
            this.alias.forEach(function (x) {
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
        if (this["address"]) {
            this.address.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["partOf"]) {
            (_c = outcome.issue).push.apply(_c, this.partOf.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
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
    Organization._fts_dataType = 'Organization';
    return Organization;
}(DomainResource));

export { Organization, OrganizationContact };
//# sourceMappingURL=Organization.js.map