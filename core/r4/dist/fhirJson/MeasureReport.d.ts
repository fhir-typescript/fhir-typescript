import * as fhir from '../fhirJson.js';
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export interface MeasureReportGroupPopulation extends fhir.BackboneElement {
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
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhir.Reference | undefined;
}
/**
 * A stratifier component value.
 */
export interface MeasureReportGroupStratifierStratumComponent extends fhir.BackboneElement {
    /**
     * The code for the stratum component value.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The stratum component value.
     */
    value: fhir.CodeableConcept | null;
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export interface MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement {
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
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhir.Reference | undefined;
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export interface MeasureReportGroupStratifierStratum extends fhir.BackboneElement {
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhir.CodeableConcept | undefined;
    /**
     * A stratifier component value.
     */
    component?: fhir.MeasureReportGroupStratifierStratumComponent[] | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhir.MeasureReportGroupStratifierStratumPopulation[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.Quantity | undefined;
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export interface MeasureReportGroupStratifier extends fhir.BackboneElement {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: fhir.MeasureReportGroupStratifierStratum[] | undefined;
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export interface MeasureReportGroup extends fhir.BackboneElement {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhir.MeasureReportGroupPopulation[] | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.Quantity | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhir.MeasureReportGroupStratifier[] | undefined;
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReport extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport";
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'complete' | 'error' | 'pending' | null;
    /**
     * Extended properties for primitive element: MeasureReport.status
     */
    _status?: fhir.FhirElement;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type: 'data-collection' | 'individual' | 'subject-list' | 'summary' | null;
    /**
     * Extended properties for primitive element: MeasureReport.type
     */
    _type?: fhir.FhirElement;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: string | null;
    /**
     * Extended properties for primitive element: MeasureReport.measure
     */
    _measure?: fhir.FhirElement;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The date this measure report was generated.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.date
     */
    _date?: fhir.FhirElement;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhir.Reference | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.Period | null;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: 'decrease' | 'increase' | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhir.MeasureReportGroup[] | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhir.Reference[] | undefined;
}
//# sourceMappingURL=MeasureReport.d.ts.map