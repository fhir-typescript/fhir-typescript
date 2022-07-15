import * as fhir from '../fhirJson.js';
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export interface MeasureReportGroupPopulation extends fhir.BackboneElement {
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
    count?: number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.population.count
     */
    _count?: fhir.FhirElement;
    /**
     * This element refers to a List of patient level MeasureReport resources, one for each patient in this population.
     */
    patients?: fhir.Reference | undefined;
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export interface MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement {
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
    count?: number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.population.count
     */
    _count?: fhir.FhirElement;
    /**
     * This element refers to a List of patient level MeasureReport resources, one for each patient in this population in this stratum.
     */
    patients?: fhir.Reference | undefined;
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export interface MeasureReportGroupStratifierStratum extends fhir.BackboneElement {
    /**
     * The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.value
     */
    _value?: fhir.FhirElement;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: (fhir.MeasureReportGroupStratifierStratumPopulation | null)[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.measureScore
     */
    _measureScore?: fhir.FhirElement;
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export interface MeasureReportGroupStratifier extends fhir.BackboneElement {
    /**
     * The identifier of this stratifier, as defined in the measure definition.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: (fhir.MeasureReportGroupStratifierStratum | null)[] | undefined;
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export interface MeasureReportGroup extends fhir.BackboneElement {
    /**
     * The identifier of the population group as defined in the measure definition.
     */
    identifier: fhir.Identifier | null;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: (fhir.MeasureReportGroupPopulation | null)[] | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.measureScore
     */
    _measureScore?: fhir.FhirElement;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: (fhir.MeasureReportGroupStratifier | null)[] | undefined;
}
/**
 * The MeasureReport resource contains the results of evaluating a measure.
 */
export interface MeasureReport extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport" | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 v3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The report status. No data will be available until the report status is complete.
     */
    status: 'complete' | 'error' | 'pending' | null;
    /**
     * Extended properties for primitive element: MeasureReport.status
     */
    _status?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    type: 'individual' | 'patient-list' | 'summary' | null;
    /**
     * Extended properties for primitive element: MeasureReport.type
     */
    _type?: fhir.FhirElement;
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
    date?: string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.date
     */
    _date?: fhir.FhirElement;
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
    group?: (fhir.MeasureReportGroup | null)[] | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the evaluation of this report.
     */
    evaluatedResources?: fhir.Reference | undefined;
}
//# sourceMappingURL=MeasureReport.d.ts.map