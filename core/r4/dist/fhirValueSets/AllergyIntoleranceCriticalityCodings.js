// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export const AllergyIntoleranceCriticalityCodings = {
    /**
     * high: Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
     */
    HighRisk: new Coding({
        display: "High Risk",
        code: "high",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
    }),
    /**
     * low: Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
     */
    LowRisk: new Coding({
        display: "Low Risk",
        code: "low",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
    }),
    /**
     * unable-to-assess: Unable to assess the worst case result of a future exposure.
     */
    UnableToAssessRisk: new Coding({
        display: "Unable to Assess Risk",
        code: "unable-to-assess",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BbGxlcmd5SW50b2xlcmFuY2VDcml0aWNhbGl0eUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0ZBQW9GO0FBRXBGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUFHO0lBQ2xEOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLHFEQUFxRDtLQUM5RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDbEIsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUscURBQXFEO0tBQzlELENBQUM7SUFDRjs7T0FFRztJQUNILGtCQUFrQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzdCLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUscURBQXFEO0tBQzlELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FsbGVyZ3ktaW50b2xlcmFuY2UtY3JpdGljYWxpdHl8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEVzdGltYXRlIG9mIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaGFybSwgb3Igc2VyaW91c25lc3MsIG9mIGEgcmVhY3Rpb24gdG8gYW4gaWRlbnRpZmllZCBzdWJzdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGhpZ2g6IFdvcnN0IGNhc2UgcmVzdWx0IG9mIGEgZnV0dXJlIGV4cG9zdXJlIGlzIGFzc2Vzc2VkIHRvIGJlIGxpZmUtdGhyZWF0ZW5pbmcgb3IgaGF2aW5nIGhpZ2ggcG90ZW50aWFsIGZvciBvcmdhbiBzeXN0ZW0gZmFpbHVyZS5cclxuICAgKi9cclxuICBIaWdoUmlzazogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkhpZ2ggUmlza1wiLFxyXG4gICAgY29kZTogXCJoaWdoXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hbGxlcmd5LWludG9sZXJhbmNlLWNyaXRpY2FsaXR5XCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogbG93OiBXb3JzdCBjYXNlIHJlc3VsdCBvZiBhIGZ1dHVyZSBleHBvc3VyZSBpcyBub3QgYXNzZXNzZWQgdG8gYmUgbGlmZS10aHJlYXRlbmluZyBvciBoYXZpbmcgaGlnaCBwb3RlbnRpYWwgZm9yIG9yZ2FuIHN5c3RlbSBmYWlsdXJlLlxyXG4gICAqL1xyXG4gIExvd1Jpc2s6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJMb3cgUmlza1wiLFxyXG4gICAgY29kZTogXCJsb3dcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FsbGVyZ3ktaW50b2xlcmFuY2UtY3JpdGljYWxpdHlcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiB1bmFibGUtdG8tYXNzZXNzOiBVbmFibGUgdG8gYXNzZXNzIHRoZSB3b3JzdCBjYXNlIHJlc3VsdCBvZiBhIGZ1dHVyZSBleHBvc3VyZS5cclxuICAgKi9cclxuICBVbmFibGVUb0Fzc2Vzc1Jpc2s6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJVbmFibGUgdG8gQXNzZXNzIFJpc2tcIixcclxuICAgIGNvZGU6IFwidW5hYmxlLXRvLWFzc2Vzc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS1pbnRvbGVyYW5jZS1jcml0aWNhbGl0eVwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEVzdGltYXRlIG9mIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaGFybSwgb3Igc2VyaW91c25lc3MsIG9mIGEgcmVhY3Rpb24gdG8gYW4gaWRlbnRpZmllZCBzdWJzdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbGxlcmd5SW50b2xlcmFuY2VDcml0aWNhbGl0eUNvZGluZ1R5cGUgPSB0eXBlb2YgQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2RpbmdzO1xyXG4iXX0=