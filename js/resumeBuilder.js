var name = "Josefrancisco Africano";
var role = "Desarrollador";
var mobile = "+58 414-424181"
var email = "josefrancisco.aat@gmail.com"
var web = "josefranciscoat.com"
var twitter = "@JosefranciscoTw"
var github = "JosefranciscoAT"

var styleName = HTMLheaderName.replace("%data%" , name);
var styleRole = HTMLheaderRole.replace("%data%", role);
var styleMobile = HTMLmobile.replace("%data%" , mobile);
var styleEmail = HTMLemail.replace("%data%", email);
var styleWeb = HTMLblog.replace("%data%" , web);
var styleTwitter = HTMLtwitter.replace("%data%", twitter);
var styleGithub = HTMLgithub.replace("%data%" , github);

var bio = {
	"name": styleName ,
	"role": styleRole ,
	"contacts": {
		"mobile" : styleMobile ,
		"email" : styleEmail ,
		"web" : styleWeb ,
		"social" : {
			"twitter" : styleTwitter ,
			"github" : styleGithub ,
			}
		},
	"bioPic": "images/fry.jpg",
	"welcomeMessge": "Curriculum",
	"skills": ["Ingeniero Electrico", "HTML", "CSS", "Java", "JS", "Android", "Deportista"]
}

var work = {
	"position" : "CEO",
	"employer" : "Josefrancisco Africano",
	"years" : 7 
}


var education = {
	"school" : {
		"name" : "Instituto Educacional JuanXXIII",
		"city" : "Valencia, Carabobo",
		"year" : 2016
	},
	"university" : {
		"name" : "Universidad de Carabobo",
		"city" : "Naguanagua, Carabobo",
		"year" : 2021
	},
	"curses" : {
		"html" : {
			"name" : "HTML & CSS",
			"plataform" : "Codecademy.com",
			"year" : 2013
		},
		"java" : {
			"name" : "JAVA",
			"plataform" : "Codecademy.com",
			"year" : 2016
		}
	}	
}

$("#header").append(bio.name);
$("#header").append(bio.role);

$("#topContacts").prepend(bio.contacts.mobile);
$("#topContacts").prepend(bio.contacts.email);
$("#topContacts").prepend(bio.contacts.web);
$("#topContacts").prepend(bio.contacts.social.twitter);
$("#topContacts").prepend(bio.contacts.social.github);

$("#workExperience").append(work.employer);
$("#workExperience").append(work.position);
$("#workExperience").append(work.years);

$("#education").append(education.school.name);
$("#education").append(education.school.city);
$("#education").append(education.school.year);
$("#education").append(education.university.name);
$("#education").append(education.university.city);
$("#education").append(education.university.year);
$("#education").append(education.curses.html.name);
$("#education").append(education.curses.html.plataform);
$("#education").append(education.curses.html.year);
$("#education").append(education.curses.java.name);
$("#education").append(education.curses.java.plataform);
$("#education").append(education.curses.java.year);

