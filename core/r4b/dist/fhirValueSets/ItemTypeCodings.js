// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/item-type|4.3.0
/**
 * Distinguishes groups from questions and display text and indicates data type for questions.
 */
export const ItemTypeCodings = {
    /**
     * attachment: Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).
     */
    Attachment: {
        display: "Attachment",
        code: "attachment",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * boolean: Question with a yes/no answer (valueBoolean).
     */
    Boolean: {
        display: "Boolean",
        code: "boolean",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * choice: Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).
     */
    Choice: {
        display: "Choice",
        code: "choice",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * date: Question with a date answer (valueDate).
     */
    Date: {
        display: "Date",
        code: "date",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * dateTime: Question with a date and time answer (valueDateTime).
     */
    DateTime: {
        display: "Date Time",
        code: "dateTime",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * decimal: Question with is a real number answer (valueDecimal).
     */
    Decimal: {
        display: "Decimal",
        code: "decimal",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * display: Text for display that will not capture an answer or have child items.
     */
    Display: {
        display: "Display",
        code: "display",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * group: An item with no direct answer but should have at least one child item.
     */
    Group: {
        display: "Group",
        code: "group",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * integer: Question with an integer answer (valueInteger).
     */
    Integer: {
        display: "Integer",
        code: "integer",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * open-choice: Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).
     */
    OpenChoice: {
        display: "Open Choice",
        code: "open-choice",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * quantity: Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity) There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).
     */
    Quantity: {
        display: "Quantity",
        code: "quantity",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * question: An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).
     */
    Question: {
        display: "Question",
        code: "question",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * reference: Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).
     */
    Reference: {
        display: "Reference",
        code: "reference",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * string: Question with a short (few words to short sentence) free-text entry answer (valueString).
     */
    String: {
        display: "String",
        code: "string",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * text: Question with a long (potentially multi-paragraph) free-text entry answer (valueString).
     */
    Text: {
        display: "Text",
        code: "text",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * time: Question with a time (hour:minute:second) answer independent of date. (valueTime).
     */
    Time: {
        display: "Time",
        code: "time",
        system: "http://hl7.org/fhir/item-type",
    },
    /**
     * url: Question with a URL (website, FTP site, etc.) answer (valueUri).
     */
    Url: {
        display: "Url",
        code: "url",
        system: "http://hl7.org/fhir/item-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbVR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9JdGVtVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOERBQThEO0FBOEU5RDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBc0I7SUFDaEQ7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsK0JBQStCO0tBQ3hDO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsK0JBQStCO0tBQ3hDO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsK0JBQStCO0tBQ3hDO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLCtCQUErQjtLQUN4QztJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsK0JBQStCO0tBQ3hDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaXRlbS10eXBlfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogRGlzdGluZ3Vpc2hlcyBncm91cHMgZnJvbSBxdWVzdGlvbnMgYW5kIGRpc3BsYXkgdGV4dCBhbmQgaW5kaWNhdGVzIGRhdGEgdHlwZSBmb3IgcXVlc3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSXRlbVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGF0dGFjaG1lbnQ6IFF1ZXN0aW9uIHdpdGggYmluYXJ5IGNvbnRlbnQgc3VjaCBhcyBhbiBpbWFnZSwgUERGLCBldGMuIGFzIGFuIGFuc3dlciAodmFsdWVBdHRhY2htZW50KS5cclxuICAgKi9cclxuICBBdHRhY2htZW50OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGJvb2xlYW46IFF1ZXN0aW9uIHdpdGggYSB5ZXMvbm8gYW5zd2VyICh2YWx1ZUJvb2xlYW4pLlxyXG4gICAqL1xyXG4gIEJvb2xlYW46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY2hvaWNlOiBRdWVzdGlvbiB3aXRoIGEgQ29kaW5nIGRyYXduIGZyb20gYSBsaXN0IG9mIHBvc3NpYmxlIGFuc3dlcnMgKHNwZWNpZmllZCBpbiBlaXRoZXIgdGhlIGFuc3dlck9wdGlvbiBwcm9wZXJ0eSwgb3IgdmlhIHRoZSB2YWx1ZXNldCByZWZlcmVuY2VkIGluIHRoZSBhbnN3ZXJWYWx1ZVNldCBwcm9wZXJ0eSkgYXMgYW4gYW5zd2VyICh2YWx1ZUNvZGluZykuXHJcbiAgICovXHJcbiAgQ2hvaWNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRhdGU6IFF1ZXN0aW9uIHdpdGggYSBkYXRlIGFuc3dlciAodmFsdWVEYXRlKS5cclxuICAgKi9cclxuICBEYXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRhdGVUaW1lOiBRdWVzdGlvbiB3aXRoIGEgZGF0ZSBhbmQgdGltZSBhbnN3ZXIgKHZhbHVlRGF0ZVRpbWUpLlxyXG4gICAqL1xyXG4gIERhdGVUaW1lOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRlY2ltYWw6IFF1ZXN0aW9uIHdpdGggaXMgYSByZWFsIG51bWJlciBhbnN3ZXIgKHZhbHVlRGVjaW1hbCkuXHJcbiAgICovXHJcbiAgRGVjaW1hbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkaXNwbGF5OiBUZXh0IGZvciBkaXNwbGF5IHRoYXQgd2lsbCBub3QgY2FwdHVyZSBhbiBhbnN3ZXIgb3IgaGF2ZSBjaGlsZCBpdGVtcy5cclxuICAgKi9cclxuICBEaXNwbGF5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGdyb3VwOiBBbiBpdGVtIHdpdGggbm8gZGlyZWN0IGFuc3dlciBidXQgc2hvdWxkIGhhdmUgYXQgbGVhc3Qgb25lIGNoaWxkIGl0ZW0uXHJcbiAgICovXHJcbiAgR3JvdXA6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW50ZWdlcjogUXVlc3Rpb24gd2l0aCBhbiBpbnRlZ2VyIGFuc3dlciAodmFsdWVJbnRlZ2VyKS5cclxuICAgKi9cclxuICBJbnRlZ2VyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9wZW4tY2hvaWNlOiBBbnN3ZXIgaXMgYSBDb2RpbmcgZHJhd24gZnJvbSBhIGxpc3Qgb2YgcG9zc2libGUgYW5zd2VycyAoYXMgd2l0aCB0aGUgY2hvaWNlIHR5cGUpIG9yIGEgZnJlZS10ZXh0IGVudHJ5IGluIGEgc3RyaW5nICh2YWx1ZUNvZGluZyBvciB2YWx1ZVN0cmluZykuXHJcbiAgICovXHJcbiAgT3BlbkNob2ljZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBxdWFudGl0eTogUXVlc3Rpb24gd2l0aCBhIGNvbWJpbmF0aW9uIG9mIGEgbnVtZXJpYyB2YWx1ZSBhbmQgdW5pdCwgcG90ZW50aWFsbHkgd2l0aCBhIGNvbXBhcmF0b3IgKCZsdDssICZndDssIGV0Yy4pIGFzIGFuIGFuc3dlci4gKHZhbHVlUXVhbnRpdHkpIFRoZXJlIGlzIGFuIGV4dGVuc2lvbiAnaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL3F1ZXN0aW9ubmFpcmUtdW5pdCcgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgd2hhdCB1bml0IHNob3VsZCBiZSBjYXB0dXJlZCAob3IgdGhlIHVuaXQgdGhhdCBoYXMgYSB1Y3VtIGNvbnZlcnNpb24gZnJvbSB0aGUgcHJvdmlkZWQgdW5pdCkuXHJcbiAgICovXHJcbiAgUXVhbnRpdHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcXVlc3Rpb246IEFuIGl0ZW0gdGhhdCBkZWZpbmVzIGEgc3BlY2lmaWMgYW5zd2VyIHRvIGJlIGNhcHR1cmVkLCBhbmQgd2hpY2ggbWF5IGhhdmUgY2hpbGQgaXRlbXMuICh0aGUgYW5zd2VyIHByb3ZpZGVkIGluIHRoZSBRdWVzdGlvbm5haXJlUmVzcG9uc2Ugc2hvdWxkIGJlIG9mIHRoZSBkZWZpbmVkIGRhdGF0eXBlKS5cclxuICAgKi9cclxuICBRdWVzdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWZlcmVuY2U6IFF1ZXN0aW9uIHdpdGggYSByZWZlcmVuY2UgdG8gYW5vdGhlciByZXNvdXJjZSAocHJhY3RpdGlvbmVyLCBvcmdhbml6YXRpb24sIGV0Yy4pIGFzIGFuIGFuc3dlciAodmFsdWVSZWZlcmVuY2UpLlxyXG4gICAqL1xyXG4gIFJlZmVyZW5jZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdHJpbmc6IFF1ZXN0aW9uIHdpdGggYSBzaG9ydCAoZmV3IHdvcmRzIHRvIHNob3J0IHNlbnRlbmNlKSBmcmVlLXRleHQgZW50cnkgYW5zd2VyICh2YWx1ZVN0cmluZykuXHJcbiAgICovXHJcbiAgU3RyaW5nOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHRleHQ6IFF1ZXN0aW9uIHdpdGggYSBsb25nIChwb3RlbnRpYWxseSBtdWx0aS1wYXJhZ3JhcGgpIGZyZWUtdGV4dCBlbnRyeSBhbnN3ZXIgKHZhbHVlU3RyaW5nKS5cclxuICAgKi9cclxuICBUZXh0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHRpbWU6IFF1ZXN0aW9uIHdpdGggYSB0aW1lIChob3VyOm1pbnV0ZTpzZWNvbmQpIGFuc3dlciBpbmRlcGVuZGVudCBvZiBkYXRlLiAodmFsdWVUaW1lKS5cclxuICAgKi9cclxuICBUaW1lOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVybDogUXVlc3Rpb24gd2l0aCBhIFVSTCAod2Vic2l0ZSwgRlRQIHNpdGUsIGV0Yy4pIGFuc3dlciAodmFsdWVVcmkpLlxyXG4gICAqL1xyXG4gIFVybDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3Rpbmd1aXNoZXMgZ3JvdXBzIGZyb20gcXVlc3Rpb25zIGFuZCBkaXNwbGF5IHRleHQgYW5kIGluZGljYXRlcyBkYXRhIHR5cGUgZm9yIHF1ZXN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJdGVtVHlwZUNvZGluZ3M6SXRlbVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGF0dGFjaG1lbnQ6IFF1ZXN0aW9uIHdpdGggYmluYXJ5IGNvbnRlbnQgc3VjaCBhcyBhbiBpbWFnZSwgUERGLCBldGMuIGFzIGFuIGFuc3dlciAodmFsdWVBdHRhY2htZW50KS5cclxuICAgKi9cclxuICBBdHRhY2htZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIkF0dGFjaG1lbnRcIixcclxuICAgIGNvZGU6IFwiYXR0YWNobWVudFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXRlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBib29sZWFuOiBRdWVzdGlvbiB3aXRoIGEgeWVzL25vIGFuc3dlciAodmFsdWVCb29sZWFuKS5cclxuICAgKi9cclxuICBCb29sZWFuOiB7XHJcbiAgICBkaXNwbGF5OiBcIkJvb2xlYW5cIixcclxuICAgIGNvZGU6IFwiYm9vbGVhblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXRlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjaG9pY2U6IFF1ZXN0aW9uIHdpdGggYSBDb2RpbmcgZHJhd24gZnJvbSBhIGxpc3Qgb2YgcG9zc2libGUgYW5zd2VycyAoc3BlY2lmaWVkIGluIGVpdGhlciB0aGUgYW5zd2VyT3B0aW9uIHByb3BlcnR5LCBvciB2aWEgdGhlIHZhbHVlc2V0IHJlZmVyZW5jZWQgaW4gdGhlIGFuc3dlclZhbHVlU2V0IHByb3BlcnR5KSBhcyBhbiBhbnN3ZXIgKHZhbHVlQ29kaW5nKS5cclxuICAgKi9cclxuICBDaG9pY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiQ2hvaWNlXCIsXHJcbiAgICBjb2RlOiBcImNob2ljZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXRlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkYXRlOiBRdWVzdGlvbiB3aXRoIGEgZGF0ZSBhbnN3ZXIgKHZhbHVlRGF0ZSkuXHJcbiAgICovXHJcbiAgRGF0ZToge1xyXG4gICAgZGlzcGxheTogXCJEYXRlXCIsXHJcbiAgICBjb2RlOiBcImRhdGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2l0ZW0tdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGF0ZVRpbWU6IFF1ZXN0aW9uIHdpdGggYSBkYXRlIGFuZCB0aW1lIGFuc3dlciAodmFsdWVEYXRlVGltZSkuXHJcbiAgICovXHJcbiAgRGF0ZVRpbWU6IHtcclxuICAgIGRpc3BsYXk6IFwiRGF0ZSBUaW1lXCIsXHJcbiAgICBjb2RlOiBcImRhdGVUaW1lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pdGVtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRlY2ltYWw6IFF1ZXN0aW9uIHdpdGggaXMgYSByZWFsIG51bWJlciBhbnN3ZXIgKHZhbHVlRGVjaW1hbCkuXHJcbiAgICovXHJcbiAgRGVjaW1hbDoge1xyXG4gICAgZGlzcGxheTogXCJEZWNpbWFsXCIsXHJcbiAgICBjb2RlOiBcImRlY2ltYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2l0ZW0tdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGlzcGxheTogVGV4dCBmb3IgZGlzcGxheSB0aGF0IHdpbGwgbm90IGNhcHR1cmUgYW4gYW5zd2VyIG9yIGhhdmUgY2hpbGQgaXRlbXMuXHJcbiAgICovXHJcbiAgRGlzcGxheToge1xyXG4gICAgZGlzcGxheTogXCJEaXNwbGF5XCIsXHJcbiAgICBjb2RlOiBcImRpc3BsYXlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2l0ZW0tdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZ3JvdXA6IEFuIGl0ZW0gd2l0aCBubyBkaXJlY3QgYW5zd2VyIGJ1dCBzaG91bGQgaGF2ZSBhdCBsZWFzdCBvbmUgY2hpbGQgaXRlbS5cclxuICAgKi9cclxuICBHcm91cDoge1xyXG4gICAgZGlzcGxheTogXCJHcm91cFwiLFxyXG4gICAgY29kZTogXCJncm91cFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXRlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbnRlZ2VyOiBRdWVzdGlvbiB3aXRoIGFuIGludGVnZXIgYW5zd2VyICh2YWx1ZUludGVnZXIpLlxyXG4gICAqL1xyXG4gIEludGVnZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiSW50ZWdlclwiLFxyXG4gICAgY29kZTogXCJpbnRlZ2VyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pdGVtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9wZW4tY2hvaWNlOiBBbnN3ZXIgaXMgYSBDb2RpbmcgZHJhd24gZnJvbSBhIGxpc3Qgb2YgcG9zc2libGUgYW5zd2VycyAoYXMgd2l0aCB0aGUgY2hvaWNlIHR5cGUpIG9yIGEgZnJlZS10ZXh0IGVudHJ5IGluIGEgc3RyaW5nICh2YWx1ZUNvZGluZyBvciB2YWx1ZVN0cmluZykuXHJcbiAgICovXHJcbiAgT3BlbkNob2ljZToge1xyXG4gICAgZGlzcGxheTogXCJPcGVuIENob2ljZVwiLFxyXG4gICAgY29kZTogXCJvcGVuLWNob2ljZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXRlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBxdWFudGl0eTogUXVlc3Rpb24gd2l0aCBhIGNvbWJpbmF0aW9uIG9mIGEgbnVtZXJpYyB2YWx1ZSBhbmQgdW5pdCwgcG90ZW50aWFsbHkgd2l0aCBhIGNvbXBhcmF0b3IgKCZsdDssICZndDssIGV0Yy4pIGFzIGFuIGFuc3dlci4gKHZhbHVlUXVhbnRpdHkpIFRoZXJlIGlzIGFuIGV4dGVuc2lvbiAnaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL3F1ZXN0aW9ubmFpcmUtdW5pdCcgdGhhdCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgd2hhdCB1bml0IHNob3VsZCBiZSBjYXB0dXJlZCAob3IgdGhlIHVuaXQgdGhhdCBoYXMgYSB1Y3VtIGNvbnZlcnNpb24gZnJvbSB0aGUgcHJvdmlkZWQgdW5pdCkuXHJcbiAgICovXHJcbiAgUXVhbnRpdHk6IHtcclxuICAgIGRpc3BsYXk6IFwiUXVhbnRpdHlcIixcclxuICAgIGNvZGU6IFwicXVhbnRpdHlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2l0ZW0tdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcXVlc3Rpb246IEFuIGl0ZW0gdGhhdCBkZWZpbmVzIGEgc3BlY2lmaWMgYW5zd2VyIHRvIGJlIGNhcHR1cmVkLCBhbmQgd2hpY2ggbWF5IGhhdmUgY2hpbGQgaXRlbXMuICh0aGUgYW5zd2VyIHByb3ZpZGVkIGluIHRoZSBRdWVzdGlvbm5haXJlUmVzcG9uc2Ugc2hvdWxkIGJlIG9mIHRoZSBkZWZpbmVkIGRhdGF0eXBlKS5cclxuICAgKi9cclxuICBRdWVzdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJRdWVzdGlvblwiLFxyXG4gICAgY29kZTogXCJxdWVzdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXRlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWZlcmVuY2U6IFF1ZXN0aW9uIHdpdGggYSByZWZlcmVuY2UgdG8gYW5vdGhlciByZXNvdXJjZSAocHJhY3RpdGlvbmVyLCBvcmdhbml6YXRpb24sIGV0Yy4pIGFzIGFuIGFuc3dlciAodmFsdWVSZWZlcmVuY2UpLlxyXG4gICAqL1xyXG4gIFJlZmVyZW5jZToge1xyXG4gICAgZGlzcGxheTogXCJSZWZlcmVuY2VcIixcclxuICAgIGNvZGU6IFwicmVmZXJlbmNlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pdGVtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0cmluZzogUXVlc3Rpb24gd2l0aCBhIHNob3J0IChmZXcgd29yZHMgdG8gc2hvcnQgc2VudGVuY2UpIGZyZWUtdGV4dCBlbnRyeSBhbnN3ZXIgKHZhbHVlU3RyaW5nKS5cclxuICAgKi9cclxuICBTdHJpbmc6IHtcclxuICAgIGRpc3BsYXk6IFwiU3RyaW5nXCIsXHJcbiAgICBjb2RlOiBcInN0cmluZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXRlbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB0ZXh0OiBRdWVzdGlvbiB3aXRoIGEgbG9uZyAocG90ZW50aWFsbHkgbXVsdGktcGFyYWdyYXBoKSBmcmVlLXRleHQgZW50cnkgYW5zd2VyICh2YWx1ZVN0cmluZykuXHJcbiAgICovXHJcbiAgVGV4dDoge1xyXG4gICAgZGlzcGxheTogXCJUZXh0XCIsXHJcbiAgICBjb2RlOiBcInRleHRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2l0ZW0tdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdGltZTogUXVlc3Rpb24gd2l0aCBhIHRpbWUgKGhvdXI6bWludXRlOnNlY29uZCkgYW5zd2VyIGluZGVwZW5kZW50IG9mIGRhdGUuICh2YWx1ZVRpbWUpLlxyXG4gICAqL1xyXG4gIFRpbWU6IHtcclxuICAgIGRpc3BsYXk6IFwiVGltZVwiLFxyXG4gICAgY29kZTogXCJ0aW1lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pdGVtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHVybDogUXVlc3Rpb24gd2l0aCBhIFVSTCAod2Vic2l0ZSwgRlRQIHNpdGUsIGV0Yy4pIGFuc3dlciAodmFsdWVVcmkpLlxyXG4gICAqL1xyXG4gIFVybDoge1xyXG4gICAgZGlzcGxheTogXCJVcmxcIixcclxuICAgIGNvZGU6IFwidXJsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pdGVtLXR5cGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=