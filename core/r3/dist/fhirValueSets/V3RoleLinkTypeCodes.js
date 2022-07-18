// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/v3-RoleLinkType|2016-11-11
/**
 * **** MISSING DEFINITIONS ****
 */
export const V3RoleLinkTypeCodes = {
    /**
     * BACKUP: This relationship indicates the source Role is available to the target Role as a backup. An entity in a backup role will be available as a substitute or replacement in the event that the entity assigned the role is unavailable. In medical roles where it is critical that the function be performed and there is a possibility that the individual assigned may be ill or otherwise indisposed, another individual is assigned to cover for the individual originally assigned the role. A backup may be required to be identified, but unless the backup is actually used, he/she would not assume the assigned entity role.
     */
    IsBackupFor: "BACKUP",
    /**
     * CONT: This relationship indicates the target Role provides or receives information regarding the target role.  For example, AssignedEntity is a contact for a ServiceDeliveryLocation.
     */
    HasContact: "CONT",
    /**
     * DIRAUTH: The source Role has direct authority over the target role in a chain of authority.
     */
    HasDirectAuthorityOver: "DIRAUTH",
    /**
     * IDENT: Description: The source role provides identification for the target role. The source role must be IDENT. The player entity of the source role is constrained to be the same as (i.e. the equivalent of, or equal to) the player of the target role if present. If the player is absent from the source role, then it is assumed to be the same as the player of the target role.
     */
    Identification: "IDENT",
    /**
     * INDAUTH: The source Role has indirect authority over the target role in a chain of authority.
     */
    HasIndirectAuthorityOver: "INDAUTH",
    /**
     * PART: The target Role is part of the Source Role.
     */
    HasPart: "PART",
    /**
     * REL: An action taken with respect to a subject Entity by a regulatory or authoritative body with supervisory capacity over that entity. The action is taken in response to behavior by the subject Entity that body finds to be undesirable.
     *
     *                         Suspension, license restrictions, monetary fine, letter of reprimand, mandated training, mandated supervision, etc.Examples:
     */
    Related: "REL",
    /**
     * REPL: This relationship indicates that the source Role replaces (or subsumes) the target Role.  Allows for new identifiers and/or new effective time for a registry entry or a certification, etc.
     */
    Replaces: "REPL",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNSb2xlTGlua1R5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvVjNSb2xlTGlua1R5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5RUFBeUU7QUFFekU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILFdBQVcsRUFBRSxRQUFRO0lBQ3JCOztPQUVHO0lBQ0gsVUFBVSxFQUFFLE1BQU07SUFDbEI7O09BRUc7SUFDSCxzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLE9BQU87SUFDdkI7O09BRUc7SUFDSCx3QkFBd0IsRUFBRSxTQUFTO0lBQ25DOztPQUVHO0lBQ0gsT0FBTyxFQUFFLE1BQU07SUFDZjs7OztPQUlHO0lBQ0gsT0FBTyxFQUFFLEtBQUs7SUFDZDs7T0FFRztJQUNILFFBQVEsRUFBRSxNQUFNO0NBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC92My1Sb2xlTGlua1R5cGV8MjAxNi0xMS0xMVxyXG5cclxuLyoqXHJcbiAqICoqKiogTUlTU0lORyBERUZJTklUSU9OUyAqKioqXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVjNSb2xlTGlua1R5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBCQUNLVVA6IFRoaXMgcmVsYXRpb25zaGlwIGluZGljYXRlcyB0aGUgc291cmNlIFJvbGUgaXMgYXZhaWxhYmxlIHRvIHRoZSB0YXJnZXQgUm9sZSBhcyBhIGJhY2t1cC4gQW4gZW50aXR5IGluIGEgYmFja3VwIHJvbGUgd2lsbCBiZSBhdmFpbGFibGUgYXMgYSBzdWJzdGl0dXRlIG9yIHJlcGxhY2VtZW50IGluIHRoZSBldmVudCB0aGF0IHRoZSBlbnRpdHkgYXNzaWduZWQgdGhlIHJvbGUgaXMgdW5hdmFpbGFibGUuIEluIG1lZGljYWwgcm9sZXMgd2hlcmUgaXQgaXMgY3JpdGljYWwgdGhhdCB0aGUgZnVuY3Rpb24gYmUgcGVyZm9ybWVkIGFuZCB0aGVyZSBpcyBhIHBvc3NpYmlsaXR5IHRoYXQgdGhlIGluZGl2aWR1YWwgYXNzaWduZWQgbWF5IGJlIGlsbCBvciBvdGhlcndpc2UgaW5kaXNwb3NlZCwgYW5vdGhlciBpbmRpdmlkdWFsIGlzIGFzc2lnbmVkIHRvIGNvdmVyIGZvciB0aGUgaW5kaXZpZHVhbCBvcmlnaW5hbGx5IGFzc2lnbmVkIHRoZSByb2xlLiBBIGJhY2t1cCBtYXkgYmUgcmVxdWlyZWQgdG8gYmUgaWRlbnRpZmllZCwgYnV0IHVubGVzcyB0aGUgYmFja3VwIGlzIGFjdHVhbGx5IHVzZWQsIGhlL3NoZSB3b3VsZCBub3QgYXNzdW1lIHRoZSBhc3NpZ25lZCBlbnRpdHkgcm9sZS5cclxuICAgKi9cclxuICBJc0JhY2t1cEZvcjogXCJCQUNLVVBcIixcclxuICAvKipcclxuICAgKiBDT05UOiBUaGlzIHJlbGF0aW9uc2hpcCBpbmRpY2F0ZXMgdGhlIHRhcmdldCBSb2xlIHByb3ZpZGVzIG9yIHJlY2VpdmVzIGluZm9ybWF0aW9uIHJlZ2FyZGluZyB0aGUgdGFyZ2V0IHJvbGUuICBGb3IgZXhhbXBsZSwgQXNzaWduZWRFbnRpdHkgaXMgYSBjb250YWN0IGZvciBhIFNlcnZpY2VEZWxpdmVyeUxvY2F0aW9uLlxyXG4gICAqL1xyXG4gIEhhc0NvbnRhY3Q6IFwiQ09OVFwiLFxyXG4gIC8qKlxyXG4gICAqIERJUkFVVEg6IFRoZSBzb3VyY2UgUm9sZSBoYXMgZGlyZWN0IGF1dGhvcml0eSBvdmVyIHRoZSB0YXJnZXQgcm9sZSBpbiBhIGNoYWluIG9mIGF1dGhvcml0eS5cclxuICAgKi9cclxuICBIYXNEaXJlY3RBdXRob3JpdHlPdmVyOiBcIkRJUkFVVEhcIixcclxuICAvKipcclxuICAgKiBJREVOVDogRGVzY3JpcHRpb246IFRoZSBzb3VyY2Ugcm9sZSBwcm92aWRlcyBpZGVudGlmaWNhdGlvbiBmb3IgdGhlIHRhcmdldCByb2xlLiBUaGUgc291cmNlIHJvbGUgbXVzdCBiZSBJREVOVC4gVGhlIHBsYXllciBlbnRpdHkgb2YgdGhlIHNvdXJjZSByb2xlIGlzIGNvbnN0cmFpbmVkIHRvIGJlIHRoZSBzYW1lIGFzIChpLmUuIHRoZSBlcXVpdmFsZW50IG9mLCBvciBlcXVhbCB0bykgdGhlIHBsYXllciBvZiB0aGUgdGFyZ2V0IHJvbGUgaWYgcHJlc2VudC4gSWYgdGhlIHBsYXllciBpcyBhYnNlbnQgZnJvbSB0aGUgc291cmNlIHJvbGUsIHRoZW4gaXQgaXMgYXNzdW1lZCB0byBiZSB0aGUgc2FtZSBhcyB0aGUgcGxheWVyIG9mIHRoZSB0YXJnZXQgcm9sZS5cclxuICAgKi9cclxuICBJZGVudGlmaWNhdGlvbjogXCJJREVOVFwiLFxyXG4gIC8qKlxyXG4gICAqIElOREFVVEg6IFRoZSBzb3VyY2UgUm9sZSBoYXMgaW5kaXJlY3QgYXV0aG9yaXR5IG92ZXIgdGhlIHRhcmdldCByb2xlIGluIGEgY2hhaW4gb2YgYXV0aG9yaXR5LlxyXG4gICAqL1xyXG4gIEhhc0luZGlyZWN0QXV0aG9yaXR5T3ZlcjogXCJJTkRBVVRIXCIsXHJcbiAgLyoqXHJcbiAgICogUEFSVDogVGhlIHRhcmdldCBSb2xlIGlzIHBhcnQgb2YgdGhlIFNvdXJjZSBSb2xlLlxyXG4gICAqL1xyXG4gIEhhc1BhcnQ6IFwiUEFSVFwiLFxyXG4gIC8qKlxyXG4gICAqIFJFTDogQW4gYWN0aW9uIHRha2VuIHdpdGggcmVzcGVjdCB0byBhIHN1YmplY3QgRW50aXR5IGJ5IGEgcmVndWxhdG9yeSBvciBhdXRob3JpdGF0aXZlIGJvZHkgd2l0aCBzdXBlcnZpc29yeSBjYXBhY2l0eSBvdmVyIHRoYXQgZW50aXR5LiBUaGUgYWN0aW9uIGlzIHRha2VuIGluIHJlc3BvbnNlIHRvIGJlaGF2aW9yIGJ5IHRoZSBzdWJqZWN0IEVudGl0eSB0aGF0IGJvZHkgZmluZHMgdG8gYmUgdW5kZXNpcmFibGUuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgU3VzcGVuc2lvbiwgbGljZW5zZSByZXN0cmljdGlvbnMsIG1vbmV0YXJ5IGZpbmUsIGxldHRlciBvZiByZXByaW1hbmQsIG1hbmRhdGVkIHRyYWluaW5nLCBtYW5kYXRlZCBzdXBlcnZpc2lvbiwgZXRjLkV4YW1wbGVzOlxyXG4gICAqL1xyXG4gIFJlbGF0ZWQ6IFwiUkVMXCIsXHJcbiAgLyoqXHJcbiAgICogUkVQTDogVGhpcyByZWxhdGlvbnNoaXAgaW5kaWNhdGVzIHRoYXQgdGhlIHNvdXJjZSBSb2xlIHJlcGxhY2VzIChvciBzdWJzdW1lcykgdGhlIHRhcmdldCBSb2xlLiAgQWxsb3dzIGZvciBuZXcgaWRlbnRpZmllcnMgYW5kL29yIG5ldyBlZmZlY3RpdmUgdGltZSBmb3IgYSByZWdpc3RyeSBlbnRyeSBvciBhIGNlcnRpZmljYXRpb24sIGV0Yy5cclxuICAgKi9cclxuICBSZXBsYWNlczogXCJSRVBMXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogKioqKiBNSVNTSU5HIERFRklOSVRJT05TICoqKipcclxuICovXHJcbmV4cG9ydCB0eXBlIFYzUm9sZUxpbmtUeXBlQ29kZVR5cGUgPSB0eXBlb2YgVjNSb2xlTGlua1R5cGVDb2Rlc1trZXlvZiB0eXBlb2YgVjNSb2xlTGlua1R5cGVDb2Rlc107XHJcbiJdfQ==