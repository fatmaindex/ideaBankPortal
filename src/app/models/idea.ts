export class Idea {
    constructor(
      public id: string,
      public userName: string|null,
      public title: string,
      public description: string,
      public problemDescription: string,
      public ideaEffect: string
    ) {}
  }
  