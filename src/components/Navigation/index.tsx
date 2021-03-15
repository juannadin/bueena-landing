import React, {FC} from 'react';
import classnames from 'classnames';

type NavigationProps = {
  theme: 'dark' | 'light';
}

const Navigation:FC<NavigationProps> = ({ theme }) => {
  const navigationListItemClassNames = classnames(
    'navigation__list-item',
    {'medium-label': theme === 'dark' },
    {'body-1': theme === 'light' },
    {'navigation__list-item--light': theme === 'light' },

    );
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className={navigationListItemClassNames}><a href="#">Team</a></li>
        <li className={navigationListItemClassNames}><a href="#">Services</a></li>
        <li className={navigationListItemClassNames}><a href="#">Join us</a></li>
      </ul>
    </nav>
  )
};

export default Navigation;
