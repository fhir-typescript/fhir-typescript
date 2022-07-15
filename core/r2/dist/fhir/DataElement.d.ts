import * as fhir from '../fhir.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
import { DataelementStringencyCodeType } from '../fhirValueSets/DataelementStringencyCodes.js';
/**
 * Valid arguments for the DataElementContact type.
 */
export interface DataElementContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the data element.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.contact.name
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
export declare class DataElementContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the data element.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for DataElementContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataElementContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DataElementMapping type.
 */
export interface DataElementMappingArgs extends fhir.BackboneElementArgs {
    /**
     * An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.
     */
    identity: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.identity
     */
    _identity?: fhir.FhirElementArgs;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
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
    comments?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.comments
     */
    _comments?: fhir.FhirElementArgs;
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
     * An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.
     */
    identity: fhir.FhirId | null;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: fhir.FhirUri | undefined;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comments?: fhir.FhirString | undefined;
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
     * An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be multiple resource versions of the data element that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of data elements that are appropriate for use.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: DataElement.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the data element.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.DataElementContactArgs[] | undefined;
    /**
     * The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of data element definitions.
     */
    useContext?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.
     */
    copyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataElement.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Allows determining the degree of comparability of data element instances. Less granular data elements result in data that is less comparable (or at least requires more work to compare).
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
     * 1.
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
     * An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be multiple resource versions of the data element that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | undefined;
    /**
     * The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Allows filtering of data elements that are appropriate for use.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the data element.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.DataElementContact[];
    /**
     * The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of data element definitions.
     */
    useContext: fhir.CodeableConcept[];
    /**
     * A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.
     */
    copyright?: fhir.FhirString | undefined;
    /**
     * Allows determining the degree of comparability of data element instances. Less granular data elements result in data that is less comparable (or at least requires more work to compare).
     */
    stringency?: fhir.FhirCode<DataelementStringencyCodeType> | undefined;
    /**
     * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
     */
    mapping: fhir.DataElementMapping[];
    /**
     * 1.
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