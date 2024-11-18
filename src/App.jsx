import React, { useState } from 'react';
import './index.css';
import Product from './product';

const App = () => {

  const products = [
    { id: 1, name: 'Bouquet Peony 1', description: 'Bouquet indah dengan bunga peony segar memberi kesan mewah.', price: 500000, image: '/assets/peony1.jpg', category: 'kategori1' },
    { id: 2, name: 'Bouquet Mawar Pink', description: 'Bouquet cantik berisi bunga mawar harum.', price: 250000, image: '/assets/mawar pink.jpg', category: 'kategori2' },
    { id: 3, name: 'Bouquet Peony 2', description: 'Bouquet eksklusif dengan bunga peony yang memiliki warna lembut.', price: 550000, image: '/assets/peony2.jpg', category: 'kategori1' },
    { id: 4, name: 'Bouquet Anggrek', description: 'Bouquet anggrek dari bungga pilihan.', price: 300000, image: '/assets/anggrek.jpg', category: 'kategori2' },
    { id: 5, name: 'Bouquet mix', description: 'Kombinasi bunga segar untuk berbagai acara.', price: 450000, image: '/assets/mix.jpg', category: 'kategori3' },
  ];
  const [searchQuery, setSearchQuery] = useState(''); // Menyimpan query pencarian
  const [filter, setFilter] = useState('all'); // Menyimpan filter kategori

  // Filter produk berdasarkan kategori dan pencarian
  const filteredProducts = products.filter((product) => {
    // Filter berdasarkan kategori
    const matchesCategory = filter === 'all' || product.category === filter;
    
    // Filter berdasarkan pencarian
    const matchesSearchQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Menggabungkan kedua filter
    return matchesCategory && matchesSearchQuery;
  });
  
  return (
    <div>
      {/*title*/}
      <h1>Daftar Produk</h1>

      {/* Search Bar */}
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Memperbarui state searchQuery
          className="search-bar"
        />

      {/* Filter Radio Buttons */}
      <div>
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Semua
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="kategori1"
            checked={filter === 'kategori1'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Kategori 1
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="kategori2"
            checked={filter === 'kategori2'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Kategori 2
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="kategori3"
            checked={filter === 'kategori3'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Kategori 3
        </label>
      </div>

      {/* Daftar Produk */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>

  );
};

export default App;
