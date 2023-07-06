// ACTIVE LINK CLASS .current

function highlightCurrent() {
  const curPage = document.URL;
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.href == curPage) {
      link.classList.add('current');
    }
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent();
  }
};

function smash(words) {
  let myArray = [];
  let resultArray = myArray.push(words);

  return "resultArray.join('');";
}

// SHARE BUTTON CLICK

function myFunction() {
  alert(`DO NOT EVEN TRY, THIS WEBSITE IS MADE BY BEGINNERS`);
}
