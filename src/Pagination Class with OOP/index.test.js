import Pagination from './index';

describe('Pagination', () => {
  test('correct default values', () => {
    const defaultPagination = new Pagination();

    expect(defaultPagination.pageSize).toBe(10);
    expect(defaultPagination.items.length).toBe(0);
    expect(defaultPagination.items).toEqual([]);
  });

  test('correct amount of pages', () => {
    expect(new Pagination(Array(0), 10).totalPages).toBe(1);
    expect(new Pagination(Array(1), 10).totalPages).toBe(1);
    expect(new Pagination(Array(10), 10).totalPages).toBe(1);
    expect(new Pagination(Array(11), 10).totalPages).toBe(2);
  });

  test('correct current page', () => {
    expect(new Pagination(Array(0), 10).currentPage).toBe(1);
    expect(new Pagination(Array(1), 10).currentPage).toBe(1);
    expect(new Pagination(Array(11), 10).currentPage).toBe(1);
  });

  test('correct implementation of methods that change page', () => {
    const p1 = new Pagination(Array(69), 5);

    expect(p1.nextPage().currentPage).toBe(2);
    expect(p1.lastPage().currentPage).toBe(14);
    expect(p1.nextPage().currentPage).toBe(14);
    expect(p1.prevPage().currentPage).toBe(13);
    expect(p1.firstPage().currentPage).toBe(1);
    expect(p1.prevPage().currentPage).toBe(1);
    expect(p1.goToPage(99).currentPage).toBe(14);
    expect(p1.goToPage(4).currentPage).toBe(4);
    expect(p1.goToPage(-99).currentPage).toBe(1);
  });

  test('correct visible items returned in various pages', () => {
    const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const p2 = new Pagination(ids, 5);

    expect(p2.getVisibleItems()).toEqual([0, 1, 2, 3, 4]);
    expect(p2.nextPage().getVisibleItems()).toEqual([5, 6, 7, 8, 9]);
    expect(p2.nextPage().getVisibleItems()).toEqual([10]);
  });
});
