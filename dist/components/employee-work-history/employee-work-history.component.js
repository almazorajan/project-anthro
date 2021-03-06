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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var helpers_1 = require("../../helpers/helpers");
var services_1 = require("../../services/services");
var models_1 = require("../../models/models");
var EmployeeWorkHistoryComponent = (function () {
    function EmployeeWorkHistoryComponent(swal, toast, employmentStatusService) {
        this.swal = swal;
        this.toast = toast;
        this.employmentStatusService = employmentStatusService;
        this.loadingEmploymentStatuses = false;
    }
    EmployeeWorkHistoryComponent.prototype.ngOnInit = function () {
        this.workHistoryModal = new models_1.Modal("#mdlWorkHistory");
        this.getAllEmploymentStatus();
    };
    Object.defineProperty(EmployeeWorkHistoryComponent.prototype, "dateFrom", {
        get: function () {
            var def = new Date().toISOString().substring(0, 10);
            try {
                if (!this.employee) {
                    return def;
                }
                if (!this.workHistory) {
                    return def;
                }
                if (typeof this.workHistory.dateFrom.toISOString !== "function") {
                    this.workHistory.dateFrom = new Date(this.workHistory.dateFrom);
                }
                return this.workHistory.dateFrom.toISOString().substring(0, 10);
            }
            catch (e) {
                console.log(e);
            }
            return def;
        },
        set: function (e) {
            try {
                var f = e.split('-');
                var d = new Date(Date.UTC(f[0], f[1] - 1, f[2]));
                this.workHistory.dateFrom.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
            }
            catch (e) {
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeWorkHistoryComponent.prototype, "dateTo", {
        get: function () {
            var def = new Date().toISOString().substring(0, 10);
            try {
                if (!this.employee) {
                    return def;
                }
                if (!this.workHistory) {
                    return def;
                }
                if (typeof this.workHistory.dateTo.toISOString !== "function") {
                    this.workHistory.dateTo = new Date(this.workHistory.dateTo);
                }
                return this.workHistory.dateTo.toISOString().substring(0, 10);
            }
            catch (e) {
                console.log(e);
            }
            return def;
        },
        set: function (e) {
            try {
                var f = e.split('-');
                var d = new Date(Date.UTC(f[0], f[1] - 1, f[2]));
                this.workHistory.dateTo.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
            }
            catch (e) {
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    EmployeeWorkHistoryComponent.prototype.getAllEmploymentStatus = function () {
        var _this = this;
        this.isWorkHistoryFormDisabled = true;
        this.employmentStatuses = [];
        this.employmentStatusService.getAll().then(function (result) {
            _this.isWorkHistoryFormDisabled = false;
            if (result.success) {
                _this.employmentStatuses = result.data;
            }
            else {
                _this.toast.error(result.message);
            }
        }).catch(function (e) {
            _this.isWorkHistoryFormDisabled = false;
            _this.toast.error(e || e.message);
        });
    };
    EmployeeWorkHistoryComponent.prototype.copyWorkHistory = function (workHistory) {
        return JSON.parse(JSON.stringify(workHistory));
    };
    EmployeeWorkHistoryComponent.prototype.resolveEmploymentStatus = function (workHistory) {
        if (workHistory) {
            if (workHistory.employmentStatus) {
                for (var key in this.employmentStatuses) {
                    var employmentStatus = this.employmentStatuses[key];
                    if (workHistory.employmentStatus._id === employmentStatus._id) {
                        workHistory.employmentStatus.employmentStatus = employmentStatus.employmentStatus;
                        return;
                    }
                }
            }
        }
        workHistory.employmentStatus.employmentStatus = "";
    };
    EmployeeWorkHistoryComponent.prototype.appendWorkHistory = function () {
        this.resolveEmploymentStatus(this.workHistory);
        this.employee.workHistory.unshift(this.copyWorkHistory(this.workHistory));
        this.workHistoryModal.hide();
    };
    EmployeeWorkHistoryComponent.prototype.cancelEditWorkHistory = function () {
        this.workHistory = this.copyWorkHistory(this.originalWorkHistory);
        this.originalWorkHistory = null;
        this.workHistoryModal.hide();
    };
    EmployeeWorkHistoryComponent.prototype.updateWorkHistory = function () {
        this.resolveEmploymentStatus(this.workHistory);
        this.employee.workHistory[this.currentIndex] = this.copyWorkHistory(this.workHistory);
        this.originalWorkHistory = null;
        this.workHistoryModal.hide();
    };
    EmployeeWorkHistoryComponent.prototype.cancelUpdateWorkHistory = function () {
        this.workHistory = this.copyWorkHistory(this.originalWorkHistory);
        this.originalWorkHistory = null;
        this.workHistoryModal.hide();
    };
    EmployeeWorkHistoryComponent.prototype.deleteWorkHistory = function (workHistory) {
        var index = this.employee.workHistory.indexOf(workHistory);
        this.employee.workHistory.splice(index, 1);
    };
    EmployeeWorkHistoryComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    EmployeeWorkHistoryComponent.prototype.addWorkHistory = function () {
        this.workHistoryOperation = 2;
        this.isWorkHistoryFormDisabled = false;
        this.workHistory = new models_1.WorkHistory();
        this.workHistoryModal.show();
    };
    EmployeeWorkHistoryComponent.prototype.editWorkHistory = function (workHistory, index) {
        this.workHistoryOperation = 1;
        this.isWorkHistoryFormDisabled = false;
        this.currentIndex = index;
        this.workHistory = this.copyWorkHistory(this.workHistory);
        this.originalWorkHistory = this.copyWorkHistory(this.workHistory);
        this.workHistoryModal.show();
    };
    EmployeeWorkHistoryComponent.prototype.confirmAdd = function () {
        var _this = this;
        this.swal.confirm({
            title: "Are You Sure?",
            message: "You will be adding this work history information",
            confirmButtonText: "Yes, Add It!",
            callBack: function (isConfirm) {
                if (isConfirm) {
                    _this.appendWorkHistory();
                }
            }
        });
    };
    EmployeeWorkHistoryComponent.prototype.confirmUpdateWorkHistory = function () {
        var _this = this;
        this.swal.confirm({
            title: "Are You Sure?",
            message: "You will be updating this work history information",
            confirmButtonText: "Yes, Update It!",
            callBack: function (isConfirm) {
                if (isConfirm) {
                    _this.updateWorkHistory();
                }
            }
        });
    };
    EmployeeWorkHistoryComponent.prototype.confirmCancelUpdate = function () {
        var _this = this;
        this.swal.confirm({
            title: "Are You Sure?",
            message: "You will be cancelling this work history information",
            confirmButtonText: "Yes, Cancel It!",
            callBack: function (isConfirm) {
                if (isConfirm) {
                    _this.cancelUpdateWorkHistory();
                }
            }
        });
    };
    EmployeeWorkHistoryComponent.prototype.confirmCancelAdd = function () {
        var _this = this;
        this.swal.confirm({
            title: "Are You Sure?",
            message: "You will be cancelling this work history information",
            confirmButtonText: "Yes, Cancel It!",
            callBack: function (isConfirm) {
                if (isConfirm) {
                    _this.appendWorkHistory();
                }
            }
        });
    };
    EmployeeWorkHistoryComponent.prototype.confirmCancelEdit = function () {
        var _this = this;
        this.swal.confirm({
            title: "Are You Sure?",
            message: "You will be cancelling this work history information",
            confirmButtonText: "Yes, Cancel It!",
            callBack: function (isConfirm) {
                if (isConfirm) {
                    _this.cancelEditWorkHistory();
                }
            }
        });
    };
    EmployeeWorkHistoryComponent.prototype.confirmDeleteWorkHistory = function (workHistory) {
        var _this = this;
        this.swal.confirm({
            title: "Are You Sure?",
            message: "You will be deleting this work history information",
            confirmButtonText: "Yes, Delete It!",
            callBack: function (isConfirm) {
                if (isConfirm) {
                    _this.deleteWorkHistory(workHistory);
                }
            }
        });
    };
    EmployeeWorkHistoryComponent.prototype.validateEmploymentStatus = function (workHistory) {
        if (!workHistory)
            return "";
        if (!workHistory.employmentStatus)
            return "";
        return workHistory.employmentStatus.employmentStatus;
    };
    return EmployeeWorkHistoryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", models_1.Employee)
], EmployeeWorkHistoryComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeWorkHistoryComponent.prototype, "operation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], EmployeeWorkHistoryComponent.prototype, "isFormDisabled", void 0);
EmployeeWorkHistoryComponent = __decorate([
    core_1.Component({
        selector: 'employee-work-history-component',
        templateUrl: './app/components/employee-work-history/employee-work-history.page.html',
        providers: [
            helpers_1.SwalHelper,
            helpers_1.ToastHelper,
            services_1.EmploymentStatusService
        ]
    }),
    __metadata("design:paramtypes", [helpers_1.SwalHelper,
        helpers_1.ToastHelper,
        services_1.EmploymentStatusService])
], EmployeeWorkHistoryComponent);
exports.EmployeeWorkHistoryComponent = EmployeeWorkHistoryComponent;
//# sourceMappingURL=employee-work-history.component.js.map