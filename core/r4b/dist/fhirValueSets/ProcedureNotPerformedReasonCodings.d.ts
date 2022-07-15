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
     * Code: 11121000175106
     */
    HepatitisAVaccinationDeclinedSituation: CodingArgs;
    /**
     * Code: 112241000119107
     */
    CervicalCancerPapanicolaouSmearScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 11291000175103
     */
    AsthmaActionPlanDeclined: CodingArgs;
    /**
     * Code: 11321000175108
     */
    HeartFailureEducationDeclined: CodingArgs;
    /**
     * Code: 11331000175106
     */
    NephropathyScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 11341000175100
     */
    SerumMetabolicPanelDeclined: CodingArgs;
    /**
     * Code: 11351000175103
     */
    TobaccoUseScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 116101000119100
     */
    ColonoscopyRefusedSituation: CodingArgs;
    /**
     * Code: 116471000119100
     */
    BloodTestDeclinedSituation: CodingArgs;
    /**
     * Code: 116491000119104
     */
    OsteoporosisTreatmentDeclinedSituation: CodingArgs;
    /**
     * Code: 11892181000119102
     */
    ChemicalDependencyConsultationDeclinedSituation: CodingArgs;
    /**
     * Code: 11901000175103
     */
    AutismScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 11911000175100
     */
    HearingScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 11921000175109
     */
    VisionScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 11931000175107
     */
    DevelopmentalScreeningDeclined: CodingArgs;
    /**
     * Code: 11941000175101
     */
    ChildExaminationDeclinedSituation: CodingArgs;
    /**
     * Code: 11991000175106
     */
    ChildNotExamined: CodingArgs;
    /**
     * Code: 122371000119100
     */
    HIVScreeningDeclined: CodingArgs;
    /**
     * Code: 12275351000119103
     */
    BreastCancerScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 12275391000119108
     */
    DiabetesScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 124801000119108
     */
    OsteoporosisScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 12891000175105
     */
    HepatitisCScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 13015001000119105
     */
    LungCancerScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 130651000119102
     */
    InfluenzaVaccinationDeclinedByCaregiverSituation: CodingArgs;
    /**
     * Code: 134385008
     */
    ReferralToDieticianDeclined: CodingArgs;
    /**
     * Code: 134386009
     */
    ReferralToPodiatristRefusedByPatient: CodingArgs;
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
     * Code: 139731000119106
     */
    PneumococcalVaccinationDeclinedByCaregiverSituation: CodingArgs;
    /**
     * Code: 141851000119107
     */
    LipidScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 144511000119107
     */
    AnalExamDeclined: CodingArgs;
    /**
     * Code: 15051000175102
     */
    BodyMassIndexFollowUpPlanningDeclinedSituation: CodingArgs;
    /**
     * Code: 15651391000119108
     */
    NeonatalVitaminKAdminstrationDeclinedByCaregiverSituation: CodingArgs;
    /**
     * Code: 16218211000119109
     */
    AnalPapanicolaouSmearDeclinedSituation: CodingArgs;
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
     * Code: 16314791000119109
     */
    DrugScreeningDeclinedSituation: CodingArgs;
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
     * Code: 16472341000119108
     */
    TetanusDiphtheriaAndAcellularPertussisVaccinationDeclinedSituation: CodingArgs;
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
     * Code: 16477801000119103
     */
    DentalFluorideTreatmentDeclinedSituation: CodingArgs;
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
     * Code: 16659251000119105
     */
    ExaminationOfSkinRefusedSituation: CodingArgs;
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
    RadiographicImagingProcedureNotCarriedOutSituation: CodingArgs;
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
    AntenatalAmniocentesisNotWantedSituation: CodingArgs;
    /**
     * Code: 169660000
     */
    AntenatalUltrasoundScanNotWantedSituation: CodingArgs;
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
     * Code: 170116007
     */
    Child6WeekExaminationNotWanted: CodingArgs;
    /**
     * Code: 170117003
     */
    Child6WeekExaminationNotAttended: CodingArgs;
    /**
     * Code: 170125001
     */
    VAL89MonthExamNotWanted: CodingArgs;
    /**
     * Code: 170126000
     */
    VAL89MonthExamNotAttended: CodingArgs;
    /**
     * Code: 170134006
     */
    VAL18MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170135007
     */
    VAL18MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 170143002
     */
    VAL25YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170144008
     */
    VAL25YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170152006
     */
    VAL35YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170153001
     */
    VAL35YearExaminationNotAttendedSituation: CodingArgs;
    /**
     * Code: 170161006
     */
    VAL45YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170162004
     */
    VAL45YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170170009
     */
    VAL10YearExaminationNotWantedSituation: CodingArgs;
    /**
     * Code: 170171008
     */
    VAL10YearExaminationNotAttendedSituation: CodingArgs;
    /**
     * Code: 170179005
     */
    VAL15YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170180008
     */
    VAL15YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170256002
     */
    Child1YearExaminationNotWanted: CodingArgs;
    /**
     * Code: 170257006
     */
    Child1YearExaminationNotAttended: CodingArgs;
    /**
     * Code: 170265009
     */
    Child6MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170266005
     */
    Child6MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 170274006
     */
    Child21MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170275007
     */
    Child21MonthExaminationNotAttended: CodingArgs;
    /**
     * Code: 170283001
     */
    Child3YearExamNotWanted: CodingArgs;
    /**
     * Code: 170284007
     */
    Child3YearExamNotAttended: CodingArgs;
    /**
     * Code: 170292003
     */
    Child39MonthExaminationNotWanted: CodingArgs;
    /**
     * Code: 170293008
     */
    Child39MonthExaminationNotAttended: CodingArgs;
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
    TreatmentForHypertensionStoppedSituation: CodingArgs;
    /**
     * Code: 170620005
     */
    RespiratoryDiseaseTreatmentStoppedSituation: CodingArgs;
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
    ScreeningForMalignantNeoplasmOfCervixNotWantedSituation: CodingArgs;
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
     * Code: 182981008
     */
    CholesterolReductionProgramDeclinedSituation: CodingArgs;
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
     * Code: 183932001
     */
    ProcedureContraindicated: CodingArgs;
    /**
     * Code: 183934000
     */
    SensitivityCIToProcedure: CodingArgs;
    /**
     * Code: 183936003
     */
    ContraindicationToLiveImmunization: CodingArgs;
    /**
     * Code: 183944003
     */
    ProcedureRefused: CodingArgs;
    /**
     * Code: 183945002
     */
    ProcedureRefusedForReligiousReasonSituation: CodingArgs;
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
     * Code: 21121000175100
     */
    AlcoholUseEducationDeclinedSituation: CodingArgs;
    /**
     * Code: 21131000175102
     */
    PertussisVaccinationDeclined: CodingArgs;
    /**
     * Code: 21301000175109
     */
    FallRiskCarePlanDeclinedSituation: CodingArgs;
    /**
     * Code: 21311000175107
     */
    DiseaseModifyingAntirheumaticDrugNotPrescribed: CodingArgs;
    /**
     * Code: 21641000175100
     */
    AdultNotExaminedSituation: CodingArgs;
    /**
     * Code: 21651000175103
     */
    AntibioticProphylaxisDeclinedSituation: CodingArgs;
    /**
     * Code: 21661000175101
     */
    AntibioticProphylaxisNotPrescribed: CodingArgs;
    /**
     * Code: 21671000175109
     */
    CardiacFunctionTestDeclinedSituation: CodingArgs;
    /**
     * Code: 21681000175107
     */
    AntihypertensiveTherapyDeclinedSituation: CodingArgs;
    /**
     * Code: 21691000175105
     */
    AntihypertensiveTherapyNotPrescribedSituation: CodingArgs;
    /**
     * Code: 21701000175105
     */
    NutritionCounselingDeclinedSituation: CodingArgs;
    /**
     * Code: 23461000175102
     */
    DentalExaminationDeclinedSituation: CodingArgs;
    /**
     * Code: 23471000175105
     */
    DomesticAbuseScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 23491000175106
     */
    HepaticFunctionPanelDeclined: CodingArgs;
    /**
     * Code: 23691000175109
     */
    MeningococcalVaccinationDeclined: CodingArgs;
    /**
     * Code: 23851000175101
     */
    ThyroidFunctionTestDeclined: CodingArgs;
    /**
     * Code: 24471000175108
     */
    EyeExaminationDeclinedSituation: CodingArgs;
    /**
     * Code: 26631000175103
     */
    AnnualVisitDeclined: CodingArgs;
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
     * Code: 274512008
     */
    DrugTherapyDiscontinued: CodingArgs;
    /**
     * Code: 27591000175101
     */
    InhaledBronchodilatorDeclinedSituation: CodingArgs;
    /**
     * Code: 275935009
     */
    SurgeryContraindicated: CodingArgs;
    /**
     * Code: 275936005
     */
    PatientNoncomplianceGeneralSituation: CodingArgs;
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
     * Code: 31001000119109
     */
    ColonCancerScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 31011000119107
     */
    ProstateCancerScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 31021000119100
     */
    ScreeningDeclinedSituation: CodingArgs;
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
     * Code: 34351000175108
     */
    HumanAntiDImmunoglobulinNotAdministeredSituation: CodingArgs;
    /**
     * Code: 36401000175108
     */
    DiseaseModifyingAntirheumaticDrugDeclinedSituation: CodingArgs;
    /**
     * Code: 36751000175103
     */
    ReninAngiotensinSystemAntagonistNotPrescribed: CodingArgs;
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
     * Code: 394908001
     */
    ProcedureStopped: CodingArgs;
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
     * Code: 401179006
     */
    NoPreviousImmunizations: CodingArgs;
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
     * Code: 415523003
     */
    SharedCarePrescribingDeclined: CodingArgs;
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
    AdministrationOfSulfonylureaContraindicatedSituation: CodingArgs;
    /**
     * Code: 415667005
     */
    AdministrationOfSulfonylureaNotIndicatedSituation: CodingArgs;
    /**
     * Code: 416064006
     */
    ProcedureNotOffered: CodingArgs;
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
     * Code: 416237000
     */
    ProcedureNotDone: CodingArgs;
    /**
     * Code: 416406003
     */
    ProcedureDiscontinued: CodingArgs;
    /**
     * Code: 416432009
     */
    ProcedureNotWanted: CodingArgs;
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
    CardiopulmonaryResuscitationDiscontinuedDueToMedicalControlOrderSituation: CodingArgs;
    /**
     * Code: 425921008
     */
    CardiopulmonaryResuscitationDiscontinuedDueToDoNotResuscitateOrderSituation: CodingArgs;
    /**
     * Code: 426544006
     */
    HistoryRefusedSituation: CodingArgs;
    /**
     * Code: 426970003
     */
    CardiopulmonaryResuscitationDiscontinuedDueToReturnOfSpontaneousCirculationSituation: CodingArgs;
    /**
     * Code: 426999008
     */
    CardiopulmonaryResuscitationDiscontinuedDueToSignsOfDeathSituation: CodingArgs;
    /**
     * Code: 427569000
     */
    CardiopulmonaryResuscitationDiscontinuedAsPerProtocolSituation: CodingArgs;
    /**
     * Code: 428042006
     */
    MediumChainAcylCoenzymeADehydrogenaseDeficiencyScreeningTestDeclinedSituation: CodingArgs;
    /**
     * Code: 428073005
     */
    AlcoholConsumptionScreeningTestDeclinedSituation: CodingArgs;
    /**
     * Code: 428119001
     */
    ProcedureNotIndicatedSituation: CodingArgs;
    /**
     * Code: 428299008
     */
    SickleCellScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 428348004
     */
    CardiopulmonaryResuscitationNotAttemptedSituation: CodingArgs;
    /**
     * Code: 428650003
     */
    CongenitalHypothyroidismScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 428841003
     */
    CysticFibrosisScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 429284000
     */
    CardiovascularDiseaseRiskAssessmentDeclinedSituation: CodingArgs;
    /**
     * Code: 429688007
     */
    NurseTriageDeclinedSituation: CodingArgs;
    /**
     * Code: 429726000
     */
    PhenylketonuriaScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 429739001
     */
    PatientRefusedTransportationSituation: CodingArgs;
    /**
     * Code: 430279008
     */
    DrugTreatmentStoppedAtEndOfClinicalTrialSituation: CodingArgs;
    /**
     * Code: 438370008
     */
    VascularDiseaseRiskAssessmentDeclinedSituation: CodingArgs;
    /**
     * Code: 438604008
     */
    PeritonealDialysisTherapyDiscontinuedSituation: CodingArgs;
    /**
     * Code: 438765003
     */
    HumanPapillomavirusVaccinationDeclinedSituation: CodingArgs;
    /**
     * Code: 438767006
     */
    TerminationOfPregnancyContraindicatedSituation: CodingArgs;
    /**
     * Code: 438833006
     */
    AdministrationOfDrugOrMedicamentContraindicatedSituation: CodingArgs;
    /**
     * Code: 439495000
     */
    CounselingDeclinedSituation: CodingArgs;
    /**
     * Code: 439516000
     */
    HemodialysisTherapyDiscontinuedSituation: CodingArgs;
    /**
     * Code: 439867009
     */
    DeterminationOfPatternOfResistanceToAntiviralAgentNotDoneSituation: CodingArgs;
    /**
     * Code: 440621003
     */
    ReferralDeclinedByPatientSituation: CodingArgs;
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
     * Code: 4431000175103
     */
    AsthmaMedicationNotPrescribedSituation: CodingArgs;
    /**
     * Code: 443788002
     */
    MaternalPostnatalExaminationNotAttendedSituation: CodingArgs;
    /**
     * Code: 444020006
     */
    MaternalPostnatalExaminationRefusedSituation: CodingArgs;
    /**
     * Code: 4451000175106
     */
    AsthmaActionPlanNotDoneSituation: CodingArgs;
    /**
     * Code: 4461000175108
     */
    CervicalCancerScreeningNotDoneSituation: CodingArgs;
    /**
     * Code: 4471000175100
     */
    ColorectalCancerScreeningNotDoneSituation: CodingArgs;
    /**
     * Code: 4481000175102
     */
    DiabetesMellitusScreeningNotDoneSituation: CodingArgs;
    /**
     * Code: 4501000175108
     */
    HemoglobinA1CTestNotDoneSituation: CodingArgs;
    /**
     * Code: 4511000175106
     */
    LipidScreeningTestNotDone: CodingArgs;
    /**
     * Code: 4521000175102
     */
    MeaslesMumpsAndRubellaVaccinationNotDoneSituation: CodingArgs;
    /**
     * Code: 4531000175104
     */
    TobaccoCessationEducationNotDoneSituation: CodingArgs;
    /**
     * Code: 4541000175105
     */
    SpirometryNotDoneSituation: CodingArgs;
    /**
     * Code: 4551000175107
     */
    DiabeticFootExamNotDone: CodingArgs;
    /**
     * Code: 4571000175101
     */
    LipidLoweringMedicationNotPrescribedSituation: CodingArgs;
    /**
     * Code: 4581000175103
     */
    DiabeticRetinalEyeExamNotDoneSituation: CodingArgs;
    /**
     * Code: 4591000175100
     */
    BoneDensityScreeningNotDoneSituation: CodingArgs;
    /**
     * Code: 473149004
     */
    LongActingReversibleContraceptionDeclinedSituation: CodingArgs;
    /**
     * Code: 591000119102
     */
    VaccineRefusedByPatient: CodingArgs;
    /**
     * Code: 5991000175105
     */
    PeakExpiratoryFlowNotDoneSituation: CodingArgs;
    /**
     * Code: 6001000175106
     */
    SystemicCorticosteroidNotPrescribedSituation: CodingArgs;
    /**
     * Code: 6011000175109
     */
    InhaledBronchodilatorNotPrescribedSituation: CodingArgs;
    /**
     * Code: 6021000175100
     */
    VaccinationForDiphtheriaPertussisAndTetanusNotDone: CodingArgs;
    /**
     * Code: 6031000175102
     */
    VaricellaVaccinationNotDoneSituation: CodingArgs;
    /**
     * Code: 6041000175108
     */
    HepatitisAVaccinationNotDoneSituation: CodingArgs;
    /**
     * Code: 6051000175105
     */
    HepatitisBVaccinationNotDoneSituation: CodingArgs;
    /**
     * Code: 698357006
     */
    AbdominalAorticAneurysmScreeningDeclined: CodingArgs;
    /**
     * Code: 698451006
     */
    AnkleBrachialPressureIndexTestDeclinedSituation: CodingArgs;
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
    BisoprololContraindicatedSituation: CodingArgs;
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
    UrineDipstickTestDeclinedSituation: CodingArgs;
    /**
     * Code: 698521002
     */
    SimvastatinContraindicated: CodingArgs;
    /**
     * Code: 698569004
     */
    PostnatalDepressionNotDiscussedSituation: CodingArgs;
    /**
     * Code: 698753008
     */
    NoHistoryOfCervicalSmearSituation: CodingArgs;
    /**
     * Code: 698758004
     */
    NebivololTherapyRefused: CodingArgs;
    /**
     * Code: 698950001
     */
    InfluenzaAVirusSubtypeH1N1VaccinationDeclinedSituation: CodingArgs;
    /**
     * Code: 699034004
     */
    HomeOxygenTherapyDeclinedSituation: CodingArgs;
    /**
     * Code: 699037006
     */
    HepatitisBVaccinationContraindicated: CodingArgs;
    /**
     * Code: 699042003
     */
    HistoryTakingOfSexualOrientationDeclinedSituation: CodingArgs;
    /**
     * Code: 699048004
     */
    ExerciseToleranceTestNotIndicatedSituation: CodingArgs;
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
    DomesticAbuseNotDiscussedSituation: CodingArgs;
    /**
     * Code: 700110004
     */
    BisphosphonateProphylaxisSuspended: CodingArgs;
    /**
     * Code: 700359005
     */
    BoosterMeningitisCVaccinationDeclinedSituation: CodingArgs;
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
    NoHistoryOfMammogramSituation: CodingArgs;
    /**
     * Code: 703971006
     */
    HepatitisAVaccinationNotIndicatedSituation: CodingArgs;
    /**
     * Code: 703989007
     */
    TeriparatideTherapyDeclinedSituation: CodingArgs;
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
    TeriparatideNotIndicatedSituation: CodingArgs;
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
    Phosphodiesterase5InhibitorNotIndicatedSituation: CodingArgs;
    /**
     * Code: 704046000
     */
    MentalHealthAssessmentDeclinedSituation: CodingArgs;
    /**
     * Code: 704047009
     */
    Phosphodiesterase5InhibitorDeclinedSituation: CodingArgs;
    /**
     * Code: 704049007
     */
    ReferralToErectileDysfunctionClinicDeclinedSituation: CodingArgs;
    /**
     * Code: 704051006
     */
    ReferralToCardiacRehabilitationProgramDeclinedSituation: CodingArgs;
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
    AssessmentOfPhysicalHealthDeclinedSituation: CodingArgs;
    /**
     * Code: 706890009
     */
    VaginalBirthAfterPreviousCesareanSectionRefusedSituation: CodingArgs;
    /**
     * Code: 707287001
     */
    HepatitisBVaccinationNotIndicated: CodingArgs;
    /**
     * Code: 707298000
     */
    Phosphodiesterase5InhibitorContraindicatedSituation: CodingArgs;
    /**
     * Code: 70732231000132107
     */
    DuplicateDrugTherapyStopped: CodingArgs;
    /**
     * Code: 707745004
     */
    TuberculosisScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 707746003
     */
    ScreeningChestXRayDeclined: CodingArgs;
    /**
     * Code: 707853004
     */
    TestingForEbolaVirusNotIndicatedSituation: CodingArgs;
    /**
     * Code: 708000007
     */
    InsulinTreatmentStoppedSituation: CodingArgs;
    /**
     * Code: 708129006
     */
    TransfusionOfBloodProductRefusedForReligiousReasonSituation: CodingArgs;
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
     * Code: 712985002
     */
    ChemotherapyNotDone: CodingArgs;
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
    ProcedureDiscontinuedByHealthcareProfessionalSituation: CodingArgs;
    /**
     * Code: 713247000
     */
    ProcedureDiscontinuedByPatient: CodingArgs;
    /**
     * Code: 713248005
     */
    ProcedureDiscontinuedByDoctorSituation: CodingArgs;
    /**
     * Code: 713615000
     */
    AdvanceCarePlanningDeclined: CodingArgs;
    /**
     * Code: 714747005
     */
    DiscussionAboutAdvanceCarePlanningDeclinedSituation: CodingArgs;
    /**
     * Code: 715163003
     */
    DiphtheriaVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 715166006
     */
    BacillusCalmetteGuerinVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 715508000
     */
    AssessmentUsingGeneralizedAnxietyDisorder7ItemScaleDeclinedSituation: CodingArgs;
    /**
     * Code: 715621003
     */
    HeartFailureEducationNotDoneSituation: CodingArgs;
    /**
     * Code: 715622005
     */
    WarfarinNotPrescribedSituation: CodingArgs;
    /**
     * Code: 716048005
     */
    ReviewOfAdvanceCarePlanDeclinedSituation: CodingArgs;
    /**
     * Code: 718700006
     */
    ReferralToPsychologyServiceDeclinedSituation: CodingArgs;
    /**
     * Code: 719072001
     */
    BiopsyOfKidneyNotDoneSituation: CodingArgs;
    /**
     * Code: 71911000119106
     */
    NoVaginalPAPSmearRequiredDueToHistoryOfHysterectomy: CodingArgs;
    /**
     * Code: 719320000
     */
    YellowFeverVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719324009
     */
    CombinedHepatitisAAndBVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719325005
     */
    SmallpoxVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719330009
     */
    HepatitisAVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719457005
     */
    TickBorneEncephalitisVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719458000
     */
    JapaneseEncephalitisVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719467000
     */
    MeaslesVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719469002
     */
    CholeraVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719470001
     */
    TyphoidVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719472009
     */
    RabiesVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719473004
     */
    RubellaVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719474005
     */
    TetanusVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719476007
     */
    PoliomyelitisVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719598000
     */
    MeningitisCVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 719603008
     */
    RabiesPostExposureProphylaxisContraindicatedSituation: CodingArgs;
    /**
     * Code: 719654008
     */
    PrescriptionOfAnticipatoryCareMedicationDeclinedSituation: CodingArgs;
    /**
     * Code: 719828003
     */
    AutopsyNotDoneSituation: CodingArgs;
    /**
     * Code: 719857004
     */
    TelehealthMonitoringSuspendedSituation: CodingArgs;
    /**
     * Code: 719886001
     */
    HaemophilusInfluenzaeTypeBVaccinationContraindicatedSituation: CodingArgs;
    /**
     * Code: 720022007
     */
    SharedCarePrescribingOfDrugsForDementiaDeclinedSituation: CodingArgs;
    /**
     * Code: 720548009
     */
    MeningitisBVaccinationDeclinedSituation: CodingArgs;
    /**
     * Code: 720581005
     */
    RegistrationForOnlineAccessToLocalGeneralPracticeServiceDeclinedSituation: CodingArgs;
    /**
     * Code: 720832001
     */
    FallRiskAssessmentDeclinedSituation: CodingArgs;
    /**
     * Code: 720833006
     */
    BoneDensityScanDeclinedSituation: CodingArgs;
    /**
     * Code: 720834000
     */
    DepressionScreeningDeclinedSituation: CodingArgs;
    /**
     * Code: 720835004
     */
    MammogramDeclined: CodingArgs;
    /**
     * Code: 720971004
     */
    InsulinDeclinedSituation: CodingArgs;
    /**
     * Code: 721107007
     */
    ReferralToSpecialistRefusedSituation: CodingArgs;
    /**
     * Code: 721110000
     */
    ReferralToNephrologistRefusedSituation: CodingArgs;
    /**
     * Code: 721111001
     */
    ReferralToCardiologistRefusedSituation: CodingArgs;
    /**
     * Code: 722338002
     */
    SecondMeningitisBVaccinationDeclinedSituation: CodingArgs;
    /**
     * Code: 722396000
     */
    BoosterMeningitisBVaccinationDeclinedSituation: CodingArgs;
    /**
     * Code: 722397009
     */
    FirstMeningitisBVaccinationDeclinedSituation: CodingArgs;
    /**
     * Code: 722825000
     */
    BowelPreparationNotDoneSituation: CodingArgs;
    /**
     * Code: 723061000
     */
    TetanusVaccinationRefusedByPatientSituation: CodingArgs;
    /**
     * Code: 723062007
     */
    VaricellaZosterVaccineDeclined: CodingArgs;
    /**
     * Code: 725022005
     */
    ReferralToOphthalmologistRefusedByPatient: CodingArgs;
    /**
     * Code: 725025007
     */
    ReferralToGastroenterologistDeclinedBySubjectSituation: CodingArgs;
    /**
     * Code: 725275004
     */
    ReferralToGynecologistDeclinedBySubjectSituation: CodingArgs;
    /**
     * Code: 726696005
     */
    ReferralToOncologistDeclinedBySubjectSituation: CodingArgs;
    /**
     * Code: 726697001
     */
    ReferralToPsychiatristDeclinedBySubjectSituation: CodingArgs;
    /**
     * Code: 726698006
     */
    ReferralToRespiratoryPhysicianDeclinedBySubjectSituation: CodingArgs;
    /**
     * Code: 726699003
     */
    ReferralToColorectalSurgeonDeclinedBySubjectSituation: CodingArgs;
    /**
     * Code: 733035008
     */
    PreviouslyInitiatedDentalTherapyNotCompleted: CodingArgs;
    /**
     * Code: 736004008
     */
    NebivololContraindicatedSituation: CodingArgs;
    /**
     * Code: 736005009
     */
    HistologyNotIndicatedSituation: CodingArgs;
    /**
     * Code: 736006005
     */
    CarvedilolContraindicatedSituation: CodingArgs;
    /**
     * Code: 736013005
     */
    BodyWeightMeasurementDeclinedSituation: CodingArgs;
    /**
     * Code: 736085006
     */
    ReferralToRespiratoryClinicDeclinedSituation: CodingArgs;
    /**
     * Code: 736150009
     */
    DeclinedToPerformInhalerTechniqueSituation: CodingArgs;
    /**
     * Code: 736427008
     */
    ScreeningForHumanPapillomavirusDeclinedSituation: CodingArgs;
    /**
     * Code: 736595007
     */
    ScreeningForMalignantNeoplasmOfCervixDeclinedSituation: CodingArgs;
    /**
     * Code: 7611000175100
     */
    DipyridamoleContraindicatedSituation: CodingArgs;
    /**
     * Code: 761844008
     */
    HumanPapillomaVirusVaccinationContraindicated: CodingArgs;
    /**
     * Code: 762450006
     */
    ProcedureNotDoneBecauseContraindicated: CodingArgs;
    /**
     * Code: 763021000
     */
    AdministrationOfRhDImmuneGlobulinRefused: CodingArgs;
    /**
     * Code: 763024008
     */
    SamplingOfChorionicVillusRefused: CodingArgs;
    /**
     * Code: 763029003
     */
    AntenatalThalassemiaScreeningRefusedSituation: CodingArgs;
    /**
     * Code: 763030008
     */
    AntenatalScreeningForViralHepatitisTypeBRefusedSituation: CodingArgs;
    /**
     * Code: 763031007
     */
    AntenatalScreeningForHumanImmunodeficiencyVirusRefused: CodingArgs;
    /**
     * Code: 763076007
     */
    EnvironmentalRiskAssessmentDeclinedSituation: CodingArgs;
    /**
     * Code: 763079000
     */
    FollowUpRefused: CodingArgs;
    /**
     * Code: 763083000
     */
    GeriatricScreeningRefused: CodingArgs;
    /**
     * Code: 763085007
     */
    ObesityMonitoringRefused: CodingArgs;
    /**
     * Code: 763086008
     */
    WellWomanHealthCheckRefused: CodingArgs;
    /**
     * Code: 763221007
     */
    AsthmaMonitoringRefusedSituation: CodingArgs;
    /**
     * Code: 763282002
     */
    NewPatientScreeningRefused: CodingArgs;
    /**
     * Code: 763284001
     */
    ClinicalTrialDeclined: CodingArgs;
    /**
     * Code: 763322002
     */
    OsteoporosisMonitoringDeclined: CodingArgs;
    /**
     * Code: 763323007
     */
    HormoneReplacementTherapyRefused: CodingArgs;
    /**
     * Code: 763324001
     */
    HypertensionMonitoringRefused: CodingArgs;
    /**
     * Code: 763356008
     */
    WellManHealthCheckDeclined: CodingArgs;
    /**
     * Code: 763361005
     */
    PostnatalCareRefusedSituation: CodingArgs;
    /**
     * Code: 763380007
     */
    ProvisionOfChaperoneRefused: CodingArgs;
    /**
     * Code: 763384003
     */
    AntenatalScreeningForDownEdwardsAndPatauSyndromesDeclinedSituation: CodingArgs;
    /**
     * Code: 763385002
     */
    AntenatalScreeningForDownSyndromeDeclinedSituation: CodingArgs;
    /**
     * Code: 763386001
     */
    AntenatalScreeningForEdwardsAndPatauSyndromesDeclinedSituation: CodingArgs;
    /**
     * Code: 763481007
     */
    MonitoringOfHormoneReplacementTherapyRefused: CodingArgs;
    /**
     * Code: 763483005
     */
    MonitoringForStressDeclined: CodingArgs;
    /**
     * Code: 763726001
     */
    RefusalByPatientToProvideInformationAboutEthnicGroup: CodingArgs;
    /**
     * Code: 763780009
     */
    MedicationDosageIncreaseDeclined: CodingArgs;
    /**
     * Code: 763781008
     */
    AdultHealthExaminationDeclined: CodingArgs;
    /**
     * Code: 763782001
     */
    ProvisionOfPatientHeldDiabetesRecordDeclined: CodingArgs;
    /**
     * Code: 763896000
     */
    RefusalByPatientToProvideInformationAboutReligion: CodingArgs;
    /**
     * Code: 763897009
     */
    AntineoplasticChemotherapyRegimenRefused: CodingArgs;
    /**
     * Code: 764526007
     */
    PatientDeclinedToProvideInformationAboutSpokenLanguage: CodingArgs;
    /**
     * Code: 764637000
     */
    LipidLoweringTherapyStoppedSituation: CodingArgs;
    /**
     * Code: 765001003
     */
    MonitoringOfSmokingCessationTherapyDeclined: CodingArgs;
    /**
     * Code: 765002005
     */
    RiskAssessmentRefused: CodingArgs;
    /**
     * Code: 765105005
     */
    GeriatricMonitoringDeclined: CodingArgs;
    /**
     * Code: 772789003
     */
    TypeIIDiabetesMellitusRiskAssessmentDeclined: CodingArgs;
    /**
     * Code: 774215001
     */
    InvitationToParticipateInResearchStudyDeclined: CodingArgs;
    /**
     * Code: 833323000
     */
    EvaluationProcedureNotIndicatedSituation: CodingArgs;
    /**
     * Code: 840598000
     */
    PlateletAggregationInhibitorTherapyContraindicatedSituation: CodingArgs;
    /**
     * Code: 866267001
     */
    ArtificialRespirationDiscontinued: CodingArgs;
    /**
     * Code: 871868000
     */
    ImmunizationHesitancyByPatient: CodingArgs;
    /**
     * Code: 871879005
     */
    ImmunizationHesitancyByParent: CodingArgs;
    /**
     * Code: 90311000119107
     */
    VaccinationDeclinedByCaregiverSituation: CodingArgs;
    /**
     * Code: 90351000119108
     */
    VaccinationNotDoneSituation: CodingArgs;
    /**
     * Code: 9201000175107
     */
    LeadScreeningDeclined: CodingArgs;
    /**
     * Code: 921000119109
     */
    VaccineRefusedByParent: CodingArgs;
    /**
     * Code: 9471000175101
     */
    HyperlipidemiaScreeningTestDeclined: CodingArgs;
    /**
     * Code: 9481000175103
     */
    HemoglobinA1CTestDeclinedSituation: CodingArgs;
    /**
     * Code: 9501000175109
     */
    FunctionalAssessmentDeclinedSituation: CodingArgs;
    /**
     * Code: 9511000175107
     */
    DepressionFollowUpDeclinedSituation: CodingArgs;
    /**
     * Code: 9521000175103
     */
    AsthmaMedicationDeclinedSituation: CodingArgs;
    /**
     * Code: 9711000175104
     */
    MeaslesMumpsAndRubellaVaccinationDeclinedSituation: CodingArgs;
};
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare const ProcedureNotPerformedReasonCodings: ProcedureNotPerformedReasonCodingType;
//# sourceMappingURL=ProcedureNotPerformedReasonCodings.d.ts.map