import * as fhir from '../fhir.js';
import { NameUseCodeType } from '../fhirValueSets/NameUseCodes.js';
/**
 * Valid arguments for the HumanName type.
 */
export interface HumanNameArgs extends fhir.FhirElementArgs {
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: fhir.FhirCode<NameUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: HumanName.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HumanName.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: HumanName.family
     */
    _family?: fhir.FhirElementArgs;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.given
     */
    _given?: (fhir.FhirElementArgs | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.prefix
     */
    _prefix?: (fhir.FhirElementArgs | null)[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.suffix
     */
    _suffix?: (fhir.FhirElementArgs | null)[];
    /**
     * Indicates the period of time when this name was valid for the named person.
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
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: fhir.FhirCode<NameUseCodeType> | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: fhir.FhirString | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
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
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HumanNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use (HumanName.use)
     */
    static get useRequiredCodes(): {
        readonly Anonymous: "anonymous";
        readonly NameChangedForMarriage: "maiden";
        readonly Nickname: "nickname";
        readonly Official: "official";
        readonly Old: "old";
        readonly Temp: "temp";
        readonly Usual: "usual";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
    /**
     * Convert a HumanName into a displayable string
     */
    toDisplay(familyFirst?: boolean, includeAnnotations?: boolean): string;
}
//# sourceMappingURL=HumanName.d.ts.map