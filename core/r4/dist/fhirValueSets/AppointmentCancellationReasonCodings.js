// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/appointment-cancellation-reason|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export const AppointmentCancellationReasonCodings = {
    /**
     * Code: maint
     */
    EquipmentMaintenanceRepair: new Coding({
        display: "Equipment Maintenance/Repair",
        code: "maint",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: meds-inc
     */
    PrepMedIncomplete: new Coding({
        display: "Prep/Med Incomplete",
        code: "meds-inc",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-cms
     */
    OtherCMSTherapyCapServiceNotAuthorized: new Coding({
        display: "Other: CMS Therapy Cap Service Not Authorized",
        code: "oth-cms",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-err
     */
    OtherError: new Coding({
        display: "Other: Error",
        code: "oth-err",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-fin
     */
    OtherFinancial: new Coding({
        display: "Other: Financial",
        code: "oth-fin",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-int
     */
    OtherNoInterpreterAvailable: new Coding({
        display: "Other: No Interpreter Available",
        code: "oth-int",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-iv
     */
    OtherImproperIVAccessInfiltrateIV: new Coding({
        display: "Other: Improper IV Access/Infiltrate IV",
        code: "oth-iv",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-mu
     */
    OtherPrepMedResultsUnavailable: new Coding({
        display: "Other: Prep/Med/Results Unavailable",
        code: "oth-mu",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-oerr
     */
    OtherScheduleOrderError: new Coding({
        display: "Other: Schedule Order Error",
        code: "oth-oerr",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-room
     */
    OtherRoomResourceMaintenance: new Coding({
        display: "Other: Room/Resource Maintenance",
        code: "oth-room",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-swie
     */
    OtherSilentWalkInError: new Coding({
        display: "Other: Silent Walk In Error",
        code: "oth-swie",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: oth-weath
     */
    OtherWeather: new Coding({
        display: "Other: Weather",
        code: "oth-weath",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: other
     */
    Other: new Coding({
        display: "Other",
        code: "other",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat
     */
    Patient: new Coding({
        display: "Patient",
        code: "pat",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-cpp
     */
    PatientCanceledViaPatientPortal: new Coding({
        display: "Patient: Canceled via Patient Portal",
        code: "pat-cpp",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-crs
     */
    PatientCanceledViaAutomatedReminderSystem: new Coding({
        display: "Patient: Canceled via automated reminder system",
        code: "pat-crs",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-dec
     */
    PatientDeceased: new Coding({
        display: "Patient: Deceased",
        code: "pat-dec",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-fb
     */
    PatientFeelingBetter: new Coding({
        display: "Patient: Feeling Better",
        code: "pat-fb",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-lt
     */
    PatientLackOfTransportation: new Coding({
        display: "Patient: Lack of Transportation",
        code: "pat-lt",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-mt
     */
    PatientMemberTerminated: new Coding({
        display: "Patient: Member Terminated",
        code: "pat-mt",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-mv
     */
    PatientMoved: new Coding({
        display: "Patient: Moved",
        code: "pat-mv",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-preg
     */
    PatientPregnant: new Coding({
        display: "Patient: Pregnant",
        code: "pat-preg",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-swl
     */
    PatientScheduledFromWaitList: new Coding({
        display: "Patient: Scheduled from Wait List",
        code: "pat-swl",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: pat-ucp
     */
    PatientUnhappyChangedProvider: new Coding({
        display: "Patient: Unhappy/Changed Provider",
        code: "pat-ucp",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov
     */
    Provider: new Coding({
        display: "Provider",
        code: "prov",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov-dch
     */
    ProviderDischarged: new Coding({
        display: "Provider: Discharged",
        code: "prov-dch",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov-edu
     */
    ProviderEduMeeting: new Coding({
        display: "Provider: Edu/Meeting",
        code: "prov-edu",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov-hosp
     */
    ProviderHospitalized: new Coding({
        display: "Provider: Hospitalized",
        code: "prov-hosp",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov-labs
     */
    ProviderLabsOutOfAcceptableRange: new Coding({
        display: "Provider: Labs Out of Acceptable Range",
        code: "prov-labs",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov-mri
     */
    ProviderMRIScreeningFormMarkedDoNotProceed: new Coding({
        display: "Provider: MRI Screening Form Marked Do Not Proceed",
        code: "prov-mri",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov-onc
     */
    ProviderOncologyTreatmentPlanChanges: new Coding({
        display: "Provider: Oncology Treatment Plan Changes",
        code: "prov-onc",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
    /**
     * Code: prov-pers
     */
    ProviderPersonal: new Coding({
        display: "Provider: Personal",
        code: "prov-pers",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRDYW5jZWxsYXRpb25SZWFzb25Db2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BcHBvaW50bWVudENhbmNlbGxhdGlvblJlYXNvbkNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0ZBQW9GO0FBRXBGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUFHO0lBQ2xEOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDckMsT0FBTyxFQUFFLDhCQUE4QjtRQUN2QyxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSx1RUFBdUU7S0FDaEYsQ0FBQztJQUNGOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDNUIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsdUVBQXVFO0tBQ2hGLENBQUM7SUFDRjs7T0FFRztJQUNILHNDQUFzQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pELE9BQU8sRUFBRSwrQ0FBK0M7UUFDeEQsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsdUVBQXVFO0tBQ2hGLENBQUM7SUFDRjs7T0FFRztJQUNILFVBQVUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNyQixPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSx1RUFBdUU7S0FDaEYsQ0FBQztJQUNGOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsdUVBQXVFO0tB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QjtRQUNqQyxJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsdUVBQXVFO0tBQ2hGLENBQUM7SUFDRjs7T0FFRztJQUNILGdDQUFnQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQzNDLE9BQU8sRUFBRSx3Q0FBd0M7UUFDakQsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHVFQUF1RTtLQUNoRixDQUFDO0lBQ0Y7O09BRUc7SUFDSCwwQ0FBMEMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNyRCxPQUFPLEVBQUUsb0RBQW9EO1FBQzdELElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSx1RUFBdUU7S0FDaEYsQ0FBQztJQUNGOztPQUVHO0lBQ0gsb0NBQW9DLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDL0MsT0FBTyxFQUFFLDJDQUEyQztRQUNwRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsdUVBQXVFO0tBQ2hGLENBQUM7SUFDRjs7T0FFRztJQUNILGdCQUFnQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzNCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHVFQUF1RTtLQUNoRixDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29ufDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4YW1wbGUgdmFsdWUgc2V0IGRlZmluZXMgYSBzZXQgb2YgcmVhc29ucyBmb3IgdGhlIGNhbmNlbGxhdGlvbiBvZiBhbiBhcHBvaW50bWVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBcHBvaW50bWVudENhbmNlbGxhdGlvblJlYXNvbkNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogbWFpbnRcclxuICAgKi9cclxuICBFcXVpcG1lbnRNYWludGVuYW5jZVJlcGFpcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkVxdWlwbWVudCBNYWludGVuYW5jZS9SZXBhaXJcIixcclxuICAgIGNvZGU6IFwibWFpbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FwcG9pbnRtZW50LWNhbmNlbGxhdGlvbi1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBtZWRzLWluY1xyXG4gICAqL1xyXG4gIFByZXBNZWRJbmNvbXBsZXRlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHJlcC9NZWQgSW5jb21wbGV0ZVwiLFxyXG4gICAgY29kZTogXCJtZWRzLWluY1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IG90aC1jbXNcclxuICAgKi9cclxuICBPdGhlckNNU1RoZXJhcHlDYXBTZXJ2aWNlTm90QXV0aG9yaXplZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk90aGVyOiBDTVMgVGhlcmFweSBDYXAgU2VydmljZSBOb3QgQXV0aG9yaXplZFwiLFxyXG4gICAgY29kZTogXCJvdGgtY21zXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogb3RoLWVyclxyXG4gICAqL1xyXG4gIE90aGVyRXJyb3I6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJPdGhlcjogRXJyb3JcIixcclxuICAgIGNvZGU6IFwib3RoLWVyclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IG90aC1maW5cclxuICAgKi9cclxuICBPdGhlckZpbmFuY2lhbDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk90aGVyOiBGaW5hbmNpYWxcIixcclxuICAgIGNvZGU6IFwib3RoLWZpblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IG90aC1pbnRcclxuICAgKi9cclxuICBPdGhlck5vSW50ZXJwcmV0ZXJBdmFpbGFibGU6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJPdGhlcjogTm8gSW50ZXJwcmV0ZXIgQXZhaWxhYmxlXCIsXHJcbiAgICBjb2RlOiBcIm90aC1pbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FwcG9pbnRtZW50LWNhbmNlbGxhdGlvbi1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBvdGgtaXZcclxuICAgKi9cclxuICBPdGhlckltcHJvcGVySVZBY2Nlc3NJbmZpbHRyYXRlSVY6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJPdGhlcjogSW1wcm9wZXIgSVYgQWNjZXNzL0luZmlsdHJhdGUgSVZcIixcclxuICAgIGNvZGU6IFwib3RoLWl2XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogb3RoLW11XHJcbiAgICovXHJcbiAgT3RoZXJQcmVwTWVkUmVzdWx0c1VuYXZhaWxhYmxlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiT3RoZXI6IFByZXAvTWVkL1Jlc3VsdHMgVW5hdmFpbGFibGVcIixcclxuICAgIGNvZGU6IFwib3RoLW11XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogb3RoLW9lcnJcclxuICAgKi9cclxuICBPdGhlclNjaGVkdWxlT3JkZXJFcnJvcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk90aGVyOiBTY2hlZHVsZSBPcmRlciBFcnJvclwiLFxyXG4gICAgY29kZTogXCJvdGgtb2VyclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IG90aC1yb29tXHJcbiAgICovXHJcbiAgT3RoZXJSb29tUmVzb3VyY2VNYWludGVuYW5jZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk90aGVyOiBSb29tL1Jlc291cmNlIE1haW50ZW5hbmNlXCIsXHJcbiAgICBjb2RlOiBcIm90aC1yb29tXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogb3RoLXN3aWVcclxuICAgKi9cclxuICBPdGhlclNpbGVudFdhbGtJbkVycm9yOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiT3RoZXI6IFNpbGVudCBXYWxrIEluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcIm90aC1zd2llXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogb3RoLXdlYXRoXHJcbiAgICovXHJcbiAgT3RoZXJXZWF0aGVyOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiT3RoZXI6IFdlYXRoZXJcIixcclxuICAgIGNvZGU6IFwib3RoLXdlYXRoXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogb3RoZXJcclxuICAgKi9cclxuICBPdGhlcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk90aGVyXCIsXHJcbiAgICBjb2RlOiBcIm90aGVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcGF0XHJcbiAgICovXHJcbiAgUGF0aWVudDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlBhdGllbnRcIixcclxuICAgIGNvZGU6IFwicGF0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcGF0LWNwcFxyXG4gICAqL1xyXG4gIFBhdGllbnRDYW5jZWxlZFZpYVBhdGllbnRQb3J0YWw6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQYXRpZW50OiBDYW5jZWxlZCB2aWEgUGF0aWVudCBQb3J0YWxcIixcclxuICAgIGNvZGU6IFwicGF0LWNwcFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHBhdC1jcnNcclxuICAgKi9cclxuICBQYXRpZW50Q2FuY2VsZWRWaWFBdXRvbWF0ZWRSZW1pbmRlclN5c3RlbTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlBhdGllbnQ6IENhbmNlbGVkIHZpYSBhdXRvbWF0ZWQgcmVtaW5kZXIgc3lzdGVtXCIsXHJcbiAgICBjb2RlOiBcInBhdC1jcnNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FwcG9pbnRtZW50LWNhbmNlbGxhdGlvbi1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBwYXQtZGVjXHJcbiAgICovXHJcbiAgUGF0aWVudERlY2Vhc2VkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUGF0aWVudDogRGVjZWFzZWRcIixcclxuICAgIGNvZGU6IFwicGF0LWRlY1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHBhdC1mYlxyXG4gICAqL1xyXG4gIFBhdGllbnRGZWVsaW5nQmV0dGVyOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUGF0aWVudDogRmVlbGluZyBCZXR0ZXJcIixcclxuICAgIGNvZGU6IFwicGF0LWZiXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcGF0LWx0XHJcbiAgICovXHJcbiAgUGF0aWVudExhY2tPZlRyYW5zcG9ydGF0aW9uOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUGF0aWVudDogTGFjayBvZiBUcmFuc3BvcnRhdGlvblwiLFxyXG4gICAgY29kZTogXCJwYXQtbHRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FwcG9pbnRtZW50LWNhbmNlbGxhdGlvbi1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBwYXQtbXRcclxuICAgKi9cclxuICBQYXRpZW50TWVtYmVyVGVybWluYXRlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlBhdGllbnQ6IE1lbWJlciBUZXJtaW5hdGVkXCIsXHJcbiAgICBjb2RlOiBcInBhdC1tdFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHBhdC1tdlxyXG4gICAqL1xyXG4gIFBhdGllbnRNb3ZlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlBhdGllbnQ6IE1vdmVkXCIsXHJcbiAgICBjb2RlOiBcInBhdC1tdlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHBhdC1wcmVnXHJcbiAgICovXHJcbiAgUGF0aWVudFByZWduYW50OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUGF0aWVudDogUHJlZ25hbnRcIixcclxuICAgIGNvZGU6IFwicGF0LXByZWdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FwcG9pbnRtZW50LWNhbmNlbGxhdGlvbi1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBwYXQtc3dsXHJcbiAgICovXHJcbiAgUGF0aWVudFNjaGVkdWxlZEZyb21XYWl0TGlzdDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlBhdGllbnQ6IFNjaGVkdWxlZCBmcm9tIFdhaXQgTGlzdFwiLFxyXG4gICAgY29kZTogXCJwYXQtc3dsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcGF0LXVjcFxyXG4gICAqL1xyXG4gIFBhdGllbnRVbmhhcHB5Q2hhbmdlZFByb3ZpZGVyOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUGF0aWVudDogVW5oYXBweS9DaGFuZ2VkIFByb3ZpZGVyXCIsXHJcbiAgICBjb2RlOiBcInBhdC11Y3BcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FwcG9pbnRtZW50LWNhbmNlbGxhdGlvbi1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBwcm92XHJcbiAgICovXHJcbiAgUHJvdmlkZXI6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQcm92aWRlclwiLFxyXG4gICAgY29kZTogXCJwcm92XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcHJvdi1kY2hcclxuICAgKi9cclxuICBQcm92aWRlckRpc2NoYXJnZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQcm92aWRlcjogRGlzY2hhcmdlZFwiLFxyXG4gICAgY29kZTogXCJwcm92LWRjaFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHByb3YtZWR1XHJcbiAgICovXHJcbiAgUHJvdmlkZXJFZHVNZWV0aW5nOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHJvdmlkZXI6IEVkdS9NZWV0aW5nXCIsXHJcbiAgICBjb2RlOiBcInByb3YtZWR1XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcHJvdi1ob3NwXHJcbiAgICovXHJcbiAgUHJvdmlkZXJIb3NwaXRhbGl6ZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQcm92aWRlcjogSG9zcGl0YWxpemVkXCIsXHJcbiAgICBjb2RlOiBcInByb3YtaG9zcFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHByb3YtbGFic1xyXG4gICAqL1xyXG4gIFByb3ZpZGVyTGFic091dE9mQWNjZXB0YWJsZVJhbmdlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHJvdmlkZXI6IExhYnMgT3V0IG9mIEFjY2VwdGFibGUgUmFuZ2VcIixcclxuICAgIGNvZGU6IFwicHJvdi1sYWJzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBvaW50bWVudC1jYW5jZWxsYXRpb24tcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcHJvdi1tcmlcclxuICAgKi9cclxuICBQcm92aWRlck1SSVNjcmVlbmluZ0Zvcm1NYXJrZWREb05vdFByb2NlZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQcm92aWRlcjogTVJJIFNjcmVlbmluZyBGb3JtIE1hcmtlZCBEbyBOb3QgUHJvY2VlZFwiLFxyXG4gICAgY29kZTogXCJwcm92LW1yaVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IHByb3Ytb25jXHJcbiAgICovXHJcbiAgUHJvdmlkZXJPbmNvbG9neVRyZWF0bWVudFBsYW5DaGFuZ2VzOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHJvdmlkZXI6IE9uY29sb2d5IFRyZWF0bWVudCBQbGFuIENoYW5nZXNcIixcclxuICAgIGNvZGU6IFwicHJvdi1vbmNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FwcG9pbnRtZW50LWNhbmNlbGxhdGlvbi1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBwcm92LXBlcnNcclxuICAgKi9cclxuICBQcm92aWRlclBlcnNvbmFsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHJvdmlkZXI6IFBlcnNvbmFsXCIsXHJcbiAgICBjb2RlOiBcInByb3YtcGVyc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwb2ludG1lbnQtY2FuY2VsbGF0aW9uLXJlYXNvblwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhhbXBsZSB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiByZWFzb25zIGZvciB0aGUgY2FuY2VsbGF0aW9uIG9mIGFuIGFwcG9pbnRtZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXBwb2ludG1lbnRDYW5jZWxsYXRpb25SZWFzb25Db2RpbmdUeXBlID0gdHlwZW9mIEFwcG9pbnRtZW50Q2FuY2VsbGF0aW9uUmVhc29uQ29kaW5ncztcclxuIl19