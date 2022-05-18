/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { QuantityComparatorCodings } from '../fhirValueSets/QuantityComparatorCodings.js';
import { FhirElement } from './FhirElement.js';
import { FhirDecimal } from './FhirDecimal.js';
import { FhirString } from './FhirString.js';
import { FhirUri } from './FhirUri.js';
import { FhirCode } from './FhirCode.js';

// <auto-generated/>
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
var Quantity = /** @class */ (function (_super) {
    __extends(Quantity, _super);
    /**
     * Default constructor for Quantity - initializes any required elements to null if a value is not provided.
     */
    function Quantity(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, source, options) || this;
        if (source['value']) {
            _this.value = new FhirDecimal({ value: source.value });
        }
        if (source['comparator']) {
            _this.comparator = source.comparator;
        }
        if (source['unit']) {
            _this.unit = new FhirString({ value: source.unit });
        }
        if (source['system']) {
            _this.system = new FhirUri({ value: source.system });
        }
        if (source['code']) {
            _this.code = new FhirCode({ value: source.code });
        }
        return _this;
    }
    /**
     * Required-bound Value Set for comparator (Quantity.comparator)
     */
    Quantity.comparatorRequiredCoding = function () {
        return QuantityComparatorCodings;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Quantity.prototype.doModelValidation = function () {
        var _a, _b, _c, _d;
        var outcome = _super.prototype.doModelValidation.call(this);
        if (this["value"]) {
            (_a = outcome.issue).push.apply(_a, this.value.doModelValidation().issue);
        }
        if (this["unit"]) {
            (_b = outcome.issue).push.apply(_b, this.unit.doModelValidation().issue);
        }
        if (this["system"]) {
            (_c = outcome.issue).push.apply(_c, this.system.doModelValidation().issue);
        }
        if (this["code"]) {
            (_d = outcome.issue).push.apply(_d, this.code.doModelValidation().issue);
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Quantity._fts_dataType = 'Quantity';
    return Quantity;
}(FhirElement));

export { Quantity };
//# sourceMappingURL=Quantity.js.map