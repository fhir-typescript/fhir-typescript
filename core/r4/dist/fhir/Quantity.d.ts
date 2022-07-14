import * as fhir from '../fhir.js';
import { QuantityComparatorCodeType } from '../fhirValueSets/QuantityComparatorCodes.js';
/**
 * Valid arguments for the Quantity type.
 */
export interface QuantityArgs extends fhir.FhirElementArgs {
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Quantity.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: fhir.FhirCode<QuantityComparatorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Quantity.comparator
     */
    _comparator?: fhir.FhirElementArgs;
    /**
     * A human-readable form of the unit.
     */
    unit?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Quantity.unit
     */
    _unit?: fhir.FhirElementArgs;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Quantity.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Quantity.code
     */
    _code?: fhir.FhirElementArgs;
}
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Quantity extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "&lt;" , then the real value is &lt; stated value.
     */
    comparator?: fhir.FhirCode<QuantityComparatorCodeType> | undefined;
    /**
     * A human-readable form of the unit.
     */
    unit?: fhir.FhirString | undefined;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: fhir.FhirUri | undefined;
    /**
     * The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Quantity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuantityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Quantity.d.ts.map