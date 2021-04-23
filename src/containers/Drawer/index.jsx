import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu';
import SideBar from '../../components/SideBar';
import links from '../../links';
import Text from '../../base/Text';
import ActiveLink from '../../base/ActiveLink';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerMenu
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <SideBar isOpen={isOpen}>
        {links.map(({ id, link, text }) => (
          <ActiveLink
            key={id}
            href={link}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Text type="span" style={{ color: 'white' }}>
              {text}
            </Text>
          </ActiveLink>
        ))}
      </SideBar>
    </>
  );
}
