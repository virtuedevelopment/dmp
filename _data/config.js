const configurations = {
    // Site metadata and SEO
    metadata: {
        title: 'DMP COLLECTIONS ©',  // Site Title
        description: '',  // Site Description for SEO
        author: '',  // Author or maintainer of the site
        keywords: ["Suits", "Tuxedos"],  // Array of SEO keywords
        baseUrl: 'dmpcallections.ca',  // Base URL of the website
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
            { route: 'Home', url: '/', icon: '' },
            { route: 'About', url: '/about', icon: '' },
            { route: 'Catalog', url: '/catalog', icon: '' },
            { route: 'Contact', url: '/contact', icon: '' },
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
            { route: 'all', url: '/catalog', params: { category: 'all' } },
            { route: 'suits', url: '/catalog', params: { category: 'suits' } },
            { route: 'traditional', url: '/catalog', params: { category: 'traditional' } },
            { route: 'shirts', url: '/catalog', params: { category: 'shirts' } },
            { route: 'pants', url: '/catalog', params: { category: 'pants' } },
            { route: 'outwear', url: '/catalog', params: { category: 'coats' } },
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
