import * as fhir from '../fhirJson.js';
/**
 * Moiety, for structural modifications.
 */
export interface SubstanceDefinitionMoiety extends fhir.BackboneElement {
    /**
     * Role that the moiety is playing.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Identifier by which this moiety substance is known.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Textual name for this moiety substance.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.moiety.name
     */
    _name?: fhir.FhirElement;
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Molecular formula for this moiety of this substance, typically using the Hill system.
     */
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.moiety.molecularFormula
     */
    _molecularFormula?: fhir.FhirElement;
    /**
     * Quantitative value for this moiety.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * Quantitative value for this moiety.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.moiety.amount[x]
     */
    _amountString?: fhir.FhirElement;
    /**
     * The measurement type of the quantitative value. In capturing the actual relative amounts of substances or molecular fragments it may be necessary to indicate whether the amount refers to, for example, a mole ratio or weight ratio.
     */
    measurementType?: fhir.CodeableConcept | undefined;
}
/**
 * General specifications for this substance.
 */
export interface SubstanceDefinitionProperty extends fhir.BackboneElement {
    /**
     * A code expressing the type of property.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A value for the property.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A value for the property.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * A value for the property.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.property.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * A value for the property.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.property.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * A value for the property.
     */
    valueAttachment?: fhir.Attachment | undefined;
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export interface SubstanceDefinitionMolecularWeight extends fhir.BackboneElement {
    /**
     * The method by which the molecular weight was determined.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Type of molecular weight such as exact, average (also known as. number average), weight average.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
     */
    amount: fhir.Quantity | null;
}
/**
 * A depiction of the structure or characterization of the substance.
 */
export interface SubstanceDefinitionStructureRepresentation extends fhir.BackboneElement {
    /**
     * The kind of structural representation (e.g. full, partial).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The structural representation or characterization as a text string in a standard format.
     */
    representation?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.structure.representation.representation
     */
    _representation?: fhir.FhirElement;
    /**
     * The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF. The logical content type rather than the physical file format of a document.
     */
    format?: fhir.CodeableConcept | undefined;
    /**
     * An attached file with the structural representation or characterization e.g. a molecular structure graphic of the substance, a JCAMP or AnIML file.
     */
    document?: fhir.Reference | undefined;
}
/**
 * Structural information.
 */
export interface SubstanceDefinitionStructure extends fhir.BackboneElement {
    /**
     * Stereochemistry type.
     */
    stereochemistry?: fhir.CodeableConcept | undefined;
    /**
     * Optical activity type.
     */
    opticalActivity?: fhir.CodeableConcept | undefined;
    /**
     * Molecular formula of this substance, typically using the Hill system.
     */
    molecularFormula?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.structure.molecularFormula
     */
    _molecularFormula?: fhir.FhirElement;
    /**
     * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
     */
    molecularFormulaByMoiety?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.structure.molecularFormulaByMoiety
     */
    _molecularFormulaByMoiety?: fhir.FhirElement;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: fhir.SubstanceDefinitionMolecularWeight | undefined;
    /**
     * The method used to elucidate the structure or characterization of the drug substance. Examples: X-ray, HPLC, NMR, Peptide mapping, Ligand binding assay.
     */
    technique?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The source of information about the structure.
     */
    sourceDocument?: (fhir.Reference | null)[] | undefined;
    /**
     * A depiction of the structure or characterization of the substance.
     */
    representation?: (fhir.SubstanceDefinitionStructureRepresentation | null)[] | undefined;
}
/**
 * Codes associated with the substance.
 */
export interface SubstanceDefinitionCode extends fhir.BackboneElement {
    /**
     * The specific code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Status of the code assignment, for example 'provisional', 'approved'.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the code status was changed as part of the terminology maintenance.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.code.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * Any comment can be provided in this field, if necessary.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Supporting literature.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * Details of the official nature of this name.
 */
export interface SubstanceDefinitionNameOfficial extends fhir.BackboneElement {
    /**
     * Which authority uses this official name.
     */
    authority?: fhir.CodeableConcept | undefined;
    /**
     * The status of the official name, for example 'draft', 'active', 'retired'.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Date of the official name change.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.name.official.date
     */
    _date?: fhir.FhirElement;
}
/**
 * Names applicable to this substance.
 */
export interface SubstanceDefinitionName extends fhir.BackboneElement {
    /**
     * The actual name.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: SubstanceDefinition.name.name
     */
    _name?: fhir.FhirElement;
    /**
     * Name type, for example 'systematic',  'scientific, 'brand'.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The status of the name, for example 'current', 'proposed'.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * If this is the preferred name for this substance.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.name.preferred
     */
    _preferred?: fhir.FhirElement;
    /**
     * Human language that the name is written in.
     */
    language?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
     */
    domain?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The jurisdiction where this name applies.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A synonym of this particular name, by which the substance is also known.
     */
    synonym?: (fhir.SubstanceDefinitionName | null)[] | undefined;
    /**
     * A translation for this name into another human language.
     */
    translation?: (fhir.SubstanceDefinitionName | null)[] | undefined;
    /**
     * Details of the official nature of this name.
     */
    official?: (fhir.SubstanceDefinitionNameOfficial | null)[] | undefined;
    /**
     * Supporting literature.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export interface SubstanceDefinitionRelationship extends fhir.BackboneElement {
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceDefinitionReference?: fhir.Reference | undefined;
    /**
     * A pointer to another substance, as a resource or just a representational code.
     */
    substanceDefinitionCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * For example "salt to parent", "active moiety", "starting material", "polymorph", "impurity of".
     */
    type: fhir.CodeableConcept | null;
    /**
     * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
     */
    isDefining?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.relationship.isDefining
     */
    _isDefining?: fhir.FhirElement;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountQuantity?: fhir.Quantity | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountRatio?: fhir.Ratio | undefined;
    /**
     * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
     */
    amountString?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.relationship.amount[x]
     */
    _amountString?: fhir.FhirElement;
    /**
     * For use when the numeric has an uncertain range.
     */
    ratioHighLimitAmount?: fhir.Ratio | undefined;
    /**
     * An operator for the amount, for example "average", "approximately", "less than".
     */
    comparator?: fhir.CodeableConcept | undefined;
    /**
     * Supporting literature.
     */
    source?: (fhir.Reference | null)[] | undefined;
}
/**
 * Material or taxonomic/anatomical source for the substance.
 */
export interface SubstanceDefinitionSourceMaterial extends fhir.BackboneElement {
    /**
     * A classification that provides the origin of the raw material. Example: cat hair would be an Animal source type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The genus of an organism, typically referring to the Latin epithet of the genus element of the plant/animal scientific name.
     */
    genus?: fhir.CodeableConcept | undefined;
    /**
     * The species of an organism, typically referring to the Latin epithet of the species of the plant/animal.
     */
    species?: fhir.CodeableConcept | undefined;
    /**
     * An anatomical origin of the source material within an organism.
     */
    part?: fhir.CodeableConcept | undefined;
    /**
     * The country or countries where the material is harvested.
     */
    countryOfOrigin?: (('004' | '008' | '010' | '012' | '016' | '020' | '024' | '028' | '031' | '032' | '036' | '040' | '044' | '048' | '050' | '051' | '052' | '056' | '060' | '064' | '068' | '070' | '072' | '074' | '076' | '084' | '086' | '090' | '092' | '096' | '100' | '104' | '108' | '112' | '116' | '120' | '124' | '132' | '136' | '140' | '144' | '148' | '152' | '156' | '158' | '162' | '166' | '170' | '174' | '175' | '178' | '180' | '184' | '188' | '191' | '192' | '196' | '203' | '204' | '208' | '212' | '214' | '218' | '222' | '226' | '231' | '232' | '233' | '234' | '238' | '239' | '242' | '246' | '248' | '250' | '254' | '258' | '260' | '262' | '266' | '268' | '270' | '275' | '276' | '288' | '292' | '296' | '300' | '304' | '308' | '312' | '316' | '320' | '324' | '328' | '332' | '334' | '336' | '340' | '344' | '348' | '352' | '356' | '360' | '364' | '368' | '372' | '376' | '380' | '384' | '388' | '392' | '398' | '400' | '404' | '408' | '410' | '414' | '417' | '418' | '422' | '426' | '428' | '430' | '434' | '438' | '440' | '442' | '446' | '450' | '454' | '458' | '462' | '466' | '470' | '474' | '478' | '480' | '484' | '492' | '496' | '498' | '499' | '500' | '504' | '508' | '512' | '516' | '520' | '524' | '528' | '531' | '533' | '534' | '535' | '540' | '548' | '554' | '558' | '562' | '566' | '570' | '574' | '578' | '580' | '581' | '583' | '584' | '585' | '586' | '591' | '598' | '600' | '604' | '608' | '612' | '616' | '620' | '624' | '626' | '630' | '634' | '638' | '642' | '643' | '646' | '652' | '654' | '659' | '660' | '662' | '663' | '666' | '670' | '674' | '678' | '682' | '686' | '688' | '690' | '694' | '702' | '703' | '704' | '705' | '706' | '710' | '716' | '724' | '728' | '729' | '732' | '740' | '744' | '748' | '752' | '756' | '760' | '762' | '764' | '768' | '772' | '776' | '780' | '784' | '788' | '792' | '795' | '796' | '798' | '800' | '804' | '807' | '818' | '826' | '831' | '832' | '833' | '834' | '840' | '850' | '854' | '858' | '860' | '862' | '876' | '882' | '887' | '894' | 'ABW' | 'AD' | 'AE' | 'AF' | 'AFG' | 'AG' | 'AGO' | 'AI' | 'AIA' | 'AL' | 'ALA' | 'ALB' | 'AM' | 'AND' | 'AO' | 'AQ' | 'AR' | 'ARE' | 'ARG' | 'ARM' | 'AS' | 'ASM' | 'AT' | 'ATA' | 'ATF' | 'ATG' | 'AU' | 'AUS' | 'AUT' | 'AW' | 'AX' | 'AZ' | 'AZE' | 'BA' | 'BB' | 'BD' | 'BDI' | 'BE' | 'BEL' | 'BEN' | 'BES' | 'BF' | 'BFA' | 'BG' | 'BGD' | 'BGR' | 'BH' | 'BHR' | 'BHS' | 'BI' | 'BIH' | 'BJ' | 'BL' | 'BLM' | 'BLR' | 'BLZ' | 'BM' | 'BMU' | 'BN' | 'BO' | 'BOL' | 'BQ' | 'BR' | 'BRA' | 'BRB' | 'BRN' | 'BS' | 'BT' | 'BTN' | 'BV' | 'BVT' | 'BW' | 'BWA' | 'BY' | 'BZ' | 'CA' | 'CAF' | 'CAN' | 'CC' | 'CCK' | 'CD' | 'CF' | 'CG' | 'CH' | 'CHE' | 'CHL' | 'CHN' | 'CI' | 'CIV' | 'CK' | 'CL' | 'CM' | 'CMR' | 'CN' | 'CO' | 'COD' | 'COG' | 'COK' | 'COL' | 'COM' | 'CPV' | 'CR' | 'CRI' | 'CU' | 'CUB' | 'CUW' | 'CV' | 'CW' | 'CX' | 'CXR' | 'CY' | 'CYM' | 'CYP' | 'CZ' | 'CZE' | 'DE' | 'DEU' | 'DJ' | 'DJI' | 'DK' | 'DM' | 'DMA' | 'DNK' | 'DO' | 'DOM' | 'DZ' | 'DZA' | 'EC' | 'ECU' | 'EE' | 'EG' | 'EGY' | 'EH' | 'ER' | 'ERI' | 'ES' | 'ESH' | 'ESP' | 'EST' | 'ET' | 'ETH' | 'FI' | 'FIN' | 'FJ' | 'FJI' | 'FK' | 'FLK' | 'FM' | 'FO' | 'FR' | 'FRA' | 'FRO' | 'FSM' | 'GA' | 'GAB' | 'GB' | 'GBR' | 'GD' | 'GE' | 'GEO' | 'GF' | 'GG' | 'GGY' | 'GH' | 'GHA' | 'GI' | 'GIB' | 'GIN' | 'GL' | 'GLP' | 'GM' | 'GMB' | 'GN' | 'GNB' | 'GNQ' | 'GP' | 'GQ' | 'GR' | 'GRC' | 'GRD' | 'GRL' | 'GS' | 'GT' | 'GTM' | 'GU' | 'GUF' | 'GUM' | 'GUY' | 'GW' | 'GY' | 'HK' | 'HKG' | 'HM' | 'HMD' | 'HN' | 'HND' | 'HR' | 'HRV' | 'HT' | 'HTI' | 'HU' | 'HUN' | 'ID' | 'IDN' | 'IE' | 'IL' | 'IM' | 'IMN' | 'IN' | 'IND' | 'IO' | 'IOT' | 'IQ' | 'IR' | 'IRL' | 'IRN' | 'IRQ' | 'IS' | 'ISL' | 'ISR' | 'IT' | 'ITA' | 'JAM' | 'JE' | 'JEY' | 'JM' | 'JO' | 'JOR' | 'JP' | 'JPN' | 'KAZ' | 'KE' | 'KEN' | 'KG' | 'KGZ' | 'KH' | 'KHM' | 'KI' | 'KIR' | 'KM' | 'KN' | 'KNA' | 'KOR' | 'KP' | 'KR' | 'KW' | 'KWT' | 'KY' | 'KZ' | 'LA' | 'LAO' | 'LB' | 'LBN' | 'LBR' | 'LBY' | 'LC' | 'LCA' | 'LI' | 'LIE' | 'LK' | 'LKA' | 'LR' | 'LS' | 'LSO' | 'LT' | 'LTU' | 'LU' | 'LUX' | 'LV' | 'LVA' | 'LY' | 'MA' | 'MAC' | 'MAF' | 'MAR' | 'MC' | 'MCO' | 'MD' | 'MDA' | 'MDG' | 'MDV' | 'ME' | 'MEX' | 'MF' | 'MG' | 'MH' | 'MHL' | 'MK' | 'MKD' | 'ML' | 'MLI' | 'MLT' | 'MM' | 'MMR' | 'MN' | 'MNE' | 'MNG' | 'MNP' | 'MO' | 'MOZ' | 'MP' | 'MQ' | 'MR' | 'MRT' | 'MS' | 'MSR' | 'MT' | 'MTQ' | 'MU' | 'MUS' | 'MV' | 'MW' | 'MWI' | 'MX' | 'MY' | 'MYS' | 'MYT' | 'MZ' | 'NA' | 'NAM' | 'NC' | 'NCL' | 'NE' | 'NER' | 'NF' | 'NFK' | 'NG' | 'NGA' | 'NI' | 'NIC' | 'NIU' | 'NL' | 'NLD' | 'NO' | 'NOR' | 'NP' | 'NPL' | 'NR' | 'NRU' | 'NU' | 'NZ' | 'NZL' | 'OM' | 'OMN' | 'PA' | 'PAK' | 'PAN' | 'PCN' | 'PE' | 'PER' | 'PF' | 'PG' | 'PH' | 'PHL' | 'PK' | 'PL' | 'PLW' | 'PM' | 'PN' | 'PNG' | 'POL' | 'PR' | 'PRI' | 'PRK' | 'PRT' | 'PRY' | 'PS' | 'PSE' | 'PT' | 'PW' | 'PY' | 'PYF' | 'QA' | 'QAT' | 'RE' | 'REU' | 'RO' | 'ROU' | 'RS' | 'RU' | 'RUS' | 'RW' | 'RWA' | 'SA' | 'SAU' | 'SB' | 'SC' | 'SD' | 'SDN' | 'SE' | 'SEN' | 'SG' | 'SGP' | 'SGS' | 'SH' | 'SHN' | 'SI' | 'SJ' | 'SJM' | 'SK' | 'SL' | 'SLB' | 'SLE' | 'SLV' | 'SM' | 'SMR' | 'SN' | 'SO' | 'SOM' | 'SPM' | 'SR' | 'SRB' | 'SS' | 'SSD' | 'ST' | 'STP' | 'SUR' | 'SV' | 'SVK' | 'SVN' | 'SWE' | 'SWZ' | 'SX' | 'SXM' | 'SY' | 'SYC' | 'SYR' | 'SZ' | 'TC' | 'TCA' | 'TCD' | 'TD' | 'TF' | 'TG' | 'TGO' | 'TH' | 'THA' | 'TJ' | 'TJK' | 'TK' | 'TKL' | 'TKM' | 'TL' | 'TLS' | 'TM' | 'TN' | 'TO' | 'TON' | 'TR' | 'TT' | 'TTO' | 'TUN' | 'TUR' | 'TUV' | 'TV' | 'TW' | 'TWN' | 'TZ' | 'TZA' | 'UA' | 'UG' | 'UGA' | 'UKR' | 'UM' | 'UMI' | 'URY' | 'US' | 'USA' | 'UY' | 'UZ' | 'UZB' | 'VA' | 'VAT' | 'VC' | 'VCT' | 'VE' | 'VEN' | 'VG' | 'VGB' | 'VI' | 'VIR' | 'VN' | 'VNM' | 'VU' | 'VUT' | 'WF' | 'WLF' | 'WS' | 'WSM' | 'YE' | 'YEM' | 'YT' | 'ZA' | 'ZAF' | 'ZM' | 'ZMB' | 'ZW' | 'ZWE') | null)[] | undefined;
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export interface SubstanceDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceDefinition" | null;
    /**
     * Identifier by which this substance is known.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A business level version identifier of the substance.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * Status of substance within the catalogue e.g. active, retired.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * A high level categorization, e.g. polymer or nucleic acid, or food, chemical, biological, or a lower level such as the general types of polymer (linear or branch chain) or type of impurity (process related or contaminant).
     */
    classification?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * If the substance applies to human or veterinary use.
     */
    domain?: fhir.CodeableConcept | undefined;
    /**
     * The quality standard, established benchmark, to which substance complies (e.g. USP/NF, Ph. Eur, JP, BP, Company Standard).
     */
    grade?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Textual description of the substance.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubstanceDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * Supporting literature.
     */
    informationSource?: (fhir.Reference | null)[] | undefined;
    /**
     * Textual comment about the substance's catalogue or registry record.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * The entity that creates, makes, produces or fabricates the substance. This is a set of potential manufacturers but is not necessarily comprehensive.
     */
    manufacturer?: (fhir.Reference | null)[] | undefined;
    /**
     * An entity that is the source for the substance. It may be different from the manufacturer. Supplier is synonymous to a distributor.
     */
    supplier?: (fhir.Reference | null)[] | undefined;
    /**
     * Moiety, for structural modifications.
     */
    moiety?: (fhir.SubstanceDefinitionMoiety | null)[] | undefined;
    /**
     * General specifications for this substance.
     */
    property?: (fhir.SubstanceDefinitionProperty | null)[] | undefined;
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids).
     */
    molecularWeight?: (fhir.SubstanceDefinitionMolecularWeight | null)[] | undefined;
    /**
     * Structural information.
     */
    structure?: fhir.SubstanceDefinitionStructure | undefined;
    /**
     * Codes associated with the substance.
     */
    code?: (fhir.SubstanceDefinitionCode | null)[] | undefined;
    /**
     * Names applicable to this substance.
     */
    name?: (fhir.SubstanceDefinitionName | null)[] | undefined;
    /**
     * A link between this substance and another, with details of the relationship.
     */
    relationship?: (fhir.SubstanceDefinitionRelationship | null)[] | undefined;
    /**
     * Material or taxonomic/anatomical source for the substance.
     */
    sourceMaterial?: fhir.SubstanceDefinitionSourceMaterial | undefined;
}
//# sourceMappingURL=SubstanceDefinition.d.ts.map