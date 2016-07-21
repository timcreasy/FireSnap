describe("services", function() {
    describe("ViewSnap Service:", function() {

        beforeEach(function() {
            angular.module('app');
        });

        it('should contain a ViewSnap service',
           inject(function(ViewSnap) {
                expect(ViewSnap).not.to.equal(null);
        }));

        // it('should contain two search options',
        //     inject(function(searchService) {
        //         expect(searchService.getSearchOptions()).to.equal(2);
        // }));

   });
});
