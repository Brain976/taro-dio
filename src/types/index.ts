export interface ResolvedFn<T> {
  (val: T): T | Promise<T>;
}

export interface RejectedFn {
  (error: any): any;
}

export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "connect"
  | "CONNECT"
  | "trace"
  | "TRACE";

export interface DioConfig {
  baseURL?:string,
  url?: string;
  method?: Method;
  data?: any;
  header?: any;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
}

export interface DioResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: DioConfig;
  request: any;
}

export interface DioPromise<T = any> extends Promise<DioResponse<T>> {}

export interface AxiosError extends Error {
  config: DioConfig;
  code?: string;
  request?: any;
  response?: DioConfig;
  isAxiosError: boolean;
}

export interface Dio {
  interceptors: {
    request: DioInterceptorManager<DioConfig>;
    response: DioInterceptorManager<DioResponse>;
  };

  request<T = any>(config: DioConfig): DioPromise<T>;
}

export interface DioInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number;

  eject(id: number): void;
}
