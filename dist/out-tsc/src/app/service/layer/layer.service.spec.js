"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var layer_service_1 = require("./layer.service");
describe('LayerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [layer_service_1.LayerService]
        });
    });
    it('should be created', testing_1.inject([layer_service_1.LayerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=layer.service.spec.js.map