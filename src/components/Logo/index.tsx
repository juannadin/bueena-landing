import React, {FC} from 'react';

type LogoProps = {
  theme: 'dark' | 'light';
}

const Logo: FC<LogoProps> = ({ theme }) => (
  <img className="logo" src={`/assets/logo-bueena${theme === 'light' ? '-white' : ''}.svg`} alt="Bueena Product Development Agency" />
);

export default Logo;
