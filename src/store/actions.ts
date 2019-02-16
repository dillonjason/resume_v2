export type Action = { type: string; page: string }

export const setPage = (page: string) => ({
  type: 'SET_PAGE',
  page
})
