// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/v3-SubstanceAdminSubstitutionReason|2014-03-26
/**
 * No Description Provided
 */
export const V3SubstanceAdminSubstitutionReasonCodings = {
    /**
     * CT: Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
     */
    ContinuingTherapy: {
        display: "continuing therapy",
        code: "CT",
        system: "http://hl7.org/fhir/v3/ActReason",
    },
    /**
     * FP: Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
     */
    FormularyPolicy: {
        display: "formulary policy",
        code: "FP",
        system: "http://hl7.org/fhir/v3/ActReason",
    },
    /**
     * OS: In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
     */
    OutOfStock: {
        display: "out of stock",
        code: "OS",
        system: "http://hl7.org/fhir/v3/ActReason",
    },
    /**
     * RR: Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
     */
    RegulatoryRequirement: {
        display: "regulatory requirement",
        code: "RR",
        system: "http://hl7.org/fhir/v3/ActReason",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNTdWJzdGFuY2VBZG1pblN1YnN0aXR1dGlvblJlYXNvbkNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1YzU3Vic3RhbmNlQWRtaW5TdWJzdGl0dXRpb25SZWFzb25Db2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZGQUE2RjtBQTBCN0Y7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx5Q0FBeUMsR0FBZ0Q7SUFDcEc7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztJQUNEOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxrQ0FBa0M7S0FDM0M7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztJQUNEOztPQUVHO0lBQ0gscUJBQXFCLEVBQUU7UUFDckIsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxrQ0FBa0M7S0FDM0M7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3YzLVN1YnN0YW5jZUFkbWluU3Vic3RpdHV0aW9uUmVhc29ufDIwMTQtMDMtMjZcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBObyBEZXNjcmlwdGlvbiBQcm92aWRlZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVjNTdWJzdGFuY2VBZG1pblN1YnN0aXR1dGlvblJlYXNvbkNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogQ1Q6IEluZGljYXRlcyB0aGF0IHRoZSBkZWNpc2lvbiB0byBzdWJzdGl0dXRlIG9yIHRvIG5vdCBzdWJzdGl0dXRlIHdhcyBkcml2ZW4gYnkgYSBkZXNpcmUgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3kgd2l0aCBhIHByZS1leGlzdGluZyB0aGVyYXB5LiAgSS5lLiBUaGUgcGVyZm9ybWVyIHByb3ZpZGVkIHRoZSBzYW1lIGl0ZW0vc2VydmljZSBhcyBoYWQgYmVlbiBwcmV2aW91c2x5IHByb3ZpZGVkIHJhdGhlciB0aGFuIHByb3ZpZGluZyBleGFjdGx5IHdoYXQgd2FzIG9yZGVyZWQsIG9yIHJhdGhlciB0aGFuIHN1YnN0aXR1dGluZyB3aXRoIGEgbG93ZXItY29zdCBlcXVpdmFsZW50LlxyXG4gICAqL1xyXG4gIENvbnRpbnVpbmdUaGVyYXB5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEZQOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZGVjaXNpb24gdG8gc3Vic3RpdHV0ZSBvciB0byBub3Qgc3Vic3RpdHV0ZSB3YXMgZHJpdmVuIGJ5IGEgcG9saWN5IGV4cHJlc3NlZCB3aXRoaW4gdGhlIGZvcm11bGFyeS5cclxuICAgKi9cclxuICBGb3JtdWxhcnlQb2xpY3k6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogT1M6IEluIHRoZSBjYXNlIG9mICdzdWJzdGl0dXRpb24nLCBpbmRpY2F0ZXMgdGhhdCB0aGUgc3Vic3RpdHV0aW9uIG9jY3VycmVkIGJlY2F1c2UgdGhlIG9yZGVyZWQgaXRlbSB3YXMgbm90IGluIHN0b2NrLiAgSW4gdGhlIGNhc2Ugb2YgJ25vIHN1YnN0aXR1dGlvbicsIGluZGljYXRlcyB0aGF0IGEgY2hlYXBlciBlcXVpdmFsZW50IHdhcyBub3Qgc3Vic3RpdHV0ZWQgYmVjYXVzZSBpdCB3YXMgbm90IGluIHN0b2NrLlxyXG4gICAqL1xyXG4gIE91dE9mU3RvY2s6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogUlI6IEluZGljYXRlcyB0aGF0IHRoZSBkZWNpc2lvbiB0byBzdWJzdGl0dXRlIG9yIHRvIG5vdCBzdWJzdGl0dXRlIHdhcyBkcml2ZW4gYnkgYSBqdXJpc2RpY3Rpb25hbCByZWd1bGF0b3J5IHJlcXVpcmVtZW50IG1hbmRhdGluZyBvciBwcm9oaWJpdGluZyBzdWJzdGl0dXRpb24uXHJcbiAgICovXHJcbiAgUmVndWxhdG9yeVJlcXVpcmVtZW50OiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogTm8gRGVzY3JpcHRpb24gUHJvdmlkZWRcclxuICovXHJcbmV4cG9ydCBjb25zdCBWM1N1YnN0YW5jZUFkbWluU3Vic3RpdHV0aW9uUmVhc29uQ29kaW5nczpWM1N1YnN0YW5jZUFkbWluU3Vic3RpdHV0aW9uUmVhc29uQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBDVDogSW5kaWNhdGVzIHRoYXQgdGhlIGRlY2lzaW9uIHRvIHN1YnN0aXR1dGUgb3IgdG8gbm90IHN1YnN0aXR1dGUgd2FzIGRyaXZlbiBieSBhIGRlc2lyZSB0byBtYWludGFpbiBjb25zaXN0ZW5jeSB3aXRoIGEgcHJlLWV4aXN0aW5nIHRoZXJhcHkuICBJLmUuIFRoZSBwZXJmb3JtZXIgcHJvdmlkZWQgdGhlIHNhbWUgaXRlbS9zZXJ2aWNlIGFzIGhhZCBiZWVuIHByZXZpb3VzbHkgcHJvdmlkZWQgcmF0aGVyIHRoYW4gcHJvdmlkaW5nIGV4YWN0bHkgd2hhdCB3YXMgb3JkZXJlZCwgb3IgcmF0aGVyIHRoYW4gc3Vic3RpdHV0aW5nIHdpdGggYSBsb3dlci1jb3N0IGVxdWl2YWxlbnQuXHJcbiAgICovXHJcbiAgQ29udGludWluZ1RoZXJhcHk6IHtcclxuICAgIGRpc3BsYXk6IFwiY29udGludWluZyB0aGVyYXB5XCIsXHJcbiAgICBjb2RlOiBcIkNUXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RSZWFzb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEZQOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZGVjaXNpb24gdG8gc3Vic3RpdHV0ZSBvciB0byBub3Qgc3Vic3RpdHV0ZSB3YXMgZHJpdmVuIGJ5IGEgcG9saWN5IGV4cHJlc3NlZCB3aXRoaW4gdGhlIGZvcm11bGFyeS5cclxuICAgKi9cclxuICBGb3JtdWxhcnlQb2xpY3k6IHtcclxuICAgIGRpc3BsYXk6IFwiZm9ybXVsYXJ5IHBvbGljeVwiLFxyXG4gICAgY29kZTogXCJGUFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0UmVhc29uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPUzogSW4gdGhlIGNhc2Ugb2YgJ3N1YnN0aXR1dGlvbicsIGluZGljYXRlcyB0aGF0IHRoZSBzdWJzdGl0dXRpb24gb2NjdXJyZWQgYmVjYXVzZSB0aGUgb3JkZXJlZCBpdGVtIHdhcyBub3QgaW4gc3RvY2suICBJbiB0aGUgY2FzZSBvZiAnbm8gc3Vic3RpdHV0aW9uJywgaW5kaWNhdGVzIHRoYXQgYSBjaGVhcGVyIGVxdWl2YWxlbnQgd2FzIG5vdCBzdWJzdGl0dXRlZCBiZWNhdXNlIGl0IHdhcyBub3QgaW4gc3RvY2suXHJcbiAgICovXHJcbiAgT3V0T2ZTdG9jazoge1xyXG4gICAgZGlzcGxheTogXCJvdXQgb2Ygc3RvY2tcIixcclxuICAgIGNvZGU6IFwiT1NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdFJlYXNvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogUlI6IEluZGljYXRlcyB0aGF0IHRoZSBkZWNpc2lvbiB0byBzdWJzdGl0dXRlIG9yIHRvIG5vdCBzdWJzdGl0dXRlIHdhcyBkcml2ZW4gYnkgYSBqdXJpc2RpY3Rpb25hbCByZWd1bGF0b3J5IHJlcXVpcmVtZW50IG1hbmRhdGluZyBvciBwcm9oaWJpdGluZyBzdWJzdGl0dXRpb24uXHJcbiAgICovXHJcbiAgUmVndWxhdG9yeVJlcXVpcmVtZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcInJlZ3VsYXRvcnkgcmVxdWlyZW1lbnRcIixcclxuICAgIGNvZGU6IFwiUlJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdFJlYXNvblwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==