/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ReferencerangeMeaningCodings } from '../fhirValueSets/ReferencerangeMeaningCodings.js';
import { DataAbsentReasonCodings } from '../fhirValueSets/DataAbsentReasonCodings.js';
import { ObservationInterpretationCodings } from '../fhirValueSets/ObservationInterpretationCodings.js';
import { ObservationStatusCodings } from '../fhirValueSets/ObservationStatusCodings.js';
import { ObservationCategoryCodings } from '../fhirValueSets/ObservationCategoryCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { BackboneElement } from './BackboneElement.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { Quantity } from './Quantity.js';
import { CodeableConcept } from './CodeableConcept.js';
import { Range } from './Range.js';
import { FhirString } from './FhirString.js';
import { FhirBoolean } from './FhirBoolean.js';
import { FhirInteger } from './FhirInteger.js';
import { Ratio } from './Ratio.js';
import { SampledData } from './SampledData.js';
import { FhirTime } from './FhirTime.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Period } from './Period.js';
import { Identifier } from './Identifier.js';
import { Reference } from './Reference.js';
import { Timing } from './Timing.js';
import { FhirInstant } from './FhirInstant.js';
import { Annotation } from './Annotation.js';

// <auto-generated/>
/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
var ObservationReferenceRange = /** @class */ (function (_super) {
    __extends(ObservationReferenceRange, _super);
    /**
     * Default constructor for ObservationReferenceRange - initializes any required elements to null if a value is not provided.
     */
    function ObservationReferenceRange(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['low']) {
            _this.low = new Quantity(source.low);
        }
        if (source['high']) {
            _this.high = new Quantity(source.high);
        }
        if (source['type']) {
            _this.type = new CodeableConcept(source.type);
        }
        if (source['appliesTo']) {
            _this.appliesTo = source.appliesTo.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.appliesTo = [];
        }
        if (source['age']) {
            _this.age = new Range(source.age);
        }
        if (source['text']) {
            _this.text = new FhirString({ value: source.text });
        }
        return _this;
    }
    /**
     * Preferred-bound Value Set for type (Observation.referenceRange.type)
     */
    ObservationReferenceRange.typePreferredCoding = function () {
        return ReferencerangeMeaningCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ObservationReferenceRange.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["low"]) {
            (_a = outcome.issue).push.apply(_a, this.low.doModelValidation().issue);
        }
        if (this["high"]) {
            (_b = outcome.issue).push.apply(_b, this.high.doModelValidation().issue);
        }
        if (this["type"]) {
            (_c = outcome.issue).push.apply(_c, this.type.doModelValidation().issue);
        }
        if (this["appliesTo"]) {
            this.appliesTo.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["age"]) {
            (_d = outcome.issue).push.apply(_d, this.age.doModelValidation().issue);
        }
        if (this["text"]) {
            (_e = outcome.issue).push.apply(_e, this.text.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ObservationReferenceRange._fts_dataType = 'ObservationReferenceRange';
    return ObservationReferenceRange;
}(BackboneElement));
/**
 * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
 */
var ObservationComponent = /** @class */ (function (_super) {
    __extends(ObservationComponent, _super);
    /**
     * Default constructor for ObservationComponent - initializes any required elements to null if a value is not provided.
     */
    function ObservationComponent(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        else {
            _this.code = null;
        }
        if (source['value']) {
            _this.value = source.value;
        }
        else if (source['valueQuantity']) {
            _this.value = new Quantity(source.valueQuantity);
        }
        else if (source['valueCodeableConcept']) {
            _this.value = new CodeableConcept(source.valueCodeableConcept);
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
        else if (source['valueRange']) {
            _this.value = new Range(source.valueRange);
        }
        else if (source['valueRatio']) {
            _this.value = new Ratio(source.valueRatio);
        }
        else if (source['valueSampledData']) {
            _this.value = new SampledData(source.valueSampledData);
        }
        else if (source['valueTime']) {
            _this.value = new FhirTime({ value: source.valueTime });
        }
        else if (source['valueDateTime']) {
            _this.value = new FhirDateTime({ value: source.valueDateTime });
        }
        else if (source['valuePeriod']) {
            _this.value = new Period(source.valuePeriod);
        }
        if (source['dataAbsentReason']) {
            _this.dataAbsentReason = new CodeableConcept(source.dataAbsentReason);
        }
        if (source['interpretation']) {
            _this.interpretation = source.interpretation.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.interpretation = [];
        }
        if (source['referenceRange']) {
            _this.referenceRange = source.referenceRange.map(function (x) { return new ObservationReferenceRange(x); });
        }
        else {
            _this.referenceRange = [];
        }
        return _this;
    }
    /**
     * Extensible-bound Value Set for dataAbsentReason (Observation.component.dataAbsentReason)
     */
    ObservationComponent.dataAbsentReasonExtensibleCoding = function () {
        return DataAbsentReasonCodings;
    };
    /**
     * Extensible-bound Value Set for interpretation (Observation.component.interpretation)
     */
    ObservationComponent.interpretationExtensibleCoding = function () {
        return ObservationInterpretationCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ObservationComponent.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['code']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property code:fhir.CodeableConcept fhir: Observation.component.code:CodeableConcept', }));
        }
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        if (this["dataAbsentReason"]) {
            (_b = outcome.issue).push.apply(_b, this.dataAbsentReason.doModelValidation().issue);
        }
        if (this["interpretation"]) {
            this.interpretation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["referenceRange"]) {
            this.referenceRange.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ObservationComponent._fts_dataType = 'ObservationComponent';
    /**
     * Internal flag to properly serialize choice-type element Observation.component.value[x]
     */
    ObservationComponent._fts_valueIsChoice = true;
    return ObservationComponent;
}(BackboneElement));
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
var Observation = /** @class */ (function (_super) {
    __extends(Observation, _super);
    /**
     * Default constructor for Observation - initializes any required elements to null if a value is not provided.
     */
    function Observation(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Observation';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['basedOn']) {
            _this.basedOn = source.basedOn.map(function (x) { return new Reference(x); });
        }
        else {
            _this.basedOn = [];
        }
        if (source['partOf']) {
            _this.partOf = source.partOf.map(function (x) { return new Reference(x); });
        }
        else {
            _this.partOf = [];
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['category']) {
            _this.category = source.category.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.category = [];
        }
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        else {
            _this.code = null;
        }
        if (source['subject']) {
            _this.subject = new Reference(source.subject);
        }
        if (source['focus']) {
            _this.focus = source.focus.map(function (x) { return new Reference(x); });
        }
        else {
            _this.focus = [];
        }
        if (source['encounter']) {
            _this.encounter = new Reference(source.encounter);
        }
        if (source['effective']) {
            _this.effective = source.effective;
        }
        else if (source['effectiveDateTime']) {
            _this.effective = new FhirDateTime({ value: source.effectiveDateTime });
        }
        else if (source['effectivePeriod']) {
            _this.effective = new Period(source.effectivePeriod);
        }
        else if (source['effectiveTiming']) {
            _this.effective = new Timing(source.effectiveTiming);
        }
        else if (source['effectiveInstant']) {
            _this.effective = new FhirInstant({ value: source.effectiveInstant });
        }
        if (source['issued']) {
            _this.issued = new FhirInstant({ value: source.issued });
        }
        if (source['performer']) {
            _this.performer = source.performer.map(function (x) { return new Reference(x); });
        }
        else {
            _this.performer = [];
        }
        if (source['value']) {
            _this.value = source.value;
        }
        else if (source['valueQuantity']) {
            _this.value = new Quantity(source.valueQuantity);
        }
        else if (source['valueCodeableConcept']) {
            _this.value = new CodeableConcept(source.valueCodeableConcept);
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
        else if (source['valueRange']) {
            _this.value = new Range(source.valueRange);
        }
        else if (source['valueRatio']) {
            _this.value = new Ratio(source.valueRatio);
        }
        else if (source['valueSampledData']) {
            _this.value = new SampledData(source.valueSampledData);
        }
        else if (source['valueTime']) {
            _this.value = new FhirTime({ value: source.valueTime });
        }
        else if (source['valueDateTime']) {
            _this.value = new FhirDateTime({ value: source.valueDateTime });
        }
        else if (source['valuePeriod']) {
            _this.value = new Period(source.valuePeriod);
        }
        if (source['dataAbsentReason']) {
            _this.dataAbsentReason = new CodeableConcept(source.dataAbsentReason);
        }
        if (source['interpretation']) {
            _this.interpretation = source.interpretation.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.interpretation = [];
        }
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
        }
        if (source['bodySite']) {
            _this.bodySite = new CodeableConcept(source.bodySite);
        }
        if (source['method']) {
            _this.method = new CodeableConcept(source.method);
        }
        if (source['specimen']) {
            _this.specimen = new Reference(source.specimen);
        }
        if (source['device']) {
            _this.device = new Reference(source.device);
        }
        if (source['referenceRange']) {
            _this.referenceRange = source.referenceRange.map(function (x) { return new ObservationReferenceRange(x); });
        }
        else {
            _this.referenceRange = [];
        }
        if (source['hasMember']) {
            _this.hasMember = source.hasMember.map(function (x) { return new Reference(x); });
        }
        else {
            _this.hasMember = [];
        }
        if (source['derivedFrom']) {
            _this.derivedFrom = source.derivedFrom.map(function (x) { return new Reference(x); });
        }
        else {
            _this.derivedFrom = [];
        }
        if (source['component']) {
            _this.component = source.component.map(function (x) { return new ObservationComponent(x); });
        }
        else {
            _this.component = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (Observation.status)
     */
    Observation.statusRequiredCoding = function () {
        return ObservationStatusCodings;
    };
    /**
     * Preferred-bound Value Set for category (Observation.category)
     */
    Observation.categoryPreferredCoding = function () {
        return ObservationCategoryCodings;
    };
    /**
     * Extensible-bound Value Set for dataAbsentReason (Observation.dataAbsentReason)
     */
    Observation.dataAbsentReasonExtensibleCoding = function () {
        return DataAbsentReasonCodings;
    };
    /**
     * Extensible-bound Value Set for interpretation (Observation.interpretation)
     */
    Observation.interpretationExtensibleCoding = function () {
        return ObservationInterpretationCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Observation.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Observation" fhir: Observation.resourceType:"Observation"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["basedOn"]) {
            this.basedOn.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["partOf"]) {
            this.partOf.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:ObservationStatusCodeType fhir: Observation.status:code', }));
        }
        if (this["category"]) {
            this.category.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['code']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property code:fhir.CodeableConcept fhir: Observation.code:CodeableConcept', }));
        }
        if (this["code"]) {
            (_a = outcome.issue).push.apply(_a, this.code.doModelValidation().issue);
        }
        if (this["subject"]) {
            (_b = outcome.issue).push.apply(_b, this.subject.doModelValidation().issue);
        }
        if (this["focus"]) {
            this.focus.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["encounter"]) {
            (_c = outcome.issue).push.apply(_c, this.encounter.doModelValidation().issue);
        }
        if (this["issued"]) {
            (_d = outcome.issue).push.apply(_d, this.issued.doModelValidation().issue);
        }
        if (this["performer"]) {
            this.performer.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["dataAbsentReason"]) {
            (_e = outcome.issue).push.apply(_e, this.dataAbsentReason.doModelValidation().issue);
        }
        if (this["interpretation"]) {
            this.interpretation.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["note"]) {
            this.note.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["bodySite"]) {
            (_f = outcome.issue).push.apply(_f, this.bodySite.doModelValidation().issue);
        }
        if (this["method"]) {
            (_g = outcome.issue).push.apply(_g, this.method.doModelValidation().issue);
        }
        if (this["specimen"]) {
            (_h = outcome.issue).push.apply(_h, this.specimen.doModelValidation().issue);
        }
        if (this["device"]) {
            (_j = outcome.issue).push.apply(_j, this.device.doModelValidation().issue);
        }
        if (this["referenceRange"]) {
            this.referenceRange.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["hasMember"]) {
            this.hasMember.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["derivedFrom"]) {
            this.derivedFrom.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["component"]) {
            this.component.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Observation._fts_dataType = 'Observation';
    /**
     * Internal flag to properly serialize choice-type element Observation.effective[x]
     */
    Observation._fts_effectiveIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element Observation.value[x]
     */
    Observation._fts_valueIsChoice = true;
    return Observation;
}(DomainResource));

export { Observation, ObservationComponent, ObservationReferenceRange };
//# sourceMappingURL=Observation.js.map