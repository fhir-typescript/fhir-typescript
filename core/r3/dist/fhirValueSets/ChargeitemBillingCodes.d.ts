/**
 * Example set of codes that can be used for billing purposes
 */
export declare const ChargeitemBillingCodes: {
    /**
     * 1100: From German EBM billing system:
     * Unvorhergesehene Inanspruchnahme des Vertragsarztes durch einen Patienten;zwischen 19:00 und 22:00 Uhr;an Samstagen, Sonntagen und gesetzlichen Feiertagen, am 24.12. und 31.12. zwischen 07:00 und 19:00 Uhr
     */
    readonly UnvorhergeseheneInanspruchnahme: "1100";
    /**
     * 1210: From German EBM billing system:
     * Notfallpauschale im organisierten Not(-fall)dienst und für nicht an der vertragsärztlichen Versorgung teilnehmende Ärzte, Institute und Krankenhäuser bei Inanspruchnahme;zwischen 07:00 und 19:00 Uhr
     */
    readonly Notfallpauschale: "1210";
    /**
     * 1320: From German EBM billing system:
     * Grundpauschale für Ärzte, Institute und Krankenhäuser, die zur Erbringung von Leistungen innerhalb mindestens eines der Fachgebiete Anästhesiologie, Frauenheilkunde und Geburtshilfe, Haut- und Geschlechtskrankheiten, Mund-, Kiefer- und Gesichtschirurgie und Humangenetik ermächtigt sind
     */
    readonly Grundpauschale: "1320";
};
/**
 * Example set of codes that can be used for billing purposes
 */
export declare type ChargeitemBillingCodeType = typeof ChargeitemBillingCodes[keyof typeof ChargeitemBillingCodes];
//# sourceMappingURL=ChargeitemBillingCodes.d.ts.map