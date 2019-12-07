'use strict';

angular.module('LpcWebTest2018')
  .constant('RESOURCES',(function(){
    var BASE_URL = 'https://recette-flash.lepotcommuntest.fr/recruting/2019';
    return {
      PROPERTIES_URL: BASE_URL + '/get-properties',
      GET_POTS_URL: BASE_URL + '/get-pots'
    }
  })());
