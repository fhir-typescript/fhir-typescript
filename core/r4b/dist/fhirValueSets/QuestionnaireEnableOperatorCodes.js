// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-enable-operator|4.3.0
/**
 * The criteria by which a question is enabled.
 */
export const QuestionnaireEnableOperatorCodes = {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    NotEquals: "!=",
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    LessThan: "<",
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    LessOrEquals: "<=",
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    Equals: "=",
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    GreaterThan: ">",
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    GreaterOrEquals: ">=",
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    Exists: "exists",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1F1ZXN0aW9ubmFpcmVFbmFibGVPcGVyYXRvckNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLGtGQUFrRjtBQUVsRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdDQUFnQyxHQUFHO0lBQzlDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLElBQUk7SUFDZjs7T0FFRztJQUNILFFBQVEsRUFBRSxHQUFHO0lBQ2I7O09BRUc7SUFDSCxZQUFZLEVBQUUsSUFBSTtJQUNsQjs7T0FFRztJQUNILE1BQU0sRUFBRSxHQUFHO0lBQ1g7O09BRUc7SUFDSCxXQUFXLEVBQUUsR0FBRztJQUNoQjs7T0FFRztJQUNILGVBQWUsRUFBRSxJQUFJO0lBQ3JCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7Q0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9xdWVzdGlvbm5haXJlLWVuYWJsZS1vcGVyYXRvcnw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSBjcml0ZXJpYSBieSB3aGljaCBhIHF1ZXN0aW9uIGlzIGVuYWJsZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogIT06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBlcXVhbCB0byB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgTm90RXF1YWxzOiBcIiE9XCIsXHJcbiAgLyoqXHJcbiAgICogJmx0OzogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGxlc3MgdGhhbiB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgTGVzc1RoYW46IFwiPFwiLFxyXG4gIC8qKlxyXG4gICAqICZsdDs9OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgbm8gYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgbGVzcyBvciBlcXVhbCB0byB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgTGVzc09yRXF1YWxzOiBcIjw9XCIsXHJcbiAgLyoqXHJcbiAgICogPTogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG9uZSBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBlcXVhbCB0byB0aGUgZW5hYmxlV2hlbiBhbnN3ZXIuXHJcbiAgICovXHJcbiAgRXF1YWxzOiBcIj1cIixcclxuICAvKipcclxuICAgKiAmZ3Q7OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgbm8gYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBHcmVhdGVyVGhhbjogXCI+XCIsXHJcbiAgLyoqXHJcbiAgICogJmd0Oz06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBHcmVhdGVyT3JFcXVhbHM6IFwiPj1cIixcclxuICAvKipcclxuICAgKiBleGlzdHM6IFRydWUgaWYgd2hldGhlciBhbiBhbnN3ZXIgZXhpc3RzIGlzIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlciAod2hpY2ggbXVzdCBiZSBhIGJvb2xlYW4pLlxyXG4gICAqL1xyXG4gIEV4aXN0czogXCJleGlzdHNcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgY3JpdGVyaWEgYnkgd2hpY2ggYSBxdWVzdGlvbiBpcyBlbmFibGVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kZVR5cGUgPSB0eXBlb2YgUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kZXNba2V5b2YgdHlwZW9mIFF1ZXN0aW9ubmFpcmVFbmFibGVPcGVyYXRvckNvZGVzXTtcclxuIl19