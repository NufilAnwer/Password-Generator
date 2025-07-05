class Password {
  constructor(length) {
    this.length = Math.max(length, 6);
    this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
    this.digits = '0123456789';
    this.special = '!@#$%^&*()_+[]{}|;:,.<>?';
    this.all = this.uppercase + this.lowercase + this.digits + this.special;
  }

  generate() {
    let password = [];
    password.push(this.randomChar(this.uppercase));
    password.push(this.randomChar(this.special));

    for (let i = 2; i < this.length; i++) {
      password.push(this.randomChar(this.all));
    }

    return this.shuffle(password).join('');
  }

  randomChar(set) {
    return set[Math.floor(Math.random() * set.length)];
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

function generatePassword() {
  const len = parseInt(document.getElementById('length').value);
  const pw = new Password(len);
  const result = pw.generate();

  const resultEl = document.getElementById('result');
  resultEl.textContent = result;
  resultEl.style.animation = 'fadeIn 0.6s ease';
}
