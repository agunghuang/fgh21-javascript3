fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal mengambil data');
    }
    return response.json();
  })
  .then(data => {
    const names = data.map(user => user.name);
    console.log("Nama-nama pengguna:");
    names.forEach(name => console.log(name));
  })
  .catch(error => console.error(error));
