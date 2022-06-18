async function editFormHandler(event) {
    event.preventDefault();

    document.querySelector('input[name="post-title"]').value

    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);