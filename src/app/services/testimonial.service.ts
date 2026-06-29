import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../models/testimonial.model';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  private readonly testimonials: Testimonial[] = [
    { id: 1, name: 'Ayesha Rahman', role: 'Food Critic, Daily Star', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80', rating: 5, review: 'SAVORA redefines what luxury dining means in this city. The Kacchi Biryani alone is worth making the trip. The ambiance, the service, the flavors — everything is curated to perfection.', date: 'March 2025' },
    { id: 2, name: 'Karim Hussain', role: 'Executive, multinational firm', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80', rating: 5, review: 'I have dined at Michelin-starred restaurants across London, Tokyo and New York. SAVORA holds its own with absolute confidence. The Peking Duck and the cocktail pairing were extraordinary.', date: 'February 2025' },
    { id: 3, name: 'Sophie Laurent', role: 'Travel blogger, Paris', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80', rating: 5, review: 'As a French food enthusiast, I was skeptical about finding world-class cuisine in Dhaka. SAVORA proved me completely wrong. The Truffle Mushroom Pizza rivals anything in Europe.', date: 'January 2025' },
    { id: 4, name: 'Tanvir Ahmed', role: 'Architect & Design Enthusiast', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80', rating: 5, review: 'Beyond the food, SAVORA is a masterclass in atmosphere. The interior design, the lighting, the music — every detail tells a story. This is what dining as an experience looks like.', date: 'April 2025' },
    { id: 5, name: 'Nadia Islam', role: 'Chef & Culinary Instructor', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80', rating: 5, review: 'Speaking as a culinary professional, the kitchen here operates at an elite level. The technique behind the Hilsa Curry is deeply respectful of tradition while being elegantly contemporary.', date: 'March 2025' },
    { id: 6, name: 'David Chen', role: 'Business traveler, Singapore', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80', rating: 5, review: 'The Tom Yum Goong and Massaman Curry transported me straight back to Bangkok — which is no small feat. SAVORA\'s Thai menu is the most authentic I\'ve found outside Thailand.', date: 'May 2025' },
  ];

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }
}
