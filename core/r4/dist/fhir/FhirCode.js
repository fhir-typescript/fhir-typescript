/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirString } from './FhirString.js';

// Minimum TypeScript Version: 3.7
/**
 * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
 */
var FhirCode = /** @class */ (function (_super) {
    __extends(FhirCode, _super);
    /**
       * Create a FhirCode
       * @param value A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirCode(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirCode.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirCode._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type code", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirCode._fts_dataType = 'Code';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirCode._fts_jsonType = 'string';
    // published regex: [^\s]+(\s[^\s]+)*
    FhirCode._fts_regex = /^[^\s]+(\s[^\s]+)*$/;
    return FhirCode;
}(FhirString));

export { FhirCode };
//# sourceMappingURL=FhirCode.js.map
