import { CodingArgs } from '../fhir/Coding.js';
/**
 * This identifies the vaccine substance administered - CVX codes.
 */
export declare type VaccineCodingType = {
    /**
     * Code: 01
     */
    DTP: CodingArgs;
    /**
     * Code: 02
     */
    OPV: CodingArgs;
    /**
     * Code: 03
     */
    MMR: CodingArgs;
    /**
     * Code: 04
     */
    MR: CodingArgs;
    /**
     * Code: 05
     */
    Measles: CodingArgs;
    /**
     * Code: 06
     */
    Rubella: CodingArgs;
    /**
     * Code: 07
     */
    Mumps: CodingArgs;
    /**
     * Code: 08
     */
    HepBAdolescentOrPediatric: CodingArgs;
    /**
     * Code: 09
     */
    TdAdultAdsorbed: CodingArgs;
    /**
     * Code: 10
     */
    IPV: CodingArgs;
    /**
     * Code: 100
     */
    PneumococcalConjugatePCV7: CodingArgs;
    /**
     * Code: 101
     */
    TyphoidViCPs: CodingArgs;
    /**
     * Code: 102
     */
    DTaPDTPHibHepB: CodingArgs;
    /**
     * Code: 103
     */
    MeningococcalCConjugate: CodingArgs;
    /**
     * Code: 104
     */
    HepAHepB: CodingArgs;
    /**
     * Code: 105
     */
    VacciniaSmallpoxDiluted: CodingArgs;
    /**
     * Code: 106
     */
    DTaP5PertussisAntigens: CodingArgs;
    /**
     * Code: 107
     */
    DTaPUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 108
     */
    MeningococcalUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 109
     */
    PneumococcalUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 11
     */
    Pertussis: CodingArgs;
    /**
     * Code: 110
     */
    DTaPHepBIPV: CodingArgs;
    /**
     * Code: 111
     */
    InfluenzaLiveIntranasal: CodingArgs;
    /**
     * Code: 112
     */
    TetanusToxoidUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 113
     */
    TdAdultPreservativeFree: CodingArgs;
    /**
     * Code: 114
     */
    MeningococcalMCV4P: CodingArgs;
    /**
     * Code: 115
     */
    Tdap: CodingArgs;
    /**
     * Code: 116
     */
    RotavirusPentavalent: CodingArgs;
    /**
     * Code: 117
     */
    VZIGIND: CodingArgs;
    /**
     * Code: 118
     */
    HPVBivalent: CodingArgs;
    /**
     * Code: 119
     */
    RotavirusMonovalent: CodingArgs;
    /**
     * Code: 12
     */
    DiphtheriaAntitoxin: CodingArgs;
    /**
     * Code: 120
     */
    DTaPHibIPV: CodingArgs;
    /**
     * Code: 121
     */
    Zoster: CodingArgs;
    /**
     * Code: 122
     */
    RotavirusUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 123
     */
    InfluenzaH5N11203: CodingArgs;
    /**
     * Code: 125
     */
    NovelInfluenzaH1N109Nasal: CodingArgs;
    /**
     * Code: 126
     */
    NovelInfluenzaH1N109PreservativeFree: CodingArgs;
    /**
     * Code: 127
     */
    NovelInfluenzaH1N109: CodingArgs;
    /**
     * Code: 128
     */
    NovelInfluenzaH1N109AllFormulations: CodingArgs;
    /**
     * Code: 129
     */
    JapaneseEncephalitisUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 13
     */
    TIG: CodingArgs;
    /**
     * Code: 130
     */
    DTaPIPV: CodingArgs;
    /**
     * Code: 131
     */
    TyphusHistorical: CodingArgs;
    /**
     * Code: 132
     */
    DTaPIPVHIBHEPBHistorical: CodingArgs;
    /**
     * Code: 133
     */
    PneumococcalConjugatePCV13: CodingArgs;
    /**
     * Code: 134
     */
    JapaneseEncephalitisIM: CodingArgs;
    /**
     * Code: 135
     */
    InfluenzaHighDoseSeasonal: CodingArgs;
    /**
     * Code: 136
     */
    MeningococcalMCV4O: CodingArgs;
    /**
     * Code: 137
     */
    HPVUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 138
     */
    TdAdult: CodingArgs;
    /**
     * Code: 139
     */
    TdAdultUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 14
     */
    IGUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 140
     */
    InfluenzaSeasonalInjectablePreservativeFree: CodingArgs;
    /**
     * Code: 141
     */
    InfluenzaSeasonalInjectable: CodingArgs;
    /**
     * Code: 142
     */
    TetanusToxoidNotAdsorbed: CodingArgs;
    /**
     * Code: 143
     */
    AdenovirusTypes4And7: CodingArgs;
    /**
     * Code: 144
     */
    InfluenzaSeasonalIntradermalPreservativeFree: CodingArgs;
    /**
     * Code: 145
     */
    RSVMAbNew: CodingArgs;
    /**
     * Code: 146
     */
    DTaPIPVHibHepB: CodingArgs;
    /**
     * Code: 147
     */
    MeningococcalMCV4UnspecifiedFormulation: CodingArgs;
    /**
     * Code: 148
     */
    MeningococcalCYHIBPRP: CodingArgs;
    /**
     * Code: 149
     */
    InfluenzaLiveIntranasalQuadrivalent: CodingArgs;
    /**
     * Code: 15
     */
    InfluenzaSplitInclPurifiedSurfaceAntigen: CodingArgs;
    /**
     * Code: 150
     */
    InfluenzaInjectableQuadrivalentPreservativeFree: CodingArgs;
    /**
     * Code: 151
     */
    InfluenzaNasalUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 152
     */
    PneumococcalConjugateUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 153
     */
    InfluenzaInjectableMDCKPreservativeFree: CodingArgs;
    /**
     * Code: 154
     */
    HepAIG: CodingArgs;
    /**
     * Code: 155
     */
    InfluenzaRecombinantInjectablePreservativeFree: CodingArgs;
    /**
     * Code: 156
     */
    RhoDIG: CodingArgs;
    /**
     * Code: 157
     */
    RhoDIGIM: CodingArgs;
    /**
     * Code: 158
     */
    InfluenzaInjectableQuadrivalent: CodingArgs;
    /**
     * Code: 159
     */
    RhoDUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 16
     */
    InfluenzaWhole: CodingArgs;
    /**
     * Code: 160
     */
    InfluenzaAMonovalentH5N1ADJUVANTED2013: CodingArgs;
    /**
     * Code: 161
     */
    InfluenzaInjectableQuadrivalentPreservativeFreePediatric: CodingArgs;
    /**
     * Code: 162
     */
    MeningococcalBRecombinant: CodingArgs;
    /**
     * Code: 163
     */
    MeningococcalBOMV: CodingArgs;
    /**
     * Code: 164
     */
    MeningococcalBUnspecified: CodingArgs;
    /**
     * Code: 17
     */
    HibUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 18
     */
    RabiesIntramuscularInjection: CodingArgs;
    /**
     * Code: 19
     */
    BCG: CodingArgs;
    /**
     * Code: 20
     */
    DTaP: CodingArgs;
    /**
     * Code: 21
     */
    Varicella: CodingArgs;
    /**
     * Code: 22
     */
    DTPHib: CodingArgs;
    /**
     * Code: 23
     */
    Plague: CodingArgs;
    /**
     * Code: 24
     */
    Anthrax: CodingArgs;
    /**
     * Code: 25
     */
    TyphoidOral: CodingArgs;
    /**
     * Code: 26
     */
    Cholera: CodingArgs;
    /**
     * Code: 27
     */
    BotulinumAntitoxin: CodingArgs;
    /**
     * Code: 28
     */
    DTPediatric: CodingArgs;
    /**
     * Code: 29
     */
    CMVIG: CodingArgs;
    /**
     * Code: 30
     */
    HBIG: CodingArgs;
    /**
     * Code: 31
     */
    HepAPediatricUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 32
     */
    MeningococcalMPSV4: CodingArgs;
    /**
     * Code: 33
     */
    PneumococcalPolysaccharidePPV23: CodingArgs;
    /**
     * Code: 34
     */
    RIG: CodingArgs;
    /**
     * Code: 35
     */
    TetanusToxoidAdsorbed: CodingArgs;
    /**
     * Code: 36
     */
    VZIG: CodingArgs;
    /**
     * Code: 37
     */
    YellowFever: CodingArgs;
    /**
     * Code: 38
     */
    RubellaMumps: CodingArgs;
    /**
     * Code: 39
     */
    JapaneseEncephalitisSC: CodingArgs;
    /**
     * Code: 40
     */
    RabiesIntradermalInjection: CodingArgs;
    /**
     * Code: 41
     */
    TyphoidParenteral: CodingArgs;
    /**
     * Code: 42
     */
    HepBAdolescentHighRiskInfant: CodingArgs;
    /**
     * Code: 43
     */
    HepBAdult: CodingArgs;
    /**
     * Code: 44
     */
    HepBDialysis: CodingArgs;
    /**
     * Code: 45
     */
    HepBUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 46
     */
    HibPRPD: CodingArgs;
    /**
     * Code: 47
     */
    HibHbOC: CodingArgs;
    /**
     * Code: 48
     */
    HibPRPT: CodingArgs;
    /**
     * Code: 49
     */
    HibPRPOMP: CodingArgs;
    /**
     * Code: 50
     */
    DTaPHib: CodingArgs;
    /**
     * Code: 51
     */
    HibHepB: CodingArgs;
    /**
     * Code: 52
     */
    HepAAdult: CodingArgs;
    /**
     * Code: 53
     */
    TyphoidParenteralAKDUSMilitary: CodingArgs;
    /**
     * Code: 54
     */
    AdenovirusType4: CodingArgs;
    /**
     * Code: 55
     */
    AdenovirusType7: CodingArgs;
    /**
     * Code: 56
     */
    DengueFever: CodingArgs;
    /**
     * Code: 57
     */
    Hantavirus: CodingArgs;
    /**
     * Code: 58
     */
    HepC: CodingArgs;
    /**
     * Code: 59
     */
    HepE: CodingArgs;
    /**
     * Code: 60
     */
    HerpesSimplex2: CodingArgs;
    /**
     * Code: 61
     */
    HIV: CodingArgs;
    /**
     * Code: 62
     */
    HPVQuadrivalent: CodingArgs;
    /**
     * Code: 63
     */
    JuninVirus: CodingArgs;
    /**
     * Code: 64
     */
    Leishmaniasis: CodingArgs;
    /**
     * Code: 65
     */
    Leprosy: CodingArgs;
    /**
     * Code: 66
     */
    LymeDisease: CodingArgs;
    /**
     * Code: 67
     */
    Malaria: CodingArgs;
    /**
     * Code: 68
     */
    Melanoma: CodingArgs;
    /**
     * Code: 69
     */
    Parainfluenza3: CodingArgs;
    /**
     * Code: 70
     */
    QFever: CodingArgs;
    /**
     * Code: 71
     */
    RSVIGIV: CodingArgs;
    /**
     * Code: 72
     */
    RheumaticFever: CodingArgs;
    /**
     * Code: 73
     */
    RiftValleyFever: CodingArgs;
    /**
     * Code: 74
     */
    RotavirusTetravalent: CodingArgs;
    /**
     * Code: 75
     */
    VacciniaSmallpox: CodingArgs;
    /**
     * Code: 76
     */
    StaphylococcusBacterioLysate: CodingArgs;
    /**
     * Code: 77
     */
    TickBorneEncephalitis: CodingArgs;
    /**
     * Code: 78
     */
    TularemiaVaccine: CodingArgs;
    /**
     * Code: 79
     */
    VacciniaImmuneGlobulin: CodingArgs;
    /**
     * Code: 80
     */
    VEELive: CodingArgs;
    /**
     * Code: 801
     */
    AS03Adjuvant: CodingArgs;
    /**
     * Code: 81
     */
    VEEInactivated: CodingArgs;
    /**
     * Code: 82
     */
    AdenovirusUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 83
     */
    HepAPedAdol2Dose: CodingArgs;
    /**
     * Code: 84
     */
    HepAPedAdol3Dose: CodingArgs;
    /**
     * Code: 85
     */
    HepAUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 86
     */
    IG: CodingArgs;
    /**
     * Code: 87
     */
    IGIV: CodingArgs;
    /**
     * Code: 88
     */
    InfluenzaUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 89
     */
    PolioUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 90
     */
    RabiesUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 91
     */
    TyphoidUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 92
     */
    VEEUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 93
     */
    RSVMAb: CodingArgs;
    /**
     * Code: 94
     */
    MMRV: CodingArgs;
    /**
     * Code: 95
     */
    TSTOTTineTest: CodingArgs;
    /**
     * Code: 96
     */
    TSTPPDIntradermal: CodingArgs;
    /**
     * Code: 97
     */
    TSTPPDTineTest: CodingArgs;
    /**
     * Code: 98
     */
    TSTUnspecifiedFormulation: CodingArgs;
    /**
     * Code: 99
     */
    RESERVEDDoNotUse: CodingArgs;
    /**
     * Code: 998
     */
    NoVaccineAdministered: CodingArgs;
    /**
     * Code: 999
     */
    Unknown: CodingArgs;
    /**
     * Code: AGRPAL
     */
    Agrippal: CodingArgs;
    /**
     * Code: AVAXM
     */
    Avaxim: CodingArgs;
    /**
     * Code: BCG
     */
    BCGBCG: CodingArgs;
    /**
     * Code: CDT
     */
    CDT: CodingArgs;
    /**
     * Code: CMX
     */
    COMVAX: CodingArgs;
    /**
     * Code: DTP
     */
    TripleAntigen: CodingArgs;
    /**
     * Code: DTPA
     */
    DTPa: CodingArgs;
    /**
     * Code: ENGP
     */
    EngerixB: CodingArgs;
    /**
     * Code: FLRIX
     */
    Fluarix: CodingArgs;
    /**
     * Code: FLUVAX
     */
    Fluvax: CodingArgs;
    /**
     * Code: FLVRN
     */
    Fluvirin: CodingArgs;
    /**
     * Code: FVXJNR
     */
    FluvaxJunior: CodingArgs;
    /**
     * Code: GNDIP
     */
    Diphtheria: CodingArgs;
    /**
     * Code: GNFLU
     */
    Influenza: CodingArgs;
    /**
     * Code: GNHEP
     */
    HepatitisB: CodingArgs;
    /**
     * Code: GNHIB
     */
    HIB: CodingArgs;
    /**
     * Code: GNHPA
     */
    HepatitisA: CodingArgs;
    /**
     * Code: GNJEN
     */
    JapaneseEncephalitis: CodingArgs;
    /**
     * Code: GNMEA
     */
    MeaslesGNMEA: CodingArgs;
    /**
     * Code: GNMEN
     */
    MeningococcalC: CodingArgs;
    /**
     * Code: GNMUM
     */
    MumpsGNMUM: CodingArgs;
    /**
     * Code: GNPNE
     */
    Pneumococcal: CodingArgs;
    /**
     * Code: GNPOL
     */
    Polio: CodingArgs;
    /**
     * Code: GNROX
     */
    Rotavirus: CodingArgs;
    /**
     * Code: GNRUB
     */
    RubellaGNRUB: CodingArgs;
    /**
     * Code: GNTET
     */
    Tetanus: CodingArgs;
    /**
     * Code: GNVAR
     */
    VaricellaGNVAR: CodingArgs;
    /**
     * Code: HATWNJ
     */
    TwinrixJunior: CodingArgs;
    /**
     * Code: HAVAQ
     */
    VaqtaPaedAdol: CodingArgs;
    /**
     * Code: HAVJ
     */
    HavrixJunior: CodingArgs;
    /**
     * Code: HBOC
     */
    HibTITER: CodingArgs;
    /**
     * Code: HBV
     */
    HBV: CodingArgs;
    /**
     * Code: HBVP
     */
    HBVAXII: CodingArgs;
    /**
     * Code: HBX
     */
    Hiberix: CodingArgs;
    /**
     * Code: IFHX
     */
    InfanrixHexa: CodingArgs;
    /**
     * Code: IFIP
     */
    InfanrixIPV: CodingArgs;
    /**
     * Code: IFPA
     */
    InfanrixPenta: CodingArgs;
    /**
     * Code: IFX
     */
    Infanrix: CodingArgs;
    /**
     * Code: IFXB
     */
    InfanrixHepB: CodingArgs;
    /**
     * Code: INFLUV
     */
    Influvac: CodingArgs;
    /**
     * Code: IPV
     */
    IPOL: CodingArgs;
    /**
     * Code: JEVAX
     */
    JEVAX: CodingArgs;
    /**
     * Code: MENJUG
     */
    Menjugate: CodingArgs;
    /**
     * Code: MENTEC
     */
    Meningitec: CodingArgs;
    /**
     * Code: MENUME
     */
    Menomune: CodingArgs;
    /**
     * Code: MENVAX
     */
    MencevaxACWY: CodingArgs;
    /**
     * Code: MMR
     */
    MMRMMR: CodingArgs;
    /**
     * Code: MMRCSL
     */
    MMRII: CodingArgs;
    /**
     * Code: MMRSKB
     */
    Priorix: CodingArgs;
    /**
     * Code: MNTRX
     */
    Menitorix: CodingArgs;
    /**
     * Code: NEISVC
     */
    NeisVacC: CodingArgs;
    /**
     * Code: OPV
     */
    PolioOPV: CodingArgs;
    /**
     * Code: P
     */
    PertussisP: CodingArgs;
    /**
     * Code: PANVAX
     */
    Panvax: CodingArgs;
    /**
     * Code: PDCL
     */
    Pediacel: CodingArgs;
    /**
     * Code: PLCL
     */
    Poliacel: CodingArgs;
    /**
     * Code: PNEUMO
     */
    Pneumovax: CodingArgs;
    /**
     * Code: PROQAD
     */
    ProQuad: CodingArgs;
    /**
     * Code: PRPD
     */
    ProHIBit: CodingArgs;
    /**
     * Code: PRPOMP
     */
    PedvaxHIB: CodingArgs;
    /**
     * Code: PRPT
     */
    ActHIB: CodingArgs;
    /**
     * Code: PRVNR
     */
    Prevenar7: CodingArgs;
    /**
     * Code: PRVTH
     */
    Prevenar13: CodingArgs;
    /**
     * Code: PRXTEX
     */
    PriorixTetra: CodingArgs;
    /**
     * Code: QDCL
     */
    Quadracel: CodingArgs;
    /**
     * Code: ROTRIX
     */
    Rotarix: CodingArgs;
    /**
     * Code: ROTTEQ
     */
    Rotateq: CodingArgs;
    /**
     * Code: SYNFLX
     */
    Synflorix: CodingArgs;
    /**
     * Code: TCL
     */
    Tripacel: CodingArgs;
    /**
     * Code: VAXGRP
     */
    Vaxigrip: CodingArgs;
    /**
     * Code: VGRJNR
     */
    VaxigripJunior: CodingArgs;
    /**
     * Code: VLRIX
     */
    Varilrix: CodingArgs;
    /**
     * Code: VRVAX
     */
    Varivax: CodingArgs;
};
/**
 * This identifies the vaccine substance administered - CVX codes.
 */
export declare const VaccineCodings: VaccineCodingType;
//# sourceMappingURL=VaccineCodings.d.ts.map