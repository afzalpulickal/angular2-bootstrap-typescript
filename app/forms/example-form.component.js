"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("../../app/validators/validators");
var ExampleFormComponent = (function () {
    function ExampleFormComponent(fb) {
        this.fb = fb;
        // Example use of FormBuilder, FormGroups, and FormControls
        this.registrationForm = fb.group({
            dob: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.emailValidator])],
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required],
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required]
        }, { validator: validators_1.matchingPasswords('password', 'confirmPassword') });
    }
    ExampleFormComponent.prototype.submitRegistration = function (value) {
        console.log(value);
    };
    return ExampleFormComponent;
}());
ExampleFormComponent = __decorate([
    core_1.Component({
        selector: 'example-form',
        templateUrl: './app/forms/example-form.html'
    })
], ExampleFormComponent);
exports.ExampleFormComponent = ExampleFormComponent;
