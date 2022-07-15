// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/dataelement-stringency|3.0.2
/**
 * Indicates the degree of precision of the data element definition.
 */
export const DataelementStringencyCodes = {
    /**
     * comparable: The data element is sufficiently well-constrained that multiple pieces of data captured according to the constraints of the data element will be comparable (though in some cases, a degree of automated conversion/normalization may be required).
     */
    Comparable: "comparable",
    /**
     * convertable: The data element allows multiple units of measure that are convertable between each other (e.g. inches and centimeters) and/or allows data to be captured in multiple value sets for which a known mapping exists allowing conversion of meaning.
     */
    Convertable: "convertable",
    /**
     * equivalent: The data element allows multiple units of measure having equivalent meaning; e.g. "cc" (cubic centimeter) and "mL" (milliliter).
     */
    Equivalent: "equivalent",
    /**
     * flexible: The data element is unconstrained in units, choice of data types and/or choice of vocabulary such that automated comparison of data captured using the data element is not possible.
     */
    Flexible: "flexible",
    /**
     * fully-specified: The data element is fully specified down to a single value set, single unit of measure, single data type, etc.  Multiple pieces of data associated with this data element are fully comparable.
     */
    FullySpecified: "fully-specified",
    /**
     * scaleable: A convertable data element where unit conversions are different only by a power of 10; e.g. g, mg, kg.
     */
    Scaleable: "scaleable",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWVsZW1lbnRTdHJpbmdlbmN5Q29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0RhdGFlbGVtZW50U3RyaW5nZW5jeUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDJFQUEyRTtBQUUzRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2RhdGFlbGVtZW50LXN0cmluZ2VuY3l8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0ZXMgdGhlIGRlZ3JlZSBvZiBwcmVjaXNpb24gb2YgdGhlIGRhdGEgZWxlbWVudCBkZWZpbml0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERhdGFlbGVtZW50U3RyaW5nZW5jeUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBhcmFibGU6IFRoZSBkYXRhIGVsZW1lbnQgaXMgc3VmZmljaWVudGx5IHdlbGwtY29uc3RyYWluZWQgdGhhdCBtdWx0aXBsZSBwaWVjZXMgb2YgZGF0YSBjYXB0dXJlZCBhY2NvcmRpbmcgdG8gdGhlIGNvbnN0cmFpbnRzIG9mIHRoZSBkYXRhIGVsZW1lbnQgd2lsbCBiZSBjb21wYXJhYmxlICh0aG91Z2ggaW4gc29tZSBjYXNlcywgYSBkZWdyZWUgb2YgYXV0b21hdGVkIGNvbnZlcnNpb24vbm9ybWFsaXphdGlvbiBtYXkgYmUgcmVxdWlyZWQpLlxyXG4gICAqL1xyXG4gIENvbXBhcmFibGU6IFwiY29tcGFyYWJsZVwiLFxyXG4gIC8qKlxyXG4gICAqIGNvbnZlcnRhYmxlOiBUaGUgZGF0YSBlbGVtZW50IGFsbG93cyBtdWx0aXBsZSB1bml0cyBvZiBtZWFzdXJlIHRoYXQgYXJlIGNvbnZlcnRhYmxlIGJldHdlZW4gZWFjaCBvdGhlciAoZS5nLiBpbmNoZXMgYW5kIGNlbnRpbWV0ZXJzKSBhbmQvb3IgYWxsb3dzIGRhdGEgdG8gYmUgY2FwdHVyZWQgaW4gbXVsdGlwbGUgdmFsdWUgc2V0cyBmb3Igd2hpY2ggYSBrbm93biBtYXBwaW5nIGV4aXN0cyBhbGxvd2luZyBjb252ZXJzaW9uIG9mIG1lYW5pbmcuXHJcbiAgICovXHJcbiAgQ29udmVydGFibGU6IFwiY29udmVydGFibGVcIixcclxuICAvKipcclxuICAgKiBlcXVpdmFsZW50OiBUaGUgZGF0YSBlbGVtZW50IGFsbG93cyBtdWx0aXBsZSB1bml0cyBvZiBtZWFzdXJlIGhhdmluZyBlcXVpdmFsZW50IG1lYW5pbmc7IGUuZy4gXCJjY1wiIChjdWJpYyBjZW50aW1ldGVyKSBhbmQgXCJtTFwiIChtaWxsaWxpdGVyKS5cclxuICAgKi9cclxuICBFcXVpdmFsZW50OiBcImVxdWl2YWxlbnRcIixcclxuICAvKipcclxuICAgKiBmbGV4aWJsZTogVGhlIGRhdGEgZWxlbWVudCBpcyB1bmNvbnN0cmFpbmVkIGluIHVuaXRzLCBjaG9pY2Ugb2YgZGF0YSB0eXBlcyBhbmQvb3IgY2hvaWNlIG9mIHZvY2FidWxhcnkgc3VjaCB0aGF0IGF1dG9tYXRlZCBjb21wYXJpc29uIG9mIGRhdGEgY2FwdHVyZWQgdXNpbmcgdGhlIGRhdGEgZWxlbWVudCBpcyBub3QgcG9zc2libGUuXHJcbiAgICovXHJcbiAgRmxleGlibGU6IFwiZmxleGlibGVcIixcclxuICAvKipcclxuICAgKiBmdWxseS1zcGVjaWZpZWQ6IFRoZSBkYXRhIGVsZW1lbnQgaXMgZnVsbHkgc3BlY2lmaWVkIGRvd24gdG8gYSBzaW5nbGUgdmFsdWUgc2V0LCBzaW5nbGUgdW5pdCBvZiBtZWFzdXJlLCBzaW5nbGUgZGF0YSB0eXBlLCBldGMuICBNdWx0aXBsZSBwaWVjZXMgb2YgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyBkYXRhIGVsZW1lbnQgYXJlIGZ1bGx5IGNvbXBhcmFibGUuXHJcbiAgICovXHJcbiAgRnVsbHlTcGVjaWZpZWQ6IFwiZnVsbHktc3BlY2lmaWVkXCIsXHJcbiAgLyoqXHJcbiAgICogc2NhbGVhYmxlOiBBIGNvbnZlcnRhYmxlIGRhdGEgZWxlbWVudCB3aGVyZSB1bml0IGNvbnZlcnNpb25zIGFyZSBkaWZmZXJlbnQgb25seSBieSBhIHBvd2VyIG9mIDEwOyBlLmcuIGcsIG1nLCBrZy5cclxuICAgKi9cclxuICBTY2FsZWFibGU6IFwic2NhbGVhYmxlXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogSW5kaWNhdGVzIHRoZSBkZWdyZWUgb2YgcHJlY2lzaW9uIG9mIHRoZSBkYXRhIGVsZW1lbnQgZGVmaW5pdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIERhdGFlbGVtZW50U3RyaW5nZW5jeUNvZGVUeXBlID0gdHlwZW9mIERhdGFlbGVtZW50U3RyaW5nZW5jeUNvZGVzW2tleW9mIHR5cGVvZiBEYXRhZWxlbWVudFN0cmluZ2VuY3lDb2Rlc107XHJcbiJdfQ==