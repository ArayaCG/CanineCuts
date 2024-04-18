import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <div className={styles.homeConteinter}>
                <div className="title">
                    <h1>CanineCuts</h1>
                    <h2>Treat your pup to a paw-fect day at CanineCuts!</h2>
                </div>
                <img src="/home.jpg" alt="" className={styles.img} />
            </div>
        </>
    );
};

export default Home;
