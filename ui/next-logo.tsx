import Image from 'next/image';

export function NextLogo() {
  return (
    <Image
      src="/pg-logo.png"
      width={100}
      height={100}
      alt="Logo pequeno-gafanhoto"
    />
  );
}
