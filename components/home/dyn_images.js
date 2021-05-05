import home_styles from "../../styles/Home.module.css";

const Profile = () => {
    return (
        <img className={home_styles.user} src={`/img/profile_2.png`} />
    );
}

export default Profile;