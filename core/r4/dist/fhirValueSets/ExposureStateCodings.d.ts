import { CodingArgs } from '../fhir/Coding.js';
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export declare type ExposureStateCodingType = {
    /**
     * exposure: used when the results by exposure is describing the results for the primary exposure of interest.
     */
    Exposure: CodingArgs;
    /**
     * exposure-alternative: used when the results by exposure is describing the results for the alternative exposure state, control state or comparator state.
     */
    ExposureAlternative: CodingArgs;
};
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export declare const ExposureStateCodings: ExposureStateCodingType;
//# sourceMappingURL=ExposureStateCodings.d.ts.map