// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ParticipationMode|2018-08-12
import { Coding } from '../fhir/Coding.js';
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export const V3ParticipationModeCodings = {
    /**
     * DICTATE: Participation by pre-recorded voice.  Communication is limited to one direction (from the recorder to recipient).
     */
    Dictated: new Coding({
        display: "dictated",
        code: "DICTATE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * ELECTRONIC: Participation by non-human-languaged based electronic signal
     */
    ElectronicData: new Coding({
        display: "electronic data",
        code: "ELECTRONIC",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * EMAILWRIT: Participation by text or diagrams transmitted over an electronic mail system.
     */
    Email: new Coding({
        display: "email",
        code: "EMAILWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * FACE: Participation by voice communication where parties speak to each other directly.
     */
    FaceToFace: new Coding({
        display: "face-to-face",
        code: "FACE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * FAXWRIT: Participation by text or diagrams printed on paper that have been transmitted over a fax device
     */
    Telefax: new Coding({
        display: "telefax",
        code: "FAXWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * HANDWRIT: Participation by text or diagrams printed on paper or other recording medium
     */
    Handwritten: new Coding({
        display: "handwritten",
        code: "HANDWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * MAILWRIT: Participation by text or diagrams printed on paper transmitted physically (e.g. by courier service, postal service).
     */
    Mail: new Coding({
        display: "mail",
        code: "MAILWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * ONLINEWRIT: Participation by text or diagrams submitted by computer network, e.g. online survey.
     */
    OnlineWritten: new Coding({
        display: "online written",
        code: "ONLINEWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * PHONE: Participation by voice communication where the voices of the communicating parties are transported over an electronic medium
     */
    Telephone: new Coding({
        display: "telephone",
        code: "PHONE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * PHYSICAL: Participation by direct action where subject and actor are in the same location. (The participation involves more than communication.)
     */
    PhysicalPresence: new Coding({
        display: "physical presence",
        code: "PHYSICAL",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * REMOTE: Participation by direct action where subject and actor are in separate locations, and the actions of the actor are transmitted by electronic or mechanical means. (The participation involves more than communication.)
     */
    RemotePresence: new Coding({
        display: "remote presence",
        code: "REMOTE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * TYPEWRIT: Participation by text or diagrams printed on paper or other recording medium where the recording was performed using a typewriter, typesetter, computer or similar mechanism.
     */
    Typewritten: new Coding({
        display: "typewritten",
        code: "TYPEWRIT",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * VERBAL: Participation by voice communication
     */
    Verbal: new Coding({
        display: "verbal",
        code: "VERBAL",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * VIDEOCONF: Participation by voice and visual communication where the voices and images of the communicating parties are transported over an electronic medium
     */
    Videoconferencing: new Coding({
        display: "videoconferencing",
        code: "VIDEOCONF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
    /**
     * WRITTEN: Participation by human language recorded on a physical material
     */
    Written: new Coding({
        display: "written",
        code: "WRITTEN",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNQYXJ0aWNpcGF0aW9uTW9kZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1YzUGFydGljaXBhdGlvbk1vZGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHFGQUFxRjtBQUVyRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRztJQUN4Qzs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNuQixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLDREQUE0RDtLQUNyRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDREQUE0RDtLQUNyRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxVQUFVLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDckIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsNERBQTREO0tBQ3JFLENBQUM7SUFDRjs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsV0FBVyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFLENBQUM7SUFDRjs7T0FFRztJQUNILGFBQWEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN4QixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLDREQUE0RDtLQUNyRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMzQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsNERBQTREO0tBQ3JFLENBQUM7SUFDRjs7T0FFRztJQUNILFdBQVcsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN0QixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFLENBQUM7SUFDRjs7T0FFRztJQUNILE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDNUIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFLENBQUM7SUFDRjs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL1ZhbHVlU2V0L3YzLVBhcnRpY2lwYXRpb25Nb2RlfDIwMTgtMDgtMTJcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqICBBIHNldCBvZiBjb2RlcyBzcGVjaWZ5aW5nIHRoZSBtb2RhbGl0eSBieSB3aGljaCB0aGUgRW50aXR5IHBsYXlpbmcgdGhlIFJvbGUgaXMgcGFydGljaXBhdGluZyBpbiB0aGUgQWN0LiAgRXhhbXBsZXM6XHJcbiAqIFBoeXNpY2FsbHkgcHJlc2VudCwgb3ZlciB0aGUgdGVsZXBob25lLCB3cml0dGVuIGNvbW11bmljYXRpb24uICBSYXRpb25hbGU6XHJcbiAqIFBhcnRpY3VsYXJseSBmb3IgYXV0aG9yIChvcmlnaW5hdG9yKSBwYXJ0aWNpcGFudHMgdGhpcyBpcyB1c2VkIHRvIHNwZWNpZnkgd2hldGhlciB0aGUgaW5mb3JtYXRpb24gcmVwcmVzZW50ZWQgYnkgdGhlIGFjdCB3YXMgaW5pdGlhbGx5IHByb3ZpZGVkIHZlcmJhbGx5LCAoaGFuZC0pd3JpdHRlbiwgb3IgZWxlY3Ryb25pY2FsbHkuICBPcGVuIElzc3VlOlxyXG4gKiBUaGVyZSBuZWVkcyB0byBiZSBhIHJlZXhhbWluYXRpb24gb2YgdGhlIGhpZXJhcmNoaWVzIGFzIHRoZXJlIHNlZW1zIHRvIGJlIHNvbWUgbXVkZGxpbmcgYmV0d2VlbiBFTEVDVFJPTklDIGFuZCBvdGhlciBjb25jZXB0cyB0aGF0IGludm9sdmUgZWxlY3Ryb25pYyBjb21tdW5pY2F0aW9uIHRoYXQgYXJlIGluIG90aGVyIGhpZXJhcmNoaWVzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFYzUGFydGljaXBhdGlvbk1vZGVDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIERJQ1RBVEU6IFBhcnRpY2lwYXRpb24gYnkgcHJlLXJlY29yZGVkIHZvaWNlLiAgQ29tbXVuaWNhdGlvbiBpcyBsaW1pdGVkIHRvIG9uZSBkaXJlY3Rpb24gKGZyb20gdGhlIHJlY29yZGVyIHRvIHJlY2lwaWVudCkuXHJcbiAgICovXHJcbiAgRGljdGF0ZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJkaWN0YXRlZFwiLFxyXG4gICAgY29kZTogXCJESUNUQVRFXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uTW9kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIEVMRUNUUk9OSUM6IFBhcnRpY2lwYXRpb24gYnkgbm9uLWh1bWFuLWxhbmd1YWdlZCBiYXNlZCBlbGVjdHJvbmljIHNpZ25hbFxyXG4gICAqL1xyXG4gIEVsZWN0cm9uaWNEYXRhOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiZWxlY3Ryb25pYyBkYXRhXCIsXHJcbiAgICBjb2RlOiBcIkVMRUNUUk9OSUNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogRU1BSUxXUklUOiBQYXJ0aWNpcGF0aW9uIGJ5IHRleHQgb3IgZGlhZ3JhbXMgdHJhbnNtaXR0ZWQgb3ZlciBhbiBlbGVjdHJvbmljIG1haWwgc3lzdGVtLlxyXG4gICAqL1xyXG4gIEVtYWlsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiZW1haWxcIixcclxuICAgIGNvZGU6IFwiRU1BSUxXUklUXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uTW9kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIEZBQ0U6IFBhcnRpY2lwYXRpb24gYnkgdm9pY2UgY29tbXVuaWNhdGlvbiB3aGVyZSBwYXJ0aWVzIHNwZWFrIHRvIGVhY2ggb3RoZXIgZGlyZWN0bHkuXHJcbiAgICovXHJcbiAgRmFjZVRvRmFjZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcImZhY2UtdG8tZmFjZVwiLFxyXG4gICAgY29kZTogXCJGQUNFXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uTW9kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIEZBWFdSSVQ6IFBhcnRpY2lwYXRpb24gYnkgdGV4dCBvciBkaWFncmFtcyBwcmludGVkIG9uIHBhcGVyIHRoYXQgaGF2ZSBiZWVuIHRyYW5zbWl0dGVkIG92ZXIgYSBmYXggZGV2aWNlXHJcbiAgICovXHJcbiAgVGVsZWZheDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInRlbGVmYXhcIixcclxuICAgIGNvZGU6IFwiRkFYV1JJVFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvbk1vZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBIQU5EV1JJVDogUGFydGljaXBhdGlvbiBieSB0ZXh0IG9yIGRpYWdyYW1zIHByaW50ZWQgb24gcGFwZXIgb3Igb3RoZXIgcmVjb3JkaW5nIG1lZGl1bVxyXG4gICAqL1xyXG4gIEhhbmR3cml0dGVuOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiaGFuZHdyaXR0ZW5cIixcclxuICAgIGNvZGU6IFwiSEFORFdSSVRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogTUFJTFdSSVQ6IFBhcnRpY2lwYXRpb24gYnkgdGV4dCBvciBkaWFncmFtcyBwcmludGVkIG9uIHBhcGVyIHRyYW5zbWl0dGVkIHBoeXNpY2FsbHkgKGUuZy4gYnkgY291cmllciBzZXJ2aWNlLCBwb3N0YWwgc2VydmljZSkuXHJcbiAgICovXHJcbiAgTWFpbDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIm1haWxcIixcclxuICAgIGNvZGU6IFwiTUFJTFdSSVRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogT05MSU5FV1JJVDogUGFydGljaXBhdGlvbiBieSB0ZXh0IG9yIGRpYWdyYW1zIHN1Ym1pdHRlZCBieSBjb21wdXRlciBuZXR3b3JrLCBlLmcuIG9ubGluZSBzdXJ2ZXkuXHJcbiAgICovXHJcbiAgT25saW5lV3JpdHRlbjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIm9ubGluZSB3cml0dGVuXCIsXHJcbiAgICBjb2RlOiBcIk9OTElORVdSSVRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogUEhPTkU6IFBhcnRpY2lwYXRpb24gYnkgdm9pY2UgY29tbXVuaWNhdGlvbiB3aGVyZSB0aGUgdm9pY2VzIG9mIHRoZSBjb21tdW5pY2F0aW5nIHBhcnRpZXMgYXJlIHRyYW5zcG9ydGVkIG92ZXIgYW4gZWxlY3Ryb25pYyBtZWRpdW1cclxuICAgKi9cclxuICBUZWxlcGhvbmU6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJ0ZWxlcGhvbmVcIixcclxuICAgIGNvZGU6IFwiUEhPTkVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogUEhZU0lDQUw6IFBhcnRpY2lwYXRpb24gYnkgZGlyZWN0IGFjdGlvbiB3aGVyZSBzdWJqZWN0IGFuZCBhY3RvciBhcmUgaW4gdGhlIHNhbWUgbG9jYXRpb24uIChUaGUgcGFydGljaXBhdGlvbiBpbnZvbHZlcyBtb3JlIHRoYW4gY29tbXVuaWNhdGlvbi4pXHJcbiAgICovXHJcbiAgUGh5c2ljYWxQcmVzZW5jZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInBoeXNpY2FsIHByZXNlbmNlXCIsXHJcbiAgICBjb2RlOiBcIlBIWVNJQ0FMXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uTW9kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIFJFTU9URTogUGFydGljaXBhdGlvbiBieSBkaXJlY3QgYWN0aW9uIHdoZXJlIHN1YmplY3QgYW5kIGFjdG9yIGFyZSBpbiBzZXBhcmF0ZSBsb2NhdGlvbnMsIGFuZCB0aGUgYWN0aW9ucyBvZiB0aGUgYWN0b3IgYXJlIHRyYW5zbWl0dGVkIGJ5IGVsZWN0cm9uaWMgb3IgbWVjaGFuaWNhbCBtZWFucy4gKFRoZSBwYXJ0aWNpcGF0aW9uIGludm9sdmVzIG1vcmUgdGhhbiBjb21tdW5pY2F0aW9uLilcclxuICAgKi9cclxuICBSZW1vdGVQcmVzZW5jZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInJlbW90ZSBwcmVzZW5jZVwiLFxyXG4gICAgY29kZTogXCJSRU1PVEVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogVFlQRVdSSVQ6IFBhcnRpY2lwYXRpb24gYnkgdGV4dCBvciBkaWFncmFtcyBwcmludGVkIG9uIHBhcGVyIG9yIG90aGVyIHJlY29yZGluZyBtZWRpdW0gd2hlcmUgdGhlIHJlY29yZGluZyB3YXMgcGVyZm9ybWVkIHVzaW5nIGEgdHlwZXdyaXRlciwgdHlwZXNldHRlciwgY29tcHV0ZXIgb3Igc2ltaWxhciBtZWNoYW5pc20uXHJcbiAgICovXHJcbiAgVHlwZXdyaXR0ZW46IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJ0eXBld3JpdHRlblwiLFxyXG4gICAgY29kZTogXCJUWVBFV1JJVFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvbk1vZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBWRVJCQUw6IFBhcnRpY2lwYXRpb24gYnkgdm9pY2UgY29tbXVuaWNhdGlvblxyXG4gICAqL1xyXG4gIFZlcmJhbDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInZlcmJhbFwiLFxyXG4gICAgY29kZTogXCJWRVJCQUxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogVklERU9DT05GOiBQYXJ0aWNpcGF0aW9uIGJ5IHZvaWNlIGFuZCB2aXN1YWwgY29tbXVuaWNhdGlvbiB3aGVyZSB0aGUgdm9pY2VzIGFuZCBpbWFnZXMgb2YgdGhlIGNvbW11bmljYXRpbmcgcGFydGllcyBhcmUgdHJhbnNwb3J0ZWQgb3ZlciBhbiBlbGVjdHJvbmljIG1lZGl1bVxyXG4gICAqL1xyXG4gIFZpZGVvY29uZmVyZW5jaW5nOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwidmlkZW9jb25mZXJlbmNpbmdcIixcclxuICAgIGNvZGU6IFwiVklERU9DT05GXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uTW9kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIFdSSVRURU46IFBhcnRpY2lwYXRpb24gYnkgaHVtYW4gbGFuZ3VhZ2UgcmVjb3JkZWQgb24gYSBwaHlzaWNhbCBtYXRlcmlhbFxyXG4gICAqL1xyXG4gIFdyaXR0ZW46IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJ3cml0dGVuXCIsXHJcbiAgICBjb2RlOiBcIldSSVRURU5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25Nb2RlXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogIEEgc2V0IG9mIGNvZGVzIHNwZWNpZnlpbmcgdGhlIG1vZGFsaXR5IGJ5IHdoaWNoIHRoZSBFbnRpdHkgcGxheWluZyB0aGUgUm9sZSBpcyBwYXJ0aWNpcGF0aW5nIGluIHRoZSBBY3QuICBFeGFtcGxlczpcclxuICogUGh5c2ljYWxseSBwcmVzZW50LCBvdmVyIHRoZSB0ZWxlcGhvbmUsIHdyaXR0ZW4gY29tbXVuaWNhdGlvbi4gIFJhdGlvbmFsZTpcclxuICogUGFydGljdWxhcmx5IGZvciBhdXRob3IgKG9yaWdpbmF0b3IpIHBhcnRpY2lwYW50cyB0aGlzIGlzIHVzZWQgdG8gc3BlY2lmeSB3aGV0aGVyIHRoZSBpbmZvcm1hdGlvbiByZXByZXNlbnRlZCBieSB0aGUgYWN0IHdhcyBpbml0aWFsbHkgcHJvdmlkZWQgdmVyYmFsbHksIChoYW5kLSl3cml0dGVuLCBvciBlbGVjdHJvbmljYWxseS4gIE9wZW4gSXNzdWU6XHJcbiAqIFRoZXJlIG5lZWRzIHRvIGJlIGEgcmVleGFtaW5hdGlvbiBvZiB0aGUgaGllcmFyY2hpZXMgYXMgdGhlcmUgc2VlbXMgdG8gYmUgc29tZSBtdWRkbGluZyBiZXR3ZWVuIEVMRUNUUk9OSUMgYW5kIG90aGVyIGNvbmNlcHRzIHRoYXQgaW52b2x2ZSBlbGVjdHJvbmljIGNvbW11bmljYXRpb24gdGhhdCBhcmUgaW4gb3RoZXIgaGllcmFyY2hpZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWM1BhcnRpY2lwYXRpb25Nb2RlQ29kaW5nVHlwZSA9IHR5cGVvZiBWM1BhcnRpY2lwYXRpb25Nb2RlQ29kaW5ncztcclxuIl19