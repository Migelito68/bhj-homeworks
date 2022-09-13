let body = document.querySelector('body');
let links = document.querySelectorAll('.has-tooltip');

for (let link of links) {
  let tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = link.title;
  body.insertAdjacentElement('afterbegin', tooltip);

  link.onclick = () => {
    let tooltipActive = document.querySelector('.tooltip_active');
    if (tooltipActive) {
      if (tooltipActive.textContent === link.title) {
        tooltipActive.classList.remove('tooltip_active');
      } else {
        tooltipActive.classList.remove('tooltip_active');
        tooltip.classList.add('tooltip_active');
      }
    } else {
      tooltip.classList.add('tooltip_active');
    }

    tooltip.style.top = (Number(link.getBoundingClientRect().top) + 20) + 'px';
    tooltip.style.left = (Number(link.getBoundingClientRect().left) + 20) + 'px';

    return false;
  }
}