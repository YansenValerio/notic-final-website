export type Product = {
  id: string
  name: string
  category: string
  description: string
  image: string
  ctaLabel: string
  ctaHref: string
  tag?: string
}

export const products: Product[] = [
  {
    id: 'gelang',
    name: 'Gelang Manik Daur Ulang',
    category: 'Aksesori',
    description: 'Dirangkai secara handmade menggunakan beads daur ulang. Satu gelang mewakili penyelamatan kurang lebih 4 gram sampah plastik.',
    image: '/images/gelang.jpg',
    ctaLabel: 'Pesan Sekarang',
    ctaHref: 'https://wa.me/6289637392255',
    tag: 'Terlaris',
  },
  {
    id: 'beads',
    name: 'Beads Plastik Daur Ulang',
    category: 'Material Craft',
    description: 'Setiap beads melewati proses pemilahan, pencucian, pencacahan, pelelehan, dan pembentukan. Pola unik menjadi kekuatan visual produk Notic.',
    image: '/images/beads.jpg',
    ctaLabel: 'Pesan Sekarang',
    ctaHref: 'https://wa.me/6289637392255',
  },
  {
    id: 'coaster',
    name: 'Coaster Daur Ulang',
    category: 'Homeware',
    description: 'Produk homeware dari plastik padat yang dilelehkan dan dicetak. Tebal, kuat, bermotif marmer khas material daur ulang. Cocok untuk merchandise perusahaan.',
    image: '/images/coaster.jpg',
    ctaLabel: 'Diskusi Custom',
    ctaHref: 'https://wa.me/6289637392255',
  },
]
