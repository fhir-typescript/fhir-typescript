/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export declare const ParticipationRoleTypeCodes: {
    /**
     * Code: _CitizenRoleType
     */
    readonly CitizenRoleType: "_CitizenRoleType";
    /**
     * 110150: Audit participant role ID of software application
     */
    readonly Application: "110150";
    /**
     * 110151: Audit participant role ID of software application launcher, i.e., the entity that started or stopped an application
     */
    readonly ApplicationLauncher: "110151";
    /**
     * 110152: Audit participant role ID of the receiver of data
     */
    readonly DestinationRoleID: "110152";
    /**
     * 110153: Audit participant role ID of the sender of data
     */
    readonly SourceRoleID: "110153";
    /**
     * 110154: Audit participant role ID of media receiving data during an export
     */
    readonly DestinationMedia: "110154";
    /**
     * 110155: Audit participant role ID of media providing data during an import
     */
    readonly SourceMedia: "110155";
    /**
     * Code: AFFL
     */
    readonly AFFL: "AFFL";
    /**
     * Code: AGNT
     */
    readonly AGNT: "AGNT";
    /**
     * Code: AMENDER
     */
    readonly AMENDER: "AMENDER";
    /**
     * Code: ASSIGNED
     */
    readonly ASSIGNED: "ASSIGNED";
    /**
     * Code: AUCG
     */
    readonly AUCG: "AUCG";
    /**
     * Code: AULR
     */
    readonly AULR: "AULR";
    /**
     * Code: AUT
     */
    readonly AUT: "AUT";
    /**
     * authserver: An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner's preapproved permissions. For example, an UMA Authorization Server[UMA]
     */
    readonly AuthorizationServer: "authserver";
    /**
     * Code: AUTM
     */
    readonly AUTM: "AUTM";
    /**
     * Code: AUWA
     */
    readonly AUWA: "AUWA";
    /**
     * Code: CAS
     */
    readonly AsylumSeeker: "CAS";
    /**
     * Code: CASM
     */
    readonly SingleMinorAsylumSeeker: "CASM";
    /**
     * Code: CLAIM
     */
    readonly CLAIM: "CLAIM";
    /**
     * Code: CLASSIFIER
     */
    readonly CLASSIFIER: "CLASSIFIER";
    /**
     * Code: CN
     */
    readonly National: "CN";
    /**
     * Code: CNRP
     */
    readonly NonCountryMemberWithoutResidencePermit: "CNRP";
    /**
     * Code: CNRPM
     */
    readonly NonCountryMemberMinorWithoutResidencePermit: "CNRPM";
    /**
     * Code: COAUTH
     */
    readonly COAUTH: "COAUTH";
    /**
     * Code: CONSENTER
     */
    readonly CONSENTER: "CONSENTER";
    /**
     * Code: CONSWIT
     */
    readonly CONSWIT: "CONSWIT";
    /**
     * Code: CONT
     */
    readonly CONT: "CONT";
    /**
     * Code: COPART
     */
    readonly COPART: "COPART";
    /**
     * Code: COVPTY
     */
    readonly COVPTY: "COVPTY";
    /**
     * Code: CPCA
     */
    readonly PermitCardApplicant: "CPCA";
    /**
     * Code: CRP
     */
    readonly NonCountryMemberWithResidencePermit: "CRP";
    /**
     * Code: CRPM
     */
    readonly NonCountryMemberMinorWithResidencePermit: "CRPM";
    /**
     * Code: CST
     */
    readonly CST: "CST";
    /**
     * datacollector: An entity that collects information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information.
     */
    readonly DataCollector: "datacollector";
    /**
     * dataprocessor: An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.
     */
    readonly DataProcessor: "dataprocessor";
    /**
     * datasubject: A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information's management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.
     */
    readonly DataSubject: "datasubject";
    /**
     * Code: DECLASSIFIER
     */
    readonly DECLASSIFIER: "DECLASSIFIER";
    /**
     * Code: DELEGATEE
     */
    readonly DELEGATEE: "DELEGATEE";
    /**
     * Code: DELEGATOR
     */
    readonly DELEGATOR: "DELEGATOR";
    /**
     * Code: DEPEN
     */
    readonly DEPEN: "DEPEN";
    /**
     * Code: DOWNGRDER
     */
    readonly DOWNGRDER: "DOWNGRDER";
    /**
     * Code: DPOWATT
     */
    readonly DPOWATT: "DPOWATT";
    /**
     * Code: ECON
     */
    readonly ECON: "ECON";
    /**
     * Code: EMP
     */
    readonly EMP: "EMP";
    /**
     * Code: EVTWIT
     */
    readonly EVTWIT: "EVTWIT";
    /**
     * Code: EXCEST
     */
    readonly EXCEST: "EXCEST";
    /**
     * Code: GRANTEE
     */
    readonly GRANTEE: "GRANTEE";
    /**
     * Code: GRANTOR
     */
    readonly GRANTOR: "GRANTOR";
    /**
     * Code: GT
     */
    readonly GT: "GT";
    /**
     * Code: GUADLTM
     */
    readonly GUADLTM: "GUADLTM";
    /**
     * Code: GUARD
     */
    readonly GUARD: "GUARD";
    /**
     * Code: HPOWATT
     */
    readonly HPOWATT: "HPOWATT";
    /**
     * humanuser: The human user that has participated.
     */
    readonly HumanUser: "humanuser";
    /**
     * Code: INF
     */
    readonly INF: "INF";
    /**
     * Code: INTPRTER
     */
    readonly INTPRTER: "INTPRTER";
    /**
     * Code: INVSBJ
     */
    readonly INVSBJ: "INVSBJ";
    /**
     * Code: IRCP
     */
    readonly IRCP: "IRCP";
    /**
     * Code: LA
     */
    readonly LA: "LA";
    /**
     * Code: NAMED
     */
    readonly NAMED: "NAMED";
    /**
     * Code: NOK
     */
    readonly NOK: "NOK";
    /**
     * Code: NOT
     */
    readonly NOT: "NOT";
    /**
     * Code: PAT
     */
    readonly PAT: "PAT";
    /**
     * Code: POWATT
     */
    readonly POWATT: "POWATT";
    /**
     * Code: PRIMAUTH
     */
    readonly PRIMAUTH: "PRIMAUTH";
    /**
     * Code: PROMSK
     */
    readonly PROMSK: "PROMSK";
    /**
     * Code: PROV
     */
    readonly PROV: "PROV";
    /**
     * Code: RESPRSN
     */
    readonly RESPRSN: "RESPRSN";
    /**
     * Code: REVIEWER
     */
    readonly REVIEWER: "REVIEWER";
    /**
     * Code: SOURCE
     */
    readonly SOURCE: "SOURCE";
    /**
     * Code: SPOWATT
     */
    readonly SPOWATT: "SPOWATT";
    /**
     * Code: TRANS
     */
    readonly TRANS: "TRANS";
    /**
     * Code: TRC
     */
    readonly TRC: "TRC";
    /**
     * Code: VALID
     */
    readonly VALID: "VALID";
    /**
     * Code: VERF
     */
    readonly VERF: "VERF";
    /**
     * Code: WIT
     */
    readonly WIT: "WIT";
};
/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export declare type ParticipationRoleTypeCodeType = typeof ParticipationRoleTypeCodes[keyof typeof ParticipationRoleTypeCodes];
//# sourceMappingURL=ParticipationRoleTypeCodes.d.ts.map