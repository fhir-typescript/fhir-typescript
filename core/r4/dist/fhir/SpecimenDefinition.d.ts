import * as fhir from '../fhir.js';
import { SpecimenContainedPreferenceCodingType } from '../fhirValueSets/SpecimenContainedPreferenceCodings.js';
import { SpecimenContainedPreferenceCodeType } from '../fhirValueSets/SpecimenContainedPreferenceCodes.js';
/**
 * Valid arguments for the SpecimenDefinitionTypeTestedContainerAdditive type.
 */
export interface SpecimenDefinitionTypeTestedContainerAdditiveArgs extends fhir.BackboneElementArgs {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export declare class SpecimenDefinitionTypeTestedContainerAdditive extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element SpecimenDefinition.typeTested.container.additive.additive[x]
     */
    protected static readonly _fts_additiveIsChoice: true;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedContainerAdditive - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenDefinitionTypeTestedContainerAdditiveArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the SpecimenDefinitionTypeTestedContainer type.
 */
export interface SpecimenDefinitionTypeTestedContainerArgs extends fhir.BackboneElementArgs {
    /**
     * The type of material of the container.
     */
    material?: fhir.CodeableConceptArgs | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhir.CodeableConceptArgs | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhir.QuantityArgs | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolume?: fhir.Quantity | fhir.FhirString | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: fhir.FhirString | string | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.SpecimenDefinitionTypeTestedContainerAdditiveArgs[] | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: fhir.FhirString | string | undefined;
}
/**
 * The specimen's container.
 */
export declare class SpecimenDefinitionTypeTestedContainer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of material of the container.
     */
    material?: fhir.CodeableConcept | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhir.CodeableConcept | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolume?: (fhir.Quantity | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SpecimenDefinition.typeTested.container.minimumVolume[x]
     */
    protected static readonly _fts_minimumVolumeIsChoice: true;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.SpecimenDefinitionTypeTestedContainerAdditive[];
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: fhir.FhirString | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedContainer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenDefinitionTypeTestedContainerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the SpecimenDefinitionTypeTestedHandling type.
 */
export interface SpecimenDefinitionTypeTestedHandlingArgs extends fhir.BackboneElementArgs {
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhir.CodeableConceptArgs | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhir.RangeArgs | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhir.DurationArgs | undefined;
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: fhir.FhirString | string | undefined;
}
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export declare class SpecimenDefinitionTypeTestedHandling extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhir.CodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhir.Range | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhir.Duration | undefined;
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: fhir.FhirString | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedHandling - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenDefinitionTypeTestedHandlingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the SpecimenDefinitionTypeTested type.
 */
export interface SpecimenDefinitionTypeTestedArgs extends fhir.BackboneElementArgs {
    /**
     * Primary of secondary specimen.
     */
    isDerived?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference: SpecimenContainedPreferenceCodeType | null;
    /**
     * The specimen's container.
     */
    container?: fhir.SpecimenDefinitionTypeTestedContainerArgs | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: fhir.FhirString | string | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhir.DurationArgs | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhir.SpecimenDefinitionTypeTestedHandlingArgs[] | undefined;
}
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export declare class SpecimenDefinitionTypeTested extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Primary of secondary specimen.
     */
    isDerived?: fhir.FhirBoolean | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference: SpecimenContainedPreferenceCodeType | null;
    /**
     * The specimen's container.
     */
    container?: fhir.SpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: fhir.FhirString | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhir.Duration | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhir.CodeableConcept[];
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhir.SpecimenDefinitionTypeTestedHandling[];
    /**
     * Default constructor for SpecimenDefinitionTypeTested - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenDefinitionTypeTestedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for preference (SpecimenDefinition.typeTested.preference)
     */
    static preferenceRequiredCoding(): SpecimenContainedPreferenceCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the SpecimenDefinition type.
 */
export interface SpecimenDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SpecimenDefinition" | undefined;
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhir.CodeableConceptArgs | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: fhir.FhirString | string | undefined;
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhir.SpecimenDefinitionTypeTestedArgs[] | undefined;
}
/**
 * A kind of specimen with associated set of requirements.
 */
export declare class SpecimenDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SpecimenDefinition";
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhir.CodeableConcept | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhir.CodeableConcept[];
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: fhir.FhirString | undefined;
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhir.CodeableConcept[];
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhir.SpecimenDefinitionTypeTested[];
    /**
     * Default constructor for SpecimenDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SpecimenDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=SpecimenDefinition.d.ts.map