// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contact-point-system|3.0.2
/**
 * Telecommunications form for contact point
 */
export const ContactPointSystemCodes = {
    /**
     * email: The value is an email address.
     */
    Email: "email",
    /**
     * fax: The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    Fax: "fax",
    /**
     * other: A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
     */
    Other: "other",
    /**
     * pager: The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    Pager: "pager",
    /**
     * phone: The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    Phone: "phone",
    /**
     * sms: A contact that can be used for sending an sms message (e.g. mobide phones, some landlines)
     */
    SMS: "sms",
    /**
     * url: A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various personal contacts including blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
     */
    URL: "url",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBvaW50U3lzdGVtQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbnRhY3RQb2ludFN5c3RlbUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHlFQUF5RTtBQUV6RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHO0lBQ3JDOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILEdBQUcsRUFBRSxLQUFLO0lBQ1Y7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxHQUFHLEVBQUUsS0FBSztJQUNWOztPQUVHO0lBQ0gsR0FBRyxFQUFFLEtBQUs7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbnRhY3QtcG9pbnQtc3lzdGVtfDMuMC4yXHJcblxyXG4vKipcclxuICogVGVsZWNvbW11bmljYXRpb25zIGZvcm0gZm9yIGNvbnRhY3QgcG9pbnRcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb250YWN0UG9pbnRTeXN0ZW1Db2RlcyA9IHtcclxuICAvKipcclxuICAgKiBlbWFpbDogVGhlIHZhbHVlIGlzIGFuIGVtYWlsIGFkZHJlc3MuXHJcbiAgICovXHJcbiAgRW1haWw6IFwiZW1haWxcIixcclxuICAvKipcclxuICAgKiBmYXg6IFRoZSB2YWx1ZSBpcyBhIGZheCBtYWNoaW5lLiBVc2Ugb2YgZnVsbCBpbnRlcm5hdGlvbmFsIG51bWJlcnMgc3RhcnRpbmcgd2l0aCArIGlzIHJlY29tbWVuZGVkIHRvIGVuYWJsZSBhdXRvbWF0aWMgZGlhbGluZyBzdXBwb3J0IGJ1dCBub3QgcmVxdWlyZWQuXHJcbiAgICovXHJcbiAgRmF4OiBcImZheFwiLFxyXG4gIC8qKlxyXG4gICAqIG90aGVyOiBBIGNvbnRhY3QgdGhhdCBpcyBub3QgYSBwaG9uZSwgZmF4LCBwYWdlIG9yIGVtYWlsIGFkZHJlc3MgYW5kIGlzIG5vdCBleHByZXNzaWJsZSBhcyBhIFVSTC4gIEUuZy4gSW50ZXJuYWwgbWFpbCBhZGRyZXNzLiAgVGhpcyBTSE9VTEQgTk9UIGJlIHVzZWQgZm9yIGNvbnRhY3RzIHRoYXQgYXJlIGV4cHJlc3NpYmxlIGFzIGEgVVJMIChlLmcuIFNreXBlLCBUd2l0dGVyLCBGYWNlYm9vaywgZXRjLikgIEV4dGVuc2lvbnMgbWF5IGJlIHVzZWQgdG8gZGlzdGluZ3Vpc2ggXCJvdGhlclwiIGNvbnRhY3QgdHlwZXMuXHJcbiAgICovXHJcbiAgT3RoZXI6IFwib3RoZXJcIixcclxuICAvKipcclxuICAgKiBwYWdlcjogVGhlIHZhbHVlIGlzIGEgcGFnZXIgbnVtYmVyLiBUaGVzZSBtYXkgYmUgbG9jYWwgcGFnZXIgbnVtYmVycyB0aGF0IGFyZSBvbmx5IHVzYWJsZSBvbiBhIHBhcnRpY3VsYXIgcGFnZXIgc3lzdGVtLlxyXG4gICAqL1xyXG4gIFBhZ2VyOiBcInBhZ2VyXCIsXHJcbiAgLyoqXHJcbiAgICogcGhvbmU6IFRoZSB2YWx1ZSBpcyBhIHRlbGVwaG9uZSBudW1iZXIgdXNlZCBmb3Igdm9pY2UgY2FsbHMuIFVzZSBvZiBmdWxsIGludGVybmF0aW9uYWwgbnVtYmVycyBzdGFydGluZyB3aXRoICsgaXMgcmVjb21tZW5kZWQgdG8gZW5hYmxlIGF1dG9tYXRpYyBkaWFsaW5nIHN1cHBvcnQgYnV0IG5vdCByZXF1aXJlZC5cclxuICAgKi9cclxuICBQaG9uZTogXCJwaG9uZVwiLFxyXG4gIC8qKlxyXG4gICAqIHNtczogQSBjb250YWN0IHRoYXQgY2FuIGJlIHVzZWQgZm9yIHNlbmRpbmcgYW4gc21zIG1lc3NhZ2UgKGUuZy4gbW9iaWRlIHBob25lcywgc29tZSBsYW5kbGluZXMpXHJcbiAgICovXHJcbiAgU01TOiBcInNtc1wiLFxyXG4gIC8qKlxyXG4gICAqIHVybDogQSBjb250YWN0IHRoYXQgaXMgbm90IGEgcGhvbmUsIGZheCwgcGFnZXIgb3IgZW1haWwgYWRkcmVzcyBhbmQgaXMgZXhwcmVzc2VkIGFzIGEgVVJMLiAgVGhpcyBpcyBpbnRlbmRlZCBmb3IgdmFyaW91cyBwZXJzb25hbCBjb250YWN0cyBpbmNsdWRpbmcgYmxvZ3MsIFNreXBlLCBUd2l0dGVyLCBGYWNlYm9vaywgZXRjLiBEbyBub3QgdXNlIGZvciBlbWFpbCBhZGRyZXNzZXMuXHJcbiAgICovXHJcbiAgVVJMOiBcInVybFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRlbGVjb21tdW5pY2F0aW9ucyBmb3JtIGZvciBjb250YWN0IHBvaW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb250YWN0UG9pbnRTeXN0ZW1Db2RlVHlwZSA9IHR5cGVvZiBDb250YWN0UG9pbnRTeXN0ZW1Db2Rlc1trZXlvZiB0eXBlb2YgQ29udGFjdFBvaW50U3lzdGVtQ29kZXNdO1xyXG4iXX0=