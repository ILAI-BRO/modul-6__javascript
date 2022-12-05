function printNum(from, to) {
  let curr = from;

  let timId = setInterval(function() {
    alert(curr);
    if (curr == to) {
      clearInterval(timId);
    }
    curr++;
  }, 1000);
}


printNum(1, 3);
