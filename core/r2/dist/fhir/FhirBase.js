// Minimum TypeScript Version: 3.7
export class FhirBase {
    /** Default constructor */
    constructor(source = {}, options = {}) {
        if (options.allowUnknownElements === true) {
            Object.assign(this, source);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(_exp = '') {
        let issues = [];
        return issues;
    }
    /**
     * FNV-1a implementation from https://github.com/tjwebb/fnv-plus
     * @param str
     * @returns
     */
    static _hash52_1a_fast(str) {
        var i, l = str.length - 3, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
        for (i = 0; i < l;) {
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
        }
        while (i < l + 3) {
            v0 ^= str.charCodeAt(i++);
            t0 = v0 * 435;
            t1 = v1 * 435;
            t2 = v2 * 435;
            t3 = v3 * 435;
            t2 += v0 << 8;
            t3 += v1 << 8;
            t1 += t0 >>> 16;
            v0 = t0 & 65535;
            t2 += t1 >>> 16;
            v1 = t1 & 65535;
            v3 = (t3 + (t2 >>> 16)) & 65535;
            v2 = t2 & 65535;
        }
        return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ (v3 >> 4));
    }
    /**
     * Validate an Optional Scalar element
     * @param p
     * @param exp
     * @returns
     */
    vOS(p, exp) {
        if (this[p]) {
            if (Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found array in scalar property ${p} (${exp})` }
                    }];
            }
            return this[p].doModelValidation(exp + '.' + p);
        }
        ;
        return [];
    }
    /**
     * Validate an Optional Scalar element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vOSV(p, exp, vsN, vsV, vsS) {
        let iss = [];
        if (this[p]) {
            if (Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found array in scalar property ${p} (${exp})` }
                    }];
            }
            iss.push(...this[p].doModelValidation(exp + '.' + p));
            if (!this[p].hasCodingFromValidationObj(vsV)) {
                iss.push({
                    severity: (vsS === 'r') ? 'error' : 'information',
                    code: 'code-invalid',
                    details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` }
                });
            }
        }
        ;
        return iss;
    }
    /**
     * Validate an Optional Array element
     * @param p
     * @param exp
     * @returns
     */
    vOA(p, exp) {
        let iss = [];
        if (this[p]) {
            if (!Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found scalar in array property ${p} (${exp})` }
                    }];
            }
            this[p].forEach((x, i) => { iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`)); });
        }
        ;
        return iss;
    }
    /**
     * Validate an Optional Array element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vOAV(p, exp, vsN, vsV, vsS) {
        let iss = [];
        if (this[p]) {
            if (!Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found scalar in array property ${p} (${exp})` }
                    }];
            }
            this[p].forEach((x, i) => {
                iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`));
                if (!this[p].hasCodingFromValidationObj(vsV)) {
                    iss.push({
                        severity: (vsS === 'r') ? 'error' : 'information',
                        code: 'code-invalid',
                        details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` }
                    });
                }
            });
        }
        ;
        return iss;
    }
    /**
     * Validate a Required Scalar element
     * @param p
     * @param exp
     * @returns
     */
    vRS(p, exp) {
        if (this[p]) {
            if (Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found array in scalar property ${p} (${exp})` }
                    }];
            }
            return this[p].doModelValidation(exp + '.' + p);
        }
        ;
        return [{
                severity: 'error',
                code: 'required',
                details: { text: `Missing required property '${p}', ${exp}` }
            }];
    }
    /**
     * Validate a Required Scalar element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vRSV(p, exp, vsN, vsV, vsS) {
        if (this[p]) {
            if (Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found array in scalar property ${p} (${exp})` }
                    }];
            }
            let iss = [];
            iss.push(...this[p].doModelValidation(exp + '.' + p));
            if (!this[p].hasCodingFromValidationObj(vsV)) {
                iss.push({
                    severity: (vsS === 'r') ? 'error' : 'information',
                    code: 'code-invalid',
                    details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` }
                });
            }
            return iss;
        }
        ;
        return [{
                severity: 'error',
                code: 'required',
                details: { text: `Missing required property '${p}', ${exp}` }
            }];
    }
    /**
     * Validate a Required Array element
     * @param p
     * @param exp
     * @returns
     */
    vRA(p, exp) {
        if (this[p]) {
            let iss = [];
            if (!Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found scalar in array property ${p} (${exp})` }
                    }];
            }
            if (this[p].length === 0) {
                return [{
                        severity: 'error',
                        code: 'required',
                        details: { text: `Missing required property '${p}', ${exp}` }
                    }];
            }
            this[p].forEach((x, i) => { iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`)); });
            return iss;
        }
        return [{
                severity: 'error',
                code: 'required',
                details: { text: `Missing required property '${p}', ${exp}` }
            }];
    }
    /**
     * Validate a Required Array element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vRAV(p, exp, vsN, vsV, vsS) {
        if (this[p]) {
            let iss = [];
            if (!Array.isArray(this[p])) {
                return [{
                        severity: 'error',
                        code: 'structure',
                        details: { text: `Found scalar in array property ${p} (${exp})` }
                    }];
            }
            this[p].forEach((x, i) => {
                iss.push(...x.doModelValidation(`${exp}.${p}[${i}]`));
                if (!this[p].hasCodingFromValidationObj(vsV)) {
                    iss.push({
                        severity: (vsS === 'r') ? 'error' : 'information',
                        code: 'code-invalid',
                        details: { text: `${p} (${exp}) does not contain code from bound value set ${vsN}` }
                    });
                }
            });
            return iss;
        }
        return [{
                severity: 'error',
                code: 'required',
                details: { text: `Missing required property '${p}', ${exp}` }
            }];
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        let c = {};
        for (const key in this) {
            if ((this[key] === undefined) ||
                (this[key] === null) ||
                (this[key] === '') ||
                (Number.isNaN(this[key]))) {
                continue;
            }
            let isArray = Array.isArray(this[key]);
            if (isArray && this[key].length === 0) {
                continue;
            }
            let ftsDt = (isArray ? this[key][0].constructor._fts_dataType : this[key].constructor._fts_dataType) ?? '';
            let isChoice = this.constructor['_fts_' + key + 'IsChoice'] ?? false;
            let isPrimitive = (isArray ? this[key][0].constructor['_fts_isPrimitive'] : this[key].constructor['_fts_isPrimitive']) ?? false;
            let dKey = key + (isChoice ? ftsDt : '');
            if (isArray) {
                if (isPrimitive) {
                    const eName = '_' + dKey;
                    let foundAnyVal = false;
                    let foundAnyExt = false;
                    c[dKey] = [];
                    c[eName] = [];
                    this[key].forEach((av) => {
                        let addElement = false;
                        if (av.value) {
                            c[dKey].push(av.value);
                            foundAnyVal = true;
                            addElement = true;
                        }
                        else {
                            c[dKey].push(null);
                        }
                        let ao = {};
                        if (av.id) {
                            ao['id'] = av.id;
                            foundAnyExt = true;
                        }
                        if ((av.extension) && (av.extension.length !== 0)) {
                            ao['extension'] = [];
                            av.extension.forEach((e) => {
                                ao['extension'].push(e);
                            });
                            foundAnyExt = true;
                        }
                        if (foundAnyExt) {
                            c[eName].push(ao);
                            addElement = true;
                        }
                        else {
                            c[eName].push(null);
                        }
                        if (!addElement) {
                            c[dKey].pop();
                            c[eName].pop();
                        }
                    });
                    if (!foundAnyVal) {
                        delete c[dKey];
                    }
                    if (!foundAnyExt) {
                        delete c[eName];
                    }
                }
                else if (ftsDt) {
                    c[dKey] = [];
                    this[key].forEach((v) => {
                        // c[dKey].push(v.toJSON());
                        c[dKey].push(v);
                    });
                }
                else {
                    c[dKey] = this[key];
                }
            }
            else if (isPrimitive) {
                if (this[key].value) {
                    c[dKey] = this[key].value;
                }
                const eName = '_' + dKey;
                c[eName] = {};
                if (this[key]['id']) {
                    c[eName]['id'] = this[key]['id'];
                }
                if ((this[key]['extension']) && (this[key]['extension'].length !== 0)) {
                    c[eName]['extension'] = [];
                    this[key]['extension'].forEach((e) => {
                        c[eName]['extension'].push(e);
                    });
                }
                if (Object.keys(c[eName]).length === 0) {
                    delete c[eName];
                }
            }
            else if (ftsDt) {
                c[dKey] = this[key];
            }
            else {
                c[dKey] = this[key];
            }
        }
        return c;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirBase._fts_dataType = 'Base';
FhirBase._fts_regex = /.?/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpckJhc2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyL0ZoaXJCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQXFGbEMsTUFBTSxPQUFPLFFBQVE7SUFPbkIsMEJBQTBCO0lBQzFCLFlBQVksU0FBK0IsRUFBRSxFQUFFLFVBQWlDLEVBQUU7UUFDaEYsSUFBSSxPQUFPLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FBRTtJQUM3RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxpQkFBaUIsQ0FBQyxPQUFjLEVBQUU7UUFDeEMsSUFBSSxNQUFNLEdBQWMsRUFBRSxDQUFDO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFVO1FBQ3hDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxNQUFNLEVBQUMsRUFBRSxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUMsTUFBTSxFQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsRUFBRSxHQUFDLE1BQU0sRUFBQyxFQUFFLEdBQUMsQ0FBQyxFQUFDLEVBQUUsR0FBQyxNQUFNLENBQUM7UUFFakYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDbkIsRUFBRSxJQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUN4QyxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUFBLEVBQUUsSUFBRSxFQUFFLElBQUUsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsSUFBRSxFQUFFLEtBQUcsRUFBRSxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxLQUFLLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxHQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsRUFBRSxLQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxLQUFLLENBQUM7WUFDcEYsRUFBRSxJQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUN4QyxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUFBLEVBQUUsSUFBRSxFQUFFLElBQUUsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsSUFBRSxFQUFFLEtBQUcsRUFBRSxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxLQUFLLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxHQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsRUFBRSxLQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxLQUFLLENBQUM7WUFDcEYsRUFBRSxJQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUN4QyxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUFBLEVBQUUsSUFBRSxFQUFFLElBQUUsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsSUFBRSxFQUFFLEtBQUcsRUFBRSxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxLQUFLLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxHQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsRUFBRSxLQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxLQUFLLENBQUM7WUFDcEYsRUFBRSxJQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFBQSxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQztZQUN4QyxFQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsQ0FBQztZQUFBLEVBQUUsSUFBRSxFQUFFLElBQUUsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsSUFBRSxFQUFFLEtBQUcsRUFBRSxDQUFDO1lBQUEsRUFBRSxHQUFDLEVBQUUsR0FBQyxLQUFLLENBQUM7WUFBQSxFQUFFLElBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQztZQUFBLEVBQUUsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDO1lBQUEsRUFBRSxHQUFD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dGVudCI6WyIvLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMge1xyXG4gIC8qKiBJZiBpbnN0YW50aWF0ZWQgb2JqZWN0cyBzaG91bGQgYWxsb3cgbm9uLUZISVIgZGVmaW5lZCBwcm9wZXJ0aWVzICovXHJcbiAgYWxsb3dVbmtub3duRWxlbWVudHM/OiBib29sZWFufHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIEVsZW1lbnQgLSBlcXVpdmFsZW50IHRvIGEgRkhJUiBKU09OIEVsZW1lbnQgKENvbXBsZXggRGF0YVR5cGUpLCB3aXRob3V0IGV4dGVuc2lvbnNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnRzRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogVW5pcXVlIGlkIGZvciB0aGUgZWxlbWVudCB3aXRoaW4gYSByZXNvdXJjZSAoZm9yIGludGVybmFsIHJlZmVyZW5jZXMpLiBUaGlzIG1heSBiZSBhbnkgc3RyaW5nIHZhbHVlIHRoYXQgZG9lcyBub3QgY29udGFpbiBzcGFjZXMuXHJcbiAgICovXHJcbiAgIGlkPzogc3RyaW5nfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNvZGluZyAtIGVxdWl2YWxlbnQgdG8gYSBGSElSIEpTT04gQ29kaW5nIChDb21wbGV4IERhdGFUeXBlKSwgd2l0aG91dCBleHRlbnNpb25zXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ0c0NvZGluZyBleHRlbmRzIEZ0c0VsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkkgbWF5IGJlIGFuIE9JRCAodXJuOm9pZDouLi4pIG9yIGEgVVVJRCAodXJuOnV1aWQ6Li4uKS4gIE9JRHMgYW5kIFVVSURzIFNIQUxMIGJlIHJlZmVyZW5jZXMgdG8gdGhlIEhMNyBPSUQgcmVnaXN0cnkuIE90aGVyd2lzZSwgdGhlIFVSSSBzaG91bGQgY29tZSBmcm9tIEhMNydzIGxpc3Qgb2YgRkhJUiBkZWZpbmVkIHNwZWNpYWwgVVJJcyBvciBpdCBzaG91bGQgcmVmZXJlbmNlIHRvIHNvbWUgZGVmaW5pdGlvbiB0aGF0IGVzdGFibGlzaGVzIHRoZSBzeXN0ZW0gY2xlYXJseSBhbmQgdW5hbWJpZ3VvdXNseS5cclxuICAgKi9cclxuICAgc3lzdGVtPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgLyoqXHJcbiAgICAqIFdoZXJlIHRoZSB0ZXJtaW5vbG9neSBkb2VzIG5vdCBjbGVhcmx5IGRlZmluZSB3aGF0IHN0cmluZyBzaG91bGQgYmUgdXNlZCB0byBpZGVudGlmeSBjb2RlIHN5c3RlbSB2ZXJzaW9ucywgdGhlIHJlY29tbWVuZGF0aW9uIGlzIHRvIHVzZSB0aGUgZGF0ZSAoZXhwcmVzc2VkIGluIEZISVIgZGF0ZSBmb3JtYXQpIG9uIHdoaWNoIHRoYXQgdmVyc2lvbiB3YXMgb2ZmaWNpYWxseSBwdWJsaXNoZWQgYXMgdGhlIHZlcnNpb24gZGF0ZS5cclxuICAgICovXHJcbiAgIHZlcnNpb24/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAvKipcclxuICAgICogQSBzeW1ib2wgaW4gc3ludGF4IGRlZmluZWQgYnkgdGhlIHN5c3RlbS4gVGhlIHN5bWJvbCBtYXkgYmUgYSBwcmVkZWZpbmVkIGNvZGUgb3IgYW4gZXhwcmVzc2lvbiBpbiBhIHN5bnRheCBkZWZpbmVkIGJ5IHRoZSBjb2Rpbmcgc3lzdGVtIChlLmcuIHBvc3QtY29vcmRpbmF0aW9uKS5cclxuICAgICovXHJcbiAgIGNvZGU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAvKipcclxuICAgICogQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWVhbmluZyBvZiB0aGUgY29kZSBpbiB0aGUgc3lzdGVtLCBmb2xsb3dpbmcgdGhlIHJ1bGVzIG9mIHRoZSBzeXN0ZW0uXHJcbiAgICAqL1xyXG4gICBkaXNwbGF5Pzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgLyoqXHJcbiAgICAqIEFtb25nc3QgYSBzZXQgb2YgYWx0ZXJuYXRpdmVzLCBhIGRpcmVjdGx5IGNob3NlbiBjb2RlIGlzIHRoZSBtb3N0IGFwcHJvcHJpYXRlIHN0YXJ0aW5nIHBvaW50IGZvciBuZXcgdHJhbnNsYXRpb25zLiBUaGVyZSBpcyBzb21lIGFtYmlndWl0eSBhYm91dCB3aGF0IGV4YWN0bHkgJ2RpcmVjdGx5IGNob3NlbicgaW1wbGllcywgYW5kIHRyYWRpbmcgcGFydG5lciBhZ3JlZW1lbnQgbWF5IGJlIG5lZWRlZCB0byBjbGFyaWZ5IHRoZSB1c2Ugb2YgdGhpcyBlbGVtZW50IGFuZCBpdHMgY29uc2VxdWVuY2VzIG1vcmUgY29tcGxldGVseS5cclxuICAgICovXHJcbiAgIHVzZXJTZWxlY3RlZD86IGJvb2xlYW58dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgQ29kZWFibGVDb25jZXB0IC0gZXF1aXZhbGVudCB0byBhIEZISVIgSlNPTiBDb2RlYWJsZUNvbmNlcHQgKENvbXBsZXggRGF0YVR5cGUpLCB3aXRob3V0IGV4dGVuc2lvbnNcclxuICovXHJcbiBleHBvcnQgaW50ZXJmYWNlIEZ0c0NvZGVhYmxlQ29uY2VwdCBleHRlbmRzIEZ0c0VsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBDb2RlcyBtYXkgYmUgZGVmaW5lZCB2ZXJ5IGNhc3VhbGx5IGluIGVudW1lcmF0aW9ucywgb3IgY29kZSBsaXN0cywgdXAgdG8gdmVyeSBmb3JtYWwgZGVmaW5pdGlvbnMgc3VjaCBhcyBTTk9NRUQgQ1QgLSBzZWUgdGhlIEhMNyB2MyBDb3JlIFByaW5jaXBsZXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uICBPcmRlcmluZyBvZiBjb2RpbmdzIGlzIHVuZGVmaW5lZCBhbmQgU0hBTEwgTk9UIGJlIHVzZWQgdG8gaW5mZXIgbWVhbmluZy4gR2VuZXJhbGx5LCBhdCBtb3N0IG9ubHkgb25lIG9mIHRoZSBjb2RpbmcgdmFsdWVzIHdpbGwgYmUgbGFiZWxlZCBhcyBVc2VyU2VsZWN0ZWQgPSB0cnVlLlxyXG4gICAqL1xyXG4gIGNvZGluZz86IEZ0c0NvZGluZ1tdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBWZXJ5IG9mdGVuIHRoZSB0ZXh0IGlzIHRoZSBzYW1lIGFzIGEgZGlzcGxheU5hbWUgb2Ygb25lIG9mIHRoZSBjb2RpbmdzLlxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgT3BlcmF0aW9uT3V0Y29tZUlzc3VlIC0gZXF1aXZhbGVudCB0byBPcGVyYXRpb25PdXRjb21lLmlzc3VlIChCYWNrYm9uZSBFbGVtZW50KSwgd2l0aG91dCBleHRlbnNpb25zXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZ0c0lzc3VlIGV4dGVuZHMgRnRzRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBsYWJlbGVkIGFzIFwiSXMgTW9kaWZpZXJcIiBiZWNhdXNlIGFwcGxpY2F0aW9ucyBzaG91bGQgbm90IGNvbmZ1c2UgaGludHMgYW5kIHdhcm5pbmdzIHdpdGggZXJyb3JzLlxyXG4gICAqL1xyXG4gICBzZXZlcml0eTogJ2Vycm9yJ3wnZmF0YWwnfCdpbmZvcm1hdGlvbid8J3dhcm5pbmcnfG51bGw7XHJcbiAgIC8qKlxyXG4gICAgKiBEZXNjcmliZXMgdGhlIHR5cGUgb2YgdGhlIGlzc3VlLiBUaGUgc3lzdGVtIHRoYXQgY3JlYXRlcyBhbiBPcGVyYXRpb25PdXRjb21lIFNIQUxMIGNob29zZSB0aGUgbW9zdCBhcHBsaWNhYmxlIGNvZGUgZnJvbSB0aGUgSXNzdWVUeXBlIHZhbHVlIHNldCwgYW5kIG1heSBhZGRpdGlvbmFsIHByb3ZpZGUgaXRzIG93biBjb2RlIGZvciB0aGUgZXJyb3IgaW4gdGhlIGRldGFpbHMgZWxlbWVudC5cclxuICAgICovXHJcbiAgIGNvZGU6ICdidXNpbmVzcy1ydWxlJ3wnY29kZS1pbnZhbGlkJ3wnY29uZmxpY3QnfCdkZWxldGVkJ3wnZHVwbGljYXRlJ3wnZXhjZXB0aW9uJ3wnZXhwaXJlZCd8J2V4dGVuc2lvbid8J2ZvcmJpZGRlbid8J2luY29tcGxldGUnfCdpbmZvcm1hdGlvbmFsJ3wnaW52YWxpZCd8J2ludmFyaWFudCd8J2xvY2stZXJyb3InfCdsb2dpbid8J211bHRpcGxlLW1hdGNoZXMnfCduby1zdG9yZSd8J25vdC1mb3VuZCd8J25vdC1zdXBwb3J0ZWQnfCdwcm9jZXNzaW5nJ3wncmVxdWlyZWQnfCdzZWN1cml0eSd8J3N0cnVjdHVyZSd8J3N1cHByZXNzZWQnfCd0aHJvdHRsZWQnfCd0aW1lb3V0J3wndG9vLWNvc3RseSd8J3Rvby1sb25nJ3wndHJhbnNpZW50J3wndW5rbm93bid8J3ZhbHVlJ3xudWxsO1xyXG4gICAvKipcclxuICAgICogQSBodW1hbiByZWFkYWJsZSBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3IgaXNzdWUgU0hPVUxEIGJlIHBsYWNlZCBpbiBkZXRhaWxzLnRleHQuXHJcbiAgICAqL1xyXG4gICBkZXRhaWxzPzogRnRzQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAgLyoqXHJcbiAgICAqIFRoaXMgbWF5IGJlIGEgZGVzY3JpcHRpb24gb2YgaG93IGEgdmFsdWUgaXMgZXJyb25lb3VzLCBhIHN0YWNrIGR1bXAgdG8gaGVscCB0cmFjZSB0aGUgaXNzdWUgb3Igb3RoZXIgdHJvdWJsZXNob290aW5nIGluZm9ybWF0aW9uLlxyXG4gICAgKi9cclxuICAgZGlhZ25vc3RpY3M/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAvKipcclxuICAgICogVGhlIHJvb3Qgb2YgdGhlIEZISVJQYXRoIGlzIHRoZSByZXNvdXJjZSBvciBidW5kbGUgdGhhdCBnZW5lcmF0ZWQgT3BlcmF0aW9uT3V0Y29tZS4gIEVhY2ggRkhJUlBhdGggU0hBTEwgcmVzb2x2ZSB0byBhIHNpbmdsZSBub2RlLlxyXG4gICAgKi9cclxuICAgZXhwcmVzc2lvbj86IHN0cmluZ1tdfHVuZGVmaW5lZDtcclxuIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmhpckJhc2VBcmdzIHsgfVxyXG5cclxuZXhwb3J0IGNsYXNzIEZoaXJCYXNlIHtcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfZGF0YVR5cGU6c3RyaW5nPSdCYXNlJztcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IF9mdHNfcmVnZXg6UmVnRXhwID0gLy4/LztcclxuXHJcbiAgLyoqIERlZmF1bHQgY29uc3RydWN0b3IgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxGaGlyQmFzZUFyZ3M+ID0ge30sIG9wdGlvbnM6RmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpZiAob3B0aW9ucy5hbGxvd1Vua25vd25FbGVtZW50cyA9PT0gdHJ1ZSkgeyBPYmplY3QuYXNzaWduKHRoaXMsIHNvdXJjZSk7IH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gICBwdWJsaWMgZG9Nb2RlbFZhbGlkYXRpb24oX2V4cDpzdHJpbmcgPSAnJyk6RnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOkZ0c0lzc3VlW10gPSBbXTtcclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGTlYtMWEgaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdGp3ZWJiL2Zudi1wbHVzXHJcbiAgICogQHBhcmFtIHN0ciBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIF9oYXNoNTJfMWFfZmFzdChzdHI6c3RyaW5nKTpudW1iZXJ7XHJcblx0XHR2YXIgaSxsPXN0ci5sZW5ndGgtMyx0MD0wLHYwPTB4MjMyNSx0MT0wLHYxPTB4ODQyMix0Mj0wLHYyPTB4OWNlNCx0Mz0wLHYzPTB4Y2JmMjtcclxuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbDspIHtcclxuXHRcdFx0djBePXN0ci5jaGFyQ29kZUF0KGkrKyk7XHJcblx0XHRcdHQwPXYwKjQzNTt0MT12MSo0MzU7dDI9djIqNDM1O3QzPXYzKjQzNTtcclxuXHRcdFx0dDIrPXYwPDw4O3QzKz12MTw8ODtcclxuXHRcdFx0dDErPXQwPj4+MTY7djA9dDAmNjU1MzU7dDIrPXQxPj4+MTY7djE9dDEmNjU1MzU7djM9KHQzKyh0Mj4+PjE2KSkmNjU1MzU7djI9dDImNjU1MzU7XHJcblx0XHRcdHYwXj1zdHIuY2hhckNvZGVBdChpKyspO1xyXG5cdFx0XHR0MD12MCo0MzU7dDE9djEqNDM1O3QyPXYyKjQzNTt0Mz12Myo0MzU7XHJcblx0XHRcdHQyKz12MDw8ODt0Mys9djE8PDg7XHJcblx0XHRcdHQxKz10MD4+PjE2O3YwPXQwJjY1NTM1O3QyKz10MT4+PjE2O3YxPXQxJjY1NTM1O3YzPSh0MysodDI+Pj4xNikpJjY1NTM1O3YyPXQyJjY1NTM1O1xyXG5cdFx0XHR2MF49c3RyLmNoYXJDb2RlQXQoaSsrKTtcclxuXHRcdFx0dDA9djAqNDM1O3QxPXYxKjQzNTt0Mj12Mio0MzU7dDM9djMqNDM1O1xyXG5cdFx0XHR0Mis9djA8PDg7dDMrPXYxPDw4O1xyXG5cdFx0XHR0MSs9dDA+Pj4xNjt2MD10MCY2NTUzNTt0Mis9dDE+Pj4xNjt2MT10MSY2NTUzNTt2Mz0odDMrKHQyPj4+MTYpKSY2NTUzNTt2Mj10MiY2NTUzNTtcclxuXHRcdFx0djBePXN0ci5jaGFyQ29kZUF0KGkrKyk7XHJcblx0XHRcdHQwPXYwKjQzNTt0MT12MSo0MzU7dDI9djIqNDM1O3QzPXYzKjQzNTtcclxuXHRcdFx0dDIrPXYwPDw4O3QzKz12MTw8ODtcclxuXHRcdFx0dDErPXQwPj4+MTY7djA9dDAmNjU1MzU7dDIrPXQxPj4+MTY7djE9dDEmNjU1MzU7djM9KHQzKyh0Mj4+PjE2KSkmNjU1MzU7djI9dDImNjU1MzU7XHJcblx0XHR9XHJcblxyXG5cdFx0d2hpbGUoaTxsKzMpe1xyXG5cdFx0XHR2MF49c3RyLmNoYXJDb2RlQXQoaSsrKTtcclxuXHRcdFx0dDA9djAqNDM1O3QxPXYxKjQzNTt0Mj12Mio0MzU7dDM9djMqNDM1O1xyXG5cdFx0XHR0Mis9djA8PDg7dDMrPXYxPDw4O1xyXG5cdFx0XHR0MSs9dDA+Pj4xNjt2MD10MCY2NTUzNTt0Mis9dDE+Pj4xNjt2MT10MSY2NTUzNTt2Mz0odDMrKHQyPj4+MTYpKSY2NTUzNTt2Mj10MiY2NTUzNTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKHYzJjE1KSAqIDI4MTQ3NDk3NjcxMDY1NiArIHYyICogNDI5NDk2NzI5NiArIHYxICogNjU1MzYgKyAodjBeKHYzPj40KSk7XHJcblx0fVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhbiBPcHRpb25hbCBTY2FsYXIgZWxlbWVudCBcclxuICAgKiBAcGFyYW0gcCBcclxuICAgKiBAcGFyYW0gZXhwIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gICBwdWJsaWMgdk9TKHA6UmVhZG9ubHk8c3RyaW5nPiwgZXhwOlJlYWRvbmx5PHN0cmluZz4pOkZ0c0lzc3VlW10ge1xyXG4gICAgaWYgKCh0aGlzIGFzIGFueSlbcF0pIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoKHRoaXMgYXMgYW55KVtwXSkpIHtcclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgICAgY29kZTogJ3N0cnVjdHVyZScsXHJcbiAgICAgICAgICBkZXRhaWxzOiB7dGV4dDogYEZvdW5kIGFycmF5IGluIHNjYWxhciBwcm9wZXJ0eSAke3B9ICgke2V4cH0pYH1cclxuICAgICAgICB9XTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtwXS5kb01vZGVsVmFsaWRhdGlvbihleHArJy4nK3ApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIGFuIE9wdGlvbmFsIFNjYWxhciBlbGVtZW50IGJvdW5kIHRvIGEgVmFsdWUgc2V0XHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcGFyYW0gdnNOIFxyXG4gICAqIEBwYXJhbSB2c1YgXHJcbiAgICogQHBhcmFtIHZzUyBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgdk9TVihcclxuICAgIHA6UmVhZG9ubHk8c3RyaW5nPixcclxuICAgIGV4cDpSZWFkb25seTxzdHJpbmc+LFxyXG4gICAgdnNOOnN0cmluZyxcclxuICAgIHZzVjpSZWFkb25seTxzdHJpbmdbXT4sXHJcbiAgICB2c1M6UmVhZG9ubHk8c3RyaW5nPik6RnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzOkZ0c0lzc3VlW10gPSBbXTtcclxuICAgIGlmICgodGhpcyBhcyBhbnkpW3BdKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgICAgZGV0YWlsczoge3RleHQ6IGBGb3VuZCBhcnJheSBpbiBzY2FsYXIgcHJvcGVydHkgJHtwfSAoJHtleHB9KWB9XHJcbiAgICAgICAgfV07XHJcbiAgICAgIH1cclxuICAgICAgaXNzLnB1c2goLi4uKHRoaXMgYXMgYW55KVtwXS5kb01vZGVsVmFsaWRhdGlvbihleHArJy4nK3ApKTtcclxuICAgICAgaWYgKCEodGhpcyBhcyBhbnkpW3BdLmhhc0NvZGluZ0Zyb21WYWxpZGF0aW9uT2JqKHZzVikpIHtcclxuICAgICAgICBpc3MucHVzaCh7XHJcbiAgICAgICAgICBzZXZlcml0eTogKHZzUyA9PT0gJ3InKSA/ICdlcnJvcicgOiAnaW5mb3JtYXRpb24nLCBcclxuICAgICAgICAgIGNvZGU6J2NvZGUtaW52YWxpZCcsIFxyXG4gICAgICAgICAgZGV0YWlsczp7dGV4dDpgJHtwfSAoJHtleHB9KSBkb2VzIG5vdCBjb250YWluIGNvZGUgZnJvbSBib3VuZCB2YWx1ZSBzZXQgJHt2c059YH19KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhbiBPcHRpb25hbCBBcnJheSBlbGVtZW50XHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgdk9BKHA6UmVhZG9ubHk8c3RyaW5nPiwgZXhwOlJlYWRvbmx5PHN0cmluZz4pOkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzczpGdHNJc3N1ZVtdID0gW107XHJcbiAgICBpZiAoKHRoaXMgYXMgYW55KVtwXSkge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoKHRoaXMgYXMgYW55KVtwXSkpIHtcclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxyXG4gICAgICAgICAgY29kZTogJ3N0cnVjdHVyZScsXHJcbiAgICAgICAgICBkZXRhaWxzOiB7dGV4dDogYEZvdW5kIHNjYWxhciBpbiBhcnJheSBwcm9wZXJ0eSAke3B9ICgke2V4cH0pYH1cclxuICAgICAgICB9XTtcclxuICAgICAgfVxyXG4gICAgICAodGhpcyBhcyBhbnkpW3BdLmZvckVhY2goKHg6YW55LGk6bnVtYmVyKSA9PiB7aXNzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihgJHtleHB9LiR7cH1bJHtpfV1gKSl9ICk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIGFuIE9wdGlvbmFsIEFycmF5IGVsZW1lbnQgYm91bmQgdG8gYSBWYWx1ZSBzZXRcclxuICAgKiBAcGFyYW0gcCBcclxuICAgKiBAcGFyYW0gZXhwIFxyXG4gICAqIEBwYXJhbSB2c04gXHJcbiAgICogQHBhcmFtIHZzViBcclxuICAgKiBAcGFyYW0gdnNTIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHB1YmxpYyB2T0FWKFxyXG4gICAgcDpSZWFkb25seTxzdHJpbmc+LFxyXG4gICAgZXhwOlJlYWRvbmx5PHN0cmluZz4sXHJcbiAgICB2c046c3RyaW5nLFxyXG4gICAgdnNWOlJlYWRvbmx5PHN0cmluZ1tdPixcclxuICAgIHZzUzpSZWFkb25seTxzdHJpbmc+KTpGdHNJc3N1ZVtdIHtcclxuICAgIGxldCBpc3M6RnRzSXNzdWVbXSA9IFtdO1xyXG4gICAgaWYgKCh0aGlzIGFzIGFueSlbcF0pIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgICAgZGV0YWlsczoge3RleHQ6IGBGb3VuZCBzY2FsYXIgaW4gYXJyYXkgcHJvcGVydHkgJHtwfSAoJHtleHB9KWB9XHJcbiAgICAgICAgfV07XHJcbiAgICAgIH1cclxuICAgICAgKHRoaXMgYXMgYW55KVtwXS5mb3JFYWNoKCh4OmFueSxpOm51bWJlcikgPT4ge1xyXG4gICAgICAgIGlzcy5wdXNoKC4uLnguZG9Nb2RlbFZhbGlkYXRpb24oYCR7ZXhwfS4ke3B9WyR7aX1dYCkpO1xyXG4gICAgICAgIGlmICghKHRoaXMgYXMgYW55KVtwXS5oYXNDb2RpbmdGcm9tVmFsaWRhdGlvbk9iaih2c1YpKSB7XHJcbiAgICAgICAgICBpc3MucHVzaCh7XHJcbiAgICAgICAgICAgIHNldmVyaXR5OiAodnNTID09PSAncicpID8gJ2Vycm9yJyA6ICdpbmZvcm1hdGlvbicsIFxyXG4gICAgICAgICAgICBjb2RlOidjb2RlLWludmFsaWQnLCBcclxuICAgICAgICAgICAgZGV0YWlsczp7dGV4dDpgJHtwfSAoJHtleHB9KSBkb2VzIG5vdCBjb250YWluIGNvZGUgZnJvbSBib3VuZCB2YWx1ZSBzZXQgJHt2c059YH19KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBpc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSBhIFJlcXVpcmVkIFNjYWxhciBlbGVtZW50XHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgdlJTKHA6UmVhZG9ubHk8c3RyaW5nPiwgZXhwOlJlYWRvbmx5PHN0cmluZz4pOkZ0c0lzc3VlW10ge1xyXG4gICAgaWYgKCh0aGlzIGFzIGFueSlbcF0pIHsgXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgICAgZGV0YWlsczoge3RleHQ6IGBGb3VuZCBhcnJheSBpbiBzY2FsYXIgcHJvcGVydHkgJHtwfSAoJHtleHB9KWB9XHJcbiAgICAgICAgfV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICh0aGlzIGFzIGFueSlbcF0uZG9Nb2RlbFZhbGlkYXRpb24oZXhwKycuJytwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGRldGFpbHM6IHt0ZXh0OiBgTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnJHtwfScsICR7ZXhwfWB9XHJcbiAgICB9XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIGEgUmVxdWlyZWQgU2NhbGFyIGVsZW1lbnQgYm91bmQgdG8gYSBWYWx1ZSBzZXRcclxuICAgKiBAcGFyYW0gcCBcclxuICAgKiBAcGFyYW0gZXhwIFxyXG4gICAqIEBwYXJhbSB2c04gXHJcbiAgICogQHBhcmFtIHZzViBcclxuICAgKiBAcGFyYW0gdnNTIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHB1YmxpYyB2UlNWKFxyXG4gICAgcDpSZWFkb25seTxzdHJpbmc+LFxyXG4gICAgZXhwOlJlYWRvbmx5PHN0cmluZz4sXHJcbiAgICB2c046c3RyaW5nLFxyXG4gICAgdnNWOlJlYWRvbmx5PHN0cmluZ1tdPixcclxuICAgIHZzUzpSZWFkb25seTxzdHJpbmc+KTpGdHNJc3N1ZVtdIHtcclxuICAgIGlmICgodGhpcyBhcyBhbnkpW3BdKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KCh0aGlzIGFzIGFueSlbcF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICAgIGNvZGU6ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICAgICAgZGV0YWlsczoge3RleHQ6IGBGb3VuZCBhcnJheSBpbiBzY2FsYXIgcHJvcGVydHkgJHtwfSAoJHtleHB9KWB9XHJcbiAgICAgICAgfV07XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGlzczpGdHNJc3N1ZVtdID0gW107XHJcbiAgICAgIGlzcy5wdXNoKC4uLih0aGlzIGFzIGFueSlbcF0uZG9Nb2RlbFZhbGlkYXRpb24oZXhwKycuJytwKSk7XHJcbiAgICAgIGlmICghKHRoaXMgYXMgYW55KVtwXS5oYXNDb2RpbmdGcm9tVmFsaWRhdGlvbk9iaih2c1YpKSB7XHJcbiAgICAgICAgaXNzLnB1c2goe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICh2c1MgPT09ICdyJykgPyAnZXJyb3InIDogJ2luZm9ybWF0aW9uJywgXHJcbiAgICAgICAgICBjb2RlOidjb2RlLWludmFsaWQnLCBcclxuICAgICAgICAgIGRldGFpbHM6e3RleHQ6YCR7cH0gKCR7ZXhwfSkgZG9lcyBub3QgY29udGFpbiBjb2RlIGZyb20gYm91bmQgdmFsdWUgc2V0ICR7dnNOfWB9fSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGRldGFpbHM6IHt0ZXh0OiBgTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnJHtwfScsICR7ZXhwfWB9XHJcbiAgICB9XTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGUgYSBSZXF1aXJlZCBBcnJheSBlbGVtZW50XHJcbiAgICogQHBhcmFtIHAgXHJcbiAgICogQHBhcmFtIGV4cCBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICBwdWJsaWMgdlJBKHA6UmVhZG9ubHk8c3RyaW5nPiwgZXhwOlJlYWRvbmx5PHN0cmluZz4pOkZ0c0lzc3VlW10ge1xyXG4gICAgaWYgKCh0aGlzIGFzIGFueSlbcF0pIHtcclxuICAgICAgbGV0IGlzczpGdHNJc3N1ZVtdID0gW107XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSgodGhpcyBhcyBhbnkpW3BdKSkge1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgICBjb2RlOiAnc3RydWN0dXJlJyxcclxuICAgICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgRm91bmQgc2NhbGFyIGluIGFycmF5IHByb3BlcnR5ICR7cH0gKCR7ZXhwfSlgfVxyXG4gICAgICAgIH1dO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgodGhpcyBhcyBhbnkpW3BdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgICBjb2RlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgICAgZGV0YWlsczoge3RleHQ6IGBNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICcke3B9JywgJHtleHB9YH1cclxuICAgICAgICB9XTtcclxuICAgICAgfVxyXG4gICAgICAodGhpcyBhcyBhbnkpW3BdLmZvckVhY2goKHg6YW55LGk6bnVtYmVyKSA9PiB7aXNzLnB1c2goLi4ueC5kb01vZGVsVmFsaWRhdGlvbihgJHtleHB9LiR7cH1bJHtpfV1gKSl9ICk7XHJcbiAgICAgIHJldHVybiBpc3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgIGNvZGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGRldGFpbHM6IHt0ZXh0OiBgTWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnJHtwfScsICR7ZXhwfWB9XHJcbiAgICB9XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIGEgUmVxdWlyZWQgQXJyYXkgZWxlbWVudCBib3VuZCB0byBhIFZhbHVlIHNldFxyXG4gICAqIEBwYXJhbSBwIFxyXG4gICAqIEBwYXJhbSBleHAgXHJcbiAgICogQHBhcmFtIHZzTiBcclxuICAgKiBAcGFyYW0gdnNWIFxyXG4gICAqIEBwYXJhbSB2c1MgXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgcHVibGljIHZSQVYoXHJcbiAgICBwOlJlYWRvbmx5PHN0cmluZz4sXHJcbiAgICBleHA6UmVhZG9ubHk8c3RyaW5nPixcclxuICAgIHZzTjpzdHJpbmcsXHJcbiAgICB2c1Y6UmVhZG9ubHk8c3RyaW5nW10+LFxyXG4gICAgdnNTOlJlYWRvbmx5PHN0cmluZz4pOkZ0c0lzc3VlW10ge1xyXG4gICAgaWYgKCh0aGlzIGFzIGFueSlbcF0pIHtcclxuICAgICAgbGV0IGlzczpGdHNJc3N1ZVtdID0gW107XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSgodGhpcyBhcyBhbnkpW3BdKSkge1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXHJcbiAgICAgICAgICBjb2RlOiAnc3RydWN0dXJlJyxcclxuICAgICAgICAgIGRldGFpbHM6IHt0ZXh0OiBgRm91bmQgc2NhbGFyIGluIGFycmF5IHByb3BlcnR5ICR7cH0gKCR7ZXhwfSlgfVxyXG4gICAgICAgIH1dO1xyXG4gICAgICB9XHJcbiAgICAgICh0aGlzIGFzIGFueSlbcF0uZm9yRWFjaCgoeDphbnksaTpudW1iZXIpID0+IHtcclxuICAgICAgICBpc3MucHVzaCguLi54LmRvTW9kZWxWYWxpZGF0aW9uKGAke2V4cH0uJHtwfVske2l9XWApKTtcclxuICAgICAgICBpZiAoISh0aGlzIGFzIGFueSlbcF0uaGFzQ29kaW5nRnJvbVZhbGlkYXRpb25PYmoodnNWKSkge1xyXG4gICAgICAgICAgaXNzLnB1c2goe1xyXG4gICAgICAgICAgICBzZXZlcml0eTogKHZzUyA9PT0gJ3InKSA/ICdlcnJvcicgOiAnaW5mb3JtYXRpb24nLCBcclxuICAgICAgICAgICAgY29kZTonY29kZS1pbnZhbGlkJywgXHJcbiAgICAgICAgICAgIGRldGFpbHM6e3RleHQ6YCR7cH0gKCR7ZXhwfSkgZG9lcyBub3QgY29udGFpbiBjb2RlIGZyb20gYm91bmQgdmFsdWUgc2V0ICR7dnNOfWB9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGlzcztcclxuICAgIH1cclxuICAgIHJldHVybiBbe1xyXG4gICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgY29kZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZGV0YWlsczoge3RleHQ6IGBNaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICcke3B9JywgJHtleHB9YH1cclxuICAgIH1dO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gc3RyaXAgaW52YWxpZCBlbGVtZW50IHZhbHVlcyBmb3Igc2VyaWFsaXphdGlvbi5cclxuICAgKi9cclxuICAgcHVibGljIHRvSlNPTigpIHtcclxuICAgIGxldCBjOmFueSA9IHt9O1xyXG4gIFxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gKHRoaXMgYXMgYW55KSkge1xyXG4gICAgICBpZiAoKCh0aGlzIGFzIGFueSlba2V5XSA9PT0gdW5kZWZpbmVkKSB8fCBcclxuICAgICAgICAgICgodGhpcyBhcyBhbnkpW2tleV0gPT09IG51bGwpIHx8XHJcbiAgICAgICAgICAoKHRoaXMgYXMgYW55KVtrZXldID09PSAnJykgfHxcclxuICAgICAgICAgIChOdW1iZXIuaXNOYU4oKHRoaXMgYXMgYW55KVtrZXldKSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGlzQXJyYXk6Ym9vbGVhbiA9IEFycmF5LmlzQXJyYXkoKHRoaXMgYXMgYW55KVtrZXldKTtcclxuXHJcbiAgICAgIGlmIChpc0FycmF5ICYmICh0aGlzIGFzIGFueSlba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGZ0c0R0OnN0cmluZyA9IChpc0FycmF5ID8gKHRoaXMgYXMgYW55KVtrZXldWzBdLmNvbnN0cnVjdG9yLl9mdHNfZGF0YVR5cGUgOiAodGhpcyBhcyBhbnkpW2tleV0uY29uc3RydWN0b3IuX2Z0c19kYXRhVHlwZSkgPz8gJyc7XHJcbiAgICAgIGxldCBpc0Nob2ljZTpib29sZWFuID0gKHRoaXMgYXMgYW55KS5jb25zdHJ1Y3RvclsnX2Z0c18nICsga2V5ICsgJ0lzQ2hvaWNlJ10gPz8gZmFsc2U7XHJcbiAgICAgIGxldCBpc1ByaW1pdGl2ZSA9IChpc0FycmF5ID8gKHRoaXMgYXMgYW55KVtrZXldWzBdLmNvbnN0cnVjdG9yWydfZnRzX2lzUHJpbWl0aXZlJ10gOiAodGhpcyBhcyBhbnkpW2tleV0uY29uc3RydWN0b3JbJ19mdHNfaXNQcmltaXRpdmUnXSkgPz8gZmFsc2U7XHJcbiAgICAgIGxldCBkS2V5OnN0cmluZyA9IGtleSArIChpc0Nob2ljZSA/IGZ0c0R0IDogJycpO1xyXG4gIFxyXG4gICAgICBpZiAoaXNBcnJheSkge1xyXG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSkge1xyXG4gICAgICAgICAgY29uc3QgZU5hbWU6c3RyaW5nID0gJ18nICsgZEtleTtcclxuICAgICAgICAgIGxldCBmb3VuZEFueVZhbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICBsZXQgZm91bmRBbnlFeHQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgY1tkS2V5XSA9IFtdO1xyXG4gICAgICAgICAgY1tlTmFtZV0gPSBbXTtcclxuICAgICAgICAgICh0aGlzIGFzIGFueSlba2V5XS5mb3JFYWNoKChhdjphbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFkZEVsZW1lbnQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoYXYudmFsdWUpIHsgXHJcbiAgICAgICAgICAgICAgY1tkS2V5XS5wdXNoKGF2LnZhbHVlKTsgXHJcbiAgICAgICAgICAgICAgZm91bmRBbnlWYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGFkZEVsZW1lbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgICAgICBjW2RLZXldLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgbGV0IGFvOm9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoYXYuaWQpIHsgXHJcbiAgICAgICAgICAgICAgKGFvIGFzIGFueSlbJ2lkJ10gPSBhdi5pZDtcclxuICAgICAgICAgICAgICBmb3VuZEFueUV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChhdi5leHRlbnNpb24pICYmIChhdi5leHRlbnNpb24ubGVuZ3RoICE9PSAwKSkge1xyXG4gICAgICAgICAgICAgIChhbyBhcyBhbnkpWydleHRlbnNpb24nXSA9IFtdO1xyXG4gICAgICAgICAgICAgIGF2LmV4dGVuc2lvbi5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgKGFvIGFzIGFueSlbJ2V4dGVuc2lvbiddLnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgZm91bmRBbnlFeHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIGlmIChmb3VuZEFueUV4dCkgeyBcclxuICAgICAgICAgICAgICBjW2VOYW1lXS5wdXNoKGFvKTtcclxuICAgICAgICAgICAgICBhZGRFbGVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjW2VOYW1lXS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIGlmICghYWRkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIGNbZEtleV0ucG9wKCk7XHJcbiAgICAgICAgICAgICAgY1tlTmFtZV0ucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgaWYgKCFmb3VuZEFueVZhbCkgeyBkZWxldGUgY1tkS2V5XTsgfVxyXG4gICAgICAgICAgaWYgKCFmb3VuZEFueUV4dCkgeyBkZWxldGUgY1tlTmFtZV07IH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZ0c0R0KSB7XHJcbiAgICAgICAgICBjW2RLZXldID0gW107XHJcbiAgICAgICAgICAodGhpcyBhcyBhbnkpW2tleV0uZm9yRWFjaCgodjphbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gY1tkS2V5XS5wdXNoKHYudG9KU09OKCkpO1xyXG4gICAgICAgICAgICBjW2RLZXldLnB1c2godik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY1tkS2V5XSA9ICh0aGlzIGFzIGFueSlba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUpIHtcclxuICAgICAgICBpZiAoKHRoaXMgYXMgYW55KVtrZXldLnZhbHVlKSB7IGNbZEtleV0gPSAodGhpcyBhcyBhbnkpW2tleV0udmFsdWU7IH1cclxuXHJcbiAgICAgICAgY29uc3QgZU5hbWU6c3RyaW5nID0gJ18nICsgZEtleTtcclxuICAgICAgICBjW2VOYW1lXSA9IHt9O1xyXG4gICAgICAgIGlmICgodGhpcyBhcyBhbnkpW2tleV1bJ2lkJ10pIHsgY1tlTmFtZV1bJ2lkJ10gPSAodGhpcyBhcyBhbnkpW2tleV1bJ2lkJ107IH1cclxuICAgICAgICBpZiAoKCh0aGlzIGFzIGFueSlba2V5XVsnZXh0ZW5zaW9uJ10pICYmICgodGhpcyBhcyBhbnkpW2tleV1bJ2V4dGVuc2lvbiddLmxlbmd0aCAhPT0gMCkpIHtcclxuICAgICAgICAgIGNbZU5hbWVdWydleHRlbnNpb24nXSA9IFtdO1xyXG4gICAgICAgICAgKHRoaXMgYXMgYW55KVtrZXldWydleHRlbnNpb24nXS5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgICAgICBjW2VOYW1lXVsnZXh0ZW5zaW9uJ10ucHVzaChlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNbZU5hbWVdKS5sZW5ndGggPT09IDApIHsgZGVsZXRlIGNbZU5hbWVdOyB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZnRzRHQpIHtcclxuICAgICAgICBjW2RLZXldID0gKHRoaXMgYXMgYW55KVtrZXldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNbZEtleV0gPSAodGhpcyBhcyBhbnkpW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxufSJdfQ==