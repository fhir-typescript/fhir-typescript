/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 */
var PaymentAdjustmentReasonCodings = {
    /**
     * a001: Prior Payment Reversal
     */
    PriorPaymentReversal: new Coding({
        display: "Prior Payment Reversal",
        code: "a001",
        system: "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason",
    }),
    /**
     * a002: Prior Overpayment
     */
    PriorOverpayment: new Coding({
        display: "Prior Overpayment",
        code: "a002",
        system: "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason",
    }),
};

export { PaymentAdjustmentReasonCodings };
//# sourceMappingURL=PaymentAdjustmentReasonCodings.js.map
