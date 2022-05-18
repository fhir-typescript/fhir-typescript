/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { Quantity } from './Quantity.js';

// <auto-generated/>
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
var Count = /** @class */ (function (_super) {
    __extends(Count, _super);
    /**
     * Default constructor for Count - initializes any required elements to null if a value is not provided.
     */
    function Count(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    Count.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        return outcome;
    };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    Count._fts_dataType = 'Count';
    return Count;
}(Quantity));

export { Count };
//# sourceMappingURL=Count.js.map
