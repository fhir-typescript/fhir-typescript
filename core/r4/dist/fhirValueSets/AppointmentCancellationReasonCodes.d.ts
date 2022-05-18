/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export declare const AppointmentCancellationReasonCodes: {
    /**
     * Code: maint
     */
    readonly EquipmentMaintenanceRepair: "maint";
    /**
     * Code: meds-inc
     */
    readonly PrepMedIncomplete: "meds-inc";
    /**
     * Code: oth-cms
     */
    readonly OtherCMSTherapyCapServiceNotAuthorized: "oth-cms";
    /**
     * Code: oth-err
     */
    readonly OtherError: "oth-err";
    /**
     * Code: oth-fin
     */
    readonly OtherFinancial: "oth-fin";
    /**
     * Code: oth-int
     */
    readonly OtherNoInterpreterAvailable: "oth-int";
    /**
     * Code: oth-iv
     */
    readonly OtherImproperIVAccessInfiltrateIV: "oth-iv";
    /**
     * Code: oth-mu
     */
    readonly OtherPrepMedResultsUnavailable: "oth-mu";
    /**
     * Code: oth-oerr
     */
    readonly OtherScheduleOrderError: "oth-oerr";
    /**
     * Code: oth-room
     */
    readonly OtherRoomResourceMaintenance: "oth-room";
    /**
     * Code: oth-swie
     */
    readonly OtherSilentWalkInError: "oth-swie";
    /**
     * Code: oth-weath
     */
    readonly OtherWeather: "oth-weath";
    /**
     * Code: other
     */
    readonly Other: "other";
    /**
     * Code: pat
     */
    readonly Patient: "pat";
    /**
     * Code: pat-cpp
     */
    readonly PatientCanceledViaPatientPortal: "pat-cpp";
    /**
     * Code: pat-crs
     */
    readonly PatientCanceledViaAutomatedReminderSystem: "pat-crs";
    /**
     * Code: pat-dec
     */
    readonly PatientDeceased: "pat-dec";
    /**
     * Code: pat-fb
     */
    readonly PatientFeelingBetter: "pat-fb";
    /**
     * Code: pat-lt
     */
    readonly PatientLackOfTransportation: "pat-lt";
    /**
     * Code: pat-mt
     */
    readonly PatientMemberTerminated: "pat-mt";
    /**
     * Code: pat-mv
     */
    readonly PatientMoved: "pat-mv";
    /**
     * Code: pat-preg
     */
    readonly PatientPregnant: "pat-preg";
    /**
     * Code: pat-swl
     */
    readonly PatientScheduledFromWaitList: "pat-swl";
    /**
     * Code: pat-ucp
     */
    readonly PatientUnhappyChangedProvider: "pat-ucp";
    /**
     * Code: prov
     */
    readonly Provider: "prov";
    /**
     * Code: prov-dch
     */
    readonly ProviderDischarged: "prov-dch";
    /**
     * Code: prov-edu
     */
    readonly ProviderEduMeeting: "prov-edu";
    /**
     * Code: prov-hosp
     */
    readonly ProviderHospitalized: "prov-hosp";
    /**
     * Code: prov-labs
     */
    readonly ProviderLabsOutOfAcceptableRange: "prov-labs";
    /**
     * Code: prov-mri
     */
    readonly ProviderMRIScreeningFormMarkedDoNotProceed: "prov-mri";
    /**
     * Code: prov-onc
     */
    readonly ProviderOncologyTreatmentPlanChanges: "prov-onc";
    /**
     * Code: prov-pers
     */
    readonly ProviderPersonal: "prov-pers";
};
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export declare type AppointmentCancellationReasonCodeType = typeof AppointmentCancellationReasonCodes[keyof typeof AppointmentCancellationReasonCodes];
//# sourceMappingURL=AppointmentCancellationReasonCodes.d.ts.map