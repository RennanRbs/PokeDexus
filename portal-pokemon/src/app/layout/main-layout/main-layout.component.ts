import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Pokémon', icon: 'pi pi-star', routerLink: '/pokemon' },
    { label: 'Tipos', icon: 'pi pi-tag', routerLink: '/types' },
    { label: 'Habilidades', icon: 'pi pi-bolt', routerLink: '/abilities' },
    { label: 'Itens', icon: 'pi pi-box', routerLink: '/items' },
    { label: 'Quiz', icon: 'pi pi-question-circle', routerLink: '/quiz' },
    { label: 'Minha equipe', icon: 'pi pi-users', routerLink: '/team' },
  ];
  breadcrumbItems: MenuItem[] = [];

  constructor(private router: Router) {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      this.buildBreadcrumb(e.url);
    });
    this.buildBreadcrumb(this.router.url);
  }

  private buildBreadcrumb(url: string): void {
    const parts = url.split('/').filter(Boolean);
    this.breadcrumbItems = [{ label: 'Home', routerLink: '/home' }];
    let path = '';
    for (const part of parts) {
      path += '/' + part;
      const label = part === 'home' ? 'Home' : part.charAt(0).toUpperCase() + part.slice(1);
      this.breadcrumbItems.push({ label, routerLink: path });
    }
  }
}
