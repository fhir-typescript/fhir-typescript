// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contact-point-system|4.3.0
/**
 * Telecommunications form for contact point.
 */
export const ContactPointSystemCodings = {
    /**
     * email: The value is an email address.
     */
    Email: {
        display: "Email",
        code: "email",
        system: "http://hl7.org/fhir/contact-point-system",
    },
    /**
     * fax: The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    Fax: {
        display: "Fax",
        code: "fax",
        system: "http://hl7.org/fhir/contact-point-system",
    },
    /**
     * other: A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
     */
    Other: {
        display: "Other",
        code: "other",
        system: "http://hl7.org/fhir/contact-point-system",
    },
    /**
     * pager: The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    Pager: {
        display: "Pager",
        code: "pager",
        system: "http://hl7.org/fhir/contact-point-system",
    },
    /**
     * phone: The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    Phone: {
        display: "Phone",
        code: "phone",
        system: "http://hl7.org/fhir/contact-point-system",
    },
    /**
     * sms: A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
     */
    SMS: {
        display: "SMS",
        code: "sms",
        system: "http://hl7.org/fhir/contact-point-system",
    },
    /**
     * url: A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
     */
    URL: {
        display: "URL",
        code: "url",
        system: "http://hl7.org/fhir/contact-point-system",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBvaW50U3lzdGVtQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ29udGFjdFBvaW50U3lzdGVtQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx5RUFBeUU7QUFzQ3pFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWdDO0lBQ3BFOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29udGFjdC1wb2ludC1zeXN0ZW18NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUZWxlY29tbXVuaWNhdGlvbnMgZm9ybSBmb3IgY29udGFjdCBwb2ludC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbnRhY3RQb2ludFN5c3RlbUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZW1haWw6IFRoZSB2YWx1ZSBpcyBhbiBlbWFpbCBhZGRyZXNzLlxyXG4gICAqL1xyXG4gIEVtYWlsOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGZheDogVGhlIHZhbHVlIGlzIGEgZmF4IG1hY2hpbmUuIFVzZSBvZiBmdWxsIGludGVybmF0aW9uYWwgbnVtYmVycyBzdGFydGluZyB3aXRoICsgaXMgcmVjb21tZW5kZWQgdG8gZW5hYmxlIGF1dG9tYXRpYyBkaWFsaW5nIHN1cHBvcnQgYnV0IG5vdCByZXF1aXJlZC5cclxuICAgKi9cclxuICBGYXg6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb3RoZXI6IEEgY29udGFjdCB0aGF0IGlzIG5vdCBhIHBob25lLCBmYXgsIHBhZ2Ugb3IgZW1haWwgYWRkcmVzcyBhbmQgaXMgbm90IGV4cHJlc3NpYmxlIGFzIGEgVVJMLiAgRS5nLiBJbnRlcm5hbCBtYWlsIGFkZHJlc3MuICBUaGlzIFNIT1VMRCBOT1QgYmUgdXNlZCBmb3IgY29udGFjdHMgdGhhdCBhcmUgZXhwcmVzc2libGUgYXMgYSBVUkwgKGUuZy4gU2t5cGUsIFR3aXR0ZXIsIEZhY2Vib29rLCBldGMuKSAgRXh0ZW5zaW9ucyBtYXkgYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBcIm90aGVyXCIgY29udGFjdCB0eXBlcy5cclxuICAgKi9cclxuICBPdGhlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYWdlcjogVGhlIHZhbHVlIGlzIGEgcGFnZXIgbnVtYmVyLiBUaGVzZSBtYXkgYmUgbG9jYWwgcGFnZXIgbnVtYmVycyB0aGF0IGFyZSBvbmx5IHVzYWJsZSBvbiBhIHBhcnRpY3VsYXIgcGFnZXIgc3lzdGVtLlxyXG4gICAqL1xyXG4gIFBhZ2VyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBob25lOiBUaGUgdmFsdWUgaXMgYSB0ZWxlcGhvbmUgbnVtYmVyIHVzZWQgZm9yIHZvaWNlIGNhbGxzLiBVc2Ugb2YgZnVsbCBpbnRlcm5hdGlvbmFsIG51bWJlcnMgc3RhcnRpbmcgd2l0aCArIGlzIHJlY29tbWVuZGVkIHRvIGVuYWJsZSBhdXRvbWF0aWMgZGlhbGluZyBzdXBwb3J0IGJ1dCBub3QgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgUGhvbmU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc21zOiBBIGNvbnRhY3QgdGhhdCBjYW4gYmUgdXNlZCBmb3Igc2VuZGluZyBhbiBzbXMgbWVzc2FnZSAoZS5nLiBtb2JpbGUgcGhvbmVzLCBzb21lIGxhbmRsaW5lcykuXHJcbiAgICovXHJcbiAgU01TOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVybDogQSBjb250YWN0IHRoYXQgaXMgbm90IGEgcGhvbmUsIGZheCwgcGFnZXIgb3IgZW1haWwgYWRkcmVzcyBhbmQgaXMgZXhwcmVzc2VkIGFzIGEgVVJMLiAgVGhpcyBpcyBpbnRlbmRlZCBmb3IgdmFyaW91cyBpbnN0aXR1dGlvbmFsIG9yIHBlcnNvbmFsIGNvbnRhY3RzIGluY2x1ZGluZyB3ZWIgc2l0ZXMsIGJsb2dzLCBTa3lwZSwgVHdpdHRlciwgRmFjZWJvb2ssIGV0Yy4gRG8gbm90IHVzZSBmb3IgZW1haWwgYWRkcmVzc2VzLlxyXG4gICAqL1xyXG4gIFVSTDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRlbGVjb21tdW5pY2F0aW9ucyBmb3JtIGZvciBjb250YWN0IHBvaW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnRhY3RQb2ludFN5c3RlbUNvZGluZ3M6Q29udGFjdFBvaW50U3lzdGVtQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBlbWFpbDogVGhlIHZhbHVlIGlzIGFuIGVtYWlsIGFkZHJlc3MuXHJcbiAgICovXHJcbiAgRW1haWw6IHtcclxuICAgIGRpc3BsYXk6IFwiRW1haWxcIixcclxuICAgIGNvZGU6IFwiZW1haWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRhY3QtcG9pbnQtc3lzdGVtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBmYXg6IFRoZSB2YWx1ZSBpcyBhIGZheCBtYWNoaW5lLiBVc2Ugb2YgZnVsbCBpbnRlcm5hdGlvbmFsIG51bWJlcnMgc3RhcnRpbmcgd2l0aCArIGlzIHJlY29tbWVuZGVkIHRvIGVuYWJsZSBhdXRvbWF0aWMgZGlhbGluZyBzdXBwb3J0IGJ1dCBub3QgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgRmF4OiB7XHJcbiAgICBkaXNwbGF5OiBcIkZheFwiLFxyXG4gICAgY29kZTogXCJmYXhcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRhY3QtcG9pbnQtc3lzdGVtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvdGhlcjogQSBjb250YWN0IHRoYXQgaXMgbm90IGEgcGhvbmUsIGZheCwgcGFnZSBvciBlbWFpbCBhZGRyZXNzIGFuZCBpcyBub3QgZXhwcmVzc2libGUgYXMgYSBVUkwuICBFLmcuIEludGVybmFsIG1haWwgYWRkcmVzcy4gIFRoaXMgU0hPVUxEIE5PVCBiZSB1c2VkIGZvciBjb250YWN0cyB0aGF0IGFyZSBleHByZXNzaWJsZSBhcyBhIFVSTCAoZS5nLiBTa3lwZSwgVHdpdHRlciwgRmFjZWJvb2ssIGV0Yy4pICBFeHRlbnNpb25zIG1heSBiZSB1c2VkIHRvIGRpc3Rpbmd1aXNoIFwib3RoZXJcIiBjb250YWN0IHR5cGVzLlxyXG4gICAqL1xyXG4gIE90aGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcIk90aGVyXCIsXHJcbiAgICBjb2RlOiBcIm90aGVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250YWN0LXBvaW50LXN5c3RlbVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcGFnZXI6IFRoZSB2YWx1ZSBpcyBhIHBhZ2VyIG51bWJlci4gVGhlc2UgbWF5IGJlIGxvY2FsIHBhZ2VyIG51bWJlcnMgdGhhdCBhcmUgb25seSB1c2FibGUgb24gYSBwYXJ0aWN1bGFyIHBhZ2VyIHN5c3RlbS5cclxuICAgKi9cclxuICBQYWdlcjoge1xyXG4gICAgZGlzcGxheTogXCJQYWdlclwiLFxyXG4gICAgY29kZTogXCJwYWdlclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udGFjdC1wb2ludC1zeXN0ZW1cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBob25lOiBUaGUgdmFsdWUgaXMgYSB0ZWxlcGhvbmUgbnVtYmVyIHVzZWQgZm9yIHZvaWNlIGNhbGxzLiBVc2Ugb2YgZnVsbCBpbnRlcm5hdGlvbmFsIG51bWJlcnMgc3RhcnRpbmcgd2l0aCArIGlzIHJlY29tbWVuZGVkIHRvIGVuYWJsZSBhdXRvbWF0aWMgZGlhbGluZyBzdXBwb3J0IGJ1dCBub3QgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgUGhvbmU6IHtcclxuICAgIGRpc3BsYXk6IFwiUGhvbmVcIixcclxuICAgIGNvZGU6IFwicGhvbmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRhY3QtcG9pbnQtc3lzdGVtXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzbXM6IEEgY29udGFjdCB0aGF0IGNhbiBiZSB1c2VkIGZvciBzZW5kaW5nIGFuIHNtcyBtZXNzYWdlIChlLmcuIG1vYmlsZSBwaG9uZXMsIHNvbWUgbGFuZGxpbmVzKS5cclxuICAgKi9cclxuICBTTVM6IHtcclxuICAgIGRpc3BsYXk6IFwiU01TXCIsXHJcbiAgICBjb2RlOiBcInNtc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udGFjdC1wb2ludC1zeXN0ZW1cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHVybDogQSBjb250YWN0IHRoYXQgaXMgbm90IGEgcGhvbmUsIGZheCwgcGFnZXIgb3IgZW1haWwgYWRkcmVzcyBhbmQgaXMgZXhwcmVzc2VkIGFzIGEgVVJMLiAgVGhpcyBpcyBpbnRlbmRlZCBmb3IgdmFyaW91cyBpbnN0aXR1dGlvbmFsIG9yIHBlcnNvbmFsIGNvbnRhY3RzIGluY2x1ZGluZyB3ZWIgc2l0ZXMsIGJsb2dzLCBTa3lwZSwgVHdpdHRlciwgRmFjZWJvb2ssIGV0Yy4gRG8gbm90IHVzZSBmb3IgZW1haWwgYWRkcmVzc2VzLlxyXG4gICAqL1xyXG4gIFVSTDoge1xyXG4gICAgZGlzcGxheTogXCJVUkxcIixcclxuICAgIGNvZGU6IFwidXJsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250YWN0LXBvaW50LXN5c3RlbVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==