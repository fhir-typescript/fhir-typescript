import * as fhir from '../fhirJson.js';
/**
 * A human's name with the ability to identify parts and usage.
 */
export interface HumanName extends fhir.FhirElement {
    /**
     * Allows the appropriate name for a particular context of use to be selected from among a set of names.
     */
    use?: 'anonymous' | 'maiden' | 'nickname' | 'official' | 'old' | 'temp' | 'usual' | undefined;
    /**
     * Extended properties for primitive element: HumanName.use
     */
    _use?: fhir.FhirElement;
    /**
     * A renderable, unencoded form.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: HumanName.text
     */
    _text?: fhir.FhirElement;
    /**
     * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
     */
    family?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.family
     */
    _family?: (fhir.FhirElement | null)[];
    /**
     * Given name.
     */
    given?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.given
     */
    _given?: (fhir.FhirElement | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.prefix
     */
    _prefix?: (fhir.FhirElement | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.suffix
     */
    _suffix?: (fhir.FhirElement | null)[];
    /**
     * Allows names to be placed in historical context.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=HumanName.d.ts.map