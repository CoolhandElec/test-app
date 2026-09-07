# Digital Clock with Multiple Time Zones

A beautiful, real-time digital clock application that displays the current time in different time zones around the world.

## Features

🕐 **Real-Time Clock**
- Main clock displays local time with live seconds
- Updates automatically every second
- Shows date and timezone information

🌍 **Multiple Timezones**
- Add clocks for different cities and timezones
- View time simultaneously across multiple locations
- Easy search and add functionality
- Shows UTC offset for each timezone

🔍 **Smart Search**
- Search timezones by city name
- Auto-complete suggestions
- Quick selection from suggestions
- 30+ major world cities and timezones

⏰ **Time Format Options**
- Toggle between 24-hour and 12-hour format
- Format preference is saved locally
- Consistent formatting across all clocks

💾 **Persistent Storage**
- Your timezone selections are saved in local storage
- Time format preference is remembered
- Data persists across browser sessions

🎨 **Beautiful UI**
- Neon-style digital clock display
- Smooth animations and transitions
- Responsive design for all devices
- Dark theme with accent colors
- Glowing effects on clock displays

📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Grid layout adapts to screen size
- Touch-friendly interface

## How to Use

1. **View Local Time**: Main clock shows your local time automatically
2. **Add Timezone**: 
   - Type a city name in the search box (e.g., "Tokyo", "London", "New York")
   - Select from suggestions
   - Click "+ Add Timezone" or press Enter
3. **Remove Timezone**: Click the "Remove" button on any timezone card
4. **Change Format**: Toggle the "24-Hour Format" checkbox to switch between 12-hour and 24-hour format

## Available Timezones

The app includes major cities from these regions:
- North America (New York, Chicago, Denver, Los Angeles, etc.)
- South America (São Paulo, Buenos Aires)
- Europe (London, Paris, Berlin, Rome, Moscow, etc.)
- Africa (Cairo, Johannesburg, Lagos)
- Asia (Dubai, India, Bangkok, Singapore, Hong Kong, Tokyo, Seoul)
- Australia & Pacific (Sydney, Melbourne, Auckland, Fiji)

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients, animations, and backdrop filters
- **JavaScript (ES6)** - Object-oriented programming with Intl API
- **Intl DateTimeFormat API** - Accurate timezone conversions
- **Local Storage API** - User preferences persistence

## Data Storage

Locally stored data includes:
```javascript
{
    timezones: ["America/New_York", "Asia/Tokyo", ...],
    use24Hour: true/false
}
```

## Key Features Explained

### Timezone Search
- Supports city name search
- Real-time filtering of suggestions
- Auto-scroll through available options

### Real-Time Updates
- Uses native `Intl.DateTimeFormat` API for accurate timezone conversion
- Updates every second without lag
- Maintains synchronization across all clocks

### Offset Calculation
- Automatically calculates UTC offset for each timezone
- Accounts for daylight saving time changes
- Displays offset in hours (e.g., +5.5, -8)

## Files

- `index.html` - HTML structure with semantic markup
- `styles.css` - Neon-style styling with animations
- `script.js` - DigitalClock class with timezone management
- `README.md` - Documentation

---

Made with ❤️ for global time tracking