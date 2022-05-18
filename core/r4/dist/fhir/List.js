/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ListStatusCodings } from '../fhirValueSets/ListStatusCodings.js';
import { ListModeCodings } from '../fhirValueSets/ListModeCodings.js';
import { ListOrderCodings } from '../fhirValueSets/ListOrderCodings.js';
import { ListEmptyReasonCodings } from '../fhirValueSets/ListEmptyReasonCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Reference } from './Reference.js';
import { Identifier } from './Identifier.js';
import { FhirString } from './FhirString.js';
import { Annotation } from './Annotation.js';

// <auto-generated/>
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
var ListEntry = /** @class */ (function (_super) {
    __extends(ListEntry, _super);
    /**
     * Default constructor for ListEntry - initializes any required elements to null if a value is not provided.
     */
    function ListEntry(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['flag']) {
            _this.flag = new CodeableConcept(source.flag);
        }
        if (source['deleted']) {
            _this.deleted = new FhirBoolean({ value: source.deleted });
        }
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
        }
        if (source['item']) {
            _this.item = new Reference(source.item);
        }
        else {
            _this.item = null;
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ListEntry.prototype.doModelValidation = function () {
        var _a, _b, _c, _d;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["flag"]) {
            (_a = outcome.issue).push.apply(_a, this.flag.doModelValidation().issue);
        }
        if (this["deleted"]) {
            (_b = outcome.issue).push.apply(_b, this.deleted.doModelValidation().issue);
        }
        if (this["date"]) {
            (_c = outcome.issue).push.apply(_c, this.date.doModelValidation().issue);
        }
        if (!this['item']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property item:fhir.Reference fhir: List.entry.item:Reference', }));
        }
        if (this["item"]) {
            (_d = outcome.issue).push.apply(_d, this.item.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ListEntry._fts_dataType = 'ListEntry';
    return ListEntry;
}(BackboneElement));
/**
 * A list is a curated collection of resources.
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    /**
     * Default constructor for List - initializes any required elements to null if a value is not provided.
     */
    function List(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'List';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['mode']) {
            _this.mode = source.mode;
        }
        else {
            _this.mode = null;
        }
        if (source['title']) {
            _this.title = new FhirString({ value: source.title });
        }
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        if (source['subject']) {
            _this.subject = new Reference(source.subject);
        }
        if (source['encounter']) {
            _this.encounter = new Reference(source.encounter);
        }
        if (source['date']) {
            _this.date = new FhirDateTime({ value: source.date });
        }
        if (source['source']) {
            _this.source = new Reference(source.source);
        }
        if (source['orderedBy']) {
            _this.orderedBy = new CodeableConcept(source.orderedBy);
        }
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
        }
        if (source['entry']) {
            _this.entry = source.entry.map(function (x) { return new ListEntry(x); });
        }
        else {
            _this.entry = [];
        }
        if (source['emptyReason']) {
            _this.emptyReason = new CodeableConcept(source.emptyReason);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (List.status)
     */
    List.statusRequiredCoding = function () {
        return ListStatusCodings;
    };
    /**
     * Required-bound Value Set for mode (List.mode)
     */
    List.modeRequiredCoding = function () {
        return ListModeCodings;
    };
    /**
     * Preferred-bound Value Set for orderedBy (List.orderedBy)
     */
    List.orderedByPreferredCoding = function () {
        return ListOrderCodings;
    };
    /**
     * Preferred-bound Value Set for emptyReason (List.emptyReason)
     */
    List.emptyReasonPreferredCoding = function () {
        return ListEmptyReasonCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    List.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"List" fhir: List.resourceType:"List"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:ListStatusCodeType fhir: List.status:code', }));
        }
        if (!this['mode']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property mode:ListModeCodeType fhir: List.mode:code', }));
        }
        if (this["title"]) {
            (_a = outcome.issue).push.apply(_a, this.title.doModelValidation().issue);
        }
        if (this["code"]) {
            (_b = outcome.issue).push.apply(_b, this.code.doModelValidation().issue);
        }
        if (this["subject"]) {
            (_c = outcome.issue).push.apply(_c, this.subject.doModelValidation().issue);
        }
        if (this["encounter"]) {
            (_d = outcome.issue).push.apply(_d, this.encounter.doModelValidation().issue);
        }
        if (this["date"]) {
            (_e = outcome.issue).push.apply(_e, this.date.doModelValidation().issue);
        }
        if (this["source"]) {
            (_f = outcome.issue).push.apply(_f, this.source.doModelValidation().issue);
        }
        if (this["orderedBy"]) {
            (_g = outcome.issue).push.apply(_g, this.orderedBy.doModelValidation().issue);
        }
        if (this["note"]) {
            this.note.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["entry"]) {
            this.entry.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["emptyReason"]) {
            (_h = outcome.issue).push.apply(_h, this.emptyReason.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    List._fts_dataType = 'List';
    return List;
}(DomainResource));

export { List, ListEntry };
//# sourceMappingURL=List.js.map
