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
        let iss = super.doModelValidation(exp);
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirCode._fts_regex.test(this.value)))) {
            iss.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type code' }, expression: [exp] });
        }
        return iss;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckNvZGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFFdkIsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFZbkM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sUUFBMkMsU0FBUSxJQUFJLENBQUMsYUFBYTtJQWVoRjs7Ozs7O01BTUU7SUFDRixZQUFZLFNBQStCLEVBQUUsRUFBRSxVQUFzQyxFQUFHO1FBQ3RGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksR0FBRyxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9KLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQy9IO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssMEJBQTBCLENBQUMs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OUQ7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxNQUFNLENBQUM7QUFDOUQ7O0dBRUc7QUFDNkIsc0JBQWEsR0FBVSxRQUFRLENBQUM7QUFDaEUscUNBQXFDO0FBQ0wsbUJBQVUsR0FBVSxxQkFBcUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBQcmltaXRpdmU6IGNvZGVcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogQSBzdHJpbmcgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYW5kIG5vIGxlYWRpbmcgb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBhbmQgd2hlcmUgdGhlcmUgaXMgbm8gd2hpdGVzcGFjZSBvdGhlciB0aGFuIHNpbmdsZSBzcGFjZXMgaW4gdGhlIGNvbnRlbnRzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJDb2RlQXJnczxDb2RlVHlwZSBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBBIHN0cmluZyB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGNoYXJhY3RlciBhbmQgbm8gbGVhZGluZyBvciB0cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB3aGVyZSB0aGVyZSBpcyBubyB3aGl0ZXNwYWNlIG90aGVyIHRoYW4gc2luZ2xlIHNwYWNlcyBpbiB0aGUgY29udGVudHNcclxuICAgKi9cclxuICB2YWx1ZT86RmhpckNvZGU8Q29kZVR5cGU+fENvZGVUeXBlfHN0cmluZ3x1bmRlZmluZWR8bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc3RyaW5nIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFuZCBubyBsZWFkaW5nIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHdoZXJlIHRoZXJlIGlzIG5vIHdoaXRlc3BhY2Ugb3RoZXIgdGhhbiBzaW5nbGUgc3BhY2VzIGluIHRoZSBjb250ZW50c1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJDb2RlPENvZGVUeXBlIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdDb2RlJztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBKU09OIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiBbXlxcc10rKFxcc1teXFxzXSspKlxyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19yZWdleDpSZWdFeHAgPSAvXlteXFxzXSsoXFxzW15cXHNdKykqJC9cclxuICAvKipcclxuICAgKiBBIGNvZGUgdmFsdWUsIHJlcHJlc2VudGVkIGFzIGEgSlMgc3RyaW5nXHJcbiAgICovXHJcbiAgZGVjbGFyZSB2YWx1ZT86Q29kZVR5cGV8c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRmhpckNvZGVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGNoYXJhY3RlciBhbmQgbm8gbGVhZGluZyBvciB0cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB3aGVyZSB0aGVyZSBpcyBubyB3aGl0ZXNwYWNlIG90aGVyIHRoYW4gc2luZ2xlIHNwYWNlcyBpbiB0aGUgY29udGVudHNcclxuICAgICAqIEBwYXJhbSBpZCBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmcgKHVuY29tbW9uIG9uIHByaW1pdGl2ZXMpXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIHRvIGV4dGVuc2lvbiBjb25zdHJ1Y3RvcnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJDb2RlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7IH0gKSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpICYmICh0aGlzLnZhbHVlICE9PSBudWxsKSAmJiAoKHRoaXMudmFsdWUgPT09ICcnKSB8fCAodHlwZW9mIHRoaXMudmFsdWUgIT09ICdzdHJpbmcnKSB8fCAoIUZoaXJDb2RlLl9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpKSB7XHJcbiAgICAgIGlzcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgZGV0YWlsczogeyB0ZXh0OiAnSW52YWxpZCB2YWx1ZSBpbiBwcmltaXRpdmUgdHlwZSBjb2RlJyB9LCBleHByZXNzaW9uOiBbZXhwXX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlc3Qgd2hldGhlciB0aGlzIGNvZGUgY29udGFpbnMgYSBzcGVjaWZpYyB2YWx1ZS5cclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgY29uY2VwdCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGNvZGluZywgZmFsc2UgaWYgaXQgZG9lcyBub3QuXHJcbiAgICovXHJcbiAgIHB1YmxpYyBoYXNDb2RpbmdGcm9tVmFsaWRhdGlvbk9iaih2c1ZhbGlkYXRpb246UmVhZG9ubHk8c3RyaW5nW10+KTpib29sZWFuIHtcclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZzVmFsaWRhdGlvbi5pbmNsdWRlcyh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlc3Qgd2hldGhlciB0aGlzIGNvZGUgY29udGFpbnMgYSBzcGVjaWZpYyB2YWx1ZS5cclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgY29uY2VwdCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGNvZGluZywgZmFsc2UgaWYgaXQgZG9lcyBub3QuXHJcbiAgICovXHJcbiAgIHB1YmxpYyBoYXNDb2RpbmdGcm9tVmFsaWRhdGlvbkhhc2godnNWYWxpZGF0aW9uOlJlYWRvbmx5PG51bWJlcltdPik6Ym9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2c1ZhbGlkYXRpb24uaW5jbHVkZXMoZmhpci5GaGlyQmFzZS5faGFzaDUyXzFhX2Zhc3QodGhpcy52YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHN0cmluZy5cclxuICAgKi9cclxuICAgcHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b1N0cmluZygpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cclxuICAgICogQHBhcmFtIHBvcyBUaGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2hhckF0KHBvczogbnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmNoYXJBdChwb3MpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBVbmljb2RlIHZhbHVlIG9mIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbi5cclxuICAgICogQHBhcmFtIGluZGV4IFRoZSB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci4gSWYgdGhlcmUgaXMgbm8gY2hhcmFjdGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXgsIE5hTiBpcyByZXR1cm5lZC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjaGFyQ29kZUF0KGluZGV4OiBudW1iZXIpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY2hhckNvZGVBdChpbmRleCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0d28gb3IgbW9yZSBzdHJpbmdzLlxyXG4gICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5ncyB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbmNhdCguLi5zdHJpbmdzOiBzdHJpbmdbXSk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5jb25jYXQoLi4uc3RyaW5ncyk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGEgc3Vic3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gc2VhcmNoU3RyaW5nIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmNoIGZvciBpbiB0aGUgc3RyaW5nXHJcbiAgICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gc2VhcmNoaW5nIHRoZSBTdHJpbmcgb2JqZWN0LiBJZiBvbWl0dGVkLCBzZWFyY2ggc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBpbmRleE9mKHNlYXJjaFN0cmluZzogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgYSBzdWJzdHJpbmcgaW4gdGhlIHN0cmluZy5cclxuICAgICogQHBhcmFtIHNlYXJjaFN0cmluZyBUaGUgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IuXHJcbiAgICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gc2VhcmNoaW5nLiBJZiBvbWl0dGVkLCB0aGUgc2VhcmNoIGJlZ2lucyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbGFzdEluZGV4T2Yoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmxhc3RJbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdHdvIHN0cmluZ3MgYXJlIGVxdWl2YWxlbnQgaW4gdGhlIGN1cnJlbnQgbG9jYWxlLlxyXG4gICAgKiBAcGFyYW0gdGhhdCBTdHJpbmcgdG8gY29tcGFyZSB0byB0YXJnZXQgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbG9jYWxlQ29tcGFyZSh0aGF0OiBzdHJpbmcpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykubG9jYWxlQ29tcGFyZSh0aGF0KTsgfVxyXG4gICAvKipcclxuICAgICogTWF0Y2hlcyBhIHN0cmluZyB3aXRoIGEgcmVndWxhciBleHByZXNzaW9uLCBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIHRoYXQgc2VhcmNoLlxyXG4gICAgKiBAcGFyYW0gcmVnZXhwIEEgdmFyaWFibGUgbmFtZSBvciBzdHJpbmcgbGl0ZXJhbCBjb250YWluaW5nIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiBhbmQgZmxhZ3MuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWF0Y2gocmVnZXhwOiBzdHJpbmd8UmVnRXhwKTpSZWdFeHBNYXRjaEFycmF5fG51bGwgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLm1hdGNoKHJlZ2V4cCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJlcGxhY2VzIHRleHQgaW4gYSBzdHJpbmcsIHVzaW5nIGEgcmVndWxhciBleHByZXNzaW9uIG9yIHNlYXJjaCBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBBIHN0cmluZyB0byBzZWFyY2ggZm9yLlxyXG4gICAgKiBAcGFyYW0gcmVwbGFjZVZhbHVlIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgdG8gcmVwbGFjZSBmb3IgZXZlcnkgc3VjY2Vzc2Z1bCBtYXRjaCBvZiBzZWFyY2hWYWx1ZSBpbiB0aGlzIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyByZXBsYWNlKHNlYXJjaFZhbHVlOnN0cmluZ3xSZWdFeHAsIHJlcGxhY2VWYWx1ZTpzdHJpbmcpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTsgfVxyXG4gICAvKipcclxuICAgICogRmluZHMgdGhlIGZpcnN0IHN1YnN0cmluZyBtYXRjaCBpbiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzZWFyY2guXHJcbiAgICAqIEBwYXJhbSByZWdleHAgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuIGFuZCBhcHBsaWNhYmxlIGZsYWdzLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNlYXJjaChyZWdleHA6c3RyaW5nfFJlZ0V4cCk6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5zZWFyY2gocmVnZXhwKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhIHNlY3Rpb24gb2YgYSBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBzdGFydCBUaGUgaW5kZXggdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgc3BlY2lmaWVkIHBvcnRpb24gb2Ygc3RyaW5nT2JqLlxyXG4gICAgKiBAcGFyYW0gZW5kIFRoZSBpbmRleCB0byB0aGUgZW5kIG9mIHRoZSBzcGVjaWZpZWQgcG9ydGlvbiBvZiBzdHJpbmdPYmouIFRoZSBzdWJzdHJpbmcgaW5jbHVkZXMgdGhlIGNoYXJhY3RlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLCB0aGUgY2hhcmFjdGVyIGluZGljYXRlZCBieSBlbmQuXHJcbiAgICAqIElmIHRoaXMgdmFsdWUgaXMgbm90IHNwZWNpZmllZCwgdGhlIHN1YnN0cmluZyBjb250aW51ZXMgdG8gdGhlIGVuZCBvZiBzdHJpbmdPYmouXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2xpY2Uoc3RhcnQ/Om51bWJlciwgZW5kPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc2xpY2Uoc3RhcnQsIGVuZCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFNwbGl0IGEgc3RyaW5nIGludG8gc3Vic3RyaW5ncyB1c2luZyB0aGUgc3BlY2lmaWVkIHNlcGFyYXRvciBhbmQgcmV0dXJuIHRoZW0gYXMgYW4gYXJyYXkuXHJcbiAgICAqIEBwYXJhbSBzZXBhcmF0b3IgQSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGNoYXJhY3RlciBvciBjaGFyYWN0ZXJzIHRvIHVzZSBpbiBzZXBhcmF0aW5nIHRoZSBzdHJpbmcuIElmIG9taXR0ZWQsIGEgc2luZ2xlLWVsZW1lbnQgYXJyYXkgY29udGFpbmluZyB0aGUgZW50aXJlIHN0cmluZyBpcyByZXR1cm5lZC5cclxuICAgICogQHBhcmFtIGxpbWl0IEEgdmFsdWUgdXNlZCB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHJldHVybmVkIGluIHRoZSBhcnJheS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzcGxpdChzZXBhcmF0b3I6c3RyaW5nfFJlZ0V4cCwgbGltaXQ/Om51bWJlcik6c3RyaW5nW10geyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBzdWJzdHJpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiB3aXRoaW4gYSBTdHJpbmcgb2JqZWN0LlxyXG4gICAgKiBAcGFyYW0gc3RhcnQgVGhlIHplcm8tYmFzZWQgaW5kZXggbnVtYmVyIGluZGljYXRpbmcgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3Vic3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gZW5kIFplcm8tYmFzZWQgaW5kZXggbnVtYmVyIGluZGljYXRpbmcgdGhlIGVuZCBvZiB0aGUgc3Vic3RyaW5nLiBUaGUgc3Vic3RyaW5nIGluY2x1ZGVzIHRoZSBjaGFyYWN0ZXJzIHVwIHRvLCBidXQgbm90IGluY2x1ZGluZywgdGhlIGNoYXJhY3RlciBpbmRpY2F0ZWQgYnkgZW5kLlxyXG4gICAgKiBJZiBlbmQgaXMgb21pdHRlZCwgdGhlIGNoYXJhY3RlcnMgZnJvbSBzdGFydCB0aHJvdWdoIHRoZSBlbmQgb2YgdGhlIG9yaWdpbmFsIHN0cmluZyBhcmUgcmV0dXJuZWQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3Vic3RyaW5nKHN0YXJ0Om51bWJlciwgZW5kPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhbGwgdGhlIGFscGhhYmV0aWMgY2hhcmFjdGVycyBpbiBhIHN0cmluZyB0byBsb3dlcmNhc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Mb3dlckNhc2UoKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvTG93ZXJDYXNlKCk7IH1cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGFsbCBhbHBoYWJldGljIGNoYXJhY3RlcnMgdG8gbG93ZXJjYXNlLCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBob3N0IGVudmlyb25tZW50J3MgY3VycmVudCBsb2NhbGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Mb2NhbGVMb3dlckNhc2UobG9jYWxlcz86c3RyaW5nfHN0cmluZ1tdKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvTG9jYWxlTG93ZXJDYXNlKGxvY2FsZXMpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhbGwgdGhlIGFscGhhYmV0aWMgY2hhcmFjdGVycyBpbiBhIHN0cmluZyB0byB1cHBlcmNhc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9VcHBlckNhc2UoKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvVXBwZXJDYXNlKCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgd2hlcmUgYWxsIGFscGhhYmV0aWMgY2hhcmFjdGVycyBoYXZlIGJlZW4gY29udmVydGVkIHRvIHVwcGVyY2FzZSwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgaG9zdCBlbnZpcm9ubWVudCdzIGN1cnJlbnQgbG9jYWxlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvTG9jYWxlVXBwZXJDYXNlKGxvY2FsZXM/OnN0cmluZ3xzdHJpbmdbXSk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGVzKTsgfVxyXG4gICAvKipcclxuICAgICogUmVtb3ZlcyB0aGUgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGUgc3BhY2UgYW5kIGxpbmUgdGVybWluYXRvciBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJpbSgpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudHJpbSgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgYSBTdHJpbmcgb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBsZW5ndGgoKTpudW1iZXIgeyByZXR1cm4gdGhpcy52YWx1ZT8ubGVuZ3RoID8/IDAgfTtcclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHByaW1pdGl2ZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBvdmVycmlkZSB2YWx1ZU9mKCk6c3RyaW5nIHsgcmV0dXJuIHRoaXMudmFsdWUgPz8gJyc7IH1cclxuIH1cclxuIl19