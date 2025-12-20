# Astro + WordPress + Azure Storage Demo

Web simple que muestra:
- **Texto** desde WordPress (Headless CMS)
- **Imagen** desde Azure Blob Storage

## Estructura

```
astro-wordpress-demo/
├── src/
│   ├── config.js          # ⚙️ URLs de WordPress y Storage (EDITAR)
│   ├── wordpress.js       # Conexión con WPGraphQL
│   ├── layouts/
│   │   └── Layout.astro   # Layout base
│   └── pages/
│       └── index.astro    # Página principal
├── astro.config.mjs
├── staticwebapp.config.json
└── package.json
```

## Configuración

### 1. Editar `src/config.js`

```javascript
// Cambia estas URLs por las tuyas:
export const WORDPRESS_URL = 'https://TU-WORDPRESS.azurewebsites.net';
export const STORAGE_URL = 'https://TU-STORAGE.blob.core.windows.net';
```

### 2. WordPress

1. Instalar plugin **WPGraphQL**
2. Crear página con slug `inicio`
3. Escribir el contenido que quieras

### 3. Azure Storage

1. Crear contenedor `imagenes` con acceso público
2. Subir imagen `hero.jpg` (o cambiar nombre en index.astro)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Desplegar en Azure Static Web Apps

### Opción A: Desde GitHub (recomendado)

1. Sube este proyecto a un repo de GitHub
2. Azure Portal → Crear Static Web App
3. Conectar con tu repo
4. Configurar:
   - App location: `/`
   - Output location: `dist`
   - Build command: `npm run build`

### Opción B: Manual con CLI

```bash
# Instalar SWA CLI
npm install -g @azure/static-web-apps-cli

# Build
npm run build

# Deploy
swa deploy ./dist --env production
```

## Flujo de trabajo

| Quiero cambiar... | Hago esto |
|-------------------|-----------|
| El texto | Edito la página en WordPress Admin |
| La imagen | Subo nueva imagen al contenedor de Storage |
| El diseño | Edito los archivos .astro, push a GitHub |

## Rebuild automático

Por defecto Astro genera HTML estático en el build. Si cambias el contenido en WordPress, necesitas hacer rebuild.

**Opciones:**
1. Push vacío a GitHub para forzar rebuild
2. Configurar webhook en WordPress → Azure DevOps
3. Usar Astro en modo SSR (más complejo)
