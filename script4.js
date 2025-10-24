document.addEventListener("DOMContentLoaded", () => {
                const form = document.querySelector('.contact-form');

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                try{
                const response = await
                fetch(form.action, {
                    method: 'post',
                    body: formData,
                    headers: {'Accept': 'application/json'}
                });
                if (response.ok) {
                    alert('Message sent sucessfully!');
                    form.reset();
                } else{
                    alert('Ooops! Something went wrong. Please try again');
                }
            } catch (error) {
                alert("Network error - Please check your connection")
            }
            });
            });