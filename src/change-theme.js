const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('.light-theme');
const themeSwitchToggleEL = document.querySelector('#theme-switch-toggle');

const changeTheme = () => {
  bodyEl.classList.toggle('light-theme');
  bodyEl.classList.toggle('dark-theme');
};

themeSwitchToggleEL.addEventListener('change', changeTheme);

const setValueTheme = () => {
  if (bodyEl.classList.contains('light-theme')) {
    localStorage.setItem('ui-theme', 'light-theme');
  } else if (!bodyEl.classList.contains('light-theme'))
    localStorage.setItem('ui-theme', 'dark-theme');
};

themeSwitchToggleEL.addEventListener('change', setValueTheme);

const getValueTheme = () => {
  const saveTheme = localStorage.getItem('ui-theme');
  if (saveTheme !== 'light-theme') {
    bodyEl.classList.remove('light-theme');
    bodyEl.classList.add('dark-theme');
    themeSwitchToggleEL.checked = true;
  }
};

getValueTheme();
