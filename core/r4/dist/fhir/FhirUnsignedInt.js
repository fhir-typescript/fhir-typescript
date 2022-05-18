/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirInteger } from './FhirInteger.js';

// Minimum TypeScript Version: 3.7
/**
 * An integer with a value that is not negative (e.g. &gt;= 0)
 */
var FhirUnsignedInt = /** @class */ (function (_super) {
    __extends(FhirUnsignedInt, _super);
    /**
       * Create a FhirUnsignedInt
       * @param value An integer with a value that is not negative (e.g. >= 0)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirUnsignedInt(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirUnsignedInt.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirUnsignedInt._fts_regex.test(this.value.toString()))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type unsignedInt", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirUnsignedInt._fts_dataType = 'UnsignedInt';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirUnsignedInt._fts_jsonType = 'number';
    // published regex: [0]|([1-9][0-9]*)
    FhirUnsignedInt._fts_regex = /^[0]|([1-9][0-9]*)$/;
    return FhirUnsignedInt;
}(FhirInteger));

export { FhirUnsignedInt };
//# sourceMappingURL=FhirUnsignedInt.js.map
