// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/participation-role-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export type ParticipationRoleTypeCodingType = {
  /**
   * Code: _CitizenRoleType
   */
  CitizenRoleType: CodingArgs;
  /**
   * 110150: Audit participant role ID of software application
   */
  Application: CodingArgs;
  /**
   * 110151: Audit participant role ID of software application launcher, i.e., the entity that started or stopped an application
   */
  ApplicationLauncher: CodingArgs;
  /**
   * 110152: Audit participant role ID of the receiver of data
   */
  DestinationRoleID: CodingArgs;
  /**
   * 110153: Audit participant role ID of the sender of data
   */
  SourceRoleID: CodingArgs;
  /**
   * 110154: Audit participant role ID of media receiving data during an export
   */
  DestinationMedia: CodingArgs;
  /**
   * 110155: Audit participant role ID of media providing data during an import
   */
  SourceMedia: CodingArgs;
  /**
   * Code: AFFL
   */
  AFFL: CodingArgs;
  /**
   * Code: AGNT
   */
  AGNT: CodingArgs;
  /**
   * Code: AMENDER
   */
  AMENDER: CodingArgs;
  /**
   * Code: ASSIGNED
   */
  ASSIGNED: CodingArgs;
  /**
   * Code: AUCG
   */
  AUCG: CodingArgs;
  /**
   * Code: AULR
   */
  AULR: CodingArgs;
  /**
   * Code: AUT
   */
  AUT: CodingArgs;
  /**
   * authserver: An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner's preapproved permissions. For example, an UMA Authorization Server[UMA]
   */
  AuthorizationServer: CodingArgs;
  /**
   * Code: AUTM
   */
  AUTM: CodingArgs;
  /**
   * Code: AUWA
   */
  AUWA: CodingArgs;
  /**
   * Code: CAS
   */
  AsylumSeeker: CodingArgs;
  /**
   * Code: CASM
   */
  SingleMinorAsylumSeeker: CodingArgs;
  /**
   * Code: CLAIM
   */
  CLAIM: CodingArgs;
  /**
   * Code: CLASSIFIER
   */
  CLASSIFIER: CodingArgs;
  /**
   * Code: CN
   */
  National: CodingArgs;
  /**
   * Code: CNRP
   */
  NonCountryMemberWithoutResidencePermit: CodingArgs;
  /**
   * Code: CNRPM
   */
  NonCountryMemberMinorWithoutResidencePermit: CodingArgs;
  /**
   * Code: COAUTH
   */
  COAUTH: CodingArgs;
  /**
   * Code: CONSENTER
   */
  CONSENTER: CodingArgs;
  /**
   * Code: CONSWIT
   */
  CONSWIT: CodingArgs;
  /**
   * Code: CONT
   */
  CONT: CodingArgs;
  /**
   * Code: COPART
   */
  COPART: CodingArgs;
  /**
   * Code: COVPTY
   */
  COVPTY: CodingArgs;
  /**
   * Code: CPCA
   */
  PermitCardApplicant: CodingArgs;
  /**
   * Code: CRP
   */
  NonCountryMemberWithResidencePermit: CodingArgs;
  /**
   * Code: CRPM
   */
  NonCountryMemberMinorWithResidencePermit: CodingArgs;
  /**
   * Code: CST
   */
  CST: CodingArgs;
  /**
   * datacollector: An entity that collects information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataCollector: CodingArgs;
  /**
   * dataprocessor: An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataProcessor: CodingArgs;
  /**
   * datasubject: A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information's management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataSubject: CodingArgs;
  /**
   * Code: DECLASSIFIER
   */
  DECLASSIFIER: CodingArgs;
  /**
   * Code: DELEGATEE
   */
  DELEGATEE: CodingArgs;
  /**
   * Code: DELEGATOR
   */
  DELEGATOR: CodingArgs;
  /**
   * Code: DEPEN
   */
  DEPEN: CodingArgs;
  /**
   * Code: DOWNGRDER
   */
  DOWNGRDER: CodingArgs;
  /**
   * Code: DPOWATT
   */
  DPOWATT: CodingArgs;
  /**
   * Code: ECON
   */
  ECON: CodingArgs;
  /**
   * Code: EMP
   */
  EMP: CodingArgs;
  /**
   * Code: EVTWIT
   */
  EVTWIT: CodingArgs;
  /**
   * Code: EXCEST
   */
  EXCEST: CodingArgs;
  /**
   * Code: GRANTEE
   */
  GRANTEE: CodingArgs;
  /**
   * Code: GRANTOR
   */
  GRANTOR: CodingArgs;
  /**
   * Code: GT
   */
  GT: CodingArgs;
  /**
   * Code: GUADLTM
   */
  GUADLTM: CodingArgs;
  /**
   * Code: GUARD
   */
  GUARD: CodingArgs;
  /**
   * Code: HPOWATT
   */
  HPOWATT: CodingArgs;
  /**
   * humanuser: The human user that has participated.
   */
  HumanUser: CodingArgs;
  /**
   * Code: INF
   */
  INF: CodingArgs;
  /**
   * Code: INTPRTER
   */
  INTPRTER: CodingArgs;
  /**
   * Code: INVSBJ
   */
  INVSBJ: CodingArgs;
  /**
   * Code: IRCP
   */
  IRCP: CodingArgs;
  /**
   * Code: LA
   */
  LA: CodingArgs;
  /**
   * Code: NAMED
   */
  NAMED: CodingArgs;
  /**
   * Code: NOK
   */
  NOK: CodingArgs;
  /**
   * Code: NOT
   */
  NOT: CodingArgs;
  /**
   * Code: PAT
   */
  PAT: CodingArgs;
  /**
   * Code: POWATT
   */
  POWATT: CodingArgs;
  /**
   * Code: PRIMAUTH
   */
  PRIMAUTH: CodingArgs;
  /**
   * Code: PROMSK
   */
  PROMSK: CodingArgs;
  /**
   * Code: PROV
   */
  PROV: CodingArgs;
  /**
   * Code: RESPRSN
   */
  RESPRSN: CodingArgs;
  /**
   * Code: REVIEWER
   */
  REVIEWER: CodingArgs;
  /**
   * Code: SOURCE
   */
  SOURCE: CodingArgs;
  /**
   * Code: SPOWATT
   */
  SPOWATT: CodingArgs;
  /**
   * Code: TRANS
   */
  TRANS: CodingArgs;
  /**
   * Code: TRC
   */
  TRC: CodingArgs;
  /**
   * Code: VALID
   */
  VALID: CodingArgs;
  /**
   * Code: VERF
   */
  VERF: CodingArgs;
  /**
   * Code: WIT
   */
  WIT: CodingArgs;
}

