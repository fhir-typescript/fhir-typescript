/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
var EffectEstimateTypeCodings = {
    /**
     * absolute-ARD: absolute risk difference (a type of absolute effect estimate).
     */
    AbsoluteRiskDifference: new Coding({
        display: "absolute risk difference",
        code: "absolute-ARD",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * absolute-MeanDiff: mean difference (a type of absolute effect estimate).
     */
    MeanDifference: new Coding({
        display: "mean difference",
        code: "absolute-MeanDiff",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * absolute-MedianDiff: median difference (a type of absolute effect estimate).
     */
    MedianDifference: new Coding({
        display: "median difference",
        code: "absolute-MedianDiff",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * absolute-SMD: standardized mean difference (a type of absolute effect estimate).
     */
    StandardizedMeanDifference: new Coding({
        display: "standardized mean difference",
        code: "absolute-SMD",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * relative-HR: hazard ratio (a type of relative effect estimate).
     */
    HazardRatio: new Coding({
        display: "hazard ratio",
        code: "relative-HR",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * relative-OR: odds ratio (a type of relative effect estimate).
     */
    OddsRatio: new Coding({
        display: "odds ratio",
        code: "relative-OR",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * relative-RR: relative risk (a type of relative effect estimate).
     */
    RelativeRisk: new Coding({
        display: "relative risk",
        code: "relative-RR",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
};

export { EffectEstimateTypeCodings };
//# sourceMappingURL=EffectEstimateTypeCodings.js.map