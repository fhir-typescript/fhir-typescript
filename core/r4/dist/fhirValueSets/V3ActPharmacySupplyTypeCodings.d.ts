import { Coding } from '../fhir/Coding.js';
/**
 *  Identifies types of dispensing events
 */
export declare const V3ActPharmacySupplyTypeCodings: {
    /**
     * DF: A fill providing sufficient supply for one day
     */
    readonly DailyFill: Coding;
    /**
     * EM: A supply action where there is no 'valid' order for the supplied medication.  E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
     */
    readonly EmergencySupply: Coding;
    /**
     * FF: The initial fill against an order.  (This includes initial fills against refill orders.)
     */
    readonly FirstFill: Coding;
    /**
     * FFC: A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets).
     */
    readonly FirstFillComplete: Coding;
    /**
     * FFP: A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    readonly FirstFillPartFill: Coding;
    /**
     * FFSS: A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    readonly FirstFillPartialStrength: Coding;
    /**
     * FS: A supply action to restock a smaller more local dispensary.
     */
    readonly FloorStock: Coding;
    /**
     * MS: A supply of a manufacturer sample
     */
    readonly ManufacturerSample: Coding;
    /**
     * RF: A fill against an order that has already been filled (or partially filled) at least once.
     */
    readonly Refill: Coding;
    /**
     * RFC: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)
     */
    readonly RefillComplete: Coding;
    /**
     * RFCS: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    readonly RefillCompletePartialStrength: Coding;
    /**
     * RFF: The first fill against an order that has already been filled at least once at another facility.
     */
    readonly RefillFirstFillThisFacility: Coding;
    /**
     * RFFS: The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    readonly RefillPartialStrengthFirstFillThisFacility: Coding;
    /**
     * RFP: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    readonly RefillPartFill: Coding;
    /**
     * RFPS: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    readonly RefillPartFillPartialStrength: Coding;
    /**
     * RFS: A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    readonly RefillPartialStrength: Coding;
    /**
     * SO: An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date.
     */
    readonly ScriptOwing: Coding;
    /**
     * TB: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided.
     */
    readonly TrialBalance: Coding;
    /**
     * TBS: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    readonly TrialBalancePartialStrength: Coding;
    /**
     * TF: A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance.
     */
    readonly TrialFill: Coding;
    /**
     * UD: A supply action that provides sufficient material for a single dose.
     */
    readonly UnitDose: Coding;
    /**
     * UDE: A supply action that provides sufficient material for a single dose via multiple products.  E.g. 2 50mg tablets for a 100mg unit dose.
     */
    readonly UnitDoseEquivalent: Coding;
};
/**
 *  Identifies types of dispensing events
 */
export declare type V3ActPharmacySupplyTypeCodingType = typeof V3ActPharmacySupplyTypeCodings;
//# sourceMappingURL=V3ActPharmacySupplyTypeCodings.d.ts.map