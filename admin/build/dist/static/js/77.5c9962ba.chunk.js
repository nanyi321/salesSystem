(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    544: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function() {
          return c;
        });
      var n = a(141);
      function c() {
        return n.default.sendRequest('get', {
          path: 'https://restapi.amap.com/v3/weather/weatherInfo',
          params: { key: 'cc24ccab0a88c3ee17eb8dee0e07ba61', city: 350200, extensions: 'all' }
        });
      }
    }
  }
]);
