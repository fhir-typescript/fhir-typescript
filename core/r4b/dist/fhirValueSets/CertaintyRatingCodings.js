// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/certainty-rating|4.3.0
/**
 * The assessment of quality, confidence, or certainty.
 */
export const CertaintyRatingCodings = {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    Absent: {
        display: "absent",
        code: "absent",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * downcode1: reduce quality rating by 1.
     */
    ReduceRating1: {
        display: "reduce rating: -1",
        code: "downcode1",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * downcode2: reduce quality rating by 2.
     */
    ReduceRating2: {
        display: "reduce rating: -2",
        code: "downcode2",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * downcode3: reduce quality rating by 3.
     */
    ReduceRating3: {
        display: "reduce rating: -3",
        code: "downcode3",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * extremely-serious-concern: extremely serious concern.
     */
    ExtremelySeriousConcern: {
        display: "extremely serious concern",
        code: "extremely-serious-concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * high: High quality evidence.
     */
    HighQuality: {
        display: "High quality",
        code: "high",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * low: Low quality evidence.
     */
    LowQuality: {
        display: "Low quality",
        code: "low",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * moderate: Moderate quality evidence.
     */
    ModerateQuality: {
        display: "Moderate quality",
        code: "moderate",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * no-change: no change to quality rating.
     */
    NoChangeToRating: {
        display: "no change to rating",
        code: "no-change",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * no-concern: no serious concern.
     */
    NoSeriousConcern: {
        display: "no serious concern",
        code: "no-concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * present: possible reason for increasing quality rating was checked and found to be present.
     */
    Present: {
        display: "present",
        code: "present",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * serious-concern: serious concern.
     */
    SeriousConcern: {
        display: "serious concern",
        code: "serious-concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * upcode1: increase quality rating by 1.
     */
    IncreaseRatingPlus1: {
        display: "increase rating: +1",
        code: "upcode1",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * upcode2: increase quality rating by 2.
     */
    IncreaseRatingPlus2: {
        display: "increase rating: +2",
        code: "upcode2",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * very-low: Very low quality evidence.
     */
    VeryLowQuality: {
        display: "Very low quality",
        code: "very-low",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
    /**
     * very-serious-concern: very serious concern.
     */
    VerySeriousConcern: {
        display: "very serious concern",
        code: "very-serious-concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-rating",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VydGFpbnR5UmF0aW5nQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ2VydGFpbnR5UmF0aW5nQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxxRUFBcUU7QUEwRXJFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTZCO0lBQzlEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsd0RBQXdEO0tBQ2pFO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSx3REFBd0Q7S0FDakU7SUFDRDs7T0FFRztJQUNILGFBQWEsRUFBRTtRQUNiLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHdEQUF3RDtLQUNqRTtJQUNEOztPQUVHO0lBQ0gsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsd0RBQXdEO0tBQ2pFO0lBQ0Q7O09BRUc7SUFDSCx1QkFBdUIsRUFBRTtRQUN2QixPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLElBQUksRUFBRSwyQkFBMkI7UUFDakMsTUFBTSxFQUFFLHdEQUF3RDtLQUNqRTtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsd0RBQXdEO0tBQ2pFO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSx3REFBd0Q7S0FDakU7SUFDRDs7T0FFRztJQUNILGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLHdEQUF3RDtLQUNqRTtJQUNEOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUU7UUFDaEIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsd0RBQXdEO0tBQ2pFO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSx3REFBd0Q7S0FDakU7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHdEQUF3RDtLQUNqRTtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRSx3REFBd0Q7S0FDakU7SUFDRDs7T0FFRztJQUNILG1CQUFtQixFQUFFO1FBQ25CLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsd0RBQXdEO0tBQ2pFO0lBQ0Q7O09BRUc7SUFDSCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHdEQUF3RDtLQUNqRTtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsd0RBQXdEO0tBQ2pFO0lBQ0Q7O09BRUc7SUFDSCxrQkFBa0IsRUFBRTtRQUNsQixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsTUFBTSxFQUFFLHdEQUF3RDtLQUNqRTtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NlcnRhaW50eS1yYXRpbmd8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgYXNzZXNzbWVudCBvZiBxdWFsaXR5LCBjb25maWRlbmNlLCBvciBjZXJ0YWludHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDZXJ0YWludHlSYXRpbmdDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFic2VudDogcG9zc2libGUgcmVhc29uIGZvciBpbmNyZWFzaW5nIHF1YWxpdHkgcmF0aW5nIHdhcyBjaGVja2VkIGFuZCBmb3VuZCB0byBiZSBhYnNlbnQuXHJcbiAgICovXHJcbiAgQWJzZW50OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRvd25jb2RlMTogcmVkdWNlIHF1YWxpdHkgcmF0aW5nIGJ5IDEuXHJcbiAgICovXHJcbiAgUmVkdWNlUmF0aW5nMTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkb3duY29kZTI6IHJlZHVjZSBxdWFsaXR5IHJhdGluZyBieSAyLlxyXG4gICAqL1xyXG4gIFJlZHVjZVJhdGluZzI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZG93bmNvZGUzOiByZWR1Y2UgcXVhbGl0eSByYXRpbmcgYnkgMy5cclxuICAgKi9cclxuICBSZWR1Y2VSYXRpbmczOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGV4dHJlbWVseS1zZXJpb3VzLWNvbmNlcm46IGV4dHJlbWVseSBzZXJpb3VzIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgRXh0cmVtZWx5U2VyaW91c0NvbmNlcm46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaGlnaDogSGlnaCBxdWFsaXR5IGV2aWRlbmNlLlxyXG4gICAqL1xyXG4gIEhpZ2hRdWFsaXR5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGxvdzogTG93IHF1YWxpdHkgZXZpZGVuY2UuXHJcbiAgICovXHJcbiAgTG93UXVhbGl0eTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtb2RlcmF0ZTogTW9kZXJhdGUgcXVhbGl0eSBldmlkZW5jZS5cclxuICAgKi9cclxuICBNb2RlcmF0ZVF1YWxpdHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm8tY2hhbmdlOiBubyBjaGFuZ2UgdG8gcXVhbGl0eSByYXRpbmcuXHJcbiAgICovXHJcbiAgTm9DaGFuZ2VUb1JhdGluZzogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBuby1jb25jZXJuOiBubyBzZXJpb3VzIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgTm9TZXJpb3VzQ29uY2VybjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwcmVzZW50OiBwb3NzaWJsZSByZWFzb24gZm9yIGluY3JlYXNpbmcgcXVhbGl0eSByYXRpbmcgd2FzIGNoZWNrZWQgYW5kIGZvdW5kIHRvIGJlIHByZXNlbnQuXHJcbiAgICovXHJcbiAgUHJlc2VudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzZXJpb3VzLWNvbmNlcm46IHNlcmlvdXMgY29uY2Vybi5cclxuICAgKi9cclxuICBTZXJpb3VzQ29uY2VybjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB1cGNvZGUxOiBpbmNyZWFzZSBxdWFsaXR5IHJhdGluZyBieSAxLlxyXG4gICAqL1xyXG4gIEluY3JlYXNlUmF0aW5nUGx1czE6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdXBjb2RlMjogaW5jcmVhc2UgcXVhbGl0eSByYXRpbmcgYnkgMi5cclxuICAgKi9cclxuICBJbmNyZWFzZVJhdGluZ1BsdXMyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHZlcnktbG93OiBWZXJ5IGxvdyBxdWFsaXR5IGV2aWRlbmNlLlxyXG4gICAqL1xyXG4gIFZlcnlMb3dRdWFsaXR5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHZlcnktc2VyaW91cy1jb25jZXJuOiB2ZXJ5IHNlcmlvdXMgY29uY2Vybi5cclxuICAgKi9cclxuICBWZXJ5U2VyaW91c0NvbmNlcm46IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgYXNzZXNzbWVudCBvZiBxdWFsaXR5LCBjb25maWRlbmNlLCBvciBjZXJ0YWludHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2VydGFpbnR5UmF0aW5nQ29kaW5nczpDZXJ0YWludHlSYXRpbmdDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFic2VudDogcG9zc2libGUgcmVhc29uIGZvciBpbmNyZWFzaW5nIHF1YWxpdHkgcmF0aW5nIHdhcyBjaGVja2VkIGFuZCBmb3VuZCB0byBiZSBhYnNlbnQuXHJcbiAgICovXHJcbiAgQWJzZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcImFic2VudFwiLFxyXG4gICAgY29kZTogXCJhYnNlbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1yYXRpbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRvd25jb2RlMTogcmVkdWNlIHF1YWxpdHkgcmF0aW5nIGJ5IDEuXHJcbiAgICovXHJcbiAgUmVkdWNlUmF0aW5nMToge1xyXG4gICAgZGlzcGxheTogXCJyZWR1Y2UgcmF0aW5nOiAtMVwiLFxyXG4gICAgY29kZTogXCJkb3duY29kZTFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1yYXRpbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRvd25jb2RlMjogcmVkdWNlIHF1YWxpdHkgcmF0aW5nIGJ5IDIuXHJcbiAgICovXHJcbiAgUmVkdWNlUmF0aW5nMjoge1xyXG4gICAgZGlzcGxheTogXCJyZWR1Y2UgcmF0aW5nOiAtMlwiLFxyXG4gICAgY29kZTogXCJkb3duY29kZTJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1yYXRpbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRvd25jb2RlMzogcmVkdWNlIHF1YWxpdHkgcmF0aW5nIGJ5IDMuXHJcbiAgICovXHJcbiAgUmVkdWNlUmF0aW5nMzoge1xyXG4gICAgZGlzcGxheTogXCJyZWR1Y2UgcmF0aW5nOiAtM1wiLFxyXG4gICAgY29kZTogXCJkb3duY29kZTNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1yYXRpbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGV4dHJlbWVseS1zZXJpb3VzLWNvbmNlcm46IGV4dHJlbWVseSBzZXJpb3VzIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgRXh0cmVtZWx5U2VyaW91c0NvbmNlcm46IHtcclxuICAgIGRpc3BsYXk6IFwiZXh0cmVtZWx5IHNlcmlvdXMgY29uY2VyblwiLFxyXG4gICAgY29kZTogXCJleHRyZW1lbHktc2VyaW91cy1jb25jZXJuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBoaWdoOiBIaWdoIHF1YWxpdHkgZXZpZGVuY2UuXHJcbiAgICovXHJcbiAgSGlnaFF1YWxpdHk6IHtcclxuICAgIGRpc3BsYXk6IFwiSGlnaCBxdWFsaXR5XCIsXHJcbiAgICBjb2RlOiBcImhpZ2hcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1yYXRpbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGxvdzogTG93IHF1YWxpdHkgZXZpZGVuY2UuXHJcbiAgICovXHJcbiAgTG93UXVhbGl0eToge1xyXG4gICAgZGlzcGxheTogXCJMb3cgcXVhbGl0eVwiLFxyXG4gICAgY29kZTogXCJsb3dcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1yYXRpbmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG1vZGVyYXRlOiBNb2RlcmF0ZSBxdWFsaXR5IGV2aWRlbmNlLlxyXG4gICAqL1xyXG4gIE1vZGVyYXRlUXVhbGl0eToge1xyXG4gICAgZGlzcGxheTogXCJNb2RlcmF0ZSBxdWFsaXR5XCIsXHJcbiAgICBjb2RlOiBcIm1vZGVyYXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBuby1jaGFuZ2U6IG5vIGNoYW5nZSB0byBxdWFsaXR5IHJhdGluZy5cclxuICAgKi9cclxuICBOb0NoYW5nZVRvUmF0aW5nOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vIGNoYW5nZSB0byByYXRpbmdcIixcclxuICAgIGNvZGU6IFwibm8tY2hhbmdlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBuby1jb25jZXJuOiBubyBzZXJpb3VzIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgTm9TZXJpb3VzQ29uY2Vybjoge1xyXG4gICAgZGlzcGxheTogXCJubyBzZXJpb3VzIGNvbmNlcm5cIixcclxuICAgIGNvZGU6IFwibm8tY29uY2VyblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY2VydGFpbnR5LXJhdGluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcHJlc2VudDogcG9zc2libGUgcmVhc29uIGZvciBpbmNyZWFzaW5nIHF1YWxpdHkgcmF0aW5nIHdhcyBjaGVja2VkIGFuZCBmb3VuZCB0byBiZSBwcmVzZW50LlxyXG4gICAqL1xyXG4gIFByZXNlbnQ6IHtcclxuICAgIGRpc3BsYXk6IFwicHJlc2VudFwiLFxyXG4gICAgY29kZTogXCJwcmVzZW50XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzZXJpb3VzLWNvbmNlcm46IHNlcmlvdXMgY29uY2Vybi5cclxuICAgKi9cclxuICBTZXJpb3VzQ29uY2Vybjoge1xyXG4gICAgZGlzcGxheTogXCJzZXJpb3VzIGNvbmNlcm5cIixcclxuICAgIGNvZGU6IFwic2VyaW91cy1jb25jZXJuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB1cGNvZGUxOiBpbmNyZWFzZSBxdWFsaXR5IHJhdGluZyBieSAxLlxyXG4gICAqL1xyXG4gIEluY3JlYXNlUmF0aW5nUGx1czE6IHtcclxuICAgIGRpc3BsYXk6IFwiaW5jcmVhc2UgcmF0aW5nOiArMVwiLFxyXG4gICAgY29kZTogXCJ1cGNvZGUxXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB1cGNvZGUyOiBpbmNyZWFzZSBxdWFsaXR5IHJhdGluZyBieSAyLlxyXG4gICAqL1xyXG4gIEluY3JlYXNlUmF0aW5nUGx1czI6IHtcclxuICAgIGRpc3BsYXk6IFwiaW5jcmVhc2UgcmF0aW5nOiArMlwiLFxyXG4gICAgY29kZTogXCJ1cGNvZGUyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB2ZXJ5LWxvdzogVmVyeSBsb3cgcXVhbGl0eSBldmlkZW5jZS5cclxuICAgKi9cclxuICBWZXJ5TG93UXVhbGl0eToge1xyXG4gICAgZGlzcGxheTogXCJWZXJ5IGxvdyBxdWFsaXR5XCIsXHJcbiAgICBjb2RlOiBcInZlcnktbG93XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB2ZXJ5LXNlcmlvdXMtY29uY2VybjogdmVyeSBzZXJpb3VzIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgVmVyeVNlcmlvdXNDb25jZXJuOiB7XHJcbiAgICBkaXNwbGF5OiBcInZlcnkgc2VyaW91cyBjb25jZXJuXCIsXHJcbiAgICBjb2RlOiBcInZlcnktc2VyaW91cy1jb25jZXJuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktcmF0aW5nXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19