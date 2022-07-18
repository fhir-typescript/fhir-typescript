// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/system-restful-interaction|4.3.0
/**
 * Operations supported by REST at the system level.
 */
export const SystemRestfulInteractionCodings = {
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch: {
        display: "batch",
        code: "batch",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem: {
        display: "history-system",
        code: "history-system",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem: {
        display: "search-system",
        code: "search-system",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: {
        display: "transaction",
        code: "transaction",
        system: "http://hl7.org/fhir/restful-interaction",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzdGVtUmVzdGZ1bEludGVyYWN0aW9uQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU3lzdGVtUmVzdGZ1bEludGVyYWN0aW9uQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrRUFBK0U7QUEwQi9FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQXNDO0lBQ2hGOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUseUNBQXlDO0tBQ2xEO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLHlDQUF5QztLQUNsRDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLHlDQUF5QztLQUNsRDtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLHlDQUF5QztLQUNsRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N5c3RlbS1yZXN0ZnVsLWludGVyYWN0aW9ufDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogT3BlcmF0aW9ucyBzdXBwb3J0ZWQgYnkgUkVTVCBhdCB0aGUgc3lzdGVtIGxldmVsLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3lzdGVtUmVzdGZ1bEludGVyYWN0aW9uQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBiYXRjaDogcGVyZm9ybSBhIHNldCBvZiBhIHNlcGFyYXRlIGludGVyYWN0aW9ucyBpbiBhIHNpbmdsZSBodHRwIG9wZXJhdGlvblxyXG4gICAqL1xyXG4gIEJhdGNoOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGhpc3Rvcnktc3lzdGVtOiBSZXRyaWV2ZSB0aGUgY2hhbmdlIGhpc3RvcnkgZm9yIGFsbCByZXNvdXJjZXMgb24gYSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgSGlzdG9yeVN5c3RlbTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzZWFyY2gtc3lzdGVtOiBTZWFyY2ggYWxsIHJlc291cmNlcyBiYXNlZCBvbiBzb21lIGZpbHRlciBjcml0ZXJpYS5cclxuICAgKi9cclxuICBTZWFyY2hTeXN0ZW06IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdHJhbnNhY3Rpb246IFVwZGF0ZSwgY3JlYXRlIG9yIGRlbGV0ZSBhIHNldCBvZiByZXNvdXJjZXMgYXMgYSBzaW5nbGUgdHJhbnNhY3Rpb24uXHJcbiAgICovXHJcbiAgVHJhbnNhY3Rpb246IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPcGVyYXRpb25zIHN1cHBvcnRlZCBieSBSRVNUIGF0IHRoZSBzeXN0ZW0gbGV2ZWwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3lzdGVtUmVzdGZ1bEludGVyYWN0aW9uQ29kaW5nczpTeXN0ZW1SZXN0ZnVsSW50ZXJhY3Rpb25Db2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJhdGNoOiBwZXJmb3JtIGEgc2V0IG9mIGEgc2VwYXJhdGUgaW50ZXJhY3Rpb25zIGluIGEgc2luZ2xlIGh0dHAgb3BlcmF0aW9uXHJcbiAgICovXHJcbiAgQmF0Y2g6IHtcclxuICAgIGRpc3BsYXk6IFwiYmF0Y2hcIixcclxuICAgIGNvZGU6IFwiYmF0Y2hcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGhpc3Rvcnktc3lzdGVtOiBSZXRyaWV2ZSB0aGUgY2hhbmdlIGhpc3RvcnkgZm9yIGFsbCByZXNvdXJjZXMgb24gYSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgSGlzdG9yeVN5c3RlbToge1xyXG4gICAgZGlzcGxheTogXCJoaXN0b3J5LXN5c3RlbVwiLFxyXG4gICAgY29kZTogXCJoaXN0b3J5LXN5c3RlbVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoLXN5c3RlbTogU2VhcmNoIGFsbCByZXNvdXJjZXMgYmFzZWQgb24gc29tZSBmaWx0ZXIgY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgU2VhcmNoU3lzdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcInNlYXJjaC1zeXN0ZW1cIixcclxuICAgIGNvZGU6IFwic2VhcmNoLXN5c3RlbVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdHJhbnNhY3Rpb246IFVwZGF0ZSwgY3JlYXRlIG9yIGRlbGV0ZSBhIHNldCBvZiByZXNvdXJjZXMgYXMgYSBzaW5nbGUgdHJhbnNhY3Rpb24uXHJcbiAgICovXHJcbiAgVHJhbnNhY3Rpb246IHtcclxuICAgIGRpc3BsYXk6IFwidHJhbnNhY3Rpb25cIixcclxuICAgIGNvZGU6IFwidHJhbnNhY3Rpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=