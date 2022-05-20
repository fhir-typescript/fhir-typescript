// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/chargeitem-status|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
export const ChargeitemStatusCodings = {
    /**
     * aborted: The processing of the charge was aborted.
     */
    Aborted: new Coding({
        display: "Aborted",
        code: "aborted",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * billable: The charge item is ready for billing.
     */
    Billable: new Coding({
        display: "Billable",
        code: "billable",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * billed: The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices.
     */
    Billed: new Coding({
        display: "Billed",
        code: "billed",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * entered-in-error: The charge item has been entered in error and should not be processed for billing.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * not-billable: The charge item has been determined to be not billable (e.g. due to rules associated with the billing code).
     */
    NotBillable: new Coding({
        display: "Not billable",
        code: "not-billable",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * planned: The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization.
     */
    Planned: new Coding({
        display: "Planned",
        code: "planned",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: new Coding({
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmdlaXRlbVN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NoYXJnZWl0ZW1TdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQUV0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRztJQUNyQzs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHVDQUF1QztLQUNoRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxjQUFjLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDekIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsV0FBVyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHVDQUF1QztLQUNoRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NoYXJnZWl0ZW0tc3RhdHVzfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBpZGVudGlmeWluZyB0aGUgbGlmZWN5Y2xlIHN0YWdlIG9mIGEgQ2hhcmdlSXRlbS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDaGFyZ2VpdGVtU3RhdHVzQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBhYm9ydGVkOiBUaGUgcHJvY2Vzc2luZyBvZiB0aGUgY2hhcmdlIHdhcyBhYm9ydGVkLlxyXG4gICAqL1xyXG4gIEFib3J0ZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJBYm9ydGVkXCIsXHJcbiAgICBjb2RlOiBcImFib3J0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NoYXJnZWl0ZW0tc3RhdHVzXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogYmlsbGFibGU6IFRoZSBjaGFyZ2UgaXRlbSBpcyByZWFkeSBmb3IgYmlsbGluZy5cclxuICAgKi9cclxuICBCaWxsYWJsZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkJpbGxhYmxlXCIsXHJcbiAgICBjb2RlOiBcImJpbGxhYmxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jaGFyZ2VpdGVtLXN0YXR1c1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGJpbGxlZDogVGhlIGNoYXJnZSBpdGVtIGhhcyBiZWVuIGJpbGxlZCAoZS5nLiBhIGJpbGxpbmcgZW5naW5lIGhhcyBnZW5lcmF0ZWQgZmluYW5jaWFsIHRyYW5zYWN0aW9ucyBieSBhcHBseWluZyB0aGUgYXNzb2NpYXRlZCBydWxlZCBmb3IgdGhlIGNoYXJnZSBpdGVtIHRvIHRoZSBjb250ZXh0IG9mIHRoZSBFbmNvdW50ZXIsIGFuZCBwbGFjZWQgdGhlbSBpbnRvIENsYWltcy9JbnZvaWNlcy5cclxuICAgKi9cclxuICBCaWxsZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJCaWxsZWRcIixcclxuICAgIGNvZGU6IFwiYmlsbGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jaGFyZ2VpdGVtLXN0YXR1c1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBjaGFyZ2UgaXRlbSBoYXMgYmVlbiBlbnRlcmVkIGluIGVycm9yIGFuZCBzaG91bGQgbm90IGJlIHByb2Nlc3NlZCBmb3IgYmlsbGluZy5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgaW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY2hhcmdlaXRlbS1zdGF0dXNcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBub3QtYmlsbGFibGU6IFRoZSBjaGFyZ2UgaXRlbSBoYXMgYmVlbiBkZXRlcm1pbmVkIHRvIGJlIG5vdCBiaWxsYWJsZSAoZS5nLiBkdWUgdG8gcnVsZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBiaWxsaW5nIGNvZGUpLlxyXG4gICAqL1xyXG4gIE5vdEJpbGxhYmxlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiTm90IGJpbGxhYmxlXCIsXHJcbiAgICBjb2RlOiBcIm5vdC1iaWxsYWJsZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY2hhcmdlaXRlbS1zdGF0dXNcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBwbGFubmVkOiBUaGUgY2hhcmdlIGl0ZW0gaGFzIGJlZW4gZW50ZXJlZCwgYnV0IHRoZSBjaGFyZ2VkIHNlcnZpY2UgaXMgbm90ICB5ZXQgY29tcGxldGUsIHNvIGl0IHNoYWxsIG5vdCBiZSBiaWxsZWQgeWV0IGJ1dCBtaWdodCBiZSB1c2VkIGluIHRoZSBjb250ZXh0IG9mIHByZS1hdXRob3JpemF0aW9uLlxyXG4gICAqL1xyXG4gIFBsYW5uZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQbGFubmVkXCIsXHJcbiAgICBjb2RlOiBcInBsYW5uZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NoYXJnZWl0ZW0tc3RhdHVzXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZyBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyBjaGFyZ2UgaXRlbSAgTm90ZTogVGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBcIm90aGVyXCIgLSBvbmUgb2YgdGhlIGxpc3RlZCBzdGF0dXNlcyBpcyBwcmVzdW1lZCB0byBhcHBseSwgaXQncyBqdXN0IG5vdCBrbm93biB3aGljaCBvbmUuXHJcbiAgICovXHJcbiAgVW5rbm93bjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlVua25vd25cIixcclxuICAgIGNvZGU6IFwidW5rbm93blwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY2hhcmdlaXRlbS1zdGF0dXNcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBpZGVudGlmeWluZyB0aGUgbGlmZWN5Y2xlIHN0YWdlIG9mIGEgQ2hhcmdlSXRlbS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENoYXJnZWl0ZW1TdGF0dXNDb2RpbmdUeXBlID0gdHlwZW9mIENoYXJnZWl0ZW1TdGF0dXNDb2RpbmdzO1xyXG4iXX0=