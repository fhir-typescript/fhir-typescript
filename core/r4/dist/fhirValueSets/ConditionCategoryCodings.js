// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-category|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Preferred value set for Condition Categories.
 */
export const ConditionCategoryCodings = {
    /**
     * encounter-diagnosis: A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.
     */
    EncounterDiagnosis: new Coding({
        display: "Encounter Diagnosis",
        code: "encounter-diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
    }),
    /**
     * problem-list-item: An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.
     */
    ProblemListItem: new Coding({
        display: "Problem List Item",
        code: "problem-list-item",
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uQ2F0ZWdvcnlDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db25kaXRpb25DYXRlZ29yeUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBRXZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHO0lBQ3RDOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDN0IsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLE1BQU0sRUFBRSwwREFBMEQ7S0FDbkUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsZUFBZSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixNQUFNLEVBQUUsMERBQTBEO0tBQ25FLENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbmRpdGlvbi1jYXRlZ29yeXw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogUHJlZmVycmVkIHZhbHVlIHNldCBmb3IgQ29uZGl0aW9uIENhdGVnb3JpZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uZGl0aW9uQ2F0ZWdvcnlDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGVuY291bnRlci1kaWFnbm9zaXM6IEEgcG9pbnQgaW4gdGltZSBkaWFnbm9zaXMgKGUuZy4gZnJvbSBhIHBoeXNpY2lhbiBvciBudXJzZSkgaW4gY29udGV4dCBvZiBhbiBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgRW5jb3VudGVyRGlhZ25vc2lzOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiRW5jb3VudGVyIERpYWdub3Npc1wiLFxyXG4gICAgY29kZTogXCJlbmNvdW50ZXItZGlhZ25vc2lzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tY2F0ZWdvcnlcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBwcm9ibGVtLWxpc3QtaXRlbTogQW4gaXRlbSBvbiBhIHByb2JsZW0gbGlzdCB0aGF0IGNhbiBiZSBtYW5hZ2VkIG92ZXIgdGltZSBhbmQgY2FuIGJlIGV4cHJlc3NlZCBieSBhIHByYWN0aXRpb25lciAoZS5nLiBwaHlzaWNpYW4sIG51cnNlKSwgcGF0aWVudCwgb3IgcmVsYXRlZCBwZXJzb24uXHJcbiAgICovXHJcbiAgUHJvYmxlbUxpc3RJdGVtOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUHJvYmxlbSBMaXN0IEl0ZW1cIixcclxuICAgIGNvZGU6IFwicHJvYmxlbS1saXN0LWl0ZW1cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NvbmRpdGlvbi1jYXRlZ29yeVwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFByZWZlcnJlZCB2YWx1ZSBzZXQgZm9yIENvbmRpdGlvbiBDYXRlZ29yaWVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29uZGl0aW9uQ2F0ZWdvcnlDb2RpbmdUeXBlID0gdHlwZW9mIENvbmRpdGlvbkNhdGVnb3J5Q29kaW5ncztcclxuIl19