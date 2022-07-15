import { CodingArgs } from '../fhir/Coding.js';
/**
 * MedicationRequest Course of Therapy Codes
 */
export declare type MedicationrequestCourseOfTherapyCodingType = {
    /**
     * acute: A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
     */
    ShortCourseAcuteTherapy: CodingArgs;
    /**
     * continuous: A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    ContinuousLongTermTherapy: CodingArgs;
    /**
     * seasonal: A medication which is expected to be used on a part time basis at certain times of the year
     */
    Seasonal: CodingArgs;
};
/**
 * MedicationRequest Course of Therapy Codes
 */
export declare const MedicationrequestCourseOfTherapyCodings: MedicationrequestCourseOfTherapyCodingType;
//# sourceMappingURL=MedicationrequestCourseOfTherapyCodings.d.ts.map