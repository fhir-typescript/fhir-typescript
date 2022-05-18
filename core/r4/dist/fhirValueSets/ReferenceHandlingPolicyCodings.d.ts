import { Coding } from '../fhir/Coding.js';
/**
 * A set of flags that defines how references are supported.
 */
export declare const ReferenceHandlingPolicyCodings: {
    /**
     * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
     */
    readonly ReferenceIntegrityEnforced: Coding;
    /**
     * literal: The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
     */
    readonly LiteralReferences: Coding;
    /**
     * local: The server does not support references that point to other servers.
     */
    readonly LocalReferencesOnly: Coding;
    /**
     * logical: The server allows logical references (i.e. using Reference.identifier).
     */
    readonly LogicalReferences: Coding;
    /**
     * resolves: The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
     */
    readonly ResolvesReferences: Coding;
};
/**
 * A set of flags that defines how references are supported.
 */
export declare type ReferenceHandlingPolicyCodingType = typeof ReferenceHandlingPolicyCodings;
//# sourceMappingURL=ReferenceHandlingPolicyCodings.d.ts.map