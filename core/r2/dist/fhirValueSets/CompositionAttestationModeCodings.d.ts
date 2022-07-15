import { CodingArgs } from '../fhir/Coding.js';
/**
 * The way in which a person authenticated a composition.
 */
export declare type CompositionAttestationModeCodingType = {
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content.
     */
    Legal: CodingArgs;
    /**
     * official: The organization authenticated the content as consistent with their policies and procedures.
     */
    Official: CodingArgs;
    /**
     * personal: The person authenticated the content in their personal capacity.
     */
    Personal: CodingArgs;
    /**
     * professional: The person authenticated the content in their professional capacity.
     */
    Professional: CodingArgs;
};
/**
 * The way in which a person authenticated a composition.
 */
export declare const CompositionAttestationModeCodings: CompositionAttestationModeCodingType;
//# sourceMappingURL=CompositionAttestationModeCodings.d.ts.map