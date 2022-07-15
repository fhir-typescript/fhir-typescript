/**
 * The way in which a person authenticated a composition.
 */
export declare const CompositionAttestationModeCodes: {
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content.
     */
    readonly Legal: "legal";
    /**
     * official: The organization authenticated the content as consistent with their policies and procedures.
     */
    readonly Official: "official";
    /**
     * personal: The person authenticated the content in their personal capacity.
     */
    readonly Personal: "personal";
    /**
     * professional: The person authenticated the content in their professional capacity.
     */
    readonly Professional: "professional";
};
/**
 * The way in which a person authenticated a composition.
 */
export declare type CompositionAttestationModeCodeType = typeof CompositionAttestationModeCodes[keyof typeof CompositionAttestationModeCodes];
//# sourceMappingURL=CompositionAttestationModeCodes.d.ts.map