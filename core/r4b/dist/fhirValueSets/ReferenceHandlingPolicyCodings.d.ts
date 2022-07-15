import { CodingArgs } from '../fhir/Coding.js';
/**
 * A set of flags that defines how references are supported.
 */
export declare type ReferenceHandlingPolicyCodingType = {
    /**
     * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
     */
    ReferenceIntegrityEnforced: CodingArgs;
    /**
     * literal: The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
     */
    LiteralReferences: CodingArgs;
    /**
     * local: The server does not support references that point to other servers.
     */
    LocalReferencesOnly: CodingArgs;
    /**
     * logical: The server allows logical references (i.e. using Reference.identifier).
     */
    LogicalReferences: CodingArgs;
    /**
     * resolves: The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
     */
    ResolvesReferences: CodingArgs;
};
/**
 * A set of flags that defines how references are supported.
 */
export declare const ReferenceHandlingPolicyCodings: ReferenceHandlingPolicyCodingType;
//# sourceMappingURL=ReferenceHandlingPolicyCodings.d.ts.map