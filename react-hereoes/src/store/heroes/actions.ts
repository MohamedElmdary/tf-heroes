export const updateHero = (id: number, name: string) => {
  return { type: "UpdateHero", payload: { id, name } } as const;
};

export type Actions = ReturnType<typeof updateHero>;
