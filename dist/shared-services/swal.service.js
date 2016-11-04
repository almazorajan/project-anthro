/*
version: 1
Swal Service
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
var core_1 = require('@angular/core');
var SweetAlertService = (function () {
    function SweetAlertService() {
    }
    SweetAlertService.prototype.confirm = function (title, message, callBack) {
        swal({
            title: title,
            text: message,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }, function (isConfirm) {
            callBack(isConfirm);
        });
    };
    SweetAlertService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SweetAlertService);
    return SweetAlertService;
}());
exports.SweetAlertService = SweetAlertService;
//# sourceMappingURL=swal.service.js.map