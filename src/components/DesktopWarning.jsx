import styles from "./DesktopWarning.module.css";

const DesktopWarning = () => {
  return (
    <div className={styles.desktopWarning}>
      This page is currently optimized for mobile view. Please shrink your
      browser window or switch to a mobile device.
    </div>
  );
};

export default DesktopWarning;
