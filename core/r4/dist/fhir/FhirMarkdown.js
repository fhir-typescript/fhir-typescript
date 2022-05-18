/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirString } from './FhirString.js';

// Minimum TypeScript Version: 3.7
/**
 * Systems are not required to have markdown support, so the text should be readable without markdown processing. The markdown syntax is GFM - see https://github.github.com/gfm/
 */
var FhirMarkdown = /** @class */ (function (_super) {
    __extends(FhirMarkdown, _super);
    /**
       * Create a FhirMarkdown
       * @param value Systems are not required to have markdown support, so the text should be readable without markdown processing. The markdown syntax is GFM - see https://github.github.com/gfm/
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirMarkdown(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirMarkdown.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirMarkdown._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type markdown", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirMarkdown._fts_dataType = 'Markdown';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirMarkdown._fts_jsonType = 'string';
    // published regex: [ \r\n\t\S]+
    FhirMarkdown._fts_regex = /^[ \r\n\t\S]+$/;
    return FhirMarkdown;
}(FhirString));

export { FhirMarkdown };
//# sourceMappingURL=FhirMarkdown.js.map
