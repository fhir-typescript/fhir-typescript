/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcome, OperationOutcomeIssue } from './OperationOutcome.js';
import { Extension } from './Extension.js';
import { FhirBase } from './FhirBase.js';

// Minimum TypeScript Version: 3.7
var FhirPrimitive = /** @class */ (function (_super) {
    __extends(FhirPrimitive, _super);
    /**
     * Constructor for FHIR primitive type elements
     * @param value
     * @param id
     * @param extension
     * @param options
     */
    function FhirPrimitive(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        var _this = this;
        var _a, _b;
        _this = _super.call(this) || this;
        _this._fts_isPrimitive = true;
        /**
         * Mapping of this datatype to a FHIR equivalent
         */
        _this._fts_dataType = 'PrimitiveType';
        _this._fts_jsonType = 'any';
        if (source) {
            if ((source.value) && (source.value['_fts_dataType'])) {
                _this.value = (_a = source.value.value) !== null && _a !== void 0 ? _a : null;
                _this.id = (_b = source.value.id) !== null && _b !== void 0 ? _b : undefined;
                if ((source.value.extension) && (source.value.extension.length > 0)) {
                    _this.extension = [];
                    source.value.extension.forEach(function (e) {
                        if (e === null) {
                            _this.extension.push(null);
                        }
                        else {
                            _this.extension.push(new Extension(e, options));
                        }
                    });
                }
            }
            else if (source.value) {
                _this.value = source.value;
            }
            if (source.id) {
                _this.id = source.id;
            }
            if ((source.extension) && (source.extension.length > 0)) {
                if (!_this.extension) {
                    _this.extension = [];
                }
                source.extension.forEach(function (e) {
                    if (e === null) {
                        _this.extension.push(null);
                    }
                    else {
                        _this.extension.push(new Extension(e, options));
                    }
                });
            }
        }
        return _this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirPrimitive.prototype.doModelValidation = function () {
        var outcome = new OperationOutcome({ issue: [] });
        if ((!this.value) && (!this.id) && ((!this.extension) || (this.extension.length === 0))) {
            outcome.issue.push(new OperationOutcomeIssue({
                severity: IssueSeverityCodes.Error,
                code: IssueTypeCodes.RequiredElementMissing,
                diagnostics: "Primitive values must have a value, id, or extensions.",
            }));
        }
        return outcome;
    };
    /**
     * Add an extension with the desired URL and FHIR value
     * @param url
     * @param value
     */
    FhirPrimitive.prototype.addExtension = function (url, value) {
        if (this.extension === undefined) {
            this.extension = [];
        }
        this.extension.push(Extension.fromValue(url, value));
    };
    return FhirPrimitive;
}(FhirBase));

export { FhirPrimitive };
//# sourceMappingURL=FhirPrimitive.js.map
