'use strict';

$(function() {
	
	var yam = $('#yandex-map');
	
	var _m_center = {};
	
	/*if(yam.hasClass('office-map')) {
		
		if($(document).width() < 500) {
			
			_m_center = {
				center: [52.727068, 41.447900], // офис
				zoom: 17,
			};
			
		} else {
			
			_m_center = {
				center: [52.727033, 41.446000],// офис
				zoom: 17,
			};
			
		}*/
		
	//} else {
		if($(document).width() < 768) {
			_m_center = {
				//center: [52.964378, 36.082256], // расположение района
				center: [52.966000, 36.080500], // расположение района
				zoom: 15,
			}
		} else {
			_m_center = {
				//center: [52.964378, 36.082256], // расположение района
				center: [52.965000, 36.084000], // расположение района
				zoom: 16,
			}		
		}
	
	
	var myMap;
	
	var initYandexMap = function() {
		
		myMap = new ymaps.Map('yandex-map', _m_center, {
			searchControlProvider: 'yandex#search'
		});
				
		var encom_office = new ymaps.Placemark([52.96562, 36.080339], {
			hintContent: 'ООО «Энкомсервис»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/default/icon-map.png',
			iconImageSize: [94, 104],
			iconImageOffset: [-47, -104]
		});
		
		myMap
			.geoObjects
				.add(encom_office)
		;
			
		myMap .geoObjects;			
			
	}
	
	if(yam.length) {
		
		ymaps.ready(initYandexMap);
		
	}
	
});