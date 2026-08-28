import { Project } from '../types';

export const GITHUB_OWNER = 'Ronit-CodeWizard';
export const GITHUB_REPO = 'CodeWizard';
export const GITHUB_REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

export function formatTitle(raw: string): string {
  return raw
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace('Part 01', 'Part 1')
    .replace('Part 02', 'Part 2')
    .trim();
}

export function inferCategory(name: string): Project['category'] {
  const lower = name.toLowerCase();
  if (/loader|preloader|flipping|skeleton|truck|spinner|cat-loader/i.test(lower)) {
    return 'loader';
  }
  if (/animation|cursor|effect|roller|text|wave|tipsy|sketch|water|ghost|dark-text|impress/i.test(lower)) {
    return 'animation';
  }
  if (/masking|shader|webgl|glass|water/i.test(lower)) {
    return 'effect';
  }
  if (/card|switch|toggle|button|input|navbar|menu|tab|dock|bell|gallery/i.test(lower)) {
    return 'ui';
  }
  return 'component';
}

export function inferBadge(name: string, category: Project['category']): string {
  const lower = name.toLowerCase();
  if (lower.includes('webgel') || lower.includes('webgl')) return 'WebGL Shader';
  if (lower.includes('clock')) return 'Dual Clock';
  if (lower.includes('glass')) return 'Glassmorphism';
  if (lower.includes('fingerprint')) return 'Biometrics';
  if (lower.includes('skeuomorphic')) return 'Skeuomorphic';
  if (category === 'loader') return 'CSS Preloader';
  if (category === 'animation') return 'Interactive FX';
  if (category === 'ui') return 'UI Component';
  return 'Code Module';
}

export const PROJECT_CODE_FILES: Record<string, string[]> = {
  '404-Page-Not-Found': ['index.html', 'style.css'],
  'Animated-Gradient-Underglow': ['index.html', 'style.css'],
  'animated-gradient-underglow': ['index.html', 'style.css'],
  'analog-and-digital-clock': ['index.html', 'style.css'],
  'liquid-glass-navigation': ['index.html', 'style.css'],
  'webgel-liquid-masking': ['index.html', 'style.css', 'script.js'],
  'Animated-Input-Field': ['index.html', 'style.css'],
  'Bicycle-preloader': ['index.html', 'styles.css'],
  'Button-Hover-Sketch-Effect': ['index.html', 'style.css'],
  'CSS-tab-indicator': ['index.html', 'style.css'],
  'Card-Skeleton': ['index.html', 'styles.css'],
  'Change-Cursor-Style-on-Hover-Part-02': ['index.html', 'styles.css'],
  'Compass-preloader': ['index.html', 'style.css'],
  'Creative-navbar': ['index.html', 'style.css'],
  'Css-style-pug': ['index.html', 'style.css'],
  'Cursor-Interaction': ['index.html'],
  'Dark-text-animation': ['index.html', 'style.css', 'script.js'],
  'Delete-button-animation': ['index.html', 'style.css', 'script.js'],
  'Download-Button-Animation-Part-01': ['index.html', 'styles.css'],
  'Dropdown-Menu': ['index.html'],
  'Emerging-tooltip': ['index.html', 'style.css'],
  'Error-window': ['index.html', 'style.css'],
  'FadeIn-text-animation': ['index.html', 'style.css'],
  'File-upload-dropzone': ['index.html', 'style.css', 'script.js'],
  'Fingerprint-Login-Animation': ['index.html', 'style.css'],
  'Flipping-Loader': ['index.html', 'styles.css'],
  'Ghost-text-animation': ['index.html', 'style.css'],
  'Glide-to-reveal-animation': ['index.html', 'style.css'],
  'Happy-Diwali': ['index.html', 'style.css'],
  'Hello-world-text-roller': ['index.html', 'style.css'],
  'Hover-button-animation': ['index.html'],
  'Image-hover-effect': ['index.html', 'style.css'],
  'Impossibly-tipsy-animation': ['index.html', 'style.css'],
  'Loader-blur-animation': ['index.html', 'style.css'],
  'Marquee': ['index.html', 'style.css'],
  'Minimal-cat-loader': ['index.html'],
  'Modern-Navbar-Part-01': ['index.html'],
  'Modern-contact-card': ['index.html', 'style.css', 'main.js'],
  'Movie-Card-UI': ['index.html', 'styles.css'],
  'Navbar-02': ['index.html', 'styles.css'],
  'Notification-bell-animation': ['index.html', 'style.css'],
  'Notification-card': ['index.html', 'style.css'],
  'Orbit-loader-animation': ['index.html', 'style.css'],
  'Photo-Gallery': ['index.html', 'style.css'],
  'Product-card': ['index.html', 'style.css'],
  'Rotating-Border-Card-Design': ['index.html', 'style.css'],
  'SVG-Animated-Footer': ['index.html', 'styles.css'],
  'Satisfying-Curvy-Cursor': ['index.html', 'style.css', 'script.js'],
  'Shaking-Button': ['index.html', 'styles.css'],
  'Shopping-cart-preloader': ['index.html', 'style.css'],
  'Simple-toggle-switch': ['index.html'],
  'Skeuomorphic-toggle-switch': ['index.html', 'style.css'],
  'Smooth-Card-Animation': ['index.html', 'styles.css'],
  'Social-media-icons-hover-effect': ['index.html', 'style.css'],
  'Sportlight-Text-Animation': ['index.html', 'styles.css'],
  'Stretching-Text-Animation': ['index.html', 'style.css', 'script.js'],
  'Tab-menu-bar': ['index.html', 'style.css'],
  'Testimonials-card': ['index.html', 'style.css'],
  'Text-water-effect': ['index.html', 'style.css'],
  'Trick-&-treat-toggle': ['index.html', 'style.css'],
  'Truck-loader': ['index.html', 'style.css'],
  'Valentine-day-card': ['index.html', 'style.css'],
  'Zoom-hover-effect': ['index.html', 'style.css'],
  'button-click-animation': ['index.html', 'style.css', 'script.js'],
};

