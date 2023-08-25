export * from "@hengshuai/monitor-types";

export abstract class App {
  opts: string;
  constructor(opts: string) {
    this.opts = opts;
  }

  abstract say(): void;
}
