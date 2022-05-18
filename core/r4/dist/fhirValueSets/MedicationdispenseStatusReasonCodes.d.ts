/**
 * MedicationDispense Status Codes
 */
export declare const MedicationdispenseStatusReasonCodes: {
    /**
     * altchoice: This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.
     */
    readonly TryAnotherTreatmentFirst: "altchoice";
    /**
     * clarif: Clarification is required before the order can be acted upon.
     */
    readonly PrescriptionRequestRequiresClarification: "clarif";
    /**
     * drughigh: The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.
     */
    readonly DrugLevelTooHigh: "drughigh";
    /**
     * frr01: The order has been stopped by the prescriber but this fact has not necessarily captured electronically. Example: A verbal stop, a fax, etc.
     */
    readonly OrderStopped: "frr01";
    /**
     * frr02: Order has not been fulfilled within a reasonable amount of time, and might not be current.
     */
    readonly StaleDatedOrder: "frr02";
    /**
     * frr03: Data needed to safely act on the order which was expected to become available independent of the order is not yet available. Example: Lab results, diagnostic imaging, etc.
     */
    readonly IncompleteData: "frr03";
    /**
     * frr04: Product not available or manufactured. Cannot supply.
     */
    readonly ProductUnavailable: "frr04";
    /**
     * frr05: The dispenser has ethical, religious or moral objections to fulfilling the order/dispensing the product.
     */
    readonly EthicalReligious: "frr05";
    /**
     * frr06: Fulfiller not able to provide appropriate care associated with fulfilling the order. Example: Therapy requires ongoing monitoring by fulfiller and fulfiller will be ending practice, leaving town, unable to schedule necessary time, etc.
     */
    readonly UnableToProvideCare: "frr06";
    /**
     * hospadm: The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    readonly AdmissionToHospital: "hospadm";
    /**
     * labint: The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    readonly LabInterferenceIssues: "labint";
    /**
     * non-avail: Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    readonly PatientNotAvailable: "non-avail";
    /**
     * offmarket: Drug no longer marketed Cannot supply.
     */
    readonly DrugNotAvailableOffMarket: "offmarket";
    /**
     * outofstock: Drug out of stock. Cannot supply.
     */
    readonly DrugNotAvailableOutOfStock: "outofstock";
    /**
     * preg: The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    readonly PatientIsPregnantOrBreastfeeding: "preg";
    /**
     * saig: The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    readonly Allergy: "saig";
    /**
     * sddi: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    readonly DrugInteractsWithAnotherDrug: "sddi";
    /**
     * sdupther: Another short-term co-occurring therapy fulfills the same purpose as this therapy. This therapy will be resumed when the co-occuring therapy is complete.
     */
    readonly DuplicateTherapy: "sdupther";
    /**
     * sintol: The patient is believed to have an intolerance to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    readonly SuspectedIntolerance: "sintol";
    /**
     * surg: The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    readonly PatientScheduledForSurgery: "surg";
    /**
     * washout: The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    readonly Washout: "washout";
};
/**
 * MedicationDispense Status Codes
 */
export declare type MedicationdispenseStatusReasonCodeType = typeof MedicationdispenseStatusReasonCodes[keyof typeof MedicationdispenseStatusReasonCodes];
//# sourceMappingURL=MedicationdispenseStatusReasonCodes.d.ts.map