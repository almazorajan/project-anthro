/*
version: 1
Login Service
**/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @angular
var core_1 = require("@angular/core");
// user-defined service
var service_1 = require("../../shared-services/service");
var LoginService = (function () {
    function LoginService(service) {
        this.service = service;
    }
    LoginService.prototype.attemptLogin = function (user) {
        return this.service.apiCall({
            verb: "post",
            uri: "login/attemptlogin",
            body: user
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [service_1.Service])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map