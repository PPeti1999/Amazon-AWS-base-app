# Medical Toolbox

**Medical Toolbox** is a modern, AWS-based e-commerce web application designed for managing and browsing medical tools. It was developed as part of the MSc Independent Laboratory 2 course to demonstrate cloud-native application development using AWS services.

## 🚀 Features

The application features a role-based access control (RBAC) system with a responsive user interface:

*   **Guest Users (Logged out):** Can browse the catalog of medical tools and view product details.
*   **Registered Users:** Can log in, browse the product catalog, and view details.
*   **Administrators:** Have full CRUD (Create, Read, Update, Delete) capabilities. They can add new medical tools, edit existing ones, delete products, and upload product images to cloud storage.

## 🛠️ Technology Stack

The project leverages a modern full-stack approach, heavily utilizing the AWS ecosystem.

### Frontend
*   **Next.js:** Framework for fast, dynamic, and server-rendered React applications.
*   **React Context API:** Used for managing global user state and authentication contexts.
*   **Tailwind CSS:** For clean, responsive, and modern UI styling.

### Backend (AWS Amplify Gen 2)
*   **Amazon Cognito:** Handles user authentication, registration, and group-based authorization (e.g., "Admins" group).
*   **Amazon DynamoDB:** A NoSQL database used to store structured data like user profiles and product details (name, description, price, image URLs).
*   **Amazon S3:** Cloud storage for uploading and serving product images.
*   **AWS AppSync (GraphQL):** Manages data fetching, updates, and real-time synchronization between the frontend and the database.
*   **AWS Lambda:** Serverless compute for custom backend logic.

## 🏗️ Architecture & Key Components

The codebase is structured to separate authentication, data models, storage, and UI components cleanly.

*   **`auth/resource.ts`**: Configures Amazon Cognito. Enables email-based login and defines user groups, specifically the "Admins" group.
*   **`data/resource.ts`**: Defines the DynamoDB schema for the `Product` entity and sets up role-based access rules (e.g., Guests can read, Admins can read/write/delete).
*   **`storage/resource.ts`**: Configures the Amazon S3 bucket (`onyxStoreNextGen2Bucket`) and its access policies for different user groups.
*   **`middleware.ts`**: Next.js middleware that acts as a route guard. It checks if a user has admin privileges before granting access to `/admin` routes.
*   **`context/AdminContext.tsx`**: A React Context provider that listens to AWS Amplify Hub auth events to manage and distribute the user's admin status across components.
*   **Auto-generated UI Components**: Utilizes `npx amplify generate forms` to automatically create React forms based on the backend data models for creating and updating products.

## 🔮 Future Enhancements

*   **Product Reviews:** Allow registered users to leave reviews and ratings on medical tools.
*   **Ordering System:** Implement a checkout and ordering system for non-admin users to actually purchase the tools.

## 👨‍💻 Author
**Péter Benjámin Pásztori** 
*Developed for MSc Independent Laboratory 2*
