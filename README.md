## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2025 |
|--|--|
| NIM |  2241720185 |
| Nama |  Mochammad Nizar Mahi |
| Kelas | TI - 3B |
| Materi | Pengenalan NEXT.JS |

## Langkah Praktikum 
### 1. Membuat Project Baru dengan NEXT.JS
Hasil tampilan dari project baru Next.js
![](../assets/Langkah1.png)

### 2. Membuat Halaman dengan Server-Side Rendering (SSR)
Ubah isi file index.tsx menjadi seperti ini.
```tsx
import React from "react";

const HomePage = () => {
  return(
    <div>
      <h1>Selamat Datang di Website Saya</h1>
      <p>Ini adalah halaman utama saya</p>
    </div>
  );
};

export default HomePage;
```
Hasil Tampilan
![](../assets/Langkah2.png)

### 3. Menggunaka Static Site Generation (SSG)
Buat file baru di direktori pages dengan nama blog.js
```js
import React from "react";

const Blog = ({ posts }) => {
    return (
        <div className="blog">
            <h1>Blog Saya</h1>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
        props: { posts },
    };
}

export default Blog;
```
Hasil Tampilan
![](../assets/Langkah3.png)

### 4. Menggunakan Dynamic Routes
Buat direktori baru di direktori pages dengan nama blog dan buat file baru slug.js
```js
import { useRouter } from 'next/router';

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    return (
        <div>
            <h1>Blog Post : {slug} </h1>
            <p>Ini adalah blog post dengan slug { slug }</p>
        </div>
    );
};

export default BlogPost;
```
Hasil tampilan
![](../assets/Langkah4.png)

### 5. Menggunakan API Routes
Buat file didalam direktori api dengan nama product.js
```js
export default async function handler(req, res) {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    res.status(200).json(products);
}
```
Lalu buat file lagi di dalam folder pages dengan nama products.js dengan isi sebagai berikut.
```js
import { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const products = await response.json();
            setProducts(products);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
```
Hasil tampilan
![](../assets/Langkah5.png)

### 6. Menggunakan Link Component
Modifikasi file pages/index.tsx
```tsx
import Link from 'next/link';

const HomePage = () => {
  return(
    <div>
      <h1>Selamat Datang di Website Saya</h1>
      <p>Ini adalah halaman utama saya</p>
      <Link href="/about">
        Tentang Kami
      </Link>
    </div>
  );
};

export default HomePage;
```
Buat file baru dengan nama about.js

```js
const AboutPage = () => {
    return (
        <div>
            <h1>Tentang Kami</h1>
            <p>Kami adalah perusahaan yang mengkhususkan diri dalam pembuatan website berkualitas tinggi.</p>
        </div>
    );
};

export default AboutPage;
```
Hasil Tampilan
![](../assets/Langkah6a.png)
![](../assets/Langkah6b.png)

## Tugas
### 1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users.
### 2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID.
### 3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.

### Jawab:
