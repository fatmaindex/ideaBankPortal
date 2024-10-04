import { Component } from '@angular/core';
import { Idea } from '../../models/idea';
import { IdeaService } from './../../services/idea.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.component.html',
  styleUrl: './idea-details.component.scss'
})
export class IdeaDetailsComponent {
  currentIdea: Idea|null=null
  currentIdeaID: string | null = null

  constructor(private ideaService: IdeaService, private ActivatedRoute: ActivatedRoute) {
    // get the idea id from the rout   
    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.currentIdeaID = paramMap.get('ideaID')
    })
    if (this.currentIdeaID) {
      // Fetch the idea if currentIdeaID is not null
      this.ideaService.getIdeaByID(this.currentIdeaID).subscribe((currentIdea) => {
        this.currentIdea = currentIdea;
      });

    }
  }
}