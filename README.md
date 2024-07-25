# Richard Essuman's Portfolio Website

A portfolio website built using React to showcase my projects, skills, and experience. This website includes an interactive and responsive design, project gallery, contact form, and a blog section. The contact form is integrated with EmailJS for email communication.

## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on all devices.
- **Project Gallery**: Display a collection of projects with descriptions, technologies used, and links to project repositories or live demos.
- **Skills Section**: Highlight the skills and technologies I am proficient in.
- **Contact Form**: Users can send messages directly to my email using EmailJS.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Email Service**: EmailJS

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ressuman/portfolio-website.git
cd portfolio-website
```

2. Install the dependencies:

```bash
npm install
```

3. Set up EmailJS:

   - Create an account on [EmailJS](https://www.emailjs.com/).
   - Create a new email service and obtain the service ID, template ID, and user ID.
   - Create a `.env` file in the root directory and add the following environment variables:

   ```
   VITE_REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

4. Start the development server:

```bash
npm start
```

The website should now be running on [http://localhost:3000](http://localhost:3000).

## Contact Form Integration with EmailJS

The contact form uses EmailJS to send messages directly to my email. Here is a brief overview of how it works:

1. **Setup**: EmailJS is configured with the service ID, template ID, and user ID obtained from the EmailJS dashboard.
2. **Form Submission**: When the contact form is submitted, the form data is sent to EmailJS using the `emailjs.sendForm` method.
3. **Success/Failure Handling**: A toast notification is displayed to the user indicating whether the message was sent successfully or if there was an error.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License.

---

### Here is an expected image of the final project

![Personal Portfolio1 Project gif](./src/assets/react-portfolio1.gif)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
