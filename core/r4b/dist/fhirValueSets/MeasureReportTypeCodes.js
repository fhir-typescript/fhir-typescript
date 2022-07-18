// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-report-type|4.3.0
/**
 * The type of the measure report.
 */
export const MeasureReportTypeCodes = {
    /**
     * data-collection: A data collection report that contains data-of-interest for the measure.
     */
    DataCollection: "data-collection",
    /**
     * individual: An individual report that provides information on the performance for a given measure with respect to a single subject.
     */
    Individual: "individual",
    /**
     * subject-list: A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.
     */
    SubjectList: "subject-list",
    /**
     * summary: A summary report that returns the number of members in each population criteria for the measure.
     */
    Summary: "summary",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZVJlcG9ydFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVhc3VyZVJlcG9ydFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx3RUFBd0U7QUFFeEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILGNBQWMsRUFBRSxpQkFBaUI7SUFDakM7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILFdBQVcsRUFBRSxjQUFjO0lBQzNCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWFzdXJlLXJlcG9ydC10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgdGhlIG1lYXN1cmUgcmVwb3J0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lYXN1cmVSZXBvcnRUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogZGF0YS1jb2xsZWN0aW9uOiBBIGRhdGEgY29sbGVjdGlvbiByZXBvcnQgdGhhdCBjb250YWlucyBkYXRhLW9mLWludGVyZXN0IGZvciB0aGUgbWVhc3VyZS5cclxuICAgKi9cclxuICBEYXRhQ29sbGVjdGlvbjogXCJkYXRhLWNvbGxlY3Rpb25cIixcclxuICAvKipcclxuICAgKiBpbmRpdmlkdWFsOiBBbiBpbmRpdmlkdWFsIHJlcG9ydCB0aGF0IHByb3ZpZGVzIGluZm9ybWF0aW9uIG9uIHRoZSBwZXJmb3JtYW5jZSBmb3IgYSBnaXZlbiBtZWFzdXJlIHdpdGggcmVzcGVjdCB0byBhIHNpbmdsZSBzdWJqZWN0LlxyXG4gICAqL1xyXG4gIEluZGl2aWR1YWw6IFwiaW5kaXZpZHVhbFwiLFxyXG4gIC8qKlxyXG4gICAqIHN1YmplY3QtbGlzdDogQSBzdWJqZWN0IGxpc3QgcmVwb3J0IHRoYXQgaW5jbHVkZXMgYSBsaXN0aW5nIG9mIHN1YmplY3RzIHRoYXQgc2F0aXNmaWVkIGVhY2ggcG9wdWxhdGlvbiBjcml0ZXJpYSBpbiB0aGUgbWVhc3VyZS5cclxuICAgKi9cclxuICBTdWJqZWN0TGlzdDogXCJzdWJqZWN0LWxpc3RcIixcclxuICAvKipcclxuICAgKiBzdW1tYXJ5OiBBIHN1bW1hcnkgcmVwb3J0IHRoYXQgcmV0dXJucyB0aGUgbnVtYmVyIG9mIG1lbWJlcnMgaW4gZWFjaCBwb3B1bGF0aW9uIGNyaXRlcmlhIGZvciB0aGUgbWVhc3VyZS5cclxuICAgKi9cclxuICBTdW1tYXJ5OiBcInN1bW1hcnlcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiB0aGUgbWVhc3VyZSByZXBvcnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZWFzdXJlUmVwb3J0VHlwZUNvZGVUeXBlID0gdHlwZW9mIE1lYXN1cmVSZXBvcnRUeXBlQ29kZXNba2V5b2YgdHlwZW9mIE1lYXN1cmVSZXBvcnRUeXBlQ29kZXNdO1xyXG4iXX0=