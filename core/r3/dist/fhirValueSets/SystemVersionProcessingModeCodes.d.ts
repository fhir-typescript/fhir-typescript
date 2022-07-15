/**
 * How to manage the intersection between a fixed version in a value set, and a fixed version of the system in the expansion profile
 */
export declare const SystemVersionProcessingModeCodes: {
    /**
     * check: Use this version of the code system. If a value set specifies a different version, the expansion operation should fail
     */
    readonly CheckValueSetVersion: "check";
    /**
     * default: Use this version of the code system if a value set doesn't specify a version
     */
    readonly DefaultVersion: "default";
    /**
     * override: Use this version of the code system irrespective of which version is specified by a value set. Note that this has obvious safety issues, in that it may result in a value set expansion giving a different list of codes that is both wrong and unsafe, and implementers should only use this capability reluctantly. It primarily exists to deal with situations where specifications have fallen into decay as time passes. If a  version is override, the version used SHALL explicitly be represented in the expansion parameters
     */
    readonly OverrideValueSetVersion: "override";
};
/**
 * How to manage the intersection between a fixed version in a value set, and a fixed version of the system in the expansion profile
 */
export declare type SystemVersionProcessingModeCodeType = typeof SystemVersionProcessingModeCodes[keyof typeof SystemVersionProcessingModeCodes];
//# sourceMappingURL=SystemVersionProcessingModeCodes.d.ts.map