import { DioPromise, DioConfig } from "../types";
import request from "../adapters/request";

export default function dispatchRequest(config: DioConfig): DioPromise {
  return request(config);
}
