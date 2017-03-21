var app = angular.module('VerticeApp',[]);

app.controller("TabController", function() {
    this.tab = 1;
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
        (window).scrollTo(0,0);
    };
  });
