// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Validation: http://hl7.org/fhir/ValueSet/observation-interpretation|4.0.1

/**
 * A categorical assessment, providing a rough qualitative interpretation of the observation value,    such as “normal”/ “abnormal”,”low” / “high”, “better” / “worse”, “susceptible” / “resistant”, “expected”/ “not expected”.    The value set is intended to be for ANY use where coded representation of an interpretation is needed.   
 *    
 *    Notes:
 *    
 *    This is being communicated in v2.x in OBX-8 (Observation Interpretation), in v3 in ObservationInterpretation (CWE) in R1 (Representative Realm) and in FHIR in    Observation.interpretation. Historically these values come from the laboratory domain, and these codes are extensively    used. The value set binding is extensible, so codes outside the value set that are needed for interpretation concepts    (i.e. particular meanings) that are not included in the value set can be used, and these new codes may also be added to    the value set and published in a future version.
 */
export const ObservationInterpretationVsValidation: readonly string[] = [
  "_GeneticObservationInterpretation", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|_GeneticObservationInterpretation", 
  "_ObservationInterpretationChange", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|_ObservationInterpretationChange", 
  "_ObservationInterpretationExceptions", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|_ObservationInterpretationExceptions", 
  "_ObservationInterpretationNormality", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|_ObservationInterpretationNormality", 
  "_ObservationInterpretationSusceptibility", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|_ObservationInterpretationSusceptibility", 
  "<", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|<", 
  ">", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|>", 
  "A", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|A", 
  "AA", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|AA", 
  "B", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|B", 
  "CAR", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|CAR", 
  "D", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|D", 
  "DET", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|DET", 
  "E", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|E", 
  "EX", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|EX", 
  "EXP", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|EXP", 
  "H", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|H", 
  "HH", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|HH", 
  "HU", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|HU", 
  "HX", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|HX", 
  "I", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|I", 
  "IE", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|IE", 
  "IND", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|IND", 
  "L", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|L", 
  "LL", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|LL", 
  "LU", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|LU", 
  "LX", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|LX", 
  "N", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|N", 
  "NCL", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|NCL", 
  "ND", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|ND", 
  "NEG", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|NEG", 
  "NR", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|NR", 
  "NS", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|NS", 
  "ObservationInterpretationDetection", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|ObservationInterpretationDetection", 
  "ObservationInterpretationExpectation", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|ObservationInterpretationExpectation", 
  "POS", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|POS", 
  "R", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|R", 
  "ReactivityObservationInterpretation", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|ReactivityObservationInterpretation", 
  "RR", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|RR", 
  "S", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|S", 
  "SDD", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|SDD", 
  "SYN-R", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|SYN-R", 
  "SYN-S", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|SYN-S", 
  "U", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|U", 
  "UNE", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|UNE", 
  "W", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|W", 
  "WR", "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|WR", 
] as const;