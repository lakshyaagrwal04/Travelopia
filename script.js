
function toggleReadMore() {
  var content = document.querySelector('.description');
  var trigger = document.querySelector('.read-more-trigger-tours');
  var arrow = document.querySelector('.arrow-down-tours');

  if (content.style.maxHeight) {
      content.style.maxHeight = null;
      trigger.innerHTML = 'Read more <span class="arrow-down-tours">&#8595;</span>';
  } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      trigger.innerHTML = 'Read less <span class="arrow-up-tours">&#8593;</span>';
  }
}