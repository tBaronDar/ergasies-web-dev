import { useState } from 'react';
import SideForm from './components/side-form';
import Globe from './components/globe';
import TextSection from './components/text-section';
import Footer from './components/footer';

import styles from './ex-05.module.css';

function Ex05Page() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [travelPlan, setTravelPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [validationErrors, setValidationErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const handleTravelPlanSubmit = (event) => {
    event.preventDefault();
    const errors = [];

    if (!formData.name.trim()) {
      errors.push('Name is required');
    }

    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else {
      //ai generated regx
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.push('Invalid email format');
      }
    }

    if (!formData.message.trim()) {
      errors.push('Message is required');
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      console.error('Validation failed:', errors);
      return;
    }

    console.log('Form submitted with data:', {
      destination: selectedDestination,
      ...formData,
    });

    setValidationErrors([]);
    setTravelPlan({ name: formData.name, email: formData.email, message: formData.message });
  };

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  console.log(travelPlan);

  return (
    <>
      <Globe selectedDestination={selectedDestination} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Travel The Neon Globe</h1>
        </header>
        <div className={styles.mainContainer}>
          <nav className={styles.nav}>
            <h2>Destinations</h2>
            <ul className={styles.destinationsList}>
              <li>
                <button onClick={() => handleDestinationClick('San Deloitto')}>San Deloitto</button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Kingdom of Pamakistan')}>Kingdom of Pamakistan</button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('El Camundo')}>El Camundo</button>
              </li>
            </ul>
          </nav>
          <TextSection selectedDestination={selectedDestination} />
          <SideForm
            selectedDestination={selectedDestination}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleTravelPlanSubmit}
          />
        </div>
        <Footer validationErrors={validationErrors} />
      </div>
    </>
  );
}

export default Ex05Page;
