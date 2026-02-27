import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

const STORAGE_KEY = 'portal-pokemon-team';
const MAX_TEAM = 6;

@Injectable({ providedIn: 'root' })
export class TeamService {
  private team: Pokemon[] = this.loadFromStorage();
  private subject = new BehaviorSubject<Pokemon[]>(this.team);

  team$ = this.subject.asObservable();

  get count(): number {
    return this.team.length;
  }

  get list(): Pokemon[] {
    return [...this.team];
  }

  add(pokemon: Pokemon): boolean {
    if (this.team.length >= MAX_TEAM) return false;
    if (this.team.some((p) => p.id === pokemon.id)) return false;
    this.team.push(pokemon);
    this.saveAndEmit();
    return true;
  }

  remove(id: number): void {
    this.team = this.team.filter((p) => p.id !== id);
    this.saveAndEmit();
  }

  has(id: number): boolean {
    return this.team.some((p) => p.id === id);
  }

  canAdd(): boolean {
    return this.team.length < MAX_TEAM;
  }

  private loadFromStorage(): Pokemon[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  private saveAndEmit(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.team));
    } catch {}
    this.subject.next([...this.team]);
  }
}
