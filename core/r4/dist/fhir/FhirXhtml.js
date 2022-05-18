/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { FhirString } from './FhirString.js';

// Minimum TypeScript Version: 3.7
/**
 * XHTML
 */
var FhirXhtml = /** @class */ (function (_super) {
    __extends(FhirXhtml, _super);
    /**
       * Create a FhirXhtml
       * @param value XHTML
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirXhtml(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirXhtml.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirXhtml._fts_dataType = 'Xhtml';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirXhtml._fts_jsonType = 'string';
    return FhirXhtml;
}(FhirString));

export { FhirXhtml };
//# sourceMappingURL=FhirXhtml.js.map
