private occupation: string;

constructor() {
  this.occupation = '';
}

public setOccupation(occupation: string) {
  this.occupation = occupation;
}

public getOccupation(): string {
  return this.occupation;
}
