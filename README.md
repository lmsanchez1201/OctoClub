# Homework Club O.C.T.O. - Sitio Web

## 📋 Descripción
Sitio web moderno y responsive para el Homework Club O.C.T.O., un centro de apoyo académico y desarrollo integral para niños.

## 🎨 Características

### Diseño
- **Responsive**: Adaptado para desktop, tablet y móvil
- **Moderno y Dinámico**: Animaciones suaves y efectos visuales
- **Colores del Logo**: Paleta basada en los colores del pulpo O.C.T.O.
- **Tipografías**: Poppins (texto) y Fredoka (títulos) - amigables y profesionales

### Funcionalidades
- ✅ Carrusel automático en el hero (3 slides, 5 segundos cada uno)
- ✅ Navegación sticky con efecto al scroll
- ✅ Animaciones al hacer scroll (Intersection Observer)
- ✅ Carrusel de testimonios (2 visibles en desktop, 1 en móvil)
- ✅ FAQ con acordeón
- ✅ Botón flotante de WhatsApp con animación
- ✅ Smooth scroll entre secciones
- ✅ Menú hamburguesa para móviles
- ✅ Optimizado para SEO (HTML5 semántico, meta tags)

### Secciones
1. **Hero Carousel**: Presentación con 3 imágenes rotativas
2. **Por Qué Elegirnos**: 4 características destacadas
3. **Servicios**: 4 servicios principales con imágenes
4. **Actividades de Fin de Semana**: 6 actividades recreativas
5. **Quiénes Somos**: Información del club con estadísticas
6. **Testimonios**: Carrusel con opiniones de padres
7. **Galería**: Fotos de actividades
8. **FAQ**: Preguntas frecuentes con acordeón
9. **Precios**: 3 planes (Básico, Completo, Premium)
10. **Contacto**: Información de contacto y CTA de WhatsApp
11. **Footer**: Links, información y redes sociales

## 📁 Estructura de Archivos

```
octo-website/
│
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── main.js             # JavaScript para interactividad
├── images/                 # Todas las imágenes
│   ├── logo.png
│   ├── carousel1.jpg
│   ├── carousel2.jpg
│   ├── carousel3.jpg
│   ├── teacher-board.jpg
│   ├── teacher-student.jpg
│   ├── children-study.jpg
│   ├── psychologist.jpg
│   └── parent1-4.jpg
├── .htaccess              # Configuración Apache (SEO)
├── robots.txt             # Instrucciones para buscadores
└── README.md              # Este archivo
```

## 🚀 Instalación

### Opción 1: Hosting Tradicional (cPanel, etc.)
1. Sube todos los archivos y carpetas al directorio raíz de tu hosting
2. Asegúrate de que la estructura de carpetas se mantenga
3. El sitio debería estar disponible inmediatamente

### Opción 2: Servidor Local (Testing)
1. Abre `index.html` directamente en tu navegador
2. O usa un servidor local simple:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con PHP
   php -S localhost:8000
   ```
3. Abre http://localhost:8000 en tu navegador

## ✏️ Personalización

### 1. Reemplazar Imágenes
Las imágenes actuales son placeholders. Reemplázalas con:
- **Logo** (`images/logo.png`): Logo real de O.C.T.O.
- **Carrusel** (`images/carousel1-3.jpg`): Fotos del club, niños, actividades
- **Servicios** (`images/teacher-board.jpg`, etc.): Fotos reales de maestros y niños
- **Testimonios** (`images/parent1-4.jpg`): Fotos reales de padres (o mantener avatares)

**Dimensiones recomendadas:**
- Logo: 200x200px (PNG con fondo transparente)
- Carrusel: 1920x800px
- Servicios: 600x400px
- Padres/Testimonios: 150x150px

### 2. Actualizar Información de Contacto
En `index.html`, busca y reemplaza:
- `[Inserta tu dirección]` → Dirección real
- `+57 300 123 4567` → Número de WhatsApp real
- `info@homeworkclubocto.com` → Email real
- `@HomeworkClubOCTO` → Usuario real de redes sociales

**Ubicaciones en el código:**
- Sección Contact (línea ~920)
- Footer (línea ~1050)
- Botón WhatsApp flotante (línea ~1120)

### 3. Modificar Testimonios
En `index.html`, sección `testimonials` (línea ~760):
```html
<div class="testimonial-card">
    <div class="testimonial-header">
        <img src="images/parent1.jpg" alt="Nombre del Padre">
        <div class="testimonial-info">
            <h4>Nombre del Padre</h4>
            ...
        </div>
    </div>
    <p class="testimonial-text">"Testimonio real aquí..."</p>
