import * as fhir from '../fhir.js';
/**
 * Valid arguments for the DataRequirementCodeFilter type.
 */
export interface DataRequirementCodeFilterArgs extends fhir.FhirElementArgs {
    /**
     * The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: fhir.FhirString | fhir.Reference | undefined;
    /**
     * The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSetString?: fhir.FhirString | string | undefined;
    /**
     * The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSetReference?: fhir.ReferenceArgs | undefined;
    /**
     * The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.
     */
    valueCode?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.valueCode
     */
    _valueCode?: (fhir.FhirElementArgs | null)[];
    /**
     * The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings.
     */
    valueCoding?: fhir.CodingArgs[] | undefined;
    /**
     * The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
 */
export declare class DataRequirementCodeFilter extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.
     */
    path: fhir.FhirString | null;
    /**
     * The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: (fhir.FhirString | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DataRequirement.codeFilter.valueSet[x]
     */
    protected static readonly _fts_valueSetIsChoice: true;
    /**
     * The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.
     */
    valueCode: fhir.FhirCode[];
    /**
     * The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings.
     */
    valueCoding: fhir.Coding[];
    /**
     * The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts.
     */
    valueCodeableConcept: fhir.CodeableConcept[];
    /**
     * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementCodeFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DataRequirementDateFilter type.
 */
export interface DataRequirementDateFilterArgs extends fhir.FhirElementArgs {
    /**
     * The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    value?: fhir.FhirDateTime | fhir.Period | fhir.Duration | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    valueDuration?: fhir.DurationArgs | undefined;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
 */
export declare class DataRequirementDateFilter extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.
     */
    path: fhir.FhirString | null;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    value?: (fhir.FhirDateTime | fhir.Period | fhir.Duration) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DataRequirement.dateFilter.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for DataRequirementDateFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementDateFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DataRequirement type.
 */
export interface DataRequirementArgs extends fhir.FhirElementArgs {
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.profile
     */
    _profile?: (fhir.FhirElementArgs | null)[];
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.
     */
    mustSupport?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.mustSupport
     */
    _mustSupport?: (fhir.FhirElementArgs | null)[];
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
     */
    codeFilter?: fhir.DataRequirementCodeFilterArgs[] | undefined;
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
     */
    dateFilter?: fhir.DataRequirementDateFilterArgs[] | undefined;
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export declare class DataRequirement extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: fhir.FhirCode | null;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile: fhir.FhirUri[];
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.
     */
    mustSupport: fhir.FhirString[];
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
     */
    codeFilter: fhir.DataRequirementCodeFilter[];
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
     */
    dateFilter: fhir.DataRequirementDateFilter[];
    /**
     * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DataRequirement.d.ts.map