(function ($) {
    "use strict";

    var $body = $('body');

    $.fn.flash = function(duration, iterations) {
        duration = duration || 1000; // Default to 1 second
        iterations = iterations || 1; // Default to 1 iteration
        var iterationDuration = Math.floor(duration / iterations);
    
        for (var i = 0; i < iterations; i++) {
            this.fadeOut(iterationDuration).fadeIn(iterationDuration);
        }
        return this;
    }

    $.fn.animateClass = function(animationName, callback) {
        var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    }

    $.fn.formatCurrency = function(total) {
        var neg = false;
        if( total < 0 ) {
            neg = true;
            total = Math.abs(total);
        }
        return (neg ? '-' : '') + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
    }

    $.fn.livePrice = function(coin, priceusd) {
        var self = $(this);

        var timeout = parseInt($(this).attr('data-timeout')) || 0;
        var difference = Math.floor(Date.now()) - timeout;

        if (difference > 10000) {
            var price = parseFloat(priceusd);

            self.find('.price').text(self.formatCurrency(price));

            if ( priceusd > parseFloat(self.attr('data-price')) ) {
                if( self.closest('.live-change').length > 0 ) {
                    self.closest('.live-change').animateClass('liveup');
                }else{
                    self.animateClass('liveup');
                }
            }

            if ( priceusd < parseFloat(self.attr('data-price')) ) {
                if( self.closest('.live-change').length > 0 ) {
                    self.closest('.live-change').animateClass('livedown');
                }else{
                    self.animateClass('livedown');
                }
            }

            self.attr('data-price', priceusd);
            self.attr('data-timeout', Math.floor(Date.now()));
        }
    }

    $.fn.uxperConverter = function() {

        var self = this;

        if (this.length === 0) { return; }

        change_from();
        self.find('select[name="coin_from"],input[name="ip_coin_from"]').on('change input keyup', function() {
            change_from();
        });

        self.find('select[name="select_currency"],input[name="ip_coin_to"]').on('change input keyup', function() {
            change_to();
        });

        function change_from() {
            var from = self.find('select[name="coin_from"]').val();
            var to = self.find('select[name="select_currency"]').val();
            var ip_from = self.find('input[name="ip_coin_from"]').val().replace(',','');
            if( from && to > 0 ) {
                var cal_to = parseFloat(from * ip_from / to);
                self.find('input[name="ip_coin_to"]').val($(this).formatCurrency(cal_to));
            }
        }

        function change_to() {
            var from = self.find('select[name="coin_from"]').val();
            var to = self.find('select[name="select_currency"]').val();
            var ip_to = self.find('input[name="ip_coin_to"]').val().replace(',','');
            if( from > 0 ) {
                var cal_from = parseFloat(to * ip_to / from);
                self.find('input[name="ip_coin_from"]').val($(this).formatCurrency(cal_from));
            }
        }
    }

    $.fn.ux_multiply = function(numCopies) {
		var newElements = this.clone();
		for(var i = 1; i < numCopies; i++) {
			newElements = newElements.add(this.clone());
		}
		return newElements;
    };

    $(document).on('ready', function() {

        $( '.uxper-crypto-select2' ).select2();

        var liveprice = $('[data-liveprice="on"]');

        if (liveprice.length > 0) {

            var socket = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');

            socket.addEventListener('message', function(msg) {
                var prices = JSON.parse(msg.data);

                for (var coin in prices) {
                    liveprice.find('[data-live-price="' + coin + '"]').each(function(){
                        $(this).livePrice(coin, prices[coin]);
                    });
                }
            });
        }

        $('.uxper-converter').each(function(){
            $(this).uxperConverter();
        });

    });

    $(window).on('load', function() {

        $('.infinite-ticker').each(function() {

            var listWidth = 0;

            var item = $(this).find('.item');

            if( item.length > 0 ) {
                item.each(function() {
                    listWidth += $(this).innerWidth();
                    var width = $(this).find('.extra-detail').outerWidth();
                    $(this).find('.extra-detail').css('width', width + 'px');
                });
    
                var mult = $(this).innerWidth() / listWidth;
    
                $(this).append('<div class="item-dup"></div>');
    
                if(mult > 0.5){
                    $(this).find('.item-dup').append(item.ux_multiply(Math.ceil(mult)));
                } else {
                    $(this).find('.item-dup').append(item.ux_multiply(1));
                }
                
                $(this).css('width', listWidth);
    
                var itemcount = $(this).find('.item').length;
                var itemsize = listWidth / itemcount;
    
                var speed = $(this).data('speed');
                var duration = itemsize * 10;
                
                if (speed === 200) {
                    duration = 10;
                } else if (speed == 0) {
                    duration = 0;
                } else if (speed > 100) {
                    speed = speed - 100;
                    speed = (speed / 10) * itemsize;
                    duration = duration - speed;
                } else if (speed < 100) {
                    speed = 100 - speed;
                    speed = (speed / 10) * (itemsize * 8);
                    duration = duration + speed;
                }
    
                var speed = (itemcount * duration) / 1000;
                $(this).css('animation-duration',  speed + 's');
    
                $(this).closest('.uxper-ticker').css('visibility', 'visible');
                
                if ( $(this).closest('.uxper-ticker').hasClass('top') ) {
                    $('body').css('padding-top', $(this).closest('.uxper-ticker').height() + 'px');
                    $('#wpadminbar').css('margin-top', $(this).closest('.uxper-ticker').height() + 'px');
                }

                if ( $(this).closest('.uxper-ticker').hasClass('bottom') ) {
                    $('body').css('padding-bottom', $(this).closest('.uxper-ticker').height() + 'px');
                }
            }

        });

    });

})(jQuery);