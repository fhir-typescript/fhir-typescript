// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * The meaning of the hierarchy of concepts in a code system.
 */
export const CodesystemHierarchyMeaningCodings = {
    /**
     * classified-with: Child concepts in the hierarchy may have only one parent, and there is a presumption that the code system is a "closed world" meaning all things must be in the hierarchy. This results in concepts such as "not otherwise classified.".
     */
    ClassifiedWith: new Coding({
        display: "Classified With",
        code: "classified-with",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    }),
    /**
     * grouped-by: No particular relationship between the concepts can be assumed, except what can be determined by inspection of the definitions of the elements (possible reasons to use this: importing from a source where this is not defined, or where various parts of the hierarchy have different meanings).
     */
    GroupedBy: new Coding({
        display: "Grouped By",
        code: "grouped-by",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    }),
    /**
     * is-a: A hierarchy where the child concepts have an IS-A relationship with the parents - that is, all the properties of the parent are also true for its child concepts. Not that is-a is a property of the concepts, so additional subsumption relationships may be defined using properties or the [subsumes](extension-codesystem-subsumes.html) extension.
     */
    IsA: new Coding({
        display: "Is-A",
        code: "is-a",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    }),
    /**
     * part-of: Child elements list the individual parts of a composite whole (e.g. body site).
     */
    PartOf: new Coding({
        display: "Part Of",
        code: "part-of",
        system: "http://hl7.org/fhir/codesystem-hierarchy-meaning",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kZXN5c3RlbUhpZXJhcmNoeU1lYW5pbmdDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db2Rlc3lzdGVtSGllcmFyY2h5TWVhbmluZ0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBRWpGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFHO0lBQy9DOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNwQixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILEdBQUcsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNkLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsa0RBQWtEO0tBQzNELENBQUM7SUFDRjs7T0FFRztJQUNILE1BQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxrREFBa0Q7S0FDM0QsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29kZXN5c3RlbS1oaWVyYXJjaHktbWVhbmluZ3w0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIG1lYW5pbmcgb2YgdGhlIGhpZXJhcmNoeSBvZiBjb25jZXB0cyBpbiBhIGNvZGUgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvZGVzeXN0ZW1IaWVyYXJjaHlNZWFuaW5nQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBjbGFzc2lmaWVkLXdpdGg6IENoaWxkIGNvbmNlcHRzIGluIHRoZSBoaWVyYXJjaHkgbWF5IGhhdmUgb25seSBvbmUgcGFyZW50LCBhbmQgdGhlcmUgaXMgYSBwcmVzdW1wdGlvbiB0aGF0IHRoZSBjb2RlIHN5c3RlbSBpcyBhIFwiY2xvc2VkIHdvcmxkXCIgbWVhbmluZyBhbGwgdGhpbmdzIG11c3QgYmUgaW4gdGhlIGhpZXJhcmNoeS4gVGhpcyByZXN1bHRzIGluIGNvbmNlcHRzIHN1Y2ggYXMgXCJub3Qgb3RoZXJ3aXNlIGNsYXNzaWZpZWQuXCIuXHJcbiAgICovXHJcbiAgQ2xhc3NpZmllZFdpdGg6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJDbGFzc2lmaWVkIFdpdGhcIixcclxuICAgIGNvZGU6IFwiY2xhc3NpZmllZC13aXRoXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb2Rlc3lzdGVtLWhpZXJhcmNoeS1tZWFuaW5nXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogZ3JvdXBlZC1ieTogTm8gcGFydGljdWxhciByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgY29uY2VwdHMgY2FuIGJlIGFzc3VtZWQsIGV4Y2VwdCB3aGF0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IGluc3BlY3Rpb24gb2YgdGhlIGRlZmluaXRpb25zIG9mIHRoZSBlbGVtZW50cyAocG9zc2libGUgcmVhc29ucyB0byB1c2UgdGhpczogaW1wb3J0aW5nIGZyb20gYSBzb3VyY2Ugd2hlcmUgdGhpcyBpcyBub3QgZGVmaW5lZCwgb3Igd2hlcmUgdmFyaW91cyBwYXJ0cyBvZiB0aGUgaGllcmFyY2h5IGhhdmUgZGlmZmVyZW50IG1lYW5pbmdzKS5cclxuICAgKi9cclxuICBHcm91cGVkQnk6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJHcm91cGVkIEJ5XCIsXHJcbiAgICBjb2RlOiBcImdyb3VwZWQtYnlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvZGVzeXN0ZW0taGllcmFyY2h5LW1lYW5pbmdcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBpcy1hOiBBIGhpZXJhcmNoeSB3aGVyZSB0aGUgY2hpbGQgY29uY2VwdHMgaGF2ZSBhbiBJUy1BIHJlbGF0aW9uc2hpcCB3aXRoIHRoZSBwYXJlbnRzIC0gdGhhdCBpcywgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwYXJlbnQgYXJlIGFsc28gdHJ1ZSBmb3IgaXRzIGNoaWxkIGNvbmNlcHRzLiBOb3QgdGhhdCBpcy1hIGlzIGEgcHJvcGVydHkgb2YgdGhlIGNvbmNlcHRzLCBzbyBhZGRpdGlvbmFsIHN1YnN1bXB0aW9uIHJlbGF0aW9uc2hpcHMgbWF5IGJlIGRlZmluZWQgdXNpbmcgcHJvcGVydGllcyBvciB0aGUgW3N1YnN1bWVzXShleHRlbnNpb24tY29kZXN5c3RlbS1zdWJzdW1lcy5odG1sKSBleHRlbnNpb24uXHJcbiAgICovXHJcbiAgSXNBOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiSXMtQVwiLFxyXG4gICAgY29kZTogXCJpcy1hXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb2Rlc3lzdGVtLWhpZXJhcmNoeS1tZWFuaW5nXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcGFydC1vZjogQ2hpbGQgZWxlbWVudHMgbGlzdCB0aGUgaW5kaXZpZHVhbCBwYXJ0cyBvZiBhIGNvbXBvc2l0ZSB3aG9sZSAoZS5nLiBib2R5IHNpdGUpLlxyXG4gICAqL1xyXG4gIFBhcnRPZjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlBhcnQgT2ZcIixcclxuICAgIGNvZGU6IFwicGFydC1vZlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29kZXN5c3RlbS1oaWVyYXJjaHktbWVhbmluZ1wiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZWFuaW5nIG9mIHRoZSBoaWVyYXJjaHkgb2YgY29uY2VwdHMgaW4gYSBjb2RlIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvZGVzeXN0ZW1IaWVyYXJjaHlNZWFuaW5nQ29kaW5nVHlwZSA9IHR5cGVvZiBDb2Rlc3lzdGVtSGllcmFyY2h5TWVhbmluZ0NvZGluZ3M7XHJcbiJdfQ==