(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';window.initGoogleMaps=function(){var element=document.querySelector('[data-map-canvas]');var address=element.getAttribute('data-address');var marker='/2017/the/assets/img/insiter-marker.png';var _google$maps=google.maps,Geocoder=_google$maps.Geocoder,GeocoderStatus=_google$maps.GeocoderStatus,LatLng=_google$maps.LatLng,Map=_google$maps.Map,MapTypeId=_google$maps.MapTypeId,Marker=_google$maps.Marker,Size=_google$maps.Size;var geocoder=new Geocoder();var latlng=new LatLng(0,0);var mapTypeId=MapTypeId.ROADMAP;var options={zoom:16,center:latlng,scrollwheel:false,streetViewControl:true,labels:true,mapTypeId:mapTypeId};var canvas=new Map(element,options);canvas.setCenter(latlng);geocoder.geocode({address:address},function(results,status){if(status===GeocoderStatus.OK){var location=results[0].geometry.location;canvas.setCenter(location);new Marker({map:canvas,position:location,icon:{url:marker}});}else if(window.console){console.error('Google Maps was not loaded: ',status);}});};
},{}]},{},[1])
