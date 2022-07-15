// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergyintolerance-verification|4.3.0
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
export const AllergyintoleranceVerificationCodings = {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: {
        display: "Confirmed",
        code: "confirmed",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    },
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    },
    /**
     * refuted: A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.
     */
    Refuted: {
        display: "Refuted",
        code: "refuted",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    },
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    Unconfirmed: {
        display: "Unconfirmed",
        code: "unconfirmed",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJneWludG9sZXJhbmNlVmVyaWZpY2F0aW9uQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQWxsZXJneWludG9sZXJhbmNlVmVyaWZpY2F0aW9uQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxvRkFBb0Y7QUEwQnBGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUNBQXFDLEdBQTRDO0lBQzVGOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHVFQUF1RTtLQUNoRjtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSx1RUFBdUU7S0FDaEY7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHVFQUF1RTtLQUNoRjtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLHVFQUF1RTtLQUNoRjtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FsbGVyZ3lpbnRvbGVyYW5jZS12ZXJpZmljYXRpb258NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBQcmVmZXJyZWQgdmFsdWUgc2V0IGZvciBBbGxlcmd5SW50b2xlcmFuY2UgVmVyaWZpY2F0aW9uIFN0YXR1cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFsbGVyZ3lpbnRvbGVyYW5jZVZlcmlmaWNhdGlvbkNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29uZmlybWVkOiBBIGhpZ2ggbGV2ZWwgb2YgY2VydGFpbnR5IGFib3V0IHRoZSBwcm9wZW5zaXR5IGZvciBhIHJlYWN0aW9uIHRvIHRoZSBpZGVudGlmaWVkIHN1YnN0YW5jZSwgd2hpY2ggbWF5IGluY2x1ZGUgY2xpbmljYWwgZXZpZGVuY2UgYnkgdGVzdGluZyBvciByZWNoYWxsZW5nZS5cclxuICAgKi9cclxuICBDb25maXJtZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIHN0YXRlbWVudCB3YXMgZW50ZXJlZCBpbiBlcnJvciBhbmQgaXMgbm90IHZhbGlkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlZnV0ZWQ6IEEgcHJvcGVuc2l0eSBmb3IgYSByZWFjdGlvbiB0byB0aGUgaWRlbnRpZmllZCBzdWJzdGFuY2UgaGFzIGJlZW4gZGlzcHV0ZWQgb3IgZGlzcHJvdmVuIHdpdGggYSBzdWZmaWNpZW50IGxldmVsIG9mIGNsaW5pY2FsIGNlcnRhaW50eSB0byBqdXN0aWZ5IGludmFsaWRhdGluZyB0aGUgYXNzZXJ0aW9uLiBUaGlzIG1pZ2h0IG9yIG1pZ2h0IG5vdCBpbmNsdWRlIHRlc3Rpbmcgb3IgcmVjaGFsbGVuZ2UuXHJcbiAgICovXHJcbiAgUmVmdXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB1bmNvbmZpcm1lZDogQSBsb3cgbGV2ZWwgb2YgY2VydGFpbnR5IGFib3V0IHRoZSBwcm9wZW5zaXR5IGZvciBhIHJlYWN0aW9uIHRvIHRoZSBpZGVudGlmaWVkIHN1YnN0YW5jZS5cclxuICAgKi9cclxuICBVbmNvbmZpcm1lZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByZWZlcnJlZCB2YWx1ZSBzZXQgZm9yIEFsbGVyZ3lJbnRvbGVyYW5jZSBWZXJpZmljYXRpb24gU3RhdHVzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFsbGVyZ3lpbnRvbGVyYW5jZVZlcmlmaWNhdGlvbkNvZGluZ3M6QWxsZXJneWludG9sZXJhbmNlVmVyaWZpY2F0aW9uQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb25maXJtZWQ6IEEgaGlnaCBsZXZlbCBvZiBjZXJ0YWludHkgYWJvdXQgdGhlIHByb3BlbnNpdHkgZm9yIGEgcmVhY3Rpb24gdG8gdGhlIGlkZW50aWZpZWQgc3Vic3RhbmNlLCB3aGljaCBtYXkgaW5jbHVkZSBjbGluaWNhbCBldmlkZW5jZSBieSB0ZXN0aW5nIG9yIHJlY2hhbGxlbmdlLlxyXG4gICAqL1xyXG4gIENvbmZpcm1lZDoge1xyXG4gICAgZGlzcGxheTogXCJDb25maXJtZWRcIixcclxuICAgIGNvZGU6IFwiY29uZmlybWVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hbGxlcmd5aW50b2xlcmFuY2UtdmVyaWZpY2F0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgc3RhdGVtZW50IHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCBpcyBub3QgdmFsaWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiRW50ZXJlZCBpbiBFcnJvclwiLFxyXG4gICAgY29kZTogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hbGxlcmd5aW50b2xlcmFuY2UtdmVyaWZpY2F0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWZ1dGVkOiBBIHByb3BlbnNpdHkgZm9yIGEgcmVhY3Rpb24gdG8gdGhlIGlkZW50aWZpZWQgc3Vic3RhbmNlIGhhcyBiZWVuIGRpc3B1dGVkIG9yIGRpc3Byb3ZlbiB3aXRoIGEgc3VmZmljaWVudCBsZXZlbCBvZiBjbGluaWNhbCBjZXJ0YWludHkgdG8ganVzdGlmeSBpbnZhbGlkYXRpbmcgdGhlIGFzc2VydGlvbi4gVGhpcyBtaWdodCBvciBtaWdodCBub3QgaW5jbHVkZSB0ZXN0aW5nIG9yIHJlY2hhbGxlbmdlLlxyXG4gICAqL1xyXG4gIFJlZnV0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVmdXRlZFwiLFxyXG4gICAgY29kZTogXCJyZWZ1dGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hbGxlcmd5aW50b2xlcmFuY2UtdmVyaWZpY2F0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB1bmNvbmZpcm1lZDogQSBsb3cgbGV2ZWwgb2YgY2VydGFpbnR5IGFib3V0IHRoZSBwcm9wZW5zaXR5IGZvciBhIHJlYWN0aW9uIHRvIHRoZSBpZGVudGlmaWVkIHN1YnN0YW5jZS5cclxuICAgKi9cclxuICBVbmNvbmZpcm1lZDoge1xyXG4gICAgZGlzcGxheTogXCJVbmNvbmZpcm1lZFwiLFxyXG4gICAgY29kZTogXCJ1bmNvbmZpcm1lZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYWxsZXJneWludG9sZXJhbmNlLXZlcmlmaWNhdGlvblwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==