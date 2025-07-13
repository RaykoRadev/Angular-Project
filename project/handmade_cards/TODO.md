# 📋 Angular Project TODO

## ✅ Done

- [x] Login functionality
- [x] Register functionality
- [x] Logout functionality
- [x] Password confirmation validator

---

## 🛠️ Fixes & Improvements

- [ ] Fix **email validation** for Login and Register forms:

  - Connect Angular's `Validators.email` to both form controls.
  - Show `<mat-error>` if email is invalid.

- [ ] Fix **layout bug**: password mismatch error is showing _inside input_:

  - Ensure `<mat-error>` is inside `<mat-form-field>` and outside `<input>`.
  - Replace `@if` with `*ngIf` to ensure proper rendering.

- [x] Update **navigation buttons** on login/register/logout:
  - Use `BehaviorSubject` in an `AuthService`.
  - Subscribe in navigation component.
  - Conditionally show `.guest` and `.user` links.

---

## 🔧 Core Features to Implement

- [ ] **Gallery View**

  - Display all available cards/items.
  - Show basic info and thumbnail.

- [ ] **Detail View**

  - Show full details of a selected item.
  - Include image, description, author, likes.

- [ ] **Edit View**

  - Allow only the owner to edit a card.
  - Reuse create form with pre-filled data.

- [ ] **Delete Functionality**

  - Only available to the creator.
  - Confirm before deletion.

- [ ] **Create New Card**

  - Form with image upload, title, description.
  - Connect to backend and rerender gallery.

- [ ] **User Profile View**

  - Display user information and their posted cards.

- [ ] **Likes Functionality**
  - Like button (only once per user).
  - Show total likes on each card.
  - Highlight if the current user has liked it.

---

## 🧠 Ideas to Consider

- [ ] Add routing guards for protected pages (edit, create, etc.)
- [ ] Use route resolver to preload card data.
- [ ] Store user info in a shared `UserService`.
- [ ] Create reusable components (e.g. card preview, error box).
- [ ] Style using a mix of Angular Material and custom CSS.
