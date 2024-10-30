<template>
  <section class="contact">
    <div class="container">
      <div class="info-wrapper">
        <div class="info-box">
          <i class="fas fa-phone-alt"></i>
          <h3>Telefon</h3>
          <div class="phone-wrapper">
            <p id="phoneNumber">+381 61/2700-420</p>   
            <button @click="copyOnClick" class="copy-button">
              <i class="fas fa-copy"></i>
            </button>
          </div>
        </div>
        <div class="info-box">
          <i class="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>
            <a href="mailto:goran@astraing.com" class="mail">goran@astraing.com</a>
          </p>
        </div>
        <div class="info-box">
          <i class="fas fa-map-marker-alt"></i>
          <h3>Adresa</h3>
          <p>Vojni put 210/II</p>
          <p>Zemun, Beograd</p>
        </div>
      </div>
    </div>
    <div class="contact-box">
      <i class="fas fa-paper-plane"></i>
      <form @submit.prevent="sendEmail">
        <h3>Pošaljite nam poruku</h3>
        <div>
          <label for="email">Vaš mail: </label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="subject">Naslov: </label>
          <input type="text" id="subject" v-model="subject" required>
        </div>
        <div>
          <label for="message">Poruka: </label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit" class="btn-submit">POŠALJI</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const subject = ref('');
const message = ref('');

const sendEmail = async () => {
  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        subject: subject.value,
        message: message.value
      })
    });

    if (response.ok) {
      alert('Email sent successfully!');
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Failed to send email.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('An error occurred while sending the email.');
  }
};

const copyOnClick = () => {
  const copyText = document.getElementById("phoneNumber").textContent;
  navigator.clipboard.writeText(copyText);
  alert(`Copied the text: ${copyText}`);
};
</script>

<style scoped>

.contact {
  background-color: #f4f4f9;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.info-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.info-box {
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2.5rem;
  margin: 1rem;
  text-align: center;
  flex: 1 1 30%;
  min-width: 200px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.info-box i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
}

h3 {
  color: #ffd700;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

p {
  color: #333;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.phone-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-button {
  background-color: #fff;
  color: #333;
  border: 0;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-left: 0.5rem;
}

.copy-button i {
  font-size: 1.2rem;
}

.copy-button:hover {
  background-color: #ffd700;
  color: #2b3a55;
}

.copy-button:active {
  background-color: #e6c200;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

input, textarea {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
}

textarea {
  resize: none;
  height: 150px;
}

.btn-submit {
  background-color: #ffd700;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 900;
}

.btn-submit:hover {
  background-color: #e6c200;
}

@media (max-width: 768px) {
  .info-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .info-box {
    flex: 1 1 100%;
  }
}

.contact-box {
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2.5rem;
  margin: 2rem 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
