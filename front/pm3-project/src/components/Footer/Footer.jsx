import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.footerConteiner}>
                <p>Página creada con fines educativos, espero que la disfrutes!</p>
                <div className={styles.redes}>
                    <a href="https://www.linkedin.com/in/cristian-gabriel-araya-salattino/">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/yayiii_64/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.twitch.tv/knutt64">
                        <ion-icon name="logo-twitch"></ion-icon>
                    </a>
                    <a href="https://github.com/ArayaCG">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;
