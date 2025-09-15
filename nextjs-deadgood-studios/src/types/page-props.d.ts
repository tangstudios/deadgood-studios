export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type PageParams = Record<string, string>;

export type PageProps<
  P extends PageParams = PageParams,
  S extends SearchParams = SearchParams,
> = {
  params: P;
  searchParams: S;
};
