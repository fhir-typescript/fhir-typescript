// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/object-role|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Code representing the role the entity played in the audit event
 */
export type ObjectRoleCodingType = {
  /**
   * 1: This object is the patient that is the subject of care related to this event.  It is identifiable by patient ID or equivalent.  The patient may be either human or animal.
   */
  Patient: CodingArgs;
  /**
   * 10: Insurance company, or any other organization who accepts responsibility for paying for the healthcare event.
   */
  Guarantor: CodingArgs;
  /**
   * 11: A person or active system object involved in the event with a security role.
   */
  SecurityUserEntity: CodingArgs;
  /**
   * 12: A person or system object involved in the event with the authority to modify security roles of other objects.
   */
  SecurityUserGroup: CodingArgs;
  /**
   * 13: A passive object, such as a role table, that is relevant to the event.
   */
  SecurityResource: CodingArgs;
  /**
   * 14: (deprecated)  Relevant to certain RBAC security methodologies.
   */
  SecurityGranularityDefinition: CodingArgs;
  /**
   * 15: Any person or organization responsible for providing care.  This encompasses all forms of care, licensed or otherwise, and all sorts of teams and care groups. Note the distinction between practitioner and the doctor that actually provided the care to the patient.
   */
  Practitioner: CodingArgs;
  /**
   * 16: The source or destination for data transfer, when it does not match some other role.
   */
  DataDestination: CodingArgs;
  /**
   * 17: A source or destination for data transfer that acts as an archive, database, or similar role.
   */
  DataRepository: CodingArgs;
  /**
   * 18: An object that holds schedule information.  This could be an appointment book, availability information, etc.
   */
  Schedule: CodingArgs;
  /**
   * 19: An organization or person that is the recipient of services.  This could be an organization that is buying services for a patient, or a person that is buying services for an animal.
   */
  Customer: CodingArgs;
  /**
   * 2: This is a location identified as related to the event.  This is usually the location where the event took place.  Note that for shipping, the usual events are arrival at a location or departure from a location.
   */
  Location: CodingArgs;
  /**
   * 20: An order, task, work item, procedure step, or other description of work to be performed; e.g. a particular instance of an MPPS.
   */
  Job: CodingArgs;
  /**
   * 21: A list of jobs or a system that provides lists of jobs; e.g. an MWL SCP.
   */
  JobStream: CodingArgs;
  /**
   * 22: (Deprecated)
   */
  Table: CodingArgs;
  /**
   * 23: An object that specifies or controls the routing or delivery of items.  For example, a distribution list is the routing criteria for mail.  The items delivered may be documents, jobs, or other objects.
   */
  RoutingCriteria: CodingArgs;
  /**
   * 24: The contents of a query.  This is used to capture the contents of any kind of query.  For security surveillance purposes knowing the queries being made is very important.
   */
  Query: CodingArgs;
  /**
   * 3: This object is any kind of persistent document created as a result of the event.  This could be a paper report, film, electronic report, DICOM Study, etc.  Issues related to medical records life cycle management are conveyed elsewhere.
   */
  Report: CodingArgs;
  /**
   * 4: A logical object related to a health record event.  This is any healthcare  specific resource (object) not restricted to FHIR defined Resources.
   */
  DomainResource: CodingArgs;
  /**
   * 5: This is any configurable file used to control creation of documents.  Examples include the objects maintained by the HL7 Master File transactions, Value Sets, etc.
   */
  MasterFile: CodingArgs;
  /**
   * 6: A human participant not otherwise identified by some other category.
   */
  User: CodingArgs;
  /**
   * 7: (deprecated)
   */
  List: CodingArgs;
  /**
   * 8: Typically a licensed person who is providing or performing care related to the event, generally a physician.   The key distinction between doctor and practitioner is with regards to their role, not the licensing.  The doctor is the human who actually performed the work.  The practitioner is the human or organization that is responsible for the work.
   */
  Doctor: CodingArgs;
  /**
   * 9: A person or system that is being notified as part of the event.  This is relevant in situations where automated systems provide notifications to other parties when an event took place.
   */
  Subscriber: CodingArgs;
}

/**
 * Code representing the role the entity played in the audit event
 */
