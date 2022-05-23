import * as fhir from '../fhir.js';
import { EventStatusCodeType } from '../fhirValueSets/EventStatusCodes.js';
/**
 * Valid arguments for the ProcedurePerformer type.
 */
export interface ProcedurePerformerArgs extends fhir.BackboneElementArgs {
    /**
     * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
     */
    function?: fhir.CodeableConceptArgs | undefined;
    /**
     * The practitioner who was involved in the procedure.
     */
    actor: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * Limited to "real" people rather than equipment.
 */
export declare class ProcedurePerformer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * The practitioner who was involved in the procedure.
     */
    actor: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for ProcedurePerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedurePerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProcedureFocalDevice type.
 */
export interface ProcedureFocalDeviceArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhir.CodeableConceptArgs | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated: fhir.ReferenceArgs | null;
}
/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export declare class ProcedureFocalDevice extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhir.CodeableConcept | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated: fhir.Reference | null;
    /**
     * Default constructor for ProcedureFocalDevice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedureFocalDeviceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for action (Procedure.focalDevice.action)
     */
    static get actionPreferredCodings(): {
        readonly PatientEvaluationAction: fhir.Coding;
        readonly MeasurementAction: fhir.Coding;
        readonly AdministrativeAction: fhir.Coding;
        readonly ObservationAction: fhir.Coding;
        readonly AssistingAction: fhir.Coding;
        readonly ManagementAction: fhir.Coding;
        readonly StimulationAction: fhir.Coding;
        readonly AdmissionAction: fhir.Coding;
        readonly DischargeAction: fhir.Coding;
        readonly AdministrativeTransferAction: fhir.Coding;
        readonly ReferralAction: fhir.Coding;
        readonly AdministrativeDispositionAction: fhir.Coding;
        readonly AuditAction: fhir.Coding;
        readonly MedicolegalAction: fhir.Coding;
        readonly MedicolegalTestimonyAction: fhir.Coding;
        readonly TrainingAction: fhir.Coding;
        readonly SurgicalActionValues: fhir.Coding;
        readonly MicrosurgeryAction: fhir.Coding;
        readonly IncisionAction: fhir.Coding;
        readonly ExploratoryIncisionAction: fhir.Coding;
        readonly DrainageAction: fhir.Coding;
        readonly DrillingAction: fhir.Coding;
        readonly EvacuationAction: fhir.Coding;
        readonly DissectionAction: fhir.Coding;
        readonly DiscissionAction: fhir.Coding;
        readonly SlittingAction: fhir.Coding;
        readonly BisectionAction: fhir.Coding;
        readonly BifurcationAction: fhir.Coding;
        readonly SurgicalDivision: fhir.Coding;
        readonly ReleaseAction: fhir.Coding;
        /**
         * The kind of change that happened to the device during the procedure.
         */
        readonly PunctureAction: fhir.Coding;
        readonly ScarificationAction: fhir.Coding;
        readonly RemovalAction: fhir.Coding;
        readonly ExcisionAction: fhir.Coding;
        readonly WedgeExcisionAction: fhir.Coding;
        readonly SurgicalRemovalAction: fhir.Coding;
        readonly ExpulsionAction: fhir.Coding;
        readonly ReexcisionAction: fhir.Coding;
        readonly AmputationAction: fhir.Coding;
        readonly TransfixionAction: fhir.Coding;
        readonly EviscerationAction: fhir.Coding;
        readonly EnucleationAction: fhir.Coding;
        readonly TrephineAction: fhir.Coding;
        readonly BXBiopsy: fhir.Coding;
        readonly IncisionBiopsy: fhir.Coding;
        readonly AspirationAction: fhir.Coding;
        readonly DebridementAction: fhir.Coding;
        readonly SaucerizationAction: fhir.Coding;
        readonly CurettageAction: fhir.Coding;
        readonly TrimmingAction: fhir.Coding;
        readonly ShavingAction: fhir.Coding;
        readonly ScrapingAction: fhir.Coding;
        readonly FilletingAction: fhir.Coding;
        readonly IntroductionAction: fhir.Coding;
        readonly Injection: fhir.Coding;
        readonly TattooingAction: fhir.Coding;
        readonly InflationAction: fhir.Coding;
        readonly InfusionAction: fhir.Coding;
        readonly PerfusionAction: fhir.Coding;
        readonly IrrigationAction: fhir.Coding;
        readonly InsufflationAction: fhir.Coding;
        readonly InstillationAction: fhir.Coding;
        readonly EmbolizationAction: fhir.Coding;
        readonly Replantation: fhir.Coding;
        readonly IntubationAction: fhir.Coding;
        readonly SoundingAction: fhir.Coding;
        readonly SurgicalRecessionAction: fhir.Coding;
        readonly ResectionRecessionAction: fhir.Coding;
        readonly RadialIncisionAction: fhir.Coding;
        readonly TransferAction: fhir.Coding;
        readonly ZPlastyAction: fhir.Coding;
        readonly LengtheningProcedure: fhir.Coding;
        readonly Shortening: fhir.Coding;
        readonly Augmentation: fhir.Coding;
        readonly Advancement: fhir.Coding;
        readonly SuspensionAndFixationAction: fhir.Coding;
        readonly ExteriorizationAction: fhir.Coding;
        readonly MarsupializationAction: fhir.Coding;
        readonly ReinforcementAction: fhir.Coding;
        readonly ClosureAction: fhir.Coding;
        readonly LayeredClosureAction: fhir.Coding; /**
         * Individual who is making the procedure statement.
         */
        readonly OversewingAction: fhir.Coding;
        readonly ClosureByBucklingAction: fhir.Coding;
        readonly CerclageAction: fhir.Coding;
        readonly LigationAction: fhir.Coding;
        readonly FixationAction: fhir.Coding;
        readonly CryopexyAction: fhir.Coding;
        readonly PlicationAction: fhir.Coding;
        readonly ImbricationAction: fhir.Coding;
        readonly Creation: fhir.Coding;
        readonly ReconstructionAction: fhir.Coding;
        readonly StabilizationAction: fhir.Coding;
        readonly FusionAction: fhir.Coding;
        readonly AnchoringAction: fhir.Coding;
        readonly EnlargementAction: fhir.Coding;
        readonly DestructionAction: fhir.Coding;
        readonly AvulsionAction: fhir.Coding;
        readonly DecorticationAction: fhir.Coding;
        readonly StrippingAction: fhir.Coding;
        readonly StrippingAndLigationAction: fhir.Coding;
        readonly AbrasionAction: fhir.Coding; /**
         * Any other notes and comments about the procedure.
         */
        readonly SalabrasionAction: fhir.Coding;
        readonly GrindingAction: fhir.Coding;
        readonly CoagulationAction: fhir.Coding;
        readonly ObliterationAction: fhir.Coding;
        readonly CauterizationAction: fhir.Coding;
        readonly CryosurgeryAction: fhir.Coding;
        readonly ThermocauteryAction: fhir.Coding;
        readonly FulgurationAction: fhir.Coding;
        readonly ElectrodesiccationAction: fhir.Coding;
        readonly ElectrocoagulationAction: fhir.Coding;
        readonly Electrocautery: fhir.Coding;
        readonly ElectrodestructionAction: fhir.Coding;
        readonly CrushingAction: fhir.Coding;
        readonly FragmentationAction: fhir.Coding;
        readonly EmulsificationAction: fhir.Coding;
        readonly ChemosurgeryAction: fhir.Coding;
        readonly ChemicalCautery: fhir.Coding;
        readonly PhotocoagulationAction: fhir.Coding;
        readonly TransplantationAction: fhir.Coding;
        readonly Grafting: fhir.Coding;
        readonly ManipulativeProcedure: fhir.Coding;
        readonly MobilizationAction: fhir.Coding;
        readonly RemobilizationAction: fhir.Coding;
        readonly TractionAction: fhir.Coding;
        readonly ManualReductionAction: fhir.Coding;
        readonly ElevationAction: fhir.Coding;
        readonly InstrumentalElevationAction: fhir.Coding;
        readonly ExtractionAction: fhir.Coding;
        readonly SurgicalExtractionAction: fhir.Coding;
        readonly ExpressionAction: fhir.Coding;
        readonly DilatationAction: fhir.Coding;
        readonly SurgicalStretching: fhir.Coding;
        readonly DilationAndStretchingAction: fhir.Coding;
        readonly Bouginage: fhir.Coding;
        readonly FittingAction: fhir.Coding;
        readonly ApplicationActions: fhir.Coding;
        readonly AdjustmentAction: fhir.Coding;
        readonly ReductionAction: fhir.Coding;
        readonly ConsultationAction: fhir.Coding;
        readonly HistoryTakingAction: fhir.Coding;
        readonly Inspection: fhir.Coding;
        readonly PalpationAction: fhir.Coding;
        readonly PercussionAction: fhir.Coding;
        readonly ListeningAction: fhir.Coding;
        readonly OpticalTransilluminationAction: fhir.Coding;
        readonly PrescriptionAction: fhir.Coding;
        readonly CounselingAction: fhir.Coding;
        readonly IontophoresisAction: fhir.Coding;
        readonly ElectrolysisAction: fhir.Coding;
        readonly SurgicalGalvanismAction: fhir.Coding;
        readonly AdministrationAction: fhir.Coding;
        readonly FunctionalAssessmentAction: fhir.Coding;
        readonly LongTermAssistance: fhir.Coding;
        readonly ProximalAnastomosis: fhir.Coding;
        readonly DistalAnastomosis: fhir.Coding;
        readonly DebulkingAction: fhir.Coding;
        readonly DarningAction: fhir.Coding;
        readonly Ablation: fhir.Coding;
        readonly ChemicalDestruction: fhir.Coding;
        readonly OpenAdjustment: fhir.Coding;
        readonly Anastomosis: fhir.Coding;
        readonly DirectAnastomosisAction: fhir.Coding;
        readonly LecompteManeuver: fhir.Coding;
        readonly EndToEndAnastomosisAction: fhir.Coding;
        readonly DoubleBarrelledEndToEndAnastomosisAction: fhir.Coding;
        readonly EndToSideAnastomosisAction: fhir.Coding;
        readonly RouxEnYAction: fhir.Coding;
        readonly EndToSideAnastomosisWithoutTunnel: fhir.Coding;
        readonly EndToSideAnastomosisWithTunnel: fhir.Coding;
        readonly SideToSideAnastomosis: fhir.Coding;
        readonly WallaceQuotation69QuotationSideToEndAnastomosisAction: fhir.Coding;
        readonly FineNeedleAspirationBiopsyAction: fhir.Coding;
        readonly BindingAction: fhir.Coding;
        readonly ChemicalInactivation: fhir.Coding;
        readonly Chemodissolution: fhir.Coding;
        readonly MassClosure: fhir.Coding;
        readonly InterruptedMassClosure: fhir.Coding;
        readonly ContinuousMassClosure: fhir.Coding;
        readonly Thermocoagulation: fhir.Coding;
        readonly SemmThermalCoagulation: fhir.Coding;
        readonly WolfThermalCoagulation: fhir.Coding;
        readonly CryotherapyAction: fhir.Coding;
        readonly Delamination: fhir.Coding;
        readonly Hydrodelamination: fhir.Coding;
        readonly DesiccationAction: fhir.Coding;
        readonly AnteriorDisplacement: fhir.Coding;
        readonly PosteriorDisplacement: fhir.Coding;
        readonly LateralDisplacement: fhir.Coding;
        readonly MedialDisplacement: fhir.Coding;
        readonly CloseRectalDissection: fhir.Coding;
        readonly UltrasonicDissection: fhir.Coding;
        readonly ExternalDrainage: fhir.Coding;
        readonly DigitalEvacuation: fhir.Coding;
        readonly ManualExpression: fhir.Coding;
        readonly ExtracapsularExtraction: fhir.Coding;
        readonly IntracapsularExtraction: fhir.Coding;
        readonly FenestrationAction: fhir.Coding;
        readonly BallisticFragmentation: fhir.Coding;
        readonly MechanicalFragmentation: fhir.Coding;
        readonly ElectromagneticPulseFragmentation: fhir.Coding;
        readonly Galvanism: fhir.Coding;
        readonly HighIntensityFocusedUltrasound: fhir.Coding;
        readonly RadioactiveDestruction: fhir.Coding;
        readonly InsertionAction: fhir.Coding;
        readonly KeelingAction: fhir.Coding;
        readonly Localization: fhir.Coding;
        readonly ImmobilizationAction: fhir.Coding;
        readonly Occlusion: fhir.Coding;
        readonly OperativeUltrasound: fhir.Coding;
        readonly Padding: fhir.Coding;
        readonly PeelingAction: fhir.Coding;
        readonly Pressure: fhir.Coding;
        readonly OneHandedPressure: fhir.Coding;
        readonly TwoHandedPressure: fhir.Coding;
        readonly RealignmentAction: fhir.Coding;
        readonly SurgicalRepair: fhir.Coding;
        readonly KeelRepair: fhir.Coding;
        readonly MayoRepair: fhir.Coding;
        readonly PatchingAction: fhir.Coding;
        readonly RepairOfRecurrence: fhir.Coding;
        readonly RotationAction: fhir.Coding;
        readonly IRInternalRotation: fhir.Coding;
        readonly ExternalRotation: fhir.Coding;
        readonly Sampling: fhir.Coding;
        readonly BilateralSampling: fhir.Coding;
        readonly BilateralSequentialSampling: fhir.Coding;
        readonly BilateralSimultaneousSampling: fhir.Coding;
        readonly SamplingWithoutTrap: fhir.Coding;
        readonly UnilateralSampling: fhir.Coding;
        readonly Segmentation: fhir.Coding;
        readonly TamponadeAction: fhir.Coding;
        readonly TaperingAction: fhir.Coding;
        readonly SoftTissueTransfer: fhir.Coding;
        readonly TransferOfBoneBlock: fhir.Coding;
        readonly TranspositionAction: fhir.Coding;
        readonly PhoticStimulation: fhir.Coding;
        readonly SinglePhotonEmissionComputedTomographyAction: fhir.Coding;
        readonly SequentialAnastomosis: fhir.Coding;
        readonly OpenExtractionAction: fhir.Coding;
        readonly DopplerColorFlow: fhir.Coding;
        readonly DopplerContinuousWave: fhir.Coding;
        readonly DopplerPulsed: fhir.Coding;
        readonly ResurfacingAction: fhir.Coding;
        readonly AlloplasticGrafting: fhir.Coding;
        readonly BonePatellarTendonBoneReconstruction: fhir.Coding;
        readonly BraidedProstheticLigamentReconstruction: fhir.Coding;
        readonly CystodiathermyAction: fhir.Coding;
        readonly DiathermyExcision: fhir.Coding;
        readonly DiathermySnareAction: fhir.Coding;
        readonly ElectromagneticFragmentation: fhir.Coding;
        readonly LoopDiathermyExcision: fhir.Coding;
        readonly REDYRegenerationOfDialysate: fhir.Coding;
        readonly Thermocompaction: fhir.Coding;
        readonly UltrasoundFragmentationAction: fhir.Coding;
        readonly SideToEndAnastomosisAction: fhir.Coding;
        readonly Compression: fhir.Coding;
        readonly IntravesicalDrugTherapy: fhir.Coding;
        readonly LaserAction: fhir.Coding;
        readonly LateralRotationAction: fhir.Coding;
        readonly MedialRotationAction: fhir.Coding;
        readonly PrescriptionOfOpticalAidAction: fhir.Coding;
        readonly MicrovascularAnastomosisAction: fhir.Coding;
        readonly EUAExaminationUnderAnesthetic: fhir.Coding;
        readonly MechanicalAssistance: fhir.Coding;
        readonly ExcisionBiopsy: fhir.Coding;
        readonly DigitalRemoval: fhir.Coding;
        readonly Refashioning: fhir.Coding;
        readonly ConduitAnastomosis: fhir.Coding;
        readonly ReservoirAnastomosis: fhir.Coding;
        readonly RadiographicImagingAction: fhir.Coding;
        readonly UltrasoundImagingAction: fhir.Coding;
        readonly ReattachmentAction: fhir.Coding;
        readonly RegenerationAction: fhir.Coding;
        readonly Sealing: fhir.Coding;
        readonly CryoablationAction: fhir.Coding;
        readonly DecompressionAction: fhir.Coding;
        readonly ExplorationAction: fhir.Coding;
        readonly CryocauteryAction: fhir.Coding;
        readonly ManualDilatation: fhir.Coding;
        readonly DisarticulationAction: fhir.Coding;
        readonly Exenteration: fhir.Coding;
        readonly ShaveBiopsyAction: fhir.Coding;
        readonly ReplacementAction: fhir.Coding;
        readonly UltrasoundDestruction: fhir.Coding;
        readonly PlasticOperation: fhir.Coding;
        readonly BlockDissection: fhir.Coding;
        readonly Denervation: fhir.Coding;
        readonly ApplicationOfCaustics: fhir.Coding;
        readonly EversionAction: fhir.Coding;
        readonly DiathermyIncision: fhir.Coding;
        readonly DisimpactionAction: fhir.Coding;
        readonly SurgicalReduction: fhir.Coding;
        readonly EnzymeDestruction: fhir.Coding;
        readonly ShaveExcision: fhir.Coding;
        readonly MicrosurgicalRepair: fhir.Coding;
        readonly RecessionAction: fhir.Coding;
        readonly MicrosurgicalAnastomosis: fhir.Coding;
        readonly Revascularization: fhir.Coding;
        readonly DevascularizationAction: fhir.Coding;
        readonly ApplicationOfSubstance: fhir.Coding;
        readonly OsteoclasisAction: fhir.Coding;
        readonly OsteotomyAction: fhir.Coding;
        readonly InterpositionAnastomosisAction: fhir.Coding;
        readonly ActionsByModality: fhir.Coding;
        readonly FreeingAction: fhir.Coding;
        readonly ClinicalExaminationAction: fhir.Coding;
        readonly UltrasoundAction: fhir.Coding;
        readonly MicrowaveAction: fhir.Coding;
        readonly FunctionalModification: fhir.Coding;
        readonly StructuralModification: fhir.Coding;
        readonly TransfusionAction: fhir.Coding;
        readonly Terminalization: fhir.Coding;
        readonly UnusedActionValues: fhir.Coding;
        readonly StructuralSupportAction: fhir.Coding;
        readonly ManualEvacuation: fhir.Coding;
        readonly DuplexUltrasound: fhir.Coding;
        readonly MagneticResonanceImagingAction: fhir.Coding;
        readonly ComputedTomographyImagingAction: fhir.Coding;
        readonly PlainFilmTechnique: fhir.Coding;
        readonly FluoroscopicImagingAction: fhir.Coding;
        readonly OpeningAction: fhir.Coding;
        readonly ThermographyImagingAction: fhir.Coding;
        readonly RadionuclideImagingAction: fhir.Coding;
        readonly DesensitizationAction: fhir.Coding;
        readonly BrachytherapyAction: fhir.Coding;
        readonly ClippingAction: fhir.Coding;
        readonly StimulusDosingTechnique: fhir.Coding;
        readonly ExtirpationAction: fhir.Coding;
        readonly BypassAction: fhir.Coding;
        readonly HarvestingAction: fhir.Coding;
        readonly InterpositionAction: fhir.Coding;
        readonly SurgicalBiopsyAction: fhir.Coding;
        readonly NonsurgicalBiopsyAction: fhir.Coding;
        readonly FlapReconstructionAction: fhir.Coding;
        readonly ImagingMethod: fhir.Coding;
        readonly GluingAction: fhir.Coding;
        readonly SurgicalToiletAction: fhir.Coding;
        readonly ApproximationAction: fhir.Coding;
        readonly AppositionAction: fhir.Coding;
        readonly SeptationAction: fhir.Coding;
        readonly IndirectAnastomosisAction: fhir.Coding;
        readonly RepositioningAction: fhir.Coding;
        readonly AttentionAction: fhir.Coding;
        readonly ObstetricAction: fhir.Coding;
        readonly DeliveryAction: fhir.Coding;
        readonly InlayReplacementAction: fhir.Coding;
        readonly MonitoringAction: fhir.Coding;
        readonly TakeImpressionAction: fhir.Coding;
        readonly TrialFitOfDeviceAction: fhir.Coding;
        readonly CheckingAction: fhir.Coding;
        readonly InductionAction: fhir.Coding;
        readonly InfiltrationAction: fhir.Coding;
        readonly ApheresisAction: fhir.Coding;
        readonly FiltrationAction: fhir.Coding;
        readonly MappingAction: fhir.Coding;
        readonly MassageAction: fhir.Coding;
        readonly CineImagingAction: fhir.Coding;
        readonly ElectricalDischargeAction: fhir.Coding;
        readonly VideoImagingAction: fhir.Coding;
        readonly SpectroscopyAction: fhir.Coding;
        readonly TerminationAction: fhir.Coding;
        readonly ConnectionAction: fhir.Coding;
        readonly TherapyAction: fhir.Coding;
        readonly DiscussionAction: fhir.Coding;
        readonly ProvisionAction: fhir.Coding;
        readonly CuttingAction: fhir.Coding;
        readonly FilingAction: fhir.Coding;
        readonly RestoreAction: fhir.Coding;
        readonly ObturationAction: fhir.Coding;
        readonly SimpleRemovalAction: fhir.Coding;
        readonly DisinsertionAction: fhir.Coding;
        readonly DissolutionAction: fhir.Coding;
        readonly PacingAction: fhir.Coding;
        readonly PositronEmissionTomographicImagingAction: fhir.Coding;
        readonly LendingAction: fhir.Coding;
        readonly ContouringAction: fhir.Coding;
        readonly PreparationAction: fhir.Coding;
        readonly BucklingAction: fhir.Coding;
        readonly InversionAction: fhir.Coding;
        readonly SuspensionAction: fhir.Coding;
        readonly HyfrecationAction: fhir.Coding;
        readonly MaintenanceAction: fhir.Coding;
        readonly BModeUltrasound: fhir.Coding;
        readonly TomographicImagingPlainRadiologicAction: fhir.Coding;
        readonly TomographicImagingAction: fhir.Coding;
        readonly VAL2DModeUltrasound: fhir.Coding;
        readonly MModeUltrasound: fhir.Coding;
        readonly Illumination: fhir.Coding;
        readonly DualDiffuseDirectIllumination: fhir.Coding;
        readonly FineSlitBeamDirectIllumination: fhir.Coding;
        readonly BroadTangentialDirectIllumination: fhir.Coding;
        readonly IndirectScleroticScatterIllumination: fhir.Coding;
        readonly IndirectRetroilluminationFromTheIris: fhir.Coding;
        readonly IndirectRetroilluminationFromTheRetina: fhir.Coding;
        readonly IndirectIrisTransillumination: fhir.Coding;
        readonly SurgicalDecompressionAction: fhir.Coding;
        readonly DecompressiveExcisionAction: fhir.Coding;
        readonly DecompressiveIncisionAction: fhir.Coding;
        readonly DecompressiveDivisionAction: fhir.Coding;
        readonly ElevationReductionAction: fhir.Coding;
        readonly SurgicalReductionAction: fhir.Coding;
        readonly DilationRepairAction: fhir.Coding;
        readonly SurgicalTransplantationAction: fhir.Coding;
        readonly ProximalIlluminationAction: fhir.Coding;
        readonly InternalDrainageAction: fhir.Coding;
        readonly Use: fhir.Coding;
        readonly Take: fhir.Coding;
        readonly ExaminationANDORHistoryTakingAction: fhir.Coding;
        readonly ActionOfDrugAdministration: fhir.Coding;
        readonly ShuntAction: fhir.Coding;
        readonly SurgicalIntroductionAction: fhir.Coding;
        readonly RecommendationAction: fhir.Coding;
        readonly SurgicalInsertionAction: fhir.Coding;
        readonly TeachingAction: fhir.Coding;
        readonly PowerDopplerUltrasound: fhir.Coding;
        readonly TransectionAction: fhir.Coding;
        readonly ClosedReductionAction: fhir.Coding;
        readonly OpenReductionAction: fhir.Coding;
        readonly VAL3DModeUltrasound: fhir.Coding;
        readonly OpenEmbolizationAction: fhir.Coding;
        readonly DiathermyAction: fhir.Coding;
        readonly SurgicalPiercingAction: fhir.Coding;
        readonly SurgicalCataractAspirationAction: fhir.Coding;
        readonly MechanicalRepairAction: fhir.Coding;
        readonly WedgeOsteotomyAction: fhir.Coding;
        readonly ClosedManualReductionAction: fhir.Coding;
        readonly SurgicalSizeReductionAction: fhir.Coding;
        readonly DispensingAction: fhir.Coding;
        readonly MechanicalConstructionAction: fhir.Coding;
        readonly SurgicalManipulationAction: fhir.Coding;
        readonly ExcisionDebridementAction: fhir.Coding;
        readonly FixationByWedgingAction: fhir.Coding;
        readonly TransmissionIllumination: fhir.Coding;
        readonly ReflectionIllumination: fhir.Coding;
        readonly EpifluorescenceIllumination: fhir.Coding;
        readonly BrightfieldIllumination: fhir.Coding;
        readonly DarkfieldIllumination: fhir.Coding;
        readonly ObliqueIllumination: fhir.Coding;
        readonly PhaseContrastIllumination: fhir.Coding;
        readonly DifferentialInterferenceContrast: fhir.Coding;
        readonly TotalInternalReflectionFluorescence: fhir.Coding;
        readonly ConeBeamComputedTomographyImagingAction: fhir.Coding;
        readonly SurgicalReplacementAction: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Procedure type.
 */
export interface ProcedureArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Procedure" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<EventStatusCodeType> | string | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performed?: fhir.FhirDateTime | fhir.Period | fhir.FhirString | fhir.Age | fhir.Range | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedString?: fhir.FhirString | string | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedAge?: fhir.AgeArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedRange?: fhir.RangeArgs | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * Individual who is making the procedure statement.
     */
    asserter?: fhir.ReferenceArgs | undefined;
    /**
     * Limited to "real" people rather than equipment.
     */
    performer?: fhir.ProcedurePerformerArgs[] | undefined;
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report?: fhir.ReferenceArgs[] | undefined;
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail?: fhir.ReferenceArgs[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
     */
    followUp?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any other notes and comments about the procedure.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: fhir.ProcedureFocalDeviceArgs[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 */
export declare class Procedure extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Procedure";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
     */
    identifier: fhir.Identifier[];
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
     */
    instantiatesCanonical: fhir.FhirCanonical[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri: fhir.FhirUri[];
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn: fhir.Reference[];
    /**
     * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
     */
    partOf: fhir.Reference[];
    /**
     * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<EventStatusCodeType> | null;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performed?: (fhir.FhirDateTime | fhir.Period | fhir.FhirString | fhir.Age | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Procedure.performed[x]
     */
    protected static readonly _fts_performedIsChoice: true;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * Individual who is making the procedure statement.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * Limited to "real" people rather than equipment.
     */
    performer: fhir.ProcedurePerformer[];
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.Reference | undefined;
    /**
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonReference: fhir.Reference[];
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report: fhir.Reference[];
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication: fhir.CodeableConcept[];
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail: fhir.Reference[];
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
     */
    followUp: fhir.CodeableConcept[];
    /**
     * Any other notes and comments about the procedure.
     */
    note: fhir.Annotation[];
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice: fhir.ProcedureFocalDevice[];
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference: fhir.Reference[];
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode: fhir.CodeableConcept[];
    /**
     * Default constructor for Procedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Procedure.status)
     */
    static get statusRequiredCodes(): {
        readonly Completed: "completed";
        readonly EnteredInError: "entered-in-error";
        readonly InProgress: "in-progress";
        readonly NotDone: "not-done";
        readonly OnHold: "on-hold";
        readonly Preparation: "preparation";
        readonly Stopped: "stopped";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Procedure.d.ts.map