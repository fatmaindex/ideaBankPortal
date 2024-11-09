import { Component } from '@angular/core';
import { IdeaService } from './../../services/idea.service';
import { Idea } from '../../models/idea';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  showenIdeas: Idea[] = []
  constructor(private ideaService: IdeaService, private router: Router) {
    // Fetch ideas
    this.ideaService.getIdeas().subscribe((ideas) => {
      this.showenIdeas = ideas;
    })
  }
  detailsOnClick(ideaID:string) {
    this.router.navigate(['/ideaDetails',ideaID])
  }
}
