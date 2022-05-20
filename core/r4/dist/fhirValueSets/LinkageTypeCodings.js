// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/linkage-type|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
export const LinkageTypeCodings = {
    /**
     * alternate: The resource represents an alternative view of the underlying event/condition/etc.  The resource may still be actively maintained, even though it is not considered to be the source of truth.
     */
    AlternateRecord: new Coding({
        display: "Alternate Record",
        code: "alternate",
        system: "http://hl7.org/fhir/linkage-type",
    }),
    /**
     * historical: The resource represents an obsolete record of the underlying event/condition/etc.  It is not expected to be actively maintained.
     */
    HistoricalObsoleteRecord: new Coding({
        display: "Historical/Obsolete Record",
        code: "historical",
        system: "http://hl7.org/fhir/linkage-type",
    }),
    /**
     * source: The resource represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
     */
    SourceOfTruth: new Coding({
        display: "Source of Truth",
        code: "source",
        system: "http://hl7.org/fhir/linkage-type",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua2FnZVR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9MaW5rYWdlVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUVBQWlFO0FBRWpFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHO0lBQ2hDOztPQUVHO0lBQ0gsZUFBZSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGtDQUFrQztLQUMzQyxDQUFDO0lBQ0Y7O09BRUc7SUFDSCx3QkFBd0IsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNuQyxPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxrQ0FBa0M7S0FDM0MsQ0FBQztJQUNGOztPQUVHO0lBQ0gsYUFBYSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsa0NBQWtDO0tBQzNDLENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2xpbmthZ2UtdHlwZXw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVXNlZCB0byBkaXN0aW5ndWlzaCBkaWZmZXJlbnQgcm9sZXMgYSByZXNvdXJjZSBjYW4gcGxheSB3aXRoaW4gYSBzZXQgb2YgbGlua2VkIHJlc291cmNlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBMaW5rYWdlVHlwZUNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogYWx0ZXJuYXRlOiBUaGUgcmVzb3VyY2UgcmVwcmVzZW50cyBhbiBhbHRlcm5hdGl2ZSB2aWV3IG9mIHRoZSB1bmRlcmx5aW5nIGV2ZW50L2NvbmRpdGlvbi9ldGMuICBUaGUgcmVzb3VyY2UgbWF5IHN0aWxsIGJlIGFjdGl2ZWx5IG1haW50YWluZWQsIGV2ZW4gdGhvdWdoIGl0IGlzIG5vdCBjb25zaWRlcmVkIHRvIGJlIHRoZSBzb3VyY2Ugb2YgdHJ1dGguXHJcbiAgICovXHJcbiAgQWx0ZXJuYXRlUmVjb3JkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQWx0ZXJuYXRlIFJlY29yZFwiLFxyXG4gICAgY29kZTogXCJhbHRlcm5hdGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2xpbmthZ2UtdHlwZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGhpc3RvcmljYWw6IFRoZSByZXNvdXJjZSByZXByZXNlbnRzIGFuIG9ic29sZXRlIHJlY29yZCBvZiB0aGUgdW5kZXJseWluZyBldmVudC9jb25kaXRpb24vZXRjLiAgSXQgaXMgbm90IGV4cGVjdGVkIHRvIGJlIGFjdGl2ZWx5IG1haW50YWluZWQuXHJcbiAgICovXHJcbiAgSGlzdG9yaWNhbE9ic29sZXRlUmVjb3JkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiSGlzdG9yaWNhbC9PYnNvbGV0ZSBSZWNvcmRcIixcclxuICAgIGNvZGU6IFwiaGlzdG9yaWNhbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbGlua2FnZS10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogc291cmNlOiBUaGUgcmVzb3VyY2UgcmVwcmVzZW50cyB0aGUgXCJzb3VyY2Ugb2YgdHJ1dGhcIiAoZnJvbSB0aGUgcGVyc3BlY3RpdmUgb2YgdGhpcyBMaW5rYWdlIHJlc291cmNlKSBmb3IgdGhlIHVuZGVybHlpbmcgZXZlbnQvY29uZGl0aW9uL2V0Yy5cclxuICAgKi9cclxuICBTb3VyY2VPZlRydXRoOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiU291cmNlIG9mIFRydXRoXCIsXHJcbiAgICBjb2RlOiBcInNvdXJjZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbGlua2FnZS10eXBlXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVXNlZCB0byBkaXN0aW5ndWlzaCBkaWZmZXJlbnQgcm9sZXMgYSByZXNvdXJjZSBjYW4gcGxheSB3aXRoaW4gYSBzZXQgb2YgbGlua2VkIHJlc291cmNlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIExpbmthZ2VUeXBlQ29kaW5nVHlwZSA9IHR5cGVvZiBMaW5rYWdlVHlwZUNvZGluZ3M7XHJcbiJdfQ==