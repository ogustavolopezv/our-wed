// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('2026-05-02T19:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<p class="countdown-message">The wedding has begun! 🎉</p>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60; // Adjust for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// RSVP Form Handling
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        attendance: document.getElementById('attendance').value,
        dietary: document.getElementById('dietary').value,
        message: document.getElementById('message').value
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.attendance) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission (in a real application, this would send to a server)
    console.log('RSVP Submitted:', formData);
    
    // Show success message
    showFormMessage('Thank you for your RSVP! We look forward to celebrating with you.', 'success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
        document.getElementById('rsvp-form').reset();
        hideFormMessage();
    }, 3000);
});

function showFormMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    messageElement.style.display = 'block';
}

function hideFormMessage() {
    const messageElement = document.getElementById('form-message');
    messageElement.style.display = 'none';
    messageElement.className = 'form-message';
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Make hero section visible immediately
document.querySelector('.hero').style.opacity = '1';

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add click animations to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Don't animate if it's a form submit button
        if (this.type === 'submit') return;
        
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Calendar Export Functionality
const weddingEvent = {
    title: 'Boda de Daniela & Gustavo',
    description: 'Celebra con nosotros nuestra boda en Hacienda de Rueda. ¡No podemos esperar para compartir este día especial contigo!',
    location: 'Hacienda de Rueda, Puerto de Guayabitos 206, Fracc. Granjas Económicas, 37683 León de los Aldama, Guanajuato, México',
    startDate: '2026-05-02T18:00:00', // 6:00 PM reception start
    endDate: '2026-05-03T00:00:00'    // Midnight end
};

// Generate Google Calendar URL
function generateGoogleCalendarUrl(event) {
    const startDate = new Date(event.startDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const endDate = new Date(event.endDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.title,
        dates: `${startDate}/${endDate}`,
        details: event.description,
        location: event.location
    });
    
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Generate Outlook Calendar URL
function generateOutlookCalendarUrl(event) {
    const startDate = new Date(event.startDate).toISOString();
    const endDate = new Date(event.endDate).toISOString();
    
    const params = new URLSearchParams({
        path: '/calendar/action/compose',
        rru: 'addevent',
        subject: event.title,
        startdt: startDate,
        enddt: endDate,
        body: event.description,
        location: event.location
    });
    
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

// Generate ICS file content
function generateICSFile(event) {
    const startDate = new Date(event.startDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const endDate = new Date(event.endDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//Wedding Event//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:wedding-${now}@danielaygustavo.com
DTSTART:${startDate}Z
DTEND:${endDate}Z
DTSTAMP:${now}Z
ORGANIZER;CN=Daniela & Gustavo:mailto:daniela@example.com
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;
    
    return icsContent;
}

// Download ICS file
function downloadICSFile(event) {
    const icsContent = generateICSFile(event);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'boda-daniela-gustavo.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Custom Audio Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('wedding-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.querySelector('.progress-fill');
    const timeDisplay = document.querySelector('.time-display');
    const muteBtn = document.getElementById('mute-btn');
    const volumeSlider = document.getElementById('volume-slider');
    
    let isPlaying = false;
    
    // Format time helper function
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Play/Pause functionality
    playPauseBtn?.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = '▶️';
            isPlaying = false;
        } else {
            audio.play();
            playPauseBtn.textContent = '⏸️';
            isPlaying = true;
        }
    });
    
    // Update progress and time
    audio?.addEventListener('timeupdate', function() {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = progress + '%';
            
            const current = formatTime(audio.currentTime);
            const total = formatTime(audio.duration);
            timeDisplay.textContent = `${current} / ${total}`;
        }
    });
    
    // Progress bar click
    progressBar?.addEventListener('click', function(e) {
        if (audio.duration) {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const clickTime = (clickX / width) * audio.duration;
            audio.currentTime = clickTime;
        }
    });
    
    // Volume control
    volumeSlider?.addEventListener('input', function() {
        audio.volume = volumeSlider.value;
        updateVolumeIcon();
    });
    
    // Mute toggle
    muteBtn?.addEventListener('click', function() {
        if (audio.muted) {
            audio.muted = false;
            volumeSlider.value = audio.volume;
        } else {
            audio.muted = true;
        }
        updateVolumeIcon();
    });
    
    // Update volume icon
    function updateVolumeIcon() {
        if (audio.muted || audio.volume == 0) {
            muteBtn.textContent = '🔇';
        } else if (audio.volume < 0.5) {
            muteBtn.textContent = '🔉';
        } else {
            muteBtn.textContent = '🔊';
        }
    }
    
    // Set initial volume
    if (audio) {
        audio.volume = 0.7;
        updateVolumeIcon();
    }
    
    // Reset play button when audio ends
    audio?.addEventListener('ended', function() {
        playPauseBtn.textContent = '▶️';
        isPlaying = false;
        progressFill.style.width = '0%';
    });
});

// Calendar dropdown and export event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Calendar dropdown toggle
    const calendarDropdown = document.querySelector('.calendar-dropdown');
    const calendarToggle = document.querySelector('.calendar-toggle');
    
    if (calendarToggle) {
        calendarToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            calendarDropdown.classList.toggle('open');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (calendarDropdown) {
            calendarDropdown.classList.remove('open');
        }
    });
    
    // Prevent dropdown from closing when clicking inside menu
    const calendarMenu = document.querySelector('.calendar-menu');
    if (calendarMenu) {
        calendarMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Calendar export functions
    // Google Calendar
    document.getElementById('google-calendar')?.addEventListener('click', function() {
        window.open(generateGoogleCalendarUrl(weddingEvent), '_blank');
        calendarDropdown.classList.remove('open');
    });
    
    // Outlook Calendar
    document.getElementById('outlook-calendar')?.addEventListener('click', function() {
        window.open(generateOutlookCalendarUrl(weddingEvent), '_blank');
        calendarDropdown.classList.remove('open');
    });
    
    // Apple Calendar (opens ICS file)
    document.getElementById('apple-calendar')?.addEventListener('click', function() {
        downloadICSFile(weddingEvent);
        calendarDropdown.classList.remove('open');
    });
    
    // Download ICS
    document.getElementById('download-ics')?.addEventListener('click', function() {
        downloadICSFile(weddingEvent);
        calendarDropdown.classList.remove('open');
    });
});
