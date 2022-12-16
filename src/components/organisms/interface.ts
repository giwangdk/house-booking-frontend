export interface AuthHeroProps {
  image?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface TableProps {
  headers: string[];
  isLoading: boolean;
}
