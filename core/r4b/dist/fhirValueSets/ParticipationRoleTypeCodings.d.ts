import { CodingArgs } from '../fhir/Coding.js';
/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export declare type ParticipationRoleTypeCodingType = {
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
};
/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export declare const ParticipationRoleTypeCodings: ParticipationRoleTypeCodingType;
//# sourceMappingURL=ParticipationRoleTypeCodings.d.ts.map