</div>
```

### 4. Ajustar Precios
En `index.html`, sección `pricing` (línea ~850):
```html
<div class="price">
    <span class="amount">150.000</span> <!-- Cambiar aquí -->
    <span class="period">/mes</span>
</div>
```

### 5. Cambiar Colores (Opcional)
En `css/styles.css`, las primeras líneas (variables CSS):
```css
:root {
    --color-navy: #2C3E50;    /* Azul oscuro principal */
    --color-cyan: #7DD3C0;     /* Verde agua */
    --color-yellow: #F4D03F;   /* Amarillo */
    --color-green: #A8E6CF;    /* Verde claro */
    --color-pink: #FFB6C1;     /* Rosa */
    --color-purple: #D4A5D4;   /* Morado */
}
```

## 🔧 Configuración SEO

### Meta Tags (Ya incluidos en index.html)
- Title, Description, Keywords
- Open Graph para redes sociales
- Viewport para responsive

### Archivo .htaccess
Configuración para Apache incluida con:
- Redirección HTTPS
- Compresión GZIP
- Cache de archivos estáticos
- URLs amigables

### robots.txt
Archivo incluido para guiar a los motores de búsqueda

### Próximos Pasos para SEO
1. Crear una cuenta en Google Search Console
2. Enviar el sitemap.xml
3. Verificar el sitio
4. Registrar en Google My Business
5. Optimizar las imágenes (nombres descriptivos, alt tags)
6. Crear contenido de blog (opcional)

## 📱 Redes Sociales

Actualizar los enlaces en el Footer y sección Contact:
```html
<!-- Facebook -->
<a href="https://facebook.com/tuPagina">

<!-- Instagram -->
<a href="https://instagram.com/tuCuenta">

<!-- YouTube -->
<a href="https://youtube.com/tuCanal">

<!-- TikTok -->
<a href="https://tiktok.com/@tuUsuario">
```

## 🎯 Características Técnicas

### Performance
- Imágenes optimizadas
- CSS y JS minificables (próximo paso)
- Lazy loading de imágenes (implementado)
- Animaciones con CSS (hardware accelerated)

### Compatibilidad
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- IE11+ (con degradación elegante)
- iOS Safari, Chrome Mobile

### Accesibilidad
- HTML semántico
- Alt tags en imágenes
- Contraste de colores adecuado
- Navegación por teclado funcional

## 📞 Soporte

Para modificaciones o dudas sobre el sitio:
- Revisar este README
- Comentarios en el código
- Variables CSS para cambios rápidos de color

## 🔄 Actualizaciones Futuras (Sugeridas)

1. **Sistema de Blog**: Para publicar artículos educativos
2. **Galería Expandida**: Lightbox para ver fotos en grande
3. **Formulario de Contacto**: Con envío a email
4. **Chat en Vivo**: Integración con Tawk.to o similar
5. **Área de Padres**: Login para ver progreso de hijos
6. **Multiidioma**: Español/Inglés
7. **Google Analytics**: Para tracking de visitantes
8. **Facebook Pixel**: Para remarketing

## 📝 Notas Importantes

1. **WhatsApp**: El número debe incluir código de país (ej: +57)
2. **HTTPS**: Necesario para el botón de WhatsApp en producción
3. **Backup**: Siempre haz backup antes de modificar archivos
4. **Testing**: Prueba en diferentes dispositivos antes de publicar
5. **Imágenes**: Optimiza las imágenes antes de subirlas (TinyPNG.com)

## ✅ Checklist Pre-Lanzamiento

- [ ] Reemplazar todas las imágenes placeholder
- [ ] Actualizar información de contacto (dirección, teléfono, email)
- [ ] Verificar enlaces de redes sociales
- [ ] Ajustar precios si es necesario
- [ ] Reemplazar testimonios con reales
- [ ] Probar en móvil, tablet y desktop
- [ ] Verificar que todos los links funcionen
- [ ] Optimizar imágenes
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar dominio y hosting
- [ ] Activar HTTPS
- [ ] Enviar sitemap a Google
- [ ] Crear páginas en redes sociales

---

**Desarrollado para Homework Club O.C.T.O.**  
*Más que tareas, un espacio para brillar* ✨🐙
