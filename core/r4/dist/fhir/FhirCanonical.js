/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirUri } from './FhirUri.js';

// Minimum TypeScript Version: 3.7
/**
 * see [Canonical References](references.html#canonical)
 */
var FhirCanonical = /** @class */ (function (_super) {
    __extends(FhirCanonical, _super);
    /**
       * Create a FhirCanonical
       * @param value see [Canonical References](references.html#canonical)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirCanonical(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirCanonical.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirCanonical._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type canonical", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirCanonical._fts_dataType = 'Canonical';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirCanonical._fts_jsonType = 'string';
    // published regex: \S*
    FhirCanonical._fts_regex = /^\S*$/;
    return FhirCanonical;
}(FhirUri));

export { FhirCanonical };
//# sourceMappingURL=FhirCanonical.js.map
