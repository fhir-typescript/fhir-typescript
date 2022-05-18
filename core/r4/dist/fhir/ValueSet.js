/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { LanguagesCodings } from '../fhirValueSets/LanguagesCodings.js';
import { DesignationUseCodings } from '../fhirValueSets/DesignationUseCodings.js';
import { FilterOperatorCodings } from '../fhirValueSets/FilterOperatorCodings.js';
import { PublicationStatusCodings } from '../fhirValueSets/PublicationStatusCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { FhirCode } from './FhirCode.js';
import { Coding } from './Coding.js';
import { FhirString } from './FhirString.js';
import { FhirUri } from './FhirUri.js';
import { FhirCanonical } from './FhirCanonical.js';
import { FhirDate } from './FhirDate.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirInteger } from './FhirInteger.js';
import { FhirDecimal } from './FhirDecimal.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Identifier } from './Identifier.js';
import { ContactDetail } from './ContactDetail.js';
import { FhirMarkdown } from './FhirMarkdown.js';
import { UsageContext } from './UsageContext.js';
import { CodeableConcept } from './CodeableConcept.js';

// <auto-generated/>
/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
var ValueSetComposeIncludeConceptDesignation = /** @class */ (function (_super) {
    __extends(ValueSetComposeIncludeConceptDesignation, _super);
    /**
     * Default constructor for ValueSetComposeIncludeConceptDesignation - initializes any required elements to null if a value is not provided.
     */
    function ValueSetComposeIncludeConceptDesignation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['language']) {
            _this.language = new FhirCode({ value: source.language });
        }
        if (source['use']) {
            _this.use = new Coding(source.use);
        }
        if (source['value']) {
            _this.value = new FhirString({ value: source.value });
        }
        else {
            _this.value = null;
        }
        return _this;
    }
    /**
     * Preferred-bound Value Set for language (ValueSet.compose.include.concept.designation.language)
     */
    ValueSetComposeIncludeConceptDesignation.languagePreferredCoding = function () {
        return LanguagesCodings;
    };
    /**
     * Extensible-bound Value Set for use (ValueSet.compose.include.concept.designation.use)
     */
    ValueSetComposeIncludeConceptDesignation.useExtensibleCoding = function () {
        return DesignationUseCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetComposeIncludeConceptDesignation.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["language"]) {
            (_a = outcome.issue).push.apply(_a, this.language.doModelValidation().issue);
        }
        if (this["use"]) {
            (_b = outcome.issue).push.apply(_b, this.use.doModelValidation().issue);
        }
        if (!this['value']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property value:fhir.FhirString fhir: ValueSet.compose.include.concept.designation.value:string', }));
        }
        if (this["value"]) {
            (_c = outcome.issue).push.apply(_c, this.value.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetComposeIncludeConceptDesignation._fts_dataType = 'ValueSetComposeIncludeConceptDesignation';
    return ValueSetComposeIncludeConceptDesignation;
}(BackboneElement));
/**
 * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
 */
