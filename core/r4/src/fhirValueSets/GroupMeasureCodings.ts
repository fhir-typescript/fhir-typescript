// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/group-measure|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export const GroupMeasureCodings = {
  /**
   * mean: Aggregated using Mean of participant values.
   */
  Mean: new Coding({
    display: "Mean",
    code: "mean",
    system: "http://hl7.org/fhir/group-measure",
  }),
  /**
   * mean-of-mean: Aggregated using Mean of study mean values.
   */
  MeanOfStudyMeans: new Coding({
    display: "Mean of Study Means",
    code: "mean-of-mean",
    system: "http://hl7.org/fhir/group-measure",
  }),
  /**
   * mean-of-median: Aggregated using Mean of study median values.
   */
  MeanOfStudyMedins: new Coding({
    display: "Mean of Study Medins",
    code: "mean-of-median",
    system: "http://hl7.org/fhir/group-measure",
  }),
  /**
   * median: Aggregated using Median of participant values.
   */
  Median: new Coding({
    display: "Median",
    code: "median",
    system: "http://hl7.org/fhir/group-measure",
  }),
  /**
   * median-of-mean: Aggregated using Median of study mean values.
   */
  MedianOfStudyMeans: new Coding({
    display: "Median of Study Means",
    code: "median-of-mean",
    system: "http://hl7.org/fhir/group-measure",
  }),
  /**
   * median-of-median: Aggregated using Median of study median values.
   */
  MedianOfStudyMedians: new Coding({
    display: "Median of Study Medians",
    code: "median-of-median",
    system: "http://hl7.org/fhir/group-measure",
  }),
} as const;

/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export type GroupMeasureCodingType = typeof GroupMeasureCodings;