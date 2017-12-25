"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var school_service_1 = require("./school.service");
describe('SchoolService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [school_service_1.SchoolService]
        });
    });
    it('should be created', testing_1.inject([school_service_1.SchoolService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=school.service.spec.js.map