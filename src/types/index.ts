export interface getAllShopProps {
  sort: sortType;
  page: number;
  limit: number;
}

export type themeType = '빈티지' | '아기자기한' | '힙한' | '모던한';

export type categoryType =
  | '공예품'
  | '문구팬시'
  | '주방용품'
  | '인형장난감'
  | '인테리어소품'
  | '패션소품';

export type sortType = 'recent' | 'alphabet';

export interface getAllReviewProps {
  sort: string;
  page: number;
  limit: number;
}

export interface ImageType {
  file?: File | null;
  preview: string | null;
}

export interface shopFormProps {
  shopName?: string;
  subway?: string;
  roadAddress?: string;
  landAddress?: string;
  time?: string;
  close?: string;
  phone?: string;
  homepage?: string;
  instagram?: string;
  blog?: string;
  store?: string;
  area?: string;
  category?: Array<string>;
  theme?: Array<string>;
  image?: Array<string | ImageType>;
}
