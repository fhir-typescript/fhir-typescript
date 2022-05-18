/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { ContactPointSystemCodings } from '../fhirValueSets/ContactPointSystemCodings.js';
import { ContactPointUseCodings } from '../fhirValueSets/ContactPointUseCodings.js';
import { FhirElement } from './FhirElement.js';
import { FhirString } from './FhirString.js';
import { FhirPositiveInt } from './FhirPositiveInt.js';
import { Period } from './Period.js';

// <auto-generated/>
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
var ContactPoint = /** @class */ (function (_super) {
    __extends(ContactPoint, _super);
    /**
     * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
     */
    function ContactPoint(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['system']) {
            _this.system = source.system;
        }
        if (source['value']) {
            _this.value = new FhirString({ value: source.value });
        }
        if (source['use']) {
            _this.use = source.use;
        }
        if (source['rank']) {
            _this.rank = new FhirPositiveInt({ value: source.rank });
        }
        if (source['period']) {
            _this.period = new Period(source.period);
        }
        return _this;
    }
    /**
     * Required-bound Value Set for system (ContactPoint.system)
     */
    ContactPoint.systemRequiredCoding = function () {
        return ContactPointSystemCodings;
    };
    /**
     * Required-bound Value Set for use (ContactPoint.use)
     */
    ContactPoint.useRequiredCoding = function () {
        return ContactPointUseCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    ContactPoint.prototype.doModelValidation = function () {
        var _a, _b, _c;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["value"]) {
            (_a = outcome.issue).push.apply(_a, this.value.doModelValidation().issue);
        }
        if (this["rank"]) {
            (_b = outcome.issue).push.apply(_b, this.rank.doModelValidation().issue);
        }
        if (this["period"]) {
            (_c = outcome.issue).push.apply(_c, this.period.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    ContactPoint._fts_dataType = 'ContactPoint';
    return ContactPoint;
}(FhirElement));

export { ContactPoint };
//# sourceMappingURL=ContactPoint.js.map