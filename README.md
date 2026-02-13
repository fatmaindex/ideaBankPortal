# 💡 Idea Bank - User Portal

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

**IdeaBankPortal** is the user-facing side of the Idea Bank ecosystem. It allows innovative thinkers to register, submit their creative ideas through a structured form, and track their submissions.

---

## 🚀 Key Features

* **Idea Submission Form:** A dedicated interface for users to submit new ideas with titles, descriptions, and categories.
* **User Authentication:** Secure login/logout system using `localStorage` to persist user sessions.
* **Dynamic Landing Page:** A welcoming interface that guides users through the platform's features.
* **Responsive Navbar:** Real-time navigation that updates based on the user's authentication status (Login/Logout).
* **Protected Submission:** Use of `AuthGuard` to ensure only registered users can access the submission form and idea details.

---

## 🛠 Technical Architecture

### 📂 Folder Structure Highlights
* **Components:** * `form/`: Where the magic happens (Idea creation).
    * `landing/`: The main entry point for users.
    * `idea-details/`: View specific details about a submitted idea.
* **Services:**
    * `UserService`: Manages profile names and validates credentials.
    * `IdeaService`: Handles sending new ideas to the backend via `POST`.
    * `AuthService`: Controls the global login state using `BehaviorSubject`.



---

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/fatmaindex/ideaBankPortal.git](https://github.com/fatmaindex/ideaBankPortal.git)
   cd ideaBankPortal

Install dependencies:

npm install


Environment Sync:
Ensure your backend (JSON Server) is running on the port specified in environments/environment.ts.

Run the Portal:

ng serve


Access the portal at:
http://localhost:4200

📡 API Integration

The portal communicates with the central Idea Bank API:

Action	Service Method	HTTP Method
Submit New Idea	createIdea()	POST
View All Ideas	getIdeas()	GET
Check Username	checkUserName()	GET
Validate Login	checkUserLogeed()	GET
🛡 Security

Guard: AuthGuard is implemented to protect the /form and /idea-details routes.

Feedback: Uses MatSnackBar to notify users if they try to access restricted areas without logging in.

📝 Development Note

This portal is designed to be lightweight and user-friendly, focusing on a seamless "Idea Submission" flow. It works in tandem with the Admin Dashboard to complete the idea lifecycle.

🔗 Related Projects

This project is part of the Idea Bank Ecosystem. To see the administration and evaluation side, check out:

Idea Bank Admin Dashboard
 - Where admins review and rate submitted ideas.
