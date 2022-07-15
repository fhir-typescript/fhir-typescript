import { CodingArgs } from '../fhir/Coding.js';
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export declare type VerificationresultCommunicationMethodCodingType = {
    /**
     * Code: manual
     */
    Manual: CodingArgs;
    /**
     * Code: portal
     */
    Portal: CodingArgs;
    /**
     * Code: pull
     */
    Pull: CodingArgs;
    /**
     * Code: push
     */
    Push: CodingArgs;
};
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export declare const VerificationresultCommunicationMethodCodings: VerificationresultCommunicationMethodCodingType;
//# sourceMappingURL=VerificationresultCommunicationMethodCodings.d.ts.map