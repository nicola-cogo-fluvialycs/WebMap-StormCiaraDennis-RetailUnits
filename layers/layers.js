ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:27700").setExtent([452703.975319, 334768.970657, 461672.636438, 341180.054867]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Default_1 = new ol.layer.Tile({
            'title': 'Default',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_18022020FloodPrediction_2 = new ol.format.GeoJSON();
var features_18022020FloodPrediction_2 = format_18022020FloodPrediction_2.readFeatures(json_18022020FloodPrediction_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_18022020FloodPrediction_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18022020FloodPrediction_2.addFeatures(features_18022020FloodPrediction_2);
var lyr_18022020FloodPrediction_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18022020FloodPrediction_2, 
                style: style_18022020FloodPrediction_2,
                popuplayertitle: "18/02/2020 Flood Prediction",
                interactive: true,
                title: '<img src="styles/legend/18022020FloodPrediction_2.png" /> 18/02/2020 Flood Prediction'
            });
var format_17022020FloodPrediction_3 = new ol.format.GeoJSON();
var features_17022020FloodPrediction_3 = format_17022020FloodPrediction_3.readFeatures(json_17022020FloodPrediction_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_17022020FloodPrediction_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17022020FloodPrediction_3.addFeatures(features_17022020FloodPrediction_3);
var lyr_17022020FloodPrediction_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17022020FloodPrediction_3, 
                style: style_17022020FloodPrediction_3,
                popuplayertitle: "17/02/2020 Flood Prediction",
                interactive: true,
                title: '<img src="styles/legend/17022020FloodPrediction_3.png" /> 17/02/2020 Flood Prediction'
            });
var format_16022020FloodPrediction_4 = new ol.format.GeoJSON();
var features_16022020FloodPrediction_4 = format_16022020FloodPrediction_4.readFeatures(json_16022020FloodPrediction_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_16022020FloodPrediction_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16022020FloodPrediction_4.addFeatures(features_16022020FloodPrediction_4);
var lyr_16022020FloodPrediction_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16022020FloodPrediction_4, 
                style: style_16022020FloodPrediction_4,
                popuplayertitle: "16/02/2020 Flood Prediction",
                interactive: true,
                title: '<img src="styles/legend/16022020FloodPrediction_4.png" /> 16/02/2020 Flood Prediction'
            });
var format_15022020FloodPrediction_5 = new ol.format.GeoJSON();
var features_15022020FloodPrediction_5 = format_15022020FloodPrediction_5.readFeatures(json_15022020FloodPrediction_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_15022020FloodPrediction_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15022020FloodPrediction_5.addFeatures(features_15022020FloodPrediction_5);
var lyr_15022020FloodPrediction_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15022020FloodPrediction_5, 
                style: style_15022020FloodPrediction_5,
                popuplayertitle: "15/02/2020 Flood Prediction",
                interactive: true,
                title: '<img src="styles/legend/15022020FloodPrediction_5.png" /> 15/02/2020 Flood Prediction'
            });
var format_14022020FloodPrediction_6 = new ol.format.GeoJSON();
var features_14022020FloodPrediction_6 = format_14022020FloodPrediction_6.readFeatures(json_14022020FloodPrediction_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_14022020FloodPrediction_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14022020FloodPrediction_6.addFeatures(features_14022020FloodPrediction_6);
var lyr_14022020FloodPrediction_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14022020FloodPrediction_6, 
                style: style_14022020FloodPrediction_6,
                popuplayertitle: "14/02/2020 Flood Prediction",
                interactive: true,
                title: '<img src="styles/legend/14022020FloodPrediction_6.png" /> 14/02/2020 Flood Prediction'
            });
var format_RetailPoints_7 = new ol.format.GeoJSON();
var features_RetailPoints_7 = format_RetailPoints_7.readFeatures(json_RetailPoints_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_RetailPoints_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RetailPoints_7.addFeatures(features_RetailPoints_7);
var lyr_RetailPoints_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RetailPoints_7, 
                style: style_RetailPoints_7,
                popuplayertitle: "Retail Points",
                interactive: true,
    title: 'Retail Points<br />\
    <img src="styles/legend/RetailPoints_7_0.png" /> Aldi<br />\
    <img src="styles/legend/RetailPoints_7_1.png" /> Allendale Co-operative Society<br />\
    <img src="styles/legend/RetailPoints_7_2.png" /> Amazon<br />\
    <img src="styles/legend/RetailPoints_7_3.png" /> Asda<br />\
    <img src="styles/legend/RetailPoints_7_4.png" /> Booths<br />\
    <img src="styles/legend/RetailPoints_7_5.png" /> Budgens<br />\
    <img src="styles/legend/RetailPoints_7_6.png" /> Central England Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_7.png" /> Channel Islands Co-operative Society<br />\
    <img src="styles/legend/RetailPoints_7_8.png" /> Chelmsford Star Co-operative Society<br />\
    <img src="styles/legend/RetailPoints_7_9.png" /> Clydebank Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_10.png" /> Coniston Co-operative Society<br />\
    <img src="styles/legend/RetailPoints_7_11.png" /> Cook<br />\
    <img src="styles/legend/RetailPoints_7_12.png" /> Costco<br />\
    <img src="styles/legend/RetailPoints_7_13.png" /> Dunnes Stores<br />\
    <img src="styles/legend/RetailPoints_7_14.png" /> East of England Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_15.png" /> Farmfoods<br />\
    <img src="styles/legend/RetailPoints_7_16.png" /> Heart of England Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_17.png" /> Heron<br />\
    <img src="styles/legend/RetailPoints_7_18.png" /> Iceland<br />\
    <img src="styles/legend/RetailPoints_7_19.png" /> Langdale Co-operative Society<br />\
    <img src="styles/legend/RetailPoints_7_20.png" /> Lidl<br />\
    <img src="styles/legend/RetailPoints_7_21.png" /> Lincolnshire Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_22.png" /> Makro<br />\
    <img src="styles/legend/RetailPoints_7_23.png" /> Marks and Spencer<br />\
    <img src="styles/legend/RetailPoints_7_24.png" /> Midcounties Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_25.png" /> Morrisons<br />\
    <img src="styles/legend/RetailPoints_7_26.png" /> Planet Organic<br />\
    <img src="styles/legend/RetailPoints_7_27.png" /> Sainsburys<br />\
    <img src="styles/legend/RetailPoints_7_28.png" /> Scottish Midland Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_29.png" /> Spar<br />\
    <img src="styles/legend/RetailPoints_7_30.png" /> Tamworth Co-operative Society<br />\
    <img src="styles/legend/RetailPoints_7_31.png" /> Tesco<br />\
    <img src="styles/legend/RetailPoints_7_32.png" /> The Co-operative Group<br />\
    <img src="styles/legend/RetailPoints_7_33.png" /> The Radstock Co-operative Society<br />\
    <img src="styles/legend/RetailPoints_7_34.png" /> The Southern Co-operative<br />\
    <img src="styles/legend/RetailPoints_7_35.png" /> Waitrose<br />\
    <img src="styles/legend/RetailPoints_7_36.png" /> Whole Foods Market<br />\
    <img src="styles/legend/RetailPoints_7_37.png" /> <br />'
        });
