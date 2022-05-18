/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * A set of flags that defines how references are supported.
 */
var ReferenceHandlingPolicyCodings = {
    /**
     * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
     */
    ReferenceIntegrityEnforced: new Coding({
        display: "Reference Integrity Enforced",
        code: "enforced",
        system: "http://hl7.org/fhir/reference-handling-policy",
    }),
    /**
     * literal: The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
     */
    LiteralReferences: new Coding({
        display: "Literal References",
        code: "literal",
        system: "http://hl7.org/fhir/reference-handling-policy",
    }),
    /**
     * local: The server does not support references that point to other servers.
     */
    LocalReferencesOnly: new Coding({
        display: "Local References Only",
        code: "local",
        system: "http://hl7.org/fhir/reference-handling-policy",
    }),
    /**
     * logical: The server allows logical references (i.e. using Reference.identifier).
     */
    LogicalReferences: new Coding({
        display: "Logical References",
        code: "logical",
        system: "http://hl7.org/fhir/reference-handling-policy",
    }),
    /**
     * resolves: The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
     */
    ResolvesReferences: new Coding({
        display: "Resolves References",
        code: "resolves",
        system: "http://hl7.org/fhir/reference-handling-policy",
    }),
};

export { ReferenceHandlingPolicyCodings };
//# sourceMappingURL=ReferenceHandlingPolicyCodings.js.map