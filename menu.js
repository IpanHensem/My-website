let allItems = [];

function renderMenu(data) {
  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = ''; // Clear old content

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <a href="${item.links}">
        <img src="${item.image}" alt="${item.name}" style="width:150px;">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p style="font-weight: bold;">${item.price}</p>
      </a>
    `;
    menuList.appendChild(card);
  });
}


fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    allItems = data;
    renderMenu(allItems);
  })
  .catch(error => console.error('Error loading menu:', error));

// 🔍 Live search filter
document.getElementById('searchInput').addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
  renderMenu(filteredItems);
});
    