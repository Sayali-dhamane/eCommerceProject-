import { Component, inject } from '@angular/core';
import { FakestoreApiService } from '../../../core/api/fakestore-api.service';
import { Router } from '@angular/router';
import { storage } from '../../../core/utils/storage';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // username = 'mor_2314'; password = '83r5^_';
  // constructor(private api: FakestoreApiService, private r: Router) { }
  // login() {
  //   this.api.login({ username: this.username, password: this.password })
  //     .subscribe((res: any) => { storage.set('token', res.token); this.r.navigate(['/products']); });
  // }

  fb = inject(FormBuilder);

  constructor(
    private api: FakestoreApiService,
    private router: Router
  ) { }
  form = this.fb.group({
    username: ['mor_2314', Validators.required],
    password: ['83r5^_', Validators.required]
  });
  login() {
    this.api.login(this.form.value as any).subscribe(res => {
      storage.set('token', res.token);
      this.router.navigate(['/products']);
    });
  }
}

