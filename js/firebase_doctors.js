var dataRef = new Firebase('https://siteclinica-20ca1-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        if(key === 'medicos') {

            var _itemsKey = Object.entries(valor);
    
            count++;

            for (const [key2, value2] of _itemsKey) {
                console.log(key2, value2);
                
				var newId = 'medicos'+count;
				var clone = document.querySelector('#medicos').cloneNode( true );
				clone.setAttribute('id', newId);
							
				var img_url = clone.getElementsByClassName("img_url")[0];
				img_url.setAttribute("src", value2.img_url);

			    var nome = clone.getElementsByClassName("nome")[0];
				nome.textContent = value2.nome;

				var especialidade = clone.getElementsByClassName("especialidade")[0];
				especialidade.textContent = value2.especialidade;

                var insta = clone.getElementsByClassName("insta")[0];
                insta.setAttribute("href", value2.insta);
				

	


				document.querySelector('#medicos-clone').appendChild( clone );

            }
    
    
                
    
        
        }

        


    }

});
