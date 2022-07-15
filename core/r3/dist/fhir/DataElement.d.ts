import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { DataelementStringencyCodeType } from '../fhirValueSets/DataelementStringencyCodes.js';
/**
 * Valid arguments for the DataElementMapping type.
 */
export interface DataElementMappingArgs extends fhir.BackboneElementArgs {
    /**
     * The specification is described once, with general comments, and then specific mappings are made that reference this declaration.
     */
    identity: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.identity
     */
    _identity?: fhir.FhirElementArgs;
    /**
     * A formal identity for the specification being mapped to helps with identifying maps consistently.
     */
    uri?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.uri
     */
    _uri?: fhir.FhirElementArgs;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.comment
     */
    _comment?: fhir.FhirElementArgs;
}
/**
 * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
 */
export declare class DataElementMapping extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specification is described once, with general comments, and then specific mappings are made that reference this declaration.
     */
    identity: fhir.FhirId | null;
    /**
     * A formal identity for the specification being mapped to helps with identifying maps consistently.
     */
    uri?: fhir.FhirUri | undefined;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for DataElementMapping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataElementMappingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DataElement type.
 */
export interface DataElementArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DataElement" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this data element outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different data element instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the data element with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Allows filtering of data elements that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired data element without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of data element that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental data element in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: DataElement.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the data element. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the data element is the organization or individual primarily responsible for the maintenance and upkeep of the data element. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the data element. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc. This may be similar to the question used to prompt someone for a data element value, but the purpose is communicating about the data element, not asking the question.  (Refer to the 'question' element for the latter.).
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the data element to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * null The copyright statement does not apply to values for the data element, only to its definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Identifies how precise the data element is in its definition.
     */
    stringency?: fhir.FhirCode<DataelementStringencyCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.stringency
     */
    _stringency?: fhir.FhirElementArgs;
    /**
     * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
     */
    mapping?: fhir.DataElementMappingArgs[] | undefined;
    /**
     * For simple data types there will only be one repetition.  For complex data types, multiple repetitions will be present defining a nested structure using the "path" element.
     */
    element: fhir.ElementDefinitionArgs[] | null;
}
/**
 * The formal description of a single piece of information that can be gathered and reported.
 */
export declare class DataElement extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DataElement";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this data element outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different data element instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the data element with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * Allows filtering of data elements that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired data element without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of data element that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental data element in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the data element. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the data element is the organization or individual primarily responsible for the maintenance and upkeep of the data element. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the data element. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc. This may be similar to the question used to prompt someone for a data element value, but the purpose is communicating about the data element, not asking the question.  (Refer to the 'question' element for the latter.).
     */
    title?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the data element to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * null The copyright statement does not apply to values for the data element, only to its definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Identifies how precise the data element is in its definition.
     */
    stringency?: fhir.FhirCode<DataelementStringencyCodeType> | undefined;
    /**
     * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
     */
    mapping: fhir.DataElementMapping[];
    /**
     * For simple data types there will only be one repetition.  For complex data types, multiple repetitions will be present defining a nested structure using the "path" element.
     */
    element: fhir.ElementDefinition[];
    /**
     * Default constructor for DataElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DataElement.d.ts.map