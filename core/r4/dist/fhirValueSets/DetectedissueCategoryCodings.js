// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/detectedissue-category|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export const DetectedissueCategoryCodings = {
    /**
     * _ActSuppliedItemDetectedIssueCode: Identifies types of detected issues regarding the administration or supply of an item to a patient.
     */
    ActSuppliedItemDetectedIssueCode: new Coding({
        display: "ActSuppliedItemDetectedIssueCode",
        code: "_ActSuppliedItemDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * _AdministrationDetectedIssueCode: Administration of the proposed therapy may be inappropriate or contraindicated as proposed
     */
    AdministrationDetectedIssueCode: new Coding({
        display: "AdministrationDetectedIssueCode",
        code: "_AdministrationDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * _AppropriatenessDetectedIssueCode: AppropriatenessDetectedIssueCode
     */
    AppropriatenessDetectedIssueCode: new Coding({
        display: "AppropriatenessDetectedIssueCode",
        code: "_AppropriatenessDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * _InteractionDetectedIssueCode: InteractionDetectedIssueCode
     */
    InteractionDetectedIssueCode: new Coding({
        display: "InteractionDetectedIssueCode",
        code: "_InteractionDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * _SupplyDetectedIssueCode: Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
     */
    SupplyDetectedIssueCode: new Coding({
        display: "SupplyDetectedIssueCode",
        code: "_SupplyDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * _TimingDetectedIssueCode: Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    TimingDetectedIssueCode: new Coding({
        display: "TimingDetectedIssueCode",
        code: "_TimingDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * ALLDONE: Definition:The requested action has already been performed and so this request has no effect
     */
    AlreadyPerformed: new Coding({
        display: "already performed",
        code: "ALLDONE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * ALRTENDLATE: Definition:Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy.
     */
    EndTooLateAlert: new Coding({
        display: "end too late alert",
        code: "ALRTENDLATE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * ALRTSTRTLATE: Definition:Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition.
     */
    StartTooLateAlert: new Coding({
        display: "start too late alert",
        code: "ALRTSTRTLATE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * DACT: Description:Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy.
     */
    DrugActionDetectedIssue: new Coding({
        display: "drug action detected issue",
        code: "DACT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * DRG: Proposed therapy may interact with an existing or recent drug therapy
     */
    DrugInteractionAlert: new Coding({
        display: "Drug Interaction Alert",
        code: "DRG",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * ENDLATE: Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy
     */
    EndTooLateAlertENDLATE: new Coding({
        display: "End Too Late Alert",
        code: "ENDLATE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * FOOD: Proposed therapy may interact with certain foods
     */
    FoodInteractionAlert: new Coding({
        display: "Food Interaction Alert",
        code: "FOOD",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * FULFIL: Definition:The therapy being performed is in some way out of alignment with the requested therapy.
     */
    FulfillmentAlert: new Coding({
        display: "fulfillment alert",
        code: "FULFIL",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * HELD: Definition:There should be no actions taken in fulfillment of a request that has been held or suspended.
     */
    HeldSuspendedAlert: new Coding({
        display: "held/suspended alert",
        code: "HELD",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * HISTORIC: Description: While the record was accepted in the repository, there is a more recent version of a record of this type.
     */
    RecordRecordedAsHistorical: new Coding({
        display: "record recorded as historical",
        code: "HISTORIC",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * INTERVAL: Definition:The therapy action is being performed outside the bounds of the time period requested
     */
    OutsideRequestedTime: new Coding({
        display: "outside requested time",
        code: "INTERVAL",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * MINFREQ: Definition:The therapy action is being performed too soon after the previous occurrence based on the requested frequency
     */
    TooSoonWithinFrequencyBasedOnTheUsage: new Coding({
        display: "too soon within frequency based on the usage",
        code: "MINFREQ",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * NHP: Proposed therapy may interact with existing or recent natural health product therapy
     */
    NaturalHealthProductAlert: new Coding({
        display: "Natural Health Product Alert",
        code: "NHP",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * NONRX: Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)
     */
    NonPrescriptionInteractionAlert: new Coding({
        display: "Non-Prescription Interaction Alert",
        code: "NONRX",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * NOTACTN: Definition:The status of the request being fulfilled has changed such that it is no longer actionable.  This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled.  (Not used for 'suspended' orders.)
     */
    NoLongerActionable: new Coding({
        display: "no longer actionable",
        code: "NOTACTN",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * NOTEQUIV: Definition:The therapy being performed is not sufficiently equivalent to the therapy which was requested.
     */
    NotEquivalentAlert: new Coding({
        display: "not equivalent alert",
        code: "NOTEQUIV",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * NOTEQUIVGEN: Definition:The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested.
     */
    NotGenericallyEquivalentAlert: new Coding({
        display: "not generically equivalent alert",
        code: "NOTEQUIVGEN",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * NOTEQUIVTHER: Definition:The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested.
     */
    NotTherapeuticallyEquivalentAlert: new Coding({
        display: "not therapeutically equivalent alert",
        code: "NOTEQUIVTHER",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * PATPREF: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.
     */
    ViolatesStatedPreferences: new Coding({
        display: "violates stated preferences",
        code: "PATPREF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * PATPREFALT: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.  An alternate therapy meeting those constraints is available.
     */
    ViolatesStatedPreferencesAlternateAvailable: new Coding({
        display: "violates stated preferences, alternate available",
        code: "PATPREFALT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * PREVINEF: Definition:The same or similar treatment has previously been attempted with the patient without achieving a positive effect.
     */
    PreviouslyIneffective: new Coding({
        display: "previously ineffective",
        code: "PREVINEF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * STRTLATE: Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition
     */
    StartTooLateAlertSTRTLATE: new Coding({
        display: "Start Too Late Alert",
        code: "STRTLATE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TIME: Description:Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    TimingDetectedIssue: new Coding({
        display: "timing detected issue",
        code: "TIME",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TIMING: Definition:The therapy is being performed at a time which diverges from the time the therapy was requested
     */
    EventTimingIncorrectAlert: new Coding({
        display: "event timing incorrect alert",
        code: "TIMING",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TOOLATE: The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    RefillTooLateAlert: new Coding({
        display: "Refill Too Late Alert",
        code: "TOOLATE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TOOSOON: The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    RefillTooSoonAlert: new Coding({
        display: "Refill Too Soon Alert",
        code: "TOOSOON",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TPROD: Proposed therapy may interact with an existing or recent therapeutic product
     */
    TherapeuticProductAlert: new Coding({
        display: "Therapeutic Product Alert",
        code: "TPROD",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0ZWN0ZWRpc3N1ZUNhdGVnb3J5Q29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRGV0ZWN0ZWRpc3N1ZUNhdGVnb3J5Q29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywyRUFBMkU7QUFFM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUc7SUFDMUM7O09BRUc7SUFDSCxnQ0FBZ0MsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMzQyxPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCwrQkFBK0IsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMxQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxnQ0FBZ0MsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMzQyxPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCw0QkFBNEIsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN2QyxPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLElBQUksRUFBRSwrQkFBK0I7UUFDckMsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCx1QkFBdUIsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQyxPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLElBQUksRUFBRSwwQkFBMEI7UUFDaEMsTUFBTSxFQUFFLGtEQUFr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LENBQUM7UUFDcEMsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILG1CQUFtQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzlCLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILHlCQUF5QixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3BDLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILGtCQUFrQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzdCLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILGtCQUFrQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzdCLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILHVCQUF1QixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xDLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2RldGVjdGVkaXNzdWUtY2F0ZWdvcnl8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEtpbmRzIG9mIGlzc3VlcyBvciBjb250cmFpbmRpY2F0aW9ucywgc3VjaCBhcyAnZHJ1Zy1kcnVnIGludGVyYWN0aW9uJywgJ2R1cGxpY2F0ZSB0aGVyYXB5JywgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERldGVjdGVkaXNzdWVDYXRlZ29yeUNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogX0FjdFN1cHBsaWVkSXRlbURldGVjdGVkSXNzdWVDb2RlOiBJZGVudGlmaWVzIHR5cGVzIG9mIGRldGVjdGVkIGlzc3VlcyByZWdhcmRpbmcgdGhlIGFkbWluaXN0cmF0aW9uIG9yIHN1cHBseSBvZiBhbiBpdGVtIHRvIGEgcGF0aWVudC5cclxuICAgKi9cclxuICBBY3RTdXBwbGllZEl0ZW1EZXRlY3RlZElzc3VlQ29kZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkFjdFN1cHBsaWVkSXRlbURldGVjdGVkSXNzdWVDb2RlXCIsXHJcbiAgICBjb2RlOiBcIl9BY3RTdXBwbGllZEl0ZW1EZXRlY3RlZElzc3VlQ29kZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIF9BZG1pbmlzdHJhdGlvbkRldGVjdGVkSXNzdWVDb2RlOiBBZG1pbmlzdHJhdGlvbiBvZiB0aGUgcHJvcG9zZWQgdGhlcmFweSBtYXkgYmUgaW5hcHByb3ByaWF0ZSBvciBjb250cmFpbmRpY2F0ZWQgYXMgcHJvcG9zZWRcclxuICAgKi9cclxuICBBZG1pbmlzdHJhdGlvbkRldGVjdGVkSXNzdWVDb2RlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQWRtaW5pc3RyYXRpb25EZXRlY3RlZElzc3VlQ29kZVwiLFxyXG4gICAgY29kZTogXCJfQWRtaW5pc3RyYXRpb25EZXRlY3RlZElzc3VlQ29kZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIF9BcHByb3ByaWF0ZW5lc3NEZXRlY3RlZElzc3VlQ29kZTogQXBwcm9wcmlhdGVuZXNzRGV0ZWN0ZWRJc3N1ZUNvZGVcclxuICAgKi9cclxuICBBcHByb3ByaWF0ZW5lc3NEZXRlY3RlZElzc3VlQ29kZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkFwcHJvcHJpYXRlbmVzc0RldGVjdGVkSXNzdWVDb2RlXCIsXHJcbiAgICBjb2RlOiBcIl9BcHByb3ByaWF0ZW5lc3NEZXRlY3RlZElzc3VlQ29kZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIF9JbnRlcmFjdGlvbkRldGVjdGVkSXNzdWVDb2RlOiBJbnRlcmFjdGlvbkRldGVjdGVkSXNzdWVDb2RlXHJcbiAgICovXHJcbiAgSW50ZXJhY3Rpb25EZXRlY3RlZElzc3VlQ29kZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkludGVyYWN0aW9uRGV0ZWN0ZWRJc3N1ZUNvZGVcIixcclxuICAgIGNvZGU6IFwiX0ludGVyYWN0aW9uRGV0ZWN0ZWRJc3N1ZUNvZGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBfU3VwcGx5RGV0ZWN0ZWRJc3N1ZUNvZGU6IFN1cHBseWluZyB0aGUgcHJvZHVjdCBhdCB0aGlzIHRpbWUgbWF5IGJlIGluYXBwcm9wcmlhdGUgb3IgaW5kaWNhdGUgY29tcGxpYW5jZSBpc3N1ZXMgd2l0aCB0aGUgYXNzb2NpYXRlZCB0aGVyYXB5XHJcbiAgICovXHJcbiAgU3VwcGx5RGV0ZWN0ZWRJc3N1ZUNvZGU6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJTdXBwbHlEZXRlY3RlZElzc3VlQ29kZVwiLFxyXG4gICAgY29kZTogXCJfU3VwcGx5RGV0ZWN0ZWRJc3N1ZUNvZGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBfVGltaW5nRGV0ZWN0ZWRJc3N1ZUNvZGU6IFByb3Bvc2VkIHRoZXJhcHkgbWF5IGJlIGluYXBwcm9wcmlhdGUgb3IgaW5lZmZlY3RpdmUgYmFzZWQgb24gdGhlIHByb3Bvc2VkIHN0YXJ0IG9yIGVuZCB0aW1lLlxyXG4gICAqL1xyXG4gIFRpbWluZ0RldGVjdGVkSXNzdWVDb2RlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiVGltaW5nRGV0ZWN0ZWRJc3N1ZUNvZGVcIixcclxuICAgIGNvZGU6IFwiX1RpbWluZ0RldGVjdGVkSXNzdWVDb2RlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQUxMRE9ORTogRGVmaW5pdGlvbjpUaGUgcmVxdWVzdGVkIGFjdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHBlcmZvcm1lZCBhbmQgc28gdGhpcyByZXF1ZXN0IGhhcyBubyBlZmZlY3RcclxuICAgKi9cclxuICBBbHJlYWR5UGVyZm9ybWVkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiYWxyZWFkeSBwZXJmb3JtZWRcIixcclxuICAgIGNvZGU6IFwiQUxMRE9ORVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIEFMUlRFTkRMQVRFOiBEZWZpbml0aW9uOlByb3Bvc2VkIHRoZXJhcHkgbWF5IGJlIGluYXBwcm9wcmlhdGUgb3IgaW5lZmZlY3RpdmUgYmVjYXVzZSB0aGUgZW5kIG9mIGFkbWluaXN0cmF0aW9uIGlzIHRvbyBjbG9zZSB0byBhbm90aGVyIHBsYW5uZWQgdGhlcmFweS5cclxuICAgKi9cclxuICBFbmRUb29MYXRlQWxlcnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJlbmQgdG9vIGxhdGUgYWxlcnRcIixcclxuICAgIGNvZGU6IFwiQUxSVEVORExBVEVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBBTFJUU1RSVExBVEU6IERlZmluaXRpb246UHJvcG9zZWQgdGhlcmFweSBtYXkgYmUgaW5hcHByb3ByaWF0ZSBvciBpbmVmZmVjdGl2ZSBiZWNhdXNlIHRoZSBzdGFydCBvZiBhZG1pbmlzdHJhdGlvbiBpcyB0b28gbGF0ZSBhZnRlciB0aGUgb25zZXQgb2YgdGhlIGNvbmRpdGlvbi5cclxuICAgKi9cclxuICBTdGFydFRvb0xhdGVBbGVydDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInN0YXJ0IHRvbyBsYXRlIGFsZXJ0XCIsXHJcbiAgICBjb2RlOiBcIkFMUlRTVFJUTEFURVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIERBQ1Q6IERlc2NyaXB0aW9uOlByb3Bvc2VkIHRoZXJhcHkgbWF5IGJlIGNvbnRyYWluZGljYXRlZCBvciBpbmVmZmVjdGl2ZSBiYXNlZCBvbiBhbiBleGlzdGluZyBvciByZWNlbnQgZHJ1ZyB0aGVyYXB5LlxyXG4gICAqL1xyXG4gIERydWdBY3Rpb25EZXRlY3RlZElzc3VlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiZHJ1ZyBhY3Rpb24gZGV0ZWN0ZWQgaXNzdWVcIixcclxuICAgIGNvZGU6IFwiREFDVFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIERSRzogUHJvcG9zZWQgdGhlcmFweSBtYXkgaW50ZXJhY3Qgd2l0aCBhbiBleGlzdGluZyBvciByZWNlbnQgZHJ1ZyB0aGVyYXB5XHJcbiAgICovXHJcbiAgRHJ1Z0ludGVyYWN0aW9uQWxlcnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJEcnVnIEludGVyYWN0aW9uIEFsZXJ0XCIsXHJcbiAgICBjb2RlOiBcIkRSR1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIEVORExBVEU6IFByb3Bvc2VkIHRoZXJhcHkgbWF5IGJlIGluYXBwcm9wcmlhdGUgb3IgaW5lZmZlY3RpdmUgYmVjYXVzZSB0aGUgZW5kIG9mIGFkbWluaXN0cmF0aW9uIGlzIHRvbyBjbG9zZSB0byBhbm90aGVyIHBsYW5uZWQgdGhlcmFweVxyXG4gICAqL1xyXG4gIEVuZFRvb0xhdGVBbGVydEVORExBVEU6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJFbmQgVG9vIExhdGUgQWxlcnRcIixcclxuICAgIGNvZGU6IFwiRU5ETEFURVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIEZPT0Q6IFByb3Bvc2VkIHRoZXJhcHkgbWF5IGludGVyYWN0IHdpdGggY2VydGFpbiBmb29kc1xyXG4gICAqL1xyXG4gIEZvb2RJbnRlcmFjdGlvbkFsZXJ0OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiRm9vZCBJbnRlcmFjdGlvbiBBbGVydFwiLFxyXG4gICAgY29kZTogXCJGT09EXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogRlVMRklMOiBEZWZpbml0aW9uOlRoZSB0aGVyYXB5IGJlaW5nIHBlcmZvcm1lZCBpcyBpbiBzb21lIHdheSBvdXQgb2YgYWxpZ25tZW50IHdpdGggdGhlIHJlcXVlc3RlZCB0aGVyYXB5LlxyXG4gICAqL1xyXG4gIEZ1bGZpbGxtZW50QWxlcnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJmdWxmaWxsbWVudCBhbGVydFwiLFxyXG4gICAgY29kZTogXCJGVUxGSUxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBIRUxEOiBEZWZpbml0aW9uOlRoZXJlIHNob3VsZCBiZSBubyBhY3Rpb25zIHRha2VuIGluIGZ1bGZpbGxtZW50IG9mIGEgcmVxdWVzdCB0aGF0IGhhcyBiZWVuIGhlbGQgb3Igc3VzcGVuZGVkLlxyXG4gICAqL1xyXG4gIEhlbGRTdXNwZW5kZWRBbGVydDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcImhlbGQvc3VzcGVuZGVkIGFsZXJ0XCIsXHJcbiAgICBjb2RlOiBcIkhFTERcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBISVNUT1JJQzogRGVzY3JpcHRpb246IFdoaWxlIHRoZSByZWNvcmQgd2FzIGFjY2VwdGVkIGluIHRoZSByZXBvc2l0b3J5LCB0aGVyZSBpcyBhIG1vcmUgcmVjZW50IHZlcnNpb24gb2YgYSByZWNvcmQgb2YgdGhpcyB0eXBlLlxyXG4gICAqL1xyXG4gIFJlY29yZFJlY29yZGVkQXNIaXN0b3JpY2FsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwicmVjb3JkIHJlY29yZGVkIGFzIGhpc3RvcmljYWxcIixcclxuICAgIGNvZGU6IFwiSElTVE9SSUNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBJTlRFUlZBTDogRGVmaW5pdGlvbjpUaGUgdGhlcmFweSBhY3Rpb24gaXMgYmVpbmcgcGVyZm9ybWVkIG91dHNpZGUgdGhlIGJvdW5kcyBvZiB0aGUgdGltZSBwZXJpb2QgcmVxdWVzdGVkXHJcbiAgICovXHJcbiAgT3V0c2lkZVJlcXVlc3RlZFRpbWU6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJvdXRzaWRlIHJlcXVlc3RlZCB0aW1lXCIsXHJcbiAgICBjb2RlOiBcIklOVEVSVkFMXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogTUlORlJFUTogRGVmaW5pdGlvbjpUaGUgdGhlcmFweSBhY3Rpb24gaXMgYmVpbmcgcGVyZm9ybWVkIHRvbyBzb29uIGFmdGVyIHRoZSBwcmV2aW91cyBvY2N1cnJlbmNlIGJhc2VkIG9uIHRoZSByZXF1ZXN0ZWQgZnJlcXVlbmN5XHJcbiAgICovXHJcbiAgVG9vU29vbldpdGhpbkZyZXF1ZW5jeUJhc2VkT25UaGVVc2FnZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInRvbyBzb29uIHdpdGhpbiBmcmVxdWVuY3kgYmFzZWQgb24gdGhlIHVzYWdlXCIsXHJcbiAgICBjb2RlOiBcIk1JTkZSRVFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBOSFA6IFByb3Bvc2VkIHRoZXJhcHkgbWF5IGludGVyYWN0IHdpdGggZXhpc3Rpbmcgb3IgcmVjZW50IG5hdHVyYWwgaGVhbHRoIHByb2R1Y3QgdGhlcmFweVxyXG4gICAqL1xyXG4gIE5hdHVyYWxIZWFsdGhQcm9kdWN0QWxlcnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJOYXR1cmFsIEhlYWx0aCBQcm9kdWN0IEFsZXJ0XCIsXHJcbiAgICBjb2RlOiBcIk5IUFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIE5PTlJYOiBQcm9wb3NlZCB0aGVyYXB5IG1heSBpbnRlcmFjdCB3aXRoIGEgbm9uLXByZXNjcmlwdGlvbiBkcnVnIChlLmcuIGFsY29ob2wsIHRvYmFjY28sIEFzcGlyaW4pXHJcbiAgICovXHJcbiAgTm9uUHJlc2NyaXB0aW9uSW50ZXJhY3Rpb25BbGVydDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk5vbi1QcmVzY3JpcHRpb24gSW50ZXJhY3Rpb24gQWxlcnRcIixcclxuICAgIGNvZGU6IFwiTk9OUlhcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBOT1RBQ1ROOiBEZWZpbml0aW9uOlRoZSBzdGF0dXMgb2YgdGhlIHJlcXVlc3QgYmVpbmcgZnVsZmlsbGVkIGhhcyBjaGFuZ2VkIHN1Y2ggdGhhdCBpdCBpcyBubyBsb25nZXIgYWN0aW9uYWJsZS4gIFRoaXMgbWF5IGJlIGJlY2F1c2UgdGhlIHJlcXVlc3QgaGFzIGV4cGlyZWQsIGhhcyBhbHJlYWR5IGJlZW4gY29tcGxldGVseSBmdWxmaWxsZWQgb3IgaGFzIGJlZW4gb3RoZXJ3aXNlIHN0b3BwZWQgb3IgZGlzYWJsZWQuICAoTm90IHVzZWQgZm9yICdzdXNwZW5kZWQnIG9yZGVycy4pXHJcbiAgICovXHJcbiAgTm9Mb25nZXJBY3Rpb25hYmxlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwibm8gbG9uZ2VyIGFjdGlvbmFibGVcIixcclxuICAgIGNvZGU6IFwiTk9UQUNUTlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIE5PVEVRVUlWOiBEZWZpbml0aW9uOlRoZSB0aGVyYXB5IGJlaW5nIHBlcmZvcm1lZCBpcyBub3Qgc3VmZmljaWVudGx5IGVxdWl2YWxlbnQgdG8gdGhlIHRoZXJhcHkgd2hpY2ggd2FzIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBOb3RFcXVpdmFsZW50QWxlcnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJub3QgZXF1aXZhbGVudCBhbGVydFwiLFxyXG4gICAgY29kZTogXCJOT1RFUVVJVlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIE5PVEVRVUlWR0VOOiBEZWZpbml0aW9uOlRoZSB0aGVyYXB5IGJlaW5nIHBlcmZvcm1lZCBpcyBub3QgZ2VuZXJpY2FsbHkgZXF1aXZhbGVudCAoaGF2aW5nIHRoZSBpZGVudGljYWwgYmlvbG9naWNhbCBhY3Rpb24pIHRvIHRoZSB0aGVyYXB5IHdoaWNoIHdhcyByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgTm90R2VuZXJpY2FsbHlFcXVpdmFsZW50QWxlcnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJub3QgZ2VuZXJpY2FsbHkgZXF1aXZhbGVudCBhbGVydFwiLFxyXG4gICAgY29kZTogXCJOT1RFUVVJVkdFTlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtQWN0Q29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIE5PVEVRVUlWVEhFUjogRGVmaW5pdGlvbjpUaGUgdGhlcmFweSBiZWluZyBwZXJmb3JtZWQgaXMgbm90IHRoZXJhcGV1dGljYWxseSBlcXVpdmFsZW50IChoYXZpbmcgdGhlIHNhbWUgb3ZlcmFsbCBwYXRpZW50IGVmZmVjdCkgdG8gdGhlIHRoZXJhcHkgd2hpY2ggd2FzIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBOb3RUaGVyYXBldXRpY2FsbHlFcXVpdmFsZW50QWxlcnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJub3QgdGhlcmFwZXV0aWNhbGx5IGVxdWl2YWxlbnQgYWxlcnRcIixcclxuICAgIGNvZGU6IFwiTk9URVFVSVZUSEVSXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogUEFUUFJFRjogRGVmaW5pdGlvbjpUaGUgcHJvcG9zZWQgdGhlcmFweSBnb2VzIGFnYWluc3QgcHJlZmVyZW5jZXMgb3IgY29uc2VudCBjb25zdHJhaW50cyByZWNvcmRlZCBpbiB0aGUgcGF0aWVudCdzIHJlY29yZC5cclxuICAgKi9cclxuICBWaW9sYXRlc1N0YXRlZFByZWZlcmVuY2VzOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwidmlvbGF0ZXMgc3RhdGVkIHByZWZlcmVuY2VzXCIsXHJcbiAgICBjb2RlOiBcIlBBVFBSRUZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBQQVRQUkVGQUxUOiBEZWZpbml0aW9uOlRoZSBwcm9wb3NlZCB0aGVyYXB5IGdvZXMgYWdhaW5zdCBwcmVmZXJlbmNlcyBvciBjb25zZW50IGNvbnN0cmFpbnRzIHJlY29yZGVkIGluIHRoZSBwYXRpZW50J3MgcmVjb3JkLiAgQW4gYWx0ZXJuYXRlIHRoZXJhcHkgbWVldGluZyB0aG9zZSBjb25zdHJhaW50cyBpcyBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgVmlvbGF0ZXNTdGF0ZWRQcmVmZXJlbmNlc0FsdGVybmF0ZUF2YWlsYWJsZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInZpb2xhdGVzIHN0YXRlZCBwcmVmZXJlbmNlcywgYWx0ZXJuYXRlIGF2YWlsYWJsZVwiLFxyXG4gICAgY29kZTogXCJQQVRQUkVGQUxUXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogUFJFVklORUY6IERlZmluaXRpb246VGhlIHNhbWUgb3Igc2ltaWxhciB0cmVhdG1lbnQgaGFzIHByZXZpb3VzbHkgYmVlbiBhdHRlbXB0ZWQgd2l0aCB0aGUgcGF0aWVudCB3aXRob3V0IGFjaGlldmluZyBhIHBvc2l0aXZlIGVmZmVjdC5cclxuICAgKi9cclxuICBQcmV2aW91c2x5SW5lZmZlY3RpdmU6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJwcmV2aW91c2x5IGluZWZmZWN0aXZlXCIsXHJcbiAgICBjb2RlOiBcIlBSRVZJTkVGXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogU1RSVExBVEU6IFByb3Bvc2VkIHRoZXJhcHkgbWF5IGJlIGluYXBwcm9wcmlhdGUgb3IgaW5lZmZlY3RpdmUgYmVjYXVzZSB0aGUgc3RhcnQgb2YgYWRtaW5pc3RyYXRpb24gaXMgdG9vIGxhdGUgYWZ0ZXIgdGhlIG9uc2V0IG9mIHRoZSBjb25kaXRpb25cclxuICAgKi9cclxuICBTdGFydFRvb0xhdGVBbGVydFNUUlRMQVRFOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiU3RhcnQgVG9vIExhdGUgQWxlcnRcIixcclxuICAgIGNvZGU6IFwiU1RSVExBVEVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBUSU1FOiBEZXNjcmlwdGlvbjpQcm9wb3NlZCB0aGVyYXB5IG1heSBiZSBpbmFwcHJvcHJpYXRlIG9yIGluZWZmZWN0aXZlIGJhc2VkIG9uIHRoZSBwcm9wb3NlZCBzdGFydCBvciBlbmQgdGltZS5cclxuICAgKi9cclxuICBUaW1pbmdEZXRlY3RlZElzc3VlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwidGltaW5nIGRldGVjdGVkIGlzc3VlXCIsXHJcbiAgICBjb2RlOiBcIlRJTUVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBUSU1JTkc6IERlZmluaXRpb246VGhlIHRoZXJhcHkgaXMgYmVpbmcgcGVyZm9ybWVkIGF0IGEgdGltZSB3aGljaCBkaXZlcmdlcyBmcm9tIHRoZSB0aW1lIHRoZSB0aGVyYXB5IHdhcyByZXF1ZXN0ZWRcclxuICAgKi9cclxuICBFdmVudFRpbWluZ0luY29ycmVjdEFsZXJ0OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiZXZlbnQgdGltaW5nIGluY29ycmVjdCBhbGVydFwiLFxyXG4gICAgY29kZTogXCJUSU1JTkdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBUT09MQVRFOiBUaGUgcGF0aWVudCBpcyByZWNlaXZpbmcgYSBzdWJzZXF1ZW50IGZpbGwgc2lnbmlmaWNhbnRseSBsYXRlciB0aGFuIHdvdWxkIGJlIGV4cGVjdGVkIGJhc2VkIG9uIHRoZSBhbW91bnQgcHJldmlvdXNseSBzdXBwbGllZCBhbmQgdGhlIHRoZXJhcHkgZG9zYWdlIGluc3RydWN0aW9uc1xyXG4gICAqL1xyXG4gIFJlZmlsbFRvb0xhdGVBbGVydDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlJlZmlsbCBUb28gTGF0ZSBBbGVydFwiLFxyXG4gICAgY29kZTogXCJUT09MQVRFXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogVE9PU09PTjogVGhlIHBhdGllbnQgaXMgcmVjZWl2aW5nIGEgc3Vic2VxdWVudCBmaWxsIHNpZ25pZmljYW50bHkgZWFybGllciB0aGFuIHdvdWxkIGJlIGV4cGVjdGVkIGJhc2VkIG9uIHRoZSBhbW91bnQgcHJldmlvdXNseSBzdXBwbGllZCBhbmQgdGhlIHRoZXJhcHkgZG9zYWdlIGluc3RydWN0aW9uc1xyXG4gICAqL1xyXG4gIFJlZmlsbFRvb1Nvb25BbGVydDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlJlZmlsbCBUb28gU29vbiBBbGVydFwiLFxyXG4gICAgY29kZTogXCJUT09TT09OXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogVFBST0Q6IFByb3Bvc2VkIHRoZXJhcHkgbWF5IGludGVyYWN0IHdpdGggYW4gZXhpc3Rpbmcgb3IgcmVjZW50IHRoZXJhcGV1dGljIHByb2R1Y3RcclxuICAgKi9cclxuICBUaGVyYXBldXRpY1Byb2R1Y3RBbGVydDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlRoZXJhcGV1dGljIFByb2R1Y3QgQWxlcnRcIixcclxuICAgIGNvZGU6IFwiVFBST0RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGVcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBLaW5kcyBvZiBpc3N1ZXMgb3IgY29udHJhaW5kaWNhdGlvbnMsIHN1Y2ggYXMgJ2RydWctZHJ1ZyBpbnRlcmFjdGlvbicsICdkdXBsaWNhdGUgdGhlcmFweScsIGV0Yy5cclxuICovXHJcbmV4cG9ydCB0eXBlIERldGVjdGVkaXNzdWVDYXRlZ29yeUNvZGluZ1R5cGUgPSB0eXBlb2YgRGV0ZWN0ZWRpc3N1ZUNhdGVnb3J5Q29kaW5ncztcclxuIl19