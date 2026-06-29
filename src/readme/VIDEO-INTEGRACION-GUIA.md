# 🎬 Guía de Integración - Video Demo RayGold

## 📦 Archivos incluidos

| Archivo | Descripción |
|---------|-------------|
| `VideoDemo.astro` | Componente listo para usar |

---

## 🚀 Instalación rápida

### 1. Copiar el componente
```bash
cp VideoDemo.astro src/components/
```

### 2. Importar en tu página (index.astro)
```astro
---
import VideoDemo from "../components/VideoDemo.astro";
---

<Hero />
<PorQueRayGold />
<VideoDemo />        <!-- ← AQUÍ -->
<Testimonios />
```

---

## 📍 Dónde ubicar el video en la web

### Opción recomendada: Después de "Por qué RayGold"

```
┌─────────────────────────────────────┐
│           HEADER / NAV              │
├─────────────────────────────────────┤
│              HERO                   │
│   "El ERP que habla tu idioma"      │
├─────────────────────────────────────┤
│         POR QUÉ RAYGOLD            │
│   35 años · 100% joyería · etc.     │
├─────────────────────────────────────┤
│         ★ VIDEO DEMO ★              │  ← AQUÍ
│   "Descubre RayGold en 90 seg"      │
├─────────────────────────────────────┤
│          TESTIMONIOS                │
│   Casos de éxito reales             │
├─────────────────────────────────────┤
│            FOOTER                   │
└─────────────────────────────────────┘
```

**¿Por qué aquí?**
1. El usuario ya sabe QUÉ es RayGold (Hero)
2. Ya sabe POR QUÉ elegirlo (diferenciadores)
3. Ahora quiere VERLO en acción (video)
4. Después ve prueba social (testimonios)

---

## 🎥 Opciones de hosting del video

### Opción A: Azure Blob Storage (RECOMENDADA)

**Ventajas:**
- ✅ Control total sobre el archivo
- ✅ Sin marcas de agua ni branding externo
- ✅ Ya tienes la infraestructura montada
- ✅ CDN de Azure para velocidad

**Configuración:**
```javascript
// En VideoDemo.astro, línea ~15
const videoType = "self-hosted";
const videoSrc = "https://youtu.be/Roh6rYr7ILw";
const posterSrc = "https://tucontainer.blob.core.windows.net/videos/raygold-demo-poster.jpg";
```

**Pasos para subir:**
```bash
# 1. Crear contenedor (si no existe)
az storage container create --name videos --account-name tuStorageAccount

# 2. Subir video
az storage blob upload \
  --account-name tuStorageAccount \
  --container-name videos \
  --name raygold-demo.mp4 \
  --file ./tu-video.mp4 \
  --content-type video/mp4

# 3. Subir poster/thumbnail
az storage blob upload \
  --account-name tuStorageAccount \
  --container-name videos \
  --name raygold-demo-poster.jpg \
  --file ./poster.jpg \
  --content-type image/jpeg
```

**⚠️ Importante:** Configurar acceso público al contenedor o usar SAS tokens.

---

### Opción B: YouTube

**Ventajas:**
- ✅ Gratis y sin límites de ancho de banda
- ✅ Streaming adaptativo automático
- ✅ SEO adicional en YouTube
- ✅ Analytics incluidos

**Desventajas:**
- ❌ Logo de YouTube visible
- ❌ Puede mostrar videos relacionados al terminar

**Configuración:**
```javascript
// En VideoDemo.astro
const videoType = "youtube";
const youtubeId = "ABC123xyz";  // Solo el ID, no la URL completa
```

**Cómo obtener el ID:**
```
URL: https://www.youtube.com/watch?v=ABC123xyz
                                    └─────────┘
                                    Este es el ID
```

---

### Opción C: Vimeo

**Ventajas:**
- ✅ Más profesional (sin videos relacionados)
- ✅ Mejor calidad de imagen
- ✅ Sin publicidad

**Desventajas:**
- ❌ Plan gratuito limitado (500MB/semana)
- ❌ Plan Pro necesario para quitar logo

