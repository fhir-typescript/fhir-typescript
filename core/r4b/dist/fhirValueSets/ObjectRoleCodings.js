// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/object-role|4.3.0
/**
 * Code representing the role the entity played in the audit event.
 */
export const ObjectRoleCodings = {
    /**
     * 1: This object is the patient that is the subject of care related to this event.  It is identifiable by patient ID or equivalent.  The patient may be either human or animal.
     */
    Patient: {
        display: "Patient",
        code: "1",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 10: Insurance company, or any other organization who accepts responsibility for paying for the healthcare event.
     */
    Guarantor: {
        display: "Guarantor",
        code: "10",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 11: A person or active system object involved in the event with a security role.
     */
    SecurityUserEntity: {
        display: "Security User Entity",
        code: "11",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 12: A person or system object involved in the event with the authority to modify security roles of other objects.
     */
    SecurityUserGroup: {
        display: "Security User Group",
        code: "12",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 13: A passive object, such as a role table, that is relevant to the event.
     */
    SecurityResource: {
        display: "Security Resource",
        code: "13",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 14: (deprecated)  Relevant to certain RBAC security methodologies.
     */
    SecurityGranularityDefinition: {
        display: "Security Granularity Definition",
        code: "14",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 15: Any person or organization responsible for providing care.  This encompasses all forms of care, licensed or otherwise, and all sorts of teams and care groups. Note the distinction between practitioner and the doctor that actually provided the care to the patient.
     */
    Practitioner: {
        display: "Practitioner",
        code: "15",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 16: The source or destination for data transfer, when it does not match some other role.
     */
    DataDestination: {
        display: "Data Destination",
        code: "16",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 17: A source or destination for data transfer that acts as an archive, database, or similar role.
     */
    DataRepository: {
        display: "Data Repository",
        code: "17",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 18: An object that holds schedule information.  This could be an appointment book, availability information, etc.
     */
    Schedule: {
        display: "Schedule",
        code: "18",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 19: An organization or person that is the recipient of services.  This could be an organization that is buying services for a patient, or a person that is buying services for an animal.
     */
    Customer: {
        display: "Customer",
        code: "19",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 2: This is a location identified as related to the event.  This is usually the location where the event took place.  Note that for shipping, the usual events are arrival at a location or departure from a location.
     */
    Location: {
        display: "Location",
        code: "2",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 20: An order, task, work item, procedure step, or other description of work to be performed; e.g. a particular instance of an MPPS.
     */
    Job: {
        display: "Job",
        code: "20",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 21: A list of jobs or a system that provides lists of jobs; e.g. an MWL SCP.
     */
    JobStream: {
        display: "Job Stream",
        code: "21",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 22: (Deprecated).
     */
    Table: {
        display: "Table",
        code: "22",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 23: An object that specifies or controls the routing or delivery of items.  For example, a distribution list is the routing criteria for mail.  The items delivered may be documents, jobs, or other objects.
     */
    RoutingCriteria: {
        display: "Routing Criteria",
        code: "23",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 24: The contents of a query.  This is used to capture the contents of any kind of query.  For security surveillance purposes knowing the queries being made is very important.
     */
    Query: {
        display: "Query",
        code: "24",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 3: This object is any kind of persistent document created as a result of the event.  This could be a paper report, film, electronic report, DICOM Study, etc.  Issues related to medical records life cycle management are conveyed elsewhere.
     */
    Report: {
        display: "Report",
        code: "3",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 4: A logical object related to a health record event.  This is any healthcare  specific resource (object) not restricted to FHIR defined Resources.
     */
    DomainResource: {
        display: "Domain Resource",
        code: "4",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 5: This is any configurable file used to control creation of documents.  Examples include the objects maintained by the HL7 Master File transactions, Value Sets, etc.
     */
    MasterFile: {
        display: "Master file",
        code: "5",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 6: A human participant not otherwise identified by some other category.
     */
    User: {
        display: "User",
        code: "6",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 7: (deprecated).
     */
    List: {
        display: "List",
        code: "7",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 8: Typically, a licensed person who is providing or performing care related to the event, generally a physician.   The key distinction between doctor and practitioner is with regards to their role, not the licensing.  The doctor is the human who actually performed the work.  The practitioner is the human or organization that is responsible for the work.
     */
    Doctor: {
        display: "Doctor",
        code: "8",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
    /**
     * 9: A person or system that is being notified as part of the event.  This is relevant in situations where automated systems provide notifications to other parties when an event took place.
     */
    Subscriber: {
        display: "Subscriber",
        code: "9",
        system: "http://terminology.hl7.org/CodeSystem/object-role",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0Um9sZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL09iamVjdFJvbGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQTBHaEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBd0I7SUFDcEQ7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUU7UUFDbEIsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILGlCQUFpQixFQUFFO1FBQ2pCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsNkJBQTZCLEVBQUU7UUFDN0IsT0FBTyxFQUFFLGlDQUFpQztRQUMxQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L29iamVjdC1yb2xlfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQ29kZSByZXByZXNlbnRpbmcgdGhlIHJvbGUgdGhlIGVudGl0eSBwbGF5ZWQgaW4gdGhlIGF1ZGl0IGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgT2JqZWN0Um9sZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogMTogVGhpcyBvYmplY3QgaXMgdGhlIHBhdGllbnQgdGhhdCBpcyB0aGUgc3ViamVjdCBvZiBjYXJlIHJlbGF0ZWQgdG8gdGhpcyBldmVudC4gIEl0IGlzIGlkZW50aWZpYWJsZSBieSBwYXRpZW50IElEIG9yIGVxdWl2YWxlbnQuICBUaGUgcGF0aWVudCBtYXkgYmUgZWl0aGVyIGh1bWFuIG9yIGFuaW1hbC5cclxuICAgKi9cclxuICBQYXRpZW50OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDEwOiBJbnN1cmFuY2UgY29tcGFueSwgb3IgYW55IG90aGVyIG9yZ2FuaXphdGlvbiB3aG8gYWNjZXB0cyByZXNwb25zaWJpbGl0eSBmb3IgcGF5aW5nIGZvciB0aGUgaGVhbHRoY2FyZSBldmVudC5cclxuICAgKi9cclxuICBHdWFyYW50b3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTE6IEEgcGVyc29uIG9yIGFjdGl2ZSBzeXN0ZW0gb2JqZWN0IGludm9sdmVkIGluIHRoZSBldmVudCB3aXRoIGEgc2VjdXJpdHkgcm9sZS5cclxuICAgKi9cclxuICBTZWN1cml0eVVzZXJFbnRpdHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTI6IEEgcGVyc29uIG9yIHN5c3RlbSBvYmplY3QgaW52b2x2ZWQgaW4gdGhlIGV2ZW50IHdpdGggdGhlIGF1dGhvcml0eSB0byBtb2RpZnkgc2VjdXJpdHkgcm9sZXMgb2Ygb3RoZXIgb2JqZWN0cy5cclxuICAgKi9cclxuICBTZWN1cml0eVVzZXJHcm91cDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMzogQSBwYXNzaXZlIG9iamVjdCwgc3VjaCBhcyBhIHJvbGUgdGFibGUsIHRoYXQgaXMgcmVsZXZhbnQgdG8gdGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIFNlY3VyaXR5UmVzb3VyY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTQ6IChkZXByZWNhdGVkKSAgUmVsZXZhbnQgdG8gY2VydGFpbiBSQkFDIHNlY3VyaXR5IG1ldGhvZG9sb2dpZXMuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlHcmFudWxhcml0eURlZmluaXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTU6IEFueSBwZXJzb24gb3Igb3JnYW5pemF0aW9uIHJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgY2FyZS4gIFRoaXMgZW5jb21wYXNzZXMgYWxsIGZvcm1zIG9mIGNhcmUsIGxpY2Vuc2VkIG9yIG90aGVyd2lzZSwgYW5kIGFsbCBzb3J0cyBvZiB0ZWFtcyBhbmQgY2FyZSBncm91cHMuIE5vdGUgdGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gcHJhY3RpdGlvbmVyIGFuZCB0aGUgZG9jdG9yIHRoYXQgYWN0dWFsbHkgcHJvdmlkZWQgdGhlIGNhcmUgdG8gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgUHJhY3RpdGlvbmVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDE2OiBUaGUgc291cmNlIG9yIGRlc3RpbmF0aW9uIGZvciBkYXRhIHRyYW5zZmVyLCB3aGVuIGl0IGRvZXMgbm90IG1hdGNoIHNvbWUgb3RoZXIgcm9sZS5cclxuICAgKi9cclxuICBEYXRhRGVzdGluYXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTc6IEEgc291cmNlIG9yIGRlc3RpbmF0aW9uIGZvciBkYXRhIHRyYW5zZmVyIHRoYXQgYWN0cyBhcyBhbiBhcmNoaXZlLCBkYXRhYmFzZSwgb3Igc2ltaWxhciByb2xlLlxyXG4gICAqL1xyXG4gIERhdGFSZXBvc2l0b3J5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDE4OiBBbiBvYmplY3QgdGhhdCBob2xkcyBzY2hlZHVsZSBpbmZvcm1hdGlvbi4gIFRoaXMgY291bGQgYmUgYW4gYXBwb2ludG1lbnQgYm9vaywgYXZhaWxhYmlsaXR5IGluZm9ybWF0aW9uLCBldGMuXHJcbiAgICovXHJcbiAgU2NoZWR1bGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTk6IEFuIG9yZ2FuaXphdGlvbiBvciBwZXJzb24gdGhhdCBpcyB0aGUgcmVjaXBpZW50IG9mIHNlcnZpY2VzLiAgVGhpcyBjb3VsZCBiZSBhbiBvcmdhbml6YXRpb24gdGhhdCBpcyBidXlpbmcgc2VydmljZXMgZm9yIGEgcGF0aWVudCwgb3IgYSBwZXJzb24gdGhhdCBpcyBidXlpbmcgc2VydmljZXMgZm9yIGFuIGFuaW1hbC5cclxuICAgKi9cclxuICBDdXN0b21lcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAyOiBUaGlzIGlzIGEgbG9jYXRpb24gaWRlbnRpZmllZCBhcyByZWxhdGVkIHRvIHRoZSBldmVudC4gIFRoaXMgaXMgdXN1YWxseSB0aGUgbG9jYXRpb24gd2hlcmUgdGhlIGV2ZW50IHRvb2sgcGxhY2UuICBOb3RlIHRoYXQgZm9yIHNoaXBwaW5nLCB0aGUgdXN1YWwgZXZlbnRzIGFyZSBhcnJpdmFsIGF0IGEgbG9jYXRpb24gb3IgZGVwYXJ0dXJlIGZyb20gYSBsb2NhdGlvbi5cclxuICAgKi9cclxuICBMb2NhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAyMDogQW4gb3JkZXIsIHRhc2ssIHdvcmsgaXRlbSwgcHJvY2VkdXJlIHN0ZXAsIG9yIG90aGVyIGRlc2NyaXB0aW9uIG9mIHdvcmsgdG8gYmUgcGVyZm9ybWVkOyBlLmcuIGEgcGFydGljdWxhciBpbnN0YW5jZSBvZiBhbiBNUFBTLlxyXG4gICAqL1xyXG4gIEpvYjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAyMTogQSBsaXN0IG9mIGpvYnMgb3IgYSBzeXN0ZW0gdGhhdCBwcm92aWRlcyBsaXN0cyBvZiBqb2JzOyBlLmcuIGFuIE1XTCBTQ1AuXHJcbiAgICovXHJcbiAgSm9iU3RyZWFtOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDIyOiAoRGVwcmVjYXRlZCkuXHJcbiAgICovXHJcbiAgVGFibGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMjM6IEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBvciBjb250cm9scyB0aGUgcm91dGluZyBvciBkZWxpdmVyeSBvZiBpdGVtcy4gIEZvciBleGFtcGxlLCBhIGRpc3RyaWJ1dGlvbiBsaXN0IGlzIHRoZSByb3V0aW5nIGNyaXRlcmlhIGZvciBtYWlsLiAgVGhlIGl0ZW1zIGRlbGl2ZXJlZCBtYXkgYmUgZG9jdW1lbnRzLCBqb2JzLCBvciBvdGhlciBvYmplY3RzLlxyXG4gICAqL1xyXG4gIFJvdXRpbmdDcml0ZXJpYTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAyNDogVGhlIGNvbnRlbnRzIG9mIGEgcXVlcnkuICBUaGlzIGlzIHVzZWQgdG8gY2FwdHVyZSB0aGUgY29udGVudHMgb2YgYW55IGtpbmQgb2YgcXVlcnkuICBGb3Igc2VjdXJpdHkgc3VydmVpbGxhbmNlIHB1cnBvc2VzIGtub3dpbmcgdGhlIHF1ZXJpZXMgYmVpbmcgbWFkZSBpcyB2ZXJ5IGltcG9ydGFudC5cclxuICAgKi9cclxuICBRdWVyeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAzOiBUaGlzIG9iamVjdCBpcyBhbnkga2luZCBvZiBwZXJzaXN0ZW50IGRvY3VtZW50IGNyZWF0ZWQgYXMgYSByZXN1bHQgb2YgdGhlIGV2ZW50LiAgVGhpcyBjb3VsZCBiZSBhIHBhcGVyIHJlcG9ydCwgZmlsbSwgZWxlY3Ryb25pYyByZXBvcnQsIERJQ09NIFN0dWR5LCBldGMuICBJc3N1ZXMgcmVsYXRlZCB0byBtZWRpY2FsIHJlY29yZHMgbGlmZSBjeWNsZSBtYW5hZ2VtZW50IGFyZSBjb252ZXllZCBlbHNld2hlcmUuXHJcbiAgICovXHJcbiAgUmVwb3J0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDQ6IEEgbG9naWNhbCBvYmplY3QgcmVsYXRlZCB0byBhIGhlYWx0aCByZWNvcmQgZXZlbnQuICBUaGlzIGlzIGFueSBoZWFsdGhjYXJlICBzcGVjaWZpYyByZXNvdXJjZSAob2JqZWN0KSBub3QgcmVzdHJpY3RlZCB0byBGSElSIGRlZmluZWQgUmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIERvbWFpblJlc291cmNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDU6IFRoaXMgaXMgYW55IGNvbmZpZ3VyYWJsZSBmaWxlIHVzZWQgdG8gY29udHJvbCBjcmVhdGlvbiBvZiBkb2N1bWVudHMuICBFeGFtcGxlcyBpbmNsdWRlIHRoZSBvYmplY3RzIG1haW50YWluZWQgYnkgdGhlIEhMNyBNYXN0ZXIgRmlsZSB0cmFuc2FjdGlvbnMsIFZhbHVlIFNldHMsIGV0Yy5cclxuICAgKi9cclxuICBNYXN0ZXJGaWxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDY6IEEgaHVtYW4gcGFydGljaXBhbnQgbm90IG90aGVyd2lzZSBpZGVudGlmaWVkIGJ5IHNvbWUgb3RoZXIgY2F0ZWdvcnkuXHJcbiAgICovXHJcbiAgVXNlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiA3OiAoZGVwcmVjYXRlZCkuXHJcbiAgICovXHJcbiAgTGlzdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiA4OiBUeXBpY2FsbHksIGEgbGljZW5zZWQgcGVyc29uIHdobyBpcyBwcm92aWRpbmcgb3IgcGVyZm9ybWluZyBjYXJlIHJlbGF0ZWQgdG8gdGhlIGV2ZW50LCBnZW5lcmFsbHkgYSBwaHlzaWNpYW4uICAgVGhlIGtleSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGRvY3RvciBhbmQgcHJhY3RpdGlvbmVyIGlzIHdpdGggcmVnYXJkcyB0byB0aGVpciByb2xlLCBub3QgdGhlIGxpY2Vuc2luZy4gIFRoZSBkb2N0b3IgaXMgdGhlIGh1bWFuIHdobyBhY3R1YWxseSBwZXJmb3JtZWQgdGhlIHdvcmsuICBUaGUgcHJhY3RpdGlvbmVyIGlzIHRoZSBodW1hbiBvciBvcmdhbml6YXRpb24gdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHdvcmsuXHJcbiAgICovXHJcbiAgRG9jdG9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDk6IEEgcGVyc29uIG9yIHN5c3RlbSB0aGF0IGlzIGJlaW5nIG5vdGlmaWVkIGFzIHBhcnQgb2YgdGhlIGV2ZW50LiAgVGhpcyBpcyByZWxldmFudCBpbiBzaXR1YXRpb25zIHdoZXJlIGF1dG9tYXRlZCBzeXN0ZW1zIHByb3ZpZGUgbm90aWZpY2F0aW9ucyB0byBvdGhlciBwYXJ0aWVzIHdoZW4gYW4gZXZlbnQgdG9vayBwbGFjZS5cclxuICAgKi9cclxuICBTdWJzY3JpYmVyOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29kZSByZXByZXNlbnRpbmcgdGhlIHJvbGUgdGhlIGVudGl0eSBwbGF5ZWQgaW4gdGhlIGF1ZGl0IGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9iamVjdFJvbGVDb2RpbmdzOk9iamVjdFJvbGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIDE6IFRoaXMgb2JqZWN0IGlzIHRoZSBwYXRpZW50IHRoYXQgaXMgdGhlIHN1YmplY3Qgb2YgY2FyZSByZWxhdGVkIHRvIHRoaXMgZXZlbnQuICBJdCBpcyBpZGVudGlmaWFibGUgYnkgcGF0aWVudCBJRCBvciBlcXVpdmFsZW50LiAgVGhlIHBhdGllbnQgbWF5IGJlIGVpdGhlciBodW1hbiBvciBhbmltYWwuXHJcbiAgICovXHJcbiAgUGF0aWVudDoge1xyXG4gICAgZGlzcGxheTogXCJQYXRpZW50XCIsXHJcbiAgICBjb2RlOiBcIjFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29iamVjdC1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMDogSW5zdXJhbmNlIGNvbXBhbnksIG9yIGFueSBvdGhlciBvcmdhbml6YXRpb24gd2hvIGFjY2VwdHMgcmVzcG9uc2liaWxpdHkgZm9yIHBheWluZyBmb3IgdGhlIGhlYWx0aGNhcmUgZXZlbnQuXHJcbiAgICovXHJcbiAgR3VhcmFudG9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkd1YXJhbnRvclwiLFxyXG4gICAgY29kZTogXCIxMFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vb2JqZWN0LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExOiBBIHBlcnNvbiBvciBhY3RpdmUgc3lzdGVtIG9iamVjdCBpbnZvbHZlZCBpbiB0aGUgZXZlbnQgd2l0aCBhIHNlY3VyaXR5IHJvbGUuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlVc2VyRW50aXR5OiB7XHJcbiAgICBkaXNwbGF5OiBcIlNlY3VyaXR5IFVzZXIgRW50aXR5XCIsXHJcbiAgICBjb2RlOiBcIjExXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTI6IEEgcGVyc29uIG9yIHN5c3RlbSBvYmplY3QgaW52b2x2ZWQgaW4gdGhlIGV2ZW50IHdpdGggdGhlIGF1dGhvcml0eSB0byBtb2RpZnkgc2VjdXJpdHkgcm9sZXMgb2Ygb3RoZXIgb2JqZWN0cy5cclxuICAgKi9cclxuICBTZWN1cml0eVVzZXJHcm91cDoge1xyXG4gICAgZGlzcGxheTogXCJTZWN1cml0eSBVc2VyIEdyb3VwXCIsXHJcbiAgICBjb2RlOiBcIjEyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTM6IEEgcGFzc2l2ZSBvYmplY3QsIHN1Y2ggYXMgYSByb2xlIHRhYmxlLCB0aGF0IGlzIHJlbGV2YW50IHRvIHRoZSBldmVudC5cclxuICAgKi9cclxuICBTZWN1cml0eVJlc291cmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlNlY3VyaXR5IFJlc291cmNlXCIsXHJcbiAgICBjb2RlOiBcIjEzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTQ6IChkZXByZWNhdGVkKSAgUmVsZXZhbnQgdG8gY2VydGFpbiBSQkFDIHNlY3VyaXR5IG1ldGhvZG9sb2dpZXMuXHJcbiAgICovXHJcbiAgU2VjdXJpdHlHcmFudWxhcml0eURlZmluaXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiU2VjdXJpdHkgR3JhbnVsYXJpdHkgRGVmaW5pdGlvblwiLFxyXG4gICAgY29kZTogXCIxNFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vb2JqZWN0LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDE1OiBBbnkgcGVyc29uIG9yIG9yZ2FuaXphdGlvbiByZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIGNhcmUuICBUaGlzIGVuY29tcGFzc2VzIGFsbCBmb3JtcyBvZiBjYXJlLCBsaWNlbnNlZCBvciBvdGhlcndpc2UsIGFuZCBhbGwgc29ydHMgb2YgdGVhbXMgYW5kIGNhcmUgZ3JvdXBzLiBOb3RlIHRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIHByYWN0aXRpb25lciBhbmQgdGhlIGRvY3RvciB0aGF0IGFjdHVhbGx5IHByb3ZpZGVkIHRoZSBjYXJlIHRvIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFByYWN0aXRpb25lcjoge1xyXG4gICAgZGlzcGxheTogXCJQcmFjdGl0aW9uZXJcIixcclxuICAgIGNvZGU6IFwiMTVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29iamVjdC1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxNjogVGhlIHNvdXJjZSBvciBkZXN0aW5hdGlvbiBmb3IgZGF0YSB0cmFuc2Zlciwgd2hlbiBpdCBkb2VzIG5vdCBtYXRjaCBzb21lIG90aGVyIHJvbGUuXHJcbiAgICovXHJcbiAgRGF0YURlc3RpbmF0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRhdGEgRGVzdGluYXRpb25cIixcclxuICAgIGNvZGU6IFwiMTZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29iamVjdC1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxNzogQSBzb3VyY2Ugb3IgZGVzdGluYXRpb24gZm9yIGRhdGEgdHJhbnNmZXIgdGhhdCBhY3RzIGFzIGFuIGFyY2hpdmUsIGRhdGFiYXNlLCBvciBzaW1pbGFyIHJvbGUuXHJcbiAgICovXHJcbiAgRGF0YVJlcG9zaXRvcnk6IHtcclxuICAgIGRpc3BsYXk6IFwiRGF0YSBSZXBvc2l0b3J5XCIsXHJcbiAgICBjb2RlOiBcIjE3XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTg6IEFuIG9iamVjdCB0aGF0IGhvbGRzIHNjaGVkdWxlIGluZm9ybWF0aW9uLiAgVGhpcyBjb3VsZCBiZSBhbiBhcHBvaW50bWVudCBib29rLCBhdmFpbGFiaWxpdHkgaW5mb3JtYXRpb24sIGV0Yy5cclxuICAgKi9cclxuICBTY2hlZHVsZToge1xyXG4gICAgZGlzcGxheTogXCJTY2hlZHVsZVwiLFxyXG4gICAgY29kZTogXCIxOFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vb2JqZWN0LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDE5OiBBbiBvcmdhbml6YXRpb24gb3IgcGVyc29uIHRoYXQgaXMgdGhlIHJlY2lwaWVudCBvZiBzZXJ2aWNlcy4gIFRoaXMgY291bGQgYmUgYW4gb3JnYW5pemF0aW9uIHRoYXQgaXMgYnV5aW5nIHNlcnZpY2VzIGZvciBhIHBhdGllbnQsIG9yIGEgcGVyc29uIHRoYXQgaXMgYnV5aW5nIHNlcnZpY2VzIGZvciBhbiBhbmltYWwuXHJcbiAgICovXHJcbiAgQ3VzdG9tZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiQ3VzdG9tZXJcIixcclxuICAgIGNvZGU6IFwiMTlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29iamVjdC1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAyOiBUaGlzIGlzIGEgbG9jYXRpb24gaWRlbnRpZmllZCBhcyByZWxhdGVkIHRvIHRoZSBldmVudC4gIFRoaXMgaXMgdXN1YWxseSB0aGUgbG9jYXRpb24gd2hlcmUgdGhlIGV2ZW50IHRvb2sgcGxhY2UuICBOb3RlIHRoYXQgZm9yIHNoaXBwaW5nLCB0aGUgdXN1YWwgZXZlbnRzIGFyZSBhcnJpdmFsIGF0IGEgbG9jYXRpb24gb3IgZGVwYXJ0dXJlIGZyb20gYSBsb2NhdGlvbi5cclxuICAgKi9cclxuICBMb2NhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJMb2NhdGlvblwiLFxyXG4gICAgY29kZTogXCIyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMjA6IEFuIG9yZGVyLCB0YXNrLCB3b3JrIGl0ZW0sIHByb2NlZHVyZSBzdGVwLCBvciBvdGhlciBkZXNjcmlwdGlvbiBvZiB3b3JrIHRvIGJlIHBlcmZvcm1lZDsgZS5nLiBhIHBhcnRpY3VsYXIgaW5zdGFuY2Ugb2YgYW4gTVBQUy5cclxuICAgKi9cclxuICBKb2I6IHtcclxuICAgIGRpc3BsYXk6IFwiSm9iXCIsXHJcbiAgICBjb2RlOiBcIjIwXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMjE6IEEgbGlzdCBvZiBqb2JzIG9yIGEgc3lzdGVtIHRoYXQgcHJvdmlkZXMgbGlzdHMgb2Ygam9iczsgZS5nLiBhbiBNV0wgU0NQLlxyXG4gICAqL1xyXG4gIEpvYlN0cmVhbToge1xyXG4gICAgZGlzcGxheTogXCJKb2IgU3RyZWFtXCIsXHJcbiAgICBjb2RlOiBcIjIxXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMjI6IChEZXByZWNhdGVkKS5cclxuICAgKi9cclxuICBUYWJsZToge1xyXG4gICAgZGlzcGxheTogXCJUYWJsZVwiLFxyXG4gICAgY29kZTogXCIyMlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vb2JqZWN0LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDIzOiBBbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgb3IgY29udHJvbHMgdGhlIHJvdXRpbmcgb3IgZGVsaXZlcnkgb2YgaXRlbXMuICBGb3IgZXhhbXBsZSwgYSBkaXN0cmlidXRpb24gbGlzdCBpcyB0aGUgcm91dGluZyBjcml0ZXJpYSBmb3IgbWFpbC4gIFRoZSBpdGVtcyBkZWxpdmVyZWQgbWF5IGJlIGRvY3VtZW50cywgam9icywgb3Igb3RoZXIgb2JqZWN0cy5cclxuICAgKi9cclxuICBSb3V0aW5nQ3JpdGVyaWE6IHtcclxuICAgIGRpc3BsYXk6IFwiUm91dGluZyBDcml0ZXJpYVwiLFxyXG4gICAgY29kZTogXCIyM1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vb2JqZWN0LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDI0OiBUaGUgY29udGVudHMgb2YgYSBxdWVyeS4gIFRoaXMgaXMgdXNlZCB0byBjYXB0dXJlIHRoZSBjb250ZW50cyBvZiBhbnkga2luZCBvZiBxdWVyeS4gIEZvciBzZWN1cml0eSBzdXJ2ZWlsbGFuY2UgcHVycG9zZXMga25vd2luZyB0aGUgcXVlcmllcyBiZWluZyBtYWRlIGlzIHZlcnkgaW1wb3J0YW50LlxyXG4gICAqL1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIlF1ZXJ5XCIsXHJcbiAgICBjb2RlOiBcIjI0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMzogVGhpcyBvYmplY3QgaXMgYW55IGtpbmQgb2YgcGVyc2lzdGVudCBkb2N1bWVudCBjcmVhdGVkIGFzIGEgcmVzdWx0IG9mIHRoZSBldmVudC4gIFRoaXMgY291bGQgYmUgYSBwYXBlciByZXBvcnQsIGZpbG0sIGVsZWN0cm9uaWMgcmVwb3J0LCBESUNPTSBTdHVkeSwgZXRjLiAgSXNzdWVzIHJlbGF0ZWQgdG8gbWVkaWNhbCByZWNvcmRzIGxpZmUgY3ljbGUgbWFuYWdlbWVudCBhcmUgY29udmV5ZWQgZWxzZXdoZXJlLlxyXG4gICAqL1xyXG4gIFJlcG9ydDoge1xyXG4gICAgZGlzcGxheTogXCJSZXBvcnRcIixcclxuICAgIGNvZGU6IFwiM1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vb2JqZWN0LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDQ6IEEgbG9naWNhbCBvYmplY3QgcmVsYXRlZCB0byBhIGhlYWx0aCByZWNvcmQgZXZlbnQuICBUaGlzIGlzIGFueSBoZWFsdGhjYXJlICBzcGVjaWZpYyByZXNvdXJjZSAob2JqZWN0KSBub3QgcmVzdHJpY3RlZCB0byBGSElSIGRlZmluZWQgUmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIERvbWFpblJlc291cmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRvbWFpbiBSZXNvdXJjZVwiLFxyXG4gICAgY29kZTogXCI0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogNTogVGhpcyBpcyBhbnkgY29uZmlndXJhYmxlIGZpbGUgdXNlZCB0byBjb250cm9sIGNyZWF0aW9uIG9mIGRvY3VtZW50cy4gIEV4YW1wbGVzIGluY2x1ZGUgdGhlIG9iamVjdHMgbWFpbnRhaW5lZCBieSB0aGUgSEw3IE1hc3RlciBGaWxlIHRyYW5zYWN0aW9ucywgVmFsdWUgU2V0cywgZXRjLlxyXG4gICAqL1xyXG4gIE1hc3RlckZpbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiTWFzdGVyIGZpbGVcIixcclxuICAgIGNvZGU6IFwiNVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vb2JqZWN0LXJvbGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDY6IEEgaHVtYW4gcGFydGljaXBhbnQgbm90IG90aGVyd2lzZSBpZGVudGlmaWVkIGJ5IHNvbWUgb3RoZXIgY2F0ZWdvcnkuXHJcbiAgICovXHJcbiAgVXNlcjoge1xyXG4gICAgZGlzcGxheTogXCJVc2VyXCIsXHJcbiAgICBjb2RlOiBcIjZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29iamVjdC1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiA3OiAoZGVwcmVjYXRlZCkuXHJcbiAgICovXHJcbiAgTGlzdDoge1xyXG4gICAgZGlzcGxheTogXCJMaXN0XCIsXHJcbiAgICBjb2RlOiBcIjdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29iamVjdC1yb2xlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiA4OiBUeXBpY2FsbHksIGEgbGljZW5zZWQgcGVyc29uIHdobyBpcyBwcm92aWRpbmcgb3IgcGVyZm9ybWluZyBjYXJlIHJlbGF0ZWQgdG8gdGhlIGV2ZW50LCBnZW5lcmFsbHkgYSBwaHlzaWNpYW4uICAgVGhlIGtleSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGRvY3RvciBhbmQgcHJhY3RpdGlvbmVyIGlzIHdpdGggcmVnYXJkcyB0byB0aGVpciByb2xlLCBub3QgdGhlIGxpY2Vuc2luZy4gIFRoZSBkb2N0b3IgaXMgdGhlIGh1bWFuIHdobyBhY3R1YWxseSBwZXJmb3JtZWQgdGhlIHdvcmsuICBUaGUgcHJhY3RpdGlvbmVyIGlzIHRoZSBodW1hbiBvciBvcmdhbml6YXRpb24gdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHdvcmsuXHJcbiAgICovXHJcbiAgRG9jdG9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRvY3RvclwiLFxyXG4gICAgY29kZTogXCI4XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogOTogQSBwZXJzb24gb3Igc3lzdGVtIHRoYXQgaXMgYmVpbmcgbm90aWZpZWQgYXMgcGFydCBvZiB0aGUgZXZlbnQuICBUaGlzIGlzIHJlbGV2YW50IGluIHNpdHVhdGlvbnMgd2hlcmUgYXV0b21hdGVkIHN5c3RlbXMgcHJvdmlkZSBub3RpZmljYXRpb25zIHRvIG90aGVyIHBhcnRpZXMgd2hlbiBhbiBldmVudCB0b29rIHBsYWNlLlxyXG4gICAqL1xyXG4gIFN1YnNjcmliZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiU3Vic2NyaWJlclwiLFxyXG4gICAgY29kZTogXCI5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vYmplY3Qtcm9sZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==