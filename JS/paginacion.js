$(document).ready(function(){
	$('.tabs li a:first').addClass('active');
	$('.pagina').hide();
	$('.pagina:first').show();

	$('.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.pagina').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});