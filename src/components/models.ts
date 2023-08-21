export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface PieDataset {
  [index: string]: any;
  source: {
    name: string;
    value: number;
    style: {
      [index: string]: any;
    };
  }[];
}
