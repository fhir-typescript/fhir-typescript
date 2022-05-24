import { CodingArgs } from '../fhir/Coding.js';
/**
 * MedicationRequest Intent Codes
 */
export declare type MedicationrequestIntentCodingType = {
    /**
     * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    FillerOrder: CodingArgs;
    /**
     * instance-order: The request represents an instance for the particular order, for example a medication administration record.
     */
    InstanceOrder: CodingArgs;
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.
     */
    Option: CodingArgs;
    /**
     * order: The request represents a request/demand and authorization for action
     */
    Order: CodingArgs;
    /**
     * original-order: The request represents the original authorization for the medication request.
     */
    OriginalOrder: CodingArgs;
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    Plan: CodingArgs;
    /**
     * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
     */
    Proposal: CodingArgs;
    /**
     * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..
     */
    ReflexOrder: CodingArgs;
};
/**
 * MedicationRequest Intent Codes
 */
export declare const MedicationrequestIntentCodings: MedicationrequestIntentCodingType;
//# sourceMappingURL=MedicationrequestIntentCodings.d.ts.map