(function(){


var app = angular.module('pageTest',[]);

app.controller("TabController", function() {
    this.tab = 1;
    console.log(this.tab);
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

app.directive('home',function(){
	return {
		restrict: 'E',
		templateUrl: 'home.html'
	};
});

})();