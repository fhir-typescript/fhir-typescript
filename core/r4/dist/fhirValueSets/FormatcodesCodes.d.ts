/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export declare const FormatcodesCodes: {
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:1.1
     */
    readonly ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1";
    /**
     * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:2.1
     */
    readonly ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1";
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:1.1
     */
    readonly ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: "urn:hl7-org:sdwg:ccda-structuredBody:1.1";
    /**
     * Code: urn:hl7-org:sdwg:ccda-structuredBody:2.1
     */
    readonly ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: "urn:hl7-org:sdwg:ccda-structuredBody:2.1";
    /**
     * Code: urn:ihe:card:CRC:2012
     */
    readonly CardiologyCRC: "urn:ihe:card:CRC:2012";
    /**
     * Code: urn:ihe:card:EPRC-IE:2014
     */
    readonly CardiologyEPRCIE: "urn:ihe:card:EPRC-IE:2014";
    /**
     * Code: urn:ihe:card:imaging:2011
     */
    readonly CardiacImagingReport: "urn:ihe:card:imaging:2011";
    /**
     * Code: urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013
     */
    readonly DentalCDA: "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013";
    /**
     * Code: urn:ihe:dent:PDF
     */
    readonly DentalPDF: "urn:ihe:dent:PDF";
    /**
     * Code: urn:ihe:dent:TEXT
     */
    readonly DentalText: "urn:ihe:dent:TEXT";
    /**
     * Code: urn:ihe:iti:appc:2016:consent
     */
    readonly AdvancedPatientPrivacyConsents: "urn:ihe:iti:appc:2016:consent";
    /**
     * Code: urn:ihe:iti:bppc-sd:2007
     */
    readonly BasicPatientPrivacyConsentsWithScannedDocument: "urn:ihe:iti:bppc-sd:2007";
    /**
     * Code: urn:ihe:iti:bppc:2007
     */
    readonly BasicPatientPrivacyConsents: "urn:ihe:iti:bppc:2007";
    /**
     * Code: urn:ihe:iti:dsg:detached:2014
     */
    readonly DSGDetachedDocument: "urn:ihe:iti:dsg:detached:2014";
    /**
     * Code: urn:ihe:iti:dsg:enveloping:2014
     */
    readonly DSGEnvelopingDocument: "urn:ihe:iti:dsg:enveloping:2014";
    /**
     * Code: urn:ihe:iti:xds-sd:pdf:2008
     */
    readonly PDFEmbeddedInCDAPerXDSSDProfile: "urn:ihe:iti:xds-sd:pdf:2008";
    /**
     * Code: urn:ihe:iti:xds-sd:text:2008
     */
    readonly TextEmbeddedInCDAPerXDSSDProfile: "urn:ihe:iti:xds-sd:text:2008";
    /**
     * Code: urn:ihe:iti:xds:2017:mimeTypeSufficient
     */
    readonly MimeTypeSufficient: "urn:ihe:iti:xds:2017:mimeTypeSufficient";
    /**
     * Code: urn:ihe:iti:xdw:2011:workflowDoc
     */
    readonly XDWWorkflowDocument: "urn:ihe:iti:xdw:2011:workflowDoc";
    /**
     * Code: urn:ihe:lab:xd-lab:2008
     */
    readonly CDALaboratoryReport: "urn:ihe:lab:xd-lab:2008";
    /**
     * Code: urn:ihe:pat:apsr:all:2010
     */
    readonly AnatomicPathologyStructuredReportAll: "urn:ihe:pat:apsr:all:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:all:2010
     */
    readonly AnatomicPathologyStructuredReportCancerAll: "urn:ihe:pat:apsr:cancer:all:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:breast:2010
     */
    readonly AnatomicPathologyStructuredReportCancerBreast: "urn:ihe:pat:apsr:cancer:breast:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:cervix:2010
     */
    readonly AnatomicPathologyStructuredReportCancerCervix: "urn:ihe:pat:apsr:cancer:cervix:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:colon:2010
     */
    readonly AnatomicPathologyStructuredReportCancerColon: "urn:ihe:pat:apsr:cancer:colon:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:endometrium:2010
     */
    readonly AnatomicPathologyStructuredReportCancerEndometrium: "urn:ihe:pat:apsr:cancer:endometrium:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:esophagus:2010
     */
    readonly AnatomicPathologyStructuredReportCancerEsophagus: "urn:ihe:pat:apsr:cancer:esophagus:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:kidney:2010
     */
    readonly AnatomicPathologyStructuredReportCancerKidney: "urn:ihe:pat:apsr:cancer:kidney:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:larynx:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLarynx: "urn:ihe:pat:apsr:cancer:larynx:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLipOralCavity: "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:liver:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLiver: "urn:ihe:pat:apsr:cancer:liver:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:lung:2010
     */
    readonly AnatomicPathologyStructuredReportCancerLung: "urn:ihe:pat:apsr:cancer:lung:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:ovary:2010
     */
    readonly AnatomicPathologyStructuredReportCancerOvary: "urn:ihe:pat:apsr:cancer:ovary:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:pancreas:2010
     */
    readonly AnatomicPathologyStructuredReportCancerPancreas: "urn:ihe:pat:apsr:cancer:pancreas:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:pharynx:2010
     */
    readonly AnatomicPathologyStructuredReportCancerPharynx: "urn:ihe:pat:apsr:cancer:pharynx:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:prostate:2010
     */
    readonly AnatomicPathologyStructuredReportCancerProstate: "urn:ihe:pat:apsr:cancer:prostate:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:salivary_gland:2010
     */
    readonly AnatomicPathologyStructuredReportCancerSalivaryGland: "urn:ihe:pat:apsr:cancer:salivary_gland:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:skin:2010
     */
    readonly AnatomicPathologyStructuredReportCancerSkin: "urn:ihe:pat:apsr:cancer:skin:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:stomach:2010
     */
    readonly AnatomicPathologyStructuredReportCancerStomach: "urn:ihe:pat:apsr:cancer:stomach:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:testis:2010
     */
    readonly AnatomicPathologyStructuredReportCancerTestis: "urn:ihe:pat:apsr:cancer:testis:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:thyroid:2010
     */
    readonly AnatomicPathologyStructuredReportCancerThyroid: "urn:ihe:pat:apsr:cancer:thyroid:2010";
    /**
     * Code: urn:ihe:pat:apsr:cancer:urinary_bladder:2010
     */
    readonly AnatomicPathologyStructuredReportCancerUrinaryBladder: "urn:ihe:pat:apsr:cancer:urinary_bladder:2010";
    /**
     * Code: urn:ihe:pcc:apr:edu:2008
     */
    readonly AntepartumRecordAPREducation: "urn:ihe:pcc:apr:edu:2008";
    /**
     * Code: urn:ihe:pcc:apr:handp:2008
     */
    readonly AntepartumRecordAPRHistoryAndPhysical: "urn:ihe:pcc:apr:handp:2008";
    /**
     * Code: urn:ihe:pcc:apr:lab:2008
     */
    readonly AntepartumRecordAPRLaboratory: "urn:ihe:pcc:apr:lab:2008";
    /**
     * Code: urn:ihe:pcc:aps:2007
     */
    readonly IHEAntepartumSummary: "urn:ihe:pcc:aps:2007";
    /**
     * Code: urn:ihe:pcc:cm:2008
     */
    readonly CareManagementCM: "urn:ihe:pcc:cm:2008";
    /**
     * Code: urn:ihe:pcc:crc:2008
     */
    readonly CancerRegistryContentCRC: "urn:ihe:pcc:crc:2008";
    /**
     * Code: urn:ihe:pcc:ctn:2007
     */
    readonly PCCCTN: "urn:ihe:pcc:ctn:2007";
    /**
     * Code: urn:ihe:pcc:edes:2007
     */
    readonly EmergencyDepartmentEncounterSummaryEDES: "urn:ihe:pcc:edes:2007";
    /**
     * Code: urn:ihe:pcc:edpn:2007
     */
    readonly PCCEDPN: "urn:ihe:pcc:edpn:2007";
    /**
     * Code: urn:ihe:pcc:edr:2007
     */
    readonly EmergencyDepartmentReferralEDR: "urn:ihe:pcc:edr:2007";
    /**
     * Code: urn:ihe:pcc:ets:2011
     */
    readonly PCCETS: "urn:ihe:pcc:ets:2011";
    /**
     * Code: urn:ihe:pcc:hp:2008
     */
    readonly PCCHP: "urn:ihe:pcc:hp:2008";
    /**
     * Code: urn:ihe:pcc:ic:2008
     */
    readonly ImmunizationContentIC: "urn:ihe:pcc:ic:2008";
    /**
     * Code: urn:ihe:pcc:its:2011
     */
    readonly PCCITS: "urn:ihe:pcc:its:2011";
    /**
     * Code: urn:ihe:pcc:ldhp:2009
     */
    readonly PCCLDHP: "urn:ihe:pcc:ldhp:2009";
    /**
     * Code: urn:ihe:pcc:lds:2009
     */
    readonly PCCLDS: "urn:ihe:pcc:lds:2009";
    /**
     * Code: urn:ihe:pcc:mds:2009
     */
    readonly PCCMDS: "urn:ihe:pcc:mds:2009";
    /**
     * Code: urn:ihe:pcc:nds:2010
     */
    readonly PCCNDS: "urn:ihe:pcc:nds:2010";
    /**
     * Code: urn:ihe:pcc:nn:2007
     */
    readonly PCCNN: "urn:ihe:pcc:nn:2007";
    /**
     * Code: urn:ihe:pcc:ppvs:2010
     */
    readonly PCCPPVS: "urn:ihe:pcc:ppvs:2010";
    /**
     * Code: urn:ihe:pcc:ript:2017
     */
    readonly RoutineInterfacilityPatientTransportRIPT: "urn:ihe:pcc:ript:2017";
    /**
     * Code: urn:ihe:pcc:tn:2007
     */
    readonly PCCTN: "urn:ihe:pcc:tn:2007";
    /**
     * Code: urn:ihe:pcc:trs:2011
     */
    readonly PCCTRS: "urn:ihe:pcc:trs:2011";
    /**
     * Code: urn:ihe:pcc:xds-ms:2007
     */
    readonly XDSMedicalSummaries: "urn:ihe:pcc:xds-ms:2007";
    /**
     * Code: urn:ihe:pcc:xphr:2007
     */
    readonly PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: "urn:ihe:pcc:xphr:2007";
    /**
     * Code: urn:ihe:pharm:dis:2010
     */
    readonly PharmacyDIS: "urn:ihe:pharm:dis:2010";
    /**
     * Code: urn:ihe:pharm:padv:2010
     */
    readonly PharmacyPADV: "urn:ihe:pharm:padv:2010";
    /**
     * Code: urn:ihe:pharm:pml:2013
     */
    readonly PharmacyPML: "urn:ihe:pharm:pml:2013";
    /**
     * Code: urn:ihe:pharm:pre:2010
     */
    readonly PharmacyPre: "urn:ihe:pharm:pre:2010";
    /**
     * Code: urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013
     */
    readonly RadiologyXDSIStructuredCDA: "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013";
    /**
     * Code: urn:ihe:rad:PDF
     */
    readonly RadiologyXDSIPDF: "urn:ihe:rad:PDF";
    /**
     * Code: urn:ihe:rad:TEXT
     */
    readonly RadiologyXDSIText: "urn:ihe:rad:TEXT";
};
/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export declare type FormatcodesCodeType = typeof FormatcodesCodes[keyof typeof FormatcodesCodes];
//# sourceMappingURL=FormatcodesCodes.d.ts.map