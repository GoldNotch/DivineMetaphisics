const blue_scheme = ['#A0E7E5', '#ebfaf9'];
const red_scheme = ['#ffb3bf', '#ffe5ea'];
const green_scheme = ['#B4F8C8', '#e8fdee'];
const yellow_scheme = ['#fadeb3', '#fdf5e7'];
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
	if (scheme_name)
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