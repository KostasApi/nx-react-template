import styles from './common-ui.module.css';

/* eslint-disable-next-line */
export interface CommonUiProps {}

export function CommonUi(props: CommonUiProps) {
  console.log('props :>> ', props);
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonUi!</h1>
    </div>
  );
}

export default CommonUi;
