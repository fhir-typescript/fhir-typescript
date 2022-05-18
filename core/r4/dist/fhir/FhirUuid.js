/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirUri } from './FhirUri.js';

// Minimum TypeScript Version: 3.7
/**
 * See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
 */
var FhirUuid = /** @class */ (function (_super) {
    __extends(FhirUuid, _super);
    /**
       * Create a FhirUuid
       * @param value See The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirUuid(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirUuid.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirUuid._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type uuid", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirUuid._fts_dataType = 'Uuid';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirUuid._fts_jsonType = 'string';
    // published regex: urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
    FhirUuid._fts_regex = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    return FhirUuid;
}(FhirUri));

export { FhirUuid };
//# sourceMappingURL=FhirUuid.js.map
