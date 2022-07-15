import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code that indicates whether an application accepts unknown elements or extensions when reading resources.
 */
export declare type UnknownContentCodingType = {
    /**
     * both: The application accepts unknown elements and extensions.
     */
    UnknownElementsAndExtensions: CodingArgs;
    /**
     * elements: The application accepts unknown elements, but not unknown extensions.
     */
    UnknownElements: CodingArgs;
    /**
     * extensions: The application accepts unknown extensions, but not unknown elements.
     */
    UnknownExtensions: CodingArgs;
    /**
     * no: The application does not accept either unknown elements or extensions.
     */
    NeitherElementsOrExtensions: CodingArgs;
};
/**
 * A code that indicates whether an application accepts unknown elements or extensions when reading resources.
 */
export declare const UnknownContentCodings: UnknownContentCodingType;
//# sourceMappingURL=UnknownContentCodings.d.ts.map