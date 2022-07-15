import { CodingArgs } from '../fhir/Coding.js';
/**
 * Use of contact point
 */
export declare type ContactPointUseCodingType = {
    /**
     * home: A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
     */
    Home: CodingArgs;
    /**
     * mobile: A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
     */
    Mobile: CodingArgs;
    /**
     * old: This contact point is no longer in use (or was never correct, but retained for records).
     */
    Old: CodingArgs;
    /**
     * temp: A temporary contact point. The period can provide more detailed information.
     */
    Temp: CodingArgs;
    /**
     * work: An office contact point. First choice for business related contacts during business hours.
     */
    Work: CodingArgs;
};
/**
 * Use of contact point
 */
export declare const ContactPointUseCodings: ContactPointUseCodingType;
//# sourceMappingURL=ContactPointUseCodings.d.ts.map