// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/composite-measure-scoring|3.0.2
/**
 * The composite scoring method of the measure
 */
export const CompositeMeasureScoringCodings = {
    /**
     * all-or-nothing: All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator
     */
    AllOrNothing: {
        display: "All-or-nothing",
        code: "all-or-nothing",
        system: "http://hl7.org/fhir/composite-measure-scoring",
    },
    /**
     * linear: Linear scoring gives an individual a score based on the number of numerators in which they appear
     */
    Linear: {
        display: "Linear",
        code: "linear",
        system: "http://hl7.org/fhir/composite-measure-scoring",
    },
    /**
     * opportunity: Opportunity scoring combines the scores from component measures by combining the numerators and denominators for each component
     */
    Opportunity: {
        display: "Opportunity",
        code: "opportunity",
        system: "http://hl7.org/fhir/composite-measure-scoring",
    },
    /**
     * weighted: Weighted scoring gives an individual a score based on a weighted factor for each component numerator in which they appear
     */
    Weighted: {
        display: "Weighted",
        code: "weighted",
        system: "http://hl7.org/fhir/composite-measure-scoring",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9zaXRlTWVhc3VyZVNjb3JpbmdDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db21wb3NpdGVNZWFzdXJlU2NvcmluZ0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBMEI5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixNQUFNLEVBQUUsK0NBQStDO0tBQ3hEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbXBvc2l0ZS1tZWFzdXJlLXNjb3Jpbmd8My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgY29tcG9zaXRlIHNjb3JpbmcgbWV0aG9kIG9mIHRoZSBtZWFzdXJlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb21wb3NpdGVNZWFzdXJlU2NvcmluZ0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWxsLW9yLW5vdGhpbmc6IEFsbC1vci1ub3RoaW5nIHNjb3JpbmcgaW5jbHVkZXMgYW4gaW5kaXZpZHVhbCBpbiB0aGUgbnVtZXJhdG9yIG9mIHRoZSBjb21wb3NpdGUgbWVhc3VyZSBpZiB0aGV5IGFyZSBpbiB0aGUgbnVtZXJhdG9ycyBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudCBtZWFzdXJlcyBpbiB3aGljaCB0aGV5IGFyZSBpbiB0aGUgZGVub21pbmF0b3JcclxuICAgKi9cclxuICBBbGxPck5vdGhpbmc6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbGluZWFyOiBMaW5lYXIgc2NvcmluZyBnaXZlcyBhbiBpbmRpdmlkdWFsIGEgc2NvcmUgYmFzZWQgb24gdGhlIG51bWJlciBvZiBudW1lcmF0b3JzIGluIHdoaWNoIHRoZXkgYXBwZWFyXHJcbiAgICovXHJcbiAgTGluZWFyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9wcG9ydHVuaXR5OiBPcHBvcnR1bml0eSBzY29yaW5nIGNvbWJpbmVzIHRoZSBzY29yZXMgZnJvbSBjb21wb25lbnQgbWVhc3VyZXMgYnkgY29tYmluaW5nIHRoZSBudW1lcmF0b3JzIGFuZCBkZW5vbWluYXRvcnMgZm9yIGVhY2ggY29tcG9uZW50XHJcbiAgICovXHJcbiAgT3Bwb3J0dW5pdHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogd2VpZ2h0ZWQ6IFdlaWdodGVkIHNjb3JpbmcgZ2l2ZXMgYW4gaW5kaXZpZHVhbCBhIHNjb3JlIGJhc2VkIG9uIGEgd2VpZ2h0ZWQgZmFjdG9yIGZvciBlYWNoIGNvbXBvbmVudCBudW1lcmF0b3IgaW4gd2hpY2ggdGhleSBhcHBlYXJcclxuICAgKi9cclxuICBXZWlnaHRlZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBjb21wb3NpdGUgc2NvcmluZyBtZXRob2Qgb2YgdGhlIG1lYXN1cmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb21wb3NpdGVNZWFzdXJlU2NvcmluZ0NvZGluZ3M6Q29tcG9zaXRlTWVhc3VyZVNjb3JpbmdDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFsbC1vci1ub3RoaW5nOiBBbGwtb3Itbm90aGluZyBzY29yaW5nIGluY2x1ZGVzIGFuIGluZGl2aWR1YWwgaW4gdGhlIG51bWVyYXRvciBvZiB0aGUgY29tcG9zaXRlIG1lYXN1cmUgaWYgdGhleSBhcmUgaW4gdGhlIG51bWVyYXRvcnMgb2YgYWxsIG9mIHRoZSBjb21wb25lbnQgbWVhc3VyZXMgaW4gd2hpY2ggdGhleSBhcmUgaW4gdGhlIGRlbm9taW5hdG9yXHJcbiAgICovXHJcbiAgQWxsT3JOb3RoaW5nOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFsbC1vci1ub3RoaW5nXCIsXHJcbiAgICBjb2RlOiBcImFsbC1vci1ub3RoaW5nXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb21wb3NpdGUtbWVhc3VyZS1zY29yaW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBsaW5lYXI6IExpbmVhciBzY29yaW5nIGdpdmVzIGFuIGluZGl2aWR1YWwgYSBzY29yZSBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIG51bWVyYXRvcnMgaW4gd2hpY2ggdGhleSBhcHBlYXJcclxuICAgKi9cclxuICBMaW5lYXI6IHtcclxuICAgIGRpc3BsYXk6IFwiTGluZWFyXCIsXHJcbiAgICBjb2RlOiBcImxpbmVhclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29tcG9zaXRlLW1lYXN1cmUtc2NvcmluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb3Bwb3J0dW5pdHk6IE9wcG9ydHVuaXR5IHNjb3JpbmcgY29tYmluZXMgdGhlIHNjb3JlcyBmcm9tIGNvbXBvbmVudCBtZWFzdXJlcyBieSBjb21iaW5pbmcgdGhlIG51bWVyYXRvcnMgYW5kIGRlbm9taW5hdG9ycyBmb3IgZWFjaCBjb21wb25lbnRcclxuICAgKi9cclxuICBPcHBvcnR1bml0eToge1xyXG4gICAgZGlzcGxheTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgY29kZTogXCJvcHBvcnR1bml0eVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29tcG9zaXRlLW1lYXN1cmUtc2NvcmluZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogd2VpZ2h0ZWQ6IFdlaWdodGVkIHNjb3JpbmcgZ2l2ZXMgYW4gaW5kaXZpZHVhbCBhIHNjb3JlIGJhc2VkIG9uIGEgd2VpZ2h0ZWQgZmFjdG9yIGZvciBlYWNoIGNvbXBvbmVudCBudW1lcmF0b3IgaW4gd2hpY2ggdGhleSBhcHBlYXJcclxuICAgKi9cclxuICBXZWlnaHRlZDoge1xyXG4gICAgZGlzcGxheTogXCJXZWlnaHRlZFwiLFxyXG4gICAgY29kZTogXCJ3ZWlnaHRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29tcG9zaXRlLW1lYXN1cmUtc2NvcmluZ1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==