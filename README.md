# Our Wedding — Invitación

Pequeña web de invitación para Daniela & Gustavo.

Descripción
- Página estática con secciones: hero, detalles del evento, programa, código de vestimenta y formulario de RSVP.
- RSVP puede enviarse vía Google Forms (embebido) o a un endpoint local (`/api/rsvp`) que guarda en SQLite y opcionalmente anexa a Google Sheets.

Desarrollo local
1. Instala dependencias (solo si vas a usar el servidor Node):
   ```powershell
   npm init -y; npm install express sqlite3 googleapis
   ```
2. Ejecuta el servidor (sirve archivos estáticos y expone `/api/rsvp`):
   ```powershell
   node server.js
   ```
3. Abre `http://localhost:3000` en tu navegador.

Notas
- El formulario público está embebido usando Google Forms; si prefieres recibir RSVPs en una hoja, crea un Form y vincúlalo a una Google Sheet.
- Para la integración opcional con Google Sheets via `server.js`, coloca el JSON de la cuenta de servicio en `data/gs-credentials.json` y define la variable de entorno `GOOGLE_SHEET_ID`.

Contribuciones
- Usa la rama `copilot/add-wedding-invitation-page` para cambios en progreso.

Licencia
- Contenido del repositorio: uso privado / no comercial por defecto.
