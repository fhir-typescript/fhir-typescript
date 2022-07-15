import { CodingArgs } from '../fhir/Coding.js';
/**
 * A categorical assessment, providing a rough qualitative interpretation of the observation value,    such as “normal”/ “abnormal”,”low” / “high”, “better” / “worse”, “susceptible” / “resistant”, “expected”/ “not expected”.    The value set is intended to be for ANY use where coded representation of an interpretation is needed.
 *
 *    Notes:
 *
 *    This is being communicated in v2.x in OBX-8 (Observation Interpretation), in v3 in ObservationInterpretation (CWE) in R1 (Representative Realm) and in FHIR in    Observation.interpretation. Historically these values come from the laboratory domain, and these codes are extensively    used. The value set binding is extensible, so codes outside the value set that are needed for interpretation concepts    (i.e. particular meanings) that are not included in the value set can be used, and these new codes may also be added to    the value set and published in a future version.
 */
export declare type ObservationInterpretationCodingType = {
    /**
     * Code: _GeneticObservationInterpretation
     */
    GeneticObservationInterpretation: CodingArgs;
    /**
     * Code: _ObservationInterpretationChange
     */
    ObservationInterpretationChange: CodingArgs;
    /**
     * Code: _ObservationInterpretationExceptions
     */
    ObservationInterpretationExceptions: CodingArgs;
    /**
     * Code: _ObservationInterpretationNormality
     */
    ObservationInterpretationNormality: CodingArgs;
    /**
     * Code: _ObservationInterpretationSusceptibility
     */
    ObservationInterpretationSusceptibility: CodingArgs;
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
    CriticalAbnormal: CodingArgs;
    /**
     * Code: B
     */
    Better: CodingArgs;
    /**
     * Code: CAR
     */
    Carrier: CodingArgs;
    /**
     * Code: D
     */
    SignificantChangeDown: CodingArgs;
    /**
     * Code: DET
     */
    Detected: CodingArgs;
    /**
     * Code: E
     */
    Equivocal: CodingArgs;
    /**
     * Code: EX
     */
    OutsideThreshold: CodingArgs;
    /**
     * Code: EXP
     */
    Expected: CodingArgs;
    /**
     * Code: H
     */
    High: CodingArgs;
    /**
     * Code: HH
     */
    CriticalHigh: CodingArgs;
    /**
     * Code: HU
     */
    SignificantlyHigh: CodingArgs;
    /**
     * Code: HX
     */
    AboveHighThreshold: CodingArgs;
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
    CriticalLow: CodingArgs;
    /**
     * Code: LU
     */
    SignificantlyLow: CodingArgs;
    /**
     * Code: LX
     */
    BelowLowThreshold: CodingArgs;
    /**
     * Code: N
     */
    Normal: CodingArgs;
    /**
     * Code: NCL
     */
    NoCLSIDefinedBreakpoint: CodingArgs;
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
     * Code: ObservationInterpretationDetection
     */
    ObservationInterpretationDetection: CodingArgs;
    /**
     * Code: ObservationInterpretationExpectation
     */
    ObservationInterpretationExpectation: CodingArgs;
    /**
     * Code: POS
     */
    Positive: CodingArgs;
    /**
     * Code: R
     */
    Resistant: CodingArgs;
    /**
     * Code: ReactivityObservationInterpretation
     */
    ReactivityObservationInterpretation: CodingArgs;
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
     * Code: U
     */
    SignificantChangeUp: CodingArgs;
    /**
     * Code: UNE
     */
    Unexpected: CodingArgs;
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
 * A categorical assessment, providing a rough qualitative interpretation of the observation value,    such as “normal”/ “abnormal”,”low” / “high”, “better” / “worse”, “susceptible” / “resistant”, “expected”/ “not expected”.    The value set is intended to be for ANY use where coded representation of an interpretation is needed.
 *
 *    Notes:
 *
 *    This is being communicated in v2.x in OBX-8 (Observation Interpretation), in v3 in ObservationInterpretation (CWE) in R1 (Representative Realm) and in FHIR in    Observation.interpretation. Historically these values come from the laboratory domain, and these codes are extensively    used. The value set binding is extensible, so codes outside the value set that are needed for interpretation concepts    (i.e. particular meanings) that are not included in the value set can be used, and these new codes may also be added to    the value set and published in a future version.
 */
export declare const ObservationInterpretationCodings: ObservationInterpretationCodingType;
//# sourceMappingURL=ObservationInterpretationCodings.d.ts.map