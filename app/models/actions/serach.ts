export interface ISearchItem {
  link: string;
  title: string;
  description: string;
  image: string;
}

export interface IPagination {
  nextPage: boolean;
  prevPage: boolean;
  hitApi: () => void;
}
