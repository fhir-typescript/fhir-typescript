import { CodingArgs } from '../fhir/Coding.js';
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare type ProcedureNotPerformedReasonCodingType = {
    /**
     * Code: 105480006
     */
    RefusalOfTreatmentByPatient: CodingArgs;
    /**
     * Code: 116101000119100
     */
    ColonoscopyRefused: CodingArgs;
    /**
     * Code: 134385008
     */
    ReferralToDieticianDeclined: CodingArgs;
    /**
     * Code: 134386009
     */
    ReferralToChiropodistDeclined: CodingArgs;
    /**
     * Code: 134390006
     */
    AngiotensinConvertingEnzymeInhibitorNotIndicated: CodingArgs;
    /**
     * Code: 134391005
     */
    StatinNotIndicated: CodingArgs;
    /**
     * Code: 134392003
     */
    WarfarinNotIndicated: CodingArgs;
    /**
     * Code: 134394002
     */
    AspirinNotIndicated: CodingArgs;
    /**
     * Code: 134396000
     */
    StatinDeclined: CodingArgs;
    /**
     * Code: 134397009
     */
    AngiotensinConvertingEnzymeInhibitorDeclined: CodingArgs;
    /**
     * Code: 134398004
     */
    WarfarinDeclined: CodingArgs;
    /**
     * Code: 135805008
     */
    NitrateNotIndicated: CodingArgs;
    /**
     * Code: 135806009
     */
    CalciumChannelBlockerNotIndicated: CodingArgs;
    /**
     * Code: 135807000
     */
    LipidLoweringTherapyNotIndicated: CodingArgs;
    /**
     * Code: 135808005
     */
    DiureticNotIndicated: CodingArgs;
    /**
     * Code: 135809002
     */
    NitrateContraindicated: CodingArgs;
    /**
     * Code: 135811006
     */
    DiureticContraindicated: CodingArgs;
    /**
     * Code: 135812004
     */
    NitrateDeclined: CodingArgs;
    /**
     * Code: 135814003
     */
    DiureticDeclined: CodingArgs;
    /**
     * Code: 135822005
     */
    LipidLoweringTherapyContraindicated: CodingArgs;
    /**
     * Code: 135823000
     */
    CalciumChannelBlockerContraindicated: CodingArgs;
    /**
     * Code: 135825007
     */
    CalciumChannelBlockerDeclined: CodingArgs;
    /**
     * Code: 135826008
     */
    LipidLoweringTherapyDeclined: CodingArgs;
    /**
     * Code: 146922001
     */
    RubellaScreeningNotOffered: CodingArgs;
    /**
     * Code: 147022006
     */
    DoubleTestNotOffered: CodingArgs;
    /**
     * Code: 148324002
     */
    ScreeningNotOffered: CodingArgs;
    /**
     * Code: 148477008
     */
    ImmunizationNotOffered: CodingArgs;
    /**
     * Code: 162650008
     */
    PatientNotExamined: CodingArgs;
    /**
     * Code: 162675007
     */
    GeneralExaminationNotDone: CodingArgs;
    /**
     * Code: 162882008
     */
    RespiratorySystemNotExamined: CodingArgs;
    /**
     * Code: 162980001
     */
    CVSNotExamined: CodingArgs;
    /**
     * Code: 163128002
     */
    GITNotExamined: CodingArgs;
    /**
     * Code: 163348001
     */
    GUSystemNotExamined: CodingArgs;
    /**
     * Code: 163582008
     */
    NervousSystemNotExamined: CodingArgs;
    /**
     * Code: 163628001
     */
    SensorySystemNotExamined: CodingArgs;
    /**
     * Code: 163900009
     */
    OECNSNotExamined: CodingArgs;
    /**
     * Code: 164176006
     */
    ENTExaminationNotPerformed: CodingArgs;
    /**
     * Code: 164286000
     */
    OETemperatureNotTaken: CodingArgs;
    /**
     * Code: 164321005
     */
    OESkinNotExamined: CodingArgs;
    /**
     * Code: 164445005
     */
    OEExtremitiesNotExamined: CodingArgs;
    /**
     * Code: 164503006
     */
    OrthopedicExamNotDone: CodingArgs;
    /**
     * Code: 164713001
     */
    NeurologicalDiagnosticProcedureNotDone: CodingArgs;
    /**
     * Code: 164725003
     */
    VisualTestingNotDone: CodingArgs;
    /**
     * Code: 164746007
     */
    AuditoryVestibularTestNotDone: CodingArgs;
    /**
     * Code: 164766003
     */
    SpecialENTProcedureNotDone: CodingArgs;
    /**
     * Code: 164776000
     */
    SpecialCVSTestNotDone: CodingArgs;
    /**
     * Code: 164786004
     */
    SpecialGITTestNotDone: CodingArgs;
    /**
     * Code: 164795007
     */
    SpecialUrinaryTestNotDone: CodingArgs;
    /**
     * Code: 164808009
     */
    SpecialFemaleTestNotDone: CodingArgs;
    /**
     * Code: 164823004
     */
    SpecialMaleTestNotDone: CodingArgs;
    /**
     * Code: 164831009
     */
    MusculoskeletalTestNotDone: CodingArgs;
    /**
     * Code: 164853006
     */
    ECGNotDone: CodingArgs;
    /**
     * Code: 164964005
     */
    SusceptibilitySkinTestNotDone: CodingArgs;
    /**
     * Code: 164978006
     */
    MantouxTestNotDone: CodingArgs;
    /**
     * Code: 164985005
     */
    KveimTestNotDone: CodingArgs;
    /**
     * Code: 164997006
     */
    HypersensitivitySkinTestNotDone: CodingArgs;
    /**
     * Code: 165008002
     */
    AllergyTestingNotDone: CodingArgs;
    /**
     * Code: 165017002
     */
    LungFunctionTestingNotDone: CodingArgs;
    /**
     * Code: 165026004
     */
    LungVolumeTestNotDone: CodingArgs;
    /**
     * Code: 165035006
     */
    RespiratoryFlowRateNotMeasured: CodingArgs;
    /**
     * Code: 165074004
     */
    CardiacFunctionTestNotDone: CodingArgs;
    /**
     * Code: 165081006
     */
    ExerciseToleranceTestNotDone: CodingArgs;
    /**
     * Code: 165104002
     */
    MetabolicFunctionNotTested: CodingArgs;
    /**
     * Code: 165122004
     */
    NonSurgicalBiopsyNotDone: CodingArgs;
    /**
     * Code: 165139002
     */
    EndoscopyNotCarriedOut: CodingArgs;
    /**
     * Code: 165342003
     */
    PatientRefusedLaboratoryTest: CodingArgs;
    /**
     * Code: 165343008
     */
    LaboratoryTestRequestedNotDone: CodingArgs;
    /**
     * Code: 165376007
     */
    PatientRefusedHematologyTest: CodingArgs;
    /**
     * Code: 165377003
     */
    HematologyTestRequestNotDone: CodingArgs;
    /**
     * Code: 165393007
     */
    HemoglobinNotEstimated: CodingArgs;
    /**
     * Code: 167219008
     */
    UrineNotExamined: CodingArgs;
    /**
     * Code: 167260001
     */
    UrineGlucoseTestNotDone: CodingArgs;
    /**
     * Code: 167272007
     */
    UrineProteinTestNotDone: CodingArgs;
    /**
     * Code: 167286006
     */
    UrineKetoneTestNotDone: CodingArgs;
    /**
     * Code: 167296002
     */
    UrineBloodTestNotDone: CodingArgs;
    /**
     * Code: 167306007
     */
    UrinePHTestNotDone: CodingArgs;
    /**
     * Code: 167317008
     */
    UrineBacteriaTestNotDone: CodingArgs;
    /**
     * Code: 167322008
     */
    UrineUrobilinogenNotTested: CodingArgs;
    /**
     * Code: 167594003
     */
    FecesNotExamined: CodingArgs;
    /**
     * Code: 167701000
     */
    CSFNotExamined: CodingArgs;
    /**
     * Code: 167728005
     */
    CSFChemistryNotTested: CodingArgs;
    /**
     * Code: 168497006
     */
    RadiographicImagingProcedureNotCarriedOut: CodingArgs;
    /**
     * Code: 168499009
     */
    RadiologyRefused: CodingArgs;
    /**
     * Code: 168533005
     */
    RadiotherapyStopped: CodingArgs;
    /**
     * Code: 169551000
     */
    ContraceptionContraindicated: CodingArgs;
    /**
     * Code: 169607004
     */
    NoAntenatalCare: CodingArgs;
    /**
     * Code: 169608009
     */
    AntenatalCareNotOffered: CodingArgs;
    /**
     * Code: 169609001
     */
    AntenatalCareNotWanted: CodingArgs;
    /**
     * Code: 169610006
     */
    AntenatalCareNotAttended: CodingArgs;
    /**
     * Code: 169611005
     */
    NoAntenatalCareNotKnownPregnant: CodingArgs;
    /**
     * Code: 169635000
     */
    ParentCraftNotWanted: CodingArgs;
    /**
     * Code: 169649009
     */
    ANAmniocentesisNotWanted: CodingArgs;
    /**
     * Code: 169660000
     */
    ANUSScanNotWanted: CodingArgs;
    /**
     * Code: 169687001
     */
    AFPBloodTestNotWanted: CodingArgs;
    /**
     * Code: 169693009
     */
    RubellaScreeningNotWanted: CodingArgs;
    /**
     * Code: 169699008
     */
    AntenatalSyphilisScreeningNotDone: CodingArgs;
    /**
     * Code: 169704000
     */
    AntenatalBloodGroupScreeningNotDone: CodingArgs;
    /**
     * Code: 169708002
     */
    AntenatalSickleScreeningNotDone: CodingArgs;
    /**
     * Code: 169795009
     */
    TripleTestNotWanted: CodingArgs;
    /**
     * Code: 169796005
     */
    DoubleTestNotWanted: CodingArgs;
    /**
     * Code: 170100005
     */
    ChildNotExaminedAtBirth: CodingArgs;
    /**
     * Code: 170108003
     */
    ChildNotExaminedAt10Days: CodingArgs;
    /**
     * Code: 170115006
     */
    Child6WeekExaminationNotOffered: CodingArgs;
    /**
     * Code: 170116007
     */
    Child6WeekExaminationNotWanted: CodingArgs;
    /**
     * Code: 170117003
     */
    Child6WeekExaminationNotAttended: CodingArgs;
    /**
     * Code: 170124002
     */
    VAL89MonthExamNotOffered: CodingArgs;
    /**
     * Code: 170125001
     */
    VAL89MonthExamNotWanted: CodingArgs;
    /**
     * Code: 170126000
     */
    VAL89MonthExamNotAttended: CodingArgs;
    /**
     * Code: 170133000
     */
    VAL18MonthExaminationNotOffered: CodingArgs;
    /**
     * Code: 170134006
     */
    VAL18MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170135007
     */
    VAL18MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 170142007
     */
    VAL25YearExaminationNotOffered: CodingArgs;
    /**
     * Code: 170143002
     */
    VAL25YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170144008
     */
    VAL25YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170151004
     */
    VAL35YearExaminationNotOffered: CodingArgs;
    /**
     * Code: 170152006
     */
    VAL35YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170153001
     */
    VAL35YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170160007
     */
    VAL45YearExaminationNotOffered: CodingArgs;
    /**
     * Code: 170161006
     */
    VAL45YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170162004
     */
    VAL45YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170169008
     */
    VAL10YearExaminationNotOffered: CodingArgs;
    /**
     * Code: 170170009
     */
    VAL10YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170171008
     */
    VAL10YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170178002
     */
    VAL15YearExaminationNotOffered: CodingArgs;
    /**
     * Code: 170179005
     */
    VAL15YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170180008
     */
    VAL15YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170255003
     */
    Child1YearExaminationNotOffered: CodingArgs;
    /**
     * Code: 170256002
     */
    Child1YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170257006
     */
    Child1YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170264008
     */
    Child6MonthExaminationNotOffered: CodingArgs;
    /**
     * Code: 170265009
     */
    Child6MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170266005
     */
    Child6MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 170273000
     */
    Child21MonthExaminationNotOffered: CodingArgs;
    /**
     * Code: 170274006
     */
    Child21MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170275007
     */
    Child21MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 170282006
     */
    Child3YearExamNotOffered: CodingArgs;
    /**
     * Code: 170283001
     */
    Child3YearExamNotWanted: CodingArgs;
    /**
     * Code: 170284007
     */
    Child3YearExamNotAttended: CodingArgs;
    /**
     * Code: 170291005
     */
    Child39MonthExaminationNotOffered: CodingArgs;
    /**
     * Code: 170292003
     */
    Child39MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170293008
     */
    Child39MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 170301000
     */
    Child8WeekExaminationNotOffered: CodingArgs;
    /**
     * Code: 170302007
     */
    Child8WeekExaminationNotWanted: CodingArgs;
    /**
     * Code: 170304008
     */
    Child8WeekExaminationNotAttended: CodingArgs;
    /**
     * Code: 170585007
     */
    CardiacDiseaseTreatmentStopped: CodingArgs;
    /**
     * Code: 170588009
     */
    TreatmentForHypertensionStopped: CodingArgs;
    /**
     * Code: 170620005
     */
    RespiratoryDiseaseTreatmentStopped: CodingArgs;
    /**
     * Code: 170621009
     */
    HomeOxygenSupplyStopped: CodingArgs;
    /**
     * Code: 170624001
     */
    OralSteroidsStopped: CodingArgs;
    /**
     * Code: 170675003
     */
    GITTreatmentStopped: CodingArgs;
    /**
     * Code: 170687005
     */
    PsychiatricTreatmentStopped: CodingArgs;
    /**
     * Code: 170688000
     */
    LithiumStopped: CodingArgs;
    /**
     * Code: 170689008
     */
    InjectablePhenothiazineStopped: CodingArgs;
    /**
     * Code: 170700002
     */
    NeurologicalDisorderTreatmentStopped: CodingArgs;
    /**
     * Code: 170712003
     */
    EpilepsyTreatmentStopped: CodingArgs;
    /**
     * Code: 170725006
     */
    OphthalmologicalTreatmentStopped: CodingArgs;
    /**
     * Code: 170800007
     */
    TreatmentOfObesityStopped: CodingArgs;
    /**
     * Code: 170816009
     */
    EndocrineDiseaseTreatmentStopped: CodingArgs;
    /**
     * Code: 170826002
     */
    B12InjectionsStopped: CodingArgs;
    /**
     * Code: 170834008
     */
    BloodDisorderTreatmentStopped: CodingArgs;
    /**
     * Code: 170843004
     */
    AllergicDisorderTreatmentStopped: CodingArgs;
    /**
     * Code: 170854009
     */
    RheumatologyDisorderTreatmentStopped: CodingArgs;
    /**
     * Code: 170863006
     */
    SkinDisorderTreatmentStopped: CodingArgs;
    /**
     * Code: 170872003
     */
    GynecologicalDisorderTreatmentStopped: CodingArgs;
    /**
     * Code: 170882002
     */
    UrinaryDisorderTreatmentStopped: CodingArgs;
    /**
     * Code: 170894006
     */
    ENTDiseaseTreatmentStopped: CodingArgs;
    /**
     * Code: 170904002
     */
    OstomyTreatmentStopped: CodingArgs;
    /**
     * Code: 170912005
     */
    HighRiskTreatmentStopped: CodingArgs;
    /**
     * Code: 170919001
     */
    WarfarinTherapyStopped: CodingArgs;
    /**
     * Code: 170929008
     */
    RepeatPrescriptionTreatmentStopped: CodingArgs;
    /**
     * Code: 170954008
     */
    HRTContraindicated: CodingArgs;
    /**
     * Code: 170958006
     */
    HRTStopped: CodingArgs;
    /**
     * Code: 171034000
     */
    HealthEducationNotWanted: CodingArgs;
    /**
     * Code: 171103002
     */
    ScreeningNotWanted: CodingArgs;
    /**
     * Code: 171152003
     */
    CancerOfCervixScreeningNotWanted: CodingArgs;
    /**
     * Code: 171277005
     */
    SensitivityCIImmunization: CodingArgs;
    /**
     * Code: 171284002
     */
    PertussisVaccineContraindicated: CodingArgs;
    /**
     * Code: 180863000
     */
    OperationAbandoned: CodingArgs;
    /**
     * Code: 182840001
     */
    DrugTreatmentStoppedMedicalAdvice: CodingArgs;
    /**
     * Code: 182841002
     */
    DrStoppedDrugsIneffective: CodingArgs;
    /**
     * Code: 182842009
     */
    DoctorStoppedDrugsSideEffect: CodingArgs;
    /**
     * Code: 182843004
     */
    DrStoppedDrugsInconvenient: CodingArgs;
    /**
     * Code: 182844005
     */
    DoctorStoppedDrugsPatientDislikes: CodingArgs;
    /**
     * Code: 182845006
     */
    DoctorStoppedDrugsAvoidInteraction: CodingArgs;
    /**
     * Code: 182846007
     */
    DoctorStoppedDrugsMedicalAimAchieved: CodingArgs;
    /**
     * Code: 182849000
     */
    NoDrugTherapyPrescribed: CodingArgs;
    /**
     * Code: 182895007
     */
    DrugDeclinedByPatient: CodingArgs;
    /**
     * Code: 182896008
     */
    DrugDeclinedByPatientDislikesTaste: CodingArgs;
    /**
     * Code: 182897004
     */
    DrugDeclinedByPatientSideEffects: CodingArgs;
    /**
     * Code: 182898009
     */
    DrugDeclinedByPatientInconvenient: CodingArgs;
    /**
     * Code: 182899001
     */
    DrugDeclinedByPatientProblemSwallowing: CodingArgs;
    /**
     * Code: 182900006
     */
    DrugDeclinedByPatientPatientBeliefs: CodingArgs;
    /**
     * Code: 182901005
     */
    DrugDeclinedByPatientAlternativeTherapy: CodingArgs;
    /**
     * Code: 182902003
     */
    DrugDeclinedByPatientCannotPayScript: CodingArgs;
    /**
     * Code: 182903008
     */
    DrugDeclinedByPatientReasonUnknown: CodingArgs;
    /**
     * Code: 183928007
     */
    ResidenceRemoteFromMedicalCare: CodingArgs;
    /**
     * Code: 183929004
     */
    NoHomeMedicalServices: CodingArgs;
    /**
     * Code: 183930009
     */
    AwaitingAdmissionElsewhere: CodingArgs;
    /**
     * Code: 183934000
     */
    SensitivityCIToProcedure: CodingArgs;
    /**
     * Code: 183936003
     */
    ContraindicationToLiveImmunization: CodingArgs;
    /**
     * Code: 183945002
     */
    ProcedureRefusedForReligiousReason: CodingArgs;
    /**
     * Code: 183946001
     */
    ProcedureRefusedUncooperative: CodingArgs;
    /**
     * Code: 183947005
     */
    RefusedProcedureAfterThought: CodingArgs;
    /**
     * Code: 183948000
     */
    RefusedProcedureParentQuoteSWish: CodingArgs;
    /**
     * Code: 183949008
     */
    AssessmentExaminationRefused: CodingArgs;
    /**
     * Code: 183956002
     */
    CareHelpRefusedByPatient: CodingArgs;
    /**
     * Code: 183957006
     */
    PatientRefusesDayHospital: CodingArgs;
    /**
     * Code: 183958001
     */
    RefusesMealsOnWheels: CodingArgs;
    /**
     * Code: 183959009
     */
    SocialServicesHelpRefused: CodingArgs;
    /**
     * Code: 183960004
     */
    PatientRefusesHospitalAdmit: CodingArgs;
    /**
     * Code: 183961000
     */
    PartIIIAccommodationRefused: CodingArgs;
    /**
     * Code: 183962007
     */
    PatientNonCompliantWithSpecificAdvice: CodingArgs;
    /**
     * Code: 183964008
     */
    TreatmentNotIndicated: CodingArgs;
    /**
     * Code: 183965009
     */
    SurgeryNotIndicated: CodingArgs;
    /**
     * Code: 183966005
     */
    DrugTreatmentNotIndicated: CodingArgs;
    /**
     * Code: 184163005
     */
    ChildSurveillanceNotWanted: CodingArgs;
    /**
     * Code: 185754009
     */
    RefusesDiabetesMonitoring: CodingArgs;
    /**
     * Code: 266756008
     */
    MedicalCareUnavailable: CodingArgs;
    /**
     * Code: 266757004
     */
    MedicalCIToProcedure: CodingArgs;
    /**
     * Code: 266758009
     */
    ImmunizationContraindicated: CodingArgs;
    /**
     * Code: 266881002
     */
    HistoryNotObtained: CodingArgs;
    /**
     * Code: 268521004
     */
    ThyroidDiseaseTreatmentStopped: CodingArgs;
    /**
     * Code: 268560002
     */
    MedicalCIImmunization: CodingArgs;
    /**
     * Code: 274512008
     */
    DrugTherapyDiscontinued: CodingArgs;
    /**
     * Code: 275935009
     */
    SurgeryContraindicated: CodingArgs;
    /**
     * Code: 275936005
     */
    PatientNoncomplianceGeneral: CodingArgs;
    /**
     * Code: 275974002
     */
    MeaslesMumpsRubellaVaccineContraindicated: CodingArgs;
    /**
     * Code: 288120003
     */
    OperationAbandonedBeforeOnset: CodingArgs;
    /**
     * Code: 309841001
     */
    ThyroxineTreatmentStopped: CodingArgs;
    /**
     * Code: 309846006
     */
    TreatmentNotAvailable: CodingArgs;
    /**
     * Code: 310352003
     */
    MammographyNotAttended: CodingArgs;
    /**
     * Code: 312451002
     */
    AspirinProphylaxisContraIndicated: CodingArgs;
    /**
     * Code: 314374001
     */
    VAL360DegreeSweepOfCervixNotPerformed: CodingArgs;
    /**
     * Code: 315020006
     */
    BetaBlockerTherapyRefused: CodingArgs;
    /**
     * Code: 315021005
     */
    CoronaryHeartDiseaseMonitoringRefused: CodingArgs;
    /**
     * Code: 315022003
     */
    NicotineReplacementTherapyRefused: CodingArgs;
    /**
     * Code: 315023008
     */
    AspirinProphylaxisRefused: CodingArgs;
    /**
     * Code: 315061006
     */
    WarfarinContraindicated: CodingArgs;
    /**
     * Code: 315062004
     */
    BetaBlockerContraindicated: CodingArgs;
    /**
     * Code: 315214003
     */
    BetaBlockerNotIndicated: CodingArgs;
    /**
     * Code: 315363002
     */
    StatinsContraindicated: CodingArgs;
    /**
     * Code: 315364008
     */
    AngiotensinConvertingEnzymeInhibitorsContraindicated: CodingArgs;
    /**
     * Code: 315591006
     */
    FibratesContraindicated: CodingArgs;
    /**
     * Code: 315640000
     */
    InfluenzaVaccinationDeclined: CodingArgs;
    /**
     * Code: 371138003
     */
    RefusalOfTreatmentByParents: CodingArgs;
    /**
     * Code: 371900001
     */
    MedicationNotAdministered: CodingArgs;
    /**
     * Code: 373147003
     */
    MedicationNotAdministeredBecauseContraindicated: CodingArgs;
    /**
     * Code: 373148008
     */
    ThrombolyticAgentNotAdministeredBecauseContraindicated: CodingArgs;
    /**
     * Code: 390795005
     */
    PneumococcalVaccinationContraindicated: CodingArgs;
    /**
     * Code: 390796006
     */
    InfluenzaVaccinationContraindicated: CodingArgs;
    /**
     * Code: 390848004
     */
    RetinaeNotExamined: CodingArgs;
    /**
     * Code: 390910005
     */
    ThrombolysisContraindicated: CodingArgs;
    /**
     * Code: 390914001
     */
    ThrombolyticTherapyRefused: CodingArgs;
    /**
     * Code: 391015007
     */
    OsteoporosisRiskAssessmentRefused: CodingArgs;
    /**
     * Code: 391016008
     */
    OsteoporosisRiskAssessmentDefaulted: CodingArgs;
    /**
     * Code: 391021006
     */
    OsteoporosisTreatmentStopped: CodingArgs;
    /**
     * Code: 394909009
     */
    SyringeDriverDiscontinued: CodingArgs;
    /**
     * Code: 394965000
     */
    UrineLeukocyteTestNotDone: CodingArgs;
    /**
     * Code: 394987009
     */
    AngiotensinIIReceptorAntagonistsContraindicated: CodingArgs;
    /**
     * Code: 395006008
     */
    MedicationStoppedInteraction: CodingArgs;
    /**
     * Code: 395007004
     */
    MedicationStoppedIneffective: CodingArgs;
    /**
     * Code: 395008009
     */
    MedicationStoppedContraIndication: CodingArgs;
    /**
     * Code: 395009001
     */
    MedicationStoppedSideEffect: CodingArgs;
    /**
     * Code: 395174005
     */
    NicotineReplacementTherapyContraindicated: CodingArgs;
    /**
     * Code: 395175006
     */
    BupropionContraindicated: CodingArgs;
    /**
     * Code: 395176007
     */
    BupropionRefused: CodingArgs;
    /**
     * Code: 395675007
     */
    OralContraceptivePillContraindicated: CodingArgs;
    /**
     * Code: 395703005
     */
    MeningitisCImmunizationRefused: CodingArgs;
    /**
     * Code: 396781004
     */
    NoChemotherapyANDORRadiationTherapyPriorToLymphadenectomy: CodingArgs;
    /**
     * Code: 397004005
     */
    ImmunophenotypicAnalysisNotPerformed: CodingArgs;
    /**
     * Code: 397023003
     */
    OperationNotCompleted: CodingArgs;
    /**
     * Code: 397399004
     */
    CellPhenotypingNotPerformed: CodingArgs;
    /**
     * Code: 399538001
     */
    CytogeneticStudyNotPerformed: CodingArgs;
    /**
     * Code: 401047000
     */
    HypertensionTreatmentRefused: CodingArgs;
    /**
     * Code: 401084003
     */
    AngiotensinIIReceptorAntagonistDeclined: CodingArgs;
    /**
     * Code: 401086001
     */
    PneumococcalVaccinationDeclined: CodingArgs;
    /**
     * Code: 401318002
     */
    ShuttleWalkingTestNotDone: CodingArgs;
    /**
     * Code: 406149000
     */
    MedicationRefused: CodingArgs;
    /**
     * Code: 407571005
     */
    ClopidogrelNotIndicated: CodingArgs;
    /**
     * Code: 407572003
     */
    AngiotensinIIReceptorAntagonistNotIndicated: CodingArgs;
    /**
     * Code: 407573008
     */
    InfluenzaVaccinationNotIndicated: CodingArgs;
    /**
     * Code: 407582002
     */
    ClopidogrelContraindicated: CodingArgs;
    /**
     * Code: 407583007
     */
    ClopidogrelDeclined: CodingArgs;
    /**
     * Code: 408339001
     */
    ThrombolysisTherapyNotIndicated: CodingArgs;
    /**
     * Code: 408396006
     */
    DiabeticRetinopathyScreeningNotIndicated: CodingArgs;
    /**
     * Code: 408397002
     */
    DiabeticFootExaminationNotIndicated: CodingArgs;
    /**
     * Code: 408398007
     */
    SmokingReviewNotIndicated: CodingArgs;
    /**
     * Code: 408504000
     */
    Child7MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 408505004
     */
    Child7MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 408506003
     */
    Child7MonthExaminationNotOffered: CodingArgs;
    /**
     * Code: 408548005
     */
    MagneticResonanceImagingScanDeclined: CodingArgs;
    /**
     * Code: 408549002
     */
    AngiocardiographyDeclined: CodingArgs;
    /**
     * Code: 408551003
     */
    ExerciseToleranceTestRefused: CodingArgs;
    /**
     * Code: 408558009
     */
    MultidisciplinaryTeamFallsAssessmentDeclined: CodingArgs;
    /**
     * Code: 408559001
     */
    PrimaryHealthCareTeamFallsAssessmentDeclined: CodingArgs;
    /**
     * Code: 408566000
     */
    EchocardiogramDeclined: CodingArgs;
    /**
     * Code: 408567009
     */
    CTScanBrainDeclined: CodingArgs;
    /**
     * Code: 408569007
     */
    DiagnosticProcedureDeclined: CodingArgs;
    /**
     * Code: 408572000
     */
    CarotidArteryDopplerDeclined: CodingArgs;
    /**
     * Code: 408778004
     */
    HepatitisBImmunizationDeclined: CodingArgs;
    /**
     * Code: 408791003
     */
    BCGVaccinationDeclined: CodingArgs;
    /**
     * Code: 408795007
     */
    VitaminKProphylaxisDeclined: CodingArgs;
    /**
     * Code: 408836004
     */
    SampleNotObtained: CodingArgs;
    /**
     * Code: 408837008
     */
    AmniocentesisSampleNotObtained: CodingArgs;
    /**
     * Code: 412713002
     */
    CoronaryArteriographyDeclined: CodingArgs;
    /**
     * Code: 412718006
     */
    ChlamydiaScreeningDeclined: CodingArgs;
    /**
     * Code: 412725004
     */
    MedicationReviewDeclined: CodingArgs;
    /**
     * Code: 412752009
     */
    DiabeticFootExaminationDeclined: CodingArgs;
    /**
     * Code: 412782003
     */
    InappropriateMedicationStopped: CodingArgs;
    /**
     * Code: 413122001
     */
    DiabeticRetinopathyScreeningRefused: CodingArgs;
    /**
     * Code: 413123006
     */
    BloodPressureProcedureRefused: CodingArgs;
    /**
     * Code: 413167008
     */
    CompressionBandagingNotIndicated: CodingArgs;
    /**
     * Code: 413310006
     */
    PatientNonCompliantRefusedAccessToServices: CodingArgs;
    /**
     * Code: 413311005
     */
    PatientNonCompliantRefusedInterventionSupport: CodingArgs;
    /**
     * Code: 413312003
     */
    PatientNonCompliantRefusedService: CodingArgs;
    /**
     * Code: 413558003
     */
    AnticoagulationContraindicated: CodingArgs;
    /**
     * Code: 413559006
     */
    AnticoagulationDeclined: CodingArgs;
    /**
     * Code: 413560001
     */
    AnticoagulationNotIndicated: CodingArgs;
    /**
     * Code: 413756001
     */
    CardiacRehabilitationDeclined: CodingArgs;
    /**
     * Code: 413812009
     */
    CervicalSmearNotIndicated: CodingArgs;
    /**
     * Code: 414055003
     */
    DrugDependenceHomeDetoxificationContraindicated: CodingArgs;
    /**
     * Code: 414120003
     */
    ERCPNotCompletedDueToAnatomicalDerangementsFromPreviousSurgery: CodingArgs;
    /**
     * Code: 414159007
     */
    ExerciseToleranceTestContraindicated: CodingArgs;
    /**
     * Code: 414677003
     */
    MetforminContraindicated: CodingArgs;
    /**
     * Code: 415119001
     */
    PneumococcalVaccinationNotIndicated: CodingArgs;
    /**
     * Code: 415570002
     */
    SpirometryNotIndicated: CodingArgs;
    /**
     * Code: 415571003
     */
    SpirometryReversibilityTestingContraindicated: CodingArgs;
    /**
     * Code: 415572005
     */
    SpirometryTestDeclined: CodingArgs;
    /**
     * Code: 415666001
     */
    AdministrationOfSulfonylureaContraindicated: CodingArgs;
    /**
     * Code: 415667005
     */
    AdministrationOfSulfonylureaNotIndicated: CodingArgs;
    /**
     * Code: 416091008
     */
    GlitazonesContraindicated: CodingArgs;
    /**
     * Code: 416126007
     */
    BisphosphonatesDeclined: CodingArgs;
    /**
     * Code: 416128008
     */
    NoPastHistoryOfProcedure: CodingArgs;
    /**
     * Code: 416475003
     */
    CombinedCalciumAndVitaminD3PreparationContraindicated: CodingArgs;
    /**
     * Code: 416522000
     */
    StrontiumRanelateDeclined: CodingArgs;
    /**
     * Code: 416664005
     */
    SelectiveEstrogenReceptorModulatorNotIndicated: CodingArgs;
    /**
     * Code: 416670004
     */
    GlitazonesNotIndicated: CodingArgs;
    /**
     * Code: 416678006
     */
    CombinedCalciumAndVitaminD3PreparationNotIndicated: CodingArgs;
    /**
     * Code: 416704001
     */
    DXAScanContraindicated: CodingArgs;
    /**
     * Code: 416741000
     */
    StrontiumRanelateNotIndicated: CodingArgs;
    /**
     * Code: 416759002
     */
    NonSteroidalAntiInflammatoryDrugsContraindicated: CodingArgs;
    /**
     * Code: 416888009
     */
    DXAScanDeclined: CodingArgs;
    /**
     * Code: 416996000
     */
    StrontiumRanelateContraindicated: CodingArgs;
    /**
     * Code: 417013004
     */
    DXAScanNotIndicated: CodingArgs;
    /**
     * Code: 417045009
     */
    CombinedCalciumAndVitaminD3PreparationDeclined: CodingArgs;
    /**
     * Code: 417101006
     */
    SelectiveEstrogenReceptorModulatorContraindicated: CodingArgs;
    /**
     * Code: 417114007
     */
    RefusedReferralToMinorAilmentsClinic: CodingArgs;
    /**
     * Code: 417128001
     */
    BisphosphonatesContraindicated: CodingArgs;
    /**
     * Code: 417218000
     */
    CarotidUltrasoundNotIndicated: CodingArgs;
    /**
     * Code: 417434004
     */
    BisphosphonatesNotIndicated: CodingArgs;
    /**
     * Code: 417512003
     */
    SelectiveEstrogenReceptorModulatorDeclined: CodingArgs;
    /**
     * Code: 418014008
     */
    ProcedureNotOrdered: CodingArgs;
    /**
     * Code: 418731009
     */
    NoStainApplied: CodingArgs;
    /**
     * Code: 425519007
     */
    CardiopulmonaryResuscitationDiscontinuedDueToMedicalControlOrder: CodingArgs;
    /**
     * Code: 425921008
     */
    CardiopulmonaryResuscitationDiscontinuedDueToDoNotResuscitateOrder: CodingArgs;
    /**
     * Code: 426544006
     */
    HistoryRefused: CodingArgs;
    /**
     * Code: 426970003
     */
    CardiopulmonaryResuscitationDiscontinuedDueToReturnOfSpontaneousCirculation: CodingArgs;
    /**
     * Code: 426999008
     */
    CardiopulmonaryResuscitationDiscontinuedDueToSignsOfDeath: CodingArgs;
    /**
     * Code: 427569000
     */
    CardiopulmonaryResuscitationDiscontinuedAsPerProtocol: CodingArgs;
    /**
     * Code: 428042006
     */
    MediumChainAcylCoenzymeADehydrogenaseDeficiencyScreeningTestDeclined: CodingArgs;
    /**
     * Code: 428073005
     */
    AlcoholConsumptionScreeningTestDeclined: CodingArgs;
    /**
     * Code: 428299008
     */
    SickleCellScreeningDeclined: CodingArgs;
    /**
     * Code: 428348004
     */
    CardiopulmonaryResuscitationNotAttempted: CodingArgs;
    /**
     * Code: 428650003
     */
    CongenitalHypothyroidismScreeningDeclined: CodingArgs;
    /**
     * Code: 428841003
     */
    CysticFibrosisScreeningDeclined: CodingArgs;
    /**
     * Code: 429284000
     */
    CVDRiskAssessmentDeclined: CodingArgs;
    /**
     * Code: 429688007
     */
    NurseTriageDeclined: CodingArgs;
    /**
     * Code: 429726000
     */
    PhenylketonuriaScreeningDeclined: CodingArgs;
    /**
     * Code: 429739001
     */
    PatientRefusedTransportation: CodingArgs;
    /**
     * Code: 430279008
     */
    DrugTreatmentStoppedAtEndOfClinicalTrial: CodingArgs;
    /**
     * Code: 438370008
     */
    VascularDiseaseRiskAssessmentDeclined: CodingArgs;
    /**
     * Code: 438604008
     */
    PeritonealDialysisTherapyDiscontinued: CodingArgs;
    /**
     * Code: 438765003
     */
    HumanPapillomavirusVaccinationDeclined: CodingArgs;
    /**
     * Code: 438767006
     */
    TerminationOfPregnancyContraindicated: CodingArgs;
    /**
     * Code: 438833006
     */
    AdministrationOfDrugOrMedicamentContraindicated: CodingArgs;
    /**
     * Code: 439495000
     */
    CounselingDeclined: CodingArgs;
    /**
     * Code: 439516000
     */
    HemodialysisTherapyDiscontinued: CodingArgs;
    /**
     * Code: 439867009
     */
    DeterminationOfPatternOfResistanceToAntiviralAgentNotDone: CodingArgs;
    /**
     * Code: 440621003
     */
    ReferralDeclinedByPatient: CodingArgs;
    /**
     * Code: 441989008
     */
    DelayedHypersensitivitySkinTestForHistoplasminNotDone: CodingArgs;
    /**
     * Code: 442324008
     */
    AntenatalScreeningDeclined: CodingArgs;
    /**
     * Code: 442392002
     */
    AmbulanceTransportToHospitalDeclined: CodingArgs;
    /**
     * Code: 442444001
     */
    ReferralToSpecialistAlcoholTreatmentServiceDeclinedByPatient: CodingArgs;
    /**
     * Code: 443788002
     */
    MaternalPostnatalExaminationNotAttended: CodingArgs;
    /**
     * Code: 444020006
     */
    MaternalPostnatalExaminationRefused: CodingArgs;
    /**
     * Code: 444062004
     */
    MaternalPostnatalExaminationNotOffered: CodingArgs;
    /**
     * Code: 4451000175106
     */
    AsthmaActionPlanNotDone: CodingArgs;
    /**
     * Code: 4461000175108
     */
    CervicalCancerScreeningNotDone: CodingArgs;
    /**
     * Code: 4471000175100
     */
    ColorectalCancerScreeningNotDone: CodingArgs;
    /**
     * Code: 4501000175108
     */
    HemoglobinA1CTestNotDone: CodingArgs;
    /**
     * Code: 4541000175105
     */
    SpirometryNotDone: CodingArgs;
    /**
     * Code: 4551000175107
     */
    DiabeticFootExamNotDone: CodingArgs;
    /**
     * Code: 4591000175100
     */
    BoneDensityScreeningNotDone: CodingArgs;
    /**
     * Code: 473149004
     */
    LongActingReversibleContraceptionDeclined: CodingArgs;
    /**
     * Code: 591000119102
     */
    VaccineRefusedByPatient: CodingArgs;
    /**
     * Code: 5991000175105
     */
    PeakExpiratoryFlowNotDone: CodingArgs;
    /**
     * Code: 6021000175100
     */
    VaccinationForDiphtheriaPertussisAndTetanusNotDone: CodingArgs;
    /**
     * Code: 6031000175102
     */
    VaricellaVaccinationNotDone: CodingArgs;
    /**
     * Code: 6041000175108
     */
    HepatitisAVaccinationNotDone: CodingArgs;
    /**
     * Code: 6051000175105
     */
    HepatitisBVaccinationNotDone: CodingArgs;
    /**
     * Code: 698357006
     */
    AbdominalAorticAneurysmScreeningDeclined: CodingArgs;
    /**
     * Code: 698451006
     */
    AnkleBrachialPressureIndexTestDeclined: CodingArgs;
    /**
     * Code: 698459008
     */
    AntidepressantDrugTreatmentStopped: CodingArgs;
    /**
     * Code: 698460003
     */
    AntiviralTherapyDeclined: CodingArgs;
    /**
     * Code: 698468005
     */
    BisoprololContraindicated: CodingArgs;
    /**
     * Code: 698473004
     */
    BloodGlucoseTestDeclined: CodingArgs;
    /**
     * Code: 698483000
     */
    WeightManagementAdviceDeclined: CodingArgs;
    /**
     * Code: 698484006
     */
    MeasurementOfWaistCircumferenceDeclined: CodingArgs;
    /**
     * Code: 698490005
     */
    UrineDipstickTestDeclined: CodingArgs;
    /**
     * Code: 698521002
     */
    SimvastatinContraindicated: CodingArgs;
    /**
     * Code: 698569004
     */
    PostnatalDepressionNotDiscussed: CodingArgs;
    /**
     * Code: 698753008
     */
    NeverHadCervicalSmear: CodingArgs;
    /**
     * Code: 698758004
     */
    NebivololTherapyRefused: CodingArgs;
    /**
     * Code: 698950001
     */
    InfluenzaAVirusSubtypeH1N1VaccinationDeclined: CodingArgs;
    /**
     * Code: 699034004
     */
    HomeOxygenTherapyDeclined: CodingArgs;
    /**
     * Code: 699037006
     */
    HepatitisBVaccinationContraindicated: CodingArgs;
    /**
     * Code: 699042003
     */
    HistoryTakingOfSexualOrientationDeclined: CodingArgs;
    /**
     * Code: 699048004
     */
    ExerciseToleranceTestNotIndicated: CodingArgs;
    /**
     * Code: 699053009
     */
    FootPulseCheckDeclined: CodingArgs;
    /**
     * Code: 699054003
     */
    AdministrationOfBloodProductDeclined: CodingArgs;
    /**
     * Code: 699128009
     */
    BloodTransfusionDeclined: CodingArgs;
    /**
     * Code: 699137009
     */
    CarvedilolTherapyDeclined: CodingArgs;
    /**
     * Code: 699231000
     */
    DomesticAbuseNotDiscussed: CodingArgs;
    /**
     * Code: 700110004
     */
    BisphosphonateProphylaxisSuspended: CodingArgs;
    /**
     * Code: 700359005
     */
    BoosterMeningitisCVaccinationDeclined: CodingArgs;
    /**
     * Code: 700384008
     */
    AntibioticProphylaxisNotIndicated: CodingArgs;
    /**
     * Code: 700411009
     */
    RoutineEnquiryAboutDomesticAbuseDeclined: CodingArgs;
    /**
     * Code: 703427001
     */
    RefusalOfTreatmentByPatientAgainstDentalAdvice: CodingArgs;
    /**
     * Code: 703942005
     */
    NeverHadMammogram: CodingArgs;
    /**
     * Code: 703971006
     */
    HepatitisAVaccinationNotIndicated: CodingArgs;
    /**
     * Code: 703989007
     */
    TeriparatideTherapyDeclined: CodingArgs;
    /**
     * Code: 703991004
     */
    RaloxifeneTherapyDeclined: CodingArgs;
    /**
     * Code: 703992006
     */
    BreastfeedingSupportDeclined: CodingArgs;
    /**
     * Code: 703996009
     */
    TeriparatideNotIndicated: CodingArgs;
    /**
     * Code: 703997000
     */
    TeriparatideContraindicated: CodingArgs;
    /**
     * Code: 703999002
     */
    RaloxifeneContraindicated: CodingArgs;
    /**
     * Code: 704000000
     */
    RaloxifeneNotIndicated: CodingArgs;
    /**
     * Code: 704033005
     */
    Phosphodiesterase5InhibitorNotIndicated: CodingArgs;
    /**
     * Code: 704046000
     */
    MentalHealthAssessmentDeclined: CodingArgs;
    /**
     * Code: 704047009
     */
    Phosphodiesterase5InhibitorDeclined: CodingArgs;
    /**
     * Code: 704049007
     */
    ReferralToErectileDysfunctionClinicDeclined: CodingArgs;
    /**
     * Code: 704051006
     */
    ReferralToCardiacRehabilitationProgramDeclined: CodingArgs;
    /**
     * Code: 704052004
     */
    ReferralToCardiacRehabilitationProgramNotIndicated: CodingArgs;
    /**
     * Code: 704096004
     */
    ReferralToHeartFailureExerciseProgramNotIndicated: CodingArgs;
    /**
     * Code: 704097008
     */
    ReferralToHeartFailureExerciseProgramDeclined: CodingArgs;
    /**
     * Code: 705140004
     */
    PhysicalHealthAssessmentDeclined: CodingArgs;
    /**
     * Code: 706890009
     */
    VaginalBirthAfterPreviousCesareanSectionRefused: CodingArgs;
    /**
     * Code: 707287001
     */
    HepatitisBVaccinationNotIndicated: CodingArgs;
    /**
     * Code: 707298000
     */
    Phosphodiesterase5InhibitorContraindicated: CodingArgs;
    /**
     * Code: 707745004
     */
    TuberculosisScreeningDeclined: CodingArgs;
    /**
     * Code: 707746003
     */
    ScreeningChestXRayDeclined: CodingArgs;
    /**
     * Code: 707853004
     */
    TestingForEbolaVirusNotIndicated: CodingArgs;
    /**
     * Code: 708000007
     */
    InsulinTreatmentStopped: CodingArgs;
    /**
     * Code: 708129006
     */
    TransfusionOfBloodProductRefusedForReligiousReason: CodingArgs;
    /**
     * Code: 709198003
     */
    EducationNotIndicated: CodingArgs;
    /**
     * Code: 710765004
     */
    WoundDrainDiscontinued: CodingArgs;
    /**
     * Code: 712740006
     */
    MedicationMonitoringNotIndicated: CodingArgs;
    /**
     * Code: 712751006
     */
    RadiationTherapyNotDone: CodingArgs;
    /**
     * Code: 712790005
     */
    TripleTestNotOffered: CodingArgs;
    /**
     * Code: 712803007
     */
    AdministrationOfAntiDGlobulinNotOffered: CodingArgs;
    /**
     * Code: 712812009
     */
    AntenatalUltrasoundScanNotOffered: CodingArgs;
    /**
     * Code: 712851004
     */
    AlphaFetoproteinBloodTestNotOffered: CodingArgs;
    /**
     * Code: 712852006
     */
    AmniocentesisNotOffered: CodingArgs;
    /**
     * Code: 712854007
     */
    AntenatalScreeningForViralHepatitisTypeBNotOffered: CodingArgs;
    /**
     * Code: 712869008
     */
    AntenatalHIVHumanImmunodeficiencyVirusScreeningNotOffered: CodingArgs;
    /**
     * Code: 712870009
     */
    AntenatalRhesusAntibodyScreeningNotOffered: CodingArgs;
    /**
     * Code: 712872001
     */
    AntenatalThalassemiaScreeningNotOffered: CodingArgs;
    /**
     * Code: 712985002
     */
    ChemotherapyNotDone: CodingArgs;
    /**
     * Code: 712996005
     */
    ParentingEducationNotOffered: CodingArgs;
    /**
     * Code: 713068007
     */
    Over75YearsOfAgeHealthCheckDeclined: CodingArgs;
    /**
     * Code: 713207007
     */
    NeckDissectionNotDone: CodingArgs;
    /**
     * Code: 713246009
     */
    ProcedureDiscontinuedByHealthcareProfessional: CodingArgs;
    /**
     * Code: 713247000
     */
    ProcedureDiscontinuedByPatient: CodingArgs;
    /**
     * Code: 713248005
     */
    ProcedureDiscontinuedByDoctor: CodingArgs;
    /**
     * Code: 713615000
     */
    AdvanceCarePlanningDeclined: CodingArgs;
    /**
     * Code: 714747005
     */
    DiscussionAboutAdvanceCarePlanningDeclined: CodingArgs;
    /**
     * Code: 715163003
     */
    DiphtheriaVaccinationContraindicated: CodingArgs;
    /**
     * Code: 715166006
     */
    BacillusCalmetteGuerinVaccinationContraindicated: CodingArgs;
    /**
     * Code: 715508000
     */
    AssessmentUsingGeneralizedAnxietyDisorder7ItemScaleDeclined: CodingArgs;
    /**
     * Code: 715621003
     */
    HeartFailureEducationNotDone: CodingArgs;
    /**
     * Code: 715622005
     */
    WarfarinNotPrescribed: CodingArgs;
    /**
     * Code: 716048005
     */
    ReviewOfAdvanceCarePlanDeclined: CodingArgs;
    /**
     * Code: 921000119109
     */
    VaccineRefusedByParent: CodingArgs;
};
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare const ProcedureNotPerformedReasonCodings: ProcedureNotPerformedReasonCodingType;
//# sourceMappingURL=ProcedureNotPerformedReasonCodings.d.ts.map