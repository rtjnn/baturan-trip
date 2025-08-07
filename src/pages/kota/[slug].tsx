// pages/kota/[slug].tsx
import { useRouter } from 'next/router';

export default function KotaPage() {
  const { slug } = useRouter().query;

  return <h1>Halaman kota: {slug}</h1>;
}
