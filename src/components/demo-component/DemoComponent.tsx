import styles from './DemoComponent.module.css';

export interface IDemoComponent {
  sampleTextProp: string;
}

const DemoComponent: React.FC<IDemoComponent> = ({
  sampleTextProp = 'Hello World!',
}) => {
  return <div className={styles.component}>{sampleTextProp}</div>;
};

export default DemoComponent;
