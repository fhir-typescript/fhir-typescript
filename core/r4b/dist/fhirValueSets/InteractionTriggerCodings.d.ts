import { CodingArgs } from '../fhir/Coding.js';
/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export declare type InteractionTriggerCodingType = {
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: CodingArgs;
    /**
     * delete: Delete a resource.
     */
    Delete: CodingArgs;
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    Update: CodingArgs;
};
/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export declare const InteractionTriggerCodings: InteractionTriggerCodingType;
//# sourceMappingURL=InteractionTriggerCodings.d.ts.map