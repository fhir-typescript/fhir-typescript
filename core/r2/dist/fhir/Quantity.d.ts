import * as fhir from '../fhir.js';
import { QuantityComparatorCodeType } from '../fhirValueSets/QuantityComparatorCodes.js';
/**
 * Valid arguments for the Quantity type.
 */
export interface QuantityArgs extends fhir.FhirElementArgs {
    /**
     * Precision is handled implicitly in almost all cases of measurement.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Quantity.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * Need a framework for handling measures where the value is &lt;5ug/L or &gt;400mg/L due to the limitations of measuring methodology.
     */
    comparator?: fhir.FhirCode<QuantityComparatorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Quantity.comparator
     */
    _comparator?: fhir.FhirElementArgs;
    /**
     * There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.
     */
    unit?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Quantity.unit
     */
    _unit?: fhir.FhirElementArgs;
    /**
     * Need to know the system that defines the coded form of the unit.
     */
    system?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Quantity.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.
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
     * Precision is handled implicitly in almost all cases of measurement.
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * Need a framework for handling measures where the value is &lt;5ug/L or &gt;400mg/L due to the limitations of measuring methodology.
     */
    comparator?: fhir.FhirCode<QuantityComparatorCodeType> | undefined;
    /**
     * There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.
     */
    unit?: fhir.FhirString | undefined;
    /**
     * Need to know the system that defines the coded form of the unit.
     */
    system?: fhir.FhirUri | undefined;
    /**
     * Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Quantity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<QuantityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Quantity.d.ts.map