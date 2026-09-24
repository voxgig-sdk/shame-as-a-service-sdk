"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShameAsAServiceError = void 0;
class ShameAsAServiceError extends Error {
    isShameAsAServiceError = true;
    sdk = 'ShameAsAService';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ShameAsAServiceError = ShameAsAServiceError;
//# sourceMappingURL=ShameAsAServiceError.js.map