fetchSheet
  .fetch({
    gSheetId: '1DkiLMx_NZTpfaSUrzOGbHXCT3pXKt3tgoXZFTRkVT2k',
    wSheetName: 'GioiThieu',
  })
  .then((rows) => {
    let g = rows[0]
    console.log(g);
    ThongTin(g['Name'], g['Date'], g['Address'], g['Contact'], g['BackGround'])
  });
fetchSheet
  .fetch({
    gSheetId: '1DkiLMx_NZTpfaSUrzOGbHXCT3pXKt3tgoXZFTRkVT2k',
    wSheetName: 'Duan',
  })
  .then((rows) => {
    Duan(rows, rows[0]['Image-MB'])
  });
fetchSheet
  .fetch({
    gSheetId: '1DkiLMx_NZTpfaSUrzOGbHXCT3pXKt3tgoXZFTRkVT2k',
    wSheetName: 'KHDH',
  })
  .then((rows) => {
    KHDH(rows[0]['Image'])
  });

// Lấy thông tin cá nhân 
function ThongTin(name, date, address, contact, Image) {
  document.querySelector('.hero').style.backgroundImage = `url(${Image})`
  document.querySelector('.TT__name>p').innerHTML = name
  document.querySelector('.TT__date>p').innerHTML = date
  document.querySelector('.TT__address>p').innerHTML = address
  document.querySelector('.TT__contact>p').innerHTML = contact
}

function Duan(All, MB) {
  document.querySelector('.mobile-only').src = MB
  let Bot = ''
  let i = 0
  All.forEach((tab) => {
    document.querySelectorAll('#Duanne .grid-1x1__images__image img')[i].src = tab['Image']
    i++
  })
  function RightClick() {
    activeSlidesubhero = (activeSlidesubhero == i ? 1 : activeSlidesubhero + 1)
  }
  function LeftClick() {
    activeSlidesubhero = (activeSlidesubhero == 1 ? i : activeSlidesubhero - 1)
  }

  document.querySelector('#Duanne .grid-1x1__chapter__title').innerText = All[0]['Title']
  document.querySelector('#Duanne .grid-1x1__chapter__body').innerText = All[0]['Content']
  document.querySelector('#activeSlidesubhero>p').innerText = i
  // document.querySelector('.grid-1x1__controls__arrow.grid-1x1__controls__arrow--left').setAttribute('ng-click',`activeSlidesubhero = (activeSlidesubhero == 1 ? ${i} : activeSlidesubhero - 1)`)
  // document.querySelector('.grid-1x1__controls__arrow.grid-1x1__controls__arrow--right').setAttribute('ng-click',`activeSlidesubhero = (activeSlidesubhero == ${i} ? 1 : activeSlidesubhero + 1)`)
}

// Lấy thông tin khóa học đã học
function KHDH(Image) {
  document.querySelector('#KHDH-Image').src = Image
}
