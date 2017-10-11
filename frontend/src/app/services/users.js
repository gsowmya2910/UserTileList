import angular from 'angular';

const serviceName = 'users';
const entityEndpointUrl = 'https://jsonplaceholder.typicode.com/users';
//const url='src/utils/some.json';

export class UsersService {
    /* @ngInject */
    constructor($http) {
        this.$http = $http;
    }

     getData({ config = {} }) {
         return this.$http
             .get(`${entityEndpointUrl}`, config);
     }


    //  getData({ config = {} }) {
    //      return this.$http
    //          .get(`${url}`, config);
    //  }
}

export default angular.module(`services.${serviceName}`, [])
    .service(`${serviceName}Service`, UsersService)
    .name;



    // myModule.factory('Items', ['$http', function($http){
    //     var Url   = "src/utils/some.json";
    //     var Items = $http.get(Url).then(function(response){
    //      return response.data;
    //   });
    //   return Items;
    // }]);
    // users.factory('userDetails', ['$http', function($http){
    //     var Url   = "src/utils/some.json";
    //     var userDetails = $http.get(Url).then(function(response){
    //      return response.data;
    //   });
    //   return userDetails;
    // }]);