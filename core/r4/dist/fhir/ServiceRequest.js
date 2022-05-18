/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { RequestStatusCodings } from '../fhirValueSets/RequestStatusCodings.js';
import { RequestIntentCodings } from '../fhirValueSets/RequestIntentCodings.js';
import { RequestPriorityCodings } from '../fhirValueSets/RequestPriorityCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { Identifier } from './Identifier.js';
import { FhirCanonical } from './FhirCanonical.js';
import { FhirUri } from './FhirUri.js';
import { Reference } from './Reference.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirBoolean } from './FhirBoolean.js';
import { Quantity } from './Quantity.js';
import { Ratio } from './Ratio.js';
import { Range } from './Range.js';
import { FhirDateTime } from './FhirDateTime.js';
import { Period } from './Period.js';
import { Timing } from './Timing.js';
import { Annotation } from './Annotation.js';
import { FhirString } from './FhirString.js';

// <auto-generated/>
/**
 * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 */
var ServiceRequest = /** @class */ (function (_super) {
    __extends(ServiceRequest, _super);
    /**
     * Default constructor for ServiceRequest - initializes any required elements to null if a value is not provided.
     */
    function ServiceRequest(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'ServiceRequest';
        if (source['identifier']) {
            _this.identifier = source.identifier.map(function (x) { return new Identifier(x); });
        }
        else {
            _this.identifier = [];
        }
        if (source['instantiatesCanonical']) {
            _this.instantiatesCanonical = source.instantiatesCanonical.map(function (x) { return new FhirCanonical({ value: x }); });
        }
        else {
            _this.instantiatesCanonical = [];
        }
        if (source['instantiatesUri']) {
            _this.instantiatesUri = source.instantiatesUri.map(function (x) { return new FhirUri({ value: x }); });
        }
        else {
            _this.instantiatesUri = [];
        }
        if (source['basedOn']) {
            _this.basedOn = source.basedOn.map(function (x) { return new Reference(x); });
        }
        else {
            _this.basedOn = [];
        }
        if (source['replaces']) {
            _this.replaces = source.replaces.map(function (x) { return new Reference(x); });
        }
        else {
            _this.replaces = [];
        }
        if (source['requisition']) {
            _this.requisition = new Identifier(source.requisition);
        }
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['intent']) {
            _this.intent = source.intent;
        }
        else {
            _this.intent = null;
        }
        if (source['category']) {
            _this.category = source.category.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.category = [];
        }
        if (source['priority']) {
            _this.priority = source.priority;
        }
        if (source['doNotPerform']) {
            _this.doNotPerform = new FhirBoolean({ value: source.doNotPerform });
        }
        if (source['code']) {
            _this.code = new CodeableConcept(source.code);
        }
        if (source['orderDetail']) {
            _this.orderDetail = source.orderDetail.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.orderDetail = [];
        }
        if (source['quantity']) {
            _this.quantity = source.quantity;
        }
        else if (source['quantityQuantity']) {
            _this.quantity = new Quantity(source.quantityQuantity);
        }
        else if (source['quantityRatio']) {
            _this.quantity = new Ratio(source.quantityRatio);
        }
        else if (source['quantityRange']) {
            _this.quantity = new Range(source.quantityRange);
        }
        if (source['subject']) {
            _this.subject = new Reference(source.subject);
        }
        else {
            _this.subject = null;
        }
        if (source['encounter']) {
            _this.encounter = new Reference(source.encounter);
        }
        if (source['occurrence']) {
            _this.occurrence = source.occurrence;
        }
        else if (source['occurrenceDateTime']) {
            _this.occurrence = new FhirDateTime({ value: source.occurrenceDateTime });
        }
        else if (source['occurrencePeriod']) {
            _this.occurrence = new Period(source.occurrencePeriod);
        }
        else if (source['occurrenceTiming']) {
            _this.occurrence = new Timing(source.occurrenceTiming);
        }
        if (source['asNeeded']) {
            _this.asNeeded = source.asNeeded;
        }
        else if (source['asNeededBoolean']) {
            _this.asNeeded = new FhirBoolean({ value: source.asNeededBoolean });
        }
        else if (source['asNeededCodeableConcept']) {
            _this.asNeeded = new CodeableConcept(source.asNeededCodeableConcept);
        }
        if (source['authoredOn']) {
            _this.authoredOn = new FhirDateTime({ value: source.authoredOn });
        }
        if (source['requester']) {
            _this.requester = new Reference(source.requester);
        }
        if (source['performerType']) {
            _this.performerType = new CodeableConcept(source.performerType);
        }
        if (source['performer']) {
            _this.performer = source.performer.map(function (x) { return new Reference(x); });
        }
        else {
            _this.performer = [];
        }
        if (source['locationCode']) {
            _this.locationCode = source.locationCode.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.locationCode = [];
        }
        if (source['locationReference']) {
            _this.locationReference = source.locationReference.map(function (x) { return new Reference(x); });
        }
        else {
            _this.locationReference = [];
        }
        if (source['reasonCode']) {
            _this.reasonCode = source.reasonCode.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.reasonCode = [];
        }
        if (source['reasonReference']) {
            _this.reasonReference = source.reasonReference.map(function (x) { return new Reference(x); });
        }
        else {
            _this.reasonReference = [];
        }
        if (source['insurance']) {
            _this.insurance = source.insurance.map(function (x) { return new Reference(x); });
        }
        else {
            _this.insurance = [];
        }
        if (source['supportingInfo']) {
            _this.supportingInfo = source.supportingInfo.map(function (x) { return new Reference(x); });
        }
        else {
            _this.supportingInfo = [];
        }
        if (source['specimen']) {
            _this.specimen = source.specimen.map(function (x) { return new Reference(x); });
        }
        else {
            _this.specimen = [];
        }
        if (source['bodySite']) {
            _this.bodySite = source.bodySite.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.bodySite = [];
        }
        if (source['note']) {
            _this.note = source.note.map(function (x) { return new Annotation(x); });
        }
        else {
            _this.note = [];
        }
        if (source['patientInstruction']) {
            _this.patientInstruction = new FhirString({ value: source.patientInstruction });
        }
        if (source['relevantHistory']) {
            _this.relevantHistory = source.relevantHistory.map(function (x) { return new Reference(x); });
        }
        else {
            _this.relevantHistory = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (ServiceRequest.status)
     */
    ServiceRequest.statusRequiredCoding = function () {
        return RequestStatusCodings;
    };
    /**
     * Required-bound Value Set for intent (ServiceRequest.intent)
     */
    ServiceRequest.intentRequiredCoding = function () {
        return RequestIntentCodings;
    };
    /**
     * Required-bound Value Set for priority (ServiceRequest.priority)
     */
    ServiceRequest.priorityRequiredCoding = function () {
        return RequestPriorityCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ServiceRequest.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"ServiceRequest" fhir: ServiceRequest.resourceType:"ServiceRequest"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instantiatesCanonical"]) {
            this.instantiatesCanonical.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["instantiatesUri"]) {
            this.instantiatesUri.forEach(function (x) {
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
        if (this["replaces"]) {
            this.replaces.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["requisition"]) {
            (_a = outcome.issue).push.apply(_a, this.requisition.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:RequestStatusCodeType fhir: ServiceRequest.status:code', }));
        }
        if (!this['intent']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property intent:RequestIntentCodeType fhir: ServiceRequest.intent:code', }));
        }
        if (this["category"]) {
            this.category.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["doNotPerform"]) {
            (_b = outcome.issue).push.apply(_b, this.doNotPerform.doModelValidation().issue);
        }
        if (this["code"]) {
            (_c = outcome.issue).push.apply(_c, this.code.doModelValidation().issue);
        }
        if (this["orderDetail"]) {
            this.orderDetail.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['subject']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property subject:fhir.Reference fhir: ServiceRequest.subject:Reference', }));
        }
        if (this["subject"]) {
            (_d = outcome.issue).push.apply(_d, this.subject.doModelValidation().issue);
        }
        if (this["encounter"]) {
            (_e = outcome.issue).push.apply(_e, this.encounter.doModelValidation().issue);
        }
        if (this["authoredOn"]) {
            (_f = outcome.issue).push.apply(_f, this.authoredOn.doModelValidation().issue);
        }
        if (this["requester"]) {
            (_g = outcome.issue).push.apply(_g, this.requester.doModelValidation().issue);
        }
        if (this["performerType"]) {
            (_h = outcome.issue).push.apply(_h, this.performerType.doModelValidation().issue);
        }
        if (this["performer"]) {
            this.performer.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["locationCode"]) {
            this.locationCode.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["locationReference"]) {
            this.locationReference.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["reasonCode"]) {
            this.reasonCode.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["reasonReference"]) {
            this.reasonReference.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["insurance"]) {
            this.insurance.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["supportingInfo"]) {
            this.supportingInfo.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["specimen"]) {
            this.specimen.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["bodySite"]) {
            this.bodySite.forEach(function (x) {
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
        if (this["patientInstruction"]) {
            (_j = outcome.issue).push.apply(_j, this.patientInstruction.doModelValidation().issue);
        }
        if (this["relevantHistory"]) {
            this.relevantHistory.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ServiceRequest._fts_dataType = 'ServiceRequest';
    /**
     * Internal flag to properly serialize choice-type element ServiceRequest.quantity[x]
     */
    ServiceRequest._fts_quantityIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element ServiceRequest.occurrence[x]
     */
    ServiceRequest._fts_occurrenceIsChoice = true;
    /**
     * Internal flag to properly serialize choice-type element ServiceRequest.asNeeded[x]
     */
    ServiceRequest._fts_asNeededIsChoice = true;
    return ServiceRequest;
}(DomainResource));

export { ServiceRequest };
//# sourceMappingURL=ServiceRequest.js.map
