/**
 * 注册拦截器
 */

class InterceptorManager {
  private handlers: [];

  constructor() {
    this.handlers = [];
  }

  /**
   * 添加一个拦截器
   */
  use(fulfilled, rejected): number {
    this.handlers.push({ fulfilled, rejected });
    return this.handlers.length - 1;
  }

  /**
   * 移除一个拦截器
   */
  eject(id: number) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * 遍历所有已注册的拦截器
   */
  forEach(fn: (arg0: any) => void) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

export default InterceptorManager;
