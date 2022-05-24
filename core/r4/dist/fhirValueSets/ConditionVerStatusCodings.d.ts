import { CodingArgs } from '../fhir/Coding.js';
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare type ConditionVerStatusCodingType = {
    /**
     * confirmed: There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Confirmed: CodingArgs;
    /**
     * differential: One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    Differential: CodingArgs;
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: CodingArgs;
    /**
     * provisional: This is a tentative diagnosis - still a candidate that is under consideration.
     */
    Provisional: CodingArgs;
    /**
     * refuted: This condition has been ruled out by diagnostic and clinical evidence.
     */
    Refuted: CodingArgs;
    /**
     * unconfirmed: There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Unconfirmed: CodingArgs;
};
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare const ConditionVerStatusCodings: ConditionVerStatusCodingType;
//# sourceMappingURL=ConditionVerStatusCodings.d.ts.map