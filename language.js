var lang_selected = 0;
var lang_list = ["English", "Simplified", "Traditional"];

function ChangeLang() {
	var page = parent.document
	var english = page.getElementsByClassName("English");
	var simplified = page.getElementsByClassName("Simplified");
	var traditional = page.getElementsByClassName("Traditional");

	lang_selected = (lang_selected + 1) % lang_list.length;

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

