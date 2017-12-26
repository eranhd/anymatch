"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var class_service_1 = require("./class.service");
describe('ClassService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [class_service_1.ClassService]
        });
    });
    it('should be created', testing_1.inject([class_service_1.ClassService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=class.service.spec.js.map