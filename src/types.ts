export type PageId =
  | 'home'
  | 'about-us'
  | 'vision-values'
  | 'the-center'
  | 'directors-message'
  | 'donor-page'
  | 'success-stories'
  | 'circus-research'
  | 'contact-us';

export interface Advisor {
  name: string;
  title: string;
  bio: string;
  image?: string;
  isPlaceholder?: boolean;
}

export interface Consultant {
  name: string;
  role: string;
  description: string;
}

export interface SuccessStory {
  name: string;
  role?: string;
  story: string;
  image?: string;
  achievements?: string[];
}
