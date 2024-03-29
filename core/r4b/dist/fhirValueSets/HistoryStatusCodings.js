// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/history-status|4.3.0
/**
 * A code that identifies the status of the family history record.
 */
export const HistoryStatusCodings = {
    /**
     * completed: All available related health information is captured as of the date (and possibly time) when the family member history was taken.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/history-status",
    },
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/history-status",
    },
    /**
     * health-unknown: Health information for this family member is unavailable/unknown.
     */
    HealthUnknown: {
        display: "Health Unknown",
        code: "health-unknown",
        system: "http://hl7.org/fhir/history-status",
    },
    /**
     * partial: Some health information is known and captured, but not complete - see notes for details.
     */
    Partial: {
        display: "Partial",
        code: "partial",
        system: "http://hl7.org/fhir/history-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlzdG9yeVN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0hpc3RvcnlTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQTBCbkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2hpc3Rvcnktc3RhdHVzfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBjb2RlIHRoYXQgaWRlbnRpZmllcyB0aGUgc3RhdHVzIG9mIHRoZSBmYW1pbHkgaGlzdG9yeSByZWNvcmQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBIaXN0b3J5U3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IEFsbCBhdmFpbGFibGUgcmVsYXRlZCBoZWFsdGggaW5mb3JtYXRpb24gaXMgY2FwdHVyZWQgYXMgb2YgdGhlIGRhdGUgKGFuZCBwb3NzaWJseSB0aW1lKSB3aGVuIHRoZSBmYW1pbHkgbWVtYmVyIGhpc3Rvcnkgd2FzIHRha2VuLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGluc3RhbmNlIHNob3VsZCBub3QgaGF2ZSBiZWVuIHBhcnQgb2YgdGhpcyBwYXRpZW50J3MgbWVkaWNhbCByZWNvcmQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaGVhbHRoLXVua25vd246IEhlYWx0aCBpbmZvcm1hdGlvbiBmb3IgdGhpcyBmYW1pbHkgbWVtYmVyIGlzIHVuYXZhaWxhYmxlL3Vua25vd24uXHJcbiAgICovXHJcbiAgSGVhbHRoVW5rbm93bjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYXJ0aWFsOiBTb21lIGhlYWx0aCBpbmZvcm1hdGlvbiBpcyBrbm93biBhbmQgY2FwdHVyZWQsIGJ1dCBub3QgY29tcGxldGUgLSBzZWUgbm90ZXMgZm9yIGRldGFpbHMuXHJcbiAgICovXHJcbiAgUGFydGlhbDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29kZSB0aGF0IGlkZW50aWZpZXMgdGhlIHN0YXR1cyBvZiB0aGUgZmFtaWx5IGhpc3RvcnkgcmVjb3JkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEhpc3RvcnlTdGF0dXNDb2RpbmdzOkhpc3RvcnlTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogQWxsIGF2YWlsYWJsZSByZWxhdGVkIGhlYWx0aCBpbmZvcm1hdGlvbiBpcyBjYXB0dXJlZCBhcyBvZiB0aGUgZGF0ZSAoYW5kIHBvc3NpYmx5IHRpbWUpIHdoZW4gdGhlIGZhbWlseSBtZW1iZXIgaGlzdG9yeSB3YXMgdGFrZW4uXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvbXBsZXRlZFwiLFxyXG4gICAgY29kZTogXCJjb21wbGV0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2hpc3Rvcnktc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGluc3RhbmNlIHNob3VsZCBub3QgaGF2ZSBiZWVuIHBhcnQgb2YgdGhpcyBwYXRpZW50J3MgbWVkaWNhbCByZWNvcmQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiRW50ZXJlZCBpbiBFcnJvclwiLFxyXG4gICAgY29kZTogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9oaXN0b3J5LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaGVhbHRoLXVua25vd246IEhlYWx0aCBpbmZvcm1hdGlvbiBmb3IgdGhpcyBmYW1pbHkgbWVtYmVyIGlzIHVuYXZhaWxhYmxlL3Vua25vd24uXHJcbiAgICovXHJcbiAgSGVhbHRoVW5rbm93bjoge1xyXG4gICAgZGlzcGxheTogXCJIZWFsdGggVW5rbm93blwiLFxyXG4gICAgY29kZTogXCJoZWFsdGgtdW5rbm93blwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaGlzdG9yeS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBhcnRpYWw6IFNvbWUgaGVhbHRoIGluZm9ybWF0aW9uIGlzIGtub3duIGFuZCBjYXB0dXJlZCwgYnV0IG5vdCBjb21wbGV0ZSAtIHNlZSBub3RlcyBmb3IgZGV0YWlscy5cclxuICAgKi9cclxuICBQYXJ0aWFsOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBhcnRpYWxcIixcclxuICAgIGNvZGU6IFwicGFydGlhbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaGlzdG9yeS1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=