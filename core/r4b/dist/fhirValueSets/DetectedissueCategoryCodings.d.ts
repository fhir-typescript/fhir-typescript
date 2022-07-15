import { CodingArgs } from '../fhir/Coding.js';
/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export declare type DetectedissueCategoryCodingType = {
    /**
     * Code: _ActSuppliedItemDetectedIssueCode
     */
    ActSuppliedItemDetectedIssueCode: CodingArgs;
    /**
     * Code: _AdministrationDetectedIssueCode
     */
    AdministrationDetectedIssueCode: CodingArgs;
    /**
     * Code: _AppropriatenessDetectedIssueCode
     */
    AppropriatenessDetectedIssueCode: CodingArgs;
    /**
     * Code: _DrugActionDetectedIssueCode
     */
    DrugActionDetectedIssueCode: CodingArgs;
    /**
     * Code: _InteractionDetectedIssueCode
     */
    InteractionDetectedIssueCode: CodingArgs;
    /**
     * Code: _SupplyDetectedIssueCode
     */
    SupplyDetectedIssueCode: CodingArgs;
    /**
     * Code: _TimingDetectedIssueCode
     */
    TimingDetectedIssueCode: CodingArgs;
    /**
     * Code: ABUSE
     */
    CommonlyAbusedMisusedAlert: CodingArgs;
    /**
     * Code: ADALRT
     */
    AdultAlert: CodingArgs;
    /**
     * Code: AGE
     */
    AgeAlert: CodingArgs;
    /**
     * Code: ALGY
     */
    AllergyAlert: CodingArgs;
    /**
     * Code: ALLDONE
     */
    AlreadyPerformed: CodingArgs;
    /**
     * Code: ALRTENDLATE
     */
    EndTooLateAlert: CodingArgs;
    /**
     * Code: ALRTSTRTLATE
     */
    StartTooLateAlert: CodingArgs;
    /**
     * Code: COMPLY
     */
    ComplianceAlert: CodingArgs;
    /**
     * Code: COND
     */
    ConditionAlert: CodingArgs;
    /**
     * Code: CREACT
     */
    CommonReactionAlert: CodingArgs;
    /**
     * Code: DACT
     */
    DrugActionDetectedIssue: CodingArgs;
    /**
     * Code: DOSE
     */
    DosageProblem: CodingArgs;
    /**
     * Code: DOSECOND
     */
    DosageConditionAlert: CodingArgs;
    /**
     * Code: DOSEDUR
     */
    DoseDurationAlert: CodingArgs;
    /**
     * Code: DOSEDURH
     */
    DoseDurationHighAlert: CodingArgs;
    /**
     * Code: DOSEDURHIND
     */
    DoseDurationHighForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEDURL
     */
    DoseDurationLowAlert: CodingArgs;
    /**
     * Code: DOSEDURLIND
     */
    DoseDurationLowForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEH
     */
    HighDoseAlert: CodingArgs;
    /**
     * Code: DOSEHIND
     */
    HighDoseForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEHINDA
     */
    HighDoseForAgeAlert: CodingArgs;
    /**
     * Code: DOSEHINDSA
     */
    HighDoseForHeightSurfaceAreaAlert: CodingArgs;
    /**
     * Code: DOSEHINDW
     */
    HighDoseForWeightAlert: CodingArgs;
    /**
     * Code: DOSEIVL
     */
    DoseIntervalAlert: CodingArgs;
    /**
     * Code: DOSEIVLIND
     */
    DoseIntervalForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEL
     */
    LowDoseAlert: CodingArgs;
    /**
     * Code: DOSELIND
     */
    LowDoseForIndicationAlert: CodingArgs;
    /**
     * Code: DOSELINDA
     */
    LowDoseForAgeAlert: CodingArgs;
    /**
     * Code: DOSELINDSA
     */
    LowDoseForHeightSurfaceAreaAlert: CodingArgs;
    /**
     * Code: DOSELINDW
     */
    LowDoseForWeightAlert: CodingArgs;
    /**
     * Code: DRG
     */
    DrugInteractionAlert: CodingArgs;
    /**
     * Code: DUPTHPCLS
     */
    DuplicateTherapeuticAlassAlert: CodingArgs;
    /**
     * Code: DUPTHPGEN
     */
    DuplicateGenericAlert: CodingArgs;
    /**
     * Code: DUPTHPY
     */
    DuplicateTherapyAlert: CodingArgs;
    /**
     * Code: ENDLATE
     */
    EndTooLateAlertENDLATE: CodingArgs;
    /**
     * Code: FOOD
     */
    FoodInteractionAlert: CodingArgs;
    /**
     * Code: FRAUD
     */
    PotentialFraud: CodingArgs;
    /**
     * Code: FULFIL
     */
    FulfillmentAlert: CodingArgs;
    /**
     * Code: GEALRT
     */
    GeriatricAlert: CodingArgs;
    /**
     * Code: GEN
     */
    GeneticAlert: CodingArgs;
    /**
     * Code: GEND
     */
    GenderAlert: CodingArgs;
    /**
     * Code: HELD
     */
    HeldSuspendedAlert: CodingArgs;
    /**
     * Code: HGHT
     */
    HGHT: CodingArgs;
    /**
     * Code: HISTORIC
     */
    RecordRecordedAsHistorical: CodingArgs;
    /**
     * Code: INT
     */
    IntoleranceAlert: CodingArgs;
    /**
     * Code: INTERVAL
     */
    OutsideRequestedTime: CodingArgs;
    /**
     * Code: LAB
     */
    LabAlert: CodingArgs;
    /**
     * Code: LACT
     */
    LactationAlert: CodingArgs;
    /**
     * Code: MDOSE
     */
    MaximumDosageReached: CodingArgs;
    /**
     * Code: MINFREQ
     */
    TooSoonWithinFrequencyBasedOnTheUsage: CodingArgs;
    /**
     * Code: NHP
     */
    NaturalHealthProductAlert: CodingArgs;
    /**
     * Code: NONRX
     */
    NonPrescriptionInteractionAlert: CodingArgs;
    /**
     * Code: NOTACTN
     */
    NoLongerActionable: CodingArgs;
    /**
     * Code: NOTEQUIV
     */
    NotEquivalentAlert: CodingArgs;
    /**
     * Code: NOTEQUIVGEN
     */
    NotGenericallyEquivalentAlert: CodingArgs;
    /**
     * Code: NOTEQUIVTHER
     */
    NotTherapeuticallyEquivalentAlert: CodingArgs;
    /**
     * Code: OBSA
     */
    ObservationAlert: CodingArgs;
    /**
     * Code: PATPREF
     */
    ViolatesStatedPreferences: CodingArgs;
    /**
     * Code: PATPREFALT
     */
    ViolatesStatedPreferencesAlternateAvailable: CodingArgs;
    /**
     * Code: PEALRT
     */
    PediatricAlert: CodingArgs;
    /**
     * Code: PLYDOC
     */
    PolyOrdererAlert: CodingArgs;
    /**
     * Code: PLYPHRM
     */
    PolySupplierAlert: CodingArgs;
    /**
     * Code: PREG
     */
    PregnancyAlert: CodingArgs;
    /**
     * Code: PREVINEF
     */
    PreviouslyIneffective: CodingArgs;
    /**
     * Code: RALG
     */
    RelatedAllergyAlert: CodingArgs;
    /**
     * Code: RAR
     */
    RelatedPriorReactionAlert: CodingArgs;
    /**
     * Code: REACT
     */
    ReactionAlert: CodingArgs;
    /**
     * Code: RINT
     */
    RelatedIntoleranceAlert: CodingArgs;
    /**
     * Code: RREACT
     */
    RelatedReactionAlert: CodingArgs;
    /**
     * Code: STRTLATE
     */
    StartTooLateAlertSTRTLATE: CodingArgs;
    /**
     * Code: TIME
     */
    TimingDetectedIssue: CodingArgs;
    /**
     * Code: TIMING
     */
    EventTimingIncorrectAlert: CodingArgs;
    /**
     * Code: TOOLATE
     */
    RefillTooLateAlert: CodingArgs;
    /**
     * Code: TOOSOON
     */
    RefillTooSoonAlert: CodingArgs;
    /**
     * Code: TPROD
     */
    TherapeuticProductAlert: CodingArgs;
    /**
     * Code: WGHT
     */
    WGHT: CodingArgs;
};
/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export declare const DetectedissueCategoryCodings: DetectedissueCategoryCodingType;
//# sourceMappingURL=DetectedissueCategoryCodings.d.ts.map