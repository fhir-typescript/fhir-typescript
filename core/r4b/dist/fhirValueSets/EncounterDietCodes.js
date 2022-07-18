// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-diet|4.3.0
/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export const EncounterDietCodes = {
    /**
     * dairy-free: Excludes dairy products.
     */
    DairyFree: "dairy-free",
    /**
     * gluten-free: Excludes ingredients containing gluten.
     */
    GlutenFree: "gluten-free",
    /**
     * halal: Foods that conform to Islamic law.
     */
    Halal: "halal",
    /**
     * kosher: Foods that conform to Jewish dietary law.
     */
    Kosher: "kosher",
    /**
     * nut-free: Excludes ingredients containing nuts.
     */
    NutFree: "nut-free",
    /**
     * vegan: Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
     */
    Vegan: "vegan",
    /**
     * vegetarian: Food without meat, poultry or seafood.
     */
    Vegetarian: "vegetarian",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyRGlldENvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9FbmNvdW50ZXJEaWV0Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxTQUFTLEVBQUUsWUFBWTtJQUN2Qjs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0lBQ3pCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFVBQVU7SUFDbkI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7Q0FDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZW5jb3VudGVyLWRpZXR8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIGEgc2V0IG9mIGNvZGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5kaWNhdGUgZGlldGFyeSBwcmVmZXJlbmNlcyBvciByZXN0cmljdGlvbnMgYSBwYXRpZW50IG1heSBoYXZlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVuY291bnRlckRpZXRDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBkYWlyeS1mcmVlOiBFeGNsdWRlcyBkYWlyeSBwcm9kdWN0cy5cclxuICAgKi9cclxuICBEYWlyeUZyZWU6IFwiZGFpcnktZnJlZVwiLFxyXG4gIC8qKlxyXG4gICAqIGdsdXRlbi1mcmVlOiBFeGNsdWRlcyBpbmdyZWRpZW50cyBjb250YWluaW5nIGdsdXRlbi5cclxuICAgKi9cclxuICBHbHV0ZW5GcmVlOiBcImdsdXRlbi1mcmVlXCIsXHJcbiAgLyoqXHJcbiAgICogaGFsYWw6IEZvb2RzIHRoYXQgY29uZm9ybSB0byBJc2xhbWljIGxhdy5cclxuICAgKi9cclxuICBIYWxhbDogXCJoYWxhbFwiLFxyXG4gIC8qKlxyXG4gICAqIGtvc2hlcjogRm9vZHMgdGhhdCBjb25mb3JtIHRvIEpld2lzaCBkaWV0YXJ5IGxhdy5cclxuICAgKi9cclxuICBLb3NoZXI6IFwia29zaGVyXCIsXHJcbiAgLyoqXHJcbiAgICogbnV0LWZyZWU6IEV4Y2x1ZGVzIGluZ3JlZGllbnRzIGNvbnRhaW5pbmcgbnV0cy5cclxuICAgKi9cclxuICBOdXRGcmVlOiBcIm51dC1mcmVlXCIsXHJcbiAgLyoqXHJcbiAgICogdmVnYW46IEZvb2Qgd2l0aG91dCBtZWF0LCBwb3VsdHJ5LCBzZWFmb29kLCBlZ2dzLCBkYWlyeSBwcm9kdWN0cyBhbmQgb3RoZXIgYW5pbWFsLWRlcml2ZWQgc3Vic3RhbmNlcy5cclxuICAgKi9cclxuICBWZWdhbjogXCJ2ZWdhblwiLFxyXG4gIC8qKlxyXG4gICAqIHZlZ2V0YXJpYW46IEZvb2Qgd2l0aG91dCBtZWF0LCBwb3VsdHJ5IG9yIHNlYWZvb2QuXHJcbiAgICovXHJcbiAgVmVnZXRhcmlhbjogXCJ2ZWdldGFyaWFuXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgZGVmaW5lcyBhIHNldCBvZiBjb2RlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGluZGljYXRlIGRpZXRhcnkgcHJlZmVyZW5jZXMgb3IgcmVzdHJpY3Rpb25zIGEgcGF0aWVudCBtYXkgaGF2ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEVuY291bnRlckRpZXRDb2RlVHlwZSA9IHR5cGVvZiBFbmNvdW50ZXJEaWV0Q29kZXNba2V5b2YgdHlwZW9mIEVuY291bnRlckRpZXRDb2Rlc107XHJcbiJdfQ==