interface Project {
  id: string;
  title: string;
  desc: string;
  techs: string[];
  features: string[];
  url: string | '';
  repository: string;
  screenshots: never[];
}

type FadeStatus = 'fade-left' | 'fade-right' | 'fade-both' | null;