var group_Prediction13022020 = new ol.layer.Group({
                                layers: [lyr_18022020FloodPrediction_2,lyr_17022020FloodPrediction_3,lyr_16022020FloodPrediction_4,lyr_15022020FloodPrediction_5,lyr_14022020FloodPrediction_6,],
                                fold: "open",
                                title: "Prediction-13/02/2020"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Default_1.setVisible(true);lyr_18022020FloodPrediction_2.setVisible(true);lyr_17022020FloodPrediction_3.setVisible(true);lyr_16022020FloodPrediction_4.setVisible(true);lyr_15022020FloodPrediction_5.setVisible(true);lyr_14022020FloodPrediction_6.setVisible(true);lyr_RetailPoints_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Default_1,group_Prediction13022020,lyr_RetailPoints_7];
lyr_18022020FloodPrediction_2.set('fieldAliases', {});
lyr_17022020FloodPrediction_3.set('fieldAliases', {});
lyr_16022020FloodPrediction_4.set('fieldAliases', {});
lyr_15022020FloodPrediction_5.set('fieldAliases', {});
lyr_14022020FloodPrediction_6.set('fieldAliases', {});
lyr_RetailPoints_7.set('fieldAliases', {'id': 'id', 'retailer': 'retailer', 'fascia': 'fascia', 'store_name': 'store_name', 'add_one': 'add_one', 'add_two': 'add_two', 'town': 'town', 'suburb': 'suburb', 'postcode': 'postcode', 'long_wgs': 'long_wgs', 'lat_wgs': 'lat_wgs', 'bng_e': 'bng_e', 'bng_n': 'bng_n', 'pqi': 'pqi', 'open_date': 'open_date', 'size_band': 'size_band', 'county': 'county', });
lyr_18022020FloodPrediction_2.set('fieldImages', {});
lyr_17022020FloodPrediction_3.set('fieldImages', {});
lyr_16022020FloodPrediction_4.set('fieldImages', {});
lyr_15022020FloodPrediction_5.set('fieldImages', {});
lyr_14022020FloodPrediction_6.set('fieldImages', {});
lyr_RetailPoints_7.set('fieldImages', {'id': 'Range', 'retailer': 'TextEdit', 'fascia': 'TextEdit', 'store_name': 'TextEdit', 'add_one': 'TextEdit', 'add_two': 'TextEdit', 'town': 'TextEdit', 'suburb': 'TextEdit', 'postcode': 'TextEdit', 'long_wgs': 'TextEdit', 'lat_wgs': 'TextEdit', 'bng_e': 'TextEdit', 'bng_n': 'TextEdit', 'pqi': 'TextEdit', 'open_date': 'Range', 'size_band': 'TextEdit', 'county': 'TextEdit', });
lyr_18022020FloodPrediction_2.set('fieldLabels', {});
lyr_17022020FloodPrediction_3.set('fieldLabels', {});
lyr_16022020FloodPrediction_4.set('fieldLabels', {});
lyr_15022020FloodPrediction_5.set('fieldLabels', {});
lyr_14022020FloodPrediction_6.set('fieldLabels', {});
lyr_RetailPoints_7.set('fieldLabels', {'id': 'no label', 'retailer': 'header label - always visible', 'fascia': 'no label', 'store_name': 'header label - always visible', 'add_one': 'no label', 'add_two': 'no label', 'town': 'no label', 'suburb': 'no label', 'postcode': 'no label', 'long_wgs': 'no label', 'lat_wgs': 'no label', 'bng_e': 'no label', 'bng_n': 'no label', 'pqi': 'no label', 'open_date': 'no label', 'size_band': 'header label - always visible', 'county': 'no label', });
lyr_RetailPoints_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});