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
  const deepChild = document.getElementById('grand-node').querySelectorAll('div');
  let next = [];
  for (let i = 0; i < deepChild.length; i++) {
    let current = deepChild[i];
    if (deepChild[i].innerHTML === 'boo!') {
      return deepChild[i].innerHTML;
    }
  }
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
