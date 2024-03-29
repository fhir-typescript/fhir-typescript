// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/provenance-activity-type|1.1.0

/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 */
export const ProvenanceActivityTypeVsValidation: readonly string[] = [
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
] as const;
