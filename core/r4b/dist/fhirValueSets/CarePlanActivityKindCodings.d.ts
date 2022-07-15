import { CodingArgs } from '../fhir/Coding.js';
/**
 * Resource types defined as part of FHIR that can be represented as in-line definitions of a care plan activity.
 */
export declare type CarePlanActivityKindCodingType = {
    /**
     * Appointment: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    Appointment: CodingArgs;
    /**
     * CommunicationRequest: A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
     */
    CommunicationRequest: CodingArgs;
    /**
     * DeviceRequest: Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
     */
    DeviceRequest: CodingArgs;
    /**
     * MedicationRequest: An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
     */
    MedicationRequest: CodingArgs;
    /**
     * NutritionOrder: A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
    NutritionOrder: CodingArgs;
    /**
     * ServiceRequest: A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
     */
    ServiceRequest: CodingArgs;
    /**
     * Task: A task to be performed.
     */
    Task: CodingArgs;
    /**
     * VisionPrescription: An authorization for the provision of glasses and/or contact lenses to a patient.
     */
    VisionPrescription: CodingArgs;
};
/**
 * Resource types defined as part of FHIR that can be represented as in-line definitions of a care plan activity.
 */
export declare const CarePlanActivityKindCodings: CarePlanActivityKindCodingType;
//# sourceMappingURL=CarePlanActivityKindCodings.d.ts.map