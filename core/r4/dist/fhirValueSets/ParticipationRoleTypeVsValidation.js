// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/participation-role-type|4.0.1
/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export const ParticipationRoleTypeVsValidation = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydGljaXBhdGlvblJvbGVUeXBlVnNWYWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9QYXJ0aWNpcGF0aW9uUm9sZVR5cGVWc1ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsdUZBQXVGO0FBRXZGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUNBQWlDLEdBQXNCO0lBQ2xFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixNQUFNO0lBQ04sTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1YsTUFBTTtJQUNOLE1BQU07SUFDTixLQUFLO0lBQ0wsWUFBWTtJQUNaLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLElBQUk7SUFDSixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxPQUFPO0lBQ1AsV0FBVztJQUNYLFNBQVM7SUFDVCxNQUFNO0lBQ04sS0FBSztJQUNMLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxJQUFJO0lBQ0osU0FBUztJQUNULE9BQU87SUFDUCxTQUFTO0lBQ1QscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxxREFBcUQ7SUFDckQsdUVBQXVFO0lBQ3ZFLHNFQUFzRTtJQUN0RSxvRUFBb0U7SUFDcEUsc0VBQXNFO0lBQ3RFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsc0VBQXNFO0lBQ3RFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUsb0VBQW9FO0lBQ3BFLDJFQUEyRTtJQUMzRSw4RUFBOEU7SUFDOUUsOEVBQThFO0lBQzlFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHVFQUF1RTtJQUN2RSxnRUFBZ0U7SUFDaEUsZ0VBQWdFO0lBQ2hFLGdFQUFnRTtJQUNoRSxpRUFBaUU7SUFDakUsK0RBQStEO0lBQy9ELGdFQUFnRTtJQUNoRSxnRUFBZ0U7SUFDaEUseURBQXlEO0lBQ3pELHlEQUF5RDtJQUN6RCw2REFBNkQ7SUFDN0QsMERBQTBEO0lBQzFELDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQseURBQXlEO0lBQ3pELHdEQUF3RDtJQUN4RCwwREFBMEQ7SUFDMUQsMkRBQTJEO0lBQzNELDBEQUEwRDtJQUMxRCx3REFBd0Q7SUFDeEQsd0RBQXdEO0lBQ3hELHdEQUF3RDtJQUN4RCx5REFBeUQ7SUFDekQsb0VBQW9FO0lBQ3BFLHVEQUF1RDtJQUN2RCx3REFBd0Q7SUFDeEQsOERBQThEO0lBQzlELHNEQUFzRDtJQUN0RCx3REFBd0Q7SUFDeEQseURBQXlEO0lBQ3pELDZEQUE2RDtJQUM3RCwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELHdEQUF3RDtJQUN4RCx1REFBdUQ7SUFDdkQsd0RBQXdEO0lBQ3hELGdFQUFnRTtJQUNoRSw2REFBNkQ7SUFDN0QsNkRBQTZEO0lBQzdELDZEQUE2RDtJQUM3RCwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDJEQUEyRDtJQUMzRCwyREFBMkQ7SUFDM0Qsc0RBQXNEO0lBQ3RELDJEQUEyRDtJQUMzRCwyREFBMkQ7SUFDM0QsNERBQTREO0lBQzVELDBEQUEwRDtJQUMxRCwyREFBMkQ7SUFDM0QsMkRBQTJEO0lBQzNELFdBQVc7SUFDWCxLQUFLO0lBQ0wsVUFBVTtJQUNWLFFBQVE7SUFDUixNQUFNO0lBQ04sSUFBSTtJQUNKLE9BQU87SUFDUCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxLQUFLO0lBQ0wsT0FBTztJQUNQLE1BQU07SUFDTixLQUFLO0NBQ0csQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldCBWYWxpZGF0aW9uOiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3BhcnRpY2lwYXRpb24tcm9sZS10eXBlfDQuMC4xXHJcblxyXG4vKipcclxuICogVGhpcyBGSElSIHZhbHVlIHNldCBpcyBjb21wcmlzZWQgb2YgQWN0b3IgcGFydGljaXBhdGlvbiBUeXBlIGNvZGVzLCB3aGljaCBjYW4gYmUgdXNlZCB0byB2YWx1ZSBGSElSIGFnZW50cywgYWN0b3JzLCBhbmQgb3RoZXIgcm9sZSAgICAgICAgIGVsZW1lbnRzLiBUaGUgRkhJUiBBY3RvciBwYXJ0aWNpcGF0aW9uIHR5cGUgdmFsdWUgc2V0IGlzIGJhc2VkIG9uICAgIERJQ09NIEF1ZGl0IE1lc3NhZ2UsIEM0MDI7ICAgQVNUTSBTdGFuZGFyZCwgRTE3NjItOTUgWzIwMTNdOyBzZWxlY3RlZCBjb2RlcyBhbmQgICAgICAgICAgZGVyaXZlZCBhY3RvciByb2xlcyBmcm9tIEhMNyBSb2xlQ2xhc3MgT0lEIDIuMTYuODQwLjEuMTEzODgzLjUuMTEwOyAgICBITDcgUm9sZSBDb2RlIDIuMTYuODQwLjEuMTEzODgzLjUuMTExLCBpbmNsdWRpbmcgQWdlbnRSb2xlVHlwZTsgICAgICAgICAgSEw3IFBhcnRpY2lwYXRpb25UeXBlIE9JRDogMi4xNi44NDAuMS4xMTM4ODMuNS45MDsgYW5kICAgIEhMNyBQYXJ0aWNpcGF0aW9uRnVuY3Rpb24gY29kZXMgT0lEOiAyLjE2Ljg0MC4xLjExMzg4My41Ljg4LiAgICAgICAgICAgVGhpcyB2YWx1ZSBzZXQgaW5jbHVkZXMsIGJ5IHJlZmVyZW5jZSwgcm9sZSBjb2RlcyBmcm9tIGV4dGVybmFsIGNvZGUgc3lzdGVtczogTlVDQyBIZWFsdGggQ2FyZSBQcm92aWRlciBUYXhvbm9teSBPSUQ6IDIuMTYuODQwLjEuMTEzODgzLjYuMTAxOyAgICAgICAgICBOb3J0aCBBbWVyaWNhbiBJbmR1c3RyeSBDbGFzc2lmaWNhdGlvbiBTeXN0ZW0gW05BSUNTXU9JRDogMi4xNi44NDAuMS4xMTM4ODMuNi44NTsgSW5kdXN0cnlDbGFzc2lmaWNhdGlvblN5c3RlbSAyLjE2Ljg0MC4xLjExMzg4My4xLjExLjE2MDM5OyAgICAgICAgICBhbmQgVVMgQ2Vuc3VzIE9jY3VwYXRpb24gQ29kZSBPSUQ6IDIuMTYuODQwLjEuMTEzODgzLjYuMjQzIGZvciByZWxldmFudCByZWNpcGllbnQgb3IgY3VzdG9kaWFuIGNvZGVzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIHZhbHVlIHNldC4gICAgICAgICAgICBJZiBubyBzb3VyY2UgaXMgaW5kaWNhdGVkIGluIHRoZSBkZWZpbml0aW9uIGNvbW1lbnRzLCB0aGVuIHRoZXNlIGFyZSBleGFtcGxlIEZISVIgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFydGljaXBhdGlvblJvbGVUeXBlVnNWYWxpZGF0aW9uOiByZWFkb25seSBzdHJpbmdbXSA9IFtcclxuICBcIl9DaXRpemVuUm9sZVR5cGVcIixcclxuICBcIjExMDE1MFwiLFxyXG4gIFwiMTEwMTUxXCIsXHJcbiAgXCIxMTAxNTJcIixcclxuICBcIjExMDE1M1wiLFxyXG4gIFwiMTEwMTU0XCIsXHJcbiAgXCIxMTAxNTVcIixcclxuICBcIkFGRkxcIixcclxuICBcIkFHTlRcIixcclxuICBcIkFNRU5ERVJcIixcclxuICBcIkFTU0lHTkVEXCIsXHJcbiAgXCJBVUNHXCIsXHJcbiAgXCJBVUxSXCIsXHJcbiAgXCJBVVRcIixcclxuICBcImF1dGhzZXJ2ZXJcIixcclxuICBcIkFVVE1cIixcclxuICBcIkFVV0FcIixcclxuICBcIkNBU1wiLFxyXG4gIFwiQ0FTTVwiLFxyXG4gIFwiQ0xBSU1cIixcclxuICBcIkNMQVNTSUZJRVJcIixcclxuICBcIkNOXCIsXHJcbiAgXCJDTlJQXCIsXHJcbiAgXCJDTlJQTVwiLFxyXG4gIFwiQ09BVVRIXCIsXHJcbiAgXCJDT05TRU5URVJcIixcclxuICBcIkNPTlNXSVRcIixcclxuICBcIkNPTlRcIixcclxuICBcIkNPUEFSVFwiLFxyXG4gIFwiQ09WUFRZXCIsXHJcbiAgXCJDUENBXCIsXHJcbiAgXCJDUlBcIixcclxuICBcIkNSUE1cIixcclxuICBcIkNTVFwiLFxyXG4gIFwiZGF0YWNvbGxlY3RvclwiLFxyXG4gIFwiZGF0YXByb2Nlc3NvclwiLFxyXG4gIFwiZGF0YXN1YmplY3RcIixcclxuICBcIkRFQ0xBU1NJRklFUlwiLFxyXG4gIFwiREVMRUdBVEVFXCIsXHJcbiAgXCJERUxFR0FUT1JcIixcclxuICBcIkRFUEVOXCIsXHJcbiAgXCJET1dOR1JERVJcIixcclxuICBcIkRQT1dBVFRcIixcclxuICBcIkVDT05cIixcclxuICBcIkVNUFwiLFxyXG4gIFwiRVZUV0lUXCIsXHJcbiAgXCJFWENFU1RcIixcclxuICBcIkdSQU5URUVcIixcclxuICBcIkdSQU5UT1JcIixcclxuICBcIkdUXCIsXHJcbiAgXCJHVUFETFRNXCIsXHJcbiAgXCJHVUFSRFwiLFxyXG4gIFwiSFBPV0FUVFwiLFxyXG4gIFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ018MTEwMTUwXCIsXHJcbiAgXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTXwxMTAxNTFcIixcclxuICBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNfDExMDE1MlwiLFxyXG4gIFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ018MTEwMTUzXCIsXHJcbiAgXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTXwxMTAxNTRcIixcclxuICBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNfDExMDE1NVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xBTUVOREVSXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NvbnRyYWN0c2lnbmVydHlwZWNvZGVzfENPQVVUSFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xDT05UXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NvbnRyYWN0c2lnbmVydHlwZWNvZGVzfEVWVFdJVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xQUklNQVVUSFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xSRVZJRVdFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb250cmFjdHNpZ25lcnR5cGVjb2Rlc3xTT1VSQ0VcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29udHJhY3RzaWduZXJ0eXBlY29kZXN8VFJBTlNcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29udHJhY3RzaWduZXJ0eXBlY29kZXN8VkFMSURcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29udHJhY3RzaWduZXJ0eXBlY29kZXN8VkVSRlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8YXV0aHNlcnZlclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8ZGF0YWNvbGxlY3RvclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8ZGF0YXByb2Nlc3NvclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9leHRyYS1zZWN1cml0eS1yb2xlLXR5cGV8ZGF0YXN1YmplY3RcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vZXh0cmEtc2VjdXJpdHktcm9sZS10eXBlfGh1bWFudXNlclwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVDR1wiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVMUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVUTVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258QVVXQVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uRnVuY3Rpb258UFJPTVNLXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25UeXBlfEFVVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1QYXJ0aWNpcGF0aW9uVHlwZXxDU1RcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvblR5cGV8SU5GXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25UeXBlfElSQ1BcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvblR5cGV8TEFcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUGFydGljaXBhdGlvblR5cGV8VFJDXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVBhcnRpY2lwYXRpb25UeXBlfFdJVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8QUZGTFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8QUdOVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8QVNTSUdORURcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfENMQUlNXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xDT1ZQVFlcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfERFUEVOXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xFQ09OXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xFTVBcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfEdVQVJEXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xJTlZTQkpcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfE5BTUVEXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xOT0tcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNsYXNzfE5PVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ2xhc3N8UEFUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDbGFzc3xQUk9WXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfF9DaXRpemVuUm9sZVR5cGVcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8Q0FTXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENBU01cIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8Q0xBU1NJRklFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDTlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDTlJQXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENOUlBNXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENPTlNFTlRFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDT05TV0lUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENPUEFSVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDUENBXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfENSUFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxDUlBNXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfERFQ0xBU1NJRklFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxERUxFR0FURUVcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8REVMRUdBVE9SXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfERPV05HUkRFUlwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxEUE9XQVRUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfEVYQ0VTVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxHUkFOVEVFXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfEdSQU5UT1JcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8R1RcIixcclxuICBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjMtUm9sZUNvZGV8R1VBRExUTVwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxIUE9XQVRUXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfElOVFBSVEVSXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfFBPV0FUVFwiLFxyXG4gIFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1Sb2xlQ29kZXxSRVNQUlNOXCIsXHJcbiAgXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLVJvbGVDb2RlfFNQT1dBVFRcIixcclxuICBcImh1bWFudXNlclwiLFxyXG4gIFwiSU5GXCIsXHJcbiAgXCJJTlRQUlRFUlwiLFxyXG4gIFwiSU5WU0JKXCIsXHJcbiAgXCJJUkNQXCIsXHJcbiAgXCJMQVwiLFxyXG4gIFwiTkFNRURcIixcclxuICBcIk5PS1wiLFxyXG4gIFwiTk9UXCIsXHJcbiAgXCJQQVRcIixcclxuICBcIlBPV0FUVFwiLFxyXG4gIFwiUFJJTUFVVEhcIixcclxuICBcIlBST01TS1wiLFxyXG4gIFwiUFJPVlwiLFxyXG4gIFwiUkVTUFJTTlwiLFxyXG4gIFwiUkVWSUVXRVJcIixcclxuICBcIlNPVVJDRVwiLFxyXG4gIFwiU1BPV0FUVFwiLFxyXG4gIFwiVFJBTlNcIixcclxuICBcIlRSQ1wiLFxyXG4gIFwiVkFMSURcIixcclxuICBcIlZFUkZcIixcclxuICBcIldJVFwiLFxyXG5dIGFzIGNvbnN0O1xyXG4iXX0=