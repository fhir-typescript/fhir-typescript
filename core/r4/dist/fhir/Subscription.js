/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { SubscriptionChannelTypeCodings } from '../fhirValueSets/SubscriptionChannelTypeCodings.js';
import { SubscriptionStatusCodings } from '../fhirValueSets/SubscriptionStatusCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { BackboneElement } from './BackboneElement.js';
import { DomainResource } from './DomainResource.js';
import { FhirUrl } from './FhirUrl.js';
import { FhirCode } from './FhirCode.js';
import { FhirString } from './FhirString.js';
import { ContactPoint } from './ContactPoint.js';
import { FhirInstant } from './FhirInstant.js';

// <auto-generated/>
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
var SubscriptionChannel = /** @class */ (function (_super) {
    __extends(SubscriptionChannel, _super);
    /**
     * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
     */
    function SubscriptionChannel(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['type']) {
            _this.type = source.type;
        }
        else {
            _this.type = null;
        }
        if (source['endpoint']) {
            _this.endpoint = new FhirUrl({ value: source.endpoint });
        }
        if (source['payload']) {
            _this.payload = new FhirCode({ value: source.payload });
        }
        if (source['header']) {
            _this.header = source.header.map(function (x) { return new FhirString({ value: x }); });
        }
        else {
            _this.header = [];
        }
        return _this;
    }
    /**
     * Required-bound Value Set for type (Subscription.channel.type)
     */
    SubscriptionChannel.typeRequiredCoding = function () {
        return SubscriptionChannelTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    SubscriptionChannel.prototype.doModelValidation = function () {
        var _a, _b;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['type']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property type:SubscriptionChannelTypeCodeType fhir: Subscription.channel.type:code', }));
        }
        if (this["endpoint"]) {
            (_a = outcome.issue).push.apply(_a, this.endpoint.doModelValidation().issue);
        }
        if (this["payload"]) {
            (_b = outcome.issue).push.apply(_b, this.payload.doModelValidation().issue);
        }
        if (this["header"]) {
            this.header.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    SubscriptionChannel._fts_dataType = 'SubscriptionChannel';
    return SubscriptionChannel;
}(BackboneElement));
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    /**
     * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
     */
    function Subscription(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Subscription';
        if (source['status']) {
            _this.status = source.status;
        }
        else {
            _this.status = null;
        }
        if (source['contact']) {
            _this.contact = source.contact.map(function (x) { return new ContactPoint(x); });
        }
        else {
            _this.contact = [];
        }
        if (source['end']) {
            _this.end = new FhirInstant({ value: source.end });
        }
        if (source['reason']) {
            _this.reason = new FhirString({ value: source.reason });
        }
        else {
            _this.reason = null;
        }
        if (source['criteria']) {
            _this.criteria = new FhirString({ value: source.criteria });
        }
        else {
            _this.criteria = null;
        }
        if (source['error']) {
            _this.error = new FhirString({ value: source.error });
        }
        if (source['channel']) {
            _this.channel = new SubscriptionChannel(source.channel);
        }
        else {
            _this.channel = null;
        }
        return _this;
    }
    /**
     * Required-bound Value Set for status (Subscription.status)
     */
    Subscription.statusRequiredCoding = function () {
        return SubscriptionStatusCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Subscription.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Subscription" fhir: Subscription.resourceType:"Subscription"', }));
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:SubscriptionStatusCodeType fhir: Subscription.status:code', }));
        }
        if (this["contact"]) {
            this.contact.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["end"]) {
            (_a = outcome.issue).push.apply(_a, this.end.doModelValidation().issue);
        }
        if (!this['reason']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property reason:fhir.FhirString fhir: Subscription.reason:string', }));
        }
        if (this["reason"]) {
            (_b = outcome.issue).push.apply(_b, this.reason.doModelValidation().issue);
        }
        if (!this['criteria']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property criteria:fhir.FhirString fhir: Subscription.criteria:string', }));
        }
        if (this["criteria"]) {
            (_c = outcome.issue).push.apply(_c, this.criteria.doModelValidation().issue);
        }
        if (this["error"]) {
            (_d = outcome.issue).push.apply(_d, this.error.doModelValidation().issue);
        }
        if (!this['channel']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property channel:fhir.SubscriptionChannel fhir: Subscription.channel:channel', }));
        }
        if (this["channel"]) {
            (_e = outcome.issue).push.apply(_e, this.channel.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Subscription._fts_dataType = 'Subscription';
    return Subscription;
}(DomainResource));

export { Subscription, SubscriptionChannel };
//# sourceMappingURL=Subscription.js.map
