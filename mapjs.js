var map;

var pingtomIcon = '<h3>Ping Tom Park</h3><p>Come visit the amazing scenery that this park has to offer</p><a href="Location/PingTomPark.html"><strong>Ping Tom Park</strong></a>';

var libraryIcon = '<h3>Chinatown Public Library</h3><p>Come visit the library for books and free wifi</p><a href="Location/Library.html"><strong>ChinaTown Library</strong></a>';

var nineDragonWallIcon = '<h3>Nine Dragon Wall</h3><p>Come visit Nine Dragon Wall</p><a href="Location/NineDragonWall.html"><strong>Nine Dragon Wall</strong></a>';

var ChineseChristianUnionChurchIcon = '<h3>Chinese Christian Union Church</h3><p>Come visit Chinese Christian Union Church</p><a href="Location/ChineseChristianCatholicChurch.html"><strong>Chinese Christian Union Church</strong></a>';

var PuiTakCenterIcon = '<h3>Pui Tak Center</h3><p>Come visit Pui Tak Center</p><a href="Location/PuiTakCenter.html"><strong>Pui Tak Center</strong></a>';

var StThereseChurchIcon = '<h3>St. Therese Church</h3><p>Come visit St. Therese Church</p><a href="Location/ChinatownChurch-SaintTherese.html"><strong>St. Therese Church</strong></a>';

//var ChineseAmericanMuseumIcon = '<h3>Chinese American Museum</h3><p>Come visit Chinese American Museum</p><a href="Location/Chinese-AmericanMuseum.html"><strong>Chinese American Museum</strong></a>';
var CAMoCIcon = '<h3>Chinese American Museum of Chicago</h3><p>Come explore the history of Chinatown!</p><a href="Location/Chinese-AmericanMuseum.html"><strong>Chinese-American Museum</strong></a>';

var HerbalistIcon = '<h3>Herbalist</h3><p>Come visit the Herbalist Page</p><a href="Location/Herbalist.html"><strong>Herbalist</strong></a>';

