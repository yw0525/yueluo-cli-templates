import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button Component Test', () => {
  it('show text', () => {
    const content = 'heora';
    const wrapper = mount(Button, {
      slots: {
        default: content,
      },
    });
    expect(wrapper.text()).toBe(content);
  });

  it('size controll', () => {
    const size = 'small';
    const wrapper = mount(Button, {
      props: {
        size,
      },
    });
    expect(wrapper.classes()).toContain('custom-button--small');
  });

  it('global size controll', () => {
    const size = 'mini';
    const wrapper = mount(Button, {
      global: {
        config: {
          globalProperties: {
            $GLOBAL_CONFIG: {
              size,
            },
          },
        },
      },
    });

    expect(wrapper.classes()).toContain(`custom-button--${size}`);
  });

  it('button theme ', () => {
    const type = 'success';
    const wrapper = mount(Button, {
      props: {
        type,
      },
    });
    expect(wrapper.classes()).toContain(`custom-button--${type}`);
  });
});
