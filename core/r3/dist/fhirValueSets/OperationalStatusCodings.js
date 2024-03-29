// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/operational-status|3.0.2
/**
 * Codes representing the current status of the device - on, off, suspended, etc.
 */
export const OperationalStatusCodings = {
    /**
     * entered-in-error: The device was entered in error.
     */
    EnteredInError: {
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/operational-status",
    },
    /**
     * hw-discon: The device hardware is disconnected.
     */
    HardwareDisconnectd: {
        display: "Hardware Disconnectd",
        code: "hw-discon",
        system: "http://hl7.org/fhir/operational-status",
    },
    /**
     * not-ready: The device is not ready.
     */
    NotReady: {
        display: "Not Ready",
        code: "not-ready",
        system: "http://hl7.org/fhir/operational-status",
    },
    /**
     * off: The device is off.
     */
    Off: {
        display: "Off",
        code: "off",
        system: "http://hl7.org/fhir/operational-status",
    },
    /**
     * on: The device is fully operational.
     */
    On: {
        display: "On",
        code: "on",
        system: "http://hl7.org/fhir/operational-status",
    },
    /**
     * standby: The device is ready but not actively operating.
     */
    Standby: {
        display: "Standby",
        code: "standby",
        system: "http://hl7.org/fhir/operational-status",
    },
    /**
     * transduc-discon: The device transducer is diconnected.
     */
    TransducerDiconnected: {
        display: "Transducer Diconnected",
        code: "transduc-discon",
        system: "http://hl7.org/fhir/operational-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0aW9uYWxTdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9PcGVyYXRpb25hbFN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBc0N2RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxFQUFFLEVBQUU7UUFDRixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxxQkFBcUIsRUFBRTtRQUNyQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvb3BlcmF0aW9uYWwtc3RhdHVzfDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQ29kZXMgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgZGV2aWNlIC0gb24sIG9mZiwgc3VzcGVuZGVkLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPcGVyYXRpb25hbFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGRldmljZSB3YXMgZW50ZXJlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBody1kaXNjb246IFRoZSBkZXZpY2UgaGFyZHdhcmUgaXMgZGlzY29ubmVjdGVkLlxyXG4gICAqL1xyXG4gIEhhcmR3YXJlRGlzY29ubmVjdGQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm90LXJlYWR5OiBUaGUgZGV2aWNlIGlzIG5vdCByZWFkeS5cclxuICAgKi9cclxuICBOb3RSZWFkeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvZmY6IFRoZSBkZXZpY2UgaXMgb2ZmLlxyXG4gICAqL1xyXG4gIE9mZjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvbjogVGhlIGRldmljZSBpcyBmdWxseSBvcGVyYXRpb25hbC5cclxuICAgKi9cclxuICBPbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdGFuZGJ5OiBUaGUgZGV2aWNlIGlzIHJlYWR5IGJ1dCBub3QgYWN0aXZlbHkgb3BlcmF0aW5nLlxyXG4gICAqL1xyXG4gIFN0YW5kYnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdHJhbnNkdWMtZGlzY29uOiBUaGUgZGV2aWNlIHRyYW5zZHVjZXIgaXMgZGljb25uZWN0ZWQuXHJcbiAgICovXHJcbiAgVHJhbnNkdWNlckRpY29ubmVjdGVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29kZXMgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgZGV2aWNlIC0gb24sIG9mZiwgc3VzcGVuZGVkLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3BlcmF0aW9uYWxTdGF0dXNDb2RpbmdzOk9wZXJhdGlvbmFsU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgZGV2aWNlIHdhcyBlbnRlcmVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgSW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvb3BlcmF0aW9uYWwtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBody1kaXNjb246IFRoZSBkZXZpY2UgaGFyZHdhcmUgaXMgZGlzY29ubmVjdGVkLlxyXG4gICAqL1xyXG4gIEhhcmR3YXJlRGlzY29ubmVjdGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiSGFyZHdhcmUgRGlzY29ubmVjdGRcIixcclxuICAgIGNvZGU6IFwiaHctZGlzY29uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9vcGVyYXRpb25hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG5vdC1yZWFkeTogVGhlIGRldmljZSBpcyBub3QgcmVhZHkuXHJcbiAgICovXHJcbiAgTm90UmVhZHk6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IFJlYWR5XCIsXHJcbiAgICBjb2RlOiBcIm5vdC1yZWFkeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvb3BlcmF0aW9uYWwtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvZmY6IFRoZSBkZXZpY2UgaXMgb2ZmLlxyXG4gICAqL1xyXG4gIE9mZjoge1xyXG4gICAgZGlzcGxheTogXCJPZmZcIixcclxuICAgIGNvZGU6IFwib2ZmXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9vcGVyYXRpb25hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9uOiBUaGUgZGV2aWNlIGlzIGZ1bGx5IG9wZXJhdGlvbmFsLlxyXG4gICAqL1xyXG4gIE9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9uXCIsXHJcbiAgICBjb2RlOiBcIm9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9vcGVyYXRpb25hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0YW5kYnk6IFRoZSBkZXZpY2UgaXMgcmVhZHkgYnV0IG5vdCBhY3RpdmVseSBvcGVyYXRpbmcuXHJcbiAgICovXHJcbiAgU3RhbmRieToge1xyXG4gICAgZGlzcGxheTogXCJTdGFuZGJ5XCIsXHJcbiAgICBjb2RlOiBcInN0YW5kYnlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL29wZXJhdGlvbmFsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdHJhbnNkdWMtZGlzY29uOiBUaGUgZGV2aWNlIHRyYW5zZHVjZXIgaXMgZGljb25uZWN0ZWQuXHJcbiAgICovXHJcbiAgVHJhbnNkdWNlckRpY29ubmVjdGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlRyYW5zZHVjZXIgRGljb25uZWN0ZWRcIixcclxuICAgIGNvZGU6IFwidHJhbnNkdWMtZGlzY29uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9vcGVyYXRpb25hbC1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=