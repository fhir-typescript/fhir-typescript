/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set includes example Payment Type codes.
 */
var ExPaymenttypeCodings = {
    /**
     * complete: Complete (final) payment of the benefit under the Claim less any adjustments.
     */
    Complete: new Coding({
        display: "Complete",
        code: "complete",
        system: "http://terminology.hl7.org/CodeSystem/ex-paymenttype",
    }),
    /**
     * partial: Partial payment of the benefit under the Claim less any adjustments.
     */
    Partial: new Coding({
        display: "Partial",
        code: "partial",
        system: "http://terminology.hl7.org/CodeSystem/ex-paymenttype",
    }),
};

export { ExPaymenttypeCodings };
//# sourceMappingURL=ExPaymenttypeCodings.js.map