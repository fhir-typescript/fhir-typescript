// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export const AdjudicationCodings = {
    /**
     * benefit: Amount payable under the coverage
     */
    BenefitAmount: new Coding({
        display: "Benefit Amount",
        code: "benefit",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
    /**
     * copay: Patient Co-Payment
     */
    CoPay: new Coding({
        display: "CoPay",
        code: "copay",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
    /**
     * deductible: Amount deducted from the eligible amount prior to adjudication.
     */
    Deductible: new Coding({
        display: "Deductible",
        code: "deductible",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
    /**
     * eligible: Amount of the change which is considered for adjudication.
     */
    EligibleAmount: new Coding({
        display: "Eligible Amount",
        code: "eligible",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
    /**
     * eligpercent: Eligible Percentage.
     */
    EligiblePercent: new Coding({
        display: "Eligible %",
        code: "eligpercent",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
    /**
     * submitted: The total submitted amount for the claim or group or line item.
     */
    SubmittedAmount: new Coding({
        display: "Submitted Amount",
        code: "submitted",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
    /**
     * tax: The amount of tax.
     */
    Tax: new Coding({
        display: "Tax",
        code: "tax",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
    /**
     * unallocdeduct: The amount of deductible which could not allocated to other line items.
     */
    UnallocatedDeductible: new Coding({
        display: "Unallocated Deductible",
        code: "unallocdeduct",
        system: "http://terminology.hl7.org/CodeSystem/adjudication",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRqdWRpY2F0aW9uQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQWRqdWRpY2F0aW9uQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUc7SUFDakM7O09BRUc7SUFDSCxhQUFhLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDeEIsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLG9EQUFvRDtLQUM3RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxVQUFVLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDckIsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLG9EQUFvRDtLQUM3RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxjQUFjLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDekIsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsb0RBQW9EO0tBQzdELENBQUM7SUFDRjs7T0FFRztJQUNILGVBQWUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMxQixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsb0RBQW9EO0tBQzdELENBQUM7SUFDRjs7T0FFRztJQUNILGVBQWUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMxQixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDaEMsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsb0RBQW9EO0tBQzdELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FkanVkaWNhdGlvbnw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgaW5jbHVkZXMgYSBzbWF0dGVyaW5nIG9mIEFkanVkaWNhdGlvbiBWYWx1ZSBjb2RlcyB3aGljaCBpbmNsdWRlcyBjb2RlcyB0byBpbmRpY2F0ZSB0aGUgYW1vdW50cyBlbGlnaWJsZSB1bmRlciB0aGUgcGxhbiwgdGhlIGFtb3VudCBvZiBiZW5lZml0LCBjb3BheXMgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFkanVkaWNhdGlvbkNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogYmVuZWZpdDogQW1vdW50IHBheWFibGUgdW5kZXIgdGhlIGNvdmVyYWdlXHJcbiAgICovXHJcbiAgQmVuZWZpdEFtb3VudDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkJlbmVmaXQgQW1vdW50XCIsXHJcbiAgICBjb2RlOiBcImJlbmVmaXRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FkanVkaWNhdGlvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGNvcGF5OiBQYXRpZW50IENvLVBheW1lbnRcclxuICAgKi9cclxuICBDb1BheTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkNvUGF5XCIsXHJcbiAgICBjb2RlOiBcImNvcGF5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hZGp1ZGljYXRpb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBkZWR1Y3RpYmxlOiBBbW91bnQgZGVkdWN0ZWQgZnJvbSB0aGUgZWxpZ2libGUgYW1vdW50IHByaW9yIHRvIGFkanVkaWNhdGlvbi5cclxuICAgKi9cclxuICBEZWR1Y3RpYmxlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiRGVkdWN0aWJsZVwiLFxyXG4gICAgY29kZTogXCJkZWR1Y3RpYmxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hZGp1ZGljYXRpb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBlbGlnaWJsZTogQW1vdW50IG9mIHRoZSBjaGFuZ2Ugd2hpY2ggaXMgY29uc2lkZXJlZCBmb3IgYWRqdWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIEVsaWdpYmxlQW1vdW50OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiRWxpZ2libGUgQW1vdW50XCIsXHJcbiAgICBjb2RlOiBcImVsaWdpYmxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hZGp1ZGljYXRpb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBlbGlncGVyY2VudDogRWxpZ2libGUgUGVyY2VudGFnZS5cclxuICAgKi9cclxuICBFbGlnaWJsZVBlcmNlbnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJFbGlnaWJsZSAlXCIsXHJcbiAgICBjb2RlOiBcImVsaWdwZXJjZW50XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hZGp1ZGljYXRpb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBzdWJtaXR0ZWQ6IFRoZSB0b3RhbCBzdWJtaXR0ZWQgYW1vdW50IGZvciB0aGUgY2xhaW0gb3IgZ3JvdXAgb3IgbGluZSBpdGVtLlxyXG4gICAqL1xyXG4gIFN1Ym1pdHRlZEFtb3VudDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlN1Ym1pdHRlZCBBbW91bnRcIixcclxuICAgIGNvZGU6IFwic3VibWl0dGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hZGp1ZGljYXRpb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiB0YXg6IFRoZSBhbW91bnQgb2YgdGF4LlxyXG4gICAqL1xyXG4gIFRheDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlRheFwiLFxyXG4gICAgY29kZTogXCJ0YXhcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2FkanVkaWNhdGlvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHVuYWxsb2NkZWR1Y3Q6IFRoZSBhbW91bnQgb2YgZGVkdWN0aWJsZSB3aGljaCBjb3VsZCBub3QgYWxsb2NhdGVkIHRvIG90aGVyIGxpbmUgaXRlbXMuXHJcbiAgICovXHJcbiAgVW5hbGxvY2F0ZWREZWR1Y3RpYmxlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiVW5hbGxvY2F0ZWQgRGVkdWN0aWJsZVwiLFxyXG4gICAgY29kZTogXCJ1bmFsbG9jZGVkdWN0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hZGp1ZGljYXRpb25cIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBhIHNtYXR0ZXJpbmcgb2YgQWRqdWRpY2F0aW9uIFZhbHVlIGNvZGVzIHdoaWNoIGluY2x1ZGVzIGNvZGVzIHRvIGluZGljYXRlIHRoZSBhbW91bnRzIGVsaWdpYmxlIHVuZGVyIHRoZSBwbGFuLCB0aGUgYW1vdW50IG9mIGJlbmVmaXQsIGNvcGF5cyBldGMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBZGp1ZGljYXRpb25Db2RpbmdUeXBlID0gdHlwZW9mIEFkanVkaWNhdGlvbkNvZGluZ3M7XHJcbiJdfQ==