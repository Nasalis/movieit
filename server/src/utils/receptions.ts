import { ReceptionSymbol } from './receptionValues';

interface IReception {
  turnOnSymbol(average: number): ReceptionSymbol;
}

class VeryHighReception implements IReception {
  turnOnSymbol(): ReceptionSymbol {
    return ReceptionSymbol.VH;
  }
}

class HighReception implements IReception {
  constructor(private nextReceptionValue: IReception) {}

  turnOnSymbol(average: number): ReceptionSymbol {
    if (average >= 8 && average <= 9) {
      return ReceptionSymbol.H;
    }

    return this.nextReceptionValue.turnOnSymbol(average);
  }
}

class ModerateReception implements IReception {
  constructor(private nextReceptionValue: IReception) {}

  turnOnSymbol(average: number): ReceptionSymbol {
    if (average >= 6 && average < 8) {
      return ReceptionSymbol.M;
    }

    return this.nextReceptionValue.turnOnSymbol(average);
  }
}

class LowReception implements IReception {
  constructor(private nextReceptionValue: IReception) {}

  turnOnSymbol(average: number): ReceptionSymbol {
    if (average >= 4 && average < 6) {
      return ReceptionSymbol.L;
    }

    return this.nextReceptionValue.turnOnSymbol(average);
  }
}

class VeryLowReception implements IReception {
  constructor(private nextReceptionValue: IReception) {}

  turnOnSymbol(average: number): ReceptionSymbol {
    if (average >= 0 && average < 4) {
      return ReceptionSymbol.VL;
    }

    return this.nextReceptionValue.turnOnSymbol(average);
  }
}

export {
  VeryLowReception,
  LowReception,
  ModerateReception,
  HighReception,
  VeryHighReception,
};
