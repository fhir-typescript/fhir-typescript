/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
export declare const EndpointConnectionTypeCodes: {
    /**
     * dicom-qido-rs: DICOMweb RESTful Image query - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html
     */
    readonly DICOMQIDORS: "dicom-qido-rs";
    /**
     * dicom-stow-rs: DICOMweb RESTful image sending and storage - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.6.html
     */
    readonly DICOMSTOWRS: "dicom-stow-rs";
    /**
     * dicom-wado-rs: DICOMweb RESTful Image Retrieve - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.html
     */
    readonly DICOMWADORS: "dicom-wado-rs";
    /**
     * dicom-wado-uri: DICOMweb Image Retrieve - http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html
     */
    readonly DICOMWADOURI: "dicom-wado-uri";
    /**
     * direct-project: Direct Project information - http://wiki.directproject.org/
     */
    readonly DirectProject: "direct-project";
    /**
     * hl7-fhir-msg: Use the servers FHIR Messaging interface. Details can be found on the messaging.html page in the FHIR Specification. The FHIR server's base address is specified in the Endpoint.address property.
     */
    readonly HL7FHIRMessaging: "hl7-fhir-msg";
    /**
     * hl7-fhir-rest: Interact with the server interface using FHIR's RESTful interface. For details on its version/capabilities you should connect the the value in Endpoint.address and retrieve the FHIR CapabilityStatement.
     */
    readonly HL7FHIR: "hl7-fhir-rest";
    /**
     * hl7v2-mllp: HL7v2 messages over an LLP TCP connection
     */
    readonly HL7V2MLLP: "hl7v2-mllp";
    /**
     * ihe-iid: IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display
     */
    readonly IHEIID: "ihe-iid";
    /**
     * ihe-xca: IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access
     */
    readonly IHEXCA: "ihe-xca";
    /**
     * ihe-xcpd: IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery
     */
    readonly IHEXCPD: "ihe-xcpd";
    /**
     * ihe-xdr: IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange
     */
    readonly IHEXDR: "ihe-xdr";
    /**
     * ihe-xds: IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing
     */
    readonly IHEXDS: "ihe-xds";
    /**
     * secure-email: Email delivery using a digital certificate to encrypt the content using the public key, receiver must have the private key to decrypt the content
     */
    readonly SecureEmail: "secure-email";
};
/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
export declare type EndpointConnectionTypeCodeType = typeof EndpointConnectionTypeCodes[keyof typeof EndpointConnectionTypeCodes];
//# sourceMappingURL=EndpointConnectionTypeCodes.d.ts.map