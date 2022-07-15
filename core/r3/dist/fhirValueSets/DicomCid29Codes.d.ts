/**
 * This Value Set includes codes that may be used to identify an image or waveform acquisition modality, as used in the ImagingStudy resource, Dicom  Attribute Modality (0008,0060) or HL7 v2 Table 0259 (see HL7 v2.6 Chapter 8 Section 8.8.8.47). It generally corresponds to a class of diagnostic equipment, or to a specific acquisition function or technique in a device.
 */
export declare const DicomCid29Codes: {
    /**
     * AR: Autorefraction device
     */
    readonly Autorefraction: "AR";
    /**
     * BDUS: Ultrasound Bone Densitometry (modality)
     */
    readonly UltrasoundBoneDensitometry: "BDUS";
    /**
     * BMD: Bone Mineral Densitometry by X-Ray (modality), including dual-energy X-Ray absorptiometry (DXA) and morphometric X-Ray absorptiometry (MXA)
     */
    readonly BoneMineralDensitometry: "BMD";
    /**
     * CR: Computed Radiography device
     */
    readonly ComputedRadiography: "CR";
    /**
     * CT: Computed Tomography device
     */
    readonly ComputedTomography: "CT";
    /**
     * DX: Digital Radiography device
     */
    readonly DigitalRadiography: "DX";
    /**
     * ECG: Electrocardiography device
     */
    readonly Electrocardiography: "ECG";
    /**
     * EPS: Cardiac Electrophysiology device
     */
    readonly CardiacElectrophysiology: "EPS";
    /**
     * ES: Endoscopy device
     */
    readonly Endoscopy: "ES";
    /**
     * GM: General Microscopy device
     */
    readonly GeneralMicroscopy: "GM";
    /**
     * HD: Hemodynamic Waveform acquisition device
     */
    readonly HemodynamicWaveform: "HD";
    /**
     * IO: Intra-oral Radiography device
     */
    readonly IntraOralRadiography: "IO";
    /**
     * IVOCT: An acquisition device, process or method that performs intravascular optical coherence tomography
     */
    readonly IntravascularOpticalCoherenceTomography: "IVOCT";
    /**
     * IVUS: Intravascular Ultrasound device
     */
    readonly IntravascularUltrasound: "IVUS";
    /**
     * KER: Keratometry device
     */
    readonly Keratometry: "KER";
    /**
     * LEN: Lensometry device
     */
    readonly Lensometry: "LEN";
    /**
     * MG: Mammography device
     */
    readonly Mammography: "MG";
    /**
     * MR: Magnetic Resonance device
     */
    readonly MagneticResonance: "MR";
    /**
     * NM: Nuclear Medicine device
     */
    readonly NuclearMedicine: "NM";
    /**
     * OAM: Measurements of the axial length of the eye, which are done by various devices
     */
    readonly OphthalmicAxialMeasurements: "OAM";
    /**
     * OCT: Modality device that uses an interferometric, non-invasive optical tomographic technique to image 2D slices and 3D volumes of tissue using visible and near visible frequencies
     */
    readonly OpticalCoherenceTomography: "OCT";
    /**
     * OP: Ophthalmic photography modality
     */
    readonly OphthalmicPhotography: "OP";
    /**
     * OPM: Modality device that measures corneal topography, corneal or retinal thickness, and other similar parameters that are typically displayed as maps
     */
    readonly OphthalmicMapping: "OPM";
    /**
     * OPR: Modality device that measures the refractive characteristics of the eye
     */
    readonly OphthalmicRefraction: "OPR";
    /**
     * OPT: Tomography of the eye acquired by a modality that is based on light and optical principles. Tomography based on other principles, such as ultrasound, is excluded
     */
    readonly OphthalmicTomography: "OPT";
    /**
     * OPV: Modality device that measures visual fields and perform visual perimetry
     */
    readonly OphthalmicVisualField: "OPV";
    /**
     * OSS: An acquisition device, process or method that performs optical surface scanning
     */
    readonly OpticalSurvaceScanner: "OSS";
    /**
     * PT: Positron emission tomography (PET) device
     */
    readonly PositronEmissionTomography: "PT";
    /**
     * PX: Panoramic X-Ray device
     */
    readonly PanoramicXRay: "PX";
    /**
     * RF: Radiofluoroscopy device
     */
    readonly Radiofluoroscopy: "RF";
    /**
     * RG: Radiographic imaging (conventional film/screen)
     */
    readonly RadiographicImaging: "RG";
    /**
     * SM: Slide Microscopy
     */
    readonly SlideMicroscopy: "SM";
    /**
     * SRF: Subjective Refraction device
     */
    readonly SubjectiveRefraction: "SRF";
    /**
     * US: Ultrasound device
     */
    readonly Ultrasound: "US";
    /**
     * VA: Visual Acuity device
     */
    readonly VisualAcuity: "VA";
    /**
     * XA: X-Ray Angiography device
     */
    readonly XRayAngiography: "XA";
    /**
     * XC: External-camera Photography device
     */
    readonly ExternalCameraPhotography: "XC";
};
/**
 * This Value Set includes codes that may be used to identify an image or waveform acquisition modality, as used in the ImagingStudy resource, Dicom  Attribute Modality (0008,0060) or HL7 v2 Table 0259 (see HL7 v2.6 Chapter 8 Section 8.8.8.47). It generally corresponds to a class of diagnostic equipment, or to a specific acquisition function or technique in a device.
 */
export declare type DicomCid29CodeType = typeof DicomCid29Codes[keyof typeof DicomCid29Codes];
//# sourceMappingURL=DicomCid29Codes.d.ts.map