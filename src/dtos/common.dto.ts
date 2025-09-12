import moment from "moment";
import { filterData, parseArr, parseBool, parseIdx, parseNum, parseStr } from "@/utils/parse.util";

export abstract class BaseModel {
  parseData(data: any): void {
    if (data) {
      data = filterData(data);
      Object.assign(this, data);
    }
    
    for (const key in this) {
      const value = this[key as keyof this];
      const lowerKey = key.toLowerCase();

      if (typeof value === "string" && lowerKey.includes("idx")) {
        this[key as keyof this] = parseIdx(value) as any;
      }
      else if (typeof value === "string" && lowerKey.includes("date_")) {
        this[key as keyof this] = value ? moment(value).format("YYYY-MM-DD HH:mm:ss") as any : "";
      }
      else if (typeof value === "string") {
        this[key as keyof this] = parseStr(value) as any;
      }
      else if (typeof value === "number") {
        this[key as keyof this] = parseNum(value) as any;
      }
      else if (typeof value === "boolean") {
        this[key as keyof this] = parseBool(value) as any;
      }
      else if (Array.isArray(value)) {
        this[key as keyof this] = parseArr(value) as any;
      }
    }
  }
}

// 데이터 상세 내용 관련
export class CommonFileData extends BaseModel {
  date_active: string = "";
  date_delete: string = "";
  file_ext: string = "";
  file_name_origin: string = "";
  file_name_real: string = "";
  file_path: string = "";
  file_size: number = 0;
  file_type: number = 0;
  file_url: string = "";
  idx: string = "00000000-0000-0000-0000-000000000000";
  is_active: number = 0;
  member_idx: string = "00000000-0000-0000-0000-000000000000";
  permit_level: number = 0;

  constructor(data?: any) {
    super();
    this.parseData(data);
  }
}

export class CommonGroupStats extends BaseModel {
  opt_idx: string = "00000000-0000-0000-0000-000000000000";
  order_val: string = "";
  stats_name: string = "";
  stats_idx: string = "00000000-0000-0000-0000-000000000000";
  value: number = 0;

  constructor(data?: any) {
    super();
    this.parseData(data);
  }
}

export class CommonMember extends BaseModel {
  idx: string = "00000000-0000-0000-0000-000000000000";
  member_birthday: number = 0;
  member_id: string = "";
  member_name: string = "";
  member_public_extras: string = "";

  constructor(data?: Partial<CommonMember>) {
    super();
    this.parseData(data);
  }
}

export class CommonPage extends BaseModel {
  has_next_page: boolean = false;
  has_previous_page: boolean = false;
  is_asc: boolean = false;
  order: string = "";
  page_index: number = 0;
  page_size: number = 0;
  search: string = "";
  search_field: string = "";
  skip_aggregate: number = 0;
  total: number = 0;
  total_page: number = 0;

  constructor(data?: any) {
    super();
    this.parseData(data);
  }
}

// (my_like, my_dislike, my_warning)
export class CommonReaction extends BaseModel {
  data: string = "";
  date_active: string = "";
  date_delete: string = "";
  date_update: string = "";
  idx: string = "00000000-0000-0000-0000-000000000000";
  is_active: number = 0;
  member_idx: string = "00000000-0000-0000-0000-000000000000";
  target_idx: string = "00000000-0000-0000-0000-000000000000";
  variable_idx: string = "00000000-0000-0000-0000-000000000000";

  constructor(data?: Partial<CommonReaction>) {
    super();
    this.parseData(data);
  }
}

export class CommonIdxData extends BaseModel {
  idx: string = "00000000-0000-0000-0000-000000000000";

  constructor(data?: Partial<CommonIdxData>) {
    super();
    this.parseData(data);
  }
}
// /데이터 상세 내용 관련

// response 관련
export class CommonResponse {
	// debug: CommonDebug = new CommonDebug();
	error: string = "";
	message: string[] | [] = [];
	statusCode: number = 0;

  constructor(data?: any) {
    this.error = parseStr(data?.error);
    this.message = parseArr(data?.message);
    this.statusCode = parseNum(data?.statusCode);
  }
};

export class CommonDataResponse<T> extends CommonResponse {
  data: T = {} as T;

  constructor(
    responseData?: Partial<CommonDataResponse<T>>, 
    DataClass?: new (d?: Partial<T>) => T
  ) {
    super(responseData);

    this.data = DataClass 
      ? new DataClass(responseData?.data) 
      : (responseData?.data as T);
  }
}

export class CommonListResponse<T> extends CommonResponse {
  list: T[] = [];
  page: CommonPage = new CommonPage();

  constructor(
    responseData?: Partial<CommonListResponse<T>>,
    DataClass?: new (d?: Partial<T>) => T
  ) {
    super(responseData);

    this.list = (responseData?.list && DataClass) 
      ? responseData.list.map(e => new DataClass(e)) 
      : (responseData?.list || []);
    this.page = new CommonPage(responseData?.page);
  }
}