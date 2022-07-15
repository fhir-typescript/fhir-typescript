/**
 * Detailed information about the type of the image - its kind, purpose, or the kind of equipment used to generate it.
 */
export declare const MediaModalityCodes: {
    /**
     * AR: Autorefraction device
     */
    readonly Autorefraction: "AR";
    /**
     * BDUS: Ultrasound Bone Densitometry (modality)
     */
    readonly UltrasoundBoneDensitometry: "BDUS";
    /**
     * BI: Biomagnetic imaging device
     */
    readonly BiomagneticImaging: "BI";
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
     * DG: Diaphanography device
     */
    readonly Diaphanography: "DG";
    /**
     * diagram: A diagram. Often used in diagnostic reports
     */
    readonly Diagram: "diagram";
    /**
     * Code: DMS
     */
    readonly Dermoscopy: "DMS";
    /**
     * DX: Digital Radiography device
     */
    readonly DigitalRadiography: "DX";
    /**
     * ECG: Electrocardiography device
     */
    readonly Electrocardiography: "ECG";
    /**
     * Code: EEG
     */
    readonly Electroencephalography: "EEG";
    /**
     * Code: EMG
     */
    readonly Electromyography: "EMG";
    /**
     * Code: EOG
     */
    readonly Electrooculography: "EOG";
    /**
     * EPS: Cardiac Electrophysiology device
     */
    readonly CardiacElectrophysiology: "EPS";
    /**
     * ES: Endoscopy device
     */
    readonly Endoscopy: "ES";
    /**
     * face: A face scan used for identification purposes
     */
    readonly FaceScan: "face";
    /**
     * fax: A digital record of a fax document
     */
    readonly Fax: "fax";
    /**
     * fingerprint: A finger print scan used for identification purposes
     */
    readonly Fingerprint: "fingerprint";
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
     * iris: An iris scan used for identification purposes
     */
    readonly IrisScan: "iris";
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
     * LS: Laser surface scan device
     */
    readonly LaserSurfaceScan: "LS";
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
     * OPT: Tomography of the eye acquired by a modality that is based on light and optical principles. Tomography based on other principles, such as ultrasound, is excluded
     */
    readonly OphthalmicTomography: "OPT";
    /**
     * Code: OPTBSV
     */
    readonly OphthalmicTomographyBScanVolumeAnalysis: "OPTBSV";
    /**
     * Code: OPTENF
     */
    readonly OphthalmicTomographyEnFace: "OPTENF";
    /**
     * OPV: Modality device that measures visual fields and perform visual perimetry
     */
    readonly OphthalmicVisualField: "OPV";
    /**
     * OSS: An acquisition device, process or method that performs optical surface scanning
     */
    readonly OpticalSurvaceScanner: "OSS";
    /**
     * palm: A palm scan used for identification purposes
     */
    readonly PalmScan: "palm";
    /**
     * Code: POS
     */
    readonly PositionSensor: "POS";
    /**
     * PT: Positron emission tomography (PET) device
     */
    readonly PositronEmissionTomography: "PT";
    /**
     * PX: Panoramic X-Ray device
     */
    readonly PanoramicXRay: "PX";
    /**
     * Code: RESP
     */
    readonly RespiratoryWaveform: "RESP";
    /**
     * retina: A retinal image used for identification purposes
     */
    readonly RetinaScan: "retina";
    /**
     * RF: Radiofluoroscopy device
     */
    readonly Radiofluoroscopy: "RF";
    /**
     * RG: Radiographic imaging (conventional film/screen)
     */
    readonly RadiographicImaging: "RG";
    /**
     * RTIMAGE: Radiotherapy Imaging device; includes portal imaging
     */
    readonly RadiotherapyImage: "RTIMAGE";
    /**
     * scan: A digital scan of a document. This is reserved for when there is not enough metadata to create a document reference
     */
    readonly ScannedDocument: "scan";
    /**
     * SM: Slide Microscopy
     */
    readonly SlideMicroscopy: "SM";
    /**
     * SRF: Subjective Refraction device
     */
    readonly SubjectiveRefraction: "SRF";
    /**
     * TG: Thermography device
     */
    readonly Thermography: "TG";
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
 * Detailed information about the type of the image - its kind, purpose, or the kind of equipment used to generate it.
 */
export declare type MediaModalityCodeType = typeof MediaModalityCodes[keyof typeof MediaModalityCodes];
//# sourceMappingURL=MediaModalityCodes.d.ts.map