// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/cited-artifact-part-type|4.3.0
/**
 * To describe the reason for the variant citation, such as version number or subpart specification.
 */
export const CitedArtifactPartTypeCodes = {
    /**
     * article-set: Used to distinguish an individual article within an article set where the article set is a base citation.
     */
    PartOfAnArticleSet: "article-set",
    /**
     * figures: Denotes specific figure or figures of an article or artifact.
     */
    Figures: "figures",
    /**
     * lines: Denotes specific line or lines of an article or artifact.
     */
    Lines: "lines",
    /**
     * pages: Denotes specific page or pages of an article or artifact.
     */
    Pages: "pages",
    /**
     * paragraphs: Denotes specific paragraph or paragraphs of an article or artifact.
     */
    Paragraphs: "paragraphs",
    /**
     * sections: Denotes specific section or sections of an article or artifact.
     */
    Sections: "sections",
    /**
     * supplement: Used to denote a supplementary file, appendix, or additional part that is not a subpart of the primary article.
     */
    SupplementOrAppendix: "supplement",
    /**
     * supplement-subpart: Used to denote a subpart within a supplementary file or appendix.
     */
    SupplementOrAppendixSubpart: "supplement-subpart",
    /**
     * tables: Denotes specific table or tables of an article or artifact.
     */
    Tables: "tables",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2l0ZWRBcnRpZmFjdFBhcnRUeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NpdGVkQXJ0aWZhY3RQYXJ0VHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQUU3RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsYUFBYTtJQUNqQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsWUFBWTtJQUNsQzs7T0FFRztJQUNILDJCQUEyQixFQUFFLG9CQUFvQjtJQUNqRDs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0NBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY2l0ZWQtYXJ0aWZhY3QtcGFydC10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogVG8gZGVzY3JpYmUgdGhlIHJlYXNvbiBmb3IgdGhlIHZhcmlhbnQgY2l0YXRpb24sIHN1Y2ggYXMgdmVyc2lvbiBudW1iZXIgb3Igc3VicGFydCBzcGVjaWZpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENpdGVkQXJ0aWZhY3RQYXJ0VHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFydGljbGUtc2V0OiBVc2VkIHRvIGRpc3Rpbmd1aXNoIGFuIGluZGl2aWR1YWwgYXJ0aWNsZSB3aXRoaW4gYW4gYXJ0aWNsZSBzZXQgd2hlcmUgdGhlIGFydGljbGUgc2V0IGlzIGEgYmFzZSBjaXRhdGlvbi5cclxuICAgKi9cclxuICBQYXJ0T2ZBbkFydGljbGVTZXQ6IFwiYXJ0aWNsZS1zZXRcIixcclxuICAvKipcclxuICAgKiBmaWd1cmVzOiBEZW5vdGVzIHNwZWNpZmljIGZpZ3VyZSBvciBmaWd1cmVzIG9mIGFuIGFydGljbGUgb3IgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgRmlndXJlczogXCJmaWd1cmVzXCIsXHJcbiAgLyoqXHJcbiAgICogbGluZXM6IERlbm90ZXMgc3BlY2lmaWMgbGluZSBvciBsaW5lcyBvZiBhbiBhcnRpY2xlIG9yIGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIExpbmVzOiBcImxpbmVzXCIsXHJcbiAgLyoqXHJcbiAgICogcGFnZXM6IERlbm90ZXMgc3BlY2lmaWMgcGFnZSBvciBwYWdlcyBvZiBhbiBhcnRpY2xlIG9yIGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIFBhZ2VzOiBcInBhZ2VzXCIsXHJcbiAgLyoqXHJcbiAgICogcGFyYWdyYXBoczogRGVub3RlcyBzcGVjaWZpYyBwYXJhZ3JhcGggb3IgcGFyYWdyYXBocyBvZiBhbiBhcnRpY2xlIG9yIGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIFBhcmFncmFwaHM6IFwicGFyYWdyYXBoc1wiLFxyXG4gIC8qKlxyXG4gICAqIHNlY3Rpb25zOiBEZW5vdGVzIHNwZWNpZmljIHNlY3Rpb24gb3Igc2VjdGlvbnMgb2YgYW4gYXJ0aWNsZSBvciBhcnRpZmFjdC5cclxuICAgKi9cclxuICBTZWN0aW9uczogXCJzZWN0aW9uc1wiLFxyXG4gIC8qKlxyXG4gICAqIHN1cHBsZW1lbnQ6IFVzZWQgdG8gZGVub3RlIGEgc3VwcGxlbWVudGFyeSBmaWxlLCBhcHBlbmRpeCwgb3IgYWRkaXRpb25hbCBwYXJ0IHRoYXQgaXMgbm90IGEgc3VicGFydCBvZiB0aGUgcHJpbWFyeSBhcnRpY2xlLlxyXG4gICAqL1xyXG4gIFN1cHBsZW1lbnRPckFwcGVuZGl4OiBcInN1cHBsZW1lbnRcIixcclxuICAvKipcclxuICAgKiBzdXBwbGVtZW50LXN1YnBhcnQ6IFVzZWQgdG8gZGVub3RlIGEgc3VicGFydCB3aXRoaW4gYSBzdXBwbGVtZW50YXJ5IGZpbGUgb3IgYXBwZW5kaXguXHJcbiAgICovXHJcbiAgU3VwcGxlbWVudE9yQXBwZW5kaXhTdWJwYXJ0OiBcInN1cHBsZW1lbnQtc3VicGFydFwiLFxyXG4gIC8qKlxyXG4gICAqIHRhYmxlczogRGVub3RlcyBzcGVjaWZpYyB0YWJsZSBvciB0YWJsZXMgb2YgYW4gYXJ0aWNsZSBvciBhcnRpZmFjdC5cclxuICAgKi9cclxuICBUYWJsZXM6IFwidGFibGVzXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVG8gZGVzY3JpYmUgdGhlIHJlYXNvbiBmb3IgdGhlIHZhcmlhbnQgY2l0YXRpb24sIHN1Y2ggYXMgdmVyc2lvbiBudW1iZXIgb3Igc3VicGFydCBzcGVjaWZpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2l0ZWRBcnRpZmFjdFBhcnRUeXBlQ29kZVR5cGUgPSB0eXBlb2YgQ2l0ZWRBcnRpZmFjdFBhcnRUeXBlQ29kZXNba2V5b2YgdHlwZW9mIENpdGVkQXJ0aWZhY3RQYXJ0VHlwZUNvZGVzXTtcclxuIl19