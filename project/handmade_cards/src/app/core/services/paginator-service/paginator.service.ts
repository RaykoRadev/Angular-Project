import { MatPaginatorIntl } from '@angular/material/paginator';

export function paginatorService(): MatPaginatorIntl {
  const pageInitl = new MatPaginatorIntl();

  pageInitl.itemsPerPageLabel = 'Картички на страница';
  pageInitl.nextPageLabel = 'Следваща страница';
  pageInitl.previousPageLabel = 'Предишна страница';
  pageInitl.firstPageLabel = 'Първа страница';
  pageInitl.lastPageLabel = 'Последна страница';

  return pageInitl;
}
