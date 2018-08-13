const { LinkedList } = require('./main')

describe("the LinkedList", () => {
  it('TODO', () => {
    const ll = new LinkedList ()
    expect(ll.toString()).toEqual('[]')
  })
  it('TODO', () => {
    const ll = new LinkedList ()
    ll.insertEnd(3)
    expect(ll.toString()).toEqual('[3, ]')
  })
  it('TODO', () => {
    const ll = new LinkedList ()
    ll.insertEnd(3)
    ll.insertEnd(4)
    expect(ll.toString()).toEqual('[3, 4, ]')
  })
  it('TODO', () => {
    const ll = new LinkedList ()
    ll.insertEnd(3)
    ll.insertEnd(4)
    expect(ll.toString()).toEqual('[3, 4, ]')
    ll.insertStart(9)
    expect(ll.toString()).toEqual('[9, 3, 4, ]')
  })
  it('TODO', () => {
    // [9, 3, 4]
    const ll = new LinkedList ()
    ll.insertEnd(3)
    ll.insertEnd(4)
    ll.insertStart(9)
    expect(ll.getAt(0)).toEqual(9)
  })
  it('TODO', () => {
    // [9, 3, 4]
    const ll = new LinkedList ()
    ll.insertEnd(3)
    ll.insertEnd(4)
    ll.insertStart(9)
    expect(ll.getAt(1)).toEqual(3)
  })
  it('insertar al indice 0', () => {
    // [9, 3, 4]
    const ll = new LinkedList ()
    ll.insertEnd(3)
    ll.insertEnd(4)
    ll.insertStart(9)
    ll.insertAt(0, 7)
    expect(ll.toString()).toEqual('[7, 9, 3, 4, ]')
  })
  it('insetar al indice 1', () => {
    // [9, 3, 4]
    const ll = new LinkedList ()
    ll.insertEnd(3)
    ll.insertEnd(4)
    ll.insertStart(9)
    ll.insertAt(1, 7)
    expect(ll.toString()).toEqual('[9, 7, 3, 4, ]')
  })
  it('insetar al indice 1', () => {
    // [9, 3, 4]
    const ll = new LinkedList ()
    ll.insertEnd(3)
    ll.insertEnd(4)
    ll.insertStart(9)
    ll.insertAt(1, 7)
    ll.insertAt(3, 5)
    expect(ll.toString()).toEqual('[9, 7, 3, 5, 4, ]')
  })
  it('insetar al indice 1', () => {
    const ll = new LinkedList ()
    ll.insertEnd(9)
    ll.insertEnd(7)
    ll.insertEnd(3)
    ll.insertEnd(2)
    ll.insertEnd(1)
    expect(ll.toString()).toEqual('[9, 7, 3, 2, 1, ]')
    ll.removeStart()
    expect(ll.toString()).toEqual('[7, 3, 2, 1, ]')
  })
  it('insetar al indice 1', () => {
    const ll = new LinkedList ()
    ll.insertEnd(9)
    ll.insertEnd(7)
    ll.insertEnd(3)
    ll.insertEnd(2)
    ll.insertEnd(1)
    expect(ll.toString()).toEqual('[9, 7, 3, 2, 1, ]')
    ll.removeEnd()
    expect(ll.toString()).toEqual('[9, 7, 3, 2, ]')
  })
  it('insetar al indice 1', () => {
    const ll = new LinkedList ()
    ll.insertEnd(9)
    ll.insertEnd(7)
    ll.insertEnd(3)
    ll.insertEnd(2)
    ll.insertEnd(1)
    expect(ll.toString()).toEqual('[9, 7, 3, 2, 1, ]')
    ll.removeAt(2)
    expect(ll.toString()).toEqual('[9, 7, 2, 1, ]')
  })
})

