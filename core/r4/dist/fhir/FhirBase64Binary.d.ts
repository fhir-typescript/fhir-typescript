import * as fhir from '../fhir.js';
/**
 * A stream of bytes, base64 encoded
 */
export interface FhirBase64BinaryArgs extends fhir.FhirPrimitiveArgs {
    /**
     * A stream of bytes, base64 encoded
     */
    value?: FhirBase64Binary | string | undefined | null;
}
/**
 * A stream of bytes, base64 encoded
 */
export declare class FhirBase64Binary extends fhir.FhirPrimitive {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    static readonly _fts_jsonType: string;
    static readonly _fts_regex: RegExp;
    /**
     * A base64Binary value, represented as a JS string
     */
    value?: string | null | undefined;
    /**
       * Create a FhirBase64Binary
       * @param value A stream of bytes, base64 encoded
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirBase64BinaryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
    /**
     * Returns a string representation of a string.
     */
    toString(): string;
    /**
     * Returns the character at the specified index.
     * @param pos The zero-based index of the desired character.
     */
    charAt(pos: number): string;
    /**
     * Returns the Unicode value of the character at the specified location.
     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
     */
    charCodeAt(index: number): number;
    /**
     * Returns a string that contains the concatenation of two or more strings.
     * @param strings The strings to append to the end of the string.
     */
    concat(...strings: string[]): string;
    /**
     * Returns the position of the first occurrence of a substring.
     * @param searchString The substring to search for in the string
     * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
     */
    indexOf(searchString: string, position?: number): number;
    /**
     * Returns the last occurrence of a substring in the string.
     * @param searchString The substring to search for.
     * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
     */
    lastIndexOf(searchString: string, position?: number): number;
    /**
     * Determines whether two strings are equivalent in the current locale.
     * @param that String to compare to target string
     */
    localeCompare(that: string): number;
    /**
     * Matches a string with a regular expression, and returns an array containing the results of that search.
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.
     */
    match(regexp: string | RegExp): RegExpMatchArray | null;
    /**
     * Replaces text in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
     */
    replace(searchValue: string | RegExp, replaceValue: string): string;
    /**
     * Finds the first substring match in a regular expression search.
     * @param regexp The regular expression pattern and applicable flags.
     */
    search(regexp: string | RegExp): number;
    /**
     * Returns a section of a string.
     * @param start The index to the beginning of the specified portion of stringObj.
     * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
     * If this value is not specified, the substring continues to the end of stringObj.
     */
    slice(start?: number, end?: number): string;
    /**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     * @param limit A value used to limit the number of elements returned in the array.
     */
    split(separator: string | RegExp, limit?: number): string[];
    /**
     * Returns the substring at the specified location within a String object.
     * @param start The zero-based index number indicating the beginning of the substring.
     * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
     * If end is omitted, the characters from start through the end of the original string are returned.
     */
    substring(start: number, end?: number): string;
    /**
     * Converts all the alphabetic characters in a string to lowercase.
     */
    toLowerCase(): string;
    /**
     * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
     */
    toLocaleLowerCase(locales?: string | string[]): string;
    /**
     * Converts all the alphabetic characters in a string to uppercase.
     */
    toUpperCase(): string;
    /**
     * Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
     */
    toLocaleUpperCase(locales?: string | string[]): string;
    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    trim(): string;
    /**
     * Returns the length of a String object.
     */
    get length(): number;
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf(): string;
}
//# sourceMappingURL=FhirBase64Binary.d.ts.map