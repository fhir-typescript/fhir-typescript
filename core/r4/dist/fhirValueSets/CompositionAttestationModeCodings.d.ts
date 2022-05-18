import { Coding } from '../fhir/Coding.js';
/**
 * The way in which a person authenticated a composition.
 */
export declare const CompositionAttestationModeCodings: {
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content.
     */
    readonly Legal: Coding;
    /**
     * official: The organization authenticated the content as consistent with their policies and procedures.
     */
    readonly Official: Coding;
    /**
     * personal: The person authenticated the content in their personal capacity.
     */
    readonly Personal: Coding;
    /**
     * professional: The person authenticated the content in their professional capacity.
     */
    readonly Professional: Coding;
};
/**
 * The way in which a person authenticated a composition.
 */
export declare type CompositionAttestationModeCodingType = typeof CompositionAttestationModeCodings;
//# sourceMappingURL=CompositionAttestationModeCodings.d.ts.map