import { Coding } from '../fhir/Coding.js';
/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export declare const FormatcodesCodings: {
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:1.1
     */
    readonly ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: Coding;
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:2.1
     */
    readonly ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: Coding;
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:1.1
     */
    readonly ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: Coding;
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:2.1
     */
    readonly ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: Coding;
    /**
     * Code: urn:ihe:card:CRC:2012
     */
    readonly CardiologyCRC: Coding;
    /**
     * Code: urn:ihe:card:EPRC-IE:2014
     */
    readonly CardiologyEPRCIE: Coding;
    /**
     * Code: urn:ihe:card:imaging:2011
     */
    readonly CardiacImagingReport: Coding;
    /**
     * Code: urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013
     */
    readonly DentalCDA: Coding;
    /**
     * Code: urn:ihe:dent:PDF
     */
    readonly DentalPDF: Coding;
    /**
     * Code: urn:ihe:dent:TEXT
     */
    readonly DentalText: Coding;
    /**
     * Code: urn:ihe:iti:appc:2016:consent
     */
    readonly AdvancedPatientPrivacyConsents: Coding;
    /**
     * Code: urn:ihe:iti:bppc-sd:2007
     */
    readonly BasicPatientPrivacyConsentsWithScannedDocument: Coding;
    /**
     * Code: urn:ihe:iti:bppc:2007
     */
    readonly BasicPatientPrivacyConsents: Coding;
    /**
     * Code: urn:ihe:iti:dsg:detached:2014
     */
    readonly DSGDetachedDocument: Coding;
    /**
     * Code: urn:ihe:iti:dsg:enveloping:2014
     */
    readonly DSGEnvelopingDocument: Coding;
    /**
     * Code: urn:ihe:iti:xds-sd:pdf:2008
     */
    readonly PDFEmbeddedInCDAPerXDSSDProfile: Coding;
    /**
     * Code: urn:ihe:iti:xds-sd:text:2008
     */
    readonly TextEmbeddedInCDAPerXDSSDProfile: Coding;
    /**
     * Code: urn:ihe:iti:xds:2017:mimeTypeSufficient
     */
    readonly MimeTypeSufficient: Coding;
    /**
     * Code: urn:ihe:iti:xdw:2011:workflowDoc
     */
    readonly XDWWorkflowDocument: Coding;
    /**
     * Code: urn:ihe:lab:xd-lab:2008
     */
    readonly CDALaboratoryReport: Coding;
    /**
     * Code: urn:ihe:pat:apsr:all:2010
     */
    readonly AnatomicPathologyStructuredReportAll: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:all:2010
     */
    readonly AnatomicPathologyStructuredReportCancerAll: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:breast:2010
     */
    readonly AnatomicPathologyStructuredReportCancerBreast: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:cervix:2010
     */
    readonly AnatomicPathologyStructuredReportCancerCervix: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:colon:2010
     */
    readonly AnatomicPathologyStructuredReportCancerColon: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:endometrium:2010
     */
    readonly AnatomicPathologyStructuredReportCancerEndometrium: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:esophagus:2010
     */
    readonly AnatomicPathologyStructuredReportCancerEsophagus: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:kidney:2010
     */
    readonly AnatomicPathologyStructuredReportCancerKidney: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:larynx:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLarynx: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLipOralCavity: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:liver:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLiver: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:lung:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLung: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:ovary:2010
     */
    readonly AnatomicPathologyStructuredReportCancerOvary: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:pancreas:2010
     */
    readonly AnatomicPathologyStructuredReportCancerPancreas: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:pharynx:2010
     */
    readonly AnatomicPathologyStructuredReportCancerPharynx: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:prostate:2010
     */
    readonly AnatomicPathologyStructuredReportCancerProstate: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:salivary_gland:2010
     */
    readonly AnatomicPathologyStructuredReportCancerSalivaryGland: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:skin:2010
     */
    readonly AnatomicPathologyStructuredReportCancerSkin: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:stomach:2010
     */
    readonly AnatomicPathologyStructuredReportCancerStomach: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:testis:2010
     */
    readonly AnatomicPathologyStructuredReportCancerTestis: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:thyroid:2010
     */
    readonly AnatomicPathologyStructuredReportCancerThyroid: Coding;
    /**
     * Code: urn:ihe:pat:apsr:cancer:urinary_bladder:2010
     */
    readonly AnatomicPathologyStructuredReportCancerUrinaryBladder: Coding;
    /**
     * Code: urn:ihe:pcc:apr:edu:2008
     */
    readonly AntepartumRecordAPREducation: Coding;
    /**
     * Code: urn:ihe:pcc:apr:handp:2008
     */
    readonly AntepartumRecordAPRHistoryAndPhysical: Coding;
    /**
     * Code: urn:ihe:pcc:apr:lab:2008
     */
    readonly AntepartumRecordAPRLaboratory: Coding;
    /**
     * Code: urn:ihe:pcc:aps:2007
     */
    readonly IHEAntepartumSummary: Coding;
    /**
     * Code: urn:ihe:pcc:cm:2008
     */
    readonly CareManagementCM: Coding;
    /**
     * Code: urn:ihe:pcc:crc:2008
     */
    readonly CancerRegistryContentCRC: Coding;
    /**
     * Code: urn:ihe:pcc:ctn:2007
     */
    readonly PCCCTN: Coding;
    /**
     * Code: urn:ihe:pcc:edes:2007
     */
    readonly EmergencyDepartmentEncounterSummaryEDES: Coding;
    /**
     * Code: urn:ihe:pcc:edpn:2007
     */
    readonly PCCEDPN: Coding;
    /**
     * Code: urn:ihe:pcc:edr:2007
     */
    readonly EmergencyDepartmentReferralEDR: Coding;
    /**
     * Code: urn:ihe:pcc:ets:2011
     */
    readonly PCCETS: Coding;
    /**
     * Code: urn:ihe:pcc:hp:2008
     */
    readonly PCCHP: Coding;
    /**
     * Code: urn:ihe:pcc:ic:2008
     */
    readonly ImmunizationContentIC: Coding;
    /**
     * Code: urn:ihe:pcc:its:2011
     */
    readonly PCCITS: Coding;
    /**
     * Code: urn:ihe:pcc:ldhp:2009
     */
    readonly PCCLDHP: Coding;
    /**
     * Code: urn:ihe:pcc:lds:2009
     */
    readonly PCCLDS: Coding;
    /**
     * Code: urn:ihe:pcc:mds:2009
     */
    readonly PCCMDS: Coding;
    /**
     * Code: urn:ihe:pcc:nds:2010
     */
    readonly PCCNDS: Coding;
    /**
     * Code: urn:ihe:pcc:nn:2007
     */
    readonly PCCNN: Coding;
    /**
     * Code: urn:ihe:pcc:ppvs:2010
     */
    readonly PCCPPVS: Coding;
    /**
     * Code: urn:ihe:pcc:ript:2017
     */
    readonly RoutineInterfacilityPatientTransportRIPT: Coding;
    /**
     * Code: urn:ihe:pcc:tn:2007
     */
    readonly PCCTN: Coding;
    /**
     * Code: urn:ihe:pcc:trs:2011
     */
    readonly PCCTRS: Coding;
    /**
     * Code: urn:ihe:pcc:xds-ms:2007
     */
    readonly XDSMedicalSummaries: Coding;
    /**
     * Code: urn:ihe:pcc:xphr:2007
     */
    readonly PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: Coding;
    /**
     * Code: urn:ihe:pharm:dis:2010
     */
    readonly PharmacyDIS: Coding;
    /**
     * Code: urn:ihe:pharm:padv:2010
     */
    readonly PharmacyPADV: Coding;
    /**
     * Code: urn:ihe:pharm:pml:2013
     */
    readonly PharmacyPML: Coding;
    /**
     * Code: urn:ihe:pharm:pre:2010
     */
    readonly PharmacyPre: Coding;
    /**
     * Code: urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013
     */
    readonly RadiologyXDSIStructuredCDA: Coding;
    /**
     * Code: urn:ihe:rad:PDF
     */
    readonly RadiologyXDSIPDF: Coding;
    /**
     * Code: urn:ihe:rad:TEXT
     */
    readonly RadiologyXDSIText: Coding;
};
/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export declare type FormatcodesCodingType = typeof FormatcodesCodings;
//# sourceMappingURL=FormatcodesCodings.d.ts.map