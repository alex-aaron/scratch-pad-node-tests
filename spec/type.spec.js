describe("type", () => {
  describe("isArray()", () => {
    var tests = [
      {input: 'hello', expected: false, data: 'string' },
      {input: 10, expected: false, data: 'number' },
      {input: ['a', 'b '], expected: true, data: 'array' },
      {input: [1, 2, 3], expected: true, data: 'array'},
      {input: { a: 1 }, expected: false, data: 'object' },
      {input: null, expected: false, data: 'null' },
      {input: new Date(), expected: false, data: 'date' },
      {input: true, expected: false, data: 'boolean'}
    ];
  
    tests.forEach((e, i) => {
      it(`should return ${e.expected} if input value is ${e.data}`, () => {
        assert.equal(isArray(e.input), e.expected);
      })
    });
  });

  describe("isObject()", () => {
    var tests = [
      {input: 'hello', expected: false, data: 'string' },
      {input: 10, expected: false, data: 'number' },
      {input: ['a', 'b '], expected: false, data: 'array' },
      {input: { a: 1 }, expected: true, data: 'object intended as a collection' },
      {input: { x: 100, y: 200 }, expected: true, data: 'object intended as a collection'},
      {input: null, expected: false, data: 'null' },
      {input: new Date(), expected: false, data: 'date' },
      {input: true, expected: false, data: 'boolean'}
    ];
  
    tests.forEach((e, i) => {
      it(`should return ${e.expected} if input is ${e.data}`, () => {
        assert.equal(isObject(e.input), e.expected);
      });
    });
  });

  describe("isCollection()", () => {
    var tests = [
      {input: 'hello', expected: false, data: 'string' },
      {input: 10, expected: false, data: 'number' },
      {input: ['a', 'b '], expected: true, data: 'array' },
      {input: { a: 1 }, expected: true, data: 'object' },
      {input: { x: 100, y: 200 }, expected: true, data: 'object'},
      {input: null, expected: false, data: 'null' },
      {input: new Date(), expected: false, data: 'date' },
      {input: true, expected: false, data: 'boolean'}
    ];

    tests.forEach((e, i) => {
      it(`should return ${e.expected} if input value is ${e.data}`, () => {
        assert.equal(isCollection(e.input), e.expected);
      })
    });
  });

  describe('typeOf()', () => {
    var tests = [
      {input: 'hello', expected: 'string'},
      {input: 10, expected: 'number'},
      {input: ['a', 'b '], expected: 'array' },
      {input: { a: 1 }, expected: 'object' },
      {input: undefined, expected: 'undefined'},
      {input: null, expected: 'null' },
      {input: new Date(), expected: 'date' },
      {input: true, expected: 'boolean'},
      {input: function(x, y){ return x + y}, expected: 'function'}
    ];

    tests.forEach((e, i) => {
      it(`should return "${e.expected}" if input value is ${e.expected}  `, () => {
        assert.equal(typeOf(e.input), e.expected);
      })
    })
  })
  
});