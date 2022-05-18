/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirUri } from './FhirUri.js';

// Minimum TypeScript Version: 3.7
/**
 * RFC 3001. See also ISO/IEC 8824:1990 €
 */
var FhirOid = /** @class */ (function (_super) {
    __extends(FhirOid, _super);
    /**
       * Create a FhirOid
       * @param value RFC 3001. See also ISO/IEC 8824:1990 €
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirOid(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirOid.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirOid._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type oid", }));
        }
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirOid._fts_dataType = 'Oid';
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirOid._fts_jsonType = 'string';
    // published regex: urn:oid:[0-2](\.(0|[1-9][0-9]*))+
    FhirOid._fts_regex = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;
    return FhirOid;
}(FhirUri));

export { FhirOid };
//# sourceMappingURL=FhirOid.js.map
