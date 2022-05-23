import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Schedule type.
 */
export interface ScheduleArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Schedule" | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor: fhir.ReferenceArgs[] | null;
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.PeriodArgs | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * A container for slots of time that may be available for booking appointments.
 */
export declare class Schedule extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Schedule";
    /**
     * External Ids for this item.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory: fhir.CodeableConcept[];
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType: fhir.CodeableConcept[];
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor: fhir.Reference[];
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.Period | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for Schedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ScheduleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for specialty (Schedule.specialty)
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
        /**
         * A container for slots of time that may be available for booking appointments.
         */
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
//# sourceMappingURL=Schedule.d.ts.map