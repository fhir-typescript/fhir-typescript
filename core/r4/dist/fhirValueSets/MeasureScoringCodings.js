/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * The scoring type of the measure.
 */
var MeasureScoringCodings = {
    /**
     * cohort: The measure is a cohort definition.
     */
    Cohort: new Coding({
        display: "Cohort",
        code: "cohort",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    }),
    /**
     * continuous-variable: The score is defined by a calculation of some quantity.
     */
    ContinuousVariable: new Coding({
        display: "Continuous Variable",
        code: "continuous-variable",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    }),
    /**
     * proportion: The measure score is defined using a proportion.
     */
    Proportion: new Coding({
        display: "Proportion",
        code: "proportion",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    }),
    /**
     * ratio: The measure score is defined using a ratio.
     */
    Ratio: new Coding({
        display: "Ratio",
        code: "ratio",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
    }),
};

export { MeasureScoringCodings };
//# sourceMappingURL=MeasureScoringCodings.js.map
