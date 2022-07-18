// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentManifest
import * as fhir from '../fhir.js';
// @ts-ignore
import { DocumentReferenceStatusVsValidation } from '../fhirValueSets/DocumentReferenceStatusVsValidation.js';
/**
 * The list of Documents included in the manifest.
 */
export class DocumentManifestContent extends fhir.BackboneElement {
    /**
     * Default constructor for DocumentManifestContent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['p']) {
            this.p = source.p;
        }
        else if (source['pAttachment']) {
            this.p = new fhir.Attachment(source.pAttachment);
        }
        else if (source['pReference']) {
            this.p = new fhir.Reference(source.pReference);
        }
        else {
            this.p = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DocumentManifest.content';
        }
        this.vRS('p', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DocumentManifestContent._fts_dataType = 'DocumentManifestContent';
/**
 * Internal flag to properly serialize choice-type element DocumentManifest.content.p[x]
 */
DocumentManifestContent._fts_pIsChoice = true;
/**
 * Related identifiers or resources associated with the DocumentManifest.
 */
export class DocumentManifestRelated extends fhir.BackboneElement {
    /**
     * Default constructor for DocumentManifestRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['ref']) {
            this.ref = new fhir.Reference(source.ref);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DocumentManifest.related';
        }
        this.vOS('identifier', exp);
        this.vOS('ref', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DocumentManifestRelated._fts_dataType = 'DocumentManifestRelated';
/**
 * A manifest that defines a set of documents.
 */
export class DocumentManifest extends fhir.DomainResource {
    /**
     * Default constructor for DocumentManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.resourceType = 'DocumentManifest';
        if (source['masterIdentifier']) {
            this.masterIdentifier = new fhir.Identifier(source.masterIdentifier);
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        else {
            this.identifier = [];
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['recipient']) {
            this.recipient = source.recipient.map((x) => new fhir.Reference(x));
        }
        else {
            this.recipient = [];
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['author']) {
            this.author = source.author.map((x) => new fhir.Reference(x));
        }
        else {
            this.author = [];
        }
        if (source['created']) {
            this.created = new fhir.FhirDateTime({ value: source.created });
        }
        if (source['_created']) {
            if (this.created) {
                this.created.addExtendedProperties(source._created);
            }
            else {
                this.created = new fhir.FhirDateTime(source._created);
            }
        }
        if (source['source']) {
            this.source = new fhir.FhirUri({ value: source.source });
        }
        if (source['_source']) {
            if (this.source) {
                this.source.addExtendedProperties(source._source);
            }
            else {
                this.source = new fhir.FhirUri(source._source);
            }
        }
        if (source['status']) {
            this.status = new fhir.FhirCode({ value: source.status });
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            if (this.status) {
                this.status.addExtendedProperties(source._status);
            }
            else {
                this.status = new fhir.FhirCode(source._status);
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
        if (source['content']) {
            this.content = source.content.map((x) => new fhir.DocumentManifestContent(x));
        }
        else {
            this.content = [];
        }
        if (source['related']) {
            this.related = source.related.map((x) => new fhir.DocumentManifestRelated(x));
        }
        else {
            this.related = [];
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp = '') {
        let issues = super.doModelValidation(exp);
        if (exp === '') {
            exp = 'DocumentManifest';
        }
        this.vRS('resourceType', exp);
        this.vOS('masterIdentifier', exp);
        this.vOA('identifier', exp);
        this.vOS('subject', exp);
        this.vOA('recipient', exp);
        this.vOS('type', exp);
        this.vOA('author', exp);
        this.vOS('created', exp);
        this.vOS('source', exp);
        this.vRSV('status', exp, 'DocumentReferenceStatus', DocumentReferenceStatusVsValidation, 'r');
        this.vOS('description', exp);
        this.vRA('content', exp);
        this.vOA('related', exp);
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
DocumentManifest._fts_dataType = 'DocumentManifest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRNYW5pZmVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRG9jdW1lbnRNYW5pZmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBbUI5Rzs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWEvRDs7T0FFRztJQUNILFlBQVksU0FBOEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDcEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ2xDLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQUU7YUFDaEYsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FBRTthQUM3RTtZQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQUU7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFH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TUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyx5QkFBeUIsRUFBQyxtQ0FBbUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN6RixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXJIRDs7R0FFRztBQUM2Qiw4QkFBYSxHQUFVLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBEb2N1bWVudE1hbmlmZXN0XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBEb2N1bWVudFJlZmVyZW5jZVN0YXR1c0NvZGVzLCAgRG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNDb2RlVHlwZSB9IGZyb20gJy4uL2ZoaXJWYWx1ZVNldHMvRG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNDb2Rlcy5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNWc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RvY3VtZW50UmVmZXJlbmNlU3RhdHVzVnNWYWxpZGF0aW9uLmpzJztcclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERvY3VtZW50TWFuaWZlc3RDb250ZW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50TWFuaWZlc3RDb250ZW50QXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgcmVmZXJlbmNlcyB0byBkb2N1bWVudCBjb250ZW50LCBvciBBdHRhY2htZW50IHRoYXQgY29uc2lzdCBvZiB0aGUgcGFydHMgb2YgdGhpcyBkb2N1bWVudCBtYW5pZmVzdC4gVXN1YWxseSwgdGhlc2Ugd291bGQgYmUgZG9jdW1lbnQgcmVmZXJlbmNlcywgYnV0IGRpcmVjdCByZWZlcmVuY2VzIHRvIE1lZGlhIG9yIEF0dGFjaG1lbnRzIGFyZSBhbHNvIGFsbG93ZWQuXHJcbiAgICovXHJcbiAgcD86IGZoaXIuQXR0YWNobWVudHxmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgcmVmZXJlbmNlcyB0byBkb2N1bWVudCBjb250ZW50LCBvciBBdHRhY2htZW50IHRoYXQgY29uc2lzdCBvZiB0aGUgcGFydHMgb2YgdGhpcyBkb2N1bWVudCBtYW5pZmVzdC4gVXN1YWxseSwgdGhlc2Ugd291bGQgYmUgZG9jdW1lbnQgcmVmZXJlbmNlcywgYnV0IGRpcmVjdCByZWZlcmVuY2VzIHRvIE1lZGlhIG9yIEF0dGFjaG1lbnRzIGFyZSBhbHNvIGFsbG93ZWQuXHJcbiAgICovXHJcbiAgcEF0dGFjaG1lbnQ/OiBmaGlyLkF0dGFjaG1lbnRBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiByZWZlcmVuY2VzIHRvIGRvY3VtZW50IGNvbnRlbnQsIG9yIEF0dGFjaG1lbnQgdGhhdCBjb25zaXN0IG9mIHRoZSBwYXJ0cyBvZiB0aGlzIGRvY3VtZW50IG1hbmlmZXN0LiBVc3VhbGx5LCB0aGVzZSB3b3VsZCBiZSBkb2N1bWVudCByZWZlcmVuY2VzLCBidXQgZGlyZWN0IHJlZmVyZW5jZXMgdG8gTWVkaWEgb3IgQXR0YWNobWVudHMgYXJlIGFsc28gYWxsb3dlZC5cclxuICAgKi9cclxuICBwUmVmZXJlbmNlPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBsaXN0IG9mIERvY3VtZW50cyBpbmNsdWRlZCBpbiB0aGUgbWFuaWZlc3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRNYW5pZmVzdENvbnRlbnQgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdEb2N1bWVudE1hbmlmZXN0Q29udGVudCc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxpc3Qgb2YgcmVmZXJlbmNlcyB0byBkb2N1bWVudCBjb250ZW50LCBvciBBdHRhY2htZW50IHRoYXQgY29uc2lzdCBvZiB0aGUgcGFydHMgb2YgdGhpcyBkb2N1bWVudCBtYW5pZmVzdC4gVXN1YWxseSwgdGhlc2Ugd291bGQgYmUgZG9jdW1lbnQgcmVmZXJlbmNlcywgYnV0IGRpcmVjdCByZWZlcmVuY2VzIHRvIE1lZGlhIG9yIEF0dGFjaG1lbnRzIGFyZSBhbHNvIGFsbG93ZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHA6IChmaGlyLkF0dGFjaG1lbnR8Zmhpci5SZWZlcmVuY2UpfG51bGw7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgZmxhZyB0byBwcm9wZXJseSBzZXJpYWxpemUgY2hvaWNlLXR5cGUgZWxlbWVudCBEb2N1bWVudE1hbmlmZXN0LmNvbnRlbnQucFt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19wSXNDaG9pY2U6dHJ1ZSA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRG9jdW1lbnRNYW5pZmVzdENvbnRlbnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEb2N1bWVudE1hbmlmZXN0Q29udGVudEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydwJ10pIHsgdGhpcy5wID0gc291cmNlLnA7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsncEF0dGFjaG1lbnQnXSkgeyB0aGlzLnAgPSBuZXcgZmhpci5BdHRhY2htZW50KHNvdXJjZS5wQXR0YWNobWVudCk7IH1cclxuICAgIGVsc2UgaWYgKHNvdXJjZVsncFJlZmVyZW5jZSddKSB7IHRoaXMucCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucFJlZmVyZW5jZSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnAgPSBudWxsOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRG9jdW1lbnRNYW5pZmVzdC5jb250ZW50JyB9XHJcbiAgICB0aGlzLnZSUygncCcsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERvY3VtZW50TWFuaWZlc3RSZWxhdGVkIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50TWFuaWZlc3RSZWxhdGVkQXJncyBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVsYXRlZCBpZGVudGlmaWVyIHRvIHRoaXMgRG9jdW1lbnRNYW5pZmVzdC4gIEZvciBleGFtcGxlLCBPcmRlciBudW1iZXJzLCBhY2Nlc3Npb24gbnVtYmVycywgWERXIHdvcmtmbG93IG51bWJlcnMuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJlbGF0ZWQgUmVzb3VyY2UgdG8gdGhpcyBEb2N1bWVudE1hbmlmZXN0LiBGb3IgZXhhbXBsZSwgT3JkZXIsIERpYWdub3N0aWNPcmRlciwgIFByb2NlZHVyZSwgRWxpZ2liaWxpdHlSZXF1ZXN0LCBldGMuXHJcbiAgICovXHJcbiAgcmVmPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbGF0ZWQgaWRlbnRpZmllcnMgb3IgcmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgRG9jdW1lbnRNYW5pZmVzdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudE1hbmlmZXN0UmVsYXRlZCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RvY3VtZW50TWFuaWZlc3RSZWxhdGVkJztcclxuICAvKipcclxuICAgKiBSZWxhdGVkIGlkZW50aWZpZXIgdG8gdGhpcyBEb2N1bWVudE1hbmlmZXN0LiAgRm9yIGV4YW1wbGUsIE9yZGVyIG51bWJlcnMsIGFjY2Vzc2lvbiBudW1iZXJzLCBYRFcgd29ya2Zsb3cgbnVtYmVycy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVsYXRlZCBSZXNvdXJjZSB0byB0aGlzIERvY3VtZW50TWFuaWZlc3QuIEZvciBleGFtcGxlLCBPcmRlciwgRGlhZ25vc3RpY09yZGVyLCAgUHJvY2VkdXJlLCBFbGlnaWJpbGl0eVJlcXVlc3QsIGV0Yy5cclxuICAgKi9cclxuICBwdWJsaWMgcmVmPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgZm9yIERvY3VtZW50TWFuaWZlc3RSZWxhdGVkIC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RG9jdW1lbnRNYW5pZmVzdFJlbGF0ZWRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IG5ldyBmaGlyLklkZW50aWZpZXIoc291cmNlLmlkZW50aWZpZXIpOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWYnXSkgeyB0aGlzLnJlZiA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2UucmVmKTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0RvY3VtZW50TWFuaWZlc3QucmVsYXRlZCcgfVxyXG4gICAgdGhpcy52T1MoJ2lkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9TKCdyZWYnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEb2N1bWVudE1hbmlmZXN0IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50TWFuaWZlc3RBcmdzIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZUFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJEb2N1bWVudE1hbmlmZXN0XCJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgc2luZ2xlIGlkZW50aWZpZXIgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoaXMgbWFuaWZlc3QuIFByaW5jaXBhbGx5IHVzZWQgdG8gcmVmZXIgdG8gdGhlIG1hbmlmZXN0IGluIG5vbi1GSElSIGNvbnRleHRzLlxyXG4gICAqL1xyXG4gIG1hc3RlcklkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBPdGhlciBpZGVudGlmaWVycyBhc3NvY2lhdGVkIHdpdGggdGhlIGRvY3VtZW50IG1hbmlmZXN0LCBpbmNsdWRpbmcgdmVyc2lvbiBpbmRlcGVuZGVudCAgaWRlbnRpZmllcnMuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hvIG9yIHdoYXQgdGhlIHNldCBvZiBkb2N1bWVudHMgaXMgYWJvdXQuIFRoZSBkb2N1bWVudHMgY2FuIGJlIGFib3V0IGEgcGVyc29uLCAocGF0aWVudCBvciBoZWFsdGhjYXJlIHByYWN0aXRpb25lciksIGEgZGV2aWNlIChpLmUuIG1hY2hpbmUpIG9yIGV2ZW4gYSBncm91cCBvZiBzdWJqZWN0cyAoc3VjaCBhcyBhIGRvY3VtZW50IGFib3V0IGEgaGVyZCBvZiBmYXJtIGFuaW1hbHMsIG9yIGEgc2V0IG9mIHBhdGllbnRzIHRoYXQgc2hhcmUgYSBjb21tb24gZXhwb3N1cmUpLiBJZiB0aGUgZG9jdW1lbnRzIGNyb3NzIG1vcmUgdGhhbiBvbmUgc3ViamVjdCwgdGhlbiBtb3JlIHRoYW4gb25lIHN1YmplY3QgaXMgYWxsb3dlZCBoZXJlICh1bnVzdWFsIHVzZSBjYXNlKS5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHBhdGllbnQsIHByYWN0aXRpb25lciwgb3Igb3JnYW5pemF0aW9uIGZvciB3aGljaCB0aGlzIHNldCBvZiBkb2N1bWVudHMgaXMgaW50ZW5kZWQuXHJcbiAgICovXHJcbiAgcmVjaXBpZW50PzogZmhpci5SZWZlcmVuY2VBcmdzW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyB0aGUga2luZCBvZiB0aGlzIHNldCBvZiBkb2N1bWVudHMgKGUuZy4gUGF0aWVudCBTdW1tYXJ5LCBEaXNjaGFyZ2UgU3VtbWFyeSwgUHJlc2NyaXB0aW9uLCBldGMuKS4gVGhlIHR5cGUgb2YgYSBzZXQgb2YgZG9jdW1lbnRzIG1heSBiZSB0aGUgc2FtZSBhcyBvbmUgb2YgdGhlIGRvY3VtZW50cyBpbiBpdCAtIGVzcGVjaWFsbHkgaWYgdGhlcmUgaXMgb25seSBvbmUgLSBidXQgaXQgbWF5IGJlIHdpZGVyLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgbWFuaWZlc3QsIGFuZCBhZGRpbmcgIGRvY3VtZW50cyB0byBpdC5cclxuICAgKi9cclxuICBhdXRob3I/OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgZG9jdW1lbnQgbWFuaWZlc3Qgd2FzIGNyZWF0ZWQgZm9yIHN1Ym1pc3Npb24gdG8gdGhlIHNlcnZlciAobm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIHRoaW5nIGFzIHRoZSBhY3R1YWwgcmVzb3VyY2UgbGFzdCBtb2RpZmllZCB0aW1lLCBzaW5jZSBpdCBtYXkgYmUgbW9kaWZpZWQsIHJlcGxpY2F0ZWQsIGV0Yy4pLlxyXG4gICAqL1xyXG4gIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEb2N1bWVudE1hbmlmZXN0LmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgc291cmNlIHN5c3RlbSwgYXBwbGljYXRpb24sIG9yIHNvZnR3YXJlIHRoYXQgcHJvZHVjZWQgdGhlIGRvY3VtZW50IG1hbmlmZXN0LlxyXG4gICAqL1xyXG4gIHNvdXJjZT86IGZoaXIuRmhpclVyaXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEb2N1bWVudE1hbmlmZXN0LnNvdXJjZVxyXG4gICAqL1xyXG4gIF9zb3VyY2U/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhpcyBkb2N1bWVudCBtYW5pZmVzdC5cclxuICAgKi9cclxuICBzdGF0dXM6IGZoaXIuRmhpckNvZGU8RG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNDb2RlVHlwZT58c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRG9jdW1lbnRNYW5pZmVzdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBIZWxwcyBodW1hbnMgdG8gYXNzZXNzIHdoZXRoZXIgdGhlIGRvY3VtZW50IGlzIG9mIGludGVyZXN0LlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogZmhpci5GaGlyU3RyaW5nfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERvY3VtZW50TWFuaWZlc3QuZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsaXN0IG9mIERvY3VtZW50cyBpbmNsdWRlZCBpbiB0aGUgbWFuaWZlc3QuXHJcbiAgICovXHJcbiAgY29udGVudDogZmhpci5Eb2N1bWVudE1hbmlmZXN0Q29udGVudEFyZ3NbXXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJlbGF0ZWQgaWRlbnRpZmllcnMgb3IgcmVzb3VyY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgRG9jdW1lbnRNYW5pZmVzdC5cclxuICAgKi9cclxuICByZWxhdGVkPzogZmhpci5Eb2N1bWVudE1hbmlmZXN0UmVsYXRlZEFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIG1hbmlmZXN0IHRoYXQgZGVmaW5lcyBhIHNldCBvZiBkb2N1bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRNYW5pZmVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRG9jdW1lbnRNYW5pZmVzdCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJEb2N1bWVudE1hbmlmZXN0XCI7XHJcbiAgLyoqXHJcbiAgICogQSBzaW5nbGUgaWRlbnRpZmllciB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhpcyBtYW5pZmVzdC4gUHJpbmNpcGFsbHkgdXNlZCB0byByZWZlciB0byB0aGUgbWFuaWZlc3QgaW4gbm9uLUZISVIgY29udGV4dHMuXHJcbiAgICovXHJcbiAgcHVibGljIG1hc3RlcklkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE90aGVyIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZG9jdW1lbnQgbWFuaWZlc3QsIGluY2x1ZGluZyB2ZXJzaW9uIGluZGVwZW5kZW50ICBpZGVudGlmaWVycy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogV2hvIG9yIHdoYXQgdGhlIHNldCBvZiBkb2N1bWVudHMgaXMgYWJvdXQuIFRoZSBkb2N1bWVudHMgY2FuIGJlIGFib3V0IGEgcGVyc29uLCAocGF0aWVudCBvciBoZWFsdGhjYXJlIHByYWN0aXRpb25lciksIGEgZGV2aWNlIChpLmUuIG1hY2hpbmUpIG9yIGV2ZW4gYSBncm91cCBvZiBzdWJqZWN0cyAoc3VjaCBhcyBhIGRvY3VtZW50IGFib3V0IGEgaGVyZCBvZiBmYXJtIGFuaW1hbHMsIG9yIGEgc2V0IG9mIHBhdGllbnRzIHRoYXQgc2hhcmUgYSBjb21tb24gZXhwb3N1cmUpLiBJZiB0aGUgZG9jdW1lbnRzIGNyb3NzIG1vcmUgdGhhbiBvbmUgc3ViamVjdCwgdGhlbiBtb3JlIHRoYW4gb25lIHN1YmplY3QgaXMgYWxsb3dlZCBoZXJlICh1bnVzdWFsIHVzZSBjYXNlKS5cclxuICAgKi9cclxuICBwdWJsaWMgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHBhdGllbnQsIHByYWN0aXRpb25lciwgb3Igb3JnYW5pemF0aW9uIGZvciB3aGljaCB0aGlzIHNldCBvZiBkb2N1bWVudHMgaXMgaW50ZW5kZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlY2lwaWVudDogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgdGhlIGtpbmQgb2YgdGhpcyBzZXQgb2YgZG9jdW1lbnRzIChlLmcuIFBhdGllbnQgU3VtbWFyeSwgRGlzY2hhcmdlIFN1bW1hcnksIFByZXNjcmlwdGlvbiwgZXRjLikuIFRoZSB0eXBlIG9mIGEgc2V0IG9mIGRvY3VtZW50cyBtYXkgYmUgdGhlIHNhbWUgYXMgb25lIG9mIHRoZSBkb2N1bWVudHMgaW4gaXQgLSBlc3BlY2lhbGx5IGlmIHRoZXJlIGlzIG9ubHkgb25lIC0gYnV0IGl0IG1heSBiZSB3aWRlci5cclxuICAgKi9cclxuICBwdWJsaWMgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHdobyBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIG1hbmlmZXN0LCBhbmQgYWRkaW5nICBkb2N1bWVudHMgdG8gaXQuXHJcbiAgICovXHJcbiAgcHVibGljIGF1dGhvcjogZmhpci5SZWZlcmVuY2VbXTtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSBkb2N1bWVudCBtYW5pZmVzdCB3YXMgY3JlYXRlZCBmb3Igc3VibWlzc2lvbiB0byB0aGUgc2VydmVyIChub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIGFjdHVhbCByZXNvdXJjZSBsYXN0IG1vZGlmaWVkIHRpbWUsIHNpbmNlIGl0IG1heSBiZSBtb2RpZmllZCwgcmVwbGljYXRlZCwgZXRjLikuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgc291cmNlIHN5c3RlbSwgYXBwbGljYXRpb24sIG9yIHNvZnR3YXJlIHRoYXQgcHJvZHVjZWQgdGhlIGRvY3VtZW50IG1hbmlmZXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzb3VyY2U/OiBmaGlyLkZoaXJVcml8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhpcyBkb2N1bWVudCBtYW5pZmVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPERvY3VtZW50UmVmZXJlbmNlU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogSGVscHMgaHVtYW5zIHRvIGFzc2VzcyB3aGV0aGVyIHRoZSBkb2N1bWVudCBpcyBvZiBpbnRlcmVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsaXN0IG9mIERvY3VtZW50cyBpbmNsdWRlZCBpbiB0aGUgbWFuaWZlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnQ6IGZoaXIuRG9jdW1lbnRNYW5pZmVzdENvbnRlbnRbXTtcclxuICAvKipcclxuICAgKiBSZWxhdGVkIGlkZW50aWZpZXJzIG9yIHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIERvY3VtZW50TWFuaWZlc3QuXHJcbiAgICovXHJcbiAgcHVibGljIHJlbGF0ZWQ6IGZoaXIuRG9jdW1lbnRNYW5pZmVzdFJlbGF0ZWRbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBEb2N1bWVudE1hbmlmZXN0IC0gaW5pdGlhbGl6ZXMgYW55IHJlcXVpcmVkIGVsZW1lbnRzIHRvIG51bGwgaWYgYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOlBhcnRpYWw8RG9jdW1lbnRNYW5pZmVzdEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc291cmNlVHlwZSA9ICdEb2N1bWVudE1hbmlmZXN0JztcclxuICAgIGlmIChzb3VyY2VbJ21hc3RlcklkZW50aWZpZXInXSkgeyB0aGlzLm1hc3RlcklkZW50aWZpZXIgPSBuZXcgZmhpci5JZGVudGlmaWVyKHNvdXJjZS5tYXN0ZXJJZGVudGlmaWVyKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnaWRlbnRpZmllciddKSB7IHRoaXMuaWRlbnRpZmllciA9IHNvdXJjZS5pZGVudGlmaWVyLm1hcCgoeCkgPT4gbmV3IGZoaXIuSWRlbnRpZmllcih4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmlkZW50aWZpZXIgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3ViamVjdCddKSB7IHRoaXMuc3ViamVjdCA9IG5ldyBmaGlyLlJlZmVyZW5jZShzb3VyY2Uuc3ViamVjdCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlY2lwaWVudCddKSB7IHRoaXMucmVjaXBpZW50ID0gc291cmNlLnJlY2lwaWVudC5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlY2lwaWVudCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWyd0eXBlJ10pIHsgdGhpcy50eXBlID0gbmV3IGZoaXIuQ29kZWFibGVDb25jZXB0KHNvdXJjZS50eXBlKTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYXV0aG9yJ10pIHsgdGhpcy5hdXRob3IgPSBzb3VyY2UuYXV0aG9yLm1hcCgoeCkgPT4gbmV3IGZoaXIuUmVmZXJlbmNlKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuYXV0aG9yID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ2NyZWF0ZWQnXSkgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoe3ZhbHVlOiBzb3VyY2UuY3JlYXRlZH0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfY3JlYXRlZCddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNyZWF0ZWQpIHsgdGhpcy5jcmVhdGVkLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2NyZWF0ZWQhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5jcmVhdGVkID0gbmV3IGZoaXIuRmhpckRhdGVUaW1lKHNvdXJjZS5fY3JlYXRlZCBhcyBQYXJ0aWFsPGZoaXIuRmhpckRhdGVUaW1lQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydzb3VyY2UnXSkgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLkZoaXJVcmkoe3ZhbHVlOiBzb3VyY2Uuc291cmNlfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zb3VyY2UnXSkge1xyXG4gICAgICBpZiAodGhpcy5zb3VyY2UpIHsgdGhpcy5zb3VyY2UuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc291cmNlISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc291cmNlID0gbmV3IGZoaXIuRmhpclVyaShzb3VyY2UuX3NvdXJjZSBhcyBQYXJ0aWFsPGZoaXIuRmhpclVyaUFyZ3M+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnc3RhdHVzJ10pIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxEb2N1bWVudFJlZmVyZW5jZVN0YXR1c0NvZGVUeXBlPih7dmFsdWU6IHNvdXJjZS5zdGF0dXN9KTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbnVsbDsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX3N0YXR1cyddKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cykgeyB0aGlzLnN0YXR1cy5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9zdGF0dXMhKTsgfVxyXG4gICAgICBlbHNlIHsgdGhpcy5zdGF0dXMgPSBuZXcgZmhpci5GaGlyQ29kZTxEb2N1bWVudFJlZmVyZW5jZVN0YXR1c0NvZGVUeXBlPihzb3VyY2UuX3N0YXR1cyBhcyBQYXJ0aWFsPGZoaXIuRmhpckNvZGU+KTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNvdXJjZVsnZGVzY3JpcHRpb24nXSkgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5kZXNjcmlwdGlvbn0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfZGVzY3JpcHRpb24nXSkge1xyXG4gICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbikgeyB0aGlzLmRlc2NyaXB0aW9uLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX2Rlc2NyaXB0aW9uISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgZmhpci5GaGlyU3RyaW5nKHNvdXJjZS5fZGVzY3JpcHRpb24gYXMgUGFydGlhbDxmaGlyLkZoaXJTdHJpbmdBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2NvbnRlbnQnXSkgeyB0aGlzLmNvbnRlbnQgPSBzb3VyY2UuY29udGVudC5tYXAoKHgpID0+IG5ldyBmaGlyLkRvY3VtZW50TWFuaWZlc3RDb250ZW50KHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMuY29udGVudCA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWxhdGVkJ10pIHsgdGhpcy5yZWxhdGVkID0gc291cmNlLnJlbGF0ZWQubWFwKCh4KSA9PiBuZXcgZmhpci5Eb2N1bWVudE1hbmlmZXN0UmVsYXRlZCh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnJlbGF0ZWQgPSBbXTsgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0byBwZXJmb3JtIGJhc2ljIG1vZGVsIHZhbGlkYXRpb24gKGUuZy4sIGNoZWNrIGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZSBwcmVzZW50KS5cclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcnJpZGUgZG9Nb2RlbFZhbGlkYXRpb24oZXhwOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHApO1xyXG4gICAgaWYgKGV4cCA9PT0gJycpIHsgZXhwID0gJ0RvY3VtZW50TWFuaWZlc3QnIH1cclxuICAgIHRoaXMudlJTKCdyZXNvdXJjZVR5cGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdtYXN0ZXJJZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZPQSgnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3N1YmplY3QnLGV4cClcclxuICAgIHRoaXMudk9BKCdyZWNpcGllbnQnLGV4cClcclxuICAgIHRoaXMudk9TKCd0eXBlJyxleHApXHJcbiAgICB0aGlzLnZPQSgnYXV0aG9yJyxleHApXHJcbiAgICB0aGlzLnZPUygnY3JlYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3NvdXJjZScsZXhwKVxyXG4gICAgdGhpcy52UlNWKCdzdGF0dXMnLGV4cCwnRG9jdW1lbnRSZWZlcmVuY2VTdGF0dXMnLERvY3VtZW50UmVmZXJlbmNlU3RhdHVzVnNWYWxpZGF0aW9uLCdyJylcclxuICAgIHRoaXMudk9TKCdkZXNjcmlwdGlvbicsZXhwKVxyXG4gICAgdGhpcy52UkEoJ2NvbnRlbnQnLGV4cClcclxuICAgIHRoaXMudk9BKCdyZWxhdGVkJyxleHApXHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4iXX0=