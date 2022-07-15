// Minimum TypeScript Version: 3.7
// FHIR Primitive: string
import * as fhir from '../fhir.js';
/**
 * Note that FHIR strings SHALL NOT exceed 1MB in size
 */
export class FhirString extends fhir.FhirPrimitive {
    /**
       * Create a FhirString
       * @param value Note that FHIR strings SHALL NOT exceed 1MB in size
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
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirString._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type string' }, expression: [exp] });
        }
        return issues;
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
FhirString._fts_dataType = 'String';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirString._fts_jsonType = 'string';
// published regex: [ \r\n\t\S]+
FhirString._fts_regex = /^[ \r\n\t\S]+$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclN0cmluZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclN0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBRXpCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBWW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxJQUFJLENBQUMsYUFBYTtJQWVoRDs7Ozs7O01BTUU7SUFDRixZQUFZLFNBQWlDLEVBQUUsRUFBRSxVQUFzQyxFQUFHO1FBQ3hGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3BJO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsUUFBUSxLQUFZ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QUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25IOztPQUVHO0lBQ0ksV0FBVyxLQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RTs7T0FFRztJQUNJLGlCQUFpQixDQUFDLE9BQXdCLElBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25IOztPQUVHO0lBQ0ksSUFBSSxLQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRDs7T0FFRztJQUNILElBQVcsTUFBTSxLQUFZLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDOUQ7O09BRUc7SUFDYSxPQUFPLEtBQVksT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBckk3RDs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFFBQVEsQ0FBQztBQUNoRTs7R0FFRztBQUM2Qix3QkFBYSxHQUFVLFFBQVEsQ0FBQztBQUNoRSxnQ0FBZ0M7QUFDQSxxQkFBVSxHQUFVLGdCQUFnQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogc3RyaW5nXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIE5vdGUgdGhhdCBGSElSIHN0cmluZ3MgU0hBTEwgTk9UIGV4Y2VlZCAxTUIgaW4gc2l6ZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyU3RyaW5nQXJncyBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCBGSElSIHN0cmluZ3MgU0hBTEwgTk9UIGV4Y2VlZCAxTUIgaW4gc2l6ZVxyXG4gICAqL1xyXG4gIHZhbHVlPzpGaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWR8bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE5vdGUgdGhhdCBGSElSIHN0cmluZ3MgU0hBTEwgTk9UIGV4Y2VlZCAxTUIgaW4gc2l6ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJTdHJpbmcgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3RyaW5nJztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBKU09OIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiBbIFxcclxcblxcdFxcU10rXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX3JlZ2V4OlJlZ0V4cCA9IC9eWyBcXHJcXG5cXHRcXFNdKyQvXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgdmFsdWUsIHJlcHJlc2VudGVkIGFzIGEgSlMgc3RyaW5nXHJcbiAgICovXHJcbiAgZGVjbGFyZSB2YWx1ZT86c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRmhpclN0cmluZ1xyXG4gICAgICogQHBhcmFtIHZhbHVlIE5vdGUgdGhhdCBGSElSIHN0cmluZ3MgU0hBTEwgTk9UIGV4Y2VlZCAxTUIgaW4gc2l6ZVxyXG4gICAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZyAodW5jb21tb24gb24gcHJpbWl0aXZlcylcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb24gQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgdG8gZXh0ZW5zaW9uIGNvbnN0cnVjdG9yc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RmhpclN0cmluZ0FyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0geyB9ICkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cDpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAodGhpcy52YWx1ZSAhPT0gbnVsbCkgJiYgKCh0aGlzLnZhbHVlID09PSAnJykgfHwgKHR5cGVvZiB0aGlzLnZhbHVlICE9PSAnc3RyaW5nJykgfHwgKCFGaGlyU3RyaW5nLl9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgZGV0YWlsczogeyB0ZXh0OiAnSW52YWxpZCB2YWx1ZSBpbiBwcmltaXRpdmUgdHlwZSBzdHJpbmcnIH0sIGV4cHJlc3Npb246IFtleHBdfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc3RyaW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9TdHJpbmcoKTsgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxyXG4gICAqIEBwYXJhbSBwb3MgVGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaGFyQXQocG9zOiBudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY2hhckF0KHBvcyk7IH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBVbmljb2RlIHZhbHVlIG9mIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbi5cclxuICAgKiBAcGFyYW0gaW5kZXggVGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLiBJZiB0aGVyZSBpcyBubyBjaGFyYWN0ZXIgYXQgdGhlIHNwZWNpZmllZCBpbmRleCwgTmFOIGlzIHJldHVybmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaGFyQ29kZUF0KGluZGV4OiBudW1iZXIpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY2hhckNvZGVBdChpbmRleCk7IH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIGNvbmNhdGVuYXRpb24gb2YgdHdvIG9yIG1vcmUgc3RyaW5ncy5cclxuICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5ncyB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb25jYXQoLi4uc3RyaW5nczogc3RyaW5nW10pOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY29uY2F0KC4uLnN0cmluZ3MpOyB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBzdWJzdHJpbmcuXHJcbiAgICogQHBhcmFtIHNlYXJjaFN0cmluZyBUaGUgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IgaW4gdGhlIHN0cmluZ1xyXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gc2VhcmNoaW5nIHRoZSBTdHJpbmcgb2JqZWN0LiBJZiBvbWl0dGVkLCBzZWFyY2ggc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZy5cclxuICAgKi9cclxuICBwdWJsaWMgaW5kZXhPZihzZWFyY2hTdHJpbmc6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTsgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBhIHN1YnN0cmluZyBpbiB0aGUgc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBzZWFyY2hTdHJpbmcgVGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxyXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gc2VhcmNoaW5nLiBJZiBvbWl0dGVkLCB0aGUgc2VhcmNoIGJlZ2lucyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXHJcbiAgICovXHJcbiAgcHVibGljIGxhc3RJbmRleE9mKHNlYXJjaFN0cmluZzogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5sYXN0SW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTsgfVxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB0d28gc3RyaW5ncyBhcmUgZXF1aXZhbGVudCBpbiB0aGUgY3VycmVudCBsb2NhbGUuXHJcbiAgICogQHBhcmFtIHRoYXQgU3RyaW5nIHRvIGNvbXBhcmUgdG8gdGFyZ2V0IHN0cmluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2NhbGVDb21wYXJlKHRoYXQ6IHN0cmluZyk6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5sb2NhbGVDb21wYXJlKHRoYXQpOyB9XHJcbiAgLyoqXHJcbiAgICogTWF0Y2hlcyBhIHN0cmluZyB3aXRoIGEgcmVndWxhciBleHByZXNzaW9uLCBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIHRoYXQgc2VhcmNoLlxyXG4gICAqIEBwYXJhbSByZWdleHAgQSB2YXJpYWJsZSBuYW1lIG9yIHN0cmluZyBsaXRlcmFsIGNvbnRhaW5pbmcgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuIGFuZCBmbGFncy5cclxuICAgKi9cclxuICBwdWJsaWMgbWF0Y2gocmVnZXhwOiBzdHJpbmd8UmVnRXhwKTpSZWdFeHBNYXRjaEFycmF5fG51bGwgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLm1hdGNoKHJlZ2V4cCk7IH1cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyB0ZXh0IGluIGEgc3RyaW5nLCB1c2luZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvciBzZWFyY2ggc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBBIHN0cmluZyB0byBzZWFyY2ggZm9yLlxyXG4gICAqIEBwYXJhbSByZXBsYWNlVmFsdWUgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgdGV4dCB0byByZXBsYWNlIGZvciBldmVyeSBzdWNjZXNzZnVsIG1hdGNoIG9mIHNlYXJjaFZhbHVlIGluIHRoaXMgc3RyaW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXBsYWNlKHNlYXJjaFZhbHVlOnN0cmluZ3xSZWdFeHAsIHJlcGxhY2VWYWx1ZTpzdHJpbmcpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTsgfVxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIHRoZSBmaXJzdCBzdWJzdHJpbmcgbWF0Y2ggaW4gYSByZWd1bGFyIGV4cHJlc3Npb24gc2VhcmNoLlxyXG4gICAqIEBwYXJhbSByZWdleHAgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuIGFuZCBhcHBsaWNhYmxlIGZsYWdzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZWFyY2gocmVnZXhwOnN0cmluZ3xSZWdFeHApOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc2VhcmNoKHJlZ2V4cCk7IH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgc2VjdGlvbiBvZiBhIHN0cmluZy5cclxuICAgKiBAcGFyYW0gc3RhcnQgVGhlIGluZGV4IHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNwZWNpZmllZCBwb3J0aW9uIG9mIHN0cmluZ09iai5cclxuICAgKiBAcGFyYW0gZW5kIFRoZSBpbmRleCB0byB0aGUgZW5kIG9mIHRoZSBzcGVjaWZpZWQgcG9ydGlvbiBvZiBzdHJpbmdPYmouIFRoZSBzdWJzdHJpbmcgaW5jbHVkZXMgdGhlIGNoYXJhY3RlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLCB0aGUgY2hhcmFjdGVyIGluZGljYXRlZCBieSBlbmQuXHJcbiAgICogSWYgdGhpcyB2YWx1ZSBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgc3Vic3RyaW5nIGNvbnRpbnVlcyB0byB0aGUgZW5kIG9mIHN0cmluZ09iai5cclxuICAgKi9cclxuICBwdWJsaWMgc2xpY2Uoc3RhcnQ/Om51bWJlciwgZW5kPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc2xpY2Uoc3RhcnQsIGVuZCk7IH1cclxuICAvKipcclxuICAgKiBTcGxpdCBhIHN0cmluZyBpbnRvIHN1YnN0cmluZ3MgdXNpbmcgdGhlIHNwZWNpZmllZCBzZXBhcmF0b3IgYW5kIHJldHVybiB0aGVtIGFzIGFuIGFycmF5LlxyXG4gICAqIEBwYXJhbSBzZXBhcmF0b3IgQSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGNoYXJhY3RlciBvciBjaGFyYWN0ZXJzIHRvIHVzZSBpbiBzZXBhcmF0aW5nIHRoZSBzdHJpbmcuIElmIG9taXR0ZWQsIGEgc2luZ2xlLWVsZW1lbnQgYXJyYXkgY29udGFpbmluZyB0aGUgZW50aXJlIHN0cmluZyBpcyByZXR1cm5lZC5cclxuICAgKiBAcGFyYW0gbGltaXQgQSB2YWx1ZSB1c2VkIHRvIGxpbWl0IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgcmV0dXJuZWQgaW4gdGhlIGFycmF5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzcGxpdChzZXBhcmF0b3I6c3RyaW5nfFJlZ0V4cCwgbGltaXQ/Om51bWJlcik6c3RyaW5nW10geyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpOyB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc3Vic3RyaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gd2l0aGluIGEgU3RyaW5nIG9iamVjdC5cclxuICAgKiBAcGFyYW0gc3RhcnQgVGhlIHplcm8tYmFzZWQgaW5kZXggbnVtYmVyIGluZGljYXRpbmcgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3Vic3RyaW5nLlxyXG4gICAqIEBwYXJhbSBlbmQgWmVyby1iYXNlZCBpbmRleCBudW1iZXIgaW5kaWNhdGluZyB0aGUgZW5kIG9mIHRoZSBzdWJzdHJpbmcuIFRoZSBzdWJzdHJpbmcgaW5jbHVkZXMgdGhlIGNoYXJhY3RlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLCB0aGUgY2hhcmFjdGVyIGluZGljYXRlZCBieSBlbmQuXHJcbiAgICogSWYgZW5kIGlzIG9taXR0ZWQsIHRoZSBjaGFyYWN0ZXJzIGZyb20gc3RhcnQgdGhyb3VnaCB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBzdHJpbmcgYXJlIHJldHVybmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdWJzdHJpbmcoc3RhcnQ6bnVtYmVyLCBlbmQ/Om51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7IH1cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBhbGwgdGhlIGFscGhhYmV0aWMgY2hhcmFjdGVycyBpbiBhIHN0cmluZyB0byBsb3dlcmNhc2UuXHJcbiAgICovXHJcbiAgcHVibGljIHRvTG93ZXJDYXNlKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b0xvd2VyQ2FzZSgpOyB9XHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgYWxsIGFscGhhYmV0aWMgY2hhcmFjdGVycyB0byBsb3dlcmNhc2UsIHRha2luZyBpbnRvIGFjY291bnQgdGhlIGhvc3QgZW52aXJvbm1lbnQncyBjdXJyZW50IGxvY2FsZS5cclxuICAgKi9cclxuICBwdWJsaWMgdG9Mb2NhbGVMb3dlckNhc2UobG9jYWxlcz86c3RyaW5nfHN0cmluZ1tdKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvTG9jYWxlTG93ZXJDYXNlKGxvY2FsZXMpOyB9XHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgYWxsIHRoZSBhbHBoYWJldGljIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgdG8gdXBwZXJjYXNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0b1VwcGVyQ2FzZSgpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9VcHBlckNhc2UoKTsgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzdHJpbmcgd2hlcmUgYWxsIGFscGhhYmV0aWMgY2hhcmFjdGVycyBoYXZlIGJlZW4gY29udmVydGVkIHRvIHVwcGVyY2FzZSwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgaG9zdCBlbnZpcm9ubWVudCdzIGN1cnJlbnQgbG9jYWxlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGVzPzpzdHJpbmd8c3RyaW5nW10pOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlcyk7IH1cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHRoZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZSBzcGFjZSBhbmQgbGluZSB0ZXJtaW5hdG9yIGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy5cclxuICAgKi9cclxuICBwdWJsaWMgdHJpbSgpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudHJpbSgpOyB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIGEgU3RyaW5nIG9iamVjdC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGxlbmd0aCgpOm51bWJlciB7IHJldHVybiB0aGlzLnZhbHVlPy5sZW5ndGggPz8gMCB9O1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHByaW1pdGl2ZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIG9iamVjdC5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgdmFsdWVPZigpOnN0cmluZyB7IHJldHVybiB0aGlzLnZhbHVlID8/ICcnOyB9XHJcbn1cclxuIl19