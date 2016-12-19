/* globals MashupPlatform, MockMP, beforeAll*/
(function () {
    "use strict";

    describe("Test WorkspaceBrowser", function () {
        beforeAll(function () {
            window.MashupPlatform = new MockMP.MockMP();
        });

        it("Dummy test", function () {
            expect(true).toBeTruthy();
        });

    });
})();
