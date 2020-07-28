import {
  DioConfig,
  DioResponse,
  ResolvedFn,
  RejectedFn,
  DioPromise,
  Method,
} from "../types";

import InterceptorManager from "./InterceptorManager";
import Utils from "../helpers/utils";

interface Interceptors {
  request: InterceptorManager<DioConfig>;
  response: InterceptorManager<DioResponse>;
}

interface PromiseChain<T> {
  resolved: ResolvedFn<T> | ((config: DioConfig) => DioPromise);
  rejected?: RejectedFn;
}

class Dio {
  interceptors: Interceptors = {
    request: new InterceptorManager<DioConfig>(),
    response: new InterceptorManager<DioResponse>(),
  };

  request(url: any, config?: any): DioPromise {
    if (typeof url === "string") {
      if (!config) {
        config = {};
      }
      config.url = url;
    } else {
      config = url;
    }

    const chain: PromiseChain<any>[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined,
      },
    ];

    this.interceptors.request.forEach((interceptor) => {
      chain.unshift(interceptor);
    });

    this.interceptors.response.forEach((interceptor) => {
      chain.push(interceptor);
    });

    let promise = Promise.resolve(config);

    while (chain.length) {
      const { resolved, rejected } = chain.shift()!;
      promise = promise.then(resolved, rejected);
    }

    return promise;
  }
}

export default Dio;
