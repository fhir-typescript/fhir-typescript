import * as fhir from '../fhir.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { ResourceTypesCodingType } from '../fhirValueSets/ResourceTypesCodings.js';
import { SearchParamTypeCodingType } from '../fhirValueSets/SearchParamTypeCodings.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { SearchXpathUsageCodingType } from '../fhirValueSets/SearchXpathUsageCodings.js';
import { SearchXpathUsageCodeType } from '../fhirValueSets/SearchXpathUsageCodes.js';
import { SearchComparatorCodingType } from '../fhirValueSets/SearchComparatorCodings.js';
import { SearchComparatorCodeType } from '../fhirValueSets/SearchComparatorCodes.js';
import { SearchModifierCodeCodingType } from '../fhirValueSets/SearchModifierCodeCodings.js';
import { SearchModifierCodeCodeType } from '../fhirValueSets/SearchModifierCodeCodes.js';
/**
 * Valid arguments for the SearchParameterComponent type.
 */
export interface SearchParameterComponentArgs extends fhir.BackboneElementArgs {
    /**
     * The definition of the search parameter that describes this part.
     */
    definition: fhir.FhirCanonical | string | undefined;
    /**
     * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
     */
    expression: fhir.FhirString | string | undefined;
}
/**
 * Used to define the parts of a composite search parameter.
 */
export declare class SearchParameterComponent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The definition of the search parameter that describes this part.
     */
    definition: fhir.FhirCanonical | null;
    /**
     * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
     */
    expression: fhir.FhirString | null;
    /**
     * Default constructor for SearchParameterComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SearchParameterComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
     */
    derivedFrom?: fhir.FhirCanonical | string | undefined;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
     */
    description: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * For maximum compatibility, use only lowercase ASCII characters.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
     */
    base: fhir.FhirCode[] | string[] | undefined;
    /**
     * The type of value that a search parameter may contain, and how the content is interpreted.
     */
    type: SearchParamTypeCodeType | null;
    /**
     * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
     */
    xpath?: fhir.FhirString | string | undefined;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: SearchXpathUsageCodeType | undefined;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: fhir.FhirCode[] | string[] | undefined;
    /**
     * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
     */
    multipleOr?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
     */
    multipleAnd?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If no comparators are listed, clients should not expect servers to support any comparators.
     */
    comparator?: SearchComparatorCodeType[] | undefined;
    /**
     * A modifier supported for the search parameter.
     */
    modifier?: SearchModifierCodeCodeType[] | undefined;
    /**
     * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
     */
    chain?: fhir.FhirString[] | string[] | undefined;
    /**
     * Used to define the parts of a composite search parameter.
     */
    component?: fhir.SearchParameterComponentArgs[] | undefined;
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
     */
    derivedFrom?: fhir.FhirCanonical | undefined;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
     */
    description: fhir.FhirMarkdown | null;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[];
    /**
     * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * For maximum compatibility, use only lowercase ASCII characters.
     */
    code: fhir.FhirCode | null;
    /**
     * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
     */
    base: fhir.FhirCode[];
    /**
     * The type of value that a search parameter may contain, and how the content is interpreted.
     */
    type: SearchParamTypeCodeType | null;
    /**
     * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
     */
    xpath?: fhir.FhirString | undefined;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: SearchXpathUsageCodeType | undefined;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: fhir.FhirCode[];
    /**
     * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
     */
    multipleOr?: fhir.FhirBoolean | undefined;
    /**
     * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
     */
    multipleAnd?: fhir.FhirBoolean | undefined;
    /**
     * If no comparators are listed, clients should not expect servers to support any comparators.
     */
    comparator?: SearchComparatorCodeType[];
    /**
     * A modifier supported for the search parameter.
     */
    modifier?: SearchModifierCodeCodeType[];
    /**
     * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
     */
    chain?: fhir.FhirString[];
    /**
     * Used to define the parts of a composite search parameter.
     */
    component?: fhir.SearchParameterComponent[];
    /**
     * Default constructor for SearchParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SearchParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (SearchParameter.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Required-bound Value Set for base (SearchParameter.base)
     */
    static baseRequiredCoding(): ResourceTypesCodingType;
    /**
     * Required-bound Value Set for type (SearchParameter.type)
     */
    static typeRequiredCoding(): SearchParamTypeCodingType;
    /**
     * Required-bound Value Set for xpathUsage (SearchParameter.xpathUsage)
     */
    static xpathUsageRequiredCoding(): SearchXpathUsageCodingType;
    /**
     * Required-bound Value Set for target (SearchParameter.target)
     */
    static targetRequiredCoding(): ResourceTypesCodingType;
    /**
     * Required-bound Value Set for comparator (SearchParameter.comparator)
     */
    static comparatorRequiredCoding(): SearchComparatorCodingType;
    /**
     * Required-bound Value Set for modifier (SearchParameter.modifier)
     */
    static modifierRequiredCoding(): SearchModifierCodeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=SearchParameter.d.ts.map