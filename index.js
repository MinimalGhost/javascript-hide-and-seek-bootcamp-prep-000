function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
}

function deepestChild(id, element) {
  const deepBoy = document.getElementById('grand-node').querySelector('div');

  let deepBoys = document.querySelectorAll(`#${id}` `${element}`);
  if(!nodes.length) return false;
  return nodes[nodes.length-1];
  
  return deepBoy;
}

