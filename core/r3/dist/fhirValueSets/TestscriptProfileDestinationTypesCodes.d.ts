/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
export declare const TestscriptProfileDestinationTypesCodes: {
    /**
     * FHIR-SDC-FormManager: A FHIR server acting as a Structured Data Capture Form Manager.
     */
    readonly FHIRSDCFormManager: "FHIR-SDC-FormManager";
    /**
     * FHIR-SDC-FormProcessor: A FHIR server acting as a Structured Data Capture Form Processor.
     */
    readonly FHIRSDCFormProcessor: "FHIR-SDC-FormProcessor";
    /**
     * FHIR-SDC-FormReceiver: A FHIR server acting as a Structured Data Capture Form Receiver.
     */
    readonly FHIRSDCFormReceiver: "FHIR-SDC-FormReceiver";
    /**
     * FHIR-Server: General FHIR server used to respond to operations sent from a FHIR client.
     */
    readonly FHIRServer: "FHIR-Server";
};
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
export declare type TestscriptProfileDestinationTypesCodeType = typeof TestscriptProfileDestinationTypesCodes[keyof typeof TestscriptProfileDestinationTypesCodes];
//# sourceMappingURL=TestscriptProfileDestinationTypesCodes.d.ts.map