import { DioConfig, DioPromise } from "../types";
export default function request(config: DioConfig): DioPromise {
  return taro.request(config);
}
