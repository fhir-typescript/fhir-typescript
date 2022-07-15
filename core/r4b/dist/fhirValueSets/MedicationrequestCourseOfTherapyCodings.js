// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-course-of-therapy|4.3.0
/**
 * MedicationRequest Course of Therapy Codes
 */
export const MedicationrequestCourseOfTherapyCodings = {
    /**
     * acute: A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
     */
    ShortCourseAcuteTherapy: {
        display: "Short course (acute) therapy",
        code: "acute",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
    },
    /**
     * continuous: A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    ContinuousLongTermTherapy: {
        display: "Continuous long term therapy",
        code: "continuous",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
    },
    /**
     * seasonal: A medication which is expected to be used on a part time basis at certain times of the year
     */
    Seasonal: {
        display: "Seasonal",
        code: "seasonal",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbnJlcXVlc3RDb3Vyc2VPZlRoZXJhcHlDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9NZWRpY2F0aW9ucmVxdWVzdENvdXJzZU9mVGhlcmFweUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsd0ZBQXdGO0FBc0J4Rjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVDQUF1QyxHQUE4QztJQUNoRzs7T0FFRztJQUNILHVCQUF1QixFQUFFO1FBQ3ZCLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMkVBQTJFO0tBQ3BGO0lBQ0Q7O09BRUc7SUFDSCx5QkFBeUIsRUFBRTtRQUN6QixPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSwyRUFBMkU7S0FDcEY7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSwyRUFBMkU7S0FDcEY7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWRpY2F0aW9ucmVxdWVzdC1jb3Vyc2Utb2YtdGhlcmFweXw0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25SZXF1ZXN0IENvdXJzZSBvZiBUaGVyYXB5IENvZGVzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZWRpY2F0aW9ucmVxdWVzdENvdXJzZU9mVGhlcmFweUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN1dGU6IEEgbWVkaWNhdGlvbiB3aGljaCB0aGUgcGF0aWVudCBpcyBvbmx5IGV4cGVjdGVkIHRvIGNvbnN1bWUgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgY3VycmVudCBvcmRlciBhbmQgd2hpY2ggaXMgbm90IGV4cGVjdGVkIHRvIGJlIHJlbmV3ZWQuXHJcbiAgICovXHJcbiAgU2hvcnRDb3Vyc2VBY3V0ZVRoZXJhcHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29udGludW91czogQSBtZWRpY2F0aW9uIHdoaWNoIGlzIGV4cGVjdGVkIHRvIGJlIGNvbnRpbnVlZCBiZXlvbmQgdGhlIHByZXNlbnQgb3JkZXIgYW5kIHdoaWNoIHRoZSBwYXRpZW50IHNob3VsZCBiZSBhc3N1bWVkIHRvIGJlIHRha2luZyB1bmxlc3MgZXhwbGljaXRseSBzdG9wcGVkLlxyXG4gICAqL1xyXG4gIENvbnRpbnVvdXNMb25nVGVybVRoZXJhcHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc2Vhc29uYWw6IEEgbWVkaWNhdGlvbiB3aGljaCBpcyBleHBlY3RlZCB0byBiZSB1c2VkIG9uIGEgcGFydCB0aW1lIGJhc2lzIGF0IGNlcnRhaW4gdGltZXMgb2YgdGhlIHllYXJcclxuICAgKi9cclxuICBTZWFzb25hbDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25SZXF1ZXN0IENvdXJzZSBvZiBUaGVyYXB5IENvZGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVkaWNhdGlvbnJlcXVlc3RDb3Vyc2VPZlRoZXJhcHlDb2RpbmdzOk1lZGljYXRpb25yZXF1ZXN0Q291cnNlT2ZUaGVyYXB5Q29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhY3V0ZTogQSBtZWRpY2F0aW9uIHdoaWNoIHRoZSBwYXRpZW50IGlzIG9ubHkgZXhwZWN0ZWQgdG8gY29uc3VtZSBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50IG9yZGVyIGFuZCB3aGljaCBpcyBub3QgZXhwZWN0ZWQgdG8gYmUgcmVuZXdlZC5cclxuICAgKi9cclxuICBTaG9ydENvdXJzZUFjdXRlVGhlcmFweToge1xyXG4gICAgZGlzcGxheTogXCJTaG9ydCBjb3Vyc2UgKGFjdXRlKSB0aGVyYXB5XCIsXHJcbiAgICBjb2RlOiBcImFjdXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWRpY2F0aW9ucmVxdWVzdC1jb3Vyc2Utb2YtdGhlcmFweVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29udGludW91czogQSBtZWRpY2F0aW9uIHdoaWNoIGlzIGV4cGVjdGVkIHRvIGJlIGNvbnRpbnVlZCBiZXlvbmQgdGhlIHByZXNlbnQgb3JkZXIgYW5kIHdoaWNoIHRoZSBwYXRpZW50IHNob3VsZCBiZSBhc3N1bWVkIHRvIGJlIHRha2luZyB1bmxlc3MgZXhwbGljaXRseSBzdG9wcGVkLlxyXG4gICAqL1xyXG4gIENvbnRpbnVvdXNMb25nVGVybVRoZXJhcHk6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29udGludW91cyBsb25nIHRlcm0gdGhlcmFweVwiLFxyXG4gICAgY29kZTogXCJjb250aW51b3VzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWRpY2F0aW9ucmVxdWVzdC1jb3Vyc2Utb2YtdGhlcmFweVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2Vhc29uYWw6IEEgbWVkaWNhdGlvbiB3aGljaCBpcyBleHBlY3RlZCB0byBiZSB1c2VkIG9uIGEgcGFydCB0aW1lIGJhc2lzIGF0IGNlcnRhaW4gdGltZXMgb2YgdGhlIHllYXJcclxuICAgKi9cclxuICBTZWFzb25hbDoge1xyXG4gICAgZGlzcGxheTogXCJTZWFzb25hbFwiLFxyXG4gICAgY29kZTogXCJzZWFzb25hbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbnJlcXVlc3QtY291cnNlLW9mLXRoZXJhcHlcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=