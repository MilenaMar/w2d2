describe("Viking", () => {
  let viking;
  beforeEach(() => {
    viking = new Viking("Ragnar");
  });
  describe("Viking ID", () => {
    it("Has a name", () => {
      // const viking = new Viking("Ragnar");
      expect(viking.name).toBe("Ragnar");
    });

    it("Has a health property", () => {
      // const viking = new Viking("Milena");
      expect(viking.health).toBeDefined();
    });
  });

  describe("Can make actions", () => {
    it("Says Ouch when it steps on stone", () => {
      // const viking = new Viking("Gosia");
      expect(viking.stepOnStone()).toBeTruthy();
      expect(viking.stepOnStone()).toBe("Ouch!");
    });
    it("Screms for a Viking God upon running", () => {
      // const viking = new Viking("Franck");
      expect(viking.running()).toBeTruthy();
      expect(viking.running()).toBe("For ODIN!");
    });
  });

  describe("Has family tree", () => {
    it("already has family members", () => {
      const arrayOfFamily = ["Pauline", "Marc", "Alex"];
      const viking = new Viking("Vincenzo", arrayOfFamily);
      expect(viking.family.length).not.toBe(0);
      expect(viking.family).toEqual(["Pauline", "Marc", "Alex"]);
      expect(viking.family).toBe(arrayOfFamily);
    });
  });
});