/**
 * Filter array of paths/filenames to only contain code files without folder prefix
 */
export function filterCodeFiles(files: string[]): string[] {
  return files
    .map((f) => {
      const parts = f.split('/');
      return parts[parts.length - 1];
    })
    .filter((name) => {
      return /\.(html|htm|css|scss|js|jsx|ts|tsx|json|svg|pug|glsl)$/i.test(name);
    });
}

/**
 * Get code files associated with a project
 */
export function getProjectCodeFiles(name: string): string[] {
  const exact = PROJECT_CODE_FILES[name];
  if (exact) return exact;

  const lowerName = name.toLowerCase();
  for (const [key, files] of Object.entries(PROJECT_CODE_FILES)) {
    if (key.toLowerCase() === lowerName) {
      return files;
    }
  }

  if (/cursor|trail|drag|dropzone|button-click|dark-text|delete-button|stretching|webgl|webgel/i.test(lowerName)) {
    return ['index.html', 'style.css', 'script.js'];
  }
  if (/hover-button|minimal-cat|simple-toggle|modern-navbar|dropdown/i.test(lowerName)) {
    return ['index.html'];
  }
  return ['index.html', 'style.css'];
}

export function inferTechnologies(name: string): string[] {
  const lower = name.toLowerCase();
  const techs = ['HTML5', 'CSS3', 'JavaScript'];
  if (lower.includes('webgel') || lower.includes('webgl')) techs.push('WebGL', 'Canvas');
  if (lower.includes('svg') || lower.includes('bell') || lower.includes('truck')) techs.push('SVG Animation');
  if (lower.includes('cursor') || lower.includes('canvas')) techs.push('Spring Physics');
  if (lower.includes('glass') || lower.includes('skeuomorphic')) techs.push('Neumorphism / Glass');
  return techs.slice(0, 3);
}

