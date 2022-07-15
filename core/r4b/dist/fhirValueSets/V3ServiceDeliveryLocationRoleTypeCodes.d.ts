/**
 * A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare const V3ServiceDeliveryLocationRoleTypeCodes: {
    /**
     * Code: _DedicatedClinicalLocationRoleType
     */
    readonly DedicatedClinicalLocationRoleType: "_DedicatedClinicalLocationRoleType";
    /**
     * Code: _DedicatedNonClinicalLocationRoleType
     */
    readonly DedicatedNonClinicalLocationRoleType: "_DedicatedNonClinicalLocationRoleType";
    /**
     * Code: _DedicatedServiceDeliveryLocationRoleType
     */
    readonly DedicatedServiceDeliveryLocationRoleType: "_DedicatedServiceDeliveryLocationRoleType";
    /**
     * Code: _IncidentalServiceDeliveryLocationRoleType
     */
    readonly IncidentalServiceDeliveryLocationRoleType: "_IncidentalServiceDeliveryLocationRoleType";
    /**
     * Code: ACC
     */
    readonly AccidentSite: "ACC";
    /**
     * Code: ALL
     */
    readonly AllergyClinic: "ALL";
    /**
     * Code: AMB
     */
    readonly Ambulance: "AMB";
    /**
     * Code: AMPUT
     */
    readonly AmputeeClinic: "AMPUT";
    /**
     * Code: BMTC
     */
    readonly BoneMarrowTransplantClinic: "BMTC";
    /**
     * Code: BMTU
     */
    readonly BoneMarrowTransplantUnit: "BMTU";
    /**
     * Code: BREAST
     */
    readonly BreastClinic: "BREAST";
    /**
     * Code: CANC
     */
    readonly ChildAndAdolescentNeurologyClinic: "CANC";
    /**
     * Code: CAPC
     */
    readonly ChildAndAdolescentPsychiatryClinic: "CAPC";
    /**
     * Code: CARD
     */
    readonly AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: "CARD";
    /**
     * Code: CATH
     */
    readonly CardiacCatheterizationLab: "CATH";
    /**
     * Code: CCU
     */
    readonly CoronaryCareUnit: "CCU";
    /**
     * Code: CHEST
     */
    readonly ChestUnit: "CHEST";
    /**
     * Code: CHR
     */
    readonly ChronicCareFacility: "CHR";
    /**
     * Code: COAG
     */
    readonly CoagulationClinic: "COAG";
    /**
     * Code: COMM
     */
    readonly CommunityLocation: "COMM";
    /**
     * Code: CRS
     */
    readonly ColonAndRectalSurgeryClinic: "CRS";
    /**
     * Code: CSC
     */
    readonly CommunityServiceCenter: "CSC";
    /**
     * Code: CVDX
     */
    readonly CardiovascularDiagnosticsOrTherapeuticsUnit: "CVDX";
    /**
     * Code: DADDR
     */
    readonly DeliveryAddress: "DADDR";
    /**
     * Code: DERM
     */
    readonly DermatologyClinic: "DERM";
    /**
     * Code: DX
     */
    readonly DiagnosticsOrTherapeuticsUnit: "DX";
    /**
     * Code: ECHO
     */
    readonly EchocardiographyLab: "ECHO";
    /**
     * Code: ENDO
     */
    readonly EndocrinologyClinic: "ENDO";
    /**
     * Code: ENDOS
     */
    readonly EndoscopyLab: "ENDOS";
    /**
     * Code: ENT
     */
    readonly OtorhinolaryngologyClinic: "ENT";
    /**
     * Code: EPIL
     */
    readonly EpilepsyUnit: "EPIL";
    /**
     * Code: ER
     */
    readonly EmergencyRoom: "ER";
    /**
     * Code: ETU
     */
    readonly EmergencyTraumaUnit: "ETU";
    /**
     * Code: FMC
     */
    readonly FamilyMedicineClinic: "FMC";
    /**
     * Code: GACH
     */
    readonly HospitalsGeneralAcuteCareHospital: "GACH";
    /**
     * Code: GI
     */
    readonly GastroenterologyClinic: "GI";
    /**
     * Code: GIDX
     */
    readonly GastroenterologyDiagnosticsOrTherapeuticsLab: "GIDX";
    /**
     * Code: GIM
     */
    readonly GeneralInternalMedicineClinic: "GIM";
    /**
     * Code: GYN
     */
    readonly GynecologyClinic: "GYN";
    /**
     * Code: HAND
     */
    readonly HandClinic: "HAND";
    /**
     * Code: HD
     */
    readonly HemodialysisUnit: "HD";
    /**
     * Code: HEM
     */
    readonly HematologyClinic: "HEM";
    /**
     * Code: HLAB
     */
    readonly HospitalLaboratory: "HLAB";
    /**
     * Code: HOSP
     */
    readonly Hospital: "HOSP";
    /**
     * Code: HRAD
     */
    readonly RadiologyUnit: "HRAD";
    /**
     * Code: HTN
     */
    readonly HypertensionClinic: "HTN";
    /**
     * Code: HU
     */
    readonly HospitalUnit: "HU";
    /**
     * Code: HUSCS
     */
    readonly SpecimenCollectionSite: "HUSCS";
    /**
     * Code: ICU
     */
    readonly IntensiveCareUnit: "ICU";
    /**
     * Code: IEC
     */
    readonly ImpairmentEvaluationCenter: "IEC";
    /**
     * Code: INFD
     */
    readonly InfectiousDiseaseClinic: "INFD";
    /**
     * Code: INLAB
     */
    readonly InpatientLaboratory: "INLAB";
    /**
     * Code: INPHARM
     */
    readonly InpatientPharmacy: "INPHARM";
    /**
     * Code: INV
     */
    readonly InfertilityClinic: "INV";
    /**
     * Code: LYMPH
     */
    readonly LympedemaClinic: "LYMPH";
    /**
     * Code: MBL
     */
    readonly MedicalLaboratory: "MBL";
    /**
     * Code: MGEN
     */
    readonly MedicalGeneticsClinic: "MGEN";
    /**
     * Code: MHSP
     */
    readonly MilitaryHospital: "MHSP";
    /**
     * Code: MOBL
     */
    readonly MobileUnit: "MOBL";
    /**
     * Code: NCCF
     */
    readonly NursingOrCustodialCareFacility: "NCCF";
    /**
     * Code: NCCS
     */
    readonly NeurologyCriticalCareAndStrokeUnit: "NCCS";
    /**
     * Code: NEPH
     */
    readonly NephrologyClinic: "NEPH";
    /**
     * Code: NEUR
     */
    readonly NeurologyClinic: "NEUR";
    /**
     * Code: NS
     */
    readonly NeurosurgeryUnit: "NS";
    /**
     * Code: OB
     */
    readonly ObstetricsClinic: "OB";
    /**
     * Code: OF
     */
    readonly OutpatientFacility: "OF";
    /**
     * Code: OMS
     */
    readonly OralAndMaxillofacialSurgeryClinic: "OMS";
    /**
     * Code: ONCL
     */
    readonly MedicalOncologyClinic: "ONCL";
    /**
     * Code: OPH
     */
    readonly OpthalmologyClinic: "OPH";
    /**
     * Code: OPTC
     */
    readonly OptometryClinic: "OPTC";
    /**
     * Code: ORTHO
     */
    readonly OrthopedicsClinic: "ORTHO";
    /**
     * Code: OUTLAB
     */
    readonly OutpatientLaboratory: "OUTLAB";
    /**
     * Code: OUTPHARM
     */
    readonly OutpatientPharmacy: "OUTPHARM";
    /**
     * Code: PAINCL
     */
    readonly PainClinic: "PAINCL";
    /**
     * Code: PC
     */
    readonly PrimaryCareClinic: "PC";
    /**
     * Code: PEDC
     */
    readonly PediatricsClinic: "PEDC";
    /**
     * Code: PEDCARD
     */
    readonly PediatricCardiologyClinic: "PEDCARD";
    /**
     * Code: PEDE
     */
    readonly PediatricEndocrinologyClinic: "PEDE";
    /**
     * Code: PEDGI
     */
    readonly PediatricGastroenterologyClinic: "PEDGI";
    /**
     * Code: PEDHEM
     */
    readonly PediatricHematologyClinic: "PEDHEM";
    /**
     * Code: PEDHO
     */
    readonly PediatricOncologyClinic: "PEDHO";
    /**
     * Code: PEDICU
     */
    readonly PediatricIntensiveCareUnit: "PEDICU";
    /**
     * Code: PEDID
     */
    readonly PediatricInfectiousDiseaseClinic: "PEDID";
    /**
     * Code: PEDNEPH
     */
    readonly PediatricNephrologyClinic: "PEDNEPH";
    /**
     * Code: PEDNICU
     */
    readonly PediatricNeonatalIntensiveCareUnit: "PEDNICU";
    /**
     * Code: PEDRHEUM
     */
    readonly PediatricRheumatologyClinic: "PEDRHEUM";
    /**
     * Code: PEDU
     */
    readonly PediatricUnit: "PEDU";
    /**
     * Code: PHARM
     */
    readonly Pharmacy: "PHARM";
    /**
     * Code: PHU
     */
    readonly PsychiatricHospitalUnit: "PHU";
    /**
     * Code: PLS
     */
    readonly PlasticSurgeryClinic: "PLS";
    /**
     * Code: POD
     */
    readonly PodiatryClinic: "POD";
    /**
     * Code: PRC
     */
    readonly PainRehabilitationCenter: "PRC";
    /**
     * Code: PREV
     */
    readonly PreventiveMedicineClinic: "PREV";
    /**
     * Code: PROCTO
     */
    readonly ProctologyClinic: "PROCTO";
    /**
     * Code: PROFF
     */
    readonly ProviderQuoteSOffice: "PROFF";
    /**
     * Code: PROS
     */
    readonly ProsthodonticsClinic: "PROS";
    /**
     * Code: PSI
     */
    readonly PsychologyClinic: "PSI";
    /**
     * Code: PSY
     */
    readonly PsychiatryClinic: "PSY";
    /**
     * Code: PSYCHF
     */
    readonly PsychatricCareFacility: "PSYCHF";
    /**
     * Code: PTRES
     */
    readonly PatientQuoteSResidence: "PTRES";
    /**
     * Code: RADDX
     */
    readonly RadiologyDiagnosticsOrTherapeuticsUnit: "RADDX";
    /**
     * Code: RADO
     */
    readonly RadiationOncologyUnit: "RADO";
    /**
     * Code: RH
     */
    readonly RehabilitationHospital: "RH";
    /**
     * Code: RHAT
     */
    readonly AddictionTreatmentCenter: "RHAT";
    /**
     * Code: RHEUM
     */
    readonly RheumatologyClinic: "RHEUM";
    /**
     * Code: RHII
     */
    readonly IntellectualImpairmentCenter: "RHII";
    /**
     * Code: RHMAD
     */
    readonly ParentsWithAdjustmentDifficultiesCenter: "RHMAD";
    /**
     * Code: RHPI
     */
    readonly PhysicalImpairmentCenter: "RHPI";
    /**
     * Code: RHPIH
     */
    readonly PhysicalImpairmentHearingCenter: "RHPIH";
    /**
     * Code: RHPIMS
     */
    readonly PhysicalImpairmentMotorSkillsCenter: "RHPIMS";
    /**
     * Code: RHPIVS
     */
    readonly PhysicalImpairmentVisualSkillsCenter: "RHPIVS";
    /**
     * Code: RHU
     */
    readonly RehabilitationHospitalUnit: "RHU";
    /**
     * Code: RHYAD
     */
    readonly YouthsWithAdjustmentDifficultiesCenter: "RHYAD";
    /**
     * Code: RNEU
     */
    readonly NeuroradiologyUnit: "RNEU";
    /**
     * Code: RTF
     */
    readonly ResidentialTreatmentFacility: "RTF";
    /**
     * Code: SCHOOL
     */
    readonly School: "SCHOOL";
    /**
     * Code: SLEEP
     */
    readonly SleepDisordersUnit: "SLEEP";
    /**
     * Code: SNF
     */
    readonly SkilledNursingFacility: "SNF";
    /**
     * Code: SPMED
     */
    readonly SportsMedicineClinic: "SPMED";
    /**
     * Code: SU
     */
    readonly SurgeryClinic: "SU";
    /**
     * Code: SURF
     */
    readonly SubstanceUseRehabilitationFacility: "SURF";
    /**
     * Code: TR
     */
    readonly TransplantClinic: "TR";
    /**
     * Code: TRAVEL
     */
    readonly TravelAndGeographicMedicineClinic: "TRAVEL";
    /**
     * Code: UPC
     */
    readonly UnderageProtectionCenter: "UPC";
    /**
     * Code: URO
     */
    readonly UrologyClinic: "URO";
    /**
     * Code: WND
     */
    readonly WoundClinic: "WND";
    /**
     * Code: WORK
     */
    readonly WorkSite: "WORK";
};
/**
 * A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare type V3ServiceDeliveryLocationRoleTypeCodeType = typeof V3ServiceDeliveryLocationRoleTypeCodes[keyof typeof V3ServiceDeliveryLocationRoleTypeCodes];
//# sourceMappingURL=V3ServiceDeliveryLocationRoleTypeCodes.d.ts.map