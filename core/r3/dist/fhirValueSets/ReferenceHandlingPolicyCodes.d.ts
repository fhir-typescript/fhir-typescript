/**
 * A set of flags that defines how references are supported.
 */
export declare const ReferenceHandlingPolicyCodes: {
    /**
     * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems
     */
    readonly ReferenceIntegrityEnforced: "enforced";
    /**
     * literal: The server supports and populates Literal references where they are known (this code does not guarantee that all references are literal; see 'enforced')
     */
    readonly LiteralReferences: "literal";
    /**
     * local: The server does not support references that point to other servers
     */
    readonly LocalReferencesOnly: "local";
    /**
     * logical: The server allows logical references
     */
    readonly LogicalReferences: "logical";
    /**
     * resolves: The server will attempt to resolve logical references to literal references (if resolution fails, the server may still accept resources; see logical)
     */
    readonly ResolvesReferences: "resolves";
};
/**
 * A set of flags that defines how references are supported.
 */
export declare type ReferenceHandlingPolicyCodeType = typeof ReferenceHandlingPolicyCodes[keyof typeof ReferenceHandlingPolicyCodes];
//# sourceMappingURL=ReferenceHandlingPolicyCodes.d.ts.map