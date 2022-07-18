// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-enable-operator|4.3.0
/**
 * The criteria by which a question is enabled.
 */
export const QuestionnaireEnableOperatorCodings = {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    NotEquals: {
        display: "Not Equals",
        code: "!=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    },
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    LessThan: {
        display: "Less Than",
        code: "<",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    },
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    LessOrEquals: {
        display: "Less or Equals",
        code: "<=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    },
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    Equals: {
        display: "Equals",
        code: "=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    },
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    GreaterThan: {
        display: "Greater Than",
        code: ">",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    },
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    GreaterOrEquals: {
        display: "Greater or Equals",
        code: ">=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    },
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    Exists: {
        display: "Exists",
        code: "exists",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxrRkFBa0Y7QUFzQ2xGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0NBQWtDLEdBQXlDO0lBQ3RGOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtJQUNEOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3F1ZXN0aW9ubmFpcmUtZW5hYmxlLW9wZXJhdG9yfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIGNyaXRlcmlhIGJ5IHdoaWNoIGEgcXVlc3Rpb24gaXMgZW5hYmxlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFF1ZXN0aW9ubmFpcmVFbmFibGVPcGVyYXRvckNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogIT06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBlcXVhbCB0byB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgTm90RXF1YWxzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqICZsdDs6IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBsZXNzIHRoYW4gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIExlc3NUaGFuOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqICZsdDs9OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgbm8gYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgbGVzcyBvciBlcXVhbCB0byB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgTGVzc09yRXF1YWxzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqID06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBvbmUgYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEVxdWFsczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAmZ3Q7OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgbm8gYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBHcmVhdGVyVGhhbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAmZ3Q7PTogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEdyZWF0ZXJPckVxdWFsczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBleGlzdHM6IFRydWUgaWYgd2hldGhlciBhbiBhbnN3ZXIgZXhpc3RzIGlzIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlciAod2hpY2ggbXVzdCBiZSBhIGJvb2xlYW4pLlxyXG4gICAqL1xyXG4gIEV4aXN0czogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBjcml0ZXJpYSBieSB3aGljaCBhIHF1ZXN0aW9uIGlzIGVuYWJsZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kaW5nczpRdWVzdGlvbm5haXJlRW5hYmxlT3BlcmF0b3JDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqICE9OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgbm8gYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIE5vdEVxdWFsczoge1xyXG4gICAgZGlzcGxheTogXCJOb3QgRXF1YWxzXCIsXHJcbiAgICBjb2RlOiBcIiE9XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9xdWVzdGlvbm5haXJlLWVuYWJsZS1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogJmx0OzogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGxlc3MgdGhhbiB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgTGVzc1RoYW46IHtcclxuICAgIGRpc3BsYXk6IFwiTGVzcyBUaGFuXCIsXHJcbiAgICBjb2RlOiBcIjxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3F1ZXN0aW9ubmFpcmUtZW5hYmxlLW9wZXJhdG9yXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAmbHQ7PTogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIExlc3NPckVxdWFsczoge1xyXG4gICAgZGlzcGxheTogXCJMZXNzIG9yIEVxdWFsc1wiLFxyXG4gICAgY29kZTogXCI8PVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1lbmFibGUtb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqID06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBvbmUgYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEVxdWFsczoge1xyXG4gICAgZGlzcGxheTogXCJFcXVhbHNcIixcclxuICAgIGNvZGU6IFwiPVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1lbmFibGUtb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqICZndDs6IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBncmVhdGVyIHRoYW4gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEdyZWF0ZXJUaGFuOiB7XHJcbiAgICBkaXNwbGF5OiBcIkdyZWF0ZXIgVGhhblwiLFxyXG4gICAgY29kZTogXCI+XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9xdWVzdGlvbm5haXJlLWVuYWJsZS1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogJmd0Oz06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBHcmVhdGVyT3JFcXVhbHM6IHtcclxuICAgIGRpc3BsYXk6IFwiR3JlYXRlciBvciBFcXVhbHNcIixcclxuICAgIGNvZGU6IFwiPj1cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3F1ZXN0aW9ubmFpcmUtZW5hYmxlLW9wZXJhdG9yXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleGlzdHM6IFRydWUgaWYgd2hldGhlciBhbiBhbnN3ZXIgZXhpc3RzIGlzIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlciAod2hpY2ggbXVzdCBiZSBhIGJvb2xlYW4pLlxyXG4gICAqL1xyXG4gIEV4aXN0czoge1xyXG4gICAgZGlzcGxheTogXCJFeGlzdHNcIixcclxuICAgIGNvZGU6IFwiZXhpc3RzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9xdWVzdGlvbm5haXJlLWVuYWJsZS1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==