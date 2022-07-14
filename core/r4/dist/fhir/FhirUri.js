// Minimum TypeScript Version: 3.7
// FHIR Primitive: uri
import * as fhir from '../fhir.js';
/**
 * see http://en.wikipedia.org/wiki/Uniform_resource_identifier
 */
export class FhirUri extends fhir.FhirPrimitive {
    /**
       * Create a FhirUri
       * @param value see http://en.wikipedia.org/wiki/Uniform_resource_identifier
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
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirUri._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type uri' }, expression: [expression] });
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
FhirUri._fts_dataType = 'Uri';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirUri._fts_jsonType = 'string';
// published regex: \S*
FhirUri._fts_regex = /^\S*$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclVyaS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpclVyaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsc0JBQXNCO0FBRXRCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBWW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQVEsU0FBUSxJQUFJLENBQUMsYUFBYTtJQWU3Qzs7Ozs7O01BTUU7SUFDRixZQUFZLFNBQThCLEVBQUUsRUFBRSxVQUFzQyxFQUFHO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsYUFBb0IsRUFBRTtRQUN0RCxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5SixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxxQ0FBcUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUN4STtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7T0FFRztJQUNjLFFBQVEsS0FBWSxPQUFP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QUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuSDs7T0FFRztJQUNJLFdBQVcsS0FBWSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEU7O09BRUc7SUFDSSxpQkFBaUIsQ0FBQyxPQUF3QixJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuSDs7T0FFRztJQUNJLElBQUksS0FBWSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQ7O09BRUc7SUFDSCxJQUFXLE1BQU0sS0FBWSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQzlEOztPQUVHO0lBQ2EsT0FBTyxLQUFZLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQXJJOUQ7O0dBRUc7QUFDNkIscUJBQWEsR0FBVSxLQUFLLENBQUM7QUFDN0Q7O0dBRUc7QUFDNkIscUJBQWEsR0FBVSxRQUFRLENBQUM7QUFDaEUsdUJBQXVCO0FBQ1Msa0JBQVUsR0FBVSxPQUFPLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUHJpbWl0aXZlOiB1cmlcclxuXHJcbmltcG9ydCAqIGFzIGZoaXIgZnJvbSAnLi4vZmhpci5qcyc7XHJcblxyXG4vKipcclxuICogc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJVcmlBcmdzIGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyXHJcbiAgICovXHJcbiAgdmFsdWU/OkZoaXJVcml8c3RyaW5nfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmhpclVyaSBleHRlbmRzIGZoaXIuRmhpclByaW1pdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdVcmknO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEpTT04gZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmcgPSAnc3RyaW5nJztcclxuICAvLyBwdWJsaXNoZWQgcmVnZXg6IFxcUypcclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL15cXFMqJC9cclxuICAvKipcclxuICAgKiBBIHVyaSB2YWx1ZSwgcmVwcmVzZW50ZWQgYXMgYSBKUyBzdHJpbmdcclxuICAgKi9cclxuICBkZWNsYXJlIHZhbHVlPzpzdHJpbmd8bnVsbHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBGaGlyVXJpXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9yZXNvdXJjZV9pZGVudGlmaWVyXHJcbiAgICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkIGZvciBpbnRlci1lbGVtZW50IHJlZmVyZW5jaW5nICh1bmNvbW1vbiBvbiBwcmltaXRpdmVzKVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbiBBZGRpdGlvbmFsIGNvbnRlbnQgZGVmaW5lZCBieSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byBleHRlbnNpb24gY29uc3RydWN0b3JzXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyVXJpQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7IH0gKSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbjpzdHJpbmcgPSAnJyk6Zmhpci5GdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3N1ZXM6Zmhpci5GdHNJc3N1ZVtdID0gc3VwZXIuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbik7XHJcbiAgICBpZiAoKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCkgJiYgKHRoaXMudmFsdWUgIT09IG51bGwpICYmICgodGhpcy52YWx1ZSA9PT0gJycpIHx8ICh0eXBlb2YgdGhpcy52YWx1ZSAhPT0gJ3N0cmluZycpIHx8ICghRmhpclVyaS5fZnRzX3JlZ2V4LnRlc3QodGhpcy52YWx1ZSkpKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAnaW52YWxpZCcsIGRldGFpbHM6IHsgdGV4dDogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgdXJpJyB9LCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl19KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzdHJpbmcuXHJcbiAgICovXHJcbiAgIHB1YmxpYyBvdmVycmlkZSB0b1N0cmluZygpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9TdHJpbmcoKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBwb3MgVGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNoYXJBdChwb3M6IG51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5jaGFyQXQocG9zKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgVW5pY29kZSB2YWx1ZSBvZiB0aGUgY2hhcmFjdGVyIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24uXHJcbiAgICAqIEBwYXJhbSBpbmRleCBUaGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuIElmIHRoZXJlIGlzIG5vIGNoYXJhY3RlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCBOYU4gaXMgcmV0dXJuZWQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2hhckNvZGVBdChpbmRleDogbnVtYmVyKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmNoYXJDb2RlQXQoaW5kZXgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIGNvbmNhdGVuYXRpb24gb2YgdHdvIG9yIG1vcmUgc3RyaW5ncy5cclxuICAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZ3MgdG8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25jYXQoLi4uc3RyaW5nczogc3RyaW5nW10pOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY29uY2F0KC4uLnN0cmluZ3MpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhIHN1YnN0cmluZy5cclxuICAgICogQHBhcmFtIHNlYXJjaFN0cmluZyBUaGUgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IgaW4gdGhlIHN0cmluZ1xyXG4gICAgKiBAcGFyYW0gcG9zaXRpb24gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIHNlYXJjaGluZyB0aGUgU3RyaW5nIG9iamVjdC4gSWYgb21pdHRlZCwgc2VhcmNoIHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgaW5kZXhPZihzZWFyY2hTdHJpbmc6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIGEgc3Vic3RyaW5nIGluIHRoZSBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBzZWFyY2hTdHJpbmcgVGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yLlxyXG4gICAgKiBAcGFyYW0gcG9zaXRpb24gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIHNlYXJjaGluZy4gSWYgb21pdHRlZCwgdGhlIHNlYXJjaCBiZWdpbnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIGxhc3RJbmRleE9mKHNlYXJjaFN0cmluZzogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5sYXN0SW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTsgfVxyXG4gICAvKipcclxuICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHR3byBzdHJpbmdzIGFyZSBlcXVpdmFsZW50IGluIHRoZSBjdXJyZW50IGxvY2FsZS5cclxuICAgICogQHBhcmFtIHRoYXQgU3RyaW5nIHRvIGNvbXBhcmUgdG8gdGFyZ2V0IHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIGxvY2FsZUNvbXBhcmUodGhhdDogc3RyaW5nKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmxvY2FsZUNvbXBhcmUodGhhdCk7IH1cclxuICAgLyoqXHJcbiAgICAqIE1hdGNoZXMgYSBzdHJpbmcgd2l0aCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiwgYW5kIHJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmVzdWx0cyBvZiB0aGF0IHNlYXJjaC5cclxuICAgICogQHBhcmFtIHJlZ2V4cCBBIHZhcmlhYmxlIG5hbWUgb3Igc3RyaW5nIGxpdGVyYWwgY29udGFpbmluZyB0aGUgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4gYW5kIGZsYWdzLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hdGNoKHJlZ2V4cDogc3RyaW5nfFJlZ0V4cCk6UmVnRXhwTWF0Y2hBcnJheXxudWxsIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5tYXRjaChyZWdleHApOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXBsYWNlcyB0ZXh0IGluIGEgc3RyaW5nLCB1c2luZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvciBzZWFyY2ggc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gc2VhcmNoVmFsdWUgQSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cclxuICAgICogQHBhcmFtIHJlcGxhY2VWYWx1ZSBBIHN0cmluZyBjb250YWluaW5nIHRoZSB0ZXh0IHRvIHJlcGxhY2UgZm9yIGV2ZXJ5IHN1Y2Nlc3NmdWwgbWF0Y2ggb2Ygc2VhcmNoVmFsdWUgaW4gdGhpcyBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcmVwbGFjZShzZWFyY2hWYWx1ZTpzdHJpbmd8UmVnRXhwLCByZXBsYWNlVmFsdWU6c3RyaW5nKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7IH1cclxuICAgLyoqXHJcbiAgICAqIEZpbmRzIHRoZSBmaXJzdCBzdWJzdHJpbmcgbWF0Y2ggaW4gYSByZWd1bGFyIGV4cHJlc3Npb24gc2VhcmNoLlxyXG4gICAgKiBAcGFyYW0gcmVnZXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiBhbmQgYXBwbGljYWJsZSBmbGFncy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZWFyY2gocmVnZXhwOnN0cmluZ3xSZWdFeHApOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc2VhcmNoKHJlZ2V4cCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzZWN0aW9uIG9mIGEgc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gc3RhcnQgVGhlIGluZGV4IHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNwZWNpZmllZCBwb3J0aW9uIG9mIHN0cmluZ09iai5cclxuICAgICogQHBhcmFtIGVuZCBUaGUgaW5kZXggdG8gdGhlIGVuZCBvZiB0aGUgc3BlY2lmaWVkIHBvcnRpb24gb2Ygc3RyaW5nT2JqLiBUaGUgc3Vic3RyaW5nIGluY2x1ZGVzIHRoZSBjaGFyYWN0ZXJzIHVwIHRvLCBidXQgbm90IGluY2x1ZGluZywgdGhlIGNoYXJhY3RlciBpbmRpY2F0ZWQgYnkgZW5kLlxyXG4gICAgKiBJZiB0aGlzIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBzdWJzdHJpbmcgY29udGludWVzIHRvIHRoZSBlbmQgb2Ygc3RyaW5nT2JqLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNsaWNlKHN0YXJ0PzpudW1iZXIsIGVuZD86bnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnNsaWNlKHN0YXJ0LCBlbmQpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBTcGxpdCBhIHN0cmluZyBpbnRvIHN1YnN0cmluZ3MgdXNpbmcgdGhlIHNwZWNpZmllZCBzZXBhcmF0b3IgYW5kIHJldHVybiB0aGVtIGFzIGFuIGFycmF5LlxyXG4gICAgKiBAcGFyYW0gc2VwYXJhdG9yIEEgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBjaGFyYWN0ZXIgb3IgY2hhcmFjdGVycyB0byB1c2UgaW4gc2VwYXJhdGluZyB0aGUgc3RyaW5nLiBJZiBvbWl0dGVkLCBhIHNpbmdsZS1lbGVtZW50IGFycmF5IGNvbnRhaW5pbmcgdGhlIGVudGlyZSBzdHJpbmcgaXMgcmV0dXJuZWQuXHJcbiAgICAqIEBwYXJhbSBsaW1pdCBBIHZhbHVlIHVzZWQgdG8gbGltaXQgdGhlIG51bWJlciBvZiBlbGVtZW50cyByZXR1cm5lZCBpbiB0aGUgYXJyYXkuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3BsaXQoc2VwYXJhdG9yOnN0cmluZ3xSZWdFeHAsIGxpbWl0PzpudW1iZXIpOnN0cmluZ1tdIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgc3Vic3RyaW5nIGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gd2l0aGluIGEgU3RyaW5nIG9iamVjdC5cclxuICAgICogQHBhcmFtIHN0YXJ0IFRoZSB6ZXJvLWJhc2VkIGluZGV4IG51bWJlciBpbmRpY2F0aW5nIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN1YnN0cmluZy5cclxuICAgICogQHBhcmFtIGVuZCBaZXJvLWJhc2VkIGluZGV4IG51bWJlciBpbmRpY2F0aW5nIHRoZSBlbmQgb2YgdGhlIHN1YnN0cmluZy4gVGhlIHN1YnN0cmluZyBpbmNsdWRlcyB0aGUgY2hhcmFjdGVycyB1cCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsIHRoZSBjaGFyYWN0ZXIgaW5kaWNhdGVkIGJ5IGVuZC5cclxuICAgICogSWYgZW5kIGlzIG9taXR0ZWQsIHRoZSBjaGFyYWN0ZXJzIGZyb20gc3RhcnQgdGhyb3VnaCB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBzdHJpbmcgYXJlIHJldHVybmVkLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnN0cmluZyhzdGFydDpudW1iZXIsIGVuZD86bnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnN1YnN0cmluZyhzdGFydCwgZW5kKTsgfVxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYWxsIHRoZSBhbHBoYWJldGljIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgdG8gbG93ZXJjYXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvTG93ZXJDYXNlKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b0xvd2VyQ2FzZSgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhbGwgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIHRvIGxvd2VyY2FzZSwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgaG9zdCBlbnZpcm9ubWVudCdzIGN1cnJlbnQgbG9jYWxlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvTG9jYWxlTG93ZXJDYXNlKGxvY2FsZXM/OnN0cmluZ3xzdHJpbmdbXSk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b0xvY2FsZUxvd2VyQ2FzZShsb2NhbGVzKTsgfVxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYWxsIHRoZSBhbHBoYWJldGljIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcgdG8gdXBwZXJjYXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvVXBwZXJDYXNlKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b1VwcGVyQ2FzZSgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHdoZXJlIGFsbCBhbHBoYWJldGljIGNoYXJhY3RlcnMgaGF2ZSBiZWVuIGNvbnZlcnRlZCB0byB1cHBlcmNhc2UsIHRha2luZyBpbnRvIGFjY291bnQgdGhlIGhvc3QgZW52aXJvbm1lbnQncyBjdXJyZW50IGxvY2FsZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGVzPzpzdHJpbmd8c3RyaW5nW10pOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlcyk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJlbW92ZXMgdGhlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlIHNwYWNlIGFuZCBsaW5lIHRlcm1pbmF0b3IgY2hhcmFjdGVycyBmcm9tIGEgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyaW0oKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRyaW0oKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIGEgU3RyaW5nIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6bnVtYmVyIHsgcmV0dXJuIHRoaXMudmFsdWU/Lmxlbmd0aCA/PyAwIH07XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBwcmltaXRpdmUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgb3ZlcnJpZGUgdmFsdWVPZigpOnN0cmluZyB7IHJldHVybiB0aGlzLnZhbHVlID8/ICcnOyB9XHJcbiB9XHJcbiJdfQ==