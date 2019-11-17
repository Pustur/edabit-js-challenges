const clamp = (
  val,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
) => Math.min(Math.max(val, min), max);

class Pagination {
  constructor(items = [], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
    this.totalPages = Math.ceil(this.items.length / this.pageSize) || 1;
    this.currentPage = 1;
  }

  prevPage() {
    this.currentPage = clamp(this.currentPage - 1, 1);
    return this;
  }

  nextPage() {
    this.currentPage = clamp(this.currentPage + 1, null, this.totalPages);
    return this;
  }

  firstPage() {
    this.currentPage = 1;
    return this;
  }

  lastPage() {
    this.currentPage = this.totalPages;
    return this;
  }

  goToPage(page) {
    this.currentPage = clamp(page, 1, this.totalPages);
    return this;
  }

  getVisibleItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    return this.items.slice(start, end);
  }
}

export default Pagination;
