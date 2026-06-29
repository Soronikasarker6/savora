import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'SAVORA — Every Flavor Has a Story',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us — SAVORA',
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu/menu.component').then((m) => m.MenuComponent),
    title: 'Our Menu — SAVORA',
  },
  {
    path: 'reservations',
    loadComponent: () =>
      import('./pages/reservations/reservations.component').then(
        (m) => m.ReservationsComponent
      ),
    title: 'Reserve a Table — SAVORA',
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Gallery — SAVORA',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us — SAVORA',
  },
  {
    path: 'special-offers',
    loadComponent: () =>
      import('./pages/special-offers/special-offers.component').then(
        (m) => m.SpecialOffersComponent
      ),
    title: 'Special Offers — SAVORA',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
    title: 'Privacy Policy — SAVORA',
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms/terms.component').then((m) => m.TermsComponent),
    title: 'Terms & Conditions — SAVORA',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: '404 Not Found — SAVORA',
  },
];
