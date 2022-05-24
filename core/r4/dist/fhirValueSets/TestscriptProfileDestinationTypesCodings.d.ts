import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
export declare type TestscriptProfileDestinationTypesCodingType = {
    /**
     * FHIR-SDC-FormManager: A FHIR server acting as a Structured Data Capture Form Manager.
     */
    FHIRSDCFormManager: CodingArgs;
    /**
     * FHIR-SDC-FormProcessor: A FHIR server acting as a Structured Data Capture Form Processor.
     */
    FHIRSDCFormProcessor: CodingArgs;
    /**
     * FHIR-SDC-FormReceiver: A FHIR server acting as a Structured Data Capture Form Receiver.
     */
    FHIRSDCFormReceiver: CodingArgs;
    /**
     * FHIR-Server: General FHIR server used to respond to operations sent from a FHIR client.
     */
    FHIRServer: CodingArgs;
};
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
export declare const TestscriptProfileDestinationTypesCodings: TestscriptProfileDestinationTypesCodingType;
//# sourceMappingURL=TestscriptProfileDestinationTypesCodings.d.ts.map