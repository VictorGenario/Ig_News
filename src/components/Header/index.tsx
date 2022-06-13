import { useState } from 'react';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
  const [isActive, setIsActive] = useState(false)

  function handleNavBar (){
    setIsActive(true);
  }

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href='#' onClick={handleNavBar}>Home</a>
          <a href='#' onClick={handleNavBar}>Posts</a>
         
          
        </nav>
        <SignInButton />
      </div>
    </header>
  );
  
}