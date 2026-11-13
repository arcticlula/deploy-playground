/**
 * Sends forms marked with data-ajax-form in the background and shows the result under the form,
 * so the visitor stays on the page. Used by the contact form and the newsletter form.
 *
 * The form needs:
 *   - action="/api/….php" method="post"
 *   - data-ok / data-error (and optionally data-invalid, data-sending) with the messages to show
 *   - an element with data-form-message where the message appears
 *
 * Without JavaScript the form still works: the PHP script answers with a small page of its own.
 */
document.querySelectorAll<HTMLFormElement>('form[data-ajax-form]').forEach((form) => {
  const message = form.querySelector<HTMLElement>('[data-form-message]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const buttonText = button?.textContent ?? '';

  const show = (text: string | undefined, state: 'ok' | 'error') => {
    if (!message || !text) return;
    message.textContent = text;
    message.dataset.state = state;
    message.hidden = false;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      show(form.dataset.invalid, 'error');
      return;
    }

    if (message) message.hidden = true;
    if (button) {
      button.disabled = true;
      if (form.dataset.sending && buttonText.trim()) button.textContent = form.dataset.sending;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; reason?: string } | null;

      if (response.ok && result?.ok) {
        form.reset();
        show(form.dataset.ok, 'ok');
      } else if (result?.reason === 'invalid') {
        show(form.dataset.invalid ?? form.dataset.error, 'error');
      } else {
        show(form.dataset.error, 'error');
      }
    } catch {
      show(form.dataset.error, 'error');
    } finally {
      if (button) {
        button.disabled = false;
        if (buttonText.trim()) button.textContent = buttonText;
      }
    }
  });
});
