export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  span?: 'normal' | 'wide' | 'tall';
}
