import { CodingArgs } from '../fhir/Coding.js';
/**
 * Value Set of codes that specify the state of a bed in an inpatient setting, and is used to determine if a patient may be assigned to it or not.
 */
export declare type V20116CodingType = {
    /**
     * Code: C
     */
    Closed: CodingArgs;
    /**
     * Code: H
     */
    Housekeeping: CodingArgs;
    /**
     * Code: I
     */
    Isolated: CodingArgs;
    /**
     * Code: K
     */
    Contaminated: CodingArgs;
    /**
     * Code: O
     */
    Occupied: CodingArgs;
    /**
     * Code: U
     */
    Unoccupied: CodingArgs;
};
/**
 * Value Set of codes that specify the state of a bed in an inpatient setting, and is used to determine if a patient may be assigned to it or not.
 */
export declare const V20116Codings: V20116CodingType;
//# sourceMappingURL=V20116Codings.d.ts.map