import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 *
 * *Discussion:* This attribute is used in orders to indicate the ordered priority, and in event documentation it indicates the actual priority used to perform the act. In definition mood it indicates the available priorities.
 */
export declare type V3ActPriorityCodingType = {
    /**
     * Code: A
     */
    A: CodingArgs;
    /**
     * Code: CR
     */
    CR: CodingArgs;
    /**
     * Code: CS
     */
    CallbackForScheduling: CodingArgs;
    /**
     * Code: CSP
     */
    CallbackPlacerForScheduling: CodingArgs;
    /**
     * Code: CSR
     */
    ContactRecipientForScheduling: CodingArgs;
    /**
     * Code: EL
     */
    EL: CodingArgs;
    /**
     * Code: EM
     */
    EM: CodingArgs;
    /**
     * Code: P
     */
    P: CodingArgs;
    /**
     * Code: PRN
     */
    PRN: CodingArgs;
    /**
     * Code: R
     */
    R: CodingArgs;
    /**
     * Code: RR
     */
    RR: CodingArgs;
    /**
     * Code: S
     */
    S: CodingArgs;
    /**
     * Code: T
     */
    T: CodingArgs;
    /**
     * Code: UD
     */
    UD: CodingArgs;
    /**
     * Code: UR
     */
    UR: CodingArgs;
};
/**
 * A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 *
 * *Discussion:* This attribute is used in orders to indicate the ordered priority, and in event documentation it indicates the actual priority used to perform the act. In definition mood it indicates the available priorities.
 */
export declare const V3ActPriorityCodings: V3ActPriorityCodingType;
//# sourceMappingURL=V3ActPriorityCodings.d.ts.map