document.getElementById('rsvpForm')?.addEventListener('submit', async function(e){
  e.preventDefault();
  const form = this;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const attend = form.querySelector('input[name="attend"]:checked')?.value || '';
  const note = form.note.value.trim();

  const feedback = form.querySelector('.form-feedback');
  const submitBtn = form.querySelector('button[type="submit"]');

  // validación simple
  if(!name){
    feedback.textContent = 'Por favor indica tu nombre.';
    form.name.focus();
    return;
  }
  if(!attend){
    feedback.textContent = 'Por favor indica si asistirás.';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  feedback.textContent = '';

  try{
    const res = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, attend, note })
    });

    if(!res.ok){
      throw new Error('Error en el servidor');
    }

    const data = await res.json();
    feedback.textContent = 'Gracias. Tu RSVP ha sido registrado.';
    form.reset();
  }catch(err){
    console.error(err);
    feedback.textContent = 'No se pudo enviar. Intentaremos de nuevo más tarde.';
  }finally{
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar RSVP';
  }
});