var ValueSetComposeIncludeConcept = /** @class */ (function (_super) {
    __extends(ValueSetComposeIncludeConcept, _super);
    /**
     * Default constructor for ValueSetComposeIncludeConcept - initializes any required elements to null if a value is not provided.
     */
    function ValueSetComposeIncludeConcept(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['code']) {
            _this.code = new FhirCode({ value: source.code });
        }
        else {
            _this.code = null;
        }
        if (source['display']) {
            _this.display = new FhirString({ value: source.display });
        }
        if (source['designation']) {
            _this.designation = source.designation.map(function (x) { return new ValueSetComposeIncludeConceptDesignation(x); });
        }
        else {
            _this.designation = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetComposeIncludeConcept.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['code']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property code:fhir.FhirCode fhir: ValueSet.compose.include.concept.code:code', }));
        }
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        if (this["display"]) {
            (_b = outcome.issue).push.apply(_b, this.display.doModelValidation().issue);
        }
        if (this["designation"]) {
            this.designation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetComposeIncludeConcept._fts_dataType = 'ValueSetComposeIncludeConcept';
    return ValueSetComposeIncludeConcept;
}(BackboneElement));
/**
 * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
 */
var ValueSetComposeIncludeFilter = /** @class */ (function (_super) {
    __extends(ValueSetComposeIncludeFilter, _super);
    /**
     * Default constructor for ValueSetComposeIncludeFilter - initializes any required elements to null if a value is not provided.
     */
    function ValueSetComposeIncludeFilter(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['property']) {
            _this.property = new FhirCode({ value: source.property });
        }
        else {
            _this.property = null;
        }
        if (source['op']) {
            _this.op = source.op;
        }
        else {
            _this.op = null;
        }
        if (source['value']) {
            _this.value = new FhirString({ value: source.value });
        }
        else {
            _this.value = null;
        }
        return _this;
    }
    /**
     * Required-bound Value Set for op (ValueSet.compose.include.filter.op)
     */
    ValueSetComposeIncludeFilter.opRequiredCoding = function () {
        return FilterOperatorCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetComposeIncludeFilter.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['property']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property property:fhir.FhirCode fhir: ValueSet.compose.include.filter.property:code', }));
        }
        if (this["property"]) {
            (_a = outcome.issue).push.apply(_a, this.property.doModelValidation().issue);
        }
        if (!this['op']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property op:FilterOperatorCodeType fhir: ValueSet.compose.include.filter.op:code', }));
        }
        if (!this['value']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property value:fhir.FhirString fhir: ValueSet.compose.include.filter.value:string', }));
        }
        if (this["value"]) {
            (_b = outcome.issue).push.apply(_b, this.value.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetComposeIncludeFilter._fts_dataType = 'ValueSetComposeIncludeFilter';
    return ValueSetComposeIncludeFilter;
}(BackboneElement));
/**
 * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
 */
var ValueSetComposeInclude = /** @class */ (function (_super) {
    __extends(ValueSetComposeInclude, _super);
    /**
     * Default constructor for ValueSetComposeInclude - initializes any required elements to null if a value is not provided.
     */
    function ValueSetComposeInclude(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['system']) {
            _this.system = new FhirUri({ value: source.system });
        }
        if (source['version']) {
            _this.version = new FhirString({ value: source.version });
        }
        if (source['concept']) {
            _this.concept = source.concept.map(function (x) { return new ValueSetComposeIncludeConcept(x); });
        }
        else {
            _this.concept = [];
        }
        if (source['filter']) {
            _this.filter = source.filter.map(function (x) { return new ValueSetComposeIncludeFilter(x); });
        }
        else {
            _this.filter = [];
        }
        if (source['valueSet']) {
            _this.valueSet = source.valueSet.map(function (x) { return new FhirCanonical({ value: x }); });
        }
        else {
            _this.valueSet = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetComposeInclude.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["system"]) {
            (_a = outcome.issue).push.apply(_a, this.system.doModelValidation().issue);
        }
        if (this["version"]) {
            (_b = outcome.issue).push.apply(_b, this.version.doModelValidation().issue);
        }
        if (this["concept"]) {
            this.concept.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["filter"]) {
            this.filter.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["valueSet"]) {
            this.valueSet.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetComposeInclude._fts_dataType = 'ValueSetComposeInclude';
    return ValueSetComposeInclude;
}(BackboneElement));
/**
 * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
 */
var ValueSetCompose = /** @class */ (function (_super) {
    __extends(ValueSetCompose, _super);
    /**
     * Default constructor for ValueSetCompose - initializes any required elements to null if a value is not provided.
     */
    function ValueSetCompose(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['lockedDate']) {
            _this.lockedDate = new FhirDate({ value: source.lockedDate });
        }
        if (source['inactive']) {
            _this.inactive = new FhirBoolean({ value: source.inactive });
        }
        if (source['include']) {
            _this.include = source.include.map(function (x) { return new ValueSetComposeInclude(x); });
        }
        else {
            _this.include = [];
        }
        if (source['exclude']) {
            _this.exclude = source.exclude.map(function (x) { return new ValueSetComposeInclude(x); });
        }
        else {
            _this.exclude = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetCompose.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["lockedDate"]) {
            (_a = outcome.issue).push.apply(_a, this.lockedDate.doModelValidation().issue);
        }
        if (this["inactive"]) {
            (_b = outcome.issue).push.apply(_b, this.inactive.doModelValidation().issue);
        }
        if (!this['include']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property include:fhir.ValueSetComposeInclude[] fhir: ValueSet.compose.include:include', }));
        }
        else if (!Array.isArray(this.include)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property include:fhir.ValueSetComposeInclude[] fhir: ValueSet.compose.include:include', }));
        }
        else if (this.include.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property include:fhir.ValueSetComposeInclude[] fhir: ValueSet.compose.include:include', }));
        }
        if (this["include"]) {
            this.include.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["exclude"]) {
            this.exclude.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetCompose._fts_dataType = 'ValueSetCompose';
    return ValueSetCompose;
}(BackboneElement));
/**
 * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
 */
var ValueSetExpansionParameter = /** @class */ (function (_super) {
    __extends(ValueSetExpansionParameter, _super);
    /**
     * Default constructor for ValueSetExpansionParameter - initializes any required elements to null if a value is not provided.
     */
    function ValueSetExpansionParameter(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        else {
            _this.name = null;
        }
        if (source['value']) {
            _this.value = source.value;
        }
        else if (source['valueString']) {
            _this.value = new FhirString({ value: source.valueString });
        }
        else if (source['valueBoolean']) {
            _this.value = new FhirBoolean({ value: source.valueBoolean });
        }
        else if (source['valueInteger']) {
            _this.value = new FhirInteger({ value: source.valueInteger });
        }
        else if (source['valueDecimal']) {
            _this.value = new FhirDecimal({ value: source.valueDecimal });
        }
        else if (source['valueUri']) {
            _this.value = new FhirUri({ value: source.valueUri });
        }
        else if (source['valueCode']) {
            _this.value = new FhirCode({ value: source.valueCode });
        }
        else if (source['valueDateTime']) {
            _this.value = new FhirDateTime({ value: source.valueDateTime });
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetExpansionParameter.prototype.doModelValidation = function () {
        var _a;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['name']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property name:fhir.FhirString fhir: ValueSet.expansion.parameter.name:string', }));
        }
        if (this["name"]) {
            (_a = outcome.issue).push.apply(_a, this.name.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetExpansionParameter._fts_dataType = 'ValueSetExpansionParameter';
    /**
     * Internal flag to properly serialize choice-type element ValueSet.expansion.parameter.value[x]
     */
    ValueSetExpansionParameter._fts_valueIsChoice = true;
    return ValueSetExpansionParameter;
}(BackboneElement));
/**
 * The codes that are contained in the value set expansion.
 */
var ValueSetExpansionContains = /** @class */ (function (_super) {
    __extends(ValueSetExpansionContains$1, _super);
    /**
     * Default constructor for ValueSetExpansionContains - initializes any required elements to null if a value is not provided.
     */
    function ValueSetExpansionContains$1(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['system']) {
            _this.system = new FhirUri({ value: source.system });
        }
        if (source['abstract']) {
            _this.abstract = new FhirBoolean({ value: source.abstract });
        }
        if (source['inactive']) {
            _this.inactive = new FhirBoolean({ value: source.inactive });
        }
        if (source['version']) {
            _this.version = new FhirString({ value: source.version });
        }
        if (source['code']) {
            _this.code = new FhirCode({ value: source.code });
        }
        if (source['display']) {
            _this.display = new FhirString({ value: source.display });
        }
        if (source['designation']) {
            _this.designation = source.designation.map(function (x) { return new ValueSetComposeIncludeConceptDesignation(x); });
        }
        else {
            _this.designation = [];
        }
        if (source['contains']) {
            _this.contains = source.contains.map(function (x) { return new ValueSetExpansionContains(x); });
        }
        else {
            _this.contains = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetExpansionContains$1.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["system"]) {
            (_a = outcome.issue).push.apply(_a, this.system.doModelValidation().issue);
        }
        if (this["abstract"]) {
            (_b = outcome.issue).push.apply(_b, this.abstract.doModelValidation().issue);
        }
        if (this["inactive"]) {
            (_c = outcome.issue).push.apply(_c, this.inactive.doModelValidation().issue);
        }
        if (this["version"]) {
            (_d = outcome.issue).push.apply(_d, this.version.doModelValidation().issue);
        }
        if (this["code"]) {
            (_e = outcome.issue).push.apply(_e, this.code.doModelValidation().issue);
        }
        if (this["display"]) {
            (_f = outcome.issue).push.apply(_f, this.display.doModelValidation().issue);
        }
        if (this["designation"]) {
            this.designation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["contains"]) {
            this.contains.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetExpansionContains$1._fts_dataType = 'ValueSetExpansionContains';
    return ValueSetExpansionContains$1;
}(BackboneElement));
/**
 * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
 * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
 */
var ValueSetExpansion = /** @class */ (function (_super) {
    __extends(ValueSetExpansion, _super);
    /**
     * Default constructor for ValueSetExpansion - initializes any required elements to null if a value is not provided.
     */
    function ValueSetExpansion(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['identifier']) {
            _this.identifier = new FhirUri({ value: source.identifier });
        }
        if (source['timestamp']) {
            _this.timestamp = new FhirDateTime({ value: source.timestamp });
        }
        else {
            _this.timestamp = null;
        }
        if (source['total']) {
            _this.total = new FhirInteger({ value: source.total });
        }
        if (source['offset']) {
            _this.offset = new FhirInteger({ value: source.offset });
        }
        if (source['parameter']) {
            _this.parameter = source.parameter.map(function (x) { return new ValueSetExpansionParameter(x); });
        }
        else {
            _this.parameter = [];
        }
        if (source['contains']) {
            _this.contains = source.contains.map(function (x) { return new ValueSetExpansionContains(x); });
        }
        else {
            _this.contains = [];
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSetExpansion.prototype.doModelValidation = function () {
        var _a, _b, _c, _d;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["identifier"]) {
            (_a = outcome.issue).push.apply(_a, this.identifier.doModelValidation().issue);
        }
        if (!this['timestamp']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property timestamp:fhir.FhirDateTime fhir: ValueSet.expansion.timestamp:dateTime', }));
        }
        if (this["timestamp"]) {
            (_b = outcome.issue).push.apply(_b, this.timestamp.doModelValidation().issue);
        }
        if (this["total"]) {
            (_c = outcome.issue).push.apply(_c, this.total.doModelValidation().issue);
        }
        if (this["offset"]) {
            (_d = outcome.issue).push.apply(_d, this.offset.doModelValidation().issue);
        }
        if (this["parameter"]) {
            this.parameter.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["contains"]) {
            this.contains.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSetExpansion._fts_dataType = 'ValueSetExpansion';
    return ValueSetExpansion;
}(BackboneElement));
/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
 */
var ValueSet = /** @class */ (function (_super) {
    __extends(ValueSet, _super);
    /**
     * Default constructor for ValueSet - initializes any required elements to null if a value is not provided.
     */
    function ValueSet(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'ValueSet';
        if (source['url']) {
            _this.url = new FhirUri({ value: source.url });
        }
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['version']) {
            _this.version = new FhirString({ value: source.version });
        }
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        if (source['title']) {
            _this.title = new FhirString({ value: source.title });
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['experimental']) {
            _this.experimental = new FhirBoolean({ value: source.experimental });
        }
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
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
        if (source['immutable']) {
            _this.immutable = new FhirBoolean({ value: source.immutable });
        }
        if (source['purpose']) {
            _this.purpose = new FhirMarkdown({ value: source.purpose });
        }
        if (source['copyright']) {
            _this.copyright = new FhirMarkdown({ value: source.copyright });
        }
        if (source['compose']) {
            _this.compose = new ValueSetCompose(source.compose);
        }
        if (source['expansion']) {
            _this.expansion = new ValueSetExpansion(source.expansion);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (ValueSet.status)
     */
    ValueSet.statusRequiredCoding = function () {
        return PublicationStatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ValueSet.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"ValueSet" fhir: ValueSet.resourceType:"ValueSet"', }));
        }
        if (this["url"]) {
            (_a = outcome.issue).push.apply(_a, this.url.doModelValidation().issue);
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["version"]) {
            (_b = outcome.issue).push.apply(_b, this.version.doModelValidation().issue);
        }
        if (this["name"]) {
            (_c = outcome.issue).push.apply(_c, this.name.doModelValidation().issue);
        }
        if (this["title"]) {
            (_d = outcome.issue).push.apply(_d, this.title.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:PublicationStatusCodeType fhir: ValueSet.status:code', }));
        }
        if (this["experimental"]) {
            (_e = outcome.issue).push.apply(_e, this.experimental.doModelValidation().issue);
        }
        if (this["date"]) {
            (_f = outcome.issue).push.apply(_f, this.date.doModelValidation().issue);
        }
        if (this["publisher"]) {
            (_g = outcome.issue).push.apply(_g, this.publisher.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["description"]) {
            (_h = outcome.issue).push.apply(_h, this.description.doModelValidation().issue);
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
        if (this["immutable"]) {
            (_j = outcome.issue).push.apply(_j, this.immutable.doModelValidation().issue);
        }
        if (this["purpose"]) {
            (_k = outcome.issue).push.apply(_k, this.purpose.doModelValidation().issue);
        }
        if (this["copyright"]) {
            (_l = outcome.issue).push.apply(_l, this.copyright.doModelValidation().issue);
        }
        if (this["compose"]) {
            (_m = outcome.issue).push.apply(_m, this.compose.doModelValidation().issue);
        }
        if (this["expansion"]) {
            (_o = outcome.issue).push.apply(_o, this.expansion.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ValueSet._fts_dataType = 'ValueSet';
    return ValueSet;
}(DomainResource));

export { ValueSet, ValueSetCompose, ValueSetComposeInclude, ValueSetComposeIncludeConcept, ValueSetComposeIncludeConceptDesignation, ValueSetComposeIncludeFilter, ValueSetExpansion, ValueSetExpansionContains, ValueSetExpansionParameter };
//# sourceMappingURL=ValueSet.js.map
