// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentManifest
import * as fhir from '../fhir.js';
// @ts-ignore
import { DocumentReferenceStatusVsValidation } from '../fhirValueSets/DocumentReferenceStatusVsValidation.js';
/**
 * May be identifiers or resources that caused the DocumentManifest to be created.
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
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
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
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
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
        if (source['author']) {
            this.author = source.author.map((x) => new fhir.Reference(x));
        }
        else {
            this.author = [];
        }
        if (source['recipient']) {
            this.recipient = source.recipient.map((x) => new fhir.Reference(x));
        }
        else {
            this.recipient = [];
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
            this.content = source.content.map((x) => new fhir.Reference(x));
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
        this.vRSV('status', exp, 'DocumentReferenceStatus', DocumentReferenceStatusVsValidation, 'r');
        this.vOS('type', exp);
        this.vOS('subject', exp);
        this.vOS('created', exp);
        this.vOA('author', exp);
        this.vOA('recipient', exp);
        this.vOS('source', exp);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRNYW5pZmVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRG9jdW1lbnRNYW5pZmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFJbkMsYUFBYTtBQUNiLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBbUI5Rzs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxJQUFJLENBQUMsZUFBZTtJQWEvRDs7T0FFRztJQUNILFlBQVksU0FBOEMsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDcEcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUFFO1FBQ3ZGLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQUU7SUFDbkUsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsTUFBYSxFQUFFO1FBQy9DLElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsR0FBRyxHQUFHLDBCQUEwQixDQUFBO1NBQUU7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE3QkQ7O0dBRUc7QUFDNkIscUNBQWEsR0FBVSx5QkFBeUIsQ0FBQztBQXNHbkY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsSUFBSSxDQUFDLGNBQWM7SUF5RHZEOztPQUVHO0lBQ0gsWUFBWSxTQUF1QyxFQUFFLEVBQUUsVUFBc0MsRUFBRTtRQUM3RixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FBRTtRQUN6RyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDaEc7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQWtDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDOUc7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFRLENBQUMsQ0FBQzthQUFFO2lCQUNuRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBa0MsTUFBTSxDQUFDLE9BQWlDLENBQUMsQ0FBQzthQUFFO1NBQ3JIO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtRQUMxRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUFFO1FBQzdFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN6RixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQUM7YUFBRTtpQkFDdEU7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQTBDLENBQUMsQ0FBQzthQUFFO1NBQ2xHO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ25GO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FBRTtRQUMxQixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDNUY7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzdCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FBRTtRQUNqRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLENBQUM7YUFBRTtpQkFDbkU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQW9DLENBQUMsQ0FBQzthQUFFO1NBQ3RGO1FBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUFFO1FBQ25HLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxZQUFhLENBQUMsQ0FBQzthQUFFO2lCQUNsRjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBNEMsQ0FBQyxDQUFDO2FBQUU7U0FDdEc7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7YUFDdEY7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQzNCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO2FBQ3BHO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FBRTtJQUM3QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxNQUFhLEVBQUU7UUFDL0MsSUFBSSxNQUFNLEdBQW1CLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxHQUFHLEdBQUcsa0JBQWtCLENBQUE7U0FBRTtRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyx5QkFBeUIsRUFBQyxtQ0FBbUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN6RixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXJIRDs7R0FFRztBQUM2Qiw4QkFBYSxHQUFVLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogRG9jdW1lbnRNYW5pZmVzdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgRG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNDb2RlcywgIERvY3VtZW50UmVmZXJlbmNlU3RhdHVzQ29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL0RvY3VtZW50UmVmZXJlbmNlU3RhdHVzQ29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IERvY3VtZW50UmVmZXJlbmNlU3RhdHVzVnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9Eb2N1bWVudFJlZmVyZW5jZVN0YXR1c1ZzVmFsaWRhdGlvbi5qcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHsgVjNBY3RDb2RlcywgIFYzQWN0Q29kZVR5cGUgfSBmcm9tICcuLi9maGlyVmFsdWVTZXRzL1YzQWN0Q29kZXMuanMnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IFYzQWN0VnNWYWxpZGF0aW9uIH0gZnJvbSAnLi4vZmhpclZhbHVlU2V0cy9WM0FjdFZzVmFsaWRhdGlvbi5qcyc7XHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBEb2N1bWVudE1hbmlmZXN0UmVsYXRlZCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudE1hbmlmZXN0UmVsYXRlZEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIElmIGJvdGggaWRlbnRpZmllciBhbmQgcmVmIGVsZW1lbnRzIGFyZSBwcmVzZW50IHRoZXkgc2hhbGwgcmVmZXIgdG8gdGhlIHNhbWUgdGhpbmcuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIGJvdGggaWRlbnRpZmllciBhbmQgcmVmIGVsZW1lbnRzIGFyZSBwcmVzZW50IHRoZXkgc2hhbGwgcmVmZXIgdG8gdGhlIHNhbWUgdGhpbmcuXHJcbiAgICovXHJcbiAgcmVmPzogZmhpci5SZWZlcmVuY2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1heSBiZSBpZGVudGlmaWVycyBvciByZXNvdXJjZXMgdGhhdCBjYXVzZWQgdGhlIERvY3VtZW50TWFuaWZlc3QgdG8gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudE1hbmlmZXN0UmVsYXRlZCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nID0gJ0RvY3VtZW50TWFuaWZlc3RSZWxhdGVkJztcclxuICAvKipcclxuICAgKiBJZiBib3RoIGlkZW50aWZpZXIgYW5kIHJlZiBlbGVtZW50cyBhcmUgcHJlc2VudCB0aGV5IHNoYWxsIHJlZmVyIHRvIHRoZSBzYW1lIHRoaW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBib3RoIGlkZW50aWZpZXIgYW5kIHJlZiBlbGVtZW50cyBhcmUgcHJlc2VudCB0aGV5IHNoYWxsIHJlZmVyIHRvIHRoZSBzYW1lIHRoaW5nLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWY/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRG9jdW1lbnRNYW5pZmVzdFJlbGF0ZWQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxEb2N1bWVudE1hbmlmZXN0UmVsYXRlZEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgICBpZiAoc291cmNlWydpZGVudGlmaWVyJ10pIHsgdGhpcy5pZGVudGlmaWVyID0gbmV3IGZoaXIuSWRlbnRpZmllcihzb3VyY2UuaWRlbnRpZmllcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlZiddKSB7IHRoaXMucmVmID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5yZWYpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRG9jdW1lbnRNYW5pZmVzdC5yZWxhdGVkJyB9XHJcbiAgICB0aGlzLnZPUygnaWRlbnRpZmllcicsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3JlZicsZXhwKVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFZhbGlkIGFyZ3VtZW50cyBmb3IgdGhlIERvY3VtZW50TWFuaWZlc3QgdHlwZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRNYW5pZmVzdEFyZ3MgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlQXJncyB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkRvY3VtZW50TWFuaWZlc3RcInx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBzaW5nbGUgaWRlbnRpZmllciB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhpcyBtYW5pZmVzdC4gUHJpbmNpcGFsbHkgdXNlZCB0byByZWZlciB0byB0aGUgbWFuaWZlc3QgaW4gbm9uLUZISVIgY29udGV4dHMuXHJcbiAgICovXHJcbiAgbWFzdGVySWRlbnRpZmllcj86IGZoaXIuSWRlbnRpZmllckFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE90aGVyIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZG9jdW1lbnQgbWFuaWZlc3QsIGluY2x1ZGluZyB2ZXJzaW9uIGluZGVwZW5kZW50ICBpZGVudGlmaWVycy5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyB0aGUgY29kZXMgdGhhdCBtYXJrIHRoZSBtYW5pZmVzdCBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogZmhpci5GaGlyQ29kZTxEb2N1bWVudFJlZmVyZW5jZVN0YXR1c0NvZGVUeXBlPnxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEb2N1bWVudE1hbmlmZXN0LnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnRBcmdzO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyB0aGUga2luZCBvZiB0aGlzIHNldCBvZiBkb2N1bWVudHMgKGUuZy4gUGF0aWVudCBTdW1tYXJ5LCBEaXNjaGFyZ2UgU3VtbWFyeSwgUHJlc2NyaXB0aW9uLCBldGMuKS4gVGhlIHR5cGUgb2YgYSBzZXQgb2YgZG9jdW1lbnRzIG1heSBiZSB0aGUgc2FtZSBhcyBvbmUgb2YgdGhlIGRvY3VtZW50cyBpbiBpdCAtIGVzcGVjaWFsbHkgaWYgdGhlcmUgaXMgb25seSBvbmUgLSBidXQgaXQgbWF5IGJlIHdpZGVyLlxyXG4gICAqL1xyXG4gIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdEFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdobyBvciB3aGF0IHRoZSBzZXQgb2YgZG9jdW1lbnRzIGlzIGFib3V0LiBUaGUgZG9jdW1lbnRzIGNhbiBiZSBhYm91dCBhIHBlcnNvbiwgKHBhdGllbnQgb3IgaGVhbHRoY2FyZSBwcmFjdGl0aW9uZXIpLCBhIGRldmljZSAoaS5lLiBtYWNoaW5lKSBvciBldmVuIGEgZ3JvdXAgb2Ygc3ViamVjdHMgKHN1Y2ggYXMgYSBkb2N1bWVudCBhYm91dCBhIGhlcmQgb2YgZmFybSBhbmltYWxzLCBvciBhIHNldCBvZiBwYXRpZW50cyB0aGF0IHNoYXJlIGEgY29tbW9uIGV4cG9zdXJlKS4gSWYgdGhlIGRvY3VtZW50cyBjcm9zcyBtb3JlIHRoYW4gb25lIHN1YmplY3QsIHRoZW4gbW9yZSB0aGFuIG9uZSBzdWJqZWN0IGlzIGFsbG93ZWQgaGVyZSAodW51c3VhbCB1c2UgY2FzZSkuXHJcbiAgICovXHJcbiAgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlQXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRpb24gdGltZSBpcyB1c2VkIGZvciB0cmFja2luZywgb3JnYW5pemluZyB2ZXJzaW9ucyBhbmQgc2VhcmNoaW5nLiBUaGlzIGlzIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBkb2N1bWVudCBzZXQsIG5vdCB0aGUgZG9jdW1lbnRzIG9uIHdoaWNoIGl0IGlzIGJhc2VkLlxyXG4gICAqL1xyXG4gIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXxzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEb2N1bWVudE1hbmlmZXN0LmNyZWF0ZWRcclxuICAgKi9cclxuICBfY3JlYXRlZD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogTm90IG5lY2Vzc2FyaWx5IHdobyBkaWQgdGhlIGFjdHVhbCBkYXRhIGVudHJ5IChpLmUuIHR5cGlzdCkgb3Igd2hvIHdhcyB0aGUgc291cmNlIChpbmZvcm1hbnQpLlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBIb3cgdGhlIHJlY2lwaWVudCByZWNlaXZlcyB0aGUgZG9jdW1lbnQgc2V0IG9yIGlzIG5vdGlmaWVkIG9mIGl0IGlzIHVwIHRvIHRoZSBpbXBsZW1lbnRhdGlvbi4gVGhpcyBlbGVtZW50IGlzIGp1c3QgYSBzdGF0ZW1lbnQgb2YgaW50ZW50LiBJZiB0aGUgcmVjaXBpZW50IGlzIGEgcGVyc29uLCBhbmQgaXQgaXMgbm90IGtub3duIHdoZXRoZXIgdGhlIHBlcnNvbiBpcyBhIHBhdGllbnQgb3IgYSBwcmFjdGl0aW9uZXIsIFJlbGF0ZWRQZXJzb24gd291bGQgYmUgdGhlIGRlZmF1bHQgY2hvaWNlLlxyXG4gICAqL1xyXG4gIHJlY2lwaWVudD86IGZoaXIuUmVmZXJlbmNlQXJnc1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBzb3VyY2Ugc3lzdGVtLCBhcHBsaWNhdGlvbiwgb3Igc29mdHdhcmUgdGhhdCBwcm9kdWNlZCB0aGUgZG9jdW1lbnQgbWFuaWZlc3QuXHJcbiAgICovXHJcbiAgc291cmNlPzogZmhpci5GaGlyVXJpfHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IERvY3VtZW50TWFuaWZlc3Quc291cmNlXHJcbiAgICovXHJcbiAgX3NvdXJjZT86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogV2hhdCB0aGUgZG9jdW1lbnQgaXMgYWJvdXQsIHJhdGhlciB0aGFuIGEgdGVyc2Ugc3VtbWFyeSBvZiB0aGUgZG9jdW1lbnQuIEl0IGlzIGNvbW1vbmx5IHRoZSBjYXNlIHRoYXQgcmVjb3JkcyBkbyBub3QgaGF2ZSBhIHRpdGxlIGFuZCBhcmUgY29sbGVjdGl2ZWx5IHJlZmVycmVkIHRvIGJ5IHRoZSBkaXNwbGF5IG5hbWUgb2YgUmVjb3JkIGNvZGUgKGUuZy4gYSBcImNvbnN1bHRhdGlvblwiIG9yIFwicHJvZ3Jlc3Mgbm90ZVwiKS5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBEb2N1bWVudE1hbmlmZXN0LmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50QXJncztcclxuICAvKipcclxuICAgKiBXaGVuIHVzZWQgZm9yIFhEUyB0aGUgaW50ZW5kZWQgZm9jdXMgb2YgdGhlIERvY3VtZW50TWFuaWZlc3QgaXMgZm9yIHRoZSByZWZlcmVuY2UgdG8gdGFyZ2V0IHRvIGJlIGEgc2V0IG9mIERvY3VtZW50UmVmZXJlbmNlIFJlc291cmNlcy4gVGhlIHJlZmVyZW5jZSBpcyB0byBcIkFueVwiIHRvIHN1cHBvcnQgRU4gMTM2MDYgdXNhZ2UsIHdoZXJlIGFuIGV4dHJhY3QgaXMgRG9jdW1lbnRNYW5pZmVzdCB0aGF0IHJlZmVyZW5jZXMgIExpc3QgYW5kIENvbXBvc2l0aW9uIHJlc291cmNlcy5cclxuICAgKi9cclxuICBjb250ZW50OiBmaGlyLlJlZmVyZW5jZUFyZ3NbXXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIE1heSBiZSBpZGVudGlmaWVycyBvciByZXNvdXJjZXMgdGhhdCBjYXVzZWQgdGhlIERvY3VtZW50TWFuaWZlc3QgdG8gYmUgY3JlYXRlZC5cclxuICAgKi9cclxuICByZWxhdGVkPzogZmhpci5Eb2N1bWVudE1hbmlmZXN0UmVsYXRlZEFyZ3NbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIGNvbXBpbGVkIGZvciBhIHB1cnBvc2UgdG9nZXRoZXIgd2l0aCBtZXRhZGF0YSB0aGF0IGFwcGxpZXMgdG8gdGhlIGNvbGxlY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRNYW5pZmVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2Uge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnRG9jdW1lbnRNYW5pZmVzdCc7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIHJlc291cmNlVHlwZTogXCJEb2N1bWVudE1hbmlmZXN0XCI7XHJcbiAgLyoqXHJcbiAgICogQSBzaW5nbGUgaWRlbnRpZmllciB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhpcyBtYW5pZmVzdC4gUHJpbmNpcGFsbHkgdXNlZCB0byByZWZlciB0byB0aGUgbWFuaWZlc3QgaW4gbm9uLUZISVIgY29udGV4dHMuXHJcbiAgICovXHJcbiAgcHVibGljIG1hc3RlcklkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE90aGVyIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZG9jdW1lbnQgbWFuaWZlc3QsIGluY2x1ZGluZyB2ZXJzaW9uIGluZGVwZW5kZW50ICBpZGVudGlmaWVycy5cclxuICAgKi9cclxuICBwdWJsaWMgaWRlbnRpZmllcjogZmhpci5JZGVudGlmaWVyW107XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgdGhlIGNvZGVzIHRoYXQgbWFyayB0aGUgbWFuaWZlc3QgYXMgbm90IGN1cnJlbnRseSB2YWxpZC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdHVzOiBmaGlyLkZoaXJDb2RlPERvY3VtZW50UmVmZXJlbmNlU3RhdHVzQ29kZVR5cGU+fG51bGw7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIHRoZSBraW5kIG9mIHRoaXMgc2V0IG9mIGRvY3VtZW50cyAoZS5nLiBQYXRpZW50IFN1bW1hcnksIERpc2NoYXJnZSBTdW1tYXJ5LCBQcmVzY3JpcHRpb24sIGV0Yy4pLiBUaGUgdHlwZSBvZiBhIHNldCBvZiBkb2N1bWVudHMgbWF5IGJlIHRoZSBzYW1lIGFzIG9uZSBvZiB0aGUgZG9jdW1lbnRzIGluIGl0IC0gZXNwZWNpYWxseSBpZiB0aGVyZSBpcyBvbmx5IG9uZSAtIGJ1dCBpdCBtYXkgYmUgd2lkZXIuXHJcbiAgICovXHJcbiAgcHVibGljIHR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hvIG9yIHdoYXQgdGhlIHNldCBvZiBkb2N1bWVudHMgaXMgYWJvdXQuIFRoZSBkb2N1bWVudHMgY2FuIGJlIGFib3V0IGEgcGVyc29uLCAocGF0aWVudCBvciBoZWFsdGhjYXJlIHByYWN0aXRpb25lciksIGEgZGV2aWNlIChpLmUuIG1hY2hpbmUpIG9yIGV2ZW4gYSBncm91cCBvZiBzdWJqZWN0cyAoc3VjaCBhcyBhIGRvY3VtZW50IGFib3V0IGEgaGVyZCBvZiBmYXJtIGFuaW1hbHMsIG9yIGEgc2V0IG9mIHBhdGllbnRzIHRoYXQgc2hhcmUgYSBjb21tb24gZXhwb3N1cmUpLiBJZiB0aGUgZG9jdW1lbnRzIGNyb3NzIG1vcmUgdGhhbiBvbmUgc3ViamVjdCwgdGhlbiBtb3JlIHRoYW4gb25lIHN1YmplY3QgaXMgYWxsb3dlZCBoZXJlICh1bnVzdWFsIHVzZSBjYXNlKS5cclxuICAgKi9cclxuICBwdWJsaWMgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDcmVhdGlvbiB0aW1lIGlzIHVzZWQgZm9yIHRyYWNraW5nLCBvcmdhbml6aW5nIHZlcnNpb25zIGFuZCBzZWFyY2hpbmcuIFRoaXMgaXMgdGhlIGNyZWF0aW9uIHRpbWUgb2YgdGhlIGRvY3VtZW50IHNldCwgbm90IHRoZSBkb2N1bWVudHMgb24gd2hpY2ggaXQgaXMgYmFzZWQuXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZWQ/OiBmaGlyLkZoaXJEYXRlVGltZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTm90IG5lY2Vzc2FyaWx5IHdobyBkaWQgdGhlIGFjdHVhbCBkYXRhIGVudHJ5IChpLmUuIHR5cGlzdCkgb3Igd2hvIHdhcyB0aGUgc291cmNlIChpbmZvcm1hbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhdXRob3I6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogSG93IHRoZSByZWNpcGllbnQgcmVjZWl2ZXMgdGhlIGRvY3VtZW50IHNldCBvciBpcyBub3RpZmllZCBvZiBpdCBpcyB1cCB0byB0aGUgaW1wbGVtZW50YXRpb24uIFRoaXMgZWxlbWVudCBpcyBqdXN0IGEgc3RhdGVtZW50IG9mIGludGVudC4gSWYgdGhlIHJlY2lwaWVudCBpcyBhIHBlcnNvbiwgYW5kIGl0IGlzIG5vdCBrbm93biB3aGV0aGVyIHRoZSBwZXJzb24gaXMgYSBwYXRpZW50IG9yIGEgcHJhY3RpdGlvbmVyLCBSZWxhdGVkUGVyc29uIHdvdWxkIGJlIHRoZSBkZWZhdWx0IGNob2ljZS5cclxuICAgKi9cclxuICBwdWJsaWMgcmVjaXBpZW50OiBmaGlyLlJlZmVyZW5jZVtdO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIHNvdXJjZSBzeXN0ZW0sIGFwcGxpY2F0aW9uLCBvciBzb2Z0d2FyZSB0aGF0IHByb2R1Y2VkIHRoZSBkb2N1bWVudCBtYW5pZmVzdC5cclxuICAgKi9cclxuICBwdWJsaWMgc291cmNlPzogZmhpci5GaGlyVXJpfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGF0IHRoZSBkb2N1bWVudCBpcyBhYm91dCwgcmF0aGVyIHRoYW4gYSB0ZXJzZSBzdW1tYXJ5IG9mIHRoZSBkb2N1bWVudC4gSXQgaXMgY29tbW9ubHkgdGhlIGNhc2UgdGhhdCByZWNvcmRzIGRvIG5vdCBoYXZlIGEgdGl0bGUgYW5kIGFyZSBjb2xsZWN0aXZlbHkgcmVmZXJyZWQgdG8gYnkgdGhlIGRpc3BsYXkgbmFtZSBvZiBSZWNvcmQgY29kZSAoZS5nLiBhIFwiY29uc3VsdGF0aW9uXCIgb3IgXCJwcm9ncmVzcyBub3RlXCIpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB1c2VkIGZvciBYRFMgdGhlIGludGVuZGVkIGZvY3VzIG9mIHRoZSBEb2N1bWVudE1hbmlmZXN0IGlzIGZvciB0aGUgcmVmZXJlbmNlIHRvIHRhcmdldCB0byBiZSBhIHNldCBvZiBEb2N1bWVudFJlZmVyZW5jZSBSZXNvdXJjZXMuIFRoZSByZWZlcmVuY2UgaXMgdG8gXCJBbnlcIiB0byBzdXBwb3J0IEVOIDEzNjA2IHVzYWdlLCB3aGVyZSBhbiBleHRyYWN0IGlzIERvY3VtZW50TWFuaWZlc3QgdGhhdCByZWZlcmVuY2VzICBMaXN0IGFuZCBDb21wb3NpdGlvbiByZXNvdXJjZXMuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRlbnQ6IGZoaXIuUmVmZXJlbmNlW107XHJcbiAgLyoqXHJcbiAgICogTWF5IGJlIGlkZW50aWZpZXJzIG9yIHJlc291cmNlcyB0aGF0IGNhdXNlZCB0aGUgRG9jdW1lbnRNYW5pZmVzdCB0byBiZSBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWxhdGVkOiBmaGlyLkRvY3VtZW50TWFuaWZlc3RSZWxhdGVkW107XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgRG9jdW1lbnRNYW5pZmVzdCAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPERvY3VtZW50TWFuaWZlc3RBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5yZXNvdXJjZVR5cGUgPSAnRG9jdW1lbnRNYW5pZmVzdCc7XHJcbiAgICBpZiAoc291cmNlWydtYXN0ZXJJZGVudGlmaWVyJ10pIHsgdGhpcy5tYXN0ZXJJZGVudGlmaWVyID0gbmV3IGZoaXIuSWRlbnRpZmllcihzb3VyY2UubWFzdGVySWRlbnRpZmllcik7IH1cclxuICAgIGlmIChzb3VyY2VbJ2lkZW50aWZpZXInXSkgeyB0aGlzLmlkZW50aWZpZXIgPSBzb3VyY2UuaWRlbnRpZmllci5tYXAoKHgpID0+IG5ldyBmaGlyLklkZW50aWZpZXIoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5pZGVudGlmaWVyID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3N0YXR1cyddKSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNDb2RlVHlwZT4oe3ZhbHVlOiBzb3VyY2Uuc3RhdHVzfSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLnN0YXR1cyA9IG51bGw7IH1cclxuICAgIGlmIChzb3VyY2VbJ19zdGF0dXMnXSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMpIHsgdGhpcy5zdGF0dXMuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fc3RhdHVzISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuc3RhdHVzID0gbmV3IGZoaXIuRmhpckNvZGU8RG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNDb2RlVHlwZT4oc291cmNlLl9zdGF0dXMgYXMgUGFydGlhbDxmaGlyLkZoaXJDb2RlPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ3R5cGUnXSkgeyB0aGlzLnR5cGUgPSBuZXcgZmhpci5Db2RlYWJsZUNvbmNlcHQoc291cmNlLnR5cGUpOyB9XHJcbiAgICBpZiAoc291cmNlWydzdWJqZWN0J10pIHsgdGhpcy5zdWJqZWN0ID0gbmV3IGZoaXIuUmVmZXJlbmNlKHNvdXJjZS5zdWJqZWN0KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnY3JlYXRlZCddKSB7IHRoaXMuY3JlYXRlZCA9IG5ldyBmaGlyLkZoaXJEYXRlVGltZSh7dmFsdWU6IHNvdXJjZS5jcmVhdGVkfSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ19jcmVhdGVkJ10pIHtcclxuICAgICAgaWYgKHRoaXMuY3JlYXRlZCkgeyB0aGlzLmNyZWF0ZWQuYWRkRXh0ZW5kZWRQcm9wZXJ0aWVzKHNvdXJjZS5fY3JlYXRlZCEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmNyZWF0ZWQgPSBuZXcgZmhpci5GaGlyRGF0ZVRpbWUoc291cmNlLl9jcmVhdGVkIGFzIFBhcnRpYWw8Zmhpci5GaGlyRGF0ZVRpbWVBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2F1dGhvciddKSB7IHRoaXMuYXV0aG9yID0gc291cmNlLmF1dGhvci5tYXAoKHgpID0+IG5ldyBmaGlyLlJlZmVyZW5jZSh4KSk7IH1cclxuICAgIGVsc2UgeyB0aGlzLmF1dGhvciA9IFtdOyB9XHJcbiAgICBpZiAoc291cmNlWydyZWNpcGllbnQnXSkgeyB0aGlzLnJlY2lwaWVudCA9IHNvdXJjZS5yZWNpcGllbnQubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5yZWNpcGllbnQgPSBbXTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnc291cmNlJ10pIHsgdGhpcy5zb3VyY2UgPSBuZXcgZmhpci5GaGlyVXJpKHt2YWx1ZTogc291cmNlLnNvdXJjZX0pOyB9XHJcbiAgICBpZiAoc291cmNlWydfc291cmNlJ10pIHtcclxuICAgICAgaWYgKHRoaXMuc291cmNlKSB7IHRoaXMuc291cmNlLmFkZEV4dGVuZGVkUHJvcGVydGllcyhzb3VyY2UuX3NvdXJjZSEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnNvdXJjZSA9IG5ldyBmaGlyLkZoaXJVcmkoc291cmNlLl9zb3VyY2UgYXMgUGFydGlhbDxmaGlyLkZoaXJVcmlBcmdzPik7IH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2VbJ2Rlc2NyaXB0aW9uJ10pIHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoe3ZhbHVlOiBzb3VyY2UuZGVzY3JpcHRpb259KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Rlc2NyaXB0aW9uJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb24pIHsgdGhpcy5kZXNjcmlwdGlvbi5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9kZXNjcmlwdGlvbiEpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLmRlc2NyaXB0aW9uID0gbmV3IGZoaXIuRmhpclN0cmluZyhzb3VyY2UuX2Rlc2NyaXB0aW9uIGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydjb250ZW50J10pIHsgdGhpcy5jb250ZW50ID0gc291cmNlLmNvbnRlbnQubWFwKCh4KSA9PiBuZXcgZmhpci5SZWZlcmVuY2UoeCkpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5jb250ZW50ID0gW107IH1cclxuICAgIGlmIChzb3VyY2VbJ3JlbGF0ZWQnXSkgeyB0aGlzLnJlbGF0ZWQgPSBzb3VyY2UucmVsYXRlZC5tYXAoKHgpID0+IG5ldyBmaGlyLkRvY3VtZW50TWFuaWZlc3RSZWxhdGVkKHgpKTsgfVxyXG4gICAgZWxzZSB7IHRoaXMucmVsYXRlZCA9IFtdOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHA6c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cCk7XHJcbiAgICBpZiAoZXhwID09PSAnJykgeyBleHAgPSAnRG9jdW1lbnRNYW5pZmVzdCcgfVxyXG4gICAgdGhpcy52UlMoJ3Jlc291cmNlVHlwZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ21hc3RlcklkZW50aWZpZXInLGV4cClcclxuICAgIHRoaXMudk9BKCdpZGVudGlmaWVyJyxleHApXHJcbiAgICB0aGlzLnZSU1YoJ3N0YXR1cycsZXhwLCdEb2N1bWVudFJlZmVyZW5jZVN0YXR1cycsRG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNWc1ZhbGlkYXRpb24sJ3InKVxyXG4gICAgdGhpcy52T1MoJ3R5cGUnLGV4cClcclxuICAgIHRoaXMudk9TKCdzdWJqZWN0JyxleHApXHJcbiAgICB0aGlzLnZPUygnY3JlYXRlZCcsZXhwKVxyXG4gICAgdGhpcy52T0EoJ2F1dGhvcicsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3JlY2lwaWVudCcsZXhwKVxyXG4gICAgdGhpcy52T1MoJ3NvdXJjZScsZXhwKVxyXG4gICAgdGhpcy52T1MoJ2Rlc2NyaXB0aW9uJyxleHApXHJcbiAgICB0aGlzLnZSQSgnY29udGVudCcsZXhwKVxyXG4gICAgdGhpcy52T0EoJ3JlbGF0ZWQnLGV4cClcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==