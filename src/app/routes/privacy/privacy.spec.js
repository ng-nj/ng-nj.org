;(function() {


describe('PrivacyController', function(){

  beforeEach(module('ngNjOrg'));
    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_('PrivacyController');
    }));

    it('should have some text', function() {
      expect($controller.title).toEqual("Privacy Policy");
    });

    it('should say that 1 + 1 is 2', function() {

      var one = 1;
      var two = 2;

      expect (one + one).toEqual(two);
    });

})

})();
