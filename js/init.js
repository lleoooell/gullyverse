var NeohFilterArray = [];
! function(e) {
    "use strict";
    var t = {
        init: function() {
            t.animatedText(), t.imgToSVG(), t.BgImg(), t.headerTrigger(), t.menuFixer(), t.timeLine(), t.movingBlog(), t.navFixer(), t.anchor(), t.movingTextForNav(), t.filterItems(), t.applyFilter(), t.magnific(), t.progressTotop(), t.productModal(), t.contactForm(), t.moreCategories(), t.totop(), t.vegasSlider(), t.heroJarallaxSlider(), t.subscribe()
        },
        subscribe: function() {
            e(".subscribe_form a").on("click", function() {
                var n = e(this).closest(".subscribe_form"),
                    i = n.find("input").val(),
                    a = n.find(".returnmessage"),
                    s = a.data("success"),
                    o = a.data("message");
                return a.empty(), "" === i ? n.find(".empty_notice").slideDown(500).delay(2e3).slideUp(500) : t.validateEmail(i) ? e.post("modal/subscribe.php", {
                    ajax_email: i,
                    ajax_message: o
                }, function(e) {
                    a.append(e), a.append("<span class='contact_success'>" + s + "</span>"), a.slideDown(500).delay(4e3).slideUp(500), n.find("input").val("")
                }) : a.append("<span>" + a.data("invalid-email") + "</span>").slideDown(500).delay(4e3).slideUp(500), !1
            })
        },
        validateEmail: function(e) {
            return /\S+@\S+\.\S+/.test(e)
        },
        vegasSlider: function() {
            e(".neoh_fn_hero .vegas-slide").each(function() {
                var t = e(this),
                    n = [];
                t.find("input").each(function() {
                    n.push({
                        src: e(this).val()
                    })
                }), t.vegas({
                    timer: !1,
                    animation: ["kenburnsUp", "kenburnsLeft", "kenburnsRight"],
                    delay: 7e3,
                    slides: n
                })
            })
        },
        heroJarallaxSlider: function() {
            e(".neoh_fn_hero .swiper-container").each(function() {
                var t = e(this),
                    n = "Y";
                n = "X", new Swiper(t, {
                    loop: !0,
                    speed: 1500,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    slidesPerView: 1,
                    direction: "horizontal",
                    loopAdditionalSlides: 10,
                    watchSlidesProgress: !0,
                    on: {
                        init: function() {
                            this.autoplay.stop()
                        },
                        imagesReady: function() {
                            this.autoplay.start()
                        },
                        progress: function() {
                            for (var t = 0; t < this.slides.length; t++) {
                                var i = this.slides[t].progress * (.5 * this.width);
                                e(this.slides[t]).find(".main_image").css({
                                    transform: "translate" + n + "(" + i + "px)"
                                })
                            }
                        },
                        touchStart: function() {
                            for (var e = 0; e < this.slides.length; e++) this.slides[e].style.transition = ""
                        },
                        setTransition: function(e) {
                            for (var t = 0; t < this.slides.length; t++) this.slides[t].style.transition = e + "ms", this.slides[t].querySelector(".main_image").style.transition = e + "ms"
                        }
                    }
                })
            })
        },
        totop: function() {
            e(".neoh_fn_totop").off().on("click", function(t) {
                t.preventDefault();
                var n = (e(window).scrollTop() - e(window).height()) / 2;
                return n < 500 && (n = 500), n > 1500 && (n = 1500), e("html, body").animate({
                    scrollTop: 0
                }, n), !1
            })
        },
        moreCategories: function() {
            e(".neoh_fn_categories").each(function() {
                var t = e(this);
                if (!t.hasClass("ready")) {
                    t.addClass("ready");
                    var n = t.data("more"),
                        i = t.data("count"),
                        a = t.find("li"),
                        s = t.find("ul"),
                        o = a.outerHeight(!0, !0);
                    o * i < t.find("ul").outerHeight(!0, !0) && (t.append('<a href="#" class="more">' + n + " (" + (a.length - i) + ")</a>"), s.animate({
                        height: o * i + "px"
                    }))
                }
            }), t.showMore()
        },
        showMore: function() {
            e(".neoh_fn_categories .more").off().on("click", function() {
                var t = e(this),
                    n = t.closest(".neoh_fn_categories"),
                    i = n.data("more"),
                    a = n.data("less"),
                    s = n.data("count"),
                    o = n.find("li"),
                    r = n.find("ul"),
                    l = o.outerHeight(!0, !0);
                return t.hasClass("clicked") ? (t.removeClass("clicked"), r.animate({
                    height: l * s + "px"
                }), t.text(i + " (" + (o.length - s) + ")")) : (t.addClass("clicked"), r.animate({
                    height: l * o.length + "px"
                }), t.text(a)), !1
            })
        },
        contactForm: function() {
            e(".contact_form #send_message").on("click", function() {
                var t = e(".contact_form #name").val(),
                    n = e(".contact_form #email").val(),
                    i = e(".contact_form #subject").val(),
                    a = e(".contact_form #message").val(),
                    s = e(".contact_form .returnmessage").data("success");
                return e(".contact_form .returnmessage").empty(), "" === t || "" === n || "" === a ? e(".contact_form div.empty_notice").slideDown(500).delay(2e3).slideUp(500) : e.post("modal/contact.php", {
                    ajax_name: t,
                    ajax_email: n,
                    ajax_subject: i,
                    ajax_message: a
                }, function(t) {
                    e(".contact_form .returnmessage").append(t), e(".contact_form .returnmessage span.contact_error").length ? e(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500) : (e(".contact_form .returnmessage").append("<span class='contact_success'>" + s + "</span>"), e(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)), "" === t && e("#contact_form")[0].reset()
                }), !1
            })
        },
        productModal: function() {
            var t = e(".neoh_fn_modal.product_modal");
            e(".neoh_fn_drops .item a").off().on("click", function() {
                var n = e(this).closest(".item"),
                    i = n.data("modal-image"),
                    a = n.data("modal-title"),
                    s = n.data("modal-description"),
                    o = n.data("modal-opensea-url"),
                    r = n.data("modal-discord-url");
                return o || (o = ""), r || (r = ""), t.find(".buttons a").removeClass("disable"), "" === o ? t.find(".opensea").addClass("disable") : t.find(".opensea").attr("href", o), "" === r ? t.find(".discord").addClass("disable") : t.find(".discord").attr("href", r), t.find(".img_item").html('<img src="' + i + '" />'), t.find(".neoh_fn_title .fn_title").text(a), t.find(".desc p").text(s), t.addClass("opened"), !1
            }), t.find(".modal_closer a").off().on("click", function() {
                return t.removeClass("opened"), !1
            })
        },
        progressTotop: function() {
            var t = window.pageYOffset,
                n = document.body.clientHeight,
                i = parseInt(t / (n - window.innerHeight) * 300),
                a = e(".neoh_fn_totop");
            t > 0 ? a.addClass("active") : a.removeClass("active"), a.find(".stroke-solid").css("stroke-dashoffset", 300 - i)
        },
        magnific: function() {
            e(".popup-youtube, .popup-vimeo").each(function() {
                e(this).magnificPopup({
                    disableOn: 700,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !1,
                    fixedContentPos: !0,
                    callbacks: {
                        open: function() {
                            e.magnificPopup.instance.close = function() {
                                e.magnificPopup.proto.close.call(this)
                            }
                        }
                    }
                })
            })
        },
        isotopeCollection: function() {
            e(".grid").isotope({
                itemSelector: "li",
                layoutMode: "fitRows"
            })
        },
        applyFilter: function() {
            t.isotopeCollection(), e(".neoh_fn_filters .checkbox").off().on("click", function() {
                var n = e(this),
                    i = n.closest(".neoh_fn_collection"),
                    a = i.find(".neoh_fn_result_box"),
                    s = n.data("id"),
                    o = n.data("category"),
                    r = n.find(".text").text(),
                    l = a.find(".filter_count span");
                if (n.hasClass("selected")) {
                    n.removeClass("selected"), i.find('.result_item[data-id="' + s + '"]').remove(), 0 === a.find(".result_item").length && a.find(".clear_all").remove(), n.find('input[type="checkbox"]').prop("checked", ""), l.text(parseInt(l.text()) - 1);
                    var c = NeohFilterArray.indexOf(s); - 1 !== c && NeohFilterArray.splice(c, 1)
                } else n.addClass("selected"), 0 === a.find(".result_item").length && a.append('<a href="#" class="clear_all">Clear All</a>'), a.find(".clear_all").before('<div class="result_item" data-id="' + s + '"><a href="#" title="Remove Filter">' + o + ": <span>" + r + '</span><img src="svg/cancel.svg" alt="" class="fn__svg"></a></div>'), n.find('input[type="checkbox"]').prop("checked", "checked"), l.text(parseInt(l.text()) + 1), NeohFilterArray.push(s), t.imgToSVG(), t.removeFilter();
                return t.recallGridAfterFiltering(), !1
            }), t.removeFilter()
        },
        recallGridAfterFiltering: function(t) {
            var n = e(".grid").isotope({
                itemSelector: "li",
                layoutMode: "fitRows"
            });
            if ("clear" === t) return n.isotope({
                filter: "*"
            }), NeohFilterArray = [], !1;
            var i = "";
            0 === NeohFilterArray.length ? i = "*" : e.each(NeohFilterArray, function(e, t) {
                i += ".id" + t
            }), console.log(NeohFilterArray), n.isotope({
                filter: i
            })
        },
        removeFilter: function() {
            e(".neoh_fn_result_box .result_item a").off().on("click", function() {
                var n = e(this),
                    i = n.closest(".neoh_fn_collection"),
                    a = n.closest(".result_item"),
                    s = i.find(".neoh_fn_result_box"),
                    o = a.data("id"),
                    r = s.find(".filter_count span");
                a.remove(), i.find('.neoh_fn_filters .checkbox[data-id="' + o + '"]').removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), r.text(parseInt(r.text()) - 1), 0 === s.find(".result_item").length && s.find(".clear_all").remove();
                var l = NeohFilterArray.indexOf(o);
                return -1 !== l && NeohFilterArray.splice(l, 1), t.recallGridAfterFiltering(), !1
            }), e(".neoh_fn_result_box .clear_all").off().on("click", function() {
                var n = e(this),
                    i = n.closest(".neoh_fn_collection"),
                    a = i.find(".neoh_fn_filters"),
                    s = i.find(".neoh_fn_result_box");
                return s.find(".filter_count span").text(0), s.find(".result_item").remove(), n.remove(), a.find(".checkbox").removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), t.recallGridAfterFiltering("clear"), !1
            })
        },
        filterItems: function() {
            e(".filter_item__header a").off().on("click", function() {
                return e(this).closest(".filter_item").toggleClass("closed"), !1
            })
        },
        movingTextForNav: function() {
            var t = e(".nav_overlay");
            if (t.length) {
                e(".neoh_fn_moving_text").length || e("body").append('<div class="neoh_fn_moving_text">Close</div>');
                var n = e(".neoh_fn_moving_text");
                t.on("mouseenter", function(e) {
                    n.addClass("active"), n.css({
                        left: e.clientX + 15 + "px",
                        top: e.clientY + 15 + "px"
                    })
                }).on("mouseleave", function() {
                    n.removeClass("active")
                }).on("mousemove", function(e) {
                    n.css({
                        left: e.clientX + 15 + "px",
                        top: e.clientY + 15 + "px"
                    })
                })
            }
        },
        anchor: function() {
            e(".neoh_fn_down").on("click", function() {
                var t = e(this).attr("href");
                if ((this.pathname === window.location.pathname || -1 !== t.indexOf("#")) && e(t).length) return e([document.documentElement, document.body]).animate({
                    scrollTop: e(t).offset().top
                }, 600), !1
            })
        },
        navFixer: function() {
            var t = e(".neoh_fn_nav .nav_footer").outerHeight();
            e(".neoh_fn_nav .nav_content").css({
                height: e(window).height() - t + "px"
            })
        },
        movingBlog: function() {
            if (e(".neoh_fn_moving_blog").length) {
                e(".neoh_fn_moving_box").length || e("body").append('<div class="neoh_fn_moving_box">');
                var t = e(".neoh_fn_moving_box"),
                    n = e(".neoh_fn_moving_blog .item");
                n.on("mouseenter", function(i) {
                    var a = e(this);
                    if (!a.hasClass("active")) {
                        n.removeClass("active"), a.addClass("active"), t.addClass("active");
                        var s = a.find(".moving_img").attr("src");
                        t.css({
                            backgroundImage: "url(" + s + ")"
                        }), t.css({
                            left: i.clientX + 15 + "px",
                            top: i.clientY + 15 + "px"
                        })
                    }
                }).on("mouseleave", function() {
                    n.removeClass("active"), t.removeClass("active")
                }).on("mousemove", function(e) {
                    t.css({
                        left: e.clientX + 15 + "px",
                        top: e.clientY + 15 + "px"
                    })
                })
            }
        },
        timeLine: function() {
            var n = e(".neoh_fn_timeline .timeline_item"),
                i = e(".neoh_fn_timeline .progress_line"),
                a = e(".neoh_fn_timeline .progress_line li"),
                s = e(".neoh_fn_timeline .progress_line .active"),
                o = e(".neoh_fn_timeline .progress_line .active_line"),
                r = e(".neoh_fn_timeline .progress_line a");
            t.timelineClasses(n, a, "initial"), e.each(a, function(t, n) {
                e(n).find("a").css({
                    left: 88 + 184 * t + "px"
                })
            }), o.css({
                width: 110 + 230 * s.index() + s.find("a").width() / 2 + "px"
            }), i.css({
                width: 220 + 230 * (a.length - 1) + a.last().find("a").width() / 2 + "px"
            }), r.off().on("click", function() {
                var i = e(this),
                    s = i.parent();
                if (!s.hasClass("active")) {
                    var r = i.closest(".neoh_fn_timeline"),
                        l = s.data("index");
                    t.timelineClasses(n, a, l), a.removeClass("active"), s.addClass("active"), o.css({
                        width: 110 + 230 * (l - 1) + i.width() / 2 + "px"
                    }), n.removeClass("active"), r.find('.timeline_item[data-index="' + l + '"]').addClass("active")
                }
                return !1
            });
            var l = 0,
                c = !0,
                d = !0,
                f = e(".neoh_fn_timeline .nav_prev"),
                m = e(".neoh_fn_timeline .nav_next");
            m.off().on("click", function() {
                return (l += -460) < i.parent().width() - i.width() ? (l = i.parent().width() - i.width(), c = !1) : c = !0, l < 0 && (d = !0), d ? d && f.removeClass("inactive") : f.addClass("inactive"), c ? c && m.removeClass("inactive") : m.addClass("inactive"), i.css({
                    transform: "translateX(" + l + "px)"
                }), !1
            }), f.off().on("click", function() {
                return c = !0, m.removeClass("inactive"), (l += 460) > 0 ? (l = 0, d = !1) : d && (d = !0), d ? f.removeClass("inactive") : f.addClass("inactive"), i.css({
                    transform: "translateX(" + l + "px)"
                }), !1
            })
        },
        timelineClasses: function(t, n, i) {
            var a, s = !1;
            e.each(t, function(t, n) {
                if (e(n).removeClass("previous next"), "initial" === i) {
                    if (e(n).hasClass("active")) return void(s = !0)
                } else if (e(n).data("index") === i) return void(s = !0);
                s ? e(n).addClass("next") : e(n).addClass("previous")
            }), s = !1, a = "initial" === i ? e(".neoh_fn_timeline .progress_line .active").data("index") : i, e.each(n, function(t, n) {
                if (e(n).removeClass("previous next").find(".circle").css({
                        filter: "none"
                    }), "initial" === i) {
                    if (e(n).hasClass("active")) return void(s = !0)
                } else if (e(n).data("index") === i) return void(s = !0);
                s ? e(n).addClass("next") : e(n).addClass("previous").find(".circle").css({
                    filter: "brightness(" + 100 * (t + 1) / a + "%)"
                })
            })
        },
        menuFixer: function() {
            var t = e(".neoh_fn_header");
            e(window).scrollTop() > 150 ? t.addClass("fixer") : t.removeClass("fixer")
        },
        animatedText: function() {
            e(".fn_animated_text").each(function() {
                var t = e(this),
                    n = t.text().split(""),
                    i = t.data("wait");
                i || (i = 0);
                var a = t.data("speed");
                a || (a = 4), a /= 100, t.html("<em>321...</em>").addClass("ready"), t.waypoint({
                    handler: function() {
                        t.hasClass("stop") || (t.addClass("stop"), setTimeout(function() {
                            t.text(""), e.each(n, function(e, n) {
                                var i = document.createElement("span");
                                i.textContent = n, i.style.animationDelay = e * a + "s", t.append(i)
                            })
                        }, i))
                    },
                    offset: "90%"
                })
            })
        },
        headerTrigger: function() {
            var t = e(".neoh_fn_header .trigger"),
                n = e(".nav_overlay"),
                i = e(".neoh_fn_nav"),
                a = i.find(".trigger"),
                s = e(".neoh_fn_nav .nav_menu a"),
                o = e(".neoh_fn_nav .nav_buttons"),
                r = e(".neoh_fn_nav .nav_footer"),
                l = e(".neoh_fn_nav .nav_menu > ul > li");
            e.each(l, function(t, n) {
                e(n).css({
                    transform: "translateX(" + 30 * (t + 1) + "px)",
                    opacity: 0
                })
            }), t.on("click", function() {
                return t.hasClass("is-active") || (t.addClass("is-active"), i.find(".trigger").addClass("is-active"), n.addClass("go"), i.addClass("go"), setTimeout(function() {
                    e.each(l, function(t, n) {
                        setTimeout(function() {
                            e(n).css({
                                transform: "translateX(0px)",
                                opacity: 1
                            })
                        }, 200 * t)
                    })
                }, 2e3), setTimeout(function() {
                    o.addClass("ready"), r.addClass("ready")
                }, 2200 + 200 * l.length)), !1
            }), a.on("click", function() {
                return a.hasClass("is-active") && (e.each(l, function(t, n) {
                    e(n).css({
                        transform: "translateX(" + 30 * (t + 1) + "px)",
                        opacity: 0
                    })
                }), a.removeClass("is-active"), t.removeClass("is-active"), n.removeClass("go"), i.removeClass("go"), o.removeClass("ready"), r.removeClass("ready")), !1
            }), n.on("click", function() {
                return t.hasClass("is-active") && (e.each(l, function(t, n) {
                    e(n).css({
                        transform: "translateX(" + 30 * (t + 1) + "px)",
                        opacity: 0
                    })
                }), t.removeClass("is-active"), a.removeClass("is-active"), n.removeClass("go"), i.removeClass("go"), o.removeClass("ready"), r.removeClass("ready")), !1
            }), s.off().on("click", function() {
                var s = e(this),
                    c = s.siblings(".sub-menu"),
                    d = s.parent();
                return c.length ? (d.hasClass("opened") ? (d.removeClass("opened"), c.slideUp()) : (d.addClass("opened"), c.slideDown(), d.siblings(".opened").removeClass("opened").find(".sub-menu").slideUp()), !1) : (s.closest(".menu-item").addClass("active"), a.hasClass("is-active") && (e.each(l, function(t, n) {
                    e(n).hasClass("active") || e(n).css({
                        transform: "translateX(" + 30 * (t + 1) + "px)",
                        opacity: 0
                    })
                }), o.removeClass("ready"), r.removeClass("ready"), setTimeout(function() {
                    a.removeClass("is-active"), t.removeClass("is-active"), n.removeClass("go"), i.removeClass("go")
                }, 500), setTimeout(function() {
                    window.open(s.attr("href"), "_self")
                }, 1500)), !1)
            })
        },
        imgToSVG: function() {
            e("img.fn__svg").each(function() {
                var t = e(this),
                    n = t.attr("class"),
                    i = t.attr("src");
                e.get(i, function(i) {
                    var a = e(i).find("svg");
                    void 0 !== n && (a = a.attr("class", n + " replaced-svg")), t.replaceWith(a)
                }, "xml")
            })
        },
        BgImg: function() {
            e("*[data-bg-img]").each(function() {
                var t = e(this),
                    n = t.attr("data-bg-img"),
                    i = t.data("bg-img");
                void 0 !== n && t.css({
                    backgroundImage: "url(" + i + ")"
                })
            })
        }
    };
    e(document).ready(function() {
        t.init(), setTimeout(function() {
            t.isotopeCollection()
        }, 150)
    }), e(window).on("resize", function() {
        t.navFixer(), t.progressTotop()
    }), e(window).on("load", function() {
        t.isotopeCollection(), setTimeout(function() {}, 10)
    }), e(window).on("scroll", function() {
        t.menuFixer(), t.progressTotop()
    })
}(jQuery);