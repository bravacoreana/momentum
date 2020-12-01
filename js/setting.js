// DOM - TOP RIGHT SETTING BTNS
const settingBtns = document.querySelector(".setting-btns");
const settingBtn = document.querySelector(".setting-btn");

// DOM - MODAL FOR SETTING
const settingBg = document.querySelector(".modal-settingBg");
const setting = document.querySelector(".modal-setting");

// CLASS
const MODAL_POPUP = "modal-popup";

function openSetting(event) {
  event.preventDefault();
  settingBg.classList.add("");
}

function init() {
  settingBtn.addEventListener("click", openSetting);
}

init();
