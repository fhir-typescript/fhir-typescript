// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/concept-property-type|4.3.0
/**
 * The type of a property value.
 */
export const ConceptPropertyTypeCodings = {
    /**
     * boolean: The property value is a boolean true | false.
     */
    VALBoolean: {
        display: "boolean",
        code: "boolean",
        system: "http://hl7.org/fhir/concept-property-type",
    },
    /**
     * code: The property value is a code that identifies a concept defined in the code system.
     */
    CodeInternalReference: {
        display: "code (internal reference)",
        code: "code",
        system: "http://hl7.org/fhir/concept-property-type",
    },
    /**
     * Coding: The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.
     */
    CodingExternalReference: {
        display: "Coding (external reference)",
        code: "Coding",
        system: "http://hl7.org/fhir/concept-property-type",
    },
    /**
     * dateTime: The property is a date or a date + time.
     */
    DateTime: {
        display: "dateTime",
        code: "dateTime",
        system: "http://hl7.org/fhir/concept-property-type",
    },
    /**
     * decimal: The property value is a decimal number.
     */
    Decimal: {
        display: "decimal",
        code: "decimal",
        system: "http://hl7.org/fhir/concept-property-type",
    },
    /**
     * integer: The property value is a string (often used to assign ranking values to concepts for supporting score assessments).
     */
    Integer: {
        display: "integer",
        code: "integer",
        system: "http://hl7.org/fhir/concept-property-type",
    },
    /**
     * string: The property value is a string.
     */
    VALString: {
        display: "string",
        code: "string",
        system: "http://hl7.org/fhir/concept-property-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY2VwdFByb3BlcnR5VHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbmNlcHRQcm9wZXJ0eVR5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDBFQUEwRTtBQXNDMUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUM7SUFDdEU7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwyQ0FBMkM7S0FDcEQ7SUFDRDs7T0FFRztJQUNILHFCQUFxQixFQUFFO1FBQ3JCLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCx1QkFBdUIsRUFBRTtRQUN2QixPQUFPLEVBQUUsNkJBQTZCO1FBQ3RDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDJDQUEyQztLQUNwRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDJDQUEyQztLQUNwRDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwyQ0FBMkM7S0FDcEQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDJDQUEyQztLQUNwRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbmNlcHQtcHJvcGVydHktdHlwZXw0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIGEgcHJvcGVydHkgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb25jZXB0UHJvcGVydHlUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBib29sZWFuOiBUaGUgcHJvcGVydHkgdmFsdWUgaXMgYSBib29sZWFuIHRydWUgfCBmYWxzZS5cclxuICAgKi9cclxuICBWQUxCb29sZWFuOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNvZGU6IFRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhIGNvZGUgdGhhdCBpZGVudGlmaWVzIGEgY29uY2VwdCBkZWZpbmVkIGluIHRoZSBjb2RlIHN5c3RlbS5cclxuICAgKi9cclxuICBDb2RlSW50ZXJuYWxSZWZlcmVuY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kaW5nOiBUaGUgcHJvcGVydHkgIHZhbHVlIGlzIGEgY29kZSBkZWZpbmVkIGluIGFuIGV4dGVybmFsIGNvZGUgc3lzdGVtLiBUaGlzIG1heSBiZSB1c2VkIGZvciB0cmFuc2xhdGlvbnMsIGJ1dCBpcyBub3QgdGhlIGludGVudC5cclxuICAgKi9cclxuICBDb2RpbmdFeHRlcm5hbFJlZmVyZW5jZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkYXRlVGltZTogVGhlIHByb3BlcnR5IGlzIGEgZGF0ZSBvciBhIGRhdGUgKyB0aW1lLlxyXG4gICAqL1xyXG4gIERhdGVUaW1lOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRlY2ltYWw6IFRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhIGRlY2ltYWwgbnVtYmVyLlxyXG4gICAqL1xyXG4gIERlY2ltYWw6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW50ZWdlcjogVGhlIHByb3BlcnR5IHZhbHVlIGlzIGEgc3RyaW5nIChvZnRlbiB1c2VkIHRvIGFzc2lnbiByYW5raW5nIHZhbHVlcyB0byBjb25jZXB0cyBmb3Igc3VwcG9ydGluZyBzY29yZSBhc3Nlc3NtZW50cykuXHJcbiAgICovXHJcbiAgSW50ZWdlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdHJpbmc6IFRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhIHN0cmluZy5cclxuICAgKi9cclxuICBWQUxTdHJpbmc6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBhIHByb3BlcnR5IHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbmNlcHRQcm9wZXJ0eVR5cGVDb2RpbmdzOkNvbmNlcHRQcm9wZXJ0eVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJvb2xlYW46IFRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhIGJvb2xlYW4gdHJ1ZSB8IGZhbHNlLlxyXG4gICAqL1xyXG4gIFZBTEJvb2xlYW46IHtcclxuICAgIGRpc3BsYXk6IFwiYm9vbGVhblwiLFxyXG4gICAgY29kZTogXCJib29sZWFuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25jZXB0LXByb3BlcnR5LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNvZGU6IFRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhIGNvZGUgdGhhdCBpZGVudGlmaWVzIGEgY29uY2VwdCBkZWZpbmVkIGluIHRoZSBjb2RlIHN5c3RlbS5cclxuICAgKi9cclxuICBDb2RlSW50ZXJuYWxSZWZlcmVuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiY29kZSAoaW50ZXJuYWwgcmVmZXJlbmNlKVwiLFxyXG4gICAgY29kZTogXCJjb2RlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25jZXB0LXByb3BlcnR5LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGluZzogVGhlIHByb3BlcnR5ICB2YWx1ZSBpcyBhIGNvZGUgZGVmaW5lZCBpbiBhbiBleHRlcm5hbCBjb2RlIHN5c3RlbS4gVGhpcyBtYXkgYmUgdXNlZCBmb3IgdHJhbnNsYXRpb25zLCBidXQgaXMgbm90IHRoZSBpbnRlbnQuXHJcbiAgICovXHJcbiAgQ29kaW5nRXh0ZXJuYWxSZWZlcmVuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29kaW5nIChleHRlcm5hbCByZWZlcmVuY2UpXCIsXHJcbiAgICBjb2RlOiBcIkNvZGluZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29uY2VwdC1wcm9wZXJ0eS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkYXRlVGltZTogVGhlIHByb3BlcnR5IGlzIGEgZGF0ZSBvciBhIGRhdGUgKyB0aW1lLlxyXG4gICAqL1xyXG4gIERhdGVUaW1lOiB7XHJcbiAgICBkaXNwbGF5OiBcImRhdGVUaW1lXCIsXHJcbiAgICBjb2RlOiBcImRhdGVUaW1lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25jZXB0LXByb3BlcnR5LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRlY2ltYWw6IFRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhIGRlY2ltYWwgbnVtYmVyLlxyXG4gICAqL1xyXG4gIERlY2ltYWw6IHtcclxuICAgIGRpc3BsYXk6IFwiZGVjaW1hbFwiLFxyXG4gICAgY29kZTogXCJkZWNpbWFsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25jZXB0LXByb3BlcnR5LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGludGVnZXI6IFRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhIHN0cmluZyAob2Z0ZW4gdXNlZCB0byBhc3NpZ24gcmFua2luZyB2YWx1ZXMgdG8gY29uY2VwdHMgZm9yIHN1cHBvcnRpbmcgc2NvcmUgYXNzZXNzbWVudHMpLlxyXG4gICAqL1xyXG4gIEludGVnZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiaW50ZWdlclwiLFxyXG4gICAgY29kZTogXCJpbnRlZ2VyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25jZXB0LXByb3BlcnR5LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0cmluZzogVGhlIHByb3BlcnR5IHZhbHVlIGlzIGEgc3RyaW5nLlxyXG4gICAqL1xyXG4gIFZBTFN0cmluZzoge1xyXG4gICAgZGlzcGxheTogXCJzdHJpbmdcIixcclxuICAgIGNvZGU6IFwic3RyaW5nXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25jZXB0LXByb3BlcnR5LXR5cGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=