// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/formatcodes|4.3.0

/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export const FormatVsValidation: readonly string[] = [
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:hl7-org:sdwg:ccda-structuredBody:1.1",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:hl7-org:sdwg:ccda-structuredBody:2.1",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:card:CRC:2012",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:card:EPRC-IE:2014",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:card:imaging:2011",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:dent:PDF",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:dent:TEXT",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:appc:2016:consent",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:bppc-sd:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:bppc:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:dsg:detached:2014",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:dsg:enveloping:2014",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:xds-sd:pdf:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:xds-sd:text:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:xds:2017:mimeTypeSufficient",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:iti:xdw:2011:workflowDoc",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:lab:xd-lab:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:all:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:all:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:breast:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:cervix:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:colon:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:endometrium:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:esophagus:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:kidney:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:larynx:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:liver:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:lung:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:ovary:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:pancreas:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:pharynx:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:prostate:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:salivary_gland:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:skin:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:stomach:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:testis:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:thyroid:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:apr:edu:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:apr:handp:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:apr:lab:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:aps:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:cm:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:crc:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:ctn:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:edes:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:edpn:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:edr:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:ets:2011",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:hp:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:ic:2008",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:its:2011",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:ldhp:2009",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:lds:2009",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:mds:2009",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:nds:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:nn:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:ppvs:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:ript:2017",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:tn:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:trs:2011",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:xds-ms:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pcc:xphr:2007",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pharm:dis:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pharm:padv:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pharm:pml:2013",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:pharm:pre:2010",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:rad:PDF",
  "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem|urn:ihe:rad:TEXT",
  "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
  "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",
  "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
  "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
  "urn:ihe:card:CRC:2012",
  "urn:ihe:card:EPRC-IE:2014",
  "urn:ihe:card:imaging:2011",
  "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
  "urn:ihe:dent:PDF",
  "urn:ihe:dent:TEXT",
  "urn:ihe:iti:appc:2016:consent",
  "urn:ihe:iti:bppc-sd:2007",
  "urn:ihe:iti:bppc:2007",
  "urn:ihe:iti:dsg:detached:2014",
  "urn:ihe:iti:dsg:enveloping:2014",
  "urn:ihe:iti:xds-sd:pdf:2008",
  "urn:ihe:iti:xds-sd:text:2008",
  "urn:ihe:iti:xds:2017:mimeTypeSufficient",
  "urn:ihe:iti:xdw:2011:workflowDoc",
  "urn:ihe:lab:xd-lab:2008",
  "urn:ihe:pat:apsr:all:2010",
  "urn:ihe:pat:apsr:cancer:all:2010",
  "urn:ihe:pat:apsr:cancer:breast:2010",
  "urn:ihe:pat:apsr:cancer:cervix:2010",
  "urn:ihe:pat:apsr:cancer:colon:2010",
  "urn:ihe:pat:apsr:cancer:endometrium:2010",
  "urn:ihe:pat:apsr:cancer:esophagus:2010",
  "urn:ihe:pat:apsr:cancer:kidney:2010",
  "urn:ihe:pat:apsr:cancer:larynx:2010",
  "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
  "urn:ihe:pat:apsr:cancer:liver:2010",
  "urn:ihe:pat:apsr:cancer:lung:2010",
  "urn:ihe:pat:apsr:cancer:ovary:2010",
  "urn:ihe:pat:apsr:cancer:pancreas:2010",
  "urn:ihe:pat:apsr:cancer:pharynx:2010",
  "urn:ihe:pat:apsr:cancer:prostate:2010",
  "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
  "urn:ihe:pat:apsr:cancer:skin:2010",
  "urn:ihe:pat:apsr:cancer:stomach:2010",
  "urn:ihe:pat:apsr:cancer:testis:2010",
  "urn:ihe:pat:apsr:cancer:thyroid:2010",
  "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
  "urn:ihe:pcc:apr:edu:2008",
  "urn:ihe:pcc:apr:handp:2008",
  "urn:ihe:pcc:apr:lab:2008",
  "urn:ihe:pcc:aps:2007",
  "urn:ihe:pcc:cm:2008",
  "urn:ihe:pcc:crc:2008",
  "urn:ihe:pcc:ctn:2007",
  "urn:ihe:pcc:edes:2007",
  "urn:ihe:pcc:edpn:2007",
  "urn:ihe:pcc:edr:2007",
  "urn:ihe:pcc:ets:2011",
  "urn:ihe:pcc:hp:2008",
  "urn:ihe:pcc:ic:2008",
  "urn:ihe:pcc:its:2011",
  "urn:ihe:pcc:ldhp:2009",
  "urn:ihe:pcc:lds:2009",
  "urn:ihe:pcc:mds:2009",
  "urn:ihe:pcc:nds:2010",
  "urn:ihe:pcc:nn:2007",
  "urn:ihe:pcc:ppvs:2010",
  "urn:ihe:pcc:ript:2017",
  "urn:ihe:pcc:tn:2007",
  "urn:ihe:pcc:trs:2011",
  "urn:ihe:pcc:xds-ms:2007",
  "urn:ihe:pcc:xphr:2007",
  "urn:ihe:pharm:dis:2010",
  "urn:ihe:pharm:padv:2010",
  "urn:ihe:pharm:pml:2013",
  "urn:ihe:pharm:pre:2010",
  "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
  "urn:ihe:rad:PDF",
  "urn:ihe:rad:TEXT",
] as const;
