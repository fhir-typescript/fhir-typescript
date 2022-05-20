// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-communication-method|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export const VerificationresultCommunicationMethodCodings = {
    /**
     * manual: The information is submitted/retrieved manually (e.g. by phone, fax, paper-based)
     */
    Manual: new Coding({
        display: "Manual",
        code: "manual",
        system: "http://terminology.hl7.org/CodeSystem/verificationresult-communication-method",
    }),
    /**
     * portal: The information is submitted/retrieved via a portal
     */
    Portal: new Coding({
        display: "Portal",
        code: "portal",
        system: "http://terminology.hl7.org/CodeSystem/verificationresult-communication-method",
    }),
    /**
     * pull: The information is retrieved (i.e. pulled) from a source (e.g. over an API)
     */
    Pull: new Coding({
        display: "Pull",
        code: "pull",
        system: "http://terminology.hl7.org/CodeSystem/verificationresult-communication-method",
    }),
    /**
     * push: The information is sent (i.e. pushed) from a source (e.g. over an API, asynchronously, secure messaging)
     */
    Push: new Coding({
        display: "Push",
        code: "push",
        system: "http://terminology.hl7.org/CodeSystem/verificationresult-communication-method",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZpY2F0aW9ucmVzdWx0Q29tbXVuaWNhdGlvbk1ldGhvZENvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1ZlcmlmaWNhdGlvbnJlc3VsdENvbW11bmljYXRpb25NZXRob2RDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRGQUE0RjtBQUU1RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0Q0FBNEMsR0FBRztJQUMxRDs7T0FFRztJQUNILE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwrRUFBK0U7S0FDeEYsQ0FBQztJQUNGOztPQUVHO0lBQ0gsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLCtFQUErRTtLQUN4RixDQUFDO0lBQ0Y7O09BRUc7SUFDSCxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDZixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLCtFQUErRTtLQUN4RixDQUFDO0lBQ0Y7O09BRUc7SUFDSCxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDZixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLCtFQUErRTtLQUN4RixDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC92ZXJpZmljYXRpb25yZXN1bHQtY29tbXVuaWNhdGlvbi1tZXRob2R8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEF0dGVzdGVkIGluZm9ybWF0aW9uIG1heSBiZSB2YWxpZGF0ZWQgYnkgcHJvY2VzcyB0aGF0IGFyZSBtYW51YWwgb3IgYXV0b21hdGVkLiBGb3IgYXV0b21hdGVkIHByb2Nlc3NlcyBpdCBtYXkgYWNjb21wbGlzaGVkIGJ5IHRoZSBzeXN0ZW0gb2YgcmVjb3JkIHJlYWNoaW5nIG91dCB0aHJvdWdoIGFub3RoZXIgc3lzdGVtJ3MgQVBJIG9yIGluZm9ybWF0aW9uIG1heSBiZSBzZW50IHRvIHRoZSBzeXN0ZW0gb2YgcmVjb3JkLiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIGEgc2V0IG9mIGNvZGVzIHRvIGRlc2NyaWJpbmcgdGhlIHByb2Nlc3MsIHRoZSBob3csIGEgcmVzb3VyY2Ugb3IgZGF0YSBlbGVtZW50IGlzIHZhbGlkYXRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBWZXJpZmljYXRpb25yZXN1bHRDb21tdW5pY2F0aW9uTWV0aG9kQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBtYW51YWw6IFRoZSBpbmZvcm1hdGlvbiBpcyBzdWJtaXR0ZWQvcmV0cmlldmVkIG1hbnVhbGx5IChlLmcuIGJ5IHBob25lLCBmYXgsIHBhcGVyLWJhc2VkKVxyXG4gICAqL1xyXG4gIE1hbnVhbDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk1hbnVhbFwiLFxyXG4gICAgY29kZTogXCJtYW51YWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3ZlcmlmaWNhdGlvbnJlc3VsdC1jb21tdW5pY2F0aW9uLW1ldGhvZFwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHBvcnRhbDogVGhlIGluZm9ybWF0aW9uIGlzIHN1Ym1pdHRlZC9yZXRyaWV2ZWQgdmlhIGEgcG9ydGFsXHJcbiAgICovXHJcbiAgUG9ydGFsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUG9ydGFsXCIsXHJcbiAgICBjb2RlOiBcInBvcnRhbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdmVyaWZpY2F0aW9ucmVzdWx0LWNvbW11bmljYXRpb24tbWV0aG9kXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcHVsbDogVGhlIGluZm9ybWF0aW9uIGlzIHJldHJpZXZlZCAoaS5lLiBwdWxsZWQpIGZyb20gYSBzb3VyY2UgKGUuZy4gb3ZlciBhbiBBUEkpXHJcbiAgICovXHJcbiAgUHVsbDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlB1bGxcIixcclxuICAgIGNvZGU6IFwicHVsbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdmVyaWZpY2F0aW9ucmVzdWx0LWNvbW11bmljYXRpb24tbWV0aG9kXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcHVzaDogVGhlIGluZm9ybWF0aW9uIGlzIHNlbnQgKGkuZS4gcHVzaGVkKSBmcm9tIGEgc291cmNlIChlLmcuIG92ZXIgYW4gQVBJLCBhc3luY2hyb25vdXNseSwgc2VjdXJlIG1lc3NhZ2luZylcclxuICAgKi9cclxuICBQdXNoOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHVzaFwiLFxyXG4gICAgY29kZTogXCJwdXNoXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92ZXJpZmljYXRpb25yZXN1bHQtY29tbXVuaWNhdGlvbi1tZXRob2RcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBBdHRlc3RlZCBpbmZvcm1hdGlvbiBtYXkgYmUgdmFsaWRhdGVkIGJ5IHByb2Nlc3MgdGhhdCBhcmUgbWFudWFsIG9yIGF1dG9tYXRlZC4gRm9yIGF1dG9tYXRlZCBwcm9jZXNzZXMgaXQgbWF5IGFjY29tcGxpc2hlZCBieSB0aGUgc3lzdGVtIG9mIHJlY29yZCByZWFjaGluZyBvdXQgdGhyb3VnaCBhbm90aGVyIHN5c3RlbSdzIEFQSSBvciBpbmZvcm1hdGlvbiBtYXkgYmUgc2VudCB0byB0aGUgc3lzdGVtIG9mIHJlY29yZC4gVGhpcyB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiBjb2RlcyB0byBkZXNjcmliaW5nIHRoZSBwcm9jZXNzLCB0aGUgaG93LCBhIHJlc291cmNlIG9yIGRhdGEgZWxlbWVudCBpcyB2YWxpZGF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWZXJpZmljYXRpb25yZXN1bHRDb21tdW5pY2F0aW9uTWV0aG9kQ29kaW5nVHlwZSA9IHR5cGVvZiBWZXJpZmljYXRpb25yZXN1bHRDb21tdW5pY2F0aW9uTWV0aG9kQ29kaW5ncztcclxuIl19