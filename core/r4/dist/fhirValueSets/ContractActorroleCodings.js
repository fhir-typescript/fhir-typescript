// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-actorrole|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample Contract Actor Role codes.
 */
export const ContractActorroleCodings = {
    /**
     * patient: A receiver, human or animal, of health care related goods and services.
     */
    Patient: new Coding({
        display: "Patient",
        code: "patient",
        system: "http://terminology.hl7.org/CodeSystem/contractactorrole",
    }),
    /**
     * practitioner: Someone who provides health care related services to people or animals including both clinical and support services.
     */
    Practitioner: new Coding({
        display: "Practitioner",
        code: "practitioner",
        system: "http://terminology.hl7.org/CodeSystem/contractactorrole",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RBY3RvcnJvbGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db250cmFjdEFjdG9ycm9sZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBRXZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHO0lBQ3RDOztPQUVHO0lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHlEQUF5RDtLQUNsRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxZQUFZLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLHlEQUF5RDtLQUNsRSxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jb250cmFjdC1hY3RvcnJvbGV8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGluY2x1ZGVzIHNhbXBsZSBDb250cmFjdCBBY3RvciBSb2xlIGNvZGVzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbnRyYWN0QWN0b3Jyb2xlQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBwYXRpZW50OiBBIHJlY2VpdmVyLCBodW1hbiBvciBhbmltYWwsIG9mIGhlYWx0aCBjYXJlIHJlbGF0ZWQgZ29vZHMgYW5kIHNlcnZpY2VzLlxyXG4gICAqL1xyXG4gIFBhdGllbnQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJQYXRpZW50XCIsXHJcbiAgICBjb2RlOiBcInBhdGllbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NvbnRyYWN0YWN0b3Jyb2xlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcHJhY3RpdGlvbmVyOiBTb21lb25lIHdobyBwcm92aWRlcyBoZWFsdGggY2FyZSByZWxhdGVkIHNlcnZpY2VzIHRvIHBlb3BsZSBvciBhbmltYWxzIGluY2x1ZGluZyBib3RoIGNsaW5pY2FsIGFuZCBzdXBwb3J0IHNlcnZpY2VzLlxyXG4gICAqL1xyXG4gIFByYWN0aXRpb25lcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlByYWN0aXRpb25lclwiLFxyXG4gICAgY29kZTogXCJwcmFjdGl0aW9uZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2NvbnRyYWN0YWN0b3Jyb2xlXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgaW5jbHVkZXMgc2FtcGxlIENvbnRyYWN0IEFjdG9yIFJvbGUgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb250cmFjdEFjdG9ycm9sZUNvZGluZ1R5cGUgPSB0eXBlb2YgQ29udHJhY3RBY3RvcnJvbGVDb2RpbmdzO1xyXG4iXX0=