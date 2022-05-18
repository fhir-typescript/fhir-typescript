import { Coding } from '../fhir/Coding.js';
/**
 * Codes for the main intent of the study.
 */
export declare const ResearchStudyPrimPurpTypeCodings: {
    /**
     * basic-science: One or more interventions for examining the basic mechanism of action (for example, physiology or biomechanics of an intervention).
     */
    readonly BasicScience: Coding;
    /**
     * device-feasibility: An intervention of a device product is being evaluated to determine the feasibility of the product or to test a prototype device and not health outcomes. Such studies are conducted to confirm the design and operating specifications of a device before beginning a full clinical trial.
     */
    readonly DeviceFeasibility: Coding;
    /**
     * diagnostic: One or more interventions are being evaluated for identifying a disease or health condition.
     */
    readonly Diagnostic: Coding;
    /**
     * health-services-research: One or more interventions for evaluating the delivery, processes, management, organization, or financing of healthcare.
     */
    readonly HealthServicesResearch: Coding;
    /**
     * prevention: One or more interventions are being assessed for preventing the development of a specific disease or health condition.
     */
    readonly Prevention: Coding;
    /**
     * screening: One or more interventions are assessed or examined for identifying a condition, or risk factors for a condition, in people who are not yet known to have the condition or risk factor.
     */
    readonly Screening: Coding;
    /**
     * supportive-care: One or more interventions are evaluated for maximizing comfort, minimizing side effects, or mitigating against a decline in the participant's health or function.
     */
    readonly SupportiveCare: Coding;
    /**
     * treatment: One or more interventions are being evaluated for treating a disease, syndrome, or condition.
     */
    readonly Treatment: Coding;
};
/**
 * Codes for the main intent of the study.
 */
export declare type ResearchStudyPrimPurpTypeCodingType = typeof ResearchStudyPrimPurpTypeCodings;
//# sourceMappingURL=ResearchStudyPrimPurpTypeCodings.d.ts.map