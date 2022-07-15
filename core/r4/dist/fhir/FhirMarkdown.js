// Minimum TypeScript Version: 3.7
// FHIR Primitive: markdown
import * as fhir from '../fhir.js';
/**
 * Systems are not required to have markdown support, so the text should be readable without markdown processing. The markdown syntax is GFM - see https://github.github.com/gfm/
 */
export class FhirMarkdown extends fhir.FhirPrimitive {
    /**
       * Create a FhirMarkdown
       * @param value Systems are not required to have markdown support, so the text should be readable without markdown processing. The markdown syntax is GFM - see https://github.github.com/gfm/
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
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirMarkdown._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', details: { text: 'Invalid value in primitive type markdown' }, expression: [exp] });
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
FhirMarkdown._fts_dataType = 'Markdown';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirMarkdown._fts_jsonType = 'string';
// published regex: [ \r\n\t\S]+
FhirMarkdown._fts_regex = /^[ \r\n\t\S]+$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpck1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9GaGlyTWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUUzQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQVluQzs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFhLFNBQVEsSUFBSSxDQUFDLGFBQWE7SUFlbEQ7Ozs7OztNQU1FO0lBQ0YsWUFBWSxTQUFtQyxFQUFFLEVBQUUsVUFBc0MsRUFBRztRQUMxRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7T0FFRztJQUNhLGlCQUFpQixDQUFDLE1BQWEsRUFBRTtRQUMvQyxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSwwQ0FBMEMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUN0STtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7T0FFRztJQUNjLFFBQVEs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SyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuSDs7T0FFRztJQUNJLFdBQVcsS0FBWSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEU7O09BRUc7SUFDSSxpQkFBaUIsQ0FBQyxPQUF3QixJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuSDs7T0FFRztJQUNJLElBQUksS0FBWSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQ7O09BRUc7SUFDSCxJQUFXLE1BQU0sS0FBWSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQzlEOztPQUVHO0lBQ2EsT0FBTyxLQUFZLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQXJJOUQ7O0dBRUc7QUFDNkIsMEJBQWEsR0FBVSxVQUFVLENBQUM7QUFDbEU7O0dBRUc7QUFDNkIsMEJBQWEsR0FBVSxRQUFRLENBQUM7QUFDaEUsZ0NBQWdDO0FBQ0EsdUJBQVUsR0FBVSxnQkFBZ0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBQcmltaXRpdmU6IG1hcmtkb3duXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFN5c3RlbXMgYXJlIG5vdCByZXF1aXJlZCB0byBoYXZlIG1hcmtkb3duIHN1cHBvcnQsIHNvIHRoZSB0ZXh0IHNob3VsZCBiZSByZWFkYWJsZSB3aXRob3V0IG1hcmtkb3duIHByb2Nlc3NpbmcuIFRoZSBtYXJrZG93biBzeW50YXggaXMgR0ZNIC0gc2VlIGh0dHBzOi8vZ2l0aHViLmdpdGh1Yi5jb20vZ2ZtL1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaGlyTWFya2Rvd25BcmdzIGV4dGVuZHMgZmhpci5GaGlyUHJpbWl0aXZlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogU3lzdGVtcyBhcmUgbm90IHJlcXVpcmVkIHRvIGhhdmUgbWFya2Rvd24gc3VwcG9ydCwgc28gdGhlIHRleHQgc2hvdWxkIGJlIHJlYWRhYmxlIHdpdGhvdXQgbWFya2Rvd24gcHJvY2Vzc2luZy4gVGhlIG1hcmtkb3duIHN5bnRheCBpcyBHRk0gLSBzZWUgaHR0cHM6Ly9naXRodWIuZ2l0aHViLmNvbS9nZm0vXHJcbiAgICovXHJcbiAgdmFsdWU/OkZoaXJNYXJrZG93bnxzdHJpbmd8dW5kZWZpbmVkfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTeXN0ZW1zIGFyZSBub3QgcmVxdWlyZWQgdG8gaGF2ZSBtYXJrZG93biBzdXBwb3J0LCBzbyB0aGUgdGV4dCBzaG91bGQgYmUgcmVhZGFibGUgd2l0aG91dCBtYXJrZG93biBwcm9jZXNzaW5nLiBUaGUgbWFya2Rvd24gc3ludGF4IGlzIEdGTSAtIHNlZSBodHRwczovL2dpdGh1Yi5naXRodWIuY29tL2dmbS9cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaGlyTWFya2Rvd24gZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnTWFya2Rvd24nO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEpTT04gZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmcgPSAnc3RyaW5nJztcclxuICAvLyBwdWJsaXNoZWQgcmVnZXg6IFsgXFxyXFxuXFx0XFxTXStcclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gL15bIFxcclxcblxcdFxcU10rJC9cclxuICAvKipcclxuICAgKiBBIG1hcmtkb3duIHZhbHVlLCByZXByZXNlbnRlZCBhcyBhIEpTIHN0cmluZ1xyXG4gICAqL1xyXG4gIGRlY2xhcmUgdmFsdWU/OnN0cmluZ3xudWxsfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgICAqIENyZWF0ZSBhIEZoaXJNYXJrZG93blxyXG4gICAgICogQHBhcmFtIHZhbHVlIFN5c3RlbXMgYXJlIG5vdCByZXF1aXJlZCB0byBoYXZlIG1hcmtkb3duIHN1cHBvcnQsIHNvIHRoZSB0ZXh0IHNob3VsZCBiZSByZWFkYWJsZSB3aXRob3V0IG1hcmtkb3duIHByb2Nlc3NpbmcuIFRoZSBtYXJrZG93biBzeW50YXggaXMgR0ZNIC0gc2VlIGh0dHBzOi8vZ2l0aHViLmdpdGh1Yi5jb20vZ2ZtL1xyXG4gICAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZCBmb3IgaW50ZXItZWxlbWVudCByZWZlcmVuY2luZyAodW5jb21tb24gb24gcHJpbWl0aXZlcylcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb24gQWRkaXRpb25hbCBjb250ZW50IGRlZmluZWQgYnkgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgdG8gZXh0ZW5zaW9uIGNvbnN0cnVjdG9yc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8Rmhpck1hcmtkb3duQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7IH0gKSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpICYmICh0aGlzLnZhbHVlICE9PSBudWxsKSAmJiAoKHRoaXMudmFsdWUgPT09ICcnKSB8fCAodHlwZW9mIHRoaXMudmFsdWUgIT09ICdzdHJpbmcnKSB8fCAoIUZoaXJNYXJrZG93bi5fZnRzX3JlZ2V4LnRlc3QodGhpcy52YWx1ZSkpKSkge1xyXG4gICAgICBpc3N1ZXMucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBjb2RlOiAnaW52YWxpZCcsIGRldGFpbHM6IHsgdGV4dDogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgbWFya2Rvd24nIH0sIGV4cHJlc3Npb246IFtleHBdfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc3RyaW5nLlxyXG4gICAqL1xyXG4gICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvU3RyaW5nKCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxyXG4gICAgKiBAcGFyYW0gcG9zIFRoZSB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjaGFyQXQocG9zOiBudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY2hhckF0KHBvcyk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIFVuaWNvZGUgdmFsdWUgb2YgdGhlIGNoYXJhY3RlciBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uLlxyXG4gICAgKiBAcGFyYW0gaW5kZXggVGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLiBJZiB0aGVyZSBpcyBubyBjaGFyYWN0ZXIgYXQgdGhlIHNwZWNpZmllZCBpbmRleCwgTmFOIGlzIHJldHVybmVkLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNoYXJDb2RlQXQoaW5kZXg6IG51bWJlcik6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5jaGFyQ29kZUF0KGluZGV4KTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBjb25jYXRlbmF0aW9uIG9mIHR3byBvciBtb3JlIHN0cmluZ3MuXHJcbiAgICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmdzIHRvIGFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uY2F0KC4uLnN0cmluZ3M6IHN0cmluZ1tdKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmNvbmNhdCguLi5zdHJpbmdzKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBzdWJzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBzZWFyY2hTdHJpbmcgVGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yIGluIHRoZSBzdHJpbmdcclxuICAgICogQHBhcmFtIHBvc2l0aW9uIFRoZSBpbmRleCBhdCB3aGljaCB0byBiZWdpbiBzZWFyY2hpbmcgdGhlIFN0cmluZyBvYmplY3QuIElmIG9taXR0ZWQsIHNlYXJjaCBzdGFydHMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIGluZGV4T2Yoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBhIHN1YnN0cmluZyBpbiB0aGUgc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gc2VhcmNoU3RyaW5nIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmNoIGZvci5cclxuICAgICogQHBhcmFtIHBvc2l0aW9uIFRoZSBpbmRleCBhdCB3aGljaCB0byBiZWdpbiBzZWFyY2hpbmcuIElmIG9taXR0ZWQsIHRoZSBzZWFyY2ggYmVnaW5zIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBsYXN0SW5kZXhPZihzZWFyY2hTdHJpbmc6IHN0cmluZywgcG9zaXRpb24/OiBudW1iZXIpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykubGFzdEluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7IH1cclxuICAgLyoqXHJcbiAgICAqIERldGVybWluZXMgd2hldGhlciB0d28gc3RyaW5ncyBhcmUgZXF1aXZhbGVudCBpbiB0aGUgY3VycmVudCBsb2NhbGUuXHJcbiAgICAqIEBwYXJhbSB0aGF0IFN0cmluZyB0byBjb21wYXJlIHRvIHRhcmdldCBzdHJpbmdcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2NhbGVDb21wYXJlKHRoYXQ6IHN0cmluZyk6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5sb2NhbGVDb21wYXJlKHRoYXQpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBNYXRjaGVzIGEgc3RyaW5nIHdpdGggYSByZWd1bGFyIGV4cHJlc3Npb24sIGFuZCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJlc3VsdHMgb2YgdGhhdCBzZWFyY2guXHJcbiAgICAqIEBwYXJhbSByZWdleHAgQSB2YXJpYWJsZSBuYW1lIG9yIHN0cmluZyBsaXRlcmFsIGNvbnRhaW5pbmcgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuIGFuZCBmbGFncy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYXRjaChyZWdleHA6IHN0cmluZ3xSZWdFeHApOlJlZ0V4cE1hdGNoQXJyYXl8bnVsbCB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykubWF0Y2gocmVnZXhwKTsgfVxyXG4gICAvKipcclxuICAgICogUmVwbGFjZXMgdGV4dCBpbiBhIHN0cmluZywgdXNpbmcgYSByZWd1bGFyIGV4cHJlc3Npb24gb3Igc2VhcmNoIHN0cmluZy5cclxuICAgICogQHBhcmFtIHNlYXJjaFZhbHVlIEEgc3RyaW5nIHRvIHNlYXJjaCBmb3IuXHJcbiAgICAqIEBwYXJhbSByZXBsYWNlVmFsdWUgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgdGV4dCB0byByZXBsYWNlIGZvciBldmVyeSBzdWNjZXNzZnVsIG1hdGNoIG9mIHNlYXJjaFZhbHVlIGluIHRoaXMgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHJlcGxhY2Uoc2VhcmNoVmFsdWU6c3RyaW5nfFJlZ0V4cCwgcmVwbGFjZVZhbHVlOnN0cmluZyk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5yZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBGaW5kcyB0aGUgZmlyc3Qgc3Vic3RyaW5nIG1hdGNoIGluIGEgcmVndWxhciBleHByZXNzaW9uIHNlYXJjaC5cclxuICAgICogQHBhcmFtIHJlZ2V4cCBUaGUgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4gYW5kIGFwcGxpY2FibGUgZmxhZ3MuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2VhcmNoKHJlZ2V4cDpzdHJpbmd8UmVnRXhwKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnNlYXJjaChyZWdleHApOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc2VjdGlvbiBvZiBhIHN0cmluZy5cclxuICAgICogQHBhcmFtIHN0YXJ0IFRoZSBpbmRleCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzcGVjaWZpZWQgcG9ydGlvbiBvZiBzdHJpbmdPYmouXHJcbiAgICAqIEBwYXJhbSBlbmQgVGhlIGluZGV4IHRvIHRoZSBlbmQgb2YgdGhlIHNwZWNpZmllZCBwb3J0aW9uIG9mIHN0cmluZ09iai4gVGhlIHN1YnN0cmluZyBpbmNsdWRlcyB0aGUgY2hhcmFjdGVycyB1cCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsIHRoZSBjaGFyYWN0ZXIgaW5kaWNhdGVkIGJ5IGVuZC5cclxuICAgICogSWYgdGhpcyB2YWx1ZSBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgc3Vic3RyaW5nIGNvbnRpbnVlcyB0byB0aGUgZW5kIG9mIHN0cmluZ09iai5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzbGljZShzdGFydD86bnVtYmVyLCBlbmQ/Om51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5zbGljZShzdGFydCwgZW5kKTsgfVxyXG4gICAvKipcclxuICAgICogU3BsaXQgYSBzdHJpbmcgaW50byBzdWJzdHJpbmdzIHVzaW5nIHRoZSBzcGVjaWZpZWQgc2VwYXJhdG9yIGFuZCByZXR1cm4gdGhlbSBhcyBhbiBhcnJheS5cclxuICAgICogQHBhcmFtIHNlcGFyYXRvciBBIHN0cmluZyB0aGF0IGlkZW50aWZpZXMgY2hhcmFjdGVyIG9yIGNoYXJhY3RlcnMgdG8gdXNlIGluIHNlcGFyYXRpbmcgdGhlIHN0cmluZy4gSWYgb21pdHRlZCwgYSBzaW5nbGUtZWxlbWVudCBhcnJheSBjb250YWluaW5nIHRoZSBlbnRpcmUgc3RyaW5nIGlzIHJldHVybmVkLlxyXG4gICAgKiBAcGFyYW0gbGltaXQgQSB2YWx1ZSB1c2VkIHRvIGxpbWl0IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgcmV0dXJuZWQgaW4gdGhlIGFycmF5LlxyXG4gICAgKi9cclxuICAgcHVibGljIHNwbGl0KHNlcGFyYXRvcjpzdHJpbmd8UmVnRXhwLCBsaW1pdD86bnVtYmVyKTpzdHJpbmdbXSB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHN1YnN0cmluZyBhdCB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIHdpdGhpbiBhIFN0cmluZyBvYmplY3QuXHJcbiAgICAqIEBwYXJhbSBzdGFydCBUaGUgemVyby1iYXNlZCBpbmRleCBudW1iZXIgaW5kaWNhdGluZyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdWJzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBlbmQgWmVyby1iYXNlZCBpbmRleCBudW1iZXIgaW5kaWNhdGluZyB0aGUgZW5kIG9mIHRoZSBzdWJzdHJpbmcuIFRoZSBzdWJzdHJpbmcgaW5jbHVkZXMgdGhlIGNoYXJhY3RlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLCB0aGUgY2hhcmFjdGVyIGluZGljYXRlZCBieSBlbmQuXHJcbiAgICAqIElmIGVuZCBpcyBvbWl0dGVkLCB0aGUgY2hhcmFjdGVycyBmcm9tIHN0YXJ0IHRocm91Z2ggdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgc3RyaW5nIGFyZSByZXR1cm5lZC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJzdHJpbmcoc3RhcnQ6bnVtYmVyLCBlbmQ/Om51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7IH1cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGFsbCB0aGUgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nIHRvIGxvd2VyY2FzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0xvd2VyQ2FzZSgpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9Mb3dlckNhc2UoKTsgfVxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYWxsIGFscGhhYmV0aWMgY2hhcmFjdGVycyB0byBsb3dlcmNhc2UsIHRha2luZyBpbnRvIGFjY291bnQgdGhlIGhvc3QgZW52aXJvbm1lbnQncyBjdXJyZW50IGxvY2FsZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0xvY2FsZUxvd2VyQ2FzZShsb2NhbGVzPzpzdHJpbmd8c3RyaW5nW10pOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9Mb2NhbGVMb3dlckNhc2UobG9jYWxlcyk7IH1cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGFsbCB0aGUgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nIHRvIHVwcGVyY2FzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1VwcGVyQ2FzZSgpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudG9VcHBlckNhc2UoKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyB3aGVyZSBhbGwgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGhhdmUgYmVlbiBjb252ZXJ0ZWQgdG8gdXBwZXJjYXNlLCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBob3N0IGVudmlyb25tZW50J3MgY3VycmVudCBsb2NhbGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlcz86c3RyaW5nfHN0cmluZ1tdKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvTG9jYWxlVXBwZXJDYXNlKGxvY2FsZXMpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZW1vdmVzIHRoZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZSBzcGFjZSBhbmQgbGluZSB0ZXJtaW5hdG9yIGNoYXJhY3RlcnMgZnJvbSBhIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmltKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50cmltKCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiBhIFN0cmluZyBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGxlbmd0aCgpOm51bWJlciB7IHJldHVybiB0aGlzLnZhbHVlPy5sZW5ndGggPz8gMCB9O1xyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgcHJpbWl0aXZlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIG92ZXJyaWRlIHZhbHVlT2YoKTpzdHJpbmcgeyByZXR1cm4gdGhpcy52YWx1ZSA/PyAnJzsgfVxyXG4gfVxyXG4iXX0=