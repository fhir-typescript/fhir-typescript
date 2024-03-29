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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza1BlcmZvcm1lclR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvVGFza1BlcmZvcm1lclR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3RUFBd0U7QUFFeEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3Rhc2stcGVyZm9ybWVyLXR5cGV8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZShzKSBvZiB0YXNrIHBlcmZvcm1lcnMgYWxsb3dlZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhc2tQZXJmb3JtZXJUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYWNxdWlyZXI6IEEgd29ya2Zsb3cgcGFydGljaXBhbnQgdGhhdCBhY3F1aXJlcyByZXNvdXJjZXMgKHNwZWNpbWVucywgaW1hZ2VzLCBldGMpIG5lY2Vzc2FyeSB0byBwZXJmb3JtIHRoZSB0YXNrLlxyXG4gICAqL1xyXG4gIEFjcXVpcmVyOiBcImFjcXVpcmVyXCIsXHJcbiAgLyoqXHJcbiAgICogZGlzcGF0Y2hlcjogQSB3b3JrZmxvdyBwYXJ0aWNpcGFudCB0aGF0IGRpc3BhdGNoZXMgc2VydmljZXMgKGFzc2lnbnMgYW5vdGhlciB0YXNrIHRvIGEgcGFydGljaXBhbnQpLlxyXG4gICAqL1xyXG4gIERpc3BhdGNoZXI6IFwiZGlzcGF0Y2hlclwiLFxyXG4gIC8qKlxyXG4gICAqIG1hbmFnZXI6IEEgd29ya2Zsb3cgcGFydGljaXBhbnQgdGhhdCBtYW5hZ2VzIHRhc2sgYWN0aXZpdHkuXHJcbiAgICovXHJcbiAgTWFuYWdlcjogXCJtYW5hZ2VyXCIsXHJcbiAgLyoqXHJcbiAgICogbW9uaXRvcjogQSB3b3JrZmxvdyBwYXJ0aWNpcGFudCB0aGF0IG1vbml0b3JzIHRhc2sgYWN0aXZpdHkuXHJcbiAgICovXHJcbiAgTW9uaXRvcjogXCJtb25pdG9yXCIsXHJcbiAgLyoqXHJcbiAgICogcGVyZm9ybWVyOiBBIHdvcmtmbG93IHBhcnRpY2lwYW50IHRoYXQgcGVyZm9ybXMgc2VydmljZXMuXHJcbiAgICovXHJcbiAgUGVyZm9ybWVyOiBcInBlcmZvcm1lclwiLFxyXG4gIC8qKlxyXG4gICAqIHJlcXVlc3RlcjogQSB3b3JrZmxvdyBwYXJ0aWNpcGFudCB0aGF0IHJlcXVlc3RzIHNlcnZpY2VzLlxyXG4gICAqL1xyXG4gIFJlcXVlc3RlcjogXCJyZXF1ZXN0ZXJcIixcclxuICAvKipcclxuICAgKiByZXZpZXdlcjogQSB3b3JrZmxvdyBwYXJ0aWNpcGFudCB0aGF0IHJldmlld3MgdGFzayBpbnB1dHMgb3Igb3V0cHV0cy5cclxuICAgKi9cclxuICBSZXZpZXdlcjogXCJyZXZpZXdlclwiLFxyXG4gIC8qKlxyXG4gICAqIHNjaGVkdWxlcjogQSB3b3JrZmxvdyBwYXJ0aWNpcGFudCB0aGF0IHNjaGVkdWxlcyAoZGlzcGF0Y2hlcyBhbmQgc2V0cyB0aGUgdGltZSBvciBkYXRlIGZvciBwZXJmb3JtYW5jZSBvZikgc2VydmljZXMuXHJcbiAgICovXHJcbiAgU2NoZWR1bGVyOiBcInNjaGVkdWxlclwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlKHMpIG9mIHRhc2sgcGVyZm9ybWVycyBhbGxvd2VkXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUYXNrUGVyZm9ybWVyVHlwZUNvZGVUeXBlID0gdHlwZW9mIFRhc2tQZXJmb3JtZXJUeXBlQ29kZXNba2V5b2YgdHlwZW9mIFRhc2tQZXJmb3JtZXJUeXBlQ29kZXNdO1xyXG4iXX0=