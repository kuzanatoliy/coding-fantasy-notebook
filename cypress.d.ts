export {};

declare global {
  namespace Cypress {
    interface Chainable {
      playFlexboxAdventureLevel(level: number): void;
    }
  }
}
