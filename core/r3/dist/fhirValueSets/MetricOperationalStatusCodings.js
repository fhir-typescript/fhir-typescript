// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-operational-status|3.0.2
/**
 * Describes the operational status of the DeviceMetric.
 */
export const MetricOperationalStatusCodings = {
    /**
     * entered-in-error: The DeviceMetric was entered in error.
     */
    EnteredInError: {
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/metric-operational-status",
    },
    /**
     * off: The DeviceMetric is not operating.
     */
    Off: {
        display: "Off",
        code: "off",
        system: "http://hl7.org/fhir/metric-operational-status",
    },
    /**
     * on: The DeviceMetric is operating and will generate DeviceObservations.
     */
    On: {
        display: "On",
        code: "on",
        system: "http://hl7.org/fhir/metric-operational-status",
    },
    /**
     * standby: The DeviceMetric is operating, but will not generate any DeviceObservations.
     */
    Standby: {
        display: "Standby",
        code: "standby",
        system: "http://hl7.org/fhir/metric-operational-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0cmljT3BlcmF0aW9uYWxTdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9NZXRyaWNPcGVyYXRpb25hbFN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBMEI5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsK0NBQStDO0tBQ3hEO0lBQ0Q7O09BRUc7SUFDSCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsRUFBRSxFQUFFO1FBQ0YsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWV0cmljLW9wZXJhdGlvbmFsLXN0YXR1c3wzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgb3BlcmF0aW9uYWwgc3RhdHVzIG9mIHRoZSBEZXZpY2VNZXRyaWMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZXRyaWNPcGVyYXRpb25hbFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIERldmljZU1ldHJpYyB3YXMgZW50ZXJlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvZmY6IFRoZSBEZXZpY2VNZXRyaWMgaXMgbm90IG9wZXJhdGluZy5cclxuICAgKi9cclxuICBPZmY6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb246IFRoZSBEZXZpY2VNZXRyaWMgaXMgb3BlcmF0aW5nIGFuZCB3aWxsIGdlbmVyYXRlIERldmljZU9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICBPbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdGFuZGJ5OiBUaGUgRGV2aWNlTWV0cmljIGlzIG9wZXJhdGluZywgYnV0IHdpbGwgbm90IGdlbmVyYXRlIGFueSBEZXZpY2VPYnNlcnZhdGlvbnMuXHJcbiAgICovXHJcbiAgU3RhbmRieTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgb3BlcmF0aW9uYWwgc3RhdHVzIG9mIHRoZSBEZXZpY2VNZXRyaWMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWV0cmljT3BlcmF0aW9uYWxTdGF0dXNDb2RpbmdzOk1ldHJpY09wZXJhdGlvbmFsU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgRGV2aWNlTWV0cmljIHdhcyBlbnRlcmVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgSW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWV0cmljLW9wZXJhdGlvbmFsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb2ZmOiBUaGUgRGV2aWNlTWV0cmljIGlzIG5vdCBvcGVyYXRpbmcuXHJcbiAgICovXHJcbiAgT2ZmOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9mZlwiLFxyXG4gICAgY29kZTogXCJvZmZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21ldHJpYy1vcGVyYXRpb25hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9uOiBUaGUgRGV2aWNlTWV0cmljIGlzIG9wZXJhdGluZyBhbmQgd2lsbCBnZW5lcmF0ZSBEZXZpY2VPYnNlcnZhdGlvbnMuXHJcbiAgICovXHJcbiAgT246IHtcclxuICAgIGRpc3BsYXk6IFwiT25cIixcclxuICAgIGNvZGU6IFwib25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21ldHJpYy1vcGVyYXRpb25hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0YW5kYnk6IFRoZSBEZXZpY2VNZXRyaWMgaXMgb3BlcmF0aW5nLCBidXQgd2lsbCBub3QgZ2VuZXJhdGUgYW55IERldmljZU9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICBTdGFuZGJ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIlN0YW5kYnlcIixcclxuICAgIGNvZGU6IFwic3RhbmRieVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWV0cmljLW9wZXJhdGlvbmFsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==