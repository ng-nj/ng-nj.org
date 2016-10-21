
(function() {

  angular
    .module('ngNjOrg')
    .controller('RegisterController', function ($log, Authentication, $scope) {
      var self = this;


      // $scope.myform['confirm-password'].$setValidity(5 === 5, true)

$scope.rawProfileImg = '';
      self.fauxCount = 0;
      self.pw;

      self.b = '';

      self.login = function () {
        Authentication.login(self.user)
      }
      self.logout = function () {
        Authentication.logout()
      }
      self.register = function () {

        $log.log("Registering new user!");

        var fileInput = document.getElementById("profileImgInput");

        // files is a FileList object (similar to NodeList)
        var files = fileInput.files;

        console.log('first file DOM selction: ' + files[0]);

        self.user.profileImg = files[0];


        // console.log('first file ng-model: ' + self.rawProfileImg);

        // $scope.imageSrc = files[0])

        // self.user

        self.user.followers = {};
        self.user.following = {};


        Authentication.register(self.user, self.pw)
      };


    self.booyah = function () {

      self.fauxCount = 1;

    };

     self.profileImageInputChanged = function() {

       var input = $('#profileImgInput');

       console.log('profile Image input changed! ' + input);


      }


      self.g = function () {
        console.log('yo yo!');
      }

      $scope.a = function () {
        console.log('yo yo!');

      }

      $scope.$watch($scope.rawProfileImg, function() {
        // $scope.barFunc();

        console.log('stuff!!!!')

      });

      $scope.file_changed = function(input) {
        console.log('yo yo!!!!!@');

        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {

            var ok;



            var el = document.getElementById("register-page-profile-image-preview")
              el.src = e.target.result;
            el.style.width = '40px';
            el.style.height = '40px';
              // .attr('src', e.target.result)
              // .width(150)
              // .height(200);
          };

          reader.readAsDataURL(input.files[0]);
        }

      }

    });


})();
