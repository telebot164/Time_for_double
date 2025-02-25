let second = document.getElementById('u393h393');
let war = document.getElementById('u392h9');
let share = document.querySelector('.share');
let sec = 100;
setInterval(() => {
  sec -= 1;
  second.innerHTML = `እባኮትን ${sec}ሴኮንድ ይጠብቁ!`;
  war.innerHTML = 'ከላይ ያለው ጊዜ እስከሚያልቅ ድረስ ከዚህ ድሕረ ገፅ አንዳይወጡ!';
}, 1000);
setTimeout(() => {
  second = false;
  war = false;
  let get_card = document.getElementById('u393h393');
  let congra = document.getElementById('u392h9');;
  get_card.innerHTML = 'እንኳን ደስ አሎት የካርዱን እጥፍ አጊንተዋል 👏👏👏';
  congra.innerHTML = 'ሌላ ሰው እሄንን ድሕረ ገፅ እንዲጠቀም ሼር በማድረግ ለሁሉም ሰው ያዳርሱ ከ ኢትዮቴሌኮም!';
  share.innerHTML = 'Share';
}, 100000);