// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9009/api/" }),
  tagTypes: ["Quotes"],
  endpoints: (builder) => ({
    getQuotes: builder.query({
      query: () => "quotes",
    }),
    

    createQuote: builder.mutation({
      query: (quote) => ({
        url: "quotes",
        method: "POST",
        body: quote,
      }),

      invalidatesTags: ["Quotes"],
    }),


    toggleQuote: builder.mutation({
        query: (id, quote) => ({
            url: `quotes/${id}`,
            method: "PUT",
            body: quote
        }),

        invalidatesTags: ["Quotes"],
    }),


    deleteQuote: builder.mutation({
      query: (id) => ({
        url: `quotes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetQuotesQuery,
  useCreateQuoteMutation,
  useToggleQuoteMutation,
  useDeleteQuoteMutation,
} = quotesApi;
