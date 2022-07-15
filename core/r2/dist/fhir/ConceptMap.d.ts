import * as fhir from '../fhir.js';
import { ConceptMapEquivalenceCodeType } from '../fhirValueSets/ConceptMapEquivalenceCodes.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
/**
 * Valid arguments for the ConceptMapContact type.
 */
export interface ConceptMapContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the concept map.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.contact.name
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
export declare class ConceptMapContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the concept map.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for ConceptMapContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMapElementTargetDependsOn type.
 */
export interface ConceptMapElementTargetDependsOnArgs extends fhir.BackboneElementArgs {
    /**
     * A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.
     */
    element: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.dependsOn.element
     */
    _element?: fhir.FhirElementArgs;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    codeSystem: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.dependsOn.codeSystem
     */
    _codeSystem?: fhir.FhirElementArgs;
    /**
     * Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.
     */
    code: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.dependsOn.code
     */
    _code?: fhir.FhirElementArgs;
}
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export declare class ConceptMapElementTargetDependsOn extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.
     */
    element: fhir.FhirUri | null;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    codeSystem: fhir.FhirUri | null;
    /**
     * Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.
     */
    code: fhir.FhirString | null;
    /**
     * Default constructor for ConceptMapElementTargetDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapElementTargetDependsOnArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMapElementTarget type.
 */
export interface ConceptMapElementTargetArgs extends fhir.BackboneElementArgs {
    /**
     * An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).
     */
    codeSystem?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.codeSystem
     */
    _codeSystem?: fhir.FhirElementArgs;
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
     */
    equivalence: fhir.FhirCode<ConceptMapEquivalenceCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.equivalence
     */
    _equivalence?: fhir.FhirElementArgs;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comments?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.target.comments
     */
    _comments?: fhir.FhirElementArgs;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: fhir.ConceptMapElementTargetDependsOnArgs[] | undefined;
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product?: fhir.ConceptMapElementTargetDependsOnArgs[] | undefined;
}
/**
 * A concept from the target value set that this concept maps to.
 */
export declare class ConceptMapElementTarget extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).
     */
    codeSystem?: fhir.FhirUri | undefined;
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
     */
    equivalence: fhir.FhirCode<ConceptMapEquivalenceCodeType> | null;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comments?: fhir.FhirString | undefined;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn: fhir.ConceptMapElementTargetDependsOn[];
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product: fhir.ConceptMapElementTargetDependsOn[];
    /**
     * Default constructor for ConceptMapElementTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapElementTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMapElement type.
 */
export interface ConceptMapElementArgs extends fhir.BackboneElementArgs {
    /**
     * An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
     */
    codeSystem?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.codeSystem
     */
    _codeSystem?: fhir.FhirElementArgs;
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.element.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * A concept from the target value set that this concept maps to.
     */
    target?: fhir.ConceptMapElementTargetArgs[] | undefined;
}
/**
 * Mappings for an individual concept in the source to one or more concepts in the target.
 */
export declare class ConceptMapElement extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
     */
    codeSystem?: fhir.FhirUri | undefined;
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * A concept from the target value set that this concept maps to.
     */
    target: fhir.ConceptMapElementTarget[];
    /**
     * Default constructor for ConceptMapElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConceptMap type.
 */
export interface ConceptMapArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap" | undefined;
    /**
     * An absolute URL that is used to identify this concept map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this concept map is (or will be) published.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Support human navigation.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Identify when/if the concept map should be used.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the concept map.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.ConceptMapContactArgs[] | undefined;
    /**
     * Need to know when a concept map was first legal for use or became withdrawn or replaced.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Human understandability.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Assist in searching for appropriate concept map instances.
     */
    useContext?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Explains why this concept map is needed and why it has been constrained as it has.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the concept map and/or its contents.
     */
    copyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The source value set that specifies the concepts that are being mapped.
     */
    source?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * The source value set that specifies the concepts that are being mapped.
     */
    sourceUri?: fhir.FhirUri | string | undefined;
    /**
     * The source value set that specifies the concepts that are being mapped.
     */
    sourceReference?: fhir.ReferenceArgs | undefined;
    /**
     * The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    target?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    targetUri?: fhir.FhirUri | string | undefined;
    /**
     * The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    targetReference?: fhir.ReferenceArgs | undefined;
    /**
     * Mappings for an individual concept in the source to one or more concepts in the target.
     */
    element?: fhir.ConceptMapElementArgs[] | undefined;
}
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
 */
export declare class ConceptMap extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap";
    /**
     * An absolute URL that is used to identify this concept map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this concept map is (or will be) published.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Support human navigation.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Identify when/if the concept map should be used.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the concept map.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.ConceptMapContact[];
    /**
     * Need to know when a concept map was first legal for use or became withdrawn or replaced.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Human understandability.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Assist in searching for appropriate concept map instances.
     */
    useContext: fhir.CodeableConcept[];
    /**
     * Explains why this concept map is needed and why it has been constrained as it has.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the concept map and/or its contents.
     */
    copyright?: fhir.FhirString | undefined;
    /**
     * The source value set that specifies the concepts that are being mapped.
     */
    source: (fhir.FhirUri | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ConceptMap.source[x]
     */
    protected static readonly _fts_sourceIsChoice: true;
    /**
     * The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
    target: (fhir.FhirUri | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ConceptMap.target[x]
     */
    protected static readonly _fts_targetIsChoice: true;
    /**
     * Mappings for an individual concept in the source to one or more concepts in the target.
     */
    element: fhir.ConceptMapElement[];
    /**
     * Default constructor for ConceptMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConceptMapArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ConceptMap.d.ts.map