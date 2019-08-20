<template>
  <div>
    <div class="add_review__window__mid_cont">
      <textarea
        class="add_review__window__mid_cont__mid_area add_review_paragraph text_16 tp_size_addReview"
        placeholder="說些什麼吧..."
      ></textarea>
      <div class="add_review__window__mid_cont__bottom_row">
        <div class="add_review_rate text_16 gain">
          <div class="add_review_rate__left_area">
            <p class="add_review_rate__name gain">推薦</p>
          </div>
          <div class="add_review_rate__right_area">
            <div class="add_review_rate__button go_down gain"></div>
            <p class="add_review_rate__score gain">course_rate.gain</p>
            <div class="add_review_rate__button go_up gain"></div>
          </div>
        </div>
        <div class="add_review_rate text_16 sweet">
          <div class="add_review_rate__left_area">
            <p class="add_review_rate__name sweet">甜度</p>
          </div>
          <div class="add_review_rate__right_area">
            <div class="add_review_rate__button go_down sweet"></div>
            <p class="add_review_rate__score sweet">course_rate.sweet</p>
            <div class="add_review_rate__button go_up sweet"></div>
          </div>
        </div>
        <div class="add_review_rate text_16 cold">
          <div class="add_review_rate__left_area">
            <p class="add_review_rate__name cold">涼度</p>
          </div>
          <div class="add_review_rate__right_area">
            <div class="add_review_rate__button go_down cold"></div>
            <p class="add_review_rate__score cold">count</p>
            <div class="add_review_rate__button go_up cold"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="add_review__window__bottom_bar">
      <div class="add_review__window__bottom_bar__status">
        <p class="add_review_status text_14">window_status</p>
      </div>
      <div class="add_review__window__bottom_bar__buttons">
        <div class="add_review_button give_up text_16 enabled">放棄</div>
        <div class="add_review_button send_review text_16">
          <p>
            送出心得
            <span>，獲得積分 course_point 點</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddComment"
};
</script>

