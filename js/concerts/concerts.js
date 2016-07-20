'use strict';

(function(){
  angular
  .module("concerts", ["ngResource", 'uiGmapgoogle-maps', 'ngSanitize'])
  .config(['uiGmapGoogleMapApiProvider', function(GoogleMapApi) {
        GoogleMapApi.configure({
          v: '3.17',
          china: true
        });
    }]);

}());
