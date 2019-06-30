var vue_helper_content = new Vue ({
  el: '#helper_background',
  data: {
    page_status: pageStatus,
    helper_qualified: false,
    userData: userData,
    public_variable: public_variable
  },
  mounted() {
    new Clipboard( ".window__self__random_text p" );
  },
  methods: {
    exchange_success: function() {
			setWindow( 'helper_free_get_make_sure', 'open' );
    },
    close_helper: function() {
      setWindow('helper','close');
    },
    copyCodeDone: function(){
      setNotification ( '成功複製開通代碼！', 'blue' );
    }
  },
});
