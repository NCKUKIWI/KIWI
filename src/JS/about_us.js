var about_us_vue = new Vue({
  el: '#about_us',
  data: {
    selected: 'support',
    showDrawer: true,
    isActive: true,
    activeClass: 'text_deep_blue',
    normalClass: 'text_dark',
  },
  methods: {
    changeView: function(to) {
      this.selected = to;
    },
  },
  computed: {
    rightHeader: function() {
      if(this.selected==='portfolio'){
        return '作品一覽';
      }else if(this.selected==='members'){
        return '團隊成員';
      }else{
        return '關於我們';
      }
    }
  }
})