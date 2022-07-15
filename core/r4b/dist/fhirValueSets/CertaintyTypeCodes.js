// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/certainty-type|4.3.0
/**
 * The aspect of quality, confidence, or certainty.
 */
export const CertaintyTypeCodes = {
    /**
     * DoseResponseGradient: higher certainty due to dose response relationship.
     */
    DoseResponseGradient: "DoseResponseGradient",
    /**
     * Imprecision: fuzzy or wide variability.
     */
    Imprecision: "Imprecision",
    /**
     * Inconsistency: concerns that findings are not similar enough to support certainty.
     */
    Inconsistency: "Inconsistency",
    /**
     * Indirectness: concerns reducing external validity.
     */
    Indirectness: "Indirectness",
    /**
     * LargeEffect: higher certainty due to large effect size.
     */
    LargeEffect: "LargeEffect",
    /**
     * Overall: Overall certainty of evidence (quality of evidence).
     */
    OverallCertainty: "Overall",
    /**
     * PlausibleConfounding: higher certainty due to risk of bias in opposite direction.
     */
    PlausibleConfounding: "PlausibleConfounding",
    /**
     * PublicationBias: likelihood that what is published misrepresents what is available to publish.
     */
    PublicationBias: "PublicationBias",
    /**
     * RiskOfBias: methodologic concerns reducing internal validity.
     */
    RiskOfBias: "RiskOfBias",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VydGFpbnR5VHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9DZXJ0YWludHlUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUM7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILGFBQWEsRUFBRSxlQUFlO0lBQzlCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLGNBQWM7SUFDNUI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILGdCQUFnQixFQUFFLFNBQVM7SUFDM0I7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUM7O09BRUc7SUFDSCxlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7Q0FDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY2VydGFpbnR5LXR5cGV8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBUaGUgYXNwZWN0IG9mIHF1YWxpdHksIGNvbmZpZGVuY2UsIG9yIGNlcnRhaW50eS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDZXJ0YWludHlUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRG9zZVJlc3BvbnNlR3JhZGllbnQ6IGhpZ2hlciBjZXJ0YWludHkgZHVlIHRvIGRvc2UgcmVzcG9uc2UgcmVsYXRpb25zaGlwLlxyXG4gICAqL1xyXG4gIERvc2VSZXNwb25zZUdyYWRpZW50OiBcIkRvc2VSZXNwb25zZUdyYWRpZW50XCIsXHJcbiAgLyoqXHJcbiAgICogSW1wcmVjaXNpb246IGZ1enp5IG9yIHdpZGUgdmFyaWFiaWxpdHkuXHJcbiAgICovXHJcbiAgSW1wcmVjaXNpb246IFwiSW1wcmVjaXNpb25cIixcclxuICAvKipcclxuICAgKiBJbmNvbnNpc3RlbmN5OiBjb25jZXJucyB0aGF0IGZpbmRpbmdzIGFyZSBub3Qgc2ltaWxhciBlbm91Z2ggdG8gc3VwcG9ydCBjZXJ0YWludHkuXHJcbiAgICovXHJcbiAgSW5jb25zaXN0ZW5jeTogXCJJbmNvbnNpc3RlbmN5XCIsXHJcbiAgLyoqXHJcbiAgICogSW5kaXJlY3RuZXNzOiBjb25jZXJucyByZWR1Y2luZyBleHRlcm5hbCB2YWxpZGl0eS5cclxuICAgKi9cclxuICBJbmRpcmVjdG5lc3M6IFwiSW5kaXJlY3RuZXNzXCIsXHJcbiAgLyoqXHJcbiAgICogTGFyZ2VFZmZlY3Q6IGhpZ2hlciBjZXJ0YWludHkgZHVlIHRvIGxhcmdlIGVmZmVjdCBzaXplLlxyXG4gICAqL1xyXG4gIExhcmdlRWZmZWN0OiBcIkxhcmdlRWZmZWN0XCIsXHJcbiAgLyoqXHJcbiAgICogT3ZlcmFsbDogT3ZlcmFsbCBjZXJ0YWludHkgb2YgZXZpZGVuY2UgKHF1YWxpdHkgb2YgZXZpZGVuY2UpLlxyXG4gICAqL1xyXG4gIE92ZXJhbGxDZXJ0YWludHk6IFwiT3ZlcmFsbFwiLFxyXG4gIC8qKlxyXG4gICAqIFBsYXVzaWJsZUNvbmZvdW5kaW5nOiBoaWdoZXIgY2VydGFpbnR5IGR1ZSB0byByaXNrIG9mIGJpYXMgaW4gb3Bwb3NpdGUgZGlyZWN0aW9uLlxyXG4gICAqL1xyXG4gIFBsYXVzaWJsZUNvbmZvdW5kaW5nOiBcIlBsYXVzaWJsZUNvbmZvdW5kaW5nXCIsXHJcbiAgLyoqXHJcbiAgICogUHVibGljYXRpb25CaWFzOiBsaWtlbGlob29kIHRoYXQgd2hhdCBpcyBwdWJsaXNoZWQgbWlzcmVwcmVzZW50cyB3aGF0IGlzIGF2YWlsYWJsZSB0byBwdWJsaXNoLlxyXG4gICAqL1xyXG4gIFB1YmxpY2F0aW9uQmlhczogXCJQdWJsaWNhdGlvbkJpYXNcIixcclxuICAvKipcclxuICAgKiBSaXNrT2ZCaWFzOiBtZXRob2RvbG9naWMgY29uY2VybnMgcmVkdWNpbmcgaW50ZXJuYWwgdmFsaWRpdHkuXHJcbiAgICovXHJcbiAgUmlza09mQmlhczogXCJSaXNrT2ZCaWFzXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIGFzcGVjdCBvZiBxdWFsaXR5LCBjb25maWRlbmNlLCBvciBjZXJ0YWludHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDZXJ0YWludHlUeXBlQ29kZVR5cGUgPSB0eXBlb2YgQ2VydGFpbnR5VHlwZUNvZGVzW2tleW9mIHR5cGVvZiBDZXJ0YWludHlUeXBlQ29kZXNdO1xyXG4iXX0=