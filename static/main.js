
document.addEventListener('DOMContentLoaded', () => {

//============(light and dark)

const themeBtn=document.querySelector('.nav_theme_btn');
themeBtn.addEventListener('click', () => {
   let bodyClass = document.body.className;
   const headerContainer = document.querySelector('.header_container');

   if (!bodyClass) {
      bodyClass = 'dark';
      document.body.className = bodyClass;
      headerContainer.classList.add('dark');
      // change icon
      themeBtn.innerHTML = "<i class='uil uil-cloud-sun'></i>";
   } else {
      bodyClass = '';
      document.body.className = bodyClass;
      headerContainer.classList.remove('dark');
      // change icon
      themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
   }

   // Toggle theme for header_container
   const headerContainer = document.querySelector('.header_container');
   if (bodyClass === 'dark') {
      headerContainer.classList.add('dark');
   } else {
      headerContainer.classList.remove('dark');
   }

   // Toggle theme for header and chatbox
   const header = document.querySelector('.header');
   const chatbox = document.querySelector('.chatbox');
   if (bodyClass === 'dark') {
      header.classList.add('dark');
      chatbox.classList.add('dark');
   } else {
      header.classList.remove('dark');
      chatbox.classList.remove('dark');
   }
});

})


