/*lighttabs*/
(function($){
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;
			
			showPage = function(i){
				$(tabs).children("div").children("div").hide();
				$(tabs).children("div").children("div").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("active");
				$(tabs).children("ul").children("li").eq(i).addClass("active");
			}

			showPage(0);
			
			$(tabs).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;
			});
			
			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});
		};
		return this.each(createTabs);
	};
})(jQuery);


$(function() {

	$('.h-nav__button').on('click', function() {
		$('.h-nav').slideToggle();
		return false;
	});

	$('.p-vid__item-v1 .p-vid__link').on('click', function() {
		$('.p-vid__item-v2').removeClass('active');
		$('.p-vid__item-v1').addClass('active');
		$('.v2').hide();
		$('.v1').show();
		return false;
	});
	$('.p-vid__item-v2 .p-vid__link').on('click', function() {
		$('.p-vid__item-v1').removeClass('active');
		$('.p-vid__item-v2').addClass('active');
		$('.v1').hide();
		$('.v2').show();
		return false;
	});

	$('.page__p-tabs').lightTabs();

	$('.h-phone__btn').fancybox();
});