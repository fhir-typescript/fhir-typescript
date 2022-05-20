// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payment-status|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes a sample set of Payment Status codes.
 */
export const PaymentStatusCodings = {
    /**
     * cleared: The payment has been received by the payee.
     */
    Cleared: new Coding({
        display: "Cleared",
        code: "cleared",
        system: "http://terminology.hl7.org/CodeSystem/paymentstatus",
    }),
    /**
     * paid: The payment has been sent physically or electronically.
     */
    Paid: new Coding({
        display: "Paid",
        code: "paid",
        system: "http://terminology.hl7.org/CodeSystem/paymentstatus",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudFN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1BheW1lbnRTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQUVuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRztJQUNsQzs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxxREFBcUQ7S0FDOUQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxxREFBcUQ7S0FDOUQsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcGF5bWVudC1zdGF0dXN8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIGEgc2FtcGxlIHNldCBvZiBQYXltZW50IFN0YXR1cyBjb2Rlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQYXltZW50U3RhdHVzQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBjbGVhcmVkOiBUaGUgcGF5bWVudCBoYXMgYmVlbiByZWNlaXZlZCBieSB0aGUgcGF5ZWUuXHJcbiAgICovXHJcbiAgQ2xlYXJlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkNsZWFyZWRcIixcclxuICAgIGNvZGU6IFwiY2xlYXJlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vcGF5bWVudHN0YXR1c1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHBhaWQ6IFRoZSBwYXltZW50IGhhcyBiZWVuIHNlbnQgcGh5c2ljYWxseSBvciBlbGVjdHJvbmljYWxseS5cclxuICAgKi9cclxuICBQYWlkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUGFpZFwiLFxyXG4gICAgY29kZTogXCJwYWlkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9wYXltZW50c3RhdHVzXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgaW5jbHVkZXMgYSBzYW1wbGUgc2V0IG9mIFBheW1lbnQgU3RhdHVzIGNvZGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUGF5bWVudFN0YXR1c0NvZGluZ1R5cGUgPSB0eXBlb2YgUGF5bWVudFN0YXR1c0NvZGluZ3M7XHJcbiJdfQ==