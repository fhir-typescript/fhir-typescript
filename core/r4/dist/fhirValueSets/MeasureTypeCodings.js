// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-type|4.0.1
/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
export const MeasureTypeCodings = {
    /**
     * composite: A measure that combines multiple component measures in to a single quality measure.
     */
    Composite: {
        display: "Composite",
        code: "composite",
        system: "http://terminology.hl7.org/CodeSystem/measure-type",
    },
    /**
     * outcome: A measure that indicates the result of the performance (or non-performance) of a function or process.
     */
    Outcome: {
        display: "Outcome",
        code: "outcome",
        system: "http://terminology.hl7.org/CodeSystem/measure-type",
    },
    /**
     * patient-reported-outcome: A measure that focuses on patient-reported information such as patient engagement or patient experience measures.
     */
    PatientReportedOutcome: {
        display: "Patient Reported Outcome",
        code: "patient-reported-outcome",
        system: "http://terminology.hl7.org/CodeSystem/measure-type",
    },
    /**
     * process: A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.
     */
    Process: {
        display: "Process",
        code: "process",
        system: "http://terminology.hl7.org/CodeSystem/measure-type",
    },
    /**
     * structure: A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.
     */
    Structure: {
        display: "Structure",
        code: "structure",
        system: "http://terminology.hl7.org/CodeSystem/measure-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZVR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9NZWFzdXJlVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUVBQWlFO0FBOEJqRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUF5QjtJQUN0RDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0Q7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLG9EQUFvRDtLQUM3RDtJQUNEOztPQUVHO0lBQ0gsc0JBQXNCLEVBQUU7UUFDdEIsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0Q7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLG9EQUFvRDtLQUM3RDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLG9EQUFvRDtLQUM3RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVhc3VyZS10eXBlfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbWVhc3VyZSAoaW5jbHVkZXMgY29kZXMgZnJvbSAyLjE2Ljg0MC4xLjExMzg4My4xLjExLjIwMzY4KS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1lYXN1cmVUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb21wb3NpdGU6IEEgbWVhc3VyZSB0aGF0IGNvbWJpbmVzIG11bHRpcGxlIGNvbXBvbmVudCBtZWFzdXJlcyBpbiB0byBhIHNpbmdsZSBxdWFsaXR5IG1lYXN1cmUuXHJcbiAgICovXHJcbiAgQ29tcG9zaXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG91dGNvbWU6IEEgbWVhc3VyZSB0aGF0IGluZGljYXRlcyB0aGUgcmVzdWx0IG9mIHRoZSBwZXJmb3JtYW5jZSAob3Igbm9uLXBlcmZvcm1hbmNlKSBvZiBhIGZ1bmN0aW9uIG9yIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgT3V0Y29tZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYXRpZW50LXJlcG9ydGVkLW91dGNvbWU6IEEgbWVhc3VyZSB0aGF0IGZvY3VzZXMgb24gcGF0aWVudC1yZXBvcnRlZCBpbmZvcm1hdGlvbiBzdWNoIGFzIHBhdGllbnQgZW5nYWdlbWVudCBvciBwYXRpZW50IGV4cGVyaWVuY2UgbWVhc3VyZXMuXHJcbiAgICovXHJcbiAgUGF0aWVudFJlcG9ydGVkT3V0Y29tZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwcm9jZXNzOiBBIG1lYXN1cmUgd2hpY2ggZm9jdXNlcyBvbiBhIHByb2Nlc3Mgd2hpY2ggbGVhZHMgdG8gYSBjZXJ0YWluIG91dGNvbWUsIG1lYW5pbmcgdGhhdCBhIHNjaWVudGlmaWMgYmFzaXMgZXhpc3RzIGZvciBiZWxpZXZpbmcgdGhhdCB0aGUgcHJvY2Vzcywgd2hlbiBleGVjdXRlZCB3ZWxsLCB3aWxsIGluY3JlYXNlIHRoZSBwcm9iYWJpbGl0eSBvZiBhY2hpZXZpbmcgYSBkZXNpcmVkIG91dGNvbWUuXHJcbiAgICovXHJcbiAgUHJvY2VzczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdHJ1Y3R1cmU6IEEgbWVhc3VyZSB0aGF0IGZvY3VzZXMgb24gYSBoZWFsdGggY2FyZSBwcm92aWRlcidzIGNhcGFjaXR5LCBzeXN0ZW1zLCBhbmQgcHJvY2Vzc2VzIHRvIHByb3ZpZGUgaGlnaC1xdWFsaXR5IGNhcmUuXHJcbiAgICovXHJcbiAgU3RydWN0dXJlOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbWVhc3VyZSAoaW5jbHVkZXMgY29kZXMgZnJvbSAyLjE2Ljg0MC4xLjExMzg4My4xLjExLjIwMzY4KS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBNZWFzdXJlVHlwZUNvZGluZ3M6TWVhc3VyZVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBvc2l0ZTogQSBtZWFzdXJlIHRoYXQgY29tYmluZXMgbXVsdGlwbGUgY29tcG9uZW50IG1lYXN1cmVzIGluIHRvIGEgc2luZ2xlIHF1YWxpdHkgbWVhc3VyZS5cclxuICAgKi9cclxuICBDb21wb3NpdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcG9zaXRlXCIsXHJcbiAgICBjb2RlOiBcImNvbXBvc2l0ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVhc3VyZS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvdXRjb21lOiBBIG1lYXN1cmUgdGhhdCBpbmRpY2F0ZXMgdGhlIHJlc3VsdCBvZiB0aGUgcGVyZm9ybWFuY2UgKG9yIG5vbi1wZXJmb3JtYW5jZSkgb2YgYSBmdW5jdGlvbiBvciBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIE91dGNvbWU6IHtcclxuICAgIGRpc3BsYXk6IFwiT3V0Y29tZVwiLFxyXG4gICAgY29kZTogXCJvdXRjb21lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWFzdXJlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBhdGllbnQtcmVwb3J0ZWQtb3V0Y29tZTogQSBtZWFzdXJlIHRoYXQgZm9jdXNlcyBvbiBwYXRpZW50LXJlcG9ydGVkIGluZm9ybWF0aW9uIHN1Y2ggYXMgcGF0aWVudCBlbmdhZ2VtZW50IG9yIHBhdGllbnQgZXhwZXJpZW5jZSBtZWFzdXJlcy5cclxuICAgKi9cclxuICBQYXRpZW50UmVwb3J0ZWRPdXRjb21lOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBhdGllbnQgUmVwb3J0ZWQgT3V0Y29tZVwiLFxyXG4gICAgY29kZTogXCJwYXRpZW50LXJlcG9ydGVkLW91dGNvbWVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lYXN1cmUtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcHJvY2VzczogQSBtZWFzdXJlIHdoaWNoIGZvY3VzZXMgb24gYSBwcm9jZXNzIHdoaWNoIGxlYWRzIHRvIGEgY2VydGFpbiBvdXRjb21lLCBtZWFuaW5nIHRoYXQgYSBzY2llbnRpZmljIGJhc2lzIGV4aXN0cyBmb3IgYmVsaWV2aW5nIHRoYXQgdGhlIHByb2Nlc3MsIHdoZW4gZXhlY3V0ZWQgd2VsbCwgd2lsbCBpbmNyZWFzZSB0aGUgcHJvYmFiaWxpdHkgb2YgYWNoaWV2aW5nIGEgZGVzaXJlZCBvdXRjb21lLlxyXG4gICAqL1xyXG4gIFByb2Nlc3M6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJvY2Vzc1wiLFxyXG4gICAgY29kZTogXCJwcm9jZXNzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWFzdXJlLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0cnVjdHVyZTogQSBtZWFzdXJlIHRoYXQgZm9jdXNlcyBvbiBhIGhlYWx0aCBjYXJlIHByb3ZpZGVyJ3MgY2FwYWNpdHksIHN5c3RlbXMsIGFuZCBwcm9jZXNzZXMgdG8gcHJvdmlkZSBoaWdoLXF1YWxpdHkgY2FyZS5cclxuICAgKi9cclxuICBTdHJ1Y3R1cmU6IHtcclxuICAgIGRpc3BsYXk6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb2RlOiBcInN0cnVjdHVyZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVhc3VyZS10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19