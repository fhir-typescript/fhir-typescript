// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reason-medication-not-given-codes|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes all medication refused, medication not administered, and non administration of necessary drug or medicine codes from SNOMED CT - provided as an exemplar value set.
 */
export type ReasonMedicationNotGivenCodingType = {
  /**
   * Code: 134396000
   */
  StatinDeclined: CodingArgs;
  /**
   * Code: 134397009
   */
  AngiotensinConvertingEnzymeInhibitorDeclined: CodingArgs;
  /**
   * Code: 134398004
   */
  WarfarinDeclined: CodingArgs;
  /**
   * Code: 135812004
   */
  NitrateDeclined: CodingArgs;
  /**
   * Code: 135814003
   */
  DiureticDeclined: CodingArgs;
  /**
   * Code: 135825007
   */
  CalciumChannelBlockerDeclined: CodingArgs;
  /**
   * Code: 182895007
   */
  DrugDeclinedByPatient: CodingArgs;
  /**
   * Code: 182896008
   */
  DrugDeclinedByPatientDislikesTaste: CodingArgs;
  /**
   * Code: 182897004
   */
  DrugDeclinedByPatientSideEffects: CodingArgs;
  /**
   * Code: 182898009
   */
  DrugDeclinedByPatientInconvenient: CodingArgs;
  /**
   * Code: 182899001
   */
  DrugDeclinedByPatientProblemSwallowing: CodingArgs;
  /**
   * Code: 182900006
   */
  DrugDeclinedByPatientPatientBeliefs: CodingArgs;
  /**
   * Code: 182901005
   */
  DrugDeclinedByPatientAlternativeTherapy: CodingArgs;
  /**
   * Code: 182902003
   */
  DrugDeclinedByPatientCannotPayScript: CodingArgs;
  /**
   * Code: 182903008
   */
  DrugDeclinedByPatientReasonUnknown: CodingArgs;
  /**
   * Code: 315020006
   */
  BetaBlockerTherapyRefused: CodingArgs;
  /**
   * Code: 315022003
   */
  NicotineReplacementTherapyRefused: CodingArgs;
  /**
   * Code: 315023008
   */
  AspirinProphylaxisRefused: CodingArgs;
  /**
   * Code: 315640000
   */
  InfluenzaVaccinationDeclined: CodingArgs;
  /**
   * Code: 373147003
   */
  MedicationNotAdministeredBecauseContraindicated: CodingArgs;
  /**
   * Code: 373148008
   */
  ThrombolyticAgentNotAdministeredBecauseContraindicated: CodingArgs;
  /**
   * Code: 390914001
   */
  ThrombolyticTherapyRefused: CodingArgs;
  /**
   * Code: 395176007
   */
  BupropionRefused: CodingArgs;
  /**
   * Code: 395703005
   */
  MeningitisCImmunizationRefused: CodingArgs;
  /**
   * Code: 401084003
   */
  AngiotensinIIReceptorAntagonistDeclined: CodingArgs;
  /**
   * Code: 401086001
   */
  PneumococcalVaccinationDeclined: CodingArgs;
  /**
   * Code: 407583007
   */
  ClopidogrelDeclined: CodingArgs;
  /**
   * Code: 408778004
   */
  HepatitisBImmunizationDeclined: CodingArgs;
  /**
   * Code: 408791003
   */
  BCGVaccinationDeclined: CodingArgs;
  /**
   * Code: 408795007
   */
  VitaminKProphylaxisDeclined: CodingArgs;
  /**
   * Code: 413559006
   */
  AnticoagulationDeclined: CodingArgs;
  /**
   * Code: 416522000
   */
  StrontiumRanelateDeclined: CodingArgs;
  /**
   * Code: 417045009
   */
  CombinedCalciumAndVitaminD3PreparationDeclined: CodingArgs;
  /**
   * Code: 438765003
   */
  HumanPapillomavirusVaccinationDeclined: CodingArgs;
  /**
   * Code: 473149004
   */
  LongActingReversibleContraceptionDeclined: CodingArgs;
  /**
   * Code: 591000119102
   */
  VaccineRefusedByPatient: CodingArgs;
  /**
   * Code: 6021000175100
   */
  VaccinationForDiphtheriaPertussisAndTetanusNotDone: CodingArgs;
  /**
   * Code: 6031000175102
   */
  VaricellaVaccinationNotDone: CodingArgs;
  /**
   * Code: 6041000175108
   */
  HepatitisAVaccinationNotDone: CodingArgs;
  /**
   * Code: 6051000175105
   */
  HepatitisBVaccinationNotDone: CodingArgs;
  /**
   * Code: 698460003
   */
  AntiviralTherapyDeclined: CodingArgs;
  /**
   * Code: 698758004
   */
  NebivololTherapyRefused: CodingArgs;
  /**
   * Code: 698950001
   */
  InfluenzaAVirusSubtypeH1N1VaccinationDeclined: CodingArgs;
  /**
   * Code: 699137009
   */
  CarvedilolTherapyDeclined: CodingArgs;
  /**
   * Code: 700359005
   */
  BoosterMeningitisCVaccinationDeclined: CodingArgs;
  /**
   * Code: 703989007
   */
  TeriparatideTherapyDeclined: CodingArgs;
  /**
   * Code: 703991004
   */
  RaloxifeneTherapyDeclined: CodingArgs;
  /**
   * Code: 704047009
   */
  Phosphodiesterase5InhibitorDeclined: CodingArgs;
  /**
   * Code: 712985002
   */
  ChemotherapyNotDone: CodingArgs;
  /**
   * Code: 921000119109
   */
  VaccineRefusedByParent: CodingArgs;
}

