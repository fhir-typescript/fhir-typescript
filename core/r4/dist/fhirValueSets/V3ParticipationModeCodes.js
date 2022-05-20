// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ParticipationMode|2018-08-12
/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export const V3ParticipationModeCodes = {
    /**
     * DICTATE: Participation by pre-recorded voice.  Communication is limited to one direction (from the recorder to recipient).
     */
    Dictated: "DICTATE",
    /**
     * ELECTRONIC: Participation by non-human-languaged based electronic signal
     */
    ElectronicData: "ELECTRONIC",
    /**
     * EMAILWRIT: Participation by text or diagrams transmitted over an electronic mail system.
     */
    Email: "EMAILWRIT",
    /**
     * FACE: Participation by voice communication where parties speak to each other directly.
     */
    FaceToFace: "FACE",
    /**
     * FAXWRIT: Participation by text or diagrams printed on paper that have been transmitted over a fax device
     */
    Telefax: "FAXWRIT",
    /**
     * HANDWRIT: Participation by text or diagrams printed on paper or other recording medium
     */
    Handwritten: "HANDWRIT",
    /**
     * MAILWRIT: Participation by text or diagrams printed on paper transmitted physically (e.g. by courier service, postal service).
     */
    Mail: "MAILWRIT",
    /**
     * ONLINEWRIT: Participation by text or diagrams submitted by computer network, e.g. online survey.
     */
    OnlineWritten: "ONLINEWRIT",
    /**
     * PHONE: Participation by voice communication where the voices of the communicating parties are transported over an electronic medium
     */
    Telephone: "PHONE",
    /**
     * PHYSICAL: Participation by direct action where subject and actor are in the same location. (The participation involves more than communication.)
     */
    PhysicalPresence: "PHYSICAL",
    /**
     * REMOTE: Participation by direct action where subject and actor are in separate locations, and the actions of the actor are transmitted by electronic or mechanical means. (The participation involves more than communication.)
     */
    RemotePresence: "REMOTE",
    /**
     * TYPEWRIT: Participation by text or diagrams printed on paper or other recording medium where the recording was performed using a typewriter, typesetter, computer or similar mechanism.
     */
    Typewritten: "TYPEWRIT",
    /**
     * VERBAL: Participation by voice communication
     */
    Verbal: "VERBAL",
    /**
     * VIDEOCONF: Participation by voice and visual communication where the voices and images of the communicating parties are transported over an electronic medium
     */
    Videoconferencing: "VIDEOCONF",
    /**
     * WRITTEN: Participation by human language recorded on a physical material
     */
    Written: "WRITTEN",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNQYXJ0aWNpcGF0aW9uTW9kZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9WM1BhcnRpY2lwYXRpb25Nb2RlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMscUZBQXFGO0FBRXJGOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsU0FBUztJQUNuQjs7T0FFRztJQUNILGNBQWMsRUFBRSxZQUFZO0lBQzVCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLFdBQVc7SUFDbEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsTUFBTTtJQUNsQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLFVBQVU7SUFDdkI7O09BRUc7SUFDSCxJQUFJLEVBQUUsVUFBVTtJQUNoQjs7T0FFRztJQUNILGFBQWEsRUFBRSxZQUFZO0lBQzNCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLE9BQU87SUFDbEI7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxVQUFVO0lBQzVCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLFFBQVE7SUFDeEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsVUFBVTtJQUN2Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsV0FBVztJQUM5Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvVmFsdWVTZXQvdjMtUGFydGljaXBhdGlvbk1vZGV8MjAxOC0wOC0xMlxyXG5cclxuLyoqXHJcbiAqICBBIHNldCBvZiBjb2RlcyBzcGVjaWZ5aW5nIHRoZSBtb2RhbGl0eSBieSB3aGljaCB0aGUgRW50aXR5IHBsYXlpbmcgdGhlIFJvbGUgaXMgcGFydGljaXBhdGluZyBpbiB0aGUgQWN0LiAgRXhhbXBsZXM6XHJcbiAqIFBoeXNpY2FsbHkgcHJlc2VudCwgb3ZlciB0aGUgdGVsZXBob25lLCB3cml0dGVuIGNvbW11bmljYXRpb24uICBSYXRpb25hbGU6XHJcbiAqIFBhcnRpY3VsYXJseSBmb3IgYXV0aG9yIChvcmlnaW5hdG9yKSBwYXJ0aWNpcGFudHMgdGhpcyBpcyB1c2VkIHRvIHNwZWNpZnkgd2hldGhlciB0aGUgaW5mb3JtYXRpb24gcmVwcmVzZW50ZWQgYnkgdGhlIGFjdCB3YXMgaW5pdGlhbGx5IHByb3ZpZGVkIHZlcmJhbGx5LCAoaGFuZC0pd3JpdHRlbiwgb3IgZWxlY3Ryb25pY2FsbHkuICBPcGVuIElzc3VlOlxyXG4gKiBUaGVyZSBuZWVkcyB0byBiZSBhIHJlZXhhbWluYXRpb24gb2YgdGhlIGhpZXJhcmNoaWVzIGFzIHRoZXJlIHNlZW1zIHRvIGJlIHNvbWUgbXVkZGxpbmcgYmV0d2VlbiBFTEVDVFJPTklDIGFuZCBvdGhlciBjb25jZXB0cyB0aGF0IGludm9sdmUgZWxlY3Ryb25pYyBjb21tdW5pY2F0aW9uIHRoYXQgYXJlIGluIG90aGVyIGhpZXJhcmNoaWVzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFYzUGFydGljaXBhdGlvbk1vZGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBESUNUQVRFOiBQYXJ0aWNpcGF0aW9uIGJ5IHByZS1yZWNvcmRlZCB2b2ljZS4gIENvbW11bmljYXRpb24gaXMgbGltaXRlZCB0byBvbmUgZGlyZWN0aW9uIChmcm9tIHRoZSByZWNvcmRlciB0byByZWNpcGllbnQpLlxyXG4gICAqL1xyXG4gIERpY3RhdGVkOiBcIkRJQ1RBVEVcIixcclxuICAvKipcclxuICAgKiBFTEVDVFJPTklDOiBQYXJ0aWNpcGF0aW9uIGJ5IG5vbi1odW1hbi1sYW5ndWFnZWQgYmFzZWQgZWxlY3Ryb25pYyBzaWduYWxcclxuICAgKi9cclxuICBFbGVjdHJvbmljRGF0YTogXCJFTEVDVFJPTklDXCIsXHJcbiAgLyoqXHJcbiAgICogRU1BSUxXUklUOiBQYXJ0aWNpcGF0aW9uIGJ5IHRleHQgb3IgZGlhZ3JhbXMgdHJhbnNtaXR0ZWQgb3ZlciBhbiBlbGVjdHJvbmljIG1haWwgc3lzdGVtLlxyXG4gICAqL1xyXG4gIEVtYWlsOiBcIkVNQUlMV1JJVFwiLFxyXG4gIC8qKlxyXG4gICAqIEZBQ0U6IFBhcnRpY2lwYXRpb24gYnkgdm9pY2UgY29tbXVuaWNhdGlvbiB3aGVyZSBwYXJ0aWVzIHNwZWFrIHRvIGVhY2ggb3RoZXIgZGlyZWN0bHkuXHJcbiAgICovXHJcbiAgRmFjZVRvRmFjZTogXCJGQUNFXCIsXHJcbiAgLyoqXHJcbiAgICogRkFYV1JJVDogUGFydGljaXBhdGlvbiBieSB0ZXh0IG9yIGRpYWdyYW1zIHByaW50ZWQgb24gcGFwZXIgdGhhdCBoYXZlIGJlZW4gdHJhbnNtaXR0ZWQgb3ZlciBhIGZheCBkZXZpY2VcclxuICAgKi9cclxuICBUZWxlZmF4OiBcIkZBWFdSSVRcIixcclxuICAvKipcclxuICAgKiBIQU5EV1JJVDogUGFydGljaXBhdGlvbiBieSB0ZXh0IG9yIGRpYWdyYW1zIHByaW50ZWQgb24gcGFwZXIgb3Igb3RoZXIgcmVjb3JkaW5nIG1lZGl1bVxyXG4gICAqL1xyXG4gIEhhbmR3cml0dGVuOiBcIkhBTkRXUklUXCIsXHJcbiAgLyoqXHJcbiAgICogTUFJTFdSSVQ6IFBhcnRpY2lwYXRpb24gYnkgdGV4dCBvciBkaWFncmFtcyBwcmludGVkIG9uIHBhcGVyIHRyYW5zbWl0dGVkIHBoeXNpY2FsbHkgKGUuZy4gYnkgY291cmllciBzZXJ2aWNlLCBwb3N0YWwgc2VydmljZSkuXHJcbiAgICovXHJcbiAgTWFpbDogXCJNQUlMV1JJVFwiLFxyXG4gIC8qKlxyXG4gICAqIE9OTElORVdSSVQ6IFBhcnRpY2lwYXRpb24gYnkgdGV4dCBvciBkaWFncmFtcyBzdWJtaXR0ZWQgYnkgY29tcHV0ZXIgbmV0d29yaywgZS5nLiBvbmxpbmUgc3VydmV5LlxyXG4gICAqL1xyXG4gIE9ubGluZVdyaXR0ZW46IFwiT05MSU5FV1JJVFwiLFxyXG4gIC8qKlxyXG4gICAqIFBIT05FOiBQYXJ0aWNpcGF0aW9uIGJ5IHZvaWNlIGNvbW11bmljYXRpb24gd2hlcmUgdGhlIHZvaWNlcyBvZiB0aGUgY29tbXVuaWNhdGluZyBwYXJ0aWVzIGFyZSB0cmFuc3BvcnRlZCBvdmVyIGFuIGVsZWN0cm9uaWMgbWVkaXVtXHJcbiAgICovXHJcbiAgVGVsZXBob25lOiBcIlBIT05FXCIsXHJcbiAgLyoqXHJcbiAgICogUEhZU0lDQUw6IFBhcnRpY2lwYXRpb24gYnkgZGlyZWN0IGFjdGlvbiB3aGVyZSBzdWJqZWN0IGFuZCBhY3RvciBhcmUgaW4gdGhlIHNhbWUgbG9jYXRpb24uIChUaGUgcGFydGljaXBhdGlvbiBpbnZvbHZlcyBtb3JlIHRoYW4gY29tbXVuaWNhdGlvbi4pXHJcbiAgICovXHJcbiAgUGh5c2ljYWxQcmVzZW5jZTogXCJQSFlTSUNBTFwiLFxyXG4gIC8qKlxyXG4gICAqIFJFTU9URTogUGFydGljaXBhdGlvbiBieSBkaXJlY3QgYWN0aW9uIHdoZXJlIHN1YmplY3QgYW5kIGFjdG9yIGFyZSBpbiBzZXBhcmF0ZSBsb2NhdGlvbnMsIGFuZCB0aGUgYWN0aW9ucyBvZiB0aGUgYWN0b3IgYXJlIHRyYW5zbWl0dGVkIGJ5IGVsZWN0cm9uaWMgb3IgbWVjaGFuaWNhbCBtZWFucy4gKFRoZSBwYXJ0aWNpcGF0aW9uIGludm9sdmVzIG1vcmUgdGhhbiBjb21tdW5pY2F0aW9uLilcclxuICAgKi9cclxuICBSZW1vdGVQcmVzZW5jZTogXCJSRU1PVEVcIixcclxuICAvKipcclxuICAgKiBUWVBFV1JJVDogUGFydGljaXBhdGlvbiBieSB0ZXh0IG9yIGRpYWdyYW1zIHByaW50ZWQgb24gcGFwZXIgb3Igb3RoZXIgcmVjb3JkaW5nIG1lZGl1bSB3aGVyZSB0aGUgcmVjb3JkaW5nIHdhcyBwZXJmb3JtZWQgdXNpbmcgYSB0eXBld3JpdGVyLCB0eXBlc2V0dGVyLCBjb21wdXRlciBvciBzaW1pbGFyIG1lY2hhbmlzbS5cclxuICAgKi9cclxuICBUeXBld3JpdHRlbjogXCJUWVBFV1JJVFwiLFxyXG4gIC8qKlxyXG4gICAqIFZFUkJBTDogUGFydGljaXBhdGlvbiBieSB2b2ljZSBjb21tdW5pY2F0aW9uXHJcbiAgICovXHJcbiAgVmVyYmFsOiBcIlZFUkJBTFwiLFxyXG4gIC8qKlxyXG4gICAqIFZJREVPQ09ORjogUGFydGljaXBhdGlvbiBieSB2b2ljZSBhbmQgdmlzdWFsIGNvbW11bmljYXRpb24gd2hlcmUgdGhlIHZvaWNlcyBhbmQgaW1hZ2VzIG9mIHRoZSBjb21tdW5pY2F0aW5nIHBhcnRpZXMgYXJlIHRyYW5zcG9ydGVkIG92ZXIgYW4gZWxlY3Ryb25pYyBtZWRpdW1cclxuICAgKi9cclxuICBWaWRlb2NvbmZlcmVuY2luZzogXCJWSURFT0NPTkZcIixcclxuICAvKipcclxuICAgKiBXUklUVEVOOiBQYXJ0aWNpcGF0aW9uIGJ5IGh1bWFuIGxhbmd1YWdlIHJlY29yZGVkIG9uIGEgcGh5c2ljYWwgbWF0ZXJpYWxcclxuICAgKi9cclxuICBXcml0dGVuOiBcIldSSVRURU5cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiAgQSBzZXQgb2YgY29kZXMgc3BlY2lmeWluZyB0aGUgbW9kYWxpdHkgYnkgd2hpY2ggdGhlIEVudGl0eSBwbGF5aW5nIHRoZSBSb2xlIGlzIHBhcnRpY2lwYXRpbmcgaW4gdGhlIEFjdC4gIEV4YW1wbGVzOlxyXG4gKiBQaHlzaWNhbGx5IHByZXNlbnQsIG92ZXIgdGhlIHRlbGVwaG9uZSwgd3JpdHRlbiBjb21tdW5pY2F0aW9uLiAgUmF0aW9uYWxlOlxyXG4gKiBQYXJ0aWN1bGFybHkgZm9yIGF1dGhvciAob3JpZ2luYXRvcikgcGFydGljaXBhbnRzIHRoaXMgaXMgdXNlZCB0byBzcGVjaWZ5IHdoZXRoZXIgdGhlIGluZm9ybWF0aW9uIHJlcHJlc2VudGVkIGJ5IHRoZSBhY3Qgd2FzIGluaXRpYWxseSBwcm92aWRlZCB2ZXJiYWxseSwgKGhhbmQtKXdyaXR0ZW4sIG9yIGVsZWN0cm9uaWNhbGx5LiAgT3BlbiBJc3N1ZTpcclxuICogVGhlcmUgbmVlZHMgdG8gYmUgYSByZWV4YW1pbmF0aW9uIG9mIHRoZSBoaWVyYXJjaGllcyBhcyB0aGVyZSBzZWVtcyB0byBiZSBzb21lIG11ZGRsaW5nIGJldHdlZW4gRUxFQ1RST05JQyBhbmQgb3RoZXIgY29uY2VwdHMgdGhhdCBpbnZvbHZlIGVsZWN0cm9uaWMgY29tbXVuaWNhdGlvbiB0aGF0IGFyZSBpbiBvdGhlciBoaWVyYXJjaGllcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFYzUGFydGljaXBhdGlvbk1vZGVDb2RlVHlwZSA9IHR5cGVvZiBWM1BhcnRpY2lwYXRpb25Nb2RlQ29kZXNba2V5b2YgdHlwZW9mIFYzUGFydGljaXBhdGlvbk1vZGVDb2Rlc107XHJcbiJdfQ==