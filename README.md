# 🔐 Secure Storage Manager (React Native + Expo)

A simple React Native app that demonstrates how to securely store, retrieve, and delete sensitive data using Expo SecureStore.

This project was built to understand secure local storage, component architecture, and data flow in React Native applications.


## 🧠 Key Concepts Learned

1. Secure local storage in mobile apps
2. Component-based architecture
3. Local vs shared state management
4. Asynchronous data handling
5. CRUD operations with device storage
6. UI separation by feature responsibility

## ✨ Features
- Save key–value pairs securely on device
- Retrieve stored values using a key
- Delete stored values securely
- Tab-based UI (Create / Manage)
- Input validation and user feedback
- Clean component separation

## ⚙️ Installation

1. Clone repository

   ```
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. Install dependencies

   ```
   npm install
   npx expo start
   ```

3. Install SecureStore

   ```
   npx expo install expo-secure-store


## 📱 How It Works
1. Save Data
User enters a key and value → stored securely using SecureStore.

2. Retrieve Data
User enters a key → app fetches stored value.

3. Delete Data
User enters a key → stored value is removed permanently.


### 👨‍💻 Author

Built as a learning project for mastering React Native storage and component architecture.