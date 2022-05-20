// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/certainty-subcomponent-rating|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export const CertaintySubcomponentRatingCodings = {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    Absent: new Coding({
        display: "absent",
        code: "absent",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * critical-concern: critical concern.
     */
    CriticalConcern: new Coding({
        display: "critical concern",
        code: "critical-concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * downcode1: reduce quality rating by 1.
     */
    ReduceRating1: new Coding({
        display: "reduce rating: -1",
        code: "downcode1",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * downcode2: reduce quality rating by 2.
     */
    ReduceRating2: new Coding({
        display: "reduce rating: -2",
        code: "downcode2",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * downcode3: reduce quality rating by 3.
     */
    ReduceRating3: new Coding({
        display: "reduce rating: -3",
        code: "downcode3",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * no-change: no change to quality rating.
     */
    NoChangeToRating: new Coding({
        display: "no change to rating",
        code: "no-change",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * no-concern: no serious concern.
     */
    NoSeriousConcern: new Coding({
        display: "no serious concern",
        code: "no-concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * present: possible reason for increasing quality rating was checked and found to bepresent.
     */
    Present: new Coding({
        display: "present",
        code: "present",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * serious-concern: serious concern.
     */
    SeriousConcern: new Coding({
        display: "serious concern",
        code: "serious-concern",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * upcode1: increase quality rating by 1.
     */
    IncreaseRatingPlus1: new Coding({
        display: "increase rating: +1",
        code: "upcode1",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
    /**
     * upcode2: increase quality rating by 2.
     */
    IncreaseRatingPlus2: new Coding({
        display: "increase rating: +2",
        code: "upcode2",
        system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VydGFpbnR5U3ViY29tcG9uZW50UmF0aW5nQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ2VydGFpbnR5U3ViY29tcG9uZW50UmF0aW5nQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrRkFBa0Y7QUFFbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0NBQWtDLEdBQUc7SUFDaEQ7O09BRUc7SUFDSCxNQUFNLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDakIsT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUscUVBQXFFO0tBQzlFLENBQUM7SUFDRjs7T0FFRztJQUNILGVBQWUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMxQixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsTUFBTSxFQUFFLHFFQUFxRTtLQUM5RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxhQUFhLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDeEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUscUVBQXFFO0tBQzlFLENBQUM7SUFDRjs7T0FFRztJQUNILGFBQWEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN4QixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxxRUFBcUU7S0FDOUUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsYUFBYSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHFFQUFxRTtLQUM5RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMzQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxxRUFBcUU7S0FDOUUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDM0IsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUscUVBQXFFO0tBQzlFLENBQUM7SUFDRjs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxxRUFBcUU7S0FDOUUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixNQUFNLEVBQUUscUVBQXFFO0tBQzlFLENBQUM7SUFDRjs7T0FFRztJQUNILG1CQUFtQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUscUVBQXFFO0tBQzlFLENBQUM7SUFDRjs7T0FFRztJQUNILG1CQUFtQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUscUVBQXFFO0tBQzlFLENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NlcnRhaW50eS1zdWJjb21wb25lbnQtcmF0aW5nfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgcXVhbGl0eSByYXRpbmcgb2YgdGhlIHN1YmNvbXBvbmVudCBvZiBhIHF1YWxpdHkgb2YgZXZpZGVuY2UgcmF0aW5nLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENlcnRhaW50eVN1YmNvbXBvbmVudFJhdGluZ0NvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogYWJzZW50OiBwb3NzaWJsZSByZWFzb24gZm9yIGluY3JlYXNpbmcgcXVhbGl0eSByYXRpbmcgd2FzIGNoZWNrZWQgYW5kIGZvdW5kIHRvIGJlIGFic2VudC5cclxuICAgKi9cclxuICBBYnNlbnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJhYnNlbnRcIixcclxuICAgIGNvZGU6IFwiYWJzZW50XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktc3ViY29tcG9uZW50LXJhdGluZ1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGNyaXRpY2FsLWNvbmNlcm46IGNyaXRpY2FsIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgQ3JpdGljYWxDb25jZXJuOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiY3JpdGljYWwgY29uY2VyblwiLFxyXG4gICAgY29kZTogXCJjcml0aWNhbC1jb25jZXJuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktc3ViY29tcG9uZW50LXJhdGluZ1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGRvd25jb2RlMTogcmVkdWNlIHF1YWxpdHkgcmF0aW5nIGJ5IDEuXHJcbiAgICovXHJcbiAgUmVkdWNlUmF0aW5nMTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInJlZHVjZSByYXRpbmc6IC0xXCIsXHJcbiAgICBjb2RlOiBcImRvd25jb2RlMVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY2VydGFpbnR5LXN1YmNvbXBvbmVudC1yYXRpbmdcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBkb3duY29kZTI6IHJlZHVjZSBxdWFsaXR5IHJhdGluZyBieSAyLlxyXG4gICAqL1xyXG4gIFJlZHVjZVJhdGluZzI6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJyZWR1Y2UgcmF0aW5nOiAtMlwiLFxyXG4gICAgY29kZTogXCJkb3duY29kZTJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1zdWJjb21wb25lbnQtcmF0aW5nXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogZG93bmNvZGUzOiByZWR1Y2UgcXVhbGl0eSByYXRpbmcgYnkgMy5cclxuICAgKi9cclxuICBSZWR1Y2VSYXRpbmczOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwicmVkdWNlIHJhdGluZzogLTNcIixcclxuICAgIGNvZGU6IFwiZG93bmNvZGUzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktc3ViY29tcG9uZW50LXJhdGluZ1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIG5vLWNoYW5nZTogbm8gY2hhbmdlIHRvIHF1YWxpdHkgcmF0aW5nLlxyXG4gICAqL1xyXG4gIE5vQ2hhbmdlVG9SYXRpbmc6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJubyBjaGFuZ2UgdG8gcmF0aW5nXCIsXHJcbiAgICBjb2RlOiBcIm5vLWNoYW5nZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY2VydGFpbnR5LXN1YmNvbXBvbmVudC1yYXRpbmdcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBuby1jb25jZXJuOiBubyBzZXJpb3VzIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgTm9TZXJpb3VzQ29uY2VybjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIm5vIHNlcmlvdXMgY29uY2VyblwiLFxyXG4gICAgY29kZTogXCJuby1jb25jZXJuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktc3ViY29tcG9uZW50LXJhdGluZ1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHByZXNlbnQ6IHBvc3NpYmxlIHJlYXNvbiBmb3IgaW5jcmVhc2luZyBxdWFsaXR5IHJhdGluZyB3YXMgY2hlY2tlZCBhbmQgZm91bmQgdG8gYmVwcmVzZW50LlxyXG4gICAqL1xyXG4gIFByZXNlbnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJwcmVzZW50XCIsXHJcbiAgICBjb2RlOiBcInByZXNlbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1zdWJjb21wb25lbnQtcmF0aW5nXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogc2VyaW91cy1jb25jZXJuOiBzZXJpb3VzIGNvbmNlcm4uXHJcbiAgICovXHJcbiAgU2VyaW91c0NvbmNlcm46IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJzZXJpb3VzIGNvbmNlcm5cIixcclxuICAgIGNvZGU6IFwic2VyaW91cy1jb25jZXJuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jZXJ0YWludHktc3ViY29tcG9uZW50LXJhdGluZ1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHVwY29kZTE6IGluY3JlYXNlIHF1YWxpdHkgcmF0aW5nIGJ5IDEuXHJcbiAgICovXHJcbiAgSW5jcmVhc2VSYXRpbmdQbHVzMTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcImluY3JlYXNlIHJhdGluZzogKzFcIixcclxuICAgIGNvZGU6IFwidXBjb2RlMVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY2VydGFpbnR5LXN1YmNvbXBvbmVudC1yYXRpbmdcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiB1cGNvZGUyOiBpbmNyZWFzZSBxdWFsaXR5IHJhdGluZyBieSAyLlxyXG4gICAqL1xyXG4gIEluY3JlYXNlUmF0aW5nUGx1czI6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJpbmNyZWFzZSByYXRpbmc6ICsyXCIsXHJcbiAgICBjb2RlOiBcInVwY29kZTJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NlcnRhaW50eS1zdWJjb21wb25lbnQtcmF0aW5nXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIHF1YWxpdHkgcmF0aW5nIG9mIHRoZSBzdWJjb21wb25lbnQgb2YgYSBxdWFsaXR5IG9mIGV2aWRlbmNlIHJhdGluZy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENlcnRhaW50eVN1YmNvbXBvbmVudFJhdGluZ0NvZGluZ1R5cGUgPSB0eXBlb2YgQ2VydGFpbnR5U3ViY29tcG9uZW50UmF0aW5nQ29kaW5ncztcclxuIl19