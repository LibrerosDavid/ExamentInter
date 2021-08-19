import {UsuarioEditDTO} from "./usuario-edit-dto";


export interface Response {
  content:any;
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  sort: Sort;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface datos {
  data:Response,
  error:any
}

export interface userEdit {
  data:UsuarioEditDTO,
  error:any
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  unpaged: boolean;
  paged: boolean;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}



