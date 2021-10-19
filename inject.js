/*
	Vkontakte Video Button ( download )
	(c) 2021 - FreeAngel 
		
		youtube channel : http://www.youtube.com/channel/UC15iFd0nlfG_tEBrt6Qz1NQ
		PLEASE SUBSCRIBE !
		
	github : https://github.com/frxangelz/
*/

videoPage = null;

function GetVideoList(){
	
	var div = document.querySelector('div.VideoPage__video');
	if(!div){ return; }
	
	var sign = div.getAttribute("signed");
	if(sign == 1){ 
		console.log("already processed");
		return; 
	}
	
	div.setAttribute("signed",1);
	
	source = div.querySelectorAll('source[type="video/mp4"]');
	console.log(source.length);
	var videos = [];
	for(var i=0; i<source.length; i++){
		var src = source[i].getAttribute('src');
		if((src) && (src !== '')){ videos.push(src); }	
	}
	
	videoPage = div;
	return videos;
}

function buildBtn(video){

 if(!videoPage) { return; }
 var div_info = document.querySelector('div.VideoPageInfoRow');
 if(!div_info){ 
	console.log('div.VideoPageInfoRow not found !');
	return;
 }

 var div = div_info.querySelector('div.VideoPageInfoRow__views');
 if(!div){
	 console.log('div.VideoPageInfoRow__views not found !');
	 return;
 }
 
 
 var html = div.innerHTML+'&nbsp;';
 for (var i=0; i<video.length; i++){
  html = html + '<a href="'+video[i]+'" target="_blank"><button>v-'+i.toString()+'</button></a>&nbsp;';
 }
 
 div.innerHTML = html;
}


 	   var readyStateCheckInterval = setInterval(function() {
	       
		   if (document.readyState !== "complete") { return; }


		   cur_url = //$(location).attr('href');		   
					 window.location.href;

		   if(cur_url.indexOf("//m.vk.com/") === -1){
				return;
		   }

		   var video = GetVideoList();
		   if(video){

			console.log("got video : "+video.length);
			buildBtn(video);
		   }			   
		   
	 }, 2000);

