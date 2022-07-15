/**
 * Whether the media is a photo, video, or audio
 */
export declare const DigitalMediaTypeCodes: {
    /**
     * audio: The media consists of a sound recording
     */
    readonly Audio: "audio";
    /**
     * photo: The media consists of one or more unmoving images, including photographs, computer-generated graphs and charts, and scanned documents
     */
    readonly Photo: "photo";
    /**
     * video: The media consists of a series of frames that capture a moving image
     */
    readonly Video: "video";
};
/**
 * Whether the media is a photo, video, or audio
 */
export declare type DigitalMediaTypeCodeType = typeof DigitalMediaTypeCodes[keyof typeof DigitalMediaTypeCodes];
//# sourceMappingURL=DigitalMediaTypeCodes.d.ts.map