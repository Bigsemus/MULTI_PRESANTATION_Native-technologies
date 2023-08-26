
let evt;

export function setEventForDeletePost() {
  const deletePostBtn = document.querySelector('.blog__card');
  deletePostBtn.addEventListener('mousedown', event => {
    if (event.target.classList.length > 1){
      evt = event;
    }
  });
}

export function deleterPost(eventMVP) {
  const deletePostBtn = document.querySelector('.blog__card');
  const customEvent = new CustomEvent('modalDelete', { detail: evt })
    deletePostBtn.addEventListener('modalDelete', (event) => {
    let storage = window.sessionStorage;
    if (event.detail.target.classList[2] === 'blog__btn-delete' && !event.detail.target.classList[3]) {
      let card = event.detail.target.parentElement.parentElement.parentElement.parentElement;
      card.style.transform = 'translate(-100vw,0)';
      storage.setItem(card.className, 'none');
      setTimeout(() => {
        card.style.display = 'none';
      }, 2000);
    } else if (event.detail.target.classList[2] === 'blog__btn-delete' && event.detail.target.classList[3] === 'blog__btn-delete--withoutMedia') {
      let card = event.detail.target.parentElement.parentElement.parentElement;
      card.style.transform = 'translate(-100vw,0)';
      storage.setItem(card.className, 'none');
      setTimeout(() => {
        card.style.display = 'none';
      }, 2000);
    }
  }, false)

  if (eventMVP === 'btnOK') {
    deletePostBtn.dispatchEvent(customEvent)
  }

}