// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/name-use|4.0.1
/**
 * The use of a human name.
 */
export const NameUseCodes = {
    /**
     * anonymous: Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons).
     */
    Anonymous: "anonymous",
    /**
     * maiden: A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person's name.
     */
    NameChangedForMarriage: "maiden",
    /**
     * nickname: A name that is used to address the person in an informal manner, but is not part of their formal or usual name.
     */
    Nickname: "nickname",
    /**
     * official: The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".
     */
    Official: "official",
    /**
     * old: This name is no longer in use (or was never correct, but retained for records).
     */
    Old: "old",
    /**
     * temp: A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.
     */
    Temp: "temp",
    /**
     * usual: Known as/conventional/the one you normally use.
     */
    Usual: "usual",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFtZVVzZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9OYW1lVXNlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsNkRBQTZEO0FBRTdEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQzFCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxzQkFBc0IsRUFBRSxRQUFRO0lBQ2hDOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILEdBQUcsRUFBRSxLQUFLO0lBQ1Y7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87Q0FDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L25hbWUtdXNlfDQuMC4xXHJcblxyXG4vKipcclxuICogVGhlIHVzZSBvZiBhIGh1bWFuIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTmFtZVVzZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFub255bW91czogQW5vbnltb3VzIGFzc2lnbmVkIG5hbWUsIGFsaWFzLCBvciBwc2V1ZG9ueW0gKHVzZWQgdG8gcHJvdGVjdCBhIHBlcnNvbidzIGlkZW50aXR5IGZvciBwcml2YWN5IHJlYXNvbnMpLlxyXG4gICAqL1xyXG4gIEFub255bW91czogXCJhbm9ueW1vdXNcIixcclxuICAvKipcclxuICAgKiBtYWlkZW46IEEgbmFtZSB1c2VkIHByaW9yIHRvIGNoYW5naW5nIG5hbWUgYmVjYXVzZSBvZiBtYXJyaWFnZS4gVGhpcyBuYW1lIHVzZSBpcyBmb3IgdXNlIGJ5IGFwcGxpY2F0aW9ucyB0aGF0IGNvbGxlY3QgYW5kIHN0b3JlIG5hbWVzIHRoYXQgd2VyZSB1c2VkIHByaW9yIHRvIGEgbWFycmlhZ2UuIE1hcnJpYWdlIG5hbWluZyBjdXN0b21zIHZhcnkgZ3JlYXRseSBhcm91bmQgdGhlIHdvcmxkLCBhbmQgYXJlIGNvbnN0YW50bHkgY2hhbmdpbmcuIFRoaXMgdGVybSBpcyBub3QgZ2VuZGVyIHNwZWNpZmljLiBUaGUgdXNlIG9mIHRoaXMgdGVybSBkb2VzIG5vdCBpbXBseSBhbnkgcGFydGljdWxhciBoaXN0b3J5IGZvciBhIHBlcnNvbidzIG5hbWUuXHJcbiAgICovXHJcbiAgTmFtZUNoYW5nZWRGb3JNYXJyaWFnZTogXCJtYWlkZW5cIixcclxuICAvKipcclxuICAgKiBuaWNrbmFtZTogQSBuYW1lIHRoYXQgaXMgdXNlZCB0byBhZGRyZXNzIHRoZSBwZXJzb24gaW4gYW4gaW5mb3JtYWwgbWFubmVyLCBidXQgaXMgbm90IHBhcnQgb2YgdGhlaXIgZm9ybWFsIG9yIHVzdWFsIG5hbWUuXHJcbiAgICovXHJcbiAgTmlja25hbWU6IFwibmlja25hbWVcIixcclxuICAvKipcclxuICAgKiBvZmZpY2lhbDogVGhlIGZvcm1hbCBuYW1lIGFzIHJlZ2lzdGVyZWQgaW4gYW4gb2ZmaWNpYWwgKGdvdmVybm1lbnQpIHJlZ2lzdHJ5LCBidXQgd2hpY2ggbmFtZSBtaWdodCBub3QgYmUgY29tbW9ubHkgdXNlZC4gTWF5IGJlIGNhbGxlZCBcImxlZ2FsIG5hbWVcIi5cclxuICAgKi9cclxuICBPZmZpY2lhbDogXCJvZmZpY2lhbFwiLFxyXG4gIC8qKlxyXG4gICAqIG9sZDogVGhpcyBuYW1lIGlzIG5vIGxvbmdlciBpbiB1c2UgKG9yIHdhcyBuZXZlciBjb3JyZWN0LCBidXQgcmV0YWluZWQgZm9yIHJlY29yZHMpLlxyXG4gICAqL1xyXG4gIE9sZDogXCJvbGRcIixcclxuICAvKipcclxuICAgKiB0ZW1wOiBBIHRlbXBvcmFyeSBuYW1lLiBOYW1lLnBlcmlvZCBjYW4gcHJvdmlkZSBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLiBUaGlzIG1heSBhbHNvIGJlIHVzZWQgZm9yIHRlbXBvcmFyeSBuYW1lcyBhc3NpZ25lZCBhdCBiaXJ0aCBvciBpbiBlbWVyZ2VuY3kgc2l0dWF0aW9ucy5cclxuICAgKi9cclxuICBUZW1wOiBcInRlbXBcIixcclxuICAvKipcclxuICAgKiB1c3VhbDogS25vd24gYXMvY29udmVudGlvbmFsL3RoZSBvbmUgeW91IG5vcm1hbGx5IHVzZS5cclxuICAgKi9cclxuICBVc3VhbDogXCJ1c3VhbFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSB1c2Ugb2YgYSBodW1hbiBuYW1lLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmFtZVVzZUNvZGVUeXBlID0gdHlwZW9mIE5hbWVVc2VDb2Rlc1trZXlvZiB0eXBlb2YgTmFtZVVzZUNvZGVzXTtcclxuIl19