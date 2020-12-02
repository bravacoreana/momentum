const settingBtnOpen = document.querySelector(".js-settingOpen");
const settingBtnClose = document.querySelector(".js-settingClose");
const settingBg = document.querySelector(".js-settingBg");
const changeName = document.querySelector(".js-changeName");

function openSetting() {
  settingBg.classList.add("setting-popup");
  settingBtnClose.addEventListener("click", () => {
    settingBg.classList.remove("setting-popup");
    settingBtnOpen.addEventListener("click", openSetting);
  });
}
function init() {
  settingBtnOpen.addEventListener("click", openSetting);
}
init();
// DOM - MODAL FOR SETTING
// const settingBg = document.querySelector(".modal-settingBg");
// const setting = document.querySelector(".modal-setting");

// settingBtn.addEventListener("click", () => {
//   if (settingBg.classList.contains("setting-popup")) {
//     settingBg.classList.remove("setting-popup");
//   } else {
//     settingBg.classList.add("setting-popup");
//   }
// });

// const users = document.querySelectorAll(".user-component");
// const modal = document.querySelector(".modal");
// const modalImg = document.querySelector(".modalImg");
// const close = document.querySelector(".close");

// users.forEach((user) => {
//   const image = user.querySelector("img");

//   user.addEventListener("click", () => {
//     modal.classList.add("appear");
//     modalImg.src = image.src;

//     close.addEventListener("click", () => {
//       modal.classList.remove("appear");
//     });
//   });
// });
