// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/address-use|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * The use of an address.
 */
export const AddressUseCodings = {
    /**
     * billing: An address to be used to send bills, invoices, receipts etc.
     */
    Billing: new Coding({
        display: "Billing",
        code: "billing",
        system: "http://hl7.org/fhir/address-use",
    }),
    /**
     * home: A communication address at a home.
     */
    Home: new Coding({
        display: "Home",
        code: "home",
        system: "http://hl7.org/fhir/address-use",
    }),
    /**
     * old: This address is no longer in use (or was never correct but retained for records).
     */
    OldIncorrect: new Coding({
        display: "Old / Incorrect",
        code: "old",
        system: "http://hl7.org/fhir/address-use",
    }),
    /**
     * temp: A temporary address. The period can provide more detailed information.
     */
    Temporary: new Coding({
        display: "Temporary",
        code: "temp",
        system: "http://hl7.org/fhir/address-use",
    }),
    /**
     * work: An office address. First choice for business related contacts during business hours.
     */
    Work: new Coding({
        display: "Work",
        code: "work",
        system: "http://hl7.org/fhir/address-use",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc1VzZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FkZHJlc3NVc2VDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQUVoRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQjs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUMsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUMsQ0FBQztJQUNGOztPQUVHO0lBQ0gsWUFBWSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsaUNBQWlDO0tBQzFDLENBQUM7SUFDRjs7T0FFRztJQUNILFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNwQixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUMsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUMsQ0FBQztDQUNNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWRkcmVzcy11c2V8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSB1c2Ugb2YgYW4gYWRkcmVzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBZGRyZXNzVXNlQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBiaWxsaW5nOiBBbiBhZGRyZXNzIHRvIGJlIHVzZWQgdG8gc2VuZCBiaWxscywgaW52b2ljZXMsIHJlY2VpcHRzIGV0Yy5cclxuICAgKi9cclxuICBCaWxsaW5nOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQmlsbGluZ1wiLFxyXG4gICAgY29kZTogXCJiaWxsaW5nXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hZGRyZXNzLXVzZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGhvbWU6IEEgY29tbXVuaWNhdGlvbiBhZGRyZXNzIGF0IGEgaG9tZS5cclxuICAgKi9cclxuICBIb21lOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiSG9tZVwiLFxyXG4gICAgY29kZTogXCJob21lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hZGRyZXNzLXVzZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIG9sZDogVGhpcyBhZGRyZXNzIGlzIG5vIGxvbmdlciBpbiB1c2UgKG9yIHdhcyBuZXZlciBjb3JyZWN0IGJ1dCByZXRhaW5lZCBmb3IgcmVjb3JkcykuXHJcbiAgICovXHJcbiAgT2xkSW5jb3JyZWN0OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiT2xkIC8gSW5jb3JyZWN0XCIsXHJcbiAgICBjb2RlOiBcIm9sZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWRkcmVzcy11c2VcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiB0ZW1wOiBBIHRlbXBvcmFyeSBhZGRyZXNzLiBUaGUgcGVyaW9kIGNhbiBwcm92aWRlIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgVGVtcG9yYXJ5OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiVGVtcG9yYXJ5XCIsXHJcbiAgICBjb2RlOiBcInRlbXBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FkZHJlc3MtdXNlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogd29yazogQW4gb2ZmaWNlIGFkZHJlc3MuIEZpcnN0IGNob2ljZSBmb3IgYnVzaW5lc3MgcmVsYXRlZCBjb250YWN0cyBkdXJpbmcgYnVzaW5lc3MgaG91cnMuXHJcbiAgICovXHJcbiAgV29yazogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIldvcmtcIixcclxuICAgIGNvZGU6IFwid29ya1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWRkcmVzcy11c2VcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdXNlIG9mIGFuIGFkZHJlc3MuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBZGRyZXNzVXNlQ29kaW5nVHlwZSA9IHR5cGVvZiBBZGRyZXNzVXNlQ29kaW5ncztcclxuIl19