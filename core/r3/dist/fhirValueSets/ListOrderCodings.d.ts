import { CodingArgs } from '../fhir/Coding.js';
/**
 * Base values for the order of the items in a list resource.
 */
export declare type ListOrderCodingType = {
    /**
     * alphabetic: The list is sorted alphabetically by an unspecified property of the items in the list.
     */
    SortedAlphabetically: CodingArgs;
    /**
     * category: The list is sorted categorically by an unspecified property of the items in the list.
     */
    SortedByCategory: CodingArgs;
    /**
     * entry-date: The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
     */
    SortedByItemDate: CodingArgs;
    /**
     * event-date: The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
     */
    SortedByEventDate: CodingArgs;
    /**
     * patient: The list is sorted by patient, with items for each patient grouped together.
     */
    SortedByPatient: CodingArgs;
    /**
     * priority: The list is sorted by priority. The exact method in which priority has been determined is not specified.
     */
    SortedByPriority: CodingArgs;
    /**
     * system: The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
     */
    SortedBySystem: CodingArgs;
    /**
     * user: The list was sorted by a user. The criteria the user used are not specified.
     */
    SortedByUser: CodingArgs;
};
/**
 * Base values for the order of the items in a list resource.
 */
export declare const ListOrderCodings: ListOrderCodingType;
//# sourceMappingURL=ListOrderCodings.d.ts.map