export class UpdateHero {
  public static readonly type = '[Heroes] Update Hero';
  constructor(public id: number, public name: string) {}
}
