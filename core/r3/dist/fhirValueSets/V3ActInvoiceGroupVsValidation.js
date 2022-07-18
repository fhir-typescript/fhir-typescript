// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode|2014-03-26
/**
 *  Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results. Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
 */
export const V3ActInvoiceGroupVsValidation = [
    "_ActInvoiceInterGroupCode",
    "_ActInvoiceRootGroupCode",
    "CPINV",
    "CPNDDRGING",
    "CPNDINDING",
    "CPNDSUPING",
    "CSINV",
    "CSPINV",
    "DRUGING",
    "FININV",
    "FRAMEING",
    "http://hl7.org/fhir/v3/ActCode|_ActInvoiceInterGroupCode",
    "http://hl7.org/fhir/v3/ActCode|_ActInvoiceRootGroupCode",
    "http://hl7.org/fhir/v3/ActCode|CPINV",
    "http://hl7.org/fhir/v3/ActCode|CPNDDRGING",
    "http://hl7.org/fhir/v3/ActCode|CPNDINDING",
    "http://hl7.org/fhir/v3/ActCode|CPNDSUPING",
    "http://hl7.org/fhir/v3/ActCode|CSINV",
    "http://hl7.org/fhir/v3/ActCode|CSPINV",
    "http://hl7.org/fhir/v3/ActCode|DRUGING",
    "http://hl7.org/fhir/v3/ActCode|FININV",
    "http://hl7.org/fhir/v3/ActCode|FRAMEING",
    "http://hl7.org/fhir/v3/ActCode|LENSING",
    "http://hl7.org/fhir/v3/ActCode|OHSINV",
    "http://hl7.org/fhir/v3/ActCode|PAINV",
    "http://hl7.org/fhir/v3/ActCode|PRDING",
    "http://hl7.org/fhir/v3/ActCode|RXCINV",
    "http://hl7.org/fhir/v3/ActCode|RXDINV",
    "http://hl7.org/fhir/v3/ActCode|SBFINV",
    "http://hl7.org/fhir/v3/ActCode|VRXINV",
    "LENSING",
    "OHSINV",
    "PAINV",
    "PRDING",
    "RXCINV",
    "RXDINV",
    "SBFINV",
    "VRXINV",
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNBY3RJbnZvaWNlR3JvdXBWc1ZhbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1YzQWN0SW52b2ljZUdyb3VwVnNWYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDJGQUEyRjtBQUUzRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFzQjtJQUM5RCwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLDBEQUEwRDtJQUMxRCx5REFBeUQ7SUFDekQsc0NBQXNDO0lBQ3RDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLHVDQUF1QztJQUN2Qyx5Q0FBeUM7SUFDekMsd0NBQXdDO0lBQ3hDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtDQUNBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQgVmFsaWRhdGlvbjogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC92My1BY3RJbnZvaWNlR3JvdXBDb2RlfDIwMTQtMDMtMjZcclxuXHJcbi8qKlxyXG4gKiAgVHlwZSBvZiBpbnZvaWNlIGVsZW1lbnQgdGhhdCBpcyB1c2VkIHRvIGFzc2lzdCBpbiBkZXNjcmliaW5nIGFuIEludm9pY2UgdGhhdCBpcyBlaXRoZXIgc3VibWl0dGVkIGZvciBhZGp1ZGljYXRpb24gb3IgZm9yIHdoaWNoIGlzIHJldHVybmVkIG9uIGFkanVkaWNhdGlvbiByZXN1bHRzLiBJbnZvaWNlIGVsZW1lbnRzIG9mIHRoaXMgdHlwZSBzaWduaWZ5IGEgZ3JvdXBpbmcgb2Ygb25lIG9yIG1vcmUgY2hpbGRyZW4gKGRldGFpbCkgaW52b2ljZSBlbGVtZW50cy4gIFRoZXkgZG8gbm90IGhhdmUgaW50cmluc2ljIGNvc3RpbmcgYXNzb2NpYXRlZCB3aXRoIHRoZW0sIGJ1dCBtZXJlbHkgcmVmbGVjdCB0aGUgc3VtIG9mIGFsbCBjb3N0aW5nIGZvciBpdCdzIGltbWVkaWF0ZSBjaGlsZHJlbiBpbnZvaWNlIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFYzQWN0SW52b2ljZUdyb3VwVnNWYWxpZGF0aW9uOiByZWFkb25seSBzdHJpbmdbXSA9IFtcclxuICBcIl9BY3RJbnZvaWNlSW50ZXJHcm91cENvZGVcIixcclxuICBcIl9BY3RJbnZvaWNlUm9vdEdyb3VwQ29kZVwiLFxyXG4gIFwiQ1BJTlZcIixcclxuICBcIkNQTkREUkdJTkdcIixcclxuICBcIkNQTkRJTkRJTkdcIixcclxuICBcIkNQTkRTVVBJTkdcIixcclxuICBcIkNTSU5WXCIsXHJcbiAgXCJDU1BJTlZcIixcclxuICBcIkRSVUdJTkdcIixcclxuICBcIkZJTklOVlwiLFxyXG4gIFwiRlJBTUVJTkdcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxfQWN0SW52b2ljZUludGVyR3JvdXBDb2RlXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8X0FjdEludm9pY2VSb290R3JvdXBDb2RlXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8Q1BJTlZcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxDUE5ERFJHSU5HXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8Q1BORElORElOR1wiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfENQTkRTVVBJTkdcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxDU0lOVlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfENTUElOVlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfERSVUdJTkdcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxGSU5JTlZcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxGUkFNRUlOR1wiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfExFTlNJTkdcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxPSFNJTlZcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxQQUlOVlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfFBSRElOR1wiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfFJYQ0lOVlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfFJYRElOVlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfFNCRklOVlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfFZSWElOVlwiLFxyXG4gIFwiTEVOU0lOR1wiLFxyXG4gIFwiT0hTSU5WXCIsXHJcbiAgXCJQQUlOVlwiLFxyXG4gIFwiUFJESU5HXCIsXHJcbiAgXCJSWENJTlZcIixcclxuICBcIlJYRElOVlwiLFxyXG4gIFwiU0JGSU5WXCIsXHJcbiAgXCJWUlhJTlZcIixcclxuXSBhcyBjb25zdDtcclxuIl19