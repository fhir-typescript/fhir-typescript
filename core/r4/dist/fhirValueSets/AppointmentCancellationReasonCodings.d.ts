import { Coding } from '../fhir/Coding.js';
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export declare const AppointmentCancellationReasonCodings: {
    /**
     * Code: maint
     */
    readonly EquipmentMaintenanceRepair: Coding;
    /**
     * Code: meds-inc
     */
    readonly PrepMedIncomplete: Coding;
    /**
     * Code: oth-cms
     */
    readonly OtherCMSTherapyCapServiceNotAuthorized: Coding;
    /**
     * Code: oth-err
     */
    readonly OtherError: Coding;
    /**
     * Code: oth-fin
     */
    readonly OtherFinancial: Coding;
    /**
     * Code: oth-int
     */
    readonly OtherNoInterpreterAvailable: Coding;
    /**
     * Code: oth-iv
     */
    readonly OtherImproperIVAccessInfiltrateIV: Coding;
    /**
     * Code: oth-mu
     */
    readonly OtherPrepMedResultsUnavailable: Coding;
    /**
     * Code: oth-oerr
     */
    readonly OtherScheduleOrderError: Coding;
    /**
     * Code: oth-room
     */
    readonly OtherRoomResourceMaintenance: Coding;
    /**
     * Code: oth-swie
     */
    readonly OtherSilentWalkInError: Coding;
    /**
     * Code: oth-weath
     */
    readonly OtherWeather: Coding;
    /**
     * Code: other
     */
    readonly Other: Coding;
    /**
     * Code: pat
     */
    readonly Patient: Coding;
    /**
     * Code: pat-cpp
     */
    readonly PatientCanceledViaPatientPortal: Coding;
    /**
     * Code: pat-crs
     */
    readonly PatientCanceledViaAutomatedReminderSystem: Coding;
    /**
     * Code: pat-dec
     */
    readonly PatientDeceased: Coding;
    /**
     * Code: pat-fb
     */
    readonly PatientFeelingBetter: Coding;
    /**
     * Code: pat-lt
     */
    readonly PatientLackOfTransportation: Coding;
    /**
     * Code: pat-mt
     */
    readonly PatientMemberTerminated: Coding;
    /**
     * Code: pat-mv
     */
    readonly PatientMoved: Coding;
    /**
     * Code: pat-preg
     */
    readonly PatientPregnant: Coding;
    /**
     * Code: pat-swl
     */
    readonly PatientScheduledFromWaitList: Coding;
    /**
     * Code: pat-ucp
     */
    readonly PatientUnhappyChangedProvider: Coding;
    /**
     * Code: prov
     */
    readonly Provider: Coding;
    /**
     * Code: prov-dch
     */
    readonly ProviderDischarged: Coding;
    /**
     * Code: prov-edu
     */
    readonly ProviderEduMeeting: Coding;
    /**
     * Code: prov-hosp
     */
    readonly ProviderHospitalized: Coding;
    /**
     * Code: prov-labs
     */
    readonly ProviderLabsOutOfAcceptableRange: Coding;
    /**
     * Code: prov-mri
     */
    readonly ProviderMRIScreeningFormMarkedDoNotProceed: Coding;
    /**
     * Code: prov-onc
     */
    readonly ProviderOncologyTreatmentPlanChanges: Coding;
    /**
     * Code: prov-pers
     */
    readonly ProviderPersonal: Coding;
};
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export declare type AppointmentCancellationReasonCodingType = typeof AppointmentCancellationReasonCodings;
//# sourceMappingURL=AppointmentCancellationReasonCodings.d.ts.map