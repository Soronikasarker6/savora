import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryItem } from '../models/gallery-item.model';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private readonly items: GalleryItem[] = [
    { id: 1, title: 'The Main Dining Hall', category: 'interior', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', span: 'wide' },
    { id: 2, title: 'Kacchi Biryani', category: 'food', image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=600&q=80', span: 'tall' },
    { id: 3, title: 'Signature S Mark', category: 'brand', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', span: 'normal' },
    { id: 4, title: 'Wood-fired Pizza', category: 'food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', span: 'normal' },
    { id: 5, title: 'The Lounge Bar', category: 'interior', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', span: 'wide' },
    { id: 6, title: 'Crispy Fried Chicken', category: 'food', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80', span: 'normal' },
    { id: 7, title: 'Private Dining Room', category: 'interior', image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80', span: 'tall' },
    { id: 8, title: 'Tom Yum Goong', category: 'food', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', span: 'normal' },
    { id: 9, title: 'Chef at Work', category: 'behind-scenes', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', span: 'normal' },
    { id: 10, title: 'Peking Duck', category: 'food', image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600&q=80', span: 'normal' },
    { id: 11, title: 'Evening Ambiance', category: 'interior', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80', span: 'wide' },
    { id: 12, title: 'The Open Kitchen', category: 'behind-scenes', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80', span: 'normal' },
  ];

  getGalleryItems(): Observable<GalleryItem[]> {
    return of(this.items);
  }

  getItemsByCategory(category: string): Observable<GalleryItem[]> {
    if (category === 'all') return of(this.items);
    return of(this.items.filter(item => item.category === category));
  }
}
