/**
 * This value set defines the set of codes that can be used to indicate the meaning/use of a reference range.
 */
export declare const ObservationInterpretationCodes: {
    /**
     * Code: &lt;
     */
    readonly OffScaleLow: "<";
    /**
     * Code: &gt;
     */
    readonly OffScaleHigh: ">";
    /**
     * Code: A
     */
    readonly Abnormal: "A";
    /**
     * Code: AA
     */
    readonly CriticallyAbnormal: "AA";
    /**
     * Code: AC
     */
    readonly AntiComplementarySubstancesPresent: "AC";
    /**
     * Code: B
     */
    readonly Better: "B";
    /**
     * Code: D
     */
    readonly SignificantChangeDown: "D";
    /**
     * Code: DET
     */
    readonly Detected: "DET";
    /**
     * Code: H
     */
    readonly High: "H";
    /**
     * Code: HH
     */
    readonly CriticallyHigh: "HH";
    /**
     * Code: HM
     */
    readonly HoldForMedicalReview: "HM";
    /**
     * Code: HU
     */
    readonly VeryHigh: "HU";
    /**
     * Code: I
     */
    readonly Intermediate: "I";
    /**
     * Code: IE
     */
    readonly InsufficientEvidence: "IE";
    /**
     * Code: IND
     */
    readonly Indeterminate: "IND";
    /**
     * Code: L
     */
    readonly Low: "L";
    /**
     * Code: LL
     */
    readonly CriticallyLow: "LL";
    /**
     * Code: LU
     */
    readonly VeryLow: "LU";
    /**
     * Code: MS
     */
    readonly ModeratelySusceptibleIndicatesForMicrobiologySusceptibilitiesOnly: "MS";
    /**
     * Code: N
     */
    readonly Normal: "N";
    /**
     * Code: ND
     */
    readonly NotDetected: "ND";
    /**
     * Code: NEG
     */
    readonly Negative: "NEG";
    /**
     * Code: NR
     */
    readonly NonReactive: "NR";
    /**
     * Code: NS
     */
    readonly NonSusceptible: "NS";
    /**
     * Code: null
     */
    readonly NoRangeDefinedOrNormalRangesDonQuoteTApply: "null";
    /**
     * Code: OBX
     */
    readonly InterpretationQualifiersInSeparateOBXSegments: "OBX";
    /**
     * Code: POS
     */
    readonly Positive: "POS";
    /**
     * Code: QCF
     */
    readonly QualityControlFailure: "QCF";
    /**
     * Code: R
     */
    readonly Resistant: "R";
    /**
     * Code: RR
     */
    readonly Reactive: "RR";
    /**
     * Code: S
     */
    readonly Susceptible: "S";
    /**
     * Code: SDD
     */
    readonly SusceptibleDoseDependent: "SDD";
    /**
     * Code: SYN-R
     */
    readonly SynergyResistant: "SYN-R";
    /**
     * Code: SYN-S
     */
    readonly SynergySusceptible: "SYN-S";
    /**
     * Code: TOX
     */
    readonly CytotoxicSubstancePresent: "TOX";
    /**
     * Code: U
     */
    readonly SignificantChangeUp: "U";
    /**
     * Code: VS
     */
    readonly VerySusceptibleIndicatesForMicrobiologySusceptibilitiesOnly: "VS";
    /**
     * Code: W
     */
    readonly Worse: "W";
    /**
     * Code: WR
     */
    readonly WeaklyReactive: "WR";
};
/**
 * This value set defines the set of codes that can be used to indicate the meaning/use of a reference range.
 */
export declare type ObservationInterpretationCodeType = typeof ObservationInterpretationCodes[keyof typeof ObservationInterpretationCodes];
//# sourceMappingURL=ObservationInterpretationCodes.d.ts.map