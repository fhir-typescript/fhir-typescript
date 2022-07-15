/**
 * Whether the application produces or consumes documents.
 */
export declare const DocumentModeCodes: {
    /**
     * consumer: The application consumes documents of the specified type.
     */
    readonly Consumer: "consumer";
    /**
     * producer: The application produces documents of the specified type.
     */
    readonly Producer: "producer";
};
/**
 * Whether the application produces or consumes documents.
 */
export declare type DocumentModeCodeType = typeof DocumentModeCodes[keyof typeof DocumentModeCodes];
//# sourceMappingURL=DocumentModeCodes.d.ts.map