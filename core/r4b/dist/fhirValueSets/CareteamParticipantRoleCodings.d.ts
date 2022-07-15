import { CodingArgs } from '../fhir/Coding.js';
/**
 * Roles of participants that may be included in a care team.  Defined as: Is a Person, Healthcare professional (occupation) or Healthcare related organization (qualifier value).
 */
export declare type CareteamParticipantRoleCodingType = {
    /**
     * Code: 105428002
     */
    HomosexualParents: CodingArgs;
    /**
     * Code: 105429005
     */
    ElderlyParents: CodingArgs;
    /**
     * Code: 105431001
     */
    AdoptedPerson: CodingArgs;
    /**
     * Code: 105436006
     */
    ElderlyPerson: CodingArgs;
    /**
     * Code: 105437002
     */
    ElderlyMan: CodingArgs;
    /**
     * Code: 105438007
     */
    ElderlyWoman: CodingArgs;
    /**
     * Code: 105449001
     */
    SickRelative: CodingArgs;
    /**
     * Code: 105450001
     */
    AlcoholicRelative: CodingArgs;
    /**
     * Code: 105451002
     */
    DementedRelative: CodingArgs;
    /**
     * Code: 105452009
     */
    DiabeticRelative: CodingArgs;
    /**
     * Code: 105453004
     */
    SchizophrenicRelative: CodingArgs;
    /**
     * Code: 105454005
     */
    DisabledRelative: CodingArgs;
    /**
     * Code: 105455006
     */
    DonorForMedicalOrSurgicalProcedure: CodingArgs;
    /**
     * Code: 105456007
     */
    LiveDonor: CodingArgs;
    /**
     * Code: 105457003
     */
    CadaverDonor: CodingArgs;
    /**
     * Code: 105458008
     */
    CandidateDonor: CodingArgs;
    /**
     * Code: 105459000
     */
    AcceptedDonor: CodingArgs;
    /**
     * Code: 105460005
     */
    RejectedDonor: CodingArgs;
    /**
     * Code: 105461009
     */
    OrganDonor: CodingArgs;
    /**
     * Code: 105462002
     */
    DonorOfKidneyForTransplant: CodingArgs;
    /**
     * Code: 105463007
     */
    DonorForLiverTransplant: CodingArgs;
    /**
     * Code: 105464001
     */
    EyeDonorForCornealTransplant: CodingArgs;
    /**
     * Code: 105465000
     */
    DonorForHeartTransplant: CodingArgs;
    /**
     * Code: 105466004
     */
    DonorForLungTransplant: CodingArgs;
    /**
     * Code: 105467008
     */
    DonorForHeartLungTransplant: CodingArgs;
    /**
     * Code: 105468003
     */
    TissueDonor: CodingArgs;
    /**
     * Code: 105469006
     */
    BoneTissueDonor: CodingArgs;
    /**
     * Code: 105470007
     */
    BloodDonor: CodingArgs;
    /**
     * Code: 105471006
     */
    BoneMarrowDonor: CodingArgs;
    /**
     * Code: 105472004
     */
    SpermDonorForArtificialInsemination: CodingArgs;
    /**
     * Code: 105473009
     */
    HusbandSpermDonorForArtificialInsemination: CodingArgs;
    /**
     * Code: 105474003
     */
    RelatedSpermDonorForArtificialInsemination: CodingArgs;
    /**
     * Code: 106289002
     */
    Dentist: CodingArgs;
    /**
     * Code: 106291005
     */
    DieticianANDORPublicHealthNutritionist: CodingArgs;
    /**
     * Code: 106292003
     */
    ProfessionalNurse: CodingArgs;
    /**
     * Code: 106293008
     */
    NursingPersonnel: CodingArgs;
    /**
     * Code: 106294002
     */
    MidwiferyPersonnel: CodingArgs;
    /**
     * Code: 106296000
     */
    PhysiotherapistANDOROccupationalTherapist: CodingArgs;
    /**
     * Code: 106330007
     */
    PhilologistTranslatorANDORInterpreter: CodingArgs;
    /**
     * Code: 10896006
     */
    IdenticalTwinSibling: CodingArgs;
    /**
     * Code: 10960006
     */
    WorkingFather: CodingArgs;
    /**
     * Code: 11286003
     */
    TwinSibling: CodingArgs;
    /**
     * Code: 113157001
     */
    GrandMother: CodingArgs;
    /**
     * Code: 113158006
     */
    FraternalTwinSibling: CodingArgs;
    /**
     * Code: 113159003
     */
    LegalDaughter: CodingArgs;
    /**
     * Code: 113160008
     */
    NaturalSon: CodingArgs;
    /**
     * Code: 113161007
     */
    FemaleFiance: CodingArgs;
    /**
     * Code: 113163005
     */
    Friend: CodingArgs;
    /**
     * Code: 11393001
     */
    GreatGreatGrandChild: CodingArgs;
    /**
     * Code: 11434005
     */
    MaleSecondCousin: CodingArgs;
    /**
     * Code: 116153009
     */
    DonorOfControlMaterial: CodingArgs;
    /**
     * Code: 116154003
     */
    Patient: CodingArgs;
    /**
     * Code: 11661002
     */
    Neuropathologist: CodingArgs;
    /**
     * Code: 11773006
     */
    LegalBrother: CodingArgs;
    /**
     * Code: 11911009
     */
    Nephrologist: CodingArgs;
    /**
     * Code: 11935004
     */
    Obstetrician: CodingArgs;
    /**
     * Code: 11993008
     */
    MaleFirstCousin: CodingArgs;
    /**
     * Code: 12241003
     */
    FosterSon: CodingArgs;
    /**
     * Code: 125676002
     */
    Person: CodingArgs;
    /**
     * Code: 125677006
     */
    Relative: CodingArgs;
    /**
     * Code: 125678001
     */
    FirstDegreeBloodRelative: CodingArgs;
    /**
     * Code: 125679009
     */
    BloodRelative: CodingArgs;
    /**
     * Code: 12629003
     */
    SingleMother: CodingArgs;
    /**
     * Code: 127848009
     */
    Spouse: CodingArgs;
    /**
     * Code: 127849001
     */
    Husband: CodingArgs;
    /**
     * Code: 127850001
     */
    Wife: CodingArgs;
    /**
     * Code: 127851002
     */
    Fiance: CodingArgs;
    /**
     * Code: 13038009
     */
    OlderBrother: CodingArgs;
    /**
     * Code: 13157002
     */
    OlderSibling: CodingArgs;
    /**
     * Code: 133931009
     */
    Infant: CodingArgs;
    /**
     * Code: 133932002
     */
    Caregiver: CodingArgs;
    /**
     * Code: 133933007
     */
    Newborn: CodingArgs;
    /**
     * Code: 133936004
     */
    Adult: CodingArgs;
    /**
     * Code: 133937008
     */
    Adolescent: CodingArgs;
    /**
     * Code: 13443008
     */
    SecondCousin: CodingArgs;
    /**
     * Code: 1354005
     */
    OrphanFemale: CodingArgs;
    /**
     * Code: 13580004
     */
    SchoolDentalAssistant: CodingArgs;
    /**
     * Code: 13646006
     */
    NaturalParent: CodingArgs;
    /**
     * Code: 1421009
     */
    SpecializedSurgeon: CodingArgs;
    /**
     * Code: 14469008
     */
    LegalChild: CodingArgs;
    /**
     * Code: 14698002
     */
    MedicalMicrobiologist: CodingArgs;
    /**
     * Code: 15130002
     */
    SurrogateParent: CodingArgs;
    /**
     * Code: 158965000
     */
    MedicalPractitioner: CodingArgs;
    /**
     * Code: 158966004
     */
    MedicalAdministratorNational: CodingArgs;
    /**
     * Code: 158967008
     */
    ConsultantPhysician: CodingArgs;
    /**
     * Code: 158968003
     */
    ConsultantSurgeon: CodingArgs;
    /**
     * Code: 158969006
     */
    ConsultantGynecologyAndObstetrics: CodingArgs;
    /**
     * Code: 158971006
     */
    HospitalRegistrar: CodingArgs;
    /**
     * Code: 158972004
     */
    HouseOfficer: CodingArgs;
    /**
     * Code: 158973009
     */
    OccupationalPhysician: CodingArgs;
    /**
     * Code: 158974003
     */
    ClinicalMedicalOfficer: CodingArgs;
    /**
     * Code: 158975002
     */
    MedicalPractitionerTeaching: CodingArgs;
    /**
     * Code: 158977005
     */
    DentalAdministrator: CodingArgs;
    /**
     * Code: 158978000
     */
    DentalConsultant: CodingArgs;
    /**
     * Code: 158979008
     */
    DentalGeneralPractitioner: CodingArgs;
    /**
     * Code: 158980006
     */
    DentalPractitionerTeaching: CodingArgs;
    /**
     * Code: 158983008
     */
    NurseAdministratorNational: CodingArgs;
    /**
     * Code: 158984002
     */
    NursingOfficerRegion: CodingArgs;
    /**
     * Code: 158985001
     */
    NursingOfficerDistrict: CodingArgs;
    /**
     * Code: 158986000
     */
    NursingAdministratorProfessionalBody: CodingArgs;
    /**
     * Code: 158987009
     */
    NursingOfficerDivision: CodingArgs;
    /**
     * Code: 158988004
     */
    NurseEducationDirector: CodingArgs;
    /**
     * Code: 158989007
     */
    OccupationalHealthNursingOfficer: CodingArgs;
    /**
     * Code: 158990003
     */
    NursingOfficer: CodingArgs;
    /**
     * Code: 158992006
     */
    MidwiferySister: CodingArgs;
    /**
     * Code: 158993001
     */
    NursingSisterTheatre: CodingArgs;
    /**
     * Code: 158994007
     */
    StaffNurse: CodingArgs;
    /**
     * Code: 158995008
     */
    StaffMidwife: CodingArgs;
    /**
     * Code: 158996009
     */
    StateEnrolledNurse: CodingArgs;
    /**
     * Code: 158997000
     */
    DistrictNurse: CodingArgs;
    /**
     * Code: 158998005
     */
    PrivateNurse: CodingArgs;
    /**
     * Code: 158999002
     */
    CommunityMidwife: CodingArgs;
    /**
     * Code: 159001001
     */
    ClinicNurse: CodingArgs;
    /**
     * Code: 159002008
     */
    PracticeNurse: CodingArgs;
    /**
     * Code: 159003003
     */
    SchoolNurse: CodingArgs;
    /**
     * Code: 159004009
     */
    NurseTeaching: CodingArgs;
    /**
     * Code: 159005005
     */
    StudentNurse: CodingArgs;
    /**
     * Code: 159006006
     */
    DentalNurse: CodingArgs;
    /**
     * Code: 159007002
     */
    CommunityPediatricNurse: CodingArgs;
    /**
     * Code: 159010009
     */
    HospitalPharmacist: CodingArgs;
    /**
     * Code: 159011008
     */
    RetailPharmacist: CodingArgs;
    /**
     * Code: 159012001
     */
    IndustrialPharmacist: CodingArgs;
    /**
     * Code: 159014000
     */
    TraineePharmacist: CodingArgs;
    /**
     * Code: 159016003
     */
    MedicalRadiographer: CodingArgs;
    /**
     * Code: 159017007
     */
    DiagnosticRadiographer: CodingArgs;
    /**
     * Code: 159018002
     */
    TherapeuticRadiographer: CodingArgs;
    /**
     * Code: 159019005
     */
    TraineeRadiographer: CodingArgs;
    /**
     * Code: 159021000
     */
    OphthalmicOptician: CodingArgs;
    /**
     * Code: 159022007
     */
    TraineeOptician: CodingArgs;
    /**
     * Code: 159025009
     */
    RemedialGymnast: CodingArgs;
    /**
     * Code: 159026005
     */
    SpeechAndLanguageTherapist: CodingArgs;
    /**
     * Code: 159027001
     */
    Orthoptist: CodingArgs;
    /**
     * Code: 159028006
     */
    TraineeRemedialTherapist: CodingArgs;
    /**
     * Code: 159033005
     */
    Dietician: CodingArgs;
    /**
     * Code: 159034004
     */
    Podiatrist: CodingArgs;
    /**
     * Code: 159035003
     */
    DentalAuxiliary: CodingArgs;
    /**
     * Code: 159036002
     */
    ECGTechnician: CodingArgs;
    /**
     * Code: 159037006
     */
    EEGTechnician: CodingArgs;
    /**
     * Code: 159038001
     */
    ArtificialLimbFitter: CodingArgs;
    /**
     * Code: 159039009
     */
    ATAudiologyTechnician: CodingArgs;
    /**
     * Code: 159040006
     */
    PharmacyTechnician: CodingArgs;
    /**
     * Code: 159041005
     */
    TraineeMedicalTechnician: CodingArgs;
    /**
     * Code: 159141008
     */
    Geneticist: CodingArgs;
    /**
     * Code: 159972006
     */
    SurgicalCorsetFitter: CodingArgs;
    /**
     * Code: 160008000
     */
    DentalTechnician: CodingArgs;
    /**
     * Code: 160234004
     */
    SalvationArmyMember: CodingArgs;
    /**
     * Code: 160498000
     */
    SchoolChild: CodingArgs;
    /**
     * Code: 160505009
     */
    CommonLawHusband: CodingArgs;
    /**
     * Code: 160506005
     */
    CommonLawWife: CodingArgs;
    /**
     * Code: 160540005
     */
    RomanCatholic: CodingArgs;
    /**
     * Code: 160542002
     */
    Atheist: CodingArgs;
    /**
     * Code: 160543007
     */
    Jew: CodingArgs;
    /**
     * Code: 160544001
     */
    ChristianScienceChurch: CodingArgs;
    /**
     * Code: 160545000
     */
    Hindu: CodingArgs;
    /**
     * Code: 160549006
     */
    Christian: CodingArgs;
    /**
     * Code: 160557009
     */
    Baptist: CodingArgs;
    /**
     * Code: 160558004
     */
    Methodist: CodingArgs;
    /**
     * Code: 160560002
     */
    Presbyterian: CodingArgs;
    /**
     * Code: 160562005
     */
    Pentecostal: CodingArgs;
    /**
     * Code: 160563000
     */
    Evangelist: CodingArgs;
    /**
     * Code: 160566008
     */
    Christadelphian: CodingArgs;
    /**
     * Code: 160567004
     */
    Agnostic: CodingArgs;
    /**
     * Code: 160772005
     */
    VoluntaryWorker: CodingArgs;
    /**
     * Code: 161158003
     */
    Immigrant: CodingArgs;
    /**
     * Code: 17219007
     */
    MaleFiance: CodingArgs;
    /**
     * Code: 17561000
     */
    Cardiologist: CodingArgs;
    /**
     * Code: 17925003
     */
    AdoptiveBrother: CodingArgs;
    /**
     * Code: 17945006
     */
    NaturalGrandMother: CodingArgs;
    /**
     * Code: 18205005
     */
    WesleyanMethodist: CodingArgs;
    /**
     * Code: 18803008
     */
    Dermatologist: CodingArgs;
    /**
     * Code: 18850004
     */
    LaboratoryHematologist: CodingArgs;
    /**
     * Code: 18906004
     */
    FosterSibling: CodingArgs;
    /**
     * Code: 19244007
     */
    Gerodontist: CodingArgs;
    /**
     * Code: 19343003
     */
    TwinSister: CodingArgs;
    /**
     * Code: 19686009
     */
    YoungerSister: CodingArgs;
    /**
     * Code: 20145008
     */
    RemovableProsthodontist: CodingArgs;
    /**
     * Code: 21093007
     */
    HalfSibling: CodingArgs;
    /**
     * Code: 21365001
     */
    SpecializedDentist: CodingArgs;
    /**
     * Code: 21450003
     */
    Neuropsychiatrist: CodingArgs;
    /**
     * Code: 21464003
     */
    AdoptiveMother: CodingArgs;
    /**
     * Code: 21506002
     */
    FemaleSecondCousin: CodingArgs;
    /**
     * Code: 223366009
     */
    HealthcareProfessional: CodingArgs;
    /**
     * Code: 22387007
     */
    SurrogateChild: CodingArgs;
    /**
     * Code: 224080001
     */
    CommittedChristian: CodingArgs;
    /**
     * Code: 224526002
     */
    Woman: CodingArgs;
    /**
     * Code: 224527006
     */
    PersonInTheWorkEnvironmentPerson: CodingArgs;
    /**
     * Code: 224528001
     */
    Employee: CodingArgs;
    /**
     * Code: 224529009
     */
    ClinicalAssistant: CodingArgs;
    /**
     * Code: 224530004
     */
    SeniorRegistrar: CodingArgs;
    /**
     * Code: 224531000
     */
    Registrar: CodingArgs;
    /**
     * Code: 224532007
     */
    SeniorHouseOfficer: CodingArgs;
    /**
     * Code: 224533002
     */
    MOMedicalOfficer: CodingArgs;
    /**
     * Code: 224534008
     */
    HealthVisitorsNursesAndMidwives: CodingArgs;
    /**
     * Code: 224535009
     */
    RegisteredNurse: CodingArgs;
    /**
     * Code: 224536005
     */
    MidwiferyTutor: CodingArgs;
    /**
     * Code: 224537001
     */
    AccidentAndEmergencyNurseOccupation: CodingArgs;
    /**
     * Code: 224538006
     */
    TriageNurse: CodingArgs;
    /**
     * Code: 224540001
     */
    CommunityNurse: CodingArgs;
    /**
     * Code: 224541002
     */
    NursingContinenceAdvisor: CodingArgs;
    /**
     * Code: 224542009
     */
    CoronaryCareNurse: CodingArgs;
    /**
     * Code: 224543004
     */
    DiabeticNurse: CodingArgs;
    /**
     * Code: 224544005
     */
    FamilyPlanningNurse: CodingArgs;
    /**
     * Code: 224545006
     */
    CareOfTheElderlyNurse: CodingArgs;
    /**
     * Code: 224546007
     */
    ICNInfectionControlNurse: CodingArgs;
    /**
     * Code: 224547003
     */
    IntensiveTherapyNurse: CodingArgs;
    /**
     * Code: 224548008
     */
    LearningDisabilitiesNurse: CodingArgs;
    /**
     * Code: 224549000
     */
    NeonatalNurse: CodingArgs;
    /**
     * Code: 224550000
     */
    NeurologyNurse: CodingArgs;
    /**
     * Code: 224551001
     */
    IndustrialNurse: CodingArgs;
    /**
     * Code: 224552008
     */
    OncologyNurse: CodingArgs;
    /**
     * Code: 224553003
     */
    MacmillanNurse: CodingArgs;
    /**
     * Code: 224554009
     */
    MarieCurieNurse: CodingArgs;
    /**
     * Code: 224555005
     */
    PainControlNurse: CodingArgs;
    /**
     * Code: 224556006
     */
    PalliativeCareNurse: CodingArgs;
    /**
     * Code: 224557002
     */
    ChemotherapyNurse: CodingArgs;
    /**
     * Code: 224558007
     */
    RadiotherapyNurse: CodingArgs;
    /**
     * Code: 224559004
     */
    RecoveryNurse: CodingArgs;
    /**
     * Code: 224560009
     */
    Stomatherapist: CodingArgs;
    /**
     * Code: 224562001
     */
    PediatricNurse: CodingArgs;
    /**
     * Code: 224563006
     */
    PsychiatricNurse: CodingArgs;
    /**
     * Code: 224564000
     */
    CommunityMentalHealthNurse: CodingArgs;
    /**
     * Code: 224565004
     */
    RenalNurse: CodingArgs;
    /**
     * Code: 224566003
     */
    HemodialysisNurse: CodingArgs;
    /**
     * Code: 224567007
     */
    WoundCareNurse: CodingArgs;
    /**
     * Code: 224569005
     */
    NurseGrade: CodingArgs;
    /**
     * Code: 224570006
     */
    ClinicalNurseSpecialist: CodingArgs;
    /**
     * Code: 224571005
     */
    NursePractitioner: CodingArgs;
    /**
     * Code: 224572003
     */
    NursingSister: CodingArgs;
    /**
     * Code: 224573008
     */
    CNChargeNurse: CodingArgs;
    /**
     * Code: 224574002
     */
    WardManager: CodingArgs;
    /**
     * Code: 224575001
     */
    NursingTeamLeader: CodingArgs;
    /**
     * Code: 224576000
     */
    NursingAssistant: CodingArgs;
    /**
     * Code: 224577009
     */
    HCAHealthcareAssistant: CodingArgs;
    /**
     * Code: 224578004
     */
    NurseryNurse: CodingArgs;
    /**
     * Code: 224579007
     */
    HealthcareServiceManager: CodingArgs;
    /**
     * Code: 224580005
     */
    OccupationalHealthServiceManager: CodingArgs;
    /**
     * Code: 224581009
     */
    CommunityNurseManager: CodingArgs;
    /**
     * Code: 224583007
     */
    BehaviorTherapist: CodingArgs;
    /**
     * Code: 224584001
     */
    BehaviorTherapyAssistant: CodingArgs;
    /**
     * Code: 224585000
     */
    DramaTherapist: CodingArgs;
    /**
     * Code: 224586004
     */
    DomiciliaryOccupationalTherapist: CodingArgs;
    /**
     * Code: 224587008
     */
    OccupationalTherapyHelper: CodingArgs;
    /**
     * Code: 224588003
     */
    Psychotherapist: CodingArgs;
    /**
     * Code: 224589006
     */
    CommunityBasedPhysiotherapist: CodingArgs;
    /**
     * Code: 224590002
     */
    PlayTherapist: CodingArgs;
    /**
     * Code: 224591003
     */
    PlaySpecialist: CodingArgs;
    /**
     * Code: 224592005
     */
    PlayLeader: CodingArgs;
    /**
     * Code: 224593000
     */
    CommunityBasedSpeechAndLanguageTherapist: CodingArgs;
    /**
     * Code: 224594006
     */
    SpeechAndLanguageAssistant: CodingArgs;
    /**
     * Code: 224595007
     */
    ProfessionalCounselorOccupation: CodingArgs;
    /**
     * Code: 224596008
     */
    MarriageGuidanceCounselorOccupation: CodingArgs;
    /**
     * Code: 224597004
     */
    TrainedNurseCounselorOccupation: CodingArgs;
    /**
     * Code: 224598009
     */
    TrainedSocialWorkerCounselorOccupation: CodingArgs;
    /**
     * Code: 224599001
     */
    TrainedPersonnelCounselorOccupation: CodingArgs;
    /**
     * Code: 224600003
     */
    Psychoanalyst: CodingArgs;
    /**
     * Code: 224601004
     */
    AssistantPsychologist: CodingArgs;
    /**
     * Code: 224602006
     */
    CommunityBasedPodiatrist: CodingArgs;
    /**
     * Code: 224603001
     */
    FootCareWorker: CodingArgs;
    /**
     * Code: 224604007
     */
    Audiometrician: CodingArgs;
    /**
     * Code: 224605008
     */
    Audiometrist: CodingArgs;
    /**
     * Code: 224606009
     */
    TechnicalHealthcareOccupation: CodingArgs;
    /**
     * Code: 224607000
     */
    OccupationalTherapyTechnicalInstructor: CodingArgs;
    /**
     * Code: 224608005
     */
    AdministrativeHealthcareStaff: CodingArgs;
    /**
     * Code: 224609002
     */
    ComplementaryHealthWorker: CodingArgs;
    /**
     * Code: 224610007
     */
    SupportingServicesPersonnel: CodingArgs;
    /**
     * Code: 224614003
     */
    ResearchAssociate: CodingArgs;
    /**
     * Code: 224615002
     */
    ResearchNurse: CodingArgs;
    /**
     * Code: 224619008
     */
    Migrant: CodingArgs;
    /**
     * Code: 224620002
     */
    HumanAidToCommunication: CodingArgs;
    /**
     * Code: 224621003
     */
    Palantypist: CodingArgs;
    /**
     * Code: 224622005
     */
    NoteTaker: CodingArgs;
    /**
     * Code: 224623000
     */
    Cuer: CodingArgs;
    /**
     * Code: 224624006
     */
    Lipspeaker: CodingArgs;
    /**
     * Code: 224625007
     */
    InterpreterForBritishSignLanguage: CodingArgs;
    /**
     * Code: 224626008
     */
    InterpreterForSignsSupportingEnglish: CodingArgs;
    /**
     * Code: 224627004
     */
    GeneralCategoriesOfPeople: CodingArgs;
    /**
     * Code: 224936003
     */
    GeneralPractitionerLocum: CodingArgs;
    /**
     * Code: 22515006
     */
    MedicalAssistant: CodingArgs;
    /**
     * Code: 225726006
     */
    LactationConsultant: CodingArgs;
    /**
     * Code: 225727002
     */
    MidwifeCounselorOccupation: CodingArgs;
    /**
     * Code: 22573006
     */
    StepDaughter: CodingArgs;
    /**
     * Code: 22609000
     */
    AdoptiveGrandParent: CodingArgs;
    /**
     * Code: 2272004
     */
    HalfSister: CodingArgs;
    /**
     * Code: 22731001
     */
    OrthopedicSurgeon: CodingArgs;
    /**
     * Code: 22963000
     */
    LegalSister: CodingArgs;
    /**
     * Code: 22983004
     */
    ThoracicSurgeon: CodingArgs;
    /**
     * Code: 23278007
     */
    CommunityHealthPhysician: CodingArgs;
    /**
     * Code: 2368000
     */
    GreatGreatGrandMother: CodingArgs;
    /**
     * Code: 24430003
     */
    PhysicalMedicineSpecialist: CodingArgs;
    /**
     * Code: 24590004
     */
    Urologist: CodingArgs;
    /**
     * Code: 2481008
     */
    WorkingMother: CodingArgs;
    /**
     * Code: 248544006
     */
    Rastafarian: CodingArgs;
    /**
     * Code: 25211005
     */
    Aunt: CodingArgs;
    /**
     * Code: 255409004
     */
    PregnantWoman: CodingArgs;
    /**
     * Code: 257497009
     */
    AnimalRider: CodingArgs;
    /**
     * Code: 257498004
     */
    RiderOfMotorcycle: CodingArgs;
    /**
     * Code: 257499007
     */
    PedalCyclist: CodingArgs;
    /**
     * Code: 257500003
     */
    Passenger: CodingArgs;
    /**
     * Code: 257501004
     */
    OccupantOfMotorVehicle: CodingArgs;
    /**
     * Code: 257502006
     */
    OccupantOfTram: CodingArgs;
    /**
     * Code: 257503001
     */
    PillionPassenger: CodingArgs;
    /**
     * Code: 257504007
     */
    PersonRidingOnOutsideOfVehicle: CodingArgs;
    /**
     * Code: 257505008
     */
    PersonTravelingOnOutsideOfTrainPerson: CodingArgs;
    /**
     * Code: 257506009
     */
    FrontSeatPassenger: CodingArgs;
    /**
     * Code: 257508005
     */
    BackSeatPassenger: CodingArgs;
    /**
     * Code: 257509002
     */
    OccupantOfAnimalDrawnVehicle: CodingArgs;
    /**
     * Code: 257510007
     */
    PassengerOnCommercialWatercraft: CodingArgs;
    /**
     * Code: 257511006
     */
    PassengerOnStation: CodingArgs;
    /**
     * Code: 257512004
     */
    PassengerOnTrain: CodingArgs;
    /**
     * Code: 257513009
     */
    MemberOfPublic: CodingArgs;
    /**
     * Code: 257514003
     */
    MemberOfPublicInvolvedIncidentally: CodingArgs;
    /**
     * Code: 257516001
     */
    MemberOfPublicOnGround: CodingArgs;
    /**
     * Code: 257517005
     */
    OccupantOfNonmotorVehicle: CodingArgs;
    /**
     * Code: 257518000
     */
    Pedestrian: CodingArgs;
    /**
     * Code: 257519008
     */
    PersonTrespassingOnRailwayLine: CodingArgs;
    /**
     * Code: 257521003
     */
    RailwayEmployeeOnTrain: CodingArgs;
    /**
     * Code: 257522005
     */
    RecreationalWatercraftUser: CodingArgs;
    /**
     * Code: 257523000
     */
    Swimmer: CodingArgs;
    /**
     * Code: 257524006
     */
    UserOfAnimalDrawnVehicle: CodingArgs;
    /**
     * Code: 257525007
     */
    WatercraftDweller: CodingArgs;
    /**
     * Code: 257526008
     */
    WaterSkierPerson: CodingArgs;
    /**
     * Code: 25941000087102
     */
    AdultGerontologyPrimaryCareNursePractitionerOccupation: CodingArgs;
    /**
     * Code: 25961008
     */
    ElectroencephalographySpecialist: CodingArgs;
    /**
     * Code: 26031000087100
     */
    PediatricNursePractitionerOccupation: CodingArgs;
    /**
     * Code: 26042002
     */
    DentalHygienist: CodingArgs;
    /**
     * Code: 26071000087103
     */
    PHCNPPrimaryHealthCareNursePractitioner: CodingArgs;
    /**
     * Code: 26091000087104
     */
    PublicHealthNursePractitioner: CodingArgs;
    /**
     * Code: 262043009
     */
    PartnerInRelationship: CodingArgs;
    /**
     * Code: 26369006
     */
    PublicHealthNurse: CodingArgs;
    /**
     * Code: 265937000
     */
    NursingOccupationOccupation: CodingArgs;
    /**
     * Code: 265939002
     */
    MedicalDentalTechnicians: CodingArgs;
    /**
     * Code: 266943008
     */
    SingleParent: CodingArgs;
    /**
     * Code: 268557009
     */
    Sportsman: CodingArgs;
    /**
     * Code: 270002
     */
    FemaleFirstCousin: CodingArgs;
    /**
     * Code: 271448006
     */
    Anglican: CodingArgs;
    /**
     * Code: 27508009
     */
    SurrogateMother: CodingArgs;
    /**
     * Code: 276035002
     */
    VoluntaryHelper: CodingArgs;
    /**
     * Code: 276036001
     */
    VoluntaryVisitor: CodingArgs;
    /**
     * Code: 276037005
     */
    VolunteerHelper: CodingArgs;
    /**
     * Code: 276119007
     */
    Nonconformist: CodingArgs;
    /**
     * Code: 27733009
     */
    Sister: CodingArgs;
    /**
     * Code: 28010004
     */
    ShiiteMuslim: CodingArgs;
    /**
     * Code: 28229004
     */
    Optometrist: CodingArgs;
    /**
     * Code: 283875005
     */
    ParkinsonQuoteSDiseaseNurse: CodingArgs;
    /**
     * Code: 28411006
     */
    Neonatologist: CodingArgs;
    /**
     * Code: 28544002
     */
    MedicalBiochemist: CodingArgs;
    /**
     * Code: 29539002
     */
    YoungerSibling: CodingArgs;
    /**
     * Code: 2959006
     */
    FemaleCousin: CodingArgs;
    /**
     * Code: 29644004
     */
    FraternalTwinSister: CodingArgs;
    /**
     * Code: 29787005
     */
    FosterBrother: CodingArgs;
    /**
     * Code: 302211009
     */
    SpecialistRegistrar: CodingArgs;
    /**
     * Code: 303069001
     */
    PersonInTheTransportEnvironmentPerson: CodingArgs;
    /**
     * Code: 303071001
     */
    FamilyMember: CodingArgs;
    /**
     * Code: 303072008
     */
    PersonInTheHomeEnvironmentPerson: CodingArgs;
    /**
     * Code: 303073003
     */
    PersonInTheReligiousEnvironmentPerson: CodingArgs;
    /**
     * Code: 303118004
     */
    PersonInTheHealthcareEnvironmentPerson: CodingArgs;
    /**
     * Code: 303119007
     */
    PersonInTheCommunityEnvironmentPerson: CodingArgs;
    /**
     * Code: 303120001
     */
    PersonInTheRecreationalEnvironmentPerson: CodingArgs;
    /**
     * Code: 303121002
     */
    PersonInTheEducationalEnvironmentPerson: CodingArgs;
    /**
     * Code: 303122009
     */
    Crewmember: CodingArgs;
    /**
     * Code: 303124005
     */
    MemberOfMentalHealthReviewTribunal: CodingArgs;
    /**
     * Code: 303129000
     */
    HospitalManager: CodingArgs;
    /**
     * Code: 303133007
     */
    ResponsibleMedicalOfficer: CodingArgs;
    /**
     * Code: 303134001
     */
    IndependentDoctor: CodingArgs;
    /**
     * Code: 303977004
     */
    OccupantOfRailwayVehicle: CodingArgs;
    /**
     * Code: 303980003
     */
    DriverOfMotorVehicle: CodingArgs;
    /**
     * Code: 303981004
     */
    DriverOfAnimalDrawnVehicle: CodingArgs;
    /**
     * Code: 303983001
     */
    PassengerOfAnimalDrawnVehicle: CodingArgs;
    /**
     * Code: 303984007
     */
    PassengerOnPedalCycle: CodingArgs;
    /**
     * Code: 303985008
     */
    OccupantOfWatercraft: CodingArgs;
    /**
     * Code: 303986009
     */
    OccupantOfAircraft: CodingArgs;
    /**
     * Code: 303987000
     */
    HorseRider: CodingArgs;
    /**
     * Code: 303988005
     */
    PassengerOnAircraft: CodingArgs;
    /**
     * Code: 303989002
     */
    CrewmemberOnAircraft: CodingArgs;
    /**
     * Code: 303990006
     */
    PassengerOfMotorVehicle: CodingArgs;
    /**
     * Code: 303991005
     */
    Trespasser: CodingArgs;
    /**
     * Code: 303992003
     */
    CarPassenger: CodingArgs;
    /**
     * Code: 303993008
     */
    CoachPassenger: CodingArgs;
    /**
     * Code: 304291006
     */
    BereavementCounselorOccupation: CodingArgs;
    /**
     * Code: 304292004
     */
    Surgeon: CodingArgs;
    /**
     * Code: 30578000
     */
    StepFather: CodingArgs;
    /**
     * Code: 307988006
     */
    MedicalTechnician: CodingArgs;
    /**
     * Code: 308002005
     */
    RemedialTherapist: CodingArgs;
    /**
     * Code: 309294001
     */
    AccidentAndEmergencyDoctor: CodingArgs;
    /**
     * Code: 309295000
     */
    ClinicalOncologist: CodingArgs;
    /**
     * Code: 309296004
     */
    FamilyPlanningDoctor: CodingArgs;
    /**
     * Code: 309322005
     */
    AssociateGeneralPractitioner: CodingArgs;
    /**
     * Code: 309323000
     */
    PartnerOfGeneralPractitioner: CodingArgs;
    /**
     * Code: 309324006
     */
    AssistantGP: CodingArgs;
    /**
     * Code: 309326008
     */
    DeputizingGeneralPractitioner: CodingArgs;
    /**
     * Code: 309327004
     */
    GeneralPractitionerRegistrar: CodingArgs;
    /**
     * Code: 309328009
     */
    AmbulatoryPediatrician: CodingArgs;
    /**
     * Code: 309329001
     */
    CommunityPediatrician: CodingArgs;
    /**
     * Code: 309330006
     */
    PediatricCardiologist: CodingArgs;
    /**
     * Code: 309331005
     */
    PediatricEndocrinologist: CodingArgs;
    /**
     * Code: 309332003
     */
    PediatricGastroenterologist: CodingArgs;
    /**
     * Code: 309333008
     */
    PediatricNephrologist: CodingArgs;
    /**
     * Code: 309334002
     */
    PediatricNeurologist: CodingArgs;
    /**
     * Code: 309335001
     */
    PediatricRheumatologist: CodingArgs;
    /**
     * Code: 309336000
     */
    PediatricOncologist: CodingArgs;
    /**
     * Code: 309337009
     */
    PainManagementSpecialist: CodingArgs;
    /**
     * Code: 309338004
     */
    IntensiveCareSpecialist: CodingArgs;
    /**
     * Code: 309339007
     */
    AdultIntensiveCareSpecialist: CodingArgs;
    /**
     * Code: 309340009
     */
    PediatricIntensiveCareSpecialist: CodingArgs;
    /**
     * Code: 309341008
     */
    BloodTransfusionDoctor: CodingArgs;
    /**
     * Code: 309342001
     */
    Histopathologist: CodingArgs;
    /**
     * Code: 309343006
     */
    Physician: CodingArgs;
    /**
     * Code: 309345004
     */
    ChestPhysician: CodingArgs;
    /**
     * Code: 309346003
     */
    ThoracicPhysician: CodingArgs;
    /**
     * Code: 309347007
     */
    ClinicalHematologist: CodingArgs;
    /**
     * Code: 309348002
     */
    ClinicalNeurophysiologist: CodingArgs;
    /**
     * Code: 309349005
     */
    ClinicalPhysiologist: CodingArgs;
    /**
     * Code: 309350005
     */
    Diabetologist: CodingArgs;
    /**
     * Code: 309351009
     */
    Andrologist: CodingArgs;
    /**
     * Code: 309352002
     */
    Neuroendocrinologist: CodingArgs;
    /**
     * Code: 309353007
     */
    ReproductiveEndocrinologist: CodingArgs;
    /**
     * Code: 309354001
     */
    Thyroidologist: CodingArgs;
    /**
     * Code: 309355000
     */
    ClinicalGeneticist: CodingArgs;
    /**
     * Code: 309356004
     */
    ClinicalCytogeneticist: CodingArgs;
    /**
     * Code: 309357008
     */
    ClinicalMolecularGeneticist: CodingArgs;
    /**
     * Code: 309358003
     */
    GenitourinaryMedicinePhysician: CodingArgs;
    /**
     * Code: 309359006
     */
    PalliativeCarePhysician: CodingArgs;
    /**
     * Code: 309360001
     */
    RehabilitationPhysician: CodingArgs;
    /**
     * Code: 309361002
     */
    ChildAndAdolescentPsychiatrist: CodingArgs;
    /**
     * Code: 309362009
     */
    ForensicPsychiatrist: CodingArgs;
    /**
     * Code: 309363004
     */
    LiaisonPsychiatrist: CodingArgs;
    /**
     * Code: 309364005
     */
    Psychogeriatrician: CodingArgs;
    /**
     * Code: 309365006
     */
    PsychiatristForMentalHandicap: CodingArgs;
    /**
     * Code: 309366007
     */
    RehabilitationPsychiatrist: CodingArgs;
    /**
     * Code: 309367003
     */
    ObstetricianAndGynecologist: CodingArgs;
    /**
     * Code: 309368008
     */
    BreastSurgeon: CodingArgs;
    /**
     * Code: 309369000
     */
    CardiothoracicSurgeon: CodingArgs;
    /**
     * Code: 309371000
     */
    CardiacSurgeon: CodingArgs;
    /**
     * Code: 309372007
     */
    EarNoseAndThroatSurgeon: CodingArgs;
    /**
     * Code: 309373002
     */
    EndocrineSurgeon: CodingArgs;
    /**
     * Code: 309374008
     */
    ThyroidSurgeon: CodingArgs;
    /**
     * Code: 309375009
     */
    PituitarySurgeon: CodingArgs;
    /**
     * Code: 309376005
     */
    GastrointestinalSurgeon: CodingArgs;
    /**
     * Code: 309377001
     */
    GeneralGastrointestinalSurgeon: CodingArgs;
    /**
     * Code: 309378006
     */
    UpperGastrointestinalSurgeon: CodingArgs;
    /**
     * Code: 309379003
     */
    ColorectalSurgeon: CodingArgs;
    /**
     * Code: 309380000
     */
    HandSurgeon: CodingArgs;
    /**
     * Code: 309381001
     */
    HepatobiliarySurgeon: CodingArgs;
    /**
     * Code: 309382008
     */
    OphthalmicSurgeon: CodingArgs;
    /**
     * Code: 309383003
     */
    PediatricSurgeon: CodingArgs;
    /**
     * Code: 309384009
     */
    PancreaticSurgeon: CodingArgs;
    /**
     * Code: 309385005
     */
    TransplantSurgeon: CodingArgs;
    /**
     * Code: 309386006
     */
    TraumaSurgeon: CodingArgs;
    /**
     * Code: 309388007
     */
    VascularSurgeon: CodingArgs;
    /**
     * Code: 309389004
     */
    MedicalPractitionerGrade: CodingArgs;
    /**
     * Code: 309390008
     */
    HospitalConsultant: CodingArgs;
    /**
     * Code: 309391007
     */
    VisitingSpecialistRegistrar: CodingArgs;
    /**
     * Code: 309392000
     */
    ResearchRegistrar: CodingArgs;
    /**
     * Code: 309393005
     */
    GeneralPractitionerGrade: CodingArgs;
    /**
     * Code: 309394004
     */
    GeneralPractitionerPrincipal: CodingArgs;
    /**
     * Code: 309395003
     */
    HospitalSpecialist: CodingArgs;
    /**
     * Code: 309396002
     */
    AssociateSpecialist: CodingArgs;
    /**
     * Code: 309397006
     */
    ResearchFellow: CodingArgs;
    /**
     * Code: 309398001
     */
    ProfessionAlliedToMedicine: CodingArgs;
    /**
     * Code: 309399009
     */
    HospitalDietitian: CodingArgs;
    /**
     * Code: 309400002
     */
    DomiciliaryPhysiotherapist: CodingArgs;
    /**
     * Code: 309401003
     */
    GPBasedPhysiotherapist: CodingArgs;
    /**
     * Code: 309402005
     */
    HospitalBasedPhysiotherapist: CodingArgs;
    /**
     * Code: 309403000
     */
    PrivatePhysiotherapist: CodingArgs;
    /**
     * Code: 309404006
     */
    PhysiotherapyHelper: CodingArgs;
    /**
     * Code: 309409001
     */
    HospitalBasedSpeechAndLanguageTherapist: CodingArgs;
    /**
     * Code: 309410006
     */
    ArtsTherapist: CodingArgs;
    /**
     * Code: 309411005
     */
    DanceTherapist: CodingArgs;
    /**
     * Code: 309412003
     */
    MusicTherapist: CodingArgs;
    /**
     * Code: 309413008
     */
    RenalDietitian: CodingArgs;
    /**
     * Code: 309414002
     */
    LiverDietitian: CodingArgs;
    /**
     * Code: 309415001
     */
    OncologyDietitian: CodingArgs;
    /**
     * Code: 309416000
     */
    PediatricDietitian: CodingArgs;
    /**
     * Code: 309417009
     */
    DiabetesDietitian: CodingArgs;
    /**
     * Code: 309418004
     */
    Audiologist: CodingArgs;
    /**
     * Code: 309419007
     */
    HearingTherapist: CodingArgs;
    /**
     * Code: 309420001
     */
    AudiologicalScientist: CodingArgs;
    /**
     * Code: 309421002
     */
    HearingAidDispenser: CodingArgs;
    /**
     * Code: 309422009
     */
    CommunityBasedOccupationalTherapist: CodingArgs;
    /**
     * Code: 309423004
     */
    HospitalOccupationalTherapist: CodingArgs;
    /**
     * Code: 309427003
     */
    SocialServicesOccupationalTherapist: CodingArgs;
    /**
     * Code: 309428008
     */
    Orthotist: CodingArgs;
    /**
     * Code: 309429000
     */
    SurgicalFitter: CodingArgs;
    /**
     * Code: 309434001
     */
    HospitalBasedPodiatrist: CodingArgs;
    /**
     * Code: 309435000
     */
    PodiatryAssistant: CodingArgs;
    /**
     * Code: 309436004
     */
    LymphedemaNurse: CodingArgs;
    /**
     * Code: 309437008
     */
    CommunityLearningDisabilitiesNurse: CodingArgs;
    /**
     * Code: 309439006
     */
    ClinicalNurseTeacher: CodingArgs;
    /**
     * Code: 309440008
     */
    CommunityPracticeNurseTeacher: CodingArgs;
    /**
     * Code: 309441007
     */
    NurseTutor: CodingArgs;
    /**
     * Code: 309442000
     */
    NurseTeacherPractitioner: CodingArgs;
    /**
     * Code: 309443005
     */
    NurseLecturerPractitioner: CodingArgs;
    /**
     * Code: 309444004
     */
    OutreachNurse: CodingArgs;
    /**
     * Code: 309445003
     */
    AnestheticNurse: CodingArgs;
    /**
     * Code: 309446002
     */
    NurseManager: CodingArgs;
    /**
     * Code: 309450009
     */
    NurseAdministrator: CodingArgs;
    /**
     * Code: 309452001
     */
    MidwiferyGrade: CodingArgs;
    /**
     * Code: 309453006
     */
    RegisteredMidwife: CodingArgs;
    /**
     * Code: 309454000
     */
    StudentMidwife: CodingArgs;
    /**
     * Code: 309455004
     */
    ParentcraftSister: CodingArgs;
    /**
     * Code: 309456003
     */
    Clergy: CodingArgs;
    /**
     * Code: 309459005
     */
    HealthcareProfessionalGrade: CodingArgs;
    /**
     * Code: 309460000
     */
    RestorativeDentist: CodingArgs;
    /**
     * Code: 309687009
     */
    Buddhist: CodingArgs;
    /**
     * Code: 309884000
     */
    Muslim: CodingArgs;
    /**
     * Code: 309885004
     */
    Protestant: CodingArgs;
    /**
     * Code: 309886003
     */
    Quaker: CodingArgs;
    /**
     * Code: 310170009
     */
    PediatricAudiologist: CodingArgs;
    /**
     * Code: 310171008
     */
    Immunopathologist: CodingArgs;
    /**
     * Code: 310172001
     */
    AudiologicalPhysician: CodingArgs;
    /**
     * Code: 310173006
     */
    ClinicalPharmacologist: CodingArgs;
    /**
     * Code: 310174000
     */
    PrivateDoctor: CodingArgs;
    /**
     * Code: 310175004
     */
    AgencyNurse: CodingArgs;
    /**
     * Code: 310176003
     */
    BehavioralTherapistNurse: CodingArgs;
    /**
     * Code: 310177007
     */
    CardiacRehabilitationNurse: CodingArgs;
    /**
     * Code: 310178002
     */
    GenitourinaryNurse: CodingArgs;
    /**
     * Code: 310179005
     */
    RheumatologyNurseSpecialist: CodingArgs;
    /**
     * Code: 310180008
     */
    ContinenceNurse: CodingArgs;
    /**
     * Code: 310181007
     */
    ContactTracingNurse: CodingArgs;
    /**
     * Code: 310182000
     */
    GeneralNurse: CodingArgs;
    /**
     * Code: 310183005
     */
    NurseForTheMentallyHandicapped: CodingArgs;
    /**
     * Code: 310184004
     */
    LiaisonNurse: CodingArgs;
    /**
     * Code: 310185003
     */
    DiabeticLiaisonNurse: CodingArgs;
    /**
     * Code: 310186002
     */
    NursePsychotherapist: CodingArgs;
    /**
     * Code: 310187006
     */
    CompanyNurse: CodingArgs;
    /**
     * Code: 310188001
     */
    HospitalMidwife: CodingArgs;
    /**
     * Code: 310189009
     */
    GeneticCounselorOccupation: CodingArgs;
    /**
     * Code: 310190000
     */
    MentalHealthCounselorOccupation: CodingArgs;
    /**
     * Code: 310191001
     */
    ClinicalPsychologist: CodingArgs;
    /**
     * Code: 310192008
     */
    EducationalPsychologist: CodingArgs;
    /**
     * Code: 310193003
     */
    Coroner: CodingArgs;
    /**
     * Code: 310194009
     */
    ApplianceOfficer: CodingArgs;
    /**
     * Code: 310512001
     */
    MedicalOncologist: CodingArgs;
    /**
     * Code: 310543008
     */
    Graduate: CodingArgs;
    /**
     * Code: 311441001
     */
    SchoolMedicalOfficer: CodingArgs;
    /**
     * Code: 312485001
     */
    IntegratedMidwife: CodingArgs;
    /**
     * Code: 313415001
     */
    IdenticalTwin: CodingArgs;
    /**
     * Code: 313416000
     */
    HeterozygousTwin: CodingArgs;
    /**
     * Code: 314712007
     */
    Parachutist: CodingArgs;
    /**
     * Code: 314767008
     */
    BirdFancier: CodingArgs;
    /**
     * Code: 31656007
     */
    AdoptiveGrandMother: CodingArgs;
    /**
     * Code: 31831004
     */
    FosterDaughter: CodingArgs;
    /**
     * Code: 33969000
     */
    GreatGrandParent: CodingArgs;
    /**
     * Code: 339947000
     */
    Man: CodingArgs;
    /**
     * Code: 3425009
     */
    OldestDaughter: CodingArgs;
    /**
     * Code: 3430008
     */
    RadiationTherapist: CodingArgs;
    /**
     * Code: 34581001
     */
    Niece: CodingArgs;
    /**
     * Code: 34871008
     */
    GrandFather: CodingArgs;
    /**
     * Code: 34972000
     */
    OnlyDaughter: CodingArgs;
    /**
     * Code: 360863008
     */
    Beggar: CodingArgs;
    /**
     * Code: 360984002
     */
    HasidicJew: CodingArgs;
    /**
     * Code: 366740002
     */
    Sikh: CodingArgs;
    /**
     * Code: 36682004
     */
    Physiotherapist: CodingArgs;
    /**
     * Code: 37154003
     */
    Periodontist: CodingArgs;
    /**
     * Code: 372102007
     */
    RNFirstAssist: CodingArgs;
    /**
     * Code: 373864002
     */
    OutpatientPerson: CodingArgs;
    /**
     * Code: 373929005
     */
    OrphanChildPerson: CodingArgs;
    /**
     * Code: 375005
     */
    Sibling: CodingArgs;
    /**
     * Code: 37504001
     */
    Orthodontist: CodingArgs;
    /**
     * Code: 38048003
     */
    Uncle: CodingArgs;
    /**
     * Code: 38248007
     */
    OldestSon: CodingArgs;
    /**
     * Code: 38265003
     */
    FosterMother: CodingArgs;
    /**
     * Code: 38312007
     */
    GrandParent: CodingArgs;
    /**
     * Code: 3842006
     */
    Chiropractor: CodingArgs;
    /**
     * Code: 3851003
     */
    SurrogateDaughter: CodingArgs;
    /**
     * Code: 385435006
     */
    IndividualPerson: CodingArgs;
    /**
     * Code: 387619007
     */
    OpticianOccupation: CodingArgs;
    /**
     * Code: 39062003
     */
    FosterChild: CodingArgs;
    /**
     * Code: 390790000
     */
    AsylumSeekerPerson: CodingArgs;
    /**
     * Code: 393547004
     */
    AdoptedChild: CodingArgs;
    /**
     * Code: 393549001
     */
    AdoptedDaughter: CodingArgs;
    /**
     * Code: 394447009
     */
    Fetus: CodingArgs;
    /**
     * Code: 394560000
     */
    AdoptedSon: CodingArgs;
    /**
     * Code: 394566006
     */
    GreatGrandson: CodingArgs;
    /**
     * Code: 394567002
     */
    GreatGranddaughter: CodingArgs;
    /**
     * Code: 394568007
     */
    ExtendedFamilyMemberPerson: CodingArgs;
    /**
     * Code: 394571004
     */
    EmployerPerson: CodingArgs;
    /**
     * Code: 394572006
     */
    MedicalSecretaryOccupation: CodingArgs;
    /**
     * Code: 394618009
     */
    HospitalNurseOccupation: CodingArgs;
    /**
     * Code: 394619001
     */
    GuardianPerson: CodingArgs;
    /**
     * Code: 394730007
     */
    HealthcareRelatedOrganization: CodingArgs;
    /**
     * Code: 394738000
     */
    OtherRelatedPersonsPerson: CodingArgs;
    /**
     * Code: 394854006
     */
    ImmediateFamilyMemberPerson: CodingArgs;
    /**
     * Code: 394855007
     */
    NonImmediateFamilyMemberPerson: CodingArgs;
    /**
     * Code: 394856008
     */
    PaternalGrandFather: CodingArgs;
    /**
     * Code: 394857004
     */
    MaternalGrandFather: CodingArgs;
    /**
     * Code: 394858009
     */
    PaternalGrandMother: CodingArgs;
    /**
     * Code: 394859001
     */
    MaternalGrandMother: CodingArgs;
    /**
     * Code: 394860006
     */
    DistantRelativePerson: CodingArgs;
    /**
     * Code: 394861005
     */
    GreatUncle: CodingArgs;
    /**
     * Code: 394862003
     */
    GreatAunt: CodingArgs;
    /**
     * Code: 394863008
     */
    NonFamilyMemberPerson: CodingArgs;
    /**
     * Code: 394921008
     */
    CohabiteePerson: CodingArgs;
    /**
     * Code: 39677007
     */
    InternalMedicineSpecialist: CodingArgs;
    /**
     * Code: 397897005
     */
    ParamedicOccupation: CodingArgs;
    /**
     * Code: 397903001
     */
    StaffGradeObstetricianOccupation: CodingArgs;
    /**
     * Code: 397908005
     */
    StaffGradePractitionerOccupation: CodingArgs;
    /**
     * Code: 3981000175106
     */
    NurseComplexCaseManager: CodingArgs;
    /**
     * Code: 398130009
     */
    MedicalStudentOccupation: CodingArgs;
    /**
     * Code: 398238009
     */
    ActingObstetricRegistrarOccupation: CodingArgs;
    /**
     * Code: 40127002
     */
    DietitianGeneral: CodingArgs;
    /**
     * Code: 40204001
     */
    Hematologist: CodingArgs;
    /**
     * Code: 404940000
     */
    PhysiotherapistTechnicalInstructorOccupation: CodingArgs;
    /**
     * Code: 405277009
     */
    ResidentPhysicianOccupation: CodingArgs;
    /**
     * Code: 405278004
     */
    CertifiedRegisteredNurseAnesthetistOccupation: CodingArgs;
    /**
     * Code: 405279007
     */
    AttendingPhysicianOccupation: CodingArgs;
    /**
     * Code: 405623001
     */
    AssignedPractitionerOccupation: CodingArgs;
    /**
     * Code: 405684005
     */
    ProfessionalInitiatingSurgicalCase: CodingArgs;
    /**
     * Code: 405685006
     */
    ProfessionalProvidingStaffReliefDuringSurgicalProcedure: CodingArgs;
    /**
     * Code: 40570005
     */
    Interpreter: CodingArgs;
    /**
     * Code: 40683002
     */
    Parent: CodingArgs;
    /**
     * Code: 407542009
     */
    InformalCarer: CodingArgs;
    /**
     * Code: 407543004
     */
    PrimaryCarer: CodingArgs;
    /**
     * Code: 408798009
     */
    ConsultantPediatricianOccupation: CodingArgs;
    /**
     * Code: 408799001
     */
    ConsultantNeonatologistOccupation: CodingArgs;
    /**
     * Code: 409974004
     */
    HealthEducatorOccupation: CodingArgs;
    /**
     * Code: 409975003
     */
    CertifiedHealthEducationSpecialistOccupation: CodingArgs;
    /**
     * Code: 41057000
     */
    SurrogateSon: CodingArgs;
    /**
     * Code: 410597007
     */
    PersonCategorizedByReligiousAffiliationPerson: CodingArgs;
    /**
     * Code: 410598002
     */
    PersonCategorizedByAgePerson: CodingArgs;
    /**
     * Code: 410599005
     */
    MinorPerson: CodingArgs;
    /**
     * Code: 410600008
     */
    PreTeenPerson: CodingArgs;
    /**
     * Code: 410601007
     */
    ChildhoodAgePersonPerson: CodingArgs;
    /**
     * Code: 410602000
     */
    PreschoolChildPerson: CodingArgs;
    /**
     * Code: 410603005
     */
    PersonInTheLegalEnvironmentPerson: CodingArgs;
    /**
     * Code: 410604004
     */
    SubjectOfRecordPerson: CodingArgs;
    /**
     * Code: 413327003
     */
    StudentInFullTimeEducationOccupation: CodingArgs;
    /**
     * Code: 413854007
     */
    CirculatingNurseOccupation: CodingArgs;
    /**
     * Code: 414043009
     */
    DomesticPartnerPerson: CodingArgs;
    /**
     * Code: 415075003
     */
    PerioperativeNurseOccupation: CodingArgs;
    /**
     * Code: 415506007
     */
    ScrubNurseOccupation: CodingArgs;
    /**
     * Code: 416034003
     */
    PrimaryScreenerPerson: CodingArgs;
    /**
     * Code: 416035002
     */
    SecondaryScreenerPerson: CodingArgs;
    /**
     * Code: 416160000
     */
    FellowOfAmericanAcademyOfOsteopathyOccupation: CodingArgs;
    /**
     * Code: 4162009
     */
    DentalAssistant: CodingArgs;
    /**
     * Code: 416625007
     */
    FamilyReunionImmigrantPerson: CodingArgs;
    /**
     * Code: 41672002
     */
    RespiratoryDiseaseSpecialist: CodingArgs;
    /**
     * Code: 416800000
     */
    InpatientPerson: CodingArgs;
    /**
     * Code: 41795004
     */
    LegalSon: CodingArgs;
    /**
     * Code: 41904004
     */
    MedicalXRayTechnician: CodingArgs;
    /**
     * Code: 419358007
     */
    SubjectOfRecordOrOtherProviderOfHistoryPerson: CodingArgs;
    /**
     * Code: 41953004
     */
    AdoptiveParent: CodingArgs;
    /**
     * Code: 420058008
     */
    ProviderOfHistoryOtherThanSubjectPerson: CodingArgs;
    /**
     * Code: 420158005
     */
    PerformerOfMethodPerson: CodingArgs;
    /**
     * Code: 420409002
     */
    OculoplasticSurgeonOccupation: CodingArgs;
    /**
     * Code: 420678001
     */
    RetinalSurgeonOccupation: CodingArgs;
    /**
     * Code: 421841007
     */
    AdmittingPhysicianOccupation: CodingArgs;
    /**
     * Code: 422140007
     */
    MedicalOphthalmologistOccupation: CodingArgs;
    /**
     * Code: 422234006
     */
    OphthalmologistOccupation: CodingArgs;
    /**
     * Code: 427568008
     */
    NeighborPerson: CodingArgs;
    /**
     * Code: 427729003
     */
    ElimPentecostalistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 427754003
     */
    LiberalJewFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 427755002
     */
    LutheranFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 427874000
     */
    CongregationalistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 427950002
     */
    HarediJewFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 427963008
     */
    AdvaitinHinduFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 427981006
     */
    ZenBuddhistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428024001
     */
    ClinicalTrialParticipantPerson: CodingArgs;
    /**
     * Code: 428315004
     */
    AnabaptistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428347009
     */
    AryaSamajHinduFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428373004
     */
    CopticOrthodoxFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428376007
     */
    EasternCatholicFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428378008
     */
    EthiopianOrthodoxTewahedoFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428407001
     */
    TheravadaBuddhistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428408006
     */
    WiccanFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428410008
     */
    ShaktiHinduFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428496003
     */
    TibetanBuddhistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428503004
     */
    OrthodoxChristianFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428504005
     */
    ChristianSpiritualistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428506007
     */
    DruidFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428620006
     */
    SmartaHinduFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428666001
     */
    NichirenBuddhistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428792000
     */
    PersonExposedToDiseasePerson: CodingArgs;
    /**
     * Code: 428801007
     */
    IsmailiMuslimFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428815009
     */
    AhmadiFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428816005
     */
    ArmenianCatholicFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428820009
     */
    PureLandBuddhistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 428821008
     */
    SeventhDayAdventistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429158002
     */
    GreekOrthodoxFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429171004
     */
    SpiritualistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429379008
     */
    ShivaHinduFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429509008
     */
    ReformJewFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429511004
     */
    VaishnavaHinduFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429527006
     */
    NewKadampaTraditionBuddhistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429533002
     */
    MahayanaBuddhistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429534008
     */
    MasortiJewFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429539003
     */
    CalvinistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429543004
     */
    TaoistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429544005
     */
    RussianOrthodoxFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429545006
     */
    SanatanaDharmaFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429547003
     */
    ShintoFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429577009
     */
    PatientAdvocatePerson: CodingArgs;
    /**
     * Code: 429644000
     */
    OrthodoxJewFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429708003
     */
    UnitarianFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429732005
     */
    BahaQuoteIFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429787006
     */
    JainFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 429790000
     */
    ZoroastrianFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 430098004
     */
    DonorForIntestineTransplantPerson: CodingArgs;
    /**
     * Code: 430101000
     */
    WholeBloodDonorPerson: CodingArgs;
    /**
     * Code: 430792005
     */
    StemCellDonorPerson: CodingArgs;
    /**
     * Code: 430882007
     */
    HumanOocyteDonorPerson: CodingArgs;
    /**
     * Code: 431549007
     */
    FemaleChildPerson: CodingArgs;
    /**
     * Code: 432100008
     */
    HealthCoachOccupation: CodingArgs;
    /**
     * Code: 433152004
     */
    MaleChildPerson: CodingArgs;
    /**
     * Code: 433475001
     */
    HumanOocyteDonorAge35AndOlderPerson: CodingArgs;
    /**
     * Code: 43702002
     */
    OccupationalHealthNurse: CodingArgs;
    /**
     * Code: 438347000
     */
    PersonCategorizedByAffiliationWithBeliefSystemPerson: CodingArgs;
    /**
     * Code: 441463002
     */
    SpermDonor: CodingArgs;
    /**
     * Code: 441465009
     */
    StrangerIsSpermDonorForArtificialInsemination: CodingArgs;
    /**
     * Code: 441468006
     */
    UnrelatedKnownSpermDonorForArtificialInsemination: CodingArgs;
    /**
     * Code: 44181008
     */
    GrandDaughter: CodingArgs;
    /**
     * Code: 442031000124102
     */
    MaternalUnclePerson: CodingArgs;
    /**
     * Code: 442041000124107
     */
    PaternalUnclePerson: CodingArgs;
    /**
     * Code: 442867008
     */
    RespiratoryTherapistOccupation: CodingArgs;
    /**
     * Code: 443090005
     */
    PodiatricSurgeonOccupation: CodingArgs;
    /**
     * Code: 444000
     */
    LegalSibling: CodingArgs;
    /**
     * Code: 444018008
     */
    PersonWithCharacteristicRelatedToSubjectOfRecordPerson: CodingArgs;
    /**
     * Code: 444052006
     */
    SpouseOfSubjectPerson: CodingArgs;
    /**
     * Code: 444053001
     */
    HusbandOfSubjectPerson: CodingArgs;
    /**
     * Code: 444054007
     */
    WifeOfSubjectPerson: CodingArgs;
    /**
     * Code: 444055008
     */
    UncleOfSubjectPerson: CodingArgs;
    /**
     * Code: 444145006
     */
    PartnerInRelationshipWithSubjectPerson: CodingArgs;
    /**
     * Code: 444146007
     */
    BoyfriendOfSubjectPerson: CodingArgs;
    /**
     * Code: 444147003
     */
    GirlfriendOfSubjectPerson: CodingArgs;
    /**
     * Code: 444148008
     */
    PersonInFamilyOfSubjectPerson: CodingArgs;
    /**
     * Code: 444168002
     */
    HomemakerPerson: CodingArgs;
    /**
     * Code: 444169005
     */
    HouseHusbandPerson: CodingArgs;
    /**
     * Code: 444191003
     */
    AuntOfSubjectPerson: CodingArgs;
    /**
     * Code: 444192005
     */
    ChildOfSubjectPerson: CodingArgs;
    /**
     * Code: 444193000
     */
    FirstDegreeBloodRelativeOfSubjectPerson: CodingArgs;
    /**
     * Code: 444194006
     */
    DaughterOfSubjectPerson: CodingArgs;
    /**
     * Code: 444199001
     */
    FriendOfSubjectPerson: CodingArgs;
    /**
     * Code: 444210007
     */
    CohabiteeInRelationshipWithSubjectPerson: CodingArgs;
    /**
     * Code: 444211006
     */
    CommonLawHusbandOfSubjectPerson: CodingArgs;
    /**
     * Code: 444212004
     */
    CommonLawWifeOfSubjectPerson: CodingArgs;
    /**
     * Code: 444213009
     */
    DomesticPartnerOfSubjectPerson: CodingArgs;
    /**
     * Code: 444241008
     */
    SonOfSubjectPerson: CodingArgs;
    /**
     * Code: 444242001
     */
    GrandparentOfSubjectPerson: CodingArgs;
    /**
     * Code: 444243006
     */
    MaternalGrandfatherOfSubjectPerson: CodingArgs;
    /**
     * Code: 444244000
     */
    MaternalGrandmotherOfSubjectPerson: CodingArgs;
    /**
     * Code: 444278006
     */
    FianceOfSubjectPerson: CodingArgs;
    /**
     * Code: 444279003
     */
    FemaleFianceOfSubjectPerson: CodingArgs;
    /**
     * Code: 444280000
     */
    MaleFianceOfSubjectPerson: CodingArgs;
    /**
     * Code: 444292000
     */
    PaternalGrandfatherOfSubjectPerson: CodingArgs;
    /**
     * Code: 444293005
     */
    PaternalGrandmotherOfSubjectPerson: CodingArgs;
    /**
     * Code: 444294004
     */
    ParentOfSubjectPerson: CodingArgs;
    /**
     * Code: 444295003
     */
    FatherOfSubjectPerson: CodingArgs;
    /**
     * Code: 444301002
     */
    MotherOfSubjectPerson: CodingArgs;
    /**
     * Code: 444302009
     */
    SiblingOfSubjectPerson: CodingArgs;
    /**
     * Code: 444303004
     */
    BrotherOfSubjectPerson: CodingArgs;
    /**
     * Code: 444304005
     */
    SisterOfSubjectPerson: CodingArgs;
    /**
     * Code: 444464007
     */
    RecipientOfBiologicalMaterialFromSubjectPerson: CodingArgs;
    /**
     * Code: 444870008
     */
    ApostolicPentecostalistFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 444912007
     */
    HypnotherapistOccupation: CodingArgs;
    /**
     * Code: 445313000
     */
    AsthmaNurseSpecialistOccupation: CodingArgs;
    /**
     * Code: 445451001
     */
    NurseCaseManagerOccupation: CodingArgs;
    /**
     * Code: 446050000
     */
    PrimaryCarePhysicianOccupation: CodingArgs;
    /**
     * Code: 44652006
     */
    PharmaceuticalAssistant: CodingArgs;
    /**
     * Code: 446654005
     */
    RefugeePerson: CodingArgs;
    /**
     * Code: 446701002
     */
    AddictionMedicineSpecialistOccupation: CodingArgs;
    /**
     * Code: 449161006
     */
    PhysicianAssistantOccupation: CodingArgs;
    /**
     * Code: 450044741000087104
     */
    AcupuncturistOccupation: CodingArgs;
    /**
     * Code: 450768005
     */
    InternationalStudentOccupation: CodingArgs;
    /**
     * Code: 45419001
     */
    Masseur: CodingArgs;
    /**
     * Code: 45440000
     */
    Rheumatologist: CodingArgs;
    /**
     * Code: 45544007
     */
    Neurosurgeon: CodingArgs;
    /**
     * Code: 4577005
     */
    FirstCousin: CodingArgs;
    /**
     * Code: 45929001
     */
    HalfBrother: CodingArgs;
    /**
     * Code: 45956004
     */
    Sanitarian: CodingArgs;
    /**
     * Code: 46255001
     */
    Pharmacist: CodingArgs;
    /**
     * Code: 46363003
     */
    StepSister: CodingArgs;
    /**
     * Code: 471000122100
     */
    MultiOrganDonorPerson: CodingArgs;
    /**
     * Code: 471302004
     */
    GovernmentMidwifeOccupation: CodingArgs;
    /**
     * Code: 47801002
     */
    MaleCousin: CodingArgs;
    /**
     * Code: 48385004
     */
    Acquaintance: CodingArgs;
    /**
     * Code: 48740002
     */
    Philologist: CodingArgs;
    /**
     * Code: 49203003
     */
    DispensingOptician: CodingArgs;
    /**
     * Code: 49993003
     */
    OralSurgeon: CodingArgs;
    /**
     * Code: 50058005
     */
    IdenticalTwinSister: CodingArgs;
    /**
     * Code: 50149000
     */
    Endodontist: CodingArgs;
    /**
     * Code: 50261002
     */
    GreatGrandFather: CodingArgs;
    /**
     * Code: 51616000
     */
    SephardicJew: CodingArgs;
    /**
     * Code: 5171000124108
     */
    FatherInLawPerson: CodingArgs;
    /**
     * Code: 5275007
     */
    AuxiliaryNurse: CodingArgs;
    /**
     * Code: 53201003
     */
    OlderSister: CodingArgs;
    /**
     * Code: 54056000
     */
    Trustee: CodingArgs;
    /**
     * Code: 54503009
     */
    FaithHealer: CodingArgs;
    /**
     * Code: 55538000
     */
    Cousin: CodingArgs;
    /**
     * Code: 56397003
     */
    Neurologist: CodingArgs;
    /**
     * Code: 56466003
     */
    PublicHealthPhysician: CodingArgs;
    /**
     * Code: 56542007
     */
    MedicalRecordAdministrator: CodingArgs;
    /**
     * Code: 56545009
     */
    CardiovascularSurgeon: CodingArgs;
    /**
     * Code: 57654006
     */
    FixedProsthodontist: CodingArgs;
    /**
     * Code: 58293006
     */
    FosterSister: CodingArgs;
    /**
     * Code: 58626002
     */
    LegalGuardian: CodingArgs;
    /**
     * Code: 59058001
     */
    GeneralPhysician: CodingArgs;
    /**
     * Code: 59169001
     */
    OrthopedicTechnician: CodingArgs;
    /**
     * Code: 59317003
     */
    DentalProsthesisMakerAndRepairer: CodingArgs;
    /**
     * Code: 59944000
     */
    Psychologist: CodingArgs;
    /**
     * Code: 60008001
     */
    PublicHealthNutritionist: CodingArgs;
    /**
     * Code: 60614009
     */
    NaturalBrother: CodingArgs;
    /**
     * Code: 609005
     */
    AdoptiveFather: CodingArgs;
    /**
     * Code: 61207006
     */
    MedicalPathologist: CodingArgs;
    /**
     * Code: 61246008
     */
    LaboratoryMedicineSpecialist: CodingArgs;
    /**
     * Code: 61345009
     */
    Otorhinolaryngologist: CodingArgs;
    /**
     * Code: 61894003
     */
    Endocrinologist: CodingArgs;
    /**
     * Code: 62090008
     */
    LegalMother: CodingArgs;
    /**
     * Code: 62247001
     */
    FamilyMedicineSpecialist: CodingArgs;
    /**
     * Code: 62296006
     */
    NaturalGrandFather: CodingArgs;
    /**
     * Code: 63098009
     */
    ClinicalImmunologist: CodingArgs;
    /**
     * Code: 64988008
     */
    SunniMuslim: CodingArgs;
    /**
     * Code: 65412001
     */
    StepMother: CodingArgs;
    /**
     * Code: 65616008
     */
    Son: CodingArgs;
    /**
     * Code: 65656005
     */
    NaturalMother: CodingArgs;
    /**
     * Code: 65853000
     */
    Student: CodingArgs;
    /**
     * Code: 66089001
     */
    Daughter: CodingArgs;
    /**
     * Code: 66476003
     */
    OralPathologist: CodingArgs;
    /**
     * Code: 6676009
     */
    YoungestDaughter: CodingArgs;
    /**
     * Code: 66839005
     */
    Father: CodingArgs;
    /**
     * Code: 66862007
     */
    Radiologist: CodingArgs;
    /**
     * Code: 67147004
     */
    LegalFather: CodingArgs;
    /**
     * Code: 67822003
     */
    Child: CodingArgs;
    /**
     * Code: 68021009
     */
    GreatGreatGrandParent: CodingArgs;
    /**
     * Code: 6816002
     */
    SpecializedNurse: CodingArgs;
    /**
     * Code: 6868009
     */
    HospitalAdministrator: CodingArgs;
    /**
     * Code: 68867008
     */
    PublicHealthDentist: CodingArgs;
    /**
     * Code: 68950000
     */
    Prosthodontist: CodingArgs;
    /**
     * Code: 69280009
     */
    SpecializedPhysician: CodingArgs;
    /**
     * Code: 699110007
     */
    SecondDegreeBloodRelativePerson: CodingArgs;
    /**
     * Code: 699111006
     */
    SecondDegreeBloodRelativeOfSubjectPerson: CodingArgs;
    /**
     * Code: 70578009
     */
    GrandSon: CodingArgs;
    /**
     * Code: 70862002
     */
    ContactPerson: CodingArgs;
    /**
     * Code: 70924004
     */
    Brother: CodingArgs;
    /**
     * Code: 713176007
     */
    CadaverDonorForLungTransplant: CodingArgs;
    /**
     * Code: 713177003
     */
    CadaverDonorForHeartTransplant: CodingArgs;
    /**
     * Code: 713178008
     */
    CadaverDonorForLiverTransplant: CodingArgs;
    /**
     * Code: 713179000
     */
    CadaverDonorForCornealTransplantPerson: CodingArgs;
    /**
     * Code: 713183000
     */
    CadaverDonorForKidneyTransplant: CodingArgs;
    /**
     * Code: 713184006
     */
    BloodProductDonor: CodingArgs;
    /**
     * Code: 713352007
     */
    SkinDonor: CodingArgs;
    /**
     * Code: 713353002
     */
    LiveRelatedLiverDonor: CodingArgs;
    /**
     * Code: 713369009
     */
    LiveRelatedKidneyDonor: CodingArgs;
    /**
     * Code: 715167002
     */
    OpenEpiscopalChurchFollowerOfReligionPerson: CodingArgs;
    /**
     * Code: 71838004
     */
    Gastroenterologist: CodingArgs;
    /**
     * Code: 718723009
     */
    LiveDonorOfKidneyPerson: CodingArgs;
    /**
     * Code: 719759007
     */
    MaternalCousinPerson: CodingArgs;
    /**
     * Code: 719760002
     */
    PaternalCousinPerson: CodingArgs;
    /**
     * Code: 719762005
     */
    PaternalHalfBrotherPerson: CodingArgs;
    /**
     * Code: 719764006
     */
    PaternalHalfSister: CodingArgs;
    /**
     * Code: 719765007
     */
    MaternalHalfSisterPerson: CodingArgs;
    /**
     * Code: 719766008
     */
    MaternalHalfBrotherPerson: CodingArgs;
    /**
     * Code: 719768009
     */
    PaternalGreatGrandmotherPerson: CodingArgs;
    /**
     * Code: 719769001
     */
    MaternalGreatGrandmotherPerson: CodingArgs;
    /**
     * Code: 719770000
     */
    PaternalGreatGrandfatherPerson: CodingArgs;
    /**
     * Code: 719771001
     */
    MaternalGreatGrandfatherPerson: CodingArgs;
    /**
     * Code: 72012000
     */
    GreatGrandChild: CodingArgs;
    /**
     * Code: 720503005
     */
    SleepMedicineSpecialistOccupation: CodingArgs;
    /**
     * Code: 721936008
     */
    OccupationMedicineSpecialistOccupation: CodingArgs;
    /**
     * Code: 721937004
     */
    PreventiveMedicineSpecialistOccupation: CodingArgs;
    /**
     * Code: 721938009
     */
    TropicalMedicineSpecialistOccupation: CodingArgs;
    /**
     * Code: 721939001
     */
    VascularMedicineSpecialist: CodingArgs;
    /**
     * Code: 721940004
     */
    LegalMedicineSpecialistOccupation: CodingArgs;
    /**
     * Code: 721941000
     */
    HealthPsychologistOccupation: CodingArgs;
    /**
     * Code: 721942007
     */
    CardiovascularPerfusionistOccupation: CodingArgs;
    /**
     * Code: 721943002
     */
    ClinicalImmunologyAndAllergySpecialistOccupation: CodingArgs;
    /**
     * Code: 72705000
     */
    Mother: CodingArgs;
    /**
     * Code: 73265009
     */
    NursingAid: CodingArgs;
    /**
     * Code: 734293001
     */
    ClinicalPharmacistOccupation: CodingArgs;
    /**
     * Code: 734294007
     */
    PharmacistPrescriberOccupation: CodingArgs;
    /**
     * Code: 736454006
     */
    MaternalAuntPerson: CodingArgs;
    /**
     * Code: 736455007
     */
    PaternalAuntPerson: CodingArgs;
    /**
     * Code: 736456008
     */
    MaternalFirstCousinPerson: CodingArgs;
    /**
     * Code: 73678001
     */
    NaturalSister: CodingArgs;
    /**
     * Code: 739683002
     */
    InfantOfSubjectPerson: CodingArgs;
    /**
     * Code: 74128007
     */
    StepParent: CodingArgs;
    /**
     * Code: 74489007
     */
    YoungerChild: CodingArgs;
    /**
     * Code: 75226009
     */
    NaturalChild: CodingArgs;
    /**
     * Code: 75271001
     */
    ProfessionalMidwife: CodingArgs;
    /**
     * Code: 75615008
     */
    SurrogateFather: CodingArgs;
    /**
     * Code: 76022008
     */
    AdoptiveSister: CodingArgs;
    /**
     * Code: 76087000
     */
    StepBrother: CodingArgs;
    /**
     * Code: 76166008
     */
    PracticalAidPharmacy: CodingArgs;
    /**
     * Code: 76231001
     */
    Osteopath: CodingArgs;
    /**
     * Code: 763292005
     */
    RadiationOncologistOccupation: CodingArgs;
    /**
     * Code: 767308003
     */
    SecondDegreeFemaleBloodRelativeOfSubject: CodingArgs;
    /**
     * Code: 768730001
     */
    HomeHealthAideOccupation: CodingArgs;
    /**
     * Code: 768731002
     */
    HomeHelper: CodingArgs;
    /**
     * Code: 768732009
     */
    SchoolHealthEducator: CodingArgs;
    /**
     * Code: 768819009
     */
    MedicallyResponsibleInvestigatorOccupation: CodingArgs;
    /**
     * Code: 768825008
     */
    DoulaOccupation: CodingArgs;
    /**
     * Code: 768826009
     */
    CrisisCounselorOccupation: CodingArgs;
    /**
     * Code: 768827000
     */
    Nutritionist: CodingArgs;
    /**
     * Code: 768828005
     */
    Epidemiologist: CodingArgs;
    /**
     * Code: 768829002
     */
    CommunityDieticianOccupation: CodingArgs;
    /**
     * Code: 768832004
     */
    CaseManagerOccupation: CodingArgs;
    /**
     * Code: 768833009
     */
    DischargingPhysician: CodingArgs;
    /**
     * Code: 768834003
     */
    DiseaseManagerOccupation: CodingArgs;
    /**
     * Code: 768836001
     */
    PatientNavigator: CodingArgs;
    /**
     * Code: 768837005
     */
    HospitalistOccupation: CodingArgs;
    /**
     * Code: 768839008
     */
    ConsultantOccupation: CodingArgs;
    /**
     * Code: 76899008
     */
    InfectiousDiseaseSpecialist: CodingArgs;
    /**
     * Code: 78194006
     */
    IdenticalTwinBrother: CodingArgs;
    /**
     * Code: 78272007
     */
    NaturalGrandParent: CodingArgs;
    /**
     * Code: 78652007
     */
    GreatGrandMother: CodingArgs;
    /**
     * Code: 78703002
     */
    GeneralSurgeon: CodingArgs;
    /**
     * Code: 78729002
     */
    DiagnosticRadiologist: CodingArgs;
    /**
     * Code: 78872000
     */
    OrphanMale: CodingArgs;
    /**
     * Code: 789543004
     */
    Ultrasonographer: CodingArgs;
    /**
     * Code: 79508001
     */
    AdoptiveSibling: CodingArgs;
    /**
     * Code: 79756005
     */
    Boyfriend: CodingArgs;
    /**
     * Code: 79898004
     */
    AuxiliaryMidwife: CodingArgs;
    /**
     * Code: 80386000
     */
    GreatGreatGrandFather: CodingArgs;
    /**
     * Code: 80409005
     */
    Translator: CodingArgs;
    /**
     * Code: 80546007
     */
    OccupationalTherapist: CodingArgs;
    /**
     * Code: 80584001
     */
    Psychiatrist: CodingArgs;
    /**
     * Code: 80587008
     */
    JehovahQuoteSWitness: CodingArgs;
    /**
     * Code: 80933006
     */
    NuclearMedicineSpecialist: CodingArgs;
    /**
     * Code: 81173009
     */
    OnlySon: CodingArgs;
    /**
     * Code: 81276006
     */
    TwinBrother: CodingArgs;
    /**
     * Code: 81464008
     */
    ClinicalPathologist: CodingArgs;
    /**
     * Code: 81467001
     */
    FraternalTwinBrother: CodingArgs;
    /**
     * Code: 81706006
     */
    AshkenaziJew: CodingArgs;
    /**
     * Code: 82101005
     */
    NaturalSibling: CodingArgs;
    /**
     * Code: 82296001
     */
    Pediatrician: CodingArgs;
    /**
     * Code: 83273008
     */
    AnatomicPathologist: CodingArgs;
    /**
     * Code: 83408003
     */
    WorkingParent: CodingArgs;
    /**
     * Code: 83420006
     */
    NaturalDaughter: CodingArgs;
    /**
     * Code: 83559000
     */
    Nephew: CodingArgs;
    /**
     * Code: 83685006
     */
    Gynecologist: CodingArgs;
    /**
     * Code: 840583002
     */
    AlliedHealthAssistantOccupation: CodingArgs;
    /**
     * Code: 840584008
     */
    AlliedHealthStudent: CodingArgs;
    /**
     * Code: 84390006
     */
    Girlfriend: CodingArgs;
    /**
     * Code: 8458002
     */
    FosterFather: CodingArgs;
    /**
     * Code: 85058002
     */
    AdoptiveGrandfather: CodingArgs;
    /**
     * Code: 85411004
     */
    YoungerBrother: CodingArgs;
    /**
     * Code: 85683001
     */
    SingleFather: CodingArgs;
    /**
     * Code: 85733003
     */
    GeneralPathologist: CodingArgs;
    /**
     * Code: 86372007
     */
    GrandChild: CodingArgs;
    /**
     * Code: 8674003
     */
    StepSon: CodingArgs;
    /**
     * Code: 86764008
     */
    StepChild: CodingArgs;
    /**
     * Code: 8724009
     */
    PlasticSurgeon: CodingArgs;
    /**
     * Code: 88189002
     */
    Anesthesiologist: CodingArgs;
    /**
     * Code: 88510002
     */
    StepSibling: CodingArgs;
    /**
     * Code: 89681006
     */
    YoungestSon: CodingArgs;
    /**
     * Code: 90201008
     */
    Pedodontist: CodingArgs;
    /**
     * Code: 90655003
     */
    GeriatricsSpecialist: CodingArgs;
    /**
     * Code: 90921004
     */
    FosterParent: CodingArgs;
    /**
     * Code: 9306000
     */
    LegalParent: CodingArgs;
    /**
     * Code: 9947008
     */
    NaturalFather: CodingArgs;
};
/**
 * Roles of participants that may be included in a care team.  Defined as: Is a Person, Healthcare professional (occupation) or Healthcare related organization (qualifier value).
 */
export declare const CareteamParticipantRoleCodings: CareteamParticipantRoleCodingType;
//# sourceMappingURL=CareteamParticipantRoleCodings.d.ts.map