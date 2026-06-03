export type ProductItem = {
    slug: string;
    title: string;
    image: string;
    shortDescription: string;
    fullDescription: string;
    applications: string[];
    features: string[];
};

export const products: ProductItem[] = [
    {
        slug: 'universal-switch-controller-s1',
        title: 'Universal Switch Controller S1',
        image: '/images/product 1.jpeg',
        shortDescription: 'Control 9 electrical switches independently using a multifunction IR remote controller.',
        fullDescription:
            'A compact and reliable automation solution for homes, offices, shops, and small projects. It allows independent control of 9 electrical loads and supports multiple operating modes for practical day-to-day use.',
        applications: ['Homes', 'Offices', 'Shops', 'Automation projects'],
        features: ['Independent control of 9 loads', 'Multiple operating modes', 'Reliable IR-based operation'],
    },
    {
        slug: 'universal-switch-controller-s2',
        title: 'Universal Switch Controller S2',
        image: '/images/product 2.jpeg',
        shortDescription: 'Advanced switch automation system capable of controlling up to 21 switches from a single remote.',
        fullDescription:
            'Designed for larger spaces that need centralized and flexible control. S2 helps manage 21 loads from one remote, improving convenience and reducing wiring complexity.',
        applications: ['Large homes', 'Institutions', 'Commercial spaces', 'Offices'],
        features: ['Control up to 21 switches', 'Single remote operation', 'Enhanced flexibility for large setups'],
    },
    {
        slug: 'smartswitch',
        title: 'SmartSwitch',
        image: '/images/product 3.jpeg',
        shortDescription: 'IoT-enabled smart switch controller that allows appliance control from anywhere in the world using a mobile app.',
        fullDescription:
            'A connected, future-ready controller for smart homes and remote monitoring. It gives users real-time access to their devices with secure cloud-based control.',
        applications: ['Smart homes', 'Offices', 'Farms', 'Remote monitoring'],
        features: ['Mobile app control from anywhere', 'Real-time status monitoring', 'Secure cloud connectivity'],
    },
    {
        slug: 'pumpmaster5k',
        title: 'PumpMaster5K',
        image: '/images/product 4.jpeg',
        shortDescription: 'Long-range wireless motor controller built for agricultural and industrial applications.',
        fullDescription:
            'PumpMaster5K enables remote ON/OFF control of motors from up to 5 km away, making irrigation and industrial operations more efficient and less time-consuming.',
        applications: ['Agriculture', 'Industry', 'Water pumping', 'Remote motor control'],
        features: ['Up to 5 km range', 'Remote ON/OFF operation', 'Improved irrigation management'],
    },
    {
        slug: 'universal-switch-controller-mini',
        title: 'Universal Switch Controller S Mini',
        image: '/images/product 5.jpeg',
        shortDescription: 'Compact and affordable remote-based controller for up to 5 electrical switches.',
        fullDescription:
            'An easy-to-install solution for apartments, cabins, and small offices. It offers dependable wireless control with a compact footprint and user-friendly operation.',
        applications: ['Rooms', 'Apartments', 'Cabins', 'Small offices'],
        features: ['Supports up to 5 switches', 'Affordable and compact', 'Reliable IR-based control'],
    },
    {
        slug: 'motionlight',
        title: 'MotionLight',
        image: '/images/product 6.jpeg',
        shortDescription: 'PIR sensor-based motion controller that automates lighting for convenience and energy savings.',
        fullDescription:
            'MotionLight improves safety and cuts unnecessary power use by switching lights automatically when motion is detected and turning them off when the area is vacant.',
        applications: ['Corridors', 'Staircases', 'Parking areas', 'Washrooms'],
        features: ['Automatic light activation', 'Energy-saving operation', 'Motion-based convenience'],
    },
    {
        slug: 'sunsense',
        title: 'SunSense',
        image: '/images/product 7.jpeg',
        shortDescription: 'Smart day-night controller that operates lights based on ambient sunlight conditions.',
        fullDescription:
            'SunSense switches lighting on at dusk and off at sunrise, making it ideal for street lighting, outdoor security, and gardens without manual intervention.',
        applications: ['Street lights', 'Gardens', 'Security lights', 'Outdoor installations'],
        features: ['Automatic dusk-to-dawn control', 'Solar-aware operation', 'Low manual effort'],
    },
    {
        slug: 'leakguard',
        title: 'LeakGuard',
        image: '/images/product 8.jpeg',
        shortDescription: 'Intelligent electrical safety device that protects users from leakage current hazards in electric geysers.',
        fullDescription:
            'LeakGuard adds a strong safety layer for homes, hotels, hostels, and commercial buildings by disconnecting power when leakage current is detected.',
        applications: ['Homes', 'Hotels', 'Hostels', 'Commercial buildings'],
        features: ['Leakage current protection', 'Automatic power disconnect', 'Safer electrical operation'],
    },
];
