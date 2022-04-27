import styles from './styles.module.scss';

interface ISubscribeButton {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: ISubscribeButton) => {
  return(
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}