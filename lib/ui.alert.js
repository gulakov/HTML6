

  window.alert = function(message, alertclass, container, autofade) {
    var alert = $('<div class="alert-' + (alertclass || "info") + '">' +
      (autofade ? '' : '<span class="alert-close">×</span>') + (message || "") + '</div>');

    container = container || 'body';
    $(container).css("position", "relative");
    $($(container + ">.alert-position")[0] ||
      $("<div class='alert-position'>").prependTo(container)).prepend(alert);

    if (autofade)
      alert.hide().fadeIn(300).delay(1500).closeAlert()
    else
      alert.find('.alert-close').click(function() {
        $(this).parent().closeAlert()
      });

     return alert
  }
  jQuery.fn.closeAlert = function() {
    this.animate({
      "opacity": 0,
      "margin-top": "-50px",
      "display": "none"
    }, "fast").delay(300, function() {
      this.remove()
    });
  }
