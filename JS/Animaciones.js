// JavaScript Document
/*
	*Developed by franksoft
*/
function cardslayer()
{
	
	document.getElementById('CardsContent').style.transitionDuration="0.8s";
	document.getElementById('CardsContent').style.bottom=0;
	static("CardsContent");
}
function static(id)
{
	setTimeout(document.getElementById(id).style.position="static",870);
}