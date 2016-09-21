angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl:  '../templates/cardDirective.html',
    // template: 'Hello',
    scope: {
      question: '@'
    }
  };
  return directive;
}
