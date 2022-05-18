import { Coding } from '../fhir/Coding.js';
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export declare const VerificationresultCommunicationMethodCodings: {
    /**
     * manual: The information is submitted/retrieved manually (e.g. by phone, fax, paper-based)
     */
    readonly Manual: Coding;
    /**
     * portal: The information is submitted/retrieved via a portal
     */
    readonly Portal: Coding;
    /**
     * pull: The information is retrieved (i.e. pulled) from a source (e.g. over an API)
     */
    readonly Pull: Coding;
    /**
     * push: The information is sent (i.e. pushed) from a source (e.g. over an API, asynchronously, secure messaging)
     */
    readonly Push: Coding;
};
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export declare type VerificationresultCommunicationMethodCodingType = typeof VerificationresultCommunicationMethodCodings;
//# sourceMappingURL=VerificationresultCommunicationMethodCodings.d.ts.map