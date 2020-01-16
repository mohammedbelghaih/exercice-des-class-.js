class Personne{
	constructor(nom, prenom, date, lieu, telephone, adresse){
		this.nom = nom;
		this.prenom = prenom;
		this.date = date;
		this.lieu = lieu;
		this.telephone = telephone;
		this.adresse = adresse;
	}
}

function submit(){
	let P1 = new Personne(
		document.getElementById("nom").value,
		document.getElementById("prenom").value,
		document.getElementById("date").value,
		document.getElementById("lieu").value,
		document.getElementById("phone").value,
		document.getElementById("adresse").value

	);

document.getElementById("tb").innerHTML += "<tr><td>" + P1.nom + "</td><td>" + P1.prenom + "</td><td>" + P1.date +"</td><td>"+P1.lieu + "</td><td>" + P1.phone + "</td><td>" + P1.adresse + "</td></tr>";
}
