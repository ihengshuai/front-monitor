import { init } from "@/index";

describe("测试", () => {
  test("第一个测试", () => {
    expect(init()).toBe("init");
  });
});
