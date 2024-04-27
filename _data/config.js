const configurations = {
    // Site metadata and SEO
    metadata: {
        title: 'Alden Suits © 1884',  // Site Title
        description: '',  // Site Description for SEO
        author: '',  // Author or maintainer of the site
        keywords: ["Suits", "Tuxedos"],  // Array of SEO keywords
        baseUrl: 'aldensuits.com',  // Base URL of the website
        defaultImage: '',  // Default image for SEO and sharing
        language: 'en',  // Primary language of the website
    },

    // Social media and contact information
    information: {
        email: '',  // Contact Email
        phoneNumber: '',  // Contact Phone Number
        address: '',  // Physical or Mailing Address
        socialLinks: [
            // Add social media profiles
            { social: 'Facebook', url: '', icon: '' },
            { social: 'Twitter', url: '', icon: '' },
            { social: 'Instagram', url: '', icon: '' },
            // More social links as needed
        ],
    },

    // Routing for various user roles
    routes: {
        mainRoutes: [
            { route: 'HOME', url: '/', icon: '' },
            { route: 'ABOUT', url: '/about', icon: '' },
            { route: 'LOCATIONS', url: '/locations', icon: '' },
            { route: 'CUSTOMIZE', url: '/customize', icon: '' },
            { route: 'CONTACT', url: '/contact', icon: '' },
            // More main routes
        ],
        authRoutes: [
            { route: 'Login', url: '/login', icon: '' },
            { route: 'Sign Up', url: '/signup', icon: '' },
            // More auth routes
        ],
        adminRoutes: [
            { route: 'Dashboard', url: '/admin/dashboard', icon: '' },
            // More admin routes
        ],
        catalogRoutes: [
            { route: 'SUITS', url: '/users/profile', params: {} },
            { route: 'PANTS', url: '/users/profile', params: {} },
            { route: 'SHOES', url: '/users/profile', params: {} },
            { route: 'OUTWEAR', url: '/users/profile', params: {} },
            { route: 'ACCESSORIES', url: '/users/profile', params: {} },
            // More user routes
        ],
    },

    // Backend configuration
    backend: {
        apiUrl: '',  // API Base URL
        apiKey: '',  // API Key if needed
        dbUrl: '',  // Database URL if different from API
        dbPassword: '',  // Database password if needed
    },

    // Terms of service and other legal links
    legal: {
        termsOfServiceUrl: '',  // URL to the terms of service
        privacyPolicyUrl: '',  // URL to the privacy policy
        copyrightNotice: '',  // Copyright notice text
    },

    // Optional: Categories and other lists used in the site
    categoryList: [
        { category: 'Example', sub_categories: ['Sub-example'] },
        // More categories
    ],
};

export default configurations;
