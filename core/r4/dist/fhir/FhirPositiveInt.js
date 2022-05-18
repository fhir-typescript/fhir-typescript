/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirInteger } from './FhirInteger.js';

// Minimum TypeScript Version: 3.7
/**
 * An integer with a value that is positive (e.g. &gt;0)
 */
var FhirPositiveInt = /** @class */ (function (_super) {
    __extends(FhirPositiveInt, _super);
    /**
       * Create a FhirPositiveInt
       * @param value An integer with a value that is positive (e.g. >0)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirPositiveInt(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirPositiveInt.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirPositiveInt._fts_regex.test(this.value.toString()))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type positiveInt", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirPositiveInt._fts_dataType = 'PositiveInt';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirPositiveInt._fts_jsonType = 'number';
    // published regex: [1-9][0-9]*
    FhirPositiveInt._fts_regex = /^[1-9][0-9]*$/;
    return FhirPositiveInt;
}(FhirInteger));

export { FhirPositiveInt };
//# sourceMappingURL=FhirPositiveInt.js.map
