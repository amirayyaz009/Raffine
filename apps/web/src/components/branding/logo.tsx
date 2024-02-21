import type { SVGAttributes } from 'react';

import Image from 'next/image';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <div className="relative h-16 w-40">
      <Image src="/static/logo.png" className="object-contain" layout="fill" alt="logo" />
    </div>
  );
};
