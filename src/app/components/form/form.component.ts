import { Component } from '@angular/core';
import { Idea } from '../../models/idea';
import { IdeaService } from '../../services/idea.service';
import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  loggedInUserName: string | null = null
  constructor(private ideaService: IdeaService, private userService: UserService) { }
  // method to create new idea
  onSubmitIdea(form: NgForm) {
    if (form.invalid) {
      alert("error")
      return;
    }

    const { title, description, problemDescription, ideaEffect } = form.value;
    // Subscribing to get the  current user name
    this.userService.currentUserName$.subscribe((userName) => {
      this.loggedInUserName = userName
    })
    this.ideaService.getIdeas().subscribe((ideas) => {
      let newIdeaID = (ideas.length + 1).toString()

      // create new idea
      const newIdea = new Idea(newIdeaID, this.loggedInUserName, title, description, problemDescription, ideaEffect);
      // send the idea to the api
      this.ideaService.createIdea(newIdea).subscribe(
        (newIdea) => {
          alert(' Your Idea submitted');
          form.reset();
        }
      );
    })

  }
}

