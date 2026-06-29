export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  calories?: number;
}

export type MenuCategory =
  | 'all'
  | 'fast-food'
  | 'pizza'
  | 'fried-chicken'
  | 'bangladeshi'
  | 'chinese'
  | 'thai';

export interface MenuCategoryOption {
  id: MenuCategory;
  label: string;
  icon: string;
}
