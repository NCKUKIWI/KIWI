var vue_helper_content = new Vue ({
  el: '#helper_background',
  data: {
    page_status: pageStatus,
    helper_qualified: false,
    userData: userData
  },
  methods: {
    exchange_success: function() {
      document.getElementById("helper_success").style.display = "block";
    },
    close_helper: function() {
      setWindow('helper','close');
    },
    qualify_helper: function() {
      this.helper_qualified = true;
      // console.log("qualified");
    },
    copy_code: function(){
      // // var text = document.getElementById("text").innerText;
      // var input = document.getElementById("input");
      // input.value = text; // 修改文本框的内容
      // input.select(); // 选中文本
      // document.execCommand("copy")
    }
  },
});
