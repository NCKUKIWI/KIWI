var vue_helper_content = new Vue ({
  el: '#helper_background',
  data: {
    page_status: pageStatus,
    helper_qualified: false,
    userData: userData
  },
  created() {
    new Clipboard( "#helper_background .text_14" );
  },
  methods: {
    exchange_success: function() {
			setWindow( 'helper_free_get_make_sure', 'open' );
    },
    close_helper: function() {
      setWindow('helper','close');
    },
    copyCodeDone: function(){
      setNotification ( '成功複製驗證碼！', 'blue' );
    }
  },
});
