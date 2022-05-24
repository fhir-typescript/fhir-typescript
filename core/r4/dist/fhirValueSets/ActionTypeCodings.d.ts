import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of action to be performed.
 */
export declare type ActionTypeCodingType = {
    /**
     * create: The action is to create a new resource.
     */
    Create: CodingArgs;
    /**
     * fire-event: The action is to fire a specific event.
     */
    FireEvent: CodingArgs;
    /**
     * remove: The action is to remove an existing resource.
     */
    Remove: CodingArgs;
    /**
     * update: The action is to update an existing resource.
     */
    Update: CodingArgs;
};
/**
 * The type of action to be performed.
 */
export declare const ActionTypeCodings: ActionTypeCodingType;
//# sourceMappingURL=ActionTypeCodings.d.ts.map