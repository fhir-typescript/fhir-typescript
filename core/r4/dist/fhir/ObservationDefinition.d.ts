import * as fhir from '../fhir.js';
import { ObservationRangeCategoryCodeType } from '../fhirValueSets/ObservationRangeCategoryCodes.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
import { PermittedDataTypeCodeType } from '../fhirValueSets/PermittedDataTypeCodes.js';
/**
 * Valid arguments for the ObservationDefinitionQuantitativeDetails type.
 */
export interface ObservationDefinitionQuantitativeDetailsArgs extends fhir.BackboneElementArgs {
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.CodeableConceptArgs | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.CodeableConceptArgs | undefined;
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: fhir.FhirDecimal | number | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: fhir.FhirInteger | number | undefined;
}
/**
 * Characteristics for quantitative results of this observation.
 */
export declare class ObservationDefinitionQuantitativeDetails extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.CodeableConcept | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: fhir.FhirDecimal | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: fhir.FhirInteger | undefined;
    /**
     * Default constructor for ObservationDefinitionQuantitativeDetails - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationDefinitionQuantitativeDetailsArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for customaryUnit (ObservationDefinition.quantitativeDetails.customaryUnit)
     */
    static get customaryUnitExtensibleCodings(): {
        readonly IgAAnticardiolipinUnit: fhir.Coding;
        readonly IgAAnticardiolipinUnitPerMilliliter: fhir.Coding;
        readonly ArbitraryUnit: fhir.Coding;
        readonly ArbitaryUnitLiter: fhir.Coding;
        readonly ArbitraryUnitPerMilliliter: fhir.Coding;
        readonly AllergyUnit: fhir.Coding;
        readonly BioequivalentAllergenUnit: fhir.Coding;
        readonly BodanskyUnit: fhir.Coding;
        readonly BethesdaUnit: fhir.Coding;
        readonly ColonyFormingUnit: fhir.Coding;
        readonly ColonyFormingUnitPerLiter: fhir.Coding;
        readonly ColonyFormingUnitPerMilliliter: fhir.Coding;
        readonly FrenchCatheterGauge: fhir.Coding;
        readonly CubicInch: fhir.Coding;
        readonly Cup: fhir.Coding;
        readonly DegreeFahrenheit: fhir.Coding;
        readonly DramUSAndBritish: fhir.Coding;
        readonly Drop: fhir.Coding;
        readonly DropHPF: fhir.Coding;
        readonly DropHour: fhir.Coding;
        readonly DropMinute: fhir.Coding;
        /**
         * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
         */
        readonly DropMilliliter: fhir.Coding; /**
         * Factor for converting value expressed with SI unit to value expressed with customary unit.
         */
        readonly DropSecond: fhir.Coding;
        /**
         * Number of digits after decimal separator when the results of such observations are of type Quantity.
         */
        readonly FluidDram: fhir.Coding;
        readonly FluidOunce: fhir.Coding;
        readonly FluidOunceFozUs: fhir.Coding;
        readonly Feet: fhir.Coding;
        readonly Fathom: fhir.Coding;
        readonly Gallon: fhir.Coding;
        readonly QueenAnneQuoteSWineGallon: fhir.Coding; /**
         * Extensible-bound Value Set for unit (ObservationDefinition.quantitativeDetails.unit)
         */
        readonly IgGAnticardiolipinUnit: fhir.Coding; /**
         * Function to perform basic model validation (e.g., check if required elements are present).
         */
        readonly IgGAnticardiolipinUnitPerMilliliterAsteriskAsterisk: fhir.Coding;
        readonly Grain: fhir.Coding;
        readonly HighPowerField: fhir.Coding;
        readonly InchInternationalOfWater: fhir.Coding;
        readonly InchInternational: fhir.Coding;
        readonly InternationalUnit: fhir.Coding;
        readonly InternationalUnitIU: fhir.Coding;
        readonly InternationalUnitPer2Hour: fhir.Coding;
        readonly InternationalUnitPer24Hour: fhir.Coding;
        readonly InternationalUnitPerBillionRedBloodCells: fhir.Coding;
        readonly InternationalUnitPerDay: fhir.Coding;
        readonly InternationalUnitPerDeciliter: fhir.Coding;
        readonly InternationalUnitPerGram: fhir.Coding;
        readonly InternationalUnitPerGramOfHemoglobin: fhir.Coding;
        readonly InternationalUnitGramHgb: fhir.Coding;
        readonly InternationalUnitPerHour: fhir.Coding;
        readonly InternationalUnitPerKilogram: fhir.Coding;
        readonly InternationalUnitPerKilogramPerDay: fhir.Coding;
        readonly InternationalUnitPerLiter: fhir.Coding;
        readonly InternationalUnitPerLiterAt37DegreesCelsius: fhir.Coding;
        readonly InternationalUnitPerMilligramOfCreatinine: fhir.Coding;
        readonly InternationalUnitPerMinute: fhir.Coding;
        readonly InternationalUnitPerMilliliter: fhir.Coding;
        readonly KingArmstrongUnit: fhir.Coding;
        readonly PoundUSAndBritish: fhir.Coding;
        readonly LowPowerField: fhir.Coding;
        readonly MacLaganUnit: fhir.Coding;
        readonly StatuteMile: fhir.Coding;
        readonly Mile: fhir.Coding;
        readonly Minim: fhir.Coding;
        readonly IgMAnticardiolipinUnit: fhir.Coding;
        readonly IgMAnticardiolipinUnitPerMilliliterAsteriskAsterisk: fhir.Coding;
        readonly NauticalMile: fhir.Coding;
        readonly OunceUSAndBritish: fhir.Coding;
        readonly Ounce: fhir.Coding;
        readonly PH: fhir.Coding;
        readonly TheNumberPiAsteriskRadianMinute: fhir.Coding;
        readonly PartPerBillion: fhir.Coding;
        readonly PartPerMillion: fhir.Coding;
        readonly PartPerMillionInVolumePerVolume: fhir.Coding; /**
         * Describes what will be observed. Sometimes this is called the observation "name".
         */
        readonly PartsPerThousand: fhir.Coding;
        readonly PartPerTrillion: fhir.Coding;
        readonly PoundPerSquareInch: fhir.Coding;
        readonly Pint: fhir.Coding;
        readonly Quart: fhir.Coding;
        readonly QuartQtUs: fhir.Coding;
        readonly SquareFootInternational: fhir.Coding;
        readonly SquareInchInternational: fhir.Coding;
        readonly ShortTonUSTon: fhir.Coding;
        readonly SquareYard: fhir.Coding;
        readonly TuberculinUnit: fhir.Coding;
        readonly TablespoonUS: fhir.Coding;
        readonly ToddUnit: fhir.Coding;
        readonly Teaspoon: fhir.Coding;
        readonly Yard: fhir.Coding;
        readonly NumberOfCalculi: fhir.Coding;
        readonly NumberOfDonorInformativeMarkers: fhir.Coding;
        readonly NumberOfFetuses: fhir.Coding;
        readonly NumberOfInformativeMarkers: fhir.Coding;
        readonly VALNumber: fhir.Coding;
        readonly VAL2Or3TimesDay: fhir.Coding;
        /**
         * Only used if not implicit in observation code.
         */
        readonly VAL3TimesDay: fhir.Coding;
        readonly VAL4TimesDay: fhir.Coding;
        readonly VAL5TimesDay: fhir.Coding;
        readonly AbsorbanceQuoteU: fhir.Coding;
        readonly AbsorbanceQuoteUMilliliter: fhir.Coding;
        readonly Absorbance: fhir.Coding;
        readonly Activity: fhir.Coding;
        readonly ActivityCoefficient: fhir.Coding;
        readonly AHFQuoteU: fhir.Coding;
        readonly AntibodyResponseQuoteU: fhir.Coding;
        readonly Applicator: fhir.Coding;
        readonly IgAAntiphosphatidylserineUnit: fhir.Coding;
        readonly AspirinResponseUnit: fhir.Coding;
        readonly AspirinReactionQuoteU: fhir.Coding;
        readonly Bead: fhir.Coding;
        readonly HeartBeatsPerMinute: fhir.Coding;
        readonly BeatsMinute: fhir.Coding;
        readonly BindingIndex: fhir.Coding;
        readonly Bottle: fhir.Coding;
        readonly BowlsDay: fhir.Coding;
        readonly BreathsMinute: fhir.Coding;
        readonly ComplementActivityEnzymeUnit: fhir.Coding;
        readonly CAGTrinucleotideRepeats: fhir.Coding;
        readonly CagRepeat: fhir.Coding;
        readonly Can: fhir.Coding;
        readonly CansWeek: fhir.Coding;
        readonly Capsule: fhir.Coding;
        readonly Cell: fhir.Coding;
        readonly Cells: fhir.Coding;
        readonly CellsPerHighPowerField: fhir.Coding;
        readonly CellsMilliliter: fhir.Coding;
        readonly CellsPerMicroliter: fhir.Coding;
        readonly CfTiter: fhir.Coding;
        readonly Cfu: fhir.Coding;
        readonly CfuMilliliter: fhir.Coding;
        readonly CGGRepeats: fhir.Coding;
        readonly CGG: fhir.Coding;
        readonly ComplementCH100Unit: fhir.Coding;
        readonly ClockTime: fhir.Coding;
        readonly ClockTimeClockTime: fhir.Coding;
        readonly ComplementActivityEnzymeQuoteU: fhir.Coding;
        readonly ComplementCH100QuoteU: fhir.Coding;
        readonly ComplementCH50QuoteU: fhir.Coding;
        readonly Copies: fhir.Coding;
        readonly CopiesPerMilliliter: fhir.Coding;
        readonly CopiesPerMicrogram: fhir.Coding;
        readonly CopiesMicroliter: fhir.Coding;
        readonly Count: fhir.Coding;
        readonly CountCount: fhir.Coding;
        readonly CountsMinute: fhir.Coding;
        readonly CountsPerMinute: fhir.Coding;
        readonly CountsPerMinutePerThousandCells: fhir.Coding;
        readonly Dalton: fhir.Coding;
        readonly DdTiter: fhir.Coding;
        readonly ChangeInDeltaOpticalDensity: fhir.Coding;
        readonly DeltaOpticalDensity: fhir.Coding;
        readonly Dilution: fhir.Coding;
        readonly DilutionDilution: fhir.Coding;
        readonly DisintegrationsMinute: fhir.Coding;
        readonly Dose: fhir.Coding;
        readonly DrinksDay: fhir.Coding;
        readonly Each: fhir.Coding;
        readonly EhrlichUnit: fhir.Coding;
        readonly EhrlichUnitPer2Hour: fhir.Coding;
        readonly EhrlichUnitPer100Gram: fhir.Coding;
        readonly EhrlichUnitPerDay: fhir.Coding;
        readonly EhrilichUnitPerDeciliter: fhir.Coding;
        readonly EhrlichQuoteUMilliliter: fhir.Coding;
        readonly EIAIndex: fhir.Coding;
        readonly EIATiter: fhir.Coding;
        readonly EIAUnit: fhir.Coding;
        readonly EIAUnitPerEnzymeUnit: fhir.Coding;
        readonly EIAIndexEIAIndex: fhir.Coding;
        readonly EIATiterEIATiter: fhir.Coding;
        readonly ELISAUnit: fhir.Coding;
        readonly ElisaQuoteUMilliliter: fhir.Coding;
        readonly ElisaIndex: fhir.Coding;
        readonly ElisaValue: fhir.Coding;
        readonly ErythrocytePerMicroliter: fhir.Coding;
        readonly EIAValue: fhir.Coding;
        readonly Events: fhir.Coding;
        readonly FluorescentIntensityUnit: fhir.Coding;
        readonly FluorescenceIntensityQuoteU: fhir.Coding;
        readonly Fraction: fhir.Coding;
        readonly GPortionPhospholipids: fhir.Coding;
        readonly GAATrinucleotideRepeats: fhir.Coding;
        readonly GenomesPerMilliliter: fhir.Coding;
        readonly GliadinIndexValue: fhir.Coding;
        readonly GlobulesDropsPerHighPowerField: fhir.Coding;
        readonly IgGAntiphosphatidylserineUnit: fhir.Coding;
        readonly InfluenzaHemagglutinationTiter: fhir.Coding;
        readonly HaTiter: fhir.Coding;
        readonly ImmunofluorescenceAssayIndex: fhir.Coding;
        readonly ImmunofluorescenceAssayTiter: fhir.Coding;
        readonly IfaIndex: fhir.Coding;
        readonly IfaTiter: fhir.Coding;
        readonly IgAAntiphosphatidyleserineQuoteU: fhir.Coding;
        readonly IgAPhospholipidQuoteU: fhir.Coding;
        readonly IgGAntiphosphatidyleserineQuoteU: fhir.Coding;
        readonly IgGIndex: fhir.Coding;
        readonly IgMAntiphosphatidyleserineQuoteU: fhir.Coding;
        readonly IgMIndex: fhir.Coding;
        readonly ImmuneComplexUnit: fhir.Coding;
        readonly ImmuneStatusRatio: fhir.Coding;
        readonly Immunity: fhir.Coding;
        readonly IndexValue: fhir.Coding;
        readonly IndexVal: fhir.Coding;
        readonly Index: fhir.Coding;
        readonly IndexValueIndexValue: fhir.Coding;
        readonly InhaledTobaccoUseAmountYears: fhir.Coding;
        readonly InhaledTobaccoUsePacksDay: fhir.Coding;
        readonly INRQuoteUnit: fhir.Coding;
        readonly InternationalNormalizedRatio: fhir.Coding;
        readonly ImmuneStatusRatioISR: fhir.Coding;
        readonly JuvenileDiabetesFoundationUnit: fhir.Coding;
        readonly JuvenileDiabetesFoundationUnitPerLiter: fhir.Coding;
        readonly JuvenileDiabetesFoundQuoteU: fhir.Coding;
        readonly KaolinClottingTime: fhir.Coding;
        readonly KronusUnitPerLiter: fhir.Coding;
        readonly KronusUnitPerMilliliter: fhir.Coding;
        readonly LgCopiesMilliliter: fhir.Coding;
        readonly LogBase10CopiesPerMilliliter: fhir.Coding;
        readonly LogBase10CopiesPerMilliliterLogCopiesML: fhir.Coding;
        readonly LogBase10InternationalUnit: fhir.Coding;
        readonly LogBase10InternationalUnitPerMilliliter: fhir.Coding;
        readonly LogBase10InternationalUnitPerMilliliterLogIUML: fhir.Coding;
        readonly LogBase10: fhir.Coding;
        readonly LymeIndexValue: fhir.Coding;
        readonly LymeIndexValueLymeIndexValue: fhir.Coding;
        readonly MPortionPhospholipids: fhir.Coding;
        readonly MOM: fhir.Coding;
        readonly MultipleOfTheMedian: fhir.Coding;
        readonly Markers: fhir.Coding;
        readonly Minidrp: fhir.Coding;
        readonly MoleculePlatelet: fhir.Coding;
        readonly IgMAntiphosphatidylserineUnit: fhir.Coding;
        readonly IgMAntiphosphatidylserineUnitPerMilliliter: fhir.Coding;
        readonly MultOfMean: fhir.Coding;
        readonly NonspecificOunce: fhir.Coding;
        readonly Number: fhir.Coding;
        readonly OpticalDensityUnit: fhir.Coding;
        readonly OnceDay: fhir.Coding;
        readonly OpticalDensity: fhir.Coding;
        readonly OpticalDensityIndex: fhir.Coding;
        readonly OpticalDensityRatio: fhir.Coding;
        readonly P2Y12ReactionUnits: fhir.Coding;
        readonly Package: fhir.Coding;
        readonly PacksDay: fhir.Coding;
        readonly PackYears: fhir.Coding;
        readonly Patch: fhir.Coding;
        readonly Percentile: fhir.Coding;
        readonly Pill: fhir.Coding;
        readonly PouchesWeek: fhir.Coding;
        readonly RadioactiveT3UptakeRatio: fhir.Coding;
        readonly Ratio: fhir.Coding;
        readonly RedBloodCellPerMicroliter: fhir.Coding;
        readonly RecTiter: fhir.Coding;
        readonly RelativeQuoteU: fhir.Coding;
        readonly RelativeViscosity: fhir.Coding;
        readonly RPIQuoteU: fhir.Coding;
        readonly RubellaVirus: fhir.Coding;
        readonly SatIndex: fhir.Coding;
        readonly Scoop: fhir.Coding;
        readonly ScoreOf: fhir.Coding;
        readonly Shift: fhir.Coding;
        readonly SpermatozoaPerMilliliter: fhir.Coding;
        readonly Spray: fhir.Coding;
        readonly StandardDeviation: fhir.Coding;
        readonly StandardIgAQuoteU: fhir.Coding;
        readonly StandardIgGQuoteU: fhir.Coding;
        readonly StandardIgMQuoteU: fhir.Coding;
        readonly StdDeviationQuoteU: fhir.Coding;
        readonly StimulatingIndex: fhir.Coding;
        readonly StreptozymeQuoteU: fhir.Coding;
        readonly ThyroxinUptakeQuoteU: fhir.Coding;
        readonly TIBCQuoteU: fhir.Coding;
        readonly TimesWeek: fhir.Coding;
        readonly TineQuoteU: fhir.Coding;
        readonly Titer: fhir.Coding;
        readonly ToxoplasmaIndexValue: fhir.Coding;
        readonly Vial: fhir.Coding;
        readonly VolumeVvolume: fhir.Coding;
        readonly WeeksDays: fhir.Coding;
        readonly WhiteBloodCell: fhir.Coding;
        readonly Per12AsteriskHour: fhir.Coding;
        readonly PerArbitraryUnit: fhir.Coding;
        readonly PerHighPowerField: fhir.Coding;
        readonly PerInternationalUnit: fhir.Coding;
        readonly PerLowPowerField: fhir.Coding;
        readonly PerEntity: fhir.Coding;
        readonly PerOif: fhir.Coding;
        readonly PerSpecimen: fhir.Coding;
        readonly PerTot: fhir.Coding;
        readonly PerTenGiga: fhir.Coding;
        readonly PerTrillion: fhir.Coding;
        readonly PerTrillionRedBloodCells: fhir.Coding;
        readonly PerMillion: fhir.Coding;
        readonly PerBillion: fhir.Coding;
        readonly Per100: fhir.Coding;
        readonly Per100Cells: fhir.Coding;
        readonly Per100Neutrophils: fhir.Coding;
        readonly Per100Spermatozoa: fhir.Coding;
        readonly Per100WBC: fhir.Coding;
        readonly Per100WBCPer100WBCs: fhir.Coding;
        readonly PerYear: fhir.Coding;
        readonly PerCentimeterOfWater: fhir.Coding;
        readonly PerDay: fhir.Coding;
        readonly PerDeciliter: fhir.Coding;
        readonly PerGram: fhir.Coding;
        readonly PerGramCreat: fhir.Coding;
        readonly PerGramHgb: fhir.Coding;
        readonly PerGramTotQuoteNit: fhir.Coding;
        readonly PerGramTotQuoteProt: fhir.Coding;
        readonly PerGramWetQuoteTis: fhir.Coding;
        readonly PerHour: fhir.Coding;
        readonly PerKilogram: fhir.Coding;
        readonly PerKilogramBodyWt: fhir.Coding;
        readonly PerLiter: fhir.Coding;
        readonly PerSquareMeter: fhir.Coding;
        readonly PerMilligram: fhir.Coding;
        readonly PerMinute: fhir.Coding;
        readonly PerMilliliter: fhir.Coding;
        readonly PerCubicMillimeter: fhir.Coding;
        readonly PerMillimole: fhir.Coding;
        readonly PerMonth: fhir.Coding;
        readonly PerSecond: fhir.Coding;
        readonly PerEnzymeUnit: fhir.Coding;
        readonly PerMicrogram: fhir.Coding;
        readonly PerMicroliter: fhir.Coding;
        readonly PerWeek: fhir.Coding;
        readonly Percent: fhir.Coding;
        readonly Percent0to3Hours: fhir.Coding;
        readonly PercentAbnormal: fhir.Coding;
        readonly PercentActivity: fhir.Coding;
        readonly PercentBasalActivity: fhir.Coding;
        readonly PercentBinding: fhir.Coding;
        readonly PercentBlockade: fhir.Coding;
        readonly PercentCarboxyhemoglobin: fhir.Coding;
        readonly PercentConversion: fhir.Coding;
        readonly PercentCound: fhir.Coding;
        readonly PercentEosSeen: fhir.Coding;
        readonly PercentExcretion: fhir.Coding;
        readonly PercentFat: fhir.Coding;
        readonly PercentFetalErythrocytes: fhir.Coding;
        readonly PercentHemoglobin: fhir.Coding;
        readonly PercentHemoglobinA1C: fhir.Coding;
        readonly PercentHemoglobinSaturation: fhir.Coding;
        readonly PercentHemolysis: fhir.Coding;
        readonly PercentHumanResponse: fhir.Coding;
        readonly PercentIndex: fhir.Coding;
        readonly PercentInhibition: fhir.Coding;
        readonly PercentLive: fhir.Coding;
        readonly PercentNegativeControl: fhir.Coding;
        readonly PercentNormal: fhir.Coding;
        readonly PercentNormalControl: fhir.Coding;
        readonly PercentNormalPooledPlasma: fhir.Coding;
        readonly PercentOfAvailable: fhir.Coding;
        readonly PercentOfBacteria: fhir.Coding;
        readonly PercentOfLymphocytes: fhir.Coding;
        readonly PercentOfWBCs: fhir.Coding;
        readonly PercentOxygen: fhir.Coding;
        readonly PercentPositive: fhir.Coding;
        readonly PercentPrecipitate: fhir.Coding;
        readonly PercentReactivity: fhir.Coding;
        readonly PercentResponse: fhir.Coding;
        readonly PercentRisk: fhir.Coding;
        readonly PercentSpermMotility: fhir.Coding;
        readonly PercentTotQuoteCholesterol: fhir.Coding;
        readonly PercentTotQuoteHgb: fhir.Coding;
        readonly PercentTotal: fhir.Coding;
        readonly PercentTotalProtein: fhir.Coding;
        readonly PercentUptake: fhir.Coding;
        readonly VolumePercent: fhir.Coding;
        readonly PercentWeightToWeight: fhir.Coding;
        readonly Percent100WBC: fhir.Coding;
        readonly OnePerDay: fhir.Coding;
        readonly OnePerMinute: fhir.Coding;
        readonly VAL10LiterPerMinutePerSquareMeter: fhir.Coding;
        readonly VAL10LiterPerMinute: fhir.Coding;
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeterAsteriskMeterPower2: fhir.Coding;
        readonly VAL10MicronewtonSecondPerCentimeterToTheFifthPowerPerSquareMeter: fhir.Coding;
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeter: fhir.Coding;
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeterPower2: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower3PolarizationQuoteU: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower6ImmunofluorescenceQuoteU: fhir.Coding;
        readonly TrillionPerLiter: fhir.Coding;
        readonly Thousand: fhir.Coding;
        readonly ThousandRedBloodCells: fhir.Coding;
        readonly ThousandPerAsteriskUnit: fhir.Coding;
        readonly ThousandCopiesPerMilliLiter: fhir.Coding;
        readonly ThousandPerLiter: fhir.Coding;
        readonly ThousandPerMilliLiter: fhir.Coding;
        readonly ThousandsPerMicroLiter: fhir.Coding;
        readonly VAL10ThousandPerMicroliter: fhir.Coding;
        readonly OneHundredThousand: fhir.Coding;
        readonly Million: fhir.Coding;
        readonly MillionInternationalUnit: fhir.Coding;
        readonly MillionEquivalentsPerMilliLiter: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower6AsteriskUnit: fhir.Coding;
        readonly MillionPerSpecimen: fhir.Coding;
        readonly MillionPerKilogram: fhir.Coding;
        readonly MillionPerLiter: fhir.Coding;
        readonly MillionPerMilliliter: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower6MillimeterPower3: fhir.Coding;
        readonly MillionPerMicroliter: fhir.Coding;
        readonly TenToEighth: fhir.Coding;
        readonly BillionPerLiter: fhir.Coding;
        readonly BillionPerMilliliter: fhir.Coding;
        readonly BillionPerMicroliter: fhir.Coding;
        readonly VAL24Hour: fhir.Coding;
        readonly Year: fhir.Coding;
        readonly Ampere: fhir.Coding;
        readonly AmpereMeter: fhir.Coding;
        readonly AttogramPerCell: fhir.Coding;
        readonly StandardAtmosphere: fhir.Coding;
        readonly TechnicalAtmosphere: fhir.Coding;
        readonly Bar: fhir.Coding;
        readonly Becquerel: fhir.Coding;
        readonly Calorie: fhir.Coding;
        readonly DegreeCelsius: fhir.Coding;
        readonly Centigram: fhir.Coding;
        readonly Centiliter: fhir.Coding;
        readonly Centimeter: fhir.Coding;
        readonly CentimeterOfWater: fhir.Coding;
        readonly CentimeterOfWaterColumnSecondAsteriskMeter: fhir.Coding;
        readonly CentimeterOfWaterPerLiterPerSecond: fhir.Coding;
        readonly CentimeterOfWaterPerSecondPerMeter: fhir.Coding;
        readonly CentimeterOfMercury: fhir.Coding;
        readonly SquareCentimeter: fhir.Coding;
        readonly SquareCentimeterPerSecond: fhir.Coding;
        readonly CubicCentimeter: fhir.Coding;
        readonly CentiPoise: fhir.Coding;
        readonly CentiStokes: fhir.Coding;
        readonly Day: fhir.Coding;
        readonly DekaliterPerMinute: fhir.Coding;
        readonly DekaliterPerMinutePerSquareMeter: fhir.Coding;
        readonly Decibel: fhir.Coding;
        readonly Degree: fhir.Coding;
        readonly DegreePerSecond: fhir.Coding;
        readonly Decigram: fhir.Coding;
        readonly Deciliter: fhir.Coding;
        readonly Decimeter: fhir.Coding;
        readonly SquareDecimeterPerSquareSecond: fhir.Coding;
        readonly DyneSecondPerCentimeterPerSquareMeter: fhir.Coding;
        readonly DyneSecondPerCentimeter: fhir.Coding;
        readonly Equivalents: fhir.Coding;
        readonly EquivalentsLiter: fhir.Coding;
        readonly EquivalentsMilliliter: fhir.Coding;
        readonly EquivalentsMillimole: fhir.Coding;
        readonly EquivalentsMicromole: fhir.Coding;
        readonly Erg: fhir.Coding;
        readonly Electronvolt: fhir.Coding;
        readonly Farad: fhir.Coding;
        readonly Femtogram: fhir.Coding;
        readonly Femtoliter: fhir.Coding;
        readonly FemtoliterNanoliter: fhir.Coding;
        readonly Femtometer: fhir.Coding;
        readonly Femtomole: fhir.Coding;
        readonly FemtomolePerGram: fhir.Coding;
        readonly FemtomolePerLiter: fhir.Coding;
        readonly FemtomoleMilligram: fhir.Coding;
        readonly FemtomolePerMilligramOfCytosolProtein: fhir.Coding;
        readonly FemtomolePerMilligramOfProtein: fhir.Coding;
        readonly FemtomoleMilliliter: fhir.Coding;
        readonly Gram: fhir.Coding;
        readonly GramAsteriskMeter: fhir.Coding;
        readonly GramAsteriskMeterHbAsteriskMeterPower2: fhir.Coding;
        readonly GramMeterPerHeartBeat: fhir.Coding;
        readonly GramAsteriskMeterHb: fhir.Coding;
        readonly GramOfCreatinine: fhir.Coding;
        readonly GramOfHemoglobin: fhir.Coding;
        readonly GramOfTotalNitrogen: fhir.Coding;
        readonly GramOfTotalProtein: fhir.Coding;
        readonly GramOfWetTissue: fhir.Coding;
        readonly GramPer100Gram: fhir.Coding;
        readonly GramPer12Hour: fhir.Coding;
        readonly GramPer24Hour: fhir.Coding;
        readonly GramPer3Days: fhir.Coding;
        readonly GramPer4Hour: fhir.Coding;
        readonly GramPer48Hour: fhir.Coding;
        readonly GramPer5Hour: fhir.Coding;
        readonly GramPer6Hour: fhir.Coding;
        readonly GramPer72Hour: fhir.Coding;
        readonly Gram8AsteriskHour: fhir.Coding;
        readonly GramPer8HourShift: fhir.Coding;
        readonly Gram8AsteriskKilogramAsteriskHour: fhir.Coding;
        readonly GramKilogramAsteriskHour: fhir.Coding;
        readonly GramKilogramAsteriskMinute: fhir.Coding;
        readonly GramPerSpecimen: fhir.Coding;
        readonly GramPerTotalOutput: fhir.Coding;
        readonly GramPerTotalWeight: fhir.Coding;
        readonly GramTotalWeight: fhir.Coding;
        readonly GramPerCubicCentimeter: fhir.Coding;
        readonly GramPerDay: fhir.Coding;
        readonly GramPerDeciliter: fhir.Coding;
        readonly GramPerGram: fhir.Coding;
        readonly GramGramCre: fhir.Coding;
        readonly GramGramCreat: fhir.Coding;
        readonly GramPerGramOfGlobulin: fhir.Coding;
        readonly GramPerGramOfTissue: fhir.Coding;
        readonly GramPerHour: fhir.Coding;
        readonly GramPerHourPerSquareMeter: fhir.Coding;
        readonly GramPerKilogram: fhir.Coding;
        readonly GramPerKilogramPer8Hour: fhir.Coding;
        readonly GramPerKilogramPer8HourShift: fhir.Coding;
        readonly GramPerKilogramPerDay: fhir.Coding;
        readonly GramPerKilogramPerHour: fhir.Coding;
        readonly GramPerKilogramPerMinute: fhir.Coding;
        readonly GramPerLiter: fhir.Coding;
        readonly GramsPerSquareMeter: fhir.Coding;
        readonly GramPerMilligram: fhir.Coding;
        readonly GramPerMinute: fhir.Coding;
        readonly GramPerMilliliter: fhir.Coding;
        readonly GramPerMillimole: fhir.Coding;
        readonly GramMillimoleCreat: fhir.Coding;
        readonly GramPerMole: fhir.Coding;
        readonly GramPerMoleOfCreatinine: fhir.Coding;
        readonly GigaBecquerel: fhir.Coding;
        readonly Gray: fhir.Coding;
        readonly Hour: fhir.Coding;
        readonly Henry: fhir.Coding;
        readonly Hectoliter: fhir.Coding;
        readonly Hertz: fhir.Coding;
        readonly Joule: fhir.Coding;
        readonly JoulePerLiter: fhir.Coding;
        readonly Kelvin: fhir.Coding;
        readonly KiloInternationalUnitPerLiter: fhir.Coding;
        readonly KiloInternationalUnitPerMilliliter: fhir.Coding;
        readonly KelvinWatt: fhir.Coding;
        readonly Katal: fhir.Coding;
        readonly KatalKilogram: fhir.Coding;
        readonly KatalLiter: fhir.Coding;
        readonly KiloBecquerel: fhir.Coding;
        readonly Kilocalorie: fhir.Coding;
        readonly Kilocalorie8AsteriskHour: fhir.Coding;
        readonly KilocaloriePerOunceUSAndBritish: fhir.Coding;
        readonly KilocaloriePerDay: fhir.Coding;
        readonly KilocaloriePerHour: fhir.Coding;
        readonly KilocaloriePerKilogramPer24Hour: fhir.Coding;
        readonly Kilogram: fhir.Coding;
        readonly KilogramMeterPerSecond: fhir.Coding;
        readonly KilogramPerSecondPerSquareMeter: fhir.Coding;
        readonly KilogramPerHour: fhir.Coding;
        readonly KilogramPerLiter: fhir.Coding;
        readonly KilogramMeterPower2: fhir.Coding;
        readonly KilogramMeterPower3: fhir.Coding;
        readonly KilogramMinute: fhir.Coding;
        readonly KilogramPerMole: fhir.Coding;
        readonly KilogramSecond: fhir.Coding;
        readonly Kiloliter: fhir.Coding;
        readonly Kilometer: fhir.Coding;
        readonly KiloPascal: fhir.Coding;
        readonly Kilosecond: fhir.Coding;
        readonly KiloEnzymeUnit: fhir.Coding;
        readonly KiloenzymeUnitPerGram: fhir.Coding;
        readonly KiloUnitHour: fhir.Coding;
        readonly KiloenzymeUnitPerLiter: fhir.Coding;
        readonly KiloEnzymeUnitPerLiterClass: fhir.Coding;
        readonly KiloEnzymeUnitPerMilliliter: fhir.Coding;
        readonly Liter: fhir.Coding;
        readonly LiterAsteriskSecondPower2Second: fhir.Coding;
        readonly LiterPer24Hour: fhir.Coding;
        readonly LiterPer8Hour: fhir.Coding;
        readonly LiterPerMinutePerSquareMeter: fhir.Coding;
        readonly LiterPerDay: fhir.Coding;
        readonly LiterPerHour: fhir.Coding;
        readonly LiterPerKilogram: fhir.Coding;
        readonly LiterPerLiter: fhir.Coding;
        readonly LiterPerMinute: fhir.Coding;
        readonly LiterSecond: fhir.Coding;
        readonly LiterPerSecondPerSquareSecond: fhir.Coding;
        readonly Lumen: fhir.Coding;
        readonly LumenSquareMeter: fhir.Coding;
        readonly LumenMeterPower2: fhir.Coding;
        readonly Meter: fhir.Coding;
        readonly MilliinternationalUnit: fhir.Coding;
        readonly MilliInternationalUnitPerLiter: fhir.Coding;
        readonly MilliInternationalUnitPerMilliliter: fhir.Coding;
        readonly MeterPerSecond: fhir.Coding;
        readonly MeterPerSquareSecond: fhir.Coding;
        readonly SquareMeter: fhir.Coding;
        readonly SquareMeterPerSecond: fhir.Coding;
        readonly CubicMeterPerSecond: fhir.Coding;
        readonly MilliAmpere: fhir.Coding;
        readonly Millibar: fhir.Coding;
        readonly MillibarSecondPerLiter: fhir.Coding;
        readonly MegaBecquerel: fhir.Coding;
        readonly MilliCurie: fhir.Coding;
        readonly Milliequivalent: fhir.Coding;
        readonly MilliequivalentPer12Hour: fhir.Coding;
        readonly MilliequivalentPer2Hour: fhir.Coding;
        readonly MilliequivalentPer24Hour: fhir.Coding;
        readonly Milliequivalents8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly MilliequivalentPer8Hour: fhir.Coding;
        readonly MilliequivalentsKilogramAsteriskDay: fhir.Coding;
        readonly MilliequivalentsSpecimen: fhir.Coding;
        readonly MilliequivalentPerDay: fhir.Coding;
        readonly MilliequivalentPerDeciliter: fhir.Coding;
        readonly MilliequivalentPerGram: fhir.Coding;
        readonly MilliequivalentsGramCre: fhir.Coding;
        readonly MilliequivalentPerHour: fhir.Coding;
        readonly MilliequivalentPerKilogram: fhir.Coding;
        readonly MilliequivalentPerKilogramPerHour: fhir.Coding;
        readonly MilliequivalentsKilogramMinute: fhir.Coding;
        readonly MilliequivalentPerLiter: fhir.Coding;
        readonly MilliequivalentPerSquareMeter: fhir.Coding;
        readonly MilliequivalentPerMinute: fhir.Coding;
        readonly MilliequivalentPerMilliliter: fhir.Coding;
        readonly Milligram: fhir.Coding;
        readonly MilligramPhenylketonesDeciliter: fhir.Coding;
        readonly MilligramPer10Hour: fhir.Coding;
        readonly MilligramPer12Hour: fhir.Coding;
        readonly MilligramPer18Hour: fhir.Coding;
        readonly MilligramPer2Hour: fhir.Coding;
        readonly MilligramPer24Hour: fhir.Coding;
        readonly MilligramPer72Hour: fhir.Coding;
        readonly Milligram8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly MilligramPer8Hour: fhir.Coding;
        readonly MilligramKilogramAsteriskHour: fhir.Coding;
        readonly MilligramHgbGram: fhir.Coding;
        readonly MilligramSpecimen: fhir.Coding;
        readonly MilligramTotQuoteVolume: fhir.Coding;
        readonly MilligramVolume: fhir.Coding;
        readonly MilligramPerDay: fhir.Coding;
        readonly MilligramDay173AsteriskTheNumberTenForArbitraryPowersPower2AsteriskMeterPower2: fhir.Coding;
        readonly MilligramPerDeciliter: fhir.Coding;
        readonly MilligramPerGram: fhir.Coding;
        readonly MilligramGramCre: fhir.Coding;
        readonly MilligramPerGramOfCreatinine: fhir.Coding;
        readonly MilligramPerHour: fhir.Coding;
        readonly MilligramPerKilogram: fhir.Coding;
        readonly MilligramKilogram24AsteriskHour: fhir.Coding;
        readonly MilligramPerKilogramPerDay: fhir.Coding;
        readonly MilligramPerKilogramPerMinute: fhir.Coding;
        readonly MilligramPerLiter: fhir.Coding;
        readonly MilligramPerSquareMeter: fhir.Coding;
        readonly MilligramPerCubicMeter: fhir.Coding;
        readonly MilligramPerMilligram: fhir.Coding;
        readonly MilligramMilligramCre: fhir.Coding;
        readonly MilligramPerMinute: fhir.Coding;
        readonly MilligramPerMilliliter: fhir.Coding;
        readonly MilligramPerMillimole: fhir.Coding;
        readonly MilligramMillimoleCre: fhir.Coding;
        readonly MilligramPerMillimoleOfCreatinine: fhir.Coding;
        readonly MilligramPerWeek: fhir.Coding;
        readonly Minute: fhir.Coding;
        readonly Milliliter: fhir.Coding;
        readonly MilliliterHQuoteBAsteriskMeterPower2: fhir.Coding;
        readonly MilliliterPer10Hour: fhir.Coding;
        readonly MilliliterPer12Hour: fhir.Coding;
        readonly MilliliterPer2Hour: fhir.Coding;
        readonly MilliliterPer24Hour: fhir.Coding;
        readonly MilliliterPer4Hour: fhir.Coding;
        readonly MilliliterPer72Hour: fhir.Coding;
        readonly MilliliterPer8Hour: fhir.Coding;
        readonly MilliliterKilogramAsteriskMinute: fhir.Coding;
        readonly MilliliterPerSquareInchInternational: fhir.Coding;
        readonly MilliLitersPerHeartbeatSIVolumeUnits: fhir.Coding;
        readonly MilliliterCentimeterOfWaterColumn: fhir.Coding;
        readonly MilliliterPerDay: fhir.Coding;
        readonly MilliliterPerDeciliter: fhir.Coding;
        readonly MilliliterPerHour: fhir.Coding;
        readonly MilliliterPerKilogram: fhir.Coding;
        readonly MilliliterPerKilogramPer8Hour: fhir.Coding;
        readonly MilliliterPerKilogramPerDay: fhir.Coding;
        readonly MilliliterPerKilogramPerHour: fhir.Coding;
        readonly MilliliterPerKilogramPerMinute: fhir.Coding;
        readonly MilliliterPerLiter: fhir.Coding;
        readonly MilliliterPerSquareMeter: fhir.Coding;
        readonly MilliliterPerMillibar: fhir.Coding;
        readonly MilliliterPerMinute: fhir.Coding;
        readonly MilliliterMinute173AsteriskTheNumberTenForArbitraryPowersPower2AsteriskMeterPower2: fhir.Coding;
        readonly MilliliterPerMinutePer173SquareMeter: fhir.Coding;
        readonly MilliliterPerMinutePerSquareMeter: fhir.Coding;
        readonly MilliliterPerMillimeter: fhir.Coding;
        readonly MilliliterPerSecond: fhir.Coding;
        readonly Millimeter: fhir.Coding;
        readonly MillimeterOfWater: fhir.Coding;
        readonly MillimeterOfMercury: fhir.Coding;
        readonly MillimeterPerHour: fhir.Coding;
        readonly MillimeterPerMinute: fhir.Coding;
        readonly SquareMillimeter: fhir.Coding;
        readonly CubicMillimeter: fhir.Coding;
        readonly Millimole: fhir.Coding;
        readonly MillimolePer12Hour: fhir.Coding;
        readonly MillimolePer18Hour: fhir.Coding;
        readonly MillimolePer2Hour: fhir.Coding;
        readonly MillimolePer24Hour: fhir.Coding;
        readonly MillimolePer6Hour: fhir.Coding;
        readonly Millimole8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly MillimolePer8Hour: fhir.Coding;
        readonly MillimoleTotQuoteVolume: fhir.Coding;
        readonly MillimolePerDay: fhir.Coding;
        readonly MillimolePerDeciliter: fhir.Coding;
        readonly MillimolePerGram: fhir.Coding;
        readonly MillimolePerGramOfCreatinine: fhir.Coding;
        readonly MillimolePerGramOfHemoglobin: fhir.Coding;
        readonly MillimolePerHour: fhir.Coding;
        readonly MillimolePerHourPerMilligramOfHemoglobin: fhir.Coding;
        readonly MillimolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly MillimolePerKilogram: fhir.Coding;
        readonly MillimolePerKilogramOfWater: fhir.Coding;
        readonly MillimolePerKilogramPerDay: fhir.Coding;
        readonly MillimolePerKilogramPerHour: fhir.Coding;
        readonly MillimolePerKilogramPerMinute: fhir.Coding;
        readonly MillimolePerLiter: fhir.Coding;
        readonly MillimolePerLiterPerSecond: fhir.Coding;
        readonly MillimoleMeter: fhir.Coding;
        readonly MillimolePerSquareMeter: fhir.Coding;
        readonly MillimolePerMinute: fhir.Coding;
        readonly MillimolePerMillimole: fhir.Coding;
        readonly MillimolePerMole: fhir.Coding;
        readonly MillimolePerMoleOfCreatinine: fhir.Coding;
        readonly MillimolePerSecondPerLiter: fhir.Coding;
        readonly Month: fhir.Coding;
        readonly Mole: fhir.Coding;
        readonly MolePerDay: fhir.Coding;
        readonly MolePerKilogram: fhir.Coding;
        readonly MolePerKilogramPerSecond: fhir.Coding;
        readonly MolePerLiter: fhir.Coding;
        readonly MolePerCubicMeter: fhir.Coding;
        readonly MolePerMilliliter: fhir.Coding;
        readonly MolePerMole: fhir.Coding;
        readonly MoleMoleCreat: fhir.Coding;
        readonly MolePerSecond: fhir.Coding;
        readonly Milliosmole: fhir.Coding;
        readonly MilliosmolePerKilogram: fhir.Coding;
        readonly MilliosmolePerLiter: fhir.Coding;
        readonly Millipascal: fhir.Coding;
        readonly Millisecond: fhir.Coding;
        readonly Megasecond: fhir.Coding;
        readonly MillienzymeUnit: fhir.Coding;
        readonly MillienzymeUnitPerGram: fhir.Coding;
        readonly MilliEnzymeUnitPerGramOfHemoglobin: fhir.Coding;
        readonly MilliUnitGramHgb: fhir.Coding;
        readonly MilliEnzymeUnitPerGramOfProtein: fhir.Coding;
        readonly MillienzymeUnitPerLiter: fhir.Coding;
        readonly MilliUnitMilligram: fhir.Coding;
        readonly MilliUnitMilligramCre: fhir.Coding;
        readonly MilliUnitMinute: fhir.Coding;
        readonly MillienzymeUnitPerMilliliter: fhir.Coding;
        readonly MillienzymeUnitPerMilliliterPerMinute: fhir.Coding;
        readonly MilliEnzymeUnitPerMillimoleOfCreatinine: fhir.Coding;
        readonly MillienzymeUnitPerMillimoleOfCreatinine: fhir.Coding;
        readonly MillienzymeUnitPerMillimoleOfRedBloodCells: fhir.Coding;
        readonly MilliVolt: fhir.Coding;
        readonly Newton: fhir.Coding;
        readonly NewtonCentimeter: fhir.Coding;
        readonly NewtonSecond: fhir.Coding;
        readonly NanoCurie: fhir.Coding;
        readonly Nanogram: fhir.Coding;
        readonly NanogramPer24Hour: fhir.Coding;
        readonly Nanogram8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly NanogramPer8Hour: fhir.Coding;
        readonly NanogramKilogramAsteriskDay: fhir.Coding;
        readonly NanogramKilogramAsteriskHour: fhir.Coding;
        readonly NanogramKilogramAsteriskMinute: fhir.Coding;
        readonly NanogramPerMillion: fhir.Coding;
        readonly NanogramPerDay: fhir.Coding;
        readonly NanogramPerDeciliter: fhir.Coding;
        readonly NanogramDeciliterHour: fhir.Coding;
        readonly NanogramPerGram: fhir.Coding;
        readonly NanogramGramCre: fhir.Coding;
        readonly NanogramPerGramOfCreatinine: fhir.Coding;
        readonly NanogramPerHour: fhir.Coding;
        readonly NanogramPerKilogram: fhir.Coding;
        readonly NanogramPerKilogramPer8Hour: fhir.Coding;
        readonly NanogramPerKilogramPerHour: fhir.Coding;
        readonly NanogramPerKilogramPerMinute: fhir.Coding;
        readonly NanogramPerLiter: fhir.Coding;
        readonly NanogramPerSquareMeter: fhir.Coding;
        readonly NanogramPerMilligram: fhir.Coding;
        readonly NanogramMilligramProtein: fhir.Coding;
        readonly NanogramPerMilligramPerHour: fhir.Coding;
        readonly NanogramPerMinute: fhir.Coding;
        readonly NanogramPerMillliiter: fhir.Coding;
        readonly NanogramMilliliterRbc: fhir.Coding;
        readonly NanogramPerMilliliterPerHour: fhir.Coding;
        readonly NanogramPerSecond: fhir.Coding;
        readonly Nanokatal: fhir.Coding;
        readonly Nanoliter: fhir.Coding;
        readonly Nanometer: fhir.Coding;
        readonly NanometerPerSecondPerLiter: fhir.Coding;
        readonly Nanomole: fhir.Coding;
        readonly NanomolePer24Hour: fhir.Coding;
        readonly NanomolePerDay: fhir.Coding;
        readonly NanomolePerDeciliter: fhir.Coding;
        readonly NanomolePerGram: fhir.Coding;
        readonly NanomoleGramCre: fhir.Coding;
        readonly NanomolePerGramOfCreatinine: fhir.Coding;
        readonly NanomolePerGramOfDryWeight: fhir.Coding;
        readonly NanomolePerHourPerLiter: fhir.Coding;
        readonly NanomolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly NanomolePerHourPerMilliliter: fhir.Coding;
        readonly NanomolePerLiter: fhir.Coding;
        readonly NanomolePerLiterOfRedBloodCells: fhir.Coding;
        readonly NanomolePerLiterPerMillimoleOfCreatinine: fhir.Coding;
        readonly NanomolePerLiterPerSecond: fhir.Coding;
        readonly NanomolePerMeterPerMilligramOfProtein: fhir.Coding;
        readonly NanomolePerMilligram: fhir.Coding;
        readonly NanomolePerMilligramPerHour: fhir.Coding;
        readonly NanomolePerMinutePerMilligramOfHemoglobin: fhir.Coding;
        readonly NanomolePerMinutePerMilligramOfProtein: fhir.Coding;
        readonly NanomolePerMinutePerMilliliter: fhir.Coding;
        readonly NanomolePerMilliliter: fhir.Coding;
        readonly NanomolePerMilliliterPerHour: fhir.Coding;
        readonly NanomolePerMilliliterPerMinute: fhir.Coding;
        readonly NanomolePerMillimole: fhir.Coding;
        readonly NanomoleMillimoleCre: fhir.Coding;
        readonly NanomolePerMillimoleOfCreatinine: fhir.Coding;
        readonly NanomolePerMole: fhir.Coding;
        readonly NanomolePerNanomole: fhir.Coding;
        readonly NanomolePerSecond: fhir.Coding;
        readonly NanomolePerSecondPerLiter: fhir.Coding;
        readonly NanomolePerMicromoleOfCreatinine: fhir.Coding;
        readonly Nanosecond: fhir.Coding;
        readonly Ohm: fhir.Coding;
        readonly OsmolePerKilogram: fhir.Coding;
        readonly OsmolePerLiter: fhir.Coding;
        readonly Pascal: fhir.Coding;
        readonly Picogram: fhir.Coding;
        readonly PicogramPerDeciliter: fhir.Coding;
        readonly PicogramPerLiter: fhir.Coding;
        readonly PicogramPerMilligram: fhir.Coding;
        readonly PicogramPerMilliliter: fhir.Coding;
        readonly PicogramPerMillimeter: fhir.Coding;
        readonly Picokatal: fhir.Coding;
        readonly Picoliter: fhir.Coding;
        readonly Picometer: fhir.Coding;
        readonly Picomole: fhir.Coding;
        readonly PicomolePerDay: fhir.Coding;
        readonly PicomolePerDeciliter: fhir.Coding;
        readonly PicomolePerGram: fhir.Coding;
        readonly PicomolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly PicomolePerHourPerMilliliter: fhir.Coding;
        readonly PicomolePerLiter: fhir.Coding;
        readonly PicomolePerMilligramOfProtein: fhir.Coding;
        readonly PicomolePerMinute: fhir.Coding;
        readonly PicomolePerMinutePerMilligramOfProtein: fhir.Coding;
        readonly PicomolePerMilliliter: fhir.Coding;
        readonly PicomolePerMillimole: fhir.Coding;
        readonly PicomolePerMillimoleOfCreatinine: fhir.Coding;
        readonly PicomolePerMole: fhir.Coding;
        readonly PicomolePerMicromole: fhir.Coding;
        readonly PicomolePerMicromoleOfCreatinine: fhir.Coding;
        readonly Picosecond: fhir.Coding;
        readonly Picotesla: fhir.Coding;
        readonly Second: fhir.Coding;
        readonly Stokes: fhir.Coding;
        readonly Tonne: fhir.Coding;
        readonly EnzymeUnit: fhir.Coding;
        readonly MicroInternationalUnit: fhir.Coding;
        readonly MicrointernationalUnitPerLiter: fhir.Coding;
        readonly MicroInternationalUnitPerMilliliter: fhir.Coding;
        readonly EnzymeUnitPerLiterAt25DegCelsius: fhir.Coding;
        readonly EnzymeUnitPerLiterAt37DegCelsius: fhir.Coding;
        readonly GUnit: fhir.Coding;
        readonly EnzymeUnitPer1Hour: fhir.Coding;
        readonly EnzymeUnitPer10GramOfFeces: fhir.Coding;
        readonly EnzymeUnitPer12Hour: fhir.Coding;
        readonly EnzymeUnitPer18Hour: fhir.Coding;
        readonly EnzymeUnitPer2Hour: fhir.Coding;
        readonly EnzymeUnitPer24Hour: fhir.Coding;
        readonly EnzymeUnitPer10: fhir.Coding;
        readonly EnzymeUnitPer10Billion: fhir.Coding;
        readonly EnzymeUnitPer10BillionCells: fhir.Coding;
        readonly EnzymeUnitPerTrillion: fhir.Coding;
        readonly EnzymeUnitPerTrillionRedBloodCells: fhir.Coding;
        readonly EnzymeUnitPerMillion: fhir.Coding;
        readonly EnzymeUnitPerBillion: fhir.Coding;
        readonly EnzymeUnitPerDay: fhir.Coding;
        readonly EnzymeUnitPerDeciliter: fhir.Coding;
        readonly EnzymeUnitPerGram: fhir.Coding;
        readonly UnitGramCre: fhir.Coding;
        readonly EnzymeUnitPerGramOfCreatinine: fhir.Coding;
        readonly EnzymeUnitPerGramOfHemoglobin: fhir.Coding;
        readonly EnzymeUnitPerGramOfHemoglobinUGHemoglobin: fhir.Coding;
        readonly UnitsPerGramHemoglobin: fhir.Coding;
        readonly EnzymeUnitPerGramOfProtein: fhir.Coding;
        readonly EnzymeUnitPerHour: fhir.Coding;
        readonly EnzymeUnitPerKilogramOfHemoglobin: fhir.Coding;
        readonly EnzymeUnitPerKilogramOfHemoglobinUKgHemoglobin: fhir.Coding;
        readonly UnitKilogramHour: fhir.Coding;
        readonly EnzymeUnitPerLiter: fhir.Coding;
        readonly EnzymeUnitPerMinute: fhir.Coding;
        readonly EnzymeUnitPerMilliliter: fhir.Coding;
        readonly UnitMilliliterRBC: fhir.Coding;
        readonly EnzymeUnitPerMilliliterOfRedBloodCells: fhir.Coding;
        readonly EnzymeUnitPerMillimoleOfCreatinine: fhir.Coding;
        readonly EnzymeUnitPerMole: fhir.Coding;
        readonly EnzymeUnitPerSecond: fhir.Coding;
        readonly EnzymeUnitPerMicromole: fhir.Coding;
        readonly Microequivalents: fhir.Coding;
        readonly MicroequivalentPerLiter: fhir.Coding;
        readonly MicroequivalentPerMilliliter: fhir.Coding;
        readonly Microgram: fhir.Coding;
        readonly MicrogramFibrinogenEquivalentUnitPerMilliliter: fhir.Coding;
        readonly MicrogramT4Deciliter: fhir.Coding;
        readonly MicrogramPer100Gram: fhir.Coding;
        readonly MicrogramPer24Hour: fhir.Coding;
        readonly MicrogramPer8Hour: fhir.Coding;
        readonly MicrogramKilogramAsteriskDay: fhir.Coding;
        readonly MicrogramKilogramAsteriskHour: fhir.Coding;
        readonly MicrogramPerSquareFootInternational: fhir.Coding;
        readonly MicrogramPerSpecimen: fhir.Coding;
        readonly MicrogramSpecimen: fhir.Coding;
        readonly MicroGramsPerTotalVolume: fhir.Coding;
        readonly MicrogramPerDay: fhir.Coding;
        readonly MicrogramPerDeciliter: fhir.Coding;
        readonly MicrogramDeciliterRbc: fhir.Coding;
        readonly MicrogramPerDeciliterOfRedBloodCells: fhir.Coding;
        readonly MicrogramPerGram: fhir.Coding;
        readonly MicrogramGramCre: fhir.Coding;
        readonly MicrogramPerGramOfCreatinine: fhir.Coding;
        readonly MicrogramPerGramOfDryTissue: fhir.Coding;
        readonly MicrogramPerGramOfDryWeight: fhir.Coding;
        readonly MicrogramGramDryWeight: fhir.Coding;
        readonly MicrogramPerGramOfFeces: fhir.Coding;
        readonly MicrogramPerGramOfHair: fhir.Coding;
        readonly MicrogramPerGramOfHemoglobin: fhir.Coding;
        readonly MicrogramGramHgb: fhir.Coding;
        readonly MicrogramPerGramOfTissue: fhir.Coding;
        readonly MicrogramGramTissue: fhir.Coding;
        readonly MicrogramPerHour: fhir.Coding;
        readonly MicrogramPerKilogram: fhir.Coding;
        readonly MicrogramPerKilogramPer8Hour: fhir.Coding;
        readonly MicrogramPerKilogramPerDay: fhir.Coding;
        readonly MicrogramPerKilogramPerHour: fhir.Coding;
        readonly MicrogramPerKilogramPerMinute: fhir.Coding;
        readonly MicrogramPerLiter: fhir.Coding;
        readonly MicrogramLiterDDU: fhir.Coding;
        readonly MicrogramPerLiterOfRedBloodCells: fhir.Coding;
        readonly MicrogramPerLiterPer24Hour: fhir.Coding;
        readonly MicrogramPerSquareMeter: fhir.Coding;
        readonly MicrogramPerCubicMeter: fhir.Coding;
        readonly MicrogramPerMilligram: fhir.Coding;
        readonly MicrogramMilligramCre: fhir.Coding;
        readonly MicrogramPerMilligramOfCreatinine: fhir.Coding;
        readonly MicrogramPerMinute: fhir.Coding;
        readonly MicrogramPerMilliliter: fhir.Coding;
        readonly MicrogramPerMilliliterClass: fhir.Coding;
        readonly MicrogramPerMilliliterEquivalent: fhir.Coding;
        readonly MicrogramMilliliterFEU: fhir.Coding;
        readonly MicrogramPerMillimole: fhir.Coding;
        readonly MicrogramPerMillimoleOfCreatinine: fhir.Coding;
        readonly MicrogramPerNanogram: fhir.Coding;
        readonly Microkatal: fhir.Coding;
        readonly Microliter: fhir.Coding;
        readonly MicroliterPer2Hour: fhir.Coding;
        readonly MicroliterPerHour: fhir.Coding;
        readonly Micrometer: fhir.Coding;
        readonly MicrometerPerSecond: fhir.Coding;
        readonly Micromole: fhir.Coding;
        readonly MicromoleBoneCollagenEquivalentPerMole: fhir.Coding;
        readonly MicromolePer2Hour: fhir.Coding;
        readonly MicromolePer24Hour: fhir.Coding;
        readonly MicromolePer8Hour: fhir.Coding;
        readonly MicromolePerDay: fhir.Coding;
        readonly MicromolePerDeciliter: fhir.Coding;
        readonly MicromolePerDeciliterOfGlomerularFiltrate: fhir.Coding;
        readonly MicromolePerGram: fhir.Coding;
        readonly MicromoleGramCre: fhir.Coding;
        readonly MicromolePerGramOfCreatinine: fhir.Coding;
        readonly MicromolePerGramOfHemoglobin: fhir.Coding;
        readonly MicromolePerGramOfHemoglobinUmolGHemoglobin: fhir.Coding;
        readonly MicromoleGramHgb: fhir.Coding;
        readonly MicromolePerHour: fhir.Coding;
        readonly MicromoleHourGram: fhir.Coding;
        readonly MicromolePerHourPerLiter: fhir.Coding;
        readonly MicromolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly MicromolePerKilogram: fhir.Coding;
        readonly MicromolePerKilogramOfFeces: fhir.Coding;
        readonly MicromolePerLiter: fhir.Coding;
        readonly MicromolePerLiterOfRedBloodCells: fhir.Coding;
        readonly MicromolePerLiterOfRedBloodCellsUmolLRBCs: fhir.Coding;
        readonly MicromolePerLiterPerHour: fhir.Coding;
        readonly MicromoleMeter: fhir.Coding;
        readonly MicromolePerMilligram: fhir.Coding;
        readonly MicromoleMilligramCre: fhir.Coding;
        readonly MicromolePerMilligramOfCreatinine: fhir.Coding;
        readonly MicromolePerMinute: fhir.Coding;
        readonly MicromolePerMinutePerGram: fhir.Coding;
        readonly MicromolePerMinutePerGramOfMucosa: fhir.Coding;
        readonly MicromoleMinuteGramProt: fhir.Coding;
        readonly MicromolePerMinutePerGramOfProtein: fhir.Coding;
        readonly MicromolePerMinutePerLiter: fhir.Coding;
        readonly MicromolePerMilliliter: fhir.Coding;
        readonly MicromolePerMilliliterPerMinute: fhir.Coding;
        readonly MicromolePerMillimole: fhir.Coding;
        readonly MicromolePerMillimoleOfCreatinine: fhir.Coding;
        readonly MicromolePerMole: fhir.Coding;
        readonly MicromoleMoleCre: fhir.Coding;
        readonly MicromolePerMoleOfCreatinine: fhir.Coding;
        readonly MicromolePerMoleOfHemoglobin: fhir.Coding;
        readonly MicromolePerMicromole: fhir.Coding;
        readonly MicromolePerMicromoleOfCreatinine: fhir.Coding;
        readonly MicroOhm: fhir.Coding;
        readonly Microsecond: fhir.Coding;
        readonly MicroUnit: fhir.Coding;
        readonly MicroEnzymeUnitPerGram: fhir.Coding;
        readonly MicroEnzymeUnitPerLiter: fhir.Coding;
        readonly MicroEnzymeUnitPerMilliliter: fhir.Coding;
        readonly Microvolt: fhir.Coding;
        readonly Volt: fhir.Coding;
        readonly Week: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for unit (ObservationDefinition.quantitativeDetails.unit)
     */
    static get unitExtensibleCodings(): {
        readonly IgAAnticardiolipinUnit: fhir.Coding;
        readonly IgAAnticardiolipinUnitPerMilliliter: fhir.Coding;
        readonly ArbitraryUnit: fhir.Coding;
        readonly ArbitaryUnitLiter: fhir.Coding;
        readonly ArbitraryUnitPerMilliliter: fhir.Coding;
        readonly AllergyUnit: fhir.Coding;
        readonly BioequivalentAllergenUnit: fhir.Coding;
        readonly BodanskyUnit: fhir.Coding;
        readonly BethesdaUnit: fhir.Coding;
        readonly ColonyFormingUnit: fhir.Coding;
        readonly ColonyFormingUnitPerLiter: fhir.Coding;
        readonly ColonyFormingUnitPerMilliliter: fhir.Coding;
        readonly FrenchCatheterGauge: fhir.Coding;
        readonly CubicInch: fhir.Coding;
        readonly Cup: fhir.Coding;
        readonly DegreeFahrenheit: fhir.Coding;
        readonly DramUSAndBritish: fhir.Coding;
        readonly Drop: fhir.Coding;
        readonly DropHPF: fhir.Coding;
        readonly DropHour: fhir.Coding;
        readonly DropMinute: fhir.Coding;
        /**
         * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
         */
        readonly DropMilliliter: fhir.Coding; /**
         * Factor for converting value expressed with SI unit to value expressed with customary unit.
         */
        readonly DropSecond: fhir.Coding;
        /**
         * Number of digits after decimal separator when the results of such observations are of type Quantity.
         */
        readonly FluidDram: fhir.Coding;
        readonly FluidOunce: fhir.Coding;
        readonly FluidOunceFozUs: fhir.Coding;
        readonly Feet: fhir.Coding;
        readonly Fathom: fhir.Coding;
        readonly Gallon: fhir.Coding;
        readonly QueenAnneQuoteSWineGallon: fhir.Coding; /**
         * Extensible-bound Value Set for unit (ObservationDefinition.quantitativeDetails.unit)
         */
        readonly IgGAnticardiolipinUnit: fhir.Coding; /**
         * Function to perform basic model validation (e.g., check if required elements are present).
         */
        readonly IgGAnticardiolipinUnitPerMilliliterAsteriskAsterisk: fhir.Coding;
        readonly Grain: fhir.Coding;
        readonly HighPowerField: fhir.Coding;
        readonly InchInternationalOfWater: fhir.Coding;
        readonly InchInternational: fhir.Coding;
        readonly InternationalUnit: fhir.Coding;
        readonly InternationalUnitIU: fhir.Coding;
        readonly InternationalUnitPer2Hour: fhir.Coding;
        readonly InternationalUnitPer24Hour: fhir.Coding;
        readonly InternationalUnitPerBillionRedBloodCells: fhir.Coding;
        readonly InternationalUnitPerDay: fhir.Coding;
        readonly InternationalUnitPerDeciliter: fhir.Coding;
        readonly InternationalUnitPerGram: fhir.Coding;
        readonly InternationalUnitPerGramOfHemoglobin: fhir.Coding;
        readonly InternationalUnitGramHgb: fhir.Coding;
        readonly InternationalUnitPerHour: fhir.Coding;
        readonly InternationalUnitPerKilogram: fhir.Coding;
        readonly InternationalUnitPerKilogramPerDay: fhir.Coding;
        readonly InternationalUnitPerLiter: fhir.Coding;
        readonly InternationalUnitPerLiterAt37DegreesCelsius: fhir.Coding;
        readonly InternationalUnitPerMilligramOfCreatinine: fhir.Coding;
        readonly InternationalUnitPerMinute: fhir.Coding;
        readonly InternationalUnitPerMilliliter: fhir.Coding;
        readonly KingArmstrongUnit: fhir.Coding;
        readonly PoundUSAndBritish: fhir.Coding;
        readonly LowPowerField: fhir.Coding;
        readonly MacLaganUnit: fhir.Coding;
        readonly StatuteMile: fhir.Coding;
        readonly Mile: fhir.Coding;
        readonly Minim: fhir.Coding;
        readonly IgMAnticardiolipinUnit: fhir.Coding;
        readonly IgMAnticardiolipinUnitPerMilliliterAsteriskAsterisk: fhir.Coding;
        readonly NauticalMile: fhir.Coding;
        readonly OunceUSAndBritish: fhir.Coding;
        readonly Ounce: fhir.Coding;
        readonly PH: fhir.Coding;
        readonly TheNumberPiAsteriskRadianMinute: fhir.Coding;
        readonly PartPerBillion: fhir.Coding;
        readonly PartPerMillion: fhir.Coding;
        readonly PartPerMillionInVolumePerVolume: fhir.Coding; /**
         * Describes what will be observed. Sometimes this is called the observation "name".
         */
        readonly PartsPerThousand: fhir.Coding;
        readonly PartPerTrillion: fhir.Coding;
        readonly PoundPerSquareInch: fhir.Coding;
        readonly Pint: fhir.Coding;
        readonly Quart: fhir.Coding;
        readonly QuartQtUs: fhir.Coding;
        readonly SquareFootInternational: fhir.Coding;
        readonly SquareInchInternational: fhir.Coding;
        readonly ShortTonUSTon: fhir.Coding;
        readonly SquareYard: fhir.Coding;
        readonly TuberculinUnit: fhir.Coding;
        readonly TablespoonUS: fhir.Coding;
        readonly ToddUnit: fhir.Coding;
        readonly Teaspoon: fhir.Coding;
        readonly Yard: fhir.Coding;
        readonly NumberOfCalculi: fhir.Coding;
        readonly NumberOfDonorInformativeMarkers: fhir.Coding;
        readonly NumberOfFetuses: fhir.Coding;
        readonly NumberOfInformativeMarkers: fhir.Coding;
        readonly VALNumber: fhir.Coding;
        readonly VAL2Or3TimesDay: fhir.Coding;
        /**
         * Only used if not implicit in observation code.
         */
        readonly VAL3TimesDay: fhir.Coding;
        readonly VAL4TimesDay: fhir.Coding;
        readonly VAL5TimesDay: fhir.Coding;
        readonly AbsorbanceQuoteU: fhir.Coding;
        readonly AbsorbanceQuoteUMilliliter: fhir.Coding;
        readonly Absorbance: fhir.Coding;
        readonly Activity: fhir.Coding;
        readonly ActivityCoefficient: fhir.Coding;
        readonly AHFQuoteU: fhir.Coding;
        readonly AntibodyResponseQuoteU: fhir.Coding;
        readonly Applicator: fhir.Coding;
        readonly IgAAntiphosphatidylserineUnit: fhir.Coding;
        readonly AspirinResponseUnit: fhir.Coding;
        readonly AspirinReactionQuoteU: fhir.Coding;
        readonly Bead: fhir.Coding;
        readonly HeartBeatsPerMinute: fhir.Coding;
        readonly BeatsMinute: fhir.Coding;
        readonly BindingIndex: fhir.Coding;
        readonly Bottle: fhir.Coding;
        readonly BowlsDay: fhir.Coding;
        readonly BreathsMinute: fhir.Coding;
        readonly ComplementActivityEnzymeUnit: fhir.Coding;
        readonly CAGTrinucleotideRepeats: fhir.Coding;
        readonly CagRepeat: fhir.Coding;
        readonly Can: fhir.Coding;
        readonly CansWeek: fhir.Coding;
        readonly Capsule: fhir.Coding;
        readonly Cell: fhir.Coding;
        readonly Cells: fhir.Coding;
        readonly CellsPerHighPowerField: fhir.Coding;
        readonly CellsMilliliter: fhir.Coding;
        readonly CellsPerMicroliter: fhir.Coding;
        readonly CfTiter: fhir.Coding;
        readonly Cfu: fhir.Coding;
        readonly CfuMilliliter: fhir.Coding;
        readonly CGGRepeats: fhir.Coding;
        readonly CGG: fhir.Coding;
        readonly ComplementCH100Unit: fhir.Coding;
        readonly ClockTime: fhir.Coding;
        readonly ClockTimeClockTime: fhir.Coding;
        readonly ComplementActivityEnzymeQuoteU: fhir.Coding;
        readonly ComplementCH100QuoteU: fhir.Coding;
        readonly ComplementCH50QuoteU: fhir.Coding;
        readonly Copies: fhir.Coding;
        readonly CopiesPerMilliliter: fhir.Coding;
        readonly CopiesPerMicrogram: fhir.Coding;
        readonly CopiesMicroliter: fhir.Coding;
        readonly Count: fhir.Coding;
        readonly CountCount: fhir.Coding;
        readonly CountsMinute: fhir.Coding;
        readonly CountsPerMinute: fhir.Coding;
        readonly CountsPerMinutePerThousandCells: fhir.Coding;
        readonly Dalton: fhir.Coding;
        readonly DdTiter: fhir.Coding;
        readonly ChangeInDeltaOpticalDensity: fhir.Coding;
        readonly DeltaOpticalDensity: fhir.Coding;
        readonly Dilution: fhir.Coding;
        readonly DilutionDilution: fhir.Coding;
        readonly DisintegrationsMinute: fhir.Coding;
        readonly Dose: fhir.Coding;
        readonly DrinksDay: fhir.Coding;
        readonly Each: fhir.Coding;
        readonly EhrlichUnit: fhir.Coding;
        readonly EhrlichUnitPer2Hour: fhir.Coding;
        readonly EhrlichUnitPer100Gram: fhir.Coding;
        readonly EhrlichUnitPerDay: fhir.Coding;
        readonly EhrilichUnitPerDeciliter: fhir.Coding;
        readonly EhrlichQuoteUMilliliter: fhir.Coding;
        readonly EIAIndex: fhir.Coding;
        readonly EIATiter: fhir.Coding;
        readonly EIAUnit: fhir.Coding;
        readonly EIAUnitPerEnzymeUnit: fhir.Coding;
        readonly EIAIndexEIAIndex: fhir.Coding;
        readonly EIATiterEIATiter: fhir.Coding;
        readonly ELISAUnit: fhir.Coding;
        readonly ElisaQuoteUMilliliter: fhir.Coding;
        readonly ElisaIndex: fhir.Coding;
        readonly ElisaValue: fhir.Coding;
        readonly ErythrocytePerMicroliter: fhir.Coding;
        readonly EIAValue: fhir.Coding;
        readonly Events: fhir.Coding;
        readonly FluorescentIntensityUnit: fhir.Coding;
        readonly FluorescenceIntensityQuoteU: fhir.Coding;
        readonly Fraction: fhir.Coding;
        readonly GPortionPhospholipids: fhir.Coding;
        readonly GAATrinucleotideRepeats: fhir.Coding;
        readonly GenomesPerMilliliter: fhir.Coding;
        readonly GliadinIndexValue: fhir.Coding;
        readonly GlobulesDropsPerHighPowerField: fhir.Coding;
        readonly IgGAntiphosphatidylserineUnit: fhir.Coding;
        readonly InfluenzaHemagglutinationTiter: fhir.Coding;
        readonly HaTiter: fhir.Coding;
        readonly ImmunofluorescenceAssayIndex: fhir.Coding;
        readonly ImmunofluorescenceAssayTiter: fhir.Coding;
        readonly IfaIndex: fhir.Coding;
        readonly IfaTiter: fhir.Coding;
        readonly IgAAntiphosphatidyleserineQuoteU: fhir.Coding;
        readonly IgAPhospholipidQuoteU: fhir.Coding;
        readonly IgGAntiphosphatidyleserineQuoteU: fhir.Coding;
        readonly IgGIndex: fhir.Coding;
        readonly IgMAntiphosphatidyleserineQuoteU: fhir.Coding;
        readonly IgMIndex: fhir.Coding;
        readonly ImmuneComplexUnit: fhir.Coding;
        readonly ImmuneStatusRatio: fhir.Coding;
        readonly Immunity: fhir.Coding;
        readonly IndexValue: fhir.Coding;
        readonly IndexVal: fhir.Coding;
        readonly Index: fhir.Coding;
        readonly IndexValueIndexValue: fhir.Coding;
        readonly InhaledTobaccoUseAmountYears: fhir.Coding;
        readonly InhaledTobaccoUsePacksDay: fhir.Coding;
        readonly INRQuoteUnit: fhir.Coding;
        readonly InternationalNormalizedRatio: fhir.Coding;
        readonly ImmuneStatusRatioISR: fhir.Coding;
        readonly JuvenileDiabetesFoundationUnit: fhir.Coding;
        readonly JuvenileDiabetesFoundationUnitPerLiter: fhir.Coding;
        readonly JuvenileDiabetesFoundQuoteU: fhir.Coding;
        readonly KaolinClottingTime: fhir.Coding;
        readonly KronusUnitPerLiter: fhir.Coding;
        readonly KronusUnitPerMilliliter: fhir.Coding;
        readonly LgCopiesMilliliter: fhir.Coding;
        readonly LogBase10CopiesPerMilliliter: fhir.Coding;
        readonly LogBase10CopiesPerMilliliterLogCopiesML: fhir.Coding;
        readonly LogBase10InternationalUnit: fhir.Coding;
        readonly LogBase10InternationalUnitPerMilliliter: fhir.Coding;
        readonly LogBase10InternationalUnitPerMilliliterLogIUML: fhir.Coding;
        readonly LogBase10: fhir.Coding;
        readonly LymeIndexValue: fhir.Coding;
        readonly LymeIndexValueLymeIndexValue: fhir.Coding;
        readonly MPortionPhospholipids: fhir.Coding;
        readonly MOM: fhir.Coding;
        readonly MultipleOfTheMedian: fhir.Coding;
        readonly Markers: fhir.Coding;
        readonly Minidrp: fhir.Coding;
        readonly MoleculePlatelet: fhir.Coding;
        readonly IgMAntiphosphatidylserineUnit: fhir.Coding;
        readonly IgMAntiphosphatidylserineUnitPerMilliliter: fhir.Coding;
        readonly MultOfMean: fhir.Coding;
        readonly NonspecificOunce: fhir.Coding;
        readonly Number: fhir.Coding;
        readonly OpticalDensityUnit: fhir.Coding;
        readonly OnceDay: fhir.Coding;
        readonly OpticalDensity: fhir.Coding;
        readonly OpticalDensityIndex: fhir.Coding;
        readonly OpticalDensityRatio: fhir.Coding;
        readonly P2Y12ReactionUnits: fhir.Coding;
        readonly Package: fhir.Coding;
        readonly PacksDay: fhir.Coding;
        readonly PackYears: fhir.Coding;
        readonly Patch: fhir.Coding;
        readonly Percentile: fhir.Coding;
        readonly Pill: fhir.Coding;
        readonly PouchesWeek: fhir.Coding;
        readonly RadioactiveT3UptakeRatio: fhir.Coding;
        readonly Ratio: fhir.Coding;
        readonly RedBloodCellPerMicroliter: fhir.Coding;
        readonly RecTiter: fhir.Coding;
        readonly RelativeQuoteU: fhir.Coding;
        readonly RelativeViscosity: fhir.Coding;
        readonly RPIQuoteU: fhir.Coding;
        readonly RubellaVirus: fhir.Coding;
        readonly SatIndex: fhir.Coding;
        readonly Scoop: fhir.Coding;
        readonly ScoreOf: fhir.Coding;
        readonly Shift: fhir.Coding;
        readonly SpermatozoaPerMilliliter: fhir.Coding;
        readonly Spray: fhir.Coding;
        readonly StandardDeviation: fhir.Coding;
        readonly StandardIgAQuoteU: fhir.Coding;
        readonly StandardIgGQuoteU: fhir.Coding;
        readonly StandardIgMQuoteU: fhir.Coding;
        readonly StdDeviationQuoteU: fhir.Coding;
        readonly StimulatingIndex: fhir.Coding;
        readonly StreptozymeQuoteU: fhir.Coding;
        readonly ThyroxinUptakeQuoteU: fhir.Coding;
        readonly TIBCQuoteU: fhir.Coding;
        readonly TimesWeek: fhir.Coding;
        readonly TineQuoteU: fhir.Coding;
        readonly Titer: fhir.Coding;
        readonly ToxoplasmaIndexValue: fhir.Coding;
        readonly Vial: fhir.Coding;
        readonly VolumeVvolume: fhir.Coding;
        readonly WeeksDays: fhir.Coding;
        readonly WhiteBloodCell: fhir.Coding;
        readonly Per12AsteriskHour: fhir.Coding;
        readonly PerArbitraryUnit: fhir.Coding;
        readonly PerHighPowerField: fhir.Coding;
        readonly PerInternationalUnit: fhir.Coding;
        readonly PerLowPowerField: fhir.Coding;
        readonly PerEntity: fhir.Coding;
        readonly PerOif: fhir.Coding;
        readonly PerSpecimen: fhir.Coding;
        readonly PerTot: fhir.Coding;
        readonly PerTenGiga: fhir.Coding;
        readonly PerTrillion: fhir.Coding;
        readonly PerTrillionRedBloodCells: fhir.Coding;
        readonly PerMillion: fhir.Coding;
        readonly PerBillion: fhir.Coding;
        readonly Per100: fhir.Coding;
        readonly Per100Cells: fhir.Coding;
        readonly Per100Neutrophils: fhir.Coding;
        readonly Per100Spermatozoa: fhir.Coding;
        readonly Per100WBC: fhir.Coding;
        readonly Per100WBCPer100WBCs: fhir.Coding;
        readonly PerYear: fhir.Coding;
        readonly PerCentimeterOfWater: fhir.Coding;
        readonly PerDay: fhir.Coding;
        readonly PerDeciliter: fhir.Coding;
        readonly PerGram: fhir.Coding;
        readonly PerGramCreat: fhir.Coding;
        readonly PerGramHgb: fhir.Coding;
        readonly PerGramTotQuoteNit: fhir.Coding;
        readonly PerGramTotQuoteProt: fhir.Coding;
        readonly PerGramWetQuoteTis: fhir.Coding;
        readonly PerHour: fhir.Coding;
        readonly PerKilogram: fhir.Coding;
        readonly PerKilogramBodyWt: fhir.Coding;
        readonly PerLiter: fhir.Coding;
        readonly PerSquareMeter: fhir.Coding;
        readonly PerMilligram: fhir.Coding;
        readonly PerMinute: fhir.Coding;
        readonly PerMilliliter: fhir.Coding;
        readonly PerCubicMillimeter: fhir.Coding;
        readonly PerMillimole: fhir.Coding;
        readonly PerMonth: fhir.Coding;
        readonly PerSecond: fhir.Coding;
        readonly PerEnzymeUnit: fhir.Coding;
        readonly PerMicrogram: fhir.Coding;
        readonly PerMicroliter: fhir.Coding;
        readonly PerWeek: fhir.Coding;
        readonly Percent: fhir.Coding;
        readonly Percent0to3Hours: fhir.Coding;
        readonly PercentAbnormal: fhir.Coding;
        readonly PercentActivity: fhir.Coding;
        readonly PercentBasalActivity: fhir.Coding;
        readonly PercentBinding: fhir.Coding;
        readonly PercentBlockade: fhir.Coding;
        readonly PercentCarboxyhemoglobin: fhir.Coding;
        readonly PercentConversion: fhir.Coding;
        readonly PercentCound: fhir.Coding;
        readonly PercentEosSeen: fhir.Coding;
        readonly PercentExcretion: fhir.Coding;
        readonly PercentFat: fhir.Coding;
        readonly PercentFetalErythrocytes: fhir.Coding;
        readonly PercentHemoglobin: fhir.Coding;
        readonly PercentHemoglobinA1C: fhir.Coding;
        readonly PercentHemoglobinSaturation: fhir.Coding;
        readonly PercentHemolysis: fhir.Coding;
        readonly PercentHumanResponse: fhir.Coding;
        readonly PercentIndex: fhir.Coding;
        readonly PercentInhibition: fhir.Coding;
        readonly PercentLive: fhir.Coding;
        readonly PercentNegativeControl: fhir.Coding;
        readonly PercentNormal: fhir.Coding;
        readonly PercentNormalControl: fhir.Coding;
        readonly PercentNormalPooledPlasma: fhir.Coding;
        readonly PercentOfAvailable: fhir.Coding;
        readonly PercentOfBacteria: fhir.Coding;
        readonly PercentOfLymphocytes: fhir.Coding;
        readonly PercentOfWBCs: fhir.Coding;
        readonly PercentOxygen: fhir.Coding;
        readonly PercentPositive: fhir.Coding;
        readonly PercentPrecipitate: fhir.Coding;
        readonly PercentReactivity: fhir.Coding;
        readonly PercentResponse: fhir.Coding;
        readonly PercentRisk: fhir.Coding;
        readonly PercentSpermMotility: fhir.Coding;
        readonly PercentTotQuoteCholesterol: fhir.Coding;
        readonly PercentTotQuoteHgb: fhir.Coding;
        readonly PercentTotal: fhir.Coding;
        readonly PercentTotalProtein: fhir.Coding;
        readonly PercentUptake: fhir.Coding;
        readonly VolumePercent: fhir.Coding;
        readonly PercentWeightToWeight: fhir.Coding;
        readonly Percent100WBC: fhir.Coding;
        readonly OnePerDay: fhir.Coding;
        readonly OnePerMinute: fhir.Coding;
        readonly VAL10LiterPerMinutePerSquareMeter: fhir.Coding;
        readonly VAL10LiterPerMinute: fhir.Coding;
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeterAsteriskMeterPower2: fhir.Coding;
        readonly VAL10MicronewtonSecondPerCentimeterToTheFifthPowerPerSquareMeter: fhir.Coding;
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeter: fhir.Coding;
        readonly VAL10AsteriskMicroNewtonAsteriskSecondCentimeterPower2: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower3PolarizationQuoteU: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower6ImmunofluorescenceQuoteU: fhir.Coding;
        readonly TrillionPerLiter: fhir.Coding;
        readonly Thousand: fhir.Coding;
        readonly ThousandRedBloodCells: fhir.Coding;
        readonly ThousandPerAsteriskUnit: fhir.Coding;
        readonly ThousandCopiesPerMilliLiter: fhir.Coding;
        readonly ThousandPerLiter: fhir.Coding;
        readonly ThousandPerMilliLiter: fhir.Coding;
        readonly ThousandsPerMicroLiter: fhir.Coding;
        readonly VAL10ThousandPerMicroliter: fhir.Coding;
        readonly OneHundredThousand: fhir.Coding;
        readonly Million: fhir.Coding;
        readonly MillionInternationalUnit: fhir.Coding;
        readonly MillionEquivalentsPerMilliLiter: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower6AsteriskUnit: fhir.Coding;
        readonly MillionPerSpecimen: fhir.Coding;
        readonly MillionPerKilogram: fhir.Coding;
        readonly MillionPerLiter: fhir.Coding;
        readonly MillionPerMilliliter: fhir.Coding;
        readonly TheNumberTenForArbitraryPowersPower6MillimeterPower3: fhir.Coding;
        readonly MillionPerMicroliter: fhir.Coding;
        readonly TenToEighth: fhir.Coding;
        readonly BillionPerLiter: fhir.Coding;
        readonly BillionPerMilliliter: fhir.Coding;
        readonly BillionPerMicroliter: fhir.Coding;
        readonly VAL24Hour: fhir.Coding;
        readonly Year: fhir.Coding;
        readonly Ampere: fhir.Coding;
        readonly AmpereMeter: fhir.Coding;
        readonly AttogramPerCell: fhir.Coding;
        readonly StandardAtmosphere: fhir.Coding;
        readonly TechnicalAtmosphere: fhir.Coding;
        readonly Bar: fhir.Coding;
        readonly Becquerel: fhir.Coding;
        readonly Calorie: fhir.Coding;
        readonly DegreeCelsius: fhir.Coding;
        readonly Centigram: fhir.Coding;
        readonly Centiliter: fhir.Coding;
        readonly Centimeter: fhir.Coding;
        readonly CentimeterOfWater: fhir.Coding;
        readonly CentimeterOfWaterColumnSecondAsteriskMeter: fhir.Coding;
        readonly CentimeterOfWaterPerLiterPerSecond: fhir.Coding;
        readonly CentimeterOfWaterPerSecondPerMeter: fhir.Coding;
        readonly CentimeterOfMercury: fhir.Coding;
        readonly SquareCentimeter: fhir.Coding;
        readonly SquareCentimeterPerSecond: fhir.Coding;
        readonly CubicCentimeter: fhir.Coding;
        readonly CentiPoise: fhir.Coding;
        readonly CentiStokes: fhir.Coding;
        readonly Day: fhir.Coding;
        readonly DekaliterPerMinute: fhir.Coding;
        readonly DekaliterPerMinutePerSquareMeter: fhir.Coding;
        readonly Decibel: fhir.Coding;
        readonly Degree: fhir.Coding;
        readonly DegreePerSecond: fhir.Coding;
        readonly Decigram: fhir.Coding;
        readonly Deciliter: fhir.Coding;
        readonly Decimeter: fhir.Coding;
        readonly SquareDecimeterPerSquareSecond: fhir.Coding;
        readonly DyneSecondPerCentimeterPerSquareMeter: fhir.Coding;
        readonly DyneSecondPerCentimeter: fhir.Coding;
        readonly Equivalents: fhir.Coding;
        readonly EquivalentsLiter: fhir.Coding;
        readonly EquivalentsMilliliter: fhir.Coding;
        readonly EquivalentsMillimole: fhir.Coding;
        readonly EquivalentsMicromole: fhir.Coding;
        readonly Erg: fhir.Coding;
        readonly Electronvolt: fhir.Coding;
        readonly Farad: fhir.Coding;
        readonly Femtogram: fhir.Coding;
        readonly Femtoliter: fhir.Coding;
        readonly FemtoliterNanoliter: fhir.Coding;
        readonly Femtometer: fhir.Coding;
        readonly Femtomole: fhir.Coding;
        readonly FemtomolePerGram: fhir.Coding;
        readonly FemtomolePerLiter: fhir.Coding;
        readonly FemtomoleMilligram: fhir.Coding;
        readonly FemtomolePerMilligramOfCytosolProtein: fhir.Coding;
        readonly FemtomolePerMilligramOfProtein: fhir.Coding;
        readonly FemtomoleMilliliter: fhir.Coding;
        readonly Gram: fhir.Coding;
        readonly GramAsteriskMeter: fhir.Coding;
        readonly GramAsteriskMeterHbAsteriskMeterPower2: fhir.Coding;
        readonly GramMeterPerHeartBeat: fhir.Coding;
        readonly GramAsteriskMeterHb: fhir.Coding;
        readonly GramOfCreatinine: fhir.Coding;
        readonly GramOfHemoglobin: fhir.Coding;
        readonly GramOfTotalNitrogen: fhir.Coding;
        readonly GramOfTotalProtein: fhir.Coding;
        readonly GramOfWetTissue: fhir.Coding;
        readonly GramPer100Gram: fhir.Coding;
        readonly GramPer12Hour: fhir.Coding;
        readonly GramPer24Hour: fhir.Coding;
        readonly GramPer3Days: fhir.Coding;
        readonly GramPer4Hour: fhir.Coding;
        readonly GramPer48Hour: fhir.Coding;
        readonly GramPer5Hour: fhir.Coding;
        readonly GramPer6Hour: fhir.Coding;
        readonly GramPer72Hour: fhir.Coding;
        readonly Gram8AsteriskHour: fhir.Coding;
        readonly GramPer8HourShift: fhir.Coding;
        readonly Gram8AsteriskKilogramAsteriskHour: fhir.Coding;
        readonly GramKilogramAsteriskHour: fhir.Coding;
        readonly GramKilogramAsteriskMinute: fhir.Coding;
        readonly GramPerSpecimen: fhir.Coding;
        readonly GramPerTotalOutput: fhir.Coding;
        readonly GramPerTotalWeight: fhir.Coding;
        readonly GramTotalWeight: fhir.Coding;
        readonly GramPerCubicCentimeter: fhir.Coding;
        readonly GramPerDay: fhir.Coding;
        readonly GramPerDeciliter: fhir.Coding;
        readonly GramPerGram: fhir.Coding;
        readonly GramGramCre: fhir.Coding;
        readonly GramGramCreat: fhir.Coding;
        readonly GramPerGramOfGlobulin: fhir.Coding;
        readonly GramPerGramOfTissue: fhir.Coding;
        readonly GramPerHour: fhir.Coding;
        readonly GramPerHourPerSquareMeter: fhir.Coding;
        readonly GramPerKilogram: fhir.Coding;
        readonly GramPerKilogramPer8Hour: fhir.Coding;
        readonly GramPerKilogramPer8HourShift: fhir.Coding;
        readonly GramPerKilogramPerDay: fhir.Coding;
        readonly GramPerKilogramPerHour: fhir.Coding;
        readonly GramPerKilogramPerMinute: fhir.Coding;
        readonly GramPerLiter: fhir.Coding;
        readonly GramsPerSquareMeter: fhir.Coding;
        readonly GramPerMilligram: fhir.Coding;
        readonly GramPerMinute: fhir.Coding;
        readonly GramPerMilliliter: fhir.Coding;
        readonly GramPerMillimole: fhir.Coding;
        readonly GramMillimoleCreat: fhir.Coding;
        readonly GramPerMole: fhir.Coding;
        readonly GramPerMoleOfCreatinine: fhir.Coding;
        readonly GigaBecquerel: fhir.Coding;
        readonly Gray: fhir.Coding;
        readonly Hour: fhir.Coding;
        readonly Henry: fhir.Coding;
        readonly Hectoliter: fhir.Coding;
        readonly Hertz: fhir.Coding;
        readonly Joule: fhir.Coding;
        readonly JoulePerLiter: fhir.Coding;
        readonly Kelvin: fhir.Coding;
        readonly KiloInternationalUnitPerLiter: fhir.Coding;
        readonly KiloInternationalUnitPerMilliliter: fhir.Coding;
        readonly KelvinWatt: fhir.Coding;
        readonly Katal: fhir.Coding;
        readonly KatalKilogram: fhir.Coding;
        readonly KatalLiter: fhir.Coding;
        readonly KiloBecquerel: fhir.Coding;
        readonly Kilocalorie: fhir.Coding;
        readonly Kilocalorie8AsteriskHour: fhir.Coding;
        readonly KilocaloriePerOunceUSAndBritish: fhir.Coding;
        readonly KilocaloriePerDay: fhir.Coding;
        readonly KilocaloriePerHour: fhir.Coding;
        readonly KilocaloriePerKilogramPer24Hour: fhir.Coding;
        readonly Kilogram: fhir.Coding;
        readonly KilogramMeterPerSecond: fhir.Coding;
        readonly KilogramPerSecondPerSquareMeter: fhir.Coding;
        readonly KilogramPerHour: fhir.Coding;
        readonly KilogramPerLiter: fhir.Coding;
        readonly KilogramMeterPower2: fhir.Coding;
        readonly KilogramMeterPower3: fhir.Coding;
        readonly KilogramMinute: fhir.Coding;
        readonly KilogramPerMole: fhir.Coding;
        readonly KilogramSecond: fhir.Coding;
        readonly Kiloliter: fhir.Coding;
        readonly Kilometer: fhir.Coding;
        readonly KiloPascal: fhir.Coding;
        readonly Kilosecond: fhir.Coding;
        readonly KiloEnzymeUnit: fhir.Coding;
        readonly KiloenzymeUnitPerGram: fhir.Coding;
        readonly KiloUnitHour: fhir.Coding;
        readonly KiloenzymeUnitPerLiter: fhir.Coding;
        readonly KiloEnzymeUnitPerLiterClass: fhir.Coding;
        readonly KiloEnzymeUnitPerMilliliter: fhir.Coding;
        readonly Liter: fhir.Coding;
        readonly LiterAsteriskSecondPower2Second: fhir.Coding;
        readonly LiterPer24Hour: fhir.Coding;
        readonly LiterPer8Hour: fhir.Coding;
        readonly LiterPerMinutePerSquareMeter: fhir.Coding;
        readonly LiterPerDay: fhir.Coding;
        readonly LiterPerHour: fhir.Coding;
        readonly LiterPerKilogram: fhir.Coding;
        readonly LiterPerLiter: fhir.Coding;
        readonly LiterPerMinute: fhir.Coding;
        readonly LiterSecond: fhir.Coding;
        readonly LiterPerSecondPerSquareSecond: fhir.Coding;
        readonly Lumen: fhir.Coding;
        readonly LumenSquareMeter: fhir.Coding;
        readonly LumenMeterPower2: fhir.Coding;
        readonly Meter: fhir.Coding;
        readonly MilliinternationalUnit: fhir.Coding;
        readonly MilliInternationalUnitPerLiter: fhir.Coding;
        readonly MilliInternationalUnitPerMilliliter: fhir.Coding;
        readonly MeterPerSecond: fhir.Coding;
        readonly MeterPerSquareSecond: fhir.Coding;
        readonly SquareMeter: fhir.Coding;
        readonly SquareMeterPerSecond: fhir.Coding;
        readonly CubicMeterPerSecond: fhir.Coding;
        readonly MilliAmpere: fhir.Coding;
        readonly Millibar: fhir.Coding;
        readonly MillibarSecondPerLiter: fhir.Coding;
        readonly MegaBecquerel: fhir.Coding;
        readonly MilliCurie: fhir.Coding;
        readonly Milliequivalent: fhir.Coding;
        readonly MilliequivalentPer12Hour: fhir.Coding;
        readonly MilliequivalentPer2Hour: fhir.Coding;
        readonly MilliequivalentPer24Hour: fhir.Coding;
        readonly Milliequivalents8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly MilliequivalentPer8Hour: fhir.Coding;
        readonly MilliequivalentsKilogramAsteriskDay: fhir.Coding;
        readonly MilliequivalentsSpecimen: fhir.Coding;
        readonly MilliequivalentPerDay: fhir.Coding;
        readonly MilliequivalentPerDeciliter: fhir.Coding;
        readonly MilliequivalentPerGram: fhir.Coding;
        readonly MilliequivalentsGramCre: fhir.Coding;
        readonly MilliequivalentPerHour: fhir.Coding;
        readonly MilliequivalentPerKilogram: fhir.Coding;
        readonly MilliequivalentPerKilogramPerHour: fhir.Coding;
        readonly MilliequivalentsKilogramMinute: fhir.Coding;
        readonly MilliequivalentPerLiter: fhir.Coding;
        readonly MilliequivalentPerSquareMeter: fhir.Coding;
        readonly MilliequivalentPerMinute: fhir.Coding;
        readonly MilliequivalentPerMilliliter: fhir.Coding;
        readonly Milligram: fhir.Coding;
        readonly MilligramPhenylketonesDeciliter: fhir.Coding;
        readonly MilligramPer10Hour: fhir.Coding;
        readonly MilligramPer12Hour: fhir.Coding;
        readonly MilligramPer18Hour: fhir.Coding;
        readonly MilligramPer2Hour: fhir.Coding;
        readonly MilligramPer24Hour: fhir.Coding;
        readonly MilligramPer72Hour: fhir.Coding;
        readonly Milligram8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly MilligramPer8Hour: fhir.Coding;
        readonly MilligramKilogramAsteriskHour: fhir.Coding;
        readonly MilligramHgbGram: fhir.Coding;
        readonly MilligramSpecimen: fhir.Coding;
        readonly MilligramTotQuoteVolume: fhir.Coding;
        readonly MilligramVolume: fhir.Coding;
        readonly MilligramPerDay: fhir.Coding;
        readonly MilligramDay173AsteriskTheNumberTenForArbitraryPowersPower2AsteriskMeterPower2: fhir.Coding;
        readonly MilligramPerDeciliter: fhir.Coding;
        readonly MilligramPerGram: fhir.Coding;
        readonly MilligramGramCre: fhir.Coding;
        readonly MilligramPerGramOfCreatinine: fhir.Coding;
        readonly MilligramPerHour: fhir.Coding;
        readonly MilligramPerKilogram: fhir.Coding;
        readonly MilligramKilogram24AsteriskHour: fhir.Coding;
        readonly MilligramPerKilogramPerDay: fhir.Coding;
        readonly MilligramPerKilogramPerMinute: fhir.Coding;
        readonly MilligramPerLiter: fhir.Coding;
        readonly MilligramPerSquareMeter: fhir.Coding;
        readonly MilligramPerCubicMeter: fhir.Coding;
        readonly MilligramPerMilligram: fhir.Coding;
        readonly MilligramMilligramCre: fhir.Coding;
        readonly MilligramPerMinute: fhir.Coding;
        readonly MilligramPerMilliliter: fhir.Coding;
        readonly MilligramPerMillimole: fhir.Coding;
        readonly MilligramMillimoleCre: fhir.Coding;
        readonly MilligramPerMillimoleOfCreatinine: fhir.Coding;
        readonly MilligramPerWeek: fhir.Coding;
        readonly Minute: fhir.Coding;
        readonly Milliliter: fhir.Coding;
        readonly MilliliterHQuoteBAsteriskMeterPower2: fhir.Coding;
        readonly MilliliterPer10Hour: fhir.Coding;
        readonly MilliliterPer12Hour: fhir.Coding;
        readonly MilliliterPer2Hour: fhir.Coding;
        readonly MilliliterPer24Hour: fhir.Coding;
        readonly MilliliterPer4Hour: fhir.Coding;
        readonly MilliliterPer72Hour: fhir.Coding;
        readonly MilliliterPer8Hour: fhir.Coding;
        readonly MilliliterKilogramAsteriskMinute: fhir.Coding;
        readonly MilliliterPerSquareInchInternational: fhir.Coding;
        readonly MilliLitersPerHeartbeatSIVolumeUnits: fhir.Coding;
        readonly MilliliterCentimeterOfWaterColumn: fhir.Coding;
        readonly MilliliterPerDay: fhir.Coding;
        readonly MilliliterPerDeciliter: fhir.Coding;
        readonly MilliliterPerHour: fhir.Coding;
        readonly MilliliterPerKilogram: fhir.Coding;
        readonly MilliliterPerKilogramPer8Hour: fhir.Coding;
        readonly MilliliterPerKilogramPerDay: fhir.Coding;
        readonly MilliliterPerKilogramPerHour: fhir.Coding;
        readonly MilliliterPerKilogramPerMinute: fhir.Coding;
        readonly MilliliterPerLiter: fhir.Coding;
        readonly MilliliterPerSquareMeter: fhir.Coding;
        readonly MilliliterPerMillibar: fhir.Coding;
        readonly MilliliterPerMinute: fhir.Coding;
        readonly MilliliterMinute173AsteriskTheNumberTenForArbitraryPowersPower2AsteriskMeterPower2: fhir.Coding;
        readonly MilliliterPerMinutePer173SquareMeter: fhir.Coding;
        readonly MilliliterPerMinutePerSquareMeter: fhir.Coding;
        readonly MilliliterPerMillimeter: fhir.Coding;
        readonly MilliliterPerSecond: fhir.Coding;
        readonly Millimeter: fhir.Coding;
        readonly MillimeterOfWater: fhir.Coding;
        readonly MillimeterOfMercury: fhir.Coding;
        readonly MillimeterPerHour: fhir.Coding;
        readonly MillimeterPerMinute: fhir.Coding;
        readonly SquareMillimeter: fhir.Coding;
        readonly CubicMillimeter: fhir.Coding;
        readonly Millimole: fhir.Coding;
        readonly MillimolePer12Hour: fhir.Coding;
        readonly MillimolePer18Hour: fhir.Coding;
        readonly MillimolePer2Hour: fhir.Coding;
        readonly MillimolePer24Hour: fhir.Coding;
        readonly MillimolePer6Hour: fhir.Coding;
        readonly Millimole8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly MillimolePer8Hour: fhir.Coding;
        readonly MillimoleTotQuoteVolume: fhir.Coding;
        readonly MillimolePerDay: fhir.Coding;
        readonly MillimolePerDeciliter: fhir.Coding;
        readonly MillimolePerGram: fhir.Coding;
        readonly MillimolePerGramOfCreatinine: fhir.Coding;
        readonly MillimolePerGramOfHemoglobin: fhir.Coding;
        readonly MillimolePerHour: fhir.Coding;
        readonly MillimolePerHourPerMilligramOfHemoglobin: fhir.Coding;
        readonly MillimolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly MillimolePerKilogram: fhir.Coding;
        readonly MillimolePerKilogramOfWater: fhir.Coding;
        readonly MillimolePerKilogramPerDay: fhir.Coding;
        readonly MillimolePerKilogramPerHour: fhir.Coding;
        readonly MillimolePerKilogramPerMinute: fhir.Coding;
        readonly MillimolePerLiter: fhir.Coding;
        readonly MillimolePerLiterPerSecond: fhir.Coding;
        readonly MillimoleMeter: fhir.Coding;
        readonly MillimolePerSquareMeter: fhir.Coding;
        readonly MillimolePerMinute: fhir.Coding;
        readonly MillimolePerMillimole: fhir.Coding;
        readonly MillimolePerMole: fhir.Coding;
        readonly MillimolePerMoleOfCreatinine: fhir.Coding;
        readonly MillimolePerSecondPerLiter: fhir.Coding;
        readonly Month: fhir.Coding;
        readonly Mole: fhir.Coding;
        readonly MolePerDay: fhir.Coding;
        readonly MolePerKilogram: fhir.Coding;
        readonly MolePerKilogramPerSecond: fhir.Coding;
        readonly MolePerLiter: fhir.Coding;
        readonly MolePerCubicMeter: fhir.Coding;
        readonly MolePerMilliliter: fhir.Coding;
        readonly MolePerMole: fhir.Coding;
        readonly MoleMoleCreat: fhir.Coding;
        readonly MolePerSecond: fhir.Coding;
        readonly Milliosmole: fhir.Coding;
        readonly MilliosmolePerKilogram: fhir.Coding;
        readonly MilliosmolePerLiter: fhir.Coding;
        readonly Millipascal: fhir.Coding;
        readonly Millisecond: fhir.Coding;
        readonly Megasecond: fhir.Coding;
        readonly MillienzymeUnit: fhir.Coding;
        readonly MillienzymeUnitPerGram: fhir.Coding;
        readonly MilliEnzymeUnitPerGramOfHemoglobin: fhir.Coding;
        readonly MilliUnitGramHgb: fhir.Coding;
        readonly MilliEnzymeUnitPerGramOfProtein: fhir.Coding;
        readonly MillienzymeUnitPerLiter: fhir.Coding;
        readonly MilliUnitMilligram: fhir.Coding;
        readonly MilliUnitMilligramCre: fhir.Coding;
        readonly MilliUnitMinute: fhir.Coding;
        readonly MillienzymeUnitPerMilliliter: fhir.Coding;
        readonly MillienzymeUnitPerMilliliterPerMinute: fhir.Coding;
        readonly MilliEnzymeUnitPerMillimoleOfCreatinine: fhir.Coding;
        readonly MillienzymeUnitPerMillimoleOfCreatinine: fhir.Coding;
        readonly MillienzymeUnitPerMillimoleOfRedBloodCells: fhir.Coding;
        readonly MilliVolt: fhir.Coding;
        readonly Newton: fhir.Coding;
        readonly NewtonCentimeter: fhir.Coding;
        readonly NewtonSecond: fhir.Coding;
        readonly NanoCurie: fhir.Coding;
        readonly Nanogram: fhir.Coding;
        readonly NanogramPer24Hour: fhir.Coding;
        readonly Nanogram8AsteriskHourAsteriskKilogram: fhir.Coding;
        readonly NanogramPer8Hour: fhir.Coding;
        readonly NanogramKilogramAsteriskDay: fhir.Coding;
        readonly NanogramKilogramAsteriskHour: fhir.Coding;
        readonly NanogramKilogramAsteriskMinute: fhir.Coding;
        readonly NanogramPerMillion: fhir.Coding;
        readonly NanogramPerDay: fhir.Coding;
        readonly NanogramPerDeciliter: fhir.Coding;
        readonly NanogramDeciliterHour: fhir.Coding;
        readonly NanogramPerGram: fhir.Coding;
        readonly NanogramGramCre: fhir.Coding;
        readonly NanogramPerGramOfCreatinine: fhir.Coding;
        readonly NanogramPerHour: fhir.Coding;
        readonly NanogramPerKilogram: fhir.Coding;
        readonly NanogramPerKilogramPer8Hour: fhir.Coding;
        readonly NanogramPerKilogramPerHour: fhir.Coding;
        readonly NanogramPerKilogramPerMinute: fhir.Coding;
        readonly NanogramPerLiter: fhir.Coding;
        readonly NanogramPerSquareMeter: fhir.Coding;
        readonly NanogramPerMilligram: fhir.Coding;
        readonly NanogramMilligramProtein: fhir.Coding;
        readonly NanogramPerMilligramPerHour: fhir.Coding;
        readonly NanogramPerMinute: fhir.Coding;
        readonly NanogramPerMillliiter: fhir.Coding;
        readonly NanogramMilliliterRbc: fhir.Coding;
        readonly NanogramPerMilliliterPerHour: fhir.Coding;
        readonly NanogramPerSecond: fhir.Coding;
        readonly Nanokatal: fhir.Coding;
        readonly Nanoliter: fhir.Coding;
        readonly Nanometer: fhir.Coding;
        readonly NanometerPerSecondPerLiter: fhir.Coding;
        readonly Nanomole: fhir.Coding;
        readonly NanomolePer24Hour: fhir.Coding;
        readonly NanomolePerDay: fhir.Coding;
        readonly NanomolePerDeciliter: fhir.Coding;
        readonly NanomolePerGram: fhir.Coding;
        readonly NanomoleGramCre: fhir.Coding;
        readonly NanomolePerGramOfCreatinine: fhir.Coding;
        readonly NanomolePerGramOfDryWeight: fhir.Coding;
        readonly NanomolePerHourPerLiter: fhir.Coding;
        readonly NanomolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly NanomolePerHourPerMilliliter: fhir.Coding;
        readonly NanomolePerLiter: fhir.Coding;
        readonly NanomolePerLiterOfRedBloodCells: fhir.Coding;
        readonly NanomolePerLiterPerMillimoleOfCreatinine: fhir.Coding;
        readonly NanomolePerLiterPerSecond: fhir.Coding;
        readonly NanomolePerMeterPerMilligramOfProtein: fhir.Coding;
        readonly NanomolePerMilligram: fhir.Coding;
        readonly NanomolePerMilligramPerHour: fhir.Coding;
        readonly NanomolePerMinutePerMilligramOfHemoglobin: fhir.Coding;
        readonly NanomolePerMinutePerMilligramOfProtein: fhir.Coding;
        readonly NanomolePerMinutePerMilliliter: fhir.Coding;
        readonly NanomolePerMilliliter: fhir.Coding;
        readonly NanomolePerMilliliterPerHour: fhir.Coding;
        readonly NanomolePerMilliliterPerMinute: fhir.Coding;
        readonly NanomolePerMillimole: fhir.Coding;
        readonly NanomoleMillimoleCre: fhir.Coding;
        readonly NanomolePerMillimoleOfCreatinine: fhir.Coding;
        readonly NanomolePerMole: fhir.Coding;
        readonly NanomolePerNanomole: fhir.Coding;
        readonly NanomolePerSecond: fhir.Coding;
        readonly NanomolePerSecondPerLiter: fhir.Coding;
        readonly NanomolePerMicromoleOfCreatinine: fhir.Coding;
        readonly Nanosecond: fhir.Coding;
        readonly Ohm: fhir.Coding;
        readonly OsmolePerKilogram: fhir.Coding;
        readonly OsmolePerLiter: fhir.Coding;
        readonly Pascal: fhir.Coding;
        readonly Picogram: fhir.Coding;
        readonly PicogramPerDeciliter: fhir.Coding;
        readonly PicogramPerLiter: fhir.Coding;
        readonly PicogramPerMilligram: fhir.Coding;
        readonly PicogramPerMilliliter: fhir.Coding;
        readonly PicogramPerMillimeter: fhir.Coding;
        readonly Picokatal: fhir.Coding;
        readonly Picoliter: fhir.Coding;
        readonly Picometer: fhir.Coding;
        readonly Picomole: fhir.Coding;
        readonly PicomolePerDay: fhir.Coding;
        readonly PicomolePerDeciliter: fhir.Coding;
        readonly PicomolePerGram: fhir.Coding;
        readonly PicomolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly PicomolePerHourPerMilliliter: fhir.Coding;
        readonly PicomolePerLiter: fhir.Coding;
        readonly PicomolePerMilligramOfProtein: fhir.Coding;
        readonly PicomolePerMinute: fhir.Coding;
        readonly PicomolePerMinutePerMilligramOfProtein: fhir.Coding;
        readonly PicomolePerMilliliter: fhir.Coding;
        readonly PicomolePerMillimole: fhir.Coding;
        readonly PicomolePerMillimoleOfCreatinine: fhir.Coding;
        readonly PicomolePerMole: fhir.Coding;
        readonly PicomolePerMicromole: fhir.Coding;
        readonly PicomolePerMicromoleOfCreatinine: fhir.Coding;
        readonly Picosecond: fhir.Coding;
        readonly Picotesla: fhir.Coding;
        readonly Second: fhir.Coding;
        readonly Stokes: fhir.Coding;
        readonly Tonne: fhir.Coding;
        readonly EnzymeUnit: fhir.Coding;
        readonly MicroInternationalUnit: fhir.Coding;
        readonly MicrointernationalUnitPerLiter: fhir.Coding;
        readonly MicroInternationalUnitPerMilliliter: fhir.Coding;
        readonly EnzymeUnitPerLiterAt25DegCelsius: fhir.Coding;
        readonly EnzymeUnitPerLiterAt37DegCelsius: fhir.Coding;
        readonly GUnit: fhir.Coding;
        readonly EnzymeUnitPer1Hour: fhir.Coding;
        readonly EnzymeUnitPer10GramOfFeces: fhir.Coding;
        readonly EnzymeUnitPer12Hour: fhir.Coding;
        readonly EnzymeUnitPer18Hour: fhir.Coding;
        readonly EnzymeUnitPer2Hour: fhir.Coding;
        readonly EnzymeUnitPer24Hour: fhir.Coding;
        readonly EnzymeUnitPer10: fhir.Coding;
        readonly EnzymeUnitPer10Billion: fhir.Coding;
        readonly EnzymeUnitPer10BillionCells: fhir.Coding;
        readonly EnzymeUnitPerTrillion: fhir.Coding;
        readonly EnzymeUnitPerTrillionRedBloodCells: fhir.Coding;
        readonly EnzymeUnitPerMillion: fhir.Coding;
        readonly EnzymeUnitPerBillion: fhir.Coding;
        readonly EnzymeUnitPerDay: fhir.Coding;
        readonly EnzymeUnitPerDeciliter: fhir.Coding;
        readonly EnzymeUnitPerGram: fhir.Coding;
        readonly UnitGramCre: fhir.Coding;
        readonly EnzymeUnitPerGramOfCreatinine: fhir.Coding;
        readonly EnzymeUnitPerGramOfHemoglobin: fhir.Coding;
        readonly EnzymeUnitPerGramOfHemoglobinUGHemoglobin: fhir.Coding;
        readonly UnitsPerGramHemoglobin: fhir.Coding;
        readonly EnzymeUnitPerGramOfProtein: fhir.Coding;
        readonly EnzymeUnitPerHour: fhir.Coding;
        readonly EnzymeUnitPerKilogramOfHemoglobin: fhir.Coding;
        readonly EnzymeUnitPerKilogramOfHemoglobinUKgHemoglobin: fhir.Coding;
        readonly UnitKilogramHour: fhir.Coding;
        readonly EnzymeUnitPerLiter: fhir.Coding;
        readonly EnzymeUnitPerMinute: fhir.Coding;
        readonly EnzymeUnitPerMilliliter: fhir.Coding;
        readonly UnitMilliliterRBC: fhir.Coding;
        readonly EnzymeUnitPerMilliliterOfRedBloodCells: fhir.Coding;
        readonly EnzymeUnitPerMillimoleOfCreatinine: fhir.Coding;
        readonly EnzymeUnitPerMole: fhir.Coding;
        readonly EnzymeUnitPerSecond: fhir.Coding;
        readonly EnzymeUnitPerMicromole: fhir.Coding;
        readonly Microequivalents: fhir.Coding;
        readonly MicroequivalentPerLiter: fhir.Coding;
        readonly MicroequivalentPerMilliliter: fhir.Coding;
        readonly Microgram: fhir.Coding;
        readonly MicrogramFibrinogenEquivalentUnitPerMilliliter: fhir.Coding;
        readonly MicrogramT4Deciliter: fhir.Coding;
        readonly MicrogramPer100Gram: fhir.Coding;
        readonly MicrogramPer24Hour: fhir.Coding;
        readonly MicrogramPer8Hour: fhir.Coding;
        readonly MicrogramKilogramAsteriskDay: fhir.Coding;
        readonly MicrogramKilogramAsteriskHour: fhir.Coding;
        readonly MicrogramPerSquareFootInternational: fhir.Coding;
        readonly MicrogramPerSpecimen: fhir.Coding;
        readonly MicrogramSpecimen: fhir.Coding;
        readonly MicroGramsPerTotalVolume: fhir.Coding;
        readonly MicrogramPerDay: fhir.Coding;
        readonly MicrogramPerDeciliter: fhir.Coding;
        readonly MicrogramDeciliterRbc: fhir.Coding;
        readonly MicrogramPerDeciliterOfRedBloodCells: fhir.Coding;
        readonly MicrogramPerGram: fhir.Coding;
        readonly MicrogramGramCre: fhir.Coding;
        readonly MicrogramPerGramOfCreatinine: fhir.Coding;
        readonly MicrogramPerGramOfDryTissue: fhir.Coding;
        readonly MicrogramPerGramOfDryWeight: fhir.Coding;
        readonly MicrogramGramDryWeight: fhir.Coding;
        readonly MicrogramPerGramOfFeces: fhir.Coding;
        readonly MicrogramPerGramOfHair: fhir.Coding;
        readonly MicrogramPerGramOfHemoglobin: fhir.Coding;
        readonly MicrogramGramHgb: fhir.Coding;
        readonly MicrogramPerGramOfTissue: fhir.Coding;
        readonly MicrogramGramTissue: fhir.Coding;
        readonly MicrogramPerHour: fhir.Coding;
        readonly MicrogramPerKilogram: fhir.Coding;
        readonly MicrogramPerKilogramPer8Hour: fhir.Coding;
        readonly MicrogramPerKilogramPerDay: fhir.Coding;
        readonly MicrogramPerKilogramPerHour: fhir.Coding;
        readonly MicrogramPerKilogramPerMinute: fhir.Coding;
        readonly MicrogramPerLiter: fhir.Coding;
        readonly MicrogramLiterDDU: fhir.Coding;
        readonly MicrogramPerLiterOfRedBloodCells: fhir.Coding;
        readonly MicrogramPerLiterPer24Hour: fhir.Coding;
        readonly MicrogramPerSquareMeter: fhir.Coding;
        readonly MicrogramPerCubicMeter: fhir.Coding;
        readonly MicrogramPerMilligram: fhir.Coding;
        readonly MicrogramMilligramCre: fhir.Coding;
        readonly MicrogramPerMilligramOfCreatinine: fhir.Coding;
        readonly MicrogramPerMinute: fhir.Coding;
        readonly MicrogramPerMilliliter: fhir.Coding;
        readonly MicrogramPerMilliliterClass: fhir.Coding;
        readonly MicrogramPerMilliliterEquivalent: fhir.Coding;
        readonly MicrogramMilliliterFEU: fhir.Coding;
        readonly MicrogramPerMillimole: fhir.Coding;
        readonly MicrogramPerMillimoleOfCreatinine: fhir.Coding;
        readonly MicrogramPerNanogram: fhir.Coding;
        readonly Microkatal: fhir.Coding;
        readonly Microliter: fhir.Coding;
        readonly MicroliterPer2Hour: fhir.Coding;
        readonly MicroliterPerHour: fhir.Coding;
        readonly Micrometer: fhir.Coding;
        readonly MicrometerPerSecond: fhir.Coding;
        readonly Micromole: fhir.Coding;
        readonly MicromoleBoneCollagenEquivalentPerMole: fhir.Coding;
        readonly MicromolePer2Hour: fhir.Coding;
        readonly MicromolePer24Hour: fhir.Coding;
        readonly MicromolePer8Hour: fhir.Coding;
        readonly MicromolePerDay: fhir.Coding;
        readonly MicromolePerDeciliter: fhir.Coding;
        readonly MicromolePerDeciliterOfGlomerularFiltrate: fhir.Coding;
        readonly MicromolePerGram: fhir.Coding;
        readonly MicromoleGramCre: fhir.Coding;
        readonly MicromolePerGramOfCreatinine: fhir.Coding;
        readonly MicromolePerGramOfHemoglobin: fhir.Coding;
        readonly MicromolePerGramOfHemoglobinUmolGHemoglobin: fhir.Coding;
        readonly MicromoleGramHgb: fhir.Coding;
        readonly MicromolePerHour: fhir.Coding;
        readonly MicromoleHourGram: fhir.Coding;
        readonly MicromolePerHourPerLiter: fhir.Coding;
        readonly MicromolePerHourPerMilligramOfProtein: fhir.Coding;
        readonly MicromolePerKilogram: fhir.Coding;
        readonly MicromolePerKilogramOfFeces: fhir.Coding;
        readonly MicromolePerLiter: fhir.Coding;
        readonly MicromolePerLiterOfRedBloodCells: fhir.Coding;
        readonly MicromolePerLiterOfRedBloodCellsUmolLRBCs: fhir.Coding;
        readonly MicromolePerLiterPerHour: fhir.Coding;
        readonly MicromoleMeter: fhir.Coding;
        readonly MicromolePerMilligram: fhir.Coding;
        readonly MicromoleMilligramCre: fhir.Coding;
        readonly MicromolePerMilligramOfCreatinine: fhir.Coding;
        readonly MicromolePerMinute: fhir.Coding;
        readonly MicromolePerMinutePerGram: fhir.Coding;
        readonly MicromolePerMinutePerGramOfMucosa: fhir.Coding;
        readonly MicromoleMinuteGramProt: fhir.Coding;
        readonly MicromolePerMinutePerGramOfProtein: fhir.Coding;
        readonly MicromolePerMinutePerLiter: fhir.Coding;
        readonly MicromolePerMilliliter: fhir.Coding;
        readonly MicromolePerMilliliterPerMinute: fhir.Coding;
        readonly MicromolePerMillimole: fhir.Coding;
        readonly MicromolePerMillimoleOfCreatinine: fhir.Coding;
        readonly MicromolePerMole: fhir.Coding;
        readonly MicromoleMoleCre: fhir.Coding;
        readonly MicromolePerMoleOfCreatinine: fhir.Coding;
        readonly MicromolePerMoleOfHemoglobin: fhir.Coding;
        readonly MicromolePerMicromole: fhir.Coding;
        readonly MicromolePerMicromoleOfCreatinine: fhir.Coding;
        readonly MicroOhm: fhir.Coding;
        readonly Microsecond: fhir.Coding;
        readonly MicroUnit: fhir.Coding;
        readonly MicroEnzymeUnitPerGram: fhir.Coding;
        readonly MicroEnzymeUnitPerLiter: fhir.Coding;
        readonly MicroEnzymeUnitPerMilliliter: fhir.Coding;
        readonly Microvolt: fhir.Coding;
        readonly Volt: fhir.Coding;
        readonly Week: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ObservationDefinitionQualifiedInterval type.
 */
export interface ObservationDefinitionQualifiedIntervalArgs extends fhir.BackboneElementArgs {
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: fhir.FhirCode<ObservationRangeCategoryCodeType> | string | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.RangeArgs | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | string | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.RangeArgs | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.RangeArgs | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: fhir.FhirString | string | undefined;
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export declare class ObservationDefinitionQualifiedInterval extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: fhir.FhirCode<ObservationRangeCategoryCodeType> | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.Range | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.CodeableConcept | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo: fhir.CodeableConcept[];
    /**
     * Sex of the population the range applies to.
     */
    gender?: fhir.FhirCode<AdministrativeGenderCodeType> | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.Range | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.Range | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: fhir.FhirString | undefined;
    /**
     * Default constructor for ObservationDefinitionQualifiedInterval - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationDefinitionQualifiedIntervalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for category (ObservationDefinition.qualifiedInterval.category)
     */
    static get categoryRequiredCodes(): {
        readonly AbsoluteRange: "absolute";
        readonly CriticalRange: "critical";
        readonly ReferenceRange: "reference";
    };
    /**
     * Extensible-bound Value Set for context (ObservationDefinition.qualifiedInterval.context)
     */
    static get contextExtensibleCodings(): {
        readonly Endocrine: fhir.Coding;
        readonly FollicularStage: fhir.Coding;
        readonly Luteal: fhir.Coding;
        readonly MidCycle: fhir.Coding;
        readonly NormalRange: fhir.Coding;
        readonly PostTherapeuticDesiredLevel: fhir.Coding;
        readonly PostMenopause: fhir.Coding;
        readonly PreTherapeuticDesiredLevel: fhir.Coding;
        readonly PrePuberty: fhir.Coding;
        readonly RecommendedRange: fhir.Coding;
        readonly TherapeuticDesiredLevel: fhir.Coding;
        readonly TreatmentRange: fhir.Coding;
        readonly Type: fhir.Coding;
    };
    /**
     * Required-bound Value Set for gender (ObservationDefinition.qualifiedInterval.gender)
     */
    static get genderRequiredCodes(): {
        readonly Female: "female";
        readonly Male: "male";
        readonly Other: "other";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ObservationDefinition type.
 */
export interface ObservationDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition" | undefined;
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: fhir.FhirCode<PermittedDataTypeCodeType>[] | string[] | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: fhir.FhirString | string | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetailsArgs | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.ObservationDefinitionQualifiedIntervalArgs[] | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.ReferenceArgs | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.ReferenceArgs | undefined;
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.ReferenceArgs | undefined;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.ReferenceArgs | undefined;
}
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export declare class ObservationDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition";
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category: fhir.CodeableConcept[];
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConcept | null;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier: fhir.Identifier[];
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType: fhir.FhirCode<PermittedDataTypeCodeType>[];
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: fhir.FhirBoolean | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: fhir.FhirString | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetails | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval: fhir.ObservationDefinitionQualifiedInterval[];
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.Reference | undefined;
    /**
     * Default constructor for ObservationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for permittedDataType (ObservationDefinition.permittedDataType)
     */
    static get permittedDataTypeRequiredCodes(): {
        readonly VALBoolean: "boolean";
        readonly CodeableConcept: "CodeableConcept";
        readonly DateTime: "dateTime";
        readonly Integer: "integer";
        readonly Period: "Period";
        readonly Quantity: "Quantity";
        readonly Range: "Range";
        readonly Ratio: "Ratio";
        readonly SampledData: "SampledData";
        readonly VALString: "string";
        readonly Time: "time";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=ObservationDefinition.d.ts.map