/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export const ParticipationRoleTypeCodings:ParticipationRoleTypeCodingType = {
  /**
   * Code: _CitizenRoleType
   */
  CitizenRoleType: {
    display: "CitizenRoleType",
    code: "_CitizenRoleType",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * 110150: Audit participant role ID of software application
   */
  Application: {
    display: "Application",
    code: "110150",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  },
  /**
   * 110151: Audit participant role ID of software application launcher, i.e., the entity that started or stopped an application
   */
  ApplicationLauncher: {
    display: "Application Launcher",
    code: "110151",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  },
  /**
   * 110152: Audit participant role ID of the receiver of data
   */
  DestinationRoleID: {
    display: "Destination Role ID",
    code: "110152",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  },
  /**
   * 110153: Audit participant role ID of the sender of data
   */
  SourceRoleID: {
    display: "Source Role ID",
    code: "110153",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  },
  /**
   * 110154: Audit participant role ID of media receiving data during an export
   */
  DestinationMedia: {
    display: "Destination Media",
    code: "110154",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  },
  /**
   * 110155: Audit participant role ID of media providing data during an import
   */
  SourceMedia: {
    display: "Source Media",
    code: "110155",
    system: "http://dicom.nema.org/resources/ontology/DCM",
  },
  /**
   * Code: AFFL
   */
  AFFL: {
    code: "AFFL",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: AGNT
   */
  AGNT: {
    code: "AGNT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: AMENDER
   */
  AMENDER: {
    code: "AMENDER",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: ASSIGNED
   */
  ASSIGNED: {
    code: "ASSIGNED",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: AUCG
   */
  AUCG: {
    code: "AUCG",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  },
  /**
   * Code: AULR
   */
  AULR: {
    code: "AULR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  },
  /**
   * Code: AUT
   */
  AUT: {
    code: "AUT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * authserver: An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner's preapproved permissions. For example, an UMA Authorization Server[UMA]
   */
  AuthorizationServer: {
    display: "authorization server",
    code: "authserver",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  },
  /**
   * Code: AUTM
   */
  AUTM: {
    code: "AUTM",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  },
  /**
   * Code: AUWA
   */
  AUWA: {
    code: "AUWA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  },
  /**
   * Code: CAS
   */
  AsylumSeeker: {
    display: "asylum seeker",
    code: "CAS",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CASM
   */
  SingleMinorAsylumSeeker: {
    display: "single minor asylum seeker",
    code: "CASM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CLAIM
   */
  CLAIM: {
    code: "CLAIM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: CLASSIFIER
   */
  CLASSIFIER: {
    code: "CLASSIFIER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CN
   */
  National: {
    display: "national",
    code: "CN",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CNRP
   */
  NonCountryMemberWithoutResidencePermit: {
    display: "non-country member without residence permit",
    code: "CNRP",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CNRPM
   */
  NonCountryMemberMinorWithoutResidencePermit: {
    display: "non-country member minor without residence permit",
    code: "CNRPM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: COAUTH
   */
  COAUTH: {
    code: "COAUTH",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: CONSENTER
   */
  CONSENTER: {
    code: "CONSENTER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CONSWIT
   */
  CONSWIT: {
    code: "CONSWIT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CONT
   */
  CONT: {
    code: "CONT",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: COPART
   */
  COPART: {
    code: "COPART",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: COVPTY
   */
  COVPTY: {
    code: "COVPTY",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: CPCA
   */
  PermitCardApplicant: {
    display: "permit card applicant",
    code: "CPCA",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CRP
   */
  NonCountryMemberWithResidencePermit: {
    display: "non-country member with residence permit",
    code: "CRP",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CRPM
   */
  NonCountryMemberMinorWithResidencePermit: {
    display: "non-country member minor with residence permit",
    code: "CRPM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: CST
   */
  CST: {
    code: "CST",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * datacollector: An entity that collects information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataCollector: {
    display: "data collector",
    code: "datacollector",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  },
  /**
   * dataprocessor: An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataProcessor: {
    display: "data processor",
    code: "dataprocessor",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  },
  /**
   * datasubject: A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information's management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.
   */
  DataSubject: {
    display: "data subject",
    code: "datasubject",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  },
  /**
   * Code: DECLASSIFIER
   */
  DECLASSIFIER: {
    code: "DECLASSIFIER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: DELEGATEE
   */
  DELEGATEE: {
    code: "DELEGATEE",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: DELEGATOR
   */
  DELEGATOR: {
    code: "DELEGATOR",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: DEPEN
   */
  DEPEN: {
    code: "DEPEN",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: DOWNGRDER
   */
  DOWNGRDER: {
    code: "DOWNGRDER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: DPOWATT
   */
  DPOWATT: {
    code: "DPOWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: ECON
   */
  ECON: {
    code: "ECON",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: EMP
   */
  EMP: {
    code: "EMP",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: EVTWIT
   */
  EVTWIT: {
    code: "EVTWIT",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: EXCEST
   */
  EXCEST: {
    code: "EXCEST",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: GRANTEE
   */
  GRANTEE: {
    code: "GRANTEE",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: GRANTOR
   */
  GRANTOR: {
    code: "GRANTOR",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: GT
   */
  GT: {
    code: "GT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: GUADLTM
   */
  GUADLTM: {
    code: "GUADLTM",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: GUARD
   */
  GUARD: {
    code: "GUARD",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: HPOWATT
   */
  HPOWATT: {
    code: "HPOWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * humanuser: The human user that has participated.
   */
  HumanUser: {
    display: "human user",
    code: "humanuser",
    system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  },
  /**
   * Code: INF
   */
  INF: {
    code: "INF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: INTPRTER
   */
  INTPRTER: {
    code: "INTPRTER",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: INVSBJ
   */
  INVSBJ: {
    code: "INVSBJ",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: IRCP
   */
  IRCP: {
    code: "IRCP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: LA
   */
  LA: {
    code: "LA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: NAMED
   */
  NAMED: {
    code: "NAMED",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: NOK
   */
  NOK: {
    code: "NOK",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: NOT
   */
  NOT: {
    code: "NOT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: PAT
   */
  PAT: {
    code: "PAT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: POWATT
   */
  POWATT: {
    code: "POWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: PRIMAUTH
   */
  PRIMAUTH: {
    code: "PRIMAUTH",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: PROMSK
   */
  PROMSK: {
    code: "PROMSK",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
  },
  /**
   * Code: PROV
   */
  PROV: {
    code: "PROV",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
  },
  /**
   * Code: RESPRSN
   */
  RESPRSN: {
    code: "RESPRSN",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: REVIEWER
   */
  REVIEWER: {
    code: "REVIEWER",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: SOURCE
   */
  SOURCE: {
    code: "SOURCE",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: SPOWATT
   */
  SPOWATT: {
    code: "SPOWATT",
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
  },
  /**
   * Code: TRANS
   */
  TRANS: {
    code: "TRANS",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: TRC
   */
  TRC: {
    code: "TRC",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
  /**
   * Code: VALID
   */
  VALID: {
    code: "VALID",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: VERF
   */
  VERF: {
    code: "VERF",
    system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
  },
  /**
   * Code: WIT
   */
  WIT: {
    code: "WIT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  },
} as const;