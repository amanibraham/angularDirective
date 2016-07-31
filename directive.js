angular.module('amanibraham.checkEmail',[])
.directive('checkEmail', function() {

    var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 
    return {

        require: 'ngModel',
        restrict: 'A',
        link: function(scope,element,attrs,ctrl){
 
          element.on("blur",function(){
    
              if(EMAIL_REGEXP.test(element.val()))
              {
                  console.log('Valid email!');
              }
              else
              {            
                  console.log('Invalid email!');
              }
            
          });
        }
    };
});