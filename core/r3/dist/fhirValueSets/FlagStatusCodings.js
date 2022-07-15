// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/flag-status|3.0.2
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or entered in error.
 */
export const FlagStatusCodings = {
    /**
     * active: A current flag that should be displayed to a user. A system may use the category to determine which roles should view the flag.
     */
    Active: {
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/flag-status",
    },
    /**
     * entered-in-error: The flag was added in error, and should no longer be displayed.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/flag-status",
    },
    /**
     * inactive: The flag does not need to be displayed any more.
     */
    Inactive: {
        display: "Inactive",
        code: "inactive",
        system: "http://hl7.org/fhir/flag-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhZ1N0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0ZsYWdTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQXNCaEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBd0I7SUFDcEQ7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9mbGFnLXN0YXR1c3wzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgZmxhZyBpcyBhY3RpdmUgYW5kIG5lZWRzIHRvIGJlIGRpc3BsYXllZCB0byBhIHVzZXIsIG9yIHdoZXRoZXIgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBvciBlbnRlcmVkIGluIGVycm9yLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRmxhZ1N0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlOiBBIGN1cnJlbnQgZmxhZyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgdG8gYSB1c2VyLiBBIHN5c3RlbSBtYXkgdXNlIHRoZSBjYXRlZ29yeSB0byBkZXRlcm1pbmUgd2hpY2ggcm9sZXMgc2hvdWxkIHZpZXcgdGhlIGZsYWcuXHJcbiAgICovXHJcbiAgQWN0aXZlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBmbGFnIHdhcyBhZGRlZCBpbiBlcnJvciwgYW5kIHNob3VsZCBubyBsb25nZXIgYmUgZGlzcGxheWVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluYWN0aXZlOiBUaGUgZmxhZyBkb2VzIG5vdCBuZWVkIHRvIGJlIGRpc3BsYXllZCBhbnkgbW9yZS5cclxuICAgKi9cclxuICBJbmFjdGl2ZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgZmxhZyBpcyBhY3RpdmUgYW5kIG5lZWRzIHRvIGJlIGRpc3BsYXllZCB0byBhIHVzZXIsIG9yIHdoZXRoZXIgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBvciBlbnRlcmVkIGluIGVycm9yLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZsYWdTdGF0dXNDb2RpbmdzOkZsYWdTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogQSBjdXJyZW50IGZsYWcgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIHRvIGEgdXNlci4gQSBzeXN0ZW0gbWF5IHVzZSB0aGUgY2F0ZWdvcnkgdG8gZGV0ZXJtaW5lIHdoaWNoIHJvbGVzIHNob3VsZCB2aWV3IHRoZSBmbGFnLlxyXG4gICAqL1xyXG4gIEFjdGl2ZToge1xyXG4gICAgZGlzcGxheTogXCJBY3RpdmVcIixcclxuICAgIGNvZGU6IFwiYWN0aXZlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9mbGFnLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGZsYWcgd2FzIGFkZGVkIGluIGVycm9yLCBhbmQgc2hvdWxkIG5vIGxvbmdlciBiZSBkaXNwbGF5ZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiRW50ZXJlZCBpbiBFcnJvclwiLFxyXG4gICAgY29kZTogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9mbGFnLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW5hY3RpdmU6IFRoZSBmbGFnIGRvZXMgbm90IG5lZWQgdG8gYmUgZGlzcGxheWVkIGFueSBtb3JlLlxyXG4gICAqL1xyXG4gIEluYWN0aXZlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluYWN0aXZlXCIsXHJcbiAgICBjb2RlOiBcImluYWN0aXZlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9mbGFnLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==