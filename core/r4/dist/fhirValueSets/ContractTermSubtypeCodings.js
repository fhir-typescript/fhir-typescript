/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set includes sample Contract Term SubType codes.
 */
var ContractTermSubtypeCodings = {
    /**
     * condition: Terms that go to the very root of a contract.
     */
    Condition: new Coding({
        display: "Condition",
        code: "condition",
        system: "http://terminology.hl7.org/CodeSystem/contracttermsubtypecodes",
    }),
    /**
     * innominate: Breach of which might or might not go to the root of the contract depending upon the nature of the breach
     */
    Innominate: new Coding({
        display: "Innominate",
        code: "innominate",
        system: "http://terminology.hl7.org/CodeSystem/contracttermsubtypecodes",
    }),
    /**
     * warranty: Less imperative than a condition, so the contract will survive a breach
     */
    Warranty: new Coding({
        display: "Warranty",
        code: "warranty",
        system: "http://terminology.hl7.org/CodeSystem/contracttermsubtypecodes",
    }),
};

export { ContractTermSubtypeCodings };
//# sourceMappingURL=ContractTermSubtypeCodings.js.map