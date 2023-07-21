document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
  
    console.log('Nome:', firstName);
    console.log('Sobrenome:', lastName);
    console.log('Idade:', age);
    console.log('País:', country);
  
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('country').value = '';
  
    alert(`Bem-vindo, ${firstName} ${lastName}! Seu cadastro foi concluído com sucesso.`);
  });