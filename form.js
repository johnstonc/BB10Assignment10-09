//JavaScript Document

	

	function check(input) {
  		if (input.value != document.getElementById('email').value) {
    input.setCustomValidity('Emails do not match!');
  			} else {
    input.setCustomValidity('');
  		}
	}


	function toggle(obj) {
		var x=parseInt(obj);
		
		for (var i=1;i<5;i++){
			if (i==x) {document.querySelector('#subType'+x).style.display="block";}
				else {document.querySelector('#subType'+i).style.display="none";}
			}
	}


	function addBtn(obj) {
		var x=parseInt(obj);
		if(x!=0){document.querySelector('#save').style.display="block";}
			else{document.querySelector('#save').style.display="none";}
	}

	function displayMsg() {
		if (document.querySelector('#email2').value == document.querySelector('#email').value) {

			name=document.querySelector('#first').value + ' ' + document.querySelector('#last').value;
			var petType;
			var petSubType;
			switch (parseInt(document.querySelector('#petType').value)){
				case 1:
					petType='Dog';
					switch (parseInt(document.querySelector('#subType1').value)){
						case 1:
							petSubType='Puppy';
							break;
						case 2:
							petSubType='Young Adult';
							break;
						case 3:
							petSubType='Mature';
							break;
					}
					break;
				case 2:
					petType='Cat';
					switch (parseInt(document.querySelector('#subType2').value)){
						case 1:
							petSubType='Kitten';
							break;
						case 2:
							petSubType='Young Adult';
							break;
						case 3:
							petSubType='Mature';
							break;
					}
					break;
				case 3:
					petType='Reptile';
					switch (parseInt(document.querySelector('#subType1').value)){
						case 1:
							petSubType='Snake';
							break;
						case 2:
							petSubType='Lizard';
							break;
						case 3:
							petSubType='Turtle';
							break;
					}
					break;
				case 4:
					petType='Other';
					petSubType=document.querySelector('#subType4').value;
					break;
			}
			
			email=document.querySelector('#email').value;
			pets=document.querySelector('#numberPets').value;
			alert('Success! ' + name + ' you have been entered into the ' + petType + ' draw specifically for '+ petSubType+ ' food. You have indicated that there are ' + pets + ' pets in your home. You will be contacted at ' + email + ' with the draw results. Good luck!');
		}
	}




