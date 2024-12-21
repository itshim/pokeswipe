interface TObjectWithSlot {
  slot: number;
}

export function sortWithSlot(v1: TObjectWithSlot, v2: TObjectWithSlot) {
  return v1.slot <= v2.slot ? -1 : 1;
}
