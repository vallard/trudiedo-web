(function(){
  var app = angular.module('trudiedo', []);
  
  app.controller('DosController', function() {
    this.dos = dos;   
    this.newDo = function(theNewDo){
      theNewDo.push(this.dos) 
    };
  });

  var dos = [{
    text: 'milk', 
    date: 'Jan 02 2015'
  }, {
    text: 'go to store', 
    date: 'June 03 2015'
  }];

})();
