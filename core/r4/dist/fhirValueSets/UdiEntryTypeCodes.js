// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/udi-entry-type|4.0.1
/**
 * Codes to identify how UDI data was entered.
 */
export const UdiEntryTypeCodes = {
    /**
     * barcode: a barcodescanner captured the data from the device label.
     */
    Barcode: "barcode",
    /**
     * card: The data originated from a patient's implant card and was read by an operator.
     */
    Card: "card",
    /**
     * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard).
     */
    Manual: "manual",
    /**
     * rfid: An RFID chip reader captured the data from the device label.
     */
    RFID: "rfid",
    /**
     * self-reported: The data originated from a patient source and was not directly scanned or read from a label or card.
     */
    SelfReported: "self-reported",
    /**
     * unknown: The method of data capture has not been determined.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVWRpRW50cnlUeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1VkaUVudHJ5VHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQUVuRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9COztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsWUFBWSxFQUFFLGVBQWU7SUFDN0I7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdWRpLWVudHJ5LXR5cGV8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyB0byBpZGVudGlmeSBob3cgVURJIGRhdGEgd2FzIGVudGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVWRpRW50cnlUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYmFyY29kZTogYSBiYXJjb2Rlc2Nhbm5lciBjYXB0dXJlZCB0aGUgZGF0YSBmcm9tIHRoZSBkZXZpY2UgbGFiZWwuXHJcbiAgICovXHJcbiAgQmFyY29kZTogXCJiYXJjb2RlXCIsXHJcbiAgLyoqXHJcbiAgICogY2FyZDogVGhlIGRhdGEgb3JpZ2luYXRlZCBmcm9tIGEgcGF0aWVudCdzIGltcGxhbnQgY2FyZCBhbmQgd2FzIHJlYWQgYnkgYW4gb3BlcmF0b3IuXHJcbiAgICovXHJcbiAgQ2FyZDogXCJjYXJkXCIsXHJcbiAgLyoqXHJcbiAgICogbWFudWFsOiBUaGUgZGF0YSB3YXMgcmVhZCBmcm9tIHRoZSBsYWJlbCBieSBhIHBlcnNvbiBhbmQgbWFudWFsbHkgZW50ZXJlZC4gKGUuZy4gIHZpYSBhIGtleWJvYXJkKS5cclxuICAgKi9cclxuICBNYW51YWw6IFwibWFudWFsXCIsXHJcbiAgLyoqXHJcbiAgICogcmZpZDogQW4gUkZJRCBjaGlwIHJlYWRlciBjYXB0dXJlZCB0aGUgZGF0YSBmcm9tIHRoZSBkZXZpY2UgbGFiZWwuXHJcbiAgICovXHJcbiAgUkZJRDogXCJyZmlkXCIsXHJcbiAgLyoqXHJcbiAgICogc2VsZi1yZXBvcnRlZDogVGhlIGRhdGEgb3JpZ2luYXRlZCBmcm9tIGEgcGF0aWVudCBzb3VyY2UgYW5kIHdhcyBub3QgZGlyZWN0bHkgc2Nhbm5lZCBvciByZWFkIGZyb20gYSBsYWJlbCBvciBjYXJkLlxyXG4gICAqL1xyXG4gIFNlbGZSZXBvcnRlZDogXCJzZWxmLXJlcG9ydGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIG1ldGhvZCBvZiBkYXRhIGNhcHR1cmUgaGFzIG5vdCBiZWVuIGRldGVybWluZWQuXHJcbiAgICovXHJcbiAgVW5rbm93bjogXCJ1bmtub3duXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZXMgdG8gaWRlbnRpZnkgaG93IFVESSBkYXRhIHdhcyBlbnRlcmVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVWRpRW50cnlUeXBlQ29kZVR5cGUgPSB0eXBlb2YgVWRpRW50cnlUeXBlQ29kZXNba2V5b2YgdHlwZW9mIFVkaUVudHJ5VHlwZUNvZGVzXTtcclxuIl19