export const ObjectRoleCodings:ObjectRoleCodingType = {
  /**
   * 1: This object is the patient that is the subject of care related to this event.  It is identifiable by patient ID or equivalent.  The patient may be either human or animal.
   */
  Patient: {
    display: "Patient",
    code: "1",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 10: Insurance company, or any other organization who accepts responsibility for paying for the healthcare event.
   */
  Guarantor: {
    display: "Guarantor",
    code: "10",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 11: A person or active system object involved in the event with a security role.
   */
  SecurityUserEntity: {
    display: "Security User Entity",
    code: "11",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 12: A person or system object involved in the event with the authority to modify security roles of other objects.
   */
  SecurityUserGroup: {
    display: "Security User Group",
    code: "12",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 13: A passive object, such as a role table, that is relevant to the event.
   */
  SecurityResource: {
    display: "Security Resource",
    code: "13",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 14: (deprecated)  Relevant to certain RBAC security methodologies.
   */
  SecurityGranularityDefinition: {
    display: "Security Granularity Definition",
    code: "14",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 15: Any person or organization responsible for providing care.  This encompasses all forms of care, licensed or otherwise, and all sorts of teams and care groups. Note the distinction between practitioner and the doctor that actually provided the care to the patient.
   */
  Practitioner: {
    display: "Practitioner",
    code: "15",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 16: The source or destination for data transfer, when it does not match some other role.
   */
  DataDestination: {
    display: "Data Destination",
    code: "16",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 17: A source or destination for data transfer that acts as an archive, database, or similar role.
   */
  DataRepository: {
    display: "Data Repository",
    code: "17",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 18: An object that holds schedule information.  This could be an appointment book, availability information, etc.
   */
  Schedule: {
    display: "Schedule",
    code: "18",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 19: An organization or person that is the recipient of services.  This could be an organization that is buying services for a patient, or a person that is buying services for an animal.
   */
  Customer: {
    display: "Customer",
    code: "19",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 2: This is a location identified as related to the event.  This is usually the location where the event took place.  Note that for shipping, the usual events are arrival at a location or departure from a location.
   */
  Location: {
    display: "Location",
    code: "2",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 20: An order, task, work item, procedure step, or other description of work to be performed; e.g. a particular instance of an MPPS.
   */
  Job: {
    display: "Job",
    code: "20",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 21: A list of jobs or a system that provides lists of jobs; e.g. an MWL SCP.
   */
  JobStream: {
    display: "Job Stream",
    code: "21",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 22: (Deprecated)
   */
  Table: {
    display: "Table",
    code: "22",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 23: An object that specifies or controls the routing or delivery of items.  For example, a distribution list is the routing criteria for mail.  The items delivered may be documents, jobs, or other objects.
   */
  RoutingCriteria: {
    display: "Routing Criteria",
    code: "23",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 24: The contents of a query.  This is used to capture the contents of any kind of query.  For security surveillance purposes knowing the queries being made is very important.
   */
  Query: {
    display: "Query",
    code: "24",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 3: This object is any kind of persistent document created as a result of the event.  This could be a paper report, film, electronic report, DICOM Study, etc.  Issues related to medical records life cycle management are conveyed elsewhere.
   */
  Report: {
    display: "Report",
    code: "3",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 4: A logical object related to a health record event.  This is any healthcare  specific resource (object) not restricted to FHIR defined Resources.
   */
  DomainResource: {
    display: "Domain Resource",
    code: "4",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 5: This is any configurable file used to control creation of documents.  Examples include the objects maintained by the HL7 Master File transactions, Value Sets, etc.
   */
  MasterFile: {
    display: "Master file",
    code: "5",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 6: A human participant not otherwise identified by some other category.
   */
  User: {
    display: "User",
    code: "6",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 7: (deprecated)
   */
  List: {
    display: "List",
    code: "7",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 8: Typically a licensed person who is providing or performing care related to the event, generally a physician.   The key distinction between doctor and practitioner is with regards to their role, not the licensing.  The doctor is the human who actually performed the work.  The practitioner is the human or organization that is responsible for the work.
   */
  Doctor: {
    display: "Doctor",
    code: "8",
    system: "http://hl7.org/fhir/object-role",
  },
  /**
   * 9: A person or system that is being notified as part of the event.  This is relevant in situations where automated systems provide notifications to other parties when an event took place.
   */
  Subscriber: {
    display: "Subscriber",
    code: "9",
    system: "http://hl7.org/fhir/object-role",
  },
} as const;