/**
 * This value set includes all medication refused, medication not administered, and non administration of necessary drug or medicine codes from SNOMED CT - provided as an exemplar value set.
 */
export const ReasonMedicationNotGivenCodings:ReasonMedicationNotGivenCodingType = {
  /**
   * Code: 134396000
   */
  StatinDeclined: {
    display: "Statin declined",
    code: "134396000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 134397009
   */
  AngiotensinConvertingEnzymeInhibitorDeclined: {
    display: "Angiotensin converting enzyme inhibitor declined",
    code: "134397009",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 134398004
   */
  WarfarinDeclined: {
    display: "Warfarin declined",
    code: "134398004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 135812004
   */
  NitrateDeclined: {
    display: "Nitrate declined",
    code: "135812004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 135814003
   */
  DiureticDeclined: {
    display: "Diuretic declined",
    code: "135814003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 135825007
   */
  CalciumChannelBlockerDeclined: {
    display: "Calcium channel blocker declined",
    code: "135825007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182895007
   */
  DrugDeclinedByPatient: {
    display: "Drug declined by patient",
    code: "182895007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182896008
   */
  DrugDeclinedByPatientDislikesTaste: {
    display: "Drug declined by patient - dislikes taste",
    code: "182896008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182897004
   */
  DrugDeclinedByPatientSideEffects: {
    display: "Drug declined by patient - side effects",
    code: "182897004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182898009
   */
  DrugDeclinedByPatientInconvenient: {
    display: "Drug declined by patient - inconvenient",
    code: "182898009",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182899001
   */
  DrugDeclinedByPatientProblemSwallowing: {
    display: "Drug declined by patient - problem swallowing",
    code: "182899001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182900006
   */
  DrugDeclinedByPatientPatientBeliefs: {
    display: "Drug declined by patient - patient beliefs",
    code: "182900006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182901005
   */
  DrugDeclinedByPatientAlternativeTherapy: {
    display: "Drug declined by patient - alternative therapy",
    code: "182901005",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182902003
   */
  DrugDeclinedByPatientCannotPayScript: {
    display: "Drug declined by patient - cannot pay script",
    code: "182902003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 182903008
   */
  DrugDeclinedByPatientReasonUnknown: {
    display: "Drug declined by patient - reason unknown",
    code: "182903008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 315020006
   */
  BetaBlockerTherapyRefused: {
    display: "Beta blocker therapy refused",
    code: "315020006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 315022003
   */
  NicotineReplacementTherapyRefused: {
    display: "Nicotine replacement therapy refused",
    code: "315022003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 315023008
   */
  AspirinProphylaxisRefused: {
    display: "Aspirin prophylaxis refused",
    code: "315023008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 315640000
   */
  InfluenzaVaccinationDeclined: {
    display: "Influenza vaccination declined",
    code: "315640000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 373147003
   */
  MedicationNotAdministeredBecauseContraindicated: {
    display: "Medication not administered because contraindicated",
    code: "373147003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 373148008
   */
  ThrombolyticAgentNotAdministeredBecauseContraindicated: {
    display: "Thrombolytic agent not administered because contraindicated",
    code: "373148008",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 390914001
   */
  ThrombolyticTherapyRefused: {
    display: "Thrombolytic therapy refused",
    code: "390914001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 395176007
   */
  BupropionRefused: {
    display: "Bupropion refused",
    code: "395176007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 395703005
   */
  MeningitisCImmunizationRefused: {
    display: "Meningitis C immunization refused",
    code: "395703005",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 401084003
   */
  AngiotensinIIReceptorAntagonistDeclined: {
    display: "Angiotensin II receptor antagonist declined",
    code: "401084003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 401086001
   */
  PneumococcalVaccinationDeclined: {
    display: "Pneumococcal vaccination declined",
    code: "401086001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 407583007
   */
  ClopidogrelDeclined: {
    display: "Clopidogrel declined",
    code: "407583007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 408778004
   */
  HepatitisBImmunizationDeclined: {
    display: "Hepatitis B immunization declined",
    code: "408778004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 408791003
   */
  BCGVaccinationDeclined: {
    display: "BCG vaccination declined",
    code: "408791003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 408795007
   */
  VitaminKProphylaxisDeclined: {
    display: "Vitamin K prophylaxis declined",
    code: "408795007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 413559006
   */
  AnticoagulationDeclined: {
    display: "Anticoagulation declined",
    code: "413559006",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 416522000
   */
  StrontiumRanelateDeclined: {
    display: "Strontium ranelate declined",
    code: "416522000",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 417045009
   */
  CombinedCalciumAndVitaminD3PreparationDeclined: {
    display: "Combined calcium and vitamin D3 preparation declined",
    code: "417045009",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 438765003
   */
  HumanPapillomavirusVaccinationDeclined: {
    display: "Human papillomavirus vaccination declined",
    code: "438765003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 473149004
   */
  LongActingReversibleContraceptionDeclined: {
    display: "Long acting reversible contraception declined",
    code: "473149004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 591000119102
   */
  VaccineRefusedByPatient: {
    display: "Vaccine refused by patient",
    code: "591000119102",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 6021000175100
   */
  VaccinationForDiphtheriaPertussisAndTetanusNotDone: {
    display: "Vaccination for diphtheria, pertussis, and tetanus not done",
    code: "6021000175100",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 6031000175102
   */
  VaricellaVaccinationNotDone: {
    display: "Varicella vaccination not done",
    code: "6031000175102",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 6041000175108
   */
  HepatitisAVaccinationNotDone: {
    display: "Hepatitis A vaccination not done",
    code: "6041000175108",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 6051000175105
   */
  HepatitisBVaccinationNotDone: {
    display: "Hepatitis B vaccination not done",
    code: "6051000175105",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 698460003
   */
  AntiviralTherapyDeclined: {
    display: "Antiviral therapy declined",
    code: "698460003",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 698758004
   */
  NebivololTherapyRefused: {
    display: "Nebivolol therapy refused",
    code: "698758004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 698950001
   */
  InfluenzaAVirusSubtypeH1N1VaccinationDeclined: {
    display: "Influenza A virus subtype H1N1 vaccination declined",
    code: "698950001",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 699137009
   */
  CarvedilolTherapyDeclined: {
    display: "Carvedilol therapy declined",
    code: "699137009",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 700359005
   */
  BoosterMeningitisCVaccinationDeclined: {
    display: "Booster meningitis C vaccination declined",
    code: "700359005",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 703989007
   */
  TeriparatideTherapyDeclined: {
    display: "Teriparatide therapy declined",
    code: "703989007",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 703991004
   */
  RaloxifeneTherapyDeclined: {
    display: "Raloxifene therapy declined",
    code: "703991004",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 704047009
   */
  Phosphodiesterase5InhibitorDeclined: {
    display: "Phosphodiesterase 5 inhibitor declined",
    code: "704047009",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 712985002
   */
  ChemotherapyNotDone: {
    display: "Chemotherapy not done",
    code: "712985002",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 921000119109
   */
  VaccineRefusedByParent: {
    display: "Vaccine refused by parent",
    code: "921000119109",
    system: "http://snomed.info/sct",
  },
} as const;
