import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes indicating the degree of authority/intentionality associated with a request.
 */
export declare type RequestIntentCodingType = {
    /**
     * directive: The request represents a legally binding instruction authored by a Patient or RelatedPerson.
     */
    Directive: CodingArgs;
    /**
     * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    FillerOrder: CodingArgs;
    /**
     * instance-order: An order created in fulfillment of a broader order that represents the authorization for a single activity occurrence.  E.g. The administration of a single dose of a drug.
     */
    InstanceOrder: CodingArgs;
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    Option: CodingArgs;
    /**
     * order: The request represents a request/demand and authorization for action by a Practitioner.
     */
    Order: CodingArgs;
    /**
     * original-order: The request represents an original authorization for action.
     */
    OriginalOrder: CodingArgs;
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    Plan: CodingArgs;
    /**
     * proposal: The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    Proposal: CodingArgs;
    /**
     * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization.
     */
    ReflexOrder: CodingArgs;
};
/**
 * Codes indicating the degree of authority/intentionality associated with a request.
 */
export declare const RequestIntentCodings: RequestIntentCodingType;
//# sourceMappingURL=RequestIntentCodings.d.ts.map