import * as fhir from '../fhir.js';
/**
 * Valid arguments for the FhirElement type.
 */
export interface FhirElementArgs extends fhir.FhirBaseArgs {
    /**
     * unique id for the element within a resource (for internal references).
     */
    id?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: Element.id
     */
    _id?: fhir.FhirElementArgs;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: fhir.ExtensionArgs[] | undefined;
    /**
     * JSON Serialization Comments - not an actual element
     */
    fhir_comments?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Element.fhir_comments
     */
    _fhir_comments?: (fhir.FhirElementArgs | null)[];
}
/**
 * Base definition for all elements in a resource.
 */
export declare class FhirElement extends fhir.FhirBase {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * unique id for the element within a resource (for internal references).
     */
    id?: fhir.FhirId | undefined;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension: fhir.Extension[];
    /**
     * JSON Serialization Comments - not an actual element
     */
    fhir_comments: fhir.FhirString[];
    /**
     * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<FhirElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
    /**
     * Fluent-style function to add extensions
     * @param ext
     * @returns
     */
    addExtension(ext: fhir.ExtensionArgs): fhir.FhirElement;
    /**
     * Remove ALL instances of extensions with a matching URL, optionally recurse into extension.extension.
     * @param url URL of extensions to remove
     * @param searchNested If the removal should search for nested extensions
     */
    removeExtensions(url: fhir.FhirString | string, searchNested?: boolean): fhir.FhirElement;
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
//# sourceMappingURL=FhirElement.d.ts.map