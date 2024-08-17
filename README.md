# Messaging Application of MIS

## 1. Introduce Project

### Overview:
This repository is a school project which contains a messaging application built with **React.js** for the frontend and **Django** for the backend. The application offers real-time chat capabilities, allowing users to communicate within chat rooms. It includes essential features such as user authentication, chatroom management, and seamless message handling.

### Project Purposes:
1. **Practice CI/CD Workflow**: This project is integrated with CircleCI and GitHub Actions to automate the build, test, and deployment processes.
2. **Integration Testing**: Implement and practice integration testing to ensure all components of the application work together as expected.
3. **Continuous Deployment**: The project is continuously deployed on Vercel, providing a live environment that reflects the latest changes from the main branch.
4. **Scalable Application Architecture**: Demonstrate the use of Docker and containerization for deploying a scalable and portable application.

## 2. How to Install

### Backend (Django)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ellyjj1/message.git
   cd message/backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install the dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser (optional, for admin access):**
   ```bash
   python manage.py createsuperuser
   ```

### Frontend (React.js)

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

## 3. How to Start

### Backend (Django)

1. **Start the Django development server:**
   ```bash
   python manage.py runserver
   ```
   The backend server will be running at `http://127.0.0.1:8000/`.

### Frontend (React.js)

1. **Start the React development server:**
   ```bash
   npm start
   ```
   The frontend will be running at `http://localhost:3000/`.

## 4. How to Use

1. **Register/Login:**
   - Navigate to the login page.
   - If you don't have an account, register by providing your username and password.
   - After registration, log in using your credentials.

2. **Join or Create a Chatroom:**
   - After logging in, you can join existing chatrooms or create a new one.
   - Enter the chatroom to start sending and receiving messages in real-time.

3. **Send Messages:**
   - Type your message in the input field and press enter to send.
   - Messages from other users in the chatroom will appear in the chat window.

4. **Sum Up App:**
   - App for sum up the numbers, only use after login.

5. **Logout:**
   - log out the accout.
