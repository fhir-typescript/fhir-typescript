// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/insuranceplan-applicability|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export const InsuranceplanApplicabilityCodings = {
    /**
     * in-network: Provider is contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    InNetwork: new Coding({
        display: "In Network",
        code: "in-network",
        system: "http://terminology.hl7.org/CodeSystem/applicability",
    }),
    /**
     * other: Other applicability
     */
    Other: new Coding({
        display: "Other",
        code: "other",
        system: "http://terminology.hl7.org/CodeSystem/applicability",
    }),
    /**
     * out-of-network: Provider is  not contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    OutOfNetwork: new Coding({
        display: "Out of Network",
        code: "out-of-network",
        system: "http://terminology.hl7.org/CodeSystem/applicability",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlcGxhbkFwcGxpY2FiaWxpdHlDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9JbnN1cmFuY2VwbGFuQXBwbGljYWJpbGl0eUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsZ0ZBQWdGO0FBRWhGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFHO0lBQy9DOztPQUVHO0lBQ0gsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxxREFBcUQ7S0FDOUQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHFEQUFxRDtLQUM5RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxZQUFZLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdkIsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE1BQU0sRUFBRSxxREFBcUQ7S0FDOUQsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaW5zdXJhbmNlcGxhbi1hcHBsaWNhYmlsaXR5fDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRoZSBjb3N0IGFwcGxpZXMgdG8gaW4tbmV0d29yayBvciBvdXQtb2YtbmV0d29yayBwcm92aWRlcnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSW5zdXJhbmNlcGxhbkFwcGxpY2FiaWxpdHlDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGluLW5ldHdvcms6IFByb3ZpZGVyIGlzIGNvbnRyYWN0ZWQgd2l0aCB0aGUgaGVhbHRoIGluc3VyYW5jZSBjb21wYW55IHRvIHByb3ZpZGUgc2VydmljZXMgdG8gcGxhbiBtZW1iZXJzIGZvciBzcGVjaWZpYyBwcmUtbmVnb3RpYXRlZCByYXRlc1xyXG4gICAqL1xyXG4gIEluTmV0d29yazogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkluIE5ldHdvcmtcIixcclxuICAgIGNvZGU6IFwiaW4tbmV0d29ya1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwbGljYWJpbGl0eVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIG90aGVyOiBPdGhlciBhcHBsaWNhYmlsaXR5XHJcbiAgICovXHJcbiAgT3RoZXI6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJPdGhlclwiLFxyXG4gICAgY29kZTogXCJvdGhlclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vYXBwbGljYWJpbGl0eVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIG91dC1vZi1uZXR3b3JrOiBQcm92aWRlciBpcyAgbm90IGNvbnRyYWN0ZWQgd2l0aCB0aGUgaGVhbHRoIGluc3VyYW5jZSBjb21wYW55IHRvIHByb3ZpZGUgc2VydmljZXMgdG8gcGxhbiBtZW1iZXJzIGZvciBzcGVjaWZpYyBwcmUtbmVnb3RpYXRlZCByYXRlc1xyXG4gICAqL1xyXG4gIE91dE9mTmV0d29yazogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk91dCBvZiBOZXR3b3JrXCIsXHJcbiAgICBjb2RlOiBcIm91dC1vZi1uZXR3b3JrXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hcHBsaWNhYmlsaXR5XCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogV2hldGhlciB0aGUgY29zdCBhcHBsaWVzIHRvIGluLW5ldHdvcmsgb3Igb3V0LW9mLW5ldHdvcmsgcHJvdmlkZXJzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSW5zdXJhbmNlcGxhbkFwcGxpY2FiaWxpdHlDb2RpbmdUeXBlID0gdHlwZW9mIEluc3VyYW5jZXBsYW5BcHBsaWNhYmlsaXR5Q29kaW5ncztcclxuIl19