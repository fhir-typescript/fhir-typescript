import * as fhir from '../fhir.js';
import { ObservationRelationshiptypesCodeType } from '../fhirValueSets/ObservationRelationshiptypesCodes.js';
import { ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
/**
 * Valid arguments for the ObservationReferenceRange type.
 */
export interface ObservationReferenceRangeArgs extends fhir.BackboneElementArgs {
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.QuantityArgs | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
     */
    high?: fhir.QuantityArgs | undefined;
    /**
     * Need to be able to say what kind of reference range this is - normal, recommended, therapeutic, or perhaps what state this reference range applies to (i.e. age, hormonal cycles, etc.).
     */
    meaning?: fhir.CodeableConceptArgs | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.RangeArgs | undefined;
    /**
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Observation.referenceRange.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
 */
export declare class ObservationReferenceRange extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.Quantity | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
     */
    high?: fhir.Quantity | undefined;
    /**
     * Need to be able to say what kind of reference range this is - normal, recommended, therapeutic, or perhaps what state this reference range applies to (i.e. age, hormonal cycles, etc.).
     */
    meaning?: fhir.CodeableConcept | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.Range | undefined;
    /**
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ObservationReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationReferenceRangeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ObservationRelated type.
 */
export interface ObservationRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * A relationship type SHOULD be provided.
     */
    type?: fhir.FhirCode<ObservationRelationshiptypesCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Observation.related.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A reference to the observation or [[[QuestionnaireResponse]]] resource that is related to this observation.
     */
    target: fhir.ReferenceArgs | null;
}
/**
 * Normally, an observation will have either a value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and a set of related observations or sometimes QuestionnaireResponse  from which the measure is derived.
 */
export declare class ObservationRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A relationship type SHOULD be provided.
     */
    type?: fhir.FhirCode<ObservationRelationshiptypesCodeType> | undefined;
    /**
     * A reference to the observation or [[[QuestionnaireResponse]]] resource that is related to this observation.
     */
    target: fhir.Reference | null;
    /**
     * Default constructor for ObservationRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ObservationComponent type.
 */
export interface ObservationComponentArgs extends fhir.BackboneElementArgs {
    /**
     * Knowing what kind of observation is being made is essential to understanding the observation.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    value?: fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * For many results it is necessary to handle exceptional values in measurements.
     */
    dataAbsentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
     */
    referenceRange?: fhir.ObservationReferenceRangeArgs[] | undefined;
}
/**
 * Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.
 */
export declare class ObservationComponent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Knowing what kind of observation is being made is essential to understanding the observation.
     */
    code: fhir.CodeableConcept | null;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    value?: (fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.component.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * For many results it is necessary to handle exceptional values in measurements.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
     */
    referenceRange: fhir.ObservationReferenceRange[];
    /**
     * Default constructor for ObservationComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Observation type.
 */
export interface ObservationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Observation" | undefined;
    /**
     * Allows observations to be distinguished and referenced.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Need to track the status of individual results. Some results are finalized before the whole report is finalized.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Observation.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A code that classifies the general type of observation being made.  This is used  for searching, sorting and display purposes.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Knowing what kind of observation is being made is essential to understanding the observation.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Observations have no value if you don't know who or what they're about.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * For some observations it may be important to know the link between an observation and a particular encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Knowing when an observation was deemed true is important to its relevance as well as determining trends.
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Knowing when an observation was deemed true is important to its relevance as well as determining trends.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Knowing when an observation was deemed true is important to its relevance as well as determining trends.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date and time this observation was made available to providers, typically after the results have been reviewed and verified.
     */
    issued?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Observation.issued
     */
    _issued?: fhir.FhirElementArgs;
    /**
     * May give a degree of confidence in the observation and also indicates where follow-up questions should be directed.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    value?: fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * For many results it is necessary to handle exceptional values in measurements.
     */
    dataAbsentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.
     */
    interpretation?: fhir.CodeableConceptArgs | undefined;
    /**
     * Need to be able to provide free text additional information.
     */
    comments?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Observation.comments
     */
    _comments?: fhir.FhirElementArgs;
    /**
     * Knowing where the observation is made is important for tracking if multiple sites are possible.
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * In some cases, method can impact results and is thus used for determining whether results can be compared or determining significance of results.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specimen that was used when this observation was made.
     */
    specimen?: fhir.ReferenceArgs | undefined;
    /**
     * The device used to generate the observation data.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
     */
    referenceRange?: fhir.ObservationReferenceRangeArgs[] | undefined;
    /**
     * Normally, an observation will have either a value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and a set of related observations or sometimes QuestionnaireResponse  from which the measure is derived.
     */
    related?: fhir.ObservationRelatedArgs[] | undefined;
    /**
     * Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.
     */
    component?: fhir.ObservationComponentArgs[] | undefined;
}
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export declare class Observation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Observation";
    /**
     * Allows observations to be distinguished and referenced.
     */
    identifier: fhir.Identifier[];
    /**
     * Need to track the status of individual results. Some results are finalized before the whole report is finalized.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | null;
    /**
     * A code that classifies the general type of observation being made.  This is used  for searching, sorting and display purposes.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Knowing what kind of observation is being made is essential to understanding the observation.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Observations have no value if you don't know who or what they're about.
     */
    subject?: fhir.Reference | undefined;
    /**
     * For some observations it may be important to know the link between an observation and a particular encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Knowing when an observation was deemed true is important to its relevance as well as determining trends.
     */
    effective?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * The date and time this observation was made available to providers, typically after the results have been reviewed and verified.
     */
    issued?: fhir.FhirInstant | undefined;
    /**
     * May give a degree of confidence in the observation and also indicates where follow-up questions should be directed.
     */
    performer: fhir.Reference[];
    /**
     * An observation exists to have a value, though it may not if it is in error, or it represents a group of observations.
     */
    value?: (fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * For many results it is necessary to handle exceptional values in measurements.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.
     */
    interpretation?: fhir.CodeableConcept | undefined;
    /**
     * Need to be able to provide free text additional information.
     */
    comments?: fhir.FhirString | undefined;
    /**
     * Knowing where the observation is made is important for tracking if multiple sites are possible.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * In some cases, method can impact results and is thus used for determining whether results can be compared or determining significance of results.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The specimen that was used when this observation was made.
     */
    specimen?: fhir.Reference | undefined;
    /**
     * The device used to generate the observation data.
     */
    device?: fhir.Reference | undefined;
    /**
     * Knowing what values are considered "normal" can help evaluate the significance of a particular result. Need to be able to provide multiple reference ranges for different contexts.
     */
    referenceRange: fhir.ObservationReferenceRange[];
    /**
     * Normally, an observation will have either a value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and a set of related observations or sometimes QuestionnaireResponse  from which the measure is derived.
     */
    related: fhir.ObservationRelated[];
    /**
     * Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable).   However, the reference range for the primary observation value is not inherited by the component values and is required when appropriate for each component observation.
     */
    component: fhir.ObservationComponent[];
    /**
     * Default constructor for Observation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Observation.d.ts.map