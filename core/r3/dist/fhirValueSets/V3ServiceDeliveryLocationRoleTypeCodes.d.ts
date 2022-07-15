/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare const V3ServiceDeliveryLocationRoleTypeCodes: {
    /**
     * _DedicatedClinicalLocationRoleType: A role of a place that further classifies the clinical setting (e.g., cardiology clinic, primary care clinic, rehabilitation hospital, skilled nursing facility) in which care is delivered during an encounter.
     */
    readonly DedicatedClinicalLocationRoleType: "_DedicatedClinicalLocationRoleType";
    /**
     * _DedicatedNonClinicalLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
     */
    readonly DedicatedNonClinicalLocationRoleType: "_DedicatedNonClinicalLocationRoleType";
    /**
     * _DedicatedServiceDeliveryLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of services.
     */
    readonly DedicatedServiceDeliveryLocationRoleType: "_DedicatedServiceDeliveryLocationRoleType";
    /**
     * _IncidentalServiceDeliveryLocationRoleType: IncidentalServiceDeliveryLocationRoleType
     */
    readonly IncidentalServiceDeliveryLocationRoleType: "_IncidentalServiceDeliveryLocationRoleType";
    /**
     * ACC: Location of an accident where healthcare service was delivered, such as a roadside.
     */
    readonly AccidentSite: "ACC";
    /**
     * ALL: Allergy clinic
     */
    readonly AllergyClinic: "ALL";
    /**
     * AMB: Location (mobile) where healthcare service was delivered, identified specifically as an ambulance.
     */
    readonly Ambulance: "AMB";
    /**
     * AMPUT: Amputee clinic
     */
    readonly AmputeeClinic: "AMPUT";
    /**
     * BMTC: Bone marrow transplant clinic
     */
    readonly BoneMarrowTransplantClinic: "BMTC";
    /**
     * BMTU: Bone marrow transplant unit
     */
    readonly BoneMarrowTransplantUnit: "BMTU";
    /**
     * BREAST: Breast clinic
     */
    readonly BreastClinic: "BREAST";
    /**
     * CANC: Child and adolescent neurology clinic
     */
    readonly ChildAndAdolescentNeurologyClinic: "CANC";
    /**
     * CAPC: Child and adolescent psychiatry clinic
     */
    readonly ChildAndAdolescentPsychiatryClinic: "CAPC";
    /**
     * CARD: Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
     */
    readonly AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: "CARD";
    /**
     * CATH: Cardiac catheterization lab
     */
    readonly CardiacCatheterizationLab: "CATH";
    /**
     * CCU: Coronary care unit
     */
    readonly CoronaryCareUnit: "CCU";
    /**
     * CHEST: A specialty unit in hospital that focuses on chronic respirator patients and pulmonary failure
     */
    readonly ChestUnit: "CHEST";
    /**
     * CHR: (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes
     */
    readonly ChronicCareFacility: "CHR";
    /**
     * COAG: Coagulation clinic
     */
    readonly CoagulationClinic: "COAG";
    /**
     * COMM: Community location where healthcare is delivered.
     */
    readonly CommunityLocation: "COMM";
    /**
     * CRS: Colon and rectal surgery clinic
     */
    readonly ColonAndRectalSurgeryClinic: "CRS";
    /**
     * CSC: Description: A location that plays the role of delivering services which may include providing front-line services to the population of a defined geographic area such as: healthcare services and social services, preventive or curative, rehabilitation or reintegration.
     */
    readonly CommunityServiceCenter: "CSC";
    /**
     * CVDX: A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)
     */
    readonly CardiovascularDiagnosticsOrTherapeuticsUnit: "CVDX";
    /**
     * DADDR: Location address where medical supplies were transported to for use.
     */
    readonly DeliveryAddress: "DADDR";
    /**
     * DERM: Dermatology clinic
     */
    readonly DermatologyClinic: "DERM";
    /**
     * DX: A practice setting where diagnostic procedures or therapeutic interventions are performed
     */
    readonly DiagnosticsOrTherapeuticsUnit: "DX";
    /**
     * ECHO: Echocardiography lab
     */
    readonly EchocardiographyLab: "ECHO";
    /**
     * ENDO: Endocrinology clinic
     */
    readonly EndocrinologyClinic: "ENDO";
    /**
     * ENDOS: (X12N 261QD0000N)
     */
    readonly EndoscopyLab: "ENDOS";
    /**
     * ENT: Otorhinolaryngology clinic
     */
    readonly OtorhinolaryngologyClinic: "ENT";
    /**
     * EPIL: Epilepsy unit
     */
    readonly EpilepsyUnit: "EPIL";
    /**
     * ER: The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma.
     */
    readonly EmergencyRoom: "ER";
    /**
     * ETU: Emergency trauma unit
     */
    readonly EmergencyTraumaUnit: "ETU";
    /**
     * FMC: Family medicine clinic
     */
    readonly FamilyMedicineClinic: "FMC";
    /**
     * GACH: (X12N 282N00000N)
     */
    readonly HospitalsGeneralAcuteCareHospital: "GACH";
    /**
     * GI: Gastroenterology clinic
     */
    readonly GastroenterologyClinic: "GI";
    /**
     * GIDX: A practice setting where GI procedures (such as endoscopies) are performed
     */
    readonly GastroenterologyDiagnosticsOrTherapeuticsLab: "GIDX";
    /**
     * GIM: General internal medicine clinic
     */
    readonly GeneralInternalMedicineClinic: "GIM";
    /**
     * GYN: Gynecology clinic
     */
    readonly GynecologyClinic: "GYN";
    /**
     * HAND: Hand clinic
     */
    readonly HandClinic: "HAND";
    /**
     * HD: Hemodialysis unit
     */
    readonly HemodialysisUnit: "HD";
    /**
     * HEM: Hematology clinic
     */
    readonly HematologyClinic: "HEM";
    /**
     * HLAB: Description: A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis, treatment and prevention of disease.  Hospital laboratories may be further divided into specialized units such as Anatomic Pathology, Microbiology, and Biochemistry.
     */
    readonly HospitalLaboratory: "HLAB";
    /**
     * HOSP: An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
     */
    readonly Hospital: "HOSP";
    /**
     * HRAD: Description: A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases.  The radiology unit may be further divided into subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound.
     */
    readonly RadiologyUnit: "HRAD";
    /**
     * HTN: Hypertension clinic
     */
    readonly HypertensionClinic: "HTN";
    /**
     * HU: Hospital unit
     */
    readonly HospitalUnit: "HU";
    /**
     * HUSCS: Description: A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes, but does not perform any tests or analysis functions.
     */
    readonly SpecimenCollectionSite: "HUSCS";
    /**
     * ICU: Intensive care unit
     */
    readonly IntensiveCareUnit: "ICU";
    /**
     * IEC: Focuses on assessing disability
     */
    readonly ImpairmentEvaluationCenter: "IEC";
    /**
     * INFD: Infectious disease clinic
     */
    readonly InfectiousDiseaseClinic: "INFD";
    /**
     * INLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for a hospital visit longer than one day.
     */
    readonly InpatientLaboratory: "INLAB";
    /**
     * INPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital.
     */
    readonly InpatientPharmacy: "INPHARM";
    /**
     * INV: Infertility clinic
     */
    readonly InfertilityClinic: "INV";
    /**
     * LYMPH: Lympedema clinic
     */
    readonly LympedemaClinic: "LYMPH";
    /**
     * MBL: Description: A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology.
     */
    readonly MedicalLaboratory: "MBL";
    /**
     * MGEN: Medical genetics clinic
     */
    readonly MedicalGeneticsClinic: "MGEN";
    /**
     * MHSP: A health care facility operated by the Department of Defense or other military operation.
     */
    readonly MilitaryHospital: "MHSP";
    /**
     * MOBL: Location (mobile) where healthcare service was delivered.
     */
    readonly MobileUnit: "MOBL";
    /**
     * NCCF: Nursing or custodial care facility
     */
    readonly NursingOrCustodialCareFacility: "NCCF";
    /**
     * NCCS: Neurology critical care and stroke unit
     */
    readonly NeurologyCriticalCareAndStrokeUnit: "NCCS";
    /**
     * NEPH: Nephrology clinic
     */
    readonly NephrologyClinic: "NEPH";
    /**
     * NEUR: Neurology clinic
     */
    readonly NeurologyClinic: "NEUR";
    /**
     * NS: Neurosurgery unit
     */
    readonly NeurosurgeryUnit: "NS";
    /**
     * OB: Obstetrics clinic
     */
    readonly ObstetricsClinic: "OB";
    /**
     * OF: Outpatient facility
     */
    readonly OutpatientFacility: "OF";
    /**
     * OMS: Oral and maxillofacial surgery clinic
     */
    readonly OralAndMaxillofacialSurgeryClinic: "OMS";
    /**
     * ONCL: Medical oncology clinic
     */
    readonly MedicalOncologyClinic: "ONCL";
    /**
     * OPH: Opthalmology clinic
     */
    readonly OpthalmologyClinic: "OPH";
    /**
     * OPTC: Description: A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed.  Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required.
     */
    readonly OptometryClinic: "OPTC";
    /**
     * ORTHO: Orthopedics clinic
     */
    readonly OrthopedicsClinic: "ORTHO";
    /**
     * OUTLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for same day visits.
     */
    readonly OutpatientLaboratory: "OUTLAB";
    /**
     * OUTPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions.
     */
    readonly OutpatientPharmacy: "OUTPHARM";
    /**
     * PAINCL: (X12N 261QP3300N)
     */
    readonly PainClinic: "PAINCL";
    /**
     * PC: (X12N 261QP2300N)
     */
    readonly PrimaryCareClinic: "PC";
    /**
     * PEDC: Pediatrics clinic
     */
    readonly PediatricsClinic: "PEDC";
    /**
     * PEDCARD: Pediatric cardiology clinic
     */
    readonly PediatricCardiologyClinic: "PEDCARD";
    /**
     * PEDE: Pediatric endocrinology clinic
     */
    readonly PediatricEndocrinologyClinic: "PEDE";
    /**
     * PEDGI: Pediatric gastroenterology clinic
     */
    readonly PediatricGastroenterologyClinic: "PEDGI";
    /**
     * PEDHEM: Pediatric hematology clinic
     */
    readonly PediatricHematologyClinic: "PEDHEM";
    /**
     * PEDHO: Pediatric oncology clinic
     */
    readonly PediatricOncologyClinic: "PEDHO";
    /**
     * PEDICU: Pediatric intensive care unit
     */
    readonly PediatricIntensiveCareUnit: "PEDICU";
    /**
     * PEDID: Pediatric infectious disease clinic
     */
    readonly PediatricInfectiousDiseaseClinic: "PEDID";
    /**
     * PEDNEPH: Pediatric nephrology clinic
     */
    readonly PediatricNephrologyClinic: "PEDNEPH";
    /**
     * PEDNICU: Pediatric neonatal intensive care unit
     */
    readonly PediatricNeonatalIntensiveCareUnit: "PEDNICU";
    /**
     * PEDRHEUM: Pediatric rheumatology clinic
     */
    readonly PediatricRheumatologyClinic: "PEDRHEUM";
    /**
     * PEDU: Pediatric unit
     */
    readonly PediatricUnit: "PEDU";
    /**
     * PHARM: Location where healthcare service was delivered, identified as a pharmacy.
     */
    readonly Pharmacy: "PHARM";
    /**
     * PHU: (X12N 273R00000N)
     */
    readonly PsychiatricHospitalUnit: "PHU";
    /**
     * PLS: Plastic surgery clinic
     */
    readonly PlasticSurgeryClinic: "PLS";
    /**
     * POD: (X12N 261QP1100N)
     */
    readonly PodiatryClinic: "POD";
    /**
     * PRC: Pain rehabilitation center
     */
    readonly PainRehabilitationCenter: "PRC";
    /**
     * PREV: Preventive medicine clinic
     */
    readonly PreventiveMedicineClinic: "PREV";
    /**
     * PROCTO: Proctology clinic
     */
    readonly ProctologyClinic: "PROCTO";
    /**
     * PROFF: Location where healthcare service was delivered, identified as the healthcare provider's practice office.
     */
    readonly ProviderQuoteSOffice: "PROFF";
    /**
     * PROS: Prosthodontics clinic
     */
    readonly ProsthodonticsClinic: "PROS";
    /**
     * PSI: Psychology clinic
     */
    readonly PsychologyClinic: "PSI";
    /**
     * PSY: Psychiatry clinic
     */
    readonly PsychiatryClinic: "PSY";
    /**
     * PSYCHF: Healthcare facility that cares for patients with psychiatric illness(s).
     */
    readonly PsychatricCareFacility: "PSYCHF";
    /**
     * PTRES: location where healthcare was delivered which is the residence of the Patient.
     */
    readonly PatientQuoteSResidence: "PTRES";
    /**
     * RADDX: A practice setting where radiology services (diagnostic or therapeutic) are provided            (X12N 261QR0200N)
     */
    readonly RadiologyDiagnosticsOrTherapeuticsUnit: "RADDX";
    /**
     * RADO: (X12N 261QX0203N)
     */
    readonly RadiationOncologyUnit: "RADO";
    /**
     * RH: (X12N 283X00000N)
     */
    readonly RehabilitationHospital: "RH";
    /**
     * RHAT: Description: A location that plays the role of delivering services which may include life training and/or social support to people with addictions.
     */
    readonly AddictionTreatmentCenter: "RHAT";
    /**
     * RHEUM: Rheumatology clinic
     */
    readonly RheumatologyClinic: "RHEUM";
    /**
     * RHII: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder.
     */
    readonly IntellectualImpairmentCenter: "RHII";
    /**
     * RHMAD: Description: A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role.
     */
    readonly ParentsWithAdjustmentDifficultiesCenter: "RHMAD";
    /**
     * RHPI: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments.
     */
    readonly PhysicalImpairmentCenter: "RHPI";
    /**
     * RHPIH: Description: A location that plays the role of delivering services for people with hearing impairments.
     */
    readonly PhysicalImpairmentHearingCenter: "RHPIH";
    /**
     * RHPIMS: Description: A location that plays the role of delivering services for people with motor skill impairments.
     */
    readonly PhysicalImpairmentMotorSkillsCenter: "RHPIMS";
    /**
     * RHPIVS: Description: A location that plays the role of delivering services for people with visual skill impairments.
     */
    readonly PhysicalImpairmentVisualSkillsCenter: "RHPIVS";
    /**
     * RHU: Rehabilitation hospital unit
     */
    readonly RehabilitationHospitalUnit: "RHU";
    /**
     * RHYAD: Description: A location that plays the role of delivering services which may include life training and/or social support services for the adaption, rehabilitation and social integration of youths with adjustment difficulties.
     */
    readonly YouthsWithAdjustmentDifficultiesCenter: "RHYAD";
    /**
     * RNEU: Neuroradiology unit
     */
    readonly NeuroradiologyUnit: "RNEU";
    /**
     * RTF: Residential treatment facility
     */
    readonly ResidentialTreatmentFacility: "RTF";
    /**
     * SCHOOL: Location where healthcare service was delivered, identified as a school or educational facility.
     */
    readonly School: "SCHOOL";
    /**
     * SLEEP: (X12N 261QA1200N)
     */
    readonly SleepDisordersUnit: "SLEEP";
    /**
     * SNF: (X12N 314000000N)
     */
    readonly SkilledNursingFacility: "SNF";
    /**
     * SPMED: Sports medicine clinic
     */
    readonly SportsMedicineClinic: "SPMED";
    /**
     * SU: Surgery clinic
     */
    readonly SurgeryClinic: "SU";
    /**
     * SURF: (X12N 324500000N)
     */
    readonly SubstanceUseRehabilitationFacility: "SURF";
    /**
     * TR: Transplant clinic
     */
    readonly TransplantClinic: "TR";
    /**
     * TRAVEL: Travel and geographic medicine clinic
     */
    readonly TravelAndGeographicMedicineClinic: "TRAVEL";
    /**
     * UPC: Description: A location that plays the role of delivering services which may include: social emergency services required for a young person as required under any jurisdictional youth laws, child placement, and family mediation in the defined geographical area the SDL is responsible for. It may provide expertise in a judiciary setting on child custody, adoption and biological history research.
     */
    readonly UnderageProtectionCenter: "UPC";
    /**
     * URO: Urology clinic
     */
    readonly UrologyClinic: "URO";
    /**
     * WND: Wound clinic
     */
    readonly WoundClinic: "WND";
    /**
     * WORK: Location where healthcare service was delivered, identified as a work place.
     */
    readonly WorkSite: "WORK";
};
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare type V3ServiceDeliveryLocationRoleTypeCodeType = typeof V3ServiceDeliveryLocationRoleTypeCodes[keyof typeof V3ServiceDeliveryLocationRoleTypeCodes];
//# sourceMappingURL=V3ServiceDeliveryLocationRoleTypeCodes.d.ts.map