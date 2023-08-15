const daftarProduk = document.querySelector('.daftar-produk');

// ambil data dari json
const getProduk = async () => {
  const res = await fetch('produk.json');
  const data = await res.json();

  return data;
}

getProduk().then(data => {
  let num = 0;
  data.forEach(d => {
    daftarProduk.innerHTML += `<div class="produk ${++num}">
    <img src="img/${d.gambar}" alt="${d.gambar}" />
    <h4 class="nama">${d.nama}</h4>
    <span class="harga-satuan">${d.harga}</span>
    <span> <em class="update">${d.update}</em></span>
  </div>`;
  });
});

// search
const search = document.querySelector('#cariProduk');

search.addEventListener('keyup', (e) => {
  const keyword = e.target.value.toLowerCase();
  const produk = document.querySelectorAll('.produk');

  produk.forEach(p => {
    const nama = p.querySelector('.nama').textContent.toLowerCase();
    if (nama.indexOf(keyword) != -1) {
      p.style.display = 'flex';
    } else {
      p.style.display = 'none';
    }
  });
  
});