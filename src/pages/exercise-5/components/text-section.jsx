import styles from './text-section.module.css';
export default function TextSection(props) {
  const { selectedDestination } = props;

  const destinations = {
    'San Deloitto': {
      name: 'San Deloitto',
      description:
        'San Deloitto is a post apocalyptic wasteland where dreams go to died. The inhabitants of the city are all dreamers, and they all suffer form the endless clapping syndrome(ECS).',
    },
    'Kingdom of Pamakistan': {
      name: 'Kingdom of Pamakistan',
      description: 'Kingdom of Pamakistan, possibly non existent country. A land of endless sand and silence.',
    },
    'El Camundo': {
      name: 'El Camundo',
      description: 'El Camundo Grande, a river in the middle of the Modela Desert. Populated by blind slimy fish.',
    },
  };
  return (
    <section className={styles.section}>
      {selectedDestination && (
        <>
          <h2>{destinations[selectedDestination].name}</h2>
          <p>{destinations[selectedDestination].description}</p>
        </>
      )}
    </section>
  );
}
