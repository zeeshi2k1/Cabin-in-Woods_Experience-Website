# Cabin in Woods

**Cabin in Woods** is an immersive, visually stunning web project designed to evoke suspense and mystery. This project uses HTML, CSS, and JavaScript to create an engaging experience with dynamic animations and interactive elements.

## Features

- **Full-screen Animation:** Utilizes `canvas` and `GSAP` for smooth, scroll-based animations.
- **Responsive Design:** Adapts to different screen sizes with `Tailwind CSS`.
- **Interactive Elements:** Includes links and buttons for user engagement.
- **Image Sequence Animation:** Displays a sequence of images as the user scrolls.

## Technologies Used

- **HTML**: Structure and layout.
- **CSS**: Styling using Tailwind CSS.
- **JavaScript**: For animation and interactive functionality.
  - **GSAP**: For animations and scroll-triggered effects.
  - **Lenis**: For smooth scrolling.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/cabin-in-woods.git
   ```

2. **Navigate to the Project Directory:**
![rendered video000](https://github.com/user-att![0045](https://github.com/user-attachments/assets/8ca0ccd6-47a6-4749-b090-97d168691c2c)
achments/assets/c2d988a8-ca44-4996-9e5e-c72ce63354c9)

   ```bash
   cd cabin-in-woods
   ```

3. **Open the `index.html` File:**

   Open `index.html` in your web browser to view the project.

## File Structure

- `index.html`: The main HTML file containing the structure and scripts.
- `Images Sequence/`: Directory for image assets used in the animation.

## Code Explanation

### HTML

- The `<canvas>` element is used to display a sequence of images.
- The layout and animations are managed with Tailwind CSS classes.
- Interactive elements such as buttons and links are included for user interaction.

### JavaScript

- **Preloading Images:** The `preLoadImages` function loads all images into memory before starting the animation.
- **Animation Functionality:** The `startAnimation` function uses GSAP to animate image sequences and other elements based on the user's scroll position.
- **Responsive Design:** Adjusts the canvas size and image scaling based on window size.
- **Smooth Scrolling:** Implements smooth scrolling using Lenis for a better user experience.

## Dependencies

- **Tailwind CSS**: For styling. [Documentation](https://tailwindcss.com/)
- **GSAP**: For animations. [Documentation](https://greensock.com/docs/v3/GSAP/)
- **Lenis**: For smooth scrolling. [Documentation](https://unpkg.com/lenis@1.1.9/dist/lenis.min.js)
- **Font Awesome**: For icons. [Documentation](https://fontawesome.com/)

## Credits

- **VFX & CGI**: Zeeshan Ahmed ([Instagram](https://www.instagram.com/z_shan3d.blend/))
- **Web Developer**: Zeeshan Ahmed ([LinkedIn](https://www.linkedin.com/in/zeeshan-ahmed-321399223/))
- **3D Artist**: Zeeshan Ahmed ([Behance](https://www.behance.net/Zeeshii2k1))
- **Rendered Frames**: Zeeshan Ahmed ([Instagram](https://www.instagram.com/skippingdays.exe/))
- **Inspired Website**: [doze.studio](https://doze.studio/)
- **Inspired By**: [Sheryians](https://www.youtube.com/watch?v=ouq6ks1zVAs)
- **Thanks To**: [Tailwind CSS](https://tailwindcss.com/), [GSAP](https://gsap.com/), [DARKROOM.ENGINEERING](https://lenis.darkroom.engineering/), [Font Awesome](https://fontawesome.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
