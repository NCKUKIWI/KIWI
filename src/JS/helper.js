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
      setWindow('helper','close');
    },
  },
});
