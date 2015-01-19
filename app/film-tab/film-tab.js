/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var app = angular.module("filmTab", [ ]);

    app.directive('filmTab', function(){
        return {
            restrict: 'E',
            templateUrl: 'film-tab/film-tab.html',
            controller: function() {
                this.tab = 1;

                this.setTab = function (newValue) {
                    this.tab = newValue;
                };

                this.isSet = function (tabName) {
                    return this.tab === tabName;
                }
            },
            controllerAs: 'tab'
        };
    });

})();
