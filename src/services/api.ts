import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Foods } from '../pages/Home'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Foods[], void>({
      query: () => 'restaurantes'
    }),
    getCard: builder.query<Foods, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetCardQuery } = api

export default api
