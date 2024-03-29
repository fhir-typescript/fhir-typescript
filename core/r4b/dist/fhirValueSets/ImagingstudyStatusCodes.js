// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/imagingstudy-status|4.3.0
/**
 * The status of the ImagingStudy.
 */
export const ImagingstudyStatusCodes = {
    /**
     * available: At least one instance has been associated with this imaging study.
     */
    Available: "available",
    /**
     * cancelled: The imaging study is unavailable because the imaging study was not started or not completed (also sometimes called "aborted").
     */
    Cancelled: "cancelled",
    /**
     * entered-in-error: The imaging study has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError: "entered-in-error",
    /**
     * registered: The existence of the imaging study is registered, but there is nothing yet available.
     */
    Registered: "registered",
    /**
     * unknown: The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2luZ3N0dWR5U3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0ltYWdpbmdzdHVkeVN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHdFQUF3RTtBQUV4RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHO0lBQ3JDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEM7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaW1hZ2luZ3N0dWR5LXN0YXR1c3w0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSBzdGF0dXMgb2YgdGhlIEltYWdpbmdTdHVkeS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJbWFnaW5nc3R1ZHlTdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhdmFpbGFibGU6IEF0IGxlYXN0IG9uZSBpbnN0YW5jZSBoYXMgYmVlbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbWFnaW5nIHN0dWR5LlxyXG4gICAqL1xyXG4gIEF2YWlsYWJsZTogXCJhdmFpbGFibGVcIixcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSBpbWFnaW5nIHN0dWR5IGlzIHVuYXZhaWxhYmxlIGJlY2F1c2UgdGhlIGltYWdpbmcgc3R1ZHkgd2FzIG5vdCBzdGFydGVkIG9yIG5vdCBjb21wbGV0ZWQgKGFsc28gc29tZXRpbWVzIGNhbGxlZCBcImFib3J0ZWRcIikuXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiBcImNhbmNlbGxlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBpbWFnaW5nIHN0dWR5IGhhcyBiZWVuIHdpdGhkcmF3biBmb2xsb3dpbmcgYSBwcmV2aW91cyBmaW5hbCByZWxlYXNlLiAgVGhpcyBlbGVjdHJvbmljIHJlY29yZCBzaG91bGQgbmV2ZXIgaGF2ZSBleGlzdGVkLCB0aG91Z2ggaXQgaXMgcG9zc2libGUgdGhhdCByZWFsLXdvcmxkIGRlY2lzaW9ucyB3ZXJlIGJhc2VkIG9uIGl0LiAoSWYgcmVhbC13b3JsZCBhY3Rpdml0eSBoYXMgb2NjdXJyZWQsIHRoZSBzdGF0dXMgc2hvdWxkIGJlIFwiY2FuY2VsbGVkXCIgcmF0aGVyIHRoYW4gXCJlbnRlcmVkLWluLWVycm9yXCIuKS5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogcmVnaXN0ZXJlZDogVGhlIGV4aXN0ZW5jZSBvZiB0aGUgaW1hZ2luZyBzdHVkeSBpcyByZWdpc3RlcmVkLCBidXQgdGhlcmUgaXMgbm90aGluZyB5ZXQgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIFJlZ2lzdGVyZWQ6IFwicmVnaXN0ZXJlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyByZXF1ZXN0LiBOb3RlOiBUaGlzIGNvbmNlcHQgaXMgbm90IHRvIGJlIHVzZWQgZm9yIFwib3RoZXJcIiAtIG9uZSBvZiB0aGUgbGlzdGVkIHN0YXR1c2VzIGlzIHByZXN1bWVkIHRvIGFwcGx5LCBpdCdzIGp1c3Qgbm90IGtub3duIHdoaWNoIG9uZS5cclxuICAgKi9cclxuICBVbmtub3duOiBcInVua25vd25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgc3RhdHVzIG9mIHRoZSBJbWFnaW5nU3R1ZHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJbWFnaW5nc3R1ZHlTdGF0dXNDb2RlVHlwZSA9IHR5cGVvZiBJbWFnaW5nc3R1ZHlTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgSW1hZ2luZ3N0dWR5U3RhdHVzQ29kZXNdO1xyXG4iXX0=