import * as fhir from '../fhir.js';
export interface FhirPrimitiveArgs {
    /**
     * Value of the primitive - constrained by decendant classes.
     */
    value?: any | null | undefined;
    /**
      * Unique id for inter-element referencing
      */
    id?: string | undefined;
    /**
      * Additional content defined by implementations
      */
    extension?: (fhir.Extension | null)[] | undefined;
}
export declare class FhirPrimitive extends fhir.FhirBase {
    static readonly _fts_isPrimitive: boolean;
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    static readonly _fts_jsonType: string;
    /**
     * Value of the primitive - constrained by decendant classes.
     */
    value?: boolean | number | bigint | string | null | undefined;
    /**
      * Unique id for inter-element referencing
      */
    id?: string | undefined;
    /**
      * Additional content defined by implementations
      */
    extension: fhir.Extension[];
    /**
     * Constructor for FHIR primitive type elements
     * @param value
     * @param id
     * @param extension
     * @param options
     */
    constructor(source?: Partial<FhirPrimitiveArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
    /**
     * Fluent-style function to add extended primitive properties
     * @param source
     */
    addExtendedProperties(source?: fhir.FhirElementArgs): fhir.FhirPrimitive;
    /**
     * Fluent-style function to add extensions
     * @param ext
     * @returns
     */
    addExtension(ext: fhir.ExtensionArgs): fhir.FhirPrimitive;
    /**
     * Remove ALL instances of extensions with a matching URL, optionally recurse into extension.extension.
     * @param url URL of extensions to remove
     * @param searchNested If the removal should search for nested extensions
     */
    removeExtensions(url: fhir.FhirString | string, searchNested?: boolean): fhir.FhirPrimitive;
    /**
     * Find the first instance of an extension with a matching URL, optionally recurse into extension.extension.
     * @param url URL to search for
     * @param searchNested If the search should nest into extensions
     * @returns The FHIR Extension if found, or undefined.
     */
    findExtension(url: fhir.FhirString | string, searchNested?: boolean): fhir.Extension | undefined;
    /**
     * Find all instances of an extension with a matching URL, optionally recurse into extension.extension.
     * @param url URL to search for
     * @param searchNested If the search should nest into extensions
     * @returns A new array of FHIR Extensions, with just the desired extensions
     */
    filterExtensions(url: fhir.FhirString | string, searchNested?: boolean): fhir.Extension[];
    /**
     * Internal recursive search function
     * @param url
     * @param exts
     * @returns A new array (flat) of matching extensions
     */
    private static recurseForExtension;
}
//# sourceMappingURL=FhirPrimitive.d.ts.map