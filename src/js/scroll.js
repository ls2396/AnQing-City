function wrapAndCloneContent(selector) {
    const container = document.querySelector(selector);
    if (!container) return;
  
    const originalItems = Array.from(container.children);
    const wrapper = document.createElement('div');
    wrapper.classList.add('scroll-wrapper');
  
    // 原始内容 + 克隆内容
    originalItems.forEach(el => wrapper.appendChild(el.cloneNode(true)));
    originalItems.forEach(el => wrapper.appendChild(el.cloneNode(true)));
  
    // 清空原容器，添加 wrapper
    container.innerHTML = '';
    container.appendChild(wrapper);
  }
  
  wrapAndCloneContent('.city_one');
  wrapAndCloneContent('.city_two');
  wrapAndCloneContent('.city_three');
  