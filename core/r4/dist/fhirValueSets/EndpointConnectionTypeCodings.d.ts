import { Coding } from '../fhir/Coding.js';
/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
export declare const EndpointConnectionTypeCodings: {
    /**
     * dicom-qido-rs: DICOMweb RESTful Image query - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html
     */
    readonly DICOMQIDORS: Coding;
    /**
     * dicom-stow-rs: DICOMweb RESTful image sending and storage - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.6.html
     */
    readonly DICOMSTOWRS: Coding;
    /**
     * dicom-wado-rs: DICOMweb RESTful Image Retrieve - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.html
     */
    readonly DICOMWADORS: Coding;
    /**
     * dicom-wado-uri: DICOMweb Image Retrieve - http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html
     */
    readonly DICOMWADOURI: Coding;
    /**
     * direct-project: Direct Project information - http://wiki.directproject.org/
     */
    readonly DirectProject: Coding;
    /**
     * hl7-fhir-msg: Use the servers FHIR Messaging interface. Details can be found on the messaging.html page in the FHIR Specification. The FHIR server's base address is specified in the Endpoint.address property.
     */
    readonly HL7FHIRMessaging: Coding;
    /**
     * hl7-fhir-rest: Interact with the server interface using FHIR's RESTful interface. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement.
     */
    readonly HL7FHIR: Coding;
    /**
     * hl7v2-mllp: HL7v2 messages over an LLP TCP connection
     */
    readonly HL7V2MLLP: Coding;
    /**
     * ihe-iid: IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display
     */
    readonly IHEIID: Coding;
    /**
     * ihe-xca: IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access
     */
    readonly IHEXCA: Coding;
    /**
     * ihe-xcpd: IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery
     */
    readonly IHEXCPD: Coding;
    /**
     * ihe-xdr: IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange
     */
    readonly IHEXDR: Coding;
    /**
     * ihe-xds: IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing
     */
    readonly IHEXDS: Coding;
    /**
     * secure-email: Email delivery using a digital certificate to encrypt the content using the public key, receiver must have the private key to decrypt the content
     */
    readonly SecureEmail: Coding;
};
/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
export declare type EndpointConnectionTypeCodingType = typeof EndpointConnectionTypeCodings;
//# sourceMappingURL=EndpointConnectionTypeCodings.d.ts.map