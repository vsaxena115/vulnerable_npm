export default class DOM_Modifier {
 	constructor(id,name) {
 	this.name = name;
    this.id = id;
 	}	
    greetUser(){
        document.getElementById(this.id).innerHTML="<div> Welcome"+name+"</div>";
    } 
}
