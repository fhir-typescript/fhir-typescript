import { Coding } from '../fhir/Coding.js';
/**
 * SHALL applications comply with this constraint?
 */
export declare const ConstraintSeverityCodings: {
    /**
     * error: If the constraint is violated, the resource is not conformant.
     */
    readonly Error: Coding;
    /**
     * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
     */
    readonly Warning: Coding;
};
/**
 * SHALL applications comply with this constraint?
 */
export declare type ConstraintSeverityCodingType = typeof ConstraintSeverityCodings;
//# sourceMappingURL=ConstraintSeverityCodings.d.ts.map