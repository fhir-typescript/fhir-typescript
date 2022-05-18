import { Coding } from '../fhir/Coding.js';
/**
 * Codes for high level media categories.
 */
export declare const MediaTypeCodings: {
    /**
     * audio: The media consists of a sound recording
     */
    readonly Audio: Coding;
    /**
     * image: The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
     */
    readonly Image: Coding;
    /**
     * video: The media consists of a series of frames that capture a moving image
     */
    readonly Video: Coding;
};
/**
 * Codes for high level media categories.
 */
export declare type MediaTypeCodingType = typeof MediaTypeCodings;
//# sourceMappingURL=MediaTypeCodings.d.ts.map