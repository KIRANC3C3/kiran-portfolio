
const servicesData = [
  {
    title: "Education",
    category: "edu",
    description: [
      { title: "Degree", content: "Dual Degree in Chemical Engineering <br> Indian Institute of Technology Madras <br> 6.51 <br> 2018-2023"},
      { title: "Class XI+XII", content: "Narayana College Hyderabad <br> 95.3% <br> 2016-2018" },
      { title: "Class X", content: "Geethanjali Digi School Warangal <br> 9.3 <br> 2015-2016" }
    ]
  },
  {
    title: "Experience",
    category: "exp",
    description: [
      { title: "Project", content: "(Aug 2023-) <br> Topic: SOYBEAN YIELD PREDICTION IN MADHYA PRADESH USING DEEP LEARNING TECHNIQUES"},
      { title: "Dual Degree Project", content: "Kaatru Team <br> (Aug 2022-May 2023) <br> Topic: Optimal Deployment Strategy for Ambient Air Pollution Sensing " },
      { title: "Intern", content: "Business Technical Analyst <br> Inauid <br> (June - July 22)" }
    ]
  },
  {
    title: "Skills",
    category: "skills",
    description: [
      { title: "Programming Languages", content: "Python, Matlab, SQL" },
      { title: "Frameworks and Libraries", content: "Tensorflow, NLTK, Regex, Open-CV, Scikit-learn, Flask, Pandas, Numpy ,Matplotlib, Seaborn,Streamlit" },
      { title: " Visualization Tools, and scrapping", content: "Tableau, Excel, Spreadsheets, BeautifulSoup" },
      { title: "Web Development", content: "HTML, CSS,  Javascript" },

      // Add more skills here
    ]
  },
  // Other service entries...
];
document.addEventListener('DOMContentLoaded', () => {

// Selecting elements...
const servicesButtons = document.querySelectorAll('.service_item');
const serviceDetails = document.querySelector('.services_right');
const skillsBarsContainer = document.getElementById('skillsBars'); // Add this line

// Function to get and display service details...
const getService = (category) => {
  const details = servicesData.find(item => item.category === category);
  serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    <div class="vertical-boxes">
      ${details.description.map(entry => `
        <div class="box">
          <h4>${entry.title}</h4>
          <p>${entry.content}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// Function to remove active class from buttons...
const removeActiveClass = () => {
  servicesButtons.forEach(button => {
    button.classList.remove('active');
  });
}

// Function to animate skill bars...
const animateSkillBars = () => {
  const skillBars = skillsBarsContainer.querySelectorAll('.skill_bar'); // Update this line
  skillBars.forEach(skillBar => {
    const progress = parseInt(skillBar.querySelector('p').textContent);
    skillBar.querySelector('.bar').style.width = `${progress}%`; // Update this line
  });
};

// Adding click event listeners to buttons...
servicesButtons.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveClass();
    const serviceClass = item.classList[1];
    getService(serviceClass);
    item.classList.add('active');
    if (serviceClass === 'skills') {
      animateSkillBars(); // Animate skill bars when Skills category is clicked
    }
  });
});



// Initially displaying education details...
getService('edu');


// ============== nav toggle small screeens

const navMenu=document.querySelector('.nav_menu')
const navOpenBtn=document.querySelector('.nav_toggle-open')
const navCloseBtn=document.querySelector('.nav_toggle-close')

const openNavHandler= () =>{
navMenu.style.display='flex';
navOpenBtn.style.display='none';
navCloseBtn.style.display='inline-block';

}
const closeNavHandler= () =>{
navMenu.style.display='none';
navOpenBtn.style.display='inline-block';
navCloseBtn.style.display='none';

}
navOpenBtn.addEventListener('click',openNavHandler)
navCloseBtn.addEventListener('click',closeNavHandler)

// Select the theme button
/*
const themeBtn = document.querySelector('.nav_theme_btn');

// Add a click event listener to the theme button
themeBtn.addEventListener('click', () => {

    //============(light and dark)
const themeBtn = document.querySelector('.nav_theme_btn');
    themeBtn.addEventListener('click', () => {
        let bodyClass = document.body.className;

        if (!bodyClass) {
            bodyClass = 'dark';
            document.body.className = bodyClass;
            themeBtn.innerHTML = "<i class='uil uil-cloud-sun'></i>";
        } else {
            bodyClass = '';
            document.body.className = bodyClass;
            themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
        }

        const header = document.querySelector('.header');
        const chatbox = document.querySelector('.chatbox');
        if (header && chatbox) { // Check if elements are found before toggling
            if (bodyClass === 'dark') {
                header.classList.add('dark');
                chatbox.classList.add('dark');
            } else {
                header.classList.remove('dark');
                chatbox.classList.remove('dark');
            }
        }
    });
  });*/
})



