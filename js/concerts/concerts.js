'use strict';

(function(){
  angular
  .module("concerts", ["ngResource", 'uiGmapgoogle-maps', 'jshor.angular-addtocalendar', 'ui-bootstrap'])
  .config(['uiGmapGoogleMapApiProvider', function(GoogleMapApi) {
        GoogleMapApi.configure({
          v: '3.17',
          china: true
        });
    }]);

}());
