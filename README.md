# 🧠 Deepfake Detection AI
An advanced **AI-powered media authenticity verification system** that detects manipulated videos & audio using machine learning, signal analysis, and model intelligence. Built with **React + Flowbite + Modern UI**, designed for real-time verification and secure detection workflows.

---

## 🚀 Features

### 🎯 Core Capabilities
- ✅ Detects **Deepfake Videos, Images & Audio**
- ✅ Provides **Fake / Real Classification**
- ✅ Confidence Score (%) for reliability
- ✅ Real-time Scan Processing
- ✅ Secure & Privacy Focused
- ✅ Latency 600ms

### 🧩 Product Experience
- Modern Dashboard UI
- Upload & Scan Interface
- Detection History Tracking
- Analytics Overview
- Clean UX & Fast Performance

---

## 🏗️ Tech Stack

### 🌐 Frontend
- React / Vite
- Flowbite + TailwindCSS + ShadCn
- Lucide Icons
- Custom UI Components

### 🤖 AI / Backend (Pluggable)
- ML Model (Deepfake Detection)
- Python / Node backend
- API Integration Ready

---

## 📸 Screenshots

<img width="1896" height="893" alt="image" src="https://github.com/user-attachments/assets/b3ed21e1-7a19-4f38-98f1-6eddfcec699b" />
<img width="1899" height="1079" alt="image" src="https://github.com/user-attachments/assets/6836631c-5c7c-45ac-ae72-1706624cf2dc" />
<img width="1893" height="878" alt="image" src="https://github.com/user-attachments/assets/b4e116f1-fc80-4ce6-b79d-a8962c84e49c" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/25ffcb78-cf66-406c-a18e-b29ee19f51f9" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dfb01d31-5b49-4938-af59-415e30209354" />

---

## 📂 Project Structure
```bash
src/
 ├── components/
 │    ├── ForensicDashboard.jsx   # The Main UI
 │    ├── Auth/
 │    │    └── LoginModal.jsx     # Firebase Login UI
 │    └── Layout/
 │         └── Header.jsx         # Aegis Branded Header
 ├── context/
 │    ├── DeepfakeContext.jsx     # Scan & UI States
 │    └── AuthContext.jsx         # Firebase User States
 ├── lib/
 │    ├── firebase.js             # Firebase Config & Auth Init
 │    └── api.js                  # DetectApi & Mongo Save Logic
 ├── ui/                          # Shadcn/Flowbite Atoms
 ├── App.jsx                      # Main Router & Providers
 └── main.jsx
