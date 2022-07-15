// Minimum TypeScript Version: 3.7
// FHIR Primitive: code
import * as fhir from '../fhir.js';
/**
 * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
 */
export class FhirCode extends fhir.FhirPrimitive {
    /**
       * Create a FhirCode
       * @param value A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source = {}, options = {}) {
        super(source, options);
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirCode._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type code' }, expression: [exp] });
        }
        return issues;
    }
    /**
     * Test whether this code contains a specific value.
     * @returns True if this concept contains the specified coding, false if it does not.
     */
    hasCodingFromValidationObj(vsValidation) {
        if (!this.value) {
            return false;
        }
        return vsValidation.includes(this.value);
    }
    /**
     * Test whether this code contains a specific value.
     * @returns True if this concept contains the specified coding, false if it does not.
     */
    hasCodingFromValidationHash(vsValidation) {
        if (!this.value) {
            return false;
        }
        return vsValidation.includes(fhir.FhirBase._hash52_1a_fast(this.value));
    }
    /**
     * Returns a string representation of a string.
     */
    toString() { return (this.value ?? '').toString(); }
    /**
     * Returns the character at the specified index.
     * @param pos The zero-based index of the desired character.
     */
    charAt(pos) { return (this.value ?? '').charAt(pos); }
    /**
     * Returns the Unicode value of the character at the specified location.
     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
     */
    charCodeAt(index) { return (this.value ?? '').charCodeAt(index); }
    /**
     * Returns a string that contains the concatenation of two or more strings.
     * @param strings The strings to append to the end of the string.
     */
    concat(...strings) { return (this.value ?? '').concat(...strings); }
    /**
     * Returns the position of the first occurrence of a substring.
     * @param searchString The substring to search for in the string
     * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
     */
    indexOf(searchString, position) { return (this.value ?? '').indexOf(searchString, position); }
    /**
     * Returns the last occurrence of a substring in the string.
     * @param searchString The substring to search for.
     * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
     */
    lastIndexOf(searchString, position) { return (this.value ?? '').lastIndexOf(searchString, position); }
    /**
     * Determines whether two strings are equivalent in the current locale.
     * @param that String to compare to target string
     */
    localeCompare(that) { return (this.value ?? '').localeCompare(that); }
    /**
     * Matches a string with a regular expression, and returns an array containing the results of that search.
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.
     */
    match(regexp) { return (this.value ?? '').match(regexp); }
    /**
     * Replaces text in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
     */
    replace(searchValue, replaceValue) { return (this.value ?? '').replace(searchValue, replaceValue); }
    /**
     * Finds the first substring match in a regular expression search.
     * @param regexp The regular expression pattern and applicable flags.
     */
    search(regexp) { return (this.value ?? '').search(regexp); }
    /**
     * Returns a section of a string.
     * @param start The index to the beginning of the specified portion of stringObj.
     * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
     * If this value is not specified, the substring continues to the end of stringObj.
     */
    slice(start, end) { return (this.value ?? '').slice(start, end); }
    /**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     * @param limit A value used to limit the number of elements returned in the array.
     */
    split(separator, limit) { return (this.value ?? '').split(separator, limit); }
    /**
     * Returns the substring at the specified location within a String object.
     * @param start The zero-based index number indicating the beginning of the substring.
     * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
     * If end is omitted, the characters from start through the end of the original string are returned.
     */
    substring(start, end) { return (this.value ?? '').substring(start, end); }
    /**
     * Converts all the alphabetic characters in a string to lowercase.
     */
    toLowerCase() { return (this.value ?? '').toLowerCase(); }
    /**
     * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
     */
    toLocaleLowerCase(locales) { return (this.value ?? '').toLocaleLowerCase(locales); }
    /**
     * Converts all the alphabetic characters in a string to uppercase.
     */
    toUpperCase() { return (this.value ?? '').toUpperCase(); }
    /**
     * Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
     */
    toLocaleUpperCase(locales) { return (this.value ?? '').toLocaleUpperCase(locales); }
    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    trim() { return (this.value ?? '').trim(); }
    /**
     * Returns the length of a String object.
     */
    get length() { return this.value?.length ?? 0; }
    ;
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf() { return this.value ?? ''; }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirCode._fts_dataType = 'Code';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirCode._fts_jsonType = 'string';
// published regex: [^\s]+(\s[^\s]+)*
FhirCode._fts_regex = /^[^\s]+(\s[^\s]+)*$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckNvZGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBMkMsU0FBUSxJQUFJLENBQUMsYUFBYTtJQWVoRjs7Ozs7O01BTUU7SUFDRixZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFHO1FBQ3RGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9KLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ2xJO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDBCQUEwQixDQUFD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SjlEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsTUFBTSxDQUFDO0FBQzlEOztHQUVHO0FBQzZCLHNCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLHFDQUFxQztBQUNMLG1CQUFVLEdBQVUscUJBQXFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUHJpbWl0aXZlOiBjb2RlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgc3RyaW5nIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFuZCBubyBsZWFkaW5nIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHdoZXJlIHRoZXJlIGlzIG5vIHdoaXRlc3BhY2Ugb3RoZXIgdGhhbiBzaW5nbGUgc3BhY2VzIGluIHRoZSBjb250ZW50c1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyQ29kZUFyZ3M8Q29kZVR5cGUgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYW5kIG5vIGxlYWRpbmcgb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBhbmQgd2hlcmUgdGhlcmUgaXMgbm8gd2hpdGVzcGFjZSBvdGhlciB0aGFuIHNpbmdsZSBzcGFjZXMgaW4gdGhlIGNvbnRlbnRzXHJcbiAgICovXHJcbiAgdmFsdWU/OkZoaXJDb2RlPENvZGVUeXBlPnxDb2RlVHlwZXxzdHJpbmd8dW5kZWZpbmVkfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHN0cmluZyB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGNoYXJhY3RlciBhbmQgbm8gbGVhZGluZyBvciB0cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB3aGVyZSB0aGVyZSBpcyBubyB3aGl0ZXNwYWNlIG90aGVyIHRoYW4gc2luZ2xlIHNwYWNlcyBpbiB0aGUgY29udGVudHNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaGlyQ29kZTxDb2RlVHlwZSBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnQ29kZSc7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgSlNPTiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2pzb25UeXBlOnN0cmluZyA9ICdzdHJpbmcnO1xyXG4gIC8vIHB1Ymxpc2hlZCByZWdleDogW15cXHNdKyhcXHNbXlxcc10rKSpcclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL15bXlxcc10rKFxcc1teXFxzXSspKiQvXHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIHZhbHVlLCByZXByZXNlbnRlZCBhcyBhIEpTIHN0cmluZ1xyXG4gICAqL1xyXG4gIGRlY2xhcmUgdmFsdWU/OkNvZGVUeXBlfHN0cmluZ3xudWxsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAqIENyZWF0ZSBhIEZoaXJDb2RlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYW5kIG5vIGxlYWRpbmcgb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBhbmQgd2hlcmUgdGhlcmUgaXMgbm8gd2hpdGVzcGFjZSBvdGhlciB0aGFuIHNpbmdsZSBzcGFjZXMgaW4gdGhlIGNvbnRlbnRzXHJcbiAgICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nICh1bmNvbW1vbiBvbiBwcmltaXRpdmVzKVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byBleHRlbnNpb24gY29uc3RydWN0b3JzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyQ29kZUFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0geyB9ICkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAodGhpcy52YWx1ZSAhPT0gbnVsbCkgJiYgKCh0aGlzLnZhbHVlID09PSAnJykgfHwgKHR5cGVvZiB0aGlzLnZhbHVlICE9PSAnc3RyaW5nJykgfHwgKCFGaGlyQ29kZS5fZnRzX3JlZ2V4LnRlc3QodGhpcy52YWx1ZSkpKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAnaW52YWxpZCcsIGRldGFpbHM6IHsgdGV4dDogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgY29kZScgfSwgZXhwcmVzc2lvbjogW2V4cF19KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZXN0IHdoZXRoZXIgdGhpcyBjb2RlIGNvbnRhaW5zIGEgc3BlY2lmaWMgdmFsdWUuXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIGNvbmNlcHQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBjb2RpbmcsIGZhbHNlIGlmIGl0IGRvZXMgbm90LlxyXG4gICAqL1xyXG4gICBwdWJsaWMgaGFzQ29kaW5nRnJvbVZhbGlkYXRpb25PYmoodnNWYWxpZGF0aW9uOlJlYWRvbmx5PHN0cmluZ1tdPik6Ym9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2c1ZhbGlkYXRpb24uaW5jbHVkZXModGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZXN0IHdoZXRoZXIgdGhpcyBjb2RlIGNvbnRhaW5zIGEgc3BlY2lmaWMgdmFsdWUuXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIGNvbmNlcHQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBjb2RpbmcsIGZhbHNlIGlmIGl0IGRvZXMgbm90LlxyXG4gICAqL1xyXG4gICBwdWJsaWMgaGFzQ29kaW5nRnJvbVZhbGlkYXRpb25IYXNoKHZzVmFsaWRhdGlvbjpSZWFkb25seTxudW1iZXJbXT4pOmJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdnNWYWxpZGF0aW9uLmluY2x1ZGVzKGZoaXIuRmhpckJhc2UuX2hhc2g1Ml8xYV9mYXN0KHRoaXMudmFsdWUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzdHJpbmcuXHJcbiAgICovXHJcbiAgIHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9TdHJpbmcoKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBwb3MgVGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNoYXJBdChwb3M6IG51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5jaGFyQXQocG9zKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgVW5pY29kZSB2YWx1ZSBvZiB0aGUgY2hhcmFjdGVyIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24uXHJcbiAgICAqIEBwYXJhbSBpbmRleCBUaGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuIElmIHRoZXJlIGlzIG5vIGNoYXJhY3RlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCBOYU4gaXMgcmV0dXJuZWQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2hhckNvZGVBdChpbmRleDogbnVtYmVyKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmNoYXJDb2RlQXQoaW5kZXgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIGNvbmNhdGVuYXRpb24gb2YgdHdvIG9yIG1vcmUgc3RyaW5ncy5cclxuICAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZ3MgdG8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25jYXQoLi4uc3RyaW5nczogc3RyaW5nW10pOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY29uY2F0KC4uLnN0cmluZ3MpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhIHN1YnN0cmluZy5cclxuICAgICogQHBhcmFtIHNlYXJjaFN0cmluZyBUaGUgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IgaW4gdGhlIHN0cmluZ1xyXG4gICAgKiBAcGFyYW0gcG9zaXRpb24gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIHNlYXJjaGluZyB0aGUgU3RyaW5nIG9iamVjdC4gSWYgb21pdHRlZCwgc2VhcmNoIHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgaW5kZXhPZihzZWFyY2hTdHJpbmc6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIGEgc3Vic3RyaW5nIGluIHRoZSBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBzZWFyY2hTdHJpbmcgVGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxyXG4gICAgKiBAcGFyYW0gcG9zaXRpb24gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIHNlYXJjaGluZy4gSWYgb21pdHRlZCwgdGhlIHNlYXJjaCBiZWdpbnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIGxhc3RJbmRleE9mKHNlYXJjaFN0cmluZzogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5sYXN0SW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTsgfVxyXG4gICAvKipcclxuICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHR3byBzdHJpbmdzIGFyZSBlcXVpdmFsZW50IGluIHRoZSBjdXJyZW50IGxvY2FsZS5cclxuICAgICogQHBhcmFtIHRoYXQgU3RyaW5nIHRvIGNvbXBhcmUgdG8gdGFyZ2V0IHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIGxvY2FsZUNvbXBhcmUodGhhdDogc3RyaW5nKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmxvY2FsZUNvbXBhcmUodGhhdCk7IH1cclxuICAgLyoqXHJcbiAgICAqIE1hdGNoZXMgYSBzdHJpbmcgd2l0aCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiwgYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmVzdWx0cyBvZiB0aGF0IHNlYXJjaC5cclxuICAgICogQHBhcmFtIHJlZ2V4cCBBIHZhcmlhYmxlIG5hbWUgb3Igc3RyaW5nIGxpdGVyYWwgY29udGFpbmluZyB0aGUgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4gYW5kIGZsYWdzLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hdGNoKHJlZ2V4cDogc3RyaW5nfFJlZ0V4cCk6UmVnRXhwTWF0Y2hBcnJheXxudWxsIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5tYXRjaChyZWdleHApOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXBsYWNlcyB0ZXh0IGluIGEgc3RyaW5nLCB1c2luZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvciBzZWFyY2ggc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gc2VhcmNoVmFsdWUgQSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cclxuICAgICogQHBhcmFtIHJlcGxhY2VWYWx1ZSBBIHN0cmluZyBjb250YWluaW5nIHRoZSB0ZXh0IHRvIHJlcGxhY2UgZm9yIGV2ZXJ5IHN1Y2Nlc3NmdWwgbWF0Y2ggb2Ygc2VhcmNoVmFsdWUgaW4gdGhpcyBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcmVwbGFjZShzZWFyY2hWYWx1ZTpzdHJpbmd8UmVnRXhwLCByZXBsYWNlVmFsdWU6c3RyaW5nKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7IH1cclxuICAgLyoqXHJcbiAgICAqIEZpbmRzIHRoZSBmaXJzdCBzdWJzdHJpbmcgbWF0Y2ggaW4gYSByZWd1bGFyIGV4cHJlc3Npb24gc2VhcmNoLlxyXG4gICAgKiBAcGFyYW0gcmVnZXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiBhbmQgYXBwbGljYWJsZSBmbGFncy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZWFyY2gocmVnZXhwOnN0cmluZ3xSZWdFeHApOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc2VhcmNoKHJlZ2V4cCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzZWN0aW9uIG9mIGEgc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gc3RhcnQgVGhlIGluZGV4IHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNwZWNpZmllZCBwb3J0aW9uIG9mIHN0cmluZ09iai5cclxuICAgICogQHBhcmFtIGVuZCBUaGUgaW5kZXggdG8gdGhlIGVuZCBvZiB0aGUgc3BlY2lmaWVkIHBvcnRpb24gb2Ygc3RyaW5nT2JqLiBUaGUgc3Vic3RyaW5nIGluY2x1ZGVzIHRoZSBjaGFyYWN0ZXJzIHVwIHRvLCBidXQgbm90IGluY2x1ZGluZywgdGhlIGNoYXJhY3RlciBpbmRpY2F0ZWQgYnkgZW5kLlxyXG4gICAgKiBJZiB0aGlzIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBzdWJzdHJpbmcgY29udGludWVzIHRvIHRoZSBlbmQgb2Ygc3RyaW5nT2JqLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNsaWNlKHN0YXJ0PzpudW1iZXIsIGVuZD86bnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnNsaWNlKHN0YXJ0LCBlbmQpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBTcGxpdCBhIHN0cmluZyBpbnRvIHN1YnN0cmluZ3MgdXNpbmcgdGhlIHNwZWNpZmllZCBzZXBhcmF0b3IgYW5kIHJldHVybiB0aGVtIGFzIGFuIGFycmF5LlxyXG4gICAgKiBAcGFyYW0gc2VwYXJhdG9yIEEgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBjaGFyYWN0ZXIgb3IgY2hhcmFjdGVycyB0byB1c2UgaW4gc2VwYXJhdGluZyB0aGUgc3RyaW5nLiBJZiBvbWl0dGVkLCBhIHNpbmdsZS1lbGVtZW50IGFycmF5IGNvbnRhaW5pbmcgdGhlIGVudGlyZSBzdHJpbmcgaXMgcmV0dXJuZWQuXHJcbiAgICAqIEBwYXJhbSBsaW1pdCBBIHZhbHVlIHVzZWQgdG8gbGltaXQgdGhlIG51bWJlciBvZiBlbGVtZW50cyByZXR1cm5lZCBpbiB0aGUgYXJyYXkuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3BsaXQoc2VwYXJhdG9yOnN0cmluZ3xSZWdFeHAsIGxpbWl0PzpudW1iZXIpOnN0cmluZ1tdIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgc3Vic3RyaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gd2l0aGluIGEgU3RyaW5nIG9iamVjdC5cclxuICAgICogQHBhcmFtIHN0YXJ0IFRoZSB6ZXJvLWJhc2VkIGluZGV4IG51bWJlciBpbmRpY2F0aW5nIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN1YnN0cmluZy5cclxuICAgICogQHBhcmFtIGVuZCBaZXJvLWJhc2VkIGluZGV4IG51bWJlciBpbmRpY2F0aW5nIHRoZSBlbmQgb2YgdGhlIHN1YnN0cmluZy4gVGhlIHN1YnN0cmluZyBpbmNsdWRlcyB0aGUgY2hhcmFjdGVycyB1cCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsIHRoZSBjaGFyYWN0ZXIgaW5kaWNhdGVkIGJ5IGVuZC5cclxuICAgICogSWYgZW5kIGlzIG9taXR0ZWQsIHRoZSBjaGFyYWN0ZXJzIGZyb20gc3RhcnQgdGhyb3VnaCB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBzdHJpbmcgYXJlIHJldHVybmVkLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnN0cmluZyhzdGFydDpudW1iZXIsIGVuZD86bnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnN1YnN0cmluZyhzdGFydCwgZW5kKTsgfVxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYWxsIHRoZSBhbHBoYWJldGljIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvTG93ZXJDYXNlKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b0xvd2VyQ2FzZSgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhbGwgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIHRvIGxvd2VyY2FzZSwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgaG9zdCBlbnZpcm9ubWVudCdzIGN1cnJlbnQgbG9jYWxlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvTG9jYWxlTG93ZXJDYXNlKGxvY2FsZXM/OnN0cmluZ3xzdHJpbmdbXSk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b0xvY2FsZUxvd2VyQ2FzZShsb2NhbGVzKTsgfVxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYWxsIHRoZSBhbHBoYWJldGljIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgdG8gdXBwZXJjYXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvVXBwZXJDYXNlKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b1VwcGVyQ2FzZSgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHdoZXJlIGFsbCBhbHBoYWJldGljIGNoYXJhY3RlcnMgaGF2ZSBiZWVuIGNvbnZlcnRlZCB0byB1cHBlcmNhc2UsIHRha2luZyBpbnRvIGFjY291bnQgdGhlIGhvc3QgZW52aXJvbm1lbnQncyBjdXJyZW50IGxvY2FsZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGVzPzpzdHJpbmd8c3RyaW5nW10pOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlcyk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJlbW92ZXMgdGhlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlIHNwYWNlIGFuZCBsaW5lIHRlcm1pbmF0b3IgY2hhcmFjdGVycyBmcm9tIGEgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyaW0oKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRyaW0oKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIGEgU3RyaW5nIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHsgcmV0dXJuIHRoaXMudmFsdWU/Lmxlbmd0aCA/PyAwIH07XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBwcmltaXRpdmUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgb3ZlcnJpZGUgdmFsdWVPZigpOnN0cmluZyB7IHJldHVybiB0aGlzLnZhbHVlID8/ICcnOyB9XHJcbiB9XHJcbiJdfQ==