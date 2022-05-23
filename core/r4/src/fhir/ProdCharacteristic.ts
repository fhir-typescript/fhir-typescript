// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ProdCharacteristic

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the ProdCharacteristic type.
 */
export interface ProdCharacteristicArgs extends fhir.BackboneElementArgs {
  /**
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  height?: fhir.QuantityArgs|undefined;
  /**
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  width?: fhir.QuantityArgs|undefined;
  /**
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  depth?: fhir.QuantityArgs|undefined;
  /**
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  weight?: fhir.QuantityArgs|undefined;
  /**
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  nominalVolume?: fhir.QuantityArgs|undefined;
  /**
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  externalDiameter?: fhir.QuantityArgs|undefined;
  /**
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  shape?: fhir.FhirString|string|undefined;
  /**
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  color?: fhir.FhirString[]|string[]|undefined;
  /**
   * Where applicable, the imprint can be specified as text.
   */
  imprint?: fhir.FhirString[]|string[]|undefined;
  /**
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
   */
  image?: fhir.AttachmentArgs[]|undefined;
  /**
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  scoring?: fhir.CodeableConceptArgs|undefined;
}

/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class ProdCharacteristic extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ProdCharacteristic';
  /**
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public height?: fhir.Quantity|undefined;
  /**
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public width?: fhir.Quantity|undefined;
  /**
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public depth?: fhir.Quantity|undefined;
  /**
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public weight?: fhir.Quantity|undefined;
  /**
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public nominalVolume?: fhir.Quantity|undefined;
  /**
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
   */
  public externalDiameter?: fhir.Quantity|undefined;
  /**
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  public shape?: fhir.FhirString|undefined;
  /**
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  public color: fhir.FhirString[];
  /**
   * Where applicable, the imprint can be specified as text.
   */
  public imprint: fhir.FhirString[];
  /**
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
   */
  public image: fhir.Attachment[];
  /**
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
   */
  public scoring?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ProdCharacteristic - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ProdCharacteristicArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['height']) { this.height = new fhir.Quantity(source.height); }
    if (source['width']) { this.width = new fhir.Quantity(source.width); }
    if (source['depth']) { this.depth = new fhir.Quantity(source.depth); }
    if (source['weight']) { this.weight = new fhir.Quantity(source.weight); }
    if (source['nominalVolume']) { this.nominalVolume = new fhir.Quantity(source.nominalVolume); }
    if (source['externalDiameter']) { this.externalDiameter = new fhir.Quantity(source.externalDiameter); }
    if (source['shape']) { this.shape = new fhir.FhirString({value: source.shape}); }
    if (source['color']) { this.color = source.color.map((x) => new fhir.FhirString({value: x})); }
    else { this.color = []; }
    if (source['imprint']) { this.imprint = source.imprint.map((x) => new fhir.FhirString({value: x})); }
    else { this.imprint = []; }
    if (source['image']) { this.image = source.image.map((x) => new fhir.Attachment(x)); }
    else { this.image = []; }
    if (source['scoring']) { this.scoring = new fhir.CodeableConcept(source.scoring); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["height"]) { issues.push(...this.height.doModelValidation()); }
    if (this["width"]) { issues.push(...this.width.doModelValidation()); }
    if (this["depth"]) { issues.push(...this.depth.doModelValidation()); }
    if (this["weight"]) { issues.push(...this.weight.doModelValidation()); }
    if (this["nominalVolume"]) { issues.push(...this.nominalVolume.doModelValidation()); }
    if (this["externalDiameter"]) { issues.push(...this.externalDiameter.doModelValidation()); }
    if (this["shape"]) { issues.push(...this.shape.doModelValidation()); }
    if (this["color"]) { this.color.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["imprint"]) { this.imprint.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["image"]) { this.image.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["scoring"]) { issues.push(...this.scoring.doModelValidation()); }
    return issues;
  }
}
