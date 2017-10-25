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

function deepestChild() {
  const divChild = document.getElementById('grand-node').children[3];
  return parseInt(divChild[3].innerHTML, 10);
}

// function find(array, criteriaFn) {
//   let current = array
//   let next = []
//   while (current) {
//     if (criteriaFn(current)) {
//       return current
//     }
//
//     if (Array.isArray(current)) {
//       for (let i = 0; i < current.length; i++) {
//         next.push(current[i])
//       }
//     }
//
//     current = next.shift()
//   }
//
//
//   return null
// }
