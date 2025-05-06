# Modern Portfolio Website

A sleek, animated personal portfolio website built with pure HTML, CSS, and JavaScript. Features a modern dark theme, smooth animations, and interactive elements.

## Features

- 🎯 Custom animated cursor
- 🌊 Particle background effect
- 📱 Fully responsive design
- 🎨 Dark mode with accent color
- ⚡ Smooth scroll animations
- 📊 Dynamic project filtering
- ⌨️ Typing effect
- 📈 Scroll progress indicator
- 🎭 Entrance animations
- 🔄 Modular content management

## Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Customize the content:
   - Edit `data/content.js` to update your personal information
   - Modify colors in `styles/main.css` (look for CSS variables)
   - Update social links in `index.html`

3. Test locally:
   - Open `index.html` in your browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

3. Go to repository settings
4. Under "GitHub Pages", select the main branch as source
5. Your site will be published at `https://yourusername.github.io/portfolio`

## Customization

### Colors
Edit the CSS variables in `styles/main.css`:
```css
:root {
    --primary-color: #00d1b2;
    --bg-color: #0a0a0a;
    --text-color: #ffffff;
    --secondary-bg: #1a1a1a;
    --accent-color: #00d1b2;
}
```

### Content
Update your information in `data/content.js`:
- Skills
- Experience
- Projects

### Animations
Modify animation parameters in:
- `js/main.js` for scroll and typing effects
- `js/particles.js` for background particles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance:
- No external dependencies
- Minimal JavaScript
- Efficient animations
- Responsive images
- Lazy loading

## License

MIT License - feel free to use this template for your personal portfolio!

## Credits

- Font Awesome for icons
- Inter font family
- Custom animations and effects 