Frontend Mentor - Social Links Profile Solution

This project is a solution to the Social Links Profile challenge on Frontend Mentor. It provides an interactive profile card with social links, using React for component management and styling for a polished, responsive UI.

Table of Contents
Overview
The Challenge
Screenshot
Links
My Process
Built With
What I Learned
Continued Development
Useful Resources
Author
Acknowledgments

Overview
The Challenge:
This project focuses on creating a simple, interactive social profile card where users can:
1. View the author’s profile image, name, and location.
2. Access social links with icons, which include LinkedIn, GitHub, Twitter, Instagram, and Frontend Mentor.
3. Experience hover effects that change button colors and enhance the interaction.

Links
Solution URL
Live Site URL

My Process
Built With:
- Semantic HTML5
- CSS custom properties
- Flexbox for layout
- Mobile-first workflow
- React - For building the UI
- React Icons - For social media icons

What I Learned:
This project reinforced key skills, such as component-based design and responsive styling in React. The dynamic mapping of social links allowed for efficient rendering and scalability. Below is a key snippet that demonstrates this approach:

js
<div className="social_links">
  {socials.map((link) => (
    <a
      key={link.id}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
      {link.name}
    </a>
  ))}
</div>

Continued Development
Future enhancements could include:
- Adding animations to the hover effects for smoother transitions.
- Integrating additional information or skills relevant to the author.
- Incorporating accessibility features to improve usability for all users.
- Useful Resources
- React Icons - Helpful for adding social media icons.
- Frontend Mentor - Source of the project challenge.

Author
GitHub - @hartselwyn
Frontend Mentor - @hartselwyn
Twitter - @HartSelwyn

Acknowledgments
Special thanks to Frontend Mentor for providing a great platform to improve my frontend skills through real-world challenges.