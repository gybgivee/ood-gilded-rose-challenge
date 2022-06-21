let Shop = require('../src/shop');
let Item = require('../src/item');
let Inventory = require('../src/inventory');
describe("Gilded Rose", function () {
  let items;

  beforeEach(() => {
    items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6),
    ];
  })

  it("day", function () {
    const expected =
      [
        { name: '+5 Dexterity Vest', sellIn: 9, quality: 19 },
        { name: 'Aged Brie', sellIn: 1, quality: 1 },
        { name: 'Elixir of the Mongoose', sellIn: 4, quality: 6 },
        { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
        { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 },
        {
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 14,
          quality: 21
        },
        {
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 9,
          quality: 50
        },
        {
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 4,
          quality: 50
        },
        { name: 'Conjured Mana Cake', sellIn: 2, quality: 4 }
      ]
    const days = 1;
    const gildedRose = new Shop(items);
    let update;
    for (let day = 0; day < days; day++) {
      update = gildedRose.updateQuality();
    }
    const myInventory = new Inventory(update);
    const result = myInventory.getInventory();
    console.log('myInventory ', myInventory.getInventory());
    expect(result).toEqual(expected);
  });

  it("2 days", function () {
    const expected =
      [
        { name: '+5 Dexterity Vest', sellIn: 8, quality: 18 },
        { name: 'Aged Brie', sellIn: 0, quality: 2 },
        { name: 'Elixir of the Mongoose', sellIn: 3, quality: 5 },
        { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
        { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 },
        {
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 13,
          quality: 22
        },
        {
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 8,
          quality: 50
        },
        {
          name: 'Backstage passes to a TAFKAL80ETC concert',
          sellIn: 3,
          quality: 50
        },
        { name: 'Conjured Mana Cake', sellIn: 1, quality: 2 }
      ];
      const days = 2;
      const gildedRose = new Shop(items);
      let update;
      for (let day = 0; day < days; day++) {
        update = gildedRose.updateQuality();
      }
      const myInventory = new Inventory(update);
      const result = myInventory.getInventory();
      expect(result).toEqual(expected);
  });
  it("7 days", function () {
    const expected =
    [
      { name: '+5 Dexterity Vest', sellIn: 3, quality: 13 },
      { name: 'Aged Brie', sellIn: -5, quality: 12 },
      { name: 'Elixir of the Mongoose', sellIn: -2, quality: 0 },
      { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
      { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 },
      {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 8,
        quality: 29
      },
      {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 3,
        quality: 50
      },
      {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: -2,
        quality: 0
      },
      { name: 'Conjured Mana Cake', sellIn: -4, quality: 0 }
    ]
    const days = 7;
    const gildedRose = new Shop(items);
    let update;
    for (let day = 0; day < days; day++) {
      update = gildedRose.updateQuality();
    }
    const myInventory = new Inventory(update);
    const result = myInventory.getInventory();
    expect(result).toEqual(expected);
  });
  it("30 days", function () {
    const expected =
   [
  { name: '+5 Dexterity Vest', sellIn: -20, quality: 0 },
  { name: 'Aged Brie', sellIn: -28, quality: 50 },
  { name: 'Elixir of the Mongoose', sellIn: -25, quality: 0 },
  { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
  { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 },
  {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: -15,
    quality: 0
  },
  {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: -20,
    quality: 0
  },
  {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: -25,
    quality: 0
  },
  { name: 'Conjured Mana Cake', sellIn: -27, quality: 0 }
]
    const days = 30;
    const gildedRose = new Shop(items);
    let update;
    for (let day = 0; day < days; day++) {
      update = gildedRose.updateQuality();
    }
    const myInventory = new Inventory(update);
    const result = myInventory.getInventory();
    expect(result).toEqual(expected);
  });



});
