import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.FhirElementArgs {
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: fhir.FhirCode | string | undefined;
}
/**
 * An amount of economic utility in some recognized currency.
 */
export declare class Money extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MoneyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for currency (Money.currency)
     */
    static get currencyRequiredCodes(): {
        readonly UnitedArabEmiratesDirham: "AED";
        readonly AfghanAfghani: "AFN";
        readonly AlbanianLek: "ALL";
        readonly ArmenianDram: "AMD";
        readonly NetherlandsAntilleanGuilder: "ANG";
        readonly AngolanKwanza: "AOA";
        readonly ArgentinePeso: "ARS";
        readonly AustralianDollar: "AUD";
        /**
         * An amount of economic utility in some recognized currency.
         */
        readonly ArubanFlorin: "AWG";
        readonly AzerbaijaniManat: "AZN";
        readonly BosniaAndHerzegovinaConvertibleMark: "BAM";
        readonly BarbadosDollar: "BBD";
        readonly BangladeshiTaka: "BDT";
        readonly BulgarianLev: "BGN";
        readonly BahrainiDinar: "BHD";
        readonly BurundianFranc: "BIF";
        readonly BermudianDollar: "BMD";
        readonly BruneiDollar: "BND";
        readonly Boliviano: "BOB";
        readonly BolivianMvdolFundsCode: "BOV";
        readonly BrazilianReal: "BRL";
        readonly BahamianDollar: "BSD";
        readonly BhutaneseNgultrum: "BTN";
        readonly BotswanaPula: "BWP";
        readonly BelarusianRuble: "BYN";
        readonly BelizeDollar: "BZD";
        readonly CanadianDollar: "CAD";
        readonly CongoleseFranc: "CDF";
        readonly WIREuroComplementaryCurrency: "CHE";
        readonly SwissFranc: "CHF";
        readonly WIRFrancComplementaryCurrency: "CHW";
        readonly UnidadDeFomentoFundsCode: "CLF";
        readonly ChileanPeso: "CLP";
        readonly RenminbiChineseYuan8: "CNY";
        readonly ColombianPeso: "COP";
        readonly UnidadDeValorRealUVRFundsCode9: "COU";
        readonly CostaRicanColon: "CRC";
        readonly CubanConvertiblePeso: "CUC";
        readonly CubanPeso: "CUP";
        readonly CapeVerdeEscudo: "CVE";
        readonly CzechKoruna: "CZK";
        readonly DjiboutianFranc: "DJF";
        readonly DanishKrone: "DKK";
        readonly DominicanPeso: "DOP";
        readonly AlgerianDinar: "DZD";
        readonly EgyptianPound: "EGP";
        readonly EritreanNakfa: "ERN";
        readonly EthiopianBirr: "ETB";
        readonly Euro: "EUR";
        readonly FijiDollar: "FJD";
        readonly FalklandIslandsPound: "FKP";
        readonly PoundSterling: "GBP";
        readonly GeorgianLari: "GEL";
        readonly GuernseyPound: "GGP";
        readonly GhanaianCedi: "GHS";
        readonly GibraltarPound: "GIP";
        readonly GambianDalasi: "GMD";
        readonly GuineanFranc: "GNF";
        readonly GuatemalanQuetzal: "GTQ";
        readonly GuyaneseDollar: "GYD";
        readonly HongKongDollar: "HKD";
        readonly HonduranLempira: "HNL";
        readonly CroatianKuna: "HRK";
        readonly HaitianGourde: "HTG";
        readonly HungarianForint: "HUF";
        readonly IndonesianRupiah: "IDR";
        readonly IsraeliNewShekel: "ILS";
        readonly IsleOfManPound: "IMP";
        readonly IndianRupee: "INR";
        readonly IraqiDinar: "IQD";
        readonly IranianRial: "IRR";
        readonly IcelandicKrona: "ISK";
        readonly JerseyPound: "JEP";
        readonly JamaicanDollar: "JMD";
        readonly JordanianDinar: "JOD";
        readonly JapaneseYen: "JPY";
        readonly KenyanShilling: "KES";
        readonly KyrgyzstaniSom: "KGS";
        readonly CambodianRiel: "KHR";
        readonly ComoroFranc: "KMF";
        readonly NorthKoreanWon: "KPW";
        readonly SouthKoreanWon: "KRW";
        readonly KuwaitiDinar: "KWD";
        readonly CaymanIslandsDollar: "KYD";
        readonly KazakhstaniTenge: "KZT";
        readonly LaoKip: "LAK";
        readonly LebanesePound: "LBP";
        readonly SriLankanRupee: "LKR";
        readonly LiberianDollar: "LRD";
        readonly LesothoLoti: "LSL";
        readonly LibyanDinar: "LYD";
        readonly MoroccanDirham: "MAD";
        readonly MoldovanLeu: "MDL";
        readonly MalagasyAriary: "MGA";
        readonly MacedonianDenar: "MKD";
        readonly MyanmarKyat: "MMK";
        readonly MongolianTogrog: "MNT";
        readonly MacanesePataca: "MOP";
        readonly MauritanianOuguiya: "MRU";
        readonly MauritianRupee: "MUR";
        readonly MaldivianRufiyaa: "MVR";
        readonly MalawianKwacha: "MWK";
        readonly MexicanPeso: "MXN";
        readonly MexicanUnidadDeInversionUDIFundsCode: "MXV";
        readonly MalaysianRinggit: "MYR";
        readonly MozambicanMetical: "MZN";
        readonly NamibianDollar: "NAD";
        readonly NigerianNaira: "NGN";
        readonly NicaraguanCordoba: "NIO";
        readonly NorwegianKrone: "NOK";
        readonly NepaleseRupee: "NPR";
        readonly NewZealandDollar: "NZD";
        readonly OmaniRial: "OMR";
        readonly PanamanianBalboa: "PAB";
        readonly PeruvianSol: "PEN";
        readonly PapuaNewGuineanKina: "PGK";
        readonly PhilippinePiso13: "PHP";
        readonly PakistaniRupee: "PKR";
        readonly PolishZłoty: "PLN";
        readonly ParaguayanGuarani: "PYG";
        readonly QatariRiyal: "QAR";
        readonly RomanianLeu: "RON";
        readonly SerbianDinar: "RSD";
        readonly RussianRuble: "RUB";
        readonly RwandanFranc: "RWF";
        readonly SaudiRiyal: "SAR";
        readonly SolomonIslandsDollar: "SBD";
        readonly SeychellesRupee: "SCR";
        readonly SudanesePound: "SDG";
        readonly SwedishKronaKronor: "SEK";
        readonly SingaporeDollar: "SGD";
        readonly SaintHelenaPound: "SHP";
        readonly SierraLeoneanLeone: "SLL";
        readonly SomaliShilling: "SOS";
        readonly SurinameseDollar: "SRD";
        readonly SouthSudanesePound: "SSP";
        readonly SaoTomeAndPrincipeDobra: "STN";
        readonly SalvadoranColon: "SVC";
        readonly SyrianPound: "SYP";
        readonly SwaziLilangeni: "SZL";
        readonly ThaiBaht: "THB";
        readonly TajikistaniSomoni: "TJS";
        readonly TurkmenistanManat: "TMT";
        readonly TunisianDinar: "TND";
        readonly TonganPaanga: "TOP";
        readonly TurkishLira: "TRY";
        readonly TrinidadAndTobagoDollar: "TTD";
        readonly TuvaluDollar: "TVD";
        readonly NewTaiwanDollar: "TWD";
        readonly TanzanianShilling: "TZS";
        readonly UkrainianHryvnia: "UAH";
        readonly UgandanShilling: "UGX";
        readonly UnitedStatesDollar: "USD";
        readonly UnitedStatesDollarNextDayFundsCode: "USN";
        readonly UruguayPesoEnUnidadesIndexadasURUIURUIFundsCode: "UYI";
        readonly UruguayanPeso: "UYU";
        readonly UzbekistanSom: "UZS";
        readonly VenezuelanBolivar: "VEF";
        readonly VietnameseĐong: "VND";
        readonly VanuatuVatu: "VUV";
        readonly SamoanTala: "WST";
        readonly CFAFrancBEAC: "XAF";
        readonly SilverOneTroyOunce: "XAG";
        readonly GoldOneTroyOunce: "XAU";
        readonly EuropeanCompositeUnitEURCOBondMarketUnit: "XBA";
        readonly EuropeanMonetaryUnitEMU6BondMarketUnit: "XBB";
        readonly EuropeanUnitOfAccount9EUA9BondMarketUnit: "XBC";
        readonly EuropeanUnitOfAccount17EUA17BondMarketUnit: "XBD";
        readonly EastCaribbeanDollar: "XCD";
        readonly SpecialDrawingRights: "XDR";
        readonly CFAFrancBCEAO: "XOF";
        readonly PalladiumOneTroyOunce: "XPD";
        readonly CFPFrancFrancPacifique: "XPF";
        readonly PlatinumOneTroyOunce: "XPT";
        readonly SUCRE: "XSU";
        readonly CodeReservedForTestingPurposes: "XTS";
        readonly ADBUnitOfAccount: "XUA";
        readonly NoCurrency: "XXX";
        readonly YemeniRial: "YER";
        readonly SouthAfricanRand: "ZAR";
        readonly ZambianKwacha: "ZMW";
        readonly ZimbabweanDollarA10: "ZWL";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Money.d.ts.map