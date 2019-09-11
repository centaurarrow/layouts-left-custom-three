import { createWidget } from 'discourse/widgets/widget';

export default createWidget('left-custom-html-three', {
  tagName: 'div.left-custom-html-three.widget-container',
  buildKey: () => 'left-custom-html-three',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('left-custom-html-three');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_left_custom_html_three;

      const category = attrs.category;
      if (category && category.layouts_left_custom_html_three) {
        html = category.layouts_left_custom_html_three;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.left-custom-html-three").html('');
        $("div.left-custom-html-three").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
