// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/variable-handling|4.3.0
/**
 * The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export const VariableHandlingCodings = {
    /**
     * continuous: A continuous variable is one for which, within the limits the variable ranges, any value is possible (from STATO http://purl.obolibrary.org/obo/STATO_0000251).
     */
    ContinuousVariable: {
        display: "continuous variable",
        code: "continuous",
        system: "http://hl7.org/fhir/variable-handling",
    },
    /**
     * dichotomous: A dichotomous variable is a categorical variable which is defined to have only 2 categories or possible values (from STATO http://purl.obolibrary.org/obo/STATO_0000090).
     */
    DichotomousVariable: {
        display: "dichotomous variable",
        code: "dichotomous",
        system: "http://hl7.org/fhir/variable-handling",
    },
    /**
     * ordinal: An ordinal variable is a categorical variable where the discrete possible values are ordered or correspond to an implicit ranking (from STATO http://purl.obolibrary.org/obo/STATO_0000228).
     */
    OrdinalVariable: {
        display: "ordinal variable",
        code: "ordinal",
        system: "http://hl7.org/fhir/variable-handling",
    },
    /**
     * polychotomous: A polychotomous variable is a categorical variable which is defined to have minimally 2 categories or possible values. (from STATO  http://purl.obolibrary.org/obo/STATO_0000087).  Suggestion to limit code use to situations when neither dichotomous nor ordinal variables apply.
     */
    PolychotomousVariable: {
        display: "polychotomous variable",
        code: "polychotomous",
        system: "http://hl7.org/fhir/variable-handling",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyaWFibGVIYW5kbGluZ0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1ZhcmlhYmxlSGFuZGxpbmdDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQTBCdEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBOEI7SUFDaEU7O09BRUc7SUFDSCxrQkFBa0IsRUFBRTtRQUNsQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILG1CQUFtQixFQUFFO1FBQ25CLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtJQUNEOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILHFCQUFxQixFQUFFO1FBQ3JCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3ZhcmlhYmxlLWhhbmRsaW5nfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIGhhbmRsaW5nIG9mIHRoZSB2YXJpYWJsZSBpbiBzdGF0aXN0aWNhbCBhbmFseXNpcyBmb3IgZXhwb3N1cmVzIG9yIG91dGNvbWVzIChFLmcuIERpY2hvdG9tb3VzLCBDb250aW51b3VzLCBEZXNjcmlwdGl2ZSkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYXJpYWJsZUhhbmRsaW5nQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb250aW51b3VzOiBBIGNvbnRpbnVvdXMgdmFyaWFibGUgaXMgb25lIGZvciB3aGljaCwgd2l0aGluIHRoZSBsaW1pdHMgdGhlIHZhcmlhYmxlIHJhbmdlcywgYW55IHZhbHVlIGlzIHBvc3NpYmxlIChmcm9tIFNUQVRPIGh0dHA6Ly9wdXJsLm9ib2xpYnJhcnkub3JnL29iby9TVEFUT18wMDAwMjUxKS5cclxuICAgKi9cclxuICBDb250aW51b3VzVmFyaWFibGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZGljaG90b21vdXM6IEEgZGljaG90b21vdXMgdmFyaWFibGUgaXMgYSBjYXRlZ29yaWNhbCB2YXJpYWJsZSB3aGljaCBpcyBkZWZpbmVkIHRvIGhhdmUgb25seSAyIGNhdGVnb3JpZXMgb3IgcG9zc2libGUgdmFsdWVzIChmcm9tIFNUQVRPIGh0dHA6Ly9wdXJsLm9ib2xpYnJhcnkub3JnL29iby9TVEFUT18wMDAwMDkwKS5cclxuICAgKi9cclxuICBEaWNob3RvbW91c1ZhcmlhYmxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9yZGluYWw6IEFuIG9yZGluYWwgdmFyaWFibGUgaXMgYSBjYXRlZ29yaWNhbCB2YXJpYWJsZSB3aGVyZSB0aGUgZGlzY3JldGUgcG9zc2libGUgdmFsdWVzIGFyZSBvcmRlcmVkIG9yIGNvcnJlc3BvbmQgdG8gYW4gaW1wbGljaXQgcmFua2luZyAoZnJvbSBTVEFUTyBodHRwOi8vcHVybC5vYm9saWJyYXJ5Lm9yZy9vYm8vU1RBVE9fMDAwMDIyOCkuXHJcbiAgICovXHJcbiAgT3JkaW5hbFZhcmlhYmxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBvbHljaG90b21vdXM6IEEgcG9seWNob3RvbW91cyB2YXJpYWJsZSBpcyBhIGNhdGVnb3JpY2FsIHZhcmlhYmxlIHdoaWNoIGlzIGRlZmluZWQgdG8gaGF2ZSBtaW5pbWFsbHkgMiBjYXRlZ29yaWVzIG9yIHBvc3NpYmxlIHZhbHVlcy4gKGZyb20gU1RBVE8gIGh0dHA6Ly9wdXJsLm9ib2xpYnJhcnkub3JnL29iby9TVEFUT18wMDAwMDg3KS4gIFN1Z2dlc3Rpb24gdG8gbGltaXQgY29kZSB1c2UgdG8gc2l0dWF0aW9ucyB3aGVuIG5laXRoZXIgZGljaG90b21vdXMgbm9yIG9yZGluYWwgdmFyaWFibGVzIGFwcGx5LlxyXG4gICAqL1xyXG4gIFBvbHljaG90b21vdXNWYXJpYWJsZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBoYW5kbGluZyBvZiB0aGUgdmFyaWFibGUgaW4gc3RhdGlzdGljYWwgYW5hbHlzaXMgZm9yIGV4cG9zdXJlcyBvciBvdXRjb21lcyAoRS5nLiBEaWNob3RvbW91cywgQ29udGludW91cywgRGVzY3JpcHRpdmUpLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZhcmlhYmxlSGFuZGxpbmdDb2RpbmdzOlZhcmlhYmxlSGFuZGxpbmdDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbnRpbnVvdXM6IEEgY29udGludW91cyB2YXJpYWJsZSBpcyBvbmUgZm9yIHdoaWNoLCB3aXRoaW4gdGhlIGxpbWl0cyB0aGUgdmFyaWFibGUgcmFuZ2VzLCBhbnkgdmFsdWUgaXMgcG9zc2libGUgKGZyb20gU1RBVE8gaHR0cDovL3B1cmwub2JvbGlicmFyeS5vcmcvb2JvL1NUQVRPXzAwMDAyNTEpLlxyXG4gICAqL1xyXG4gIENvbnRpbnVvdXNWYXJpYWJsZToge1xyXG4gICAgZGlzcGxheTogXCJjb250aW51b3VzIHZhcmlhYmxlXCIsXHJcbiAgICBjb2RlOiBcImNvbnRpbnVvdXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3ZhcmlhYmxlLWhhbmRsaW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkaWNob3RvbW91czogQSBkaWNob3RvbW91cyB2YXJpYWJsZSBpcyBhIGNhdGVnb3JpY2FsIHZhcmlhYmxlIHdoaWNoIGlzIGRlZmluZWQgdG8gaGF2ZSBvbmx5IDIgY2F0ZWdvcmllcyBvciBwb3NzaWJsZSB2YWx1ZXMgKGZyb20gU1RBVE8gaHR0cDovL3B1cmwub2JvbGlicmFyeS5vcmcvb2JvL1NUQVRPXzAwMDAwOTApLlxyXG4gICAqL1xyXG4gIERpY2hvdG9tb3VzVmFyaWFibGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZGljaG90b21vdXMgdmFyaWFibGVcIixcclxuICAgIGNvZGU6IFwiZGljaG90b21vdXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3ZhcmlhYmxlLWhhbmRsaW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvcmRpbmFsOiBBbiBvcmRpbmFsIHZhcmlhYmxlIGlzIGEgY2F0ZWdvcmljYWwgdmFyaWFibGUgd2hlcmUgdGhlIGRpc2NyZXRlIHBvc3NpYmxlIHZhbHVlcyBhcmUgb3JkZXJlZCBvciBjb3JyZXNwb25kIHRvIGFuIGltcGxpY2l0IHJhbmtpbmcgKGZyb20gU1RBVE8gaHR0cDovL3B1cmwub2JvbGlicmFyeS5vcmcvb2JvL1NUQVRPXzAwMDAyMjgpLlxyXG4gICAqL1xyXG4gIE9yZGluYWxWYXJpYWJsZToge1xyXG4gICAgZGlzcGxheTogXCJvcmRpbmFsIHZhcmlhYmxlXCIsXHJcbiAgICBjb2RlOiBcIm9yZGluYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3ZhcmlhYmxlLWhhbmRsaW5nXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwb2x5Y2hvdG9tb3VzOiBBIHBvbHljaG90b21vdXMgdmFyaWFibGUgaXMgYSBjYXRlZ29yaWNhbCB2YXJpYWJsZSB3aGljaCBpcyBkZWZpbmVkIHRvIGhhdmUgbWluaW1hbGx5IDIgY2F0ZWdvcmllcyBvciBwb3NzaWJsZSB2YWx1ZXMuIChmcm9tIFNUQVRPICBodHRwOi8vcHVybC5vYm9saWJyYXJ5Lm9yZy9vYm8vU1RBVE9fMDAwMDA4NykuICBTdWdnZXN0aW9uIHRvIGxpbWl0IGNvZGUgdXNlIHRvIHNpdHVhdGlvbnMgd2hlbiBuZWl0aGVyIGRpY2hvdG9tb3VzIG5vciBvcmRpbmFsIHZhcmlhYmxlcyBhcHBseS5cclxuICAgKi9cclxuICBQb2x5Y2hvdG9tb3VzVmFyaWFibGU6IHtcclxuICAgIGRpc3BsYXk6IFwicG9seWNob3RvbW91cyB2YXJpYWJsZVwiLFxyXG4gICAgY29kZTogXCJwb2x5Y2hvdG9tb3VzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92YXJpYWJsZS1oYW5kbGluZ1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==