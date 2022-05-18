import { Coding } from '../fhir/Coding.js';
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare const V3ServiceDeliveryLocationRoleTypeCodings: {
    /**
     * _DedicatedClinicalLocationRoleType: A role of a place that further classifies the clinical setting (e.g., cardiology clinic, primary care clinic, rehabilitation hospital, skilled nursing facility) in which care is delivered during an encounter.
     */
    readonly DedicatedClinicalLocationRoleType: Coding;
    /**
     * _DedicatedNonClinicalLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
     */
    readonly DedicatedNonClinicalLocationRoleType: Coding;
    /**
     * _DedicatedServiceDeliveryLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of services.
     */
    readonly DedicatedServiceDeliveryLocationRoleType: Coding;
    /**
     * _IncidentalServiceDeliveryLocationRoleType: IncidentalServiceDeliveryLocationRoleType
     */
    readonly IncidentalServiceDeliveryLocationRoleType: Coding;
    /**
     * ACC: Location of an accident where healthcare service was delivered, such as a roadside.
     */
    readonly AccidentSite: Coding;
    /**
     * ALL: Allergy clinic
     */
    readonly AllergyClinic: Coding;
    /**
     * AMB: Location (mobile) where healthcare service was delivered, identified specifically as an ambulance.
     */
    readonly Ambulance: Coding;
    /**
     * AMPUT: Amputee clinic
     */
    readonly AmputeeClinic: Coding;
    /**
     * BMTC: Bone marrow transplant clinic
     */
    readonly BoneMarrowTransplantClinic: Coding;
    /**
     * BMTU: Bone marrow transplant unit
     */
    readonly BoneMarrowTransplantUnit: Coding;
    /**
     * BREAST: Breast clinic
     */
    readonly BreastClinic: Coding;
    /**
     * CANC: Child and adolescent neurology clinic
     */
    readonly ChildAndAdolescentNeurologyClinic: Coding;
    /**
     * CAPC: Child and adolescent psychiatry clinic
     */
    readonly ChildAndAdolescentPsychiatryClinic: Coding;
    /**
     * CARD: Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
     */
    readonly AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: Coding;
    /**
     * CATH: Cardiac catheterization lab
     */
    readonly CardiacCatheterizationLab: Coding;
    /**
     * CCU: Coronary care unit
     */
    readonly CoronaryCareUnit: Coding;
    /**
     * CHEST: A specialty unit in hospital that focuses on chronic respirator patients and pulmonary failure
     */
    readonly ChestUnit: Coding;
    /**
     * CHR: (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes
     */
    readonly ChronicCareFacility: Coding;
    /**
     * COAG: Coagulation clinic
     */
    readonly CoagulationClinic: Coding;
    /**
     * COMM: Community location where healthcare is delivered.
     */
    readonly CommunityLocation: Coding;
    /**
     * CRS: Colon and rectal surgery clinic
     */
    readonly ColonAndRectalSurgeryClinic: Coding;
    /**
     * CSC: Description: A location that plays the role of delivering services which may include providing front-line services to the population of a defined geographic area such as: healthcare services and social services, preventive or curative, rehabilitation or reintegration.
     */
    readonly CommunityServiceCenter: Coding;
    /**
     * CVDX: A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)
     */
    readonly CardiovascularDiagnosticsOrTherapeuticsUnit: Coding;
    /**
     * DADDR: Location address where medical supplies were transported to for use.
     */
    readonly DeliveryAddress: Coding;
    /**
     * DERM: Dermatology clinic
     */
    readonly DermatologyClinic: Coding;
    /**
     * DX: A practice setting where diagnostic procedures or therapeutic interventions are performed
     */
    readonly DiagnosticsOrTherapeuticsUnit: Coding;
    /**
     * ECHO: Echocardiography lab
     */
    readonly EchocardiographyLab: Coding;
    /**
     * ENDO: Endocrinology clinic
     */
    readonly EndocrinologyClinic: Coding;
    /**
     * ENDOS: (X12N 261QD0000N)
     */
    readonly EndoscopyLab: Coding;
    /**
     * ENT: Otorhinolaryngology clinic
     */
    readonly OtorhinolaryngologyClinic: Coding;
    /**
     * EPIL: Epilepsy unit
     */
    readonly EpilepsyUnit: Coding;
    /**
     * ER: The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma.
     */
    readonly EmergencyRoom: Coding;
    /**
     * ETU: Emergency trauma unit
     */
    readonly EmergencyTraumaUnit: Coding;
    /**
     * FMC: Family medicine clinic
     */
    readonly FamilyMedicineClinic: Coding;
    /**
     * GACH: (X12N 282N00000N)
     */
    readonly HospitalsGeneralAcuteCareHospital: Coding;
    /**
     * GI: Gastroenterology clinic
     */
    readonly GastroenterologyClinic: Coding;
    /**
     * GIDX: A practice setting where GI procedures (such as endoscopies) are performed
     */
    readonly GastroenterologyDiagnosticsOrTherapeuticsLab: Coding;
    /**
     * GIM: General internal medicine clinic
     */
    readonly GeneralInternalMedicineClinic: Coding;
    /**
     * GYN: Gynecology clinic
     */
    readonly GynecologyClinic: Coding;
    /**
     * HAND: Hand clinic
     */
    readonly HandClinic: Coding;
    /**
     * HD: Hemodialysis unit
     */
    readonly HemodialysisUnit: Coding;
    /**
     * HEM: Hematology clinic
     */
    readonly HematologyClinic: Coding;
    /**
     * HLAB: Description: A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis, treatment and prevention of disease.  Hospital laboratories may be further divided into specialized units such as Anatomic Pathology, Microbiology, and Biochemistry.
     */
    readonly HospitalLaboratory: Coding;
    /**
     * HOSP: An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
     */
    readonly Hospital: Coding;
    /**
     * HRAD: Description: A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases.  The radiology unit may be further divided into subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound.
     */
    readonly RadiologyUnit: Coding;
    /**
     * HTN: Hypertension clinic
     */
    readonly HypertensionClinic: Coding;
    /**
     * HU: Hospital unit
     */
    readonly HospitalUnit: Coding;
    /**
     * HUSCS: Description: A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes, but does not perform any tests or analysis functions.
     */
    readonly SpecimenCollectionSite: Coding;
    /**
     * ICU: Intensive care unit
     */
    readonly IntensiveCareUnit: Coding;
    /**
     * IEC: Focuses on assessing disability
     */
    readonly ImpairmentEvaluationCenter: Coding;
    /**
     * INFD: Infectious disease clinic
     */
    readonly InfectiousDiseaseClinic: Coding;
    /**
     * INLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for a hospital visit longer than one day.
     */
    readonly InpatientLaboratory: Coding;
    /**
     * INPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital.
     */
    readonly InpatientPharmacy: Coding;
    /**
     * INV: Infertility clinic
     */
    readonly InfertilityClinic: Coding;
    /**
     * LYMPH: Lympedema clinic
     */
    readonly LympedemaClinic: Coding;
    /**
     * MBL: Description: A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology.
     */
    readonly MedicalLaboratory: Coding;
    /**
     * MGEN: Medical genetics clinic
     */
    readonly MedicalGeneticsClinic: Coding;
    /**
     * MHSP: A health care facility operated by the Department of Defense or other military operation.
     */
    readonly MilitaryHospital: Coding;
    /**
     * MOBL: Location (mobile) where healthcare service was delivered.
     */
    readonly MobileUnit: Coding;
    /**
     * NCCF: Nursing or custodial care facility
     */
    readonly NursingOrCustodialCareFacility: Coding;
    /**
     * NCCS: Neurology critical care and stroke unit
     */
    readonly NeurologyCriticalCareAndStrokeUnit: Coding;
    /**
     * NEPH: Nephrology clinic
     */
    readonly NephrologyClinic: Coding;
    /**
     * NEUR: Neurology clinic
     */
    readonly NeurologyClinic: Coding;
    /**
     * NS: Neurosurgery unit
     */
    readonly NeurosurgeryUnit: Coding;
    /**
     * OB: Obstetrics clinic
     */
    readonly ObstetricsClinic: Coding;
    /**
     * OF: Outpatient facility
     */
    readonly OutpatientFacility: Coding;
    /**
     * OMS: Oral and maxillofacial surgery clinic
     */
    readonly OralAndMaxillofacialSurgeryClinic: Coding;
    /**
     * ONCL: Medical oncology clinic
     */
    readonly MedicalOncologyClinic: Coding;
    /**
     * OPH: Opthalmology clinic
     */
    readonly OpthalmologyClinic: Coding;
    /**
     * OPTC: Description: A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed.  Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required.
     */
    readonly OptometryClinic: Coding;
    /**
     * ORTHO: Orthopedics clinic
     */
    readonly OrthopedicsClinic: Coding;
    /**
     * OUTLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for same day visits.
     */
    readonly OutpatientLaboratory: Coding;
    /**
     * OUTPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions.
     */
    readonly OutpatientPharmacy: Coding;
    /**
     * PAINCL: (X12N 261QP3300N)
     */
    readonly PainClinic: Coding;
    /**
     * PC: (X12N 261QP2300N)
     */
    readonly PrimaryCareClinic: Coding;
    /**
     * PEDC: Pediatrics clinic
     */
    readonly PediatricsClinic: Coding;
    /**
     * PEDCARD: Pediatric cardiology clinic
     */
    readonly PediatricCardiologyClinic: Coding;
    /**
     * PEDE: Pediatric endocrinology clinic
     */
    readonly PediatricEndocrinologyClinic: Coding;
    /**
     * PEDGI: Pediatric gastroenterology clinic
     */
    readonly PediatricGastroenterologyClinic: Coding;
    /**
     * PEDHEM: Pediatric hematology clinic
     */
    readonly PediatricHematologyClinic: Coding;
    /**
     * PEDHO: Pediatric oncology clinic
     */
    readonly PediatricOncologyClinic: Coding;
    /**
     * PEDICU: Pediatric intensive care unit
     */
    readonly PediatricIntensiveCareUnit: Coding;
    /**
     * PEDID: Pediatric infectious disease clinic
     */
    readonly PediatricInfectiousDiseaseClinic: Coding;
    /**
     * PEDNEPH: Pediatric nephrology clinic
     */
    readonly PediatricNephrologyClinic: Coding;
    /**
     * PEDNICU: Pediatric neonatal intensive care unit
     */
    readonly PediatricNeonatalIntensiveCareUnit: Coding;
    /**
     * PEDRHEUM: Pediatric rheumatology clinic
     */
    readonly PediatricRheumatologyClinic: Coding;
    /**
     * PEDU: Pediatric unit
     */
    readonly PediatricUnit: Coding;
    /**
     * PHARM: Location where healthcare service was delivered, identified as a pharmacy.
     */
    readonly Pharmacy: Coding;
    /**
     * PHU: (X12N 273R00000N)
     */
    readonly PsychiatricHospitalUnit: Coding;
    /**
     * PLS: Plastic surgery clinic
     */
    readonly PlasticSurgeryClinic: Coding;
    /**
     * POD: (X12N 261QP1100N)
     */
    readonly PodiatryClinic: Coding;
    /**
     * PRC: Pain rehabilitation center
     */
    readonly PainRehabilitationCenter: Coding;
    /**
     * PREV: Preventive medicine clinic
     */
    readonly PreventiveMedicineClinic: Coding;
    /**
     * PROCTO: Proctology clinic
     */
    readonly ProctologyClinic: Coding;
    /**
     * PROFF: Location where healthcare service was delivered, identified as the healthcare provider's practice office.
     */
    readonly ProviderQuoteSOffice: Coding;
    /**
     * PROS: Prosthodontics clinic
     */
    readonly ProsthodonticsClinic: Coding;
    /**
     * PSI: Psychology clinic
     */
    readonly PsychologyClinic: Coding;
    /**
     * PSY: Psychiatry clinic
     */
    readonly PsychiatryClinic: Coding;
    /**
     * PSYCHF: Healthcare facility that cares for patients with psychiatric illness(s).
     */
    readonly PsychatricCareFacility: Coding;
    /**
     * PTRES: location where healthcare was delivered which is the residence of the Patient.
     */
    readonly PatientQuoteSResidence: Coding;
    /**
     * RADDX: A practice setting where radiology services (diagnostic or therapeutic) are provided            (X12N 261QR0200N)
     */
    readonly RadiologyDiagnosticsOrTherapeuticsUnit: Coding;
    /**
     * RADO: (X12N 261QX0203N)
     */
    readonly RadiationOncologyUnit: Coding;
    /**
     * RH: (X12N 283X00000N)
     */
    readonly RehabilitationHospital: Coding;
    /**
     * RHAT: Description: A location that plays the role of delivering services which may include life training and/or social support to people with addictions.
     */
    readonly AddictionTreatmentCenter: Coding;
    /**
     * RHEUM: Rheumatology clinic
     */
    readonly RheumatologyClinic: Coding;
    /**
     * RHII: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder.
     */
    readonly IntellectualImpairmentCenter: Coding;
    /**
     * RHMAD: Description: A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role.
     */
    readonly ParentsWithAdjustmentDifficultiesCenter: Coding;
    /**
     * RHPI: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments.
     */
    readonly PhysicalImpairmentCenter: Coding;
    /**
     * RHPIH: Description: A location that plays the role of delivering services for people with hearing impairments.
     */
    readonly PhysicalImpairmentHearingCenter: Coding;
    /**
     * RHPIMS: Description: A location that plays the role of delivering services for people with motor skill impairments.
     */
    readonly PhysicalImpairmentMotorSkillsCenter: Coding;
    /**
     * RHPIVS: Description: A location that plays the role of delivering services for people with visual skill impairments.
     */
    readonly PhysicalImpairmentVisualSkillsCenter: Coding;
    /**
     * RHU: Rehabilitation hospital unit
     */
    readonly RehabilitationHospitalUnit: Coding;
    /**
     * RHYAD: Description: A location that plays the role of delivering services which may include life training and/or social support services for the adaption, rehabilitation and social integration of youths with adjustment difficulties.
     */
    readonly YouthsWithAdjustmentDifficultiesCenter: Coding;
    /**
     * RNEU: Neuroradiology unit
     */
    readonly NeuroradiologyUnit: Coding;
    /**
     * RTF: Residential treatment facility
     */
    readonly ResidentialTreatmentFacility: Coding;
    /**
     * SCHOOL: Location where healthcare service was delivered, identified as a school or educational facility.
     */
    readonly School: Coding;
    /**
     * SLEEP: (X12N 261QA1200N)
     */
    readonly SleepDisordersUnit: Coding;
    /**
     * SNF: (X12N 314000000N)
     */
    readonly SkilledNursingFacility: Coding;
    /**
     * SPMED: Sports medicine clinic
     */
    readonly SportsMedicineClinic: Coding;
    /**
     * SU: Surgery clinic
     */
    readonly SurgeryClinic: Coding;
    /**
     * SURF: (X12N 324500000N)
     */
    readonly SubstanceUseRehabilitationFacility: Coding;
    /**
     * TR: Transplant clinic
     */
    readonly TransplantClinic: Coding;
    /**
     * TRAVEL: Travel and geographic medicine clinic
     */
    readonly TravelAndGeographicMedicineClinic: Coding;
    /**
     * UPC: Description: A location that plays the role of delivering services which may include: social emergency services required for a young person as required under any jurisdictional youth laws, child placement, and family mediation in the defined geographical area the SDL is responsible for. It may provide expertise in a judiciary setting on child custody, adoption and biological history research.
     */
    readonly UnderageProtectionCenter: Coding;
    /**
     * URO: Urology clinic
     */
    readonly UrologyClinic: Coding;
    /**
     * WND: Wound clinic
     */
    readonly WoundClinic: Coding;
    /**
     * WORK: Location where healthcare service was delivered, identified as a work place.
     */
    readonly WorkSite: Coding;
};
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare type V3ServiceDeliveryLocationRoleTypeCodingType = typeof V3ServiceDeliveryLocationRoleTypeCodings;
//# sourceMappingURL=V3ServiceDeliveryLocationRoleTypeCodings.d.ts.map