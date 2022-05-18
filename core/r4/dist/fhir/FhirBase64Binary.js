/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirString } from './FhirString.js';

// Minimum TypeScript Version: 3.7
/**
 * A stream of bytes, base64 encoded
 */
var FhirBase64Binary = /** @class */ (function (_super) {
    __extends(FhirBase64Binary, _super);
    /**
       * Create a FhirBase64Binary
       * @param value A stream of bytes, base64 encoded
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirBase64Binary(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirBase64Binary.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirBase64Binary._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type base64Binary", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirBase64Binary._fts_dataType = 'Base64Binary';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirBase64Binary._fts_jsonType = 'string';
    // published regex: (\s*([0-9a-zA-Z\+/=]){4}\s*)+
    FhirBase64Binary._fts_regex = /^(\s*([0-9a-zA-Z\+/=]){4}\s*)+$/;
    return FhirBase64Binary;
}(FhirString));

export { FhirBase64Binary };
//# sourceMappingURL=FhirBase64Binary.js.map
