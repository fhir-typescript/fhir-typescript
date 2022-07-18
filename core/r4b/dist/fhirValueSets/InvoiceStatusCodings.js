// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/invoice-status|4.3.0
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export const InvoiceStatusCodings = {
    /**
     * balanced: the invoice has been balaced / completely paid.
     */
    Balanced: {
        display: "balanced",
        code: "balanced",
        system: "http://hl7.org/fhir/invoice-status",
    },
    /**
     * cancelled: the invoice was cancelled.
     */
    Cancelled: {
        display: "cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/invoice-status",
    },
    /**
     * draft: the invoice has been prepared but not yet finalized.
     */
    Draft: {
        display: "draft",
        code: "draft",
        system: "http://hl7.org/fhir/invoice-status",
    },
    /**
     * entered-in-error: the invoice was determined as entered in error before it was issued.
     */
    EnteredInError: {
        display: "entered in error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/invoice-status",
    },
    /**
     * issued: the invoice has been finalized and sent to the recipient.
     */
    Issued: {
        display: "issued",
        code: "issued",
        system: "http://hl7.org/fhir/invoice-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52b2ljZVN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0ludm9pY2VTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQThCbkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pbnZvaWNlLXN0YXR1c3w0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIGlkZW50aWZ5aW5nIHRoZSBsaWZlY3ljbGUgc3RhZ2Ugb2YgYW4gSW52b2ljZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEludm9pY2VTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJhbGFuY2VkOiB0aGUgaW52b2ljZSBoYXMgYmVlbiBiYWxhY2VkIC8gY29tcGxldGVseSBwYWlkLlxyXG4gICAqL1xyXG4gIEJhbGFuY2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogdGhlIGludm9pY2Ugd2FzIGNhbmNlbGxlZC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZHJhZnQ6IHRoZSBpbnZvaWNlIGhhcyBiZWVuIHByZXBhcmVkIGJ1dCBub3QgeWV0IGZpbmFsaXplZC5cclxuICAgKi9cclxuICBEcmFmdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiB0aGUgaW52b2ljZSB3YXMgZGV0ZXJtaW5lZCBhcyBlbnRlcmVkIGluIGVycm9yIGJlZm9yZSBpdCB3YXMgaXNzdWVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGlzc3VlZDogdGhlIGludm9pY2UgaGFzIGJlZW4gZmluYWxpemVkIGFuZCBzZW50IHRvIHRoZSByZWNpcGllbnQuXHJcbiAgICovXHJcbiAgSXNzdWVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29kZXMgaWRlbnRpZnlpbmcgdGhlIGxpZmVjeWNsZSBzdGFnZSBvZiBhbiBJbnZvaWNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEludm9pY2VTdGF0dXNDb2RpbmdzOkludm9pY2VTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJhbGFuY2VkOiB0aGUgaW52b2ljZSBoYXMgYmVlbiBiYWxhY2VkIC8gY29tcGxldGVseSBwYWlkLlxyXG4gICAqL1xyXG4gIEJhbGFuY2VkOiB7XHJcbiAgICBkaXNwbGF5OiBcImJhbGFuY2VkXCIsXHJcbiAgICBjb2RlOiBcImJhbGFuY2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pbnZvaWNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiB0aGUgaW52b2ljZSB3YXMgY2FuY2VsbGVkLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDoge1xyXG4gICAgZGlzcGxheTogXCJjYW5jZWxsZWRcIixcclxuICAgIGNvZGU6IFwiY2FuY2VsbGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pbnZvaWNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZHJhZnQ6IHRoZSBpbnZvaWNlIGhhcyBiZWVuIHByZXBhcmVkIGJ1dCBub3QgeWV0IGZpbmFsaXplZC5cclxuICAgKi9cclxuICBEcmFmdDoge1xyXG4gICAgZGlzcGxheTogXCJkcmFmdFwiLFxyXG4gICAgY29kZTogXCJkcmFmdFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaW52b2ljZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IHRoZSBpbnZvaWNlIHdhcyBkZXRlcm1pbmVkIGFzIGVudGVyZWQgaW4gZXJyb3IgYmVmb3JlIGl0IHdhcyBpc3N1ZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiZW50ZXJlZCBpbiBlcnJvclwiLFxyXG4gICAgY29kZTogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pbnZvaWNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaXNzdWVkOiB0aGUgaW52b2ljZSBoYXMgYmVlbiBmaW5hbGl6ZWQgYW5kIHNlbnQgdG8gdGhlIHJlY2lwaWVudC5cclxuICAgKi9cclxuICBJc3N1ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiaXNzdWVkXCIsXHJcbiAgICBjb2RlOiBcImlzc3VlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaW52b2ljZS1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=