// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/history-absent-reason|4.3.0
/**
 * Codes describing the reason why a family member's history is not available.
 */
export const HistoryAbsentReasonCodings = {
    /**
     * deferred: Patient does not have the information now, but can provide the information at a later date.
     */
    Deferred: {
        display: "Deferred",
        code: "deferred",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason",
    },
    /**
     * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    SubjectUnknown: {
        display: "Subject Unknown",
        code: "subject-unknown",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason",
    },
    /**
     * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient.
     */
    UnableToObtain: {
        display: "Unable To Obtain",
        code: "unable-to-obtain",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason",
    },
    /**
     * withheld: The patient withheld or refused to share the information.
     */
    InformationWithheld: {
        display: "Information Withheld",
        code: "withheld",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlzdG9yeUFic2VudFJlYXNvbkNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0hpc3RvcnlBYnNlbnRSZWFzb25Db2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDBFQUEwRTtBQTBCMUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUM7SUFDdEU7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsNkRBQTZEO0tBQ3RFO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsTUFBTSxFQUFFLDZEQUE2RDtLQUN0RTtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSw2REFBNkQ7S0FDdEU7SUFDRDs7T0FFRztJQUNILG1CQUFtQixFQUFFO1FBQ25CLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDZEQUE2RDtLQUN0RTtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2hpc3RvcnktYWJzZW50LXJlYXNvbnw0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIGRlc2NyaWJpbmcgdGhlIHJlYXNvbiB3aHkgYSBmYW1pbHkgbWVtYmVyJ3MgaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSGlzdG9yeUFic2VudFJlYXNvbkNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGVmZXJyZWQ6IFBhdGllbnQgZG9lcyBub3QgaGF2ZSB0aGUgaW5mb3JtYXRpb24gbm93LCBidXQgY2FuIHByb3ZpZGUgdGhlIGluZm9ybWF0aW9uIGF0IGEgbGF0ZXIgZGF0ZS5cclxuICAgKi9cclxuICBEZWZlcnJlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdWJqZWN0LXVua25vd246IFBhdGllbnQgZG9lcyBub3Qga25vdyB0aGUgc3ViamVjdCwgZS5nLiB0aGUgYmlvbG9naWNhbCBwYXJlbnQgb2YgYW4gYWRvcHRlZCBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFN1YmplY3RVbmtub3duOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVuYWJsZS10by1vYnRhaW46IEluZm9ybWF0aW9uIGNhbm5vdCBiZSBvYnRhaW5lZDsgZS5nLiB1bmNvbnNjaW91cyBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFVuYWJsZVRvT2J0YWluOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHdpdGhoZWxkOiBUaGUgcGF0aWVudCB3aXRoaGVsZCBvciByZWZ1c2VkIHRvIHNoYXJlIHRoZSBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBJbmZvcm1hdGlvbldpdGhoZWxkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29kZXMgZGVzY3JpYmluZyB0aGUgcmVhc29uIHdoeSBhIGZhbWlseSBtZW1iZXIncyBoaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSGlzdG9yeUFic2VudFJlYXNvbkNvZGluZ3M6SGlzdG9yeUFic2VudFJlYXNvbkNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGVmZXJyZWQ6IFBhdGllbnQgZG9lcyBub3QgaGF2ZSB0aGUgaW5mb3JtYXRpb24gbm93LCBidXQgY2FuIHByb3ZpZGUgdGhlIGluZm9ybWF0aW9uIGF0IGEgbGF0ZXIgZGF0ZS5cclxuICAgKi9cclxuICBEZWZlcnJlZDoge1xyXG4gICAgZGlzcGxheTogXCJEZWZlcnJlZFwiLFxyXG4gICAgY29kZTogXCJkZWZlcnJlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vaGlzdG9yeS1hYnNlbnQtcmVhc29uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzdWJqZWN0LXVua25vd246IFBhdGllbnQgZG9lcyBub3Qga25vdyB0aGUgc3ViamVjdCwgZS5nLiB0aGUgYmlvbG9naWNhbCBwYXJlbnQgb2YgYW4gYWRvcHRlZCBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFN1YmplY3RVbmtub3duOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN1YmplY3QgVW5rbm93blwiLFxyXG4gICAgY29kZTogXCJzdWJqZWN0LXVua25vd25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2hpc3RvcnktYWJzZW50LXJlYXNvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdW5hYmxlLXRvLW9idGFpbjogSW5mb3JtYXRpb24gY2Fubm90IGJlIG9idGFpbmVkOyBlLmcuIHVuY29uc2Npb3VzIHBhdGllbnQuXHJcbiAgICovXHJcbiAgVW5hYmxlVG9PYnRhaW46IHtcclxuICAgIGRpc3BsYXk6IFwiVW5hYmxlIFRvIE9idGFpblwiLFxyXG4gICAgY29kZTogXCJ1bmFibGUtdG8tb2J0YWluXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9oaXN0b3J5LWFic2VudC1yZWFzb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHdpdGhoZWxkOiBUaGUgcGF0aWVudCB3aXRoaGVsZCBvciByZWZ1c2VkIHRvIHNoYXJlIHRoZSBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBJbmZvcm1hdGlvbldpdGhoZWxkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluZm9ybWF0aW9uIFdpdGhoZWxkXCIsXHJcbiAgICBjb2RlOiBcIndpdGhoZWxkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9oaXN0b3J5LWFic2VudC1yZWFzb25cIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=