import { Coding } from '../fhir/Coding.js';
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare const ProcedureNotPerformedReasonCodings: {
    /**
     * Code: 105480006
     */
    readonly RefusalOfTreatmentByPatient: Coding;
    /**
     * Code: 116101000119100
     */
    readonly ColonoscopyRefused: Coding;
    /**
     * Code: 134385008
     */
    readonly ReferralToDieticianDeclined: Coding;
    /**
     * Code: 134386009
     */
    readonly ReferralToChiropodistDeclined: Coding;
    /**
     * Code: 134390006
     */
    readonly AngiotensinConvertingEnzymeInhibitorNotIndicated: Coding;
    /**
     * Code: 134391005
     */
    readonly StatinNotIndicated: Coding;
    /**
     * Code: 134392003
     */
    readonly WarfarinNotIndicated: Coding;
    /**
     * Code: 134394002
     */
    readonly AspirinNotIndicated: Coding;
    /**
     * Code: 134396000
     */
    readonly StatinDeclined: Coding;
    /**
     * Code: 134397009
     */
    readonly AngiotensinConvertingEnzymeInhibitorDeclined: Coding;
    /**
     * Code: 134398004
     */
    readonly WarfarinDeclined: Coding;
    /**
     * Code: 135805008
     */
    readonly NitrateNotIndicated: Coding;
    /**
     * Code: 135806009
     */
    readonly CalciumChannelBlockerNotIndicated: Coding;
    /**
     * Code: 135807000
     */
    readonly LipidLoweringTherapyNotIndicated: Coding;
    /**
     * Code: 135808005
     */
    readonly DiureticNotIndicated: Coding;
    /**
     * Code: 135809002
     */
    readonly NitrateContraindicated: Coding;
    /**
     * Code: 135811006
     */
    readonly DiureticContraindicated: Coding;
    /**
     * Code: 135812004
     */
    readonly NitrateDeclined: Coding;
    /**
     * Code: 135814003
     */
    readonly DiureticDeclined: Coding;
    /**
     * Code: 135822005
     */
    readonly LipidLoweringTherapyContraindicated: Coding;
    /**
     * Code: 135823000
     */
    readonly CalciumChannelBlockerContraindicated: Coding;
    /**
     * Code: 135825007
     */
    readonly CalciumChannelBlockerDeclined: Coding;
    /**
     * Code: 135826008
     */
    readonly LipidLoweringTherapyDeclined: Coding;
    /**
     * Code: 146922001
     */
    readonly RubellaScreeningNotOffered: Coding;
    /**
     * Code: 147022006
     */
    readonly DoubleTestNotOffered: Coding;
    /**
     * Code: 148324002
     */
    readonly ScreeningNotOffered: Coding;
    /**
     * Code: 148477008
     */
    readonly ImmunizationNotOffered: Coding;
    /**
     * Code: 162650008
     */
    readonly PatientNotExamined: Coding;
    /**
     * Code: 162675007
     */
    readonly GeneralExaminationNotDone: Coding;
    /**
     * Code: 162882008
     */
    readonly RespiratorySystemNotExamined: Coding;
    /**
     * Code: 162980001
     */
    readonly CVSNotExamined: Coding;
    /**
     * Code: 163128002
     */
    readonly GITNotExamined: Coding;
    /**
     * Code: 163348001
     */
    readonly GUSystemNotExamined: Coding;
    /**
     * Code: 163582008
     */
    readonly NervousSystemNotExamined: Coding;
    /**
     * Code: 163628001
     */
    readonly SensorySystemNotExamined: Coding;
    /**
     * Code: 163900009
     */
    readonly OECNSNotExamined: Coding;
    /**
     * Code: 164176006
     */
    readonly ENTExaminationNotPerformed: Coding;
    /**
     * Code: 164286000
     */
    readonly OETemperatureNotTaken: Coding;
    /**
     * Code: 164321005
     */
    readonly OESkinNotExamined: Coding;
    /**
     * Code: 164445005
     */
    readonly OEExtremitiesNotExamined: Coding;
    /**
     * Code: 164503006
     */
    readonly OrthopedicExamNotDone: Coding;
    /**
     * Code: 164713001
     */
    readonly NeurologicalDiagnosticProcedureNotDone: Coding;
    /**
     * Code: 164725003
     */
    readonly VisualTestingNotDone: Coding;
    /**
     * Code: 164746007
     */
    readonly AuditoryVestibularTestNotDone: Coding;
    /**
     * Code: 164766003
     */
    readonly SpecialENTProcedureNotDone: Coding;
    /**
     * Code: 164776000
     */
    readonly SpecialCVSTestNotDone: Coding;
    /**
     * Code: 164786004
     */
    readonly SpecialGITTestNotDone: Coding;
    /**
     * Code: 164795007
     */
    readonly SpecialUrinaryTestNotDone: Coding;
    /**
     * Code: 164808009
     */
    readonly SpecialFemaleTestNotDone: Coding;
    /**
     * Code: 164823004
     */
    readonly SpecialMaleTestNotDone: Coding;
    /**
     * Code: 164831009
     */
    readonly MusculoskeletalTestNotDone: Coding;
    /**
     * Code: 164853006
     */
    readonly ECGNotDone: Coding;
    /**
     * Code: 164964005
     */
    readonly SusceptibilitySkinTestNotDone: Coding;
    /**
     * Code: 164978006
     */
    readonly MantouxTestNotDone: Coding;
    /**
     * Code: 164985005
     */
    readonly KveimTestNotDone: Coding;
    /**
     * Code: 164997006
     */
    readonly HypersensitivitySkinTestNotDone: Coding;
    /**
     * Code: 165008002
     */
    readonly AllergyTestingNotDone: Coding;
    /**
     * Code: 165017002
     */
    readonly LungFunctionTestingNotDone: Coding;
    /**
     * Code: 165026004
     */
    readonly LungVolumeTestNotDone: Coding;
    /**
     * Code: 165035006
     */
    readonly RespiratoryFlowRateNotMeasured: Coding;
    /**
     * Code: 165074004
     */
    readonly CardiacFunctionTestNotDone: Coding;
    /**
     * Code: 165081006
     */
    readonly ExerciseToleranceTestNotDone: Coding;
    /**
     * Code: 165104002
     */
    readonly MetabolicFunctionNotTested: Coding;
    /**
     * Code: 165122004
     */
    readonly NonSurgicalBiopsyNotDone: Coding;
    /**
     * Code: 165139002
     */
    readonly EndoscopyNotCarriedOut: Coding;
    /**
     * Code: 165342003
     */
    readonly PatientRefusedLaboratoryTest: Coding;
    /**
     * Code: 165343008
     */
    readonly LaboratoryTestRequestedNotDone: Coding;
    /**
     * Code: 165376007
     */
    readonly PatientRefusedHematologyTest: Coding;
    /**
     * Code: 165377003
     */
    readonly HematologyTestRequestNotDone: Coding;
    /**
     * Code: 165393007
     */
    readonly HemoglobinNotEstimated: Coding;
    /**
     * Code: 167219008
     */
    readonly UrineNotExamined: Coding;
    /**
     * Code: 167260001
     */
    readonly UrineGlucoseTestNotDone: Coding;
    /**
     * Code: 167272007
     */
    readonly UrineProteinTestNotDone: Coding;
    /**
     * Code: 167286006
     */
    readonly UrineKetoneTestNotDone: Coding;
    /**
     * Code: 167296002
     */
    readonly UrineBloodTestNotDone: Coding;
    /**
     * Code: 167306007
     */
    readonly UrinePHTestNotDone: Coding;
    /**
     * Code: 167317008
     */
    readonly UrineBacteriaTestNotDone: Coding;
    /**
     * Code: 167322008
     */
    readonly UrineUrobilinogenNotTested: Coding;
    /**
     * Code: 167594003
     */
    readonly FecesNotExamined: Coding;
    /**
     * Code: 167701000
     */
    readonly CSFNotExamined: Coding;
    /**
     * Code: 167728005
     */
    readonly CSFChemistryNotTested: Coding;
    /**
     * Code: 168497006
     */
    readonly RadiographicImagingProcedureNotCarriedOut: Coding;
    /**
     * Code: 168499009
     */
    readonly RadiologyRefused: Coding;
    /**
     * Code: 168533005
     */
    readonly RadiotherapyStopped: Coding;
    /**
     * Code: 169551000
     */
    readonly ContraceptionContraindicated: Coding;
    /**
     * Code: 169607004
     */
    readonly NoAntenatalCare: Coding;
    /**
     * Code: 169608009
     */
    readonly AntenatalCareNotOffered: Coding;
    /**
     * Code: 169609001
     */
    readonly AntenatalCareNotWanted: Coding;
    /**
     * Code: 169610006
     */
    readonly AntenatalCareNotAttended: Coding;
    /**
     * Code: 169611005
     */
    readonly NoAntenatalCareNotKnownPregnant: Coding;
    /**
     * Code: 169635000
     */
    readonly ParentCraftNotWanted: Coding;
    /**
     * Code: 169649009
     */
    readonly ANAmniocentesisNotWanted: Coding;
    /**
     * Code: 169660000
     */
    readonly ANUSScanNotWanted: Coding;
    /**
     * Code: 169687001
     */
    readonly AlphaFetoproteinGeneAFPBloodTestNotWanted: Coding;
    /**
     * Code: 169693009
     */
    readonly RubellaScreeningNotWanted: Coding;
    /**
     * Code: 169699008
     */
    readonly AntenatalSyphilisScreeningNotDone: Coding;
    /**
     * Code: 169704000
     */
    readonly AntenatalBloodGroupScreeningNotDone: Coding;
    /**
     * Code: 169708002
     */
    readonly AntenatalSickleScreeningNotDone: Coding;
    /**
     * Code: 169795009
     */
    readonly TripleTestNotWanted: Coding;
    /**
     * Code: 169796005
     */
    readonly DoubleTestNotWanted: Coding;
    /**
     * Code: 170100005
     */
    readonly ChildNotExaminedAtBirth: Coding;
    /**
     * Code: 170108003
     */
    readonly ChildNotExaminedAt10Days: Coding;
    /**
     * Code: 170115006
     */
    readonly Child6WeekExaminationNotOffered: Coding;
    /**
     * Code: 170116007
     */
    readonly Child6WeekExaminationNotWanted: Coding;
    /**
     * Code: 170117003
     */
    readonly Child6WeekExaminationNotAttended: Coding;
    /**
     * Code: 170124002
     */
    readonly VAL89MonthExamNotOffered: Coding;
    /**
     * Code: 170125001
     */
    readonly VAL89MonthExamNotWanted: Coding;
    /**
     * Code: 170126000
     */
    readonly VAL89MonthExamNotAttended: Coding;
    /**
     * Code: 170133000
     */
    readonly VAL18MonthExaminationNotOffered: Coding;
    /**
     * Code: 170134006
     */
    readonly VAL18MonthExaminationNotWanted: Coding;
    /**
     * Code: 170135007
     */
    readonly VAL18MonthExaminationNotAttended: Coding;
    /**
     * Code: 170142007
     */
    readonly VAL25YearExaminationNotOffered: Coding;
    /**
     * Code: 170143002
     */
    readonly VAL25YearExaminationNotWanted: Coding;
    /**
     * Code: 170144008
     */
    readonly VAL25YearExaminationNotAttended: Coding;
    /**
     * Code: 170151004
     */
    readonly VAL35YearExaminationNotOffered: Coding;
    /**
     * Code: 170152006
     */
    readonly VAL35YearExaminationNotWanted: Coding;
    /**
     * Code: 170153001
     */
    readonly VAL35YearExaminationNotAttended: Coding;
    /**
     * Code: 170160007
     */
    readonly VAL45YearExaminationNotOffered: Coding;
    /**
     * Code: 170161006
     */
    readonly VAL45YearExaminationNotWanted: Coding;
    /**
     * Code: 170162004
     */
    readonly VAL45YearExaminationNotAttended: Coding;
    /**
     * Code: 170169008
     */
    readonly VAL10YearExaminationNotOffered: Coding;
    /**
     * Code: 170170009
     */
    readonly VAL10YearExaminationNotWanted: Coding;
    /**
     * Code: 170171008
     */
    readonly VAL10YearExaminationNotAttended: Coding;
    /**
     * Code: 170178002
     */
    readonly VAL15YearExaminationNotOffered: Coding;
    /**
     * Code: 170179005
     */
    readonly VAL15YearExaminationNotWanted: Coding;
    /**
     * Code: 170180008
     */
    readonly VAL15YearExaminationNotAttended: Coding;
    /**
     * Code: 170255003
     */
    readonly Child1YearExaminationNotOffered: Coding;
    /**
     * Code: 170256002
     */
    readonly Child1YearExaminationNotWanted: Coding;
    /**
     * Code: 170257006
     */
    readonly Child1YearExaminationNotAttended: Coding;
    /**
     * Code: 170264008
     */
    readonly Child6MonthExaminationNotOffered: Coding;
    /**
     * Code: 170265009
     */
    readonly Child6MonthExaminationNotWanted: Coding;
    /**
     * Code: 170266005
     */
    readonly Child6MonthExaminationNotAttended: Coding;
    /**
     * Code: 170273000
     */
    readonly Child21MonthExaminationNotOffered: Coding;
    /**
     * Code: 170274006
     */
    readonly Child21MonthExaminationNotWanted: Coding;
    /**
     * Code: 170275007
     */
    readonly Child21MonthExaminationNotAttended: Coding;
    /**
     * Code: 170282006
     */
    readonly Child3YearExamNotOffered: Coding;
    /**
     * Code: 170283001
     */
    readonly Child3YearExamNotWanted: Coding;
    /**
     * Code: 170284007
     */
    readonly Child3YearExamNotAttended: Coding;
    /**
     * Code: 170291005
     */
    readonly Child39MonthExaminationNotOffered: Coding;
    /**
     * Code: 170292003
     */
    readonly Child39MonthExaminationNotWanted: Coding;
    /**
     * Code: 170293008
     */
    readonly Child39MonthExaminationNotAttended: Coding;
    /**
     * Code: 170301000
     */
    readonly Child8WeekExaminationNotOffered: Coding;
    /**
     * Code: 170302007
     */
    readonly Child8WeekExaminationNotWanted: Coding;
    /**
     * Code: 170304008
     */
    readonly Child8WeekExaminationNotAttended: Coding;
    /**
     * Code: 170585007
     */
    readonly CardiacDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170588009
     */
    readonly TreatmentForHypertensionStopped: Coding;
    /**
     * Code: 170620005
     */
    readonly RespiratoryDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170621009
     */
    readonly HomeOxygenSupplyStopped: Coding;
    /**
     * Code: 170624001
     */
    readonly OralSteroidsStopped: Coding;
    /**
     * Code: 170675003
     */
    readonly GastrointestinalTractTreatmentStopped: Coding;
    /**
     * Code: 170687005
     */
    readonly PsychiatricTreatmentStopped: Coding;
    /**
     * Code: 170688000
     */
    readonly LithiumStopped: Coding;
    /**
     * Code: 170689008
     */
    readonly InjectablePhenothiazineStopped: Coding;
    /**
     * Code: 170700002
     */
    readonly NeurologicalDisorderTreatmentStopped: Coding;
    /**
     * Code: 170712003
     */
    readonly EpilepsyTreatmentStopped: Coding;
    /**
     * Code: 170725006
     */
    readonly OphthalmologicalTreatmentStopped: Coding;
    /**
     * Code: 170800007
     */
    readonly TreatmentOfObesityStopped: Coding;
    /**
     * Code: 170816009
     */
    readonly EndocrineDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170826002
     */
    readonly B12InjectionsStopped: Coding;
    /**
     * Code: 170834008
     */
    readonly BloodDisorderTreatmentStopped: Coding;
    /**
     * Code: 170843004
     */
    readonly AllergicDisorderTreatmentStopped: Coding;
    /**
     * Code: 170854009
     */
    readonly RheumatologyDisorderTreatmentStopped: Coding;
    /**
     * Code: 170863006
     */
    readonly SkinDisorderTreatmentStopped: Coding;
    /**
     * Code: 170872003
     */
    readonly GynecologicalDisorderTreatmentStopped: Coding;
    /**
     * Code: 170882002
     */
    readonly UrinaryDisorderTreatmentStopped: Coding;
    /**
     * Code: 170894006
     */
    readonly ENTDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170904002
     */
    readonly OstomyTreatmentStopped: Coding;
    /**
     * Code: 170912005
     */
    readonly HighRiskTreatmentStopped: Coding;
    /**
     * Code: 170919001
     */
    readonly WarfarinTherapyStopped: Coding;
    /**
     * Code: 170929008
     */
    readonly RepeatPrescriptionTreatmentStopped: Coding;
    /**
     * Code: 170954008
     */
    readonly HormoneReplacementTherapyHRTContraindicated: Coding;
    /**
     * Code: 170958006
     */
    readonly HormonalReplacementTherapyHRTStopped: Coding;
    /**
     * Code: 171034000
     */
    readonly HealthEducationNotWanted: Coding;
    /**
     * Code: 171103002
     */
    readonly ScreeningNotWanted: Coding;
    /**
     * Code: 171152003
     */
    readonly CancerOfCervixScreeningNotWanted: Coding;
    /**
     * Code: 171277005
     */
    readonly SensitivityCIImmunization: Coding;
    /**
     * Code: 171284002
     */
    readonly PertussisVaccineContraindicated: Coding;
    /**
     * Code: 180863000
     */
    readonly OperationAborted: Coding;
    /**
     * Code: 182840001
     */
    readonly DrugTreatmentStoppedMedicalAdvice: Coding;
    /**
     * Code: 182841002
     */
    readonly DrStoppedDrugsIneffective: Coding;
    /**
     * Code: 182842009
     */
    readonly DoctorStoppedDrugsSideEffect: Coding;
    /**
     * Code: 182843004
     */
    readonly DrStoppedDrugsInconvenient: Coding;
    /**
     * Code: 182844005
     */
    readonly DoctorStoppedDrugsPatientDislikes: Coding;
    /**
     * Code: 182845006
     */
    readonly DoctorStoppedDrugsAvoidInteraction: Coding;
    /**
     * Code: 182846007
     */
    readonly DoctorStoppedDrugsMedicalAimAchieved: Coding;
    /**
     * Code: 182849000
     */
    readonly NoDrugTherapyPrescribed: Coding;
    /**
     * Code: 182895007
     */
    readonly DrugDeclinedByPatient: Coding;
    /**
     * Code: 182896008
     */
    readonly DrugDeclinedByPatientDislikesTaste: Coding;
    /**
     * Code: 182897004
     */
    readonly DrugDeclinedByPatientSideEffects: Coding;
    /**
     * Code: 182898009
     */
    readonly DrugDeclinedByPatientInconvenient: Coding;
    /**
     * Code: 182899001
     */
    readonly DrugDeclinedByPatientProblemSwallowing: Coding;
    /**
     * Code: 182900006
     */
    readonly DrugDeclinedByPatientPatientBeliefs: Coding;
    /**
     * Code: 182901005
     */
    readonly DrugDeclinedByPatientAlternativeTherapy: Coding;
    /**
     * Code: 182902003
     */
    readonly DrugDeclinedByPatientCannotPayScript: Coding;
    /**
     * Code: 182903008
     */
    readonly DrugDeclinedByPatientReasonUnknown: Coding;
    /**
     * Code: 183928007
     */
    readonly ResidenceRemoteFromMedicalCare: Coding;
    /**
     * Code: 183929004
     */
    readonly NoHomeMedicalServices: Coding;
    /**
     * Code: 183930009
     */
    readonly AwaitingAdmissionElsewhere: Coding;
    /**
     * Code: 183934000
     */
    readonly SensitivityContraindicationToProcedure: Coding;
    /**
     * Code: 183936003
     */
    readonly ContraindicationToLiveImmunization: Coding;
    /**
     * Code: 183945002
     */
    readonly ProcedureRefusedForReligiousReason: Coding;
    /**
     * Code: 183946001
     */
    readonly ProcedureRefusedUncooperative: Coding;
    /**
     * Code: 183947005
     */
    readonly RefusedProcedureAfterThought: Coding;
    /**
     * Code: 183948000
     */
    readonly RefusedProcedureParentQuoteSWish: Coding;
    /**
     * Code: 183949008
     */
    readonly AssessmentExaminationRefused: Coding;
    /**
     * Code: 183956002
     */
    readonly CareHelpRefusedByPatient: Coding;
    /**
     * Code: 183957006
     */
    readonly PatientRefusesDayHospital: Coding;
    /**
     * Code: 183958001
     */
    readonly RefusesMealsOnWheels: Coding;
    /**
     * Code: 183959009
     */
    readonly SocialServicesHelpRefused: Coding;
    /**
     * Code: 183960004
     */
    readonly PatientRefusesHospitalAdmit: Coding;
    /**
     * Code: 183961000
     */
    readonly PartIIIAccommodationRefused: Coding;
    /**
     * Code: 183962007
     */
    readonly PatientNonCompliantWithSpecificAdvice: Coding;
    /**
     * Code: 183964008
     */
    readonly TreatmentNotIndicated: Coding;
    /**
     * Code: 183965009
     */
    readonly SurgeryNotIndicated: Coding;
    /**
     * Code: 183966005
     */
    readonly DrugTreatmentNotIndicated: Coding;
    /**
     * Code: 184163005
     */
    readonly ChildSurveillanceNotWanted: Coding;
    /**
     * Code: 185754009
     */
    readonly RefusesDiabetesMonitoring: Coding;
    /**
     * Code: 266756008
     */
    readonly MedicalCareUnavailable: Coding;
    /**
     * Code: 266757004
     */
    readonly MedicalContraindicationToProcedure: Coding;
    /**
     * Code: 266758009
     */
    readonly ImmunizationContraindicated: Coding;
    /**
     * Code: 266881002
     */
    readonly NoHistoryTaken: Coding;
    /**
     * Code: 268521004
     */
    readonly ThyroidDiseaseTreatmentStopped: Coding;
    /**
     * Code: 268560002
     */
    readonly MedicalCIImmunization: Coding;
    /**
     * Code: 274512008
     */
    readonly DrugTherapyDiscontinued: Coding;
    /**
     * Code: 275935009
     */
    readonly SurgeryContraindicated: Coding;
    /**
     * Code: 275936005
     */
    readonly PatientNoncomplianceGeneral: Coding;
    /**
     * Code: 275974002
     */
    readonly MeaslesMumpsRubellaVaccineContraindicated: Coding;
    /**
     * Code: 288120003
     */
    readonly OperationAbandonedBeforeOnset: Coding;
    /**
     * Code: 309841001
     */
    readonly ThyroxineTreatmentStopped: Coding;
    /**
     * Code: 309846006
     */
    readonly TreatmentNotAvailable: Coding;
    /**
     * Code: 310352003
     */
    readonly MammographyNotAttended: Coding;
    /**
     * Code: 312451002
     */
    readonly AspirinProphylaxisContraIndicated: Coding;
    /**
     * Code: 314374001
     */
    readonly VAL360DegreeSweepOfCervixNotPerformed: Coding;
    /**
     * Code: 314553311000087102
     */
    readonly DecidedToWaitForASpecificProvider: Coding;
    /**
     * Code: 315020006
     */
    readonly BetaBlockerTherapyRefused: Coding;
    /**
     * Code: 315021005
     */
    readonly RefusesCHDMonitoring: Coding;
    /**
     * Code: 315022003
     */
    readonly NicotineReplacementTherapyRefused: Coding;
    /**
     * Code: 315023008
     */
    readonly AspirinProphylaxisRefused: Coding;
    /**
     * Code: 315061006
     */
    readonly WarfarinContraindicated: Coding;
    /**
     * Code: 315062004
     */
    readonly BetaBlockerContraindicated: Coding;
    /**
     * Code: 315214003
     */
    readonly BetaBlockerNotIndicated: Coding;
    /**
     * Code: 315363002
     */
    readonly StatinsContraindicated: Coding;
    /**
     * Code: 315364008
     */
    readonly AngiotensinConvertingEnzymeInhibitorsContraindicated: Coding;
    /**
     * Code: 315591006
     */
    readonly FibratesContraindicated: Coding;
    /**
     * Code: 315640000
     */
    readonly InfluenzaVaccinationDeclined: Coding;
    /**
     * Code: 371138003
     */
    readonly RefusalOfTreatmentByParents: Coding;
    /**
     * Code: 371900001
     */
    readonly MedicationNotAdministered: Coding;
    /**
     * Code: 373147003
     */
    readonly MedicationNotAdministeredBecauseContraindicated: Coding;
    /**
     * Code: 373148008
     */
    readonly ThrombolyticAgentNotAdministeredBecauseContraindicated: Coding;
    /**
     * Code: 390795005
     */
    readonly PneumococcalVaccinationContraindicated: Coding;
    /**
     * Code: 390796006
     */
    readonly InfluenzaVaccinationContraindicated: Coding;
    /**
     * Code: 390848004
     */
    readonly RetinaeNotExamined: Coding;
    /**
     * Code: 390910005
     */
    readonly ThrombolysisContraindicated: Coding;
    /**
     * Code: 390914001
     */
    readonly ThrombolyticTherapyRefused: Coding;
    /**
     * Code: 391015007
     */
    readonly OsteoporosisRiskAssessmentRefused: Coding;
    /**
     * Code: 391016008
     */
    readonly OsteoporosisRiskAssessmentDefaulted: Coding;
    /**
     * Code: 391021006
     */
    readonly OsteoporosisTreatmentStopped: Coding;
    /**
     * Code: 394909009
     */
    readonly SyringeDriverDiscontinued: Coding;
    /**
     * Code: 394965000
     */
    readonly UrineLeukocyteTestNotDone: Coding;
    /**
     * Code: 394987009
     */
    readonly AngiotensinIIReceptorAntagonistsContraindicated: Coding;
    /**
     * Code: 395006008
     */
    readonly MedicationStoppedInteraction: Coding;
    /**
     * Code: 395007004
     */
    readonly MedicationStoppedIneffective: Coding;
    /**
     * Code: 395008009
     */
    readonly MedicationStoppedContraIndication: Coding;
    /**
     * Code: 395009001
     */
    readonly MedicationStoppedSideEffect: Coding;
    /**
     * Code: 395174005
     */
    readonly NicotineReplacementTherapyContraindicated: Coding;
    /**
     * Code: 395175006
     */
    readonly BupropionContraindicated: Coding;
    /**
     * Code: 395176007
     */
    readonly BupropionRefused: Coding;
    /**
     * Code: 395675007
     */
    readonly OralContraceptivePillContraindicated: Coding;
    /**
     * Code: 395703005
     */
    readonly MeningitisCImmunizationRefused: Coding;
    /**
     * Code: 396781004
     */
    readonly NoChemotherapyANDORRadiationTherapyPriorToLymphadenectomy: Coding;
    /**
     * Code: 397004005
     */
    readonly ImmunophenotypicAnalysisNotPerformed: Coding;
    /**
     * Code: 397023003
     */
    readonly OperationNotCompleted: Coding;
    /**
     * Code: 397399004
     */
    readonly CellPhenotypingNotPerformed: Coding;
    /**
     * Code: 399538001
     */
    readonly CytogeneticStudyNotPerformed: Coding;
    /**
     * Code: 401047000
     */
    readonly HypertensionTreatmentRefused: Coding;
    /**
     * Code: 401084003
     */
    readonly AngiotensinIIReceptorAntagonistDeclined: Coding;
    /**
     * Code: 401086001
     */
    readonly PneumococcalVaccinationDeclined: Coding;
    /**
     * Code: 401318002
     */
    readonly ShuttleWalkingTestNotDone: Coding;
    /**
     * Code: 406149000
     */
    readonly MedicationRefused: Coding;
    /**
     * Code: 407571005
     */
    readonly ClopidogrelNotIndicated: Coding;
    /**
     * Code: 407572003
     */
    readonly AngiotensinIIReceptorAntagonistNotIndicated: Coding;
    /**
     * Code: 407573008
     */
    readonly InfluenzaVaccinationNotIndicated: Coding;
    /**
     * Code: 407582002
     */
    readonly ClopidogrelContraindicated: Coding;
    /**
     * Code: 407583007
     */
    readonly ClopidogrelDeclined: Coding;
    /**
     * Code: 408339001
     */
    readonly ThrombolysisTherapyNotIndicated: Coding;
    /**
     * Code: 408396006
     */
    readonly DiabeticRetinopathyScreeningNotIndicated: Coding;
    /**
     * Code: 408397002
     */
    readonly DiabeticFootExaminationNotIndicated: Coding;
    /**
     * Code: 408398007
     */
    readonly SmokingReviewNotIndicated: Coding;
    /**
     * Code: 408504000
     */
    readonly Child7MonthExaminationNotAttended: Coding;
    /**
     * Code: 408505004
     */
    readonly Child7MonthExaminationNotWanted: Coding;
    /**
     * Code: 408506003
     */
    readonly Child7MonthExaminationNotOffered: Coding;
    /**
     * Code: 408548005
     */
    readonly MagneticResonanceImagingScanDeclined: Coding;
    /**
     * Code: 408549002
     */
    readonly AngiocardiographyDeclined: Coding;
    /**
     * Code: 408551003
     */
    readonly ExerciseToleranceTestRefused: Coding;
    /**
     * Code: 408558009
     */
    readonly MultidisciplinaryTeamFallsAssessmentDeclined: Coding;
    /**
     * Code: 408559001
     */
    readonly PrimaryHealthCareTeamFallsAssessmentDeclined: Coding;
    /**
     * Code: 408566000
     */
    readonly EchocardiogramDeclined: Coding;
    /**
     * Code: 408567009
     */
    readonly CTScanBrainDeclined: Coding;
    /**
     * Code: 408569007
     */
    readonly DiagnosticProcedureDeclined: Coding;
    /**
     * Code: 408572000
     */
    readonly CarotidArteryDopplerDeclined: Coding;
    /**
     * Code: 408778004
     */
    readonly HepatitisBImmunizationDeclined: Coding;
    /**
     * Code: 408791003
     */
    readonly BCGVaccinationDeclined: Coding;
    /**
     * Code: 408795007
     */
    readonly VitaminKProphylaxisDeclined: Coding;
    /**
     * Code: 408836004
     */
    readonly SampleNotObtained: Coding;
    /**
     * Code: 408837008
     */
    readonly AmniocentesisSampleNotObtained: Coding;
    /**
     * Code: 412713002
     */
    readonly CoronaryArteriographyDeclined: Coding;
    /**
     * Code: 412718006
     */
    readonly ChlamydiaScreeningDeclined: Coding;
    /**
     * Code: 412725004
     */
    readonly MedicationReviewDeclined: Coding;
    /**
     * Code: 412752009
     */
    readonly DiabeticFootExaminationDeclined: Coding;
    /**
     * Code: 412782003
     */
    readonly InappropriateMedicationStopped: Coding;
    /**
     * Code: 413122001
     */
    readonly DiabeticRetinopathyScreeningRefused: Coding;
    /**
     * Code: 413123006
     */
    readonly BloodPressureProcedureRefused: Coding;
    /**
     * Code: 413167008
     */
    readonly CompressionBandagingNotIndicated: Coding;
    /**
     * Code: 413310006
     */
    readonly PatientNonCompliantRefusedAccessToServices: Coding;
    /**
     * Code: 413311005
     */
    readonly PatientNonCompliantRefusedInterventionSupport: Coding;
    /**
     * Code: 413312003
     */
    readonly PatientNonCompliantRefusedService: Coding;
    /**
     * Code: 413558003
     */
    readonly AnticoagulationContraindicated: Coding;
    /**
     * Code: 413559006
     */
    readonly AnticoagulationDeclined: Coding;
    /**
     * Code: 413560001
     */
    readonly AnticoagulationNotIndicated: Coding;
    /**
     * Code: 413756001
     */
    readonly CardiacRehabilitationDeclined: Coding;
    /**
     * Code: 413812009
     */
    readonly CervicalSmearNotIndicated: Coding;
    /**
     * Code: 414055003
     */
    readonly DrugDependenceHomeDetoxificationContraindicated: Coding;
    /**
     * Code: 414120003
     */
    readonly ERCPNotCompletedDueToAnatomicalDerangementsFromPreviousSurgery: Coding;
    /**
     * Code: 414159007
     */
    readonly ExerciseToleranceTestContraindicated: Coding;
    /**
     * Code: 414677003
     */
    readonly MetforminContraindicated: Coding;
    /**
     * Code: 415119001
     */
    readonly PneumococcalVaccinationNotIndicated: Coding;
    /**
     * Code: 415570002
     */
    readonly SpirometryNotIndicated: Coding;
    /**
     * Code: 415571003
     */
    readonly SpirometryReversibilityTestingContraindicated: Coding;
    /**
     * Code: 415572005
     */
    readonly SpirometryTestDeclined: Coding;
    /**
     * Code: 415666001
     */
    readonly AdministrationOfSulfonylureaContraindicated: Coding;
    /**
     * Code: 415667005
     */
    readonly AdministrationOfSulfonylureaNotIndicated: Coding;
    /**
     * Code: 416091008
     */
    readonly GlitazonesContraindicated: Coding;
    /**
     * Code: 416126007
     */
    readonly BisphosphonatesDeclined: Coding;
    /**
     * Code: 416128008
     */
    readonly NoPastHistoryOfProcedure: Coding;
    /**
     * Code: 416475003
     */
    readonly CombinedCalciumAndVitaminD3PreparationContraindicated: Coding;
    /**
     * Code: 416522000
     */
    readonly StrontiumRanelateDeclined: Coding;
    /**
     * Code: 416664005
     */
    readonly SelectiveEstrogenReceptorModulatorNotIndicated: Coding;
    /**
     * Code: 416670004
     */
    readonly GlitazonesNotIndicated: Coding;
    /**
     * Code: 416678006
     */
    readonly CombinedCalciumAndVitaminD3PreparationNotIndicated: Coding;
    /**
     * Code: 416704001
     */
    readonly DXAScanContraindicated: Coding;
    /**
     * Code: 416741000
     */
    readonly StrontiumRanelateNotIndicated: Coding;
    /**
     * Code: 416759002
     */
    readonly NonSteroidalAntiInflammatoryDrugsContraindicated: Coding;
    /**
     * Code: 416888009
     */
    readonly DXAScanDeclined: Coding;
    /**
     * Code: 416996000
     */
    readonly StrontiumRanelateContraindicated: Coding;
    /**
     * Code: 417013004
     */
    readonly DXAScanNotIndicated: Coding;
    /**
     * Code: 417045009
     */
    readonly CombinedCalciumAndVitaminD3PreparationDeclined: Coding;
    /**
     * Code: 417101006
     */
    readonly SelectiveEstrogenReceptorModulatorContraindicated: Coding;
    /**
     * Code: 417114007
     */
    readonly RefusedReferralToMinorAilmentsClinic: Coding;
    /**
     * Code: 417128001
     */
    readonly BisphosphonatesContraindicated: Coding;
    /**
     * Code: 417218000
     */
    readonly CarotidUltrasoundNotIndicated: Coding;
    /**
     * Code: 417434004
     */
    readonly BisphosphonatesNotIndicated: Coding;
    /**
     * Code: 417512003
     */
    readonly SelectiveEstrogenReceptorModulatorDeclined: Coding;
    /**
     * Code: 418014008
     */
    readonly ProcedureNotOrdered: Coding;
    /**
     * Code: 418731009
     */
    readonly NoStainApplied: Coding;
    /**
     * Code: 425519007
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToMedicalControlOrder: Coding;
    /**
     * Code: 425921008
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToDoNotResuscitateOrder: Coding;
    /**
     * Code: 426544006
     */
    readonly HistoryRefused: Coding;
    /**
     * Code: 426970003
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToReturnOfSpontaneousCirculation: Coding;
    /**
     * Code: 426999008
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToSignsOfDeath: Coding;
    /**
     * Code: 427569000
     */
    readonly CardiopulmonaryResuscitationDiscontinuedAsPerProtocol: Coding;
    /**
     * Code: 428042006
     */
    readonly MediumChainAcylCoenzymeADehydrogenaseDeficiencyScreeningTestDeclined: Coding;
    /**
     * Code: 428073005
     */
    readonly AlcoholConsumptionScreeningTestDeclined: Coding;
    /**
     * Code: 428299008
     */
    readonly SickleCellScreeningDeclined: Coding;
    /**
     * Code: 428348004
     */
    readonly CardiopulmonaryResuscitationNotAttempted: Coding;
    /**
     * Code: 428650003
     */
    readonly CongenitalHypothyroidismScreeningDeclined: Coding;
    /**
     * Code: 428841003
     */
    readonly CysticFibrosisScreeningDeclined: Coding;
    /**
     * Code: 429284000
     */
    readonly CVDRiskAssessmentDeclined: Coding;
    /**
     * Code: 429688007
     */
    readonly NurseTriageDeclined: Coding;
    /**
     * Code: 429726000
     */
    readonly PhenylketonuriaScreeningDeclined: Coding;
    /**
     * Code: 429739001
     */
    readonly PatientRefusedTransportation: Coding;
    /**
     * Code: 430279008
     */
    readonly DrugTreatmentStoppedAtEndOfClinicalTrial: Coding;
    /**
     * Code: 438370008
     */
    readonly VascularDiseaseRiskAssessmentDeclined: Coding;
    /**
     * Code: 438604008
     */
    readonly PeritonealDialysisTherapyDiscontinued: Coding;
    /**
     * Code: 438765003
     */
    readonly HumanPapillomavirusVaccinationDeclined: Coding;
    /**
     * Code: 438767006
     */
    readonly TerminationOfPregnancyContraindicated: Coding;
    /**
     * Code: 438833006
     */
    readonly AdministrationOfDrugOrMedicamentContraindicated: Coding;
    /**
     * Code: 439495000
     */
    readonly CounselingDeclined: Coding;
    /**
     * Code: 439516000
     */
    readonly HemodialysisTherapyDiscontinued: Coding;
    /**
     * Code: 439867009
     */
    readonly DeterminationOfPatternOfResistanceToAntiviralAgentNotDone: Coding;
    /**
     * Code: 440621003
     */
    readonly ReferralDeclinedByPatient: Coding;
    /**
     * Code: 441989008
     */
    readonly DelayedHypersensitivitySkinTestForHistoplasminNotDone: Coding;
    /**
     * Code: 442324008
     */
    readonly AntenatalScreeningDeclined: Coding;
    /**
     * Code: 442392002
     */
    readonly AmbulanceTransportToHospitalDeclined: Coding;
    /**
     * Code: 442444001
     */
    readonly ReferralToSpecialistAlcoholTreatmentServiceDeclinedByPatient: Coding;
    /**
     * Code: 443788002
     */
    readonly MaternalPostnatalExaminationNotAttended: Coding;
    /**
     * Code: 444020006
     */
    readonly MaternalPostnatalExaminationRefused: Coding;
    /**
     * Code: 444062004
     */
    readonly MaternalPostnatalExaminationNotOffered: Coding;
    /**
     * Code: 4451000175106
     */
    readonly AsthmaActionPlanNotDone: Coding;
    /**
     * Code: 4461000175108
     */
    readonly CervicalCancerScreeningNotDone: Coding;
    /**
     * Code: 4471000175100
     */
    readonly ColorectalCancerScreeningNotDone: Coding;
    /**
     * Code: 4501000175108
     */
    readonly HemoglobinA1CTestNotDone: Coding;
    /**
     * Code: 4541000175105
     */
    readonly SpirometryNotDone: Coding;
    /**
     * Code: 4551000175107
     */
    readonly DiabeticFootExamNotDone: Coding;
    /**
     * Code: 4591000175100
     */
    readonly BoneDensityScreeningNotDone: Coding;
    /**
     * Code: 473149004
     */
    readonly LongActingReversibleContraceptionDeclined: Coding;
    /**
     * Code: 591000119102
     */
    readonly VaccineRefusedByPatient: Coding;
    /**
     * Code: 5991000175105
     */
    readonly PeakExpiratoryFlowNotDone: Coding;
    /**
     * Code: 6021000175100
     */
    readonly VaccinationForDiphtheriaPertussisAndTetanusNotDone: Coding;
    /**
     * Code: 6031000175102
     */
    readonly VaricellaVaccinationNotDone: Coding;
    /**
     * Code: 6041000175108
     */
    readonly HepatitisAVaccinationNotDone: Coding;
    /**
     * Code: 6051000175105
     */
    readonly HepatitisBVaccinationNotDone: Coding;
    /**
     * Code: 698357006
     */
    readonly AbdominalAorticAneurysmScreeningDeclined: Coding;
    /**
     * Code: 698451006
     */
    readonly AnkleBrachialPressureIndexTestDeclined: Coding;
    /**
     * Code: 698459008
     */
    readonly AntidepressantDrugTreatmentStopped: Coding;
    /**
     * Code: 698460003
     */
    readonly AntiviralTherapyDeclined: Coding;
    /**
     * Code: 698468005
     */
    readonly BisoprololContraindicated: Coding;
    /**
     * Code: 698473004
     */
    readonly BloodGlucoseTestDeclined: Coding;
    /**
     * Code: 698483000
     */
    readonly WeightManagementAdviceDeclined: Coding;
    /**
     * Code: 698484006
     */
    readonly MeasurementOfWaistCircumferenceDeclined: Coding;
    /**
     * Code: 698490005
     */
    readonly UrineDipstickTestDeclined: Coding;
    /**
     * Code: 698521002
     */
    readonly SimvastatinContraindicated: Coding;
    /**
     * Code: 698569004
     */
    readonly PostnatalDepressionNotDiscussed: Coding;
    /**
     * Code: 698753008
     */
    readonly NeverHadCervicalSmear: Coding;
    /**
     * Code: 698758004
     */
    readonly NebivololTherapyRefused: Coding;
    /**
     * Code: 698950001
     */
    readonly InfluenzaAVirusSubtypeH1N1VaccinationDeclined: Coding;
    /**
     * Code: 699034004
     */
    readonly HomeOxygenTherapyDeclined: Coding;
    /**
     * Code: 699037006
     */
    readonly HepatitisBVaccinationContraindicated: Coding;
    /**
     * Code: 699042003
     */
    readonly HistoryTakingOfSexualOrientationDeclined: Coding;
    /**
     * Code: 699048004
     */
    readonly ExerciseToleranceTestNotIndicated: Coding;
    /**
     * Code: 699053009
     */
    readonly FootPulseCheckDeclined: Coding;
    /**
     * Code: 699054003
     */
    readonly AdministrationOfBloodProductDeclined: Coding;
    /**
     * Code: 699128009
     */
    readonly BloodTransfusionDeclined: Coding;
    /**
     * Code: 699137009
     */
    readonly CarvedilolTherapyDeclined: Coding;
    /**
     * Code: 699231000
     */
    readonly DomesticAbuseNotDiscussed: Coding;
    /**
     * Code: 700110004
     */
    readonly BisphosphonateProphylaxisSuspended: Coding;
    /**
     * Code: 700359005
     */
    readonly BoosterMeningitisCVaccinationDeclined: Coding;
    /**
     * Code: 700384008
     */
    readonly AntibioticProphylaxisNotIndicated: Coding;
    /**
     * Code: 700411009
     */
    readonly RoutineEnquiryAboutDomesticAbuseDeclined: Coding;
    /**
     * Code: 703427001
     */
    readonly RefusalOfTreatmentByPatientAgainstDentalAdvice: Coding;
    /**
     * Code: 703942005
     */
    readonly NeverHadMammogram: Coding;
    /**
     * Code: 703971006
     */
    readonly HepatitisAVaccinationNotIndicated: Coding;
    /**
     * Code: 703989007
     */
    readonly TeriparatideTherapyDeclined: Coding;
    /**
     * Code: 703991004
     */
    readonly RaloxifeneTherapyDeclined: Coding;
    /**
     * Code: 703992006
     */
    readonly BreastfeedingSupportDeclined: Coding;
    /**
     * Code: 703996009
     */
    readonly TeriparatideNotIndicated: Coding;
    /**
     * Code: 703997000
     */
    readonly TeriparatideContraindicated: Coding;
    /**
     * Code: 703999002
     */
    readonly RaloxifeneContraindicated: Coding;
    /**
     * Code: 704000000
     */
    readonly RaloxifeneNotIndicated: Coding;
    /**
     * Code: 704033005
     */
    readonly Phosphodiesterase5InhibitorNotIndicated: Coding;
    /**
     * Code: 704046000
     */
    readonly MentalHealthAssessmentDeclined: Coding;
    /**
     * Code: 704047009
     */
    readonly Phosphodiesterase5InhibitorDeclined: Coding;
    /**
     * Code: 704049007
     */
    readonly ReferralToErectileDysfunctionClinicDeclined: Coding;
    /**
     * Code: 704051006
     */
    readonly ReferralToCardiacRehabilitationProgramDeclined: Coding;
    /**
     * Code: 704052004
     */
    readonly ReferralToCardiacRehabilitationProgramNotIndicated: Coding;
    /**
     * Code: 704096004
     */
    readonly ReferralToHeartFailureExerciseProgramNotIndicated: Coding;
    /**
     * Code: 704097008
     */
    readonly ReferralToHeartFailureExerciseProgramDeclined: Coding;
    /**
     * Code: 705140004
     */
    readonly PhysicalHealthAssessmentDeclined: Coding;
    /**
     * Code: 706890009
     */
    readonly VaginalBirthAfterPreviousCesareanSectionRefused: Coding;
    /**
     * Code: 707287001
     */
    readonly HepatitisBVaccinationNotIndicated: Coding;
    /**
     * Code: 707298000
     */
    readonly Phosphodiesterase5InhibitorContraindicated: Coding;
    /**
     * Code: 707745004
     */
    readonly TuberculosisScreeningDeclined: Coding;
    /**
     * Code: 707746003
     */
    readonly ScreeningChestXRayDeclined: Coding;
    /**
     * Code: 707853004
     */
    readonly TestingForEbolaVirusNotIndicated: Coding;
    /**
     * Code: 708000007
     */
    readonly InsulinTreatmentStopped: Coding;
    /**
     * Code: 708129006
     */
    readonly TransfusionOfBloodProductRefusedForReligiousReason: Coding;
    /**
     * Code: 709198003
     */
    readonly EducationNotIndicated: Coding;
    /**
     * Code: 710765004
     */
    readonly WoundDrainDiscontinued: Coding;
    /**
     * Code: 712740006
     */
    readonly MedicationMonitoringNotIndicated: Coding;
    /**
     * Code: 712751006
     */
    readonly RadiationTherapyNotDone: Coding;
    /**
     * Code: 712790005
     */
    readonly TripleTestNotOffered: Coding;
    /**
     * Code: 712803007
     */
    readonly AdministrationOfAntiDGlobulinNotOffered: Coding;
    /**
     * Code: 712812009
     */
    readonly AntenatalUltrasoundScanNotOffered: Coding;
    /**
     * Code: 712851004
     */
    readonly AlphaFetoproteinBloodTestNotOffered: Coding;
    /**
     * Code: 712852006
     */
    readonly AmniocentesisNotOffered: Coding;
    /**
     * Code: 712854007
     */
    readonly AntenatalScreeningForViralHepatitisTypeBNotOffered: Coding;
    /**
     * Code: 712869008
     */
    readonly AntenatalHIVHumanImmunodeficiencyVirusScreeningNotOffered: Coding;
    /**
     * Code: 712870009
     */
    readonly AntenatalRhesusAntibodyScreeningNotOffered: Coding;
    /**
     * Code: 712872001
     */
    readonly AntenatalThalassemiaScreeningNotOffered: Coding;
    /**
     * Code: 712985002
     */
    readonly ChemotherapyNotDone: Coding;
    /**
     * Code: 712996005
     */
    readonly ParentingEducationNotOffered: Coding;
    /**
     * Code: 713068007
     */
    readonly Over75YearsOfAgeHealthCheckDeclined: Coding;
    /**
     * Code: 713207007
     */
    readonly NeckDissectionNotDone: Coding;
    /**
     * Code: 713246009
     */
    readonly ProcedureDiscontinuedByHealthcareProfessional: Coding;
    /**
     * Code: 713247000
     */
    readonly ProcedureDiscontinuedByPatient: Coding;
    /**
     * Code: 713248005
     */
    readonly ProcedureDiscontinuedByDoctor: Coding;
    /**
     * Code: 713615000
     */
    readonly AdvanceCarePlanningDeclined: Coding;
    /**
     * Code: 714747005
     */
    readonly DiscussionAboutAdvanceCarePlanningDeclined: Coding;
    /**
     * Code: 715163003
     */
    readonly DiphtheriaVaccinationContraindicated: Coding;
    /**
     * Code: 715166006
     */
    readonly BacillusCalmetteGuerinVaccinationContraindicated: Coding;
    /**
     * Code: 715508000
     */
    readonly AssessmentUsingGeneralizedAnxietyDisorder7ItemScaleDeclined: Coding;
    /**
     * Code: 715621003
     */
    readonly HeartFailureEducationNotDone: Coding;
    /**
     * Code: 715622005
     */
    readonly WarfarinNotPrescribed: Coding;
    /**
     * Code: 716048005
     */
    readonly ReviewOfAdvanceCarePlanDeclined: Coding;
    /**
     * Code: 914933391000087108
     */
    readonly RequestProcedureDeferral: Coding;
    /**
     * Code: 921000119109
     */
    readonly VaccineRefusedByParent: Coding;
};
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare type ProcedureNotPerformedReasonCodingType = typeof ProcedureNotPerformedReasonCodings;
//# sourceMappingURL=ProcedureNotPerformedReasonCodings.d.ts.map