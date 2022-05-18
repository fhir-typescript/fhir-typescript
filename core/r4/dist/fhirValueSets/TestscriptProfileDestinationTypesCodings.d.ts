import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
export declare const TestscriptProfileDestinationTypesCodings: {
    /**
     * FHIR-SDC-FormManager: A FHIR server acting as a Structured Data Capture Form Manager.
     */
    readonly FHIRSDCFormManager: Coding;
    /**
     * FHIR-SDC-FormProcessor: A FHIR server acting as a Structured Data Capture Form Processor.
     */
    readonly FHIRSDCFormProcessor: Coding;
    /**
     * FHIR-SDC-FormReceiver: A FHIR server acting as a Structured Data Capture Form Receiver.
     */
    readonly FHIRSDCFormReceiver: Coding;
    /**
     * FHIR-Server: General FHIR server used to respond to operations sent from a FHIR client.
     */
    readonly FHIRServer: Coding;
};
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
export declare type TestscriptProfileDestinationTypesCodingType = typeof TestscriptProfileDestinationTypesCodings;
//# sourceMappingURL=TestscriptProfileDestinationTypesCodings.d.ts.map