"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var snak_service_1 = require("./snak.service");
describe('SnakService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [snak_service_1.SnakService]
        });
    });
    it('should be created', testing_1.inject([snak_service_1.SnakService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=snak.service.spec.js.map