import { Coding } from '../fhir/Coding.js';
/**
 * Use of contact point.
 */
export declare const ContactPointUseCodings: {
    /**
     * home: A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
     */
    readonly Home: Coding;
    /**
     * mobile: A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
     */
    readonly Mobile: Coding;
    /**
     * old: This contact point is no longer in use (or was never correct, but retained for records).
     */
    readonly Old: Coding;
    /**
     * temp: A temporary contact point. The period can provide more detailed information.
     */
    readonly Temp: Coding;
    /**
     * work: An office contact point. First choice for business related contacts during business hours.
     */
    readonly Work: Coding;
};
/**
 * Use of contact point.
 */
export declare type ContactPointUseCodingType = typeof ContactPointUseCodings;
//# sourceMappingURL=ContactPointUseCodings.d.ts.map