function Boton2Frames($img, $img_w, $img_h, $callback, $facetor_scale){

	var self = this
	this.main = document.createElement('div');
	this.main.className = 'Boton2Frames'

	$(this.main).css("cursor", "pointer");
	
	$(this.main).append('<img src="'+$img+'" width="'+($img_w)+'" height="'+($img_h)+'"  />')

	// hakc
	var ext_array = $img.split('.');
	var ext = ext_array[ext_array.length-1]
	if(ext == 'png') $(this.main).find('img').css('-webkit-backface-visibility', 'hidden');


		
	$(this.main).css("width", $img_w);
	$(this.main).css("height", $img_h/2); 
	$(this.main).css("cursor", "pointer");

	var habil = true;

	if(es_touch()){

		$(this.main).bind("touchend", do_mouseout);
		//$(this.main).bind("touchend", do_click);
		$(this.main).bind("touchstart", do_mouseover);
		$(this.main).bind("touchstart", do_touchstart);


	}else{

		$(this.main).bind("click", do_click);
		$(this.main).bind("mouseout", do_mouseout);
		$(this.main).bind("mouseover", do_mouseover);
		
	}

	this.habil = function($b){
		
		habil =  $b
		if($b) {
			$(this.main).css("cursor", "pointer");
			$(this.main).css({ opacity: 1 });
		}
		else{
		   $(this.main).css("cursor", "default");
		   $(this.main).css({ opacity: .3 });
		}

	}
	
	function do_touchstart(){

	
		setTimeout(function (){

			do_click()
			do_mouseout()
			
		}, 200)
	}

	function do_click(){

		if(habil) $callback();
		document.activeElement.blur();
		$("input").blur();
	}
	
	function do_mouseover(){
		//if(habil)
			$(self.main).find('img').css("top", -($img_h/2));
	}
	
	function do_mouseout(){
		
		//if(habil)
			$(self.main).find('img').css("top",0);
		
	}

	this.getValor = function(){

		return $(this.main).val()

	}

}