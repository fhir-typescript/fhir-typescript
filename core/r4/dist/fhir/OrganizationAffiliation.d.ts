import * as fhir from '../fhir.js';
/**
 * Valid arguments for the OrganizationAffiliation type.
 */
export interface OrganizationAffiliationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation" | undefined;
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhir.ReferenceArgs[] | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhir.ReferenceArgs[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhir.ReferenceArgs[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export declare class OrganizationAffiliation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation";
    /**
     * Business identifiers that are specific to this role.
     */
    identifier: fhir.Identifier[];
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.Reference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.Reference | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network: fhir.Reference[];
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code: fhir.CodeableConcept[];
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * The location(s) at which the role occurs.
     */
    location: fhir.Reference[];
    /**
     * Healthcare services provided through the role.
     */
    healthcareService: fhir.Reference[];
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint: fhir.Reference[];
    /**
     * Default constructor for OrganizationAffiliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OrganizationAffiliationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for specialty (OrganizationAffiliation.specialty)
     */
    static get specialtyPreferredCodings(): {
        readonly PediatricSurgery: fhir.Coding;
        readonly SurgicalAccidentAndEmergency: fhir.Coding;
        readonly Anesthetics: fhir.Coding;
        readonly AudiologicalMedicine: fhir.Coding;
        readonly Cardiology: fhir.Coding;
        readonly ClinicalGenetics: fhir.Coding;
        readonly CommunityMedicine: fhir.Coding;
        readonly Dermatology: fhir.Coding;
        readonly Endocrinology: fhir.Coding;
        readonly Gastroenterology: fhir.Coding;
        readonly ObstetricsAndGynecology: fhir.Coding;
        readonly Gynecology: fhir.Coding;
        readonly Psychiatry: fhir.Coding;
        readonly PediatricChildAndAdolescentPsychiatry: fhir.Coding;
        readonly Nephrology: fhir.Coding;
        readonly ThoracicMedicine: fhir.Coding;
        readonly Neurology: fhir.Coding;
        readonly ClinicalOncology: fhir.Coding;
        readonly MedicalOncology: fhir.Coding;
        readonly Ophthalmology: fhir.Coding;
        readonly Histopathology: fhir.Coding;
        readonly Immunopathology: fhir.Coding;
        readonly Neuropathology: fhir.Coding;
        readonly ClinicalPharmacology: fhir.Coding;
        readonly ClinicalPhysiology: fhir.Coding;
        readonly Rehabilitation: fhir.Coding;
        readonly SurgeryEarNoseAndThroatSurgery: fhir.Coding;
        readonly SurgeryDentalOralSurgery: fhir.Coding;
        readonly SurgeryDentistryRestorativeDentistry: fhir.Coding;
        readonly PediatricDentistry: fhir.Coding;
        readonly SurgeryDentalOrthodontics: fhir.Coding;
        readonly SurgeryGeneral: fhir.Coding;
        readonly SurgeryNeurosurgery: fhir.Coding;
        readonly SurgeryPlasticSurgery: fhir.Coding;
        readonly Urology: fhir.Coding;
        readonly NuclearMedicine: fhir.Coding;
        readonly SurgicalSpecialtyOTHERNOTLISTED: fhir.Coding;
        readonly MedicalSpecialtyOTHERNOTLISTED: fhir.Coding;
        readonly SurgeryTraumaAndOrthopedics: fhir.Coding;
        readonly GeneralMedicine: fhir.Coding;
        readonly ClinicalHematology: fhir.Coding;
        readonly ClinicalCytogeneticsAndMolecularGenetics: fhir.Coding;
        readonly PalliativeMedicine: fhir.Coding;
        readonly InfectiousDiseases: fhir.Coding;
        readonly GenitoUrinaryMedicine: fhir.Coding;
        readonly ClinicalNeuroPhysiology: fhir.Coding;
        readonly Rheumatology: fhir.Coding;
        readonly GeriatricMedicine: fhir.Coding;
        readonly DentalMedicineSpecialties: fhir.Coding;
        readonly MedicalOphthalmology: fhir.Coding;
        readonly GeneralPractice: fhir.Coding;
        readonly OccupationalMedicine: fhir.Coding;
        readonly PainManagement: fhir.Coding;
        readonly Psychotherapy: fhir.Coding;
        readonly Radiology: fhir.Coding;
        readonly GeneralPathology: fhir.Coding;
        readonly Hematopathology: fhir.Coding;
        readonly PublicHealthMedicine: fhir.Coding;
        readonly SurgeryDentalEndodontics: fhir.Coding;
        readonly GeneralMedicalPractice: fhir.Coding;
        readonly DentalGeneralDentalPractice: fhir.Coding;
        readonly GynecologicalOncology: fhir.Coding;
        readonly RespiteCare: fhir.Coding;
        readonly TropicalMedicine: fhir.Coding;
        readonly SurgeryDentistrySurgical: fhir.Coding;
        readonly SleepStudies: fhir.Coding;
        readonly ClinicalMicrobiology: fhir.Coding;
        readonly RadiologyInterventionalRadiology: fhir.Coding;
        readonly PediatricCardiology: fhir.Coding;
        readonly SurgeryDentalProstheticDentistryProsthodontics: fhir.Coding;
        readonly SurgeryDentalPeriodontalSurgery: fhir.Coding;
        readonly BurnsCare: fhir.Coding;
        readonly SurgeryVascular: fhir.Coding;
        readonly SurgeryColorectalSurgery: fhir.Coding;
        readonly SurgeryDentalOralAndMaxillofacialSurgery: fhir.Coding;
        readonly SurgeryCardiacSurgery: fhir.Coding;
        readonly AdultMentalIllness: fhir.Coding;
        readonly LearningDisability: fhir.Coding;
        readonly SurgeryBreastSurgery: fhir.Coding;
        readonly Obstetrics: fhir.Coding;
        readonly SurgeryCardiothoracicTransplantation: fhir.Coding;
        readonly Hepatology: fhir.Coding;
        readonly SurgeryHepatobiliaryAndPancreaticSurgery: fhir.Coding;
        readonly DiabeticMedicine: fhir.Coding;
        readonly SurgeryBoneAndMarrowTransplantation: fhir.Coding;
        readonly SurgeryTransplantationSurgery: fhir.Coding;
        readonly CriticalCareMedicine: fhir.Coding;
        readonly ClinicalImmunology: fhir.Coding;
        readonly Toxicology: fhir.Coding;
        readonly PreventiveMedicine: fhir.Coding;
        readonly MilitaryMedicine: fhir.Coding;
        readonly DiveMedicine: fhir.Coding;
        readonly OsteopathicManipulativeMedicine: fhir.Coding;
        readonly PediatricOncology: fhir.Coding;
        readonly SurgeryDermatologicSurgery: fhir.Coding;
        readonly PediatricGastroenterology: fhir.Coding;
        readonly PulmonaryMedicine: fhir.Coding;
        readonly PediatricImmunology: fhir.Coding;
        readonly PediatricHematology: fhir.Coding;
        readonly PediatricInfectiousDiseases: fhir.Coding;
        readonly Otolaryngology: fhir.Coding;
        readonly UrologicalOncology: fhir.Coding;
        readonly PediatricPulmonology: fhir.Coding;
        readonly InternalMedicine: fhir.Coding;
        readonly SurgicalOncology: fhir.Coding;
        readonly PediatricNephrology: fhir.Coding;
        readonly PediatricRheumatology: fhir.Coding;
        readonly PediatricEndocrinology: fhir.Coding;
        readonly FamilyPractice: fhir.Coding;
        readonly RadiationOncology: fhir.Coding;
        readonly PediatricOphthalmology: fhir.Coding;
        readonly PediatricSurgeryBoneMarrowTransplantation: fhir.Coding;
        readonly PediatricGenetics: fhir.Coding;
        readonly BloodBankingAndTransfusionMedicine: fhir.Coding;
        readonly OphthalmicSurgery: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=OrganizationAffiliation.d.ts.map