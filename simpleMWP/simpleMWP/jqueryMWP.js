import { deleterPost } from "../../js/helpers/deletePost.js";

const cssEl = document.createElement('link');
document.getElementsByTagName('head')[0].appendChild(cssEl);
cssEl.rel = 'stylesheet';
cssEl.href = 'simpleMWP/simpleMWP/stylesMWP.css';

(function($) {
  let settings = {
    duration: 10000,
    backgroundColor: '#7ac7f8',
    title: 'Subscribe',
    message: 'Subscribe to this blog and be the first to know about updates.',
    height: 200,
    width: 400,
    area: 'close',
    success: {
      backgroundColor: 'green',
      title: 'Success',
      message: 'SUCCESS',
      height: 200,
      width: 400,
      area: 'unclose',
      button: 0
    }
  };
  let methods = {
    removeEventAndWindow: function() {
      $('body').off('click keydown', methods.delegationRemoveWindow);
      $('.jquery-modal').children().remove();
    },
    delegationRemoveWindow: function(event) {
      let target = event.target.className;
      if (target === 'btnCancel') {
        console.log('Cancel');
        methods.removeEventAndWindow();
      } else if (target === 'btnClose') {
        console.log('Close');
        methods.removeEventAndWindow();
      } else if (target === 'btnOK') {
        console.log('Ok');
        deleterPost(target)
        methods.removeEventAndWindow();
      } else if (target === 'btnOkSuccess') {
        console.log('btnOkSuccess');
        methods.removeEventAndWindow();
      }
      else if (target === 'close') {
        console.log('Close');
        methods.removeEventAndWindow();
      } else if (event.which === 27) {
        console.log('Close');
        methods.removeEventAndWindow();
      }
    },
    init: function(options) {
      settings = $.extend(settings, options);
      $('body').on('click keydown', methods.delegationRemoveWindow);
      return this.each(function() {
        $(this).css({
          // position: settings.position,
          //  backgroundColor: settings.backgroundColor
        }).append(methods.createWindow($(this)));
      });
    },
    createWindow: function(parent) {
      let wrapWindow = $('<div></div>')
        .addClass(settings.area)
        .height($(window).height())
        .width($(window).width())
        .css({
          position: 'fixed',
          top: '0',
          left: '0',
          'backdrop-filter': 'blur(3px)',
        });
      let windowContent = $('<div></div>')
        .addClass('windowContentMWP')
        .height(settings.height)
        .width(settings.width);
      let btnClose = $('<button>X</button>')
        .addClass('btnClose');
      let title = $(`<p><b>${settings.title}</b></p>`).css({
        'margin': 0,
        'padding': 3,
        'color': '#222222',
        'font-size': 17,
        'text-align': 'left',
      });
      let rowWindow = $('<div></div>')
        .addClass('rowWindow')
        .height(23)
        .append(title);
      let message = $(`<h3>${settings.message}</h3>`)
        .css({
          'margin': 0,
          'padding': 25,
          'color': 'white',
          'font-size': 18,
        });
      let wrapContentWindow = $('<div></div>')
        .addClass('wrapContentWindow')
        .height($(windowContent).height() - $(rowWindow).height() - 2)
        .css({
          'background-color': settings.backgroundColor,
        })
        .append(message)
        .on('click', function(evt) {
          if (evt.target.className === 'btnOkSuccess') {
            $(document).trigger('success');
          }
        });
      let btnOK = $('<button>OK</button>')
        .addClass('btnOK');
      let btnOkSuccess = $('<button>OK</button>')
        .addClass('btnOkSuccess');
      let btnCancel = $('<button>Cancel</button>')
        .addClass('btnCancel');
      if (settings.button === 2) {
        return wrapWindow.append(windowContent.append(rowWindow.append(btnClose))
          .append(wrapContentWindow
            .append(btnOK)
            .append(btnCancel)
          ));
      } else if (settings.button === 1) {
        return wrapWindow.append(windowContent.append(rowWindow.append(btnClose))
          .append(wrapContentWindow.append(btnOkSuccess)));
      } else {
        return wrapWindow.append(windowContent.append(rowWindow)
            .append(wrapContentWindow));
      }
    },
  };

  $.fn.simpleMWP = function(action) {
    let setingsUser = action;
    let self = this;
    $('.jquery-modal').on('click', function(event) {
      if (event.target.className.includes('jquery-modal')) {
        if (methods[action]) {
          return methods[action].apply(self, [...arguments]);
        } else if (typeof action === 'object' || !action) {
          return methods.init.apply(self, $(setingsUser));
        } else {
          console.info(`Action ${action} not found in this plugin`);
          return self;
        }
      }
    });
    $(document).on('success', function(event) {
      setTimeout(() => {
        if (methods[action]) {
          return methods[action].apply(self, [...arguments]);
        } else if (typeof action === 'object' || !action) {
          setTimeout(() => {
            methods.removeEventAndWindow();
          }, 1000);
          return methods.init.apply($(self[0]), [settings.success]);
        } else {
          console.info(`Action ${action} not found in this plugin`);
          return self;
        }
      }, 500);
    });
    let numLoadsHome = parseInt(sessionStorage.getItem('pageLoadsHome'));
    let numLoadsBlog = parseInt(sessionStorage.getItem('pageLoadsBlog'));
    if (-1 < location.href.indexOf('blog.html')) {
      if (isNaN(numLoadsBlog) || numLoadsBlog <= 0) {
        sessionStorage.setItem('pageLoadsBlog', '1');
      } else {
        sessionStorage.setItem('pageLoadsBlog', numLoadsBlog + 2);
      }
    } else if (-1 < location.href.indexOf('index.html')) {
      if (isNaN(numLoadsHome) || numLoadsHome <= 0) {
        sessionStorage.setItem('pageLoadsHome', '1');
      } else {
        sessionStorage.setItem('pageLoadsHome', numLoadsHome + 2);
      }
    }
    let blog = sessionStorage.getItem('pageLoadsBlog');
    let home = sessionStorage.getItem('pageLoadsHome');
    if (blog <= 1 && (home <= 1 || blog === null)) {
      setTimeout(() => {
        if ($('.close')[0] === undefined) {
          if (methods[action]) {
            return methods[action].apply(self, [...arguments]);
          } else if (typeof action === 'object' || !action) {
            return methods.init.apply(self, $(setingsUser));
          } else {
            console.info(`Action ${action} not found in this plugin`);
            return self;
          }
        }
      }, settings.duration);
    }
  };
})(jQuery);