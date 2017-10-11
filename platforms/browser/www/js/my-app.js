// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
	swipeBackPage: false,
	swipePanelOnlyClose: true,
	pushState: true,
    template7Pages: true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: false,
});
var subnaview = myApp.addView('.view-subnav');


$(document).ready(function() {
		$("#RegisterForm").validate();
		$("#LoginForm").validate();
		$("#ForgotForm").validate();
		$(".close-popup").click(function() {					  
			$("label.error").hide();
		});
});


$$(document).on('pageInit', function (e) {
		$("#RegisterForm").validate();
		$("#LoginForm").validate();
		$("#ForgotForm").validate();
		$(".close-popup").click(function() {					  
			$("label.error").hide();
		});

	
})
myApp.onPageInit('music', function (page) {
		  audiojs.events.ready(function() {
			var as = audiojs.createAll();
		  });
})
myApp.onPageInit('videos', function (page) {
		  $(".videocontainer").fitVids();
})
myApp.onPageInit('contact', function (page) {
		$("#ContactForm").validate({
		submitHandler: function(form) {
		ajaxContact(form);
		return false;
		}
		});	
})
myApp.onPageInit('form', function (page) {
    $("#CustomForm").validate({
        rules: {         
            selectoptions: {
                required: true
            }
        },
        messages: {
            selectoptions: "Please select one option"
        }
    });
		
})
myApp.onPageInit('blog', function (page) {
 
		$(".posts li").hide();	
		size_li = $(".posts li").size();
		x=4;
		$('.posts li:lt('+x+')').show();
		$('#loadMore').click(function () {
			x= (x+1 <= size_li) ? x+1 : size_li;
			$('.posts li:lt('+x+')').show();
			if(x == size_li){
				$('#loadMore').hide();
				$('#showLess').show();
			}
		});

})

