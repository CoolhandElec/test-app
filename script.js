// Digital Clock with Multiple Timezones

class DigitalClock {
    constructor() {
        this.timezones = this.loadTimezones();
        this.use24Hour = localStorage.getItem('use24Hour') !== 'false';
        this.allTimezones = this.getAvailableTimezones();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
        this.render();
    }

    setupEventListeners() {
        document.getElementById('addBtn').addEventListener('click', () => this.addTimezone());
        document.getElementById('timezoneInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTimezone();
        });
        document.getElementById('timezoneInput').addEventListener('input', (e) => {
            this.showSuggestions(e.target.value);
        });
        document.getElementById('use24Hour').addEventListener('change', (e) => {
            this.use24Hour = e.target.checked;
            localStorage.setItem('use24Hour', this.use24Hour);
            this.updateTime();
        });
    }

    getAvailableTimezones() {
        return [
            'America/New_York',
            'America/Chicago',
            'America/Denver',
            'America/Los_Angeles',
            'America/Anchorage',
            'Pacific/Honolulu',
            'Europe/London',
            'Europe/Paris',
            'Europe/Berlin',
            'Europe/Madrid',
            'Europe/Rome',
            'Europe/Amsterdam',
            'Europe/Istanbul',
            'Europe/Moscow',
            'Asia/Dubai',
            'Asia/Kolkata',
            'Asia/Bangkok',
            'Asia/Singapore',
            'Asia/Hong_Kong',
            'Asia/Shanghai',
            'Asia/Tokyo',
            'Asia/Seoul',
            'Australia/Sydney',
            'Australia/Melbourne',
            'Australia/Brisbane',
            'Australia/Perth',
            'Pacific/Auckland',
            'Pacific/Fiji',
            'Africa/Cairo',
            'Africa/Johannesburg',
            'Africa/Lagos',
            'America/Sao_Paulo',
            'America/Buenos_Aires',
            'America/Toronto',
            'America/Mexico_City',
        ];
    }

    showSuggestions(query) {
        const container = document.getElementById('suggestionsContainer');
        
        if (!query.trim()) {
            container.classList.add('hidden');
            return;
        }

        const matches = this.allTimezones.filter(tz => {
            const city = tz.split('/')[1].replace(/_/g, ' ');
            return city.toLowerCase().includes(query.toLowerCase());
        }).slice(0, 8);

        if (matches.length === 0) {
            container.classList.add('hidden');
            return;
        }

        container.innerHTML = matches.map(tz => `
            <div class="suggestion-item" data-timezone="${tz}">
                ${tz.split('/')[1].replace(/_/g, ' ')}
            </div>
        `).join('');

        container.classList.remove('hidden');

        container.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const tz = item.dataset.timezone;
                this.addTimezoneByName(tz);
                container.classList.add('hidden');
                document.getElementById('timezoneInput').value = '';
            });
        });
    }

    addTimezone() {
        const input = document.getElementById('timezoneInput');
        this.addTimezoneByName(input.value.trim());
        input.value = '';
    }

    addTimezoneByName(name) {
        if (!name) return;

        // Check if already added
        if (this.timezones.some(tz => tz === name)) {
            alert('This timezone is already added');
            return;
        }

        // Validate timezone
        try {
            new Date().toLocaleString('en-US', { timeZone: name });
            this.timezones.push(name);
            this.saveTimezones();
            this.render();
        } catch (e) {
            alert('Invalid timezone. Please select from suggestions.');
        }
    }

    removeTimezone(tz) {
        this.timezones = this.timezones.filter(t => t !== tz);
        this.saveTimezones();
        this.render();
    }

    updateTime() {
        // Update main clock (local time)
        const now = new Date();
        document.getElementById('mainTime').textContent = this.formatTime(now);
        document.getElementById('mainDate').textContent = this.formatDate(now);

        // Update timezone clocks
        document.querySelectorAll('.timezone-card').forEach(card => {
            const tz = card.dataset.timezone;
            const time = this.getTimeInTimezone(tz);
            card.querySelector('.tz-time').textContent = this.formatTime(time);
            card.querySelector('.tz-date').textContent = this.formatDate(time);
        });
    }

    formatTime(date) {
        if (this.use24Hour) {
            return date.toLocaleTimeString('en-US', { 
                hour24: true, 
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        } else {
            return date.toLocaleTimeString('en-US', { 
                hour12: true, 
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    }

    formatDate(date) {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    getTimeInTimezone(tz) {
        const date = new Date();
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        const tzTime = new Date(utc + (3600000 * this.getTimezoneOffset(tz)));
        return tzTime;
    }

    getTimezoneOffset(tz) {
        const date = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: tz,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const parts = formatter.formatToParts(date);
        const tzDate = new Date(
            parseInt(parts.find(p => p.type === 'year').value),
            parseInt(parts.find(p => p.type === 'month').value) - 1,
            parseInt(parts.find(p => p.type === 'day').value),
            parseInt(parts.find(p => p.type === 'hour').value),
            parseInt(parts.find(p => p.type === 'minute').value),
            parseInt(parts.find(p => p.type === 'second').value)
        );

        return (tzDate - date) / 3600000;
    }

    getTimezoneOffset2(tz) {
        const now = new Date();
        const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(now.toLocaleString('en-US', { timeZone: tz }));
        return (tzDate - utcDate) / (1000 * 60 * 60);
    }

    render() {
        const grid = document.getElementById('timezonesGrid');
        const emptyState = document.getElementById('emptyState');

        if (this.timezones.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        grid.innerHTML = this.timezones.map(tz => {
            const time = this.getTimeInTimezone(tz);
            const city = tz.split('/')[1].replace(/_/g, ' ');
            const offset = this.getTimezoneOffset(tz);
            const offsetStr = offset >= 0 ? `+${offset.toFixed(1)}` : offset.toFixed(1);

            return `
                <div class="timezone-card" data-timezone="${tz}">
                    <div class="tz-name">${city}</div>
                    <div class="tz-time">${this.formatTime(time)}</div>
                    <div class="tz-date">${this.formatDate(time)}</div>
                    <div class="tz-offset">UTC ${offsetStr}</div>
                    <button class="remove-btn" data-timezone="${tz}">Remove</button>
                </div>
            `;
        }).join('');

        // Add event listeners to remove buttons
        grid.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.removeTimezone(btn.dataset.timezone);
            });
        });
    }

    saveTimezones() {
        localStorage.setItem('timezones', JSON.stringify(this.timezones));
    }

    loadTimezones() {
        const stored = localStorage.getItem('timezones');
        return stored ? JSON.parse(stored) : [];
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DigitalClock();
});