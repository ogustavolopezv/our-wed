# Our Wedding Invitation Website 💒

A beautiful, dynamic, and responsive wedding invitation website featuring countdown timer, event details, dress code information, RSVP functionality, and contact details.

![Wedding Website Preview](https://github.com/user-attachments/assets/79820dae-bd9a-4a5d-bd3e-3d3fccc91f6c)

## ✨ Features

- **Hero Section**: Elegant introduction with couple names and wedding date
- **Live Countdown Timer**: Dynamic countdown showing days, hours, minutes, and seconds until the wedding
- **Event Details**: 
  - Ceremony and reception locations with times
  - Timeline of the day's events
  - Google Maps integration for directions
- **Dress Code Information**: 
  - Formal attire guidelines for guests
  - Gender-specific recommendations
  - Wedding color palette
- **RSVP Form**: 
  - Full form validation
  - Guest count tracking
  - Dietary restrictions field
  - Special messages from guests
  - Success/error feedback
- **Contact Section**: Contact information for bride, groom, and wedding coordinator
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-based animations and smooth navigation
- **Accessible**: Semantic HTML and ARIA-friendly

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ogustavolopezv/our-wed.git
cd our-wed
```

2. Open the website locally:
   - Simply open `index.html` in your web browser, or
   - Use a local web server (recommended):

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

3. Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
our-wed/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for countdown, form validation, and animations
└── README.md       # Project documentation
```

## 🎨 Customization

### Update Wedding Details

1. **Change Couple Names** (index.html, line 25):
```html
<h1 class="couple-names">Your Names</h1>
```

2. **Change Wedding Date** (index.html, line 28 and script.js, line 3):
```html
<p class="date-text">Your Wedding Date</p>
```
```javascript
const weddingDate = new Date('YYYY-MM-DDTHH:MM:SS').getTime();
```

3. **Update Event Locations** (index.html, lines 48-77):
   - Modify ceremony and reception details
   - Update addresses
   - Change Google Maps links

4. **Customize Colors** (styles.css, lines 7-14):
```css
:root {
    --primary-color: #YourColor;
    --secondary-color: #YourColor;
    --accent-color: #YourColor;
}
```

5. **Update Contact Information** (index.html, lines 183-224):
   - Change names, emails, and phone numbers

### RSVP Form Integration

The RSVP form currently logs submissions to the console. To integrate with a backend:

1. **Option 1: Use a Form Service** (Formspree, Google Forms, etc.)
2. **Option 2: Connect to your own backend**

Edit `script.js` (line 39) to send data to your endpoint:

```javascript
// Example: Send to backend
fetch('https://your-api.com/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showFormMessage('Thank you for your RSVP!', 'success');
});
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the branch (usually `main` or `master`)
4. Select root folder
5. Save and wait for deployment

Your site will be available at: `https://yourusername.github.io/our-wed/`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Deploy!

### Deploy to Custom Hosting

Upload the following files to your web hosting:
- `index.html`
- `styles.css`
- `script.js`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox, grid, animations
- **JavaScript (ES6+)**: Dynamic functionality
- **Google Fonts**: Beautiful typography (Great Vibes, Montserrat)

## 📸 Screenshots

### Desktop View
![Desktop View](https://github.com/user-attachments/assets/79820dae-bd9a-4a5d-bd3e-3d3fccc91f6c)

### Mobile View
![Mobile View](https://github.com/user-attachments/assets/a64d2a39-9593-48ce-af08-7b7eae246803)

### RSVP Form
![RSVP Form](https://github.com/user-attachments/assets/1e4910a2-9e28-47a5-bd5b-aada9c2f1823)

## 🤝 Contributing

Feel free to fork this project and customize it for your own wedding! If you make improvements, pull requests are welcome.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Acknowledgments

- Design inspired by modern wedding websites
- Icons: Unicode emojis
- Fonts: Google Fonts (Great Vibes, Montserrat)

## 📞 Support

If you need help customizing this website for your wedding, feel free to open an issue or contact the repository owner.

---

Made with ❤️ for Sarah & Michael's special day!