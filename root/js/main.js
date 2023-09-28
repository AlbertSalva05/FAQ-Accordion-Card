$(function(){
    // onclick function on faqQuestion
    $(".faqQuestion").click(function(){
        // toggle class active on trigger
        $(this).toggleClass("faq_acc_active");
        // displaying of faqPanel
        $(this).next().slideToggle(300);
    });
});
