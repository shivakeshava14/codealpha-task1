const submitBtn = document.querySelector(".main-content button");
const inputValue = document.querySelector("#input-text");
const result = document.querySelector(".output");
inputValue.max = new Date().toISOString().split("T")[0];
console.log(inputValue.max);

submitBtn.addEventListener("click", () => {
  console.log("clicked");
  console.log(inputValue.value);
  //   console.log(inputValue.value);
  Solve();
});

function Solve() {
  let birthDate = new Date(inputValue.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();
  console.log(d1);

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  console.log(y3, m3, d3);
  result.innerText = `You are ${y3} Years, ${m3} Months, ${d3} Days Old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}