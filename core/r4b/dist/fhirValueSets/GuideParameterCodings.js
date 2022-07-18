// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/guide-parameter-code|4.3.0
/**
 * Code of parameter that is input to the guide.
 */
export const GuideParameterCodings = {
    /**
     * apply: If the value of this string 0..* parameter is one of the metadata fields then all conformance resources will have any specified [Resource].[field] overwritten with the ImplementationGuide.[field], where field is one of: version, date, status, publisher, contact, copyright, experimental, jurisdiction, useContext.
     */
    ApplyMetadataValue: {
        display: "Apply Metadata Value",
        code: "apply",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * expansion-parameter: The value of this string 0..* parameter is a parameter (name=value) when expanding value sets for this implementation guide. This is particularly used to specify the versions of published terminologies such as SNOMED CT.
     */
    ExpansionProfile: {
        display: "Expansion Profile",
        code: "expansion-parameter",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * generate-json: The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in JSON format. If not present, the Publication Tool decides whether to generate JSON.
     */
    GenerateJSON: {
        display: "Generate JSON",
        code: "generate-json",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * generate-turtle: The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in Turtle format. If not present, the Publication Tool decides whether to generate Turtle.
     */
    GenerateTurtle: {
        display: "Generate Turtle",
        code: "generate-turtle",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * generate-xml: The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in XML format. If not present, the Publication Tool decides whether to generate XML.
     */
    GenerateXML: {
        display: "Generate XML",
        code: "generate-xml",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * html-template: The value of this string singleton parameter is the name of the file to use as the builder template for each generated page (see templating).
     */
    HTMLTemplate: {
        display: "HTML Template",
        code: "html-template",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * path-pages: The value of this string 0..1 parameter is a subfolder of the build context's location that contains files that are part of the html content processed by the builder.
     */
    PagesPath: {
        display: "Pages Path",
        code: "path-pages",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * path-resource: The value of this string 0..* parameter is a subfolder of the build context's location that is to be scanned to load resources. Scope is (if present) a particular resource type.
     */
    ResourcePath: {
        display: "Resource Path",
        code: "path-resource",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * path-tx-cache: The value of this string 0..1 parameter is a subfolder of the build context's location that is used as the terminology cache. If this is not present, the terminology cache is on the local system, not under version control.
     */
    TerminologyCachePath: {
        display: "Terminology Cache Path",
        code: "path-tx-cache",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
    /**
     * rule-broken-links: The value of this string 0..1 parameter is either "warning" or "error" (default = "error"). If the value is "warning" then IG build tools allow the IG to be considered successfully build even when there is no internal broken links.
     */
    BrokenLinksRule: {
        display: "Broken Links Rule",
        code: "rule-broken-links",
        system: "http://hl7.org/fhir/guide-parameter-code",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VpZGVQYXJhbWV0ZXJDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9HdWlkZVBhcmFtZXRlckNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBa0R6RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILG9CQUFvQixFQUFFO1FBQ3BCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9ndWlkZS1wYXJhbWV0ZXItY29kZXw0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvZGUgb2YgcGFyYW1ldGVyIHRoYXQgaXMgaW5wdXQgdG8gdGhlIGd1aWRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3VpZGVQYXJhbWV0ZXJDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFwcGx5OiBJZiB0aGUgdmFsdWUgb2YgdGhpcyBzdHJpbmcgMC4uKiBwYXJhbWV0ZXIgaXMgb25lIG9mIHRoZSBtZXRhZGF0YSBmaWVsZHMgdGhlbiBhbGwgY29uZm9ybWFuY2UgcmVzb3VyY2VzIHdpbGwgaGF2ZSBhbnkgc3BlY2lmaWVkIFtSZXNvdXJjZV0uW2ZpZWxkXSBvdmVyd3JpdHRlbiB3aXRoIHRoZSBJbXBsZW1lbnRhdGlvbkd1aWRlLltmaWVsZF0sIHdoZXJlIGZpZWxkIGlzIG9uZSBvZjogdmVyc2lvbiwgZGF0ZSwgc3RhdHVzLCBwdWJsaXNoZXIsIGNvbnRhY3QsIGNvcHlyaWdodCwgZXhwZXJpbWVudGFsLCBqdXJpc2RpY3Rpb24sIHVzZUNvbnRleHQuXHJcbiAgICovXHJcbiAgQXBwbHlNZXRhZGF0YVZhbHVlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGV4cGFuc2lvbi1wYXJhbWV0ZXI6IFRoZSB2YWx1ZSBvZiB0aGlzIHN0cmluZyAwLi4qIHBhcmFtZXRlciBpcyBhIHBhcmFtZXRlciAobmFtZT12YWx1ZSkgd2hlbiBleHBhbmRpbmcgdmFsdWUgc2V0cyBmb3IgdGhpcyBpbXBsZW1lbnRhdGlvbiBndWlkZS4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgdXNlZCB0byBzcGVjaWZ5IHRoZSB2ZXJzaW9ucyBvZiBwdWJsaXNoZWQgdGVybWlub2xvZ2llcyBzdWNoIGFzIFNOT01FRCBDVC5cclxuICAgKi9cclxuICBFeHBhbnNpb25Qcm9maWxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGdlbmVyYXRlLWpzb246IFRoZSB2YWx1ZSBvZiB0aGlzIGJvb2xlYW4gMC4uMSBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIElHIHB1Ymxpc2hlciBjcmVhdGVzIGV4YW1wbGVzIGluIEpTT04gZm9ybWF0LiBJZiBub3QgcHJlc2VudCwgdGhlIFB1YmxpY2F0aW9uIFRvb2wgZGVjaWRlcyB3aGV0aGVyIHRvIGdlbmVyYXRlIEpTT04uXHJcbiAgICovXHJcbiAgR2VuZXJhdGVKU09OOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGdlbmVyYXRlLXR1cnRsZTogVGhlIHZhbHVlIG9mIHRoaXMgYm9vbGVhbiAwLi4xIHBhcmFtZXRlciBzcGVjaWZpZXMgd2hldGhlciB0aGUgSUcgcHVibGlzaGVyIGNyZWF0ZXMgZXhhbXBsZXMgaW4gVHVydGxlIGZvcm1hdC4gSWYgbm90IHByZXNlbnQsIHRoZSBQdWJsaWNhdGlvbiBUb29sIGRlY2lkZXMgd2hldGhlciB0byBnZW5lcmF0ZSBUdXJ0bGUuXHJcbiAgICovXHJcbiAgR2VuZXJhdGVUdXJ0bGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZ2VuZXJhdGUteG1sOiBUaGUgdmFsdWUgb2YgdGhpcyBib29sZWFuIDAuLjEgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRoZSBJRyBwdWJsaXNoZXIgY3JlYXRlcyBleGFtcGxlcyBpbiBYTUwgZm9ybWF0LiBJZiBub3QgcHJlc2VudCwgdGhlIFB1YmxpY2F0aW9uIFRvb2wgZGVjaWRlcyB3aGV0aGVyIHRvIGdlbmVyYXRlIFhNTC5cclxuICAgKi9cclxuICBHZW5lcmF0ZVhNTDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBodG1sLXRlbXBsYXRlOiBUaGUgdmFsdWUgb2YgdGhpcyBzdHJpbmcgc2luZ2xldG9uIHBhcmFtZXRlciBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byB1c2UgYXMgdGhlIGJ1aWxkZXIgdGVtcGxhdGUgZm9yIGVhY2ggZ2VuZXJhdGVkIHBhZ2UgKHNlZSB0ZW1wbGF0aW5nKS5cclxuICAgKi9cclxuICBIVE1MVGVtcGxhdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcGF0aC1wYWdlczogVGhlIHZhbHVlIG9mIHRoaXMgc3RyaW5nIDAuLjEgcGFyYW1ldGVyIGlzIGEgc3ViZm9sZGVyIG9mIHRoZSBidWlsZCBjb250ZXh0J3MgbG9jYXRpb24gdGhhdCBjb250YWlucyBmaWxlcyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBodG1sIGNvbnRlbnQgcHJvY2Vzc2VkIGJ5IHRoZSBidWlsZGVyLlxyXG4gICAqL1xyXG4gIFBhZ2VzUGF0aDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYXRoLXJlc291cmNlOiBUaGUgdmFsdWUgb2YgdGhpcyBzdHJpbmcgMC4uKiBwYXJhbWV0ZXIgaXMgYSBzdWJmb2xkZXIgb2YgdGhlIGJ1aWxkIGNvbnRleHQncyBsb2NhdGlvbiB0aGF0IGlzIHRvIGJlIHNjYW5uZWQgdG8gbG9hZCByZXNvdXJjZXMuIFNjb3BlIGlzIChpZiBwcmVzZW50KSBhIHBhcnRpY3VsYXIgcmVzb3VyY2UgdHlwZS5cclxuICAgKi9cclxuICBSZXNvdXJjZVBhdGg6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcGF0aC10eC1jYWNoZTogVGhlIHZhbHVlIG9mIHRoaXMgc3RyaW5nIDAuLjEgcGFyYW1ldGVyIGlzIGEgc3ViZm9sZGVyIG9mIHRoZSBidWlsZCBjb250ZXh0J3MgbG9jYXRpb24gdGhhdCBpcyB1c2VkIGFzIHRoZSB0ZXJtaW5vbG9neSBjYWNoZS4gSWYgdGhpcyBpcyBub3QgcHJlc2VudCwgdGhlIHRlcm1pbm9sb2d5IGNhY2hlIGlzIG9uIHRoZSBsb2NhbCBzeXN0ZW0sIG5vdCB1bmRlciB2ZXJzaW9uIGNvbnRyb2wuXHJcbiAgICovXHJcbiAgVGVybWlub2xvZ3lDYWNoZVBhdGg6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcnVsZS1icm9rZW4tbGlua3M6IFRoZSB2YWx1ZSBvZiB0aGlzIHN0cmluZyAwLi4xIHBhcmFtZXRlciBpcyBlaXRoZXIgXCJ3YXJuaW5nXCIgb3IgXCJlcnJvclwiIChkZWZhdWx0ID0gXCJlcnJvclwiKS4gSWYgdGhlIHZhbHVlIGlzIFwid2FybmluZ1wiIHRoZW4gSUcgYnVpbGQgdG9vbHMgYWxsb3cgdGhlIElHIHRvIGJlIGNvbnNpZGVyZWQgc3VjY2Vzc2Z1bGx5IGJ1aWxkIGV2ZW4gd2hlbiB0aGVyZSBpcyBubyBpbnRlcm5hbCBicm9rZW4gbGlua3MuXHJcbiAgICovXHJcbiAgQnJva2VuTGlua3NSdWxlOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29kZSBvZiBwYXJhbWV0ZXIgdGhhdCBpcyBpbnB1dCB0byB0aGUgZ3VpZGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR3VpZGVQYXJhbWV0ZXJDb2RpbmdzOkd1aWRlUGFyYW1ldGVyQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhcHBseTogSWYgdGhlIHZhbHVlIG9mIHRoaXMgc3RyaW5nIDAuLiogcGFyYW1ldGVyIGlzIG9uZSBvZiB0aGUgbWV0YWRhdGEgZmllbGRzIHRoZW4gYWxsIGNvbmZvcm1hbmNlIHJlc291cmNlcyB3aWxsIGhhdmUgYW55IHNwZWNpZmllZCBbUmVzb3VyY2VdLltmaWVsZF0gb3ZlcndyaXR0ZW4gd2l0aCB0aGUgSW1wbGVtZW50YXRpb25HdWlkZS5bZmllbGRdLCB3aGVyZSBmaWVsZCBpcyBvbmUgb2Y6IHZlcnNpb24sIGRhdGUsIHN0YXR1cywgcHVibGlzaGVyLCBjb250YWN0LCBjb3B5cmlnaHQsIGV4cGVyaW1lbnRhbCwganVyaXNkaWN0aW9uLCB1c2VDb250ZXh0LlxyXG4gICAqL1xyXG4gIEFwcGx5TWV0YWRhdGFWYWx1ZToge1xyXG4gICAgZGlzcGxheTogXCJBcHBseSBNZXRhZGF0YSBWYWx1ZVwiLFxyXG4gICAgY29kZTogXCJhcHBseVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZ3VpZGUtcGFyYW1ldGVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGV4cGFuc2lvbi1wYXJhbWV0ZXI6IFRoZSB2YWx1ZSBvZiB0aGlzIHN0cmluZyAwLi4qIHBhcmFtZXRlciBpcyBhIHBhcmFtZXRlciAobmFtZT12YWx1ZSkgd2hlbiBleHBhbmRpbmcgdmFsdWUgc2V0cyBmb3IgdGhpcyBpbXBsZW1lbnRhdGlvbiBndWlkZS4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgdXNlZCB0byBzcGVjaWZ5IHRoZSB2ZXJzaW9ucyBvZiBwdWJsaXNoZWQgdGVybWlub2xvZ2llcyBzdWNoIGFzIFNOT01FRCBDVC5cclxuICAgKi9cclxuICBFeHBhbnNpb25Qcm9maWxlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkV4cGFuc2lvbiBQcm9maWxlXCIsXHJcbiAgICBjb2RlOiBcImV4cGFuc2lvbi1wYXJhbWV0ZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRlLXBhcmFtZXRlci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBnZW5lcmF0ZS1qc29uOiBUaGUgdmFsdWUgb2YgdGhpcyBib29sZWFuIDAuLjEgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGV0aGVyIHRoZSBJRyBwdWJsaXNoZXIgY3JlYXRlcyBleGFtcGxlcyBpbiBKU09OIGZvcm1hdC4gSWYgbm90IHByZXNlbnQsIHRoZSBQdWJsaWNhdGlvbiBUb29sIGRlY2lkZXMgd2hldGhlciB0byBnZW5lcmF0ZSBKU09OLlxyXG4gICAqL1xyXG4gIEdlbmVyYXRlSlNPTjoge1xyXG4gICAgZGlzcGxheTogXCJHZW5lcmF0ZSBKU09OXCIsXHJcbiAgICBjb2RlOiBcImdlbmVyYXRlLWpzb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRlLXBhcmFtZXRlci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBnZW5lcmF0ZS10dXJ0bGU6IFRoZSB2YWx1ZSBvZiB0aGlzIGJvb2xlYW4gMC4uMSBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIElHIHB1Ymxpc2hlciBjcmVhdGVzIGV4YW1wbGVzIGluIFR1cnRsZSBmb3JtYXQuIElmIG5vdCBwcmVzZW50LCB0aGUgUHVibGljYXRpb24gVG9vbCBkZWNpZGVzIHdoZXRoZXIgdG8gZ2VuZXJhdGUgVHVydGxlLlxyXG4gICAqL1xyXG4gIEdlbmVyYXRlVHVydGxlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkdlbmVyYXRlIFR1cnRsZVwiLFxyXG4gICAgY29kZTogXCJnZW5lcmF0ZS10dXJ0bGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRlLXBhcmFtZXRlci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBnZW5lcmF0ZS14bWw6IFRoZSB2YWx1ZSBvZiB0aGlzIGJvb2xlYW4gMC4uMSBwYXJhbWV0ZXIgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIElHIHB1Ymxpc2hlciBjcmVhdGVzIGV4YW1wbGVzIGluIFhNTCBmb3JtYXQuIElmIG5vdCBwcmVzZW50LCB0aGUgUHVibGljYXRpb24gVG9vbCBkZWNpZGVzIHdoZXRoZXIgdG8gZ2VuZXJhdGUgWE1MLlxyXG4gICAqL1xyXG4gIEdlbmVyYXRlWE1MOiB7XHJcbiAgICBkaXNwbGF5OiBcIkdlbmVyYXRlIFhNTFwiLFxyXG4gICAgY29kZTogXCJnZW5lcmF0ZS14bWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRlLXBhcmFtZXRlci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBodG1sLXRlbXBsYXRlOiBUaGUgdmFsdWUgb2YgdGhpcyBzdHJpbmcgc2luZ2xldG9uIHBhcmFtZXRlciBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byB1c2UgYXMgdGhlIGJ1aWxkZXIgdGVtcGxhdGUgZm9yIGVhY2ggZ2VuZXJhdGVkIHBhZ2UgKHNlZSB0ZW1wbGF0aW5nKS5cclxuICAgKi9cclxuICBIVE1MVGVtcGxhdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiSFRNTCBUZW1wbGF0ZVwiLFxyXG4gICAgY29kZTogXCJodG1sLXRlbXBsYXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ndWlkZS1wYXJhbWV0ZXItY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcGF0aC1wYWdlczogVGhlIHZhbHVlIG9mIHRoaXMgc3RyaW5nIDAuLjEgcGFyYW1ldGVyIGlzIGEgc3ViZm9sZGVyIG9mIHRoZSBidWlsZCBjb250ZXh0J3MgbG9jYXRpb24gdGhhdCBjb250YWlucyBmaWxlcyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBodG1sIGNvbnRlbnQgcHJvY2Vzc2VkIGJ5IHRoZSBidWlsZGVyLlxyXG4gICAqL1xyXG4gIFBhZ2VzUGF0aDoge1xyXG4gICAgZGlzcGxheTogXCJQYWdlcyBQYXRoXCIsXHJcbiAgICBjb2RlOiBcInBhdGgtcGFnZXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRlLXBhcmFtZXRlci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwYXRoLXJlc291cmNlOiBUaGUgdmFsdWUgb2YgdGhpcyBzdHJpbmcgMC4uKiBwYXJhbWV0ZXIgaXMgYSBzdWJmb2xkZXIgb2YgdGhlIGJ1aWxkIGNvbnRleHQncyBsb2NhdGlvbiB0aGF0IGlzIHRvIGJlIHNjYW5uZWQgdG8gbG9hZCByZXNvdXJjZXMuIFNjb3BlIGlzIChpZiBwcmVzZW50KSBhIHBhcnRpY3VsYXIgcmVzb3VyY2UgdHlwZS5cclxuICAgKi9cclxuICBSZXNvdXJjZVBhdGg6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVzb3VyY2UgUGF0aFwiLFxyXG4gICAgY29kZTogXCJwYXRoLXJlc291cmNlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ndWlkZS1wYXJhbWV0ZXItY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcGF0aC10eC1jYWNoZTogVGhlIHZhbHVlIG9mIHRoaXMgc3RyaW5nIDAuLjEgcGFyYW1ldGVyIGlzIGEgc3ViZm9sZGVyIG9mIHRoZSBidWlsZCBjb250ZXh0J3MgbG9jYXRpb24gdGhhdCBpcyB1c2VkIGFzIHRoZSB0ZXJtaW5vbG9neSBjYWNoZS4gSWYgdGhpcyBpcyBub3QgcHJlc2VudCwgdGhlIHRlcm1pbm9sb2d5IGNhY2hlIGlzIG9uIHRoZSBsb2NhbCBzeXN0ZW0sIG5vdCB1bmRlciB2ZXJzaW9uIGNvbnRyb2wuXHJcbiAgICovXHJcbiAgVGVybWlub2xvZ3lDYWNoZVBhdGg6IHtcclxuICAgIGRpc3BsYXk6IFwiVGVybWlub2xvZ3kgQ2FjaGUgUGF0aFwiLFxyXG4gICAgY29kZTogXCJwYXRoLXR4LWNhY2hlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ndWlkZS1wYXJhbWV0ZXItY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcnVsZS1icm9rZW4tbGlua3M6IFRoZSB2YWx1ZSBvZiB0aGlzIHN0cmluZyAwLi4xIHBhcmFtZXRlciBpcyBlaXRoZXIgXCJ3YXJuaW5nXCIgb3IgXCJlcnJvclwiIChkZWZhdWx0ID0gXCJlcnJvclwiKS4gSWYgdGhlIHZhbHVlIGlzIFwid2FybmluZ1wiIHRoZW4gSUcgYnVpbGQgdG9vbHMgYWxsb3cgdGhlIElHIHRvIGJlIGNvbnNpZGVyZWQgc3VjY2Vzc2Z1bGx5IGJ1aWxkIGV2ZW4gd2hlbiB0aGVyZSBpcyBubyBpbnRlcm5hbCBicm9rZW4gbGlua3MuXHJcbiAgICovXHJcbiAgQnJva2VuTGlua3NSdWxlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkJyb2tlbiBMaW5rcyBSdWxlXCIsXHJcbiAgICBjb2RlOiBcInJ1bGUtYnJva2VuLWxpbmtzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ndWlkZS1wYXJhbWV0ZXItY29kZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==