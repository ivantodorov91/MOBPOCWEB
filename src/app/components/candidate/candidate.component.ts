import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.userManager.getUser()
    .then(user => console.log(user))
    .catch(e => console.log(e));
  }

}
