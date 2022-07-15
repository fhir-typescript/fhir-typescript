import { CodingArgs } from '../fhir/Coding.js';
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare type V3ServiceDeliveryLocationRoleTypeCodingType = {
    /**
     * _DedicatedClinicalLocationRoleType: A role of a place that further classifies the clinical setting (e.g., cardiology clinic, primary care clinic, rehabilitation hospital, skilled nursing facility) in which care is delivered during an encounter.
     */
    DedicatedClinicalLocationRoleType: CodingArgs;
    /**
     * _DedicatedNonClinicalLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
     */
    DedicatedNonClinicalLocationRoleType: CodingArgs;
    /**
     * _DedicatedServiceDeliveryLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of services.
     */
    DedicatedServiceDeliveryLocationRoleType: CodingArgs;
    /**
     * _IncidentalServiceDeliveryLocationRoleType: IncidentalServiceDeliveryLocationRoleType
     */
    IncidentalServiceDeliveryLocationRoleType: CodingArgs;
    /**
     * ACC: Location of an accident where healthcare service was delivered, such as a roadside.
     */
    AccidentSite: CodingArgs;
    /**
     * ALL: Allergy clinic
     */
    AllergyClinic: CodingArgs;
    /**
     * AMB: Location (mobile) where healthcare service was delivered, identified specifically as an ambulance.
     */
    Ambulance: CodingArgs;
    /**
     * AMPUT: Amputee clinic
     */
    AmputeeClinic: CodingArgs;
    /**
     * BMTC: Bone marrow transplant clinic
     */
    BoneMarrowTransplantClinic: CodingArgs;
    /**
     * BMTU: Bone marrow transplant unit
     */
    BoneMarrowTransplantUnit: CodingArgs;
    /**
     * BREAST: Breast clinic
     */
    BreastClinic: CodingArgs;
    /**
     * CANC: Child and adolescent neurology clinic
     */
    ChildAndAdolescentNeurologyClinic: CodingArgs;
    /**
     * CAPC: Child and adolescent psychiatry clinic
     */
    ChildAndAdolescentPsychiatryClinic: CodingArgs;
    /**
     * CARD: Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
     */
    AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: CodingArgs;
    /**
     * CATH: Cardiac catheterization lab
     */
    CardiacCatheterizationLab: CodingArgs;
    /**
     * CCU: Coronary care unit
     */
    CoronaryCareUnit: CodingArgs;
    /**
     * CHEST: A specialty unit in hospital that focuses on chronic respirator patients and pulmonary failure
     */
    ChestUnit: CodingArgs;
    /**
     * CHR: (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes
     */
    ChronicCareFacility: CodingArgs;
    /**
     * COAG: Coagulation clinic
     */
    CoagulationClinic: CodingArgs;
    /**
     * COMM: Community location where healthcare is delivered.
     */
    CommunityLocation: CodingArgs;
    /**
     * CRS: Colon and rectal surgery clinic
     */
    ColonAndRectalSurgeryClinic: CodingArgs;
    /**
     * CSC: Description: A location that plays the role of delivering services which may include providing front-line services to the population of a defined geographic area such as: healthcare services and social services, preventive or curative, rehabilitation or reintegration.
     */
    CommunityServiceCenter: CodingArgs;
    /**
     * CVDX: A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)
     */
    CardiovascularDiagnosticsOrTherapeuticsUnit: CodingArgs;
    /**
     * DADDR: Location address where medical supplies were transported to for use.
     */
    DeliveryAddress: CodingArgs;
    /**
     * DERM: Dermatology clinic
     */
    DermatologyClinic: CodingArgs;
    /**
     * DX: A practice setting where diagnostic procedures or therapeutic interventions are performed
     */
    DiagnosticsOrTherapeuticsUnit: CodingArgs;
    /**
     * ECHO: Echocardiography lab
     */
    EchocardiographyLab: CodingArgs;
    /**
     * ENDO: Endocrinology clinic
     */
    EndocrinologyClinic: CodingArgs;
    /**
     * ENDOS: (X12N 261QD0000N)
     */
    EndoscopyLab: CodingArgs;
    /**
     * ENT: Otorhinolaryngology clinic
     */
    OtorhinolaryngologyClinic: CodingArgs;
    /**
     * EPIL: Epilepsy unit
     */
    EpilepsyUnit: CodingArgs;
    /**
     * ER: The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma.
     */
    EmergencyRoom: CodingArgs;
    /**
     * ETU: Emergency trauma unit
     */
    EmergencyTraumaUnit: CodingArgs;
    /**
     * FMC: Family medicine clinic
     */
    FamilyMedicineClinic: CodingArgs;
    /**
     * GACH: (X12N 282N00000N)
     */
    HospitalsGeneralAcuteCareHospital: CodingArgs;
    /**
     * GI: Gastroenterology clinic
     */
    GastroenterologyClinic: CodingArgs;
    /**
     * GIDX: A practice setting where GI procedures (such as endoscopies) are performed
     */
    GastroenterologyDiagnosticsOrTherapeuticsLab: CodingArgs;
    /**
     * GIM: General internal medicine clinic
     */
    GeneralInternalMedicineClinic: CodingArgs;
    /**
     * GYN: Gynecology clinic
     */
    GynecologyClinic: CodingArgs;
    /**
     * HAND: Hand clinic
     */
    HandClinic: CodingArgs;
    /**
     * HD: Hemodialysis unit
     */
    HemodialysisUnit: CodingArgs;
    /**
     * HEM: Hematology clinic
     */
    HematologyClinic: CodingArgs;
    /**
     * HLAB: Description: A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis, treatment and prevention of disease.  Hospital laboratories may be further divided into specialized units such as Anatomic Pathology, Microbiology, and Biochemistry.
     */
    HospitalLaboratory: CodingArgs;
    /**
     * HOSP: An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
     */
    Hospital: CodingArgs;
    /**
     * HRAD: Description: A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases.  The radiology unit may be further divided into subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound.
     */
    RadiologyUnit: CodingArgs;
    /**
     * HTN: Hypertension clinic
     */
    HypertensionClinic: CodingArgs;
    /**
     * HU: Hospital unit
     */
    HospitalUnit: CodingArgs;
    /**
     * HUSCS: Description: A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes, but does not perform any tests or analysis functions.
     */
    SpecimenCollectionSite: CodingArgs;
    /**
     * ICU: Intensive care unit
     */
    IntensiveCareUnit: CodingArgs;
    /**
     * IEC: Focuses on assessing disability
     */
    ImpairmentEvaluationCenter: CodingArgs;
    /**
     * INFD: Infectious disease clinic
     */
    InfectiousDiseaseClinic: CodingArgs;
    /**
     * INLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for a hospital visit longer than one day.
     */
    InpatientLaboratory: CodingArgs;
    /**
     * INPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital.
     */
    InpatientPharmacy: CodingArgs;
    /**
     * INV: Infertility clinic
     */
    InfertilityClinic: CodingArgs;
    /**
     * LYMPH: Lympedema clinic
     */
    LympedemaClinic: CodingArgs;
    /**
     * MBL: Description: A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology.
     */
    MedicalLaboratory: CodingArgs;
    /**
     * MGEN: Medical genetics clinic
     */
    MedicalGeneticsClinic: CodingArgs;
    /**
     * MHSP: A health care facility operated by the Department of Defense or other military operation.
     */
    MilitaryHospital: CodingArgs;
    /**
     * MOBL: Location (mobile) where healthcare service was delivered.
     */
    MobileUnit: CodingArgs;
    /**
     * NCCF: Nursing or custodial care facility
     */
    NursingOrCustodialCareFacility: CodingArgs;
    /**
     * NCCS: Neurology critical care and stroke unit
     */
    NeurologyCriticalCareAndStrokeUnit: CodingArgs;
    /**
     * NEPH: Nephrology clinic
     */
    NephrologyClinic: CodingArgs;
    /**
     * NEUR: Neurology clinic
     */
    NeurologyClinic: CodingArgs;
    /**
     * NS: Neurosurgery unit
     */
    NeurosurgeryUnit: CodingArgs;
    /**
     * OB: Obstetrics clinic
     */
    ObstetricsClinic: CodingArgs;
    /**
     * OF: Outpatient facility
     */
    OutpatientFacility: CodingArgs;
    /**
     * OMS: Oral and maxillofacial surgery clinic
     */
    OralAndMaxillofacialSurgeryClinic: CodingArgs;
    /**
     * ONCL: Medical oncology clinic
     */
    MedicalOncologyClinic: CodingArgs;
    /**
     * OPH: Opthalmology clinic
     */
    OpthalmologyClinic: CodingArgs;
    /**
     * OPTC: Description: A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed.  Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required.
     */
    OptometryClinic: CodingArgs;
    /**
     * ORTHO: Orthopedics clinic
     */
    OrthopedicsClinic: CodingArgs;
    /**
     * OUTLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for same day visits.
     */
    OutpatientLaboratory: CodingArgs;
    /**
     * OUTPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions.
     */
    OutpatientPharmacy: CodingArgs;
    /**
     * PAINCL: (X12N 261QP3300N)
     */
    PainClinic: CodingArgs;
    /**
     * PC: (X12N 261QP2300N)
     */
    PrimaryCareClinic: CodingArgs;
    /**
     * PEDC: Pediatrics clinic
     */
    PediatricsClinic: CodingArgs;
    /**
     * PEDCARD: Pediatric cardiology clinic
     */
    PediatricCardiologyClinic: CodingArgs;
    /**
     * PEDE: Pediatric endocrinology clinic
     */
    PediatricEndocrinologyClinic: CodingArgs;
    /**
     * PEDGI: Pediatric gastroenterology clinic
     */
    PediatricGastroenterologyClinic: CodingArgs;
    /**
     * PEDHEM: Pediatric hematology clinic
     */
    PediatricHematologyClinic: CodingArgs;
    /**
     * PEDHO: Pediatric oncology clinic
     */
    PediatricOncologyClinic: CodingArgs;
    /**
     * PEDICU: Pediatric intensive care unit
     */
    PediatricIntensiveCareUnit: CodingArgs;
    /**
     * PEDID: Pediatric infectious disease clinic
     */
    PediatricInfectiousDiseaseClinic: CodingArgs;
    /**
     * PEDNEPH: Pediatric nephrology clinic
     */
    PediatricNephrologyClinic: CodingArgs;
    /**
     * PEDNICU: Pediatric neonatal intensive care unit
     */
    PediatricNeonatalIntensiveCareUnit: CodingArgs;
    /**
     * PEDRHEUM: Pediatric rheumatology clinic
     */
    PediatricRheumatologyClinic: CodingArgs;
    /**
     * PEDU: Pediatric unit
     */
    PediatricUnit: CodingArgs;
    /**
     * PHARM: Location where healthcare service was delivered, identified as a pharmacy.
     */
    Pharmacy: CodingArgs;
    /**
     * PHU: (X12N 273R00000N)
     */
    PsychiatricHospitalUnit: CodingArgs;
    /**
     * PLS: Plastic surgery clinic
     */
    PlasticSurgeryClinic: CodingArgs;
    /**
     * POD: (X12N 261QP1100N)
     */
    PodiatryClinic: CodingArgs;
    /**
     * PRC: Pain rehabilitation center
     */
    PainRehabilitationCenter: CodingArgs;
    /**
     * PREV: Preventive medicine clinic
     */
    PreventiveMedicineClinic: CodingArgs;
    /**
     * PROCTO: Proctology clinic
     */
    ProctologyClinic: CodingArgs;
    /**
     * PROFF: Location where healthcare service was delivered, identified as the healthcare provider's practice office.
     */
    ProviderQuoteSOffice: CodingArgs;
    /**
     * PROS: Prosthodontics clinic
     */
    ProsthodonticsClinic: CodingArgs;
    /**
     * PSI: Psychology clinic
     */
    PsychologyClinic: CodingArgs;
    /**
     * PSY: Psychiatry clinic
     */
    PsychiatryClinic: CodingArgs;
    /**
     * PSYCHF: Healthcare facility that cares for patients with psychiatric illness(s).
     */
    PsychatricCareFacility: CodingArgs;
    /**
     * PTRES: location where healthcare was delivered which is the residence of the Patient.
     */
    PatientQuoteSResidence: CodingArgs;
    /**
     * RADDX: A practice setting where radiology services (diagnostic or therapeutic) are provided            (X12N 261QR0200N)
     */
    RadiologyDiagnosticsOrTherapeuticsUnit: CodingArgs;
    /**
     * RADO: (X12N 261QX0203N)
     */
    RadiationOncologyUnit: CodingArgs;
    /**
     * RH: (X12N 283X00000N)
     */
    RehabilitationHospital: CodingArgs;
    /**
     * RHAT: Description: A location that plays the role of delivering services which may include life training and/or social support to people with addictions.
     */
    AddictionTreatmentCenter: CodingArgs;
    /**
     * RHEUM: Rheumatology clinic
     */
    RheumatologyClinic: CodingArgs;
    /**
     * RHII: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder.
     */
    IntellectualImpairmentCenter: CodingArgs;
    /**
     * RHMAD: Description: A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role.
     */
    ParentsWithAdjustmentDifficultiesCenter: CodingArgs;
    /**
     * RHPI: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments.
     */
    PhysicalImpairmentCenter: CodingArgs;
    /**
     * RHPIH: Description: A location that plays the role of delivering services for people with hearing impairments.
     */
    PhysicalImpairmentHearingCenter: CodingArgs;
    /**
     * RHPIMS: Description: A location that plays the role of delivering services for people with motor skill impairments.
     */
    PhysicalImpairmentMotorSkillsCenter: CodingArgs;
    /**
     * RHPIVS: Description: A location that plays the role of delivering services for people with visual skill impairments.
     */
    PhysicalImpairmentVisualSkillsCenter: CodingArgs;
    /**
     * RHU: Rehabilitation hospital unit
     */
    RehabilitationHospitalUnit: CodingArgs;
    /**
     * RHYAD: Description: A location that plays the role of delivering services which may include life training and/or social support services for the adaption, rehabilitation and social integration of youths with adjustment difficulties.
     */
    YouthsWithAdjustmentDifficultiesCenter: CodingArgs;
    /**
     * RNEU: Neuroradiology unit
     */
    NeuroradiologyUnit: CodingArgs;
    /**
     * RTF: Residential treatment facility
     */
    ResidentialTreatmentFacility: CodingArgs;
    /**
     * SCHOOL: Location where healthcare service was delivered, identified as a school or educational facility.
     */
    School: CodingArgs;
    /**
     * SLEEP: (X12N 261QA1200N)
     */
    SleepDisordersUnit: CodingArgs;
    /**
     * SNF: (X12N 314000000N)
     */
    SkilledNursingFacility: CodingArgs;
    /**
     * SPMED: Sports medicine clinic
     */
    SportsMedicineClinic: CodingArgs;
    /**
     * SU: Surgery clinic
     */
    SurgeryClinic: CodingArgs;
    /**
     * SURF: (X12N 324500000N)
     */
    SubstanceUseRehabilitationFacility: CodingArgs;
    /**
     * TR: Transplant clinic
     */
    TransplantClinic: CodingArgs;
    /**
     * TRAVEL: Travel and geographic medicine clinic
     */
    TravelAndGeographicMedicineClinic: CodingArgs;
    /**
     * UPC: Description: A location that plays the role of delivering services which may include: social emergency services required for a young person as required under any jurisdictional youth laws, child placement, and family mediation in the defined geographical area the SDL is responsible for. It may provide expertise in a judiciary setting on child custody, adoption and biological history research.
     */
    UnderageProtectionCenter: CodingArgs;
    /**
     * URO: Urology clinic
     */
    UrologyClinic: CodingArgs;
    /**
     * WND: Wound clinic
     */
    WoundClinic: CodingArgs;
    /**
     * WORK: Location where healthcare service was delivered, identified as a work place.
     */
    WorkSite: CodingArgs;
};
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare const V3ServiceDeliveryLocationRoleTypeCodings: V3ServiceDeliveryLocationRoleTypeCodingType;
//# sourceMappingURL=V3ServiceDeliveryLocationRoleTypeCodings.d.ts.map