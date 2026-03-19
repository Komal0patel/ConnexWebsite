/**
 * =========================================================================
 * GLOBAL SITE NAVIGATION SYSTEM
 * =========================================================================
 * 
 * This is the SINGLE SOURCE OF TRUTH for all links on your website.
 * Change a link here, and it will update in:
 * - The Navbar
 * - The Footer
 * - Mobile Menus
 * - All Archive pages
 */

export const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Archive', href: '/products' },
    { name: 'Our Ethos', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
] as const;

export const SOCIAL_LINKS = [
    { name: 'Instagram', href: 'https://instagram.com/connex' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/connex' },
    { name: 'Pinterest', href: 'https://pinterest.com/connex' },
] as const;

export default { NAV_LINKS, SOCIAL_LINKS };
