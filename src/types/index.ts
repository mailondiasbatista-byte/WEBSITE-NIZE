export type ServiceCategory = 'todos' | 'coloracao' | 'cortes' | 'tratamentos';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'coloracao' | 'cortes' | 'tratamentos';
  categoryLabel: string;
  price: string;
  duration: string;
  description: string;
  iconName: 'sparkles' | 'scissors' | 'droplet' | 'palette' | 'wind' | 'heart-handshake';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  imageUrl: string;
  description: string;
  technique?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  initials: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  shift: string;
  timeSlot: string;
  notes: string;
}
