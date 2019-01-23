var vue_helper_content = new Vue ({
  el: '#helper_background',
  data: {
    page_status: pageStatus,
  },
  methods: {
    exchange_success: function() {

      document.getElementById("helper_success").style.display = "block";
    },
    close_helper: function() {
      document.getElementById("helper_content").style.display = "none";
    },
    helper_disappear: function() {
      document.getElementById("helper_success").style.display = "none";
      document.getElementById("helper_content").style.display = "none";
      document.getElementById("helper_background").style.display = "none";
      console.log("close all");
    },
  },
});
