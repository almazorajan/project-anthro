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
var core_1 = require('@angular/core');
var TableLoaderComponent = (function () {
    function TableLoaderComponent() {
        this.colSpanSize = 0;
        this.message = "";
        this.condition = false;
    }
    TableLoaderComponent.prototype.ngOnInit = function () {
        console.log("colspan size", this.colSpanSize);
        console.log("message", this.message);
        console.log("condition", this.condition);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TableLoaderComponent.prototype, "colSpanSize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TableLoaderComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TableLoaderComponent.prototype, "condition", void 0);
    TableLoaderComponent = __decorate([
        core_1.Component({
            selector: 'table-loader',
            templateUrl: './app/shared-components/table-loader/table-loader-template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TableLoaderComponent);
    return TableLoaderComponent;
}());
exports.TableLoaderComponent = TableLoaderComponent;
//# sourceMappingURL=table-loader.component.js.map