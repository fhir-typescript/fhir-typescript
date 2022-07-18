// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/discriminator-type|3.0.2
/**
 * How an element value is interpreted when discrimination is evaluated
 */
export const DiscriminatorTypeCodings = {
    /**
     * exists: The slices are differentiated by the presence or absence of the nominated element
     */
    Exists: {
        display: "Exists",
        code: "exists",
        system: "http://hl7.org/fhir/discriminator-type",
    },
    /**
     * pattern: The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x]
     */
    Pattern: {
        display: "Pattern",
        code: "pattern",
        system: "http://hl7.org/fhir/discriminator-type",
    },
    /**
     * profile: The slices are differentiated by conformance of the nominated element to a specifed profile
     */
    Profile: {
        display: "Profile",
        code: "profile",
        system: "http://hl7.org/fhir/discriminator-type",
    },
    /**
     * type: The slices are differentiated by type of the nominated element to a specifed profile
     */
    Type: {
        display: "Type",
        code: "type",
        system: "http://hl7.org/fhir/discriminator-type",
    },
    /**
     * value: The slices have different values in the nominated element
     */
    Value: {
        display: "Value",
        code: "value",
        system: "http://hl7.org/fhir/discriminator-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzY3JpbWluYXRvclR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9EaXNjcmltaW5hdG9yVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBOEJ2RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2Rpc2NyaW1pbmF0b3ItdHlwZXwzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEhvdyBhbiBlbGVtZW50IHZhbHVlIGlzIGludGVycHJldGVkIHdoZW4gZGlzY3JpbWluYXRpb24gaXMgZXZhbHVhdGVkXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEaXNjcmltaW5hdG9yVHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZXhpc3RzOiBUaGUgc2xpY2VzIGFyZSBkaWZmZXJlbnRpYXRlZCBieSB0aGUgcHJlc2VuY2Ugb3IgYWJzZW5jZSBvZiB0aGUgbm9taW5hdGVkIGVsZW1lbnRcclxuICAgKi9cclxuICBFeGlzdHM6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcGF0dGVybjogVGhlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG5vbWluYXRlZCBlbGVtZW50LCBhcyBkZXRlcm1pbmVkIGJ5IHRlc3RpbmcgdGhlbSBhZ2FpbnN0IHRoZSBhcHBsaWNhYmxlIEVsZW1lbnREZWZpbml0aW9uLnBhdHRlcm5beF1cclxuICAgKi9cclxuICBQYXR0ZXJuOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByb2ZpbGU6IFRoZSBzbGljZXMgYXJlIGRpZmZlcmVudGlhdGVkIGJ5IGNvbmZvcm1hbmNlIG9mIHRoZSBub21pbmF0ZWQgZWxlbWVudCB0byBhIHNwZWNpZmVkIHByb2ZpbGVcclxuICAgKi9cclxuICBQcm9maWxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHR5cGU6IFRoZSBzbGljZXMgYXJlIGRpZmZlcmVudGlhdGVkIGJ5IHR5cGUgb2YgdGhlIG5vbWluYXRlZCBlbGVtZW50IHRvIGEgc3BlY2lmZWQgcHJvZmlsZVxyXG4gICAqL1xyXG4gIFR5cGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdmFsdWU6IFRoZSBzbGljZXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGluIHRoZSBub21pbmF0ZWQgZWxlbWVudFxyXG4gICAqL1xyXG4gIFZhbHVlOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogSG93IGFuIGVsZW1lbnQgdmFsdWUgaXMgaW50ZXJwcmV0ZWQgd2hlbiBkaXNjcmltaW5hdGlvbiBpcyBldmFsdWF0ZWRcclxuICovXHJcbmV4cG9ydCBjb25zdCBEaXNjcmltaW5hdG9yVHlwZUNvZGluZ3M6RGlzY3JpbWluYXRvclR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGV4aXN0czogVGhlIHNsaWNlcyBhcmUgZGlmZmVyZW50aWF0ZWQgYnkgdGhlIHByZXNlbmNlIG9yIGFic2VuY2Ugb2YgdGhlIG5vbWluYXRlZCBlbGVtZW50XHJcbiAgICovXHJcbiAgRXhpc3RzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkV4aXN0c1wiLFxyXG4gICAgY29kZTogXCJleGlzdHNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2Rpc2NyaW1pbmF0b3ItdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcGF0dGVybjogVGhlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG5vbWluYXRlZCBlbGVtZW50LCBhcyBkZXRlcm1pbmVkIGJ5IHRlc3RpbmcgdGhlbSBhZ2FpbnN0IHRoZSBhcHBsaWNhYmxlIEVsZW1lbnREZWZpbml0aW9uLnBhdHRlcm5beF1cclxuICAgKi9cclxuICBQYXR0ZXJuOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBhdHRlcm5cIixcclxuICAgIGNvZGU6IFwicGF0dGVyblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGlzY3JpbWluYXRvci10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcm9maWxlOiBUaGUgc2xpY2VzIGFyZSBkaWZmZXJlbnRpYXRlZCBieSBjb25mb3JtYW5jZSBvZiB0aGUgbm9taW5hdGVkIGVsZW1lbnQgdG8gYSBzcGVjaWZlZCBwcm9maWxlXHJcbiAgICovXHJcbiAgUHJvZmlsZToge1xyXG4gICAgZGlzcGxheTogXCJQcm9maWxlXCIsXHJcbiAgICBjb2RlOiBcInByb2ZpbGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2Rpc2NyaW1pbmF0b3ItdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdHlwZTogVGhlIHNsaWNlcyBhcmUgZGlmZmVyZW50aWF0ZWQgYnkgdHlwZSBvZiB0aGUgbm9taW5hdGVkIGVsZW1lbnQgdG8gYSBzcGVjaWZlZCBwcm9maWxlXHJcbiAgICovXHJcbiAgVHlwZToge1xyXG4gICAgZGlzcGxheTogXCJUeXBlXCIsXHJcbiAgICBjb2RlOiBcInR5cGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2Rpc2NyaW1pbmF0b3ItdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdmFsdWU6IFRoZSBzbGljZXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGluIHRoZSBub21pbmF0ZWQgZWxlbWVudFxyXG4gICAqL1xyXG4gIFZhbHVlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlZhbHVlXCIsXHJcbiAgICBjb2RlOiBcInZhbHVlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9kaXNjcmltaW5hdG9yLXR5cGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=