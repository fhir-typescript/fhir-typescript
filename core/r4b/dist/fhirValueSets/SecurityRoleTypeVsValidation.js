// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/security-role-type|4.3.0
/**
 * This example FHIR value set is comprised of example Actor Type codes, which can be used to value FHIR agents, actors, and other role         elements such as those specified in financial transactions. The FHIR Actor value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.          It can be extended with appropriate roles described by SNOMED as well as those described in the HL7 Role Based Access Control Catalog and the          HL7 Healthcare (Security and Privacy) Access Control Catalog.            In Role-Based Access Control (RBAC), permissions are operations on an object that a user wishes to access. Permissions are grouped into roles.          A role characterizes the functions a user is allowed to perform. Roles are assigned to users. If the user's role has the appropriate permissions          to access an object, then that user is granted access to the object. FHIR readily enables RBAC, as FHIR Resources are object types and the CRUDE          events (the FHIR equivalent to permissions in the RBAC scheme) are operations on those objects.          In Attribute-Based Access Control (ABAC), a user requests to perform operations on objects. That user's access request is granted or denied          based on a set of access control policies that are specified in terms of attributes and conditions. FHIR readily enables ABAC, as instances of          a Resource in FHIR (again, Resources are object types) can have attributes associated with them. These attributes include security tags,          environment conditions, and a host of user and object characteristics, which are the same attributes as those used in ABAC. Attributes help          define the access control policies that determine the operations a user may perform on a Resource (in FHIR) or object (in ABAC). For example,          a tag (or attribute) may specify that the identified Resource (object) is not to be further disclosed without explicit consent from the patient.
 */
