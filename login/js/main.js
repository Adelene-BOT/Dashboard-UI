(function(a) {
    "use strict";
  
    function b(b) {
      if ("email" == a(b).attr("type") || "email" == a(b).attr("name")) {
        if (null == a(b).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)) return !1;
      } else if ("" == a(b).val().trim()) return !1
    }
  
    function c(b) {
      var c = a(b).parent();
      a(c).addClass("alert-validate")
    }
  
    function d(b) {
      var c = a(b).parent();
      a(c).removeClass("alert-validate")
    }
    a(".input100").each(function() {
      a(this).on("blur", function() {
        "" == a(this).val().trim() ? a(this).removeClass("has-val") : a(this).addClass("has-val")
      })
    });
    var e = a(".validate-input .input100");
    a(".validate-form").on("submit", function() {
      for (var a = !0, d = 0; d < e.length; d++) !1 == b(e[d]) && (c(e[d]), a = !1);
      return a
    }), a(".validate-form .input100").each(function() {
      a(this).focus(function() {
        d(this)
      })
    });
    var f = 0;
    a(".btn-show-pass").on("click", function() {
      0 == f ? (a(this).next("input").attr("type", "text"), a(this).find("i").removeClass("zmdi-eye"), a(this).find("i").addClass("zmdi-eye-off"), f = 1) : (a(this).next("input").attr("type", "password"), a(this).find("i").addClass("zmdi-eye"), a(this).find("i").removeClass("zmdi-eye-off"), f = 0)
    })
  })(jQuery);