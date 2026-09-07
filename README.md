# To-Do List Application

A feature-rich to-do list app with persistent local storage, filters, and a beautiful UI.

## Features

✅ **Task Management**
- Add, complete, and delete tasks
- Tasks are automatically saved to your browser's local storage
- Data persists even after closing the browser

🔍 **Filtering Options**
- View all tasks
- Filter by active tasks
- Filter by completed tasks
- Real-time statistics

📊 **Statistics Dashboard**
- Total tasks count
- Active tasks count
- Completed tasks count

🎯 **Priority Levels**
- Assign priority to tasks (High, Medium, Low)
- Visual priority badges
- Color-coded priorities

🧹 **Bulk Actions**
- Clear all completed tasks
- Clear all tasks at once
- Confirmation dialogs to prevent accidental deletion

📱 **Responsive Design**
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly interface
- Smooth animations and transitions

🎨 **Beautiful UI**
- Modern gradient design
- Smooth animations
- Intuitive user interface
- Visual feedback on interactions

## How to Use

1. **Add a Task**: Type in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Delete a Task**: Click the "Delete" button on any task
4. **Filter Tasks**: Use the filter buttons to view All, Active, or Completed tasks
5. **Clear Tasks**: Use the action buttons to clear completed or all tasks

## Local Storage

All your tasks are automatically saved to your browser's local storage:
- Tasks persist across browser sessions
- No server or internet connection required
- Completely private - data stays on your device
- Clear browser data to reset all tasks

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6)** - Object-oriented programming with local storage API
- **Local Storage API** - Browser data persistence

## Data Structure

Each task is stored as an object with:
```javascript
{
    id: timestamp,
    text: "Task description",
    completed: false,
    createdAt: "Date string",
    priority: "medium" // high, medium, low
}
```

## Files

- `index.html` - HTML structure with semantic markup
- `styles.css` - Modern styling with animations
- `script.js` - TodoApp class with full functionality

---

Made with ❤️ for productivity enthusiasts