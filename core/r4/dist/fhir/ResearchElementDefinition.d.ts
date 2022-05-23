import * as fhir from '../fhir.js';
import { GroupMeasureCodeType } from '../fhirValueSets/GroupMeasureCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { ResearchElementTypeCodeType } from '../fhirValueSets/ResearchElementTypeCodes.js';
import { VariableTypeCodeType } from '../fhirValueSets/VariableTypeCodes.js';
/**
 * Valid arguments for the ResearchElementDefinitionCharacteristic type.
 */
export interface ResearchElementDefinitionCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definition?: fhir.CodeableConcept | fhir.FhirCanonical | fhir.Expression | fhir.DataRequirement | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionExpression?: fhir.ExpressionArgs | undefined;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definitionDataRequirement?: fhir.DataRequirementArgs | undefined;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConceptArgs | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    studyEffectiveDescription?: fhir.FhirString | string | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffective?: fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveDuration?: fhir.DurationArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffectiveTiming?: fhir.TimingArgs | undefined;
    /**
     * Indicates duration from the study initiation.
     */
    studyEffectiveTimeFromStart?: fhir.DurationArgs | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    studyEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | string | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    participantEffectiveDescription?: fhir.FhirString | string | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffective?: fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveDuration?: fhir.DurationArgs | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffectiveTiming?: fhir.TimingArgs | undefined;
    /**
     * Indicates duration from the participant's study entry.
     */
    participantEffectiveTimeFromStart?: fhir.DurationArgs | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    participantEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | string | undefined;
}
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export declare class ResearchElementDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
     */
    definition: (fhir.CodeableConcept | fhir.FhirCanonical | fhir.Expression | fhir.DataRequirement) | null;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.characteristic.definition[x]
     */
    protected static readonly _fts_definitionIsChoice: true;
    /**
     * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
     */
    usageContext: fhir.UsageContext[];
    /**
     * When true, members with this characteristic are excluded from the element.
     */
    exclude?: fhir.FhirBoolean | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    studyEffectiveDescription?: fhir.FhirString | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    studyEffective?: (fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.characteristic.studyEffective[x]
     */
    protected static readonly _fts_studyEffectiveIsChoice: true;
    /**
     * Indicates duration from the study initiation.
     */
    studyEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    studyEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | undefined;
    /**
     * A narrative description of the time period the study covers.
     */
    participantEffectiveDescription?: fhir.FhirString | undefined;
    /**
     * Indicates what effective period the study covers.
     */
    participantEffective?: (fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.characteristic.participantEffective[x]
     */
    protected static readonly _fts_participantEffectiveIsChoice: true;
    /**
     * Indicates duration from the participant's study entry.
     */
    participantEffectiveTimeFromStart?: fhir.Duration | undefined;
    /**
     * Indicates how elements are aggregated within the study effective period.
     */
    participantEffectiveGroupMeasure?: fhir.FhirCode<GroupMeasureCodeType> | undefined;
    /**
     * Default constructor for ResearchElementDefinitionCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchElementDefinitionCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for unitOfMeasure (ResearchElementDefinition.characteristic.unitOfMeasure)
     */
    static get unitOfMeasureRequiredCodes(): {
        readonly IgAAnticardiolipinUnit: "[APL'U]";
        readonly IgAAnticardiolipinUnitPerMilliliter: "[APL'U]/mL";
        readonly ArbitraryUnit: "[arb'U]";
        readonly ArbitaryUnitLiter: "[arb'U]/L";
        readonly ArbitraryUnitPerMilliliter: "[arb'U]/mL";
        readonly AllergyUnit: "[AU]";
        readonly BioequivalentAllergenUnit: "[BAU]";
        readonly BodanskyUnit: "[bdsk'U]";
        readonly BethesdaUnit: "[beth'U]";
        readonly ColonyFormingUnit: "[CFU]";
        readonly ColonyFormingUnitPerLiter: "[CFU]/L";
        readonly ColonyFormingUnitPerMilliliter: "[CFU]/mL";
        readonly FrenchCatheterGauge: "[Ch]";
        readonly CubicInch: "[cin_i]";
        readonly Cup: "[cup_us]";
        readonly DegreeFahrenheit: "[degF]";
        readonly DramUSAndBritish: "[dr_av]";
        readonly Drop: "[drp]";
        readonly DropHPF: "[drp]/[HPF]";
        readonly DropHour: "[drp]/h";
        readonly DropMinute: "[drp]/min";
        readonly DropMilliliter: "[drp]/mL";
        readonly DropSecond: "[drp]/s";
        readonly FluidDram: "[fdr_us]";
        readonly FluidOunce: "[foz_br]";
        readonly FluidOunceFozUs: "[foz_us]";
        readonly Feet: "[ft_i]";
        readonly Fathom: "[fth_i]";
        readonly Gallon: "[gal_br]";
        readonly QueenAnneQuoteSWineGallon: "[gal_us]";
        readonly IgGAnticardiolipinUnit: "[GPL'U]";
        readonly IgGAnticardiolipinUnitPerMilliliterAsteriskAsterisk: "[GPL'U]/mL";
        readonly Grain: "[gr]";
        readonly HighPowerField: "[HPF]";
        readonly InchInternationalOfWater: "[in_i'H2O]";
        readonly InchInternational: "[in_i]";
        readonly InternationalUnit: "[iU]";
        readonly InternationalUnitIU: "[IU]";
        readonly InternationalUnitPer2Hour: "[IU]/(2.h)";
        readonly InternationalUnitPer24Hour: "[IU]/(24.h)";
        readonly InternationalUnitPerBillionRedBloodCells: "[IU]/10*9{RBCs}";
        readonly InternationalUnitPerDay: "[IU]/d";
        readonly InternationalUnitPerDeciliter: "[IU]/dL";
        readonly InternationalUnitPerGram: "[IU]/g";
        readonly InternationalUnitPerGramOfHemoglobin: "[IU]/g{Hb}";
        readonly InternationalUnitGramHgb: "[iU]/g{Hgb}";
        readonly InternationalUnitPerHour: "[IU]/h";
        readonly InternationalUnitPerKilogram: "[IU]/kg";
        readonly InternationalUnitPerKilogramPerDay: "[IU]/kg/d";
        readonly InternationalUnitPerLiter: "[IU]/L";
        readonly InternationalUnitPerLiterAt37DegreesCelsius: "[IU]/L{37Cel}";
        readonly InternationalUnitPerMilligramOfCreatinine: "[IU]/mg{creat}";
        readonly InternationalUnitPerMinute: "[IU]/min";
        readonly InternationalUnitPerMilliliter: "[IU]/mL";
        readonly KingArmstrongUnit: "[ka'U]";
        readonly PoundUSAndBritish: "[lb_av]";
        readonly LowPowerField: "[LPF]";
        readonly MacLaganUnit: "[mclg'U]";
        readonly StatuteMile: "[mi_i]";
        readonly Mile: "[mi_us]";
        readonly Minim: "[min_us]";
        readonly IgMAnticardiolipinUnit: "[MPL'U]";
        readonly IgMAnticardiolipinUnitPerMilliliterAsteriskAsterisk: "[MPL'U]/mL";
        readonly NauticalMile: "[nmi_i]";
        readonly OunceUSAndBritish: "[oz_av]";
        readonly Ounce: "[oz_tr]";
        readonly PH: "[pH]";
        readonly TheNumberPiAsteriskRadianMinute: "[pi].rad/min";
        readonly PartPerBillion: "[ppb]";
        readonly PartPerMillion: "[ppm]";
        /**
         * Indicates what effective period the study covers.
         */
        readonly PartPerMillionInVolumePerVolume: "[ppm]{v/v}";
        readonly PartsPerThousand: "[ppth]";
        readonly PartPerTrillion: "[pptr]";
        readonly PoundPerSquareInch: "[psi]";
        readonly Pint: "[pt_br]";
        readonly Quart: "[qt_br]";
        readonly QuartQtUs: "[qt_us]";
        readonly SquareFootInternational: "[sft_i]";
        readonly SquareInchInternational: "[sin_i]";
        readonly ShortTonUSTon: "[ston_av]";
        readonly SquareYard: "[syd_i]";
        readonly TuberculinUnit: "[tb'U]";
        readonly TablespoonUS: "[tbs_us]";
        readonly ToddUnit: "[todd'U]";
        readonly Teaspoon: "[tsp_us]";
        readonly Yard: "[yd_i]";
        readonly NumberOfCalculi: "{# of calculi}";
        readonly NumberOfDonorInformativeMarkers: "{# of donor informative markers}";
        readonly NumberOfFetuses: "{# of fetuses}";
        readonly NumberOfInformativeMarkers: "{# of informative markers}";
        readonly VALNumber: "{#}";
        readonly VAL2Or3TimesDay: "{2 or 3 times}/d";
        readonly VAL3TimesDay: "{3 times}/d";
        readonly VAL4TimesDay: "{4 times}/d";
        readonly VAL5TimesDay: "{5 times}/d";
        readonly AbsorbanceQuoteU: "{Absorbance'U}";
        readonly AbsorbanceQuoteUMilliliter: "{Absorbance'U}/mL";
        readonly Absorbance: "{absorbance}";
        readonly Activity: "{activity}";
        readonly ActivityCoefficient: "{ActivityCoefficient}";
        readonly AHFQuoteU: "{AHF'U}";
        readonly AntibodyResponseQuoteU: "{AntibodyResponse'U}";
        readonly Applicator: "{Applicator}";
        readonly IgAAntiphosphatidylserineUnit: "{APS'U}";
        /**
         * A narrative description of the time period the study covers.
         */
        readonly AspirinResponseUnit: "{ARU}";
        readonly AspirinReactionQuoteU: "{AspirinReaction'U}";
        readonly Bead: "{Bead}";
        readonly HeartBeatsPerMinute: "{beats}/min";
        readonly BeatsMinute: "{Beats}/min";
        readonly BindingIndex: "{binding_index}";
        readonly Bottle: "{Bottle}";
        readonly BowlsDay: "{Bowls}/d";
        readonly BreathsMinute: "{Breaths}/min";
        readonly ComplementActivityEnzymeUnit: "{CAE'U}";
        readonly CAGTrinucleotideRepeats: "{CAG_repeats}";
        readonly CagRepeat: "{CagRepeat}";
        readonly Can: "{Can}";
        readonly CansWeek: "{Cans}/wk";
        readonly Capsule: "{Capsule}";
        readonly Cell: "{Cell}";
        readonly Cells: "{cells}";
        readonly CellsPerHighPowerField: "{cells}/[HPF]";
        readonly CellsMilliliter: "{Cells}/mL";
        readonly CellsPerMicroliter: "{cells}/uL";
        /**
         * Indicates duration from the participant's study entry.
         */
        readonly CfTiter: "{CfTiter}";
        readonly Cfu: "{cfu}";
        readonly CfuMilliliter: "{cfu}/mL";
        readonly CGGRepeats: "{CGG_repeats}";
        readonly CGG: "{CGG}";
        readonly ComplementCH100Unit: "{CH100'U}";
        readonly ClockTime: "{clock time}";
        readonly ClockTimeClockTime: "{clock_time}";
        readonly ComplementActivityEnzymeQuoteU: "{ComplementActivityEnzyme'U}";
        readonly ComplementCH100QuoteU: "{ComplementCH100'U}";
        readonly ComplementCH50QuoteU: "{ComplementCH50'U}";
        readonly Copies: "{copies}";
        readonly CopiesPerMilliliter: "{copies}/mL";
        readonly CopiesPerMicrogram: "{copies}/ug";
        readonly CopiesMicroliter: "{Copies}/uL";
        readonly Count: "{count}";
        readonly CountCount: "{Count}";
        readonly CountsMinute: "{Counts}/min";
        readonly CountsPerMinute: "{CPM}";
        readonly CountsPerMinutePerThousandCells: "{CPM}/10*3{cell}";
        readonly Dalton: "{Dalton}";
        readonly DdTiter: "{DdTiter}";
        readonly ChangeInDeltaOpticalDensity: "{delta_OD}";
        readonly DeltaOpticalDensity: "{DeltaOpticalDensity}";
        readonly Dilution: "{dilution}";
        readonly DilutionDilution: "{Dilution}";
        readonly DisintegrationsMinute: "{Disintegrations}/min";
        readonly Dose: "{Dose}";
        readonly DrinksDay: "{Drinks}/d";
        readonly Each: "{Each}";
        readonly EhrlichUnit: "{Ehrlich'U}";
        readonly EhrlichUnitPer2Hour: "{Ehrlich'U}/(2.h)";
        readonly EhrlichUnitPer100Gram: "{Ehrlich'U}/100.g";
        readonly EhrlichUnitPerDay: "{Ehrlich'U}/d";
        readonly EhrilichUnitPerDeciliter: "{Ehrlich'U}/dL";
        readonly EhrlichQuoteUMilliliter: "{Ehrlich'U}/mL";
        readonly EIAIndex: "{EIA_index}";
        readonly EIATiter: "{EIA_titer}";
        readonly EIAUnit: "{EIA'U}";
        readonly EIAUnitPerEnzymeUnit: "{EIA'U}/U";
        readonly EIAIndexEIAIndex: "{EIAIndex}";
        readonly EIATiterEIATiter: "{EIATiter}";
        readonly ELISAUnit: "{ELISA'U}";
        readonly ElisaQuoteUMilliliter: "{Elisa'U}/mL";
        readonly ElisaIndex: "{ElisaIndex}";
        readonly ElisaValue: "{ElisaValue}";
        readonly ErythrocytePerMicroliter: "{ERY}/uL";
        readonly EIAValue: "{EV}";
        readonly Events: "{Events}";
        readonly FluorescentIntensityUnit: "{FIU}";
        readonly FluorescenceIntensityQuoteU: "{FluorescenceIntensity'U}";
        readonly Fraction: "{fraction}";
        readonly GPortionPhospholipids: "{G-PortionPhospholipids}";
        readonly GAATrinucleotideRepeats: "{GAA_repeats}";
        readonly GenomesPerMilliliter: "{genomes}/mL";
        readonly GliadinIndexValue: "{GliadinIndexValue}";
        readonly GlobulesDropsPerHighPowerField: "{Globules}/[HPF]";
        readonly IgGAntiphosphatidylserineUnit: "{GPS'U}";
        readonly InfluenzaHemagglutinationTiter: "{HA_titer}";
        readonly HaTiter: "{HaTiter}";
        readonly ImmunofluorescenceAssayIndex: "{IFA_index}";
        readonly ImmunofluorescenceAssayTiter: "{IFA_titer}";
        readonly IfaIndex: "{IfaIndex}";
        readonly IfaTiter: "{IfaTiter}";
        readonly IgAAntiphosphatidyleserineQuoteU: "{IgAAntiphosphatidyleserine'U}";
        readonly IgAPhospholipidQuoteU: "{IgAPhospholipid'U}";
        readonly IgGAntiphosphatidyleserineQuoteU: "{IgGAntiphosphatidyleserine'U}";
        readonly IgGIndex: "{IgGIndex}";
        readonly IgMAntiphosphatidyleserineQuoteU: "{IgMAntiphosphatidyleserine'U}";
        readonly IgMIndex: "{IgMIndex}";
        readonly ImmuneComplexUnit: "{ImmuneComplex'U}";
        readonly ImmuneStatusRatio: "{ImmuneStatusRatio}";
        readonly Immunity: "{Immunity}";
        readonly IndexValue: "{index_val}";
        readonly IndexVal: "{Index_val}";
        readonly Index: "{index}";
        readonly IndexValueIndexValue: "{IndexValue}";
        readonly InhaledTobaccoUseAmountYears: "{InhaledTobaccoUseAmountYears}";
        readonly InhaledTobaccoUsePacksDay: "{InhaledTobaccoUsePacks}/d";
        readonly INRQuoteUnit: "{INR'unit}";
        readonly InternationalNormalizedRatio: "{INR}";
        readonly ImmuneStatusRatioISR: "{ISR}";
        readonly JuvenileDiabetesFoundationUnit: "{JDF'U}";
        readonly JuvenileDiabetesFoundationUnitPerLiter: "{JDF'U}/L";
        readonly JuvenileDiabetesFoundQuoteU: "{JuvenileDiabetesFound'U}";
        readonly KaolinClottingTime: "{KCT'U}";
        readonly KronusUnitPerLiter: "{KRONU'U}/L";
        readonly KronusUnitPerMilliliter: "{KRONU'U}/mL";
        readonly LgCopiesMilliliter: "{lgCopies}/ml";
        readonly LogBase10CopiesPerMilliliter: "{log_copies}/mL";
        readonly LogBase10CopiesPerMilliliterLogCopiesML: "{Log_copies}/mL";
        readonly LogBase10InternationalUnit: "{Log_IU}";
        readonly LogBase10InternationalUnitPerMilliliter: "{log_IU}/mL";
        readonly LogBase10InternationalUnitPerMilliliterLogIUML: "{Log_IU}/mL";
        readonly LogBase10: "{Log}";
        readonly LymeIndexValue: "{Lyme_index_value}";
        readonly LymeIndexValueLymeIndexValue: "{LymeIndexValue}";
        readonly MPortionPhospholipids: "{M-PortionPhospholipids}";
        readonly MOM: "{M.o.M.}";
        readonly MultipleOfTheMedian: "{M.o.M}";
        readonly Markers: "{Markers}";
        readonly Minidrp: "{minidrp}";
        readonly MoleculePlatelet: "{Molecule}/{Platelet}";
        readonly IgMAntiphosphatidylserineUnit: "{MPS'U}";
        readonly IgMAntiphosphatidylserineUnitPerMilliliter: "{MPS'U}/mL";
        readonly MultOfMean: "{MultOfMean}";
        readonly NonspecificOunce: "{NonspecificOunce}";
        readonly Number: "{Number}";
        readonly OpticalDensityUnit: "{OD_unit}"; /**
         * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
         */
        readonly OnceDay: "{Once}/d";
        readonly OpticalDensity: "{OpticalDensity}";
        readonly OpticalDensityIndex: "{OpticalDensityIndex}";
        readonly OpticalDensityRatio: "{OpticalDensityRatio}";
        readonly P2Y12ReactionUnits: "{P2Y12 Reaction Units}";
        readonly Package: "{Package}";
        readonly PacksDay: "{Packs}/d";
        readonly PackYears: "{PackYears}";
        readonly Patch: "{Patch}";
        readonly Percentile: "{Percentile}";
        readonly Pill: "{Pill}";
        readonly PouchesWeek: "{Pouches}/wk";
        readonly RadioactiveT3UptakeRatio: "{RadioactiveT3UptakeRatio}";
        readonly Ratio: "{ratio}";
        readonly RedBloodCellPerMicroliter: "{RBC}/uL";
        readonly RecTiter: "{RecTiter}";
        readonly RelativeQuoteU: "{Relative'U}";
        readonly RelativeViscosity: "{RelativeViscosity}";
        readonly RPIQuoteU: "{RPI'U}";
        readonly RubellaVirus: "{RubellaVirus}";
        readonly SatIndex: "{SatIndex}";
        readonly Scoop: "{Scoop}";
        readonly ScoreOf: "{ScoreOf}";
        readonly Shift: "{shift}";
        readonly SpermatozoaPerMilliliter: "{spermatozoa}/mL";
        readonly Spray: "{spray}";
        readonly StandardDeviation: "{StandardDeviation}";
        readonly StandardIgAQuoteU: "{StandardIgA'U}";
        readonly StandardIgGQuoteU: "{StandardIgG'U}";
        readonly StandardIgMQuoteU: "{StandardIgM'U}";
        readonly StdDeviationQuoteU: "{StdDeviation'U}";
        readonly StimulatingIndex: "{StimulatingIndex}";
        readonly StreptozymeQuoteU: "{Streptozyme'U}";
        readonly ThyroxinUptakeQuoteU: "{ThyroxinUptake'U}";
        readonly TIBCQuoteU: "{TIBC'U}";
        readonly TimesWeek: "{Times}/wk";
        readonly TineQuoteU: "{Tine'U}";
        readonly Titer: "{titer}";
        readonly ToxoplasmaIndexValue: "{ToxoplasmaIndexValue}";
        readonly Vial: "{Vial}";
        readonly VolumeVvolume: "{Volume}/{Vvolume}";
        readonly WeeksDays: "{WeeksDays}";
        readonly WhiteBloodCell: "{WhiteBloodCell}";
        readonly Per12AsteriskHour: "/(12.h)"; /**
         * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
         */
        readonly PerArbitraryUnit: "/[arb'U]";
        readonly PerHighPowerField: "/[HPF]";
        readonly PerInternationalUnit: "/[iU]";
        readonly PerLowPowerField: "/[LPF]";
        readonly PerEntity: "/{Entity}";
        readonly PerOif: "/{oif}";
        readonly PerSpecimen: "/{Specimen}";
        readonly PerTot: "/{tot}";
        readonly PerTenGiga: "/10*10";
        readonly PerTrillion: "/10*12";
        readonly PerTrillionRedBloodCells: "/10*12{rbc}";
        readonly PerMillion: "/10*6";
        readonly PerBillion: "/10*9";
        readonly Per100: "/100";
        readonly Per100Cells: "/100{cells}";
        readonly Per100Neutrophils: "/100{neutrophils}";
        readonly Per100Spermatozoa: "/100{spermatozoa}";
        readonly Per100WBC: "/100{WBC}";
        readonly Per100WBCPer100WBCs: "/100{WBCs}";
        readonly PerYear: "/a";
        readonly PerCentimeterOfWater: "/cm[H2O]";
        readonly PerDay: "/d";
        readonly PerDeciliter: "/dL";
        readonly PerGram: "/g";
        readonly PerGramCreat: "/g{creat}";
        readonly PerGramHgb: "/g{hgb}";
        readonly PerGramTotQuoteNit: "/g{tot'nit}";
        readonly PerGramTotQuoteProt: "/g{tot'prot}";
        readonly PerGramWetQuoteTis: "/g{wet'tis}";
        readonly PerHour: "/h";
        readonly PerKilogram: "/kg";
        readonly PerKilogramBodyWt: "/kg{body'wt}";
        readonly PerLiter: "/L";
        readonly PerSquareMeter: "/m2";
        readonly PerMilligram: "/mg";
        readonly PerMinute: "/min";
        readonly PerMilliliter: "/mL";
        readonly PerCubicMillimeter: "/mm3";
        readonly PerMillimole: "/mmol";
        readonly PerMonth: "/mo";
        readonly PerSecond: "/s";
        readonly PerEnzymeUnit: "/U";
        readonly PerMicrogram: "/ug";
        readonly PerMicroliter: "/uL";
        readonly PerWeek: "/wk";
        readonly Percent: "%";
        readonly Percent0to3Hours: "%{0to3Hours}";
        readonly PercentAbnormal: "%{Abnormal}";
        /**
         * If specified, this date follows the original approval date.
         */
        readonly PercentActivity: "%{Activity}";
        readonly PercentBasalActivity: "%{BasalActivity}";
        readonly PercentBinding: "%{Binding}";
        readonly PercentBlockade: "%{Blockade}";
        readonly PercentCarboxyhemoglobin: "%{Carboxyhemoglobin}";
        readonly PercentConversion: "%{Conversion}";
        readonly PercentCound: "%{Cound}";
        readonly PercentEosSeen: "%{EosSeen}";
        readonly PercentExcretion: "%{Excretion}";
        readonly PercentFat: "%{Fat}";
        readonly PercentFetalErythrocytes: "%{FetalErythrocytes}";
        readonly PercentHemoglobin: "%{Hemoglobin}";
        readonly PercentHemoglobinA1C: "%{HemoglobinA1C}";
        readonly PercentHemoglobinSaturation: "%{HemoglobinSaturation}";
        readonly PercentHemolysis: "%{Hemolysis}";
        readonly PercentHumanResponse: "%{HumanResponse}";
        readonly PercentIndex: "%{Index}";
        readonly PercentInhibition: "%{Inhibition}";
        readonly PercentLive: "%{Live}";
        readonly PercentNegativeControl: "%{Negative Control}";
        readonly PercentNormal: "%{Normal}";
        readonly PercentNormalControl: "%{NormalControl}";
        readonly PercentNormalPooledPlasma: "%{NormalPooledPlasma}";
        readonly PercentOfAvailable: "%{ofAvailable}";
        readonly PercentOfBacteria: "%{ofBacteria}";
        readonly PercentOfLymphocytes: "%{OfLymphocytes}";
        readonly PercentOfWBCs: "%{OfWBCs}";
        readonly PercentOxygen: "%{Oxygen}";
        readonly PercentPositive: "%{Positive}";
        readonly PercentPrecipitate: "%{Precipitate}";
        readonly PercentReactivity: "%{Reactivity}";
        readonly PercentResponse: "%{response}";
        readonly PercentRisk: "%{risk}";
        readonly PercentSpermMotility: "%{SpermMotility}";
        readonly PercentTotQuoteCholesterol: "%{Tot'Cholesterol}";
        readonly PercentTotQuoteHgb: "%{Tot'Hgb}";
        readonly PercentTotal: "%{Total}";
        readonly PercentTotalProtein: "%{TotalProtein}";
        readonly PercentUptake: "%{Uptake}";
        readonly VolumePercent: "%{vol}";
        readonly PercentWeightToWeight: "%{WeightToWeight}";
        readonly Percent100WBC: "%/100{WBC}";
        readonly OnePerDay: "1/d";
        readonly OnePerMinute: "1/min";
        readonly VAL10LiterPerMinutePerSquareMeter: "10.L/(min.m2)";
        readonly VAL10LiterPerMinute: "10.L/min";
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeterAsteriskMeterPower2: "10.uN.s/(cm.m2)";
        readonly VAL10MicronewtonSecondPerCentimeterToTheFifthPowerPerSquareMeter: "10.uN.s/(cm5.m2)";
        /**
         * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
         */
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeter: "10.uN.s/cm";
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeterPower2: "10.uN.s/cm2";
        readonly TheNumberTenForArbitraryPowersPower3PolarizationQuoteU: "10*-3{Polarization'U}";
        readonly TheNumberTenForArbitraryPowersPower6ImmunofluorescenceQuoteU: "10*-6{Immunofluorescence'U}";
        readonly TrillionPerLiter: "10*12/L";
        readonly Thousand: "10*3";
        readonly ThousandRedBloodCells: "10*3.{RBC}";
        readonly ThousandPerAsteriskUnit: "10*3.U";
        readonly ThousandCopiesPerMilliLiter: "10*3{Copies}/mL";
        readonly ThousandPerLiter: "10*3/L";
        readonly ThousandPerMilliLiter: "10*3/mL";
        readonly ThousandsPerMicroLiter: "10*3/uL";
        readonly VAL10ThousandPerMicroliter: "10*4/uL";
        readonly OneHundredThousand: "10*5";
        readonly Million: "10*6";
        readonly MillionInternationalUnit: "10*6.[iU]";
        readonly MillionEquivalentsPerMilliLiter: "10*6.eq/mL";
        readonly TheNumberTenForArbitraryPowersPower6AsteriskUnit: "10*6.U";
        readonly MillionPerSpecimen: "10*6/{Specimen}";
        readonly MillionPerKilogram: "10*6/kg";
        readonly MillionPerLiter: "10*6/L";
        readonly MillionPerMilliliter: "10*6/mL";
        readonly TheNumberTenForArbitraryPowersPower6MillimeterPower3: "10*6/mm3";
        readonly MillionPerMicroliter: "10*6/uL";
        readonly TenToEighth: "10*8";
        readonly BillionPerLiter: "10*9/L";
        readonly BillionPerMilliliter: "10*9/mL";
        readonly BillionPerMicroliter: "10*9/uL";
        readonly VAL24Hour: "24.h";
        readonly Year: "a";
        readonly Ampere: "A";
        readonly AmpereMeter: "A/m";
        readonly AttogramPerCell: "ag/{cell}";
        readonly StandardAtmosphere: "atm";
        readonly TechnicalAtmosphere: "att";
        readonly Bar: "bar";
        readonly Becquerel: "Bq";
        readonly Calorie: "cal";
        readonly DegreeCelsius: "Cel";
        readonly Centigram: "cg";
        readonly Centiliter: "cL";
        readonly Centimeter: "cm";
        readonly CentimeterOfWater: "cm[H2O]";
        readonly CentimeterOfWaterColumnSecondAsteriskMeter: "cm[H2O]/(s.m)";
        readonly CentimeterOfWaterPerLiterPerSecond: "cm[H2O]/L/s";
        readonly CentimeterOfWaterPerSecondPerMeter: "cm[H2O]/s/m";
        readonly CentimeterOfMercury: "cm[Hg]";
        readonly SquareCentimeter: "cm2";
        readonly SquareCentimeterPerSecond: "cm2/s";
        readonly CubicCentimeter: "cm3";
        readonly CentiPoise: "cP";
        readonly CentiStokes: "cSt";
        readonly Day: "d";
        readonly DekaliterPerMinute: "daL/min";
        readonly DekaliterPerMinutePerSquareMeter: "daL/min/m2";
        readonly Decibel: "dB";
        readonly Degree: "deg";
        readonly DegreePerSecond: "deg/s";
        readonly Decigram: "dg";
        readonly Deciliter: "dL";
        readonly Decimeter: "dm"; /**
         * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
         */
        readonly SquareDecimeterPerSquareSecond: "dm2/s2";
        readonly DyneSecondPerCentimeterPerSquareMeter: "dyn.s/(cm.m2)";
        readonly DyneSecondPerCentimeter: "dyn.s/cm";
        readonly Equivalents: "eq";
        readonly EquivalentsLiter: "eq/L";
        readonly EquivalentsMilliliter: "eq/mL";
        readonly EquivalentsMillimole: "eq/mmol";
        readonly EquivalentsMicromole: "eq/umol";
        readonly Erg: "erg";
        readonly Electronvolt: "eV";
        readonly Farad: "F";
        readonly Femtogram: "fg";
        readonly Femtoliter: "fL";
        readonly FemtoliterNanoliter: "fL/nL";
        readonly Femtometer: "fm";
        readonly Femtomole: "fmol";
        readonly FemtomolePerGram: "fmol/g";
        readonly FemtomolePerLiter: "fmol/L";
        readonly FemtomoleMilligram: "fmol/mg";
        readonly FemtomolePerMilligramOfCytosolProtein: "fmol/mg{cytosol_protein}";
        readonly FemtomolePerMilligramOfProtein: "fmol/mg{protein}";
        readonly FemtomoleMilliliter: "fmol/mL";
        readonly Gram: "g";
        readonly GramAsteriskMeter: "g.m";
        readonly GramAsteriskMeterHbAsteriskMeterPower2: "g.m/({hb}.m2)";
        readonly GramMeterPerHeartBeat: "g.m/{beat}";
        readonly GramAsteriskMeterHb: "g.m/{hb}";
        readonly GramOfCreatinine: "g{creat}";
        readonly GramOfHemoglobin: "g{Hb}";
        readonly GramOfTotalNitrogen: "g{total_nit}";
        readonly GramOfTotalProtein: "g{total_prot}";
        /**
         * An individual or organization primarily responsible for internal coherence of the content.
         */
        readonly GramOfWetTissue: "g{wet_tissue}";
        readonly GramPer100Gram: "g/(100.g)";
        readonly GramPer12Hour: "g/(12.h)";
        readonly GramPer24Hour: "g/(24.h)";
        readonly GramPer3Days: "g/(3.d)";
        readonly GramPer4Hour: "g/(4.h)";
        readonly GramPer48Hour: "g/(48.h)";
        readonly GramPer5Hour: "g/(5.h)";
        readonly GramPer6Hour: "g/(6.h)";
        readonly GramPer72Hour: "g/(72.h)";
        readonly Gram8AsteriskHour: "g/(8.h)";
        readonly GramPer8HourShift: "g/(8.h){shift}";
        readonly Gram8AsteriskKilogramAsteriskHour: "g/(8.kg.h)";
        readonly GramKilogramAsteriskHour: "g/(kg.h)";
        readonly GramKilogramAsteriskMinute: "g/(kg.min)";
        readonly GramPerSpecimen: "g/{specimen}";
        readonly GramPerTotalOutput: "g/{total_output}";
        readonly GramPerTotalWeight: "g/{total_weight}";
        readonly GramTotalWeight: "g/{TotalWeight}";
        readonly GramPerCubicCentimeter: "g/cm3";
        readonly GramPerDay: "g/d";
        readonly GramPerDeciliter: "g/dL";
        readonly GramPerGram: "g/g";
        readonly GramGramCre: "g/g{Cre}";
        readonly GramGramCreat: "g/g{creat}";
        readonly GramPerGramOfGlobulin: "g/g{globulin}";
        readonly GramPerGramOfTissue: "g/g{tissue}";
        readonly GramPerHour: "g/h";
        readonly GramPerHourPerSquareMeter: "g/h/m2";
        readonly GramPerKilogram: "g/kg";
        readonly GramPerKilogramPer8Hour: "g/kg/(8.h)";
        readonly GramPerKilogramPer8HourShift: "g/kg/(8.h){shift}";
        readonly GramPerKilogramPerDay: "g/kg/d";
        readonly GramPerKilogramPerHour: "g/kg/h";
        readonly GramPerKilogramPerMinute: "g/kg/min";
        readonly GramPerLiter: "g/L";
        readonly GramsPerSquareMeter: "g/m2";
        readonly GramPerMilligram: "g/mg";
        readonly GramPerMinute: "g/min";
        readonly GramPerMilliliter: "g/mL";
        readonly GramPerMillimole: "g/mmol";
        readonly GramMillimoleCreat: "g/mmol{creat}";
        readonly GramPerMole: "g/mol";
        readonly GramPerMoleOfCreatinine: "g/mol{creat}";
        readonly GigaBecquerel: "GBq";
        readonly Gray: "Gy";
        readonly Hour: "h";
        readonly Henry: "H";
        readonly Hectoliter: "hL";
        readonly Hertz: "Hz";
        readonly Joule: "J";
        readonly JoulePerLiter: "J/L";
        readonly Kelvin: "K";
        readonly KiloInternationalUnitPerLiter: "k[IU]/L";
        readonly KiloInternationalUnitPerMilliliter: "k[IU]/mL";
        readonly KelvinWatt: "K/W";
        readonly Katal: "kat";
        readonly KatalKilogram: "kat/kg";
        readonly KatalLiter: "kat/L";
        readonly KiloBecquerel: "kBq";
        readonly Kilocalorie: "kcal";
        readonly Kilocalorie8AsteriskHour: "kcal/(8.h)";
        readonly KilocaloriePerOunceUSAndBritish: "kcal/[oz_av]";
        readonly KilocaloriePerDay: "kcal/d";
        readonly KilocaloriePerHour: "kcal/h";
        readonly KilocaloriePerKilogramPer24Hour: "kcal/kg/(24.h)";
        readonly Kilogram: "kg";
        readonly KilogramMeterPerSecond: "kg.m/s";
        readonly KilogramPerSecondPerSquareMeter: "kg/(s.m2)";
        readonly KilogramPerHour: "kg/h";
        readonly KilogramPerLiter: "kg/L";
        readonly KilogramMeterPower2: "kg/m2";
        readonly KilogramMeterPower3: "kg/m3";
        readonly KilogramMinute: "kg/min";
        readonly KilogramPerMole: "kg/mol";
        readonly KilogramSecond: "kg/s";
        readonly Kiloliter: "kL";
        readonly Kilometer: "km";
        readonly KiloPascal: "kPa";
        readonly Kilosecond: "ks";
        readonly KiloEnzymeUnit: "kU";
        readonly KiloenzymeUnitPerGram: "kU/g";
        readonly KiloUnitHour: "kU/h";
        readonly KiloenzymeUnitPerLiter: "kU/L";
        readonly KiloEnzymeUnitPerLiterClass: "kU/L{class}";
        readonly KiloEnzymeUnitPerMilliliter: "kU/mL";
        readonly Liter: "L";
        readonly LiterAsteriskSecondPower2Second: "L.s2/s";
        readonly LiterPer24Hour: "L/(24.h)";
        readonly LiterPer8Hour: "L/(8.h)";
        readonly LiterPerMinutePerSquareMeter: "L/(min.m2)";
        readonly LiterPerDay: "L/d";
        readonly LiterPerHour: "L/h";
        readonly LiterPerKilogram: "L/kg";
        readonly LiterPerLiter: "L/L";
        readonly LiterPerMinute: "L/min";
        readonly LiterSecond: "L/s";
        readonly LiterPerSecondPerSquareSecond: "L/s/s2";
        readonly Lumen: "lm";
        readonly LumenSquareMeter: "lm.m2";
        readonly LumenMeterPower2: "lm/m2";
        readonly Meter: "m";
        readonly MilliinternationalUnit: "m[iU]";
        readonly MilliInternationalUnitPerLiter: "m[IU]/L";
        readonly MilliInternationalUnitPerMilliliter: "m[IU]/mL";
        readonly MeterPerSecond: "m/s";
        readonly MeterPerSquareSecond: "m/s2";
        readonly SquareMeter: "m2";
        readonly SquareMeterPerSecond: "m2/s";
        readonly CubicMeterPerSecond: "m3/s";
        readonly MilliAmpere: "mA";
        readonly Millibar: "mbar";
        readonly MillibarSecondPerLiter: "mbar.s/L";
        readonly MegaBecquerel: "MBq";
        readonly MilliCurie: "mCi";
        readonly Milliequivalent: "meq";
        readonly MilliequivalentPer12Hour: "meq/(12.h)";
        readonly MilliequivalentPer2Hour: "meq/(2.h)";
        readonly MilliequivalentPer24Hour: "meq/(24.h)";
        readonly Milliequivalents8AsteriskHourAsteriskKilogram: "meq/(8.h.kg)";
        readonly MilliequivalentPer8Hour: "meq/(8.h)";
        readonly MilliequivalentsKilogramAsteriskDay: "meq/(kg.d)";
        readonly MilliequivalentsSpecimen: "meq/{Specimen}";
        readonly MilliequivalentPerDay: "meq/d";
        readonly MilliequivalentPerDeciliter: "meq/dL";
        readonly MilliequivalentPerGram: "meq/g";
        readonly MilliequivalentsGramCre: "meq/g{Cre}";
        readonly MilliequivalentPerHour: "meq/h";
        readonly MilliequivalentPerKilogram: "meq/kg";
        readonly MilliequivalentPerKilogramPerHour: "meq/kg/h";
        readonly MilliequivalentsKilogramMinute: "meq/kg/min";
        readonly MilliequivalentPerLiter: "meq/L";
        readonly MilliequivalentPerSquareMeter: "meq/m2";
        readonly MilliequivalentPerMinute: "meq/min";
        readonly MilliequivalentPerMilliliter: "meq/mL";
        readonly Milligram: "mg";
        readonly MilligramPhenylketonesDeciliter: "mg{Phenylketones}/dL";
        readonly MilligramPer10Hour: "mg/(10.h)";
        readonly MilligramPer12Hour: "mg/(12.h)";
        readonly MilligramPer18Hour: "mg/(18.h)";
        readonly MilligramPer2Hour: "mg/(2.h)";
        readonly MilligramPer24Hour: "mg/(24.h)";
        readonly MilligramPer72Hour: "mg/(72.h)";
        readonly Milligram8AsteriskHourAsteriskKilogram: "mg/(8.h.kg)";
        readonly MilligramPer8Hour: "mg/(8.h)";
        readonly MilligramKilogramAsteriskHour: "mg/(kg.h)";
        readonly MilligramHgbGram: "mg/{Hgb}/g";
        readonly MilligramSpecimen: "mg/{Specimen}";
        readonly MilligramTotQuoteVolume: "mg/{Tot'Volume}";
        readonly MilligramVolume: "mg/{Volume}";
        readonly MilligramPerDay: "mg/d";
        readonly MilligramDay173AsteriskTheNumberTenForArbitraryPowersPower2AsteriskMeterPower2: "mg/d/(173.10*-2.m2)";
        readonly MilligramPerDeciliter: "mg/dL";
        readonly MilligramPerGram: "mg/g";
        readonly MilligramGramCre: "mg/g{Cre}";
        readonly MilligramPerGramOfCreatinine: "mg/g{creat}";
        readonly MilligramPerHour: "mg/h";
        readonly MilligramPerKilogram: "mg/kg";
        readonly MilligramKilogram24AsteriskHour: "mg/kg/(24.h)";
        readonly MilligramPerKilogramPerDay: "mg/kg/d";
        readonly MilligramPerKilogramPerMinute: "mg/kg/min";
        readonly MilligramPerLiter: "mg/L";
        readonly MilligramPerSquareMeter: "mg/m2";
        readonly MilligramPerCubicMeter: "mg/m3";
        readonly MilligramPerMilligram: "mg/mg";
        readonly MilligramMilligramCre: "mg/mg{cre}";
        readonly MilligramPerMinute: "mg/min";
        readonly MilligramPerMilliliter: "mg/mL";
        readonly MilligramPerMillimole: "mg/mmol";
        readonly MilligramMillimoleCre: "mg/mmol{Cre}";
        readonly MilligramPerMillimoleOfCreatinine: "mg/mmol{creat}";
        readonly MilligramPerWeek: "mg/wk";
        readonly Minute: "min";
        readonly Milliliter: "mL";
        readonly MilliliterHQuoteBAsteriskMeterPower2: "mL/({h'b}.m2)";
        readonly MilliliterPer10Hour: "mL/(10.h)";
        readonly MilliliterPer12Hour: "mL/(12.h)";
        readonly MilliliterPer2Hour: "mL/(2.h)";
        readonly MilliliterPer24Hour: "mL/(24.h)";
        readonly MilliliterPer4Hour: "mL/(4.h)";
        readonly MilliliterPer72Hour: "mL/(72.h)";
        readonly MilliliterPer8Hour: "mL/(8.h)";
        readonly MilliliterKilogramAsteriskMinute: "mL/(kg.min)";
        readonly MilliliterPerSquareInchInternational: "mL/[sin_i]";
        readonly MilliLitersPerHeartbeatSIVolumeUnits: "mL/{h'b}";
        readonly MilliliterCentimeterOfWaterColumn: "mL/cm[H2O]";
        readonly MilliliterPerDay: "mL/d";
        readonly MilliliterPerDeciliter: "mL/dL";
        readonly MilliliterPerHour: "mL/h";
        readonly MilliliterPerKilogram: "mL/kg";
        readonly MilliliterPerKilogramPer8Hour: "mL/kg/(8.h)";
        readonly MilliliterPerKilogramPerDay: "mL/kg/d";
        readonly MilliliterPerKilogramPerHour: "mL/kg/h";
        readonly MilliliterPerKilogramPerMinute: "mL/kg/min";
        readonly MilliliterPerLiter: "mL/L";
        readonly MilliliterPerSquareMeter: "mL/m2";
        readonly MilliliterPerMillibar: "mL/mbar";
        readonly MilliliterPerMinute: "mL/min";
        readonly MilliliterMinute173AsteriskTheNumberTenForArbitraryPowersPower2AsteriskMeterPower2: "mL/min/(173.10*-2.m2)";
        readonly MilliliterPerMinutePer173SquareMeter: "mL/min/{1.73_m2}";
        readonly MilliliterPerMinutePerSquareMeter: "mL/min/m2";
        readonly MilliliterPerMillimeter: "mL/mm";
        readonly MilliliterPerSecond: "mL/s";
        readonly Millimeter: "mm";
        readonly MillimeterOfWater: "mm[H2O]";
        readonly MillimeterOfMercury: "mm[Hg]";
        readonly MillimeterPerHour: "mm/h";
        readonly MillimeterPerMinute: "mm/min";
        readonly SquareMillimeter: "mm2";
        readonly CubicMillimeter: "mm3";
        readonly Millimole: "mmol";
        readonly MillimolePer12Hour: "mmol/(12.h)";
        readonly MillimolePer18Hour: "mmol/(18.h)";
        readonly MillimolePer2Hour: "mmol/(2.h)";
        readonly MillimolePer24Hour: "mmol/(24.h)";
        readonly MillimolePer6Hour: "mmol/(6.h)";
        readonly Millimole8AsteriskHourAsteriskKilogram: "mmol/(8.h.kg)";
        readonly MillimolePer8Hour: "mmol/(8.h)";
        readonly MillimoleTotQuoteVolume: "mmol/{Tot'Volume}";
        readonly MillimolePerDay: "mmol/d";
        readonly MillimolePerDeciliter: "mmol/dL";
        readonly MillimolePerGram: "mmol/g";
        readonly MillimolePerGramOfCreatinine: "mmol/g{creat}";
        readonly MillimolePerGramOfHemoglobin: "mmol/g{hemoglobin}";
        readonly MillimolePerHour: "mmol/h";
        readonly MillimolePerHourPerMilligramOfHemoglobin: "mmol/h/mg{Hb}";
        readonly MillimolePerHourPerMilligramOfProtein: "mmol/h/mg{protein}";
        readonly MillimolePerKilogram: "mmol/kg";
        readonly MillimolePerKilogramOfWater: "mmol/kg{H2O}";
        readonly MillimolePerKilogramPerDay: "mmol/kg/d";
        readonly MillimolePerKilogramPerHour: "mmol/kg/h";
        readonly MillimolePerKilogramPerMinute: "mmol/kg/min";
        readonly MillimolePerLiter: "mmol/L";
        readonly MillimolePerLiterPerSecond: "mmol/L/s";
        readonly MillimoleMeter: "mmol/m";
        readonly MillimolePerSquareMeter: "mmol/m2";
        readonly MillimolePerMinute: "mmol/min";
        readonly MillimolePerMillimole: "mmol/mmol";
        readonly MillimolePerMole: "mmol/mol";
        readonly MillimolePerMoleOfCreatinine: "mmol/mol{creat}";
        readonly MillimolePerSecondPerLiter: "mmol/s/L";
        readonly Month: "mo";
        readonly Mole: "mol";
        readonly MolePerDay: "mol/d";
        readonly MolePerKilogram: "mol/kg";
        readonly MolePerKilogramPerSecond: "mol/kg/s";
        readonly MolePerLiter: "mol/L";
        readonly MolePerCubicMeter: "mol/m3";
        readonly MolePerMilliliter: "mol/mL";
        readonly MolePerMole: "mol/mol";
        readonly MoleMoleCreat: "mol/mol{creat}";
        readonly MolePerSecond: "mol/s";
        readonly Milliosmole: "mosm";
        readonly MilliosmolePerKilogram: "mosm/kg";
        readonly MilliosmolePerLiter: "mosm/L";
        readonly Millipascal: "mPa";
        readonly Millisecond: "ms";
        readonly Megasecond: "Ms";
        readonly MillienzymeUnit: "mU";
        readonly MillienzymeUnitPerGram: "mU/g";
        readonly MilliEnzymeUnitPerGramOfHemoglobin: "mU/g{Hb}";
        readonly MilliUnitGramHgb: "mU/g{Hgb}";
        readonly MilliEnzymeUnitPerGramOfProtein: "mU/g{protein}";
        readonly MillienzymeUnitPerLiter: "mU/L";
        readonly MilliUnitMilligram: "mU/mg";
        readonly MilliUnitMilligramCre: "mU/mg{Cre}";
        readonly MilliUnitMinute: "mU/min";
        readonly MillienzymeUnitPerMilliliter: "mU/mL";
        readonly MillienzymeUnitPerMilliliterPerMinute: "mU/mL/min";
        readonly MilliEnzymeUnitPerMillimoleOfCreatinine: "mU/mmol{creat}";
        readonly MillienzymeUnitPerMillimoleOfCreatinine: "mU/mmol{creatinine}";
        readonly MillienzymeUnitPerMillimoleOfRedBloodCells: "mU/mmol{RBCs}";
        readonly MilliVolt: "mV";
        readonly Newton: "N";
        readonly NewtonCentimeter: "N.cm";
        readonly NewtonSecond: "N.s";
        readonly NanoCurie: "nCi";
        readonly Nanogram: "ng";
        readonly NanogramPer24Hour: "ng/(24.h)";
        readonly Nanogram8AsteriskHourAsteriskKilogram: "ng/(8.h.kg)";
        readonly NanogramPer8Hour: "ng/(8.h)";
        readonly NanogramKilogramAsteriskDay: "ng/(kg.d)";
        readonly NanogramKilogramAsteriskHour: "ng/(kg.h)";
        readonly NanogramKilogramAsteriskMinute: "ng/(kg.min)";
        readonly NanogramPerMillion: "ng/10*6";
        readonly NanogramPerDay: "ng/d";
        readonly NanogramPerDeciliter: "ng/dL";
        readonly NanogramDeciliterHour: "ng/dL/h";
        readonly NanogramPerGram: "ng/g";
        readonly NanogramGramCre: "ng/g{Cre}";
        readonly NanogramPerGramOfCreatinine: "ng/g{creat}";
        readonly NanogramPerHour: "ng/h";
        readonly NanogramPerKilogram: "ng/kg";
        readonly NanogramPerKilogramPer8Hour: "ng/kg/(8.h)";
        readonly NanogramPerKilogramPerHour: "ng/kg/h";
        readonly NanogramPerKilogramPerMinute: "ng/kg/min";
        readonly NanogramPerLiter: "ng/L";
        readonly NanogramPerSquareMeter: "ng/m2";
        readonly NanogramPerMilligram: "ng/mg";
        readonly NanogramMilligramProtein: "ng/mg{Protein}";
        readonly NanogramPerMilligramPerHour: "ng/mg/h";
        readonly NanogramPerMinute: "ng/min";
        readonly NanogramPerMillliiter: "ng/mL";
        readonly NanogramMilliliterRbc: "ng/mL{rbc}";
        readonly NanogramPerMilliliterPerHour: "ng/mL/h";
        readonly NanogramPerSecond: "ng/s";
        readonly Nanokatal: "nkat";
        readonly Nanoliter: "nL";
        readonly Nanometer: "nm";
        readonly NanometerPerSecondPerLiter: "nm/s/L";
        readonly Nanomole: "nmol";
        readonly NanomolePer24Hour: "nmol/(24.h)";
        readonly NanomolePerDay: "nmol/d";
        readonly NanomolePerDeciliter: "nmol/dL";
        readonly NanomolePerGram: "nmol/g";
        readonly NanomoleGramCre: "nmol/g{Cre}";
        readonly NanomolePerGramOfCreatinine: "nmol/g{creat}";
        readonly NanomolePerGramOfDryWeight: "nmol/g{dry_wt}";
        readonly NanomolePerHourPerLiter: "nmol/h/L";
        readonly NanomolePerHourPerMilligramOfProtein: "nmol/h/mg{protein}";
        readonly NanomolePerHourPerMilliliter: "nmol/h/mL";
        readonly NanomolePerLiter: "nmol/L";
        readonly NanomolePerLiterOfRedBloodCells: "nmol/L{RBCs}";
        readonly NanomolePerLiterPerMillimoleOfCreatinine: "nmol/L/mmol{creat}";
        readonly NanomolePerLiterPerSecond: "nmol/L/s";
        readonly NanomolePerMeterPerMilligramOfProtein: "nmol/m/mg{protein}";
        readonly NanomolePerMilligram: "nmol/mg";
        readonly NanomolePerMilligramPerHour: "nmol/mg/h";
        readonly NanomolePerMinutePerMilligramOfHemoglobin: "nmol/min/mg{hemoglobin}";
        readonly NanomolePerMinutePerMilligramOfProtein: "nmol/min/mg{protein}";
        readonly NanomolePerMinutePerMilliliter: "nmol/min/mL";
        readonly NanomolePerMilliliter: "nmol/mL";
        readonly NanomolePerMilliliterPerHour: "nmol/mL/h";
        readonly NanomolePerMilliliterPerMinute: "nmol/mL/min";
        readonly NanomolePerMillimole: "nmol/mmol";
        readonly NanomoleMillimoleCre: "nmol/mmol{Cre}";
        readonly NanomolePerMillimoleOfCreatinine: "nmol/mmol{creat}";
        readonly NanomolePerMole: "nmol/mol";
        readonly NanomolePerNanomole: "nmol/nmol";
        readonly NanomolePerSecond: "nmol/s";
        readonly NanomolePerSecondPerLiter: "nmol/s/L";
        readonly NanomolePerMicromoleOfCreatinine: "nmol/umol{creat}";
        readonly Nanosecond: "ns";
        readonly Ohm: "Ohm";
        readonly OsmolePerKilogram: "osm/kg";
        readonly OsmolePerLiter: "osm/L";
        readonly Pascal: "Pa";
        readonly Picogram: "pg";
        readonly PicogramPerDeciliter: "pg/dL";
        readonly PicogramPerLiter: "pg/L";
        readonly PicogramPerMilligram: "pg/mg";
        readonly PicogramPerMilliliter: "pg/mL";
        readonly PicogramPerMillimeter: "pg/mm";
        readonly Picokatal: "pkat";
        readonly Picoliter: "pL";
        readonly Picometer: "pm";
        readonly Picomole: "pmol";
        readonly PicomolePerDay: "pmol/d";
        readonly PicomolePerDeciliter: "pmol/dL";
        readonly PicomolePerGram: "pmol/g";
        readonly PicomolePerHourPerMilligramOfProtein: "pmol/h/mg{protein}";
        readonly PicomolePerHourPerMilliliter: "pmol/h/mL";
        readonly PicomolePerLiter: "pmol/L";
        readonly PicomolePerMilligramOfProtein: "pmol/mg{protein}";
        readonly PicomolePerMinute: "pmol/min";
        readonly PicomolePerMinutePerMilligramOfProtein: "pmol/min/mg{protein}";
        readonly PicomolePerMilliliter: "pmol/mL";
        readonly PicomolePerMillimole: "pmol/mmol";
        readonly PicomolePerMillimoleOfCreatinine: "pmol/mmol{creat}";
        readonly PicomolePerMole: "pmol/mol";
        readonly PicomolePerMicromole: "pmol/umol";
        readonly PicomolePerMicromoleOfCreatinine: "pmol/umol{creat}";
        readonly Picosecond: "ps";
        readonly Picotesla: "pT";
        readonly Second: "s";
        readonly Stokes: "St";
        readonly Tonne: "t";
        readonly EnzymeUnit: "U";
        readonly MicroInternationalUnit: "u[IU]";
        readonly MicrointernationalUnitPerLiter: "u[IU]/L";
        readonly MicroInternationalUnitPerMilliliter: "u[IU]/mL";
        readonly EnzymeUnitPerLiterAt25DegCelsius: "U{25Cel}/L";
        readonly EnzymeUnitPerLiterAt37DegCelsius: "U{37Cel}/L";
        readonly GUnit: "U{G}";
        readonly EnzymeUnitPer1Hour: "U/(1.h)";
        readonly EnzymeUnitPer10GramOfFeces: "U/(10.g){feces}";
        readonly EnzymeUnitPer12Hour: "U/(12.h)";
        readonly EnzymeUnitPer18Hour: "U/(18.h)";
        readonly EnzymeUnitPer2Hour: "U/(2.h)";
        readonly EnzymeUnitPer24Hour: "U/(24.h)";
        readonly EnzymeUnitPer10: "U/10";
        readonly EnzymeUnitPer10Billion: "U/10*10";
        readonly EnzymeUnitPer10BillionCells: "U/10*10{cells}";
        readonly EnzymeUnitPerTrillion: "U/10*12";
        readonly EnzymeUnitPerTrillionRedBloodCells: "U/10*12{RBCs}";
        readonly EnzymeUnitPerMillion: "U/10*6";
        readonly EnzymeUnitPerBillion: "U/10*9";
        readonly EnzymeUnitPerDay: "U/d";
        readonly EnzymeUnitPerDeciliter: "U/dL";
        readonly EnzymeUnitPerGram: "U/g";
        readonly UnitGramCre: "U/g{Cre}";
        readonly EnzymeUnitPerGramOfCreatinine: "U/g{creat}";
        readonly EnzymeUnitPerGramOfHemoglobin: "U/g{Hb}";
        readonly EnzymeUnitPerGramOfHemoglobinUGHemoglobin: "U/g{hemoglobin}";
        readonly UnitsPerGramHemoglobin: "U/g{Hgb}";
        readonly EnzymeUnitPerGramOfProtein: "U/g{protein}";
        readonly EnzymeUnitPerHour: "U/h";
        readonly EnzymeUnitPerKilogramOfHemoglobin: "U/kg{Hb}";
        readonly EnzymeUnitPerKilogramOfHemoglobinUKgHemoglobin: "U/kg{hemoglobin}";
        readonly UnitKilogramHour: "U/kg/h";
        readonly EnzymeUnitPerLiter: "U/L";
        readonly EnzymeUnitPerMinute: "U/min";
        readonly EnzymeUnitPerMilliliter: "U/mL";
        readonly UnitMilliliterRBC: "U/mL{RBC}";
        readonly EnzymeUnitPerMilliliterOfRedBloodCells: "U/mL{RBCs}";
        readonly EnzymeUnitPerMillimoleOfCreatinine: "U/mmol{creat}";
        readonly EnzymeUnitPerMole: "U/mol";
        readonly EnzymeUnitPerSecond: "U/s";
        readonly EnzymeUnitPerMicromole: "U/umol";
        readonly Microequivalents: "ueq";
        readonly MicroequivalentPerLiter: "ueq/L";
        readonly MicroequivalentPerMilliliter: "ueq/mL";
        readonly Microgram: "ug";
        readonly MicrogramFibrinogenEquivalentUnitPerMilliliter: "ug{FEU}/mL";
        readonly MicrogramT4Deciliter: "ug{T4}/dL";
        readonly MicrogramPer100Gram: "ug/(100.g)";
        readonly MicrogramPer24Hour: "ug/(24.h)";
        readonly MicrogramPer8Hour: "ug/(8.h)";
        readonly MicrogramKilogramAsteriskDay: "ug/(kg.d)";
        readonly MicrogramKilogramAsteriskHour: "ug/(kg.h)";
        readonly MicrogramPerSquareFootInternational: "ug/[sft_i]";
        readonly MicrogramPerSpecimen: "ug/{specimen}";
        readonly MicrogramSpecimen: "ug/{Specimen}";
        readonly MicroGramsPerTotalVolume: "ug/{TotalVolume}";
        readonly MicrogramPerDay: "ug/d";
        readonly MicrogramPerDeciliter: "ug/dL";
        readonly MicrogramDeciliterRbc: "ug/dL{rbc}";
        readonly MicrogramPerDeciliterOfRedBloodCells: "ug/dL{RBCs}";
        readonly MicrogramPerGram: "ug/g";
        readonly MicrogramGramCre: "ug/g{Cre}";
        readonly MicrogramPerGramOfCreatinine: "ug/g{creat}";
        readonly MicrogramPerGramOfDryTissue: "ug/g{dry_tissue}";
        readonly MicrogramPerGramOfDryWeight: "ug/g{dry_wt}";
        readonly MicrogramGramDryWeight: "ug/g{DryWeight}";
        readonly MicrogramPerGramOfFeces: "ug/g{feces}";
        readonly MicrogramPerGramOfHair: "ug/g{hair}";
        readonly MicrogramPerGramOfHemoglobin: "ug/g{Hb}";
        readonly MicrogramGramHgb: "ug/g{Hgb}";
        readonly MicrogramPerGramOfTissue: "ug/g{tissue}";
        readonly MicrogramGramTissue: "ug/g{Tissue}";
        readonly MicrogramPerHour: "ug/h";
        readonly MicrogramPerKilogram: "ug/kg";
        readonly MicrogramPerKilogramPer8Hour: "ug/kg/(8.h)";
        readonly MicrogramPerKilogramPerDay: "ug/kg/d";
        readonly MicrogramPerKilogramPerHour: "ug/kg/h";
        readonly MicrogramPerKilogramPerMinute: "ug/kg/min";
        readonly MicrogramPerLiter: "ug/L";
        readonly MicrogramLiterDDU: "ug/L{DDU}";
        readonly MicrogramPerLiterOfRedBloodCells: "ug/L{RBCs}";
        readonly MicrogramPerLiterPer24Hour: "ug/L/(24.h)";
        readonly MicrogramPerSquareMeter: "ug/m2";
        readonly MicrogramPerCubicMeter: "ug/m3";
        readonly MicrogramPerMilligram: "ug/mg";
        readonly MicrogramMilligramCre: "ug/mg{Cre}";
        readonly MicrogramPerMilligramOfCreatinine: "ug/mg{creat}";
        readonly MicrogramPerMinute: "ug/min";
        readonly MicrogramPerMilliliter: "ug/mL";
        readonly MicrogramPerMilliliterClass: "ug/mL{class}";
        readonly MicrogramPerMilliliterEquivalent: "ug/mL{eqv}";
        readonly MicrogramMilliliterFEU: "ug/mL{FEU}";
        readonly MicrogramPerMillimole: "ug/mmol";
        readonly MicrogramPerMillimoleOfCreatinine: "ug/mmol{creat}";
        readonly MicrogramPerNanogram: "ug/ng";
        readonly Microkatal: "ukat";
        readonly Microliter: "uL";
        readonly MicroliterPer2Hour: "uL/(2.h)";
        readonly MicroliterPerHour: "uL/h";
        readonly Micrometer: "um";
        readonly MicrometerPerSecond: "um/s";
        readonly Micromole: "umol";
        readonly MicromoleBoneCollagenEquivalentPerMole: "umol{BCE}/mol";
        readonly MicromolePer2Hour: "umol/(2.h)";
        readonly MicromolePer24Hour: "umol/(24.h)";
        readonly MicromolePer8Hour: "umol/(8.h)";
        readonly MicromolePerDay: "umol/d";
        readonly MicromolePerDeciliter: "umol/dL";
        readonly MicromolePerDeciliterOfGlomerularFiltrate: "umol/dL{GF}";
        readonly MicromolePerGram: "umol/g";
        readonly MicromoleGramCre: "umol/g{Cre}";
        readonly MicromolePerGramOfCreatinine: "umol/g{creat}";
        readonly MicromolePerGramOfHemoglobin: "umol/g{Hb}";
        readonly MicromolePerGramOfHemoglobinUmolGHemoglobin: "umol/g{hemoglobin}";
        readonly MicromoleGramHgb: "umol/g{Hgb}";
        readonly MicromolePerHour: "umol/h";
        readonly MicromoleHourGram: "umol/h/g";
        readonly MicromolePerHourPerLiter: "umol/h/L";
        readonly MicromolePerHourPerMilligramOfProtein: "umol/h/mg{protein}";
        readonly MicromolePerKilogram: "umol/kg";
        readonly MicromolePerKilogramOfFeces: "umol/kg{feces}";
        readonly MicromolePerLiter: "umol/L";
        readonly MicromolePerLiterOfRedBloodCells: "umol/L{rbc}";
        readonly MicromolePerLiterOfRedBloodCellsUmolLRBCs: "umol/L{RBCs}";
        readonly MicromolePerLiterPerHour: "umol/L/h";
        readonly MicromoleMeter: "umol/m";
        readonly MicromolePerMilligram: "umol/mg";
        readonly MicromoleMilligramCre: "umol/mg{Cre}";
        readonly MicromolePerMilligramOfCreatinine: "umol/mg{creat}";
        readonly MicromolePerMinute: "umol/min";
        readonly MicromolePerMinutePerGram: "umol/min/g";
        readonly MicromolePerMinutePerGramOfMucosa: "umol/min/g{mucosa}";
        readonly MicromoleMinuteGramProt: "umol/min/g{prot}";
        readonly MicromolePerMinutePerGramOfProtein: "umol/min/g{protein}";
        readonly MicromolePerMinutePerLiter: "umol/min/L";
        readonly MicromolePerMilliliter: "umol/mL";
        readonly MicromolePerMilliliterPerMinute: "umol/mL/min";
        readonly MicromolePerMillimole: "umol/mmol";
        readonly MicromolePerMillimoleOfCreatinine: "umol/mmol{creat}";
        readonly MicromolePerMole: "umol/mol";
        readonly MicromoleMoleCre: "umol/mol{Cre}";
        readonly MicromolePerMoleOfCreatinine: "umol/mol{creat}";
        readonly MicromolePerMoleOfHemoglobin: "umol/mol{Hb}";
        readonly MicromolePerMicromole: "umol/umol";
        readonly MicromolePerMicromoleOfCreatinine: "umol/umol{creat}";
        readonly MicroOhm: "uOhm";
        readonly Microsecond: "us";
        readonly MicroUnit: "uU";
        readonly MicroEnzymeUnitPerGram: "uU/g";
        readonly MicroEnzymeUnitPerLiter: "uU/L";
        readonly MicroEnzymeUnitPerMilliliter: "uU/mL";
        readonly Microvolt: "uV";
        readonly Volt: "V";
        readonly Week: "wk";
    };
    /**
     * Required-bound Value Set for studyEffectiveGroupMeasure (ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure)
     */
    static get studyEffectiveGroupMeasureRequiredCodes(): {
        readonly Mean: "mean";
        readonly MeanOfStudyMeans: "mean-of-mean";
        readonly MeanOfStudyMedins: "mean-of-median";
        readonly Median: "median";
        readonly MedianOfStudyMeans: "median-of-mean";
        readonly MedianOfStudyMedians: "median-of-median";
    };
    /**
     * Required-bound Value Set for participantEffectiveGroupMeasure (ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure)
     */
    static get participantEffectiveGroupMeasureRequiredCodes(): {
        readonly Mean: "mean";
        readonly MeanOfStudyMeans: "mean-of-mean";
        readonly MeanOfStudyMedins: "mean-of-median";
        readonly Median: "median";
        readonly MedianOfStudyMeans: "median-of-mean";
        readonly MedianOfStudyMedians: "median-of-median";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ResearchElementDefinition type.
 */
export interface ResearchElementDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchElementDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: fhir.FhirString | string | undefined;
    /**
     * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.ReferenceArgs | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: fhir.FhirString[] | string[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the research element definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
     */
    library?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * The type of research element, a population, an exposure, or an outcome.
     */
    type: fhir.FhirCode<ResearchElementTypeCodeType> | string | undefined;
    /**
     * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
     */
    variableType?: fhir.FhirCode<VariableTypeCodeType> | string | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.ResearchElementDefinitionCharacteristicArgs[] | null;
}
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export declare class ResearchElementDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ResearchElementDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: fhir.FhirString | undefined;
    /**
     * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | undefined;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of research element definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ResearchElementDefinition.subject[x]
     */
    protected static readonly _fts_subjectIsChoice: true;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment: fhir.FhirString[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the research element definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
     */
    topic: fhir.CodeableConcept[];
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author: fhir.ContactDetail[];
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor: fhir.ContactDetail[];
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer: fhir.ContactDetail[];
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser: fhir.ContactDetail[];
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
     */
    library: fhir.FhirCanonical[];
    /**
     * The type of research element, a population, an exposure, or an outcome.
     */
    type: fhir.FhirCode<ResearchElementTypeCodeType> | null;
    /**
     * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
     */
    variableType?: fhir.FhirCode<VariableTypeCodeType> | undefined;
    /**
     * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
     */
    characteristic: fhir.ResearchElementDefinitionCharacteristic[];
    /**
     * Default constructor for ResearchElementDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ResearchElementDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ResearchElementDefinition.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for type (ResearchElementDefinition.type)
     */
    static get typeRequiredCodes(): {
        readonly Exposure: "exposure";
        readonly Outcome: "outcome";
        readonly Population: "population";
    };
    /**
     * Required-bound Value Set for variableType (ResearchElementDefinition.variableType)
     */
    static get variableTypeRequiredCodes(): {
        readonly Continuous: "continuous";
        readonly Descriptive: "descriptive";
        readonly Dichotomous: "dichotomous";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=ResearchElementDefinition.d.ts.map