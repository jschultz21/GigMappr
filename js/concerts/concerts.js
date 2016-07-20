'use strict';

(function(){
  angular
  .module("concerts", ["ngResource", 'uiGmapgoogle-maps'])
  .config(['uiGmapGoogleMapApiProvider', function(GoogleMapApi) {
        GoogleMapApi.configure({
          v: '3.17',
          china: true
        });
    }]);

}());
