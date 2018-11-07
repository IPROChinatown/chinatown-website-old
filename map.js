// @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt CC0
// To the extent possible under law, I waive all copyright and related
// or neighboring rights to this program via CC0

var pingtom = {name: "Ping Tom Park",
			   position: {lat: 41.859115900, lng: -87.632596900},
			   icon: "Images/pinghut.png",
			   link: "./Location/PingTomPark.html"};

var sttherese = {name: "St Therese Church",
				 position: {lat: 41.851545200, lng: -87.632607200},
				 icon: "Images/StThereseChurchIcon.png",
				 link: "./Location/ChinatownChurch-SaintTherese.html"};

var ninedragon = {name: "Nine Dragon Wall",
				  position: {lat: 41.853170000, lng: -87.631345000},
				  icon: "Images/NineDragonWallIcon.png",
				  link: "./Location/NineDragonWall.html"};

var gate = {position: {lat: 41.852697400, lng: -87.632211300},
			icon: "",
			link: ""};

var puitak = {name: "Pui Tak Center",
			  position: {lat: 41.852396900, lng: -87.632291100},
			  icon: "Images/PuiTakCenterIcon.png",
			  link: "./Location/PuiTakCenter.html"};

var buddhistassoc = {position: {lat: 41.851436200, lng: -87.631652300},
					 icon: "",
					 link: ""};

var ccuc = {name: "Chinese Christian Union Church",
			position: {lat: 41.850719000, lng: -87.631671600},
			icon: "Images/ChineseChristianUnionChurchIcon.png",
			link: "./Location/ChineseChristianCatholicChurch.html"};

var herbalist = {position: {lat: 41.849052000, lng: -87.632070700},
				 icon: "",
				 link: ""};

var chineseshop = {position: {lat: 41.850397200, lng: -87.632185900},
				   icon: "",
				   link: ""};

var ccamuseum = {name: "Chinese-American Museum",
				 position: {lat: 41.851217700, lng: -87.633518200},
				 icon: "Images/dragon.png",
				 link: "./Location/Chinese-AmericanMuseum.html"};

var library = {name: "ChinaTown Public Library",
			   position: {lat: 41.853860, lng: -87.632160},
			   icon: "Images/books.png",
			   link: "./Location/Library.html"};

var locations = [pingtom, sttherese, ninedragon, ccuc, ccamuseum, puitak, library];

var origin_lat = 41.848;
var origin_long = -87.6400;
// var origin_lat = 41.8477;
// var origin_long = -87.6419

var origin_lat_end = 41.8595;
var origin_long_end = -87.6300;
// var origin_lat_end = 41.8576;
// var origin_long_end = -87.6302;

var map_width_coords = origin_long_end - origin_long;
var map_height_coords = origin_lat_end - origin_lat;

var map_width = 600;
var map_height = 600;

var main_map = document.createElement("img");
main_map.src = "./ct-map-coords-big.png";
main_map.setAttribute("id", "main_map");
main_map.setAttribute("alt", "map");
main_map.setAttribute("width", map_width.toString());
main_map.setAttribute("height", map_height.toString());
// main_map.setAttribute("usemap", "#ChinaTown Clickable Map");
document.getElementById("map").appendChild(main_map);

// var clickable = document.createElement("map");
// clickable.setAttribute("name", "ChinaTown Clickable Map");
// document.getElementById("map").appendChild(clickable);

function mapOpen(v) {
	var icon_width = 32;

	var elem=document.createElement("img");

	var coords = translate_coords(v.position.lat, v.position.lng);

	elem.src = v.icon;
	elem.setAttribute("alt", "icon");
	elem.setAttribute("usemap", "#clickable ".concat(v.name));
	// TODO: Clickable icons. We need to introduce an html map element. Doable, but let's take it one step at a time.

	elem.style.position = "absolute";

	var rect = document.getElementById("main_map").getBoundingClientRect();
	var x = (- icon_width / 2 + coords[1]);
	var y = (map_height - icon_width / 2 - coords[0]);
	elem.style.width = icon_width.toString().concat("px");
	elem.style.height = icon_width.toString().concat("px");
	elem.style.top = y.toString().concat("px");
	elem.style.left = (rect.left+x).toString().concat("px");
	document.getElementById("map").appendChild(elem);

	var clickable = document.createElement("map");
	clickable.setAttribute("name", "clickable ".concat(v.name));
	document.getElementById("map").appendChild(clickable);
	
	var click_area = document.createElement("area");
	click_area.setAttribute("shape", "rect");
	click_area.setAttribute("coords", "0,0,".concat(icon_width.toString()).concat(",").concat(icon_width.toString()));
	// click_area.setAttribute("coords", x.toString().concat(",").concat(y.toString()).concat(",").concat((x+icon_width).toString()).concat(",").concat((y+icon_width).toString()));
	click_area.setAttribute("href", v.link);
	clickable.appendChild(click_area);
}

function translate_coords(latitude, longitude) {
	if (latitude > origin_lat_end || longitude > origin_long_end || latitude < origin_lat || longitude < origin_long) {
		alert("Uh-oh, coordinates out of bounds: (".concat(latitude.toString().concat(", ").concat(longitude.toString().concat(")"))));
	}
	return [(latitude - origin_lat) * map_height / map_height_coords, (longitude - origin_long) * map_width / map_width_coords];
}

for (var loc = 0; loc < locations.length; loc++) {
	mapOpen(locations[loc]);
}
// @license-end
