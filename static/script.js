let heroes = [];
let currentPage = 1;
let itemsPerPage = 20;
let sortColumn = 'name';
let sortOrder = 'ascending';

// Fetch and load data
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(loadData)
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

function loadData(data) {
  heroes = data;
  renderTable();
  setUpEventListeners();
}

const renderTable = () => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  let filteredHeroes = filterHeroes();
  sortHeroes(filteredHeroes);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex =
    itemsPerPage === 'all'
      ? filteredHeroes.length
      : startIndex + parseInt(itemsPerPage);
  const paginatedHeroes = filteredHeroes.slice(startIndex, endIndex);

  paginatedHeroes.forEach((hero) => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td><img src="${hero.images.xs}" alt="${hero.name}"></td>
          <td>${hero.name}</td>
          <td>${hero.biography.fullName || ''}</td>
          <td>${hero.powerstats.intelligence}</td>
          <td>${hero.powerstats.strength}</td>
          <td>${hero.powerstats.speed}</td>
          <td>${hero.powerstats.durability}</td>
          <td>${hero.powerstats.power}</td>
          <td>${hero.powerstats.combat}</td>
          <td>${hero.appearance.race || ''}</td>
          <td>${hero.appearance.gender || ''}</td>
          <td>${hero.appearance.height[1] || ''}</td>
          <td>${hero.appearance.weight[1] || ''}</td>
          <td>${hero.biography.placeOfBirth || ''}</td>
          <td>${hero.biography.alignment || ''}</td>
      `;
    tbody.appendChild(row);
  });
  renderPagination(filteredHeroes.length);
};

export const filterHeroes = () => {
  const searchTerm = document.getElementById('searchField').value.toLowerCase();
  return heroes.filter((hero) => hero.name.toLowerCase().includes(searchTerm));
};

export const sortHeroes = (heroesToSort) => {
  heroesToSort.sort((a, b) => {
    let valueA, valueB;

    if (sortColumn === 'icon') {
      return 0;
    } else if (sortColumn === 'name' || sortColumn === 'fullName') {
      valueA = sortColumn === 'name' ? a.name : a.biography.fullName;
      valueB = sortColumn === 'name' ? b.name : b.biography.fullName;
    } else if (
      [
        'intelligence',
        'strength',
        'speed',
        'durability',
        'power',
        'combat',
      ].includes(sortColumn)
    ) {
      valueA = a.powerstats[sortColumn];
      valueB = b.powerstats[sortColumn];
    } else if (sortColumn === 'race' || sortColumn === 'gender') {
      valueA = a.appearance[sortColumn];
      valueB = b.appearance[sortColumn];
    } else if (sortColumn === 'height' || sortColumn === 'weight') {
      valueA = parseFloat(a.appearance[sortColumn][1]) || Infinity;
      valueB = parseFloat(b.appearance[sortColumn][1]) || Infinity;
    } else if (sortColumn === 'placeOfBirth' || sortColumn === 'alignment') {
      valueA = a.biography[sortColumn];
      valueB = b.biography[sortColumn];
    }

    if (valueA === null || valueA === undefined || valueA === '') {
      return 1;
    }
    if (valueB === null || valueB === undefined || valueB === '') {
      return -1;
    }

    if (typeof valueA === 'string') {
      valueA = valueA.toLowerCase();
    }

    if (typeof valueB === 'string') {
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) {
      return sortOrder === 'ascending' ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortOrder === 'ascending' ? 1 : -1;
    }
    return 0;
  });
};

const renderPagination = (totalItems) => {
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = '';

  if (itemsPerPage === 'all') return;

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      renderTable();
    });
    paginationElement.appendChild(button);
  }
};

const setUpEventListeners = () => {
  document.getElementById('searchField').addEventListener('input', () => {
    currentPage = 1;
    renderTable();
  });

  document.getElementById('pageSize').addEventListener('change', (e) => {
    itemsPerPage = e.target.value;
    currentPage = 1;
    renderTable();
  });

  document.querySelectorAll('th').forEach((th) => {
    th.addEventListener('click', () => {
      const column = th.getAttribute('data-sort');

      if (sortColumn === column) {
        sortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
      } else {
        sortColumn = column;
        sortOrder = 'ascending';
      }
      renderTable();
    });
  });
};
