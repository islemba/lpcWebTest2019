'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        //TODO
        if (!localStorage.getItem('lang')){
            localStorage.setItem('lang','fr');
            $scope.locale = 'fr' ;
        }
        else {
            $scope.locale = localStorage.getItem('lang');
        }
        PotsService.get().then((response) =>{$scope.pots = response.data} );
        $scope.changeLocale = function(lang) {
            $scope.locale=lang ;
            localStorage.setItem('lang',lang);
        }

    }]);
