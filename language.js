// @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt CC0
// To the extent possible under law, I waive all copyright and related
// or neighboring rights to this program via CC0

var lang_selected = 0;
var lang_list = ["English", "Simplified", "Traditional"];

// Select language from cookie if possible
var page = parent.document
var english = page.getElementsByClassName("English");
var simplified = page.getElementsByClassName("Simplified");
var traditional = page.getElementsByClassName("Traditional");

var cookie_string = document.cookie;

if (cookie_string.length != 0) {
	var cookie_string_array = cookie_string.split('=');
	if (cookie_string_array[1] == "en") {
		lang_selected = 0;
	}
	else if (cookie_string_array[1] == 'zh_HANS') {
		lang_selected = 1;
	}
	else if (cookie_string_array[1] == 'zh_HANT') {
		lang_selected = 2;
	}
}

for (i = 0; i < english.length; i++) {
	if (lang_list[lang_selected] != "English") {
		english[i].style.display = "none";
	}
	else {
		english[i].style.display = "block";
	}
}

for (i = 0; i < simplified.length; i++) {
	if (lang_list[lang_selected] != "Simplified") {
		simplified[i].style.display = "none";
	}
	else {
		simplified[i].style.display = "block";
	}
}

for (i = 0; i < traditional.length; i++) {
	if (lang_list[lang_selected] != "Traditional") {
		traditional[i].style.display = "none";
	}
	else {
		traditional[i].style.display = "block";
	}
}

// Function to toggle language
function ChangeLang() {
	var page = parent.document
	var english = page.getElementsByClassName("English");
	var simplified = page.getElementsByClassName("Simplified");
	var traditional = page.getElementsByClassName("Traditional");

	var cookie_string = document.cookie;
	if (cookie_string.length != 0) {
		var cookie_string_array = cookie_string.split('=');
		if (cookie_string_array[1] == "en") {
			lang_selected = 0;
		}
		else if (cookie_string_array[1] == 'zh_HANS') {
			lang_selected = 1;
		}
		else if (cookie_string_array[1] == 'zh_HANT') {
			lang_selected = 2;
		}
	}
	lang_selected = (lang_selected + 1) % lang_list.length;
	if (lang_selected == 0) {
		document.cookie = "lang=en; path=/"
	}
	else if (lang_selected == 1) {
		document.cookie = "lang=zh_HANS; path=/"
	}
	else if (lang_selected == 2) {
		document.cookie = "lang=zh_HANT; path=/"
	}

	for (i = 0; i < english.length; i++) {
		if (lang_list[lang_selected] != "English") {
			english[i].style.display = "none";
		}
		else {
			english[i].style.display = "block";
		}
	}

	for (i = 0; i < simplified.length; i++) {
		if (lang_list[lang_selected] != "Simplified") {
			simplified[i].style.display = "none";
		}
		else {
			simplified[i].style.display = "block";
		}
	}

	for (i = 0; i < traditional.length; i++) {
		if (lang_list[lang_selected] != "Traditional") {
			traditional[i].style.display = "none";
		}
		else {
			traditional[i].style.display = "block";
		}
	}
}
// @license-end
