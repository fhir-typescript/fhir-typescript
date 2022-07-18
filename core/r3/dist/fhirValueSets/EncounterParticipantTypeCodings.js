// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-participant-type|3.0.2
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export const EncounterParticipantTypeCodings = {
    /**
     * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    Admitter: {
        display: "admitter",
        code: "ADM",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    Attender: {
        display: "attender",
        code: "ATND",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    CallbackContact: {
        display: "callback contact",
        code: "CALLBCK",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * CON: An advisor participating in the service by performing evaluations and making recommendations.
     */
    Consultant: {
        display: "consultant",
        code: "CON",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    Discharger: {
        display: "discharger",
        code: "DIS",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * emergency: A person to be contacted in case of an emergency during the encounter.
     */
    Emergency: {
        display: "Emergency",
        code: "emergency",
        system: "http://hl7.org/fhir/participant-type",
    },
    /**
     * ESC: Only with Transportation services.  A person who escorts the patient.
     */
    Escort: {
        display: "escort",
        code: "ESC",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    Participation: {
        display: "Participation",
        code: "PART",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * PPRF: The principal or primary performer of the act.
     */
    PrimaryPerformer: {
        display: "primary performer",
        code: "PPRF",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    Referrer: {
        display: "referrer",
        code: "REF",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    SecondaryPerformer: {
        display: "secondary performer",
        code: "SPRF",
        system: "http://hl7.org/fhir/v3/ParticipationType",
    },
    /**
     * translator: A translator who is facilitating communication with the patient during the encounter.
     */
    Translator: {
        display: "Translator",
        code: "translator",
        system: "http://hl7.org/fhir/participant-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyUGFydGljaXBhbnRUeXBlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRW5jb3VudGVyUGFydGljaXBhbnRUeXBlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrRUFBK0U7QUEwRC9FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQXNDO0lBQ2hGOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHNDQUFzQztLQUMvQztJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILGdCQUFnQixFQUFFO1FBQ2hCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsc0NBQXNDO0tBQy9DO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9lbmNvdW50ZXItcGFydGljaXBhbnQtdHlwZXwzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGRlZmluZXMgYSBzZXQgb2YgY29kZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSBob3cgYW4gaW5kaXZpZHVhbCBwYXJ0aWNpcGF0ZXMgaW4gYW4gZW5jb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRW5jb3VudGVyUGFydGljaXBhbnRUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBBRE06IFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciBhZG1pdHRpbmcgYSBwYXRpZW50IHRvIGEgcGF0aWVudCBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgQWRtaXR0ZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQVRORDogVGhlIHByYWN0aXRpb25lciB0aGF0IGhhcyByZXNwb25zaWJpbGl0eSBmb3Igb3ZlcnNlZWluZyBhIHBhdGllbnQncyBjYXJlIGR1cmluZyBhIHBhdGllbnQgZW5jb3VudGVyLlxyXG4gICAqL1xyXG4gIEF0dGVuZGVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENBTExCQ0s6IEEgcGVyc29uIG9yIG9yZ2FuaXphdGlvbiB3aG8gc2hvdWxkIGJlIGNvbnRhY3RlZCBmb3IgZm9sbG93LXVwIHF1ZXN0aW9ucyBhYm91dCB0aGUgYWN0IGluIHBsYWNlIG9mIHRoZSBhdXRob3IuXHJcbiAgICovXHJcbiAgQ2FsbGJhY2tDb250YWN0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENPTjogQW4gYWR2aXNvciBwYXJ0aWNpcGF0aW5nIGluIHRoZSBzZXJ2aWNlIGJ5IHBlcmZvcm1pbmcgZXZhbHVhdGlvbnMgYW5kIG1ha2luZyByZWNvbW1lbmRhdGlvbnMuXHJcbiAgICovXHJcbiAgQ29uc3VsdGFudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBESVM6IFRoZSBwcmFjdGl0aW9uZXIgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgZGlzY2hhcmdlIG9mIGEgcGF0aWVudCBmcm9tIGEgcGF0aWVudCBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgRGlzY2hhcmdlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbWVyZ2VuY3k6IEEgcGVyc29uIHRvIGJlIGNvbnRhY3RlZCBpbiBjYXNlIG9mIGFuIGVtZXJnZW5jeSBkdXJpbmcgdGhlIGVuY291bnRlci5cclxuICAgKi9cclxuICBFbWVyZ2VuY3k6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogRVNDOiBPbmx5IHdpdGggVHJhbnNwb3J0YXRpb24gc2VydmljZXMuICBBIHBlcnNvbiB3aG8gZXNjb3J0cyB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBFc2NvcnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogUEFSVDogSW5kaWNhdGVzIHRoYXQgdGhlIHRhcmdldCBvZiB0aGUgcGFydGljaXBhdGlvbiBpcyBpbnZvbHZlZCBpbiBzb21lIG1hbm5lciBpbiB0aGUgYWN0LCBidXQgZG9lcyBub3QgcXVhbGlmeSBob3cuXHJcbiAgICovXHJcbiAgUGFydGljaXBhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBQUFJGOiBUaGUgcHJpbmNpcGFsIG9yIHByaW1hcnkgcGVyZm9ybWVyIG9mIHRoZSBhY3QuXHJcbiAgICovXHJcbiAgUHJpbWFyeVBlcmZvcm1lcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBSRUY6IEEgcGVyc29uIGhhdmluZyByZWZlcnJlZCB0aGUgc3ViamVjdCBvZiB0aGUgc2VydmljZSB0byB0aGUgcGVyZm9ybWVyIChyZWZlcnJpbmcgcGh5c2ljaWFuKS4gIFR5cGljYWxseSwgYSByZWZlcnJpbmcgcGh5c2ljaWFuIHdpbGwgcmVjZWl2ZSBhIHJlcG9ydC5cclxuICAgKi9cclxuICBSZWZlcnJlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBTUFJGOiBBIHBlcnNvbiBhc3Npc3RpbmcgaW4gYW4gYWN0IHRocm91Z2ggaGlzIHN1YnN0YW50aWFsIHByZXNlbmNlIGFuZCBpbnZvbHZlbWVudCAgIFRoaXMgaW5jbHVkZXM6IGFzc2lzdGFudHMsIHRlY2huaWNpYW5zLCBhc3NvY2lhdGVzLCBvciB3aGF0ZXZlciB0aGUgam9iIHRpdGxlcyBtYXkgYmUuXHJcbiAgICovXHJcbiAgU2Vjb25kYXJ5UGVyZm9ybWVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHRyYW5zbGF0b3I6IEEgdHJhbnNsYXRvciB3aG8gaXMgZmFjaWxpdGF0aW5nIGNvbW11bmljYXRpb24gd2l0aCB0aGUgcGF0aWVudCBkdXJpbmcgdGhlIGVuY291bnRlci5cclxuICAgKi9cclxuICBUcmFuc2xhdG9yOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiBjb2RlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIGhvdyBhbiBpbmRpdmlkdWFsIHBhcnRpY2lwYXRlcyBpbiBhbiBlbmNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRW5jb3VudGVyUGFydGljaXBhbnRUeXBlQ29kaW5nczpFbmNvdW50ZXJQYXJ0aWNpcGFudFR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIEFETTogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIGFkbWl0dGluZyBhIHBhdGllbnQgdG8gYSBwYXRpZW50IGVuY291bnRlci5cclxuICAgKi9cclxuICBBZG1pdHRlcjoge1xyXG4gICAgZGlzcGxheTogXCJhZG1pdHRlclwiLFxyXG4gICAgY29kZTogXCJBRE1cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL1BhcnRpY2lwYXRpb25UeXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBVE5EOiBUaGUgcHJhY3RpdGlvbmVyIHRoYXQgaGFzIHJlc3BvbnNpYmlsaXR5IGZvciBvdmVyc2VlaW5nIGEgcGF0aWVudCdzIGNhcmUgZHVyaW5nIGEgcGF0aWVudCBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgQXR0ZW5kZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiYXR0ZW5kZXJcIixcclxuICAgIGNvZGU6IFwiQVRORFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvblR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENBTExCQ0s6IEEgcGVyc29uIG9yIG9yZ2FuaXphdGlvbiB3aG8gc2hvdWxkIGJlIGNvbnRhY3RlZCBmb3IgZm9sbG93LXVwIHF1ZXN0aW9ucyBhYm91dCB0aGUgYWN0IGluIHBsYWNlIG9mIHRoZSBhdXRob3IuXHJcbiAgICovXHJcbiAgQ2FsbGJhY2tDb250YWN0OiB7XHJcbiAgICBkaXNwbGF5OiBcImNhbGxiYWNrIGNvbnRhY3RcIixcclxuICAgIGNvZGU6IFwiQ0FMTEJDS1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvblR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENPTjogQW4gYWR2aXNvciBwYXJ0aWNpcGF0aW5nIGluIHRoZSBzZXJ2aWNlIGJ5IHBlcmZvcm1pbmcgZXZhbHVhdGlvbnMgYW5kIG1ha2luZyByZWNvbW1lbmRhdGlvbnMuXHJcbiAgICovXHJcbiAgQ29uc3VsdGFudDoge1xyXG4gICAgZGlzcGxheTogXCJjb25zdWx0YW50XCIsXHJcbiAgICBjb2RlOiBcIkNPTlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvblR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIERJUzogVGhlIHByYWN0aXRpb25lciB3aG8gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBkaXNjaGFyZ2Ugb2YgYSBwYXRpZW50IGZyb20gYSBwYXRpZW50IGVuY291bnRlci5cclxuICAgKi9cclxuICBEaXNjaGFyZ2VyOiB7XHJcbiAgICBkaXNwbGF5OiBcImRpc2NoYXJnZXJcIixcclxuICAgIGNvZGU6IFwiRElTXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9QYXJ0aWNpcGF0aW9uVHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZW1lcmdlbmN5OiBBIHBlcnNvbiB0byBiZSBjb250YWN0ZWQgaW4gY2FzZSBvZiBhbiBlbWVyZ2VuY3kgZHVyaW5nIHRoZSBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgRW1lcmdlbmN5OiB7XHJcbiAgICBkaXNwbGF5OiBcIkVtZXJnZW5jeVwiLFxyXG4gICAgY29kZTogXCJlbWVyZ2VuY3lcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3BhcnRpY2lwYW50LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEVTQzogT25seSB3aXRoIFRyYW5zcG9ydGF0aW9uIHNlcnZpY2VzLiAgQSBwZXJzb24gd2hvIGVzY29ydHMgdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgRXNjb3J0OiB7XHJcbiAgICBkaXNwbGF5OiBcImVzY29ydFwiLFxyXG4gICAgY29kZTogXCJFU0NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL1BhcnRpY2lwYXRpb25UeXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBQQVJUOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdGFyZ2V0IG9mIHRoZSBwYXJ0aWNpcGF0aW9uIGlzIGludm9sdmVkIGluIHNvbWUgbWFubmVyIGluIHRoZSBhY3QsIGJ1dCBkb2VzIG5vdCBxdWFsaWZ5IGhvdy5cclxuICAgKi9cclxuICBQYXJ0aWNpcGF0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBhcnRpY2lwYXRpb25cIixcclxuICAgIGNvZGU6IFwiUEFSVFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvblR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFBQUkY6IFRoZSBwcmluY2lwYWwgb3IgcHJpbWFyeSBwZXJmb3JtZXIgb2YgdGhlIGFjdC5cclxuICAgKi9cclxuICBQcmltYXJ5UGVyZm9ybWVyOiB7XHJcbiAgICBkaXNwbGF5OiBcInByaW1hcnkgcGVyZm9ybWVyXCIsXHJcbiAgICBjb2RlOiBcIlBQUkZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL1BhcnRpY2lwYXRpb25UeXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBSRUY6IEEgcGVyc29uIGhhdmluZyByZWZlcnJlZCB0aGUgc3ViamVjdCBvZiB0aGUgc2VydmljZSB0byB0aGUgcGVyZm9ybWVyIChyZWZlcnJpbmcgcGh5c2ljaWFuKS4gIFR5cGljYWxseSwgYSByZWZlcnJpbmcgcGh5c2ljaWFuIHdpbGwgcmVjZWl2ZSBhIHJlcG9ydC5cclxuICAgKi9cclxuICBSZWZlcnJlcjoge1xyXG4gICAgZGlzcGxheTogXCJyZWZlcnJlclwiLFxyXG4gICAgY29kZTogXCJSRUZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL1BhcnRpY2lwYXRpb25UeXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBTUFJGOiBBIHBlcnNvbiBhc3Npc3RpbmcgaW4gYW4gYWN0IHRocm91Z2ggaGlzIHN1YnN0YW50aWFsIHByZXNlbmNlIGFuZCBpbnZvbHZlbWVudCAgIFRoaXMgaW5jbHVkZXM6IGFzc2lzdGFudHMsIHRlY2huaWNpYW5zLCBhc3NvY2lhdGVzLCBvciB3aGF0ZXZlciB0aGUgam9iIHRpdGxlcyBtYXkgYmUuXHJcbiAgICovXHJcbiAgU2Vjb25kYXJ5UGVyZm9ybWVyOiB7XHJcbiAgICBkaXNwbGF5OiBcInNlY29uZGFyeSBwZXJmb3JtZXJcIixcclxuICAgIGNvZGU6IFwiU1BSRlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvUGFydGljaXBhdGlvblR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRyYW5zbGF0b3I6IEEgdHJhbnNsYXRvciB3aG8gaXMgZmFjaWxpdGF0aW5nIGNvbW11bmljYXRpb24gd2l0aCB0aGUgcGF0aWVudCBkdXJpbmcgdGhlIGVuY291bnRlci5cclxuICAgKi9cclxuICBUcmFuc2xhdG9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIlRyYW5zbGF0b3JcIixcclxuICAgIGNvZGU6IFwidHJhbnNsYXRvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcGFydGljaXBhbnQtdHlwZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==