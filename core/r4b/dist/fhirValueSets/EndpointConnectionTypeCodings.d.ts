import { CodingArgs } from '../fhir/Coding.js';
/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
export declare type EndpointConnectionTypeCodingType = {
    /**
     * dicom-qido-rs: DICOMweb RESTful Image query - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html
     */
    DICOMQIDORS: CodingArgs;
    /**
     * dicom-stow-rs: DICOMweb RESTful image sending and storage - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.6.html
     */
    DICOMSTOWRS: CodingArgs;
    /**
     * dicom-wado-rs: DICOMweb RESTful Image Retrieve - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.html
     */
    DICOMWADORS: CodingArgs;
    /**
     * dicom-wado-uri: DICOMweb Image Retrieve - http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html
     */
    DICOMWADOURI: CodingArgs;
    /**
     * direct-project: Direct Project information - http://wiki.directproject.org/
     */
    DirectProject: CodingArgs;
    /**
     * hl7-fhir-msg: Use the servers FHIR Messaging interface. Details can be found on the messaging.html page in the FHIR Specification. The FHIR server's base address is specified in the Endpoint.address property.
     */
    HL7FHIRMessaging: CodingArgs;
    /**
     * hl7-fhir-rest: Interact with the server interface using FHIR's RESTful interface. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement.
     */
    HL7FHIR: CodingArgs;
    /**
     * hl7v2-mllp: HL7v2 messages over an LLP TCP connection
     */
    HL7V2MLLP: CodingArgs;
    /**
     * ihe-iid: IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display
     */
    IHEIID: CodingArgs;
    /**
     * ihe-xca: IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access
     */
    IHEXCA: CodingArgs;
    /**
     * ihe-xcpd: IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery
     */
    IHEXCPD: CodingArgs;
    /**
     * ihe-xdr: IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange
     */
    IHEXDR: CodingArgs;
    /**
     * ihe-xds: IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing
     */
    IHEXDS: CodingArgs;
    /**
     * secure-email: Email delivery using a digital certificate to encrypt the content using the public key, receiver must have the private key to decrypt the content
     */
    SecureEmail: CodingArgs;
};
/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
export declare const EndpointConnectionTypeCodings: EndpointConnectionTypeCodingType;
//# sourceMappingURL=EndpointConnectionTypeCodings.d.ts.map