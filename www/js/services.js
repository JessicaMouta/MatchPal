angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])


.service('agendaApi', [function(){
      this.getContatos = function () {
            var contatos = [];
            
            if (typeof localStorage.contatos != 'undefined') {
                contatos = JSON.parse(localStorage.contatos);
            }

            return contatos;
      }
      this.addContato = function(contato){
            var contatos = [];

            if (typeof localStorage.contatos != 'undefined') {
                contatos = JSON.parse(localStorage.contatos);
            }
            
            contatos.push(contato);
            
            localStorage.setItem('contatos', JSON.stringify(contatos));
        }
}]);