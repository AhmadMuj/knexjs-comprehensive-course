export interface Author {
  id: number;
  name: string;
  bio: string;
  created_at: Date;
  updated_at: Date;
}

export interface Genre {
  id: number;
  name: string;
  created_at: Date;
  update_at: Date;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  price: number;
  author_id: number;
  genre_id: number;
  created_at: Date;
  update_at: Date;
}

declare module "knex/types/tables" {
  interface Tables {
    authors: Author;
    genres: Genre;
    books: Book;
  }
}
