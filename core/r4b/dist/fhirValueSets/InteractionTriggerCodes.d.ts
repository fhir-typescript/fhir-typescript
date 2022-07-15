/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export declare const InteractionTriggerCodes: {
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: "create";
    /**
     * delete: Delete a resource.
     */
    readonly Delete: "delete";
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    readonly Update: "update";
};
/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export declare type InteractionTriggerCodeType = typeof InteractionTriggerCodes[keyof typeof InteractionTriggerCodes];
//# sourceMappingURL=InteractionTriggerCodes.d.ts.map