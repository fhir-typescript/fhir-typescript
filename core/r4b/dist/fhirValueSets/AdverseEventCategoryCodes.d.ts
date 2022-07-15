/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export declare const AdverseEventCategoryCodes: {
    /**
     * expired-drug: The adverse event pertains to an expired drug.
     */
    readonly ExpiredDrug: "expired-drug";
    /**
     * incorrect-prescribing-information: The adverse event pertains to incorrect perscribing information.
     */
    readonly IncorrectPrescribingInformation: "incorrect-prescribing-information";
    /**
     * medical-device-use-error: The adverse event pertains to a medical device use error.
     */
    readonly MedicalDeviceUseError: "medical-device-use-error";
    /**
     * problem-different-manufacturer: The adverse event pertains to a problem with a different manufacturer of the same medication.
     */
    readonly ProblemWithDifferentManufacturerOfSameMedicine: "problem-different-manufacturer";
    /**
     * product-problem: The adverse event pertains to a product problem.
     */
    readonly ProductProblem: "product-problem";
    /**
     * product-quality: The adverse event pertains to product quality.
     */
    readonly ProductQuality: "product-quality";
    /**
     * product-use-error: The adverse event pertains to a product use error.
     */
    readonly ProductUseError: "product-use-error";
    /**
     * unsafe-physical-environment: The adverse event pertains to an unsafe physical environment.
     */
    readonly UnsafePhysicalEnvironment: "unsafe-physical-environment";
    /**
     * wrong-dose: The adverse event pertains to a wrong dose.
     */
    readonly WrongDose: "wrong-dose";
    /**
     * wrong-duration: The adverse event pertains to a wrong duration.
     */
    readonly WrongDuration: "wrong-duration";
    /**
     * wrong-rate: The adverse event pertains to a wrong rate.
     */
    readonly WrongRate: "wrong-rate";
    /**
     * wrong-route-of-administration: The adverse event pertains to a wrong route of administration.
     */
    readonly WrongRouteOfAdministration: "wrong-route-of-administration";
    /**
     * wrong-technique: The adverse event pertains to a wrong technique.
     */
    readonly WrongTechnique: "wrong-technique";
    /**
     * wrong-time: The adverse event pertains to a wrong time.
     */
    readonly WrongTime: "wrong-time";
};
/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export declare type AdverseEventCategoryCodeType = typeof AdverseEventCategoryCodes[keyof typeof AdverseEventCategoryCodes];
//# sourceMappingURL=AdverseEventCategoryCodes.d.ts.map