// Initial robust dataset matching the GitHub repository Ronit-CodeWizard/CodeWizard
export const INITIAL_PROJECTS: Project[] = [
  {
    id: '404-Page-Not-Found',
    name: '404-Page-Not-Found',
    title: '404 Page Not Found',
    category: 'ui',
    badge: 'STABLE V1.0',
    description: 'Modern animated 404 error page with playful lost astronaut illustration and interactive particle background.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    stars: 14,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/404-Page-Not-Found`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/404-Page-Not-Found/index.html`,
    liveUrl: `https://ronit-codewizard.github.io/CodeWizard/404-Page-Not-Found/`,
    type: 'dir',
  },
  {
    id: 'animated-gradient-underglow',
    name: 'animated-gradient-underglow',
    title: 'Animated Gradient Underglow',
    category: 'animation',
    badge: 'STABLE V1.0',
    description: 'Vibrant multi-layer RGB gradient blur underglow effects with continuous angle rotation keyframes.',
    technologies: ['CSS3', 'HTML5', 'Animations'],
    stars: 12,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/animated-gradient-underglow`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/animated-gradient-underglow/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/animated-gradient-underglow/`,
    type: 'dir',
  },
  {
    id: 'analog-and-digital-clock',
    name: 'analog-and-digital-clock',
    title: 'Analog & Digital Clock',
    category: 'ui',
    badge: 'Dual Clock',
    description: 'Precision dual analog and digital clock with smooth sweep second hands and neon glassmorphism UI.',
    technologies: ['JavaScript', 'CSS3', 'SVG'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/analog-and-digital-clock`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/analog-and-digital-clock/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/analog-and-digital-clock/`,
    type: 'dir',
  },
  {
    id: 'liquid-glass-navigation',
    name: 'liquid-glass-navigation',
    title: 'Liquid Glass Navigation',
    category: 'ui',
    badge: 'Glassmorphism',
    description: 'Ultra-fluid navigation dock with dynamic backdrop filter blur, tactile click snaps, and magnetic hover effects.',
    technologies: ['CSS Filters', 'JavaScript', 'HTML5'],
    stars: 12,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/liquid-glass-navigation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/liquid-glass-navigation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/liquid-glass-navigation/`,
    type: 'dir',
  },
  {
    id: 'webgel-liquid-masking',
    name: 'webgel-liquid-masking',
    title: 'WebGL Liquid Masking',
    category: 'effect',
    badge: 'WebGL Shader',
    description: 'High-performance shader-driven liquid canvas with real-time cursor ripple physics and optical refraction.',
    technologies: ['WebGL', 'GLSL', 'Canvas'],
    stars: 15,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/webgel-liquid-masking`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/webgel-liquid-masking/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/webgel-liquid-masking/`,
    type: 'dir',
  },
  {
    id: 'Animated-Input-Field',
    name: 'Animated-Input-Field',
    title: 'Animated Input Field',
    category: 'ui',
    badge: 'Form UI',
    description: 'Sleek micro-interaction input fields with dynamic border tracing, floating label transitions, and validation.',
    technologies: ['CSS3', 'JavaScript', 'Forms'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Animated-Input-Field`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Animated-Input-Field/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Animated-Input-Field/`,
    type: 'dir',
  },
  {
    id: 'Bicycle-preloader',
    name: 'Bicycle-preloader',
    title: 'Bicycle Preloader',
    category: 'loader',
    badge: 'CSS Animation',
    description: 'Pure CSS gear and wheel rotation physics loader with smooth frame-rate synchronization.',
    technologies: ['Pure CSS', 'Keyframes', 'SVG'],
    stars: 9,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Bicycle-preloader`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Bicycle-preloader/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Bicycle-preloader/`,
    type: 'dir',
  },
  {
    id: 'Button-Hover-Sketch-Effect',
    name: 'Button-Hover-Sketch-Effect',
    title: 'Button Hover Sketch Effect',
    category: 'effect',
    badge: 'SVG Stroke',
    description: 'Artistic hand-drawn sketch border effect generated on button hover with procedural SVG paths.',
    technologies: ['SVG Stroke', 'CSS3', 'Hover FX'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Button-Hover-Sketch-Effect`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Button-Hover-Sketch-Effect/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Button-Hover-Sketch-Effect/`,
    type: 'dir',
  },
  {
    id: 'CSS-tab-indicator',
    name: 'CSS-tab-indicator',
    title: 'CSS Tab Indicator',
    category: 'ui',
    badge: 'Navigation',
    description: 'Elastic physics animated pill tab bar with magnetic indicator positioning and active state feedback.',
    technologies: ['CSS Variables', 'JavaScript', 'Layout'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/CSS-tab-indicator`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/CSS-tab-indicator/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/CSS-tab-indicator/`,
    type: 'dir',
  },
  {
    id: 'Card-Skeleton',
    name: 'Card-Skeleton',
    title: 'Card Skeleton',
    category: 'loader',
    badge: 'UX Pattern',
    description: 'High-performance placeholder skeleton screens with angled radiant shimmer gradients for loading states.',
    technologies: ['CSS Gradients', 'UX', 'Responsive'],
    stars: 5,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Card-Skeleton`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Card-Skeleton/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Card-Skeleton/`,
    type: 'dir',
  },
  {
    id: 'Change-Cursor-Style-on-Hover-Part-02',
    name: 'Change-Cursor-Style-on-Hover-Part-02',
    title: 'Cursor Style On Hover (Part 2)',
    category: 'effect',
    badge: 'Cursor FX',
    description: 'Custom blend-mode cursor follower with dynamic context morphing when hovering over interactive targets.',
    technologies: ['JavaScript', 'CSS Blend Modes'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Change-Cursor-Style-on-Hover-Part-02`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Change-Cursor-Style-on-Hover-Part-02/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Change-Cursor-Style-on-Hover-Part-02/`,
    type: 'dir',
  },
  {
    id: 'Creative-navbar',
    name: 'Creative-navbar',
    title: 'Creative Navbar',
    category: 'ui',
    badge: 'Navigation',
    description: 'Modern curved header navigation with smooth accordion drawer and mobile-first responsiveness.',
    technologies: ['HTML5', 'CSS3', 'Flexbox'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Creative-navbar`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Creative-navbar/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Creative-navbar/`,
    type: 'dir',
  },
  {
    id: 'Cursor-Interaction',
    name: 'Cursor-Interaction',
    title: 'Cursor Interaction',
    category: 'effect',
    badge: 'Micro-Interaction',
    description: 'Interactive cursor physics with magnetism, velocity trail particles, and kinetic response.',
    technologies: ['JavaScript', 'Canvas', 'Math'],
    stars: 10,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Cursor-Interaction`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Cursor-Interaction/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Cursor-Interaction/`,
    type: 'dir',
  },
  {
    id: 'Dark-text-animation',
    name: 'Dark-text-animation',
    title: 'Dark Text Animation',
    category: 'animation',
    badge: 'Typography',
    description: 'High-contrast glowing neon typography reveal with staggered letter-spacing and chromatic aberration.',
    technologies: ['CSS Text Shadow', 'Keyframes'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Dark-text-animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Dark-text-animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Dark-text-animation/`,
    type: 'dir',
  },
  {
    id: 'Delete-button-animation',
    name: 'Delete-button-animation',
    title: 'Delete Button Animation',
    category: 'ui',
    badge: 'Interactive Button',
    description: 'Playful trash bin lid flip and paper shred sequence when triggering the delete action.',
    technologies: ['CSS3 Transform', 'JavaScript'],
    stars: 9,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Delete-button-animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Delete-button-animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Delete-button-animation/`,
    type: 'dir',
  },
  {
    id: 'Download-Button-Animation-Part-01',
    name: 'Download-Button-Animation-Part-01',
    title: 'Download Button Animation',
    category: 'ui',
    badge: 'State Machine',
    description: 'Full download lifecycle button with progress circular fill, checkmark completion morph, and bounce.',
    technologies: ['SVG Morph', 'CSS Keyframes'],
    stars: 11,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Download-Button-Animation-Part-01`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Download-Button-Animation-Part-01/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Download-Button-Animation-Part-01/`,
    type: 'dir',
  },
  {
    id: 'Dropdown-Menu',
    name: 'Dropdown-Menu',
    title: 'Dropdown Menu',
    category: 'ui',
    badge: 'UI Component',
    description: 'Smooth staggered popover menu with hover highlight rails and keyboard accessibility.',
    technologies: ['CSS3', 'HTML5', 'UI'],
    stars: 5,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Dropdown-Menu`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Dropdown-Menu/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Dropdown-Menu/`,
    type: 'dir',
  },
  {
    id: 'File-upload-dropzone',
    name: 'File-upload-dropzone',
    title: 'File Upload Dropzone',
    category: 'ui',
    badge: 'File API',
    description: 'Interactive drag-and-drop file ingestion portal with animated progress bars and live preview cards.',
    technologies: ['File API', 'Drag & Drop', 'CSS3'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/File-upload-dropzone`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/File-upload-dropzone/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/File-upload-dropzone/`,
    type: 'dir',
  },
  {
    id: 'Fingerprint-Login-Animation',
    name: 'Fingerprint-Login-Animation',
    title: 'Fingerprint Login Animation',
    category: 'animation',
    badge: 'Biometrics UI',
    description: 'Futuristic biometric scanner sequence with optical laser beam pass, verification state, and glow pulses.',
    technologies: ['CSS Animations', 'SVG Path', 'JavaScript'],
    stars: 14,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Fingerprint-Login-Animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Fingerprint-Login-Animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Fingerprint-Login-Animation/`,
    type: 'dir',
  },
  {
    id: 'Flipping-Loader',
    name: 'Flipping-Loader',
    title: 'Flipping Loader',
    category: 'loader',
    badge: '3D CSS',
    description: 'Geometric 3D cube isometric flipping animation with synchronized shading gradients.',
    technologies: ['CSS 3D Transform', 'Keyframes'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Flipping-Loader`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Flipping-Loader/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Flipping-Loader/`,
    type: 'dir',
  },
  {
    id: 'Ghost-text-animation',
    name: 'Ghost-text-animation',
    title: 'Ghost Text Animation',
    category: 'animation',
    badge: 'Typography',
    description: 'Ethereal ghost text dissolving particle animation using CSS blur filters and letter staggering.',
    technologies: ['CSS Blur Filters', 'Typography'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Ghost-text-animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Ghost-text-animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Ghost-text-animation/`,
    type: 'dir',
  },
  {
    id: 'Hello-world-text-roller',
    name: 'Hello-world-text-roller',
    title: 'Hello World Text Roller',
    category: 'animation',
    badge: 'Dynamic Text',
    description: 'Cylindrical 3D tumbling words carousel animation with smooth vertical scroll snapping.',
    technologies: ['CSS 3D', 'Keyframes'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Hello-world-text-roller`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Hello-world-text-roller/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Hello-world-text-roller/`,
    type: 'dir',
  },
  {
    id: 'Hover-button-animation',
    name: 'Hover-button-animation',
    title: 'Hover Button Animation',
    category: 'ui',
    badge: 'Hover FX',
    description: 'Refined button with radiant backdrop expansion and dynamic border shine traversal.',
    technologies: ['CSS Pseudo-elements', 'Hover FX'],
    stars: 5,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Hover-button-animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Hover-button-animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Hover-button-animation/`,
    type: 'dir',
  },
  {
    id: 'Image-hover-effect',
    name: 'Image-hover-effect',
    title: 'Image Hover Effect',
    category: 'effect',
    badge: 'Visual FX',
    description: 'Parallax zoom and lens flare distortion on image card hover with subtitle elevation.',
    technologies: ['CSS Transforms', 'Filters'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Image-hover-effect`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Image-hover-effect/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Image-hover-effect/`,
    type: 'dir',
  },
  {
    id: 'Minimal-cat-loader',
    name: 'Minimal-cat-loader',
    title: 'Minimal Cat Loader',
    category: 'loader',
    badge: 'Playful Loader',
    description: 'Charming sleeping cat tail-wag and breathing loop loader built with minimalist vector curves.',
    technologies: ['SVG Curves', 'CSS Keyframes'],
    stars: 13,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Minimal-cat-loader`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Minimal-cat-loader/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Minimal-cat-loader/`,
    type: 'dir',
  },
  {
    id: 'Modern-Navbar-Part-01',
    name: 'Modern-Navbar-Part-01',
    title: 'Modern Navbar (Part 1)',
    category: 'ui',
    badge: 'Navigation',
    description: 'Floating glass header with frosted backdrop blur, indicator dots, and responsive collapse.',
    technologies: ['CSS Flexbox', 'JavaScript', 'Backdrop'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Modern-Navbar-Part-01`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Modern-Navbar-Part-01/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Modern-Navbar-Part-01/`,
    type: 'dir',
  },
  {
    id: 'Modern-contact-card',
    name: 'Modern-contact-card',
    title: 'Modern Contact Card',
    category: 'ui',
    badge: 'Card UI',
    description: 'Clean developer badge card featuring social quick-links, copyable contact info, and tactile avatar.',
    technologies: ['CSS Grid', 'Neumorphism'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Modern-contact-card`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Modern-contact-card/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Modern-contact-card/`,
    type: 'dir',
  },
  {
    id: 'Movie-Card-UI',
    name: 'Movie-Card-UI',
    title: 'Movie Card UI',
    category: 'ui',
    badge: 'Card UI',
    description: '3D tilt perspective entertainment card featuring backdrop depth, poster parallax, and rating highlights.',
    technologies: ['CSS 3D Transform', 'JavaScript', 'Flexbox'],
    stars: 9,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Movie-Card-UI`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Movie-Card-UI/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Movie-Card-UI/`,
    type: 'dir',
  },
  {
    id: 'Notification-bell-animation',
    name: 'Notification-bell-animation',
    title: 'Notification Bell Animation',
    category: 'animation',
    badge: 'Micro-Animation',
    description: 'Dynamic bell ringing swing animation with badge count pop and pulsing alert ripple rings.',
    technologies: ['CSS Transform', 'Keyframes', 'SVG'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Notification-bell-animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Notification-bell-animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Notification-bell-animation/`,
    type: 'dir',
  },
  {
    id: 'Rotating-Border-Card-Design',
    name: 'Rotating-Border-Card-Design',
    title: 'Rotating Border Card',
    category: 'ui',
    badge: 'Card UI',
    description: 'Conic gradient animated border glow card with dark frosted glass backing and high-contrast typography.',
    technologies: ['Conic Gradients', 'CSS Properties'],
    stars: 11,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Rotating-Border-Card-Design`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Rotating-Border-Card-Design/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Rotating-Border-Card-Design/`,
    type: 'dir',
  },
  {
    id: 'SVG-Animated-Footer',
    name: 'SVG-Animated-Footer',
    title: 'SVG Animated Footer',
    category: 'animation',
    badge: 'Footer Waves',
    description: 'Multi-layer SVG undulating wave footer with fluid smooth bezier curve animations.',
    technologies: ['SVG Paths', 'CSS Waves'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/SVG-Animated-Footer`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/SVG-Animated-Footer/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/SVG-Animated-Footer/`,
    type: 'dir',
  },
  {
    id: 'Satisfying-Curvy-Cursor',
    name: 'Satisfying-Curvy-Cursor',
    title: 'Satisfying Curvy Cursor',
    category: 'effect',
    badge: 'Physics Canvas',
    description: 'Ultra-smooth elastic spring physics cursor trail with dynamic velocity scaling and trailing nodes.',
    technologies: ['Canvas 2D', 'Spring Physics', 'JavaScript'],
    stars: 16,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Satisfying-Curvy-Cursor`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Satisfying-Curvy-Cursor/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Satisfying-Curvy-Cursor/`,
    type: 'dir',
  },
  {
    id: 'Shaking-Button',
    name: 'Shaking-Button',
    title: 'Shaking Button',
    category: 'ui',
    badge: 'Button FX',
    description: 'Haptic shake micro-interaction on invalid input or click event with smooth settling damping.',
    technologies: ['CSS Keyframes', 'JavaScript'],
    stars: 5,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Shaking-Button`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Shaking-Button/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Shaking-Button/`,
    type: 'dir',
  },
  {
    id: 'Shopping-cart-preloader',
    name: 'Shopping-cart-preloader',
    title: 'Shopping Cart Preloader',
    category: 'loader',
    badge: 'E-Commerce',
    description: 'Delightful shopping cart item bounce physics loader designed for seamless checkout transitions.',
    technologies: ['CSS3 Keyframes', 'SVG Animation'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Shopping-cart-preloader`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Shopping-cart-preloader/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Shopping-cart-preloader/`,
    type: 'dir',
  },
  {
    id: 'Simple-toggle-switch',
    name: 'Simple-toggle-switch',
    title: 'Simple Toggle Switch',
    category: 'ui',
    badge: 'Toggle UI',
    description: 'Minimalist fluid toggle switch with spring physics thumb movement and glowing state indicator.',
    technologies: ['CSS3 Transitions', 'HTML Checkbox'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Simple-toggle-switch`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Simple-toggle-switch/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Simple-toggle-switch/`,
    type: 'dir',
  },
  {
    id: 'Skeuomorphic-toggle-switch',
    name: 'Skeuomorphic-toggle-switch',
    title: 'Skeuomorphic Toggle Switch',
    category: 'ui',
    badge: 'Tactile Skeuomorphic',
    description: 'Realistic tactile mechanical toggle switch with bevel shadows, LED indicator, and click resonance.',
    technologies: ['CSS Shadows', 'Skeuomorphism', 'HTML'],
    stars: 12,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Skeuomorphic-toggle-switch`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Skeuomorphic-toggle-switch/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Skeuomorphic-toggle-switch/`,
    type: 'dir',
  },
  {
    id: 'Smooth-Card-Animation',
    name: 'Smooth-Card-Animation',
    title: 'Smooth Card Animation',
    category: 'ui',
    badge: 'Card UI',
    description: 'Card expand and reveal effect with synchronized content transitions and spring timing.',
    technologies: ['CSS Grid', 'Transitions'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Smooth-Card-Animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Smooth-Card-Animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Smooth-Card-Animation/`,
    type: 'dir',
  },
  {
    id: 'Social-media-icons-hover-effect',
    name: 'Social-media-icons-hover-effect',
    title: 'Social Media Icons Hover',
    category: 'ui',
    badge: 'Social UI',
    description: 'Tactile 3D layer stack icon hover extrusion with brand color gradients and tooltip reveal.',
    technologies: ['CSS 3D', 'Hover Effects'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Social-media-icons-hover-effect`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Social-media-icons-hover-effect/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Social-media-icons-hover-effect/`,
    type: 'dir',
  },
  {
    id: 'Sportlight-Text-Animation',
    name: 'Sportlight-Text-Animation',
    title: 'Spotlight Text Animation',
    category: 'effect',
    badge: 'Lighting FX',
    description: 'Dynamic flashlight spotlight beam tracing across dark typography with realistic shadow occlusion.',
    technologies: ['CSS Masking', 'Radial Gradients'],
    stars: 9,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Sportlight-Text-Animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Sportlight-Text-Animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Sportlight-Text-Animation/`,
    type: 'dir',
  },
  {
    id: 'Stretching-Text-Animation',
    name: 'Stretching-Text-Animation',
    title: 'Stretching Text Animation',
    category: 'animation',
    badge: 'Kinetic Typography',
    description: 'Elastic rubber band text stretching animation reacting to hover acceleration.',
    technologies: ['CSS Transform Scale', 'Keyframes'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Stretching-Text-Animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Stretching-Text-Animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Stretching-Text-Animation/`,
    type: 'dir',
  },
  {
    id: 'Tab-menu-bar',
    name: 'Tab-menu-bar',
    title: 'Tab Menu Bar',
    category: 'ui',
    badge: 'Navigation',
    description: 'Tactile tab dock with animated background pill slide and icon badge animations.',
    technologies: ['CSS3', 'JavaScript'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Tab-menu-bar`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Tab-menu-bar/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Tab-menu-bar/`,
    type: 'dir',
  },
  {
    id: 'Testimonials-card',
    name: 'Testimonials-card',
    title: 'Testimonials Card',
    category: 'ui',
    badge: 'Card UI',
    description: 'Social proof testimonial card with verified buyer badges, quote styling, and avatar glowing rims.',
    technologies: ['HTML5', 'CSS3'],
    stars: 5,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Testimonials-card`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Testimonials-card/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Testimonials-card/`,
    type: 'dir',
  },
  {
    id: 'Text-water-effect',
    name: 'Text-water-effect',
    title: 'Text Water Effect',
    category: 'effect',
    badge: 'Wave FX',
    description: 'Realistic rising and undulating water wave filling text effect using SVG clip paths and CSS motion.',
    technologies: ['SVG Clip-Path', 'CSS Waves', 'Typography'],
    stars: 13,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Text-water-effect`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Text-water-effect/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Text-water-effect/`,
    type: 'dir',
  },
  {
    id: 'Trick-&-treat-toggle',
    name: 'Trick-&-treat-toggle',
    title: 'Trick & Treat Toggle',
    category: 'ui',
    badge: 'Themed Toggle',
    description: 'Halloween themed spooky day/night switch with animated pumpkin and ghost moon transitions.',
    technologies: ['CSS Keyframes', 'SVG'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Trick-&-treat-toggle`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Trick-&-treat-toggle/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Trick-&-treat-toggle/`,
    type: 'dir',
  },
  {
    id: 'Truck-loader',
    name: 'Truck-loader',
    title: 'Truck Delivery Loader',
    category: 'loader',
    badge: 'Animation',
    description: 'Whimsical delivery truck vehicle moving along animated road milestones with parcel drop animation.',
    technologies: ['SVG Animation', 'CSS Keyframes'],
    stars: 10,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Truck-loader`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Truck-loader/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Truck-loader/`,
    type: 'dir',
  },
  {
    id: 'Valentine-day-card',
    name: 'Valentine-day-card',
    title: 'Valentine Day Card',
    category: 'animation',
    badge: 'Interactive Card',
    description: 'Romantic greeting card with origami envelope fold-out, heart confetti particle burst, and sweet message.',
    technologies: ['CSS 3D Transforms', 'Particles'],
    stars: 7,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Valentine-day-card`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Valentine-day-card/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Valentine-day-card/`,
    type: 'dir',
  },
  {
    id: 'Zoom-hover-effect',
    name: 'Zoom-hover-effect',
    title: 'Zoom Hover Effect',
    category: 'effect',
    badge: 'Visual FX',
    description: 'Smooth optic magnifying glass zoom effect with cursor tracking coordinates.',
    technologies: ['JavaScript', 'CSS Zoom'],
    stars: 6,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/Zoom-hover-effect`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/Zoom-hover-effect/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/Zoom-hover-effect/`,
    type: 'dir',
  },
  {
    id: 'button-click-animation',
    name: 'button-click-animation',
    title: 'Button Click Animation',
    category: 'ui',
    badge: 'Micro-Interaction',
    description: 'Material ripple wave expansion on mouse click coordinates with pressure release feedback.',
    technologies: ['CSS Waves', 'Event Coordinates'],
    stars: 8,
    sourceUrl: `${GITHUB_REPO_URL}/tree/main/button-click-animation`,
    rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/button-click-animation/index.html`,
    liveUrl: `https://${GITHUB_OWNER.toLowerCase()}.github.io/${GITHUB_REPO}/button-click-animation/`,
    type: 'dir',
  }
];

export async function fetchGitHubLiveProjects(): Promise<{ projects: Project[]; stars: number; forks: number }> {
  try {
    // 1. Fetch repo metadata (stars, forks)
    const repoRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`);
    let repoStars = 24;
    let repoForks = 8;
    if (repoRes.ok) {
      const repoData = await repoRes.json();
      repoStars = repoData.stargazers_count ?? repoStars;
      repoForks = repoData.forks_count ?? repoForks;
    }

    // 2. Fetch contents directory from GitHub
    const contentsRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/`);
    if (!contentsRes.ok) {
      return { projects: INITIAL_PROJECTS, stars: repoStars, forks: repoForks };
    }

    const items: Array<{ name: string; type: string; html_url: string }> = await contentsRes.json();
    if (!Array.isArray(items)) {
      return { projects: INITIAL_PROJECTS, stars: repoStars, forks: repoForks };
    }

    const dirItems = items.filter((item) => item.type === 'dir');
    if (dirItems.length === 0) {
      return { projects: INITIAL_PROJECTS, stars: repoStars, forks: repoForks };
    }

    const mappedProjects: Project[] = [];
    const seenIds = new Set<string>();

    for (const dir of dirItems) {
      const lowerName = dir.name.toLowerCase();
      if (seenIds.has(lowerName)) continue;
      seenIds.add(lowerName);

      // dir.name has the EXACT case as stored on GitHub (e.g. 404-Page-Not-Found)
      const exactName = dir.name;
      const existing = INITIAL_PROJECTS.find((p) => p.name.toLowerCase() === lowerName);
      const cat = existing ? existing.category : inferCategory(exactName);

      mappedProjects.push({
        id: exactName,
        name: exactName,
        title: existing ? existing.title : formatTitle(exactName),
        category: cat,
        badge: existing ? existing.badge : inferBadge(exactName, cat),
        description: existing
          ? existing.description
          : `Interactive ${cat} project built as part of the CodeWizard repository.`,
        technologies: existing ? existing.technologies : inferTechnologies(exactName),
        files: existing?.files || getProjectCodeFiles(exactName),
        stars: existing ? existing.stars : Math.floor(Math.random() * 8) + 3,
        sourceUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/tree/main/${exactName}`,
        rawUrl: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/${exactName}/index.html`,
        liveUrl: `https://ronit-codewizard.github.io/CodeWizard/${exactName}/`,
        type: 'dir',
      });
    }

    return { projects: mappedProjects, stars: repoStars, forks: repoForks };
  } catch (error) {
    console.warn('GitHub API fetch fallback:', error);
    return { projects: INITIAL_PROJECTS, stars: 24, forks: 8 };
  }
}

