import * as fhir from '../fhir.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { SearchXpathUsageCodeType } from '../fhirValueSets/SearchXpathUsageCodes.js';
/**
 * Valid arguments for the SearchParameterContact type.
 */
export interface SearchParameterContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the search parameter.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.contact.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
}
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export declare class SearchParameterContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the search parameter.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for SearchParameterContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SearchParameterContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SearchParameter type.
 */
export interface SearchParameterArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SearchParameter" | undefined;
    /**
     * To allow referencing and reusing search parameter definitions under other names on operational systems (in case of name clash).
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * A free text natural language name identifying the search parameter.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The status of this search parameter definition.
     */
    status?: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the search parameter.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.SearchParameterContactArgs[] | undefined;
    /**
     * The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * The Scope and Usage that this search parameter was created to meet.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * The code used in the URL or the parameter name in a parameters resource for this search parameter.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The base resource type that this search parameter refers to.
     */
    base: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.base
     */
    _base?: fhir.FhirElementArgs;
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A description of the search parameters and how it used.
     */
    description: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * An XPath expression that returns a set of elements for the search parameter.
     */
    xpath?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.xpath
     */
    _xpath?: fhir.FhirElementArgs;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.xpathUsage
     */
    _xpathUsage?: fhir.FhirElementArgs;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.target
     */
    _target?: (fhir.FhirElementArgs | null)[];
}
/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export declare class SearchParameter extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SearchParameter";
    /**
     * To allow referencing and reusing search parameter definitions under other names on operational systems (in case of name clash).
     */
    url: fhir.FhirUri | null;
    /**
     * A free text natural language name identifying the search parameter.
     */
    name: fhir.FhirString | null;
    /**
     * The status of this search parameter definition.
     */
    status?: fhir.FhirCode<ConformanceResourceStatusCodeType> | undefined;
    /**
     * A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the search parameter.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.SearchParameterContact[];
    /**
     * The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * The Scope and Usage that this search parameter was created to meet.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * The code used in the URL or the parameter name in a parameters resource for this search parameter.
     */
    code: fhir.FhirCode | null;
    /**
     * The base resource type that this search parameter refers to.
     */
    base: fhir.FhirCode | null;
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | null;
    /**
     * A description of the search parameters and how it used.
     */
    description: fhir.FhirString | null;
    /**
     * An XPath expression that returns a set of elements for the search parameter.
     */
    xpath?: fhir.FhirString | undefined;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType> | undefined;
    /**
     * Types of resource (if a resource is referenced).
     */
    target: fhir.FhirCode[];
    /**
     * Default constructor for SearchParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SearchParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SearchParameter.d.ts.map