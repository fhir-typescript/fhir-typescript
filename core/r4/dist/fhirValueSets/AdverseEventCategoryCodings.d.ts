import { CodingArgs } from '../fhir/Coding.js';
/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export declare type AdverseEventCategoryCodingType = {
    /**
     * expired-drug: The adverse event pertains to an expired drug.
     */
    ExpiredDrug: CodingArgs;
    /**
     * incorrect-prescribing-information: The adverse event pertains to incorrect perscribing information.
     */
    IncorrectPrescribingInformation: CodingArgs;
    /**
     * medical-device-use-error: The adverse event pertains to a medical device use error.
     */
    MedicalDeviceUseError: CodingArgs;
    /**
     * problem-different-manufacturer: The adverse event pertains to a problem with a different manufacturer of the same medication.
     */
    ProblemWithDifferentManufacturerOfSameMedicine: CodingArgs;
    /**
     * product-problem: The adverse event pertains to a product problem.
     */
    ProductProblem: CodingArgs;
    /**
     * product-quality: The adverse event pertains to product quality.
     */
    ProductQuality: CodingArgs;
    /**
     * product-use-error: The adverse event pertains to a product use error.
     */
    ProductUseError: CodingArgs;
    /**
     * unsafe-physical-environment: The adverse event pertains to an unsafe physical environment.
     */
    UnsafePhysicalEnvironment: CodingArgs;
    /**
     * wrong-dose: The adverse event pertains to a wrong dose.
     */
    WrongDose: CodingArgs;
    /**
     * wrong-duration: The adverse event pertains to a wrong duration.
     */
    WrongDuration: CodingArgs;
    /**
     * wrong-rate: The adverse event pertains to a wrong rate.
     */
    WrongRate: CodingArgs;
    /**
     * wrong-route-of-administration: The adverse event pertains to a wrong route of administration.
     */
    WrongRouteOfAdministration: CodingArgs;
    /**
     * wrong-technique: The adverse event pertains to a wrong technique.
     */
    WrongTechnique: CodingArgs;
    /**
     * wrong-time: The adverse event pertains to a wrong time.
     */
    WrongTime: CodingArgs;
};
/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export declare const AdverseEventCategoryCodings: AdverseEventCategoryCodingType;
//# sourceMappingURL=AdverseEventCategoryCodings.d.ts.map