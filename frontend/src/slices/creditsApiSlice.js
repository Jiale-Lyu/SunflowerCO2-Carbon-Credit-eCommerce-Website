import { apiSlice } from './apiSlice';
import { CREDITS_URL } from '../constants';

export const creditsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    claimCredit: builder.mutation({
      query: (creditData) => ({
        url: CREDITS_URL,
        method: 'POST',
        body: creditData,
      }),
    }),
    getMyClaimedCredits: builder.query({
      query: () => ({
        url: `${CREDITS_URL}/mycredits`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCreditById: builder.query({
      query: (id) => ({
        url: `${CREDITS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCredits: builder.query({
      query: () => ({
        url: CREDITS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useClaimCreditMutation,
  useGetMyClaimedCreditsQuery,
  useGetCreditByIdQuery,
  useGetCreditsQuery,
} = creditsApiSlice;
