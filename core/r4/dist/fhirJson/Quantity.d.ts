import * as fhir from '../fhirJson.js';
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export interface Quantity extends fhir.FhirElement {
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: Quantity.value
     */
    _value?: fhir.FhirElement;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: '<' | '<=' | '>' | '>=' | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.unit
     */
    _unit?: fhir.FhirElement;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.system
     */
    _system?: fhir.FhirElement;
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: Quantity.code
     */
    _code?: fhir.FhirElement;
}
//# sourceMappingURL=Quantity.d.ts.map