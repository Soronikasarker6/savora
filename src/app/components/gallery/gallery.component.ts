import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';
import { GalleryItem } from '../../models/gallery-item.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  items = signal<GalleryItem[]>([]);
  lightboxItem = signal<GalleryItem | null>(null);
  activeFilter = signal('all');

  readonly filters = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'interior', label: 'Interior' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
  ];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.loadItems('all');
  }

  loadItems(filter: string): void {
    this.activeFilter.set(filter);
    this.galleryService.getItemsByCategory(filter).subscribe((items) => {
      this.items.set(items);
    });
  }

  openLightbox(item: GalleryItem): void {
    this.lightboxItem.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxItem.set(null);
    document.body.style.overflow = '';
  }
}
