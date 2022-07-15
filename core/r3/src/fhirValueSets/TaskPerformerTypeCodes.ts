// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-performer-type|3.0.2

/**
 * The type(s) of task performers allowed
 */
export const TaskPerformerTypeCodes = {
  /**
   * acquirer: A workflow participant that acquires resources (specimens, images, etc) necessary to perform the task.
   */
  Acquirer: "acquirer",
  /**
   * dispatcher: A workflow participant that dispatches services (assigns another task to a participant).
   */
  Dispatcher: "dispatcher",
  /**
   * manager: A workflow participant that manages task activity.
   */
  Manager: "manager",
  /**
   * monitor: A workflow participant that monitors task activity.
   */
  Monitor: "monitor",
  /**
   * performer: A workflow participant that performs services.
   */
  Performer: "performer",
  /**
   * requester: A workflow participant that requests services.
   */
  Requester: "requester",
  /**
   * reviewer: A workflow participant that reviews task inputs or outputs.
   */
  Reviewer: "reviewer",
  /**
   * scheduler: A workflow participant that schedules (dispatches and sets the time or date for performance of) services.
   */
  Scheduler: "scheduler",
} as const;

/**
 * The type(s) of task performers allowed
 */
export type TaskPerformerTypeCodeType = typeof TaskPerformerTypeCodes[keyof typeof TaskPerformerTypeCodes];
