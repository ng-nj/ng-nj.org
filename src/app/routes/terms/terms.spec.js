;(function() {


  describe('PrivacyController', function(){

    beforeEach(module('ngNjOrg'));
    beforeEach(inject(function(_$controller_) {

      $controller = _$controller_('TermsController');
    }));

    it('should do nothing', function() {
      expect(true).toEqual(true);
      //expect(true).toBeTruthy();
    });

  })

})();
