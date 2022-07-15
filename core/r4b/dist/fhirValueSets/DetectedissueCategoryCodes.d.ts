/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export declare const DetectedissueCategoryCodes: {
    /**
     * Code: _ActSuppliedItemDetectedIssueCode
     */
    readonly ActSuppliedItemDetectedIssueCode: "_ActSuppliedItemDetectedIssueCode";
    /**
     * Code: _AdministrationDetectedIssueCode
     */
    readonly AdministrationDetectedIssueCode: "_AdministrationDetectedIssueCode";
    /**
     * Code: _AppropriatenessDetectedIssueCode
     */
    readonly AppropriatenessDetectedIssueCode: "_AppropriatenessDetectedIssueCode";
    /**
     * Code: _DrugActionDetectedIssueCode
     */
    readonly DrugActionDetectedIssueCode: "_DrugActionDetectedIssueCode";
    /**
     * Code: _InteractionDetectedIssueCode
     */
    readonly InteractionDetectedIssueCode: "_InteractionDetectedIssueCode";
    /**
     * Code: _SupplyDetectedIssueCode
     */
    readonly SupplyDetectedIssueCode: "_SupplyDetectedIssueCode";
    /**
     * Code: _TimingDetectedIssueCode
     */
    readonly TimingDetectedIssueCode: "_TimingDetectedIssueCode";
    /**
     * Code: ABUSE
     */
    readonly CommonlyAbusedMisusedAlert: "ABUSE";
    /**
     * Code: ADALRT
     */
    readonly AdultAlert: "ADALRT";
    /**
     * Code: AGE
     */
    readonly AgeAlert: "AGE";
    /**
     * Code: ALGY
     */
    readonly AllergyAlert: "ALGY";
    /**
     * Code: ALLDONE
     */
    readonly AlreadyPerformed: "ALLDONE";
    /**
     * Code: ALRTENDLATE
     */
    readonly EndTooLateAlert: "ALRTENDLATE";
    /**
     * Code: ALRTSTRTLATE
     */
    readonly StartTooLateAlert: "ALRTSTRTLATE";
    /**
     * Code: COMPLY
     */
    readonly ComplianceAlert: "COMPLY";
    /**
     * Code: COND
     */
    readonly ConditionAlert: "COND";
    /**
     * Code: CREACT
     */
    readonly CommonReactionAlert: "CREACT";
    /**
     * Code: DACT
     */
    readonly DrugActionDetectedIssue: "DACT";
    /**
     * Code: DOSE
     */
    readonly DosageProblem: "DOSE";
    /**
     * Code: DOSECOND
     */
    readonly DosageConditionAlert: "DOSECOND";
    /**
     * Code: DOSEDUR
     */
    readonly DoseDurationAlert: "DOSEDUR";
    /**
     * Code: DOSEDURH
     */
    readonly DoseDurationHighAlert: "DOSEDURH";
    /**
     * Code: DOSEDURHIND
     */
    readonly DoseDurationHighForIndicationAlert: "DOSEDURHIND";
    /**
     * Code: DOSEDURL
     */
    readonly DoseDurationLowAlert: "DOSEDURL";
    /**
     * Code: DOSEDURLIND
     */
    readonly DoseDurationLowForIndicationAlert: "DOSEDURLIND";
    /**
     * Code: DOSEH
     */
    readonly HighDoseAlert: "DOSEH";
    /**
     * Code: DOSEHIND
     */
    readonly HighDoseForIndicationAlert: "DOSEHIND";
    /**
     * Code: DOSEHINDA
     */
    readonly HighDoseForAgeAlert: "DOSEHINDA";
    /**
     * Code: DOSEHINDSA
     */
    readonly HighDoseForHeightSurfaceAreaAlert: "DOSEHINDSA";
    /**
     * Code: DOSEHINDW
     */
    readonly HighDoseForWeightAlert: "DOSEHINDW";
    /**
     * Code: DOSEIVL
     */
    readonly DoseIntervalAlert: "DOSEIVL";
    /**
     * Code: DOSEIVLIND
     */
    readonly DoseIntervalForIndicationAlert: "DOSEIVLIND";
    /**
     * Code: DOSEL
     */
    readonly LowDoseAlert: "DOSEL";
    /**
     * Code: DOSELIND
     */
    readonly LowDoseForIndicationAlert: "DOSELIND";
    /**
     * Code: DOSELINDA
     */
    readonly LowDoseForAgeAlert: "DOSELINDA";
    /**
     * Code: DOSELINDSA
     */
    readonly LowDoseForHeightSurfaceAreaAlert: "DOSELINDSA";
    /**
     * Code: DOSELINDW
     */
    readonly LowDoseForWeightAlert: "DOSELINDW";
    /**
     * Code: DRG
     */
    readonly DrugInteractionAlert: "DRG";
    /**
     * Code: DUPTHPCLS
     */
    readonly DuplicateTherapeuticAlassAlert: "DUPTHPCLS";
    /**
     * Code: DUPTHPGEN
     */
    readonly DuplicateGenericAlert: "DUPTHPGEN";
    /**
     * Code: DUPTHPY
     */
    readonly DuplicateTherapyAlert: "DUPTHPY";
    /**
     * Code: ENDLATE
     */
    readonly EndTooLateAlertENDLATE: "ENDLATE";
    /**
     * Code: FOOD
     */
    readonly FoodInteractionAlert: "FOOD";
    /**
     * Code: FRAUD
     */
    readonly PotentialFraud: "FRAUD";
    /**
     * Code: FULFIL
     */
    readonly FulfillmentAlert: "FULFIL";
    /**
     * Code: GEALRT
     */
    readonly GeriatricAlert: "GEALRT";
    /**
     * Code: GEN
     */
    readonly GeneticAlert: "GEN";
    /**
     * Code: GEND
     */
    readonly GenderAlert: "GEND";
    /**
     * Code: HELD
     */
    readonly HeldSuspendedAlert: "HELD";
    /**
     * Code: HGHT
     */
    readonly HGHT: "HGHT";
    /**
     * Code: HISTORIC
     */
    readonly RecordRecordedAsHistorical: "HISTORIC";
    /**
     * Code: INT
     */
    readonly IntoleranceAlert: "INT";
    /**
     * Code: INTERVAL
     */
    readonly OutsideRequestedTime: "INTERVAL";
    /**
     * Code: LAB
     */
    readonly LabAlert: "LAB";
    /**
     * Code: LACT
     */
    readonly LactationAlert: "LACT";
    /**
     * Code: MDOSE
     */
    readonly MaximumDosageReached: "MDOSE";
    /**
     * Code: MINFREQ
     */
    readonly TooSoonWithinFrequencyBasedOnTheUsage: "MINFREQ";
    /**
     * Code: NHP
     */
    readonly NaturalHealthProductAlert: "NHP";
    /**
     * Code: NONRX
     */
    readonly NonPrescriptionInteractionAlert: "NONRX";
    /**
     * Code: NOTACTN
     */
    readonly NoLongerActionable: "NOTACTN";
    /**
     * Code: NOTEQUIV
     */
    readonly NotEquivalentAlert: "NOTEQUIV";
    /**
     * Code: NOTEQUIVGEN
     */
    readonly NotGenericallyEquivalentAlert: "NOTEQUIVGEN";
    /**
     * Code: NOTEQUIVTHER
     */
    readonly NotTherapeuticallyEquivalentAlert: "NOTEQUIVTHER";
    /**
     * Code: OBSA
     */
    readonly ObservationAlert: "OBSA";
    /**
     * Code: PATPREF
     */
    readonly ViolatesStatedPreferences: "PATPREF";
    /**
     * Code: PATPREFALT
     */
    readonly ViolatesStatedPreferencesAlternateAvailable: "PATPREFALT";
    /**
     * Code: PEALRT
     */
    readonly PediatricAlert: "PEALRT";
    /**
     * Code: PLYDOC
     */
    readonly PolyOrdererAlert: "PLYDOC";
    /**
     * Code: PLYPHRM
     */
    readonly PolySupplierAlert: "PLYPHRM";
    /**
     * Code: PREG
     */
    readonly PregnancyAlert: "PREG";
    /**
     * Code: PREVINEF
     */
    readonly PreviouslyIneffective: "PREVINEF";
    /**
     * Code: RALG
     */
    readonly RelatedAllergyAlert: "RALG";
    /**
     * Code: RAR
     */
    readonly RelatedPriorReactionAlert: "RAR";
    /**
     * Code: REACT
     */
    readonly ReactionAlert: "REACT";
    /**
     * Code: RINT
     */
    readonly RelatedIntoleranceAlert: "RINT";
    /**
     * Code: RREACT
     */
    readonly RelatedReactionAlert: "RREACT";
    /**
     * Code: STRTLATE
     */
    readonly StartTooLateAlertSTRTLATE: "STRTLATE";
    /**
     * Code: TIME
     */
    readonly TimingDetectedIssue: "TIME";
    /**
     * Code: TIMING
     */
    readonly EventTimingIncorrectAlert: "TIMING";
    /**
     * Code: TOOLATE
     */
    readonly RefillTooLateAlert: "TOOLATE";
    /**
     * Code: TOOSOON
     */
    readonly RefillTooSoonAlert: "TOOSOON";
    /**
     * Code: TPROD
     */
    readonly TherapeuticProductAlert: "TPROD";
    /**
     * Code: WGHT
     */
    readonly WGHT: "WGHT";
};
/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export declare type DetectedissueCategoryCodeType = typeof DetectedissueCategoryCodes[keyof typeof DetectedissueCategoryCodes];
//# sourceMappingURL=DetectedissueCategoryCodes.d.ts.map