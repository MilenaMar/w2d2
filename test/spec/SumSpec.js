describe("Sum Function", () => {
  describe("Make sure sum adds two numbers", () => {
    it("Adds two numbers", () => {
      expect(true).toBe(true);
      expect(typeof sum).toBe("function");
      expect(sum(1, 1)).toBe(2);
      expect(sum(1, 2)).toBe(3);
    });

    it("DOES NOT SUBTRACT NUMBERS", () => {
      expect(sum(1, 1)).not.toBe(0);
    });
  });
});
