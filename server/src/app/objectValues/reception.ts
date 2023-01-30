import {
  HighReception,
  LowReception,
  ModerateReception,
  VeryHighReception,
  VeryLowReception,
} from '../../utils/receptions';

class Reception {
  public calculateReception(average: number) {
    const reception = new VeryLowReception(
      new LowReception(
        new ModerateReception(new HighReception(new VeryHighReception())),
      ),
    );
    return reception.turnOnSymbol(average);
  }
}

export default Reception;
