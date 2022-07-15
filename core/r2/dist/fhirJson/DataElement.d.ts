import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface DataElementContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the data element.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
 */
export interface DataElementMapping extends fhir.BackboneElement {
    /**
     * An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.
     */
    identity: string | null;
    /**
     * Extended properties for primitive element: DataElement.mapping.identity
     */
    _identity?: fhir.FhirElement;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.uri
     */
    _uri?: fhir.FhirElement;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.name
     */
    _name?: fhir.FhirElement;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comments?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.mapping.comments
     */
    _comments?: fhir.FhirElement;
}
/**
 * The formal description of a single piece of information that can be gathered and reported.
 */
export interface DataElement extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DataElement" | null;
    /**
     * An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.url
     */
    _url?: fhir.FhirElement;
    /**
     * Formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be multiple resource versions of the data element that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.version
     */
    _version?: fhir.FhirElement;
    /**
     * The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of data elements that are appropriate for use.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: DataElement.status
     */
    _status?: fhir.FhirElement;
    /**
     * A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: DataElement.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the data element.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.DataElementContact | null)[] | undefined;
    /**
     * The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.date
     */
    _date?: fhir.FhirElement;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of data element definitions.
     */
    useContext?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: DataElement.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * Allows determining the degree of comparability of data element instances. Less granular data elements result in data that is less comparable (or at least requires more work to compare).
     */
    stringency?: 'comparable' | 'convertable' | 'equivalent' | 'flexible' | 'fully-specified' | 'scaleable' | undefined;
    /**
     * Extended properties for primitive element: DataElement.stringency
     */
    _stringency?: fhir.FhirElement;
    /**
     * Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
     */
    mapping?: (fhir.DataElementMapping | null)[] | undefined;
    /**
     * 1.
     */
    element: (fhir.ElementDefinition | null)[] | null;
}
//# sourceMappingURL=DataElement.d.ts.map