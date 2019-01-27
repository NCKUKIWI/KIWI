var vue_helper_content = new Vue ({
  el: '#helper_background',
  data: {
    page_status: pageStatus,
    helper_qualified: false,
    userData: userData
  },
  methods: {
    exchange_success: function() {
      this.helper_qualified = true;
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
      setNotification ( '成功複製驗證碼！', 'blue' );
    }
  },
});
