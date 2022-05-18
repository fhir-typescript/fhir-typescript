import { Coding } from '../fhir/Coding.js';
/**
 * A list of all the request resource types defined in this version of the FHIR specification.
 */
export declare const RequestResourceTypesCodings: {
    /**
     * Appointment: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    readonly Appointment: Coding;
    /**
     * AppointmentResponse: A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
     */
    readonly AppointmentResponse: Coding;
    /**
     * CarePlan: Healthcare plan for patient or group.
     */
    readonly CarePlan: Coding;
    /**
     * Claim: Claim, Pre-determination or Pre-authorization.
     */
    readonly Claim: Coding;
    /**
     * CommunicationRequest: A request for information to be sent to a receiver.
     */
    readonly CommunicationRequest: Coding;
    /**
     * Contract: Legal Agreement.
     */
    readonly Contract: Coding;
    /**
     * DeviceRequest: Medical device request.
     */
    readonly DeviceRequest: Coding;
    /**
     * EnrollmentRequest: Enrollment request.
     */
    readonly EnrollmentRequest: Coding;
    /**
     * ImmunizationRecommendation: Guidance or advice relating to an immunization.
     */
    readonly ImmunizationRecommendation: Coding;
    /**
     * MedicationRequest: Ordering of medication for patient or group.
     */
    readonly MedicationRequest: Coding;
    /**
     * NutritionOrder: Diet, formula or nutritional supplement request.
     */
    readonly NutritionOrder: Coding;
    /**
     * ServiceRequest: A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
     */
    readonly ServiceRequest: Coding;
    /**
     * SupplyRequest: Request for a medication, substance or device.
     */
    readonly SupplyRequest: Coding;
    /**
     * Task: A task to be performed.
     */
    readonly Task: Coding;
    /**
     * VisionPrescription: Prescription for vision correction products for a patient.
     */
    readonly VisionPrescription: Coding;
};
/**
 * A list of all the request resource types defined in this version of the FHIR specification.
 */
export declare type RequestResourceTypesCodingType = typeof RequestResourceTypesCodings;
//# sourceMappingURL=RequestResourceTypesCodings.d.ts.map