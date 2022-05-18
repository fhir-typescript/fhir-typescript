/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vaccine-code|4.0.1
/**
 * This identifies the vaccine substance administered - CVX codes.
 */
var VaccineCodeCodes = {
    /**
     * Code: 01
     */
    DTP: "01",
    /**
     * Code: 02
     */
    OPV: "02",
    /**
     * Code: 03
     */
    MMR: "03",
    /**
     * Code: 04
     */
    MR: "04",
    /**
     * Code: 05
     */
    Measles: "05",
    /**
     * Code: 06
     */
    Rubella: "06",
    /**
     * Code: 07
     */
    Mumps: "07",
    /**
     * Code: 08
     */
    HepBAdolescentOrPediatric: "08",
    /**
     * Code: 09
     */
    TdAdult2LfTetanusToxoidPreservativeFreeAdsorbed: "09",
    /**
     * Code: 10
     */
    IPV: "10",
    /**
     * Code: 100
     */
    PneumococcalConjugatePCV7: "100",
    /**
     * Code: 101
     */
    TyphoidViCPs: "101",
    /**
     * Code: 102
     */
    DTPHibHepB: "102",
    /**
     * Code: 103
     */
    MeningococcalCConjugate: "103",
    /**
     * Code: 104
     */
    HepAHepB: "104",
    /**
     * Code: 105
     */
    VacciniaSmallpoxDiluted: "105",
    /**
     * Code: 106
     */
    DTaP5PertussisAntigens: "106",
    /**
     * Code: 107
     */
    DTaPUnspecifiedFormulation: "107",
    /**
     * Code: 108
     */
    MeningococcalACWYUnspecifiedFormulation: "108",
    /**
     * Code: 109
     */
    PneumococcalUnspecifiedFormulation: "109",
    /**
     * Code: 11
     */
    Pertussis: "11",
    /**
     * Code: 110
     */
    DTaPHepBIPV: "110",
    /**
     * Code: 111
     */
    InfluenzaLiveIntranasal: "111",
    /**
     * Code: 112
     */
    TetanusToxoidUnspecifiedFormulation: "112",
    /**
     * Code: 113
     */
    TdAdult5LfTetanusToxoidPreservativeFreeAdsorbed: "113",
    /**
     * Code: 114
     */
    MeningococcalMCV4P: "114",
    /**
     * Code: 115
     */
    Tdap: "115",
    /**
     * Code: 116
     */
    RotavirusPentavalent: "116",
    /**
     * Code: 117
     */
    VZIGIND: "117",
    /**
     * Code: 118
     */
    HPVBivalent: "118",
    /**
     * Code: 119
     */
    RotavirusMonovalent: "119",
    /**
     * Code: 12
     */
    DiphtheriaAntitoxin: "12",
    /**
     * Code: 120
     */
    DTaPHibIPV: "120",
    /**
     * Code: 121
     */
    ZosterLive: "121",
    /**
     * Code: 122
     */
    RotavirusUnspecifiedFormulation: "122",
    /**
     * Code: 123
     */
    InfluenzaH5N11203: "123",
    /**
     * Code: 125
     */
    NovelInfluenzaH1N109Nasal: "125",
    /**
     * Code: 126
     */
    NovelInfluenzaH1N109PreservativeFree: "126",
    /**
     * Code: 127
     */
    NovelInfluenzaH1N109: "127",
    /**
     * Code: 128
     */
    NovelInfluenzaH1N109AllFormulations: "128",
    /**
     * Code: 129
     */
    JapaneseEncephalitisUnspecifiedFormulation: "129",
    /**
     * Code: 13
     */
    TIG: "13",
    /**
     * Code: 130
     */
    DTaPIPV: "130",
    /**
     * Code: 131
     */
    TyphusHistorical: "131",
    /**
     * Code: 132
     */
    DTaPIPVHIBHEPBHistorical: "132",
    /**
     * Code: 133
     */
    PneumococcalConjugatePCV13: "133",
    /**
     * Code: 134
     */
    JapaneseEncephalitisIM: "134",
    /**
     * Code: 135
     */
    InfluenzaHighDoseSeasonal: "135",
    /**
     * Code: 136
     */
    MeningococcalMCV4O: "136",
    /**
     * Code: 137
     */
    HPVUnspecifiedFormulation: "137",
    /**
     * Code: 138
     */
    TdAdult: "138",
    /**
     * Code: 139
     */
    TdAdultUnspecifiedFormulation: "139",
    /**
     * Code: 14
     */
    IGUnspecifiedFormulation: "14",
    /**
     * Code: 140
     */
    InfluenzaSeasonalInjectablePreservativeFree: "140",
    /**
     * Code: 141
     */
    InfluenzaSeasonalInjectable: "141",
    /**
     * Code: 142
     */
    TetanusToxoidNotAdsorbed: "142",
    /**
     * Code: 143
     */
    AdenovirusTypes4And7: "143",
    /**
     * Code: 144
     */
    InfluenzaSeasonalIntradermalPreservativeFree: "144",
    /**
     * Code: 145
     */
    RSVMAbNew: "145",
    /**
     * Code: 146
     */
    DTaPIPVHibHepB: "146",
    /**
     * Code: 147
     */
    MeningococcalMCV4UnspecifiedFormulation: "147",
    /**
     * Code: 148
     */
    MeningococcalCYHIBPRP: "148",
    /**
     * Code: 149
     */
    InfluenzaLiveIntranasalQuadrivalent: "149",
    /**
     * Code: 15
     */
    InfluenzaSplitInclPurifiedSurfaceAntigen: "15",
    /**
     * Code: 150
     */
    InfluenzaInjectableQuadrivalentPreservativeFree: "150",
    /**
     * Code: 151
     */
    InfluenzaNasalUnspecifiedFormulation: "151",
    /**
     * Code: 152
     */
    PneumococcalConjugateUnspecifiedFormulation: "152",
    /**
     * Code: 153
     */
    InfluenzaInjectableMDCKPreservativeFree: "153",
    /**
     * Code: 154
     */
    HepAIG: "154",
    /**
     * Code: 155
     */
    InfluenzaRecombinantInjectablePreservativeFree: "155",
    /**
     * Code: 156
     */
    RhoDIG: "156",
    /**
     * Code: 157
     */
    RhoDIGIM: "157",
    /**
     * Code: 158
     */
    InfluenzaInjectableQuadrivalent: "158",
    /**
     * Code: 159
     */
    RhoDUnspecifiedFormulation: "159",
    /**
     * Code: 16
     */
    InfluenzaWhole: "16",
    /**
     * Code: 160
     */
    InfluenzaAMonovalentH5N1ADJUVANTED2013: "160",
    /**
     * Code: 161
     */
    InfluenzaInjectableQuadrivalentPreservativeFreePediatric: "161",
    /**
     * Code: 162
     */
    MeningococcalBRecombinant: "162",
    /**
     * Code: 163
     */
    MeningococcalBOMV: "163",
    /**
     * Code: 164
     */
    MeningococcalBUnspecified: "164",
    /**
     * Code: 165
     */
    HPV9: "165",
    /**
     * Code: 166
     */
    InfluenzaIntradermalQuadrivalentPreservativeFree: "166",
    /**
     * Code: 167
     */
    MeningococcalUnknownSerogroups: "167",
    /**
     * Code: 168
     */
    InfluenzaTrivalentAdjuvanted: "168",
    /**
     * Code: 169
     */
    HepALiveAttenuated: "169",
    /**
     * Code: 17
     */
    HibUnspecifiedFormulation: "17",
    /**
     * Code: 170
     */
    DTAPIPVHIBNonUS: "170",
    /**
     * Code: 171
     */
    InfluenzaInjectableMDCKPreservativeFreeQuadrivalent: "171",
    /**
     * Code: 172
     */
    CholeraWCRBS: "172",
    /**
     * Code: 173
     */
    CholeraBivWC: "173",
    /**
     * Code: 174
     */
    CholeraLiveAttenuated: "174",
    /**
     * Code: 175
     */
    RabiesIMDiploidCellCulture: "175",
    /**
     * Code: 176
     */
    RabiesIMFibroblastCulture: "176",
    /**
     * Code: 177
     */
    PCV10: "177",
    /**
     * Code: 178
     */
    OPVBivalent: "178",
    /**
     * Code: 179
     */
    OPVMonovalentUnspecified: "179",
    /**
     * Code: 18
     */
    RabiesIntramuscularInjection: "18",
    /**
     * Code: 180
     */
    TetanusImmuneGlobulin: "180",
    /**
     * Code: 181
     */
    AnthraxImmuneGlobulin: "181",
    /**
     * Code: 182
     */
    OPVUnspecified: "182",
    /**
     * Code: 183
     */
    YellowFeverVaccineAlt: "183",
    /**
     * Code: 184
     */
    YellowFeverUnspecifiedFormulation: "184",
    /**
     * Code: 185
     */
    InfluenzaRecombinantQuadrivalentInjectablePreservativeFree: "185",
    /**
     * Code: 186
     */
    InfluenzaInjectableMDCKQuadrivalentPreservative: "186",
    /**
     * Code: 187
     */
    ZosterRecombinant: "187",
    /**
     * Code: 188
     */
    ZosterUnspecifiedFormulation: "188",
    /**
     * Code: 189
     */
    HepBCpG: "189",
    /**
     * Code: 19
     */
    BCG: "19",
    /**
     * Code: 190
     */
    TyphoidConjugateVaccineTCV: "190",
    /**
     * Code: 191
     */
    MeningococcalAPolysaccharideNonUS: "191",
    /**
     * Code: 192
     */
    MeningococcalACPolysaccharideNonUS: "192",
    /**
     * Code: 193
     */
    HepAHepBPediatricAdolescent: "193",
    /**
     * Code: 20
     */
    DTaP: "20",
    /**
     * Code: 21
     */
    Varicella: "21",
    /**
     * Code: 22
     */
    DTPHib: "22",
    /**
     * Code: 23
     */
    Plague: "23",
    /**
     * Code: 24
     */
    Anthrax: "24",
    /**
     * Code: 25
     */
    TyphoidOral: "25",
    /**
     * Code: 26
     */
    CholeraUnspecifiedFormulation: "26",
    /**
     * Code: 27
     */
    BotulinumAntitoxin: "27",
    /**
     * Code: 28
     */
    DTPediatric: "28",
    /**
     * Code: 29
     */
    CMVIG: "29",
    /**
     * Code: 30
     */
    HBIG: "30",
    /**
     * Code: 31
     */
    HepAPediatricUnspecifiedFormulation: "31",
    /**
     * Code: 32
     */
    MeningococcalMPSV4: "32",
    /**
     * Code: 33
     */
    PneumococcalPolysaccharidePPV23: "33",
    /**
     * Code: 34
     */
    RIG: "34",
    /**
     * Code: 35
     */
    TetanusToxoidAdsorbed: "35",
    /**
     * Code: 36
     */
    VZIG: "36",
    /**
     * Code: 37
     */
    YellowFever: "37",
    /**
     * Code: 38
     */
    RubellaMumps: "38",
    /**
     * Code: 39
     */
    JapaneseEncephalitisSC: "39",
    /**
     * Code: 40
     */
    RabiesIntradermalInjection: "40",
    /**
     * Code: 41
     */
    TyphoidParenteral: "41",
    /**
     * Code: 42
     */
    HepBAdolescentHighRiskInfant: "42",
    /**
     * Code: 43
     */
    HepBAdult: "43",
    /**
     * Code: 44
     */
    HepBDialysis: "44",
    /**
     * Code: 45
     */
    HepBUnspecifiedFormulation: "45",
    /**
     * Code: 46
     */
    HibPRPD: "46",
    /**
     * Code: 47
     */
    HibHbOC: "47",
    /**
     * Code: 48
     */
    HibPRPT: "48",
    /**
     * Code: 49
     */
    HibPRPOMP: "49",
    /**
     * Code: 50
     */
    DTaPHib: "50",
    /**
     * Code: 51
     */
    HibHepB: "51",
    /**
     * Code: 52
     */
    HepAAdult: "52",
    /**
     * Code: 53
     */
    TyphoidParenteralAKDUSMilitary: "53",
    /**
     * Code: 54
     */
    AdenovirusType4: "54",
    /**
     * Code: 55
     */
    AdenovirusType7: "55",
    /**
     * Code: 56
     */
    DengueFever: "56",
    /**
     * Code: 57
     */
    Hantavirus: "57",
    /**
     * Code: 58
     */
    HepC: "58",
    /**
     * Code: 59
     */
    HepE: "59",
    /**
     * Code: 60
     */
    HerpesSimplex2: "60",
    /**
     * Code: 61
     */
    HIV: "61",
    /**
     * Code: 62
     */
    HPVQuadrivalent: "62",
    /**
     * Code: 63
     */
    JuninVirus: "63",
    /**
     * Code: 64
     */
    Leishmaniasis: "64",
    /**
     * Code: 65
     */
    Leprosy: "65",
    /**
     * Code: 66
     */
    LymeDisease: "66",
    /**
     * Code: 67
     */
    Malaria: "67",
    /**
     * Code: 68
     */
    Melanoma: "68",
    /**
     * Code: 69
     */
    Parainfluenza3: "69",
    /**
     * Code: 70
     */
    QFever: "70",
    /**
     * Code: 71
     */
    RSVIGIV: "71",
    /**
     * Code: 72
     */
    RheumaticFever: "72",
    /**
     * Code: 73
     */
    RiftValleyFever: "73",
    /**
     * Code: 74
     */
    RotavirusTetravalent: "74",
    /**
     * Code: 75
     */
    VacciniaSmallpox: "75",
    /**
     * Code: 76
     */
    StaphylococcusBacterioLysate: "76",
    /**
     * Code: 77
     */
    TickBorneEncephalitis: "77",
    /**
     * Code: 78
     */
    TularemiaVaccine: "78",
    /**
     * Code: 79
     */
    VacciniaImmuneGlobulin: "79",
    /**
     * Code: 80
     */
    VEELive: "80",
    /**
     * Code: 801
     */
    AS03Adjuvant: "801",
    /**
     * Code: 81
     */
    VEEInactivated: "81",
    /**
     * Code: 82
     */
    AdenovirusUnspecifiedFormulation: "82",
    /**
     * Code: 83
     */
    HepAPedAdol2Dose: "83",
    /**
     * Code: 84
     */
    HepAPedAdol3Dose: "84",
    /**
     * Code: 85
     */
    HepAUnspecifiedFormulation: "85",
    /**
     * Code: 86
     */
    IG: "86",
    /**
     * Code: 87
     */
    IGIV: "87",
    /**
     * Code: 88
     */
    InfluenzaUnspecifiedFormulation: "88",
    /**
     * Code: 89
     */
    PolioUnspecifiedFormulation: "89",
    /**
     * Code: 90
     */
    RabiesUnspecifiedFormulation: "90",
    /**
     * Code: 91
     */
    TyphoidUnspecifiedFormulation: "91",
    /**
     * Code: 92
     */
    VEEUnspecifiedFormulation: "92",
    /**
     * Code: 93
     */
    RSVMAb: "93",
    /**
     * Code: 94
     */
    MMRV: "94",
    /**
     * Code: 95
     */
    TSTOTTineTest: "95",
    /**
     * Code: 96
     */
    TSTPPDIntradermal: "96",
    /**
     * Code: 97
     */
    TSTPPDTineTest: "97",
    /**
     * Code: 98
     */
    TSTUnspecifiedFormulation: "98",
    /**
     * Code: 99
     */
    RESERVEDDoNotUse: "99",
    /**
     * Code: 998
     */
    NoVaccineAdministered: "998",
    /**
     * Code: 999
     */
    Unknown: "999",
    /**
     * Code: AGRPAL
     */
    Agrippal: "AGRPAL",
    /**
     * Code: AVAXM
     */
    Avaxim: "AVAXM",
    /**
     * Code: BCG
     */
    BCGBCG: "BCG",
    /**
     * Code: CDT
     */
    CDT: "CDT",
    /**
     * Code: CMX
     */
    COMVAX: "CMX",
    /**
     * Code: DTP
     */
    TripleAntigen: "DTP",
    /**
     * Code: DTPA
     */
    DTPa: "DTPA",
    /**
     * Code: ENGP
     */
    EngerixB: "ENGP",
    /**
     * Code: FLRIX
     */
    Fluarix: "FLRIX",
    /**
     * Code: FLUVAX
     */
    Fluvax: "FLUVAX",
    /**
     * Code: FLVRN
     */
    Fluvirin: "FLVRN",
    /**
     * Code: FVXJNR
     */
    FluvaxJunior: "FVXJNR",
    /**
     * Code: GNDIP
     */
    Diphtheria: "GNDIP",
    /**
     * Code: GNFLU
     */
    Influenza: "GNFLU",
    /**
     * Code: GNHEP
     */
    HepatitisB: "GNHEP",
    /**
     * Code: GNHIB
     */
    HIB: "GNHIB",
    /**
     * Code: GNHPA
     */
    HepatitisA: "GNHPA",
    /**
     * Code: GNJEN
     */
    JapaneseEncephalitis: "GNJEN",
    /**
     * Code: GNMEA
     */
    MeaslesGNMEA: "GNMEA",
    /**
     * Code: GNMEN
     */
    MeningococcalC: "GNMEN",
    /**
     * Code: GNMUM
     */
    MumpsGNMUM: "GNMUM",
    /**
     * Code: GNPNE
     */
    Pneumococcal: "GNPNE",
    /**
     * Code: GNPOL
     */
    Polio: "GNPOL",
    /**
     * Code: GNROX
     */
    Rotavirus: "GNROX",
    /**
     * Code: GNRUB
     */
    RubellaGNRUB: "GNRUB",
    /**
     * Code: GNTET
     */
    Tetanus: "GNTET",
    /**
     * Code: GNVAR
     */
    VaricellaGNVAR: "GNVAR",
    /**
     * Code: HATWNJ
     */
    TwinrixJunior: "HATWNJ",
    /**
     * Code: HAVAQ
     */
    VaqtaPaedAdol: "HAVAQ",
    /**
     * Code: HAVJ
     */
    HavrixJunior: "HAVJ",
    /**
     * Code: HBOC
     */
    HibTITER: "HBOC",
    /**
     * Code: HBV
     */
    HBV: "HBV",
    /**
     * Code: HBVP
     */
    HBVAXII: "HBVP",
    /**
     * Code: HBX
     */
    Hiberix: "HBX",
    /**
     * Code: IFHX
     */
    InfanrixHexa: "IFHX",
    /**
     * Code: IFIP
     */
    InfanrixIPV: "IFIP",
    /**
     * Code: IFPA
     */
    InfanrixPenta: "IFPA",
    /**
     * Code: IFX
     */
    Infanrix: "IFX",
    /**
     * Code: IFXB
     */
    InfanrixHepB: "IFXB",
    /**
     * Code: INFLUV
     */
    Influvac: "INFLUV",
    /**
     * Code: IPV
     */
    IPOL: "IPV",
    /**
     * Code: JEVAX
     */
    JEVAX: "JEVAX",
    /**
     * Code: MENJUG
     */
    Menjugate: "MENJUG",
    /**
     * Code: MENTEC
     */
    Meningitec: "MENTEC",
    /**
     * Code: MENUME
     */
    Menomune: "MENUME",
    /**
     * Code: MENVAX
     */
    MencevaxACWY: "MENVAX",
    /**
     * Code: MMR
     */
    MMRMMR: "MMR",
    /**
     * Code: MMRCSL
     */
    MMRII: "MMRCSL",
    /**
     * Code: MMRSKB
     */
    Priorix: "MMRSKB",
    /**
     * Code: MNTRX
     */
    Menitorix: "MNTRX",
    /**
     * Code: NEISVC
     */
    NeisVacC: "NEISVC",
    /**
     * Code: OPV
     */
    PolioOPV: "OPV",
    /**
     * Code: P
     */
    PertussisP: "P",
    /**
     * Code: PANVAX
     */
    Panvax: "PANVAX",
    /**
     * Code: PDCL
     */
    Pediacel: "PDCL",
    /**
     * Code: PLCL
     */
    Poliacel: "PLCL",
    /**
     * Code: PNEUMO
     */
    Pneumovax: "PNEUMO",
    /**
     * Code: PROQAD
     */
    ProQuad: "PROQAD",
    /**
     * Code: PRPD
     */
    ProHIBit: "PRPD",
    /**
     * Code: PRPOMP
     */
    PedvaxHIB: "PRPOMP",
    /**
     * Code: PRPT
     */
    ActHIB: "PRPT",
    /**
     * Code: PRVNR
     */
    Prevenar7: "PRVNR",
    /**
     * Code: PRVTH
     */
    Prevenar13: "PRVTH",
    /**
     * Code: PRXTEX
     */
    PriorixTetra: "PRXTEX",
    /**
     * Code: QDCL
     */
    Quadracel: "QDCL",
    /**
     * Code: ROTRIX
     */
    Rotarix: "ROTRIX",
    /**
     * Code: ROTTEQ
     */
    Rotateq: "ROTTEQ",
    /**
     * Code: SYNFLX
     */
    Synflorix: "SYNFLX",
    /**
     * Code: TCL
     */
    Tripacel: "TCL",
    /**
     * Code: VAXGRP
     */
    Vaxigrip: "VAXGRP",
    /**
     * Code: VGRJNR
     */
    VaxigripJunior: "VGRJNR",
    /**
     * Code: VLRIX
     */
    Varilrix: "VLRIX",
    /**
     * Code: VRVAX
     */
    Varivax: "VRVAX",
};

export { VaccineCodeCodes };
//# sourceMappingURL=VaccineCodeCodes.js.map
