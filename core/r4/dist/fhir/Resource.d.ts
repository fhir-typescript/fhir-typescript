import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Resource type.
 */
export interface ResourceArgs extends fhir.FhirBaseArgs {
    /**
     * Resource Type Name
     */
    resourceType: string | string | undefined;
    /**
     * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
     */
    id?: fhir.FhirId | string | undefined;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: fhir.MetaArgs | undefined;
    /**
     * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.
     */
    implicitRules?: fhir.FhirUri | string | undefined;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: fhir.FhirCode | string | undefined;
}
/**
 * This is the base resource type for everything.
 */
export declare class Resource extends fhir.FhirBase {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: string | null;
    /**
     * The only time that a resource does not have an id is when it is being submitted to the server using a create operation.
     */
    id?: fhir.FhirId | undefined;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: fhir.Meta | undefined;
    /**
     * Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.
     */
    implicitRules?: fhir.FhirUri | undefined;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Resource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for language (Resource.language)
     */
    static get languagePreferredCodings(): {
        readonly Arabic: fhir.Coding;
        readonly Bengali: fhir.Coding;
        readonly Czech: fhir.Coding;
        readonly Danish: fhir.Coding;
        readonly German: fhir.Coding;
        readonly GermanAustria: fhir.Coding;
        readonly GermanSwitzerland: fhir.Coding;
        readonly GermanGermany: fhir.Coding;
        readonly Greek: fhir.Coding;
        readonly English: fhir.Coding;
        readonly EnglishAustralia: fhir.Coding;
        readonly EnglishCanada: fhir.Coding;
        readonly EnglishGreatBritain: fhir.Coding;
        readonly EnglishIndia: fhir.Coding;
        readonly EnglishNewZeland: fhir.Coding;
        readonly EnglishSingapore: fhir.Coding;
        readonly EnglishUnitedStates: fhir.Coding;
        readonly Spanish: fhir.Coding;
        readonly SpanishArgentina: fhir.Coding;
        readonly SpanishSpain: fhir.Coding;
        readonly SpanishUruguay: fhir.Coding;
        readonly Finnish: fhir.Coding;
        readonly French: fhir.Coding;
        readonly FrenchBelgium: fhir.Coding;
        readonly FrenchSwitzerland: fhir.Coding;
        readonly FrenchFrance: fhir.Coding;
        readonly Frysian: fhir.Coding;
        readonly FrysianNetherlands: fhir.Coding;
        readonly Hindi: fhir.Coding;
        readonly Croatian: fhir.Coding;
        readonly Italian: fhir.Coding;
        readonly ItalianSwitzerland: fhir.Coding;
        readonly ItalianItaly: fhir.Coding;
        readonly Japanese: fhir.Coding;
        readonly Korean: fhir.Coding;
        readonly Dutch: fhir.Coding;
        readonly DutchBelgium: fhir.Coding;
        readonly DutchNetherlands: fhir.Coding;
        readonly Norwegian: fhir.Coding;
        readonly NorwegianNorway: fhir.Coding;
        readonly Punjabi: fhir.Coding;
        readonly Polish: fhir.Coding;
        readonly Portuguese: fhir.Coding;
        readonly PortugueseBrazil: fhir.Coding;
        readonly Russian: fhir.Coding;
        readonly RussianRussia: fhir.Coding;
        readonly Serbian: fhir.Coding;
        readonly SerbianSerbia: fhir.Coding;
        readonly Swedish: fhir.Coding;
        readonly SwedishSweden: fhir.Coding;
        readonly Telegu: fhir.Coding;
        readonly Chinese: fhir.Coding;
        readonly ChineseChina: fhir.Coding;
        readonly ChineseHongKong: fhir.Coding;
        readonly ChineseSingapore: fhir.Coding;
        readonly ChineseTaiwan: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Resource.d.ts.map