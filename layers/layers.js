var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TehlikeSnflar_1 = new ol.format.GeoJSON();
var features_TehlikeSnflar_1 = format_TehlikeSnflar_1.readFeatures(json_TehlikeSnflar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TehlikeSnflar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TehlikeSnflar_1.addFeatures(features_TehlikeSnflar_1);
var lyr_TehlikeSnflar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TehlikeSnflar_1, 
                style: style_TehlikeSnflar_1,
                popuplayertitle: "Tehlike Sınıfları",
                interactive: true,
    title: 'Tehlike Sınıfları<br />\
    <img src="styles/legend/TehlikeSnflar_1_0.png" /> Ağaç yok<br />\
    <img src="styles/legend/TehlikeSnflar_1_1.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)<br />\
    <img src="styles/legend/TehlikeSnflar_1_2.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)-Rüzgar<br />\
    <img src="styles/legend/TehlikeSnflar_1_3.png" /> Rüzgar<br />\
    <img src="styles/legend/TehlikeSnflar_1_4.png" /> Rüzgar-Yangın<br />\
    <img src="styles/legend/TehlikeSnflar_1_5.png" /> Normal (Direk Çevresinde Tehlikesiz Ağaç, Çalı ya da Yeni Yetişen Ağaç Var.)-Rüzgar-Yangın<br />'
        });
var format_DirekRiskSnflandrmas_2 = new ol.format.GeoJSON();
var features_DirekRiskSnflandrmas_2 = format_DirekRiskSnflandrmas_2.readFeatures(json_DirekRiskSnflandrmas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirekRiskSnflandrmas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirekRiskSnflandrmas_2.addFeatures(features_DirekRiskSnflandrmas_2);
var lyr_DirekRiskSnflandrmas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DirekRiskSnflandrmas_2, 
                style: style_DirekRiskSnflandrmas_2,
                popuplayertitle: "Direk Risk Sınıflandırması",
                interactive: true,
    title: 'Direk Risk Sınıflandırması<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_0.png" /> Düşük<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_1.png" /> Orta<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_2.png" /> Yüksek<br />\
    <img src="styles/legend/DirekRiskSnflandrmas_2_3.png" /> Çok Yüksek<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_TehlikeSnflar_1.setVisible(true);lyr_DirekRiskSnflandrmas_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_TehlikeSnflar_1,lyr_DirekRiskSnflandrmas_2];
lyr_TehlikeSnflar_1.set('fieldAliases', {'DIREKNO': 'DIREKNO', 'TIP': 'TIP', 'ALTTIP': 'ALTTIP', 'YAPISI': 'YAPISI', 'Direk_Boyu': 'Direk_Boyu', 'Yeni_Sonuç': 'Yeni_Sonuç', 'Tehlike Seviyesi': 'Tehlike Seviyesi', 'Yoğunluk': 'Yoğunluk', });
lyr_DirekRiskSnflandrmas_2.set('fieldAliases', {'DIREKNO': 'DIREKNO', 'TIP': 'TIP', 'ALTTIP': 'ALTTIP', 'YAPISI': 'YAPISI', 'Direk_Boyu': 'Direk_Boyu', 'Yeni_Sonuç': 'Yeni_Sonuç', 'Tehlike Seviyesi': 'Tehlike Seviyesi', 'Yoğunluk': 'Yoğunluk', });
lyr_TehlikeSnflar_1.set('fieldImages', {'DIREKNO': 'TextEdit', 'TIP': 'TextEdit', 'ALTTIP': 'TextEdit', 'YAPISI': 'TextEdit', 'Direk_Boyu': 'Range', 'Yeni_Sonuç': 'TextEdit', 'Tehlike Seviyesi': 'TextEdit', 'Yoğunluk': 'Range', });
lyr_DirekRiskSnflandrmas_2.set('fieldImages', {'DIREKNO': 'TextEdit', 'TIP': 'TextEdit', 'ALTTIP': 'TextEdit', 'YAPISI': 'TextEdit', 'Direk_Boyu': 'Range', 'Yeni_Sonuç': 'TextEdit', 'Tehlike Seviyesi': 'TextEdit', 'Yoğunluk': 'Range', });
lyr_TehlikeSnflar_1.set('fieldLabels', {'DIREKNO': 'inline label - visible with data', 'TIP': 'hidden field', 'ALTTIP': 'hidden field', 'YAPISI': 'hidden field', 'Direk_Boyu': 'inline label - visible with data', 'Yeni_Sonuç': 'inline label - visible with data', 'Tehlike Seviyesi': 'inline label - visible with data', 'Yoğunluk': 'hidden field', });
lyr_DirekRiskSnflandrmas_2.set('fieldLabels', {'DIREKNO': 'inline label - visible with data', 'TIP': 'hidden field', 'ALTTIP': 'hidden field', 'YAPISI': 'hidden field', 'Direk_Boyu': 'inline label - visible with data', 'Yeni_Sonuç': 'inline label - visible with data', 'Tehlike Seviyesi': 'inline label - visible with data', 'Yoğunluk': 'hidden field', });
lyr_DirekRiskSnflandrmas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});