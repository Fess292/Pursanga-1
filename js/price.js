/* Инициализация скрипта добавления субтитров к видео

Видео которое должно быть с субтитрами должно иметь класс "avid" и атрибут "data-sub", если на ленде несколько видео с субтитрами то атрибутам "data-sud" должен быть заданы уникальные ключи для каждого видео

Пример:
<video class="avid" data-sub="titan_1" ... ></video>
<video class="avid" data-sub="titan_2" ... ></video>

Все текста и периоды текстов берутся из тега UL с id "video_sub"

у тега LI должен быть обязательно атрибут "data-sub", если на ленде несколько видео с субтитрами то атрибутам "data-sud" должен быть заданы уникальные ключи для каждого видео идентичные ключам в самих видео, в противном случае текст субтитров возмется из первого LI

каждый текст должен быть помещен в отбельный тег SPAN с атрибутами старта показа данного текста "data-sub-start" и окончанием показа данного текста "data-sub-end"
ПРИМЕЧАНИЕ: время должно быть указано в секундах и милисекундах в 1000 разряде через точку, если данный текст субтитра в диапозоне до 10 секунд то перед цифрой не надо ставить 0!

НЕ ПРАВИЛЬНО: data-sub-start="02.133"
ПРАВИЛЬНО:    data-sub-start="2.133"

Пример:

<ul id="video_sub">
  <li data-sub="titan_1">
    <span data-sub-start="0" data-sub-end="2.980">текст 1</span>
    <span data-sub-start="4.563" data-sub-end="10.980">текст 2</span>
    ...
    <span data-sub-start="180.134" data-sub-end="260">текст N</span>
  </li>
  <li data-sub="titan_2">
    <span data-sub-start="2.133" data-sub-end="3.800">текст 1</span>
    <span data-sub-start="3.867" data-sub-end="5.300">текст 2</span>
    ...
    <span data-sub-start="19.667" data-sub-end="23.000">текст N</span>
  </li>
</ul>

*/
var Video_Sub = (function(){
	var __video = function(){
		var video = $('video.avid[data-sub]'),
			subtit = $('ul#video_sub');
		
		if(video.length && subtit.length){
			video.each(function(){
				var init_sud = undefined,
					init_vid = undefined,
					track = $(this)[0].addTextTrack("captions", "English", "en");
				track.mode = "showing";
					
				if($(this).data('sub')!='')init_vid = $(this).data('sub');
				if(subtit.find('li[data-sub="'+ init_vid +'"]').length)init_sud = init_vid;
				if(init_sud !== undefined){
					__subtit(subtit.find('li[data-sub="'+ init_sud +'"]'),track);
				}else{
					__subtit(subtit.find('li:eq(0)'),track);
				}
			});
		}
	}
	
	var __subtit = function($init,track){
		$init.find('span').each(function(e){
			var param = [$(this).data('sub-start'), $(this).data('sub-end'), $(this).text()];
			if(window.VTTCue){
				var __op = new VTTCue(param[0], param[1], '&nbsp;' + param[2] + '&nbsp;');
			}else if(window.TextTrackCue){
				var __op = new TextTrackCue(param[0], param[1], param[2]);
			}
			track.addCue(__op);
		});
	}
	
	var __css = function(){
		$('body').append('<style>::cue {font-family:Arial, "Nimbus Sans L", Helvetica, sans-serif;font-size:18px;text-shadow: 0 1px 1px rgba(0,0,0,0.5),0 -1px 1px rgba(0,0,0,0.5),1px 0 1px rgba(0,0,0,0.5),-1px 0 1px rgba(0,0,0,0.5),1px 1px 1px rgba(0,0,0,0.5),-1px -1px 1px rgba(0,0,0,0.5),1px -1px 1px rgba(0,0,0,0.5),-1px 1px 1px rgba(0,0,0,0.5),3px 3px 1px rgba(0,0,0,0.5),2px 2px 1px rgba(0,0,0,0.5);color:#fff;background:rgba(0,0,0,0);}#video_sub{display:none}</style>');
	}
	
	return {
		init : function(){
			__css();
			__video();
		}
	}
})()

