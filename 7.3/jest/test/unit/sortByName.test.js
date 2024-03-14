const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  test("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  test("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  test("Some book titles match", () => {
    const input = ["Гарри Поттер", "Гарри Поттер", "Властелин Колец"];

    const expected = ["Властелин Колец", "Гарри Поттер", "Гарри Поттер"];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});
