import * as fhir from '../fhir.js';
import { ExtensionContextTypeCodeType } from '../fhirValueSets/ExtensionContextTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { StructureDefinitionKindCodeType } from '../fhirValueSets/StructureDefinitionKindCodes.js';
import { TypeDerivationRuleCodeType } from '../fhirValueSets/TypeDerivationRuleCodes.js';
/**
 * Valid arguments for the StructureDefinitionMapping type.
 */
export interface StructureDefinitionMappingArgs extends fhir.BackboneElementArgs {
    /**
     * The specification is described once, with general comments, and then specific mappings are made that reference this declaration.
     */
    identity: fhir.FhirId | string | undefined;
    /**
     * A formal identity for the specification being mapped to helps with identifying maps consistently.
     */
    uri?: fhir.FhirUri | string | undefined;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * An external specification that the content is mapped to.
 */
export declare class StructureDefinitionMapping extends fhir.BackboneElement {
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
     * Default constructor for StructureDefinitionMapping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionMappingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinitionContext type.
 */
export interface StructureDefinitionContextArgs extends fhir.BackboneElementArgs {
    /**
     * Defines how to interpret the expression that defines what the context of the extension is.
     */
    type: fhir.FhirCode<ExtensionContextTypeCodeType> | string | undefined;
    /**
     * An expression that defines where an extension can be used in resources.
     */
    expression: fhir.FhirString | string | undefined;
}
/**
 * Identifies the types of resource or data type elements to which the extension can be applied.
 */
export declare class StructureDefinitionContext extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Defines how to interpret the expression that defines what the context of the extension is.
     */
    type: fhir.FhirCode<ExtensionContextTypeCodeType> | null;
    /**
     * An expression that defines where an extension can be used in resources.
     */
    expression: fhir.FhirString | null;
    /**
     * Default constructor for StructureDefinitionContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionContextArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (StructureDefinition.context.type)
     */
    static get typeRequiredCodes(): {
        readonly ElementID: "element";
        readonly ExtensionURL: "extension";
        readonly FHIRPath: "fhirpath";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinitionSnapshot type.
 */
export interface StructureDefinitionSnapshotArgs extends fhir.BackboneElementArgs {
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinitionArgs[] | null;
}
/**
 * A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
 */
export declare class StructureDefinitionSnapshot extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinition[];
    /**
     * Default constructor for StructureDefinitionSnapshot - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionSnapshotArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinitionDifferential type.
 */
export interface StructureDefinitionDifferentialArgs extends fhir.BackboneElementArgs {
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinitionArgs[] | null;
}
/**
 * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 */
export declare class StructureDefinitionDifferential extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinition[];
    /**
     * Default constructor for StructureDefinitionDifferential - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionDifferentialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinition type.
 */
export interface StructureDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "StructureDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different structure definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.Some Examples:
     * * O2SatObservation
     * * PresentationReport
     * * Immunization2
     * * AcmeAdmissionRecordOld.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.Applications don't have to use this name but can always fall back to it. The title also corresponds to the label for the root element.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of structure definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Allows filtering of structure definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure definition is the organization or individual primarily responsible for the maintenance and upkeep of the structure definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the structure definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure definition is presumed to be the predominant language in the place the structure definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the structure definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the structure definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes.
     */
    keyword?: fhir.CodingArgs[] | undefined;
    /**
     * A StructureDefinition does not need to specify the target it applies to as StructureDefinitions will often be valid across multiple versions of FHIR. FHIR tooling can determine whether a StructureDefinition is consistent with a particular StructureDefinition if desired.
     */
    fhirVersion?: fhir.FhirCode | string | undefined;
    /**
     * An external specification that the content is mapped to.
     */
    mapping?: fhir.StructureDefinitionMappingArgs[] | undefined;
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind: fhir.FhirCode<StructureDefinitionKindCodeType> | string | undefined;
    /**
     * Abstract Resources cannot be instantiated - a concrete sub-type must be used. Abstract datatypes and extensions cannot be used in an instance. For logical models, the exact implication of "abstract" will rest with the author, depending how the logical model is used. Flagging a constraint structure as abstract conveys design intent but makes no difference to how the structure definition is handled. Note that inline declared elements that are given the type "Element" in the StructureDefinition, but have children described, are anonymous concrete types that specialize Element.
     */
    abstract: fhir.FhirBoolean | boolean | undefined;
    /**
     * Identifies the types of resource or data type elements to which the extension can be applied.
     */
    context?: fhir.StructureDefinitionContextArgs[] | undefined;
    /**
     * The rules are only evaluated when the extension is present. When evaluating the invariant, the FHIRPath focus is the element that holds the extension, and %extension refers to the extension itself.
     */
    contextInvariant?: fhir.FhirString[] | string[] | undefined;
    /**
     * Note that in the case of constraints, the type could be determined by chasing through the baseDefinition references until a concrete structure (derivation = specialization) is reached, or by looking at the path of the first element in the snapshot - if present - but providing the type directly makes for simpler tooling and indexing.
     * The type must match the elements defined in the differential and the snapshot. For all FHIR defined types, the path name of the element will start with the type name. For logical models, where the type is a URL, the type name SHOULD start with the tail of the type URL where required.
     */
    type: fhir.FhirUri | string | undefined;
    /**
     * If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. If there is no base, then the differential constraints cannot be provided (snapshot only). Differential structures are useful for the editing perspective, and snapshot structures are suitable for operational use. The FHIR Project provides a number of tools/services to populate snapshots from differential constraints. Logical Models have a base of "Element" or another logical model.
     */
    baseDefinition?: fhir.FhirCanonical | string | undefined;
    /**
     * If the definition is a specialization, then it adds new elements in the differential, and the snapshot includes the inherited elements.  If the definition is a constraint, then it cannot define new elements, it can only make new rules about existing content (see [Profiling Resources](profiling.html#resources)).
     */
    derivation?: fhir.FhirCode<TypeDerivationRuleCodeType> | string | undefined;
    /**
     * A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
     */
    snapshot?: fhir.StructureDefinitionSnapshotArgs | undefined;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */
    differential?: fhir.StructureDefinitionDifferentialArgs | undefined;
}
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
export declare class StructureDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "StructureDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different structure definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.Some Examples:
     * * O2SatObservation
     * * PresentationReport
     * * Immunization2
     * * AcmeAdmissionRecordOld.
     */
    name: fhir.FhirString | null;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.Applications don't have to use this name but can always fall back to it. The title also corresponds to the label for the root element.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of structure definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of structure definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure definition is the organization or individual primarily responsible for the maintenance and upkeep of the structure definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the structure definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure definition is presumed to be the predominant language in the place the structure definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the structure definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the structure definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes.
     */
    keyword: fhir.Coding[];
    /**
     * A StructureDefinition does not need to specify the target it applies to as StructureDefinitions will often be valid across multiple versions of FHIR. FHIR tooling can determine whether a StructureDefinition is consistent with a particular StructureDefinition if desired.
     */
    fhirVersion?: fhir.FhirCode | undefined;
    /**
     * An external specification that the content is mapped to.
     */
    mapping: fhir.StructureDefinitionMapping[];
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind: fhir.FhirCode<StructureDefinitionKindCodeType> | null;
    /**
     * Abstract Resources cannot be instantiated - a concrete sub-type must be used. Abstract datatypes and extensions cannot be used in an instance. For logical models, the exact implication of "abstract" will rest with the author, depending how the logical model is used. Flagging a constraint structure as abstract conveys design intent but makes no difference to how the structure definition is handled. Note that inline declared elements that are given the type "Element" in the StructureDefinition, but have children described, are anonymous concrete types that specialize Element.
     */
    abstract: fhir.FhirBoolean | null;
    /**
     * Identifies the types of resource or data type elements to which the extension can be applied.
     */
    context: fhir.StructureDefinitionContext[];
    /**
     * The rules are only evaluated when the extension is present. When evaluating the invariant, the FHIRPath focus is the element that holds the extension, and %extension refers to the extension itself.
     */
    contextInvariant: fhir.FhirString[];
    /**
     * Note that in the case of constraints, the type could be determined by chasing through the baseDefinition references until a concrete structure (derivation = specialization) is reached, or by looking at the path of the first element in the snapshot - if present - but providing the type directly makes for simpler tooling and indexing.
     * The type must match the elements defined in the differential and the snapshot. For all FHIR defined types, the path name of the element will start with the type name. For logical models, where the type is a URL, the type name SHOULD start with the tail of the type URL where required.
     */
    type: fhir.FhirUri | null;
    /**
     * If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. If there is no base, then the differential constraints cannot be provided (snapshot only). Differential structures are useful for the editing perspective, and snapshot structures are suitable for operational use. The FHIR Project provides a number of tools/services to populate snapshots from differential constraints. Logical Models have a base of "Element" or another logical model.
     */
    baseDefinition?: fhir.FhirCanonical | undefined;
    /**
     * If the definition is a specialization, then it adds new elements in the differential, and the snapshot includes the inherited elements.  If the definition is a constraint, then it cannot define new elements, it can only make new rules about existing content (see [Profiling Resources](profiling.html#resources)).
     */
    derivation?: fhir.FhirCode<TypeDerivationRuleCodeType> | undefined;
    /**
     * A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
     */
    snapshot?: fhir.StructureDefinitionSnapshot | undefined;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */
    differential?: fhir.StructureDefinitionDifferential | undefined;
    /**
     * Default constructor for StructureDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (StructureDefinition.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Extensible-bound Value Set for keyword (StructureDefinition.keyword)
     */
    static get keywordExtensibleCodings(): {
        readonly DomainAnalysisModel: fhir.Coding;
        readonly CustomResource: fhir.Coding;
        readonly DomainAnalysisModelDam: fhir.Coding;
        readonly FHIRStructure: fhir.Coding;
        readonly Template: fhir.Coding;
        readonly WireFormat: fhir.Coding;
    };
    /**
     * Required-bound Value Set for fhirVersion (StructureDefinition.fhirVersion)
     */
    static get fhirVersionRequiredCodes(): {
        readonly VAL0080: "0.0.80";
        readonly VAL0081: "0.0.81";
        readonly VAL0082: "0.0.82";
        readonly VAL001: "0.01";
        readonly VAL005: "0.05";
        readonly VAL006: "0.06";
        readonly VAL011: "0.11";
        readonly VAL040: "0.4.0";
        readonly VAL050: "0.5.0";
        readonly VAL100: "1.0.0";
        readonly VAL101: "1.0.1";
        readonly VAL102: "1.0.2";
        readonly VAL110: "1.1.0";
        readonly VAL140: "1.4.0";
        readonly VAL160: "1.6.0";
        readonly VAL180: "1.8.0";
        readonly VAL300: "3.0.0";
        readonly VAL301: "3.0.1";
        readonly VAL330: "3.3.0";
        readonly VAL350: "3.5.0";
        readonly VAL400: "4.0.0";
        readonly VAL401: "4.0.1";
    };
    /**
     * Required-bound Value Set for kind (StructureDefinition.kind)
     */
    static get kindRequiredCodes(): {
        readonly ComplexDataType: "complex-type";
        readonly Logical: "logical";
        readonly PrimitiveDataType: "primitive-type";
        readonly Resource: "resource";
    };
    /**
     * Extensible-bound Value Set for type (StructureDefinition.type)
     */
    static get typeExtensibleCodings(): {
        readonly Account: fhir.Coding;
        readonly ActivityDefinition: fhir.Coding;
        readonly Address: fhir.Coding;
        readonly AdverseEvent: fhir.Coding;
        readonly Age: fhir.Coding;
        readonly AllergyIntolerance: fhir.Coding;
        readonly Annotation: fhir.Coding;
        readonly Appointment: fhir.Coding;
        readonly AppointmentResponse: fhir.Coding;
        /**
         * A name for the specification that is being mapped to.
         */
        readonly Attachment: fhir.Coding;
        readonly AuditEvent: fhir.Coding;
        readonly BackboneElement: fhir.Coding;
        readonly Base64Binary: fhir.Coding;
        readonly Basic: fhir.Coding;
        readonly Binary: fhir.Coding;
        readonly BiologicallyDerivedProduct: fhir.Coding;
        readonly BodyStructure: fhir.Coding;
        readonly VALBoolean: fhir.Coding;
        readonly Bundle: fhir.Coding;
        readonly Canonical: fhir.Coding;
        readonly CapabilityStatement: fhir.Coding;
        readonly CarePlan: fhir.Coding;
        readonly CareTeam: fhir.Coding;
        readonly CatalogEntry: fhir.Coding;
        readonly ChargeItem: fhir.Coding;
        readonly ChargeItemDefinition: fhir.Coding;
        readonly Claim: fhir.Coding;
        readonly ClaimResponse: fhir.Coding;
        readonly ClinicalImpression: fhir.Coding;
        readonly Code: fhir.Coding;
        readonly CodeableConcept: fhir.Coding;
        readonly CodeSystem: fhir.Coding;
        readonly Coding: fhir.Coding;
        readonly Communication: fhir.Coding;
        readonly CommunicationRequest: fhir.Coding;
        readonly CompartmentDefinition: fhir.Coding;
        readonly Composition: fhir.Coding;
        readonly ConceptMap: fhir.Coding;
        readonly Condition: fhir.Coding;
        readonly Consent: fhir.Coding;
        readonly ContactDetail: fhir.Coding;
        readonly ContactPoint: fhir.Coding;
        readonly Contract: fhir.Coding;
        readonly Contributor: fhir.Coding;
        readonly Count: fhir.Coding;
        readonly Coverage: fhir.Coding;
        readonly CoverageEligibilityRequest: fhir.Coding;
        readonly CoverageEligibilityResponse: fhir.Coding;
        readonly DataRequirement: fhir.Coding;
        readonly Date: fhir.Coding;
        readonly DateTime: fhir.Coding;
        readonly Decimal: fhir.Coding;
        readonly DetectedIssue: fhir.Coding;
        readonly Device: fhir.Coding;
        readonly DeviceDefinition: fhir.Coding;
        readonly DeviceMetric: fhir.Coding;
        readonly DeviceRequest: fhir.Coding;
        readonly DeviceUseStatement: fhir.Coding;
        readonly DiagnosticReport: fhir.Coding;
        readonly Distance: fhir.Coding;
        readonly DocumentManifest: fhir.Coding;
        readonly DocumentReference: fhir.Coding;
        readonly DomainResource: fhir.Coding;
        readonly Dosage: fhir.Coding;
        readonly Duration: fhir.Coding;
        readonly EffectEvidenceSynthesis: fhir.Coding;
        readonly VALElement: fhir.Coding;
        readonly ElementDefinition: fhir.Coding;
        readonly Encounter: fhir.Coding;
        readonly Endpoint: fhir.Coding;
        readonly EnrollmentRequest: fhir.Coding;
        readonly EnrollmentResponse: fhir.Coding;
        readonly EpisodeOfCare: fhir.Coding;
        readonly EventDefinition: fhir.Coding;
        readonly Evidence: fhir.Coding;
        readonly EvidenceVariable: fhir.Coding;
        readonly ExampleScenario: fhir.Coding;
        readonly ExplanationOfBenefit: fhir.Coding;
        readonly Expression: fhir.Coding;
        readonly Extension: fhir.Coding;
        readonly FamilyMemberHistory: fhir.Coding;
        readonly Flag: fhir.Coding;
        readonly Goal: fhir.Coding;
        readonly GraphDefinition: fhir.Coding;
        readonly Group: fhir.Coding;
        readonly GuidanceResponse: fhir.Coding;
        readonly HealthcareService: fhir.Coding;
        readonly HumanName: fhir.Coding;
        readonly Id: fhir.Coding;
        readonly Identifier: fhir.Coding;
        readonly ImagingStudy: fhir.Coding;
        readonly Immunization: fhir.Coding;
        readonly ImmunizationEvaluation: fhir.Coding;
        readonly ImmunizationRecommendation: fhir.Coding;
        readonly ImplementationGuide: fhir.Coding;
        readonly Instant: fhir.Coding;
        readonly InsurancePlan: fhir.Coding;
        readonly Integer: fhir.Coding;
        readonly Invoice: fhir.Coding;
        readonly Library: fhir.Coding;
        readonly Linkage: fhir.Coding;
        readonly List: fhir.Coding;
        readonly Location: fhir.Coding;
        readonly Markdown: fhir.Coding;
        readonly MarketingStatus: fhir.Coding;
        readonly Measure: fhir.Coding;
        readonly MeasureReport: fhir.Coding;
        readonly Media: fhir.Coding;
        readonly Medication: fhir.Coding;
        readonly MedicationAdministration: fhir.Coding;
        readonly MedicationDispense: fhir.Coding;
        readonly MedicationKnowledge: fhir.Coding;
        readonly MedicationRequest: fhir.Coding;
        readonly MedicationStatement: fhir.Coding;
        readonly MedicinalProduct: fhir.Coding;
        readonly MedicinalProductAuthorization: fhir.Coding;
        readonly MedicinalProductContraindication: fhir.Coding;
        readonly MedicinalProductIndication: fhir.Coding;
        readonly MedicinalProductIngredient: fhir.Coding;
        readonly MedicinalProductInteraction: fhir.Coding;
        readonly MedicinalProductManufactured: fhir.Coding;
        readonly MedicinalProductPackaged: fhir.Coding;
        readonly MedicinalProductPharmaceutical: fhir.Coding;
        readonly MedicinalProductUndesirableEffect: fhir.Coding;
        readonly MessageDefinition: fhir.Coding;
        readonly MessageHeader: fhir.Coding;
        readonly Meta: fhir.Coding;
        readonly MolecularSequence: fhir.Coding;
        readonly Money: fhir.Coding;
        readonly MoneyQuantity: fhir.Coding;
        readonly NamingSystem: fhir.Coding;
        readonly Narrative: fhir.Coding;
        readonly NutritionOrder: fhir.Coding;
        readonly Observation: fhir.Coding;
        readonly ObservationDefinition: fhir.Coding;
        readonly Oid: fhir.Coding;
        readonly OperationDefinition: fhir.Coding;
        readonly OperationOutcome: fhir.Coding;
        readonly Organization: fhir.Coding;
        readonly OrganizationAffiliation: fhir.Coding;
        readonly ParameterDefinition: fhir.Coding;
        readonly Parameters: fhir.Coding;
        readonly Patient: fhir.Coding;
        readonly PaymentNotice: fhir.Coding;
        readonly PaymentReconciliation: fhir.Coding;
        readonly Period: fhir.Coding;
        readonly Person: fhir.Coding;
        readonly PlanDefinition: fhir.Coding;
        readonly Population: fhir.Coding;
        readonly PositiveInt: fhir.Coding;
        readonly Practitioner: fhir.Coding;
        readonly PractitionerRole: fhir.Coding;
        readonly Procedure: fhir.Coding;
        readonly ProdCharacteristic: fhir.Coding;
        readonly ProductShelfLife: fhir.Coding;
        readonly Provenance: fhir.Coding;
        readonly Quantity: fhir.Coding;
        readonly Questionnaire: fhir.Coding;
        readonly QuestionnaireResponse: fhir.Coding;
        readonly Range: fhir.Coding;
        readonly Ratio: fhir.Coding;
        readonly Reference: fhir.Coding;
        readonly RelatedArtifact: fhir.Coding;
        readonly RelatedPerson: fhir.Coding;
        readonly RequestGroup: fhir.Coding;
        readonly ResearchDefinition: fhir.Coding;
        readonly ResearchElementDefinition: fhir.Coding;
        readonly ResearchStudy: fhir.Coding;
        readonly ResearchSubject: fhir.Coding;
        readonly Resource: fhir.Coding;
        readonly RiskAssessment: fhir.Coding;
        readonly RiskEvidenceSynthesis: fhir.Coding;
        readonly SampledData: fhir.Coding;
        readonly Schedule: fhir.Coding;
        readonly SearchParameter: fhir.Coding;
        readonly ServiceRequest: fhir.Coding;
        readonly Signature: fhir.Coding;
        readonly SimpleQuantity: fhir.Coding;
        readonly Slot: fhir.Coding;
        readonly Specimen: fhir.Coding;
        readonly SpecimenDefinition: fhir.Coding;
        readonly VALString: fhir.Coding;
        readonly StructureDefinition: fhir.Coding;
        readonly StructureMap: fhir.Coding;
        readonly Subscription: fhir.Coding;
        readonly Substance: fhir.Coding;
        readonly SubstanceAmount: fhir.Coding;
        readonly SubstanceNucleicAcid: fhir.Coding;
        readonly SubstancePolymer: fhir.Coding;
        readonly SubstanceProtein: fhir.Coding;
        readonly SubstanceReferenceInformation: fhir.Coding;
        readonly SubstanceSourceMaterial: fhir.Coding;
        readonly SubstanceSpecification: fhir.Coding;
        readonly SupplyDelivery: fhir.Coding;
        readonly SupplyRequest: fhir.Coding;
        readonly Task: fhir.Coding;
        readonly TerminologyCapabilities: fhir.Coding;
        readonly TestReport: fhir.Coding;
        readonly TestScript: fhir.Coding;
        readonly Time: fhir.Coding;
        readonly Timing: fhir.Coding;
        readonly TriggerDefinition: fhir.Coding;
        readonly UnsignedInt: fhir.Coding;
        readonly Uri: fhir.Coding;
        readonly Url: fhir.Coding;
        readonly UsageContext: fhir.Coding;
        readonly Uuid: fhir.Coding;
        readonly ValueSet: fhir.Coding;
        readonly VerificationResult: fhir.Coding;
        readonly VisionPrescription: fhir.Coding;
        readonly XHTML: fhir.Coding;
    };
    /**
     * Required-bound Value Set for derivation (StructureDefinition.derivation)
     */
    static get derivationRequiredCodes(): {
        readonly Constraint: "constraint";
        readonly Specialization: "specialization";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=StructureDefinition.d.ts.map