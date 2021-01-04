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
exports.Recomendation = void 0;
const typeorm_1 = require("typeorm");
let Recomendation = class Recomendation extends typeorm_1.BaseEntity {
    UpdateRecomendation(recomendation) {
        this.id = recomendation.id;
        this.id_disease = recomendation.id_disease;
        this.type = recomendation.type;
        this.sequence = recomendation.sequence;
        this.value = recomendation.value;
        this.user = 'levi';
        this.last_updated = new Date(Date.now());
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Recomendation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Recomendation.prototype, "id_disease", void 0);
__decorate([
    typeorm_1.Column('tinytext'),
    __metadata("design:type", String)
], Recomendation.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Recomendation.prototype, "sequence", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Recomendation.prototype, "value", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Recomendation.prototype, "user", void 0);
__decorate([
    typeorm_1.Column('datetime'),
    __metadata("design:type", Date)
], Recomendation.prototype, "last_updated", void 0);
Recomendation = __decorate([
    typeorm_1.Entity()
], Recomendation);
exports.Recomendation = Recomendation;
//# sourceMappingURL=Recomendation.js.map