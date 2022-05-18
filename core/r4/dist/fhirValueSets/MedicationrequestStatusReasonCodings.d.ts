import { Coding } from '../fhir/Coding.js';
/**
 * MedicationRequest Status Reason Codes
 */
export declare const MedicationrequestStatusReasonCodings: {
    /**
     * altchoice: This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.
     */
    readonly TryAnotherTreatmentFirst: Coding;
    /**
     * clarif: Clarification is required before the order can be acted upon.
     */
    readonly PrescriptionRequiresClarification: Coding;
    /**
     * drughigh: The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.
     */
    readonly DrugLevelTooHigh: Coding;
    /**
     * hospadm: The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    readonly AdmissionToHospital: Coding;
    /**
     * labint: The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    readonly LabInterferenceIssues: Coding;
    /**
     * non-avail: Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    readonly PatientNotAvailable: Coding;
    /**
     * preg: The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    readonly ParentIsPregnantBreastFeeding: Coding;
    /**
     * salg: The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    readonly Allergy: Coding;
    /**
     * sddi: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    readonly DrugInteractsWithAnotherDrug: Coding;
    /**
     * sdupther: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    readonly DuplicateTherapy: Coding;
    /**
     * sintol: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    readonly SuspectedIntolerance: Coding;
    /**
     * surg: The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    readonly PatientScheduledForSurgery: Coding;
    /**
     * washout: The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    readonly WaitingForOldDrugToWashOut: Coding;
};
/**
 * MedicationRequest Status Reason Codes
 */
export declare type MedicationrequestStatusReasonCodingType = typeof MedicationrequestStatusReasonCodings;
//# sourceMappingURL=MedicationrequestStatusReasonCodings.d.ts.map