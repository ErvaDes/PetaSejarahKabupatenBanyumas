var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_NamaDesa_1 = new ol.format.GeoJSON();
var features_NamaDesa_1 = format_NamaDesa_1.readFeatures(json_NamaDesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaDesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaDesa_1.addFeatures(features_NamaDesa_1);
var lyr_NamaDesa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaDesa_1, 
                style: style_NamaDesa_1,
                popuplayertitle: "Nama Desa",
                interactive: true,
    title: 'Nama Desa<br />\
    <img src="styles/legend/NamaDesa_1_0.png" /> Binangun<br />\
    <img src="styles/legend/NamaDesa_1_1.png" /> Danaraja<br />\
    <img src="styles/legend/NamaDesa_1_2.png" /> Dawuhan<br />\
    <img src="styles/legend/NamaDesa_1_3.png" /> Kalisube<br />\
    <img src="styles/legend/NamaDesa_1_4.png" /> Karangrau<br />\
    <img src="styles/legend/NamaDesa_1_5.png" /> Kedunggede<br />\
    <img src="styles/legend/NamaDesa_1_6.png" /> Kedunguter<br />\
    <img src="styles/legend/NamaDesa_1_7.png" /> Kejawar<br />\
    <img src="styles/legend/NamaDesa_1_8.png" /> Pakunden<br />\
    <img src="styles/legend/NamaDesa_1_9.png" /> Papringan<br />\
    <img src="styles/legend/NamaDesa_1_10.png" /> Pasinggahan<br />\
    <img src="styles/legend/NamaDesa_1_11.png" /> Sudagaran<br />\
    <img src="styles/legend/NamaDesa_1_12.png" /> <br />'
        });
var format_SejarahKabupatenBanyumas_2 = new ol.format.GeoJSON();
var features_SejarahKabupatenBanyumas_2 = format_SejarahKabupatenBanyumas_2.readFeatures(json_SejarahKabupatenBanyumas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SejarahKabupatenBanyumas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SejarahKabupatenBanyumas_2.addFeatures(features_SejarahKabupatenBanyumas_2);
var lyr_SejarahKabupatenBanyumas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SejarahKabupatenBanyumas_2, 
                style: style_SejarahKabupatenBanyumas_2,
                popuplayertitle: "Sejarah Kabupaten Banyumas",
                interactive: true,
                title: '<img src="styles/legend/SejarahKabupatenBanyumas_2.png" /> Sejarah Kabupaten Banyumas'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_NamaDesa_1.setVisible(true);lyr_SejarahKabupatenBanyumas_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_NamaDesa_1,lyr_SejarahKabupatenBanyumas_2];
lyr_NamaDesa_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_SejarahKabupatenBanyumas_2.set('fieldAliases', {'Name': 'Name', 'Web': 'Web', 'Gambar': 'Gambar', });
lyr_NamaDesa_1.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_SejarahKabupatenBanyumas_2.set('fieldImages', {'Name': 'TextEdit', 'Web': 'ExternalResource', 'Gambar': 'ExternalResource', });
lyr_NamaDesa_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', });
lyr_SejarahKabupatenBanyumas_2.set('fieldLabels', {'Name': 'no label', 'Web': 'no label', 'Gambar': 'no label', });
lyr_SejarahKabupatenBanyumas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});