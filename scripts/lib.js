		$(document).ready(function() {
			
			$('#wait').hide();
			
            function onShake() {
				$('#rep').hide();
				$('#wait').stop().fadeIn('slow').delay(2000).fadeOut('fast', function(){
					$('#rep').empty().append(rand()).fadeIn('slow');
				});
            }
			
			function rand(){
				var rep=new Array(
					"Per quanto posso vedere, sì",
					"È certo",
					"È decisamente così",
					"Molto probabilmente",
					"Le prospettive sono buone",
					"I segni indicano di sì",
					"Senza alcun dubbio",
					"Sì",
					"Assolutamente sì",
					"Ci puoi contare",
					"È difficile rispondere, prova di nuovo",
					"Rifai la domanda più tardi",
					"Meglio che non risponda ora",
					"Non posso predirlo ora",
					"Concentrati e rifai la domanda",
					"Non ci contare",
					"La mia risposta è no",
					"Le mie fonti dicono di no",
					"Le prospettive non sono buone",
					"Molto incerto"
				);
				
				var x=rep.length;
				
				return rep[Math.floor(x * (Math.random() % 1))];
			}
			
            $.shake({
                //debug: "#debug",
                supported: "#supported",
				violence: 3.0,      // single shake sensitivity
				debounce: 500,		// delay between shake events (in ms)
                callback: function() {
                    onShake();
                }
            });
        });