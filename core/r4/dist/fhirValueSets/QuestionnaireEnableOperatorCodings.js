// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-enable-operator|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * The criteria by which a question is enabled.
 */
export const QuestionnaireEnableOperatorCodings = {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    NotEquals: new Coding({
        display: "Not Equals",
        code: "!=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    }),
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    LessThan: new Coding({
        display: "Less Than",
        code: "<",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    }),
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    LessOrEquals: new Coding({
        display: "Less or Equals",
        code: "<=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    }),
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    Equals: new Coding({
        display: "Equals",
        code: "=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    }),
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    GreaterThan: new Coding({
        display: "Greater Than",
        code: ">",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    }),
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    GreaterOrEquals: new Coding({
        display: "Greater or Equals",
        code: ">=",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    }),
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    Exists: new Coding({
        display: "Exists",
        code: "exists",
        system: "http://hl7.org/fhir/questionnaire-enable-operator",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrRkFBa0Y7QUFFbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0NBQWtDLEdBQUc7SUFDaEQ7O09BRUc7SUFDSCxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDcEIsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVELENBQUM7SUFDRjs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNuQixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsWUFBWSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbURBQW1EO0tBQzVELENBQUM7SUFDRjs7T0FFRztJQUNILE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsV0FBVyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxlQUFlLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDMUIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtREFBbUQ7S0FDNUQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLG1EQUFtRDtLQUM1RCxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9xdWVzdGlvbm5haXJlLWVuYWJsZS1vcGVyYXRvcnw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIGNyaXRlcmlhIGJ5IHdoaWNoIGEgcXVlc3Rpb24gaXMgZW5hYmxlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBRdWVzdGlvbm5haXJlRW5hYmxlT3BlcmF0b3JDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqICE9OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgbm8gYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIE5vdEVxdWFsczogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCBFcXVhbHNcIixcclxuICAgIGNvZGU6IFwiIT1cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3F1ZXN0aW9ubmFpcmUtZW5hYmxlLW9wZXJhdG9yXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogJmx0OzogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGxlc3MgdGhhbiB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgTGVzc1RoYW46IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJMZXNzIFRoYW5cIixcclxuICAgIGNvZGU6IFwiPFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1lbmFibGUtb3BlcmF0b3JcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiAmbHQ7PTogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIExlc3NPckVxdWFsczogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkxlc3Mgb3IgRXF1YWxzXCIsXHJcbiAgICBjb2RlOiBcIjw9XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9xdWVzdGlvbm5haXJlLWVuYWJsZS1vcGVyYXRvclwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqID06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBvbmUgYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEVxdWFsczogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkVxdWFsc1wiLFxyXG4gICAgY29kZTogXCI9XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9xdWVzdGlvbm5haXJlLWVuYWJsZS1vcGVyYXRvclwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqICZndDs6IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBncmVhdGVyIHRoYW4gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEdyZWF0ZXJUaGFuOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiR3JlYXRlciBUaGFuXCIsXHJcbiAgICBjb2RlOiBcIj5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3F1ZXN0aW9ubmFpcmUtZW5hYmxlLW9wZXJhdG9yXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogJmd0Oz06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBHcmVhdGVyT3JFcXVhbHM6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJHcmVhdGVyIG9yIEVxdWFsc1wiLFxyXG4gICAgY29kZTogXCI+PVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcXVlc3Rpb25uYWlyZS1lbmFibGUtb3BlcmF0b3JcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBleGlzdHM6IFRydWUgaWYgd2hldGhlciBhbiBhbnN3ZXIgZXhpc3RzIGlzIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlciAod2hpY2ggbXVzdCBiZSBhIGJvb2xlYW4pLlxyXG4gICAqL1xyXG4gIEV4aXN0czogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkV4aXN0c1wiLFxyXG4gICAgY29kZTogXCJleGlzdHNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3F1ZXN0aW9ubmFpcmUtZW5hYmxlLW9wZXJhdG9yXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIGNyaXRlcmlhIGJ5IHdoaWNoIGEgcXVlc3Rpb24gaXMgZW5hYmxlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFF1ZXN0aW9ubmFpcmVFbmFibGVPcGVyYXRvckNvZGluZ1R5cGUgPSB0eXBlb2YgUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kaW5ncztcclxuIl19