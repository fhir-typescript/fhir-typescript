// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-scoring|4.3.0
/**
 * The scoring type of the measure.
 */
export const MeasureScoringCodings = {
    /**
     * cohort: The measure is a cohort definition.
     */
    Cohort: {
        display: "Cohort",
        code: "cohort",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    },
    /**
     * continuous-variable: The score is defined by a calculation of some quantity.
     */
    ContinuousVariable: {
        display: "Continuous Variable",
        code: "continuous-variable",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    },
    /**
     * proportion: The measure score is defined using a proportion.
     */
    Proportion: {
        display: "Proportion",
        code: "proportion",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    },
    /**
     * ratio: The measure score is defined using a ratio.
     */
    Ratio: {
        display: "Ratio",
        code: "ratio",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZVNjb3JpbmdDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9NZWFzdXJlU2NvcmluZ0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsb0VBQW9FO0FBMEJwRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHVEQUF1RDtLQUNoRTtJQUNEOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUU7UUFDbEIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLE1BQU0sRUFBRSx1REFBdUQ7S0FDaEU7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSx1REFBdUQ7S0FDaEU7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHVEQUF1RDtLQUNoRTtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21lYXN1cmUtc2NvcmluZ3w0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSBzY29yaW5nIHR5cGUgb2YgdGhlIG1lYXN1cmUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZWFzdXJlU2NvcmluZ0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29ob3J0OiBUaGUgbWVhc3VyZSBpcyBhIGNvaG9ydCBkZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIENvaG9ydDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb250aW51b3VzLXZhcmlhYmxlOiBUaGUgc2NvcmUgaXMgZGVmaW5lZCBieSBhIGNhbGN1bGF0aW9uIG9mIHNvbWUgcXVhbnRpdHkuXHJcbiAgICovXHJcbiAgQ29udGludW91c1ZhcmlhYmxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByb3BvcnRpb246IFRoZSBtZWFzdXJlIHNjb3JlIGlzIGRlZmluZWQgdXNpbmcgYSBwcm9wb3J0aW9uLlxyXG4gICAqL1xyXG4gIFByb3BvcnRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmF0aW86IFRoZSBtZWFzdXJlIHNjb3JlIGlzIGRlZmluZWQgdXNpbmcgYSByYXRpby5cclxuICAgKi9cclxuICBSYXRpbzogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBzY29yaW5nIHR5cGUgb2YgdGhlIG1lYXN1cmUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVhc3VyZVNjb3JpbmdDb2RpbmdzOk1lYXN1cmVTY29yaW5nQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb2hvcnQ6IFRoZSBtZWFzdXJlIGlzIGEgY29ob3J0IGRlZmluaXRpb24uXHJcbiAgICovXHJcbiAgQ29ob3J0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvaG9ydFwiLFxyXG4gICAgY29kZTogXCJjb2hvcnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lYXN1cmUtc2NvcmluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29udGludW91cy12YXJpYWJsZTogVGhlIHNjb3JlIGlzIGRlZmluZWQgYnkgYSBjYWxjdWxhdGlvbiBvZiBzb21lIHF1YW50aXR5LlxyXG4gICAqL1xyXG4gIENvbnRpbnVvdXNWYXJpYWJsZToge1xyXG4gICAgZGlzcGxheTogXCJDb250aW51b3VzIFZhcmlhYmxlXCIsXHJcbiAgICBjb2RlOiBcImNvbnRpbnVvdXMtdmFyaWFibGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lYXN1cmUtc2NvcmluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcHJvcG9ydGlvbjogVGhlIG1lYXN1cmUgc2NvcmUgaXMgZGVmaW5lZCB1c2luZyBhIHByb3BvcnRpb24uXHJcbiAgICovXHJcbiAgUHJvcG9ydGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJQcm9wb3J0aW9uXCIsXHJcbiAgICBjb2RlOiBcInByb3BvcnRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lYXN1cmUtc2NvcmluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmF0aW86IFRoZSBtZWFzdXJlIHNjb3JlIGlzIGRlZmluZWQgdXNpbmcgYSByYXRpby5cclxuICAgKi9cclxuICBSYXRpbzoge1xyXG4gICAgZGlzcGxheTogXCJSYXRpb1wiLFxyXG4gICAgY29kZTogXCJyYXRpb1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVhc3VyZS1zY29yaW5nXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19