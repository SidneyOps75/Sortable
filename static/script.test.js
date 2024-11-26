import { expect, test } from 'vitest';
import { filterHeroes, sortHeroes } from './script.js';

test('filterHeroes', () => {
  const heroes = [
    { name: 'Superman' },
    { name: 'Batman' },
    { name: 'Wonder Woman' },
  ];

  const filteredHeroes = filterHeroes.call({ heroes }, 'man');

  expect(filteredHeroes).toHaveLength(2);
  expect(filteredHeroes[0].name).toBe('Superman');
  expect(filteredHeroes[1].name).toBe('Batman');
});

test('sortHeroes - sort by name ascending', () => {
  const heroes = [
    { name: 'Wonder Woman' },
    { name: 'Batman' },
    { name: 'Superman' },
  ];

  const sortedHeroes = sortHeroes.call(
    { sortColumn: 'name', sortOrder: 'ascending' },
    heroes
  );

  expect(sortedHeroes[0].name).toBe('Batman');
  expect(sortedHeroes[1].name).toBe('Superman');
  expect(sortedHeroes[2].name).toBe('Wonder Woman');
});

test('sortHeroes - sort by strength descending', () => {
  const heroes = [
    { name: 'Wonder Woman', powerstats: { strength: 100 } },
    { name: 'Batman', powerstats: { strength: 20 } },
    { name: 'Superman', powerstats: { strength: 100 } },
  ];

  const sortedHeroes = sortHeroes.call(
    { sortColumn: 'strength', sortOrder: 'descending' },
    heroes
  );

  expect(sortedHeroes[0].powerstats.strength).toBe(100);
  expect(sortedHeroes[1].powerstats.strength).toBe(100);
  expect(sortedHeroes[2].powerstats.strength).toBe(20);
});
