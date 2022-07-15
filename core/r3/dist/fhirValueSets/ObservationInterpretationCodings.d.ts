import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines the set of codes that can be used to indicate the meaning/use of a reference range.
 */
export declare type ObservationInterpretationCodingType = {
    /**
     * Code: &lt;
     */
    OffScaleLow: CodingArgs;
    /**
     * Code: &gt;
     */
    OffScaleHigh: CodingArgs;
    /**
     * Code: A
     */
    Abnormal: CodingArgs;
    /**
     * Code: AA
     */
    CriticallyAbnormal: CodingArgs;
    /**
     * Code: AC
     */
    AntiComplementarySubstancesPresent: CodingArgs;
    /**
     * Code: B
     */
    Better: CodingArgs;
    /**
     * Code: D
     */
    SignificantChangeDown: CodingArgs;
    /**
     * Code: DET
     */
    Detected: CodingArgs;
    /**
     * Code: H
     */
    High: CodingArgs;
    /**
     * Code: HH
     */
    CriticallyHigh: CodingArgs;
    /**
     * Code: HM
     */
    HoldForMedicalReview: CodingArgs;
    /**
     * Code: HU
     */
    VeryHigh: CodingArgs;
    /**
     * Code: I
     */
    Intermediate: CodingArgs;
    /**
     * Code: IE
     */
    InsufficientEvidence: CodingArgs;
    /**
     * Code: IND
     */
    Indeterminate: CodingArgs;
    /**
     * Code: L
     */
    Low: CodingArgs;
    /**
     * Code: LL
     */
    CriticallyLow: CodingArgs;
    /**
     * Code: LU
     */
    VeryLow: CodingArgs;
    /**
     * Code: MS
     */
    ModeratelySusceptibleIndicatesForMicrobiologySusceptibilitiesOnly: CodingArgs;
    /**
     * Code: N
     */
    Normal: CodingArgs;
    /**
     * Code: ND
     */
    NotDetected: CodingArgs;
    /**
     * Code: NEG
     */
    Negative: CodingArgs;
    /**
     * Code: NR
     */
    NonReactive: CodingArgs;
    /**
     * Code: NS
     */
    NonSusceptible: CodingArgs;
    /**
     * Code: null
     */
    NoRangeDefinedOrNormalRangesDonQuoteTApply: CodingArgs;
    /**
     * Code: OBX
     */
    InterpretationQualifiersInSeparateOBXSegments: CodingArgs;
    /**
     * Code: POS
     */
    Positive: CodingArgs;
    /**
     * Code: QCF
     */
    QualityControlFailure: CodingArgs;
    /**
     * Code: R
     */
    Resistant: CodingArgs;
    /**
     * Code: RR
     */
    Reactive: CodingArgs;
    /**
     * Code: S
     */
    Susceptible: CodingArgs;
    /**
     * Code: SDD
     */
    SusceptibleDoseDependent: CodingArgs;
    /**
     * Code: SYN-R
     */
    SynergyResistant: CodingArgs;
    /**
     * Code: SYN-S
     */
    SynergySusceptible: CodingArgs;
    /**
     * Code: TOX
     */
    CytotoxicSubstancePresent: CodingArgs;
    /**
     * Code: U
     */
    SignificantChangeUp: CodingArgs;
    /**
     * Code: VS
     */
    VerySusceptibleIndicatesForMicrobiologySusceptibilitiesOnly: CodingArgs;
    /**
     * Code: W
     */
    Worse: CodingArgs;
    /**
     * Code: WR
     */
    WeaklyReactive: CodingArgs;
};
/**
 * This value set defines the set of codes that can be used to indicate the meaning/use of a reference range.
 */
export declare const ObservationInterpretationCodings: ObservationInterpretationCodingType;
//# sourceMappingURL=ObservationInterpretationCodings.d.ts.map