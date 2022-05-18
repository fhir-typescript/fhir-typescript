/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export declare const ExposureStateCodes: {
    /**
     * exposure: used when the results by exposure is describing the results for the primary exposure of interest.
     */
    readonly Exposure: "exposure";
    /**
     * exposure-alternative: used when the results by exposure is describing the results for the alternative exposure state, control state or comparator state.
     */
    readonly ExposureAlternative: "exposure-alternative";
};
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export declare type ExposureStateCodeType = typeof ExposureStateCodes[keyof typeof ExposureStateCodes];
//# sourceMappingURL=ExposureStateCodes.d.ts.map