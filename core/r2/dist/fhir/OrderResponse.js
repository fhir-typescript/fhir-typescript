// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: OrderResponse
import * as fhir from '../fhir.js';
// @ts-ignore
import { OrderStatusVsValidation } from '../fhirValueSets/OrderStatusVsValidation.js';
/**
 * A response to an order.
 */
export class OrderResponse extends fhir.DomainResource {
    /**
     * Default constructor for OrderResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'OrderResponse';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['request']) {
            this.request = new fhir.Reference(source.request);
        }
        else {
            this.request = null;
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['_date']) {
            if (this.date) {
                this.date.addExtendedProperties(source._date);
            }
            else {
                this.date = new fhir.FhirDateTime(source._date);
            }
        }
        if (source['who']) {
            this.who = new fhir.Reference(source.who);
        }
        if (source['orderStatus']) {
            this.orderStatus = new fhir.FhirCode({ value: source.orderStatus });
        }
        else {
            this.orderStatus = null;
        }
        if (source['_orderStatus']) {
            if (this.orderStatus) {
                this.orderStatus.addExtendedProperties(source._orderStatus);
            }
            else {
                this.orderStatus = new fhir.FhirCode(source._orderStatus);
            }
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['_description']) {
            if (this.description) {
                this.description.addExtendedProperties(source._description);
            }
            else {
                this.description = new fhir.FhirString(source._description);
            }
        }
        if (source['fulfillment']) {
            this.fulfillment = source.fulfillment.map((x) => new fhir.Reference(x));
        }
        else {
            this.fulfillment = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'OrderResponse';
        }
        this.vRS('resourceType', exp);
        this.vOA('identifier', exp);
        this.vRS('request', exp);
        this.vOS('date', exp);
        this.vOS('who', exp);
        this.vRSV('orderStatus', exp, 'OrderStatus', OrderStatusVsValidation, 'r');
        this.vOS('description', exp);
        this.vOA('fulfillment', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
OrderResponse._fts_dataType = 'OrderResponse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvT3JkZXJSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrQkFBK0I7QUFFL0IsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBbUR0Rjs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFjLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUFxQ3BEOztPQUVHO0lBQ0gsWUFBWSxTQUFvQyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUMxRixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTthQUNoRztZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FBRTthQUN4RTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDN0IsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FB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LENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLHVCQUF1QixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBakZEOztHQUVHO0FBQzZCLDJCQUFhLEdBQVUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBPcmRlclJlc3BvbnNlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBPcmRlclN0YXR1c0NvZGVzLCAgT3JkZXJTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvT3JkZXJTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgT3JkZXJTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL09yZGVyU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIE9yZGVyUmVzcG9uc2UgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJSZXNwb25zZUFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIk9yZGVyUmVzcG9uc2VcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcnMgYXNzaWduZWQgdG8gdGhpcyBvcmRlci4gVGhlIGlkZW50aWZpZXJzIGFyZSB1c3VhbGx5IGFzc2lnbmVkIGJ5IHRoZSBzeXN0ZW0gcmVzcG9uZGluZyB0byB0aGUgb3JkZXIsIGJ1dCB0aGV5IG1heSBiZSBwcm92aWRlZCBvciBhZGRlZCB0byBieSBvdGhlciBzeXN0ZW1zLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcmRlciB0aGF0IHRoaXMgaXMgaW4gcmVzcG9uc2UgdG8uXHJcbiAgICovXHJcbiAgcmVxdWVzdDogZmhpci5SZWZlcmVuY2VBcmdzfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgYW5kIHRpbWUgYXQgd2hpY2ggdGhpcyBvcmRlciByZXNwb25zZSB3YXMgbWFkZSAoY3JlYXRlZC9wb3N0ZWQpLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPcmRlclJlc3BvbnNlLmRhdGVcclxuICAgKi9cclxuICBfZGF0ZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcnNvbiwgb3JnYW5pemF0aW9uLCBvciBkZXZpY2UgY3JlZGl0ZWQgd2l0aCBtYWtpbmcgdGhlIHJlc3BvbnNlLlxyXG4gICAqL1xyXG4gIHdobz86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hhdCB0aGlzIHJlc3BvbnNlIHNheXMgYWJvdXQgdGhlIHN0YXR1cyBvZiB0aGUgb3JpZ2luYWwgb3JkZXIuXHJcbiAgICovXHJcbiAgb3JkZXJTdGF0dXM6IGZoaXIuRmhpckNvZGU8T3JkZXJTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogT3JkZXJSZXNwb25zZS5vcmRlclN0YXR1c1xyXG4gICAqL1xyXG4gIF9vcmRlclN0YXR1cz86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBkZXNjcmlwdGlvbiBhYm91dCB0aGUgcmVzcG9uc2UgLSBlLmcuIGEgdGV4dCBkZXNjcmlwdGlvbiBwcm92aWRlZCBieSBhIGh1bWFuIHVzZXIgd2hlbiBtYWtpbmcgZGVjaXNpb25zIGFib3V0IHRoZSBvcmRlci5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPcmRlclJlc3BvbnNlLmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBMaW5rcyB0byByZXNvdXJjZXMgdGhhdCBwcm92aWRlIGRldGFpbHMgb2YgdGhlIG91dGNvbWUgb2YgcGVyZm9ybWluZyB0aGUgb3JkZXI7IGUuZy4gRGlhZ25vc3RpYyBSZXBvcnRzIGluIGEgcmVzcG9uc2UgdGhhdCBpcyBtYWRlIHRvIGFuIG9yZGVyIHRoYXQgcmVmZXJlbmNlZCBhIGRpYWdub3N0aWMgb3JkZXIuXHJcbiAgICovXHJcbiAgZnVsZmlsbG1lbnQ/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJlc3BvbnNlIHRvIGFuIG9yZGVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9yZGVyUmVzcG9uc2UgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ09yZGVyUmVzcG9uc2UnO1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSByZXNvdXJjZVR5cGU6IFwiT3JkZXJSZXNwb25zZVwiO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXJzIGFzc2lnbmVkIHRvIHRoaXMgb3JkZXIuIFRoZSBpZGVudGlmaWVycyBhcmUgdXN1YWxseSBhc3NpZ25lZCBieSB0aGUgc3lzdGVtIHJlc3BvbmRpbmcgdG8gdGhlIG9yZGVyLCBidXQgdGhleSBtYXkgYmUgcHJvdmlkZWQgb3IgYWRkZWQgdG8gYnkgb3RoZXIgc3lzdGVtcy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9yZGVyIHRoYXQgdGhpcyBpcyBpbiByZXNwb25zZSB0by5cclxuICAgKi9cclxuICBwdWJsaWMgcmVxdWVzdDogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSBhdCB3aGljaCB0aGlzIG9yZGVyIHJlc3BvbnNlIHdhcyBtYWRlIChjcmVhdGVkL3Bvc3RlZCkuXHJcbiAgICovXHJcbiAgcHVibGljIGRhdGU/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcnNvbiwgb3JnYW5pemF0aW9uLCBvciBkZXZpY2UgY3JlZGl0ZWQgd2l0aCBtYWtpbmcgdGhlIHJlc3BvbnNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB3aG8/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hhdCB0aGlzIHJlc3BvbnNlIHNheXMgYWJvdXQgdGhlIHN0YXR1cyBvZiB0aGUgb3JpZ2luYWwgb3JkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIG9yZGVyU3RhdHVzOiBmaGlyLkZoaXJDb2RlPE9yZGVyU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBkZXNjcmlwdGlvbiBhYm91dCB0aGUgcmVzcG9uc2UgLSBlLmcuIGEgdGV4dCBkZXNjcmlwdGlvbiBwcm92aWRlZCBieSBhIGh1bWFuIHVzZXIgd2hlbiBtYWtpbmcgZGVjaXNpb25zIGFib3V0IHRoZSBvcmRlci5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIExpbmtzIHRvIHJlc291cmNlcyB0aGF0IHByb3ZpZGUgZGV0YWlscyBvZiB0aGUgb3V0Y29tZSBvZiBwZXJmb3JtaW5nIHRoZSBvcmRlcjsgZS5nLiBEaWFnbm9zdGljIFJlcG9ydHMgaW4gYSByZXNwb25zZSB0aGF0IGlzIG1hZGUgdG8gYW4gb3JkZXIgdGhhdCByZWZlcmVuY2VkIGEgZGlhZ25vc3RpYyBvcmRlci5cclxuICAgKi9cclxuICBwdWJsaWMgZnVsZmlsbG1lbnQ6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgT3JkZXJSZXNwb25zZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPE9yZGVyUmVzcG9uc2VBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnT3JkZXJSZXNwb25zZSc7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gc291cmNlLmlkZW50aWZpZXIubWFwKCh4KSA9PiBuZXcgZmhpci5JZGVudGlmaWVyKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuaWRlbnRpZmllciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydyZXF1ZXN0J10pIHsgdGhpcy5yZXF1ZXN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZXF1ZXN0KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVxdWVzdCA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ2RhdGUnXSkgeyB0aGlzLmRhdGUgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuZGF0ZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGF0ZSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUpIHsgdGhpcy5kYXRlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2RhdGUhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kYXRlID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fZGF0ZSBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWyd3aG8nXSkgeyB0aGlzLndobyA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uud2hvKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnb3JkZXJTdGF0dXMnXSkgeyB0aGlzLm9yZGVyU3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8T3JkZXJTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uub3JkZXJTdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMub3JkZXJTdGF0dXMgPSBudWxsOyB9XHJcbiAgICBpZiAoc291cmNlWydfb3JkZXJTdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5vcmRlclN0YXR1cykgeyB0aGlzLm9yZGVyU3RhdHVzLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX29yZGVyU3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMub3JkZXJTdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxPcmRlclN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX29yZGVyU3RhdHVzIGFzIFBhcnRpYWw8Zmhpci5GaGlyQ29kZT4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydkZXNjcmlwdGlvbiddKSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmRlc2NyaXB0aW9ufSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19kZXNjcmlwdGlvbiddKSB7XHJcbiAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uKSB7IHRoaXMuZGVzY3JpcHRpb24uYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fZGVzY3JpcHRpb24hKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9kZXNjcmlwdGlvbiBhcyBQYXJ0aWFsPGZoaXIuRmhpclN0cmluZ0FyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZnVsZmlsbG1lbnQnXSkgeyB0aGlzLmZ1bGZpbGxtZW50ID0gc291cmNlLmZ1bGZpbGxtZW50Lm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuZnVsZmlsbG1lbnQgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ09yZGVyUmVzcG9uc2UnIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZSUygncmVxdWVzdCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2RhdGUnLGV4cClcclxuICAgIHRoaXMudk9TKCd3aG8nLGV4cClcclxuICAgIHRoaXMudlJTVignb3JkZXJTdGF0dXMnLGV4cCwnT3JkZXJTdGF0dXMnLE9yZGVyU3RhdHVzVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdkZXNjcmlwdGlvbicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2Z1bGZpbGxtZW50JyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=