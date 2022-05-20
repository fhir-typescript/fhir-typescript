// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-type|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes Claim Type codes.
 */
export const ClaimTypeCodings = {
    /**
     * institutional: Hospital, clinic and typically inpatient claims.
     */
    Institutional: new Coding({
        display: "Institutional",
        code: "institutional",
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
    }),
    /**
     * oral: Dental, Denture and Hygiene claims.
     */
    Oral: new Coding({
        display: "Oral",
        code: "oral",
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
    }),
    /**
     * pharmacy: Pharmacy claims for goods and services.
     */
    Pharmacy: new Coding({
        display: "Pharmacy",
        code: "pharmacy",
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
    }),
    /**
     * professional: Typically, outpatient claims from Physician, Psychological, Chiropractor, Physiotherapy, Speech Pathology, rehabilitative, consulting.
     */
    Professional: new Coding({
        display: "Professional",
        code: "professional",
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
    }),
    /**
     * vision: Vision claims for professional services and products such as glasses and contact lenses.
     */
    Vision: new Coding({
        display: "Vision",
        code: "vision",
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xhaW1UeXBlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ2xhaW1UeXBlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrREFBK0Q7QUFFL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUc7SUFDOUI7O09BRUc7SUFDSCxhQUFhLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDeEIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDZixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDbkIsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxZQUFZLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLGtEQUFrRDtLQUMzRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxNQUFNLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDakIsT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NsYWltLXR5cGV8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIENsYWltIFR5cGUgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2xhaW1UeXBlQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBpbnN0aXR1dGlvbmFsOiBIb3NwaXRhbCwgY2xpbmljIGFuZCB0eXBpY2FsbHkgaW5wYXRpZW50IGNsYWltcy5cclxuICAgKi9cclxuICBJbnN0aXR1dGlvbmFsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiSW5zdGl0dXRpb25hbFwiLFxyXG4gICAgY29kZTogXCJpbnN0aXR1dGlvbmFsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jbGFpbS10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogb3JhbDogRGVudGFsLCBEZW50dXJlIGFuZCBIeWdpZW5lIGNsYWltcy5cclxuICAgKi9cclxuICBPcmFsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiT3JhbFwiLFxyXG4gICAgY29kZTogXCJvcmFsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jbGFpbS10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcGhhcm1hY3k6IFBoYXJtYWN5IGNsYWltcyBmb3IgZ29vZHMgYW5kIHNlcnZpY2VzLlxyXG4gICAqL1xyXG4gIFBoYXJtYWN5OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUGhhcm1hY3lcIixcclxuICAgIGNvZGU6IFwicGhhcm1hY3lcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NsYWltLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBwcm9mZXNzaW9uYWw6IFR5cGljYWxseSwgb3V0cGF0aWVudCBjbGFpbXMgZnJvbSBQaHlzaWNpYW4sIFBzeWNob2xvZ2ljYWwsIENoaXJvcHJhY3RvciwgUGh5c2lvdGhlcmFweSwgU3BlZWNoIFBhdGhvbG9neSwgcmVoYWJpbGl0YXRpdmUsIGNvbnN1bHRpbmcuXHJcbiAgICovXHJcbiAgUHJvZmVzc2lvbmFsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHJvZmVzc2lvbmFsXCIsXHJcbiAgICBjb2RlOiBcInByb2Zlc3Npb25hbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY2xhaW0tdHlwZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHZpc2lvbjogVmlzaW9uIGNsYWltcyBmb3IgcHJvZmVzc2lvbmFsIHNlcnZpY2VzIGFuZCBwcm9kdWN0cyBzdWNoIGFzIGdsYXNzZXMgYW5kIGNvbnRhY3QgbGVuc2VzLlxyXG4gICAqL1xyXG4gIFZpc2lvbjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlZpc2lvblwiLFxyXG4gICAgY29kZTogXCJ2aXNpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NsYWltLXR5cGVcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBpbmNsdWRlcyBDbGFpbSBUeXBlIGNvZGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2xhaW1UeXBlQ29kaW5nVHlwZSA9IHR5cGVvZiBDbGFpbVR5cGVDb2RpbmdzO1xyXG4iXX0=