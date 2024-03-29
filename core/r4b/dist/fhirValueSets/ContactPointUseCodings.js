// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contact-point-use|4.3.0
/**
 * Use of contact point.
 */
export const ContactPointUseCodings = {
    /**
     * home: A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
     */
    Home: {
        display: "Home",
        code: "home",
        system: "http://hl7.org/fhir/contact-point-use",
    },
    /**
     * mobile: A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
     */
    Mobile: {
        display: "Mobile",
        code: "mobile",
        system: "http://hl7.org/fhir/contact-point-use",
    },
    /**
     * old: This contact point is no longer in use (or was never correct, but retained for records).
     */
    Old: {
        display: "Old",
        code: "old",
        system: "http://hl7.org/fhir/contact-point-use",
    },
    /**
     * temp: A temporary contact point. The period can provide more detailed information.
     */
    Temp: {
        display: "Temp",
        code: "temp",
        system: "http://hl7.org/fhir/contact-point-use",
    },
    /**
     * work: An office contact point. First choice for business related contacts during business hours.
     */
    Work: {
        display: "Work",
        code: "work",
        system: "http://hl7.org/fhir/contact-point-use",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBvaW50VXNlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ29udGFjdFBvaW50VXNlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxzRUFBc0U7QUE4QnRFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTZCO0lBQzlEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtJQUNEOztPQUVHO0lBQ0gsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbnRhY3QtcG9pbnQtdXNlfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVXNlIG9mIGNvbnRhY3QgcG9pbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb250YWN0UG9pbnRVc2VDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGhvbWU6IEEgY29tbXVuaWNhdGlvbiBjb250YWN0IHBvaW50IGF0IGEgaG9tZTsgYXR0ZW1wdGVkIGNvbnRhY3RzIGZvciBidXNpbmVzcyBwdXJwb3NlcyBtaWdodCBpbnRydWRlIHByaXZhY3kgYW5kIGNoYW5jZXMgYXJlIG9uZSB3aWxsIGNvbnRhY3QgZmFtaWx5IG9yIG90aGVyIGhvdXNlaG9sZCBtZW1iZXJzIGluc3RlYWQgb2YgdGhlIHBlcnNvbiBvbmUgd2lzaGVzIHRvIGNhbGwuIFR5cGljYWxseSB1c2VkIHdpdGggdXJnZW50IGNhc2VzLCBvciBpZiBubyBvdGhlciBjb250YWN0cyBhcmUgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIEhvbWU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbW9iaWxlOiBBIHRlbGVjb21tdW5pY2F0aW9uIGRldmljZSB0aGF0IG1vdmVzIGFuZCBzdGF5cyB3aXRoIGl0cyBvd25lci4gTWF5IGhhdmUgY2hhcmFjdGVyaXN0aWNzIG9mIGFsbCBvdGhlciB1c2UgY29kZXMsIHN1aXRhYmxlIGZvciB1cmdlbnQgbWF0dGVycywgbm90IHRoZSBmaXJzdCBjaG9pY2UgZm9yIHJvdXRpbmUgYnVzaW5lc3MuXHJcbiAgICovXHJcbiAgTW9iaWxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9sZDogVGhpcyBjb250YWN0IHBvaW50IGlzIG5vIGxvbmdlciBpbiB1c2UgKG9yIHdhcyBuZXZlciBjb3JyZWN0LCBidXQgcmV0YWluZWQgZm9yIHJlY29yZHMpLlxyXG4gICAqL1xyXG4gIE9sZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0ZW1wOiBBIHRlbXBvcmFyeSBjb250YWN0IHBvaW50LiBUaGUgcGVyaW9kIGNhbiBwcm92aWRlIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgVGVtcDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB3b3JrOiBBbiBvZmZpY2UgY29udGFjdCBwb2ludC4gRmlyc3QgY2hvaWNlIGZvciBidXNpbmVzcyByZWxhdGVkIGNvbnRhY3RzIGR1cmluZyBidXNpbmVzcyBob3Vycy5cclxuICAgKi9cclxuICBXb3JrOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVXNlIG9mIGNvbnRhY3QgcG9pbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29udGFjdFBvaW50VXNlQ29kaW5nczpDb250YWN0UG9pbnRVc2VDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGhvbWU6IEEgY29tbXVuaWNhdGlvbiBjb250YWN0IHBvaW50IGF0IGEgaG9tZTsgYXR0ZW1wdGVkIGNvbnRhY3RzIGZvciBidXNpbmVzcyBwdXJwb3NlcyBtaWdodCBpbnRydWRlIHByaXZhY3kgYW5kIGNoYW5jZXMgYXJlIG9uZSB3aWxsIGNvbnRhY3QgZmFtaWx5IG9yIG90aGVyIGhvdXNlaG9sZCBtZW1iZXJzIGluc3RlYWQgb2YgdGhlIHBlcnNvbiBvbmUgd2lzaGVzIHRvIGNhbGwuIFR5cGljYWxseSB1c2VkIHdpdGggdXJnZW50IGNhc2VzLCBvciBpZiBubyBvdGhlciBjb250YWN0cyBhcmUgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIEhvbWU6IHtcclxuICAgIGRpc3BsYXk6IFwiSG9tZVwiLFxyXG4gICAgY29kZTogXCJob21lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250YWN0LXBvaW50LXVzZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbW9iaWxlOiBBIHRlbGVjb21tdW5pY2F0aW9uIGRldmljZSB0aGF0IG1vdmVzIGFuZCBzdGF5cyB3aXRoIGl0cyBvd25lci4gTWF5IGhhdmUgY2hhcmFjdGVyaXN0aWNzIG9mIGFsbCBvdGhlciB1c2UgY29kZXMsIHN1aXRhYmxlIGZvciB1cmdlbnQgbWF0dGVycywgbm90IHRoZSBmaXJzdCBjaG9pY2UgZm9yIHJvdXRpbmUgYnVzaW5lc3MuXHJcbiAgICovXHJcbiAgTW9iaWxlOiB7XHJcbiAgICBkaXNwbGF5OiBcIk1vYmlsZVwiLFxyXG4gICAgY29kZTogXCJtb2JpbGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbnRhY3QtcG9pbnQtdXNlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvbGQ6IFRoaXMgY29udGFjdCBwb2ludCBpcyBubyBsb25nZXIgaW4gdXNlIChvciB3YXMgbmV2ZXIgY29ycmVjdCwgYnV0IHJldGFpbmVkIGZvciByZWNvcmRzKS5cclxuICAgKi9cclxuICBPbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT2xkXCIsXHJcbiAgICBjb2RlOiBcIm9sZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udGFjdC1wb2ludC11c2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRlbXA6IEEgdGVtcG9yYXJ5IGNvbnRhY3QgcG9pbnQuIFRoZSBwZXJpb2QgY2FuIHByb3ZpZGUgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBUZW1wOiB7XHJcbiAgICBkaXNwbGF5OiBcIlRlbXBcIixcclxuICAgIGNvZGU6IFwidGVtcFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29udGFjdC1wb2ludC11c2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHdvcms6IEFuIG9mZmljZSBjb250YWN0IHBvaW50LiBGaXJzdCBjaG9pY2UgZm9yIGJ1c2luZXNzIHJlbGF0ZWQgY29udGFjdHMgZHVyaW5nIGJ1c2luZXNzIGhvdXJzLlxyXG4gICAqL1xyXG4gIFdvcms6IHtcclxuICAgIGRpc3BsYXk6IFwiV29ya1wiLFxyXG4gICAgY29kZTogXCJ3b3JrXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb250YWN0LXBvaW50LXVzZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==