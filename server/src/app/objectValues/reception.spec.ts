import Reception from './reception';

describe('Reception object value', () => {
  it('should return a enum value to very low reception', () => {
    // Arrange
    const average = 1.4;
    // Act
    const receptionSymbol = new Reception().calculateReception(average);

    // Assert
    expect(receptionSymbol).toEqual('VL');
  });

  it('should return a enum value to low reception', () => {
    // Arrange
    const average = 5.9;
    // Act
    const receptionSymbol = new Reception().calculateReception(average);

    // Assert
    expect(receptionSymbol).toEqual('L');
  });

  it('should return a enum value to moderate reception', () => {
    // Arrange
    const average = 6.5;
    // Act
    const receptionSymbol = new Reception().calculateReception(average);

    // Assert
    expect(receptionSymbol).toEqual('M');
  });

  it('should return a enum value to high reception', () => {
    // Arrange
    const average = 8;
    // Act
    const receptionSymbol = new Reception().calculateReception(average);

    // Assert
    expect(receptionSymbol).toEqual('H');
  });

  it('should return a enum value to very high reception', () => {
    // Arrange
    const average = 9.5;
    // Act
    const receptionSymbol = new Reception().calculateReception(average);

    // Assert
    expect(receptionSymbol).toEqual('VH');
  });
});
