/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirPrimitive } from './FhirPrimitive.js';

// Minimum TypeScript Version: 3.7
/**
 * Value of "true" or "false"
 */
var FhirBoolean = /** @class */ (function (_super) {
    __extends(FhirBoolean, _super);
    /**
       * Create a FhirBoolean
       * @param value Value of "true" or "false"
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirBoolean(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirBoolean.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirBoolean._fts_regex.test(this.value.toString()))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type boolean", }));
        }
        return outcome;
    };
    /**
     * Returns the primitive value of the specified object.
     */
    FhirBoolean.prototype.valueOf = function () { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : false); };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirBoolean._fts_dataType = 'Boolean';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirBoolean._fts_jsonType = 'boolean';
    // published regex: true|false
    FhirBoolean._fts_regex = /^true|false$/;
    return FhirBoolean;
}(FhirPrimitive));

export { FhirBoolean };
//# sourceMappingURL=FhirBoolean.js.map
