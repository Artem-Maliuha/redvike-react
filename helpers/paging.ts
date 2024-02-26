export const getPagesCount = (limit: number, byPage: number) => {
  return Math.floor(limit / byPage)
}

export const getLimitForPage = (
  pageNumber: number,
  pagesCount: number,
  byPage: number,
  limit: number
) => {
  return pageNumber + 1 < pagesCount ? byPage : limit - byPage * pagesCount
}
