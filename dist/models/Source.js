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
exports.Source = void 0;
const typeorm_1 = require("typeorm");
let Source = class Source extends typeorm_1.BaseEntity {
    constructor(id_recomendation, value) {
        super();
        this.id_recomendation = id_recomendation;
        this.value = value;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Source.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Source.prototype, "id_recomendation", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Source.prototype, "value", void 0);
Source = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Number, String])
], Source);
exports.Source = Source;
//# sourceMappingURL=Source.js.map