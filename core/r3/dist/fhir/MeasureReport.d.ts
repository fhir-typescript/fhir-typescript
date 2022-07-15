import * as fhir from '../fhir.js';
import { MeasureReportStatusCodeType } from '../fhirValueSets/MeasureReportStatusCodes.js';
import { MeasureReportTypeCodeType } from '../fhirValueSets/MeasureReportTypeCodes.js';
/**
 * Valid arguments for the MeasureReportGroupPopulation type.
 */
export interface MeasureReportGroupPopulationArgs extends fhir.BackboneElementArgs {
    /**
     * The identifier of the population being reported, as defined by the population element of the measure.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The number of members of the population.
     */
    count?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.population.count
     */
    _count?: fhir.FhirElementArgs;
    /**
     * This element refers to a List of patient level MeasureReport resources, one for each patient in this population.
     */
    patients?: fhir.ReferenceArgs | undefined;
}
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export declare class MeasureReportGroupPopulation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The identifier of the population being reported, as defined by the population element of the measure.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population.
     */
    count?: fhir.FhirInteger | undefined;
    /**
     * This element refers to a List of patient level MeasureReport resources, one for each patient in this population.
     */
    patients?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportGroupPopulationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratumPopulation type.
 */
export interface MeasureReportGroupStratifierStratumPopulationArgs extends fhir.BackboneElementArgs {
    /**
     * The identifier of the population being reported, as defined by the population element of the measure.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.population.count
     */
    _count?: fhir.FhirElementArgs;
    /**
     * This element refers to a List of patient level MeasureReport resources, one for each patient in this population in this stratum.
     */
    patients?: fhir.ReferenceArgs | undefined;
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export declare class MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The identifier of the population being reported, as defined by the population element of the measure.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: fhir.FhirInteger | undefined;
    /**
     * This element refers to a List of patient level MeasureReport resources, one for each patient in this population in this stratum.
     */
    patients?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratumPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportGroupStratifierStratumPopulationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratum type.
 */
export interface MeasureReportGroupStratifierStratumArgs extends fhir.BackboneElementArgs {
    /**
     * The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhir.MeasureReportGroupStratifierStratumPopulationArgs[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.measureScore
     */
    _measureScore?: fhir.FhirElementArgs;
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export declare class MeasureReportGroupStratifierStratum extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value: fhir.FhirString | null;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population: fhir.MeasureReportGroupStratifierStratumPopulation[];
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratum - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportGroupStratifierStratumArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MeasureReportGroupStratifier type.
 */
export interface MeasureReportGroupStratifierArgs extends fhir.BackboneElementArgs {
    /**
     * The identifier of this stratifier, as defined in the measure definition.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: fhir.MeasureReportGroupStratifierStratumArgs[] | undefined;
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export declare class MeasureReportGroupStratifier extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The identifier of this stratifier, as defined in the measure definition.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum: fhir.MeasureReportGroupStratifierStratum[];
    /**
     * Default constructor for MeasureReportGroupStratifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportGroupStratifierArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MeasureReportGroup type.
 */
export interface MeasureReportGroupArgs extends fhir.BackboneElementArgs {
    /**
     * The identifier of the population group as defined in the measure definition.
     */
    identifier: fhir.IdentifierArgs | null;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhir.MeasureReportGroupPopulationArgs[] | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.measureScore
     */
    _measureScore?: fhir.FhirElementArgs;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhir.MeasureReportGroupStratifierArgs[] | undefined;
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export declare class MeasureReportGroup extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The identifier of the population group as defined in the measure definition.
     */
    identifier: fhir.Identifier | null;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population: fhir.MeasureReportGroupPopulation[];
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.FhirDecimal | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier: fhir.MeasureReportGroupStratifier[];
    /**
     * Default constructor for MeasureReportGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MeasureReport type.
 */
export interface MeasureReportArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport" | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 v3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The report status. No data will be available until the report status is complete.
     */
    status: fhir.FhirCode<MeasureReportStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    type: fhir.FhirCode<MeasureReportTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A reference to the Measure that was evaluated to produce this report.
     */
    measure: fhir.ReferenceArgs | null;
    /**
     * Optional Patient if the report was requested for a single patient.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The date this measure report was generated.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Reporting Organization.
     */
    reportingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.PeriodArgs | null;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhir.MeasureReportGroupArgs[] | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the evaluation of this report.
     */
    evaluatedResources?: fhir.ReferenceArgs | undefined;
}
/**
 * The MeasureReport resource contains the results of evaluating a measure.
 */
export declare class MeasureReport extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport";
    /**
     * Typically, this is used for identifiers that can go in an HL7 v3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The report status. No data will be available until the report status is complete.
     */
    status: fhir.FhirCode<MeasureReportStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    type: fhir.FhirCode<MeasureReportTypeCodeType> | null;
    /**
     * A reference to the Measure that was evaluated to produce this report.
     */
    measure: fhir.Reference | null;
    /**
     * Optional Patient if the report was requested for a single patient.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date this measure report was generated.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Reporting Organization.
     */
    reportingOrganization?: fhir.Reference | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.Period | null;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group: fhir.MeasureReportGroup[];
    /**
     * A reference to a Bundle containing the Resources that were used in the evaluation of this report.
     */
    evaluatedResources?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MeasureReport.d.ts.map