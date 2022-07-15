/**
 * A categorical assessment, providing a rough qualitative interpretation of the observation value,    such as “normal”/ “abnormal”,”low” / “high”, “better” / “worse”, “susceptible” / “resistant”, “expected”/ “not expected”.    The value set is intended to be for ANY use where coded representation of an interpretation is needed.
 *
 *    Notes:
 *
 *    This is being communicated in v2.x in OBX-8 (Observation Interpretation), in v3 in ObservationInterpretation (CWE) in R1 (Representative Realm) and in FHIR in    Observation.interpretation. Historically these values come from the laboratory domain, and these codes are extensively    used. The value set binding is extensible, so codes outside the value set that are needed for interpretation concepts    (i.e. particular meanings) that are not included in the value set can be used, and these new codes may also be added to    the value set and published in a future version.
 */
export declare const ObservationInterpretationCodes: {
    /**
     * Code: _GeneticObservationInterpretation
     */
    readonly GeneticObservationInterpretation: "_GeneticObservationInterpretation";
    /**
     * Code: _ObservationInterpretationChange
     */
    readonly ObservationInterpretationChange: "_ObservationInterpretationChange";
    /**
     * Code: _ObservationInterpretationExceptions
     */
    readonly ObservationInterpretationExceptions: "_ObservationInterpretationExceptions";
    /**
     * Code: _ObservationInterpretationNormality
     */
    readonly ObservationInterpretationNormality: "_ObservationInterpretationNormality";
    /**
     * Code: _ObservationInterpretationSusceptibility
     */
    readonly ObservationInterpretationSusceptibility: "_ObservationInterpretationSusceptibility";
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
    readonly CriticalAbnormal: "AA";
    /**
     * Code: B
     */
    readonly Better: "B";
    /**
     * Code: CAR
     */
    readonly Carrier: "CAR";
    /**
     * Code: D
     */
    readonly SignificantChangeDown: "D";
    /**
     * Code: DET
     */
    readonly Detected: "DET";
    /**
     * Code: E
     */
    readonly Equivocal: "E";
    /**
     * Code: EX
     */
    readonly OutsideThreshold: "EX";
    /**
     * Code: EXP
     */
    readonly Expected: "EXP";
    /**
     * Code: H
     */
    readonly High: "H";
    /**
     * Code: HH
     */
    readonly CriticalHigh: "HH";
    /**
     * Code: HU
     */
    readonly SignificantlyHigh: "HU";
    /**
     * Code: HX
     */
    readonly AboveHighThreshold: "HX";
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
    readonly CriticalLow: "LL";
    /**
     * Code: LU
     */
    readonly SignificantlyLow: "LU";
    /**
     * Code: LX
     */
    readonly BelowLowThreshold: "LX";
    /**
     * Code: N
     */
    readonly Normal: "N";
    /**
     * Code: NCL
     */
    readonly NoCLSIDefinedBreakpoint: "NCL";
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
     * Code: ObservationInterpretationDetection
     */
    readonly ObservationInterpretationDetection: "ObservationInterpretationDetection";
    /**
     * Code: ObservationInterpretationExpectation
     */
    readonly ObservationInterpretationExpectation: "ObservationInterpretationExpectation";
    /**
     * Code: POS
     */
    readonly Positive: "POS";
    /**
     * Code: R
     */
    readonly Resistant: "R";
    /**
     * Code: ReactivityObservationInterpretation
     */
    readonly ReactivityObservationInterpretation: "ReactivityObservationInterpretation";
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
     * Code: U
     */
    readonly SignificantChangeUp: "U";
    /**
     * Code: UNE
     */
    readonly Unexpected: "UNE";
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
 * A categorical assessment, providing a rough qualitative interpretation of the observation value,    such as “normal”/ “abnormal”,”low” / “high”, “better” / “worse”, “susceptible” / “resistant”, “expected”/ “not expected”.    The value set is intended to be for ANY use where coded representation of an interpretation is needed.
 *
 *    Notes:
 *
 *    This is being communicated in v2.x in OBX-8 (Observation Interpretation), in v3 in ObservationInterpretation (CWE) in R1 (Representative Realm) and in FHIR in    Observation.interpretation. Historically these values come from the laboratory domain, and these codes are extensively    used. The value set binding is extensible, so codes outside the value set that are needed for interpretation concepts    (i.e. particular meanings) that are not included in the value set can be used, and these new codes may also be added to    the value set and published in a future version.
 */
export declare type ObservationInterpretationCodeType = typeof ObservationInterpretationCodes[keyof typeof ObservationInterpretationCodes];
//# sourceMappingURL=ObservationInterpretationCodes.d.ts.map