/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare const ProcedureNotPerformedReasonCodes: {
    /**
     * Code: 105480006
     */
    readonly RefusalOfTreatmentByPatient: "105480006";
    /**
     * Code: 116101000119100
     */
    readonly ColonoscopyRefused: "116101000119100";
    /**
     * Code: 134385008
     */
    readonly ReferralToDieticianDeclined: "134385008";
    /**
     * Code: 134386009
     */
    readonly ReferralToChiropodistDeclined: "134386009";
    /**
     * Code: 134390006
     */
    readonly AngiotensinConvertingEnzymeInhibitorNotIndicated: "134390006";
    /**
     * Code: 134391005
     */
    readonly StatinNotIndicated: "134391005";
    /**
     * Code: 134392003
     */
    readonly WarfarinNotIndicated: "134392003";
    /**
     * Code: 134394002
     */
    readonly AspirinNotIndicated: "134394002";
    /**
     * Code: 134396000
     */
    readonly StatinDeclined: "134396000";
    /**
     * Code: 134397009
     */
    readonly AngiotensinConvertingEnzymeInhibitorDeclined: "134397009";
    /**
     * Code: 134398004
     */
    readonly WarfarinDeclined: "134398004";
    /**
     * Code: 135805008
     */
    readonly NitrateNotIndicated: "135805008";
    /**
     * Code: 135806009
     */
    readonly CalciumChannelBlockerNotIndicated: "135806009";
    /**
     * Code: 135807000
     */
    readonly LipidLoweringTherapyNotIndicated: "135807000";
    /**
     * Code: 135808005
     */
    readonly DiureticNotIndicated: "135808005";
    /**
     * Code: 135809002
     */
    readonly NitrateContraindicated: "135809002";
    /**
     * Code: 135811006
     */
    readonly DiureticContraindicated: "135811006";
    /**
     * Code: 135812004
     */
    readonly NitrateDeclined: "135812004";
    /**
     * Code: 135814003
     */
    readonly DiureticDeclined: "135814003";
    /**
     * Code: 135822005
     */
    readonly LipidLoweringTherapyContraindicated: "135822005";
    /**
     * Code: 135823000
     */
    readonly CalciumChannelBlockerContraindicated: "135823000";
    /**
     * Code: 135825007
     */
    readonly CalciumChannelBlockerDeclined: "135825007";
    /**
     * Code: 135826008
     */
    readonly LipidLoweringTherapyDeclined: "135826008";
    /**
     * Code: 146922001
     */
    readonly RubellaScreeningNotOffered: "146922001";
    /**
     * Code: 147022006
     */
    readonly DoubleTestNotOffered: "147022006";
    /**
     * Code: 148324002
     */
    readonly ScreeningNotOffered: "148324002";
    /**
     * Code: 148477008
     */
    readonly ImmunizationNotOffered: "148477008";
    /**
     * Code: 162650008
     */
    readonly PatientNotExamined: "162650008";
    /**
     * Code: 162675007
     */
    readonly GeneralExaminationNotDone: "162675007";
    /**
     * Code: 162882008
     */
    readonly RespiratorySystemNotExamined: "162882008";
    /**
     * Code: 162980001
     */
    readonly CVSNotExamined: "162980001";
    /**
     * Code: 163128002
     */
    readonly GITNotExamined: "163128002";
    /**
     * Code: 163348001
     */
    readonly GUSystemNotExamined: "163348001";
    /**
     * Code: 163582008
     */
    readonly NervousSystemNotExamined: "163582008";
    /**
     * Code: 163628001
     */
    readonly SensorySystemNotExamined: "163628001";
    /**
     * Code: 163900009
     */
    readonly OECNSNotExamined: "163900009";
    /**
     * Code: 164176006
     */
    readonly ENTExaminationNotPerformed: "164176006";
    /**
     * Code: 164286000
     */
    readonly OETemperatureNotTaken: "164286000";
    /**
     * Code: 164321005
     */
    readonly OESkinNotExamined: "164321005";
    /**
     * Code: 164445005
     */
    readonly OEExtremitiesNotExamined: "164445005";
    /**
     * Code: 164503006
     */
    readonly OrthopedicExamNotDone: "164503006";
    /**
     * Code: 164713001
     */
    readonly NeurologicalDiagnosticProcedureNotDone: "164713001";
    /**
     * Code: 164725003
     */
    readonly VisualTestingNotDone: "164725003";
    /**
     * Code: 164746007
     */
    readonly AuditoryVestibularTestNotDone: "164746007";
    /**
     * Code: 164766003
     */
    readonly SpecialENTProcedureNotDone: "164766003";
    /**
     * Code: 164776000
     */
    readonly SpecialCVSTestNotDone: "164776000";
    /**
     * Code: 164786004
     */
    readonly SpecialGITTestNotDone: "164786004";
    /**
     * Code: 164795007
     */
    readonly SpecialUrinaryTestNotDone: "164795007";
    /**
     * Code: 164808009
     */
    readonly SpecialFemaleTestNotDone: "164808009";
    /**
     * Code: 164823004
     */
    readonly SpecialMaleTestNotDone: "164823004";
    /**
     * Code: 164831009
     */
    readonly MusculoskeletalTestNotDone: "164831009";
    /**
     * Code: 164853006
     */
    readonly ECGNotDone: "164853006";
    /**
     * Code: 164964005
     */
    readonly SusceptibilitySkinTestNotDone: "164964005";
    /**
     * Code: 164978006
     */
    readonly MantouxTestNotDone: "164978006";
    /**
     * Code: 164985005
     */
    readonly KveimTestNotDone: "164985005";
    /**
     * Code: 164997006
     */
    readonly HypersensitivitySkinTestNotDone: "164997006";
    /**
     * Code: 165008002
     */
    readonly AllergyTestingNotDone: "165008002";
    /**
     * Code: 165017002
     */
    readonly LungFunctionTestingNotDone: "165017002";
    /**
     * Code: 165026004
     */
    readonly LungVolumeTestNotDone: "165026004";
    /**
     * Code: 165035006
     */
    readonly RespiratoryFlowRateNotMeasured: "165035006";
    /**
     * Code: 165074004
     */
    readonly CardiacFunctionTestNotDone: "165074004";
    /**
     * Code: 165081006
     */
    readonly ExerciseToleranceTestNotDone: "165081006";
    /**
     * Code: 165104002
     */
    readonly MetabolicFunctionNotTested: "165104002";
    /**
     * Code: 165122004
     */
    readonly NonSurgicalBiopsyNotDone: "165122004";
    /**
     * Code: 165139002
     */
    readonly EndoscopyNotCarriedOut: "165139002";
    /**
     * Code: 165342003
     */
    readonly PatientRefusedLaboratoryTest: "165342003";
    /**
     * Code: 165343008
     */
    readonly LaboratoryTestRequestedNotDone: "165343008";
    /**
     * Code: 165376007
     */
    readonly PatientRefusedHematologyTest: "165376007";
    /**
     * Code: 165377003
     */
    readonly HematologyTestRequestNotDone: "165377003";
    /**
     * Code: 165393007
     */
    readonly HemoglobinNotEstimated: "165393007";
    /**
     * Code: 167219008
     */
    readonly UrineNotExamined: "167219008";
    /**
     * Code: 167260001
     */
    readonly UrineGlucoseTestNotDone: "167260001";
    /**
     * Code: 167272007
     */
    readonly UrineProteinTestNotDone: "167272007";
    /**
     * Code: 167286006
     */
    readonly UrineKetoneTestNotDone: "167286006";
    /**
     * Code: 167296002
     */
    readonly UrineBloodTestNotDone: "167296002";
    /**
     * Code: 167306007
     */
    readonly UrinePHTestNotDone: "167306007";
    /**
     * Code: 167317008
     */
    readonly UrineBacteriaTestNotDone: "167317008";
    /**
     * Code: 167322008
     */
    readonly UrineUrobilinogenNotTested: "167322008";
    /**
     * Code: 167594003
     */
    readonly FecesNotExamined: "167594003";
    /**
     * Code: 167701000
     */
    readonly CSFNotExamined: "167701000";
    /**
     * Code: 167728005
     */
    readonly CSFChemistryNotTested: "167728005";
    /**
     * Code: 168497006
     */
    readonly RadiographicImagingProcedureNotCarriedOut: "168497006";
    /**
     * Code: 168499009
     */
    readonly RadiologyRefused: "168499009";
    /**
     * Code: 168533005
     */
    readonly RadiotherapyStopped: "168533005";
    /**
     * Code: 169551000
     */
    readonly ContraceptionContraindicated: "169551000";
    /**
     * Code: 169607004
     */
    readonly NoAntenatalCare: "169607004";
    /**
     * Code: 169608009
     */
    readonly AntenatalCareNotOffered: "169608009";
    /**
     * Code: 169609001
     */
    readonly AntenatalCareNotWanted: "169609001";
    /**
     * Code: 169610006
     */
    readonly AntenatalCareNotAttended: "169610006";
    /**
     * Code: 169611005
     */
    readonly NoAntenatalCareNotKnownPregnant: "169611005";
    /**
     * Code: 169635000
     */
    readonly ParentCraftNotWanted: "169635000";
    /**
     * Code: 169649009
     */
    readonly ANAmniocentesisNotWanted: "169649009";
    /**
     * Code: 169660000
     */
    readonly ANUSScanNotWanted: "169660000";
    /**
     * Code: 169687001
     */
    readonly AFPBloodTestNotWanted: "169687001";
    /**
     * Code: 169693009
     */
    readonly RubellaScreeningNotWanted: "169693009";
    /**
     * Code: 169699008
     */
    readonly AntenatalSyphilisScreeningNotDone: "169699008";
    /**
     * Code: 169704000
     */
    readonly AntenatalBloodGroupScreeningNotDone: "169704000";
    /**
     * Code: 169708002
     */
    readonly AntenatalSickleScreeningNotDone: "169708002";
    /**
     * Code: 169795009
     */
    readonly TripleTestNotWanted: "169795009";
    /**
     * Code: 169796005
     */
    readonly DoubleTestNotWanted: "169796005";
    /**
     * Code: 170100005
     */
    readonly ChildNotExaminedAtBirth: "170100005";
    /**
     * Code: 170108003
     */
    readonly ChildNotExaminedAt10Days: "170108003";
    /**
     * Code: 170115006
     */
    readonly Child6WeekExaminationNotOffered: "170115006";
    /**
     * Code: 170116007
     */
    readonly Child6WeekExaminationNotWanted: "170116007";
    /**
     * Code: 170117003
     */
    readonly Child6WeekExaminationNotAttended: "170117003";
    /**
     * Code: 170124002
     */
    readonly VAL89MonthExamNotOffered: "170124002";
    /**
     * Code: 170125001
     */
    readonly VAL89MonthExamNotWanted: "170125001";
    /**
     * Code: 170126000
     */
    readonly VAL89MonthExamNotAttended: "170126000";
    /**
     * Code: 170133000
     */
    readonly VAL18MonthExaminationNotOffered: "170133000";
    /**
     * Code: 170134006
     */
    readonly VAL18MonthExaminationNotWanted: "170134006";
    /**
     * Code: 170135007
     */
    readonly VAL18MonthExaminationNotAttended: "170135007";
    /**
     * Code: 170142007
     */
    readonly VAL25YearExaminationNotOffered: "170142007";
    /**
     * Code: 170143002
     */
    readonly VAL25YearExaminationNotWanted: "170143002";
    /**
     * Code: 170144008
     */
    readonly VAL25YearExaminationNotAttended: "170144008";
    /**
     * Code: 170151004
     */
    readonly VAL35YearExaminationNotOffered: "170151004";
    /**
     * Code: 170152006
     */
    readonly VAL35YearExaminationNotWanted: "170152006";
    /**
     * Code: 170153001
     */
    readonly VAL35YearExaminationNotAttended: "170153001";
    /**
     * Code: 170160007
     */
    readonly VAL45YearExaminationNotOffered: "170160007";
    /**
     * Code: 170161006
     */
    readonly VAL45YearExaminationNotWanted: "170161006";
    /**
     * Code: 170162004
     */
    readonly VAL45YearExaminationNotAttended: "170162004";
    /**
     * Code: 170169008
     */
    readonly VAL10YearExaminationNotOffered: "170169008";
    /**
     * Code: 170170009
     */
    readonly VAL10YearExaminationNotWanted: "170170009";
    /**
     * Code: 170171008
     */
    readonly VAL10YearExaminationNotAttended: "170171008";
    /**
     * Code: 170178002
     */
    readonly VAL15YearExaminationNotOffered: "170178002";
    /**
     * Code: 170179005
     */
    readonly VAL15YearExaminationNotWanted: "170179005";
    /**
     * Code: 170180008
     */
    readonly VAL15YearExaminationNotAttended: "170180008";
    /**
     * Code: 170255003
     */
    readonly Child1YearExaminationNotOffered: "170255003";
    /**
     * Code: 170256002
     */
    readonly Child1YearExaminationNotWanted: "170256002";
    /**
     * Code: 170257006
     */
    readonly Child1YearExaminationNotAttended: "170257006";
    /**
     * Code: 170264008
     */
    readonly Child6MonthExaminationNotOffered: "170264008";
    /**
     * Code: 170265009
     */
    readonly Child6MonthExaminationNotWanted: "170265009";
    /**
     * Code: 170266005
     */
    readonly Child6MonthExaminationNotAttended: "170266005";
    /**
     * Code: 170273000
     */
    readonly Child21MonthExaminationNotOffered: "170273000";
    /**
     * Code: 170274006
     */
    readonly Child21MonthExaminationNotWanted: "170274006";
    /**
     * Code: 170275007
     */
    readonly Child21MonthExaminationNotAttended: "170275007";
    /**
     * Code: 170282006
     */
    readonly Child3YearExamNotOffered: "170282006";
    /**
     * Code: 170283001
     */
    readonly Child3YearExamNotWanted: "170283001";
    /**
     * Code: 170284007
     */
    readonly Child3YearExamNotAttended: "170284007";
    /**
     * Code: 170291005
     */
    readonly Child39MonthExaminationNotOffered: "170291005";
    /**
     * Code: 170292003
     */
    readonly Child39MonthExaminationNotWanted: "170292003";
    /**
     * Code: 170293008
     */
    readonly Child39MonthExaminationNotAttended: "170293008";
    /**
     * Code: 170301000
     */
    readonly Child8WeekExaminationNotOffered: "170301000";
    /**
     * Code: 170302007
     */
    readonly Child8WeekExaminationNotWanted: "170302007";
    /**
     * Code: 170304008
     */
    readonly Child8WeekExaminationNotAttended: "170304008";
    /**
     * Code: 170585007
     */
    readonly CardiacDiseaseTreatmentStopped: "170585007";
    /**
     * Code: 170588009
     */
    readonly TreatmentForHypertensionStopped: "170588009";
    /**
     * Code: 170620005
     */
    readonly RespiratoryDiseaseTreatmentStopped: "170620005";
    /**
     * Code: 170621009
     */
    readonly HomeOxygenSupplyStopped: "170621009";
    /**
     * Code: 170624001
     */
    readonly OralSteroidsStopped: "170624001";
    /**
     * Code: 170675003
     */
    readonly GITTreatmentStopped: "170675003";
    /**
     * Code: 170687005
     */
    readonly PsychiatricTreatmentStopped: "170687005";
    /**
     * Code: 170688000
     */
    readonly LithiumStopped: "170688000";
    /**
     * Code: 170689008
     */
    readonly InjectablePhenothiazineStopped: "170689008";
    /**
     * Code: 170700002
     */
    readonly NeurologicalDisorderTreatmentStopped: "170700002";
    /**
     * Code: 170712003
     */
    readonly EpilepsyTreatmentStopped: "170712003";
    /**
     * Code: 170725006
     */
    readonly OphthalmologicalTreatmentStopped: "170725006";
    /**
     * Code: 170800007
     */
    readonly TreatmentOfObesityStopped: "170800007";
    /**
     * Code: 170816009
     */
    readonly EndocrineDiseaseTreatmentStopped: "170816009";
    /**
     * Code: 170826002
     */
    readonly B12InjectionsStopped: "170826002";
    /**
     * Code: 170834008
     */
    readonly BloodDisorderTreatmentStopped: "170834008";
    /**
     * Code: 170843004
     */
    readonly AllergicDisorderTreatmentStopped: "170843004";
    /**
     * Code: 170854009
     */
    readonly RheumatologyDisorderTreatmentStopped: "170854009";
    /**
     * Code: 170863006
     */
    readonly SkinDisorderTreatmentStopped: "170863006";
    /**
     * Code: 170872003
     */
    readonly GynecologicalDisorderTreatmentStopped: "170872003";
    /**
     * Code: 170882002
     */
    readonly UrinaryDisorderTreatmentStopped: "170882002";
    /**
     * Code: 170894006
     */
    readonly ENTDiseaseTreatmentStopped: "170894006";
    /**
     * Code: 170904002
     */
    readonly OstomyTreatmentStopped: "170904002";
    /**
     * Code: 170912005
     */
    readonly HighRiskTreatmentStopped: "170912005";
    /**
     * Code: 170919001
     */
    readonly WarfarinTherapyStopped: "170919001";
    /**
     * Code: 170929008
     */
    readonly RepeatPrescriptionTreatmentStopped: "170929008";
    /**
     * Code: 170954008
     */
    readonly HRTContraindicated: "170954008";
    /**
     * Code: 170958006
     */
    readonly HRTStopped: "170958006";
    /**
     * Code: 171034000
     */
    readonly HealthEducationNotWanted: "171034000";
    /**
     * Code: 171103002
     */
    readonly ScreeningNotWanted: "171103002";
    /**
     * Code: 171152003
     */
    readonly CancerOfCervixScreeningNotWanted: "171152003";
    /**
     * Code: 171277005
     */
    readonly SensitivityCIImmunization: "171277005";
    /**
     * Code: 171284002
     */
    readonly PertussisVaccineContraindicated: "171284002";
    /**
     * Code: 180863000
     */
    readonly OperationAbandoned: "180863000";
    /**
     * Code: 182840001
     */
    readonly DrugTreatmentStoppedMedicalAdvice: "182840001";
    /**
     * Code: 182841002
     */
    readonly DrStoppedDrugsIneffective: "182841002";
    /**
     * Code: 182842009
     */
    readonly DoctorStoppedDrugsSideEffect: "182842009";
    /**
     * Code: 182843004
     */
    readonly DrStoppedDrugsInconvenient: "182843004";
    /**
     * Code: 182844005
     */
    readonly DoctorStoppedDrugsPatientDislikes: "182844005";
    /**
     * Code: 182845006
     */
    readonly DoctorStoppedDrugsAvoidInteraction: "182845006";
    /**
     * Code: 182846007
     */
    readonly DoctorStoppedDrugsMedicalAimAchieved: "182846007";
    /**
     * Code: 182849000
     */
    readonly NoDrugTherapyPrescribed: "182849000";
    /**
     * Code: 182895007
     */
    readonly DrugDeclinedByPatient: "182895007";
    /**
     * Code: 182896008
     */
    readonly DrugDeclinedByPatientDislikesTaste: "182896008";
    /**
     * Code: 182897004
     */
    readonly DrugDeclinedByPatientSideEffects: "182897004";
    /**
     * Code: 182898009
     */
    readonly DrugDeclinedByPatientInconvenient: "182898009";
    /**
     * Code: 182899001
     */
    readonly DrugDeclinedByPatientProblemSwallowing: "182899001";
    /**
     * Code: 182900006
     */
    readonly DrugDeclinedByPatientPatientBeliefs: "182900006";
    /**
     * Code: 182901005
     */
    readonly DrugDeclinedByPatientAlternativeTherapy: "182901005";
    /**
     * Code: 182902003
     */
    readonly DrugDeclinedByPatientCannotPayScript: "182902003";
    /**
     * Code: 182903008
     */
    readonly DrugDeclinedByPatientReasonUnknown: "182903008";
    /**
     * Code: 183928007
     */
    readonly ResidenceRemoteFromMedicalCare: "183928007";
    /**
     * Code: 183929004
     */
    readonly NoHomeMedicalServices: "183929004";
    /**
     * Code: 183930009
     */
    readonly AwaitingAdmissionElsewhere: "183930009";
    /**
     * Code: 183934000
     */
    readonly SensitivityCIToProcedure: "183934000";
    /**
     * Code: 183936003
     */
    readonly ContraindicationToLiveImmunization: "183936003";
    /**
     * Code: 183945002
     */
    readonly ProcedureRefusedForReligiousReason: "183945002";
    /**
     * Code: 183946001
     */
    readonly ProcedureRefusedUncooperative: "183946001";
    /**
     * Code: 183947005
     */
    readonly RefusedProcedureAfterThought: "183947005";
    /**
     * Code: 183948000
     */
    readonly RefusedProcedureParentQuoteSWish: "183948000";
    /**
     * Code: 183949008
     */
    readonly AssessmentExaminationRefused: "183949008";
    /**
     * Code: 183956002
     */
    readonly CareHelpRefusedByPatient: "183956002";
    /**
     * Code: 183957006
     */
    readonly PatientRefusesDayHospital: "183957006";
    /**
     * Code: 183958001
     */
    readonly RefusesMealsOnWheels: "183958001";
    /**
     * Code: 183959009
     */
    readonly SocialServicesHelpRefused: "183959009";
    /**
     * Code: 183960004
     */
    readonly PatientRefusesHospitalAdmit: "183960004";
    /**
     * Code: 183961000
     */
    readonly PartIIIAccommodationRefused: "183961000";
    /**
     * Code: 183962007
     */
    readonly PatientNonCompliantWithSpecificAdvice: "183962007";
    /**
     * Code: 183964008
     */
    readonly TreatmentNotIndicated: "183964008";
    /**
     * Code: 183965009
     */
    readonly SurgeryNotIndicated: "183965009";
    /**
     * Code: 183966005
     */
    readonly DrugTreatmentNotIndicated: "183966005";
    /**
     * Code: 184163005
     */
    readonly ChildSurveillanceNotWanted: "184163005";
    /**
     * Code: 185754009
     */
    readonly RefusesDiabetesMonitoring: "185754009";
    /**
     * Code: 266756008
     */
    readonly MedicalCareUnavailable: "266756008";
    /**
     * Code: 266757004
     */
    readonly MedicalCIToProcedure: "266757004";
    /**
     * Code: 266758009
     */
    readonly ImmunizationContraindicated: "266758009";
    /**
     * Code: 266881002
     */
    readonly HistoryNotObtained: "266881002";
    /**
     * Code: 268521004
     */
    readonly ThyroidDiseaseTreatmentStopped: "268521004";
    /**
     * Code: 268560002
     */
    readonly MedicalCIImmunization: "268560002";
    /**
     * Code: 274512008
     */
    readonly DrugTherapyDiscontinued: "274512008";
    /**
     * Code: 275935009
     */
    readonly SurgeryContraindicated: "275935009";
    /**
     * Code: 275936005
     */
    readonly PatientNoncomplianceGeneral: "275936005";
    /**
     * Code: 275974002
     */
    readonly MeaslesMumpsRubellaVaccineContraindicated: "275974002";
    /**
     * Code: 288120003
     */
    readonly OperationAbandonedBeforeOnset: "288120003";
    /**
     * Code: 309841001
     */
    readonly ThyroxineTreatmentStopped: "309841001";
    /**
     * Code: 309846006
     */
    readonly TreatmentNotAvailable: "309846006";
    /**
     * Code: 310352003
     */
    readonly MammographyNotAttended: "310352003";
    /**
     * Code: 312451002
     */
    readonly AspirinProphylaxisContraIndicated: "312451002";
    /**
     * Code: 314374001
     */
    readonly VAL360DegreeSweepOfCervixNotPerformed: "314374001";
    /**
     * Code: 315020006
     */
    readonly BetaBlockerTherapyRefused: "315020006";
    /**
     * Code: 315021005
     */
    readonly CoronaryHeartDiseaseMonitoringRefused: "315021005";
    /**
     * Code: 315022003
     */
    readonly NicotineReplacementTherapyRefused: "315022003";
    /**
     * Code: 315023008
     */
    readonly AspirinProphylaxisRefused: "315023008";
    /**
     * Code: 315061006
     */
    readonly WarfarinContraindicated: "315061006";
    /**
     * Code: 315062004
     */
    readonly BetaBlockerContraindicated: "315062004";
    /**
     * Code: 315214003
     */
    readonly BetaBlockerNotIndicated: "315214003";
    /**
     * Code: 315363002
     */
    readonly StatinsContraindicated: "315363002";
    /**
     * Code: 315364008
     */
    readonly AngiotensinConvertingEnzymeInhibitorsContraindicated: "315364008";
    /**
     * Code: 315591006
     */
    readonly FibratesContraindicated: "315591006";
    /**
     * Code: 315640000
     */
    readonly InfluenzaVaccinationDeclined: "315640000";
    /**
     * Code: 371138003
     */
    readonly RefusalOfTreatmentByParents: "371138003";
    /**
     * Code: 371900001
     */
    readonly MedicationNotAdministered: "371900001";
    /**
     * Code: 373147003
     */
    readonly MedicationNotAdministeredBecauseContraindicated: "373147003";
    /**
     * Code: 373148008
     */
    readonly ThrombolyticAgentNotAdministeredBecauseContraindicated: "373148008";
    /**
     * Code: 390795005
     */
    readonly PneumococcalVaccinationContraindicated: "390795005";
    /**
     * Code: 390796006
     */
    readonly InfluenzaVaccinationContraindicated: "390796006";
    /**
     * Code: 390848004
     */
    readonly RetinaeNotExamined: "390848004";
    /**
     * Code: 390910005
     */
    readonly ThrombolysisContraindicated: "390910005";
    /**
     * Code: 390914001
     */
    readonly ThrombolyticTherapyRefused: "390914001";
    /**
     * Code: 391015007
     */
    readonly OsteoporosisRiskAssessmentRefused: "391015007";
    /**
     * Code: 391016008
     */
    readonly OsteoporosisRiskAssessmentDefaulted: "391016008";
    /**
     * Code: 391021006
     */
    readonly OsteoporosisTreatmentStopped: "391021006";
    /**
     * Code: 394909009
     */
    readonly SyringeDriverDiscontinued: "394909009";
    /**
     * Code: 394965000
     */
    readonly UrineLeukocyteTestNotDone: "394965000";
    /**
     * Code: 394987009
     */
    readonly AngiotensinIIReceptorAntagonistsContraindicated: "394987009";
    /**
     * Code: 395006008
     */
    readonly MedicationStoppedInteraction: "395006008";
    /**
     * Code: 395007004
     */
    readonly MedicationStoppedIneffective: "395007004";
    /**
     * Code: 395008009
     */
    readonly MedicationStoppedContraIndication: "395008009";
    /**
     * Code: 395009001
     */
    readonly MedicationStoppedSideEffect: "395009001";
    /**
     * Code: 395174005
     */
    readonly NicotineReplacementTherapyContraindicated: "395174005";
    /**
     * Code: 395175006
     */
    readonly BupropionContraindicated: "395175006";
    /**
     * Code: 395176007
     */
    readonly BupropionRefused: "395176007";
    /**
     * Code: 395675007
     */
    readonly OralContraceptivePillContraindicated: "395675007";
    /**
     * Code: 395703005
     */
    readonly MeningitisCImmunizationRefused: "395703005";
    /**
     * Code: 396781004
     */
    readonly NoChemotherapyANDORRadiationTherapyPriorToLymphadenectomy: "396781004";
    /**
     * Code: 397004005
     */
    readonly ImmunophenotypicAnalysisNotPerformed: "397004005";
    /**
     * Code: 397023003
     */
    readonly OperationNotCompleted: "397023003";
    /**
     * Code: 397399004
     */
    readonly CellPhenotypingNotPerformed: "397399004";
    /**
     * Code: 399538001
     */
    readonly CytogeneticStudyNotPerformed: "399538001";
    /**
     * Code: 401047000
     */
    readonly HypertensionTreatmentRefused: "401047000";
    /**
     * Code: 401084003
     */
    readonly AngiotensinIIReceptorAntagonistDeclined: "401084003";
    /**
     * Code: 401086001
     */
    readonly PneumococcalVaccinationDeclined: "401086001";
    /**
     * Code: 401318002
     */
    readonly ShuttleWalkingTestNotDone: "401318002";
    /**
     * Code: 406149000
     */
    readonly MedicationRefused: "406149000";
    /**
     * Code: 407571005
     */
    readonly ClopidogrelNotIndicated: "407571005";
    /**
     * Code: 407572003
     */
    readonly AngiotensinIIReceptorAntagonistNotIndicated: "407572003";
    /**
     * Code: 407573008
     */
    readonly InfluenzaVaccinationNotIndicated: "407573008";
    /**
     * Code: 407582002
     */
    readonly ClopidogrelContraindicated: "407582002";
    /**
     * Code: 407583007
     */
    readonly ClopidogrelDeclined: "407583007";
    /**
     * Code: 408339001
     */
    readonly ThrombolysisTherapyNotIndicated: "408339001";
    /**
     * Code: 408396006
     */
    readonly DiabeticRetinopathyScreeningNotIndicated: "408396006";
    /**
     * Code: 408397002
     */
    readonly DiabeticFootExaminationNotIndicated: "408397002";
    /**
     * Code: 408398007
     */
    readonly SmokingReviewNotIndicated: "408398007";
    /**
     * Code: 408504000
     */
    readonly Child7MonthExaminationNotAttended: "408504000";
    /**
     * Code: 408505004
     */
    readonly Child7MonthExaminationNotWanted: "408505004";
    /**
     * Code: 408506003
     */
    readonly Child7MonthExaminationNotOffered: "408506003";
    /**
     * Code: 408548005
     */
    readonly MagneticResonanceImagingScanDeclined: "408548005";
    /**
     * Code: 408549002
     */
    readonly AngiocardiographyDeclined: "408549002";
    /**
     * Code: 408551003
     */
    readonly ExerciseToleranceTestRefused: "408551003";
    /**
     * Code: 408558009
     */
    readonly MultidisciplinaryTeamFallsAssessmentDeclined: "408558009";
    /**
     * Code: 408559001
     */
    readonly PrimaryHealthCareTeamFallsAssessmentDeclined: "408559001";
    /**
     * Code: 408566000
     */
    readonly EchocardiogramDeclined: "408566000";
    /**
     * Code: 408567009
     */
    readonly CTScanBrainDeclined: "408567009";
    /**
     * Code: 408569007
     */
    readonly DiagnosticProcedureDeclined: "408569007";
    /**
     * Code: 408572000
     */
    readonly CarotidArteryDopplerDeclined: "408572000";
    /**
     * Code: 408778004
     */
    readonly HepatitisBImmunizationDeclined: "408778004";
    /**
     * Code: 408791003
     */
    readonly BCGVaccinationDeclined: "408791003";
    /**
     * Code: 408795007
     */
    readonly VitaminKProphylaxisDeclined: "408795007";
    /**
     * Code: 408836004
     */
    readonly SampleNotObtained: "408836004";
    /**
     * Code: 408837008
     */
    readonly AmniocentesisSampleNotObtained: "408837008";
    /**
     * Code: 412713002
     */
    readonly CoronaryArteriographyDeclined: "412713002";
    /**
     * Code: 412718006
     */
    readonly ChlamydiaScreeningDeclined: "412718006";
    /**
     * Code: 412725004
     */
    readonly MedicationReviewDeclined: "412725004";
    /**
     * Code: 412752009
     */
    readonly DiabeticFootExaminationDeclined: "412752009";
    /**
     * Code: 412782003
     */
    readonly InappropriateMedicationStopped: "412782003";
    /**
     * Code: 413122001
     */
    readonly DiabeticRetinopathyScreeningRefused: "413122001";
    /**
     * Code: 413123006
     */
    readonly BloodPressureProcedureRefused: "413123006";
    /**
     * Code: 413167008
     */
    readonly CompressionBandagingNotIndicated: "413167008";
    /**
     * Code: 413310006
     */
    readonly PatientNonCompliantRefusedAccessToServices: "413310006";
    /**
     * Code: 413311005
     */
    readonly PatientNonCompliantRefusedInterventionSupport: "413311005";
    /**
     * Code: 413312003
     */
    readonly PatientNonCompliantRefusedService: "413312003";
    /**
     * Code: 413558003
     */
    readonly AnticoagulationContraindicated: "413558003";
    /**
     * Code: 413559006
     */
    readonly AnticoagulationDeclined: "413559006";
    /**
     * Code: 413560001
     */
    readonly AnticoagulationNotIndicated: "413560001";
    /**
     * Code: 413756001
     */
    readonly CardiacRehabilitationDeclined: "413756001";
    /**
     * Code: 413812009
     */
    readonly CervicalSmearNotIndicated: "413812009";
    /**
     * Code: 414055003
     */
    readonly DrugDependenceHomeDetoxificationContraindicated: "414055003";
    /**
     * Code: 414120003
     */
    readonly ERCPNotCompletedDueToAnatomicalDerangementsFromPreviousSurgery: "414120003";
    /**
     * Code: 414159007
     */
    readonly ExerciseToleranceTestContraindicated: "414159007";
    /**
     * Code: 414677003
     */
    readonly MetforminContraindicated: "414677003";
    /**
     * Code: 415119001
     */
    readonly PneumococcalVaccinationNotIndicated: "415119001";
    /**
     * Code: 415570002
     */
    readonly SpirometryNotIndicated: "415570002";
    /**
     * Code: 415571003
     */
    readonly SpirometryReversibilityTestingContraindicated: "415571003";
    /**
     * Code: 415572005
     */
    readonly SpirometryTestDeclined: "415572005";
    /**
     * Code: 415666001
     */
    readonly AdministrationOfSulfonylureaContraindicated: "415666001";
    /**
     * Code: 415667005
     */
    readonly AdministrationOfSulfonylureaNotIndicated: "415667005";
    /**
     * Code: 416091008
     */
    readonly GlitazonesContraindicated: "416091008";
    /**
     * Code: 416126007
     */
    readonly BisphosphonatesDeclined: "416126007";
    /**
     * Code: 416128008
     */
    readonly NoPastHistoryOfProcedure: "416128008";
    /**
     * Code: 416475003
     */
    readonly CombinedCalciumAndVitaminD3PreparationContraindicated: "416475003";
    /**
     * Code: 416522000
     */
    readonly StrontiumRanelateDeclined: "416522000";
    /**
     * Code: 416664005
     */
    readonly SelectiveEstrogenReceptorModulatorNotIndicated: "416664005";
    /**
     * Code: 416670004
     */
    readonly GlitazonesNotIndicated: "416670004";
    /**
     * Code: 416678006
     */
    readonly CombinedCalciumAndVitaminD3PreparationNotIndicated: "416678006";
    /**
     * Code: 416704001
     */
    readonly DXAScanContraindicated: "416704001";
    /**
     * Code: 416741000
     */
    readonly StrontiumRanelateNotIndicated: "416741000";
    /**
     * Code: 416759002
     */
    readonly NonSteroidalAntiInflammatoryDrugsContraindicated: "416759002";
    /**
     * Code: 416888009
     */
    readonly DXAScanDeclined: "416888009";
    /**
     * Code: 416996000
     */
    readonly StrontiumRanelateContraindicated: "416996000";
    /**
     * Code: 417013004
     */
    readonly DXAScanNotIndicated: "417013004";
    /**
     * Code: 417045009
     */
    readonly CombinedCalciumAndVitaminD3PreparationDeclined: "417045009";
    /**
     * Code: 417101006
     */
    readonly SelectiveEstrogenReceptorModulatorContraindicated: "417101006";
    /**
     * Code: 417114007
     */
    readonly RefusedReferralToMinorAilmentsClinic: "417114007";
    /**
     * Code: 417128001
     */
    readonly BisphosphonatesContraindicated: "417128001";
    /**
     * Code: 417218000
     */
    readonly CarotidUltrasoundNotIndicated: "417218000";
    /**
     * Code: 417434004
     */
    readonly BisphosphonatesNotIndicated: "417434004";
    /**
     * Code: 417512003
     */
    readonly SelectiveEstrogenReceptorModulatorDeclined: "417512003";
    /**
     * Code: 418014008
     */
    readonly ProcedureNotOrdered: "418014008";
    /**
     * Code: 418731009
     */
    readonly NoStainApplied: "418731009";
    /**
     * Code: 425519007
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToMedicalControlOrder: "425519007";
    /**
     * Code: 425921008
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToDoNotResuscitateOrder: "425921008";
    /**
     * Code: 426544006
     */
    readonly HistoryRefused: "426544006";
    /**
     * Code: 426970003
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToReturnOfSpontaneousCirculation: "426970003";
    /**
     * Code: 426999008
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToSignsOfDeath: "426999008";
    /**
     * Code: 427569000
     */
    readonly CardiopulmonaryResuscitationDiscontinuedAsPerProtocol: "427569000";
    /**
     * Code: 428042006
     */
    readonly MediumChainAcylCoenzymeADehydrogenaseDeficiencyScreeningTestDeclined: "428042006";
    /**
     * Code: 428073005
     */
    readonly AlcoholConsumptionScreeningTestDeclined: "428073005";
    /**
     * Code: 428299008
     */
    readonly SickleCellScreeningDeclined: "428299008";
    /**
     * Code: 428348004
     */
    readonly CardiopulmonaryResuscitationNotAttempted: "428348004";
    /**
     * Code: 428650003
     */
    readonly CongenitalHypothyroidismScreeningDeclined: "428650003";
    /**
     * Code: 428841003
     */
    readonly CysticFibrosisScreeningDeclined: "428841003";
    /**
     * Code: 429284000
     */
    readonly CVDRiskAssessmentDeclined: "429284000";
    /**
     * Code: 429688007
     */
    readonly NurseTriageDeclined: "429688007";
    /**
     * Code: 429726000
     */
    readonly PhenylketonuriaScreeningDeclined: "429726000";
    /**
     * Code: 429739001
     */
    readonly PatientRefusedTransportation: "429739001";
    /**
     * Code: 430279008
     */
    readonly DrugTreatmentStoppedAtEndOfClinicalTrial: "430279008";
    /**
     * Code: 438370008
     */
    readonly VascularDiseaseRiskAssessmentDeclined: "438370008";
    /**
     * Code: 438604008
     */
    readonly PeritonealDialysisTherapyDiscontinued: "438604008";
    /**
     * Code: 438765003
     */
    readonly HumanPapillomavirusVaccinationDeclined: "438765003";
    /**
     * Code: 438767006
     */
    readonly TerminationOfPregnancyContraindicated: "438767006";
    /**
     * Code: 438833006
     */
    readonly AdministrationOfDrugOrMedicamentContraindicated: "438833006";
    /**
     * Code: 439495000
     */
    readonly CounselingDeclined: "439495000";
    /**
     * Code: 439516000
     */
    readonly HemodialysisTherapyDiscontinued: "439516000";
    /**
     * Code: 439867009
     */
    readonly DeterminationOfPatternOfResistanceToAntiviralAgentNotDone: "439867009";
    /**
     * Code: 440621003
     */
    readonly ReferralDeclinedByPatient: "440621003";
    /**
     * Code: 441989008
     */
    readonly DelayedHypersensitivitySkinTestForHistoplasminNotDone: "441989008";
    /**
     * Code: 442324008
     */
    readonly AntenatalScreeningDeclined: "442324008";
    /**
     * Code: 442392002
     */
    readonly AmbulanceTransportToHospitalDeclined: "442392002";
    /**
     * Code: 442444001
     */
    readonly ReferralToSpecialistAlcoholTreatmentServiceDeclinedByPatient: "442444001";
    /**
     * Code: 443788002
     */
    readonly MaternalPostnatalExaminationNotAttended: "443788002";
    /**
     * Code: 444020006
     */
    readonly MaternalPostnatalExaminationRefused: "444020006";
    /**
     * Code: 444062004
     */
    readonly MaternalPostnatalExaminationNotOffered: "444062004";
    /**
     * Code: 4451000175106
     */
    readonly AsthmaActionPlanNotDone: "4451000175106";
    /**
     * Code: 4461000175108
     */
    readonly CervicalCancerScreeningNotDone: "4461000175108";
    /**
     * Code: 4471000175100
     */
    readonly ColorectalCancerScreeningNotDone: "4471000175100";
    /**
     * Code: 4501000175108
     */
    readonly HemoglobinA1CTestNotDone: "4501000175108";
    /**
     * Code: 4541000175105
     */
    readonly SpirometryNotDone: "4541000175105";
    /**
     * Code: 4551000175107
     */
    readonly DiabeticFootExamNotDone: "4551000175107";
    /**
     * Code: 4591000175100
     */
    readonly BoneDensityScreeningNotDone: "4591000175100";
    /**
     * Code: 473149004
     */
    readonly LongActingReversibleContraceptionDeclined: "473149004";
    /**
     * Code: 591000119102
     */
    readonly VaccineRefusedByPatient: "591000119102";
    /**
     * Code: 5991000175105
     */
    readonly PeakExpiratoryFlowNotDone: "5991000175105";
    /**
     * Code: 6021000175100
     */
    readonly VaccinationForDiphtheriaPertussisAndTetanusNotDone: "6021000175100";
    /**
     * Code: 6031000175102
     */
    readonly VaricellaVaccinationNotDone: "6031000175102";
    /**
     * Code: 6041000175108
     */
    readonly HepatitisAVaccinationNotDone: "6041000175108";
    /**
     * Code: 6051000175105
     */
    readonly HepatitisBVaccinationNotDone: "6051000175105";
    /**
     * Code: 698357006
     */
    readonly AbdominalAorticAneurysmScreeningDeclined: "698357006";
    /**
     * Code: 698451006
     */
    readonly AnkleBrachialPressureIndexTestDeclined: "698451006";
    /**
     * Code: 698459008
     */
    readonly AntidepressantDrugTreatmentStopped: "698459008";
    /**
     * Code: 698460003
     */
    readonly AntiviralTherapyDeclined: "698460003";
    /**
     * Code: 698468005
     */
    readonly BisoprololContraindicated: "698468005";
    /**
     * Code: 698473004
     */
    readonly BloodGlucoseTestDeclined: "698473004";
    /**
     * Code: 698483000
     */
    readonly WeightManagementAdviceDeclined: "698483000";
    /**
     * Code: 698484006
     */
    readonly MeasurementOfWaistCircumferenceDeclined: "698484006";
    /**
     * Code: 698490005
     */
    readonly UrineDipstickTestDeclined: "698490005";
    /**
     * Code: 698521002
     */
    readonly SimvastatinContraindicated: "698521002";
    /**
     * Code: 698569004
     */
    readonly PostnatalDepressionNotDiscussed: "698569004";
    /**
     * Code: 698753008
     */
    readonly NeverHadCervicalSmear: "698753008";
    /**
     * Code: 698758004
     */
    readonly NebivololTherapyRefused: "698758004";
    /**
     * Code: 698950001
     */
    readonly InfluenzaAVirusSubtypeH1N1VaccinationDeclined: "698950001";
    /**
     * Code: 699034004
     */
    readonly HomeOxygenTherapyDeclined: "699034004";
    /**
     * Code: 699037006
     */
    readonly HepatitisBVaccinationContraindicated: "699037006";
    /**
     * Code: 699042003
     */
    readonly HistoryTakingOfSexualOrientationDeclined: "699042003";
    /**
     * Code: 699048004
     */
    readonly ExerciseToleranceTestNotIndicated: "699048004";
    /**
     * Code: 699053009
     */
    readonly FootPulseCheckDeclined: "699053009";
    /**
     * Code: 699054003
     */
    readonly AdministrationOfBloodProductDeclined: "699054003";
    /**
     * Code: 699128009
     */
    readonly BloodTransfusionDeclined: "699128009";
    /**
     * Code: 699137009
     */
    readonly CarvedilolTherapyDeclined: "699137009";
    /**
     * Code: 699231000
     */
    readonly DomesticAbuseNotDiscussed: "699231000";
    /**
     * Code: 700110004
     */
    readonly BisphosphonateProphylaxisSuspended: "700110004";
    /**
     * Code: 700359005
     */
    readonly BoosterMeningitisCVaccinationDeclined: "700359005";
    /**
     * Code: 700384008
     */
    readonly AntibioticProphylaxisNotIndicated: "700384008";
    /**
     * Code: 700411009
     */
    readonly RoutineEnquiryAboutDomesticAbuseDeclined: "700411009";
    /**
     * Code: 703427001
     */
    readonly RefusalOfTreatmentByPatientAgainstDentalAdvice: "703427001";
    /**
     * Code: 703942005
     */
    readonly NeverHadMammogram: "703942005";
    /**
     * Code: 703971006
     */
    readonly HepatitisAVaccinationNotIndicated: "703971006";
    /**
     * Code: 703989007
     */
    readonly TeriparatideTherapyDeclined: "703989007";
    /**
     * Code: 703991004
     */
    readonly RaloxifeneTherapyDeclined: "703991004";
    /**
     * Code: 703992006
     */
    readonly BreastfeedingSupportDeclined: "703992006";
    /**
     * Code: 703996009
     */
    readonly TeriparatideNotIndicated: "703996009";
    /**
     * Code: 703997000
     */
    readonly TeriparatideContraindicated: "703997000";
    /**
     * Code: 703999002
     */
    readonly RaloxifeneContraindicated: "703999002";
    /**
     * Code: 704000000
     */
    readonly RaloxifeneNotIndicated: "704000000";
    /**
     * Code: 704033005
     */
    readonly Phosphodiesterase5InhibitorNotIndicated: "704033005";
    /**
     * Code: 704046000
     */
    readonly MentalHealthAssessmentDeclined: "704046000";
    /**
     * Code: 704047009
     */
    readonly Phosphodiesterase5InhibitorDeclined: "704047009";
    /**
     * Code: 704049007
     */
    readonly ReferralToErectileDysfunctionClinicDeclined: "704049007";
    /**
     * Code: 704051006
     */
    readonly ReferralToCardiacRehabilitationProgramDeclined: "704051006";
    /**
     * Code: 704052004
     */
    readonly ReferralToCardiacRehabilitationProgramNotIndicated: "704052004";
    /**
     * Code: 704096004
     */
    readonly ReferralToHeartFailureExerciseProgramNotIndicated: "704096004";
    /**
     * Code: 704097008
     */
    readonly ReferralToHeartFailureExerciseProgramDeclined: "704097008";
    /**
     * Code: 705140004
     */
    readonly PhysicalHealthAssessmentDeclined: "705140004";
    /**
     * Code: 706890009
     */
    readonly VaginalBirthAfterPreviousCesareanSectionRefused: "706890009";
    /**
     * Code: 707287001
     */
    readonly HepatitisBVaccinationNotIndicated: "707287001";
    /**
     * Code: 707298000
     */
    readonly Phosphodiesterase5InhibitorContraindicated: "707298000";
    /**
     * Code: 707745004
     */
    readonly TuberculosisScreeningDeclined: "707745004";
    /**
     * Code: 707746003
     */
    readonly ScreeningChestXRayDeclined: "707746003";
    /**
     * Code: 707853004
     */
    readonly TestingForEbolaVirusNotIndicated: "707853004";
    /**
     * Code: 708000007
     */
    readonly InsulinTreatmentStopped: "708000007";
    /**
     * Code: 708129006
     */
    readonly TransfusionOfBloodProductRefusedForReligiousReason: "708129006";
    /**
     * Code: 709198003
     */
    readonly EducationNotIndicated: "709198003";
    /**
     * Code: 710765004
     */
    readonly WoundDrainDiscontinued: "710765004";
    /**
     * Code: 712740006
     */
    readonly MedicationMonitoringNotIndicated: "712740006";
    /**
     * Code: 712751006
     */
    readonly RadiationTherapyNotDone: "712751006";
    /**
     * Code: 712790005
     */
    readonly TripleTestNotOffered: "712790005";
    /**
     * Code: 712803007
     */
    readonly AdministrationOfAntiDGlobulinNotOffered: "712803007";
    /**
     * Code: 712812009
     */
    readonly AntenatalUltrasoundScanNotOffered: "712812009";
    /**
     * Code: 712851004
     */
    readonly AlphaFetoproteinBloodTestNotOffered: "712851004";
    /**
     * Code: 712852006
     */
    readonly AmniocentesisNotOffered: "712852006";
    /**
     * Code: 712854007
     */
    readonly AntenatalScreeningForViralHepatitisTypeBNotOffered: "712854007";
    /**
     * Code: 712869008
     */
    readonly AntenatalHIVHumanImmunodeficiencyVirusScreeningNotOffered: "712869008";
    /**
     * Code: 712870009
     */
    readonly AntenatalRhesusAntibodyScreeningNotOffered: "712870009";
    /**
     * Code: 712872001
     */
    readonly AntenatalThalassemiaScreeningNotOffered: "712872001";
    /**
     * Code: 712985002
     */
    readonly ChemotherapyNotDone: "712985002";
    /**
     * Code: 712996005
     */
    readonly ParentingEducationNotOffered: "712996005";
    /**
     * Code: 713068007
     */
    readonly Over75YearsOfAgeHealthCheckDeclined: "713068007";
    /**
     * Code: 713207007
     */
    readonly NeckDissectionNotDone: "713207007";
    /**
     * Code: 713246009
     */
    readonly ProcedureDiscontinuedByHealthcareProfessional: "713246009";
    /**
     * Code: 713247000
     */
    readonly ProcedureDiscontinuedByPatient: "713247000";
    /**
     * Code: 713248005
     */
    readonly ProcedureDiscontinuedByDoctor: "713248005";
    /**
     * Code: 713615000
     */
    readonly AdvanceCarePlanningDeclined: "713615000";
    /**
     * Code: 714747005
     */
    readonly DiscussionAboutAdvanceCarePlanningDeclined: "714747005";
    /**
     * Code: 715163003
     */
    readonly DiphtheriaVaccinationContraindicated: "715163003";
    /**
     * Code: 715166006
     */
    readonly BacillusCalmetteGuerinVaccinationContraindicated: "715166006";
    /**
     * Code: 715508000
     */
    readonly AssessmentUsingGeneralizedAnxietyDisorder7ItemScaleDeclined: "715508000";
    /**
     * Code: 715621003
     */
    readonly HeartFailureEducationNotDone: "715621003";
    /**
     * Code: 715622005
     */
    readonly WarfarinNotPrescribed: "715622005";
    /**
     * Code: 716048005
     */
    readonly ReviewOfAdvanceCarePlanDeclined: "716048005";
    /**
     * Code: 921000119109
     */
    readonly VaccineRefusedByParent: "921000119109";
};
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare type ProcedureNotPerformedReasonCodeType = typeof ProcedureNotPerformedReasonCodes[keyof typeof ProcedureNotPerformedReasonCodes];
//# sourceMappingURL=ProcedureNotPerformedReasonCodes.d.ts.map