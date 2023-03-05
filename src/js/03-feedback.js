import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formValue = {};

form.addEventListener('input', throttle(setFormValue, 500));
form.addEventListener('submit', submitFormValue);

function setFormValue(e) {
  formValue[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
  console.log(formValue);
}

function submitFormValue(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.target;
  if (email.value === '' || message.value === '') {
    alert('All fields must be filled with data');
  } else {
    const data = {
      email: email.value,
      message: message.value,
    };
    console.log(data);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function updateForm() {
  const localStoredValue = localStorage.getItem(STORAGE_KEY);
  if (localStoredValue === null) {
    return;
  } else {
    try {
      const getValue = JSON.parse(localStoredValue);
      Object.entries(getValue).forEach(([name, value]) => {
        formValue[name] = value;
        form.elements[name].value = value;
      });
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}

updateForm();
