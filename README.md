# 📢 Ecoblog (Pi Network Community App)
"Your Direct Gateway to Pi News"

## 📖 About The Project
Ecoblog is a lightweight web application built for the Pi Network ecosystem. It serves as an ecosystem bridge, delivering the latest official Pi Network blog news straight to the Pioneer's screen.

To ensure stable and uninterrupted service, Ecoblog utilizes a custom Node.js backend to parse the official RSS feed, safely bypassing CORS and third-party API limitations. It strictly complies with Pi Network's copyright guidelines by directing users to the official source.

## ✨ Features
- **Real-time Updates:** Automatically fetches the latest posts from the official Pi Network blog.
- **Robust Backend Parser:** Replaced third-party APIs (like rss2json) with a custom Node.js `rss-parser` to guarantee stable feed delivery without cross-origin blocks.
- **Pi Browser Ready:** Integrated with Pi SDK (sandbox ready) for seamless ecosystem expansion.
- **Copyright Compliant:** Displays only dates and titles. All clicks redirect safely to the official `minepi.com` blog.

## 🛠 Tech Stack
| Category | Technology |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript (jQuery) |
| **Backend** | Node.js, Express.js, rss-parser |
| **Integration** | Pi Network SDK |

## 🚀 How to Run
This project requires Node.js to run the backend API server.

1. **Clone or download** this repository.
2. **Install dependencies:**

   ```bash
   npm install rss-parser
Start the server:

Bash
node app.js

Access the app: Open http://localhost:3000 (or your configured port) in any web browser or the Pi Browser.

📜 License
This project is licensed under the PiOS License. See the LICENSE file for the full text.

Licensed under the PiOS License. This app connects to the official Pi Network blog via RSS/Links.
Pi, Pi Network and the Pi logo are trademarks of the Pi Community Company.
