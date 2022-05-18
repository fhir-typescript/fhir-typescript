/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
var TestscriptProfileDestinationTypesCodings = {
    /**
     * FHIR-SDC-FormManager: A FHIR server acting as a Structured Data Capture Form Manager.
     */
    FHIRSDCFormManager: new Coding({
        display: "FHIR SDC FormManager",
        code: "FHIR-SDC-FormManager",
        system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types",
    }),
    /**
     * FHIR-SDC-FormProcessor: A FHIR server acting as a Structured Data Capture Form Processor.
     */
    FHIRSDCFormProcessor: new Coding({
        display: "FHIR SDC FormProcessor",
        code: "FHIR-SDC-FormProcessor",
        system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types",
    }),
    /**
     * FHIR-SDC-FormReceiver: A FHIR server acting as a Structured Data Capture Form Receiver.
     */
    FHIRSDCFormReceiver: new Coding({
        display: "FHIR SDC FormReceiver",
        code: "FHIR-SDC-FormReceiver",
        system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types",
    }),
    /**
     * FHIR-Server: General FHIR server used to respond to operations sent from a FHIR client.
     */
    FHIRServer: new Coding({
        display: "FHIR Server",
        code: "FHIR-Server",
        system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types",
    }),
};

export { TestscriptProfileDestinationTypesCodings };
//# sourceMappingURL=TestscriptProfileDestinationTypesCodings.js.map