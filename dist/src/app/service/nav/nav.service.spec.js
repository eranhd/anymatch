"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var nav_service_1 = require("./nav.service");
describe('NavService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [nav_service_1.NavService]
        });
    });
    it('should be created', testing_1.inject([nav_service_1.NavService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should return array', testing_1.inject([nav_service_1.NavService], function (service) {
        expect(service.items).toBeDefined();
    }));
});
//# sourceMappingURL=nav.service.spec.js.map