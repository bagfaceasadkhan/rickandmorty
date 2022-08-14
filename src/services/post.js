import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickandmortyApi = createApi({
  reducerPath: "rickandmortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: (page) => ({
        url: `character/?page=${page}`,
        method: "GET",
      }),
    }),
    getCharactersByName: builder.query({
      query: (name) => ({
        url: `character/?name=${name}`,
      }),
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharactersByNameQuery } =
  rickandmortyApi;
