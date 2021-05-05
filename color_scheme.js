const blue_scheme = ['#66b5ff', '#dbeeff'];
const red_scheme = ['#F8AFA6', '#F9F1F0'];
const green_scheme = ['#66ff82', '#e5ffea'];
const yellow_scheme = ['#ffe16b', '#fff5cc'];
const schemes = {"red": red_scheme,
					"blue": blue_scheme,
					"green": green_scheme,
					"yellow": yellow_scheme};
var selected_scheme = yellow_scheme;

function initColorPickerMenu()
{
	document.getElementById("set_red_btn").style.backgroundColor = red_scheme[0];
	document.getElementById("set_green_btn").style.backgroundColor = green_scheme[0];
	document.getElementById("set_blue_btn").style.backgroundColor = blue_scheme[0];
	document.getElementById("set_yellow_btn").style.backgroundColor = yellow_scheme[0];
	const scheme_name = localStorage.getItem('scheme');
	selected_scheme = schemes[scheme_name];
	updateColors();
}

function setColorScheme(scheme)
{
	localStorage.setItem("scheme", scheme);
	selected_scheme = schemes[scheme];
	updateColors();
}

function updateColors()
{
	document.body.getElementsByTagName('header')[0].style.backgroundColor = selected_scheme[0];
	document.body.getElementsByTagName('main')[0].style.backgroundColor = selected_scheme[1];
	document.getElementById('color-picker-btn').style.backgroundColor = selected_scheme[0];
	document.getElementById('color-picker-menu').style.backgroundColor = selected_scheme[1];
}