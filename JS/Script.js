// JavaScript Document
function re_direction(where)
{
	window.location=where+"/index.html";
}
function print_Card()
{
	var CreditCards = "";
	CreditCards +="<table class='cards'><tr><th colspan='5'>Tarjetas de Credido</th></tr><tr><th>Numero</th><th>Nombre</th><th>Banco</th><th>Balance</th><th>Fecha de corte</th></tr>";
	var DebitCards="";
	DebitCards +="<table class='cards'><tr><th colspan='4'>Tarjetas de Debito</th></tr><tr><th>Numero</th><th>Nombre</th><th>Banco</th><th>Balance</th></tr>";
	for(var i in tarjetas){
		if (tarjetas[i].TipoTarjeta == "Credito")
			CreditCards +="<tr><td>"+tarjetas[i].NoTarjeta+"</td><td>"+tarjetas[i].Nombre+"</td><td>"+tarjetas[i].Bank+"</td><td>"+tarjetas[i].BalanceDisponible+"</td><td>"+tarjetas[i].FechaCorte+"</td></tr>";
		else
			DebitCards +="<tr><td>"+tarjetas[i].NoTarjeta+"</td><td>"+tarjetas[i].Nombre+"</td><td>"+tarjetas[i].Bank+"</td><td>"+tarjetas[i].BalanceDisponible+"</td></tr>";
	}
	CreditCards+="</table>";
	DebitCards+="</table>";
	document.getElementById('CardsContent').innerHTML=DebitCards + CreditCards;
}