import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface ConceptMapContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the concept map.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export interface ConceptMapElementTargetDependsOn extends fhir.BackboneElement {
    /**
     * A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.
     */
    element: string | null;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.dependsOn.element
     */
    _element?: fhir.FhirElement;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    codeSystem: string | null;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.dependsOn.codeSystem
     */
    _codeSystem?: fhir.FhirElement;
    /**
     * Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.dependsOn.code
     */
    _code?: fhir.FhirElement;
}
/**
 * A concept from the target value set that this concept maps to.
 */
export interface ConceptMapElementTarget extends fhir.BackboneElement {
    /**
     * An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).
     */
    codeSystem?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.codeSystem
     */
    _codeSystem?: fhir.FhirElement;
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.code
     */
    _code?: fhir.FhirElement;
    /**
     * The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
     */
    equivalence: 'disjoint' | 'equal' | 'equivalent' | 'inexact' | 'narrower' | 'specializes' | 'subsumes' | 'unmatched' | 'wider' | null;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.equivalence
     */
    _equivalence?: fhir.FhirElement;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comments?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.comments
     */
    _comments?: fhir.FhirElement;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: (fhir.ConceptMapElementTargetDependsOn | null)[] | undefined;
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product?: (fhir.ConceptMapElementTargetDependsOn | null)[] | undefined;
}
/**
 * Mappings for an individual concept in the source to one or more concepts in the target.
 */
export interface ConceptMapElement extends fhir.BackboneElement {
    /**
     * An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
     */
    codeSystem?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.codeSystem
     */
    _codeSystem?: fhir.FhirElement;
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.code
     */
    _code?: fhir.FhirElement;
    /**
     * A concept from the target value set that this concept maps to.
     */
    target?: (fhir.ConceptMapElementTarget | null)[] | undefined;
}
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
 */
export interface ConceptMap extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap" | null;
    /**
     * An absolute URL that is used to identify this concept map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this concept map is (or will be) published.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.url
     */
    _url?: fhir.FhirElement;
    /**
     * Formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.version
     */
    _version?: fhir.FhirElement;
    /**
     * Support human navigation.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.name
     */
    _name?: fhir.FhirElement;
    /**
     * Identify when/if the concept map should be used.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: ConceptMap.status
     */
    _status?: fhir.FhirElement;
    /**
     * This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the concept map.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.ConceptMapContact | null)[] | undefined;
    /**
     * Need to know when a concept map was first legal for use or became withdrawn or replaced.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.date
     */
    _date?: fhir.FhirElement;
    /**
     * Human understandability.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.description
     */
    _description?: fhir.FhirElement;
    /**
     * Assist in searching for appropriate concept map instances.
     */
    useContext?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Explains why this concept map is needed and why it has been constrained as it has.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * A copyright statement relating to the concept map and/or its contents.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The source value set that specifies the concepts that are being mapped.
     */
    sourceUri?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.source[x]
     */
    _sourceUri?: fhir.FhirElement;
    /**
     * The source value set that specifies the concepts that are being mapped.
     */
    sourceReference?: fhir.Reference | undefined;
    /**
     * The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    targetUri?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.target[x]
     */
    _targetUri?: fhir.FhirElement;
    /**
     * The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    targetReference?: fhir.Reference | undefined;
    /**
     * Mappings for an individual concept in the source to one or more concepts in the target.
     */
    element?: (fhir.ConceptMapElement | null)[] | undefined;
}
//# sourceMappingURL=ConceptMap.d.ts.map