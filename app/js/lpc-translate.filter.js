'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService, $rootScope){
        var properties=null;
        LpcTranslateService.loadProperties().then((response) => {
            properties = response.data;
        });
        var filter = function(key, locale){
            locale = locale ? locale : (localStorage.getItem('lang') ?localStorage.getItem('lang') : 'fr');
            let result = '';
            if (properties) {
                result = properties[locale][key];
            }
           return result;
        };
        filter.$stateful = true;
        return filter;
    }]);
