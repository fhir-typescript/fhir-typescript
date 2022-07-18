import * as fhir from '../fhirJson.js';
/**
 * A reference to a code defined by a terminology system.
 */
export interface Coding extends fhir.FhirElement {
    /**
     * Need to be unambiguous about the source of the definition of the symbol.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.system
     */
    _system?: fhir.FhirElement;
    /**
     * The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.version
     */
    _version?: fhir.FhirElement;
    /**
     * Need to refer to a particular code in the system.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.code
     */
    _code?: fhir.FhirElement;
    /**
     * Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.display
     */
    _display?: fhir.FhirElement;
    /**
     * This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.
     */
    userSelected?: boolean | undefined;
    /**
     * Extended properties for primitive element: Coding.userSelected
     */
    _userSelected?: fhir.FhirElement;
}
//# sourceMappingURL=Coding.d.ts.map