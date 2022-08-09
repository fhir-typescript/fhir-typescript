// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: SpecimenDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContainerMaterialCodes,  ContainerMaterialCodeType } from '../fhirValueSets/ContainerMaterialCodes.js';
// @ts-ignore
import { ContainerMaterialVsValidation } from '../fhirValueSets/ContainerMaterialVsValidation.js';
// @ts-ignore
import { SpecimenContainerTypeCodes,  SpecimenContainerTypeCodeType } from '../fhirValueSets/SpecimenContainerTypeCodes.js';
// @ts-ignore
import { SpecimenContainerTypeVsValidation } from '../fhirValueSets/SpecimenContainerTypeVsValidation.js';
// @ts-ignore
import { ContainerCapCodes,  ContainerCapCodeType } from '../fhirValueSets/ContainerCapCodes.js';
// @ts-ignore
import { ContainerCapVsValidation } from '../fhirValueSets/ContainerCapVsValidation.js';
// @ts-ignore
import { HandlingConditionCodes,  HandlingConditionCodeType } from '../fhirValueSets/HandlingConditionCodes.js';
// @ts-ignore
import { HandlingConditionVsValidation } from '../fhirValueSets/HandlingConditionVsValidation.js';
// @ts-ignore
import { V20487Codes,  V20487CodeType } from '../fhirValueSets/V20487Codes.js';
// @ts-ignore
import { V20487VsValidation } from '../fhirValueSets/V20487VsValidation.js';
// @ts-ignore
import { SpecimenContainedPreferenceCodes,  SpecimenContainedPreferenceCodeType } from '../fhirValueSets/SpecimenContainedPreferenceCodes.js';
// @ts-ignore
import { SpecimenContainedPreferenceVsValidation } from '../fhirValueSets/SpecimenContainedPreferenceVsValidation.js';
// @ts-ignore
import { RejectionCriteriaCodes,  RejectionCriteriaCodeType } from '../fhirValueSets/RejectionCriteriaCodes.js';
// @ts-ignore
import { RejectionCriteriaVsValidation } from '../fhirValueSets/RejectionCriteriaVsValidation.js';
// @ts-ignore
import { PreparePatientPriorSpecimenCollectionCodes,  PreparePatientPriorSpecimenCollectionCodeType } from '../fhirValueSets/PreparePatientPriorSpecimenCollectionCodes.js';
// @ts-ignore
import { PreparePatientPriorSpecimenCollectionVsValidation } from '../fhirValueSets/PreparePatientPriorSpecimenCollectionVsValidation.js';
// @ts-ignore
import { SpecimenCollectionCodes,  SpecimenCollectionCodeType } from '../fhirValueSets/SpecimenCollectionCodes.js';
// @ts-ignore
import { SpecimenCollectionVsValidation } from '../fhirValueSets/SpecimenCollectionVsValidation.js';
/**
 * Valid arguments for the SpecimenDefinitionTypeTestedContainerAdditive type.
 */
