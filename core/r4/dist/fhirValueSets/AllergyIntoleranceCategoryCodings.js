// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergy-intolerance-category|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Category of an identified substance associated with allergies or intolerances.
 */
export const AllergyIntoleranceCategoryCodings = {
    /**
     * biologic: A preparation that is synthesized from living organisms or their products, especially a human or animal protein, such as a hormone or antitoxin, that is used as a diagnostic, preventive, or therapeutic agent. Examples of biologic medications include: vaccines; allergenic extracts, which are used for both diagnosis and treatment (for example, allergy shots); gene therapies; cellular therapies.  There are other biologic products, such as tissues, which are not typically associated with allergies.
     */
    Biologic: new Coding({
        display: "Biologic",
        code: "biologic",
        system: "http://hl7.org/fhir/allergy-intolerance-category",
    }),
    /**
     * environment: Any substances that are encountered in the environment, including any substance not already classified as food, medication, or biologic.
     */
    Environment: new Coding({
        display: "Environment",
        code: "environment",
        system: "http://hl7.org/fhir/allergy-intolerance-category",
    }),
    /**
     * food: Any substance consumed to provide nutritional support for the body.
     */
    Food: new Coding({
        display: "Food",
        code: "food",
        system: "http://hl7.org/fhir/allergy-intolerance-category",
    }),
    /**
     * medication: Substances administered to achieve a physiological effect.
     */
    Medication: new Coding({
        display: "Medication",
        code: "medication",
        system: "http://hl7.org/fhir/allergy-intolerance-category",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJneUludG9sZXJhbmNlQ2F0ZWdvcnlDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BbGxlcmd5SW50b2xlcmFuY2VDYXRlZ29yeUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBRWpGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFHO0lBQy9DOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ25CLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gsV0FBVyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gsVUFBVSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3JCLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0QsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWxsZXJneS1pbnRvbGVyYW5jZS1jYXRlZ29yeXw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQ2F0ZWdvcnkgb2YgYW4gaWRlbnRpZmllZCBzdWJzdGFuY2UgYXNzb2NpYXRlZCB3aXRoIGFsbGVyZ2llcyBvciBpbnRvbGVyYW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWxsZXJneUludG9sZXJhbmNlQ2F0ZWdvcnlDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGJpb2xvZ2ljOiBBIHByZXBhcmF0aW9uIHRoYXQgaXMgc3ludGhlc2l6ZWQgZnJvbSBsaXZpbmcgb3JnYW5pc21zIG9yIHRoZWlyIHByb2R1Y3RzLCBlc3BlY2lhbGx5IGEgaHVtYW4gb3IgYW5pbWFsIHByb3RlaW4sIHN1Y2ggYXMgYSBob3Jtb25lIG9yIGFudGl0b3hpbiwgdGhhdCBpcyB1c2VkIGFzIGEgZGlhZ25vc3RpYywgcHJldmVudGl2ZSwgb3IgdGhlcmFwZXV0aWMgYWdlbnQuIEV4YW1wbGVzIG9mIGJpb2xvZ2ljIG1lZGljYXRpb25zIGluY2x1ZGU6IHZhY2NpbmVzOyBhbGxlcmdlbmljIGV4dHJhY3RzLCB3aGljaCBhcmUgdXNlZCBmb3IgYm90aCBkaWFnbm9zaXMgYW5kIHRyZWF0bWVudCAoZm9yIGV4YW1wbGUsIGFsbGVyZ3kgc2hvdHMpOyBnZW5lIHRoZXJhcGllczsgY2VsbHVsYXIgdGhlcmFwaWVzLiAgVGhlcmUgYXJlIG90aGVyIGJpb2xvZ2ljIHByb2R1Y3RzLCBzdWNoIGFzIHRpc3N1ZXMsIHdoaWNoIGFyZSBub3QgdHlwaWNhbGx5IGFzc29jaWF0ZWQgd2l0aCBhbGxlcmdpZXMuXHJcbiAgICovXHJcbiAgQmlvbG9naWM6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJCaW9sb2dpY1wiLFxyXG4gICAgY29kZTogXCJiaW9sb2dpY1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS1pbnRvbGVyYW5jZS1jYXRlZ29yeVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGVudmlyb25tZW50OiBBbnkgc3Vic3RhbmNlcyB0aGF0IGFyZSBlbmNvdW50ZXJlZCBpbiB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZyBhbnkgc3Vic3RhbmNlIG5vdCBhbHJlYWR5IGNsYXNzaWZpZWQgYXMgZm9vZCwgbWVkaWNhdGlvbiwgb3IgYmlvbG9naWMuXHJcbiAgICovXHJcbiAgRW52aXJvbm1lbnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJFbnZpcm9ubWVudFwiLFxyXG4gICAgY29kZTogXCJlbnZpcm9ubWVudFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS1pbnRvbGVyYW5jZS1jYXRlZ29yeVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGZvb2Q6IEFueSBzdWJzdGFuY2UgY29uc3VtZWQgdG8gcHJvdmlkZSBudXRyaXRpb25hbCBzdXBwb3J0IGZvciB0aGUgYm9keS5cclxuICAgKi9cclxuICBGb29kOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiRm9vZFwiLFxyXG4gICAgY29kZTogXCJmb29kXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hbGxlcmd5LWludG9sZXJhbmNlLWNhdGVnb3J5XCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogbWVkaWNhdGlvbjogU3Vic3RhbmNlcyBhZG1pbmlzdGVyZWQgdG8gYWNoaWV2ZSBhIHBoeXNpb2xvZ2ljYWwgZWZmZWN0LlxyXG4gICAqL1xyXG4gIE1lZGljYXRpb246IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJNZWRpY2F0aW9uXCIsXHJcbiAgICBjb2RlOiBcIm1lZGljYXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FsbGVyZ3ktaW50b2xlcmFuY2UtY2F0ZWdvcnlcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDYXRlZ29yeSBvZiBhbiBpZGVudGlmaWVkIHN1YnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggYWxsZXJnaWVzIG9yIGludG9sZXJhbmNlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFsbGVyZ3lJbnRvbGVyYW5jZUNhdGVnb3J5Q29kaW5nVHlwZSA9IHR5cGVvZiBBbGxlcmd5SW50b2xlcmFuY2VDYXRlZ29yeUNvZGluZ3M7XHJcbiJdfQ==