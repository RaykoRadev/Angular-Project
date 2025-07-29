
# 🧠 Suggestions & Fixes for Angular Project

This document includes curated tips, common bug fixes, and best practices based on your current Angular app structure.

---

## 🔧 Fixes for Current Issues

### 1. ✅ Email Validation (Login/Register)
**TS:**
```ts
email: new FormControl('', [Validators.required, Validators.email])
```

**HTML:**
```html
<mat-error *ngIf="registerForm.get('email')?.hasError('email')">
  Моля, въведете валиден имейл.
</mat-error>
```

---

### 2. ✅ Password Mismatch Error Display

**TS:**
```ts
passGroup: this.fb.group(
  {
    password: ['', [Validators.required]],
    repass: ['', [Validators.required]],
  },
  { validators: matchPasswordsValidator('password', 'repass') }
)
```

**HTML:**
```html
<mat-form-field>
  <input matInput formControlName="repass" />
  <mat-error *ngIf="registerForm.get('passGroup')?.hasError('matchPasswordsValidator')">
    Паролите не съвпадат.
  </mat-error>
</mat-form-field>
```

✅ Avoid using `@if`, prefer `*ngIf` in templates.

---

### 3. ✅ Navbar Visibility After Login/Logout

**AuthService:**
```ts
isLoggedIn$ = new BehaviorSubject<boolean>(!!getUserData());

login(...) { this.isLoggedIn$.next(true); }
logout() { clearUserData(); this.isLoggedIn$.next(false); }
```

**Navbar Component:**
```ts
ngOnInit() {
  this.authService.isLoggedIn$.subscribe((isLogged) => {
    this.isLogged = isLogged;
  });
}
```

**HTML:**
```html
<li *ngIf="!isLogged"><a routerLink="/login">Login</a></li>
<li *ngIf="isLogged"><a (click)="logout()">Logout</a></li>
```

---

## ✨ Core Features To Implement

### 🖼️ Gallery View
- Use `*ngFor` and Material cards.
- Fetch items from service/API.

### 🔍 Detail View
- Route like `/details/:id`
- Use `ActivatedRoute` to fetch data.

### 📝 Edit View
- Reuse create form.
- Pre-fill data using `.patchValue()`.

### 🗑️ Delete Functionality
- Use `window.confirm()` or Material dialog.
- Protect by checking ownership.

### ➕ Create Card
- Simple reactive form.
- Upload image, set metadata.

### 👤 User Profile
- Route like `/profile/:id`
- List user-created items.

### ❤️ Likes
- Track user likes.
- Show total likes.
- Use toggle logic and visual cues.

---

## 🧠 Extra Ideas

- [ ] Add route guards with `canActivate`
- [ ] Create reusable components (card, error box, etc.)
- [ ] Use resolvers to preload data
- [ ] Create `shared` and `core` modules for better architecture
- [ ] Handle image uploads via external services (Cloudinary, Firebase)

