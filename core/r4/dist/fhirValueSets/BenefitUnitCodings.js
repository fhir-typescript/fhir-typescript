/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set includes a smattering of Unit type codes.
 */
var BenefitUnitCodings = {
    /**
     * family: A family, typically includes self, spouse(s) and children to a defined age
     */
    Family: new Coding({
        display: "Family",
        code: "family",
        system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
    }),
    /**
     * individual: A single individual
     */
    Individual: new Coding({
        display: "Individual",
        code: "individual",
        system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
    }),
};

export { BenefitUnitCodings };
//# sourceMappingURL=BenefitUnitCodings.js.map