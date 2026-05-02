export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  initials: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Gelangnya cantik banget dan unik! Suka banget karena tau produknya ramah lingkungan. Pasti order lagi.',
    name: 'Annisa N.',
    role: 'Pelanggan Retail',
    initials: 'AN',
    rating: 5,
  },
  {
    id: 't2',
    quote: 'Notic bantu brand kami bikin merchandise yang meaningful. Klien kami suka karena ada cerita sustainability-nya.',
    name: 'Riko D.',
    role: 'Marketing Manager',
    initials: 'RD',
    rating: 5,
  },
  {
    id: 't3',
    quote: 'Coaster-nya keren parah, warnanya vibrant dan tebal. Gak nyangka ini dari tutup botol bekas. Super impressed!',
    name: 'Maya Y.',
    role: 'Interior Enthusiast',
    initials: 'MY',
    rating: 5,
  },
  {
    id: 't4',
    quote: 'Kami pakai gelang Notic untuk souvenir event CSR perusahaan. Peserta senang banget, ada nilai ceritanya.',
    name: 'Dian R.',
    role: 'CSR Officer',
    initials: 'DR',
    rating: 5,
  },
  {
    id: 't5',
    quote: 'Kualitasnya di luar ekspektasi! Manik-maniknya rapi dan warnanya cakep. Temen-temen pada nanya beli di mana.',
    name: 'Sinta W.',
    role: 'Pelanggan',
    initials: 'SW',
    rating: 5,
  },
  {
    id: 't6',
    quote: 'Custom merchandise buat launching produk kami jadi berkesan banget. Tim Notic responsif dan hasilnya memuaskan.',
    name: 'Bagas P.',
    role: 'Brand Manager',
    initials: 'BP',
    rating: 5,
  },
  {
    id: 't7',
    quote: 'Suka banget konsepnya — beli produk bagus sekaligus bantu lingkungan. Ini yang namanya belanja dengan tujuan!',
    name: 'Lina K.',
    role: 'Pelanggan',
    initials: 'LK',
    rating: 5,
  },
  {
    id: 't8',
    quote: 'Coaster-nya jadi conversation starter di meja kerja. Semua orang tanya dan kagum waktu tau dibuat dari sampah.',
    name: 'Farhan M.',
    role: 'Pelanggan',
    initials: 'FM',
    rating: 5,
  },
]
