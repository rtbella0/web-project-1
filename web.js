// web.js
document.getElementById('moreBtn').addEventListener('click', () => {
  document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
});

const tabYT = document.getElementById('tab-yt');
const tabFC = document.getElementById('tab-fc');
const contentYT = document.getElementById('content-yt');
const contentFC = document.getElementById('content-fc');

tabYT.addEventListener('click', () => {
  tabYT.classList.add('active');
  tabFC.classList.remove('active');
  contentYT.classList.remove('hidden');
  contentFC.classList.add('hidden');
});

tabFC.addEventListener('click', () => {
  tabFC.classList.add('active');
  tabYT.classList.remove('active');
  contentFC.classList.remove('hidden');
  contentYT.classList.add('hidden');
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`"${text}"가 복사되었습니다!`);
  }).catch(err => {
    console.error('복사 실패:', err);
  });
}


const btnUp = document.getElementById('btn-up');
const btnContact = document.getElementById('btn-contact');

// 이미지 변경 경로
const imgUp = {
  default: 'src/sidebar/up.png',
  click: 'src/sidebar/up_click.png'
};

const imgContact = {
  default: 'src/sidebar/contact.png',
  click: 'src/sidebar/contact_click.png'
};

// 상단 이동 버튼
btnUp.addEventListener('mousedown', () => {
  btnUp.src = imgUp.click;
});

btnUp.addEventListener('mouseup', () => {
  btnUp.src = imgUp.default;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact 섹션 이동 버튼
btnContact.addEventListener('mousedown', () => {
  btnContact.src = imgContact.click;
});

btnContact.addEventListener('mouseup', () => {
  btnContact.src = imgContact.default;
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
});
