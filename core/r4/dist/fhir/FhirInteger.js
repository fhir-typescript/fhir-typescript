/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirPrimitive } from './FhirPrimitive.js';

// Minimum TypeScript Version: 3.7
/**
 * 32 bit number; for values larger than this, use decimal
 */
var FhirInteger = /** @class */ (function (_super) {
    __extends(FhirInteger, _super);
    /**
       * Create a FhirInteger
       * @param value 32 bit number; for values larger than this, use decimal
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirInteger(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirInteger.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirInteger._fts_regex.test(this.value.toString()))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type integer", }));
        }
        return outcome;
    };
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    FhirInteger.prototype.toString = function (radix) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toString(radix); };
    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    FhirInteger.prototype.toFixed = function (fractionDigits) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toFixed(fractionDigits); };
    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    FhirInteger.prototype.toExponential = function (fractionDigits) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toExponential(fractionDigits); };
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    FhirInteger.prototype.toPrecision = function (precision) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toPrecision(precision); };
    /**
     * Returns the primitive value of the specified object.
     */
    FhirInteger.prototype.valueOf = function () { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN); };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirInteger._fts_dataType = 'Integer';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirInteger._fts_jsonType = 'number';
    // published regex: -?([0]|([1-9][0-9]*))
    FhirInteger._fts_regex = /^-?([0]|([1-9][0-9]*))$/;
    return FhirInteger;
}(FhirPrimitive));

export { FhirInteger };
//# sourceMappingURL=FhirInteger.js.map
