import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SecurityService } from 'src/app/security/security.service';
import { ToastrService } from 'ngx-toastr';
import { parseWebAPiErrors } from 'src/app/helpers/parseWebAPIErrors';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  errors:string[] = [];
  oldPass:string = '';
  newPass:string = '';
  confirmPass:string = '';

  @Output() closeChangingPass = new EventEmitter<void>();

  constructor(private http: HttpClient, private securityService: SecurityService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  closeModal()
  {
    this.closeChangingPass.emit();
  }

  saveChanges()
  {
    if(this.newPass != this.confirmPass)
    {
      this.errors.push("Password confirmation doesn't match the password")
      return;
    }

    this.http.get(`https://localhost:44325/api/Accounts/changePass?id=${this.securityService.getFieldFromJWT('id')}
    &newPass=${this.newPass}&oldPass=${this.oldPass}`).subscribe(x=>
      {

        this.toastr.success("Password changed!");
        this.closeModal();
      },
      (err:any) =>
      {
       (this.errors = parseWebAPiErrors(err));
      });
  }
}
