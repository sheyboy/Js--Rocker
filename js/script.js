var saymyname =  function (name){
	alert ('my name is:'+ name);
}


var car = {
				make: 'VW',
				type: 'Polo',
				color: 'blue',
				isTurnedOn: false,
				numberOfWheels: 4,
				seats: ['seat 1',
						'seat 2',
						'seat 3',
						'seat 4'],

				fly: function(){ alert("fly")},

			
			turnon: function (){



				this.isTurnedOn = true;
			}

			};