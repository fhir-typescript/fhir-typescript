// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-place|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of Service Place codes.
 */
export type ServicePlaceCodingType = {
  /**
   * 01: A facility or location where drugs and other medically related items and services are sold, dispensed, or otherwise provided directly to patients.
   */
  Pharmacy: CodingArgs;
  /**
   * 03: A facility whose primary purpose is education.
   */
  School: CodingArgs;
  /**
   * 04: A facility or location whose primary purpose is to provide temporary housing to homeless individuals (e.g., emergency shelters, individual or family shelters).
   */
  HomelessShelter: CodingArgs;
  /**
   * 05: A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to American Indians and Alaska Natives who do not require hospitalization.
   */
  IndianHealthServiceFreeStandingFacility: CodingArgs;
  /**
   * 06: A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services rendered by, or under the supervision of, physicians to American Indians and Alaska Natives admitted as inpatients or outpatients.
   */
  IndianHealthServiceProviderBasedFacility: CodingArgs;
  /**
   * 07: A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members who do not require hospitalization.
   */
  Tribal638FreeStandingFacility: CodingArgs;
  /**
   * 08: A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members admitted as inpatients or outpatients.
   */
  Tribal638ProviderBasedFacility: CodingArgs;
  /**
   * 09: A prison, jail, reformatory, work farm, detention center, or any other similar facility maintained by either Federal, State or local authorities for the purpose of confinement or rehabilitation of adult or juvenile criminal offenders.
   */
  PrisonCorrectionalFacility: CodingArgs;
  /**
   * 11: Location, other than a hospital, skilled nursing facility (SNF), military treatment facility, community health center, State or local public health clinic, or intermediate care facility (ICF), where the health professional routinely provides health examinations, diagnosis, and treatment of illness or injury on an ambulatory basis.
   */
  Office: CodingArgs;
  /**
   * 12: Location, other than a hospital or other facility, where the patient receives care in a private residence.
   */
  Home: CodingArgs;
  /**
   * 13: Congregate residential facility with self-contained living units providing assessment of each resident's needs and on-site support 24 hours a day, 7 days a week, with the capacity to deliver or arrange for services including some health care and other services.
   */
  AssistedLivingFa: CodingArgs;
  /**
   * 14: A residence, with shared living areas, where clients receive supervision and other services such as social and/or behavioral services, custodial service, and minimal services (e.g., medication administration).
   */
  GroupHome: CodingArgs;
  /**
   * 15: A facility/unit that moves from place-to-place equipped to provide preventive, screening, diagnostic, and/or treatment services.
   */
  MobileUnit: CodingArgs;
  /**
   * 19: portion of an off-campus hospital provider based department which provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services to sick or injured persons who do not require hospitalization or institutionalization.
   */
  OffCampusOutpatientHospital: CodingArgs;
  /**
   * 20: Location, distinct from a hospital emergency room, an office, or a clinic, whose purpose is to diagnose and treat illness or injury for unscheduled, ambulatory patients seeking immediate medical attention.
   */
  UrgentCareFacility: CodingArgs;
  /**
   * 21: A facility, other than psychiatric, which primarily provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services by, or under, the supervision of physicians to patients admitted for a variety of medical conditions.
   */
  InpatientHospital: CodingArgs;
  /**
   * 41: A land vehicle specifically designed, equipped and staffed for lifesaving and transporting the sick or injured.
   */
  AmbulanceLand: CodingArgs;
}

/**
 * This value set includes a smattering of Service Place codes.
 */
export const ServicePlaceCodings:ServicePlaceCodingType = {
  /**
   * 01: A facility or location where drugs and other medically related items and services are sold, dispensed, or otherwise provided directly to patients.
   */
  Pharmacy: {
    display: "Pharmacy",
    code: "01",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 03: A facility whose primary purpose is education.
   */
  School: {
    display: "School",
    code: "03",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 04: A facility or location whose primary purpose is to provide temporary housing to homeless individuals (e.g., emergency shelters, individual or family shelters).
   */
  HomelessShelter: {
    display: "Homeless Shelter",
    code: "04",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 05: A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to American Indians and Alaska Natives who do not require hospitalization.
   */
  IndianHealthServiceFreeStandingFacility: {
    display: "Indian Health Service Free-standing Facility",
    code: "05",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 06: A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services rendered by, or under the supervision of, physicians to American Indians and Alaska Natives admitted as inpatients or outpatients.
   */
  IndianHealthServiceProviderBasedFacility: {
    display: "Indian Health Service Provider-based Facility",
    code: "06",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 07: A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members who do not require hospitalization.
   */
  Tribal638FreeStandingFacility: {
    display: "Tribal 638 Free-Standing Facility",
    code: "07",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 08: A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members admitted as inpatients or outpatients.
   */
  Tribal638ProviderBasedFacility: {
    display: "Tribal 638 Provider-Based Facility",
    code: "08",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 09: A prison, jail, reformatory, work farm, detention center, or any other similar facility maintained by either Federal, State or local authorities for the purpose of confinement or rehabilitation of adult or juvenile criminal offenders.
   */
  PrisonCorrectionalFacility: {
    display: "Prison/Correctional Facility",
    code: "09",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 11: Location, other than a hospital, skilled nursing facility (SNF), military treatment facility, community health center, State or local public health clinic, or intermediate care facility (ICF), where the health professional routinely provides health examinations, diagnosis, and treatment of illness or injury on an ambulatory basis.
   */
  Office: {
    display: "Office",
    code: "11",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 12: Location, other than a hospital or other facility, where the patient receives care in a private residence.
   */
  Home: {
    display: "Home",
    code: "12",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 13: Congregate residential facility with self-contained living units providing assessment of each resident's needs and on-site support 24 hours a day, 7 days a week, with the capacity to deliver or arrange for services including some health care and other services.
   */
  AssistedLivingFa: {
    display: "Assisted Living Fa",
    code: "13",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 14: A residence, with shared living areas, where clients receive supervision and other services such as social and/or behavioral services, custodial service, and minimal services (e.g., medication administration).
   */
  GroupHome: {
    display: "Group Home",
    code: "14",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 15: A facility/unit that moves from place-to-place equipped to provide preventive, screening, diagnostic, and/or treatment services.
   */
  MobileUnit: {
    display: "Mobile Unit",
    code: "15",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 19: portion of an off-campus hospital provider based department which provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services to sick or injured persons who do not require hospitalization or institutionalization.
   */
  OffCampusOutpatientHospital: {
    display: "Off Campus-Outpatient Hospital",
    code: "19",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 20: Location, distinct from a hospital emergency room, an office, or a clinic, whose purpose is to diagnose and treat illness or injury for unscheduled, ambulatory patients seeking immediate medical attention.
   */
  UrgentCareFacility: {
    display: "Urgent Care Facility",
    code: "20",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 21: A facility, other than psychiatric, which primarily provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services by, or under, the supervision of physicians to patients admitted for a variety of medical conditions.
   */
  InpatientHospital: {
    display: "Inpatient Hospital",
    code: "21",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
  /**
   * 41: A land vehicle specifically designed, equipped and staffed for lifesaving and transporting the sick or injured.
   */
  AmbulanceLand: {
    display: "Ambulance—Land",
    code: "41",
    system: "http://hl7.org/fhir/ex-serviceplace",
  },
} as const;