/*
version: 1
Position Service
**/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var core_1 = require('@angular/core');
// user-defined service
var service_1 = require('../../shared-services/service');
var LoginService = (function (_super) {
    __extends(LoginService, _super);
    function LoginService() {
        _super.apply(this, arguments);
    }
    LoginService.prototype.addPosition = function (position) {
        return this.apiCall("post", "position/addposition", position);
    };
    LoginService.prototype.updatePosition = function (position) {
        return this.apiCall("post", "position/updateposition", position);
    };
    LoginService.prototype.deactivatePosition = function (position) {
        return this.apiCall("post", "position/deleteposition", position);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoginService);
    return LoginService;
}(service_1.Service));
exports.LoginService = LoginService;
//# sourceMappingURL=position.service.js.map