var KamLLiuBuildingIcon = '<h3>Kam L. Liu Building</h3><p>Come visit Kam L. Liu Building</p><a href="Location/KamLLiuBuilding.html"><strong>Kam L. Liu Building</strong></a>';

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.852726, lng: -87.632948},
        scrollwheel: true,
        zoom: 15.9,
        mapTypeId: 'hybrid',
    });

     
    var pingtom = new google.maps.Marker ({
        position: {lat: 41.857297, lng: -87.634385},
        map: map,
        title: 'Ping Tom Memorial Park',
        icon : 'Images/pinghut.png',
        animation: google.maps.Animation.DROP,
	});
     
    var pingtomMarker = new google.maps.InfoWindow({
        content: pingtomIcon
    });

    pingtom.addListener('click', function() {
        pingtomMarker.open(map, pingtom);
        setTimeout(function () { pingtomMarker.close(); }, 8000);
    });



    var CAMoC = new google.maps.Marker ({
          position: {lat: 41.851330, lng: -87.633529},
          map: map,
          title: 'Chinese American Museum of Chicago',
          icon : 'Images/dragon.png',
          animation: google.maps.Animation.DROP,
	});
      
    var CAMoCMarker = new google.maps.InfoWindow({
        content: CAMoCIcon
    });

    CAMoC.addListener('click', function() {
        CAMoCMarker.open(map, CAMoC);
    });
    CAMoC.addListener('mouseover', function() {
        CAMoC.setAnimation(google.maps.Animation.BOUNCE);
    });
    CAMoC.addListener('mouseout', function() {
        CAMoC.setAnimation(null);
        setTimeout(function () { CAMoCMarker.close(); }, 2000);
    });


    var library = new google.maps.Marker ({
        position: {lat: 41.853844, lng: -87.632182},
        map: map,
        title: 'Chinatown Public Library',
        icon : 'Images/books.png',
        animation: google.maps.Animation.DROP,
    });

    var libraryMarker = new google.maps.InfoWindow({
        content: libraryIcon
    });

    library.addListener('click', function() {
        libraryMarker.open(map, library);
        setTimeout(function () { ;libraryMarker.close(); }, 8000);
    });


    var nineDragonWall = new google.maps.Marker ({
        position: {lat: 41.853026, lng: -87.631420},
        map: map,
        title: 'Nine Dragon Wall',
        icon : 'Images/NineDragonWallIcon.png',
        animation: google.maps.Animation.DROP,
    });

    var nineDragonWallMarker = new google.maps.InfoWindow({
        content: nineDragonWallIcon
    });

    nineDragonWall.addListener('click', function() {
        nineDragonWallMarker.open(map, nineDragonWall);
    });
    nineDragonWall.addListener('mouseover', function() {
        nineDragonWall.setAnimation(google.maps.Animation.BOUNCE);
    });
    nineDragonWall.addListener('mouseout', function() {
        nineDragonWall.setAnimation(null);
        setTimeout(function () { nineDragonWallMarker.close(); }, 2000);
    });


    var ChineseChristianUnionChurch = new google.maps.Marker ({
        position: {lat: 41.8505888, lng: -87.6317184},
        map: map,
        title: 'Chinese Christian Union Church',
        icon : 'Images/ChineseChristianUnionChurchIcon.png',
        animation: google.maps.Animation.DROP,
    });

    var ChineseChristianUnionChurchMarker = new google.maps.InfoWindow({
        content: ChineseChristianUnionChurchIcon
    });

    ChineseChristianUnionChurch.addListener('click', function() {
        ChineseChristianUnionChurchMarker.open(map, ChineseChristianUnionChurch);
    });
    ChineseChristianUnionChurch.addListener('mouseover', function() {
        ChineseChristianUnionChurch.setAnimation(google.maps.Animation.BOUNCE);
    });
    ChineseChristianUnionChurch.addListener('mouseout', function() {
        ChineseChristianUnionChurch.setAnimation(null);
        setTimeout(function () { ChineseChristianUnionChurchMarker.close(); }, 2000);
    });


    var PuiTakCenter = new google.maps.Marker ({
        position: {lat: 41.852414, lng: -87.632226},
        map: map,
        title: 'Pui Tak Center',
        icon : 'Images/PuiTakCenterIcon.png',
        animation: google.maps.Animation.DROP,
    });

    var PuiTakCenterMarker = new google.maps.InfoWindow({
        content: PuiTakCenterIcon
    });

    PuiTakCenter.addListener('click', function() {
        PuiTakCenterMarker.open(map, PuiTakCenter);
    });
    PuiTakCenter.addListener('mouseover', function() {
        PuiTakCenter.setAnimation(google.maps.Animation.BOUNCE);
    });
    PuiTakCenter.addListener('mouseout', function() {
        PuiTakCenter.setAnimation(null);
        setTimeout(function () { PuiTakCenterMarker.close(); }, 2000);
    });


    var StThereseChurch = new google.maps.Marker ({
        position: {lat: 41.850311, lng: -87.6328295},
        map: map,
        title: 'St. Therese Church',
        icon : 'Images/StThereseChurchIcon.png',
        animation: google.maps.Animation.DROP,
    });

    var StThereseChurchMarker = new google.maps.InfoWindow({
        content: StThereseChurchIcon
    });

    StThereseChurch.addListener('click', function() {
        StThereseChurchMarker.open(map, StThereseChurch);
    });
    StThereseChurch.addListener('mouseover', function() {
        StThereseChurch.setAnimation(google.maps.Animation.BOUNCE);
    });
    StThereseChurch.addListener('mouseout', function() {
        StThereseChurch.setAnimation(null);
        setTimeout(function () { StThereseChurchMarker.close(); }, 2000);
    });
    

}

