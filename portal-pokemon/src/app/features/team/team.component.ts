import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../core/services/team.service';
import { Pokemon } from '../../core/models/pokemon.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team: Pokemon[] = [];

  constructor(public teamService: TeamService, private router: Router) {}

  ngOnInit(): void {
    this.teamService.team$.subscribe((list) => (this.team = list));
  }

  remove(id: number): void {
    this.teamService.remove(id);
  }

  goToPokemon(id: number): void {
    this.router.navigate(['/pokemon', id]);
  }
}
