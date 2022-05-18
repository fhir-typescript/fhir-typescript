/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { __extends } from '../_virtual/_tslib.js';
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
import { OperationOutcomeIssue } from './OperationOutcome.js';
import { FhirPrimitive } from './FhirPrimitive.js';

// Minimum TypeScript Version: 3.7
/**
 * Note that FHIR strings SHALL NOT exceed 1MB in size
 */
var FhirString = /** @class */ (function (_super) {
    __extends(FhirString, _super);
    /**
       * Create a FhirString
       * @param value Note that FHIR strings SHALL NOT exceed 1MB in size
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    function FhirString(source, options) {
        if (source === void 0) { source = {}; }
        if (options === void 0) { options = {}; }
        return _super.call(this, source, options) || this;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    FhirString.prototype.doModelValidation = function () {
        var outcome = _super.prototype.doModelValidation.call(this);
        if ((this.value) && (!FhirString._fts_regex.test(this.value))) {
            outcome.issue.push(new OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent, diagnostics: "Invalid value in primitive type string", }));
        }
        return outcome;
    };
    /**
     * Returns a string representation of a string.
     */
    FhirString.prototype.toString = function () { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').toString(); };
    /**
     * Returns the character at the specified index.
     * @param pos The zero-based index of the desired character.
     */
    FhirString.prototype.charAt = function (pos) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').charAt(pos); };
    /**
     * Returns the Unicode value of the character at the specified location.
     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
     */
    FhirString.prototype.charCodeAt = function (index) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').charCodeAt(index); };
    /**
     * Returns a string that contains the concatenation of two or more strings.
     * @param strings The strings to append to the end of the string.
     */
    FhirString.prototype.concat = function () {
        var _a;
        var _b;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return (_a = ((_b = this.value) !== null && _b !== void 0 ? _b : '')).concat.apply(_a, strings);
    };
    /**
     * Returns the position of the first occurrence of a substring.
     * @param searchString The substring to search for in the string
     * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
     */
    FhirString.prototype.indexOf = function (searchString, position) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').indexOf(searchString, position); };
    /**
     * Returns the last occurrence of a substring in the string.
     * @param searchString The substring to search for.
     * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
     */
    FhirString.prototype.lastIndexOf = function (searchString, position) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').lastIndexOf(searchString, position); };
    /**
     * Determines whether two strings are equivalent in the current locale.
     * @param that String to compare to target string
     */
    FhirString.prototype.localeCompare = function (that) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').localeCompare(that); };
    /**
     * Matches a string with a regular expression, and returns an array containing the results of that search.
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.
     */
    FhirString.prototype.match = function (regexp) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').match(regexp); };
    /**
     * Replaces text in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
     */
    FhirString.prototype.replace = function (searchValue, replaceValue) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').replace(searchValue, replaceValue); };
    /**
     * Finds the first substring match in a regular expression search.
     * @param regexp The regular expression pattern and applicable flags.
     */
    FhirString.prototype.search = function (regexp) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').search(regexp); };
    /**
     * Returns a section of a string.
     * @param start The index to the beginning of the specified portion of stringObj.
     * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
     * If this value is not specified, the substring continues to the end of stringObj.
     */
    FhirString.prototype.slice = function (start, end) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').slice(start, end); };
    /**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     * @param limit A value used to limit the number of elements returned in the array.
     */
    FhirString.prototype.split = function (separator, limit) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').split(separator, limit); };
    /**
     * Returns the substring at the specified location within a String object.
     * @param start The zero-based index number indicating the beginning of the substring.
     * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
     * If end is omitted, the characters from start through the end of the original string are returned.
     */
    FhirString.prototype.substring = function (start, end) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').substring(start, end); };
    /**
     * Converts all the alphabetic characters in a string to lowercase.
     */
    FhirString.prototype.toLowerCase = function () { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').toLowerCase(); };
    /**
     * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
     */
    FhirString.prototype.toLocaleLowerCase = function (locales) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').toLocaleLowerCase(locales); };
    /**
     * Converts all the alphabetic characters in a string to uppercase.
     */
    FhirString.prototype.toUpperCase = function () { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').toUpperCase(); };
    /**
     * Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
     */
    FhirString.prototype.toLocaleUpperCase = function (locales) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').toLocaleUpperCase(locales); };
    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    FhirString.prototype.trim = function () { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : '').trim(); };
    Object.defineProperty(FhirString.prototype, "length", {
        /**
         * Returns the length of a String object.
         */
        get: function () { var _a, _b; return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0; },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the primitive value of the specified object.
     */
    FhirString.prototype.valueOf = function () { var _a; return (_a = this.value) !== null && _a !== void 0 ? _a : ''; };
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    FhirString._fts_dataType = 'String';
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    FhirString._fts_jsonType = 'string';
    // published regex: [ \r\n\t\S]+
    FhirString._fts_regex = /^[ \r\n\t\S]+$/;
    return FhirString;
}(FhirPrimitive));

export { FhirString };
//# sourceMappingURL=FhirString.js.map
