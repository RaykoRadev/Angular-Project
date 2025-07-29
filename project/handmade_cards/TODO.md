# 📋 Angular Project TODO

## ✅ Done

- [x] Login functionality
- [x] Register functionality
- [x] Logout functionality
- [x] Password confirmation validator
- [x] Gallery View
- [x] Detail View
- [x] Edit View
- [x] Delete Functionality
- [x] Create New Card
- [x] User Profile View

---

## 🛠️ Fixes & Improvements

- [x] Fix **email validation** for Login and Register forms:

  - Connect Angular's `Validators.email` to both form controls.
  - Show `<mat-error>` if email is invalid.

- [x] Fix **layout bug**: password mismatch error is showing _inside input_:

  - Ensure `<mat-error>` is inside `<mat-form-field>` and outside `<input>`.
  - Replace `@if` with `*ngIf` to ensure proper rendering.

- [x] Update **navigation buttons** on login/register/logout:
  - Use `BehaviorSubject` in an `AuthService`.
  - Subscribe in navigation component.
  - Conditionally show `.guest` and `.user` links.

---

## 🔧 Core Features to Implement

- [ ] **Likes Functionality**
  - Like button (only once per user).
  - Show total likes on each card.
  - Highlight if the current user has liked it.

---

## 🧠 featured implementations and improvments

- [ ] category component to be replaced by one component, which dinamicly render needed category
- [ ] Add routing guards for protected pages (edit, create, etc.)
- [ ] Use route resolver to preload card data.
- [ ] Store user info in a shared `UserService`.
- [x] Create reusable components (e.g. card preview, error box).
