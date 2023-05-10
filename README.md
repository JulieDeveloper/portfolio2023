# Julie Chou's Portfolio Website

[https://juliechou.com/](https://juliechou.com/)

This project is my personal website that showcases my skills and projects as a web frontend developer. The website is a static website built using **React.js**.

It includes the following features:

- **Multi-page navigation**  
  users can easily navigate between the home, about, projects, and contact pages.

- **Dark mode**  
  users can toggle between light and dark mode to suit their preferences.

- **Multi-language support**  
  the website is available in English and Mandarin Chinese, and users can switch between languages using the language selector in the header.

- **Contact form**  
  users can send a message to the website owner using the contact form on the contact page.

Feel free to reach out to me at contact@juliechou.com if you have any questions or feedback on this project. Thank you for visiting my portfolio website!

---

### Table of Contents

[Technologies Used](https://github.com/JulieDeveloper/portfolio2023/edit/main/README.md#technologies-used)  
 [Installation and Usage](https://github.com/JulieDeveloper/portfolio2023/edit/main/README.md#Installation)  
 [Deployment](https://github.com/JulieDeveloper/portfolio2023/edit/main/README.md#deployment)  
 [Project Summary](https://github.com/JulieDeveloper/portfolio2023/edit/main/README.md#project-summary)  
 [Project Structure](https://github.com/JulieDeveloper/portfolio2023/edit/main/README.md#project-structure)  
 [Future Improvements](https://github.com/JulieDeveloper/portfolio2023/edit/main/README.md#future-improvements)  
 [Challenges Faced](https://github.com/JulieDeveloper/portfolio2023/edit/main/README.md#challenges-faced)

---

### Technologies Used

The project uses the following technologies:

- **React**
- **React Router**
- **Sass**
- **Styled Components**
- **i18next**
- **react-reveal**

---

### Installation and Usage

To run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/JulieDeveloper/portfolio2023.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. View the website at http://localhost:3000.

---

### Deployment:

The website is deployed through **Vercel** and has its own domain [https://juliechou.com](https://juliechou.com/)

---

### Project Summary

This project is a static website built with React.js to showcase my skills and projects as a web frontend developer. The website includes pages for home, about me, projects, individual pages for each project, and a contact page. The website has bilingual functionality built using i18n and includes animations built with my CSS and JS skills and react-reveal library. The contact form is built using Formspree library.

---

### Project Structure

```
src/
  ├── App.js
  ├── App.test.js
  ├── index.js
  ├── reportWebVitals.js
  ├── setupTests.js
  ├── assets/
  │     ├── fonts/
  │     ├── images/
  │     │     ├── icons/
  │     │     └── resume-JulieChou.pdf
  │     │
  │     └── projectsImage/
  │           ├── 01/
  │           └── 02/
  │           └── projectsPage/
  │
  ├── components/
  │     ├── background/
  │     │     ├── CopyRight.jsx
  │     │     ├── Navbar.jsx
  │     │     ├── SideBars.jsx
  │     │     ├── SocialLinks.jsx
  │     │     ├── Themes.jsx
  │     │     └── index.jsx
  │     │
  │     └── projectPage/
  │           └── ProjectBackground.jsx
  │
  ├── context/
  │     ├── ThemesContext.jsx
  │     └── WindowSizeContext.jsx
  │
  ├── data/
  │     └── ProjectsData.js
  │
  ├── locale/
  │     └── language/
  │           ├── en.json
  │           ├── tc.json
  │           ├── project01.json
  │           └── projectsList.json
  │
  ├── pages/
  │     ├── ProjectPage/
  │     │     ├── portfolio2023/
  │     │     │     ├── ColorCards.jsx
  │     │     │     ├── DarkmodeAnimation.jsx
  │     │     │     ├── LineAnimation.jsx
  │     │     │     ├── colorList.js
  │     │     │     └── index.jsx
  │     │     │
  │     │     └── atlanticSewingGuild/
  │     │           └── index.js
  │     │
  │     ├── ContactPage/
  │     │     ├── ContactForm.jsx
  │     │     └── ContactPage.jsx
  │     │
  │     ├── AboutPage.jsx
  │     ├── HomePage.jsx
  │     ├── ProjectsPage.jsx
  │     └── index.js
  │
  └── styles/
        ├── base.css
        ├── color.scss
        ├── device.js
        ├── layout.jsx
        ├── marvel-devices.min.css
        └── reset.css
```

---

### Future Improvements

In the future, I plan to improve this project by:

- Adding a loading page to improve user experience.
- Adding a blog section to share my thoughts and experiences as a frontend developer.
- Implementing a search functionality to easily navigate through the projects.
- Refactoring the project's structure, components, and styles code to make it more readable, clean, and reusable.
- Improving the website's responsive design functionality to ensure it works well on all devices.
- Adding more animations using GSAP or three.js to make the website more interactive and engaging.
- Adding backend functionality to make it easier to edit the content and add more dynamic features.
- Implementing accessibility features to make the website more inclusive.
- Adding more projects to the portfolio.
- Optimizing the images to improve website performance.
- Implementing server-side rendering to improve the website's SEO.
- Adding unit tests to the project components to ensure code quality.

---

### Challenges Faced

- Configuring i18n for localization of the website.
- Determining the appropriate layout and content for each page.
- Developing reusable components capable of handling various data types.
- Implementing responsive design to support multiple screen sizes.
- Selecting and testing appropriate CSS and animation libraries.
- Deploying the website to production.