export interface SpecimenDefinitionTypeTestedContainerAdditiveArgs extends fhir.BackboneElementArgs {
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additive?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export class SpecimenDefinitionTypeTestedContainerAdditive extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenDefinitionTypeTestedContainerAdditive';
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  public additive: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element SpecimenDefinition.typeTested.container.additive.additive[x]
   */
  protected static readonly _fts_additiveIsChoice:true = true;
  /**
   * Default constructor for SpecimenDefinitionTypeTestedContainerAdditive - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenDefinitionTypeTestedContainerAdditiveArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['additive']) { this.additive = source.additive; }
    else if (source['additiveCodeableConcept']) { this.additive = new fhir.CodeableConcept(source.additiveCodeableConcept, options); }
    else if (source['additiveReference']) { this.additive = new fhir.Reference(source.additiveReference, options); }
    else { this.additive = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SpecimenDefinition.typeTested.container.additive' }
    iss.push(...this.vRS('additive',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SpecimenDefinitionTypeTestedContainer type.
 */
export interface SpecimenDefinitionTypeTestedContainerArgs extends fhir.BackboneElementArgs {
  /**
   * The type of material of the container.
   */
  material?: fhir.CodeableConceptArgs|undefined;
  /**
   * The type of container used to contain this kind of specimen.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Color of container cap.
   */
  cap?: fhir.CodeableConceptArgs|undefined;
  /**
   * The textual description of the kind of container.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SpecimenDefinition.typeTested.container.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The capacity (volume or other measure) of this kind of container.
   */
  capacity?: fhir.QuantityArgs|undefined;
  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolume?: fhir.Quantity|fhir.FhirString|undefined;
  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeQuantity?: fhir.QuantityArgs|undefined;
  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeString?: fhir.FhirString|string|undefined;
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additive?: fhir.SpecimenDefinitionTypeTestedContainerAdditiveArgs[]|undefined;
  /**
   * Special processing that should be applied to the container for this kind of specimen.
   */
  preparation?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SpecimenDefinition.typeTested.container.preparation
   */
  _preparation?:fhir.FhirElementArgs;
}

/**
 * The specimen's container.
 */
export class SpecimenDefinitionTypeTestedContainer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenDefinitionTypeTestedContainer';
  /**
   * The type of material of the container.
   */
  public material?: fhir.CodeableConcept|undefined;
  /**
   * The type of container used to contain this kind of specimen.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Color of container cap.
   */
  public cap?: fhir.CodeableConcept|undefined;
  /**
   * The textual description of the kind of container.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The capacity (volume or other measure) of this kind of container.
   */
  public capacity?: fhir.Quantity|undefined;
  /**
   * The minimum volume to be conditioned in the container.
   */
  public minimumVolume?: (fhir.Quantity|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SpecimenDefinition.typeTested.container.minimumVolume[x]
   */
  protected static readonly _fts_minimumVolumeIsChoice:true = true;
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  public additive: fhir.SpecimenDefinitionTypeTestedContainerAdditive[];
  /**
   * Special processing that should be applied to the container for this kind of specimen.
   */
  public preparation?: fhir.FhirString|undefined;
  /**
   * Default constructor for SpecimenDefinitionTypeTestedContainer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenDefinitionTypeTestedContainerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['material']) { this.material = new fhir.CodeableConcept(source.material, options); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['cap']) { this.cap = new fhir.CodeableConcept(source.cap, options); }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['capacity']) { this.capacity = new fhir.Quantity(source.capacity, options); }
    if (source['minimumVolume']) { this.minimumVolume = source.minimumVolume; }
    else if (source['minimumVolumeQuantity']) { this.minimumVolume = new fhir.Quantity(source.minimumVolumeQuantity, options); }
    else if (source['minimumVolumeString'] !== undefined) { this.minimumVolume = new fhir.FhirString({value: source.minimumVolumeString}, options); }
    if (source['additive']) { this.additive = source.additive.map((x) => new fhir.SpecimenDefinitionTypeTestedContainerAdditive(x, options)); }
    else { this.additive = []; }
    if (source['preparation'] !== undefined) { this.preparation = new fhir.FhirString({value: source.preparation}, options); }
    if (source['_preparation']) {
      if (this.preparation) { this.preparation.addExtendedProperties(source._preparation!); }
      else { this.preparation = new fhir.FhirString(source._preparation as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SpecimenDefinition.typeTested.container' }
    iss.push(...this.vOS('material',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('cap',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('capacity',exp));
    iss.push(...this.vOS('minimumVolume',exp));
    iss.push(...this.vOA('additive',exp));
    iss.push(...this.vOS('preparation',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SpecimenDefinitionTypeTestedHandling type.
 */
export interface SpecimenDefinitionTypeTestedHandlingArgs extends fhir.BackboneElementArgs {
  /**
   * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
   */
  temperatureQualifier?: fhir.CodeableConceptArgs|undefined;
  /**
   * The temperature interval for this set of handling instructions.
   */
  temperatureRange?: fhir.RangeArgs|undefined;
  /**
   * The maximum time interval of preservation of the specimen with these conditions.
   */
  maxDuration?: fhir.DurationArgs|undefined;
  /**
   * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
   */
  instruction?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SpecimenDefinition.typeTested.handling.instruction
   */
  _instruction?:fhir.FhirElementArgs;
}

/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export class SpecimenDefinitionTypeTestedHandling extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenDefinitionTypeTestedHandling';
  /**
   * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
   */
  public temperatureQualifier?: fhir.CodeableConcept|undefined;
  /**
   * The temperature interval for this set of handling instructions.
   */
  public temperatureRange?: fhir.Range|undefined;
  /**
   * The maximum time interval of preservation of the specimen with these conditions.
   */
  public maxDuration?: fhir.Duration|undefined;
  /**
   * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
   */
  public instruction?: fhir.FhirString|undefined;
  /**
   * Default constructor for SpecimenDefinitionTypeTestedHandling - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenDefinitionTypeTestedHandlingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['temperatureQualifier']) { this.temperatureQualifier = new fhir.CodeableConcept(source.temperatureQualifier, options); }
    if (source['temperatureRange']) { this.temperatureRange = new fhir.Range(source.temperatureRange, options); }
    if (source['maxDuration']) { this.maxDuration = new fhir.Duration(source.maxDuration, options); }
    if (source['instruction'] !== undefined) { this.instruction = new fhir.FhirString({value: source.instruction}, options); }
    if (source['_instruction']) {
      if (this.instruction) { this.instruction.addExtendedProperties(source._instruction!); }
      else { this.instruction = new fhir.FhirString(source._instruction as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SpecimenDefinition.typeTested.handling' }
    iss.push(...this.vOS('temperatureQualifier',exp));
    iss.push(...this.vOS('temperatureRange',exp));
    iss.push(...this.vOS('maxDuration',exp));
    iss.push(...this.vOS('instruction',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SpecimenDefinitionTypeTested type.
 */
export interface SpecimenDefinitionTypeTestedArgs extends fhir.BackboneElementArgs {
  /**
   * Primary of secondary specimen.
   */
  isDerived?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: SpecimenDefinition.typeTested.isDerived
   */
  _isDerived?:fhir.FhirElementArgs;
  /**
   * The kind of specimen conditioned for testing expected by lab.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The preference for this type of conditioned specimen.
   */
  preference: fhir.FhirCode<SpecimenContainedPreferenceCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SpecimenDefinition.typeTested.preference
   */
  _preference?:fhir.FhirElementArgs;
  /**
   * The specimen's container.
   */
  container?: fhir.SpecimenDefinitionTypeTestedContainerArgs|undefined;
  /**
   * Requirements for delivery and special handling of this kind of conditioned specimen.
   */
  requirement?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SpecimenDefinition.typeTested.requirement
   */
  _requirement?:fhir.FhirElementArgs;
  /**
   * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
   */
  retentionTime?: fhir.DurationArgs|undefined;
  /**
   * Criterion for rejection of the specimen in its container by the laboratory.
   */
  rejectionCriterion?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
   */
  handling?: fhir.SpecimenDefinitionTypeTestedHandlingArgs[]|undefined;
}

/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export class SpecimenDefinitionTypeTested extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenDefinitionTypeTested';
  /**
   * Primary of secondary specimen.
   */
  public isDerived?: fhir.FhirBoolean|undefined;
  /**
   * The kind of specimen conditioned for testing expected by lab.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The preference for this type of conditioned specimen.
   */
  public preference: fhir.FhirCode<SpecimenContainedPreferenceCodeType>|null;
  /**
   * The specimen's container.
   */
  public container?: fhir.SpecimenDefinitionTypeTestedContainer|undefined;
  /**
   * Requirements for delivery and special handling of this kind of conditioned specimen.
   */
  public requirement?: fhir.FhirString|undefined;
  /**
   * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
   */
  public retentionTime?: fhir.Duration|undefined;
  /**
   * Criterion for rejection of the specimen in its container by the laboratory.
   */
  public rejectionCriterion: fhir.CodeableConcept[];
  /**
   * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
   */
  public handling: fhir.SpecimenDefinitionTypeTestedHandling[];
  /**
   * Default constructor for SpecimenDefinitionTypeTested - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenDefinitionTypeTestedArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['isDerived'] !== undefined) { this.isDerived = new fhir.FhirBoolean({value: source.isDerived}, options); }
    if (source['_isDerived']) {
      if (this.isDerived) { this.isDerived.addExtendedProperties(source._isDerived!); }
      else { this.isDerived = new fhir.FhirBoolean(source._isDerived as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    if (source['preference'] !== undefined) { this.preference = new fhir.FhirCode<SpecimenContainedPreferenceCodeType>({value: source.preference}, options); }
    else { this.preference = null; }
    if (source['_preference']) {
      if (this.preference) { this.preference.addExtendedProperties(source._preference!); }
      else { this.preference = new fhir.FhirCode<SpecimenContainedPreferenceCodeType>(source._preference as Partial<fhir.FhirCode>, options); }
    }
    if (source['container']) { this.container = new fhir.SpecimenDefinitionTypeTestedContainer(source.container, options); }
    if (source['requirement'] !== undefined) { this.requirement = new fhir.FhirString({value: source.requirement}, options); }
    if (source['_requirement']) {
      if (this.requirement) { this.requirement.addExtendedProperties(source._requirement!); }
      else { this.requirement = new fhir.FhirString(source._requirement as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['retentionTime']) { this.retentionTime = new fhir.Duration(source.retentionTime, options); }
    if (source['rejectionCriterion']) { this.rejectionCriterion = source.rejectionCriterion.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.rejectionCriterion = []; }
    if (source['handling']) { this.handling = source.handling.map((x) => new fhir.SpecimenDefinitionTypeTestedHandling(x, options)); }
    else { this.handling = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SpecimenDefinition.typeTested' }
    iss.push(...this.vOS('isDerived',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vRSV('preference',exp,'SpecimenContainedPreference',SpecimenContainedPreferenceVsValidation,'r'));
    iss.push(...this.vOS('container',exp));
    iss.push(...this.vOS('requirement',exp));
    iss.push(...this.vOS('retentionTime',exp));
    iss.push(...this.vOA('rejectionCriterion',exp));
    iss.push(...this.vOA('handling',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SpecimenDefinition type.
 */
export interface SpecimenDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SpecimenDefinition"|undefined;
  /**
   * A business identifier associated with the kind of specimen.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * The kind of material to be collected.
   */
  typeCollected?: fhir.CodeableConceptArgs|undefined;
  /**
   * Preparation of the patient for specimen collection.
   */
  patientPreparation?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Time aspect of specimen collection (duration or offset).
   */
  timeAspect?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SpecimenDefinition.timeAspect
   */
  _timeAspect?:fhir.FhirElementArgs;
  /**
   * The action to be performed for collecting the specimen.
   */
  collection?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Specimen conditioned in a container as expected by the testing laboratory.
   */
  typeTested?: fhir.SpecimenDefinitionTypeTestedArgs[]|undefined;
}

/**
 * A kind of specimen with associated set of requirements.
 */
export class SpecimenDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SpecimenDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "SpecimenDefinition";
  /**
   * A business identifier associated with the kind of specimen.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * The kind of material to be collected.
   */
  public typeCollected?: fhir.CodeableConcept|undefined;
  /**
   * Preparation of the patient for specimen collection.
   */
  public patientPreparation: fhir.CodeableConcept[];
  /**
   * Time aspect of specimen collection (duration or offset).
   */
  public timeAspect?: fhir.FhirString|undefined;
  /**
   * The action to be performed for collecting the specimen.
   */
  public collection: fhir.CodeableConcept[];
  /**
   * Specimen conditioned in a container as expected by the testing laboratory.
   */
  public typeTested: fhir.SpecimenDefinitionTypeTested[];
  /**
   * Default constructor for SpecimenDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SpecimenDefinition';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier, options); }
    if (source['typeCollected']) { this.typeCollected = new fhir.CodeableConcept(source.typeCollected, options); }
    if (source['patientPreparation']) { this.patientPreparation = source.patientPreparation.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.patientPreparation = []; }
    if (source['timeAspect'] !== undefined) { this.timeAspect = new fhir.FhirString({value: source.timeAspect}, options); }
    if (source['_timeAspect']) {
      if (this.timeAspect) { this.timeAspect.addExtendedProperties(source._timeAspect!); }
      else { this.timeAspect = new fhir.FhirString(source._timeAspect as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['collection']) { this.collection = source.collection.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.collection = []; }
    if (source['typeTested']) { this.typeTested = source.typeTested.map((x) => new fhir.SpecimenDefinitionTypeTested(x, options)); }
    else { this.typeTested = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SpecimenDefinition' }
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('typeCollected',exp));
    iss.push(...this.vOA('patientPreparation',exp));
    iss.push(...this.vOS('timeAspect',exp));
    iss.push(...this.vOA('collection',exp));
    iss.push(...this.vOA('typeTested',exp));
    return iss;
  }
}
