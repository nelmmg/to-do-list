# My Todo List - React & Firebase

Demo: https://my-todo-list-d8b48.web.app/

<img src="https://github.com/nelmmg/to-do-list/blob/assets/MyTodoList.png?raw=true" width="700">

## Firebase

### Firebase Rules

Rules to be deployed in firebase:

    service cloud.firestore {
        match /databases/{database}/documents {
            match /users/{userId} {
                allow read, write: if request.auth != null && request.auth.uid == userId;
            }
            match /users/{userId}/{tasks=**} {
                allow read, write: if request.auth != null && request.auth.uid == userId;
            }
        }
    }
