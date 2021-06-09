"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuardaRotas = /** @class */ (function () {
    function GuardaRotas(router) {
        this.router = router;
    }
    GuardaRotas.prototype.canActivate = function (route, state) {
        return true;
    };
    return GuardaRotas;
}());
exports.GuardaRotas = GuardaRotas;
//# sourceMappingURL=guarda.rotas.js.map