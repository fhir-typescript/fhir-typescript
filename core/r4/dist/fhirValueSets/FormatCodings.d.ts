import { CodingArgs } from '../fhir/Coding.js';
/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export declare type FormatCodingType = {
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:1.1
     */
    ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: CodingArgs;
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:2.1
     */
    ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: CodingArgs;
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:1.1
     */
    ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: CodingArgs;
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:2.1
     */
    ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: CodingArgs;
    /**
     * Code: urn:ihe:card:CRC:2012
     */
    CardiologyCRC: CodingArgs;
    /**
     * Code: urn:ihe:card:EPRC-IE:2014
     */
    CardiologyEPRCIE: CodingArgs;
    /**
     * Code: urn:ihe:card:imaging:2011
     */
    CardiacImagingReport: CodingArgs;
    /**
     * Code: urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013
     */
    DentalCDA: CodingArgs;
    /**
     * Code: urn:ihe:dent:PDF
     */
    DentalPDF: CodingArgs;
    /**
     * Code: urn:ihe:dent:TEXT
     */
    DentalText: CodingArgs;
    /**
     * Code: urn:ihe:iti:appc:2016:consent
     */
    AdvancedPatientPrivacyConsents: CodingArgs;
    /**
     * Code: urn:ihe:iti:bppc-sd:2007
     */
    BasicPatientPrivacyConsentsWithScannedDocument: CodingArgs;
    /**
     * Code: urn:ihe:iti:bppc:2007
     */
    BasicPatientPrivacyConsents: CodingArgs;
    /**
     * Code: urn:ihe:iti:dsg:detached:2014
     */
    DSGDetachedDocument: CodingArgs;
    /**
     * Code: urn:ihe:iti:dsg:enveloping:2014
     */
    DSGEnvelopingDocument: CodingArgs;
    /**
     * Code: urn:ihe:iti:xds-sd:pdf:2008
     */
    PDFEmbeddedInCDAPerXDSSDProfile: CodingArgs;
    /**
     * Code: urn:ihe:iti:xds-sd:text:2008
     */
    TextEmbeddedInCDAPerXDSSDProfile: CodingArgs;
    /**
     * Code: urn:ihe:iti:xds:2017:mimeTypeSufficient
     */
    MimeTypeSufficient: CodingArgs;
    /**
     * Code: urn:ihe:iti:xdw:2011:workflowDoc
     */
    XDWWorkflowDocument: CodingArgs;
    /**
     * Code: urn:ihe:lab:xd-lab:2008
     */
    CDALaboratoryReport: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:all:2010
     */
    AnatomicPathologyStructuredReportAll: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:all:2010
     */
    AnatomicPathologyStructuredReportCancerAll: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:breast:2010
     */
    AnatomicPathologyStructuredReportCancerBreast: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:cervix:2010
     */
    AnatomicPathologyStructuredReportCancerCervix: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:colon:2010
     */
    AnatomicPathologyStructuredReportCancerColon: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:endometrium:2010
     */
    AnatomicPathologyStructuredReportCancerEndometrium: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:esophagus:2010
     */
    AnatomicPathologyStructuredReportCancerEsophagus: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:kidney:2010
     */
    AnatomicPathologyStructuredReportCancerKidney: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:larynx:2010
     */
    AnatomicPathologyStructuredReportCancerLarynx: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010
     */
    AnatomicPathologyStructuredReportCancerLipOralCavity: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:liver:2010
     */
    AnatomicPathologyStructuredReportCancerLiver: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:lung:2010
     */
    AnatomicPathologyStructuredReportCancerLung: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:ovary:2010
     */
    AnatomicPathologyStructuredReportCancerOvary: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:pancreas:2010
     */
    AnatomicPathologyStructuredReportCancerPancreas: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:pharynx:2010
     */
    AnatomicPathologyStructuredReportCancerPharynx: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:prostate:2010
     */
    AnatomicPathologyStructuredReportCancerProstate: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:salivary_gland:2010
     */
    AnatomicPathologyStructuredReportCancerSalivaryGland: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:skin:2010
     */
    AnatomicPathologyStructuredReportCancerSkin: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:stomach:2010
     */
    AnatomicPathologyStructuredReportCancerStomach: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:testis:2010
     */
    AnatomicPathologyStructuredReportCancerTestis: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:thyroid:2010
     */
    AnatomicPathologyStructuredReportCancerThyroid: CodingArgs;
    /**
     * Code: urn:ihe:pat:apsr:cancer:urinary_bladder:2010
     */
    AnatomicPathologyStructuredReportCancerUrinaryBladder: CodingArgs;
    /**
     * Code: urn:ihe:pcc:apr:edu:2008
     */
    AntepartumRecordAPREducation: CodingArgs;
    /**
     * Code: urn:ihe:pcc:apr:handp:2008
     */
    AntepartumRecordAPRHistoryAndPhysical: CodingArgs;
    /**
     * Code: urn:ihe:pcc:apr:lab:2008
     */
    AntepartumRecordAPRLaboratory: CodingArgs;
    /**
     * Code: urn:ihe:pcc:aps:2007
     */
    IHEAntepartumSummary: CodingArgs;
    /**
     * Code: urn:ihe:pcc:cm:2008
     */
    CareManagementCM: CodingArgs;
    /**
     * Code: urn:ihe:pcc:crc:2008
     */
    CancerRegistryContentCRC: CodingArgs;
    /**
     * Code: urn:ihe:pcc:ctn:2007
     */
    PCCCTN: CodingArgs;
    /**
     * Code: urn:ihe:pcc:edes:2007
     */
    EmergencyDepartmentEncounterSummaryEDES: CodingArgs;
    /**
     * Code: urn:ihe:pcc:edpn:2007
     */
    PCCEDPN: CodingArgs;
    /**
     * Code: urn:ihe:pcc:edr:2007
     */
    EmergencyDepartmentReferralEDR: CodingArgs;
    /**
     * Code: urn:ihe:pcc:ets:2011
     */
    PCCETS: CodingArgs;
    /**
     * Code: urn:ihe:pcc:hp:2008
     */
    PCCHP: CodingArgs;
    /**
     * Code: urn:ihe:pcc:ic:2008
     */
    ImmunizationContentIC: CodingArgs;
    /**
     * Code: urn:ihe:pcc:its:2011
     */
    PCCITS: CodingArgs;
    /**
     * Code: urn:ihe:pcc:ldhp:2009
     */
    PCCLDHP: CodingArgs;
    /**
     * Code: urn:ihe:pcc:lds:2009
     */
    PCCLDS: CodingArgs;
    /**
     * Code: urn:ihe:pcc:mds:2009
     */
    PCCMDS: CodingArgs;
    /**
     * Code: urn:ihe:pcc:nds:2010
     */
    PCCNDS: CodingArgs;
    /**
     * Code: urn:ihe:pcc:nn:2007
     */
    PCCNN: CodingArgs;
    /**
     * Code: urn:ihe:pcc:ppvs:2010
     */
    PCCPPVS: CodingArgs;
    /**
     * Code: urn:ihe:pcc:ript:2017
     */
    RoutineInterfacilityPatientTransportRIPT: CodingArgs;
    /**
     * Code: urn:ihe:pcc:tn:2007
     */
    PCCTN: CodingArgs;
    /**
     * Code: urn:ihe:pcc:trs:2011
     */
    PCCTRS: CodingArgs;
    /**
     * Code: urn:ihe:pcc:xds-ms:2007
     */
    XDSMedicalSummaries: CodingArgs;
    /**
     * Code: urn:ihe:pcc:xphr:2007
     */
    PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: CodingArgs;
    /**
     * Code: urn:ihe:pharm:dis:2010
     */
    PharmacyDIS: CodingArgs;
    /**
     * Code: urn:ihe:pharm:padv:2010
     */
    PharmacyPADV: CodingArgs;
    /**
     * Code: urn:ihe:pharm:pml:2013
     */
    PharmacyPML: CodingArgs;
    /**
     * Code: urn:ihe:pharm:pre:2010
     */
    PharmacyPre: CodingArgs;
    /**
     * Code: urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013
     */
    RadiologyXDSIStructuredCDA: CodingArgs;
    /**
     * Code: urn:ihe:rad:PDF
     */
    RadiologyXDSIPDF: CodingArgs;
    /**
     * Code: urn:ihe:rad:TEXT
     */
    RadiologyXDSIText: CodingArgs;
};
/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export declare const FormatCodings: FormatCodingType;
//# sourceMappingURL=FormatCodings.d.ts.map