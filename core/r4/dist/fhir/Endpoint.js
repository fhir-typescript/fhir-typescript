/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { EndpointStatusCodings } from '../fhirValueSets/EndpointStatusCodings.js';
import { EndpointConnectionTypeCodings } from '../fhirValueSets/EndpointConnectionTypeCodings.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { DomainResource } from './DomainResource.js';
import { Identifier } from './Identifier.js';
import { Coding } from './Coding.js';
import { FhirString } from './FhirString.js';
import { Reference } from './Reference.js';
import { ContactPoint } from './ContactPoint.js';
import { Period } from './Period.js';
import { CodeableConcept } from './CodeableConcept.js';
import { FhirCode } from './FhirCode.js';
import { FhirUrl } from './FhirUrl.js';

// <auto-generated/>
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    /**
     * Default constructor for Endpoint - initializes any required elements to null if a value is not provided.
     */
    function Endpoint(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        _this.resourceType = 'Endpoint';
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
        if (source['connectionType']) {
            _this.connectionType = new Coding(source.connectionType);
        }
        else {
            _this.connectionType = null;
        }
        if (source['name']) {
            _this.name = new FhirString({ value: source.name });
        }
        if (source['managingOrganization']) {
            _this.managingOrganization = new Reference(source.managingOrganization);
        }
        if (source['contact']) {
            _this.contact = source.contact.map(function (x) { return new ContactPoint(x); });
        }
        else {
            _this.contact = [];
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        if (source['payloadType']) {
            _this.payloadType = source.payloadType.map(function (x) { return new CodeableConcept(x); });
        }
        else {
            _this.payloadType = [];
        }
        if (source['payloadMimeType']) {
            _this.payloadMimeType = source.payloadMimeType.map(function (x) { return new FhirCode({ value: x }); });
        }
        else {
            _this.payloadMimeType = [];
        }
        if (source['address']) {
            _this.address = new FhirUrl({ value: source.address });
        }
        else {
            _this.address = null;
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
     * Required-bound Value Set for status (Endpoint.status)
     */
    Endpoint.statusRequiredCoding = function () {
        return EndpointStatusCodings;
    };
    /**
     * Extensible-bound Value Set for connectionType (Endpoint.connectionType)
     */
    Endpoint.connectionTypeExtensibleCoding = function () {
        return EndpointConnectionTypeCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Endpoint.prototype.doModelValidation = function () {
        var _a, _b, _c, _d, _e;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (!this['resourceType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property resourceType:"Endpoint" fhir: Endpoint.resourceType:"Endpoint"', }));
        }
        if (this["identifier"]) {
            this.identifier.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['status']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property status:EndpointStatusCodeType fhir: Endpoint.status:code', }));
        }
        if (!this['connectionType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property connectionType:fhir.Coding fhir: Endpoint.connectionType:Coding', }));
        }
        if (this["connectionType"]) {
            (_a = outcome.issue).push.apply(_a, this.connectionType.doModelValidation().issue);
        }
        if (this["name"]) {
            (_b = outcome.issue).push.apply(_b, this.name.doModelValidation().issue);
        }
        if (this["managingOrganization"]) {
            (_c = outcome.issue).push.apply(_c, this.managingOrganization.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["period"]) {
            (_d = outcome.issue).push.apply(_d, this.period.doModelValidation().issue);
        }
        if (!this['payloadType']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property payloadType:fhir.CodeableConcept[] fhir: Endpoint.payloadType:CodeableConcept', }));
        }
        else if (!Array.isArray(this.payloadType)) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue, diagnostics: 'Found scalar in array property payloadType:fhir.CodeableConcept[] fhir: Endpoint.payloadType:CodeableConcept', }));
        }
        else if (this.payloadType.length === 0) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property payloadType:fhir.CodeableConcept[] fhir: Endpoint.payloadType:CodeableConcept', }));
        }
        if (this["payloadType"]) {
            this.payloadType.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (this["payloadMimeType"]) {
            this.payloadMimeType.forEach(function (x) {
                var _a;
                (_a = outcome.issue).push.apply(_a, x.doModelValidation().issue);
            });
        }
        if (!this['address']) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing, diagnostics: 'Missing required property address:fhir.FhirUrl fhir: Endpoint.address:url', }));
        }
        if (this["address"]) {
            (_e = outcome.issue).push.apply(_e, this.address.doModelValidation().issue);
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
    Endpoint._fts_dataType = 'Endpoint';
    return Endpoint;
}(DomainResource));

export { Endpoint };
//# sourceMappingURL=Endpoint.js.map
