/**
 * MedicationRequest Course of Therapy Codes
 */
export declare const MedicationrequestCourseOfTherapyCodes: {
    /**
     * acute: A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
     */
    readonly ShortCourseAcuteTherapy: "acute";
    /**
     * continuous: A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    readonly ContinuousLongTermTherapy: "continuous";
    /**
     * seasonal: A medication which is expected to be used on a part time basis at certain times of the year
     */
    readonly Seasonal: "seasonal";
};
/**
 * MedicationRequest Course of Therapy Codes
 */
export declare type MedicationrequestCourseOfTherapyCodeType = typeof MedicationrequestCourseOfTherapyCodes[keyof typeof MedicationrequestCourseOfTherapyCodes];
//# sourceMappingURL=MedicationrequestCourseOfTherapyCodes.d.ts.map