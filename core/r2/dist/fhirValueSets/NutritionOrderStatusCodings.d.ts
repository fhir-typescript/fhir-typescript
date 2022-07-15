import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export declare type NutritionOrderStatusCodingType = {
    /**
     * active: The request is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    Active: CodingArgs;
    /**
     * cancelled: The request has been withdrawn and is no longer actionable.
     */
    Cancelled: CodingArgs;
    /**
     * completed: All actions that are implied by the order have occurred and no continuation is planned (this will rarely be made explicit).
     */
    Completed: CodingArgs;
    /**
     * draft: The request is in preliminary form prior to being sent.
     */
    Draft: CodingArgs;
    /**
     * on-hold: Actions implied by the request have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: CodingArgs;
    /**
     * planned: The request has been planned.
     */
    Planned: CodingArgs;
    /**
     * proposed: The request has been proposed.
     */
    Proposed: CodingArgs;
    /**
     * requested: The request has been placed.
     */
    Requested: CodingArgs;
};
/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export declare const NutritionOrderStatusCodings: NutritionOrderStatusCodingType;
//# sourceMappingURL=NutritionOrderStatusCodings.d.ts.map