/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set includes sample Contract Term Type codes.
 */
var ContractTermTypeCodings = {
    /**
     * statutory: Based on specialized statutes that deal with particular subjects.
     */
    Statutory: new Coding({
        display: "Statutory",
        code: "statutory",
        system: "http://terminology.hl7.org/CodeSystem/contracttermtypecodes",
    }),
    /**
     * subject-to: Execution of the term in the contract is conditional on the execution of other actions.
     */
    SubjectTo: new Coding({
        display: "Subject To",
        code: "subject-to",
        system: "http://terminology.hl7.org/CodeSystem/contracttermtypecodes",
    }),
};

export { ContractTermTypeCodings };
//# sourceMappingURL=ContractTermTypeCodings.js.map