myApp.onPageInit('shop', function (page) {
			
		$('.qntyplusshop').click(function(e){
									  
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val());
			if (!isNaN(currentVal)) {
				$('input[name='+fieldName+']').val(currentVal + 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
			
		});
		$(".qntyminusshop").click(function(e) {
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$('input[name='+fieldName+']').val(currentVal - 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
		});	
  
})
myApp.onPageInit('shopitem', function (page) {
		$(".swipebox").swipebox();	
		$('.qntyplusshop').click(function(e){
									  
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val());
			if (!isNaN(currentVal)) {
				$('input[name='+fieldName+']').val(currentVal + 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
			
		});
		$(".qntyminusshop").click(function(e) {
			e.preventDefault();
			var fieldName = $(this).attr('field');
			var currentVal = parseInt($('input[name='+fieldName+']').val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$('input[name='+fieldName+']').val(currentVal - 1);
			} else {
				$('input[name='+fieldName+']').val(0);
			}
		});	
  
})
myApp.onPageInit('cart', function (page) {
			
    $('.item_delete').click(function(e){
        e.preventDefault();
        var currentVal = $(this).attr('id');
        $('div#'+currentVal).fadeOut('slow');
    });
  
})
myApp.onPageInit('photos', function (page) {
	$(".swipebox").swipebox();
	$("a.switcher").bind("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theproducts = $("ul#photoslist");
		var classNames = $(this).attr('class').split(' ');
		
		
		if($(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid == "view13") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_13_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_12");
				theproducts.addClass("photo_gallery_13");

			}
			
			else if(theid == "view12") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_12_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_12");

			} 
			else if(theid == "view11") {
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_11_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_12");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_11");

			} 
			
		}

	});	
})
myApp.onPageInit('checklist', function (page) {
    var genders = [
        {
            id: '#maleData',
            lists: [
                {
                    label: 'Kıyafet',
                    values: [
                        "Kulüp Tshirt",
                        "Kulüp sweatshirt",
                        "Tshirt",
                        "Pantolon",
                        "Şort",
                        "Hırka",
                        "Sweatshirt",
                        "Çorap",
                        "Şapka/Bandana",
                        "İç çamaşırı",
                        "Deniz/Havuz şortu",
                        "Havlu",
                        "Plaj kıyafeti",
                        "Spor kıyafet",
                        "Takım Elbise",
                        "Smokin"
                    ]
                },
                {
                    label: 'Program',
                    values: [
                        "Şehitlik gezisi için uygun kıyafet",
                        "Şehir gezisi için uygun kıyafet",
                        "Mahalle konseptli parti için uygun kıyafet",
                        "Workshop için uygun kıyafet",
                        "After Party (Gala sonrası) için uygun kıyafet"
                    ]
                },
                {
                    label: 'Ayakkabı',
                    values: [
                        "Spor",
                        "Sandalet",
                        "Terlik",
                        "Gala ayakkabısı",
                        "Açılış toplantısı ayakkabısı"
                    ]
                },
                {
                    label: 'Aksesuar',
                    values: [
                        "Leo rozeti",
                        "Güneş Gözlüğü",
                        "Kemer",
                        "Papyon",
                        "Kravat",
                        "Kol Düğmesi"
                    ]
                },
                {
                    label: 'Muhtelif',
                    values: [
                        "Deodorant",
                        "Parfüm",
                        "Tarak",
                        "Saç köpüğü/Sprey/Jöle",
                        "Tıraş köpüğü",
                        "Şampuan/Saç Kremi",
                        "Vücut jeli",
                        "Lif"
                    ]
                },
                {
                    label: 'Elektronik',
                    values: [
                        "Telefon + Şarj",
                        "Foto Mk. + Şarj",
                        "Powerbank + Şarj",
                        "Tıraş Mk. + Şarj"
                    ]
                },
                {
                    label: 'Hijyenik',
                    values: [
                        "Diş fırçası",
                        "Diş macunu",
                        "Nemlendirici krem",
                        "Lens kabı",
                        "Solüsyon",
                        "Yedek lens",
                        "Yara bandı",
                        "Ağrı kesici",
                        "Muhtelif ilaç",
                        "Makas"
                    ]
                },
                {
                    label: 'Yolculuk',
                    values: [
                        "Uyku bandı",
                        "Kulaklık/Mini hoparlör",
                        "Yolculuk için rahat kıyafet",
                        "Atıştırmalık",
                        "Powerbank"
                    ]
                }
            ]
        },
        {
            id: '#femaleData',
            lists: [
                {
                    label: 'Kıyafet',
                    values: [
                        "Kulüp Tshirt",
                        "Kulüp sweatshirt",
                        "Tshirt",
                        "Pantolon",
                        "Şort",
                        "Hırka",
                        "Sweatshirt",
                        "Çorap",
                        "Şapka/Bandana",
                        "Etek/Elbise",
                        "İç çamaşırı",
                        "Mayo/Bikini",
                        "Havlu",
                        "Pareo/Plaj kıyafeti",
                        "Spor kıyafet",
                        "Gala Elbisesi",
                        "Açılış Toplantısı için kıyafet"
                    ]
                },
                {
                    label: 'Program',
                    values: [
                        "Şehitlik gezisi için uygun kıyafet",
                        "Şehir gezisi için uygun kıyafet",
                        "Mahalle konseptli parti için uygun kıyafet",
                        "Workshop için uygun kıyafet",
                        "After Party (Gala sonrası) için uygun kıyafet",
                    ]
                },
                {
                    label: 'Ayakkabı',
                    values: [
                        "Spor",
                        "Sandalet",
                        "Terlik",
                        "Gala ayakkabısı",
                        "Açılış toplantısı ayakkabısı"
                    ]
                },
                {
                    label: 'Aksesuar',
                    values: [
                        "Leo rozeti",
                        "Gala için takı",
                        "Günlük takı",
                        "Gala için çanta",
                        "Toka (tel/lastik)",
                        "Güneş Gözlüğü",
                        "Kemer"
                    ]
                },
                {
                    label: 'Muhtelif',
                    values: [
                        "Deodorant",
                        "Parfüm",
                        "Tarak",
                        "Makyaj malzemeleri",
                        "Saç köpüğü/Sprey/Jöle",
                        "Şampuan/Saç Kremi",
                        "Vücut jeli",
                        "Lif"
                    ]
                },
                {
                    label: 'Elektronik',
                    values: [
                        "Telefon+Şarj",
                        "Foto mk+Şarj",
                        "Powerbank+Şarj",
                        "Düzleştirici/Maşa"
                    ]
                },
                {
                    label: 'Hijyenik',
                    values: [
                        "Diş fırçası",
                        "Diş macunu",
                        "Makyaj temizleme ürünleri",
                        "Nemlendirici krem",
                        "Oje",
                        "Aseton",
                        "Ped/Günlük ped",
                        "Lens kabı",
                        "Solüsyon",
                        "Yedek lens",
                        "Yara bandı",
                        "Ağrı kesici",
                        "Muhtelif ilaç",
                        "Epilatör",
                        "Cımbız",
                        "Törpü",
                        "Makas"
                    ]
                },
                {
                    label: 'Yolculuk',
                    values: [
                        "Uyku bandı",
                        "Kulaklık/Mini hoparlör",
                        "Yolculuk için rahat kıyafet",
                        "Atıştırmalık",
                        "Powerbank"
                    ]
                }
            ]
        }
    ];

    genders.forEach(function(g, gindex){
        var content = '';

        g.lists.forEach(function(r, rindex){
            content += '<h3>'+ r.label +'</h3>';
            r.values.forEach(function(v, index){
                content += '' +
                    '<div class="form_row">'+
                    '<label class="label-checkbox item-content">'+
                        '<input type="checkbox" data-id="item-'+ gindex +'-'+ rindex +'-'+ index +'" >'+
                        '<div class="item-media">'+
                            '<i class="icon icon-form-checkbox"></i>'+
                        '</div>'+
                        '<div class="item-inner">'+
                            '<div class="item-title">&nbsp;'+ v +'</div>'+
                        '</div>'+
                    '</label>'+
                    '</div>';
            });
            content += '<br />';
        });

        $(g.id).html(content);
    });

    function setupBox(box) {
        var storageId = box.getAttribute("data-id");
        var oldVal    = localStorage.getItem(storageId);
        box.checked = oldVal === "true" ? true : false;

        box.addEventListener("change", function() {
            localStorage.setItem(storageId, this.checked);
        });
    }

    var boxes = document.querySelectorAll("input[type='checkbox']");

    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (box.hasAttribute("data-id")) {
            setupBox(box);
        }
    }

})

myApp.onPageInit('notifications', function (page) {
    var notifications = JSON.parse(localStorage.getItem("notifications"));

    if($.trim(notifications) == ''){
        notifications = [];
    }

    var content = '';

    notifications.reverse();

    notifications.forEach(function(r, index){
        content += '<h5 style="padding-bottom: 0px;" >'+ r.title +'</h5>';
        content += '' +
            '<div class="form_row">'+
                '<label class="label-checkbox item-content">'+
                    '<div class="item-inner">'+
                        '<div class="item-title">'+ r.message +'</div>'+
                    '</div>'+
                '</label>'+
            '</div>';
        content += '<hr style="border-color: #f9f9f9" />';
    });

    if(content == ''){
        content = '<div class="form_row">'+
                    '<label class="label-checkbox item-content">'+
                        '<div class="item-inner">'+
                            '<div class="item-title">Bildiriminiz bulunmamaktadır.</div>'+
                        '</div>'+
                    '</label>'+
                '</div>';
    }

    $('#notification-container').html(content);

})