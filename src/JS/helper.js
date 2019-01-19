var vue_helper = new Vue ({
  el: '#helper_content',
  methods: {
    exchange_success: function() {
      document.getElementById("helper_success").display = "block";
    }
  },
});