export const SecurityRoleTypeVsValidation = [
    "_CitizenRoleType",
    "110150",
    "110151",
    "110152",
    "110153",
    "110154",
    "110155",
    "AFFL",
    "AGNT",
    "AMENDER",
    "ASSIGNED",
    "AUCG",
    "AULR",
    "AUT",
    "authserver",
    "AUTM",
    "AUWA",
    "CAS",
    "CASM",
    "CLAIM",
    "CLASSIFIER",
    "CN",
    "CNRP",
    "CNRPM",
    "COAUTH",
    "CONSENTER",
    "CONSWIT",
    "CONT",
    "COPART",
    "COVPTY",
    "CPCA",
    "CRP",
    "CRPM",
    "CST",
    "datacollector",
    "dataprocessor",
    "datasubject",
    "DECLASSIFIER",
    "DELEGATEE",
    "DELEGATOR",
    "DEPEN",
    "DOWNGRDER",
    "DPOWATT",
    "ECON",
    "EMP",
    "EVTWIT",
    "EXCEST",
    "GRANTEE",
    "GRANTOR",
    "GT",
    "GUADLTM",
    "GUARD",
    "HPOWATT",
    "http://dicom.nema.org/resources/ontology/DCM|110150",
    "http://dicom.nema.org/resources/ontology/DCM|110151",
    "http://dicom.nema.org/resources/ontology/DCM|110152",
    "http://dicom.nema.org/resources/ontology/DCM|110153",
    "http://dicom.nema.org/resources/ontology/DCM|110154",
    "http://dicom.nema.org/resources/ontology/DCM|110155",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|AMENDER",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|COAUTH",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|CONT",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|EVTWIT",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|PRIMAUTH",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|REVIEWER",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|SOURCE",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|TRANS",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|VALID",
    "http://terminology.hl7.org/CodeSystem/contractsignertypecodes|VERF",
    "http://terminology.hl7.org/CodeSystem/extra-security-role-type|authserver",
    "http://terminology.hl7.org/CodeSystem/extra-security-role-type|datacollector",
    "http://terminology.hl7.org/CodeSystem/extra-security-role-type|dataprocessor",
    "http://terminology.hl7.org/CodeSystem/extra-security-role-type|datasubject",
    "http://terminology.hl7.org/CodeSystem/extra-security-role-type|humanuser",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction|AUCG",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction|AULR",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction|AUTM",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction|AUWA",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction|PROMSK",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType|AUT",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType|CST",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType|INF",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType|IRCP",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType|LA",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType|TRC",
    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType|WIT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|AFFL",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|AGNT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|ASSIGNED",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|CLAIM",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|COVPTY",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|DEPEN",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|ECON",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|EMP",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|GUARD",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|INVSBJ",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|NAMED",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|NOK",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|NOT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|PAT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleClass|PROV",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|_CitizenRoleType",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CAS",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CASM",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CLASSIFIER",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CN",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CNRP",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CNRPM",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CONSENTER",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CONSWIT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|COPART",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CPCA",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CRP",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|CRPM",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|DECLASSIFIER",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|DELEGATEE",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|DELEGATOR",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|DOWNGRDER",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|DPOWATT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|EXCEST",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|GRANTEE",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|GRANTOR",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|GT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|GUADLTM",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|HPOWATT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|INTPRTER",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|POWATT",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|RESPRSN",
    "http://terminology.hl7.org/CodeSystem/v3-RoleCode|SPOWATT",
    "humanuser",
    "INF",
    "INTPRTER",
    "INVSBJ",
    "IRCP",
    "LA",
    "NAMED",
    "NOK",
    "NOT",
    "PAT",
    "POWATT",
    "PRIMAUTH",
    "PROMSK",
    "PROV",
    "RESPRSN",
    "REVIEWER",
    "SOURCE",
    "SPOWATT",
    "TRANS",
    "TRC",
    "VALID",
    "VERF",
    "WIT",
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHlSb2xlVHlwZVZzVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU2VjdXJpdHlSb2xlVHlwZVZzVmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxrRkFBa0Y7QUFFbEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBc0I7SUFDN0Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxZQUFZO0lBQ1osTUFBTTtJQUNOLE1BQU07SUFDTixLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osSUFBSTtJQUNKLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUztJQUNULE1BQU07SUFDTixLQUFLO0lBQ0wsUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULElBQUk7SUFDSixTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCx1RUFBdUU7SUFDdkUsc0VBQXNFO0lBQ3RFLG9FQUFvRTtJQUNwRSxzRUFBc0U7SUFDdEUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSxzRUFBc0U7SUFDdEUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxvRUFBb0U7SUFDcEUsMkVBQTJFO0lBQzNFLDhFQUE4RTtJQUM5RSw4RUFBOEU7SUFDOUUsNEVBQTRFO0lBQzVFLDBFQUEwRTtJQUMxRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUsdUVBQXVFO0lBQ3ZFLGdFQUFnRTtJQUNoRSxnRUFBZ0U7SUFDaEUsZ0VBQWdFO0lBQ2hFLGlFQUFpRTtJQUNqRSwrREFBK0Q7SUFDL0QsZ0VBQWdFO0lBQ2hFLGdFQUFnRTtJQUNoRSx5REFBeUQ7SUFDekQseURBQXlEO0lBQ3pELDZEQUE2RDtJQUM3RCwwREFBMEQ7SUFDMUQsMkRBQTJEO0lBQzNELDBEQUEwRDtJQUMxRCx5REFBeUQ7SUFDekQsd0RBQXdEO0lBQ3hELDBEQUEwRDtJQUMxRCwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELHdEQUF3RDtJQUN4RCx3REFBd0Q7SUFDeEQsd0RBQXdEO0lBQ3hELHlEQUF5RDtJQUN6RCxvRUFBb0U7SUFDcEUsdURBQXVEO0lBQ3ZELHdEQUF3RDtJQUN4RCw4REFBOEQ7SUFDOUQsc0RBQXNEO0lBQ3RELHdEQUF3RDtJQUN4RCx5REFBeUQ7SUFDekQsNkRBQTZEO0lBQzdELDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsd0RBQXdEO0lBQ3hELHVEQUF1RDtJQUN2RCx3REFBd0Q7SUFDeEQsZ0VBQWdFO0lBQ2hFLDZEQUE2RDtJQUM3RCw2REFBNkQ7SUFDN0QsNkRBQTZEO0lBQzdELDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsMkRBQTJEO0lBQzNELDJEQUEyRDtJQUMzRCxzREFBc0Q7SUFDdEQsMkRBQTJEO0lBQzNELDJEQUEyRDtJQUMzRCw0REFBNEQ7SUFDNUQsMERBQTBEO0lBQzFELDJEQUEyRDtJQUMzRCwyREFBMkQ7SUFDM0QsV0FBVztJQUNYLEtBQUs7SUFDTCxVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07SUFDTixJQUFJO0lBQ0osT0FBTztJQUNQLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLEtBQUs7SUFDTCxPQUFPO0lBQ1AsTUFBTTtJQUNOLEtBQUs7Q0FDRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldCBWYWxpZGF0aW9uOiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3NlY3VyaXR5LXJvbGUtdHlwZXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhhbXBsZSBGSElSIHZhbHVlIHNldCBpcyBjb21wcmlzZWQgb2YgZXhhbXBsZSBBY3RvciBUeXBlIGNvZGVzLCB3aGljaCBjYW4gYmUgdXNlZCB0byB2YWx1ZSBGSElSIGFnZW50cywgYWN0b3JzLCBhbmQgb3RoZXIgcm9sZSAgICAgICAgIGVsZW1lbnRzIHN1Y2ggYXMgdGhvc2Ugc3BlY2lmaWVkIGluIGZpbmFuY2lhbCB0cmFuc2FjdGlvbnMuIFRoZSBGSElSIEFjdG9yIHZhbHVlIHNldCBpcyBiYXNlZCBvbiAgICBESUNPTSBBdWRpdCBNZXNzYWdlLCBDNDAyOyAgIEFTVE0gU3RhbmRhcmQsIEUxNzYyLTk1IFsyMDEzXTsgc2VsZWN0ZWQgY29kZXMgYW5kICAgICAgICAgIGRlcml2ZWQgYWN0b3Igcm9sZXMgZnJvbSBITDcgUm9sZUNsYXNzIE9JRCAyLjE2Ljg0MC4xLjExMzg4My41LjExMDsgICAgSEw3IFJvbGUgQ29kZSAyLjE2Ljg0MC4xLjExMzg4My41LjExMSwgaW5jbHVkaW5nIEFnZW50Um9sZVR5cGU7ICAgICAgICAgIEhMNyBQYXJ0aWNpcGF0aW9uVHlwZSBPSUQ6IDIuMTYuODQwLjEuMTEzODgzLjUuOTA7IGFuZCAgICBITDcgUGFydGljaXBhdGlvbkZ1bmN0aW9uIGNvZGVzIE9JRDogMi4xNi44NDAuMS4xMTM4ODMuNS44OC4gICAgICAgICAgIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzLCBieSByZWZlcmVuY2UsIHJvbGUgY29kZXMgZnJvbSBleHRlcm5hbCBjb2RlIHN5c3RlbXM6IE5VQ0MgSGVhbHRoIENhcmUgUHJvdmlkZXIgVGF4b25vbXkgT0lEOiAyLjE2Ljg0MC4xLjExMzg4My42LjEwMTsgICAgICAgICAgTm9ydGggQW1lcmljYW4gSW5kdXN0cnkgQ2xhc3NpZmljYXRpb24gU3lzdGVtIFtOQUlDU11PSUQ6IDIuMTYuODQwLjEuMTEzODgzLjYuODU7IEluZHVzdHJ5Q2xhc3NpZmljYXRpb25TeXN0ZW0gMi4xNi44NDAuMS4xMTM4ODMuMS4xMS4xNjAzOTsgICAgICAgICAgYW5kIFVTIENlbnN1cyBPY2N1cGF0aW9uIENvZGUgT0lEOiAyLjE2Ljg0MC4xLjExMzg4My42LjI0MyBmb3IgcmVsZXZhbnQgcmVjaXBpZW50IG9yIGN1c3RvZGlhbiBjb2RlcyBub3QgaW5jbHVkZWQgaW4gdGhpcyB2YWx1ZSBzZXQuICAgICAgICAgICAgSWYgbm8gc291cmNlIGlzIGluZGljYXRlZCBpbiB0aGUgZGVmaW5pdGlvbiBjb21tZW50cywgdGhlbiB0aGVzZSBhcmUgZXhhbXBsZSBGSElSIGNvZGVzLiAgICAgICAgICBJdCBjYW4gYmUgZXh0ZW5kZWQgd2l0aCBhcHByb3ByaWF0ZSByb2xlcyBkZXNjcmliZWQgYnkgU05PTUVEIGFzIHdlbGwgYXMgdGhvc2UgZGVzY3JpYmVkIGluIHRoZSBITDcgUm9sZSBCYXNlZCBBY2Nlc3MgQ29udHJvbCBDYXRhbG9nIGFuZCB0aGUgICAgICAgICAgSEw3IEhlYWx0aGNhcmUgKFNlY3VyaXR5IGFuZCBQcml2YWN5KSBBY2Nlc3MgQ29udHJvbCBDYXRhbG9nLiAgICAgICAgICAgIEluIFJvbGUtQmFzZWQgQWNjZXNzIENvbnRyb2wgKFJCQUMpLCBwZXJtaXNzaW9ucyBhcmUgb3BlcmF0aW9ucyBvbiBhbiBvYmplY3QgdGhhdCBhIHVzZXIgd2lzaGVzIHRvIGFjY2Vzcy4gUGVybWlzc2lvbnMgYXJlIGdyb3VwZWQgaW50byByb2xlcy4gICAgICAgICAgQSByb2xlIGNoYXJhY3Rlcml6ZXMgdGhlIGZ1bmN0aW9ucyBhIHVzZXIgaXMgYWxsb3dlZCB0byBwZXJmb3JtLiBSb2xlcyBhcmUgYXNzaWduZWQgdG8gdXNlcnMuIElmIHRoZSB1c2VyJ3Mgcm9sZSBoYXMgdGhlIGFwcHJvcHJpYXRlIHBlcm1pc3Npb25zICAgICAgICAgIHRvIGFjY2VzcyBhbiBvYmplY3QsIHRoZW4gdGhhdCB1c2VyIGlzIGdyYW50ZWQgYWNjZXNzIHRvIHRoZSBvYmplY3QuIEZISVIgcmVhZGlseSBlbmFibGVzIFJCQUMsIGFzIEZISVIgUmVzb3VyY2VzIGFyZSBvYmplY3QgdHlwZXMgYW5kIHRoZSBDUlVERSAgICAgICAgICBldmVudHMgKHRoZSBGSElSIGVxdWl2YWxlbnQgdG8gcGVybWlzc2lvbnMgaW4gdGhlIFJCQUMgc2NoZW1lKSBhcmUgb3BlcmF0aW9ucyBvbiB0aG9zZSBvYmplY3RzLiAgICAgICAgICBJbiBBdHRyaWJ1dGUtQmFzZWQgQWNjZXNzIENvbnRyb2wgKEFCQUMpLCBhIHVzZXIgcmVxdWVzdHMgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIG9iamVjdHMuIFRoYXQgdXNlcidzIGFjY2VzcyByZXF1ZXN0IGlzIGdyYW50ZWQgb3IgZGVuaWVkICAgICAgICAgIGJhc2VkIG9uIGEgc2V0IG9mIGFjY2VzcyBjb250cm9sIHBvbGljaWVzIHRoYXQgYXJlIHNwZWNpZmllZCBpbiB0ZXJtcyBvZiBhdHRyaWJ1dGVzIGFuZCBjb25kaXRpb25zLiBGSElSIHJlYWRpbHkgZW5hYmxlcyBBQkFDLCBhcyBpbnN0YW5jZXMgb2YgICAgICAgICAgYSBSZXNvdXJjZSBpbiBGSElSIChhZ2FpbiwgUmVzb3VyY2VzIGFyZSBvYmplY3QgdHlwZXMpIGNhbiBoYXZlIGF0dHJpYnV0ZXMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uIFRoZXNlIGF0dHJpYnV0ZXMgaW5jbHVkZSBzZWN1cml0eSB0YWdzLCAgICAgICAgICBlbnZpcm9ubWVudCBjb25kaXRpb25zLCBhbmQgYSBob3N0IG9mIHVzZXIgYW5kIG9iamVjdCBjaGFyYWN0ZXJpc3RpY3MsIHdoaWNoIGFyZSB0aGUgc2FtZSBhdHRyaWJ1dGVzIGFzIHRob3NlIHVzZWQgaW4gQUJBQy4gQXR0cmlidXRlcyBoZWxwICAgICAgICAgIGRlZmluZSB0aGUgYWNjZXNzIGNvbnRyb2wgcG9saWNpZXMgdGhhdCBkZXRlcm1pbmUgdGhlIG9wZXJhdGlvbnMgYSB1c2VyIG1heSBwZXJmb3JtIG9uIGEgUmVzb3VyY2UgKGluIEZISVIpIG9yIG9iamVjdCAoaW4gQUJBQykuIEZvciBleGFtcGxlLCAgICAgICAgICBhIHRhZyAob3IgYXR0cmlidXRlKSBtYXkgc3BlY2lmeSB0aGF0IHRoZSBpZGVudGlmaWVkIFJlc291cmNlIChvYmplY3QpIGlzIG5vdCB0byBiZSBmdXJ0aGVyIGRpc2Nsb3NlZCB3aXRob3V0IGV4cGxpY2l0IGNvbnNlbnQgZnJvbSB0aGUgcGF0aWVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTZWN1cml0eVJvbGVUeXBlVnNWYWxpZGF0aW9uOiByZWFkb25seSBzdHJpbmdbXSA9IFtcclxuICBcIl9DaXRpemVuUm9sZVR5cGVcIixcclxuICBcIjExMDE1MFwiLFxyXG4gIFwiMTEwMTUxXCIsXHJcbiAgXCIxMTAxNTJcIixcclxuICBcIjExMDE1M1wiLFxyXG4gIFwiMTEwMTU0XCIsXHJcbiAgXCIxMTAxNTVcIixcclxuICBcIkFGRkxcIixcclxuICBcIkFHTlRcIixcclxuICBcIkFNRU5ERVJcIixcclxuICBcIkFTU0lHTkVEXCIsXHJcbiAgXCJBVUNHXCIsXHJcbiAgXCJBVUxSXCIsXHJcbiAgXCJBVVRcIixcclxuICBcImF1dGhzZXJ2ZXJcIixcclxuICBcIkFVVE1cIixcclxuICBcIkFVV0FcIixcclxuICBcIkNBU1wiLFxyXG4gIFwiQ0FTTVwiLFxyXG4gIFwiQ0xBSU1cIixcclxuICBcIkNMQVNTSUZJRVJcIixcclxuICBcIkNOXCIsXHJcbiAgXCJDTlJQXCIsXHJcbiAgXCJDTlJQTVwiLFxyXG4gIFwiQ09BVVRIXCIsXHJcbiAgXCJDT05TRU5URVJcIixcclxuICBcIkNPTlNXSVRcIixcclxuICBcIkNPTlRcIixcclxuICBcIkNPUEFSVFwiLFxyXG4gIFwiQ09WUFRZXCIsXHJcbiAgXCJDUENBXCIsXHJcbiAgXCJDUlBcIixcclxuICBcIkNSUE1cIixcclxuICBcIkNTVFwiLFxyXG4gIFwiZGF0YWNvbGxlY3RvclwiLFxyXG4gIFwiZGF0YXByb2Nlc3NvclwiLFxyXG4gIFwiZGF0YXN1YmplY3RcIixcclxuICBcIkRFQ0xBU1NJRklFUlwiLFxyXG4gIFwiREVMRUdBVEVFXCIsXHJcbiAgXCJERUxFR0FUT1JcIixcclxuICBcIkRFUEVOXCIsXHJcbiAgXCJET1dOR1JERVJcIixcclxuICBcIkRQT1dBVFRcIixcclxuICBcIkVDT05cIixcclxuICBcIkVNUFwiLFxyXG4gIFwiRVZUV0lUXCIsXHJcbiAgXCJFWENFU1RcIixcclxuICBcIkdSQU5URUVcIixcclxuICBcIkdSQU5UT1JcIixcclxuICBcIkdUXCIsXHJcbiAgXCJHVUFETFRNXCIsXHJcbiAgXCJHVUFSRFwiLFxyXG4gIFwiSFBPV0FUVFwiLFxyXG4gIFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ018MTEwMTUwXCIsXHJcbiAgXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTXwxMTAxNTFcIixcclxuICBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNfDExMDE1MlwiLFxyXG4gIFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ018MTEwMTUzXCIsXHJcbiAgXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTXwxMTAxNTRcIixcclxuICBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNfDExMDE1NVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xBTUVOREVSXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NvbnRyYWN0c2lnbmVydHlwZWNvZGVzfENPQVVUSFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xDT05UXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NvbnRyYWN0c2lnbmVydHlwZWNvZGVzfEVWVFdJVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xQUklNQVVUSFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xSRVZJRVdFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xTT1VSQ0VcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29udHJhY3RzaWduZXJ0eXBlY29kZXN8VFJBTlNcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29udHJhY3RzaWduZXJ0eXBlY29kZXN8VkFMSURcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29udHJhY3RzaWduZXJ0eXBlY29kZXN8VkVSRlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8YXV0aHNlcnZlclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8ZGF0YWNvbGxlY3RvclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8ZGF0YXByb2Nlc3NvclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8ZGF0YXN1YmplY3RcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vZXh0cmEtc2VjdXJpdHktcm9sZS10eXBlfGh1bWFudXNlclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVDR1wiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVMUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVUTVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVXQVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258UFJPTVNLXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25UeXBlfEFVVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uVHlwZXxDU1RcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvblR5cGV8SU5GXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25UeXBlfElSQ1BcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvblR5cGV8TEFcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvblR5cGV8VFJDXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25UeXBlfFdJVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8QUZGTFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8QUdOVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8QVNTSUdORURcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfENMQUlNXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xDT1ZQVFlcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfERFUEVOXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xFQ09OXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xFTVBcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfEdVQVJEXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xJTlZTQkpcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfE5BTUVEXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xOT0tcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfE5PVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8UEFUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xQUk9WXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfF9DaXRpemVuUm9sZVR5cGVcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8Q0FTXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENBU01cIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8Q0xBU1NJRklFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDTlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDTlJQXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENOUlBNXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENPTlNFTlRFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDT05TV0lUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENPUEFSVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDUENBXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENSUFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDUlBNXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfERFQ0xBU1NJRklFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxERUxFR0FURUVcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8REVMRUdBVE9SXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfERPV05HUkRFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxEUE9XQVRUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfEVYQ0VTVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxHUkFOVEVFXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfEdSQU5UT1JcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8R1RcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8R1VBRExUTVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxIUE9XQVRUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfElOVFBSVEVSXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfFBPV0FUVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxSRVNQUlNOXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfFNQT1dBVFRcIixcclxuICBcImh1bWFudXNlclwiLFxyXG4gIFwiSU5GXCIsXHJcbiAgXCJJTlRQUlRFUlwiLFxyXG4gIFwiSU5WU0JKXCIsXHJcbiAgXCJJUkNQXCIsXHJcbiAgXCJMQVwiLFxyXG4gIFwiTkFNRURcIixcclxuICBcIk5PS1wiLFxyXG4gIFwiTk9UXCIsXHJcbiAgXCJQQVRcIixcclxuICBcIlBPV0FUVFwiLFxyXG4gIFwiUFJJTUFVVEhcIixcclxuICBcIlBST01TS1wiLFxyXG4gIFwiUFJPVlwiLFxyXG4gIFwiUkVTUFJTTlwiLFxyXG4gIFwiUkVWSUVXRVJcIixcclxuICBcIlNPVVJDRVwiLFxyXG4gIFwiU1BPV0FUVFwiLFxyXG4gIFwiVFJBTlNcIixcclxuICBcIlRSQ1wiLFxyXG4gIFwiVkFMSURcIixcclxuICBcIlZFUkZcIixcclxuICBcIldJVFwiLFxyXG5dIGFzIGNvbnN0O1xyXG4iXX0=