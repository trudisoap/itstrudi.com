# Trudi.com test 

Generated favicons using `https://realfavicongenerator.net/`.

```bash
sudo podman build . -t tailwindcss
sudo podman run -it -v /home/aaron/projects/itstrudi.com/:/tmp/site localhost/tailwindcss npx tailwindcss init
sudo podman run -it -v /home/aaron/projects/itstrudi.com/:/tmp/site localhost/tailwindcss npx tailwindcss build styles.css -o ./assets/output.css
```
