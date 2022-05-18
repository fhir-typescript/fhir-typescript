/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { OperationOutcome } from './OperationOutcome.js';

// Minimum TypeScript Version: 3.7
var FhirBase = /** @class */ (function () {
    /** Default constructor */
    function FhirBase(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        /**
         * Mapping of this datatype to a FHIR equivalent
         */
        this._fts_dataType = 'Base';
        if (options.allowUnknownElements === true) {
            Object.assign(this, source);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirBase.prototype.doModelValidation = function () {
        var outcome = new OperationOutcome({ issue: [] });
        return outcome;
    };
    /**
     * Convert a class-structured model into JSON
     * @returns JSON-compatible version of this object
     */
    FhirBase.prototype.toJSON = function () {
        var _a;
        var c = {};
        var _loop_1 = function (key) {
            if ((this_1[key] === undefined) ||
                (this_1[key] === null) ||
                (this_1[key] === '') ||
                (this_1[key] === NaN)) {
                return "continue";
            }
            if (key.startsWith('_fts_')) {
                return "continue";
            }
            var dKey = key + (this_1['_fts_' + key + 'IsChoice'] ? ((_a = this_1[key]['_fts_dataType']) !== null && _a !== void 0 ? _a : '') : '');
            if (Array.isArray(this_1[key])) {
                if (this_1[key].length === 0) {
                    return "continue";
                }
                if (this_1[key][0]['_fts_isPrimitive']) {
                    var eName_1 = '_' + dKey;
                    var foundAnyVal_1 = false;
                    var foundAnyExt_1 = false;
                    c[dKey] = [];
                    c[eName_1] = [];
                    this_1[key].forEach(function (av) {
                        var addElement = false;
                        if ((av['value'] !== undefined) && (av['value'] !== null)) {
                            c[dKey].push(av.valueOf());
                            foundAnyVal_1 = true;
                            addElement = true;
                        }
                        else {
                            c[dKey].push(null);
                        }
                        var ao = {};
                        if (av.id) {
                            ao['id'] = av.id;
                        }
                        if (av.extension) {
                            ao['extension'] = [];
                            av.extension.forEach(function (e) {
                                ao['extension'].push(e.toJSON());
                            });
                        }
                        if (Object.keys(ao).length !== 0) {
                            c[eName_1].push(ao);
                            foundAnyExt_1 = true;
                            addElement = true;
                        }
                        else {
                            c[eName_1].push(null);
                        }
                        if (!addElement) {
                            c[dKey].pop();
                            c[eName_1].pop();
                        }
                    });
                    if (!foundAnyVal_1) {
                        delete c[dKey];
                    }
                    if (!foundAnyExt_1) {
                        delete c[eName_1];
                    }
                }
                else if (this_1[key][0]['_fts_dataType']) {
                    c[dKey] = [];
                    this_1[key].forEach(function (v) {
                        c[dKey].push(v.toJSON());
                    });
                }
                else {
                    c[dKey] = this_1[key];
                }
            }
            else {
                if (this_1[key]['_fts_isPrimitive']) {
                    if (this_1[key]['value']) {
                        c[dKey] = this_1[key].valueOf();
                    }
                    var eName_2 = '_' + dKey;
                    c[eName_2] = {};
                    if (this_1[key]['id']) {
                        c[eName_2]['id'] = this_1[key]['id'];
                    }
                    if (this_1[key]['extension']) {
                        c[eName_2]['extension'] = [];
                        this_1[key]['extension'].forEach(function (e) {
                            c[eName_2]['extension'].push(e.toJSON());
                        });
                    }
                    if (Object.keys(c[eName_2]).length === 0) {
                        delete c[eName_2];
                    }
                }
                else if (this_1[key]['_fts_dataType']) {
                    c[dKey] = this_1[key].toJSON();
                }
                else {
                    c[dKey] = this_1[key];
                }
            }
        };
        var this_1 = this;
        for (var key in this) {
            _loop_1(key);
        }
        return c;
    };
    return FhirBase;
}());

export { FhirBase };
//# sourceMappingURL=FhirBase.js.map
