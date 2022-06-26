$(document).ready(function() {

	var dataRef = new Firebase('https://siteclinica-20ca1-default-rtdb.firebaseio.com/');
	dataRef.on('value', function(snapshot) {
		var t = snapshot.val();
        var count = 0;
        
		for (var key in t) {

			console.log(key);
			if(key === 'eventos') {

				// document.querySelector('#bloco-eventos-article').html( '' );

				if (t.hasOwnProperty(key)) {	
					var _item = t[key];
					console.log(_item);
					var _itemsKey = Object.entries(_item);
	
					for (const [key2, value2] of _itemsKey) {
						console.log(key2, value2);

						if(value2.isAtivo === true) {

							console.log(value2.desc)
							console.log(value2.link)

							var newId = 'medicos'+count;
							var clone = document.querySelector('#medicos-clone').cloneNode( true );
							clone.setAttribute('id', newId);
							
							var img_url = clone.getElementsByClassName("img_url")[0];
							img_url.setAttribute("src", value2.img_url);

							var nome = clone.getElementsByClassName("nome")[0];
							nome.textContent = value2.nome;

							var especialidade = clone.getElementsByClassName("especialidade")[0];
							especialidade.textContent = value2.desc;

	


							document.querySelector('#medicos-clone').appendChild( clone );

						}

					}	  
				}
			}
		}

	});

});