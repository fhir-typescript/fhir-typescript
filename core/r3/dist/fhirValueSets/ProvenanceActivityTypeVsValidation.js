// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/provenance-activity-type|1.1.0
/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export const ProvenanceActivityTypeVsValidation = [
    "ABORT",
    "aborted",
    "ACTIVATE",
    "active",
    "aggregate",
    "ANONY",
    "AOD",
    "APPEND",
    "Attribution",
    "AU",
    "AUDIT",
    "AUDTR",
    "CANCEL",
    "cancelled",
    "Collection",
    "Communication",
    "COMPLETE",
    "completed",
    "compose",
    "CPLYCC",
    "CPLYCD",
    "CPLYJPP",
    "CPLYOPP",
    "CPLYOSP",
    "CPLYPOL",
    "CREATE",
    "DECLASSIFYLABEL",
    "DEID",
    "DELAU",
    "DELETE",
    "Derivation",
    "DI",
    "DO",
    "DOWNGRDLABEL",
    "DRIVLABEL",
    "ENCRYPT",
    "ENCRYPTR",
    "ENCRYPTT",
    "ENCRYPTU",
    "End",
    "EXECUTE",
    "Generation",
    "held",
    "HOLD",
    "http://hl7.org/fhir/extra-activity-type|aggregate",
    "http://hl7.org/fhir/extra-activity-type|compose",
    "http://hl7.org/fhir/extra-activity-type|label",
    "http://hl7.org/fhir/v3/ActCode|ANONY",
    "http://hl7.org/fhir/v3/ActCode|AOD",
    "http://hl7.org/fhir/v3/ActCode|AUDIT",
    "http://hl7.org/fhir/v3/ActCode|AUDTR",
    "http://hl7.org/fhir/v3/ActCode|CPLYCC",
    "http://hl7.org/fhir/v3/ActCode|CPLYCD",
    "http://hl7.org/fhir/v3/ActCode|CPLYJPP",
    "http://hl7.org/fhir/v3/ActCode|CPLYOPP",
    "http://hl7.org/fhir/v3/ActCode|CPLYOSP",
    "http://hl7.org/fhir/v3/ActCode|CPLYPOL",
    "http://hl7.org/fhir/v3/ActCode|DECLASSIFYLABEL",
    "http://hl7.org/fhir/v3/ActCode|DEID",
    "http://hl7.org/fhir/v3/ActCode|DELAU",
    "http://hl7.org/fhir/v3/ActCode|DOWNGRDLABEL",
    "http://hl7.org/fhir/v3/ActCode|DRIVLABEL",
    "http://hl7.org/fhir/v3/ActCode|ENCRYPT",
    "http://hl7.org/fhir/v3/ActCode|ENCRYPTR",
    "http://hl7.org/fhir/v3/ActCode|ENCRYPTT",
    "http://hl7.org/fhir/v3/ActCode|ENCRYPTU",
    "http://hl7.org/fhir/v3/ActCode|HUAPRV",
    "http://hl7.org/fhir/v3/ActCode|LABEL",
    "http://hl7.org/fhir/v3/ActCode|MASK",
    "http://hl7.org/fhir/v3/ActCode|MINEC",
    "http://hl7.org/fhir/v3/ActCode|ObligationPolicy",
    "http://hl7.org/fhir/v3/ActCode|PERSISTLABEL",
    "http://hl7.org/fhir/v3/ActCode|PRIVMARK",
    "http://hl7.org/fhir/v3/ActCode|PSEUD",
    "http://hl7.org/fhir/v3/ActCode|REDACT",
    "http://hl7.org/fhir/v3/ActCode|UPGRDLABEL",
    "http://hl7.org/fhir/v3/ActStatus|aborted",
    "http://hl7.org/fhir/v3/ActStatus|active",
    "http://hl7.org/fhir/v3/ActStatus|cancelled",
    "http://hl7.org/fhir/v3/ActStatus|completed",
    "http://hl7.org/fhir/v3/ActStatus|held",
    "http://hl7.org/fhir/v3/ActStatus|new",
    "http://hl7.org/fhir/v3/ActStatus|normal",
    "http://hl7.org/fhir/v3/ActStatus|nullified",
    "http://hl7.org/fhir/v3/ActStatus|obsolete",
    "http://hl7.org/fhir/v3/ActStatus|suspended",
    "http://hl7.org/fhir/v3/DataOperation|ABORT",
    "http://hl7.org/fhir/v3/DataOperation|ACTIVATE",
    "http://hl7.org/fhir/v3/DataOperation|APPEND",
    "http://hl7.org/fhir/v3/DataOperation|CANCEL",
    "http://hl7.org/fhir/v3/DataOperation|COMPLETE",
    "http://hl7.org/fhir/v3/DataOperation|CREATE",
    "http://hl7.org/fhir/v3/DataOperation|DELETE",
    "http://hl7.org/fhir/v3/DataOperation|EXECUTE",
    "http://hl7.org/fhir/v3/DataOperation|HOLD",
    "http://hl7.org/fhir/v3/DataOperation|JUMP",
    "http://hl7.org/fhir/v3/DataOperation|MODIFYSTATUS",
    "http://hl7.org/fhir/v3/DataOperation|NULLIFY",
    "http://hl7.org/fhir/v3/DataOperation|OBSOLETE",
    "http://hl7.org/fhir/v3/DataOperation|OPERATE",
    "http://hl7.org/fhir/v3/DataOperation|REACTIVATE",
    "http://hl7.org/fhir/v3/DataOperation|READ",
    "http://hl7.org/fhir/v3/DataOperation|RELEASE",
    "http://hl7.org/fhir/v3/DataOperation|RESUME",
    "http://hl7.org/fhir/v3/DataOperation|SUSPEND",
    "http://hl7.org/fhir/v3/DataOperation|UPDATE",
    "http://hl7.org/fhir/v3/DocumentCompletion|AU",
    "http://hl7.org/fhir/v3/DocumentCompletion|DI",
    "http://hl7.org/fhir/v3/DocumentCompletion|DO",
    "http://hl7.org/fhir/v3/DocumentCompletion|IN",
    "http://hl7.org/fhir/v3/DocumentCompletion|IP",
    "http://hl7.org/fhir/v3/DocumentCompletion|LA",
    "http://hl7.org/fhir/v3/DocumentCompletion|NU",
    "http://hl7.org/fhir/v3/DocumentCompletion|PA",
    "http://hl7.org/fhir/v3/DocumentCompletion|UC",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Attribution",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Collection",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Communication",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Derivation",
    "http://hl7.org/fhir/w3c-provenance-activity-type|End",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Generation",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Invalidation",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Primary-Source",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Quotation",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Revision",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Start",
    "http://hl7.org/fhir/w3c-provenance-activity-type|Usage",
    "HUAPRV",
    "IN",
    "Invalidation",
    "IP",
    "JUMP",
    "LA",
    "label",
    "LABEL",
    "MASK",
    "MINEC",
    "MODIFYSTATUS",
    "new",
    "normal",
    "NU",
    "nullified",
    "NULLIFY",
    "ObligationPolicy",
    "obsolete",
    "OBSOLETE",
    "OPERATE",
    "PA",
    "PERSISTLABEL",
    "Primary-Source",
    "PRIVMARK",
    "PSEUD",
    "Quotation",
    "REACTIVATE",
    "READ",
    "REDACT",
    "RELEASE",
    "RESUME",
    "Revision",
    "Start",
    "SUSPEND",
    "suspended",
    "UC",
    "UPDATE",
    "UPGRDLABEL",
    "Usage",
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmVuYW5jZUFjdGl2aXR5VHlwZVZzVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUHJvdmVuYW5jZUFjdGl2aXR5VHlwZVZzVmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3RkFBd0Y7QUFFeEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBc0I7SUFDbkUsT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFdBQVc7SUFDWCxPQUFPO0lBQ1AsS0FBSztJQUNMLFFBQVE7SUFDUixhQUFhO0lBQ2IsSUFBSTtJQUNKLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFFBQVE7SUFDUixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLElBQUk7SUFDSixJQUFJO0lBQ0osY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsS0FBSztJQUNMLFNBQVM7SUFDVCxZQUFZO0lBQ1osTUFBTTtJQUNOLE1BQU07SUFDTixtREFBbUQ7SUFDbkQsaURBQWlEO0lBQ2pELCtDQUErQztJQUMvQyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsZ0RBQWdEO0lBQ2hELHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQyx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLGlEQUFpRDtJQUNqRCw2Q0FBNkM7SUFDN0MseUNBQXlDO0lBQ3pDLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsMkNBQTJDO0lBQzNDLDBDQUEwQztJQUMxQyx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFDNUMsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1Qyw0Q0FBNEM7SUFDNUMsK0NBQStDO0lBQy9DLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsK0NBQStDO0lBQy9DLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsbURBQW1EO0lBQ25ELDhDQUE4QztJQUM5QywrQ0FBK0M7SUFDL0MsOENBQThDO0lBQzlDLGlEQUFpRDtJQUNqRCwyQ0FBMkM7SUFDM0MsOENBQThDO0lBQzlDLDZDQUE2QztJQUM3Qyw4Q0FBOEM7SUFDOUMsNkNBQTZDO0lBQzdDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhEQUE4RDtJQUM5RCw2REFBNkQ7SUFDN0QsZ0VBQWdFO0lBQ2hFLDZEQUE2RDtJQUM3RCxzREFBc0Q7SUFDdEQsNkRBQTZEO0lBQzdELCtEQUErRDtJQUMvRCxpRUFBaUU7SUFDakUsNERBQTREO0lBQzVELDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsd0RBQXdEO0lBQ3hELFFBQVE7SUFDUixJQUFJO0lBQ0osY0FBYztJQUNkLElBQUk7SUFDSixNQUFNO0lBQ04sSUFBSTtJQUNKLE9BQU87SUFDUCxPQUFPO0lBQ1AsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsS0FBSztJQUNMLFFBQVE7SUFDUixJQUFJO0lBQ0osV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0lBQ1QsSUFBSTtJQUNKLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsSUFBSTtJQUNKLFFBQVE7SUFDUixZQUFZO0lBQ1osT0FBTztDQUNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQgVmFsaWRhdGlvbjogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wcm92ZW5hbmNlLWFjdGl2aXR5LXR5cGV8MS4xLjBcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBjb250YWlucyByZXByZXNlbnRhdGl2ZSBBY3Rpdml0eSBUeXBlIGNvZGVzLCB3aGljaCBpbmNsdWRlcyBjb2RlcyBmcm9tIHRoZSBITDcgRG9jdW1lbnRDb21wbGV0aW9uLCBBY3RTdGF0dXMsIGFuZCBEYXRhT3BlcmF0aW9ucyBjb2RlIHN5c3RlbSwgVzNDIFBST1YtRE0gYW5kIFBST1YtTiBjb25jZXB0cyBhbmQgZGlzcGxheSBuYW1lcywgc2V2ZXJhbCBITDcgTGlmZWN5Y2xlIEV2ZW50IGNvZGVzIGZvciB3aGljaCB0aGVyZSBhcmUgYWdyZWVkIHVwb24gZGVmaW5pdGlvbnMsIGFuZCBub24tZHVwbGljYXRlZCBjb2RlcyBmcm9tIHRoZSBITDcgU2VjdXJpdHkgYW5kIFByaXZhY3kgT250b2xvZ3kgT3BlcmF0aW9ucyBjb2Rlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQcm92ZW5hbmNlQWN0aXZpdHlUeXBlVnNWYWxpZGF0aW9uOiByZWFkb25seSBzdHJpbmdbXSA9IFtcclxuICBcIkFCT1JUXCIsXHJcbiAgXCJhYm9ydGVkXCIsXHJcbiAgXCJBQ1RJVkFURVwiLFxyXG4gIFwiYWN0aXZlXCIsXHJcbiAgXCJhZ2dyZWdhdGVcIixcclxuICBcIkFOT05ZXCIsXHJcbiAgXCJBT0RcIixcclxuICBcIkFQUEVORFwiLFxyXG4gIFwiQXR0cmlidXRpb25cIixcclxuICBcIkFVXCIsXHJcbiAgXCJBVURJVFwiLFxyXG4gIFwiQVVEVFJcIixcclxuICBcIkNBTkNFTFwiLFxyXG4gIFwiY2FuY2VsbGVkXCIsXHJcbiAgXCJDb2xsZWN0aW9uXCIsXHJcbiAgXCJDb21tdW5pY2F0aW9uXCIsXHJcbiAgXCJDT01QTEVURVwiLFxyXG4gIFwiY29tcGxldGVkXCIsXHJcbiAgXCJjb21wb3NlXCIsXHJcbiAgXCJDUExZQ0NcIixcclxuICBcIkNQTFlDRFwiLFxyXG4gIFwiQ1BMWUpQUFwiLFxyXG4gIFwiQ1BMWU9QUFwiLFxyXG4gIFwiQ1BMWU9TUFwiLFxyXG4gIFwiQ1BMWVBPTFwiLFxyXG4gIFwiQ1JFQVRFXCIsXHJcbiAgXCJERUNMQVNTSUZZTEFCRUxcIixcclxuICBcIkRFSURcIixcclxuICBcIkRFTEFVXCIsXHJcbiAgXCJERUxFVEVcIixcclxuICBcIkRlcml2YXRpb25cIixcclxuICBcIkRJXCIsXHJcbiAgXCJET1wiLFxyXG4gIFwiRE9XTkdSRExBQkVMXCIsXHJcbiAgXCJEUklWTEFCRUxcIixcclxuICBcIkVOQ1JZUFRcIixcclxuICBcIkVOQ1JZUFRSXCIsXHJcbiAgXCJFTkNSWVBUVFwiLFxyXG4gIFwiRU5DUllQVFVcIixcclxuICBcIkVuZFwiLFxyXG4gIFwiRVhFQ1VURVwiLFxyXG4gIFwiR2VuZXJhdGlvblwiLFxyXG4gIFwiaGVsZFwiLFxyXG4gIFwiSE9MRFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci9leHRyYS1hY3Rpdml0eS10eXBlfGFnZ3JlZ2F0ZVwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci9leHRyYS1hY3Rpdml0eS10eXBlfGNvbXBvc2VcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZXh0cmEtYWN0aXZpdHktdHlwZXxsYWJlbFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfEFOT05ZXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8QU9EXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8QVVESVRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxBVURUUlwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfENQTFlDQ1wiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfENQTFlDRFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfENQTFlKUFBcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxDUExZT1BQXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8Q1BMWU9TUFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfENQTFlQT0xcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxERUNMQVNTSUZZTEFCRUxcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxERUlEXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8REVMQVVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxET1dOR1JETEFCRUxcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxEUklWTEFCRUxcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxFTkNSWVBUXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8RU5DUllQVFJcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxFTkNSWVBUVFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfEVOQ1JZUFRVXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8SFVBUFJWXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8TEFCRUxcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxNQVNLXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8TUlORUNcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxPYmxpZ2F0aW9uUG9saWN5XCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8UEVSU0lTVExBQkVMXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdENvZGV8UFJJVk1BUktcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0Q29kZXxQU0VVRFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfFJFREFDVFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RDb2RlfFVQR1JETEFCRUxcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0U3RhdHVzfGFib3J0ZWRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0U3RhdHVzfGFjdGl2ZVwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RTdGF0dXN8Y2FuY2VsbGVkXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdFN0YXR1c3xjb21wbGV0ZWRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0U3RhdHVzfGhlbGRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0U3RhdHVzfG5ld1wiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9BY3RTdGF0dXN8bm9ybWFsXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdFN0YXR1c3xudWxsaWZpZWRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvQWN0U3RhdHVzfG9ic29sZXRlXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0FjdFN0YXR1c3xzdXNwZW5kZWRcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxBQk9SVFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9EYXRhT3BlcmF0aW9ufEFDVElWQVRFXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258QVBQRU5EXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258Q0FOQ0VMXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258Q09NUExFVEVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxDUkVBVEVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxERUxFVEVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxFWEVDVVRFXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258SE9MRFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9EYXRhT3BlcmF0aW9ufEpVTVBcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxNT0RJRllTVEFUVVNcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxOVUxMSUZZXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258T0JTT0xFVEVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxPUEVSQVRFXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258UkVBQ1RJVkFURVwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9EYXRhT3BlcmF0aW9ufFJFQURcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRGF0YU9wZXJhdGlvbnxSRUxFQVNFXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258UkVTVU1FXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RhdGFPcGVyYXRpb258U1VTUEVORFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9EYXRhT3BlcmF0aW9ufFVQREFURVwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9Eb2N1bWVudENvbXBsZXRpb258QVVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRG9jdW1lbnRDb21wbGV0aW9ufERJXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RvY3VtZW50Q29tcGxldGlvbnxET1wiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9Eb2N1bWVudENvbXBsZXRpb258SU5cIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRG9jdW1lbnRDb21wbGV0aW9ufElQXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RvY3VtZW50Q29tcGxldGlvbnxMQVwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci92My9Eb2N1bWVudENvbXBsZXRpb258TlVcIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdjMvRG9jdW1lbnRDb21wbGV0aW9ufFBBXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3YzL0RvY3VtZW50Q29tcGxldGlvbnxVQ1wiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci93M2MtcHJvdmVuYW5jZS1hY3Rpdml0eS10eXBlfEF0dHJpYnV0aW9uXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3czYy1wcm92ZW5hbmNlLWFjdGl2aXR5LXR5cGV8Q29sbGVjdGlvblwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci93M2MtcHJvdmVuYW5jZS1hY3Rpdml0eS10eXBlfENvbW11bmljYXRpb25cIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdzNjLXByb3ZlbmFuY2UtYWN0aXZpdHktdHlwZXxEZXJpdmF0aW9uXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3czYy1wcm92ZW5hbmNlLWFjdGl2aXR5LXR5cGV8RW5kXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3czYy1wcm92ZW5hbmNlLWFjdGl2aXR5LXR5cGV8R2VuZXJhdGlvblwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci93M2MtcHJvdmVuYW5jZS1hY3Rpdml0eS10eXBlfEludmFsaWRhdGlvblwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci93M2MtcHJvdmVuYW5jZS1hY3Rpdml0eS10eXBlfFByaW1hcnktU291cmNlXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3czYy1wcm92ZW5hbmNlLWFjdGl2aXR5LXR5cGV8UXVvdGF0aW9uXCIsXHJcbiAgXCJodHRwOi8vaGw3Lm9yZy9maGlyL3czYy1wcm92ZW5hbmNlLWFjdGl2aXR5LXR5cGV8UmV2aXNpb25cIixcclxuICBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdzNjLXByb3ZlbmFuY2UtYWN0aXZpdHktdHlwZXxTdGFydFwiLFxyXG4gIFwiaHR0cDovL2hsNy5vcmcvZmhpci93M2MtcHJvdmVuYW5jZS1hY3Rpdml0eS10eXBlfFVzYWdlXCIsXHJcbiAgXCJIVUFQUlZcIixcclxuICBcIklOXCIsXHJcbiAgXCJJbnZhbGlkYXRpb25cIixcclxuICBcIklQXCIsXHJcbiAgXCJKVU1QXCIsXHJcbiAgXCJMQVwiLFxyXG4gIFwibGFiZWxcIixcclxuICBcIkxBQkVMXCIsXHJcbiAgXCJNQVNLXCIsXHJcbiAgXCJNSU5FQ1wiLFxyXG4gIFwiTU9ESUZZU1RBVFVTXCIsXHJcbiAgXCJuZXdcIixcclxuICBcIm5vcm1hbFwiLFxyXG4gIFwiTlVcIixcclxuICBcIm51bGxpZmllZFwiLFxyXG4gIFwiTlVMTElGWVwiLFxyXG4gIFwiT2JsaWdhdGlvblBvbGljeVwiLFxyXG4gIFwib2Jzb2xldGVcIixcclxuICBcIk9CU09MRVRFXCIsXHJcbiAgXCJPUEVSQVRFXCIsXHJcbiAgXCJQQVwiLFxyXG4gIFwiUEVSU0lTVExBQkVMXCIsXHJcbiAgXCJQcmltYXJ5LVNvdXJjZVwiLFxyXG4gIFwiUFJJVk1BUktcIixcclxuICBcIlBTRVVEXCIsXHJcbiAgXCJRdW90YXRpb25cIixcclxuICBcIlJFQUNUSVZBVEVcIixcclxuICBcIlJFQURcIixcclxuICBcIlJFREFDVFwiLFxyXG4gIFwiUkVMRUFTRVwiLFxyXG4gIFwiUkVTVU1FXCIsXHJcbiAgXCJSZXZpc2lvblwiLFxyXG4gIFwiU3RhcnRcIixcclxuICBcIlNVU1BFTkRcIixcclxuICBcInN1c3BlbmRlZFwiLFxyXG4gIFwiVUNcIixcclxuICBcIlVQREFURVwiLFxyXG4gIFwiVVBHUkRMQUJFTFwiLFxyXG4gIFwiVXNhZ2VcIixcclxuXSBhcyBjb25zdDtcclxuIl19