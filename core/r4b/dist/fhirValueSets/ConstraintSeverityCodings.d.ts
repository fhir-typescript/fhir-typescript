import { CodingArgs } from '../fhir/Coding.js';
/**
 * SHALL applications comply with this constraint?
 */
export declare type ConstraintSeverityCodingType = {
    /**
     * error: If the constraint is violated, the resource is not conformant.
     */
    Error: CodingArgs;
    /**
     * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
     */
    Warning: CodingArgs;
};
/**
 * SHALL applications comply with this constraint?
 */
export declare const ConstraintSeverityCodings: ConstraintSeverityCodingType;
//# sourceMappingURL=ConstraintSeverityCodings.d.ts.map