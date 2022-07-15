import * as fhir from '../fhir.js';
import { NameUseCodeType } from '../fhirValueSets/NameUseCodes.js';
/**
 * Valid arguments for the HumanName type.
 */
export interface HumanNameArgs extends fhir.FhirElementArgs {
    /**
     * Allows the appropriate name for a particular context of use to be selected from among a set of names.
     */
    use?: fhir.FhirCode<NameUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: HumanName.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * A renderable, unencoded form.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HumanName.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
     */
    family?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.family
     */
    _family?: (fhir.FhirElementArgs | null)[];
    /**
     * Given name.
     */
    given?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.given
     */
    _given?: (fhir.FhirElementArgs | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.prefix
     */
    _prefix?: (fhir.FhirElementArgs | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.suffix
     */
    _suffix?: (fhir.FhirElementArgs | null)[];
    /**
     * Allows names to be placed in historical context.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * A human's name with the ability to identify parts and usage.
 */
export declare class HumanName extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Allows the appropriate name for a particular context of use to be selected from among a set of names.
     */
    use?: fhir.FhirCode<NameUseCodeType> | undefined;
    /**
     * A renderable, unencoded form.
     */
    text?: fhir.FhirString | undefined;
    /**
     * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
     */
    family: fhir.FhirString[];
    /**
     * Given name.
     */
    given: fhir.FhirString[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix: fhir.FhirString[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix: fhir.FhirString[];
    /**
     * Allows names to be placed in historical context.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HumanNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
    /**
     * Convert a HumanName into a displayable string
     */
    toDisplay(familyFirst?: boolean, includeAnnotations?: boolean): string;
}
//# sourceMappingURL=HumanName.d.ts.map