**Configuración:**
```javascript
// En VideoDemo.astro
const videoType = "vimeo";
const vimeoId = "123456789";
```

---

### Opción D: Carpeta /public (solo desarrollo)

**Solo para pruebas locales:**
```bash
# Crear carpeta
mkdir -p public/videos

# Copiar video
cp tu-video.mp4 public/videos/raygold-demo.mp4
```

```javascript
const videoType = "self-hosted";
const videoSrc = "/videos/raygold-demo.mp4";
```

**⚠️ No recomendado para producción** - el video se incluye en el build y aumenta mucho el tamaño del deploy.

---

## 🖼️ Crear el poster/thumbnail

El poster es la imagen que se muestra antes de reproducir el video.

### Opción 1: Extraer frame del video
```bash
# Con FFmpeg
ffmpeg -i raygold-demo.mp4 -ss 00:00:05 -vframes 1 -q:v 2 poster.jpg
```

### Opción 2: Diseñar en Canva/Figma
- Captura del ERP con overlay oscuro
- Texto: "Ver demo de RayGold"
- Icono de play central
- Resolución: 1920x1080

### Opción 3: Sin poster
El componente funciona sin poster, mostrará fondo oscuro.

---

## 📐 Especificaciones recomendadas del video

| Propiedad | Recomendado | Máximo |
|-----------|-------------|--------|
| **Duración** | 60-90 seg | 2 min |
| **Resolución** | 1080p | 4K |
| **Formato** | MP4 (H.264) | - |
| **Tamaño** | < 50 MB | 100 MB |
| **Aspect ratio** | 16:9 | - |
| **FPS** | 30 | 60 |

### Optimizar para web
```bash
# Comprimir manteniendo calidad
ffmpeg -i original.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k raygold-demo.mp4
```

---

## ✨ Personalización del componente

### Cambiar colores (línea ~160 en VideoDemo.astro)
```css
/* Cambiar el color principal (púrpura) */
.section-badge {
  background: rgba(TU_COLOR_RGB, 0.1);
  border-color: rgba(TU_COLOR_RGB, 0.3);
  color: #TU_COLOR_HEX;
}

.play-button {
  background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
}
```

### Cambiar textos
```astro
<!-- Línea ~35 -->
<h2 class="section-title">
  Descubre RayGold en 
  <span class="gradient-text">90 segundos</span>  <!-- Cambiar duración -->
</h2>
```

### Quitar CTA inferior
Eliminar el bloque `<div class="video-cta">...</div>` (líneas ~100-115)

---

## 🧪 Testing

### Checklist antes de publicar
- [ ] Video se reproduce correctamente
- [ ] Poster se muestra antes de reproducir
- [ ] Botón de play funciona
- [ ] Video se ve bien en móvil
- [ ] Tiempo de carga < 3 segundos
- [ ] Controles de video funcionan
- [ ] El video tiene subtítulos (opcional pero recomendado)

---

## 📱 Comportamiento en móvil

El componente está 100% responsive:
- En móvil el botón de play es más pequeño
- Los features se apilan verticalmente  
- El CTA ocupa todo el ancho

---

## 🔗 Enlaces ancla

El componente incluye `id="demo"` para navegación:
```html
<a href="#demo">Ver demo</a>
```

Puedes añadir esto al menú de navegación.

---

## ❓ FAQ

**¿Puedo usar autoplay?**
No recomendado. Los navegadores bloquean autoplay con sonido. Además, es mejor que el usuario elija cuándo ver el video.

**¿Necesito varios formatos de video?**
No. MP4 con H.264 es compatible con el 99% de navegadores.

**¿Cómo añado subtítulos?**
```html
<video>
  <source src="video.mp4" type="video/mp4">
  <track kind="subtitles" src="subtitles.vtt" srclang="es" label="Español">
</video>
```

---

## 📞 Siguiente paso

Cuando tengas el video final:
1. Súbelo a Azure Blob Storage
2. Actualiza `videoSrc` en el componente
3. Genera un poster atractivo
4. ¡Listo!

¿Dudas? Seguimos iterando 🚀
