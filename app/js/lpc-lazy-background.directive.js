'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', ['$timeout', '$compile', function ($timeout, $compile) {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    //TODO
    //console.log(scope.lpcLazyBackground);
    scope.loadingUrl = `app/img/${attr.loadingClass}.svg`;
    scope.showLoading = true;
    $timeout(() => {
      scope.showLoading = false;
    }, 1000);
    const loadingTemplate = `<img class="loader" ng-src="{{loadingUrl}}" ng-if="showLoading"/>`;
    const loadingElement = $compile(loadingTemplate)(scope);
    const imageTemplate = `<img class="BackgroundImage" ng-src="{{lpcLazyBackground}}"/>`;
    const imageElement = $compile(imageTemplate)(scope);
    elem.append(loadingElement);
    elem.append(imageElement);

  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