/* окончание скрипта для субтитров, инициализация скрипта происходит в $(document).ready(function(){} */

var lang_locale = "ru",
	price = /{{.*price.*}}/g,
	currency = /{{\s*currency\s*}}/g,
	ifel =/{%.?if.*else.?%}/,
	ef =/{%.?endif.?%}/,
	cdn = 'http://cdn.ahacdu.com/',
	_url = window.location.href.split('/'),
	 _adp = {
      xs:{
        min:0
      },
      sm:{
        min:767
      },
      md:{
        min:991
      },
      lg:{
        min:1199
      }
    };
	if(/\.html/.test(_url[_url.length-1]))delete _url.pop();
	_url=_url.join('/')+'/';
function price_rnd(){return Math.round(Math.random() * 90 + 10);}
window.onload=function(){
	a=document.getElementsByTagName('*');
	for(i=0;i<a.length;i++)
	    if(a[i].tagName!="SCRIPT")
	        for(j=0;j<a[i].childNodes.length;j++){
				b=a[i].childNodes[j];
				if(b.nodeType==3){
					if(ifel.test(b.textContent))b.textContent=b.textContent.replace(ifel, '');
					if(ef.test(b.textContent))b.textContent=b.textContent.replace(ef, '');			
					if(currency.test(b.textContent))b.textContent=b.textContent.replace(currency, "eur");
					if(price.test(b.textContent))b.textContent=b.textContent.replace(price, price_rnd());
				}
			}
}
function _src(a,q){
  var w = window.innerWidth;
  if(q==1){
    for(z in _adp){   	
      for(y in a[0].attributes){
        if(a[0].attributes[y].name == 'data-img-'+z){
            _adp[z].img = a.data('img-'+z);
        }
      }
    }
	if(!_adp.xs.img)_adp.xs.img = a.attr('src').replace(_url,'')
  }
  for(z in _adp){
    if(_adp[z].min<w&&_adp[z].img)a.attr('src',_url+_adp[z].img)
  }
}
$(document).ready(function(){
	if($('.s__of').length){
		$('body').append('<style>\n#s___list{\n\tposition:fixed;\n\ttop:20px;\n\tright:20px;\n\tpadding:5px;\n\tmargin:0;\n\tlist-style:none;\n\tfont-size:0;\n\tbackground:#000;\n\tborder-radius:5px;\n\tz-index:99999\n}\n#s___list:after{\n\tcontent:" ";\n\tclear:both;\n\tdisplay:table;\n}\n#s___list li{\n\tdisplay:inline-block;\n\twidth:50%;\n\ttext-align:center;\n\tfont-size:14px;\n\tborder-radius:5px;\n\tcolor:#fff;\n\tcursor:pointer;\n\ttext-transform:uppercase\n}\n#s___list li:first-child{\n\twidth:100%\n}\n#s___list li.on{\n\tbackground:#fff;\n\tcolor:#000\n}\n.s__hidden{\n\tdisplay:none!important\n}\n</style>\n<ul id="s___list">\n\t<li>Защита</li>\n\t<li class="on">on</li>\n\t<li>off</li>\n</ul>\n');
		$('.s__of').addClass('s__hidden');
		$('body #s___list').on('click', 'li',function(){$(this).addClass('on').siblings().removeClass('on'),($(this).html()=='on')?((!$('.hide-it').is(':visible'))?(location.reload()):'',$('.s__of').addClass('s__hidden'),$('.s__on').removeClass('s__hidden')):($('.s__of').removeClass('s__hidden'),$('.s__on').addClass('s__hidden'))});
	}
	/* Инициализация скрипта отображения видео */
	$('video.avid').each(function() {
      if($(this).data('url')) {
          $(this).html('<source src="' + cdn + $(this).data('url') + '.mp4"><source src="' + cdn + $(this).data('url') + '.webm">');
      }
	});
	/* окончание скрипта отображения видео */
	Video_Sub.init(); //инициализация скрипта субтитров
	$('img[data-adaptiv]').each(function(){
      _src($(this),1);
    });
});
$(window).resize(function(){
	$('img[data-adaptiv]').each(function(){
      _src($(this),0);
    });
});