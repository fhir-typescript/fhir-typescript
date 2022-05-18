/**
 * A list of all the request resource types defined in this version of the FHIR specification.
 */
export declare const RequestResourceTypesCodes: {
    /**
     * Appointment: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    readonly Appointment: "Appointment";
    /**
     * AppointmentResponse: A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
     */
    readonly AppointmentResponse: "AppointmentResponse";
    /**
     * CarePlan: Healthcare plan for patient or group.
     */
    readonly CarePlan: "CarePlan";
    /**
     * Claim: Claim, Pre-determination or Pre-authorization.
     */
    readonly Claim: "Claim";
    /**
     * CommunicationRequest: A request for information to be sent to a receiver.
     */
    readonly CommunicationRequest: "CommunicationRequest";
    /**
     * Contract: Legal Agreement.
     */
    readonly Contract: "Contract";
    /**
     * DeviceRequest: Medical device request.
     */
    readonly DeviceRequest: "DeviceRequest";
    /**
     * EnrollmentRequest: Enrollment request.
     */
    readonly EnrollmentRequest: "EnrollmentRequest";
    /**
     * ImmunizationRecommendation: Guidance or advice relating to an immunization.
     */
    readonly ImmunizationRecommendation: "ImmunizationRecommendation";
    /**
     * MedicationRequest: Ordering of medication for patient or group.
     */
    readonly MedicationRequest: "MedicationRequest";
    /**
     * NutritionOrder: Diet, formula or nutritional supplement request.
     */
    readonly NutritionOrder: "NutritionOrder";
    /**
     * ServiceRequest: A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
     */
    readonly ServiceRequest: "ServiceRequest";
    /**
     * SupplyRequest: Request for a medication, substance or device.
     */
    readonly SupplyRequest: "SupplyRequest";
    /**
     * Task: A task to be performed.
     */
    readonly Task: "Task";
    /**
     * VisionPrescription: Prescription for vision correction products for a patient.
     */
    readonly VisionPrescription: "VisionPrescription";
};
/**
 * A list of all the request resource types defined in this version of the FHIR specification.
 */
export declare type RequestResourceTypesCodeType = typeof RequestResourceTypesCodes[keyof typeof RequestResourceTypesCodes];
//# sourceMappingURL=RequestResourceTypesCodes.d.ts.map