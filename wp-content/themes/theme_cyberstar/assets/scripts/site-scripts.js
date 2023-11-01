var $ = jQuery;
$('.js-menu-toggle').on('click', function (ev) {
    ev.preventDefault();
    var self = $(this);
    $('.menu-primary-menu-container').toggle();
    $('.menu-state').toggle();

    $('.pll-parent-menu-item > a').siblings('.sub-menu').hide();
});

$('.menu-item-has-children > a').on('click', function (ev) {
    ev.preventDefault();
    var self = $(this);

    if (self.parent().hasClass('pll-parent-menu-item')) {
        $('.menu-primary-menu-container').hide();
        $('.menu-state-open').hide();
        $('.menu-state-closed').show();
    }

    if (self.siblings('.sub-menu').is(':visible')) {
        self.siblings('.sub-menu').hide();
    } else {
        $('.sub-menu').hide();
        self.siblings('.sub-menu').show();
    }
});

$('.js-search-toggle').on('click', function (ev) {
    ev.preventDefault();
    var self = $(this);
    var form = self.siblings('.search-form');
    var field = form.find('.search-field');

    form.toggleClass('shown');

    if (form.hasClass('shown')) {
        field.focus();
    }
});

$('.js-search-submit').on('click', function (ev) {
    var searchField = $('.search-field');
    if (searchField.val() === '') {
        ev.preventDefault();
    }
});

$(".star .option-tip, .star .option-link").on("click", function (ev) {
    ev.preventDefault();
    var self = $(this);
    var optionName = self.data("link");
    var backgroundColor = self.css("background-color");
    var targetOption = ".option-" + optionName;
    var allOptions = $('.option');
    var containerBlock = $(targetOption).parents('.block');
    var allBlocks = $('.block');
    var targetContent = ".option-content.content-" + optionName;
    var contentIntro = $('.content-intro');
    var contents = $('.option-content');

    allOptions.removeClass("current");

    allBlocks.css({"z-index": 1});

    $(targetOption).addClass("current");

    $(containerBlock).css({"z-index": 0});

    contents.hide().removeClass("current");
    contentIntro.hide();
    $(targetContent).fadeIn(400, function () {
        var self = $(this);
        self.addClass("current");
        $('html, body').animate({
            scrollTop: self.offset().top
        }, 0);
    });
});

$(".content-area").find(".close-content").on("click", function (ev) {
    ev.preventDefault();
    var contentIntro = $(".content-intro");
    var optionContent = $(".option-content");
    var options = $('.option');

    optionContent.hide().removeClass("current");
    contentIntro.fadeIn();
    $(options).removeClass("current");
});

$(".star .option-tip, .star .option-link").hover(function () {
    var self = $(this);
    var optionName = self.data("link");
    var option = ".option-" + optionName;
    var optionLink = ".option-link-" + optionName;
    $(option).find(".option-tip").addClass("onhover");
    $(optionLink).addClass("onhover");
}, function () {
    var self = $(this);
    var optionName = self.data("link");
    var option = ".option-" + optionName;
    var optionLink = ".option-link-" + optionName;
    $(option).find(".option-tip").removeClass("onhover");
    $(optionLink).removeClass("onhover");
});

$(".cs-article-permalink").on("click", function (ev) {
    var self = $(this);
    var mask = $(".cs-mask");
    var page = $(".cs-page-container");
    var modal = $(".cs-modal");
    var approveButton = $(".cs-modal-approve");
    var link = self.attr("href");
    var message = self.find('.cs-link-message').html();
    var modalMessage = $('.cs-modal-message');

    if (self.hasClass("cs-external-article")) {
        ev.preventDefault();
        mask.show();
        page.addClass("cs-blur");
        modal.show().addClass("modal-enabled");
        approveButton.attr("data-link", link);
        modalMessage.append(message);
    }
});

$(".cs-mask").on("click", function (ev) {
    ev.preventDefault();
    var self = $(this);
    var page = $(".cs-page-container");
    var modal = $(".cs-modal");
    var approveButton = $(".cs-modal-approve");
    var modalMessage = $('.cs-modal-message');

    self.hide();
    page.removeClass("cs-blur");
    modal.hide().removeClass("modal-enabled");
    approveButton.attr("data-link", "");
    modalMessage.html('');
});

$(".cs-modal-cancel").on("click", function (ev) {
    $(".cs-mask").click();
});

$(".cs-modal-approve").on("click", function (ev) {
    var self = $(this);
    var link = self.attr("data-link");

    var win = window.open(link, '_blank');
    if (win) {
        win.focus();
        $(".cs-mask").click();
    } else {
        alert("Please allow popups for this website");
    }
});

$(document).on("keyup", function (ev) {
    if (ev.key == "Escape") {
        if ($(".cs-modal").hasClass("modal-enabled")) {
            $(".cs-mask").click();
        }
    }
});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function csDebounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

$(window).on("scroll", csDebounce(function () {
    var self = $(this);

    if (768 > self.outerWidth()) {
        if(self.scrollTop() > 60) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    } else {
        $(".back-to-top").fadeOut();
    }
}, 300));

$(".back-to-top").on("click", function (ev) {
    ev.preventDefault();
    $(window).scrollTop(0);
});

$(".social-link").on("click", function (ev) {
    ev.preventDefault();
    var self = $(this);
    var mask = $(".cs-mask");
    var page = $(".cs-page-container");
    var modal = $(".cs-modal");
    var approveButton = $(".cs-modal-approve");
    var link = self.attr("href");
    var message = self.find('.cs-link-message').html();
    var modalMessage = $('.cs-modal-message');

    mask.show();
    page.addClass("cs-blur");
    modal.show().addClass("modal-enabled");
    approveButton.attr("data-link", link);
    modalMessage.append(message);
});