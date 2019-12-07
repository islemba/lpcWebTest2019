angular.module('LpcWebTest2018')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        var
            propertiesUrl;
            setPropertiesUrlImpl = function(url){
                propertiesUrl = url;
            };
            loadPropertiesImpl = function(){
               return $http.get(propertiesUrl);
            };

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);
