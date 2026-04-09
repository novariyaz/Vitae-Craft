import React from 'react'
import Grid from '../components/TemplatesGrid'
import styles from '../styles/pages/Home.module.css'

function Home() {
    return (
        <div className={styles.root}>
            <header className={styles.header}>
               <div className={styles.brand}>
                   <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="VitaeCraft Logo" className={styles.logo} />
                   <span>VitaeCraft</span>
               </div>
               <nav className={styles.nav}>
                   <a href="#templates" className={styles.navLink}>Templates</a>
               </nav>
            </header>

           <main className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heading}>Craft Your Professional Story</h1>
                    <p className={styles.subheading}>
                        A minimal, distraction-free environment to build your next career-defining resume. 
                        Join thousands of professionals who trust VitaeCraft.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="#templates" className={styles.primaryBtn}>Get Started</a>
                    </div>
                </div>
           </main>

           <section id="templates" className={styles.templates_section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.templates_title}>Choose a Foundation</h2>
                    <p className={styles.sectionSubtitle}>Select a template to begin your journey</p>
                </div>
                <Grid />
           </section>

           <footer className={styles.footer}>
               <div className={styles.footerContent}>
                    <p>&copy; {new Date().getFullYear()} VitaeCraft. All rights reserved.</p>
                    <p className={styles.developer}>Developed with precision by Riyaz</p>
               </div>
           </footer>
        </div>
    )
}

export default Home
