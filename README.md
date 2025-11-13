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

## 🌐 Hosting Recommendations

### 🏆 **Recommended: Free Static Hosting**

Perfect for wedding invitation websites since they're static HTML/CSS/JS sites:

#### **1. GitHub Pages** (⭐ Most Popular)
- **Cost**: 100% Free
- **Custom Domain**: Yes (free with your own domain)
- **SSL Certificate**: Automatic
- **Setup Time**: 5 minutes
- **Pros**: Integrated with GitHub, automatic deployments, reliable
- **Cons**: Public repositories only (unless GitHub Pro)

**Setup Steps:**
1. Push your code to GitHub repository
2. Go to Repository → Settings → Pages
3. Select branch (main/master) and root folder
4. Your site: `https://yourusername.github.io/our-wed/`
5. Optional: Add custom domain (e.g., `danielaygustavo.com`)

#### **2. Netlify** (⭐ Best User Experience)
- **Cost**: Free tier (100GB bandwidth/month)
- **Custom Domain**: Yes
- **SSL Certificate**: Automatic
- **Setup Time**: 2 minutes
- **Pros**: Drag & drop deployment, form handling, instant previews
- **Cons**: Limited bandwidth on free tier

**Setup Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your project folder, OR
3. Connect GitHub repository for auto-deployment
4. Get instant URL: `https://random-name.netlify.app`
5. Add custom domain if needed

#### **3. Vercel** (⭐ Developer Friendly)
- **Cost**: Free for personal projects
- **Custom Domain**: Yes
- **SSL Certificate**: Automatic
- **Setup Time**: 3 minutes  
- **Pros**: Fast global CDN, GitHub integration, great performance
- **Cons**: More developer-focused interface

**Setup Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Import from GitHub
3. Deploy automatically
4. Get URL: `https://our-wed.vercel.app`

### 💰 **Budget Options (Under $5/month)**

#### **4. Hostinger** ($1.99/month)
- **Best for**: Custom domain + email
- **Includes**: Domain, email hosting, SSL
- **Storage**: 100GB
- **Bandwidth**: Unlimited

#### **5. Namecheap Shared Hosting** ($2.88/month)
- **Best for**: All-in-one solution
- **Includes**: Domain, hosting, email, SSL
- **Storage**: 20GB
- **Bandwidth**: Unlimited

### 🚀 **Premium Options (For Advanced Features)**

#### **6. Cloudflare Pages** (Free + Premium CDN)
- **Cost**: Free + optional premium features
- **Best for**: Global performance
- **Pros**: Ultra-fast worldwide loading
- **Setup**: GitHub integration

#### **7. Firebase Hosting** (Google)
- **Cost**: Free tier + pay-as-you-scale
- **Best for**: Integration with Google services
- **Pros**: Google infrastructure, analytics

### 🎯 **Our Top Recommendation for Wedding Sites:**

**For Beginners**: GitHub Pages (free, simple)
**For Best Experience**: Netlify (free, feature-rich)
**For Custom Domain + Email**: Hostinger ($1.99/month)

### 📧 **Don't Forget: Email Setup**

If you want custom email addresses (e.g., `daniela@danielaygustavo.com`):

1. **Free Options**:
   - Gmail with custom domain (Google Workspace - $6/month)
   - Zoho Mail (Free for 1 user, $1/month for multiple)

2. **Included with Hosting**:
   - Most paid hosting providers include email
   - Set up: `daniela@yourdomain.com`, `gustavo@yourdomain.com`

### 🌍 **Custom Domain Setup**

1. **Buy Domain** ($10-15/year):
   - Namecheap, GoDaddy, Google Domains
   - Suggested: `danielaygustavo.com`, `bodadanielaygustavo.com`

2. **Connect to Hosting**:
   - Add CNAME record pointing to your hosting service
   - Enable SSL certificate (usually automatic)

### ⚡ **Quick Start Recommendation:**

**Fastest Setup (5 minutes, Free)**:
1. Push code to GitHub
2. Enable GitHub Pages
3. Share link: `https://yourusername.github.io/our-wed/`

**Professional Setup (30 minutes, ~$3/month)**:
1. Buy domain from Namecheap
2. Host on Netlify (free) or Hostinger ($1.99/month)
3. Set up custom email
4. Result: `https://danielaygustavo.com`

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