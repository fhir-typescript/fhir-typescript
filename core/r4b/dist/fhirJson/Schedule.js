// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Schedule
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlySnNvbi9TY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBTY2hlZHVsZVxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlySnNvbi5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBzbG90cyBvZiB0aW1lIHRoYXQgbWF5IGJlIGF2YWlsYWJsZSBmb3IgYm9va2luZyBhcHBvaW50bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7IFxyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJTY2hlZHVsZVwifG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgSWRzIGZvciB0aGlzIGl0ZW0uXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IChmaGlyLklkZW50aWZpZXJ8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIGl0IG1heSBiZSB1c2VkIHRvIG1hcmsgdGhhdCB0aGUgcmVzb3VyY2Ugd2FzIGNyZWF0ZWQgaW4gZXJyb3IuXHJcbiAgICovXHJcbiAgYWN0aXZlPzogYm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFNjaGVkdWxlLmFjdGl2ZVxyXG4gICAqL1xyXG4gIF9hY3RpdmU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQSBicm9hZCBjYXRlZ29yaXphdGlvbiBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHRvIGJlIHBlcmZvcm1lZCBkdXJpbmcgdGhpcyBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBzZXJ2aWNlQ2F0ZWdvcnk/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWNpZmljIHNlcnZpY2UgdGhhdCBpcyB0byBiZSBwZXJmb3JtZWQgZHVyaW5nIHRoaXMgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgc2VydmljZVR5cGU/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWNpYWx0eSBvZiBhIHByYWN0aXRpb25lciB0aGF0IHdvdWxkIGJlIHJlcXVpcmVkIHRvIHBlcmZvcm0gdGhlIHNlcnZpY2UgcmVxdWVzdGVkIGluIHRoaXMgYXBwb2ludG1lbnQuXHJcbiAgICovXHJcbiAgc3BlY2lhbHR5PzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjYXBhY2l0eSB0byBzdXBwb3J0IG11bHRpcGxlIHJlZmVyZW5jZWQgcmVzb3VyY2UgdHlwZXMgc2hvdWxkIGJlIHVzZWQgaW4gY2FzZXMgd2hlcmUgdGhlIHNwZWNpZmljIHJlc291cmNlcyB0aGVtc2VsdmVzIGNhbm5vdCBiZSBzY2hlZHVsZWQgd2l0aG91dCB0aGUgb3RoZXIsIGFuZCB0aHVzIG9ubHkgbWFrZSBzZW5zZSB0byB0aGUgc3lzdGVtIGV4cG9zaW5nIHRoZW0gYXMgYSBncm91cC4gQ29tbW9uIGV4YW1wbGVzIG9mIHRoaXMgYXJlIHdoZXJlIHRoZSBjb21iaW5hdGlvbiBvZiBhIHByYWN0aXRpb25lciBhbmQgYSByb29tIChMb2NhdGlvbikgYXJlIGFsd2F5cyByZXF1aXJlZCBieSBhIHN5c3RlbS5cclxuICAgKi9cclxuICBhY3RvcjogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgcGVyaW9kIG9mIHRpbWUgdGhhdCB0aGUgc2xvdHMgdGhhdCByZWZlcmVuY2UgdGhpcyBTY2hlZHVsZSByZXNvdXJjZSBjb3ZlciAoZXZlbiBpZiBub25lIGV4aXN0KS4gVGhlc2UgIGNvdmVyIHRoZSBhbW91bnQgb2YgdGltZSB0aGF0IGFuIG9yZ2FuaXphdGlvbidzIHBsYW5uaW5nIGhvcml6b247IHRoZSBpbnRlcnZhbCBmb3Igd2hpY2ggdGhleSBhcmUgY3VycmVudGx5IGFjY2VwdGluZyBhcHBvaW50bWVudHMuIFRoaXMgZG9lcyBub3QgZGVmaW5lIGEgXCJ0ZW1wbGF0ZVwiIGZvciBwbGFubmluZyBvdXRzaWRlIHRoZXNlIGRhdGVzLlxyXG4gICAqL1xyXG4gIHBsYW5uaW5nSG9yaXpvbj86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb21tZW50cyBvbiB0aGUgYXZhaWxhYmlsaXR5IHRvIGRlc2NyaWJlIGFueSBleHRlbmRlZCBpbmZvcm1hdGlvbi4gU3VjaCBhcyBjdXN0b20gY29uc3RyYWludHMgb24gdGhlIHNsb3RzIHRoYXQgbWF5IGJlIGFzc29jaWF0ZWQuXHJcbiAgICovXHJcbiAgY29tbWVudD86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFNjaGVkdWxlLmNvbW1lbnRcclxuICAgKi9cclxuICBfY29tbWVudD86Zmhpci5GaGlyRWxlbWVudDtcclxufVxyXG4iXX0=