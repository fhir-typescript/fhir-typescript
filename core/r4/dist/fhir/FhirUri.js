/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirString } from './FhirString.js';

// Minimum TypeScript Version: 3.7
/**
 * see http://en.wikipedia.org/wiki/Uniform_resource_identifier
 */
var FhirUri = /** @class */ (function (_super) {
    __extends(FhirUri, _super);
    /**
       * Create a FhirUri
       * @param value see http://en.wikipedia.org/wiki/Uniform_resource_identifier
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirUri(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirUri.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirUri._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type uri", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirUri._fts_dataType = 'Uri';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirUri._fts_jsonType = 'string';
    // published regex: \S*
    FhirUri._fts_regex = /^\S*$/;
    return FhirUri;
}(FhirString));

export { FhirUri };
//# sourceMappingURL=FhirUri.js.map
