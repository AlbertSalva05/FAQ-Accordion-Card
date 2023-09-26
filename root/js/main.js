$(function(){
	$(".faqQuestion").click(function(){
        $(this).toggleClass("faq_acc_active");
        $(this).next().slideToggle(300);
    });
});
