import { itemsPerPage } from "./fixtures";

class PaginationUtils {
  constructor(pageLength) {
    this.pageLength = pageLength;
  }
  getNumberOfPages(array) {
    return Math.ceil(array.length / this.pageLength);
  }

  sliceSinglePageContent(index, array, threshold) {
    if (index > threshold) index = threshold;
    const first = this.pageLength * (index - 1);
    const last = first + this.pageLength > array.length ? array.length : first + this.pageLength;
    return array.slice(first, last);
  }
}

export const paginationUtils = new PaginationUtils(itemsPerPage);

export const formatUserData = {
  id: num => `${num.toString()}.`,
  nam: str => str,
  userName: str => `@${str}`,
};
