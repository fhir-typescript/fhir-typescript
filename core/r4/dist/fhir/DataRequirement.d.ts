import * as fhir from '../fhir.js';
import { SortDirectionCodingType } from '../fhirValueSets/SortDirectionCodings.js';
import { SortDirectionCodeType } from '../fhirValueSets/SortDirectionCodes.js';
import { AllTypesCodingType } from '../fhirValueSets/AllTypesCodings.js';
/**
 * Valid arguments for the DataRequirementCodeFilter type.
 */
export interface DataRequirementCodeFilterArgs extends fhir.FhirElementArgs {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: fhir.FhirString | string | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: fhir.FhirCanonical | string | undefined;
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.CodingArgs[] | undefined;
}
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementCodeFilter extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: fhir.FhirString | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: fhir.FhirCanonical | undefined;
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.Coding[];
    /**
     * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementCodeFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the DataRequirementDateFilter type.
 */
export interface DataRequirementDateFilterArgs extends fhir.FhirElementArgs {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: fhir.FhirString | string | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    value?: fhir.FhirDateTime | fhir.Period | fhir.Duration | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDuration?: fhir.DurationArgs | undefined;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementDateFilter extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: fhir.FhirString | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
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
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the DataRequirementSort type.
 */
export interface DataRequirementSortArgs extends fhir.FhirElementArgs {
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: SortDirectionCodeType | null;
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export declare class DataRequirementSort extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: fhir.FhirString | null;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: SortDirectionCodeType | null;
    /**
     * Default constructor for DataRequirementSort - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementSortArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for direction (DataRequirement.sort.direction)
     */
    static directionRequiredCoding(): SortDirectionCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: fhir.FhirString[] | string[] | undefined;
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: fhir.DataRequirementCodeFilterArgs[] | undefined;
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: fhir.DataRequirementDateFilterArgs[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
     */
    limit?: fhir.FhirPositiveInt | number | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.DataRequirementSortArgs[] | undefined;
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
    profile?: fhir.FhirCanonical[];
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DataRequirement.subject[x]
     */
    protected static readonly _fts_subjectIsChoice: true;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: fhir.FhirString[];
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: fhir.DataRequirementCodeFilter[];
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: fhir.DataRequirementDateFilter[];
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
     */
    limit?: fhir.FhirPositiveInt | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.DataRequirementSort[];
    /**
     * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (DataRequirement.type)
     */
    static typeRequiredCoding(): AllTypesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=DataRequirement.d.ts.map