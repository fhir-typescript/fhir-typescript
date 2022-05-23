import * as fhir from '../fhir.js';
import { SlotstatusCodeType } from '../fhirValueSets/SlotstatusCodes.js';
/**
 * Valid arguments for the Slot type.
 */
export interface SlotArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Slot" | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.ReferenceArgs | null;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status: fhir.FhirCode<SlotstatusCodeType> | string | undefined;
    /**
     * Date/Time that the slot is to begin.
     */
    start: fhir.FhirInstant | string | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: fhir.FhirInstant | string | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare class Slot extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Slot";
    /**
     * External Ids for this item.
     */
    identifier: fhir.Identifier[];
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory: fhir.CodeableConcept[];
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType: fhir.CodeableConcept[];
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConcept | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.Reference | null;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status: fhir.FhirCode<SlotstatusCodeType> | null;
    /**
     * Date/Time that the slot is to begin.
     */
    start: fhir.FhirInstant | null;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: fhir.FhirInstant | null;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: fhir.FhirBoolean | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for Slot - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SlotArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for specialty (Slot.specialty)
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
        readonly ThoracicMedicine: fhir.Coding; /**
         * Mapping of this datatype to a FHIR equivalent
         */
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
        readonly SurgeryEarNoseAndThroatSurgery: fhir.Coding; /**
         * Default constructor for Slot - initializes any required elements to null if a value is not provided.
         */
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
        /**
         * Preferred-bound Value Set for appointmentType (Slot.appointmentType)
         */
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
     * Preferred-bound Value Set for appointmentType (Slot.appointmentType)
     */
    static get appointmentTypePreferredCodings(): {
        readonly ARoutineCheckUpSuchAsAnAnnualPhysical: fhir.Coding;
        readonly EmergencyAppointment: fhir.Coding;
        readonly AFollowUpVisitFromAPreviousAppointment: fhir.Coding;
        readonly RoutineAppointmentDefaultIfNotValued: fhir.Coding;
        readonly APreviouslyUnscheduledWalkInVisit: fhir.Coding;
    };
    /**
     * Required-bound Value Set for status (Slot.status)
     */
    static get statusRequiredCodes(): {
        readonly Busy: "busy";
        readonly BusyTentative: "busy-tentative";
        readonly BusyUnavailable: "busy-unavailable";
        readonly EnteredInError: "entered-in-error";
        readonly Free: "free";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Slot.d.ts.map